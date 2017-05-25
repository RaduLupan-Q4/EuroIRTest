var globalIRLookupRawClosePriceData = null;
var globalIRLookupChartData = null;
var globalIRLookupChartRawData = null;
var IRLookup = {

    fromDate: null,
    toDate: null,

    comparisons: {
        SAME: "same",
        BEFORE: "before",
        AFTER: "after"
    },

    initControls: function () {
        debugStep('IRLookup.initControls');
        IRLookup.toDate = this.getToDate();
        console.log("NICE");
        console.log(new moment.tz(IRLookup.toDate, );
        IRLookup.fromDate = this.getFromDate();//new moment.tz(globalIRLookupRawClosePriceData[0].date, globalActiveExchangeTimeZone);
         //new moment.tz(globalIRLookupRawClosePriceData[globalIRLookupRawClosePriceData.length - 1].date, globalActiveExchangeTimeZone);
        $(".date-select").on("change", this.dateSelectChangeHandler);
        $("#lookup-butto").on("click", this.submit);
    },

    initChart: function () {
        debugStep("IRLookup.initChart");
        var transformedData = [];
        var transformedDataAll = [];
        for (var i = 0; i < globalIRLookupRawClosePriceData.length; i++) {
            var unixTimestamp = new moment.tz(globalIRLookupRawClosePriceData[i].date, globalActiveExchangeTimeZone).valueOf();
            var closePrice = globalIRLookupRawClosePriceData[i].closePrice;
            if (unixTimestamp > this.fromDate.valueOf() && unixTimestamp < this.toDate.valueOf()) {
                transformedData.push([unixTimestamp, closePrice]);
            }
            transformedDataAll.push([unixTimestamp, closePrice]);
        }
        globalIRCalcChartData = transformedData;
        globalIRCalcChartRawData = transformedDataAll;
    },

    drawChart: function () {
        debugStep("IRLookup.drawChart");
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
        this.cropChart();
    },

    cropChart: function () {
        debugStep("IRLookup.cropChart");
        $(globalChartContainer).highcharts().xAxis[0].setExtremes(IRLookup.fromDate._d, IRLookup.toDate._d);
    },

    dateSelectChangeHandler: function () {
        debugStep("IRLookup.dateSelectChangeHandler");

        var fromMonth = parseInt($("#from-month").val(), 10) + 1;
        var fromYear = parseInt($("#from-year").val(), 10);
        var fromDay = parseInt($("#from-day").val(), 10);
        var validFromDay = Math.min(IRLookup.getDaysInMonth(fromMonth, fromYear), fromDay);

        var toMonth = parseInt($("#to-month").val(), 10) + 1;
        var toYear = parseInt($("#to-year").val(), 10);
        var toDay = parseInt($("#to-day").val(), 10);
        var validToDay = Math.min(IRLookup.getDaysInMonth(toMonth, toYear), toDay);

        if (fromDay !== validFromDay) $("#from-day").val(validFromDay);
        if (toDay !== validToDay) $("#to-day").val(validToDay);
        if (IRLookup.getToDate() < IRLookup.getFromDate()) IRLookup.swapSelectDates();

        IRLookup.fromDate = IRLookup.getFromDate();
        IRLookup.toDate = IRLookup.getToDate();
        
        IRLookup.updateChart();

    },

    updateChart: function() {
        IRLookup.drawChart();
        IRLookup.cropChart();
    },

    swapSelectDates: function () {
        debugStep("IRLookup.swapSelectDates");
    },

    getFromDate: function () {
        debugStep("IRLookup.getFromDate");
        var d = parseInt($("#from-day").val());
        var m = parseInt($("#from-month").val() + 1);
        var y = parseInt($("#from-year").val());
        if (parseInt(d) < 10) {
            d = 0 + '' + d;
        }
        if (parseInt(m) < 10) {
            m = 0 + '' + m;
        }
        console.log(y + '-' + m + '-' + d);
        var date = new moment.tz(y + '-' + m + '-' + d, 'YYYY-MM-DD', globalActiveExchangeTimeZone);
        return date;
    },

    getToDate: function () {
        debugStep("IRLookup.getToDate");
        var d = parseInt($("#to-day").val());
        var m = parseInt($("#to-month").val()) + 1;
        console.log(m);
        var y = parseInt($("#to-year").val());
        if (parseInt(d) < 10) {
            d = 0 + '' + d;
        }
        console.log(m);
        if (parseInt(m) < 10) {
            m = 0 + '' + m;
        }
        console.log(y + '-' + m + '-' + d);
        var date = new moment.tz(y + '-' + m + '-' + d, 'YYYY-MM-DD', globalActiveExchangeTimeZone);
        return date;
    },

    getDaysInMonth: function(m, y) {
        debugStep("IRLookup.getDaysInMonth");
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if ((!(y % 4) && y % 100) || !(y % 400)) {
            daysInMonth[1] = 29;
        }
        return daysInMonth[--m];
    },

    submit: function () {
        debugStep('IRLookup.submit');

        return false;
    }

}

function initializeLookup(data) {
    debugStep('initializeLookup');
    
    globalIRLookupRawClosePriceData = data.data.closePriceListing[0].data[0].data;
    
    IRLookup.initControls();
    IRLookup.initChart();
    IRLookup.drawChart();

}