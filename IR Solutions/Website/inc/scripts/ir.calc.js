var currency = "GBp ";

$(function ()
{
    var stockData = null;

    requestClosePriceListingData.done(function (closePrices)
    {
        var transformedData = [];
        stockData = closePrices.data[0].data;

        $("#from-datepicker").datepicker("option", "minDate", new Date(stockData[0].date));
        $("#to-datepicker").datepicker("option", "minDate", new Date(stockData[0].date));

        transformedData = stockDataToChartData(stockData);

        $("#calc-chart").highcharts({
            colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
            chart: {
                alignTicks: true,
                borderWidth: 1,
                borderColor: clientStyle.chart_ColourBorder,
                backgroundColor: clientStyle.chart_ColourBackground,
                plotBackgroundColor: '#ffffff',
                marginRight: 70,
                marginLeft: 5,
                spacingTop: 5,
                marginBottom: 30,
                plotBorderWidth: 1,
                plotBorderColor: clientStyle.chart_ColourBorder,
                animation: {
                    duration: chartGlobalAnimationMS
                }
            },
            title: {
                text: ''
            },
            tooltip: {
                shadow: false,
                valueDecimals: chartTooltipDecimals,
                changeDecimals: 2,
                borderRadius: 0,
                borderWidth: 1,
                borderColor: '#aaa',
                shared: true,
                animation: true,
                backgroundColor: clientStyle.chart_ColourBackground,
                pointFormat: "<span style=\"color: inherit;\">{point.y:.2f}</span>"
            },
            xAxis: {
                alignTick: true,
                ordinal: false,
                lineWidth: 0,
                lineColor: clientStyle.chart_ColourBorder,
                tickLength: 0,
                gridLineWidth: 1,
                gridLineColor: '#eee',
                showFirstLabel: true,
                showLastLabel: false,
                startOnTick: false,
                endOnTick: false,
                showEmpty: false,
                type: 'datetime',
                tickPixelInterval: 70,
                labels: {
                    align: 'center',
                    overflow: 'false',
                    staggerLines: 1,
                    step: 2
                },
                dateTimeLabelFormats: {
                    second: '%Y-%m-%d %H:%M:%S',
                    minute: '%Y-%m-%d %H:%M',
                    hour: '%Y-%m-%d %H:%M',
                    day: '%Y-%m-%d',
                    week: '%Y-%m-%d',
                    month: '%Y-%m',
                    year: '%Y'
                }
            },
            yAxis: {
                lineWidth: 0,
                lineColor: clientStyle.chart_ColourBorder,
                gridLineWidth: 1,
                gridLineColor: '#eee',
                opposite: true,
                showFirstLabel: true,
                showLastLabel: false,
                startOnTick: true,
                endOnTick: true,
                tickPixelInterval: 35,
                labels: {
                    align: 'right',
                    x: 50,
                    y: 5,
                    formatter: function ()
                    {
                        return formatDecimal(this.value) + '';
                    }
                },
                title: {
                    text: null
                }
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
                data: transformedData,
                color: clientStyle.chart_ColourMain
            }]
        });

        $("#calc-chart").highcharts().xAxis[0].setExtremes(readFromDate(), readToDate());
    });

    function stockDataToChartData(stockData, _dateProperty, _priceProperty)
    {
        var transformedData = [],
            dateProperty = _dateProperty || "date",
            priceProperty = _priceProperty || "closePrice";

        for (var i = 0; i < stockData.length; i++) {
            transformedData.push([new Date(stockData[i][dateProperty]).getTime(), stockData[i][priceProperty]]);
        }

        return transformedData;
    }

    function readToDate()
    {
        var toDate = new Date();
        toDate.setDate($("#to-day").val());
        toDate.setMonth($("#to-month").val());
        toDate.setFullYear($("#to-year").val());

        return toDate;
    }

    function readFromDate()
    {
        var fromDate = new Date();
        fromDate.setDate($("#from-day").val());
        fromDate.setMonth($("#from-month").val());
        fromDate.setFullYear($("#from-year").val());

        return fromDate;
    }

    function readUnit()
    {
        return units.fromStringValue($("input[name=invested]:checked").val());
    }


    function getDaysInMonth(m, y)
    {
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if ((!(y % 4) && y % 100) || !(y % 400)) {
            daysInMonth[1] = 29;
        }
        return daysInMonth[--m];
    }

    function setFromDateSelects(date)
    {
        if (!date) return;

        $("#from-day").val(date.getDate());
        $("#from-month").val(date.getMonth());
        $("#from-year").val(date.getFullYear());
    }

    function setToDateSelects(date)
    {
        if (!date) return;

        $("#to-day").val(date.getDate());
        $("#to-month").val(date.getMonth());
        $("#to-year").val(date.getFullYear());
    }

    function swapDatepickerDates()
    {
        var fromDate = $("#from-datepicker").datepicker("getDate"),
            toDate = $("#to-datepicker").datepicker("getDate");

        $("#from-datepicker").datepicker("setDate", toDate);
        $("#to-datepicker").datepicker("setDate", fromDate);
    }

    function swapSelectDates()
    {
        var fromDate = readFromDate(),
            toDate = readToDate();

        setFromDateSelects(toDate);
        setToDateSelects(fromDate);

        var toMonth = $("#to-month").val(),
            toYear = $("#to-year").val(),
            toDay = $("#to-day").val();
    }

    function restrictSelectDates(earliest)
    {
        var dateControls = [{ reader: readFromDate, setter: setFromDateSelects }, { reader: readToDate, setter: setToDateSelects }],
            now = new Date();

        for (var i = 0; i < dateControls.length; i++) {
            var date = dateControls[i].reader();
            if (date > now) {
                dateControls[i].setter(now);
            } else if (earliest && date < earliest) {
                dateControls[i].setter(earliest);
            }
        }
    }

    function dateSelectChangeHandler()
    {
        var fromMonth = parseInt($("#from-month").val(), 10) + 1,
            fromYear = parseInt($("#from-year").val(), 10),
            fromDay = parseInt($("#from-day").val(), 10),
            validFromDay = Math.min(getDaysInMonth(fromMonth, fromYear), fromDay);

        var toMonth = parseInt($("#to-month").val(), 10) + 1,
            toYear = parseInt($("#to-year").val(), 10),
            toDay = parseInt($("#to-day").val(), 10),
            validToDay = Math.min(getDaysInMonth(toMonth, toYear), toDay);

        if (fromDay !== validFromDay) $("#from-day").val(validFromDay);
        if (toDay !== validToDay) $("#to-day").val(validToDay);
        if (readToDate() < readFromDate()) swapSelectDates();

        restrictSelectDates();

        $("#from-datepicker").datepicker("setDate", readFromDate());
        $("#to-datepicker").datepicker("setDate", readToDate());
    }

    function datePickerChangeHandler()
    {
        var fromDate = $("#from-datepicker").datepicker("getDate"),
            toDate = $("#to-datepicker").datepicker("getDate");

        if (toDate < fromDate) swapDatepickerDates();

        setFromDateSelects($("#from-datepicker").datepicker("getDate"));
        setToDateSelects($("#to-datepicker").datepicker("getDate"));
    }

    function submit()
    {
        var results = calculate();
        $(".buy-price-cell").text(currency + results.buyStockPrice.toFixed(2));
        $(".est-shares-cell").text(results.shares.toFixed(2));
        $(".sell-price-cell").text(currency + results.sellStockPrice.toFixed(2));
        $(".value-now-cell").text(currency + results.sellValue.toFixed(2));
        $(".yield-cell").text(results.percentReturn.toFixed(2) + "%");

        var highchart = $("#calc-chart").highcharts(),
            newData = stockDataToChartData(results.returnData, "date", "investmentReturn");

        highchart.series[0].setData(newData);
        highchart.xAxis[0].setExtremes(readFromDate(), readToDate());
        return false;
    }

    var units = {
        SHARES: "shares",
        AMOUNT: "amount",
        fromStringValue: function (stringValue)
        {
            return _.find(units, function (unit)
            {
                return (unit === stringValue);
            }) || null;
        }
    }

    var comparisons = {
        SAME: "same",
        BEFORE: "before",
        AFTER: "after"
    }

    function compareDates(dateToTest, compareToDate)
    {
        var _dateToTest = new Date(dateToTest.getTime()).setHours(0, 0, 0, 0),
            _compareToDate = new Date(compareToDate.getTime()).setHours(0, 0, 0, 0);

        if (_dateToTest === _compareToDate) {
            return comparisons.SAME;
        }

        return (dateToTest < compareToDate) ? comparisons.BEFORE : comparisons.AFTER;
    }

    function getIndexThatBestMatchesDate(array, key, pickedDate)
    {
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

    function calculateReturnWithReinvestDividend(dividendData, stockData, shares)
    {
        return _.map(stockData, function (stockDataEntry)
        {
            _.each(dividendData, function (dividendDataEntry)
            {
                if (euroInvestor.dateUtils.compareDates(new Date(dividendDataEntry.date), new Date(stockDataEntry.date)) === euroInvestor.dateUtils.comparisons.SAME) {
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

    function calculateReturnWithCashDividend(dividendData, stockData, investmentDate, shares)
    {
        return _.map(stockData, function (stockDataEntry)
        {
            var dividendReturns = _.map(dividendData, function (dividendDataEntry)
            {
                if (euroInvestor.dateUtils.compareDates(new Date(dividendDataEntry.date), investmentDate) === euroInvestor.dateUtils.comparisons.AFTER &&
                    euroInvestor.dateUtils.compareDates(new Date(dividendDataEntry.date), new Date(stockDataEntry.date)) !== euroInvestor.dateUtils.comparisons.AFTER) {
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

    function calculateReturnWithoutDividend(stockData, shares)
    {
        return _.map(stockData, function (stockDataEntry)
        {
            return {
                date: stockDataEntry.date,
                investmentReturn: stockDataEntry.closePrice * shares
            };
        });
    }

    function calculateReturn(stockData, dividendData, investmentDate, shares)
    {
        var dividend = $("#dividend").val();

        switch (dividend) {
            case "cash":
                return calculateReturnWithCashDividend(dividendData, stockData, investmentDate, shares);
                break;
            case "reinvest":
                return calculateReturnWithReinvestDividend(dividendData, stockData, shares);
                break;
            case "none":
            default:
                return calculateReturnWithoutDividend(stockData, shares);
                break;
        }
    }

    function calculate()
    {
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

            results.investmentDate = fromDate;
            results.buyStockPrice = buyStockPrice;
            results.sellStockPrice = sellStockPrice;
            results.shares = (unit === units.SHARES) ? amountInvested : amountInvested / buyStockPrice;
            results.buyValue = (unit === units.SHARES) ? results.shares * buyStockPrice : amountInvested;
            results.returnData = calculateReturn(stockData, null, fromDate, results.shares);
            results.sellValue = results.returnData[endIndex].investmentReturn;
            results.percentReturn = (results.sellValue / results.buyValue) * 100;
        }

        return results;
    }

    function initializeCalc()
    {
        var calcTemplate = $('#IRCalcTemplate').html();
        compiledIRCalcTemplate = Handlebars.compile(calcTemplate);
        $(".IRCalcModule").html(compiledIRCalcTemplate(defaultTranslations));
        $("#currency-symbol").text(currency);

        $('input[name=invested]:radio').on("change", function ()
        {
            if (readUnit().toLowerCase() === "amount") {
                $("#currency-symbol").show();
            } else {
                $("#currency-symbol").hide();
            }
        });

        var toDate = new Date();
        var fromDate = new Date();
        fromDate.setFullYear((new Date()).getFullYear() - 1);
        setFromDateSelects(fromDate);

        setToDateSelects(toDate);
        $(".date-select").on("change", dateSelectChangeHandler);
        $("#from-datepicker").datepicker({ showOn: "button", buttonImage: "http://ir.euroinvestor.com/inc/images/icons/calendar.png", buttonImageOnly: true, onSelect: datePickerChangeHandler, defaultDate: fromDate, maxDate: new Date() });
        $("#to-datepicker").datepicker({ showOn: "button", buttonImage: "http://ir.euroinvestor.com/inc/images/icons/calendar.png", buttonImageOnly: true, onSelect: datePickerChangeHandler, defaultDate: toDate, maxDate: new Date() });
        $("#calc-form").on("submit", submit);


    }

    initializeCalc();
});

