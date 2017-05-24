var globalCompareState = false;
var IRChartOutsideTechnicalAnalysis = {

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
                    redraw: function () {
                        //IRChartNavigationHideAll();
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
                    return updateTooltipTechnicalAnalysisDP(unixDateTime);
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
                area: {
                    
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

    }




}
function IRChartApplySMA(data, TAShort) {

    var colourIndex = 0;
    redrawIRChartInModeTA();
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
    var colourIndex = 0;

    debugStep("redrawIRChartInModeTA");
    globalChartDom.destroy();

    IRChartOutsideTechnicalAnalysis.drawIRChartHtmlTADual();
    //drawIRChartHtmlTA();

    drawActiveListingToChartHistorical();
    updateChartNavBarRange('IRChart');
    setChartExtremes(chartDisplayModes.historical, 360);
    globalChartDom.redraw();
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
        type: 'line'
    }, false, 0);

    var activeTA = '<div class="color' + globalChartColours[colourIndex].replace('#', '') + ' active" style="display: block;">';
    activeTA += '<span>' + TAShort + '</span>';// | <div class="TASettings">Period: <input class="TASettingsInput" type="Number" value="10" /><div class="TASettingsUpdate" id="SimpleMovingAverage">Update</div></div>';
    //activeTA += '<div class="TASettings">Period: <input type="Number" value="10" /><div class="updateTASettings" id="SimpleMovingAverage">Update</div></div>';
    activeTA += '</div>';

    $('.IRChartTAPlaceholder').html(activeTA);

    globalChartDom.redraw();
}
function IRChartApplyMACD(data, TAShort) {
    var colourIndex = 0;

    debugStep("redrawIRChartInModeTA");
    globalChartDom.destroy();

    IRChartOutsideTechnicalAnalysis.drawIRChartHtmlTADual();
    //drawIRChartHtmlTA();

    drawActiveListingToChartHistorical();
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

    console.log(data.data);

    $.each(data.data, function (listingIndex, item) {

        stockDataTADates.push(getUnixFromDate(item.date));

        TAArrayForChartHist.push([getUnixFromDate(item.date), item.hist])
        TAArrayForChartMACD.push([getUnixFromDate(item.date), item.macd])
        TAArrayForChartSignal.push([getUnixFromDate(item.date), item.signal])
        
    });
    taDataHist[0] = TAArrayForChartHist;
    taDataMACD[0] = TAArrayForChartMACD;
    taDataSignal[0] = TAArrayForChartSignal;

    globalChartDom.addSeries({
        id: 42,
        index: 1,
        data: taDataHist[0],
        color: globalChartColours[1],
        yAxis: 2,
        name: 'TA',
        visible: true,
        linkedTo: 2,
        type: 'line'
    }, false, 0);
    globalChartDom.addSeries({
        id: 42,
        index: 2,
        data: taDataMACD[0],
        color: globalChartColours[0],
        yAxis: 2,
        name: 'TA',
        visible: true,
        linkedTo: 1,
        type: 'area'
    }, false, 0);
    globalChartDom.addSeries({
        id: 42,
        index: 3,
        data: taDataSignal[0],
        color: globalChartColours[9],
        yAxis: 2,
        name: 'TA',
        visible: true,
        linkedTo: 2,
        type: 'line'
    }, false, 0);

    var activeTA = '<div class="color' + globalChartColours[colourIndex].replace('#', '') + ' active" style="display: block;">';
    activeTA += '<span>' + TAShort + '</span>';// | <div class="TASettings">Period: <input class="TASettingsInput" type="Number" value="10" /><div class="TASettingsUpdate" id="SimpleMovingAverage">Update</div></div>';
    //activeTA += '<div class="TASettings">Period: <input type="Number" value="10" /><div class="updateTASettings" id="SimpleMovingAverage">Update</div></div>';
    activeTA += '</div>';

    $('.IRChartTAPlaceholder').html(activeTA);

    globalChartDom.redraw();
}
function attachShowHideVolumeClickHandler() {
    debugStep("attachShowHideVolumeClickHandler()");
    $('.showHideVolume').on('click', function () {
        showHideVolume();
    });
}
function showHideVolume() {
    debugStep("showHideVolume()");
    var chart = getChartDOM();
    var series = chart.series[2];

    if (series.visible) {
        series.hide();
    } else {
        series.show();
    }
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