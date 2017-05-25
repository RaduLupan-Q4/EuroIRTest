//
//  DOM
//
function updateQuoteTable()
{
    debugStep("updateQuoteTable");
    var data = {
        headers: translations,
        stocks: globalQuoteTableData.data[globalActiveListingIndex]
    }
    if (typeof ($('.IRQuoteModule').html()) != "undefined" && typeof ($('#IRQuoteTableTemplate').html()) != "undefined") {
        $(".IRQuoteModule").html(menuTemplate_QuoteTable(data));
    }
    if (typeof ($('.IRQuoteHorizontalModule').html()) != "undefined" && typeof ($('#IRQuoteTableHorizontalTemplate').html()) != "undefined") {
        $(".IRQuoteHorizontalModule").html(menuTemplate_QuoteTableHorizontal(data));
    }
    if (typeof ($('.IRQuoteVerticalModule').html()) != "undefined" && typeof ($('#IRQuoteTableVerticalTemplate').html()) != "undefined") {
        $(".IRQuoteVerticalModule").html(menuTemplate_QuoteTableVertical(data));
    }    
}
function updateMiniQuoteTable()
{
    debugStep("updateMiniQuoteTable");
    var data = {
        headers: translations,
        stocks: globalQuoteTableData.data[globalActiveListingIndex]
    }
    if (typeof ($('.IRMiniQuoteModule').html()) != "undefined" && typeof ($('#IRMiniQuoteModuleTemplate').html()) != "undefined") {
        $(".IRMiniQuoteModule").html(menuTemplate_MiniQuoteTable(data));
    }
}
function updateChartNavBarRange()
{
    $('.chartChangePeriod #d1').html(translations.t_range1d);
    $('.chartChangePeriod #d5').html(translations.t_range5d);
    $('.chartChangePeriod #m3').html(translations.t_range3m);
    $('.chartChangePeriod #m6').html(translations.t_range6m);
    $('.chartChangePeriod #y1').html(translations.t_range1y);
    $('.chartChangePeriod #y2').html(translations.t_range2y);
    $('.chartChangePeriod #y5').html(translations.t_range5y);
    $('.chartChangePeriod #max').html(translations.t_rangeMax);
}

var optionsDataGrouping = {
    enabled: false
};
//var optionsDataGrouping = {
//    approcimation: 'close',
//    units: [[
//            'minute', [1]],
//            ['day', [1]],
//            ['week', [1]],
//            ['month', [1]],
//            ['year', [1]
//            ]],
//    smoothed: false,
//    minPointLength: 0,
//    groupPixelWidth: 20,
//    dateTimeLabelFormats: {
//        minute: [chartTooltipFormatTime],
//        hour: [chartTooltipFormatTime],
//        day: [chartTooltipFormatDate],
//        week: [chartTooltipFormatDate],
//        month: [chartTooltipFormatDate],
//        year: [chartTooltipFormatDate]
//    }
//};
//
//  Chart elements
//
var optionsColumn = {
    animation: {
        duration: chartGlobalAnimationMS
    },
    grouping: false,
    groupPadding: 0.3,
    borderWidth: 0,
    stickyTracking: true,
    dataGrouping: optionsDataGrouping
    //dataGrouping: {
    //    enabled: true,
    //    groupPixelWidth: 2,
    //    forced: true,
    //    approximation: 'close'
    //}
};
//var optionsOHLC = {
//    animation: {
//        duration: chartGlobalAnimationMS
//    },
//    dataGrouping: optionsDataGrouping,
//    fillColor: {
//        linearGradient: {
//            x1: 0,
//            y1: 0,
//            x2: 0,
//            y2: 1
//        },
//        stops: [
//            [0, clientStyle.chart_ColourMain],
//            [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
//        ]
//    }
//};
//var optionsArea = {
//    animation: {
//        duration: chartGlobalAnimationMS
//    },
//    threshold: null,
//    dataGrouping: optionsDataGrouping,
//    fillColor: {
//        linearGradient: {
//            x1: 0,
//            y1: 0,
//            x2: 0,
//            y2: 1
//        },
//        stops: [
//            [0, clientStyle.chart_ColourMain],
//            [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
//        ]
//    }
//};
var optionsLine = {
    animation: {
        duration: chartGlobalAnimationMS
    }
};



//
//  Data
//
function prepareChartCompareList(data)
{
    var compareList = data.data.closePriceOther[0].data;

    var chartCompareList = "";

    var compareSeriesID = 1;
    for (var i = 0; i < compareList.length; i++) {

        chartCompareList += "<div class=\"basicButtonLook\" id=\"" + compareSeriesID + "\">" + compareList[i].name + "</div>";
        compareSeriesID += 1;
    }

    $('.chartCompareList').html(chartCompareList);

}
//
//  Chart Operations
//
function forceRedrawOfLastPriceBox()
{
    //
    //  Force redraw of last price box
    //
    chartPlotLineAdded = false;
    chartLastPriceBoxAdded = false;
    //
}
function drawChart(container, plotOptionsSeriesCompareMode)
{
    debugStep("drawChart");
    forceRedrawOfLastPriceBox();

    $(container).highcharts('StockChart', {

        colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
        chart: {
            alignTicks: true,
            borderWidth: 1,
            borderColor: clientStyle.chart_ColourBorder,
            backgroundColor: clientStyle.chart_ColourBackground,
            plotBackgroundColor: '#ffffff',
            marginRight: 70,
            marginLeft: 10,
            spacingTop: 30,
            plotBorderWidth: 1,
            plotBorderColor: clientStyle.chart_ColourBorder,
            animation: {
                duration: chartGlobalAnimationMS
            },
            events: {
                redraw: function (e)
                {
                    if (!chartLastPriceBoxAdded) {
                        chartUpdateCurrentPriceBox(e);
                        chartLastPriceBoxAdded = true;
                    }
                }
            }
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
            //crosshairs: [{
            //    width: 1,
            //    color: clientStyle.chart_ColourBorder
            //}, {
            //    width: 1,
            //    color: clientStyle.chart_ColourBorder
            //}],
            formatter: function ()
            {
                try {
                    var usedToolTipFormat = chartTooltipFormatDate;
                    if (globalActivePeriod == 'd1' || globalActivePeriod == 'd5') {
                        usedToolTipFormat = chartTooltipFormatTime;
                    } else {
                        usedToolTipFormat = chartTooltipFormatDate;
                    }
                    var tootipFormatted = '<span style="color: ' + clientStyle.chart_ColourMain + '">\u25CF ' + getActiveListingName() + '</span><br />';
                    tootipFormatted += '<span>' + Highcharts.dateFormat(usedToolTipFormat, this.x) + '</span><br />';

                    var closePriceFound = false;
                    var volumeFound = false;
                    $.each(this.points, function (i, series)
                    {
                        // Todo, we know the index of each series, fetch appropiate data.
                        //debugDataContent(this.point);

                        var o = series.point.open;
                        var h = series.point.high;
                        var l = series.point.low;
                        var c = series.point.close;
                        var v = series.point.y;

                        var includeVolume = true;

                        if (o == c == v) {
                            includeVolume = false;
                        }

                        if (typeof (o) != 'undefined' && typeof (c) != 'undefined' && typeof (h) != 'undefined' && typeof (l) != 'undefined') {
                            tootipFormatted += 'O: ' + formatDecimal(o) + '<br />';
                            tootipFormatted += 'H: ' + formatDecimal(h) + '<br />';
                            tootipFormatted += 'L: ' + formatDecimal(l) + '<br />';
                            tootipFormatted += 'C: ' + formatDecimal(c) + '<br />';
                            closePriceFound = true;
                        } else if (typeof (v) != 'undefined') {

                            if (includeVolume && closePriceFound) {
                                tootipFormatted += 'V: ' + formatLocal(v) + '<br />';
                            }
                        }
                    });

                    return tootipFormatted;
                }
                catch (err) {

                }
            },
            positioner: function (boxWidth, boxHeight, point)
            {
                var chartWidth = $('.highcharts-container').width();
                var plotX = point.plotX + 30;

                if (plotX > chartWidth - boxWidth - 50) {
                    plotX = plotX - boxWidth - 40;
                }
                return { x: plotX, y: chartTooltipOffsetY };
            }
        },
        xAxis: {
            alignTick: true,
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
                formatter: function ()
                {
                    return formatDecimal(this.value) + '';
                }
            }
        }, {
            // Volume axis
            id: 'y2',
            opposite: true,
            labels: {
                enabled: false
            },
            gridLineWidth: 0,
            showFirstLabel: false,
            showLastLabel: false,
            top: 346,
            height: 50
        }],
        plotOptions: {
            series: {
                turboThreshold: 100,
                threshold: null,
                cropThreshold: 10,
                tooltip: {
                    valueDecimals: chartTooltipDecimals
                },
                dataGrouping: {
                    //enabled: true,
                    //groupPixelWidth: 2,
                    //forced: true,
                    //approximation:'close'
                    enabled: false
                }
            },
            OHLC: {
                turboThreshold: 100,
                threshold: null,
                cropThreshold: 300,
                animation: {
                    duration: chartGlobalAnimationMS
                },
                dataGrouping: {
                    //enabled: true,
                    //groupPixelWidth: 2,
                    //forced: true,
                    //approximation:'close'
                    enabled: false
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
            area: {
                turboThreshold: 100,
                threshold: null,
                cropThreshold: 300,
                animation: {
                    duration: chartGlobalAnimationMS
                },
                dataGrouping: {
                    //enabled: true,
                    //groupPixelWidth: 2,
                    //forced: true,
                    //approximation: 'close'
                    enabled: false
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
            }
        },
        navigator: {
            outlineColor: clientStyle.chart_ColourBorder,
            adaptToUpdatedData: false,
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
        scrollbar: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        rangeSelector: {
            enabled: false
        }
    });
}
function drawChartMini(container, plotOptionsSeriesCompareMode)
{
    debugStep("drawChart - " + container);
    forceRedrawOfLastPriceBox();
    $(container).highcharts('StockChart', {

        colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
        chart: {
            alignTicks: false,
            borderWidth: 1,
            borderColor: clientStyle.chart_ColourBorder,
            backgroundColor: clientStyle.chart_ColourBackground,
            plotBackgroundColor: '#ffffff',
            marginRight: 70,
            marginLeft: 10,
            marginBottom: 10,
            spacingTop: 30,
            spacingBottom: 0,
            plotBorderWidth: 1,
            plotBorderColor: clientStyle.chart_ColourBorder,
            animation: {
                duration: chartGlobalAnimationMS
            },
            events: {
                redraw: function (e)
                {
                    if (!chartLastPriceBoxAdded) {
                        chartUpdateCurrentPriceBox(e);
                        chartLastPriceBoxAdded = true;
                    }
                }
            }
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
            //crosshairs: [{
            //    width: 1,
            //    color: clientStyle.chart_ColourBorder
            //}, {
            //    width: 1,
            //    color: clientStyle.chart_ColourBorder
            //}],
            //pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y} ' + globalActiveCurrency + '</b>',
            formatter: function ()
            {
                try {
                    var usedToolTipFormat = chartTooltipFormatDate;
                    if (globalActivePeriod == 'd1' || globalActivePeriod == 'd5') {
                        usedToolTipFormat = chartTooltipFormatTime;
                    } else {
                        usedToolTipFormat = chartTooltipFormatDate;
                    }
                    var tootipFormatted = '<span style="color: ' + clientStyle.chart_ColourMain + '">\u25CF ' + getActiveListingName() + '</span><br />';
                    tootipFormatted += '<span>' + Highcharts.dateFormat(usedToolTipFormat, this.x) + '</span><br />';

                    $.each(this.points, function (i, series)
                    {
                        var o = series.point.open;
                        var h = series.point.high;
                        var l = series.point.low;
                        var c = series.point.close;

                        if (typeof (o) != 'undefined' && typeof (c) != 'undefined' && typeof (h) != 'undefined' && typeof (l) != 'undefined') {
                            tootipFormatted += 'O: ' + formatDecimal(o) + '<br />';
                            tootipFormatted += 'H: ' + formatDecimal(h) + '<br />';
                            tootipFormatted += 'L: ' + formatDecimal(l) + '<br />';
                            tootipFormatted += 'C: ' + formatDecimal(c) + '<br />';
                        }
                    });

                    return tootipFormatted;
                }
                catch (err) {

                }
            },
            positioner: function (boxWidth, boxHeight, point)
            {
                var chartWidth = $('.highcharts-container').width();
                var plotX = point.plotX + 30;

                if (plotX > chartWidth - boxWidth - 50) {
                    plotX = plotX - boxWidth - 40;
                }
                return { x: plotX, y: chartTooltipOffsetY };
            }
        },
        xAxis: {
            ordinal: true,
            lineWidth: 0,
            lineColor: clientStyle.chart_ColourBorder,
            tickLength: 0,
            gridLineWidth: 1,
            gridLineColor: '#eee',
            showFirstLabel: false,
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
                    formatter: function ()
                    {
                        return formatDecimal(this.value) + '';
                    }
                }
        },
        plotOptions: {
            area: {
                animation: {
                    duration: chartGlobalAnimationMS
                },
                threshold: null,
                dataGrouping: {
                    enabled: false
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
                        //[1, clientStyle.chart_ColourMain]
                    ]
                }
            },
            line: {
                animation: {
                    duration: chartGlobalAnimationMS
                }
            }
        },
        navigator: {
            height: 0,
            outlineWidth: 0,
            outlineColor: clientStyle.chart_ColourBorder,
            adaptToUpdatedData: false,
            maskInside: false,
            maskFill: 'rgba(255, 255, 255, 0.0)',
            handles: {
                backgroundColor: 'rgba(255, 255, 255, 0.0)',
                borderColor: 'transparrent'
            },
            xAxis: {
                ordinal: true,
                labels: {
                    enabled: false
                }
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
        }
    });
}
function chartEnableChartSelectedPeriod(period)
{
    $('div.chartChangePeriod div').removeClass('activePeriod');
    $('div.chartChangePeriod div#' + period).addClass('activePeriod');
}


function clickedChartPeriod2(e)
{
    //
    //  Input: ID of clicked button
    //
    var days = -1;
    var hours = -1;

    globalActivePeriod = e;

    switch (e) {
        case 'd1':
            hours = 24;
            break;
        case 'd5':
            hours = 24 * 5;
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
    chartEnableChartSelectedPeriod(e);

    if (days > 0) {
        stateNewHistoricalPeriodSelected2(days);
    }

}
function stateNewHistoricalPeriodSelected2(days)
{
    //redrawHTMLChartWithNewListing();
    setChartExtremes('historical', days);
}

function clickedChartPeriod(e)
{
    //
    //  Input: ID of clicked button
    //
    var days = -1;
    var hours = -1;

    globalActivePeriod = e;

    switch (e) {
        case 'd1':
            hours = 24;
            break;
        case 'd5':
            hours = 24 * 5;
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
    chartEnableChartSelectedPeriod(e);

    if (days > 0) {
        stateNewHistoricalPeriodSelected(days);
    }

    if (hours > 0) {
        stateNewIntradayPeriodSelected(hours);
    }

}
function stateNewHistoricalPeriodSelected(days)
{
    redrawHTMLChartWithNewListing();
    setChartExtremes('historical', days);
}
function stateNewIntradayPeriodSelected(hours)
{
    redrawHTMLChartWithNewIntradayData(hours);
}
function drawChartHeadlineClientName()
{
    $('.IRChartClientName').html(getActiveListingName());
}
//
//  Historical data for chart
//

function redrawHTMLChartWithNewListing()
{
    debugStep("redrawHTMLChartWithNewListing");

    globalChartDom = getChartDOM();
    globalChartDom.destroy(); // Exclude the first time

    if (globalChartType == chartToolTypes.typeChartMini) {
        drawChartMini(globalChartContainer, 'historical');
    }
    if (globalChartType == chartToolTypes.typeChart) {
        drawChart(globalChartContainer, 'historical');
    }

    globalChartDom = getChartDOM();

    //
    //  Mountain chart
    //
    globalChartDom.addSeries({
        index: 1,
        name: getActiveListingName(),
        id: globalActiveListingIndex,
        data: chartListingBasicData[globalActiveListingIndex],
        color: clientStyle.chart_ColourMain,
        yAxis: 0,
        visible: true,
        linkedTo: 0,
        type: 'area'
    }, false, 0);

    //
    //  OHLC chart (for tooltip)
    //
    globalChartDom.addSeries({
        index: 2,
        name: getActiveListingName(),
        id: 'ohlc_' + globalActiveListingIndex,
        data: chartListingData[globalActiveListingIndex],
        color: 'rgba(255,255,255,0)',
        yAxis: 0,
        visible: true,
        linkedTo: 0,
        type: 'ohlc'
    }, false, 0);

    //
    //  Volume chart
    //
    globalChartDom.addSeries({
        index: 3,
        name: 'volume_' + getActiveListingName(),
        id: 'volume_' + globalActiveListingIndex,
        data: chartListingVolumeData[globalActiveListingIndex],
        yAxis: 1,
        visible: true,
        linkedTo: 0,
        type: 'column'
    }, false, 0);

    globalChartDom.redraw();

    drawChartHeadlineClientName();
    updateChartCurrency();
    globalChartDom = getChartDOM(); // Prepare for next iteration
}

function redrawHTMLChartWithCompareData(activeHTMLDisplayMode)
{
    debugStep("redrawHTMLChartWithCompareData");
    var chart = getChartDOM();

    while (chart.series.length > 1) {
        chart.series[1].remove(false);
    }

    if (activeHTMLDisplayMode == "compare") {
        for (var i = 0; i < chartCompareData[0].length; i++) {
            chart.addSeries({
                name: chartCompareNames[i],
                id: i,
                data: chartCompareData[0][i]
            }, false, false);
        }
        chart.yAxis[0].setCompare('percent', false);
    }
    if (activeHTMLDisplayMode == "historical") {
        chart.yAxis[0].setCompare('none', false);
    }

    getVisibleSeriesCount();

    chart.redraw();
}
//
//  Intraday data for chart
//
function redrawHTMLChartWithNewIntradayData(hours)
{
    debugStep("redrawHTMLChartWithNewIntradayData");

    if (chartActiveDisplayMode != "intraday") {
        chartActiveDisplayMode == "intraday";

        globalChartDom.destroy();

        if (globalChartType == chartToolTypes.typeChartMini) {
            drawChartMini(globalChartContainer, 'IntradayData');
        }
        if (globalChartType == chartToolTypes.typeChart) {
            drawChart(globalChartContainer, 'IntradayData');
        }

        globalChartDom = getChartDOM();

        //
        //  Mountain chart
        //
        globalChartDom.addSeries({
            name: getActiveListingName(),
            id: globalActiveListingIndex,
            data: chartIntradayBasicData[globalActiveListingIndex],
            color: clientStyle.chart_ColourMain,
            yAxis: 0,
            linkedTo: 0,
            type: 'area'
        }, false, 0);

        globalChartDom.addSeries({
            name: getActiveListingName(),
            id: 'ohlc_' + globalActiveListingIndex,
            data: chartIntradayData[globalActiveListingIndex],
            color: 'rgba(255,255,255,0)',
            yAxis: 0,
            visible: true,
            linkedTo: 0,
            type: 'ohlc'
        }, false, 0);
    }

    setChartExtremes('intraday', hours);

    globalChartDom.redraw();

    globalChartDom = getChartDOM(); // Prepare for next iteration
}


//
//  Unsorted
//

function getVisibleSeriesCount()
{
    var visibleCompareSeries = 0;
    var chart = getChartDOM();
    $.each(chart.series, function (index, item)
    {
        if (typeof (item) != "undefined") {
            if (item.visible) {
                visibleCompareSeries += 1;
            }
        }
    });
    globalVisibleSeriesCount = visibleCompareSeries;
    debugDataContent("globalVisibleSeriesCount: " + globalVisibleSeriesCount);
}
function getActiveListingName()
{
    return globalListingNames[globalActiveListingIndex];
}
function getActiveListingCurrency()
{
    return globalCurrencies[globalActiveListingIndex];
}

function showHideCompareSeries(serieID)
{
    debugDataContent("serieID: " + serieID);

    //if (visibleCompareSeries > 1) {
    //    setChartMode("compare");
    //} else {
    //    setChartMode("historical");
    //}

    //if (visibleCompareSeries == 1) {
    //    //
    //    // Only main listing is left in compare mode.
    //    //
    //    chartActiveDisplayMode = "historical";

    //    redrawHTMLChartWithCompareData(chartActiveDisplayMode);
    //    chartHideAllSeriesButClicked(serieID);
    //    setChartMode(chartActiveDisplayMode);
    //    chartShowHideSpecificSerie(serieID);


    //} else {
    //    chartActiveDisplayMode = "compare";
    //    setChartMode(chartActiveDisplayMode);
    //    chartShowHideSpecificSerie(serieID);
    //}



    //if (getChartDOM().series.length - 1 == globalNumberOfComparisonsInstruments) {

    //    debugStep("showHideCompareSeries A - ");

    //    var visibleCompareSeries = 0;
    //    $.each(getChartDOM().series, function (index, item)
    //    {
    //        if (typeof (item.visible) != "undefined") {
    //            if (item.visible) {
    //                visibleCompareSeries += 1;
    //            }
    //        }
    //    });

    //    debugDataContent(visibleCompareSeries);

    //    chartShowHideSpecificSerie(serieID);

    //    if (visibleCompareSeries == 0) {
    //        //
    //        // Only main listing is left in compare mode.
    //        // 
    //        chartActiveDisplayMode = "historical";
    //        setChartMode(chartActiveDisplayMode);
    //    } else {


    //        chartActiveDisplayMode = "compare";

    //        setChartMode(chartActiveDisplayMode);
    //    }



    //    //debugDataContent(getChartDOM().series.length - 1);
    //    //debugDataContent(globalNumberOfComparisonsInstruments);

    //    //debugDataContent(serieID);
    //    //debugDataContent(getChartDOM().series['' + serieID + ''].visible);

    //} else {

    //    debugStep("showHideCompareSeries B - ");

    //    // Not in compare mode.
    //    if (chartActiveDisplayMode == "historical") {
    //        chartActiveDisplayMode = "compare";
    //        redrawHTMLChartWithCompareData(chartActiveDisplayMode);
    //        chartHideAllSeriesButClicked(serieID);
    //        chartShowHideSpecificSerie(serieID);
    //    }
    //}

}
function chartHideAllSeriesButClicked(serieID)
{
    for (i = 1; i < globalNumberOfComparisonsInstruments; i++) {
        getChartDOM().series['' + i + ''].hide();
    }
    getVisibleSeriesCount();
}
function chartShowHideSpecificSerie(serieID)
{
    if (getChartDOM().series['' + serieID + ''].visible) {
        getChartDOM().series['' + serieID + ''].hide();
    } else {
        getChartDOM().series['' + serieID + ''].show();
    }
}
function drawMainListingToChart(container, activeListingChartName, listingArrayForChart)
{
    debugStep("drawMainListingToChart");
    var chart = $(container).highcharts();
    chart.addSeries({
        name: getActiveListingName(),
        data: listingArrayForChart
    }, false, false);
}
function drawCompareDataToChart(container, peerArr, peerArrayForChart)
{
    debugStep("drawCompareDataToChart");
    var chart = getChartDOM();
    for (var i = 0; i < peerArr.length; i++) {
        chart.addSeries({
            name: peerArr[i].name,
            data: peerArrayForChart[i],
            pointStart: peerArrayForChart[i][0]
        }, false, false);
    }
}
function setChartMode(mode)
{
    debugStep("setChartMode - mode: " + mode + "");
    if (mode == "historical") {
        getChartDOM().yAxis[0].setCompare('none', false);
    }
    if (mode == "compare") {
        getChartDOM().yAxis[0].setCompare('percent', false);
    }
    getVisibleSeriesCount();
    //chart.redraw()
}
function setChartExtremes(mode, period)
{

    if (mode == 'historical') {

        debugStep("setChartExtremes: historical");

        // Period == Days

        //debugData("chartListingData (in setChartExtremes)");
        //debugDataContent(chartListingData);

        var lastEntryIndex = chartListingData[globalActiveListingIndex].length - 1;
        var lastEntryUnix = chartListingData[globalActiveListingIndex][lastEntryIndex][0];
        var firstEntryUnix = chartListingData[globalActiveListingIndex][0][0];
        var firstDate = moment.utc(firstEntryUnix);
        var toDate = moment.utc(lastEntryUnix);
        var fromDate = moment.utc(lastEntryUnix);

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
    }
    if (mode == 'intraday') {

        debugStep("setChartExtremes: intraday");

        // Period == Hours
        var lastEntryIndex = chartIntradayData[globalActiveListingIndex].length - 1;
        var lastEntryUnix = chartIntradayData[globalActiveListingIndex][lastEntryIndex][0];
        var firstEntryUnix = chartIntradayData[globalActiveListingIndex][0][0];
        var firstDate = moment.utc(firstEntryUnix);
        var toDate = moment.utc(lastEntryUnix);
        var fromDate = moment.utc(lastEntryUnix);

        fromDate.add('hours', -period);

        if (fromDate < firstDate) {
            fromDate = firstDate;
        }

        if (period == 120) {
            getChartDOM().xAxis[0].setExtremes(
                Date.UTC(firstDate.year(), firstDate.month(), firstDate.date(), firstDate.hour(), firstDate.minute()),
                Date.UTC(toDate.year(), toDate.month(), toDate.date(), toDate.hour(), toDate.minute())
            );
        } else {
            getChartDOM().xAxis[0].setExtremes(
                Date.UTC(fromDate.year(), fromDate.month(), fromDate.date(), 0, 0),
                Date.UTC(toDate.year(), toDate.month(), toDate.date(), toDate.hour(), toDate.minute())
            );
        }

    }

}
//
//  Not yet implemened
//
function chartUpdatePlotLine(numberAmountBeforeDecimalPoints)
{
    debugStep("chartUpdatePlotLine");

    if (!chartPlotLineAdded) {

        var offsetX = 80;
        //if (numberAmountBeforeDecimalPoints == 4) {
        //    offsetX = offsetX - 2 + (9 * 3);
        //}
        //if (numberAmountBeforeDecimalPoints == 3) {
        //    offsetX = offsetX + (9 * 2);
        //}
        //if (numberAmountBeforeDecimalPoints == 2) {
        //    offsetX = offsetX + 9;
        //}
        //if (numberAmountBeforeDecimalPoints == 1) {
        //    offsetX = offsetX + 2;
        //}

        //var globalLastPriceDate = "N/A";
        //var globalLastPriceTime = "N/A";

        //debugData(chartLastPrice);



        var lastPrice = globalQuoteTableData.data[globalActiveListingIndex].last;


        try {
            globalChartDom.yAxis[0].addPlotLine({
                value: lastPrice,
                width: 1,
                color: clientStyle.chart_ColourMain,
                dashStyle: 'dash',
                id: 'chartPlotLine',
                label: {
                    text: '<div class="chartCurrentPriceBoxOuter"><div class="chartCurrentPriceBox" style="border: 1px solid ' + clientStyle.chart_ColourMain + ';background-color: ' + clientStyle.chart_ColourMain + ';"><div class="chartCurrentPriceBoxArrow"><div class="irCPB1" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div><div class="irCPB2" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div><div class="irCPB3" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div></div><div class="chartLastPrice">' + formatDecimal(lastPrice) + '</div><br /><div class="chartLastPriceDate">' + globalLastPriceDate + '</div><div class="chartLastPriceTime">' + globalLastPriceTime + '</div></div></div>',
                    align: 'right',
                    y: 0,
                    x: offsetX,
                    width: 0,
                    useHTML: true
                    //style: {
                    //    fontFamily: 'sans-serif',
                    //    color: 'white',
                    //    cursor: 'default',
                    //    fontWeight: 'normal',
                    //    padding: '3px',
                    //    paddingRight: '40px',
                    //    fontSize: '12px',
                    //backgroundColor: 'yellow'
                    //}
                }
            });
        }
        catch (err) {
            debugDataContent(err);
        }

    }


}
function updateChartCurrentPriceBox(currentPrice)
{
    debugStep("updateChartCurrentPriceBox");
    $('.chartCurrentPriceBox .chartLastPrice').html(currentPrice.toFixed(chartTooltipDecimals));
}
function chartUpdateCurrentPriceBox(e)
{
    debugStep("chartUpdateCurrentPriceBox");



    //var chartPlotLastY = 0;
    //var chartLastEntryPrice = 0;

    //
    //  1) Try to optain the last point currenty in the chart (through the points array). Get the Y offset in px.
    //
    try {

        //var groupedDataLenghtNew = e.delegateTarget.xAxis[0].series[0].activePointCount - 1;
        //chartPlotLastY = e.delegateTarget.xAxis[0].series[0].points[groupedDataLenghtNew].plotY;
        //chartLastEntryPrice = e.delegateTarget.xAxis[0].series[0].points[groupedDataLenghtNew].y;
    }
    catch (e) {

    }

    //
    //  2) When above fails due to missing (points array) use the groupedData array. Get the Y offset in px.
    //
    try {

        //var groupedDataLenght = e.delegateTarget.xAxis[0].series[0].groupedData.length - 1;
        //chartPlotLastY = e.delegateTarget.xAxis[0].series[0].groupedData[groupedDataLenght].plotY;
        //chartLastEntryPrice = e.delegateTarget.xAxis[0].series[0].groupedData[groupedDataLenght].y;
    }
    catch (e) {

    }

    //var numberAmountBeforeDecimalPoints = formatDecimal(chartLastEntryPrice);


    //if (numberAmountBeforeDecimalPoints.indexOf('.') > -1) {
    //    var beforeDecimalPoints = numberAmountBeforeDecimalPoints.split('.');
    //    numberAmountBeforeDecimalPoints = beforeDecimalPoints[0].length;
    //} else {
    //    numberAmountBeforeDecimalPoints = numberAmountBeforeDecimalPoints.length;
    //}

    //var lastPrice = stockDataArr[listingIndex].last

    chartUpdatePlotLine(0);
}

function updateChartCurrency()
{
    $('div.IRChartCurrency').html(getActiveListingCurrency());
}