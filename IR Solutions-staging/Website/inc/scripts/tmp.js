//
//  DOM
//
function updateQuoteTable()
{
    debugStep("updateQuoteTable");

    var data = {
        headers: {
            "t_symbol": translations.t_symbol,
            "t_bid": translations.t_bid,
            "t_ask": translations.t_ask,
            "t_last": translations.t_last,
            "t_volume": translations.t_volume,
            "t_change": translations.t_change,
            "t_high": translations.t_high,
            "t_low": translations.t_low,
            "t_timestamp": translations.t_timestamp
        },
        stocks: globalQuoteTableData.data[globalActiveListingIndex]
    }

    $(".IRQuoteModule").html(menuTemplate_QuoteTable(data));
    updateTimestamp();
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
            alignTicks: false,
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
                duration: 1
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
            id: 'y2',
            height: 200,
            labels: {
                enabled: false
            }
        }],
        plotOptions: {
            ohlc: {
                animation: {
                    duration: 1
                },
                dataGrouping: {
                    units: [[
                        'minute', [1]],
                        ['day', [1]
                        ]],
                    smoothed: true,
                    groupPixelWidth: 20,
                    dateTimeLabelFormats: {
                        minute: [chartTooltipFormatTime],
                        hour: [chartTooltipFormatTime],
                        day: [chartTooltipFormatDate]
                    }
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
                animation: {
                    duration: 1
                },
                threshold: null,
                dataGrouping: {
                    units: [[
                        'minute', [1]],
                        ['day', [1]
                        ]],
                    smoothed: true,
                    groupPixelWidth: 20,
                    dateTimeLabelFormats: {
                        minute: [chartTooltipFormatTime],
                        hour: [chartTooltipFormatTime],
                        day: [chartTooltipFormatDate]
                    }
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
            line: {
                animation: {
                    duration: 1
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
    debugStep("drawChart");
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
                duration: 1
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
            crosshairs: [{
                width: 1,
                color: clientStyle.chart_ColourBorder
            }, {
                width: 1,
                color: clientStyle.chart_ColourBorder
            }],
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y} ' + globalActiveCurrency + '</b>',
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
                    duration: 1
                },
                threshold: null,
                dataGrouping: {
                    units: [[
                        'minute', [1]],
                        ['day', [1]],
                        ['week', [1]],
                        ['month', [1]],
                        ['year', [1]
                        ]],
                    smoothed: true,
                    groupPixelWidth: 4,
                    dateTimeLabelFormats: {
                        minute: [chartTooltipFormatTime],
                        hour: [chartTooltipFormatTime],
                        day: [chartTooltipFormatDate],
                        week: [chartTooltipFormatDate],
                        month: [chartTooltipFormatDate],
                        year: [chartTooltipFormatDate]
                    }
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
                        //[1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                        [1, clientStyle.chart_ColourMain]
                    ]
                }
            },
            line: {
                animation: {
                    duration: 1
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
    debugResetTimer();

    var chart = getChartDOM();

    try {
        chart.destroy();
    }
    catch (err) {

    }

    if (globalChartType == chartToolTypes.typeChartMini) {
        drawChartMini(globalChartContainer, 'historical');
    }
    if (globalChartType == chartToolTypes.typeChart) {
        drawChart(globalChartContainer, 'historical');
    }

    chart = getChartDOM();

    //
    //  Mountain chart
    //
    chart.addSeries({
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
    chart.addSeries({
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
    //chart.addSeries({
    //    name: getActiveListingName(),
    //    id: 'vol' + globalActiveListingIndex,
    //    data: chartListingVolumeData[globalActiveListingIndex],
    //    color: 'rgba(255,255,255,0)',
    //    yAxis: 0,
    //    linkedTo: ':previous',
    //    visible: false,
    //    type: 'column'
    //}, false, 0);

    chart.redraw();

    drawChartHeadlineClientName();
    updateChartCurrency();

    debugStopsDomWrite("");
}

function redrawHTMLChartWithCompareData(activeHTMLDisplayMode)
{
    debugStep("redrawHTMLChartWithCompareData");
    debugResetTimer();
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

    chart.redraw()
    debugStopsDomWrite("");
}
//
//  Intraday data for chart
//
function redrawHTMLChartWithNewIntradayData(hours)
{
    debugStep("redrawHTMLChartWithNewIntradayData");


    var chart = getChartDOM();

    if (chartActiveDisplayMode != "intraday") {
        chartActiveDisplayMode == "intraday";

        chart.destroy();

        if (globalChartType == chartToolTypes.typeChartMini) {
            drawChartMini(globalChartContainer, 'IntradayData');
        }
        if (globalChartType == chartToolTypes.typeChart) {
            drawChart(globalChartContainer, 'IntradayData');
        }

        chart = getChartDOM();

        //
        //  Mountain chart
        //
        chart.addSeries({
            name: getActiveListingName(),
            id: globalActiveListingIndex,
            data: chartIntradayBasicData[globalActiveListingIndex],
            color: clientStyle.chart_ColourMain,
            yAxis: 0,
            linkedTo: 0,
            type: 'area'
        }, false, 0);

        chart.addSeries({
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

    debugStopsDomWrite("");

    chart.redraw();
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

            getChartDOM().xAxis[0].setExtremes(
                Date.UTC(firstDate.year(), firstDate.month(), firstDate.date(), firstDate.hour(), firstDate.minute()),
                Date.UTC(toDate.year(), toDate.month(), toDate.date(), toDate.hour(), toDate.minute())
            );

        } else {

            fromDate.add('days', -period);
            getChartDOM().xAxis[0].setExtremes(
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
function chartUpdatePlotLine(chartLastPrice, numberAmountBeforeDecimalPoints)
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

        try {
            getChartDOM().yAxis[0].addPlotLine({
                value: chartLastPrice,
                width: 1,
                color: clientStyle.chart_ColourMain,
                dashStyle: 'dash',
                id: 'chartPlotLine',
                label: {
                    text: '<div class="chartCurrentPriceBoxOuter"><div class="chartCurrentPriceBox"><div class="chartCurrentPriceBoxArrow"><div class="irCPB1"></div><div class="irCPB2"></div><div class="irCPB3"></div></div><div class="chartLastPrice">' + chartLastPrice + '</div><br /><div class="chartLastPriceDate">' + globalLastPriceDate + '</div><div class="chartLastPriceTime">' + globalLastPriceTime + '</div></div></div>',
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
                    //    background: ''
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



    var chartPlotLastY = 0;
    var chartLastEntryPrice = 0;

    //
    //  1) Try to optain the last point currenty in the chart (through the points array). Get the Y offset in px.
    //
    try {

        var groupedDataLenghtNew = e.delegateTarget.xAxis[0].series[0].activePointCount - 1;
        chartPlotLastY = e.delegateTarget.xAxis[0].series[0].points[groupedDataLenghtNew].plotY;
        chartLastEntryPrice = e.delegateTarget.xAxis[0].series[0].points[groupedDataLenghtNew].y;



        //var groupedDataLenghtNew = e.delegateTarget.xAxis[0].series[0].activePointCount - 1;
        //chartPlotLastY = e.delegateTarget.xAxis[0].series[0].points[groupedDataLenghtNew].plotY;

        //var groupedDataLenghtNew2 = e.delegateTarget.xAxis[0].series[0].activePointCount;


        ////debugData("raw data");
        ////debugDataContent("activePointCount: " + e.delegateTarget.xAxis[0].series[0].activePointCount);
        ////debugDataContent("series[0]" + e.delegateTarget.xAxis[0].series[0]);

        //if (globalActivePeriod == "d1") {

        //    //debugData(globalActivePeriod);
        //    //debugDataContent(e.delegateTarget.xAxis[0].series[0].activePointCount);
        //    //debugDataContent(e.delegateTarget.xAxis[0].series[0].yData[groupedDataLenghtNew2]);
        //    //debugDataContent(e.delegateTarget.xAxis[0].series[0].points[groupedDataLenghtNew2 - 1].plotY);

        //    chartLastEntryPrice = e.delegateTarget.xAxis[0].series[0].yData[groupedDataLenghtNew2];
        //    chartPlotLastY = e.delegateTarget.xAxis[0].series[0].points[groupedDataLenghtNew2 - 1].plotY;

        //} else if (globalActivePeriod == "d5") {

        //    //debugData(globalActivePeriod);
        //    //debugDataContent(e.delegateTarget.xAxis[0].series[0].activePointCount);
        //    //debugDataContent(e.delegateTarget.xAxis[0].series[0].yData[groupedDataLenghtNew2 + 1]);
        //    //debugDataContent(e.delegateTarget.xAxis[0].series[0].points[groupedDataLenghtNew2 + 1].plotY);

        //    chartLastEntryPrice = e.delegateTarget.xAxis[0].series[0].yData[groupedDataLenghtNew2 + 1];
        //    chartPlotLastY = e.delegateTarget.xAxis[0].series[0].points[groupedDataLenghtNew2 + 1].plotY;
        //} else {
        //    chartLastEntryPrice = e.delegateTarget.xAxis[0].series[0].yData[groupedDataLenghtNew2 + 1];
        //    chartPlotLastY = e.delegateTarget.xAxis[0].series[0].points[groupedDataLenghtNew2 + 1].plotY;
        //}






    }
    catch (e) {

    }

    //
    //  2) When above fails due to missing (points array) use the groupedData array. Get the Y offset in px.
    //
    try {

        var groupedDataLenght = e.delegateTarget.xAxis[0].series[0].groupedData.length - 1;
        chartPlotLastY = e.delegateTarget.xAxis[0].series[0].groupedData[groupedDataLenght].plotY;
        chartLastEntryPrice = e.delegateTarget.xAxis[0].series[0].groupedData[groupedDataLenght].y;
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

    chartUpdatePlotLine(formatDecimal(chartLastEntryPrice), 0);
}

function updateChartCurrency()
{
    $('div.IRChartCurrency').html(globalActiveCurrency);
}