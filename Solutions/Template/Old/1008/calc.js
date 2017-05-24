(function () {
    var stockData = null;
    
    $.ajax("http://localhost:1337/ServiceEngine/api/json/reply/RequestClosePriceBundle_C", {
        method: "GET",
        traditional: true,
        data: {
            apiVersion: 1,
            lcid: 1033,
            solutionID: 1008,
            numberOfYears: 10,
            instrumentTypes: ["Listing"]
        }
    }).done(function (closePrices) {
        var transformedData = [];
        stockData = closePrices.data[0].data;
        
        transformedData = stockDataToChartData(stockData);

        console.log("Original data: ", transformedData);
        $("#calc-chart").highcharts({
            title: {
                text: ''
            },
            xAxis: {
                tickPixelInterval: 70,
                type: 'datetime',
                labels: {
                    formatter: function () {
                        return Highcharts.dateFormat('%d %b', this.value);
                    }
                }
            },
            yAxis: {
                opposite: true,
                tickPixelInterval: 35,
                labels: {
                    formatter: function () {
                        return "$" + this.value;
                    }
                },
                title: {
                    text: null
                }
            },
            tooltip: {
                valueSuffix: '$'
            },
            plotOptions: {
                series: {
                    animation: {
                        duration: 1
                    },
                    dataGrouping: {
                        smoothed: false,
                        groupPixelWidth: 10,
                        units: [[
                            'day', [1]],
                            ['week', [1]],
                            ['month', [1]],
                            ['year', [1]
                            ]],
                        smoothed: true
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                showInLegend: false,
                name: 'Share Price',
                data: transformedData
            }]
        });
    });
    
    function stockDataToChartData(stockData, _dateProperty, _priceProperty) {
        var transformedData = [],
            dateProperty = _dateProperty || "date",
            priceProperty = _priceProperty || "closePrice";

        for (var i = 0; i < stockData.length; i++) {
            transformedData.push([new Date(stockData[i][dateProperty]).getTime(), stockData[i][priceProperty]]);
        }

        return transformedData;
    }

    function readToDate() {
        var toDate = new Date();
        toDate.setDate($("#to-day").val());
        toDate.setMonth($("#to-month").val());
        toDate.setFullYear($("#to-year").val());

        return toDate;
    }

    function readFromDate() {
        var fromDate = new Date();
        fromDate.setDate($("#from-day").val());
        fromDate.setMonth($("#from-month").val());
        fromDate.setFullYear($("#from-year").val());

        return fromDate;
    }

    /**
     * Read the currently selected unit (i.e. shares or amount)
     *
     * @return {units}  Either units.SHARES or units.AMOUNT
     */
    function readUnit() {
        return units.fromStringValue($("input[name=invested]:checked").val());
    }

    function initializeCalc() {
        var toDate = new Date();
        var fromDate = new Date();
        fromDate.setFullYear((new Date()).getFullYear() - 1);

        $("#from-day").val(fromDate.getDate());
        $("#from-month").val(fromDate.getMonth());
        $("#from-year").val(fromDate.getFullYear());

        $("#to-day").val(toDate.getDate());
        $("#to-month").val(toDate.getMonth());
        $("#to-year").val(toDate.getFullYear());

        $("#from-datepicker").datepicker({showOn: "button"});
        $("#to-datepicker").datepicker({showOn: "button"});

        $("#lookup-form").on("submit", function () {
            var results = calculate();
            $("#buy-price-cell").text("$" + results.buyStockPrice.toFixed(2));
            $("#est-shares-cell").text(results.shares.toFixed(2));
            $("#sell-price-cell").text("$" + results.sellStockPrice.toFixed(2));
            $("#value-now-cell").text("$" + results.sellValue.toFixed(2));
            $("#yield-cell").text(results.percentReturn.toFixed(2) + "%");

            var highchart = $("#calc-chart").highcharts(),
                newData = stockDataToChartData(results.returnData, "date", "investmentReturn");

            highchart.series[0].setData(newData);
            highchart.xAxis[0].setExtremes(readFromDate(), readToDate());
            return false;
        });
    }

    /**
     * Simple enumeration of the supported trs types (Total Shareholder Return), i.e none, cash or reinvest.
     */
    var tsrTypes = {
        NONE: {
            id: "none",
            displayString: "Off"
        },
        CASH: {
            id: "cash",
            displayString: "Cash"
        },
        REINVEST: {
            id: "reinvest",
            displayString: "Reinvest"
        },
        fromStringValue: function (stringValue) {
            return _.find(tsrTypes, function (type) {
                return (type.id === stringValue);
            }) || null;
        }
    };

    /**
     * Simple enumeration of the supported units for the invested values, i.e amount (currency) and shares (number of shares).
     */
    var units = {
        SHARES: "shares",
        AMOUNT: "amount",
        fromStringValue: function (stringValue) {
            return _.find(units, function (unit) {
                return (unit === stringValue);
            }) || null;
        }
    }

    /*
     * Enumeration of how a date can relate to another.
     */
    var comparisons = {
        SAME: "same",
        BEFORE: "before",
        AFTER: "after"
    }

    /**
     * Determines one date relates to another (is the same, before or after)
     *
     * @param {Date} dateToTest     The date to test
     * @param {Date} compareToDate  The date to compare against
     *
     * @return {comparison} How the dateToTest relates to the compareToDate (either comparison.SAME, comparison.BEFORE, or comparison.AFTER).
     */
    function compareDates(dateToTest, compareToDate) {
        var _dateToTest = new Date(dateToTest.getTime()).setHours(0, 0, 0, 0),
            _compareToDate = new Date(compareToDate.getTime()).setHours(0, 0, 0, 0);

        if (_dateToTest === _compareToDate) {
            return comparisons.SAME;
        }

        return (dateToTest < compareToDate) ? comparisons.BEFORE : comparisons.AFTER;
    }

    /**
     * Given an array of objects, and the name of the property that holds the date for each object this function does a binary search for the index of the object, 
     * whose date most closely matches the given pickedDate. Note that it is assumed that the arrayed is sorted in ascending order, according to the date property!
     *
     * @param {[Objects]} array     Array of javascript objects. Each must have a property with the name of the "key" param value, containing a Date object.
     *                              Furthermore the array must be sorted in ascending order, according to this property.
     * @param {String} key          The name of the object property that holds the Date object.
     * @param {Date} pickedDate     The date whose closest match will be searched for.
     *
     * @return {Number} The index of the object whose date object is closest to the pickedDate.
     */
    function getIndexThatBestMatchesDate(array, key, pickedDate) {
        var minIndex = 0;
        var maxIndex = array.length - 1;
        var currentIndex;
        var currentElement;


        while (minIndex <= maxIndex) {
            currentIndex = (minIndex + maxIndex) / 2 | 0;
            currentElement = array[currentIndex];

            var comparison = compareDates(new Date(currentElement[key]), pickedDate);

            if (comparison === comparisons.BEFORE) {
                minIndex = currentIndex + 1;
            }
            else if (comparison === comparisons.AFTER) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }

        return currentIndex;
    }

    /**
    * Calculates the total shareholder return of an investment including cash dividends.
    *
    * @param {[Object]} dividendData  The dividend data.
    * @param {[Object]} stockData     The closeprice data for the stock.
    * @param {Date} investmentDate    The investmentDate.
    * @param {number} shares          The number of shares.
    *
    * @return {[Object]}              Total shareholder return of investment for each date represented in the given stockData array.
    */
    function calculateReturnWithCashDividend(dividendData, stockData, investmentDate, shares) {
        return _.map(stockData, function (stockDataEntry) {
            var dividendReturns = _.map(dividendData, function (dividendDataEntry) {
                if (compareDates(new Date(dividendDataEntry.date), investmentDate) === comparisons.AFTER &&
                    compareDates(new Date(dividendDataEntry.date), new Date(stockDataEntry.date)) !== comparisons.AFTER) {
                    return dividendDataEntry.dividend * shares;
                }

                return 0;
            });

            var totalDividend = _.reduce(dividendReturns, function (memo, num) { return memo + num; }, 0);

            return {
                date: stockDataEntry.date,
                investmentReturn: stockDataEntry.closePrice * shares + totalDividend
            }
        });
    }

    /**
     * Calculates the total shareholder return of an investment including dividends used for reinvestment.
     *
     * @param {[Object]} dividendData  The dividend data.
     * @param {[Object]} stockData     The closeprice data for the stock.
     * @param {number} shares          The number of shares.
     *
     * @return {[Object]}               Total shareholder return of investment for each date represented in the given stockData array.
     */
    function calculateReturnWithReinvestDividend(dividendData, stockData, shares) {
        return _.map(stockData, function (stockDataEntry) {
            _.each(dividendData, function (dividendDataEntry) {
                if (compareDates(new Date(dividendDataEntry.date), new Date(stockDataEntry.date)) === comparisons.SAME) {
                    var payout = dividendDataEntry.dividend * shares;
                    shares += payout / stockDataEntry.closePrice;
                }
            });

            return {
                date: stockDataEntry.date,
                investmentReturn: stockDataEntry.closePrice * shares
            }
        });
    }

    /**
     * Calculates the return of an investment without taking dividends into account.
     *
     * @param {[Object]} stockData     The closeprice data for the stock.
     * @param {number} shares          The number of shares.
     *
     * @return {[Object]}               Total shareholder return of investment for each date represented in the given stockData array.
     */
    function calculateReturnWithoutDividend(stockData, shares) {
        return _.map(stockData, function (stockDataEntry) {
            return {
                date: stockDataEntry.date,
                investmentReturn: stockDataEntry.closePrice * shares
            }
        });
    }

    function calculate() {
        var amountInvested = parseInt($("#amount-invested").val(), 10),
            unit = readUnit(),
            fromDate = readFromDate(),
            toDate = readToDate(),
            results = {};

        if (amountInvested && stockData) {   
            var startIndex = getIndexThatBestMatchesDate(stockData, "date", new Date(fromDate)),
                endIndex = getIndexThatBestMatchesDate(stockData, "date", new Date(toDate)),
                buyStockPrice = stockData[startIndex].closePrice,
                sellStockPrice = stockData[endIndex].closePrice;

            //results.data = stockData.slice(startIndex);
            results.investmentDate = fromDate;
            results.buyStockPrice = buyStockPrice;
            results.sellStockPrice = sellStockPrice;
            results.shares = (unit === units.SHARES) ? amountInvested : amountInvested / buyStockPrice;
            results.buyValue = (unit === units.SHARES) ? results.shares * buyStockPrice : amountInvested;
            results.returnData = calculateReturnWithoutDividend(stockData, results.shares);
            results.sellValue = results.returnData[endIndex].investmentReturn;
            results.percentReturn = (results.sellValue / results.buyValue) * 100;
        }

        return results;
    }

    initializeCalc();
}());