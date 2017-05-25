function buildQuoteTable() {
    debugStep("buildQuoteTable");
    var data = {
        headers: translations,
        stocks: globalRawStockData[globalActiveListingIndex]
    }
    if (typeof ($('.IRQuoteModule').html()) != "undefined" && typeof ($('#IRQuoteTableTemplate').html()) != "undefined") {
        $(".IRQuoteModule").html(menuTemplate_QuoteTable(data));
        applyCssClassesForResponsive();
    }
    if (typeof ($('.IRQuoteHorizontalModule').html()) != "undefined" && typeof ($('#IRQuoteTableHorizontalTemplate').html()) != "undefined") {
        $(".IRQuoteHorizontalModule").html(menuTemplate_QuoteTableHorizontal(data));
    }
    if (typeof ($('.IRQuoteVerticalModule').html()) != "undefined" && typeof ($('#IRQuoteTableVerticalTemplate').html()) != "undefined") {
        $(".IRQuoteVerticalModule").html(menuTemplate_QuoteTableVertical(data));
    }
}
function buildQuoteMultiTable() {
    debugStep("buildQuoteMultiTable");
    var data = {
        headers: translations,
        stocks: globalRawStockData
    }
    if (typeof ($('.IRQuoteModule').html()) != "undefined" && typeof ($('#IRQuoteMultiTableTemplate').html()) != "undefined") {
        $(".IRQuoteModule").html(menuTemplate_QuoteMultiTable(data));
        applyCssClassesForResponsive();
    }
}
function buildIRMiniquoteChartTool() {
    debugStep("buildIRMiniquoteChartTool");
    var data = {
        headers: translations,
        stocks: globalRawStockData[globalActiveListingIndex]
    }
    if (typeof ($('.IRMiniquoteChartModule').html()) != "undefined" && typeof ($('#IRMiniquoteChartModuleTemplate').html()) != "undefined") {
        $(".IRMiniquoteChartModule").html(menuTemplate_IRMiniquoteChart(data));
        drawIRMiniquoteChart();
        drawActiveListingToIRMiniquoteChartHistorical();
        //drawActiveListingToChartHistorical();
        updateChartWithPeriod('IRMiniquoteChartModule', clientStyle.miniquoteChartDefaultPeriode);
        // JRJR
    }
}
function buildIRChartTool() {
    debugStep("buildIRChartTool");
    var data = {
        headers: translations,
        stocks: globalRawStockData[globalActiveListingIndex]
    }
    if (typeof ($('.IRChartModule').html()) != "undefined" && typeof ($('#IRChartModuleTemplate').html()) != "undefined") {
        $(".IRChartModule").html(menuTemplate_IRChart(data));
    }
}
function buildIRPerformanceModule(performanceData) {
    debugStep("buildIRPerformanceModule");
    if (typeof ($('.IRPerformanceModule').html()) != "undefined" && typeof ($('#IRPerformanceModuleTemplate').html()) != "undefined") {
        $(".IRPerformanceModule").html(menuTemplate_IRPerformance(performanceData));
        applyCssClassesForResponsive();
    }
}
function buildIRCalcTool(data, template) {
    debugStep("buildCalcTool");
    $(".IRCalcModule").html(template(data));
    initializeCalc();
}
function drawIRChartHTML() {
    debugStep("drawIRChartHTML");
    globalChartWidth = $(globalChartContainer).width();
    $(globalChartContainer).highcharts('StockChart', {
        colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
        chart: {
            alignTicks: true,
            borderWidth: 0,
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
                    IRChartEventTSRUpdateSetData(this); //IRChartEventUpdateSetData(this);

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
                } else {
                    return updateTooltipDOHLCV(unixDateTime);
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
            outlineWidth: 1,
            outlineColor: clientStyle.chart_ColourBorder,
            maskInside: false,
            maskFill: 'rgba(255, 255, 255, 0.75)',
            handles: {
                backgroundColor: clientStyle.chart_ColourBackground,
                borderColor: '#aaa'
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
                        [0, clientStyle.chart_ColourMain],
                        [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
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
                lineWidth: 1,
                title: 'TEST',
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
function drawIRMiniquoteChart() {
    debugStep("drawIRMiniquoteChart");
    globalChartWidth = $(globalChartContainer).width();
    $(globalChartContainer).highcharts('StockChart', {
        colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
        chart: {
            alignTicks: true,
            panning: false,
            backgroundColor: 'white',
            borderWidth: 0,
            borderColor: '#fff',
            plotBorderWidth: 1,
            plotBorderColor: '#eeeeee',
            marginRight: 60,
            marginLeft: 5,
            spacingTop: 5,
            spacingBottom: 5,
            spacingRight: 5,
            animation: {
                duration: globalChartAnimationMS
            }
        },
        xAxis: {
            ordinal: false,
            lineColor: '#eeeeee',
            gridLineColor: '#eeeeee',
            gridLineDashStyle: 'Solid',
            gridLineWidth: 1,
            minorGridLineWidth: 0,
            showFirstLabel: true,
            showLastLabel: true,
            type: 'datetime',
            startOnTick: false,
            endOnTick: true,
            tickPixelInterval: 125,
            tickLength: 1,
            labels: {
                staggerLines: 1,
                step: 1
            },
            dateTimeLabelFormats: getIRMiniquoteChartDateTimeLabelFormats()
        },
        yAxis: {
            lineWidth: 0,
            gridLineWidth: 1,
            gridLineColor: '#eee',
            tickPixelInterval: 35,
            showFirstLabel: true,
            showLastLabel: false,
            startOnTick: true,
            endOnTick: true,
            opposite: true,
            tickPosition: 'outside',
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
                var date = Highcharts.dateFormat('%Y-%m-%d', this.x);

                var time = Highcharts.dateFormat('%H:%M:%S', this.x);
                var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                var unixDate = new moment(date + 'T00:00:00.0000000Z').valueOf();
                var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();

                return updateTooltipDOHLCV(unixDateTime);

            },
            positioner: function (boxWidth, boxHeight, point) {
                var chartWidth = $(globalChartContainer).width();
                var plotX = point.plotX + 30;

                if (plotX > chartWidth - boxWidth - 50) {
                    plotX = plotX - boxWidth - 40;
                }
                if (plotX < 0) {
                    plotX = 0;
                }
                return { x: plotX, y: boxHeight - 75 };
            }
        },
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
                }
            }
        },
        navigator: {
            enabled: false
        }
    });
    globalChartDom = getChartDOM();
}
function applyMiniquoteChartYAxis() {
    switch (clientStyle.miniquote_ChartYAxisInsideOutside) {
        case 'inside':
            return {
                lineWidth: 0,
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
                    x: -5,
                    y: -5,
                    formatter: function () {
                        return formatDecimal(this.value) + '';
                    }
                },
                title: {
                    text: ''
                }
            }
            break;
        case 'outside':
            return {
                lineWidth: 0,
                gridLineWidth: 1,
                gridLineColor: '#eee',
                tickPixelInterval: 35,
                showFirstLabel: true,
                showLastLabel: false,
                startOnTick: true,
                endOnTick: true,
                opposite: true,
                tickPosition: 'outside',
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
            }
            break;
    }
}
function applyMiniquoteChartChart() {
    switch (clientStyle.miniquote_ChartYAxisInsideOutside) {
        case 'inside':
            return {
                alignTicks: true,
                panning: false,
                backgroundColor: 'white',
                borderWidth: 0,
                borderColor: '#fff',
                plotBorderWidth: 1,
                plotBorderColor: '#eeeeee',
                marginRight: 5,
                marginLeft: 5,
                spacingTop: 5,
                spacingBottom: 5,
                spacingRight: 5,
                animation: {
                    duration: globalChartAnimationMS
                }
            }
            break;
        case 'outside':
            return {
                alignTicks: true,
                panning: false,
                backgroundColor: 'white',
                borderWidth: 0,
                borderColor: '#fff',
                plotBorderWidth: 1,
                plotBorderColor: '#eeeeee',
                marginRight: 60,
                marginLeft: 5,
                spacingTop: 5,
                spacingBottom: 5,
                spacingRight: 5,
                animation: {
                    duration: globalChartAnimationMS
                }
            }
            break;
    }
}
function drawActiveListingToIRMiniquoteChartHistorical() {
    debugStep("drawActiveListingToChartHistorical");

    globalChartDom.addSeries({
        index: 1,
        data: globalChartListingStockData[globalActiveListingIndex],
        color: clientStyle.chart_ColourMain,
        yAxis: 0,
        visible: true,
        linkedTo: 0,
        type: clientStyle.miniquoteChartDrawMode
    }, false, 0);

    drawPlotLineToChart();
    //drawChartHeadlineClientName();
    //drawChartCurrency();
    globalChartDom.redraw();
}
function drawActiveListingToChartHistorical() {
    debugStep("drawActiveListingToChartHistorical");

    globalChartDom.addSeries({
        index: 1,
        data: globalChartListingStockData[globalActiveListingIndex],
        color: clientStyle.chart_ColourMain,
        yAxis: 0,
        visible: true,
        linkedTo: 0,
        type: clientStyle.chart_DrawMode
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
}
function drawPlotLineToChart() {
    debugStep("drawPlotLineToChart");

    var offsetX = 70;
    var lastPrice = globalRawStockData[globalActiveListingIndex].last;
    var yValue = null;
    var lastPriceDate = new moment.tz(globalRawStockData[globalActiveListingIndex].timestamp, globalActiveExchangeTimeZone).format(clientStyle.formatDate);
    var lastPriceTime = new moment.tz(globalRawStockData[globalActiveListingIndex].timestamp, globalActiveExchangeTimeZone).format(clientStyle.formatTime);

    var text = "";
    text += '<div class="chartCurrentPriceBoxOuter"><div class="chartCurrentPriceBox" style="border: 1px solid ' + clientStyle.chart_ColourMain + ';background-color: ' + clientStyle.chart_ColourMain + ';"><div class="chartCurrentPriceBoxArrow"><div class="irCPB1" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div><div class="irCPB2" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div><div class="irCPB3" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div></div>';
    text += '<div class="chartLastPrice">' + formatDecimal(lastPrice) + '</div><br />';
    text += '<div class="chartLastPriceTime">' + lastPriceTime + '</div>';
    text += '</div></div>';

    if (globalChartActiveDisplayMode == chartDisplayModes.historical) {
        //
        //  Properly position last price indicator in Historical mode.
        //
        var lastClosePriceIndex = globalChartListingStockDataDates[globalActiveListingIndex].length - 1;
        yValue = globalChartListingStockData[globalActiveListingIndex][lastClosePriceIndex][1];
    }

    if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
        //
        //  Properly position last price indicator in Intraday mode.
        //
        var lastIntradayIndex = globalChartListingIntradayData[globalActiveListingIndex].length - 1;
        yValue = globalChartListingIntradayData[globalActiveListingIndex][lastIntradayIndex][1];
    }

    if (globalChartActiveDisplayMode == chartDisplayModes.comparison) {
        yValue = 0;
    }

    if (yValue == null) {
        yValue = lastPrice;
    }

    globalChartDom.yAxis[0].removePlotLine('chartPlotLine');
    globalChartDom.yAxis[0].addPlotLine({
        value: yValue,
        width: 1,
        color: clientStyle.chart_ColourMain,
        dashStyle: 'dash',
        id: 'chartPlotLine',
        zIndex: 1000,
        label: {
            text: text,
            align: 'right',
            y: 0,
            x: offsetX,
            width: 0,
            useHTML: true
        }
    });
}
function drawChartHeadlineClientName() {
    debugStep("drawChartHeadlineClientName");
    $('.IRChartClientName').html(globalRawStockData[globalActiveListingIndex].name);
    $('.IRChartCompanyName').html(globalRawStockData[globalActiveListingIndex].name);
}
function drawChartCurrency() {
    debugStep("drawChartCurrency");
    $('div.IRChartCurrency').html(globalRawStockData[globalActiveListingIndex].currency);
}
function drawIRChartCompareListNavigation(listingStockData, comparisonList) {
    debugStep("drawIRChartCompareListNavigation");
    var uniqueColorID = 1;

    var comparisonPlaceholder = "<div class=\"IRSliderOuter\"><div class=\"IRSlider clearfix\">";
    var compareListNarrow = '';
    var compareListWide = '';
    for (var i = 0; i < comparisonList.length; i++) {

        if (comparisonList[i][1] != type) {
            compareListWide += '<div class="IRChartComparisonBodyListHeader">' + comparisonList[i][1] + '</div>';
            compareListNarrow += '<li><span class="IRChartComparisonBodyListHeader">' + comparisonList[i][1] + '</span></li>';
        }

        var id = comparisonList[i][0];
        var type = comparisonList[i][1];
        var name = comparisonList[i][2];
        var symbol = comparisonList[i][3];
        compareListWide += '<div class="IRChartCompareElement color' + globalChartColours[uniqueColorID].replace('#', '') + '" id="' + type + '_' + id + '_' + uniqueColorID + '">' + name + '</div>';
        compareListNarrow += '<li><span title="' + name + '" class="IRChartCompareElement color' + globalChartColours[uniqueColorID].replace('#', '') + '" id="' + type + '_' + id + '_' + uniqueColorID + '">' + symbol + '</span></li>';

        comparisonPlaceholder += "<div id=\"comparisonList_" + uniqueColorID + "\" class=\"color" + globalChartColours[uniqueColorID].replace('#', '') + " active\">" + name + "</div>";
        //comparisonPlaceholder += "<div id=\"comparisonList_" + uniqueColorID + "\" class=\"color" + globalChartColours[uniqueColorID].replace('#', '') + " active\"><span>" + name + "</span><div class=\"ComparisonOff active\" id=\"" + type + "_" + id + "_" + uniqueColorID + "\"></div></div>";

        uniqueColorID += 1;
    }
    compareListWide += '<div class="IRChartCompareElement" id=\"IRChartNavigationClearComparison\">' + translations.t_clear_all + '</div>';
    compareListNarrow += '<li><span class="IRChartCompareElement" id="IRChartNavigationClearComparison">' + translations.t_clear_all + '</span></li>';

    comparisonPlaceholder += "</div></div>";

    $('#IRChartCompareList').html(compareListNarrow);
    $('.IRChartNavigationWideInner.navComparison').html(compareListWide);
    $('.IRChartComparisonPlaceholder').html(comparisonPlaceholder);
}
function drawIRChartCompareListNavigationOld(listingStockData, comparisonList) {
    debugStep("drawIRChartCompareListNavigation");
    var uniqueColorID = 1;

    var comparisonPlaceholder = "";
    var IRChartComparisonBodyList = "";
    //IRChartComparisonBodyList += "<div class=\"IRChartComparisonBodyCloseTrigger\">[X]</div>";
    IRChartComparisonBodyList += "<div class=\"IRChartComparisonBodyList\">";

    //for (var i = 0; i < listingStockData.length; i++) {
    //    var id = i;
    //    var type = "listing";
    //    var symbol = listingStockData[i].symbol;
    //    IRChartComparisonBodyList += "<div title=\"" + type + "\" class=\"basicButtonLook color" + globalChartColours[uniqueColorID].replace('#', '') + "\" id=\"" + type + "_" + id + "_" + uniqueColorID + "\">" + symbol + "</div>";
    //    uniqueColorID += 1;
    //}

    for (var i = 0; i < comparisonList.length; i++) {

        var id = comparisonList[i][0];
        var type = comparisonList[i][1];
        var name = comparisonList[i][2];

        IRChartComparisonBodyList += "<div title=\"" + type + "\" class=\"basicButtonLook color" + globalChartColours[uniqueColorID].replace('#', '') + "\" id=\"" + type + "_" + id + "_" + uniqueColorID + "\">" + comparisonList[i][2] + "</div><br />";
        comparisonPlaceholder += "<div id=\"comparisonList_" + uniqueColorID + "\" class=\"color" + globalChartColours[uniqueColorID].replace('#', '') + " active\"><span>" + name + "</span><div class=\"ComparisonOff active\" id=\"" + type + "_" + id + "_" + uniqueColorID + "\"></div></div>";
        //comparisonPlaceholder += "<div id=\"comparisonList_" + uniqueColorID + "\" class=\"color" + globalChartColours[uniqueColorID].replace('#', '') + " active\"><span>" + name + "</span></div>";
        uniqueColorID += 1;
    }

    IRChartComparisonBodyList += "<div class=\"basicButtonLook\" id=\"IRChartNavigationClearComparison\">" + translations.t_clear_all + "</div>";

    IRChartComparisonBodyList += "</div>";
    $('.IRChartComparisonBody').html(IRChartComparisonBodyList);
    $('.IRChartComparisonPlaceholder').html(comparisonPlaceholder);
}
function updateComparison(type, id, uniqueID, thisPeer) {
    debugStep("updateComparison - type[" + type + "] id[" + id + "]");

    if (globalChartActiveDisplayMode == chartDisplayModes.intraday ||
        globalChartActiveDisplayMode == chartDisplayModes.historical ||
        globalChartActiveDisplayMode == chartDisplayModes.ta ||
        globalChartComparisonsInChart == 0) {

        redrawChartInCompareMode();

        $('.IRSliderOuter, .IRSliderOuter div').css('display', 'block');

        $('.IRSliderOuter').css('width', (globalChartWidth - 80) + 'px');

        var $frame = $('.IRSliderOuter');
        var $slidee = $('.IRSlider');
        $frame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBy: 1,
            activatePageOn: 'click',
            speed: 300,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1
        });

        thisPeer.addClass('active');
        addCompareSeriesToChart(id, uniqueID, thisPeer);
        globalChartDom.yAxis[0].setCompare('percent');
        setChartExtremes(chartDisplayModes.historical, 360);
        drawPlotLineToChart();
        updateActiveChartNavBarRangePeriod(globalActivePeriod);
        globalChartComparisonsInChart += 1;

    } else {
        var isActive = thisPeer.hasClass('active');
        if (isActive) {
            thisPeer.removeClass('active');
            removeCompareSeriesFromChart(id, uniqueID, thisPeer);
            globalChartComparisonsInChart -= 1;

        } else {
            thisPeer.addClass('active');
            addCompareSeriesToChart(id, uniqueID, thisPeer);
            globalChartComparisonsInChart += 1;
            globalChartDom.yAxis[0].setCompare('percent');
        }
    }

    if (globalChartComparisonsInChart == 0) {
        resetIRChart();
    } else {
        updateActiveComparisonList(id, uniqueID);
    }


}
function redrawChartInCompareMode() {
    debugStep("redrawChartInCompareMode");
    globalChartDom.destroy();
    resetIRChartNavigation();
    drawIRChartHTMLCompare();
    drawActiveListingHistoricalToIRChartHTMLCompare();
    globalChartActiveDisplayMode = chartDisplayModes.comparison;
}
function drawIRChartHTMLCompare() {
    debugStep("drawIRChartHTMLCompare");

    globalChartWidth = $(globalChartContainer).css('width').replace('px', '');

    $(globalChartContainer).highcharts('StockChart', {
        colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
        chart: {
            alignTicks: true,
            borderWidth: 0,
            //borderColor: clientStyle.chart_ColourBorder,
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
            outlineWidth: 1,
            outlineColor: clientStyle.chart_ColourBorder,
            maskInside: false,
            maskFill: 'rgba(255, 255, 255, 0.75)',
            handles: {
                backgroundColor: clientStyle.chart_ColourBackground,
                borderColor: '#aaa'
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
                        [0, clientStyle.chart_ColourMain],
                        [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
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
}
function drawActiveListingHistoricalToIRChartHTMLCompare() {
    debugStep("drawActiveListingHistoricalToIRChartHTMLCompare");
    globalChartDom.addSeries({
        index: 0,
        data: globalChartListingStockData[globalActiveListingIndex],
        color: clientStyle.chart_ColourMain,
        yAxis: 0,
        visible: true,
        linkedTo: 0,
        type: 'line'
    }, false, 0);
    drawChartHeadlineClientName();
    drawChartCurrency();
}
function addCompareSeriesToChart(id, uniqueID, thisPeer) {
    debugStep("addCompareSeriesToChart(" + id + ", " + uniqueID + ")");
    globalChartDom.addSeries({
        id: uniqueID,
        index: id,
        data: globalChartComparisonData[0][id],
        color: globalChartColours[uniqueID],
        yAxis: 0,
        name: globalChartComparisonNames[id],
        visible: true,
        linkedTo: 0,
        type: 'line'
    }, false, 0);

    globalChartComparisonInChart[uniqueID] = 1;
}
function removeCompareSeriesFromChart(id, uniqueID, thisPeer) {
    debugStep("removeCompareSeriesFromChart(" + id + ", " + uniqueID + ")");
    globalChartDom.get(uniqueID).remove();

    globalChartComparisonInChart[uniqueID] = 0;
}
function updateActiveComparisonList(id, uniqueID) {
    var display = $('#comparisonList_' + uniqueID).css('display');

    if (display == "block") {
        $('#comparisonList_' + uniqueID).css('display', 'none');
        //$('#comparisonList_' + uniqueID + ' .ComparisonOff').css('display', 'none');
    } else {
        $('#comparisonList_' + uniqueID).css('display', 'block');
        //$('#comparisonList_' + uniqueID + ' .ComparisonOff').css('display', 'block');
    }
}
function redrawIRChartHTMLIntraday() {
    debugStep("redrawIRChartHTMLIntraday");



    globalChartDom = getChartDOM(); // TODO: Could be removed?
    globalChartDom.destroy();

    globalChartMinRange = 1 * 24 * 3600 * 1000;

    drawIRChartHTML();
    drawActiveListingToChartIntraday();
}
function drawActiveListingToChartIntraday() {
    debugStep("drawActiveListingToChartIntraday");
    globalChartDom.addSeries({
        index: 1,
        data: globalChartListingIntradayData[globalActiveListingIndex],
        color: clientStyle.chart_ColourMain,
        yAxis: 0,
        visible: true,
        linkedTo: 0,
        type: clientStyle.chart_DrawMode
    }, false, 0);

    globalChartDom.addSeries({
        index: 3,
        data: globalChartListingIntradayDataVolume[globalActiveListingIndex],
        yAxis: 1,
        visible: true,
        linkedTo: 0,
        type: 'column'
    }, false, 0);

    globalChartDom.redraw();
    drawPlotLineToChart();
    drawChartHeadlineClientName();
    drawChartCurrency();
}
function updateTooltipTechnicalAnalysisDP(date) {
    var dateIndex;
    var value = "-";
    //var tooltipStr = "<div class=\"tooltipHTML\">";
    var tooltipStr = "<div class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode\">";
    switch (globalChartActiveDisplayMode) {
        case chartDisplayModes.historical:
            try {
                dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                //tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('o') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
                //tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('h') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                //tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('l') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">V:</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                //tooltipStr += "<div>" + getOHLCfromTranslations('o') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</div>";
                //tooltipStr += "<div>" + getOHLCfromTranslations('h') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                //tooltipStr += "<div>" + getOHLCfromTranslations('l') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('c') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div>V: " + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }

            if (useIRChartTA) {

                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    //tooltipStr += "<div class=\"tooltipHtmlTA\">";
                    //tooltipStr += "<div class=\"tooltipHtmlTARow\">SMA: " + formatDecimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    //tooltipStr += "</div>";
                    tooltipStr += "<div>" + getActiveTAShort() + ": " + formatDecimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>" + getActiveTAShort() + ": " + formatDecimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
            }


            break;
        case chartDisplayModes.intraday:
            try {
                dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('o') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('h') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('l') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";

                tooltipStr += "<div><span class=\"subHeader\">V:</span><span class=\"subContent\">" + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {

                dateIndex = getClosestDateIndexForListingIntraday(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('o') + " " + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('h') + " " + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('l') + " " + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('c') + " " + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";

                tooltipStr += "<div>V: " + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            break;
        case chartDisplayModes.ta:
            try {
                dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                //tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('o') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
                //tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('h') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                //tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('l') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">V:</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                //tooltipStr += "<div>" + getOHLCfromTranslations('o') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</div>";
                //tooltipStr += "<div>" + getOHLCfromTranslations('h') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                //tooltipStr += "<div>" + getOHLCfromTranslations('l') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('c') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div>V: " + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }

            if (useIRChartTA) {

                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    //tooltipStr += "<div class=\"tooltipHtmlTA\">";
                    //tooltipStr += "<div class=\"tooltipHtmlTARow\">SMA: " + formatDecimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    //tooltipStr += "</div>";
                    tooltipStr += "<div>" + getActiveTAShort() + ": " + formatDecimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>" + getActiveTAShort() + ": " + formatDecimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
            }


            break;
    }




    tooltipStr += "</div>";
    return tooltipStr;
}
function updateTechnicalAnalysis(id) {
    debugStep("updateTechnicalAnalysis(" + id + ")");

    if (globalChartActiveDisplayMode != chartDisplayModes.ta) {
        resetIRChartNavigation();
        globalChartActiveDisplayMode = chartDisplayModes.ta;
    }

    switch (id) {
        case "IRChartNavigationClear":
            //redrawIRChartHTMLHistorical();
            //setChartExtremes(chartDisplayModes.historical, 360);
            break;

        case "CommodityChannelIndex":
            loadAnalysisCommodityChannelIndex(clientStyle.amountOfHistoricalYears, 10);
            applyAnalysis("CommodityChannelIndex", "CCI");
            break;

        case "DirectionalMovementIndex":
            loadAnalysisDirectionalMovementIndex(clientStyle.amountOfHistoricalYears, 14);
            applyAnalysis("DirectionalMovementIndex", "DMI");
            break;

        case "ExponentialMovingAverage":
            loadAnalysisExponentialMovingAverage(clientStyle.amountOfHistoricalYears, 10);
            applyAnalysis("ExponentialMovingAverage", "EMA");
            break;

        case "Momentum":
            loadAnalysisMomentum(clientStyle.amountOfHistoricalYears, 10);
            applyAnalysis("Momentum", "Mom");
            break;

        case "MoneyFlowIndex":
            loadAnalysisMoneyFlowIndex(clientStyle.amountOfHistoricalYears, 14);
            applyAnalysis("MoneyFlowIndex", "MFI");
            break;

        case "RateOfChange":
            loadAnalysisRateOfChange(clientStyle.amountOfHistoricalYears, 15);
            applyAnalysis("RateOfChange", "RoC");
            break;

        case "RelativeStrengthIndex":
            loadAnalysisRelativeStrengthIndex(clientStyle.amountOfHistoricalYears, 14);
            applyAnalysis("RelativeStrengthIndex", "RSI");
            break;

        case "SimpleMovingAverage":
            loadAnalysisSimpleMovingAverage(clientStyle.amountOfHistoricalYears, 10);
            applyAnalysis("SimpleMovingAverage", "SMA");
            break;

        case "WilliamsPercentR":
            loadAnalysisWilliamsPercentR(clientStyle.amountOfHistoricalYears, 10);
            applyAnalysis("WilliamsPercentR", "W");
            break;

    }
}
function applyAnalysis(TAName, TAShort) {
    globalActiveTAShort = TAShort;

    var defaultYAxisIndex = 2;

    switch (TAName) {
        case "BollingerBands":
            $.when(requestAnalysisBollingerBandsData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort, defaultYAxisIndex);
            });
            break;
        case "SimpleMovingAverage":
            defaultYAxisIndex = 0;
            $.when(requestAnalysisSimpleMovingAverageData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort, defaultYAxisIndex);
            });
            break;
        case "ExponentialMovingAverage":
            defaultYAxisIndex = 0;
            $.when(requestAnalysisExponentialMovingAverageData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort, defaultYAxisIndex);
            });
            break;
        case "CommodityChannelIndex":
            $.when(requestAnalysisCommodityChannelIndexData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort, defaultYAxisIndex);
            });
            break;
        case "DirectionalMovementIndex":
            $.when(requestAnalysisDirectionalMovementIndexData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort, defaultYAxisIndex);
            });
            break;
        case "Momentum":
            $.when(requestAnalysisMomentumData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort, defaultYAxisIndex);
            });
            break;
        case "MoneyFlowIndex":
            $.when(requestAnalysisMoneyFlowIndexData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort, defaultYAxisIndex);
            });
            break;
        case "RateOfChange":
            $.when(requestAnalysisRateOfChangeData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort, defaultYAxisIndex);
            });
            break;
        case "RelativeStrengthIndex":
            $.when(requestAnalysisRelativeStrengthIndexData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort, defaultYAxisIndex);
            });
            break;
        case "WilliamsPercentR":
            $.when(requestAnalysisWilliamsPercentRData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort, defaultYAxisIndex);
            });
            break;
    }
}
function applyAnalysisToChart(dataTA, TAShort, yAxis) {
    var colourIndex = 9;
    redrawIRChartInModeTA(TAShort);
    stockDataTA.push([]);
    var TAArrayForChart = [];
    $.each(dataTA.data, function (listingIndex, item) {
        TAArrayForChart.push([getUnixFromDate(item.date), item.result]);
        stockDataTADates.push(getUnixFromDate(item.date));
    });
    stockDataTA[0] = TAArrayForChart;

    globalChartDom.addSeries({
        id: 42,
        index: 1,
        data: stockDataTA[0],
        color: globalChartColours[colourIndex],
        yAxis: yAxis,
        name: 'TA',
        visible: true,
        linkedTo: 2,
        type: 'line'
    }, false, 0);

    var activeTA = '<div class="color' + globalChartColours[colourIndex].replace('#', '') + ' active" style="display: block;">';
    //activeTA += '<span>' + TAShort + '</span>';// | <div class="TASettings">Period: <input class="TASettingsInput" type="Number" value="10" /><div class="TASettingsUpdate" id="SimpleMovingAverage">Update</div></div>';
    //activeTA += '<div class="TASettings">Period: <input type="Number" value="10" /><div class="updateTASettings" id="SimpleMovingAverage">Update</div></div>';
    activeTA += '</div>';

    $('.IRChartTAPlaceholder').html(activeTA);

    globalChartDom.redraw();
}
function applyAnalysisDataSimpleMovingAverage() {
    $.when(requestAnalysisSimpleMovingAverageData).done(function (dataTA) {
        var colourIndex = 9;
        redrawIRChartInModeTA();
        stockDataTA.push([]);
        var TAArrayForChart = [];
        $.each(dataTA.data, function (listingIndex, item) {
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
        activeTA += '<span>SMA</span> | <div class="TASettings">Period: <input class="TASettingsInput" type="Number" value="10" /><div class="TASettingsUpdate" id="SimpleMovingAverage">Update</div></div>';
        //activeTA += '<div class="TASettings">Period: <input type="Number" value="10" /><div class="updateTASettings" id="SimpleMovingAverage">Update</div></div>';
        activeTA += '</div>';

        $('.IRChartTAPlaceholder').html(activeTA);

        globalChartDom.redraw();

    });
}
function applyAnalysisDataExponentialMovingAverage(nameTA) {
    $.when(requestAnalysisExponentialMovingAverageData).done(function (dataTA) {
        var colourIndex = 9;
        redrawIRChartInModeTA();
        stockDataTA.push([]);
        var TAArrayForChart = [];
        $.each(dataTA.data, function (listingIndex, item) {
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
        activeTA += '<span>' + nameTA + '</span>';
        activeTA += '</div>';

        $('.IRChartTAPlaceholder').html(activeTA);

        globalChartDom.redraw();

    });
}
function updateSettingsForEnabledTA(enabledTA) {
    debugStep("showSettingsForEnabledTA(" + enabledTA + ")");

}
function redrawIRChartInModeTA(TAShort) {
    debugStep("redrawIRChartInModeTA");
    globalChartDom.destroy();
    drawIRChartHtmlTA(getAnalysisDrawModes(TAShort));
    drawActiveListingToChartHistorical();
    updateChartNavBarRange('IRChart');
    setChartExtremes(chartDisplayModes.historical, 360);
    globalChartDom.redraw();
    globalChartActiveDisplayMode = chartDisplayModes.ta;
    attachClickHandlers('IRChart');

}
function redrawIRChartHTMLHistorical() {
    debugStep("redrawIRChartHTMLHistorical");
    globalChartDom.destroy();
    drawIRChartHTML();
    drawActiveListingToChartHistorical();
    globalChartActiveDisplayMode = chartDisplayModes.historical;
}
function drawIRChartHtmlTA(drawMode) {
    debugStep("drawIRChartHtmlTA");

    globalChartWidth = $(globalChartContainer).css('width').replace('px', '');

    var taYaxis = [{
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
    }];

    switch (drawMode) {
        case 'single':
            taYaxis = [{
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
                height: '100%'
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
            }];
            break;
    }

    $(globalChartContainer).highcharts('StockChart', {
        colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
        chart: {
            alignTicks: true,
            borderWidth: 0,
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
        yAxis: taYaxis,
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
function drawIRNewsToChartHistorical() {
    debugStep("drawIRNewsToChartHistorical");
    //globalChartDom = getChartDOM();

    globalChartDom.addSeries({
        allowPointSelect: true,
        type: 'flags',
        data: globalChartNewsHeadlinesFlags
    });

    globalChartDom.redraw();
}