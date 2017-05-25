var globalCompareState = false;
var globalPressReleasesIsLoaded = false;
var stockDataTAHist = [];
var stockDataTAMACD = [];
var stockDataTASignal = [];
var useHighLow = false;

var stockDataTAColours = {
    RSI: 'blue',
    MACD: 'yellow',
    MACDHist: 'red',
    MACDSignal: 'green'
}
var IRChartCustomSettings = {
    checkedVolume: true,
    checkedPressRelease: false,
    checkedPeriodHighLow: false,
    activeDiagramType: 'area'
};
function onload() {
    $('.IRChartComparisonHeader').text('Compare');
    $('.IRChartComparison').attr('onclick', 'comparisonClickEvent()');
    $('.IRChartComparison').attr('id', 'chartComparisons');
    $('.disclaimerFR').addClass('hideClass');
    $('.disclaimerEN').addClass('showClass');

    if (globalActiveLanguage == 'en') {
        $('.disclaimerFR').removeClass('showClass');
        $('.disclaimerFR').addClass('hideClass');
        $('.disclaimerEN').addClass('showClass');
    }

    if (globalActiveLanguage == 'fr') {
        $('.IRChartComparisonHeader').text('Comparer à');
        $('.disclaimerEN').removeClass('showClass');
        $('.disclaimerEN').addClass('hideClass');
        $('.disclaimerFR').addClass('showClass');
        
    }

}
var IRChartOutsideTechnicalAnalysis = {

    chartVolumeIndex: 2,
    chartPressReleaseIndex: 0,

    updateIRChartOutsideTechnicalAnalysis: function (id) {

        debugStep("updateIRChartOutsideTechnicalAnalysis id: " + id);

        if (globalChartActiveDisplayMode != chartDisplayModes.ta) {
            globalChartActiveDisplayMode = chartDisplayModes.ta;

        }


        switch (id) {
            case "MA10":
                loadAnalysisSimpleMovingAverage(clientStyle.amountOfHistoricalYears, 10);
                this.checkSMA('MA 10');
                break;

            case "MA20":
                loadAnalysisSimpleMovingAverage(clientStyle.amountOfHistoricalYears, 20);
                this.checkSMA('MA 20');
                break;

            case "MA50":
                loadAnalysisSimpleMovingAverage(clientStyle.amountOfHistoricalYears, 50);
                this.checkSMA('MA 50');
                break;

            case "MACustom":

                var days = $('.IRChartOutsideTACustomDaysValue').val();
                if (parseFloat(days) > 0 && parseFloat(days) < 100) {
                    loadAnalysisSimpleMovingAverage(clientStyle.amountOfHistoricalYears, days);
                    this.checkSMA('MA ' + days);
                }
                break;

            case "RSI":

                loadAnalysisRelativeStrengthIndex(clientStyle.amountOfHistoricalYears, 14);
                //globalChartDom.destroy();
                //this.drawIRChartHtmlTADual();
                this.checkRSI('RSI');
                break;

            case "MACD":

                loadAnalysisMovingAverageConvergenceDivergence(clientStyle.amountOfHistoricalYears, 12, 26, 9);
                this.checkMACD('MACD');
                //RequestAnalysisMovingAverageConvergenceDivergence
                break;

        }
    },

    checkSMA: function (TAShort) {
        $.when(requestAnalysisSimpleMovingAverageData).done(function (data) {
            IRChartApplySMA(data, TAShort);
        });
    },

    checkRSI: function (TAShort) {
        $.when(requestAnalysisRelativeStrengthIndexData).done(function (data) {
            IRChartApplyRSI(data, TAShort);
        });
    },

    checkMACD: function (TAShort) {
        $.when(requestAnalysisMovingAverageConvergenceDivergence).done(function (data) {
            IRChartApplyMACD(data, TAShort);
        });
    },

    drawIRChartHtmlTASingle: function () {

        debugStep("drawIRChartHtmlTADual");

        globalChartWidth = $(globalChartContainer).css('width').replace('px', '');

        $(globalChartContainer).highcharts('StockChart', {
            colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
            chart: {
                alignTicks: true,
                borderWidth: 1,
                borderColor: clientStyle.chart_ColourBorder,
                backgroundColor: clientStyle.chart_ColourBackground,
                plotBackgroundColor: clientStyle.chart_ColourPlotBackground,
                marginRight: 70,
                marginLeft: 10,
                spacingTop: 30,
                plotBorderWidth: 1,
                plotBorderColor: clientStyle.chart_ColourBorder,
                animation: {
                    duration: globalChartAnimationMS
                },
                events: {
                    load: function () {
                        IRChartEventSendExtremes(this.xAxis[0].getExtremes());
                    },
                    redraw: function () {
                        IRChartEventSendExtremes(this.xAxis[0].getExtremes());
                    }
                }
            },
            tooltip: {
                shadow: false,
                valueDecimals: clientStyle.amountOfDecimals,
                changeDecimals: 2,
                borderRadius: 0,
                borderWidth: 0,
                useHTML: true,
                shared: true,
                backgroundColor: 'rgba(255,255,255,0)',
                formatter: function () {
                    var date = Highcharts.dateFormat('%Y-%m-%d', this.x);
                    var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                    var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();
                    return updateTooltipTechnicalAnalysisCustom(unixDateTime);
                },
                positioner: function (boxWidth, boxHeight, point) {
                    var chartWidth = $(globalChartContainer).width();
                    var plotX = point.plotX + 30;
                    var plotY = (boxHeight - 52);

                    if (plotX > chartWidth - boxWidth - 50) {
                        plotX = plotX - boxWidth - 40;
                    }

                    //
                    //  When tooltip overlap yAxis, make it static.
                    //
                    if (plotX > (chartWidth - 180)) {
                        plotX = (chartWidth - 180);
                    }

                    if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
                        plotY = plotY + 12;
                    }

                    return { x: plotX, y: plotY };
                }
            },
            navigator: {
                outlineColor: clientStyle.chart_ColourBorder,
                adaptToUpdatedData: true,
                maskInside: false,
                maskFill: 'rgba(255, 255, 255, 0.75)',
                handles: {
                    backgroundColor: clientStyle.chart_ColourBackground,
                    borderColor: '#aaa'
                },
                xAxis: {
                    ordinal: true
                }
            },
            xAxis: {
                ordinal: false,
                lineWidth: 0,
                lineColor: clientStyle.chart_ColourBorder,
                tickLength: 0,
                gridLineWidth: 1,
                gridLineColor: '#eee',
                showFirstLabel: true,
                showLastLabel: true,
                startOnTick: true,
                endOnTick: true,
                showEmpty: false,
                type: 'datetime',
                tickPixelInterval: 70,
                labels: {
                    staggerLines: 1,
                    step: 2
                },
                dateTimeLabelFormats: getChartDateTimeLabelFormats(),
                minRange: globalChartMinRange
            },
            yAxis: [{
                lineWidth: 0,
                lineColor: clientStyle.chart_ColourBorder,
                gridLineWidth: 1,
                gridLineColor: '#eee',
                tickPixelInterval: 35,
                showFirstLabel: false,
                showLastLabel: false,
                startOnTick: true,
                endOnTick: true,
                opposite: true,
                labels: {
                    align: 'right',
                    x: 50,
                    y: 5,
                    formatter: function () {
                        return formatDecimal(this.value) + '';
                    }
                }
            }, {
                // Volume
                id: 'y2',
                opposite: true,
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
                showFirstLabel: false,
                top: '60%',
                height: '40%',
                showLastLabel: false
            }],
            scrollbar: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            rangeSelector: {
                enabled: false
            },
            plotOptions: {
                series: {
                    animation: {
                        duration: globalChartAnimationMS
                    }
                },
                line: {
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 10,
                        forced: true,
                        approximation: 'close'
                    }
                },
                area: {
                    threshold: null,
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 10,
                        forced: true,
                        approximation: 'close'
                    },
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.50).get('rgba')]
                            //,
                            //[1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                        ]
                    }
                },
                column: {
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 10,
                        forced: true,
                        approximation: 'close'
                    }
                },
                flags: {
                    useHTML: false,
                    enableMouseTracking: true,
                    stickyTracking: false,
                    stackDistance: 0,
                    showInLegend: false,
                    //backgroundColor: 'rgba(255,255,255,0)',
                    cursor: 'pointer',
                    //fillColor: 'rgba(255,255,255,0)',
                    shape: 'url(' + getProtocol() + '//ir.euroinvestor.com/inc/images/icons/newsFlag.png)',
                    lineWidth: 0,
                    title: '.',
                    style: {
                        color: '#fff'
                    },
                    tooltip: {
                        //pointFormatter: function ()
                        //{

                        //}
                    },
                    y: -21,
                    states: {
                        hover: {
                            fillColor: 'rgba(255,255,255,0.5)'
                        }
                    }

                }
            }
        });
        globalChartDom = getChartDOM();

    },

    drawIRChartHtmlTADual: function () {

        debugStep("drawIRChartHtmlTADual");

        globalChartWidth = $(globalChartContainer).css('width').replace('px', '');

        $(globalChartContainer).highcharts('StockChart', {
            colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
            chart: {
                alignTicks: true,
                borderWidth: 1,
                borderColor: clientStyle.chart_ColourBorder,
                backgroundColor: clientStyle.chart_ColourBackground,
                plotBackgroundColor: clientStyle.chart_ColourPlotBackground,
                marginRight: 70,
                marginLeft: 10,
                spacingTop: 30,
                plotBorderWidth: 1,
                plotBorderColor: clientStyle.chart_ColourBorder,
                animation: {
                    duration: globalChartAnimationMS
                },
                events: {
                    load: function () {
                        IRChartEventSendExtremes(this.xAxis[0].getExtremes());
                    },
                    redraw: function () {
                        IRChartEventSendExtremes(this.xAxis[0].getExtremes());
                    }
                }
            },
            tooltip: {
                shadow: false,
                valueDecimals: clientStyle.amountOfDecimals,
                changeDecimals: 2,
                borderRadius: 0,
                borderWidth: 0,
                useHTML: true,
                shared: true,
                backgroundColor: 'rgba(255,255,255,0)',
                formatter: function () {
                    var date = Highcharts.dateFormat('%Y-%m-%d', this.x);
                    var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                    var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();
                    return updateTooltipTechnicalAnalysisCustom(unixDateTime);
                },
                positioner: function (boxWidth, boxHeight, point) {
                    var chartWidth = $(globalChartContainer).width();
                    var plotX = point.plotX + 30;
                    var plotY = (boxHeight - 52);

                    if (plotX > chartWidth - boxWidth - 50) {
                        plotX = plotX - boxWidth - 40;
                    }

                    //
                    //  When tooltip overlap yAxis, make it static.
                    //
                    if (plotX > (chartWidth - 180)) {
                        plotX = (chartWidth - 180);
                    }

                    if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
                        plotY = plotY + 12;
                    }

                    return { x: plotX, y: plotY };
                }
            },
            navigator: {
                outlineColor: clientStyle.chart_ColourBorder,
                adaptToUpdatedData: true,
                maskInside: false,
                maskFill: 'rgba(255, 255, 255, 0.75)',
                handles: {
                    backgroundColor: clientStyle.chart_ColourBackground,
                    borderColor: '#aaa'
                },
                xAxis: {
                    ordinal: true
                }
            },
            xAxis: {
                ordinal: false,
                lineWidth: 0,
                lineColor: clientStyle.chart_ColourBorder,
                tickLength: 0,
                gridLineWidth: 1,
                gridLineColor: '#eee',
                showFirstLabel: true,
                showLastLabel: true,
                startOnTick: true,
                endOnTick: true,
                showEmpty: false,
                type: 'datetime',
                tickPixelInterval: 70,
                labels: {
                    staggerLines: 1,
                    step: 2
                },
                dateTimeLabelFormats: getChartDateTimeLabelFormats(),
                minRange: globalChartMinRange
            },
            yAxis: [{
                lineWidth: 0,
                lineColor: clientStyle.chart_ColourBorder,
                gridLineWidth: 1,
                gridLineColor: '#eee',
                tickPixelInterval: 35,
                showFirstLabel: false,
                showLastLabel: false,
                startOnTick: true,
                endOnTick: true,
                opposite: true,
                labels: {
                    align: 'right',
                    x: 50,
                    y: 5,
                    formatter: function () {
                        return formatDecimal(this.value) + '';
                    }
                },
                top: '0%',
                height: '60%'
            }, {
                // Volume
                id: 'y2',
                opposite: true,
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
                showFirstLabel: false,
                //top: 346,
                //height: 50,
                top: '20%',
                height: '40%',
                showLastLabel: false
            }, {
                // TA
                id: 'ta1',
                opposite: true,
                top: '65%',
                height: '35%',
                gridLineWidth: 1,
                gridLineColor: '#eee',
                labels: {
                    align: 'right',
                    x: 50,
                    y: 5,
                    style: {
                        color: '#aaa',
                    },
                    formatter: function () {
                        return formatDecimal(this.value) + '';
                    }
                }
            }],
            scrollbar: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            rangeSelector: {
                enabled: false
            },
            plotOptions: {
                series: {
                    animation: {
                        duration: globalChartAnimationMS
                    }
                },
                line: {
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 10,
                        forced: true,
                        approximation: 'close'
                    }
                },
                spline: {
                    marker: {
                        symbol: 'circle',
                        radius: 2
                    },
                    states: {
                        hover: {
                            enabled: true,
                            lineWidth: 2,
                            halo: {
                                opacity: 0,
                                size: 2
                            }
                        }
                    }
                },
                area: {
                    threshold: null,
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 10,
                        forced: true,
                        approximation: 'close'
                    },
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.50).get('rgba')],
                            [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                        ]
                    }
                },
                areaspline: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.50).get('rgba')],
                            [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                        ]
                    },
                    marker: {
                        symbol: 'circle',
                        radius: 2
                    },
                    states: {
                        hover: {
                            enabled: true,
                            lineWidth: 2,
                            halo: {
                                opacity: 0,
                                size: 2
                            }
                        }
                    }
                },
                column: {
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 10,
                        forced: true,
                        approximation: 'close'
                    }
                },
                flags: {
                    useHTML: false,
                    enableMouseTracking: true,
                    stickyTracking: false,
                    stackDistance: 0,
                    showInLegend: false,
                    //backgroundColor: 'rgba(255,255,255,0)',
                    cursor: 'pointer',
                    //fillColor: 'rgba(255,255,255,0)',
                    shape: 'url(' + getProtocol() + '//ir.euroinvestor.com/inc/images/icons/newsFlag.png)',
                    lineWidth: 0,
                    title: '.',
                    style: {
                        color: '#fff'
                    },
                    tooltip: {
                        //pointFormatter: function ()
                        //{

                        //}
                    },
                    y: -21,
                    states: {
                        hover: {
                            fillColor: 'rgba(255,255,255,0.5)'
                        }
                    }

                }
            }
        });
        globalChartDom = getChartDOM();

    },

    drawIRChartHtmlCustom: function () {

        debugStep("drawIRChartHtmlCustom()");

        $(globalChartContainer).highcharts('StockChart', {
            colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
            chart: {
                alignTicks: true,
                borderWidth: 1,
                borderColor: clientStyle.chart_ColourBorder,
                backgroundColor: clientStyle.chart_ColourBackground,
                plotBackgroundColor: clientStyle.chart_ColourPlotBackground,
                marginRight: 70,
                marginLeft: 10,
                spacingTop: 30,
                plotBorderWidth: 1,
                plotBorderColor: clientStyle.chart_ColourBorder,
                animation: {
                    duration: globalChartAnimationMS
                },
                events: {
                    load: function () {
                        IRChartEventSendExtremes(this.xAxis[0].getExtremes());
                    },
                    redraw: function () {

                        IRChartEventSendExtremes(this.xAxis[0].getExtremes());

                        if (useHighLow) {
                            updateHighLowPlotLineToChartCustom(this.yAxis[0].getExtremes());
                        }
                    }
                }

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
                    var date = Highcharts.dateFormat('%Y-%m-%d', this.x);

                    var time = Highcharts.dateFormat('%H:%M:%S', this.x);
                    var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                    var unixDate = new moment(date + 'T00:00:00.0000000Z').valueOf();
                    var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();

                    return updateTooltipDOHLCVNCustom(unixDateTime);



                    //if (useIRChartNews) {
                    //    return updateTooltipDOHLCVN(unixDateTime);
                    //} else if (usePressReleaseIRChartHeadlineData) {
                    //    return updateTooltipDOHLCVNPressRelease(unixDateTime);
                    //}
                    //else {
                    //    return updateTooltipDOHLCV(unixDateTime);
                    //}

                    //if (globalChartActiveDisplayMode == chartDisplayModes.tsr) {
                    //    return updateTooltipDOHLCVN(unixDateTime);
                    //}

                },
                positioner: function (boxWidth, boxHeight, point) {
                    var chartWidth = $(globalChartContainer).width();
                    var plotX = point.plotX + 30;
                    var plotY = (boxHeight - 52);

                    if (plotX > chartWidth - boxWidth - 50) {
                        plotX = plotX - boxWidth - 40;
                    }

                    //
                    //  When tooltip overlap yAxis, make it static.
                    //  (chartWidth - X), X = yAxis width.
                    //
                    if (plotX > (chartWidth - 70)) {
                        plotX = (chartWidth - 70);
                    }
                    if (plotX < 0) {
                        plotX = 0;
                    }

                    if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
                        plotY = plotY + 12;
                    }

                    return { x: plotX, y: plotY };
                }
            },
            navigator: {
                outlineColor: clientStyle.chart_ColourBorder,
                maskInside: false,
                maskFill: 'rgba(255, 255, 255, 0.75)',
                handles: {
                    backgroundColor: clientStyle.chart_ColourBackground,
                    borderColor: '#aaa'
                },
                xAxis: {
                    ordinal: true
                },
                series: {
                    type: 'area',
                    lineWidth: 0,
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, clientStyle.chart_ColourMain]
                            //,[1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                        ]
                    }
                }
            },
            xAxis: {
                ordinal: true,
                lineWidth: 0,
                lineColor: clientStyle.chart_ColourBorder,
                tickLength: 0,
                gridLineWidth: 1,
                gridLineColor: '#eee',
                showFirstLabel: true,
                showLastLabel: true,
                startOnTick: true,
                endOnTick: true,
                showEmpty: false,
                type: 'datetime',
                tickPixelInterval: 70,
                labels: {
                    staggerLines: 1,
                    step: 2
                },
                dateTimeLabelFormats: getChartDateTimeLabelFormats(),
                minRange: globalChartMinRange
            },
            yAxis: [{
                lineWidth: 0,
                lineColor: clientStyle.chart_ColourBorder,
                gridLineWidth: 1,
                gridLineColor: '#eee',
                tickPixelInterval: 35,
                showFirstLabel: true,
                showLastLabel: false,
                startOnTick: true,
                endOnTick: true,
                opposite: true,
                labels: {
                    align: 'right',
                    x: 50,
                    y: 5,
                    formatter: function () {
                        return formatDecimal(this.value) + '';
                    }
                }
            }, {
                // Volume
                id: 'y2',
                opposite: true,
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
                showFirstLabel: false,
                //top: 346,
                //height: 50,
                top: '60%',
                height: '40%',
                showLastLabel: false
            }],
            scrollbar: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            rangeSelector: {
                enabled: false
            },
            plotOptions: {
                series: {
                    animation: {
                        duration: globalChartAnimationMS
                    }
                },
                line: {
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 10,
                        forced: true,
                        approximation: 'close'
                    }
                    //marker: { // JRJR Shell Demo
                    //    enabled: true,
                    //    radius: 4,
                    //    symbol: 'square'
                    //},
                },
                area: {
                    threshold: null,
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 10,
                        forced: true,
                        approximation: 'close'
                    },
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, clientStyle.chart_ColourMain],
                            [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                        ]
                    }
                },
                column: {
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 10,
                        forced: true,
                        approximation: 'close'
                    },
                    color: clientStyle.chart_ColourVolumeBars
                },
                flags: {
                    useHTML: false,
                    enableMouseTracking: true,
                    stickyTracking: false,
                    stackDistance: 0,
                    showInLegend: false,
                    //backgroundColor: 'rgba(255,255,255,0)',
                    cursor: 'pointer',
                    //fillColor: 'rgba(255,255,255,0)',
                    shape: 'url(' + getProtocol() + '//ir.euroinvestor.com/inc/images/icons/newsFlag.png)',
                    lineWidth: 0,
                    title: '.',
                    style: {
                        color: '#fff'
                    },
                    tooltip: {
                        //pointFormatter: function ()
                        //{

                        //}
                    },
                    y: -21,
                    states: {
                        hover: {
                            fillColor: 'rgba(255,255,255,0.5)'
                        }
                    }

                }
            }
        });
        globalChartDom = getChartDOM();


        globalChartDom.addSeries({
            index: 1,
            data: globalChartListingStockData[globalActiveListingIndex],
            color: clientStyle.chart_ColourMain,
            yAxis: 0,
            visible: true,
            linkedTo: 0,
            type: clientStyle.chart_DrawMode,
            zIndex: 2
        }, false, 0);

        globalChartDom.addSeries({
            index: 3,
            data: globalChartListingStockDataVolume[globalActiveListingIndex],
            yAxis: 1,
            visible: true,
            linkedTo: 0,
            type: 'column'
        }, false, 0);

        drawPlotLineToChart();
        drawChartHeadlineClientName();
        drawChartCurrency();
        globalChartDom.redraw();

        updateChartNavBarRange('IRChart');
        setChartExtremes(chartDisplayModes.historical, 360);


    },

    toggleCheckBoxes: function (toggleClass) {

        if ($('.' + toggleClass).hasClass('checked')) {
            $('.' + toggleClass).removeClass('checked');
        } else {
            $('.' + toggleClass).addClass('checked');
        }
    }

};

function IRChartApplySMA(data, TAShort) {
    var colourIndex = 0;
    IRChartOutsideTechnicalAnalysis.chartVolumeIndex = 3;
    globalActiveTAShort = TAShort;

    globalChartDom.destroy();
    IRChartOutsideTechnicalAnalysis.drawIRChartHtmlTASingle();
    drawActiveListingToChartHistorical();
    globalChartDom.redraw();
    updateChartNavBarRange('IRChart');
    setChartExtremes(chartDisplayModes.historical, 360);
    globalChartActiveDisplayMode = chartDisplayModes.ta;
    attachClickHandlers('IRChart');

    stockDataTA.push([]);
    var TAArrayForChart = [];
    $.each(data.data, function (listingIndex, item) {
        TAArrayForChart.push([getUnixFromDate(item.date), item.result]);
        stockDataTADates.push(getUnixFromDate(item.date));
    });
    stockDataTA[0] = TAArrayForChart;

    globalChartDom.addSeries({
        id: 42,
        index: 1,
        data: stockDataTA[0],
        color: globalChartColours[colourIndex],
        yAxis: 0,
        name: 'TA',
        visible: true,
        linkedTo: 0,
        type: 'line'
    }, false, 0);

    var activeTA = '<div class="color' + globalChartColours[colourIndex].replace('#', '') + ' active" style="display: block;">';
    activeTA += '<span>' + TAShort + '</span>';// | <div class="TASettings">Period: <input class="TASettingsInput" type="Number" value="10" /><div class="TASettingsUpdate" id="SimpleMovingAverage">Update</div></div>';
    //activeTA += '<div class="TASettings">Period: <input type="Number" value="10" /><div class="updateTASettings" id="SimpleMovingAverage">Update</div></div>';
    activeTA += '</div>';

    $('.IRChartTAPlaceholder').html(activeTA);

    globalChartDom.redraw();

}
function IRChartApplyRSI(data, TAShort) {
    debugStep("redrawIRChartInModeTA");
    var colourIndex = 0;
    IRChartOutsideTechnicalAnalysis.chartVolumeIndex = 3;
    globalActiveTAShort = TAShort;

    globalChartDom.destroy();
    IRChartOutsideTechnicalAnalysis.drawIRChartHtmlTADual();
    drawActiveListingToChartHistorical();
    globalChartDom.redraw();
    updateChartNavBarRange('IRChart');
    setChartExtremes(chartDisplayModes.historical, 360);
    globalChartActiveDisplayMode = chartDisplayModes.ta;
    attachClickHandlers('IRChart');

    stockDataTA.push([]);
    var TAArrayForChart = [];
    $.each(data.data, function (listingIndex, item) {
        TAArrayForChart.push([getUnixFromDate(item.date), item.result]);
        stockDataTADates.push(getUnixFromDate(item.date));
    });
    stockDataTA[0] = TAArrayForChart;

    globalChartDom.addSeries({
        id: 42,
        index: 1,
        data: stockDataTA[0],
        color: globalChartColours[colourIndex],
        yAxis: 2,
        name: 'TA',
        visible: true,
        linkedTo: 2,
        type: 'spline'
    }, false, 0);

    var activeTA = '<div class="color' + globalChartColours[colourIndex].replace('#', '') + ' active" style="display: block;">';
    activeTA += '<span>' + TAShort + '</span>';// | <div class="TASettings">Period: <input class="TASettingsInput" type="Number" value="10" /><div class="TASettingsUpdate" id="SimpleMovingAverage">Update</div></div>';
    //activeTA += '<div class="TASettings">Period: <input type="Number" value="10" /><div class="updateTASettings" id="SimpleMovingAverage">Update</div></div>';
    activeTA += '</div>';

    $('.IRChartTAPlaceholder').html(activeTA);

    globalChartDom.redraw();
}
function IRChartApplyMACD(data, TAShort) {
    debugStep("redrawIRChartInModeTA");
    var colourIndex = 0;
    IRChartOutsideTechnicalAnalysis.chartVolumeIndex = 4;
    globalActiveTAShort = TAShort;

    globalChartDom.destroy();
    IRChartOutsideTechnicalAnalysis.drawIRChartHtmlTADual();

    //clientStyle.chart_DrawMode = 'line';
    drawActiveListingToChartHistorical();
    //clientStyle.chart_DrawMode = 'area';


    updateChartNavBarRange('IRChart');
    setChartExtremes(chartDisplayModes.historical, 360);
    globalChartDom.redraw();
    globalChartActiveDisplayMode = chartDisplayModes.ta;
    attachClickHandlers('IRChart');

    var taDataHist = [];
    var taDataMACD = [];
    var taDataSignal = [];

    taDataHist.push([]);
    taDataMACD.push([]);
    taDataSignal.push([]);

    var TAArrayForChartHist = [];
    var TAArrayForChartMACD = [];
    var TAArrayForChartSignal = [];

    $.each(data.data, function (listingIndex, item) {

        stockDataTADates.push(getUnixFromDate(item.date));

        TAArrayForChartHist.push([getUnixFromDate(item.date), item.hist])
        TAArrayForChartMACD.push([getUnixFromDate(item.date), item.macd])
        TAArrayForChartSignal.push([getUnixFromDate(item.date), item.signal])

    });
    taDataHist[0] = TAArrayForChartHist;
    taDataMACD[0] = TAArrayForChartMACD;
    taDataSignal[0] = TAArrayForChartSignal;

    // MACD Hist
    globalChartDom.addSeries({
        id: 42,
        index: 1,
        data: taDataHist[0],
        color: stockDataTAColours.MACDHist,
        yAxis: 2,
        name: 'TA',
        visible: true,
        linkedTo: 2,
        type: 'spline'
    }, false, 0);
    // MACD
    globalChartDom.addSeries({
        id: 42,
        index: 2,
        data: taDataMACD[0],
        color: globalChartColours[0],
        yAxis: 2,
        name: 'TA',
        visible: true,
        linkedTo: 1,
        type: 'areaspline'
    }, false, 0);
    // MACD Signal
    globalChartDom.addSeries({
        id: 42,
        index: 3,
        data: taDataSignal[0],
        color: stockDataTAColours.MACDSignal,
        yAxis: 2,
        name: 'TA',
        visible: true,
        linkedTo: 2,
        type: 'spline'
    }, false, 0);

    var activeTA = '<div class="color' + globalChartColours[colourIndex].replace('#', '') + ' active" style="display: block;">';
    activeTA += '<span>' + TAShort + '</span>';// | <div class="TASettings">Period: <input class="TASettingsInput" type="Number" value="10" /><div class="TASettingsUpdate" id="SimpleMovingAverage">Update</div></div>';
    //activeTA += '<div class="TASettings">Period: <input type="Number" value="10" /><div class="updateTASettings" id="SimpleMovingAverage">Update</div></div>';
    activeTA += '</div>';

    $('.IRChartTAPlaceholder').html(activeTA);

    stockDataTAHist = taDataHist;
    stockDataTAMACD = taDataMACD;
    stockDataTASignal = taDataSignal;

    globalChartDom.redraw();
}
function attachShowHideVolumeClickHandler() {
    debugStep("attachShowHideVolumeClickHandler()");
    $('.showHideVolume').on('click', function () {
        debugStep("showHideVolume click");
        var chart = getChartDOM();
        var series = chart.series[IRChartOutsideTechnicalAnalysis.chartVolumeIndex];

        if (series.visible) {
            series.hide();
        } else {
            series.show();
        }
    });
}
function attachshowHidePercentClickHandler() {
    debugStep("attachshowHidePercentClickHandler()");
    $('.showHidePercent').on('click', function () {
        showHidePercent();
    });
}
function showHidePercent() {
    debugStep("showHidePercent()");
    var chart = getChartDOM();
    var series = chart.series[0].yAxis;

    if (globalCompareState) {
        chart.yAxis[0].setCompare('value');
        globalCompareState = false;
    } else {
        chart.yAxis[0].setCompare('percent');
        globalCompareState = true;
    }
}
function attachFullscreenClickHandler() {
    debugStep("attachFullscreenClickHandler()");
    $('.toggleFullscreen').on('click', function () {
        //var elem = document.getElementById('IRChartModule');
        if (screenfull.enabled) {
            screenfull.request();
        } else {
            // Ignore or do something else
        }
    });
}
function attachPrintClickHandler() {
    debugStep("attachPrintClickHandler()");
    $('.printChart').on('click', function () {
        window.print();
    });
}

function download(value) {

    if (value == 'excel') {
        downloadExcelFile();
    } else if (value == 'html') {
        downloadHtml();
    }
};
//$('html').click(function () {
//    $('.selectWrapper').removeClass("open");
//    $('#liWrapper').css('display', 'none');
//});

function selectWrapperClickEvent() {
    debugStep('selectWrapperClickEvent()');
    //event.preventDefault();

    if ($('.selectWrapper').hasClass('open')) {
        $('#liWrapper').css('display', 'none');
        $('.selectWrapper').removeClass("open");
    } else {
        $('.selectWrapper').addClass("open");
        $('#liWrapper').css('display', 'block');

    }
}
function comparisonClickEvent() {
    debugStep('comparisonClickEvent');
    console.log($('.IRChartComparison').hasClass('active'));
    if ($('.IRChartComparisonBody').css('display') == 'none') {
        $('#chartComparisons').removeClass("active");
    
    } else {
        $('#chartComparisons').addClass("active");
    }

}




//function attachDownloadClickHandler() {
debugStep("attachDownloadClickHandler()");
$('.downloadHistoricalData').on('click', function () {

    var startDate = new moment(globalChartFromDate, 'YYYY-MM-DD')._d;
    var endDate = new moment(globalChartToDate, 'YYYY-MM-DD')._d;

    requestClosePriceListingData.done(function (closePrices) {
        var downscaledData = getCroppedDownscaledData(closePrices.data[globalActiveListingIndex].data, startDate, endDate);
        var stringified = JSV.stringify(downscaledData); // Using JSV because service engine expects that.
        var tableHeader = {
            t_date: translations.t_date,
            t_open: translations.t_open,
            t_high: translations.t_high,
            t_low: translations.t_low,
            t_close: translations.t_close,
            t_volume: translations.t_volume
        };

        ajax_download(getServiceEngingeURL() + "RequestClosePriceFileFromData", {
            data: stringified,
            headers: JSON.stringify(tableHeader),
            apiVersion: clientApiVersion,
            fileName: clientCustomerKeyRequired + '_historical.xlsx',
            solutionID: clientSolutionID,
            lcid: clientLCID,
            customerKey: clientCustomerKeyRequired,
            ContentType: "application/vnd.ms-excel"
        });

    });

});

function downloadExcelFile() {

    var startDate = new moment(globalChartFromDate, 'YYYY-MM-DD')._d;
    var endDate = new moment(globalChartToDate, 'YYYY-MM-DD')._d;

    requestClosePriceListingData.done(function (closePrices) {
        var downscaledData = getCroppedDownscaledData(closePrices.data[globalActiveListingIndex].data, startDate, endDate);
        var stringified = JSV.stringify(downscaledData); // Using JSV because service engine expects that.
        var tableHeader = {
            t_date: translations.t_date,
            t_open: translations.t_open,
            t_high: translations.t_high,
            t_low: translations.t_low,
            t_close: translations.t_close,
            t_volume: translations.t_volume
        };

        ajax_download(getServiceEngingeURL() + "RequestClosePriceFileFromData", {
            data: stringified,
            headers: JSON.stringify(tableHeader),
            apiVersion: clientApiVersion,
            fileName: clientCustomerKeyRequired + '_historical.xlsx',
            solutionID: clientSolutionID,
            lcid: clientLCID,
            customerKey: clientCustomerKeyRequired,
            ContentType: "application/vnd.ms-excel"
        });

    });

};

function downloadHtml() {

    var startDate = new moment(globalChartFromDate, 'YYYY-MM-DD');
    var endDate = new moment(globalChartToDate, 'YYYY-MM-DD');

    requestClosePriceListingData.done(function (closePrices) {

        var url = window.location.href;
        url += (url.indexOf("?") === -1) ? "?" : "&";
        url += "mode=list&from=" + startDate.format("YYYY-MM-DD") + "&to=" + endDate.format("YYYY-MM-DD") + "&frequency=daily";
        url += "&listing=" + globalActiveListingIndex;
        window.open(url.replace("chart.aspx", "lookup.aspx"), "_blank", "height=400,location=no,toolbars=no,resizable=yes,scrollbars=yes");

    });

};
//}
function getCroppedDownscaledData(stockData, fromDate, toDate) {
    debugStep("getCroppedDownscaledData");
    var croppedData = cropListToDateRange(stockData, fromDate, toDate);
    var downscaledData = downscaleData(croppedData);
    return stockDateToListDate(downscaledData).reverse();
}
function cropListToDateRange(list, from, to) {
    debugStep("cropListToDateRange");

    //Assumes that the list is sorted by date (ascending or descending - doesn't matter)!
    var startIndex = getIndexThatBestMatchesDate(list, "date", from),
        endIndex = getIndexThatBestMatchesDate(list, "date", to);


    if (startIndex > endIndex) {
        var tmpIndex = startIndex;
        startIndex = endIndex;
        endIndex = startIndex;
    }


    return list.slice(startIndex, endIndex + 1); // Slice makes the date format localized. TODO
}
function downscaleData(list) {
    debugStep("downscaleData");

    return list;


}
function stockDateToListDate(stockData, _dateProperty) {
    debugStep("stockDateToListDate");
    var transformedData = [],
         dateProperty = _dateProperty || "date";

    for (var i = 0; i < stockData.length; i++) {

        var entry = stockData[i];
        //entry[dateProperty] = new Date(entry[dateProperty]).toLocaleDateString();
        entry[dateProperty] = new moment(entry[dateProperty]).format(clientStyle.formatDate);
        transformedData.push(entry);

    }

    return transformedData;
}
function getIndexThatBestMatchesDate(array, key, pickedDate, roundUp) {
    debugStep("getIndexThatBestMatchesDate");
    var minIndex = 0;
    var maxIndex = array.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = array[currentIndex];

        var comparison = compareDates(new moment(new moment(currentElement[key]).format("YYYY-MM-DD"))._d, pickedDate);

        if (comparison === dateComparisons.BEFORE) {
            minIndex = currentIndex + 1;
        }
        else if (comparison === dateComparisons.AFTER) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }

    if (roundUp && new Date(currentElement[key]) < pickedDate) {
        currentIndex = Math.min(currentIndex + 1, array.length - 1);
    }

    return currentIndex;
}
var dateComparisons = {
    SAME: "same",
    BEFORE: "before",
    AFTER: "after"
}
function compareDates(dateToTest, compareToDate) {
    debugStep("compareDates");

    var _dateToTest = new moment(new moment(dateToTest).format("YYYY-MM-DD")).valueOf();
    var _compareToDate = new moment(new moment(compareToDate).format("YYYY-MM-DD")).valueOf();

    if (_dateToTest === _compareToDate) {
        return dateComparisons.SAME;
    }

    return (dateToTest < compareToDate) ? dateComparisons.BEFORE : dateComparisons.AFTER;
}
function ajax_download(url, data) {
    debugStep("ajax_download");
    var $iframe,
        iframe_doc,
        iframe_html;

    if (($iframe = $('#download_iframe')).length === 0) {
        $iframe = $("<iframe id='download_iframe' style='display: none' src='about:blank'></iframe>").appendTo("body");
    }

    iframe_doc = $iframe[0].contentWindow || $iframe[0].contentDocument;
    if (iframe_doc.document) {
        iframe_doc = iframe_doc.document;
    }

    iframe_html = "<html><head></head><body><form method='POST' action='" +
                  url + "'>"

    Object.keys(data).forEach(function (key) {
        iframe_html += "<input type='hidden' name='" + key + "' value='" + data[key] + "'>";
    });

    iframe_html += "</form></body></html>";

    iframe_doc.open();
    iframe_doc.write(iframe_html);
    $(iframe_doc).find('form').submit();
}
function updateTooltipTechnicalAnalysisCustom(date) {
    debugStep("updateTooltipTechnicalAnalysisCustom");

    var dateIndex;

    var topPxStyle = "";
    switch (globalActiveTAShort) {
        case "RSI":
            break;
        case "MACD":
            topPxStyle = "style=\"top: -36px\"";
        case "MA10":
        case "MA20":
        case "MA50":
            topPxStyle = "style=\"top: -9px\"";
            break;
    }

    var tooltipStr = "<div " + topPxStyle + " class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode unique" + chartEnabledFeatures.uniqueTooltip + "\">";
    try {
        dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
        tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
        tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
        tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
    }
    catch (err) {
        dateIndex = getClosestDateIndexForListingClosePrice(date);
        tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
        tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
        tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
    }

    switch (globalActiveTAShort) {

        case "RSI":
            try {
                dateIndex = stockDataTADates.indexOf(date);
                tooltipStr += "<div>" + getActiveTAShort() + ": " + formatDecimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
            }
            catch (err) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + getActiveTAShort() + ": " + formatDecimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
            }
            break;

        case "MACD":
            try {
                dateIndex = stockDataTADates.indexOf(date);
                tooltipStr += "<div>Hist: " + formatDecimal(stockDataTAHist[globalActiveListingIndex][dateIndex][1]) + "</div>";
                tooltipStr += "<div>MACD: " + formatDecimal(stockDataTAMACD[globalActiveListingIndex][dateIndex][1]) + "</div>";
                tooltipStr += "<div>Signal: " + formatDecimal(stockDataTASignal[globalActiveListingIndex][dateIndex][1]) + "</div>";
            }
            catch (err) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>Hist: " + formatDecimal(stockDataTAHist[globalActiveListingIndex][dateIndex][1]) + "</div>";
                tooltipStr += "<div>MACD: " + formatDecimal(stockDataTAMACD[globalActiveListingIndex][dateIndex][1]) + "</div>";
                tooltipStr += "<div>Signal: " + formatDecimal(stockDataTASignal[globalActiveListingIndex][dateIndex][1]) + "</div>";
            }
            break;

        case "MA10":
        case "MA20":
        case "MA50":
            try {
                dateIndex = stockDataTADates.indexOf(date);
                tooltipStr += "<div>" + getActiveTAShort() + ": " + formatDecimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
            }
            catch (err) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + getActiveTAShort() + ": " + formatDecimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
            }
            break;

    }
    tooltipStr += "</div>";

    return tooltipStr;
}
function updateTooltipDOHLCVNCustom(date) {
    debugStep("updateTooltipDOHLCVN");
    var dateIndex;
    var newsIndex;
    var value = "-";
    var tooltipStr = "";
    if (globalChartUseCustomTooltipContent) {
        tooltipStr = "<div class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode useFullOHLC" + clientStyle.chart_CustomTooltipUseFullOHLCV + " unique" + chartEnabledFeatures.uniqueTooltip + " \" style=\"top: " + clientStyle.chart_CustomTooltipTopPX + "px;\" >";
    } else {
        tooltipStr = "<div class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode useFullOHLC" + clientStyle.chart_CustomTooltipUseFullOHLCV + " unique" + chartEnabledFeatures.uniqueTooltip + " \">";
    }
    var tooltipStrSub = "";
    switch (globalChartActiveDisplayMode) {
        case chartDisplayModes.historical:
            try {
                dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
            }
            catch (err) {
                tooltipStrSub = "";
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
            }
            break;
        case chartDisplayModes.intraday:
            try {
                dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStrSub += getTooltipStrSubIntraday(dateIndex);
            }
            catch (err) {
                dateIndex = getClosestDateIndexForListingIntraday(date);
                tooltipStrSub += getTooltipStrSubIntraday(dateIndex);
            }
            break;
        case chartDisplayModes.tsr:
            var TSRDateIndex;
            try {
                TSRDateIndex = IRChartTSR.stockDataTSRCloneDates.indexOf(date);
                tooltipStrSub += getTooltipStrSubTSR(TSRDateIndex);
            } catch (err) {
                TSRDateIndex = getClosestDateIndexForListingTSR(date);
                tooltipStrSub += getTooltipStrSubTSR(TSRDateIndex);
            }
            break;
            //case chartDisplayModes.tsr:
            //    var TSRIndex;
            //    try {
            //        //dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
            //        //tooltipStrSub += getTooltipStrSubHistorical(dateIndex);

            //        TSRIndex = IRChartTSR.stockDataTSRCloneDates.indexOf(date);
            //        //debugError("NICE 1 - TSRIndex: " + TSRIndex);

            //        if (TSRIndex > -1) {
            //            debugError("OK 1");
            //            tooltipStrSub += getTooltipStrSubTSR(TSRIndex);
            //        } else {
            //            TSRIndex = getClosestDateIndexForListingTSR(date);
            //            debugError("OK 2");
            //            tooltipStrSub += getTooltipStrSubTSR(TSRIndex);
            //        }


            //    }
            //    catch (err) {
            //        tooltipStrSub = "";
            //        //dateIndex = getClosestDateIndexForListingClosePrice(date);
            //        //tooltipStrSub += getTooltipStrSubHistorical(dateIndex);

            //        TSRIndex = getClosestDateIndexForListingTSR(date);
            //        debugError("NICE 4 - TSRIndex: " + TSRIndex);
            //        tooltipStrSub += getTooltipStrSubTSR(TSRIndex);
            //    }
            //    break;
    }
    tooltipStr += tooltipStrSub;
    tooltipStr += "</div>";



    // NewsFlags
    if (useIRChartNews) {
        newsIndex = globalChartNewsDates.indexOf(date);
        if (newsIndex > -1) {

            var chartHeight = -1;
            var bottom = -1;
            var IRNewsHeadline = globalChartNewsHeadlines[newsIndex];

            if (IRNewsHeadline.length > 50) {
                IRNewsHeadline = IRNewsHeadline.substr(0, 50) + "...";
            }
            if (typeof ($(globalChartContainer).css('height')) == 'string') {
                var chartHeight = Number($(globalChartContainer).css('height').replace("px", ""));
                var bottom = (chartHeight - 300) * -1;
            }

            tooltipStr += "<div class=\"tooltipHtmlNews\" style=\"bottom: " + bottom + "px;\">";
            tooltipStr += "<div class=\"tooltipHtmlNewsDate\">" + new moment(globalChartNewsDates[newsIndex]).format(clientStyle.formatDate) + "</div>";
            tooltipStr += "<div class=\"tooltipHtmlNewsHeadline\">" + IRNewsHeadline + "</div>";
            tooltipStr += "</div>";
        }
    }
    if (useIRChartPressReleaseIRChartHeadline) {
        newsIndex = globalChartPressReleaseIRChartHeadlineDates.indexOf(date);

        if (newsIndex > -1) {

            var chartHeight = -1;
            var bottom = -1;
            var IRNewsHeadline = globalChartPressReleaseIRChartHeadlineHeadlines[newsIndex];

            if (IRNewsHeadline.length > 50) {
                IRNewsHeadline = IRNewsHeadline.substr(0, 50) + "...";
            }
            if (typeof ($(globalChartContainer).css('height')) == 'string') {
                var chartHeight = Number($(globalChartContainer).css('height').replace("px", ""));
                var bottom = (chartHeight - 300) * -1;
            }

            tooltipStr += "<div class=\"tooltipHtmlNews\" style=\"bottom: " + bottom + "px;\">";
            tooltipStr += "<div class=\"tooltipHtmlNewsDate\">" + new moment(globalChartPressReleaseIRChartHeadlineDates[newsIndex]).format(clientStyle.formatDate) + "</div>";
            tooltipStr += "<div class=\"tooltipHtmlNewsHeadline\">" + IRNewsHeadline + "</div>";
            tooltipStr += "</div>";
        }
    }
    return tooltipStr;
}

// Press Releases
function attachPressReleaseClickHandler() {
    debugStep("attachDownloadClickHandler()");

    $('.IRChartOutsidePressReleaseTrigger').on('click', function () {

        debugStep("showHidePressReleases (News)");

        if ($('.IRChartOutsidePressReleaseTrigger').hasClass('checked')) {
            prepareIRChartNews();
            var id = $(this).attr('id');
            IRChartOutsideTechnicalAnalysis.drawIRChartHtmlCustom(id);
            drawIRNewsToChartHistorical();
        } else {

            useIRChartNews = false;
            useNewsData = false;
            resetIRChart();
        }

    });



}
function prepareIRChartNews() {

    debugStep("prepareIRChartNews()");

    useIRChartNews = true;
    useNewsData = true;
    //loadNewsDataInitial();
    loadPressReleaseData();

    if (useIRChartPressRelease) {
        $.when(requestStockData, requestPressReleaseData).done(function (stockData, newsDataInitial) {
            var o = {
                headers: translations,
                data: newsDataInitial[0].data
            }
            preloadIRChartNewsHistoricalCustom(o);
        });
    }

    //if (useIRChartNews) {
    //    $.when(requestStockData, requestNewsDataInitial).done(function (stockData, newsDataInitial) {
    //        globalAmountOfNewsItems = newsDataInitial[0].data.length;
    //        var o = {
    //            headers: translations,
    //            data: newsDataInitial[0].data
    //        }
    //        //globalNewsRawData = o;
    //        preloadIRChartNewsHistoricalCustom(o);
    //    });
    //}

}
function preloadIRChartNewsHistoricalCustom(newsRawData) {

    var chartListingEarlyDate = globalChartListingStockDataDates[globalActiveListingIndex][0];

    var chartNewsHeadlines = [];
    var IRChartNewsHeadlines = [];
    var IRChartNewsDates = [];

    $.each(newsRawData.data, function (index, item) {

        var currentDate = new moment(item.publishTime);
        var currentUnixDateForChart = new moment(currentDate.format('YYYY-MM-DD')).valueOf();

        if (currentUnixDateForChart > chartListingEarlyDate) {

            chartNewsHeadlines.push({
                x: currentUnixDateForChart,
                events: {
                    mouseOver: function () {
                    },
                    click: function () {
                        //chartOpenNewsFromFlag(item);
                        $.each(item.keyValueSet, function (index, item) {
                            if (item.key == 'link') {
                                window.open(item.value);
                            }
                        });
                    }
                }
            });

            IRChartNewsDates.push(currentUnixDateForChart);
            IRChartNewsHeadlines.push(item.headline);
        }
    });

    globalChartNewsHeadlines = IRChartNewsHeadlines;
    globalChartNewsHeadlinesFlags = chartNewsHeadlines.reverse();
    globalChartNewsDates = IRChartNewsDates;
}

// Period High Low
function attachPeriodHighLowClickHandler() {

    debugStep("attachPeriodHighLowClickHandler()");

    $('.showHideHighLow').on('click', function () {

        if ($('.showHideHighLow').hasClass('checked')) {

            console.log("HighLow on");
            useHighLow = true;
            IRChartOutsideTechnicalAnalysis.drawIRChartHtmlCustom();
            //drawIRNewsToChartHistorical();
            drawHighLowPlotLineToChartCustom();
            globalChartDom.redraw();



        } else {

            console.log("HighLow off");
            useHighLow = false;
            useIRChartNews = false;
            useNewsData = false;
            resetIRChart();
        }


    });

}
function drawHighLowPlotLineToChartCustom() {
    debugStep("drawHighLowPlotLineToChartCustom()");

    // Todo get High/Low




    //// High
    //globalChartDom.yAxis[0].removePlotLine('chartPlotLineHigh');
    //globalChartDom.yAxis[0].addPlotLine({
    //    value: 2698,
    //    width: 1,
    //    color: 'green',
    //    dashStyle: 'dash',
    //    id: 'chartPlotLineHigh',
    //    zIndex: 1000,
    //    label: {
    //        text: 'High',
    //        align: 'left',
    //        y: 0,
    //        x: 0,
    //        width: 0,
    //        useHTML: true
    //    }
    //});


    //// Low
    //globalChartDom.yAxis[0].removePlotLine('chartPlotLineLow');
    //globalChartDom.yAxis[0].addPlotLine({
    //    value: 2413,
    //    width: 1,
    //    color: 'red',
    //    dashStyle: 'dash',
    //    id: 'chartPlotLineLow',
    //    zIndex: 1000,
    //    label: {
    //        text: 'Low',
    //        align: 'left',
    //        y: 0,
    //        x: 0,
    //        width: 0,
    //        useHTML: true
    //    }
    //});

    //globalChartDom = getChartDOM();

}
function removeHighLowPlotLineToChartCustom() {
    globalChartDom.yAxis[0].removePlotLine('chartPlotLineHigh');
    globalChartDom.yAxis[0].removePlotLine('chartPlotLineLow');
    globalChartDom = getChartDOM();
}
function updateHighLowPlotLineToChartCustom(extremes) {
    debugStep("updateHighLowPlotLineToChartCustom()");

    // High
    globalChartDom.yAxis[0].removePlotLine('chartPlotLineHigh');
    globalChartDom.yAxis[0].addPlotLine({
        value: extremes.dataMax,
        width: 1,
        color: 'green',
        dashStyle: 'dash',
        id: 'chartPlotLineHigh',
        zIndex: 1000,
        label: {
            text: 'High ' + formatDecimal(extremes.dataMax),
            align: 'left',
            y: -5,
            x: 5,
            width: 0,
            useHTML: false,
            style: {
                color: 'green'
            }
        }
    });

    // Low
    globalChartDom.yAxis[0].removePlotLine('chartPlotLineLow');
    globalChartDom.yAxis[0].addPlotLine({
        value: extremes.dataMin,
        width: 1,
        color: 'red',
        dashStyle: 'dash',
        id: 'chartPlotLineLow',
        zIndex: 1000,
        label: {
            text: 'Low ' + formatDecimal(extremes.dataMin),
            align: 'left',
            y: -5,
            x: 5,
            width: 0,
            useHTML: false,
            style: {
                color: 'red'
            }
        }
    });



}

var chartEnabledFeatures = {
    showVolume: false,
    showPressReleses: false,
    showEarnings: false,
    showPeriodHighLow: false,
    activeDrawType: 'area',
    activeChartMode: 'historical',
    activePeriod: 'y1',
    attachedClickHandlerIRChartChangePeriodCustom: false,
    uniqueTooltip: 'historical'

};
var chartDisplayModes = new function () {
    this.historical = 'historical',
    this.intraday = 'intraday',
    this.comparison = 'comparison',
    this.ta = 'ta',
    this.tsr = 'tsr'
};

function initChartBottomNavigation() {

    $('.featureCheckbox').on('click', function () {

        if ($(this).hasClass('checked')) {
            $(this).removeClass('checked');
        } else {
            $(this).addClass('checked');
        }

        drawChart.getSettings();
        drawChart.updateChart();

    });

    $('.diagramSelect').on('click', function () {

        $('.diagramSelect').removeClass('checked');
        $(this).addClass('checked');
        drawChart.getSettings();
        drawChart.updateChart();

    });

    $('.chartModeSelect').on('click', function () {

        $('.chartModeSelect').removeClass('checked');
        $(this).addClass('checked');


        drawChart.getSettings();
        drawChart.updateChart();

    });


}

var drawChart = {

    getSettings: function () {

        debugStep("drawChart: getSettings()");

        chartEnabledFeatures.showEarnings = $('#featureEarnings').hasClass('checked');
        chartEnabledFeatures.showPressReleses = $('#featurePressRelease').hasClass('checked');
        chartEnabledFeatures.showPeriodHighLow = $('#featurePeriodHighLow').hasClass('checked');
        chartEnabledFeatures.showVolume = $('#featureVolume').hasClass('checked');
        //chartEnabledFeatures.showVolume = true;

        chartEnabledFeatures.activeDrawType = $('.diagramSelect.checked').attr('id').replace('diagram', '');

        if (typeof ($('.chartModeSelect.checked').attr('id')) != 'undefined') {
            chartEnabledFeatures.activeChartMode = $('.chartModeSelect.checked').attr('id').replace('ta', '');
        }



        chartEnabledFeatures.activePeriod = this.getActivePeriod();
    },
    getActivePeriod: function () {
        var activePeriodDOM = $('.IRChartChangePeriodCustom .activePeriod').attr('id');
        return activePeriodDOM;
    },
    drawBasicChartHistorical: function () {

        debugStep("drawChart: drawBasicChartHistorical()");

        $(globalChartContainer).highcharts('StockChart', {
            colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
            chart: {
                alignTicks: true,
                borderWidth: 1,
                borderColor: clientStyle.chart_ColourBorder,
                backgroundColor: clientStyle.chart_ColourBackground,
                plotBackgroundColor: clientStyle.chart_ColourPlotBackground,
                marginRight: 70,
                marginLeft: 10,
                spacingTop: 30,
                plotBorderWidth: 1,
                plotBorderColor: clientStyle.chart_ColourBorder,
                animation: {
                    duration: globalChartAnimationMS
                },
                events: {
                    load: function () {
                        IRChartEventSendExtremes(this.xAxis[0].getExtremes());
                    },
                    redraw: function () {
                        IRChartEventSendExtremes(this.xAxis[0].getExtremes());
                        if (chartEnabledFeatures.showPeriodHighLow) {
                            updateHighLowPlotLineToChartCustom(this.yAxis[0].getExtremes());
                        }
                    }
                }

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
                    var date = Highcharts.dateFormat('%Y-%m-%d', this.x);

                    var time = Highcharts.dateFormat('%H:%M:%S', this.x);
                    var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                    var unixDate = new moment(date + 'T00:00:00.0000000Z').valueOf();
                    var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();

                    if (chartEnabledFeatures.activeChartMode == 'MA10' || chartEnabledFeatures.activeChartMode == 'MA20' || chartEnabledFeatures.activeChartMode == 'MA50') {
                        //return updateTooltipDOHLCVNCustom(unixDateTime); //UJRJR
                        return updateTooltipTechnicalAnalysisCustom(unixDateTime);
                    } else {

                        return updateTooltipDOHLCVNCustom(unixDateTime);
                    }
                },
                positioner: function (boxWidth, boxHeight, point) {
                    var chartWidth = $(globalChartContainer).width();
                    var plotX = point.plotX + 30;
                    var plotY = (boxHeight - 52);

                    if (plotX > chartWidth - boxWidth - 50) {
                        plotX = plotX - boxWidth - 40;
                    }

                    //
                    //  When tooltip overlap yAxis, make it static.
                    //  (chartWidth - X), X = yAxis width.
                    //
                    if (plotX > (chartWidth - 70)) {
                        plotX = (chartWidth - 70);
                    }
                    if (plotX < 0) {
                        plotX = 0;
                    }

                    if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
                        plotY = plotY + 12;
                    }

                    return { x: plotX, y: plotY };
                }
            },
            navigator: {
                outlineColor: clientStyle.chart_ColourBorder,
                maskInside: false,
                maskFill: 'rgba(255, 255, 255, 0.75)',
                handles: {
                    backgroundColor: clientStyle.chart_ColourBackground,
                    borderColor: '#aaa'
                },
                xAxis: {
                    ordinal: true
                },
                series: {
                    type: 'area',
                    lineWidth: 0,
                    fillColor: {
                        linearGradient: {
                            //x1: 0,
                            //y1: 0,
                            //x2: 0,
                            //y2: 1
                        },
                        stops: [
                            [0, clientStyle.chart_ColourMain]
                            //,
                            //[1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                        ]
                    }
                }
            },
            xAxis: {
                ordinal: true,
                lineWidth: 0,
                lineColor: clientStyle.chart_ColourBorder,
                tickLength: 0,
                gridLineWidth: 1,
                gridLineColor: '#eee',
                showFirstLabel: true,
                showLastLabel: true,
                startOnTick: true,
                endOnTick: true,
                showEmpty: false,
                type: 'datetime',
                tickPixelInterval: 70,
                labels: {
                    staggerLines: 1,
                    step: 2
                },
                dateTimeLabelFormats: getChartDateTimeLabelFormats(),
                minRange: globalChartMinRange
            },
            yAxis: [{
                lineWidth: 0,
                lineColor: clientStyle.chart_ColourBorder,
                gridLineWidth: 1,
                gridLineColor: '#eee',
                tickPixelInterval: 35,
                showFirstLabel: true,
                showLastLabel: false,
                startOnTick: true,
                endOnTick: true,
                opposite: true,
                labels: {
                    align: 'right',
                    x: 50,
                    y: 5,
                    formatter: function () {
                        return formatDecimal(this.value) + '';
                    }
                }
            }, {
                // Volume
                id: 'y2',
                opposite: true,
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
                showFirstLabel: false,
                //top: 346,
                //height: 50,
                top: '60%',
                height: '40%',
                showLastLabel: false
            }],
            scrollbar: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            rangeSelector: {
                enabled: false
            },
            plotOptions: {
                series: {
                    animation: {
                        duration: globalChartAnimationMS
                    }
                },
                line: {
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 10,
                        forced: true,
                        approximation: 'close'
                    }
                },
                area: {
                    threshold: null,
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 10,
                        forced: true,
                        approximation: 'close'
                    },
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, clientStyle.chart_ColourMain],
                            [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                        ]
                    }
                },
                column: {
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 10,
                        forced: true,
                        approximation: 'close'
                    },
                    color: clientStyle.chart_ColourVolumeBars
                },
                flags: {
                    useHTML: false,
                    enableMouseTracking: true,
                    stickyTracking: false,
                    stackDistance: 0,
                    showInLegend: false,
                    cursor: 'pointer',
                    shape: 'url(' + getProtocol() + '//ir.euroinvestor.com/inc/images/icons/newsFlag.png)',
                    lineWidth: 0,
                    title: '.',
                    style: {
                        color: '#fff'
                    },
                    tooltip: {
                        //pointFormatter: function ()
                        //{

                        //}
                    },
                    y: -21,
                    states: {
                        hover: {
                            fillColor: 'rgba(255,255,255,0.5)'
                        }
                    }

                }
            }
        });
        globalChartDom = getChartDOM();

    },
    drawBasicChartIntraday: function () {

        debugStep("drawChart: drawBasicChartIntraday()");

        globalChartMinRange = 1 * 24 * 3600 * 1000;

        $(globalChartContainer).highcharts('StockChart', {
            colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
            chart: {
                alignTicks: true,
                borderWidth: 1,
                borderColor: clientStyle.chart_ColourBorder,
                backgroundColor: clientStyle.chart_ColourBackground,
                plotBackgroundColor: clientStyle.chart_ColourPlotBackground,
                marginRight: 70,
                marginLeft: 10,
                spacingTop: 30,
                plotBorderWidth: 1,
                plotBorderColor: clientStyle.chart_ColourBorder,
                animation: {
                    duration: globalChartAnimationMS
                },
                events: {
                    load: function () {
                        IRChartEventSendExtremes(this.xAxis[0].getExtremes());
                    },
                    redraw: function () {

                        IRChartEventSendExtremes(this.xAxis[0].getExtremes());
                        if (chartEnabledFeatures.showPeriodHighLow) {
                            updateHighLowPlotLineToChartCustom(this.yAxis[0].getExtremes());
                        }
                    }
                }

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
                    var date = Highcharts.dateFormat('%Y-%m-%d', this.x);

                    var time = Highcharts.dateFormat('%H:%M:%S', this.x);
                    var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                    var unixDate = new moment(date + 'T00:00:00.0000000Z').valueOf();
                    var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();

                    return updateTooltipDOHLCVNCustom(unixDateTime);
                },
                positioner: function (boxWidth, boxHeight, point) {
                    var chartWidth = $(globalChartContainer).width();
                    var plotX = point.plotX + 30;
                    var plotY = (boxHeight - 52);

                    if (plotX > chartWidth - boxWidth - 50) {
                        plotX = plotX - boxWidth - 40;
                    }

                    //
                    //  When tooltip overlap yAxis, make it static.
                    //  (chartWidth - X), X = yAxis width.
                    //
                    if (plotX > (chartWidth - 70)) {
                        plotX = (chartWidth - 70);
                    }
                    if (plotX < 0) {
                        plotX = 0;
                    }

                    if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
                        plotY = plotY + 12;
                    }

                    return { x: plotX, y: plotY };
                }
            },
            navigator: {
                outlineColor: clientStyle.chart_ColourBorder,
                maskInside: false,
                maskFill: 'rgba(255, 255, 255, 0.75)',
                handles: {
                    backgroundColor: clientStyle.chart_ColourBackground,
                    borderColor: '#aaa'
                },
                xAxis: {
                    ordinal: true
                },
                series: {
                    type: 'area',
                    lineWidth: 0,
                    fillColor: {
                        linearGradient: {
                            //x1: 0,
                            //y1: 0,
                            //x2: 0,
                            //y2: 1
                        },
                        stops: [
                            [0, clientStyle.chart_ColourMain]
                            //,
                            //[1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                        ]
                    }
                }
            },
            xAxis: {
                ordinal: true,
                lineWidth: 0,
                lineColor: clientStyle.chart_ColourBorder,
                tickLength: 0,
                gridLineWidth: 1,
                gridLineColor: '#eee',
                showFirstLabel: true,
                showLastLabel: true,
                startOnTick: true,
                endOnTick: true,
                showEmpty: false,
                type: 'datetime',
                tickPixelInterval: 70,
                labels: {
                    staggerLines: 1,
                    step: 2
                },
                dateTimeLabelFormats: getChartDateTimeLabelFormats(),
                minRange: globalChartMinRange
            },
            yAxis: [{
                lineWidth: 0,
                lineColor: clientStyle.chart_ColourBorder,
                gridLineWidth: 1,
                gridLineColor: '#eee',
                tickPixelInterval: 35,
                showFirstLabel: true,
                showLastLabel: false,
                startOnTick: true,
                endOnTick: true,
                opposite: true,
                labels: {
                    align: 'right',
                    x: 50,
                    y: 5,
                    formatter: function () {
                        return formatDecimal(this.value) + '';
                    }
                }
            }, {
                // Volume
                id: 'y2',
                opposite: true,
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
                showFirstLabel: false,
                //top: 346,
                //height: 50,
                top: '60%',
                height: '40%',
                showLastLabel: false
            }],
            scrollbar: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            rangeSelector: {
                enabled: false
            },
            plotOptions: {
                series: {
                    animation: {
                        duration: globalChartAnimationMS
                    }
                },
                line: {
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 1,
                        forced: true
                    }
                },
                area: {
                    threshold: null,
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 1,
                        forced: true
                    },
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, clientStyle.chart_ColourMain],
                            [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                        ]
                    }
                },
                column: {
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 10,
                        forced: true,
                        approximation: 'close'
                    },
                    color: clientStyle.chart_ColourVolumeBars
                }
            }
        });
        globalChartDom = getChartDOM();

    },
    drawDualChart: function () {

        debugStep("drawChart: drawDualChart()");

        $(globalChartContainer).highcharts('StockChart', {
            colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
            chart: {
                alignTicks: true,
                borderWidth: 1,
                borderColor: clientStyle.chart_ColourBorder,
                backgroundColor: clientStyle.chart_ColourBackground,
                plotBackgroundColor: clientStyle.chart_ColourPlotBackground,
                marginRight: 70,
                marginLeft: 10,
                spacingTop: 30,
                plotBorderWidth: 1,
                plotBorderColor: clientStyle.chart_ColourBorder,
                animation: {
                    duration: globalChartAnimationMS
                },
                events: {
                    load: function () {
                        IRChartEventSendExtremes(this.xAxis[0].getExtremes());
                    },
                    redraw: function () {
                        IRChartEventSendExtremes(this.xAxis[0].getExtremes());
                        if (chartEnabledFeatures.showPeriodHighLow) {
                            updateHighLowPlotLineToChartCustom(this.yAxis[0].getExtremes());
                        }

                    }
                }
            },
            tooltip: {
                shadow: false,
                valueDecimals: clientStyle.amountOfDecimals,
                changeDecimals: 2,
                borderRadius: 0,
                borderWidth: 0,
                useHTML: true,
                shared: true,
                backgroundColor: 'rgba(255,255,255,0)',
                formatter: function () {
                    var date = Highcharts.dateFormat('%Y-%m-%d', this.x);
                    var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                    var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();
                    return updateTooltipTechnicalAnalysisCustom(unixDateTime);
                },
                positioner: function (boxWidth, boxHeight, point) {
                    var chartWidth = $(globalChartContainer).width();
                    var plotX = point.plotX + 30;
                    var plotY = (boxHeight - 52);

                    if (plotX > chartWidth - boxWidth - 50) {
                        plotX = plotX - boxWidth - 40;
                    }

                    //
                    //  When tooltip overlap yAxis, make it static.
                    //
                    if (plotX > (chartWidth - 180)) {
                        plotX = (chartWidth - 180);
                    }

                    if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
                        plotY = plotY + 12;
                    }

                    return { x: plotX, y: plotY };
                }
            },
            navigator: {
                outlineColor: clientStyle.chart_ColourBorder,
                adaptToUpdatedData: true,
                maskInside: false,
                maskFill: 'rgba(255, 255, 255, 0.75)',
                handles: {
                    backgroundColor: clientStyle.chart_ColourBackground,
                    borderColor: '#aaa'
                },
                xAxis: {
                    ordinal: true
                }
            },
            xAxis: {
                ordinal: false,
                lineWidth: 0,
                lineColor: clientStyle.chart_ColourBorder,
                tickLength: 0,
                gridLineWidth: 1,
                gridLineColor: '#eee',
                showFirstLabel: true,
                showLastLabel: true,
                startOnTick: true,
                endOnTick: true,
                showEmpty: false,
                type: 'datetime',
                tickPixelInterval: 70,
                labels: {
                    staggerLines: 1,
                    step: 2
                },
                dateTimeLabelFormats: getChartDateTimeLabelFormats(),
                minRange: globalChartMinRange
            },
            yAxis: [{
                lineWidth: 0,
                lineColor: clientStyle.chart_ColourBorder,
                gridLineWidth: 1,
                gridLineColor: '#eee',
                tickPixelInterval: 35,
                showFirstLabel: false,
                showLastLabel: false,
                startOnTick: true,
                endOnTick: true,
                opposite: true,
                labels: {
                    align: 'right',
                    x: 50,
                    y: 5,
                    formatter: function () {
                        return formatDecimal(this.value) + '';
                    }
                },
                top: '0%',
                height: '60%'
            }, {
                // Volume
                id: 'y2',
                opposite: true,
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
                showFirstLabel: false,
                //top: 346,
                //height: 50,
                top: '20%',
                height: '40%',
                showLastLabel: false
            }, {
                // TA
                id: 'ta1',
                opposite: true,
                top: '65%',
                height: '35%',
                gridLineWidth: 1,
                gridLineColor: '#eee',
                labels: {
                    align: 'right',
                    x: 50,
                    y: 5,
                    style: {
                        color: '#aaa',
                    },
                    formatter: function () {
                        return formatDecimal(this.value) + '';
                    }
                }
            }],
            scrollbar: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            rangeSelector: {
                enabled: false
            },
            plotOptions: {
                series: {
                    animation: {
                        duration: globalChartAnimationMS
                    }
                },
                line: {
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 10,
                        forced: true,
                        approximation: 'close'
                    }
                },
                spline: {
                    marker: {
                        symbol: 'circle',
                        radius: 2
                    },
                    states: {
                        hover: {
                            enabled: true,
                            lineWidth: 2,
                            halo: {
                                opacity: 0,
                                size: 2
                            }
                        }
                    }
                },
                area: {
                    threshold: null,
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 10,
                        forced: true,
                        approximation: 'close'
                    },
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.50).get('rgba')],
                            [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                        ]
                    }
                },
                areaspline: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.50).get('rgba')],
                            [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                        ]
                    },
                    marker: {
                        symbol: 'circle',
                        radius: 2
                    },
                    states: {
                        hover: {
                            enabled: true,
                            lineWidth: 2,
                            halo: {
                                opacity: 0,
                                size: 2
                            }
                        }
                    }
                },
                column: {
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 10,
                        forced: true,
                        approximation: 'close'
                    }
                },
                flags: {
                    useHTML: false,
                    enableMouseTracking: true,
                    stickyTracking: false,
                    stackDistance: 0,
                    showInLegend: false,
                    //backgroundColor: 'rgba(255,255,255,0)',
                    cursor: 'pointer',
                    //fillColor: 'rgba(255,255,255,0)',
                    shape: 'url(' + getProtocol() + '//ir.euroinvestor.com/inc/images/icons/newsFlag.png)',
                    lineWidth: 0,
                    title: '.',
                    style: {
                        color: '#fff'
                    },
                    tooltip: {
                        //pointFormatter: function ()
                        //{

                        //}
                    },
                    y: -21,
                    states: {
                        hover: {
                            fillColor: 'rgba(255,255,255,0.5)'
                        }
                    }

                }
            }
        });
        globalChartDom = getChartDOM();

    },
    addMainListing: function () {

        var data = globalChartListingStockData[globalActiveListingIndex];
        if (chartEnabledFeatures.activeDrawType.toLowerCase() == 'candlestick' || chartEnabledFeatures.activeDrawType.toLowerCase() == 'ohlc') {
            data = globalChartListingStockDataOHLCV[globalActiveListingIndex];
        }


        globalChartDom.addSeries({
            index: 1,
            data: data,
            color: clientStyle.chart_ColourMain,
            yAxis: 0,
            visible: true,
            linkedTo: 0,
            type: chartEnabledFeatures.activeDrawType.toLowerCase(),
            zIndex: 2
        }, false, 0);
    },
    addMainListingIntraday: function () {

        var data = globalChartListingIntradayData[globalActiveListingIndex];
        if (chartEnabledFeatures.activeDrawType.toLowerCase() == 'candlestick' || chartEnabledFeatures.activeDrawType.toLowerCase() == 'ohlc') {
            data = globalChartListingIntradayDataOHLCV[globalActiveListingIndex];
        }


        globalChartDom.addSeries({
            index: 1,
            data: data,
            color: clientStyle.chart_ColourMain,
            yAxis: 0,
            visible: true,
            linkedTo: 0,
            type: chartEnabledFeatures.activeDrawType.toLowerCase(),
            zIndex: 2
        }, false, 0);
    },
    addRSI: function () {
        loadAnalysisRelativeStrengthIndex(clientStyle.amountOfHistoricalYears, 14);
    },
    addMACD: function () {
        loadAnalysisMovingAverageConvergenceDivergence(clientStyle.amountOfHistoricalYears, 12, 26, 9);
    },
    addMA10: function () {
        loadAnalysisSimpleMovingAverage(clientStyle.amountOfHistoricalYears, 10);
    },
    addMA20: function () {
        loadAnalysisSimpleMovingAverage(clientStyle.amountOfHistoricalYears, 20);
    },
    addMA50: function () {
        loadAnalysisSimpleMovingAverage(clientStyle.amountOfHistoricalYears, 50);
    },
    addVolume: function () {

        switch (chartEnabledFeatures.activeChartMode) {
            case chartDisplayModes.intraday:

                globalChartDom.addSeries({
                    index: 3,
                    data: globalChartListingIntradayDataVolume[globalActiveListingIndex],
                    yAxis: 1,
                    visible: true,
                    linkedTo: 0,
                    type: 'column'
                }, false, 0);

                break;
            default:

                globalChartDom.addSeries({
                    index: 3,
                    data: globalChartListingStockDataVolume[globalActiveListingIndex],
                    yAxis: 1,
                    visible: true,
                    linkedTo: 0,
                    type: 'column'
                }, false, 0);

                break;

        }


    },
    addChartNews: function () {

        globalChartDom.addSeries({
            allowPointSelect: true,
            type: 'flags',
            data: globalChartNewsHeadlinesFlags,
            zIndex: 10
        });

    },
    updateChart: function () {

        debugStep("drawChart: drawIRChartHtmlCustom()");

        //globalChartDom.destroy();
        $('.IRChartTAPlaceholder').html("");

        chartEnabledFeatures.uniqueTooltip = chartEnabledFeatures.activeChartMode;

        if (chartEnabledFeatures.activeChartMode == 'historical') {
            globalChartActiveDisplayMode = chartEnabledFeatures.activeChartMode;

            this.drawBasicChartHistorical();
            this.addMainListing();
        }
        if (chartEnabledFeatures.activeChartMode == 'MA10' ||
            chartEnabledFeatures.activeChartMode == 'MA20' ||
            chartEnabledFeatures.activeChartMode == 'MA50') {
            this.drawBasicChartHistorical();
            this.addMainListing();
        }
        if (chartEnabledFeatures.activeChartMode == 'intraday') {
            globalChartActiveDisplayMode = chartEnabledFeatures.activeChartMode;

            if (chartEnabledFeatures.activeDrawType == "OHLC" || chartEnabledFeatures.activeDrawType == 'Candlestick') {
                //chartEnabledFeatures.activeDrawType = "Area";
                //$('.diagramSelect').removeClass('checked');
                //$('.diagramSelect#diagramArea').addClass('checked');
            }

            this.drawBasicChartIntraday();
            this.addMainListingIntraday();
        }
        if (chartEnabledFeatures.activeChartMode == 'RSI' ||
            chartEnabledFeatures.activeChartMode == 'MACD') {
            this.drawDualChart();
            this.addMainListing();
        }
        if (chartEnabledFeatures.showVolume) {
            this.addVolume();
        }

        if (chartEnabledFeatures.showPressReleses) {
            this.addChartNews();
        }

        if (chartEnabledFeatures.activeChartMode == 'RSI') {
            this.addRSI();
            globalActiveTAShort = 'RSI';
            $.when(requestAnalysisRelativeStrengthIndexData).done(function (data) {

                var colourIndex = 0;

                stockDataTA.push([]);
                var TAArrayForChart = [];
                $.each(data.data, function (listingIndex, item) {
                    TAArrayForChart.push([getUnixFromDate(item.date), item.result]);
                    stockDataTADates.push(getUnixFromDate(item.date));
                });
                stockDataTA[0] = TAArrayForChart;

                globalChartDom.addSeries({
                    id: 42,
                    index: 1,
                    data: stockDataTA[0],
                    color: globalChartColours[colourIndex],
                    yAxis: 2,
                    name: 'TA',
                    visible: true,
                    linkedTo: 2,
                    type: 'spline'
                }, false, 0);

                var activeTA = '<div class="color' + globalChartColours[colourIndex].replace('#', '') + ' active" style="display: block;">';
                activeTA += '<span>RSI</span>';
                activeTA += '</div>';

                $('.IRChartTAPlaceholder').html(activeTA);

                globalChartDom.redraw();

            });
        }
        if (chartEnabledFeatures.activeChartMode == 'MACD') {
            this.addMACD();
            globalActiveTAShort = 'MACD';
            $.when(requestAnalysisMovingAverageConvergenceDivergence).done(function (data) {

                var colourIndex = 0;
                var globalActiveTAShort = 'MACD';

                var taDataHist = [];
                var taDataMACD = [];
                var taDataSignal = [];

                taDataHist.push([]);
                taDataMACD.push([]);
                taDataSignal.push([]);

                var TAArrayForChartHist = [];
                var TAArrayForChartMACD = [];
                var TAArrayForChartSignal = [];

                $.each(data.data, function (listingIndex, item) {

                    stockDataTADates.push(getUnixFromDate(item.date));

                    TAArrayForChartHist.push([getUnixFromDate(item.date), item.hist])
                    TAArrayForChartMACD.push([getUnixFromDate(item.date), item.macd])
                    TAArrayForChartSignal.push([getUnixFromDate(item.date), item.signal])

                });
                taDataHist[0] = TAArrayForChartHist;
                taDataMACD[0] = TAArrayForChartMACD;
                taDataSignal[0] = TAArrayForChartSignal;

                // MACD Hist
                globalChartDom.addSeries({
                    id: 42,
                    index: 1,
                    data: taDataHist[0],
                    color: stockDataTAColours.MACDHist,
                    yAxis: 2,
                    name: 'TA',
                    visible: true,
                    linkedTo: 2,
                    type: 'spline'
                }, false, 0);
                // MACD
                globalChartDom.addSeries({
                    id: 42,
                    index: 2,
                    data: taDataMACD[0],
                    color: globalChartColours[0],
                    yAxis: 2,
                    name: 'TA',
                    visible: true,
                    linkedTo: 1,
                    type: 'areaspline'
                }, false, 0);
                // MACD Signal
                globalChartDom.addSeries({
                    id: 42,
                    index: 3,
                    data: taDataSignal[0],
                    color: stockDataTAColours.MACDSignal,
                    yAxis: 2,
                    name: 'TA',
                    visible: true,
                    linkedTo: 2,
                    type: 'spline'
                }, false, 0);

                var activeTA = '<div class="color' + globalChartColours[colourIndex].replace('#', '') + ' active" style="display: block;">';
                activeTA += '<span>MACD</span>';
                activeTA += '</div>';

                $('.IRChartTAPlaceholder').html(activeTA);

                stockDataTAHist = taDataHist;
                stockDataTAMACD = taDataMACD;
                stockDataTASignal = taDataSignal;

                globalChartDom.redraw();

            });
        }

        if (chartEnabledFeatures.activeChartMode == 'MA10' ||
            chartEnabledFeatures.activeChartMode == 'MA20' ||
            chartEnabledFeatures.activeChartMode == 'MA50') {


            if (chartEnabledFeatures.activeChartMode == 'MA10') {
                this.addMA10();
                globalActiveTAShort = chartEnabledFeatures.activeChartMode;
            }
            if (chartEnabledFeatures.activeChartMode == 'MA20') {
                this.addMA20();
                globalActiveTAShort = chartEnabledFeatures.activeChartMode;
            }
            if (chartEnabledFeatures.activeChartMode == 'MA50') {
                this.addMA50();
                globalActiveTAShort = chartEnabledFeatures.activeChartMode;
            }

            $.when(requestAnalysisSimpleMovingAverageData).done(function (data) {



                var colourIndex = 0;

                stockDataTA.push([]);
                var TAArrayForChart = [];
                $.each(data.data, function (listingIndex, item) {
                    TAArrayForChart.push([getUnixFromDate(item.date), item.result]);
                    stockDataTADates.push(getUnixFromDate(item.date));
                });
                stockDataTA[0] = TAArrayForChart;

                globalChartDom.addSeries({
                    id: 42,
                    index: 1,
                    data: stockDataTA[0],
                    color: globalChartColours[colourIndex],
                    yAxis: 0,
                    name: 'TA',
                    visible: true,
                    linkedTo: 0,
                    type: 'line'
                }, false, 0);

                var activeTA = '<div class="color' + globalChartColours[colourIndex].replace('#', '') + ' active" style="display: block;">';
                activeTA += '<span>' + chartEnabledFeatures.activeChartMode + '</span>';// | <div class="TASettings">Period: <input class="TASettingsInput" type="Number" value="10" /><div class="TASettingsUpdate" id="SimpleMovingAverage">Update</div></div>';
                //activeTA += '<div class="TASettings">Period: <input type="Number" value="10" /><div class="updateTASettings" id="SimpleMovingAverage">Update</div></div>';
                activeTA += '</div>';

                $('.IRChartTAPlaceholder').html(activeTA);

                globalChartDom.redraw();

            });
        }

        drawPlotLineToChart();
        drawChartHeadlineClientName();
        drawChartCurrency();
        globalChartDom.redraw();

        updateChartNavBarRange('IRChart');

        this.addChartChangePeriodCustomClickHandler();
        this.updateActiveChartNavBarRangePeriodCustom(chartEnabledFeatures.activePeriod);
        this.setChartExtremes(chartEnabledFeatures.activeChartMode, chartEnabledFeatures.activePeriod);

    },
    setChartExtremes: function (mode, period) {
        debugStep("setChartExtremes(" + mode + "," + period + ")");

        switch (period) {
            case 'd1':
                period = 24;
                break;
            case 'd5':
                period = 24 * 5;
                break;
            case 'm1':
                period = 30;
                break;
            case 'm3':
                period = 90;
                break;
            case 'm6':
                period = 180;
                break;
            case 'y1':
                period = 360;
                break;
            case 'y2':
                period = 360 * 2;
                break;
            case 'Max':
            case 'max':
                period = 9999;
                break;
            default:
                period = 360 * 5;
                break;
        }

        switch (mode) {
            case "RSI":
            case "MACD":
            case "MA10":
            case "MA20":
            case "MA50":
            case chartDisplayModes.historical:
                var length = globalChartListingStockDataDates[globalActiveListingIndex].length - 1;
                var lastEntryUnixDate = globalChartListingStockDataDates[globalActiveListingIndex][length];
                var firstEntryUnix = globalChartListingStockDataDates[globalActiveListingIndex][0];
                var firstDate = moment.utc(firstEntryUnix);
                var fromDate = moment.utc(lastEntryUnixDate);
                var toDate = moment.utc(lastEntryUnixDate);
                if (period == 9999) {
                    globalChartDom.xAxis[0].setExtremes(
                        Date.UTC(firstDate.year(), firstDate.month(), firstDate.date(), firstDate.hour(), firstDate.minute()),
                        Date.UTC(toDate.year(), toDate.month(), toDate.date(), toDate.hour(), toDate.minute())
                    );
                } else {
                    fromDate.add('days', -period);
                    globalChartDom.xAxis[0].setExtremes(
                        Date.UTC(fromDate.year(), fromDate.month(), fromDate.date(), fromDate.hour(), fromDate.minute()),
                        Date.UTC(toDate.year(), toDate.month(), toDate.date(), toDate.hour(), toDate.minute())
                    );
                }
                break;
            case chartDisplayModes.intraday:

                var length = globalChartListingIntradayData[globalActiveListingIndex].length - 1;
                if (length == -1) {
                    break;
                }
                var lastEntryUnixDate = globalChartListingIntradayData[globalActiveListingIndex][length][0];
                var firstEntryUnix = globalChartListingIntradayData[globalActiveListingIndex][0][0];

                var firstDate = moment.utc(firstEntryUnix);
                var fromDate = moment.utc(lastEntryUnixDate);
                var toDate = moment.utc(lastEntryUnixDate);

                if (period == 120) {
                    globalChartDom.xAxis[0].setExtremes(
                        Date.UTC(firstDate.year(), firstDate.month(), firstDate.date(), firstDate.hour(), firstDate.minute()),
                        Date.UTC(toDate.year(), toDate.month(), toDate.date(), toDate.hour(), toDate.minute())
                    );
                } else {
                    fromDate.add('hours', -period);
                    globalChartDom.xAxis[0].setExtremes(
                        Date.UTC(fromDate.year(), fromDate.month(), fromDate.date(), fromDate.hour(), fromDate.minute()),
                        Date.UTC(toDate.year(), toDate.month(), toDate.date(), toDate.hour(), toDate.minute())
                    );
                    globalChartDom.redraw();
                }

                break;
        }

    },
    updateActiveChartNavBarRangePeriodCustom: function (period) {
        debugStep("updateActiveChartNavBarRangePeriodCustom(" + period + ")");
        $('div.IRChartChangePeriodCustom div').removeClass('activePeriod');
        $('div.IRChartChangePeriodCustom div#' + period).addClass('activePeriod');

    },
    addChartChangePeriodCustomClickHandler: function () {
        debugStep("addChartChangePeriodCustomClickHandler");

        if (!chartEnabledFeatures.attachedClickHandlerIRChartChangePeriodCustom) {
            $('.IRChartChangePeriodCustom div').click(function () {
                var days = -1;
                var hours = -1;
                var e = $(this).attr('id');

                switch (e) {
                    case 'd1':
                        hours = 24;
                        break;
                    case 'd5':
                        hours = 24 * 5;
                        break;
                    case 'm1':
                        days = 30;
                        break;
                    case 'm3':
                        days = 90;
                        break;
                    case 'm6':
                        days = 180;
                        break;
                    case 'y1':
                        days = 360;
                        break;
                    case 'y2':
                        days = 360 * 2;
                        break;
                    case 'max':
                        days = 9999;
                        break;
                    default:
                        days = 360 * 5;
                        break;
                }

                drawChart.updateActiveChartNavBarRangePeriodCustom(e);

                if (days > 0) {
                    drawChart.stateNewHistoricalPeriodSelectedCustom(days);
                }

                if (hours > 0) {
                    drawChart.stateNewIntradayPeriodSelectedCustom(hours);
                }

            });
            chartEnabledFeatures.attachedClickHandlerIRChartChangePeriodCustom = true;
        }
    },
    stateNewHistoricalPeriodSelectedCustom: function (days) {
        debugStep("stateNewHistoricalPeriodSelectedCustom(" + days + ")");

        $('.chartModeSelect#historical').removeClass("checked");
        chartEnabledFeatures.activeChartMode = chartDisplayModes.historical;
        drawChart.getSettings();
        drawChart.updateChart();

    },
    stateNewIntradayPeriodSelectedCustom: function (hours) {
        debugStep("stateNewIntradayPeriodSelected(" + hours + ")");

        $('.chartModeSelect#historical').removeClass("checked");
        chartEnabledFeatures.activeChartMode = chartDisplayModes.intraday;
        if (chartEnabledFeatures.activeDrawType == 'Candlestick' || chartEnabledFeatures.activeDrawType == 'OHLC') {
            // JRJR

            $('.diagramSelect').removeClass('checked');
            $('.diagramSelect#diagramArea').addClass('checked');

        }
        drawChart.getSettings();
        drawChart.updateChart();

    }
};


function drawIRChartHTMLCompare() {
    debugStep("drawIRChartHTMLCompare");

    globalChartWidth = $(globalChartContainer).css('width').replace('px', '');

    $(globalChartContainer).highcharts('StockChart', {
        colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
        chart: {
            alignTicks: true,
            borderWidth: 1,
            borderColor: clientStyle.chart_ColourBorder,
            backgroundColor: clientStyle.chart_ColourBackground,
            plotBackgroundColor: clientStyle.chart_ColourPlotBackground,
            marginRight: 70,
            marginLeft: 10,
            spacingTop: 30,
            plotBorderWidth: 1,
            plotBorderColor: clientStyle.chart_ColourBorder,
            animation: {
                duration: globalChartAnimationMS
            },
            events: {
                load: function (e) {
                    IRChartEventSendExtremes(this.xAxis[0].getExtremes());
                    IRChartEventUpdateIRChartComparisonPlotLine(this.xAxis[0].getExtremes(), e);
                },
                redraw: function (e) {
                    IRChartEventSendExtremes(this.xAxis[0].getExtremes());
                    IRChartEventUpdateIRChartComparisonPlotLine(this.xAxis[0].getExtremes(), e);
                }
            }
        },
        tooltip: {
            shadow: false,
            valueDecimals: clientStyle.amountOfDecimals,
            changeDecimals: 2,
            borderRadius: 0,
            borderWidth: 0,
            useHTML: true,
            shared: true,
            backgroundColor: 'rgba(255,255,255,0)',
            formatter: function () {
                var date = Highcharts.dateFormat('%Y-%m-%d', this.x);
                var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();
                return updateTooltipComparisonDC(unixDateTime);
            },
            positioner: function (boxWidth, boxHeight, point) {
                var chartWidth = $(globalChartContainer).width();
                var plotX = point.plotX + 30;
                var plotY = (boxHeight - 52);

                if (plotX > chartWidth - boxWidth - 50) {
                    plotX = plotX - boxWidth - 40;
                }

                //
                //  When tooltip overlap yAxis, make it static.
                //
                if (plotX > (chartWidth - 180)) {
                    plotX = (chartWidth - 180);
                }

                if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
                    plotY = plotY + 12;
                }

                return { x: plotX, y: plotY };
            }
        },

        //tooltip: {
        //    shadow: false,
        //    valueDecimals: clientStyle.amountOfDecimals,
        //    changeDecimals: 2,
        //    borderRadius: 0,
        //    borderWidth: 0,
        //    shared: true,
        //    useHTML: true,
        //    backgroundColor: 'rgba(255,255,255,0)',
        //    formatter: function ()
        //    {
        //        var date = Highcharts.dateFormat('%Y-%m-%d', this.x);

        //        var time = Highcharts.dateFormat('%H:%M:%S', this.x);
        //        var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
        //        var unixDate = new moment(date + 'T00:00:00.0000000Z').valueOf();
        //        var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();

        //        //return updateTooltipDOHLCV(unixDateTime);

        //        if (useIRChartNews) {
        //            return updateTooltipDOHLCVN(unixDateTime);
        //        } else {
        //            return updateTooltipDOHLCV(unixDateTime);
        //        }


        //    },
        //    positioner: function (boxWidth, boxHeight, point)
        //    {
        //        var chartWidth = $(globalChartContainer).width();
        //        var plotX = point.plotX + 30;
        //        var plotY = (boxHeight - 52);

        //        if (plotX > chartWidth - boxWidth - 50) {
        //            plotX = plotX - boxWidth - 40;
        //        }

        //        //
        //        //  When tooltip overlap yAxis, make it static.
        //        //
        //        if (plotX > (chartWidth - 180)) {
        //            plotX = (chartWidth - 180);
        //        }

        //        if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
        //            plotY = plotY + 12;
        //        }

        //        return { x: plotX, y: plotY };
        //    }
        //},
        navigator: {
            outlineColor: clientStyle.chart_ColourBorder,
            adaptToUpdatedData: true,
            maskInside: false,
            maskFill: 'rgba(255, 255, 255, 0.75)',
            handles: {
                backgroundColor: clientStyle.chart_ColourBackground,
                borderColor: '#aaa'
            },
            xAxis: {
                ordinal: true,
                gridLineColor: '#aaa'
            },
            series: {
                type: 'area',
                lineWidth: 0,
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, clientStyle.chart_ColourMain]
                        //,
                        //[1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                    ]
                }
            }
        },
        xAxis: {
            ordinal: true,
            align: 'center',
            lineWidth: 0,
            lineColor: clientStyle.chart_ColourBorder,
            tickLength: 0,
            gridLineWidth: 1,
            gridLineColor: '#eee',
            showFirstLabel: false,
            showLastLabel: false,
            startOnTick: true,
            endOnTick: true,
            showEmpty: false,
            type: 'datetime',
            overflow: 'justify',
            tickPixelInterval: 70,
            labels: {
                staggerLines: 1,
                align: 'center',
                step: 1,
                useHTML: true,
                formatter: function () {
                    var formattedXLabel = '';
                    var ts = new moment.tz(this.value, globalActiveExchangeTimeZone);
                    var date = new moment.tz(this.value, globalActiveExchangeTimeZone).format("YYYY-MM-DD");
                    var time = new moment.tz(this.value, globalActiveExchangeTimeZone).format("HH:mm");
                    var day = new moment.tz(this.value, globalActiveExchangeTimeZone).format("DD");
                    if (globalChartListingHistoricalLastKnownMomentDate == null) {
                        globalChartListingHistoricalLastKnownMomentDate = ts;
                    }
                    switch (globalChartActiveDisplayMode) {
                        case chartDisplayModes.comparison:
                            switch (globalActivePeriod) {
                                case "m1":
                                case "m3":
                                case "m6":
                                case "y1":
                                case "y2":
                                case "y5":
                                case "max":
                                case "Max":
                                    if (globalChartListingHistoricalLastKnownMomentDate.format("YYYY") != ts.format("YYYY")) {
                                        formattedXLabel = '<span class="IRChartXAxisHeader">' + ts.format("YYYY") + '</span>';
                                    } else if (globalChartListingHistoricalLastKnownMomentDate.format("MM") != ts.format("MM")) {
                                        formattedXLabel = '<span class="">' + translateMonthShort(ts.format("MMM")) + '</span>';
                                    } else if (globalChartListingHistoricalLastKnownMomentDate.format("DD") != ts.format("DD")) {
                                        formattedXLabel = '<span class="">' + ts.format("DD") + '</span>';
                                    }
                                    break;
                                default:
                                    formattedXLabel = date;
                                    break;
                            }
                            globalChartListingHistoricalLastKnownMomentDate = new moment(this.value);
                            break;
                    }
                    return formattedXLabel;
                }
            },
            dateTimeLabelFormats: getChartDateTimeLabelFormats()
            //minRange: globalChartMinRange
        },
        yAxis: [{
            lineWidth: 0,
            lineColor: clientStyle.chart_ColourBorder,
            gridLineWidth: 1,
            gridLineColor: '#eee',
            tickPixelInterval: 35,
            showFirstLabel: true,
            showLastLabel: false,
            startOnTick: true,
            endOnTick: true,
            opposite: true,
            labels: {
                align: 'right',
                x: 50,
                y: 5,
                formatter: function () {
                    return formatDecimal(this.value) + '';
                }
            }
        }, {
            // Volume
            id: 'y2',
            opposite: true,
            labels: {
                enabled: false
            },
            gridLineWidth: 0,
            showFirstLabel: false,
            //top: 346,
            //height: 50,
            top: '60%',
            height: '40%',
            showLastLabel: false
        }],
        scrollbar: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        rangeSelector: {
            enabled: false
        },
        plotOptions: {
            series: {
                animation: {
                    duration: globalChartAnimationMS
                },
                marker: {
                    symbol: 'circle',
                    radius: 2
                },
                states: {
                    hover: {
                        enabled: true,
                        lineWidth: 2,
                        halo: {
                            opacity: 0,
                            size: 2
                        }
                    }
                }
            },
            line: {
                animation: {
                    duration: globalChartAnimationMS
                },
                dataGrouping: {
                    enabled: true,
                    groupPixelWidth: 10,
                    forced: true,
                    approximation: 'close'
                }
            },
            area: {
                threshold: null,
                animation: {
                    duration: globalChartAnimationMS
                },
                dataGrouping: {
                    enabled: true,
                    groupPixelWidth: 10,
                    forced: true,
                    approximation: 'close'
                },
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, clientStyle.chart_ColourMain]
                        //,
                        //[1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                    ]
                }
            },
            column: {
                animation: {
                    duration: globalChartAnimationMS
                },
                dataGrouping: {
                    enabled: true,
                    groupPixelWidth: 10,
                    forced: true,
                    approximation: 'close'
                }
            },
            flags: {
                useHTML: false,
                enableMouseTracking: true,
                stickyTracking: false,
                stackDistance: 0,
                showInLegend: false,
                //backgroundColor: 'rgba(255,255,255,0)',
                cursor: 'pointer',
                //fillColor: 'rgba(255,255,255,0)',
                shape: 'url(' + getProtocol() + '//ir.euroinvestor.com/inc/images/icons/newsFlag.png)',
                //shape: 'url(http://ir.euroinvestor.com/inc/images/icons/newsFlag.png)',
                lineWidth: 0,
                title: '.',
                style: {
                    color: '#fff'
                },
                tooltip: {
                    //pointFormatter: function ()
                    //{

                    //}
                },
                y: -21,
                states: {
                    hover: {
                        fillColor: 'rgba(255,255,255,0.5)'
                    }
                }

            }
        }
    });
}

function drawIRChartHTML() {
    debugStep("drawIRChartHTML");

    //globalChartWidth = $(globalChartContainer).css('width').replace('px', '');
    //globalChartWidth = $(globalChartContainer).width();

    //debugStep("globalChartWidth: " + globalChartWidth);

    //if (globalChartWidth < globalChartReduceHeightAtPX) {
    //    $(globalChartContainer).css('height', '300px');
    //}
    $(globalChartContainer).highcharts('StockChart', {
        colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
        chart: {
            alignTicks: true,
            borderWidth: 1,
            borderColor: clientStyle.chart_ColourBorder,
            backgroundColor: clientStyle.chart_ColourBackground,
            plotBackgroundColor: clientStyle.chart_ColourPlotBackground,
            marginRight: 70,
            marginLeft: 10,
            spacingTop: 30,
            plotBorderWidth: 1,
            plotBorderColor: clientStyle.chart_ColourBorder,
            animation: {
                duration: globalChartAnimationMS
            },
            events: {
                load: function () {
                    IRChartEventSendExtremes(this.xAxis[0].getExtremes());
                },
                redraw: function () {

                    if (useIRChartTSR) {

                        IRChartTSR.selectedMin = this.xAxis[0].min;
                        IRChartTSR.selectedMax = this.xAxis[0].max;
                    }

                    IRChartEventSendExtremes(this.xAxis[0].getExtremes());
                }
            }

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
                var date = Highcharts.dateFormat('%Y-%m-%d', this.x);

                var time = Highcharts.dateFormat('%H:%M:%S', this.x);
                var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                var unixDate = new moment(date + 'T00:00:00.0000000Z').valueOf();
                var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();


                if (useIRChartNews) {
                    return updateTooltipDOHLCVN(unixDateTime);
                } else if (usePressReleaseIRChartHeadlineData) {
                    return updateTooltipDOHLCVNPressRelease(unixDateTime);
                } else if (usePressReleaseData) {
                    return updateTooltipDOHLCVNPressRelease(unixDateTime);
                }
                else {
                    return updateTooltipDOHLCV(unixDateTime);
                }

                //if (globalChartActiveDisplayMode == chartDisplayModes.tsr) {
                //    return updateTooltipDOHLCVN(unixDateTime);
                //}

            },
            positioner: function (boxWidth, boxHeight, point) {
                var chartWidth = $(globalChartContainer).width();
                var plotX = point.plotX + 30;
                var plotY = (boxHeight - 52);

                if (plotX > chartWidth - boxWidth - 50) {
                    plotX = plotX - boxWidth - 40;
                }

                //
                //  When tooltip overlap yAxis, make it static.
                //  (chartWidth - X), X = yAxis width.
                //
                if (plotX > (chartWidth - 70)) {
                    plotX = (chartWidth - 70);
                }
                if (plotX < 0) {
                    plotX = 0;
                }

                if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
                    plotY = plotY + 12;
                }

                return { x: plotX, y: plotY };
            }
        },
        navigator: {
            outlineColor: clientStyle.chart_ColourBorder,
            maskInside: false,
            maskFill: 'rgba(255, 255, 255, 0.75)',
            handles: {
                backgroundColor: clientStyle.chart_ColourBackground,
                borderColor: 'turquoise'
            },
            xAxis: {
                ordinal: true,
                gridLineColor: '#aaa'
            },
            series: {
                type: 'area',
                lineWidth: 0,
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, clientStyle.chart_ColourMain]                        //,
                        //[1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                    ]
                }
            }
        },
        xAxis: {
            ordinal: true,
            align: 'center',
            lineWidth: 0,
            lineColor: clientStyle.chart_ColourBorder,
            tickLength: 0,
            gridLineWidth: 1,
            gridLineColor: '#eee',
            showFirstLabel: false,
            showLastLabel: false,
            startOnTick: true,
            endOnTick: true,
            showEmpty: false,
            type: 'datetime',
            overflow: 'justify',
            tickPixelInterval: 70,
            labels: {
                staggerLines: 1,
                align: 'center',
                step: 1,
                useHTML: true,
                formatter: function () {
                    var formattedXLabel = '';
                    var ts = new moment.tz(this.value, globalActiveExchangeTimeZone);
                    var date = new moment.tz(this.value, globalActiveExchangeTimeZone).format("YYYY-MM-DD");
                    var time = new moment.tz(this.value, globalActiveExchangeTimeZone).format("HH:mm");
                    var day = new moment.tz(this.value, globalActiveExchangeTimeZone).format("DD");
                    if (globalChartListingHistoricalLastKnownMomentDate == null) {
                        globalChartListingHistoricalLastKnownMomentDate = ts;
                    }
                    switch (globalChartActiveDisplayMode) {
                        case chartDisplayModes.intraday:
                            if (globalChartListingIntradayLastKnownDay != day) {
                                formattedXLabel = '<span class="IRChartXAxisHeader">' + translateWeekdayShort(ts.format("ddd")) + " " + ts.format("DD") + '</span>';
                            } else {
                                formattedXLabel = time;
                            }

                            globalChartListingIntradayLastKnownDay = day;

                            break;
                        case chartDisplayModes.historical:

                            switch (globalActivePeriod) {
                                case "m1":
                                case "m3":
                                case "m6":
                                case "y1":
                                case "y2":
                                case "y5":
                                case "max":
                                case "Max":
                                    if (globalChartListingHistoricalLastKnownMomentDate.format("YYYY") != ts.format("YYYY")) {
                                        formattedXLabel = '<span class="IRChartXAxisHeader">' + ts.format("YYYY") + '</span>';
                                    } else if (globalChartListingHistoricalLastKnownMomentDate.format("MM") != ts.format("MM")) {
                                        formattedXLabel = '<span class="">' + translateMonthShort(ts.format("MMM")) + '</span>';
                                    } else if (globalChartListingHistoricalLastKnownMomentDate.format("DD") != ts.format("DD")) {
                                        formattedXLabel = '<span class="">' + ts.format("DD") + '</span>';
                                    }
                                    break;
                                default:
                                    formattedXLabel = date;
                                    break;
                            }
                            globalChartListingHistoricalLastKnownMomentDate = new moment(this.value);
                            break;
                    }
                    return formattedXLabel;
                }
            },
            dateTimeLabelFormats: getChartDateTimeLabelFormats()
            //minRange: globalChartMinRange
        },
        yAxis: [{
            lineWidth: 0,
            lineColor: clientStyle.chart_ColourBorder,
            gridLineWidth: 1,
            gridLineColor: '#eee',
            tickPixelInterval: 35,
            showFirstLabel: true,
            showLastLabel: false,
            startOnTick: true,
            endOnTick: true,
            opposite: true,
            labels: {
                align: 'right',
                x: 50,
                y: 5,
                formatter: function () {
                    return formatDecimal(this.value) + '';
                }
            }
        }, {
            // Volume
            id: 'y2',
            opposite: true,
            labels: {
                enabled: false
            },
            gridLineWidth: 0,
            showFirstLabel: false,
            //top: 346,
            //height: 50,
            top: '60%',
            height: '40%',
            showLastLabel: false
        }],
        scrollbar: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        rangeSelector: {
            enabled: false
        },
        plotOptions: {
            series: {
                animation: {
                    duration: globalChartAnimationMS
                }
            },
            line: {
                animation: {
                    duration: globalChartAnimationMS
                },
                dataGrouping: {
                    enabled: true,
                    groupPixelWidth: 10,
                    forced: true,
                    approximation: 'close'
                }
                //marker: { // JRJR Shell Demo
                //    enabled: true,
                //    radius: 4,
                //    symbol: 'square'
                //},
            },
            area: {
                threshold: null,
                animation: {
                    duration: globalChartAnimationMS
                },
                dataGrouping: {
                    enabled: true,
                    groupPixelWidth: 10,
                    forced: true,
                    approximation: 'close'
                },
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, clientStyle.chart_ColourMain],
                        [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                    ]
                }
            },
            column: {
                animation: {
                    duration: globalChartAnimationMS
                },
                dataGrouping: {
                    enabled: true,
                    groupPixelWidth: 10,
                    forced: true,
                    approximation: 'close'
                },
                color: clientStyle.chart_ColourVolumeBars
            },
            flags: {
                useHTML: false,
                enableMouseTracking: true,
                stickyTracking: false,
                stackDistance: 0,
                showInLegend: false,
                //backgroundColor: 'rgba(255,255,255,0)',
                cursor: 'pointer',
                //fillColor: 'rgba(255,255,255,0)',
                shape: 'url(' + getProtocol() + '//ir.euroinvestor.com/inc/images/icons/newsFlag.png)',
                lineWidth: 0,
                title: '.',
                style: {
                    color: '#fff'
                },
                tooltip: {
                    //pointFormatter: function ()
                    //{

                    //}
                },
                y: -21,
                states: {
                    hover: {
                        fillColor: 'rgba(255,255,255,0.5)'
                    }
                }

            }
        }
    });
    onload();
    globalChartDom = getChartDOM();

}