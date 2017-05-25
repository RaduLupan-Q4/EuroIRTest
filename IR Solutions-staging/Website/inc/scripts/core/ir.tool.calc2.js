var globalIRCalcRawClosePriceData = null;
var globalIRCalcChartData = null;
var globalIRCalcChartRawData = null;

var IRCalc = {

    fromDate: null,
    toDate: null,
    closePriceData: null,
    globalIRCalcEarlyDate: null,
    globalIRCalcLateDate: null,
    globalIRCalcCurrency: null,
    units: {
        SHARES: "shares",
        AMOUNT: "amount"
    },
    unitFromStringValue: function (stringValue) {
        return _.find(IRCalc.units, function (unit) {
            return (unit === stringValue);
        }) || null;
    },
    dateComparisons: {
        SAME: "same",
        BEFORE: "before",
        AFTER: "after"
    },

    initTemplate: function () {
        debugStep('IRCalc.initTemplate');
        var calcTemplate = $('#IRCalcTemplate').html();
        var compiledIRCalcTemplate = Handlebars.compile(calcTemplate);
        $(".IRCalcModule").html(compiledIRCalcTemplate(translations));
    },

    initControls: function () {
        debugStep('IRCalc.initControls');

        IRCalc.toDate = this.getToDate();
        var todayM = new moment.tz(new moment(), globalActiveExchangeTimeZone);
        if (todayM.diff(this.getFromDate(), 'year') == 0) {
            IRCalc.fromDate = this.getFromDate(); // first closePrice is within the year
        } else {
            IRCalc.fromDate = new moment.tz(IRCalc.toDate, globalActiveExchangeTimeZone).subtract(1, 'y');
            IRCalc.setFromDateSelects(IRCalc.fromDate);
        }
        IRCalc.setToDateSelects(IRCalc.toDate);
        IRCalc.globalIRCalcLateDate = this.getToDate();

        $(".date-select").on("change", IRCalc.dateSelectChangeHandler);

        $('input[name=invested]:radio').on("change", function () {
            if (IRCalc.getUnit().toLowerCase() === "amount") {
                $("#currency-symbol").show();
            } else {
                $("#currency-symbol").hide();
            }
        });

        $("#from-datepicker").datepicker({
            showOn: "button",
            buttonImage: getImagePath() + "icons/calendar.png",
            buttonImageOnly: true,
            onSelect: IRCalc.datePickerChangeHandler,
            defaultDate: IRCalc.fromDate._d,
            minDate: IRCalc.globalIRCalcEarlyDate._d,
            maxDate: new moment()._d
        });
        $("#to-datepicker").datepicker({
            showOn: "button",
            buttonImage: getImagePath() + "icons/calendar.png",
            buttonImageOnly: true,
            onSelect: IRCalc.datePickerChangeHandler,
            defaultDate: IRCalc.toDate._d,
            minDate: IRCalc.globalIRCalcEarlyDate._d,
            maxDate: new moment()._d
        });

        $("#from-datepicker").datepicker("setDate", IRCalc.getFromDate()._d);
        $("#to-datepicker").datepicker("setDate", IRCalc.getToDate()._d);

        $("#calculate-button").on("click", IRCalc.submit);

    },

    initChart: function () {
        debugStep('IRCalc.initChart');
        var transformedData = [];
        var transformedDataAll = [];
        for (var i = 0; i < globalIRCalcRawClosePriceData.length; i++) {
            var unixTimestamp = new moment.tz(globalIRCalcRawClosePriceData[i].date, globalActiveExchangeTimeZone).valueOf();
            var closePrice = globalIRCalcRawClosePriceData[i].closePrice;
            if (unixTimestamp > this.fromDate.valueOf() && unixTimestamp < this.toDate.valueOf()) {
                transformedData.push([unixTimestamp, closePrice]);
            }
            transformedDataAll.push([unixTimestamp, closePrice]);
        }
        globalIRCalcChartData = transformedData;
    },

    drawChart: function () {
        debugStep('IRCalc.drawChart');
        $(globalChartContainer).highcharts({
            colors: globalChartColours,
            chart: {
                alignTicks: true,
                panning: false,
                backgroundColor: 'white',
                borderWidth: 0,
                borderColor: '#fff',
                plotBorderWidth: 1,
                plotBorderColor: '#eeeeee',
                marginRight: 50,
                marginLeft: 5,
                spacingTop: 5,
                spacingBottom: 5,
                spacingRight: 5,
                animation: {
                    duration: globalChartAnimationMS
                }
            },
            credits: {
                enabled: false
            },
            xAxis: {
                ordinal: true,
                lineColor: '#eeeeee',
                gridLineWidth: 1,
                gridLineColor: '#eeeeee',
                tickPixelInterval: 100,
                tickLength: 0,
                type: 'datetime',
                offset: 0,
                dateTimeLabelFormats: getChartDateTimeLabelFormatsLookupCalc(),
                showFirstLabel: false,
                showLastLabel: false,
                startOnTick: true,
                endOnTick: true,
                labels: {
                    staggerLines: 1,
                    step: 2
                },
                maxZoom: 1
            },
            yAxis: {
                lineWidth: 0,
                lineColor: '#eeeeee',
                gridLineWidth: 1,
                gridLineColor: '#eeeeee',
                tickPixelInterval: 35,
                opposite: true,
                startOnTick: true,
                endOnTick: true,
                useHTML: true,
                showFirstLabel: true,
                showLastLabel: false,
                offset: 0,
                labels: {
                    align: 'left',
                    x: 5,
                    y: -5,
                    useHTML: true,
                    formatter: function () {
                        //return formatDecimal(this.value) + '';
                        return '<div>' + formatDecimal(this.value) + '</div><div class="dummyWhiteBox"></div>';
                    }
                },
                title: {
                    text: ''
                }
            },
            title: {
                text: ''
            },
            tooltip: {
                shadow: false,
                valueDecimals: clientStyle.amountOfDecimals,
                changeDecimals: 2,
                borderRadius: 0,
                borderWidth: 0,
                shared: true,
                useHTML: true,
                backgroundColor: 'rgba(255,255,255,0)',
                formatter: function () {
                    var unixDateTime = new moment.tz(Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x) + '.0000000Z', globalActiveExchangeTimeZone).valueOf();
                    return updateTooltipCalc(unixDateTime);
                },
                positioner: function (boxWidth, boxHeight, point) {
                    var chartWidth = $(globalChartContainer).width();
                    var plotX = point.plotX + 30;

                    if (plotX > chartWidth - boxWidth - 50) {
                        plotX = plotX - boxWidth - 40;
                    }
                    return { x: plotX, y: boxHeight };
                }
            },
            plotOptions: {
                series: {
                    animation: {
                        duration: 1
                    },
                    dataGrouping: {
                        groupPixelWidth: 10,
                        units: [[
                            'day', [1]],
                            ['week', [1]],
                            ['month', [1]],
                            ['year', [1]
                            ]],
                        smoothed: true
                    },
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                showInLegend: false,
                data: globalIRCalcChartData,
                color: clientStyle.chart_ColourMain
            }]
        });
        
    },

    cropChart: function () {
        debugStep('IRCalc.cropChart');
        $(globalChartContainer).highcharts().xAxis[0].setExtremes(IRCalc.fromDate._d, IRCalc.toDate._d);
    },

    getFromDate: function () {
        debugStep("IRCalc.getFromDate");
        var d = parseInt($("#from-day").val());
        var m = parseInt($("#from-month").val()) + 1;
        var y = parseInt($("#from-year").val());
        if (parseInt(d) < 10) {
            d = 0 + '' + d;
        }
        if (parseInt(m) < 10) {
            m = 0 + '' + m;
        }
        var date = new moment.tz(y + '-' + m + '-' + d, 'YYYY-MM-DD', globalActiveExchangeTimeZone);
        return date;
    },

    getToDate: function () {
        debugStep("IRCalc.getToDate");
        var d = parseInt($("#to-day").val());
        var m = parseInt($("#to-month").val()) + 1;
        var y = parseInt($("#to-year").val());
        if (parseInt(d) < 10) {
            d = 0 + '' + d;
        }
        if (parseInt(m) < 10) {
            m = 0 + '' + m;
        }
        var date = new moment.tz(y + '-' + m + '-' + d, 'YYYY-MM-DD', globalActiveExchangeTimeZone);
        return date;
    },

    getDaysInMonth: function (m, y) {
        debugStep("IRCalc.getDaysInMonth");
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if ((!(y % 4) && y % 100) || !(y % 400)) {
            daysInMonth[1] = 29;
        }
        return daysInMonth[--m];
    },

    getUnit: function () {
        debugStep('IRCalc.getUnit');
        return IRCalc.unitFromStringValue($("input[name=invested]:checked").val());
    },

    setFromDateSelects: function (date) {
        debugStep("IRCalc.setFromDateSelects");
        if (!date) return;

        var d = parseInt(date.format("DD"));
        var m = parseInt(date.format("MM")) - 1;
        var y = parseInt(date.format("YYYY"));

        $("#from-day").val(d);
        $("#from-month").val(m);
        $("#from-year").val(y);
    },

    setToDateSelects: function (date) {
        debugStep("IRCalc.setToDateSelects");
        if (!date) return;

        var d = parseInt(date.format("DD"));
        var m = parseInt(date.format("MM")) - 1;
        var y = parseInt(date.format("YYYY"));

        $("#to-day").val(d);
        $("#to-month").val(m);
        $("#to-year").val(y);
    },

    dateSelectChangeHandler: function () {
        debugStep("IRCalc.dateSelectChangeHandler");

        var fromYear = parseInt($("#from-year").val(), 10);
        var fromMonth = parseInt($("#from-month").val(), 10) + 1;
        var fromDay = parseInt($("#from-day").val(), 10);
        var validFromDay = Math.min(IRCalc.getDaysInMonth(fromMonth, fromYear), fromDay);

        var toYear = parseInt($("#to-year").val(), 10);
        var toMonth = parseInt($("#to-month").val(), 10) + 1;
        var toDay = parseInt($("#to-day").val(), 10);
        var validToDay = Math.min(IRCalc.getDaysInMonth(toMonth, toYear), toDay);

        if (fromDay !== validFromDay) $("#from-day").val(validFromDay);
        if (toDay !== validToDay) $("#to-day").val(validToDay);

        IRCalc.fromDate = new moment.tz(fromYear + '-' + fromMonth + '-' + fromDay, 'YYYY-MM-DD', globalActiveExchangeTimeZone);
        IRCalc.toDate = new moment.tz(toYear + '-' + toMonth + '-' + toDay, 'YYYY-MM-DD', globalActiveExchangeTimeZone);

        if (IRCalc.toDate.diff(IRCalc.fromDate, 'days') < 0) {
            IRCalc.swapSelectDates();
        }

        IRCalc.restrictSelectDates();

        $("#from-datepicker").datepicker("setDate", IRCalc.getFromDate()._d);
        $("#to-datepicker").datepicker("setDate", IRCalc.getToDate()._d);


    },

    datePickerChangeHandler: function () {

        debugStep("IRLookup.datePickerChangeHandler");

        var fromDate = new moment($("#from-datepicker").datepicker("getDate"));
        var toDate = new moment($("#to-datepicker").datepicker("getDate"));

        if (toDate < fromDate) {
            IRCalc.swapDatepickerDates();
            IRCalc.setFromDateSelects(toDate);
            IRCalc.setToDateSelects(fromDate);
        } else {
            IRCalc.setFromDateSelects(fromDate);
            IRCalc.setToDateSelects(toDate);
        }

        IRCalc.fromDate = fromDate;
        IRCalc.toDate = toDate;

    },

    getIndexThatBestMatchesDate: function (array, key, pickedDate) {
        var minIndex = 0;
        var maxIndex = array.length - 1;
        var currentIndex;
        var currentElement;


        while (minIndex <= maxIndex) {
            currentIndex = (minIndex + maxIndex) / 2 | 0;
            currentElement = array[currentIndex];

            var comparison = IRCalc.compareDates(new Date(currentElement[key]), pickedDate);

            if (comparison === IRCalc.dateComparisons.BEFORE) {
                minIndex = currentIndex + 1;
            }
            else if (comparison === IRCalc.dateComparisons.AFTER) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }

        return currentIndex;
    },

    compareDates: function (dateToTest, compareToDate) {
        debugStep("IRCalc.compareDates");
        var _dateToTest = new moment(new moment(dateToTest).format("YYYY-MM-DD")).valueOf();
        var _compareToDate = new moment(new moment(compareToDate).format("YYYY-MM-DD")).valueOf();

        if (_dateToTest === _compareToDate) {
            return IRCalc.dateComparisons.SAME;
        }

        return (dateToTest < compareToDate) ? IRCalc.dateComparisons.BEFORE : IRCalc.dateComparisons.AFTER;
    },

    submit: function () {

        debugStep('IRCalc.submit');

        IRCalc.globalIRCalcCurrency = getActiveCurrency();

        // Todo currency conversion

        IRCalc.calc();
        return false;
    },

    calc: function () {
        debugStep('IRCalc.calc');

        IRCalc.fromDate = IRCalc.getFromDate();
        IRCalc.toDate = IRCalc.getToDate();

        if (IRCalc.toDate.diff(IRCalc.fromDate, 'days') < 0) {
            IRCalc.swapSelectDates();
        }

        IRCalc.restrictSelectDates(); // JRJR

        IRCalc.initChart();
        IRCalc.drawChart();
        IRCalc.cropChart();

        IRCalc.validateInput();
    },

    swapSelectDates: function () {
        debugStep("IRCalc.swapSelectDates");

        var tmpFromDate = IRCalc.fromDate;
        IRCalc.fromDate = IRCalc.toDate;
        IRCalc.toDate = tmpFromDate;

        IRCalc.setFromDateSelects(IRCalc.fromDate);
        IRCalc.setToDateSelects(IRCalc.toDate);
    },

    swapDatepickerDates: function () {
        debugStep("IRCalc.swapDatepickerDates");
        var fromDate = $("#from-datepicker").datepicker("getDate");
        var toDate = $("#to-datepicker").datepicker("getDate");

        $("#from-datepicker").datepicker("setDate", toDate);
        $("#to-datepicker").datepicker("setDate", fromDate);
    },

    restrictSelectDates: function () {
        debugStep("IRCalc.restrictSelectDates");

        if (IRCalc.getFromDate().diff(IRCalc.globalIRCalcEarlyDate, 'days') < 0) {
            IRCalc.fromDate = IRCalc.globalIRCalcEarlyDate;
            debugStep("restricting fromDate");
            IRCalc.setFromDateSelects(IRCalc.fromDate);
        }
        if (IRCalc.getToDate().diff(IRCalc.globalIRCalcLateDate, 'days') > 0) {
            IRCalc.toDate = IRCalc.globalIRCalcLateDate;
            debugStep("restricting ToDate");
            IRCalc.setToDateSelects(IRCalc.toDate);
        }

    },

    validateInput: function () {
        debugStep('IRCalc.validateInputAndCalculate');

        var amountInvested = parseFloat($("#amount-invested").val(), 10);
        var unit = IRCalc.getUnit();

        if (amountInvested > 0 && amountInvested.toString() != 'NaN') {
            IRCalc.calculate(amountInvested, unit);
        } else {
            IRCalc.setResultsAsNoData();
        }

    },

    setResultsAsNoData: function () {
        $(".buy-price-cell").text("-");
        $(".est-shares-cell").text("-");
        $(".sell-price-cell").text("-");
        $(".value-now-cell").text("-");
        $(".yield-cell").text("-");
    },

    calculate: function (amountInvested, unit) {
        debugStep('IRCalc.calculate');

        var results = {};

        var startIndex = IRCalc.getIndexThatBestMatchesDate(globalIRCalcRawClosePriceData, "date", IRCalc.fromDate._d);
        var endIndex = IRCalc.getIndexThatBestMatchesDate(globalIRCalcRawClosePriceData, "date", IRCalc.toDate._d);

        var buyStockPrice = parseFloat(globalIRCalcRawClosePriceData[startIndex].closePrice);
        var sellStockPrice = parseFloat(globalIRCalcRawClosePriceData[endIndex].closePrice);

        results.investmentDate = IRCalc.fromDate;
        results.sellDate = IRCalc.toDate;
        results.buyStockPrice = parseFloat(buyStockPrice);
        results.sellStockPrice = parseFloat(sellStockPrice);
        results.shares = (unit === IRCalc.units.SHARES) ? amountInvested : amountInvested / buyStockPrice;
        results.buyValue = (unit === IRCalc.units.SHARES) ? results.shares * buyStockPrice : amountInvested;
        results.valueOfHoldingData = IRCalc.calculateValueOfHolding(globalIRCalcRawClosePriceData, null, IRCalc.fromDate, results.shares);
        results.sellValue = results.valueOfHoldingData[endIndex].valueOfHolding;
        results.percentReturn = ((results.sellValue - results.buyValue) / results.buyValue) * 100;
        
        if (typeof (results.buyStockPrice) == 'undefined' || startIndex == endIndex) {
            IRCalc.setResultsAsNoData();
        } else {
            IRCalc.outputResults(results);
        }

    },

    outputResults: function (results) {
        debugStep('IRCalc.calculate');

        $(".start-date-cell").text(results.investmentDate.format(clientStyle.formatDate));
        $(".end-date-cell").text(results.sellDate.format(clientStyle.formatDate));
        $(".buy-price-cell").text(IRCalc.globalIRCalcCurrency + ' ' + formatDecimal(results.buyStockPrice));
        $(".buy-value-cell").text(IRCalc.globalIRCalcCurrency + ' ' + formatDecimal(results.buyValue));
        $(".est-shares-cell").text(formatDecimal(results.shares));
        $(".sell-price-cell").text(IRCalc.globalIRCalcCurrency + ' ' + formatDecimal(results.sellStockPrice));
        $(".value-now-cell").text(IRCalc.globalIRCalcCurrency + ' ' + formatDecimal(results.sellValue));
        $(".yield-cell").text(formatDecimal(results.percentReturn) + "%");
        $(".yield-change-cell").text(formatDecimal(results.sellValue - results.buyValue));

    },

    calculateValueOfHolding: function (stockData, dividendData, investmentDate, shares) {
        debugStep('IRCalc.calculateValueOfHolding');
        var dividend = $("#dividend").val();
        debugStep("dividend: " + dividend);

        return IRCalc.calculateValueOfHoldingWithoutDividend(stockData, shares);

        //switch (dividend) {
        //    case "cash":
        //        return calculateValueOfHoldingWithCashDividend(dividendData, stockData, investmentDate, shares);
        //        break;
        //    case "reinvest":
        //        return calculateValueOfHoldingWithReinvestDividend(dividendData, stockData, shares);
        //        break;
        //    case "none":
        //    default:
        //        return calculateValueOfHoldingWithoutDividend(stockData, shares);
        //        break;
        //}
    },

    calculateValueOfHoldingWithoutDividend: function (stockData, shares) {
        debugStep('IRCalc.calculateValueOfHoldingWithoutDividend');
        return _.map(stockData, function (stockDataEntry) {
            return {
                date: stockDataEntry.date,
                valueOfHolding: stockDataEntry.closePrice * shares
            };
        });
    }
}

function initializeCalc(data) {

    debugStep('initializeCalc');

    globalIRCalcRawClosePriceData = data.data.closePriceListing[0].data[0].data;

    // Appending last traded price
    globalIRCalcRawClosePriceData.push({
        closePrice: globalRawStockData[globalActiveListingIndex].last,
        date: new moment.utc().format("YYYY-MM-DD") + 'T00:00:00.0000000Z',
        high: globalRawStockData[globalActiveListingIndex].last,
        low: globalRawStockData[globalActiveListingIndex].last,
        openPrice: globalRawStockData[globalActiveListingIndex].last,
        volume: globalRawStockData[globalActiveListingIndex].volume
    });
    
    IRCalc.globalIRCalcEarlyDate = new moment.tz(globalIRCalcRawClosePriceData[0].date, globalActiveExchangeTimeZone);
    IRCalc.globalIRCalcCurrency = getActiveCurrency();

    IRCalc.initTemplate();
    IRCalc.initControls();
    IRCalc.initChart();
    IRCalc.drawChart();
    IRCalc.cropChart();

}