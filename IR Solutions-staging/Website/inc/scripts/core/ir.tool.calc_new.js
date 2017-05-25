var globalIRCalcData = null; 
var globalIRCalcRawData = null;
var globalIRCalcChartData = null;
var globalIRCalcChartRawData = null;
var globalIRCalcDiviendData = null;

var IRChartTSR = new function () {
    this.dividendDatesAll = [];
    this.dividendValuesAll = [];
}

var IRCalc = {

    fromDate: null,
    toDate: null,
    comparisons: {
        SAME: "same",
        BEFORE: "before",
        AFTER: "after"
    },
    units: {
        SHARES: "shares",
        AMOUNT: "amount"
    },

    template: function () {
        debugStep("IRCalc.template");
        var template = $('#IRCalcTemplate').html();
        var compiledTemplate = Handlebars.compile(template);
        $(".IRCalcModule").html(compiledTemplate(translations));
    },

    initControls: function () {

        $("#calculate-button").on("click", IRCalc.submit);
    },

    prepareChartData: function () {
        debugStep("IRCalc.prepareChartData");
        requestClosePriceListingData.done(IRCalc.transformChartData);
    },

    transformChartData: function (data) {
        debugStep("IRCalc.transformChartData");

        globalIRCalcRawData = data.data[globalActiveListingIndex].data;

        IRCalc.toDate = new moment.tz(globalIRCalcRawData[globalIRCalcRawData.length - 1][0], globalActiveExchangeTimeZone);
        IRCalc.fromDate = IRCalc.toDate.clone().subtract(1, 'years');

        var transformedData = [];
        var transformedDataAll = [];
        for (var i = 0; i < globalIRCalcRawData.length; i++) {
            var unixTimestamp = new moment.tz(globalIRCalcRawData[i]['date'], globalActiveExchangeTimeZone).valueOf();
            var closePrice = globalIRCalcRawData[i]['closePrice'];
            if (unixTimestamp > IRCalc.fromDate.valueOf() && unixTimestamp < IRCalc.toDate.valueOf()) {
                transformedData.push([unixTimestamp, closePrice]);
            }
            transformedDataAll.push([unixTimestamp, closePrice]);
            //transformedData.push([unixTimestamp, closePrice]);
        }
        globalIRCalcChartData = transformedData;
        globalIRCalcChartRawData = transformedDataAll;
        IRCalc.updateDateSelects();
    },

    updateGlobalIRCalcChartData: function () {
        debugStep("IRCalc.updateGlobalIRCalcChartData");
        var transformedData = [];
        for (var i = 0; i < globalIRCalcRawData.length; i++) {
            var unixTimestamp = new moment.tz(globalIRCalcRawData[i]['date'], globalActiveExchangeTimeZone).valueOf();
            var closePrice = globalIRCalcRawData[i]['closePrice'];
            if (unixTimestamp > IRCalc.fromDate.valueOf() && unixTimestamp < IRCalc.toDate.valueOf()) {
                transformedData.push([unixTimestamp, closePrice]);
            }
        }
        globalIRCalcChartData = transformedData;
    },

    updateDateSelects: function () {
        debugStep("IRCalc.updateDateSelects");
        $(function () {
            $("#from-day").val(IRCalc.fromDate.format("D"));
            $("#from-month").val(IRCalc.fromDate.format("M") - 1);
            $("#from-year").val(IRCalc.fromDate.format("YYYY"));
            $("#to-day").val(IRCalc.toDate.format("D"));
            $("#to-month").val(IRCalc.toDate.format("M") - 1);
            $("#to-year").val(IRCalc.toDate.format("YYYY"));

            $(".date-select").on("change", IRCalc.dateSelectsChangeHandler);

        });

    },

    dateSelectsChangeHandler: function () {
        debugStep("IRCalc.dateSelectsChangeHandler");
        var fromMonth = parseInt($("#from-month").val(), 10) + 1;
        var fromYear = parseInt($("#from-year").val(), 10);
        var fromDay = parseInt($("#from-day").val(), 10);
        var validFromDay = Math.min(IRCalc.getDaysInMonth(fromMonth, fromYear), fromDay);

        var toMonth = parseInt($("#to-month").val(), 10) + 1;
        var toYear = parseInt($("#to-year").val(), 10);
        var toDay = parseInt($("#to-day").val(), 10);
        var validToDay = Math.min(IRCalc.getDaysInMonth(toMonth, toYear), toDay);

        if (fromDay !== validFromDay) $("#from-day").val(validFromDay);
        fromDay = parseInt($("#from-day").val(), 10);
        if (toDay !== validToDay) $("#to-day").val(validToDay);
        toDay = parseInt($("#to-day").val(), 10);

        IRCalc.fromDate = new moment.tz(fromYear + '-' + fromMonth + '-' + fromDay, 'YYYY-MM-DD', globalActiveExchangeTimeZone);
        IRCalc.toDate = new moment.tz(toYear + '-' + toMonth + '-' + toDay, 'YYYY-MM-DD', globalActiveExchangeTimeZone);

        debugStep("IRCalc.fromDate: " + IRCalc.fromDate.format("YYYY-MM-DD"));
        debugStep("IRCalc.toDate: " + IRCalc.toDate.format("YYYY-MM-DD"));

        if (IRCalc.toDate.isBefore(IRCalc.fromDate)) {
            IRCalc.swapSelectDates();
        }

        //restrictSelectDates

        // JRJR
    },

    swapSelectDates: function () {
        var tmpToDate = IRCalc.toDate;
        IRCalc.toDate = IRCalc.fromDate;
        IRCalc.fromDate = tmpToDate;
        IRCalc.updateDateSelects();
    },

    getDaysInMonth: function (m, y) {
        debugStep("IRCalc.getDaysInMonth");
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if ((!(y % 4) && y % 100) || !(y % 400)) {
            daysInMonth[1] = 29;
        }
        return daysInMonth[--m];
    },

    drawChart: function () {

        debugStep("IRCalc.drawChart");

        $.when(requestClosePriceListingData).done(function () {
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
                    //ordinal: true,
                    lineColor: '#eeeeee',
                    gridLineWidth: 1,
                    gridLineColor: '#eeeeee',
                    tickPixelInterval: 100,
                    tickLength: 0,
                    type: 'datetime',
                    dateTimeLabelFormats: getChartDateTimeLabelFormatsLookupCalc(),
                    showFirstLabel: false,
                    showLastLabel: true,
                    labels: {
                        staggerLines: 1,
                        step: 2
                    }
                },
                yAxis: {
                    lineWidth: 0,
                    lineColor: '#eeeeee',
                    gridLineWidth: 1,
                    gridLineColor: '#eeeeee',
                    tickPixelInterval: 35,
                    //tickLength: 0,
                    opposite: true,
                    startOnTick: true,
                    endOnTick: true,
                    useHTML: true,
                    showFirstLabel: true,
                    showLastLabel: false,
                    labels: {
                        align: 'left',
                        x: 5,
                        y: -5,
                        formatter: function () {
                            return formatDecimal(this.value) + '';
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
            IRCalc.cropChart();
        });
    },

    cropChart: function () {
        debugStep("IRCalc.cropChart");
        $(globalChartContainer).highcharts().xAxis[0].setExtremes(IRCalc.fromDate._d, IRCalc.toDate._d);
    },

    readFromDate: function () {
        debugStep("IRCalc.readFromDate");
        $(function () {
            var d = parseInt($("#from-day").val());
            var m = parseInt($("#from-month").val() + 1);
            var y = parseInt($("#from-year").val());
            var date = new moment.tz(y + '-' + m + '-' + d, 'YYYY-MM-DD', globalActiveExchangeTimeZone);
            debugStep(date.format('YYYY-MM-DD'));
            return date;
        });
    },

    readToDate: function () {
        debugStep("IRCalc.readToDate");
        $(function () {
            var d = parseInt($("#to-day").val());
            var m = parseInt($("#to-month").val() + 1);
            var y = parseInt($("#to-year").val());
            var date = new moment.tz(y + '-' + m + '-' + d, 'YYYY-MM-DD', globalActiveExchangeTimeZone);
            debugStep(date.format('YYYY-MM-DD'));
            return date;
        });
    },

    datePickers: function (fromTo) {
        debugStep("IRCalc.datePickers");

        $("#from-datepicker").datepicker({
            showOn: "button",
            buttonImage: getImagePath() + "icons/calendar.png",
            buttonImageOnly: true,
            onSelect: IRCalc.datePickerChangeHandler,
            defaultDate: IRCalc.fromDate,
            maxDate: new Date()
        });

        $("#to-datepicker").datepicker({
            showOn: "button",
            buttonImage: getImagePath() + "icons/calendar.png",
            buttonImageOnly: true,
            onSelect: IRCalc.datePickerChangeHandler,
            defaultDate: IRCalc.toDate,
            maxDate: new Date()
        });
    },

    datePickerChangeHandler: function () {
        debugStep("IRCalc.datePickerChangeHandler");
    },

    resetResults: function () {
        $(".buy-price-cell").text("-");
        $(".est-shares-cell").text("-");
        $(".sell-price-cell").text("-");
        $(".value-now-cell").text("-");
        $(".yield-cell").text("-");
    },

    submit: function () {
        debugStep("IRCalc.submit");

        var results = IRCalc.calculate();

        if (typeof (results.buyStockPrice) == 'undefined') {
            IRCalc.resetResults;
        } else {
            if (results.buyStockPrice > 0) {

                var chart = $(globalChartContainer).highcharts();

                $(".buy-price-cell").text(getActiveCurrency() + ' ' + formatDecimal(results.buyStockPrice));
                $(".est-shares-cell").text(formatDecimal(results.shares));
                $(".sell-price-cell").text(getActiveCurrency() + ' ' + formatDecimal(results.sellStockPrice));
                $(".value-now-cell").text(getActiveCurrency() + ' ' + formatDecimal(results.sellValue));

                $(".payout-cell").text(formatDecimal(results.payout));
                $(".yield-cell").text(formatDecimal(results.percentReturn) + " %");
                
                chart.series[0].setData(globalIRCalcChartRawData);
                chart.xAxis[0].setExtremes(IRCalc.fromDate.valueOf(), IRCalc.toDate.valueOf());

            } else {
                IRCalc.resetResults;
            }

        }
        return false;
    },

    calculate: function () {
        debugStep("IRCalc.calculate");

        var amountInvested = parseFloat($("#amount-invested").val());
        var unit = $("input[name=invested]:checked").val();
        var fromDate = IRCalc.fromDate;
        var toDate = IRCalc.toDate;
        var results = {};
        var dividendSelected = $("#dividend").val();

        if (globalIRCalcDiviendData == null) {
            globalIRCalcDiviendData = globalRawCalcDividendData[0].dividend[0].data;
        }

        if (amountInvested && globalIRCalcRawData) {

            var startIndex = IRCalc.getIndexThatBestMatchesDate(globalIRCalcRawData, "date", IRCalc.fromDate._d);
            var endIndex = IRCalc.getIndexThatBestMatchesDate(globalIRCalcRawData, "date", IRCalc.toDate._d);

            var buyDate = new moment(globalIRCalcRawData[startIndex].date).format("YYYY-MM-DD");
            var buyStockPrice = parseFloat(globalIRCalcRawData[startIndex].closePrice);
            var sellDate = new moment(globalIRCalcRawData[endIndex].date).format("YYYY-MM-DD");
            var sellStockPrice = parseFloat(globalIRCalcRawData[endIndex].closePrice);

            results.buyDate = buyDate;
            results.buyStockPrice = buyStockPrice;
            results.sellDate = sellDate;
            results.sellStockPrice = sellStockPrice;
            results.shares = (unit === IRCalc.units.SHARES) ? parseFloat(amountInvested) : parseFloat(amountInvested / buyStockPrice);
            results.valueOfHoldingData = IRCalc.calculateValueOfHolding(dividendSelected, fromDate, results.shares);



            results.buyValue = parseFloat(results.valueOfHoldingData[startIndex][1]);
            results.sellValue = parseFloat(results.valueOfHoldingData[endIndex][1]);
            results.payout = IRCalc.calculatePayout();
            
            results.percentReturn = ((results.sellValue - results.buyValue) / results.buyValue) * 100;

        }
        return results;
    },

    preLoadDividends: function () {
        debugStep("IRCalc.preLoadDividends");
        var TSRDataPaymentDates = [];
        var TSRDataDividends = [];
        $.each(globalIRCalcDiviendData, function (index, data) {
            var stockDataDateOnly = new moment.tz(data.paymentDate, globalActiveExchangeTimeZone).format("YYYY-MM-DD");
            var dateUnix = new moment.tz(stockDataDateOnly + 'T00:00:00.0000000Z', globalActiveExchangeTimeZone).valueOf();
            TSRDataPaymentDates.push(dateUnix);
            TSRDataDividends.push(data.dividendValue);
        });
        IRChartTSR.dividendDatesAll = TSRDataPaymentDates;
        IRChartTSR.dividendValuesAll = TSRDataDividends;
    },

    calculateValueOfHolding: function (dividendSelected, investmentDate, shares) {

        IRCalc.preLoadDividends();

        switch (dividendSelected) {
            case "cash":
                return IRCalc.calculateValueOfHoldingWithCashDividend(shares);
                break;
            case "reinvest":
                return IRCalc.calculateValueOfHoldingWithReinvestDividend(shares);
                break;
            case "none":
            default:
                return IRCalc.calculateValueOfHoldingWithoutDividend(shares);
                break;
        }
    },

    calculateValueOfHoldingWithoutDividend: function (shares) {
        debugStep("IRCalc.calculateValueOfHoldingWithoutDividend");
        var dataArray = [];
        $.each(globalIRCalcChartRawData, function (index, cpData) {
            dataArray.push([cpData[0], parseFloat(cpData[1] * shares)]);
        });
        return dataArray;
    },

    calculateValueOfHoldingWithCashDividend: function (shares) {
        debugStep("IRCalc.calculateValueOfHoldingWithCashDividend");
        var dataArray = [];
        var dividendTotal = parseFloat(0);
        var dividendIndex = 0;
        var price;
        $.each(globalIRCalcChartRawData, function (index, cpData) {
            var dateUnix = cpData[0];
            if (dateUnix > IRCalc.fromDate.valueOf() && dateUnix < IRCalc.toDate.valueOf()) { // Only use diviends within the selected from and to period.
                
                if (IRChartTSR.dividendDatesAll[dividendIndex] == dateUnix) {
                    if (dividendIndex < IRChartTSR.dividendDatesAll.length - 1) {
                        dividendIndex++;
                    }
                } else {
                    if (dateUnix > IRChartTSR.dividendDatesAll[dividendIndex]) {
                        if (dividendIndex < IRChartTSR.dividendDatesAll.length - 1) {
                            dividendIndex++;
                        } else if (dividendIndex == IRChartTSR.dividendDatesAll.length - 1) {
                            dividendTotal = parseFloat(dividendTotal + IRChartTSR.dividendValuesAll[dividendIndex]);
                            dividendIndex++;
                        }
                    }
                }
            }
            price = parseFloat(cpData[1] + dividendTotal);
            dataArray.push([dateUnix, price]);
        });

        return dataArray;

    },

    calculateValueOfHoldingWithReinvestDividend: function (shares) {
        debugStep("IRCalc.calculateValueOfHoldingWithCashDividend");
        var dataArray = [];
        var dividendTotal = parseFloat(0);
        var dividendIndex = 0;
        var price;
        $.each(globalIRCalcChartRawData, function (index, cpData) {
            var dateUnix = cpData[0];
            var match = false;
            if (dateUnix > IRCalc.fromDate.valueOf() && dateUnix < IRCalc.toDate.valueOf()) { // Only use diviends within the selected from and to period.
                if (IRChartTSR.dividendDatesAll[dividendIndex] == dateUnix) {
                    match = true;
                } else {
                    if (dateUnix > IRChartTSR.dividendDatesAll[dividendIndex]) {
                        if (dividendIndex < IRChartTSR.dividendDatesAll.length - 1) {
                            dividendIndex++;
                        } else if (dividendIndex == IRChartTSR.dividendDatesAll.length - 1) {
                            match = true;
                        }
                    }
                }
                if (match) {
                    if (dividendIndex <= IRChartTSR.dividendDatesAll.length - 1) {
                        dividendTotal = parseFloat(dividendTotal + IRChartTSR.dividendValuesAll[dividendIndex]);
                        shares = parseFloat(((dividendTotal / cpData[1]) * shares) + shares);
                        dividendIndex++;
                    }
                }
            }
            price = parseFloat(cpData[1] * shares);
            dataArray.push([dateUnix, price]);
        });
        return dataArray;
    },

    calculatePayout: function () {

        debugStep("IRCalc.calculatePayout");

        var payoutRet = 0;
        var dividendTotal = 0;
        var dividendIndex = 0;
        var price = null;
        var dividend = $("#dividend").val();

        $.each(globalIRCalcChartRawData, function (index, cpData) {

            var dateUnix = cpData[0];
            if (dateUnix > IRCalc.fromDate.valueOf() && dateUnix < IRCalc.toDate.valueOf()) { // Only use diviends within the selected from and to period.

                if (IRChartTSR.dividendDatesAll[dividendIndex] == dateUnix) {
                    switch (dividend) {
                        case "cash":
                            payoutRet = payoutRet + IRChartTSR.dividendValuesAll[dividendIndex];
                            break;
                    }
                    if (dividendIndex < IRChartTSR.dividendDatesAll.length - 1) {
                        dividendIndex++;
                    }
                } else {
                    if (dateUnix > IRChartTSR.dividendDatesAll[dividendIndex]) {
                        if (dividendIndex < IRChartTSR.dividendDatesAll.length - 1) {
                            switch (dividend) {
                                case "cash":
                                    payoutRet = payoutRet + IRChartTSR.dividendValuesAll[dividendIndex];
                                    break;
                            }
                            dividendIndex++;
                        } else if (dividendIndex == IRChartTSR.dividendDatesAll.length - 1) {
                            switch (dividend) {
                                case "cash":
                                    payoutRet = payoutRet + IRChartTSR.dividendValuesAll[dividendIndex];
                                    break;
                            }
                            dividendIndex++;
                        }
                    }
                }
            }
        });
        return payoutRet;
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
            if (comparison === IRCalc.comparisons.BEFORE) {
                minIndex = currentIndex + 1;
            }
            else if (comparison === IRCalc.comparisons.AFTER) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }
        return currentIndex;
    },

    compareDates: function (dateToTest, compareToDate) {
        var _dateToTest = new Date(dateToTest.getTime()).setHours(0, 0, 0, 0),
        _compareToDate = new Date(compareToDate.getTime()).setHours(0, 0, 0, 0);
        if (_dateToTest === _compareToDate) {
            return IRCalc.comparisons.SAME;
        }
        return (dateToTest < compareToDate) ? IRCalc.comparisons.BEFORE : IRCalc.comparisons.AFTER;
    }

};

function initializeCalc() {
    debugStep("initializeCalc");

    IRCalc.template();
    IRCalc.initControls();
    IRCalc.prepareChartData();
    IRCalc.drawChart();
    // JRJR
}