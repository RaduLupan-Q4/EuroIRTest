//
//  DOM Operations
//
function buildOrdersTable(data, template)
{
    debugStep("buildOrdersTable");
    $(".IROrdersModule").html(template(data));
}
function buildTradesTable(data, template)
{
    debugStep("buildTradesTable");
    $(".IRTradesModule").html(template(data));
}
function buildBenchmark()
{
    debugStep("buildBenchmark");
}
function buildNewsTool()
{
    debugStep("buildNewsTool");
    timerStart();
    $(".IRNewsModule").html(menuTemplate_News(globalNewsRawData));
    if (typeof ($('.IRNewsModule').html()) != "undefined" && typeof ($('#IRNewsEntriesTemplate').html()) != "undefined") {
        $(".IRNewsEntries").html(menuTemplate_NewsEntries(globalNewsRawData));
    }
    timerEnd('buildNewsTool');
    newsFilter();
}
function buildNewsHeadlineTool()
{
    debugStep("buildNewsHeadlineTool");
    timerStart();
    $(".IRNewsHeadlineModule").html(menuTemplate_NewsHeadline(globalNewsRawData));
    //if (typeof ($('.IRNewsModule').html()) != "undefined" && typeof ($('#IRNewsEntriesTemplate').html()) != "undefined") {
    //    $(".IRNewsEntries").html(menuTemplate_NewsEntries(globalNewsRawData));
    //}
    timerEnd('buildNewsHeadlineTool');
    
}
function buildEmailAlertTool()
{
    debugStep("buildEmailAlertTool");
    if (typeof ($('.IREmailAlertModule').html()) != "undefined" && typeof ($('#IREmailAlertTemplate').html()) != "undefined") {
        $(".IREmailAlertModule").html(menuTemplate_EmailAlert());
    }
}
function buildNewsEntries(data)
{
    newsFilterReset();
    debugStep("buildNewsEntries");
    timerStart();
    $('tr.Data').addClass('hide');
    for (var i = 0; i <  data.storyIds.length; i++) {
        $('#' + data.storyIds[i]).removeClass('hide');
    }
    timerEnd('buildNewsEntries');
    newsFilter();
}
function setNewsPagination()
{
    debugStep("setNewsPagination");
    timerStart();
    for (var page = 1; page <= globalNewsPagesInTotal; page++) {
        $('tr.Data').removeClass('page' + page);
    }

    var count = 0;
    var page = 1;
    $('tr.Data').each(function ()
    {
        if (!$(this).hasClass('hide')) {
            $(this).addClass('page' + page);
            count++;
        }
        if (count == clientStyle.amountOfNewsPerPage) {
            count = 0;
            page++;
        }
    });
    globalNewsPagesInTotal = page;


    var paginationHTML = "";
    for (var i = 1; i <= globalNewsPagesInTotal; i++) {
        paginationHTML += '<div class=\"IRNewsPageNumber IRNewsPageNumber' + i + '\">' + i + '</div>';
    }

    $('.IRNewsPagination').html(paginationHTML);

    timerEnd('setNewsPagination');
    
    setNewsActivePage(1);

    // Set Click Handler
    $('.IRNewsPageNumber').click(function ()
    {
        var page = $(this).html();
        setNewsActivePage(page);
    });

    
}
function setNewsActivePage(activePage)
{
    debugStep("setNewsActivePage");
    timerStart();
    for (var page = 1; page <= globalNewsPagesInTotal; page++) {
        $('tr.Data.page' + page).addClass('hide');
    }
    $('tr.Data.page' + activePage).removeClass('hide');

    $('.IRNewsPageNumber').removeClass('active');
    $('.IRNewsPageNumber' + activePage).addClass('active');

    timerEnd('setNewsActivePage');
}
function buildLookupTool(data, template)
{
    debugStep("buildLookupTool");
    $(".IRLookupModule").html(template(data));
    initializeLookup();
}
function buildCalcTool(data, template)
{
    debugStep("buildCalcTool");
    $(".IRCalcModule").html(template(data));
    initializeCalc();
}
function buildQuoteTable()
{
    debugStep("buildQuoteTable");
    var data = {
        headers: translations,
        stocks: globalRawStockData[globalActiveListingIndex]
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
function buildIRChartTool()
{
    debugStep("buildIRChartTool");
    var data = {
        headers: translations,
        stocks: globalRawStockData[globalActiveListingIndex]
    }
    if (typeof ($('.IRChartModule').html()) != "undefined" && typeof ($('#IRChartModuleTemplate').html()) != "undefined") {
        $(".IRChartModule").html(menuTemplate_IRChart(data));
    }
}
function drawIRChartCompareListNavigation(listingStockData, comparisonList)
{
    var IRChartCompareListNavigation = "<div class=\"compareListNavigation\">Comparison</div>";
    IRChartCompareListNavigation += "<div class=\"compareListNavigationInner\">";
    for (var i = 0; i < listingStockData.length; i++) {
        IRChartCompareListNavigation += "<div class=\"basicButtonLook\" id=\"" + i + "\">" + listingStockData[i].symbol + "</div><br />";
    }

    for (var i = 0; i < comparisonList.length; i++) {
        IRChartCompareListNavigation += "<div class=\"basicButtonLook\" id=\"" + comparisonList[i][0] + "\">" + comparisonList[i][2] + "</div><br />";
    }
    IRChartCompareListNavigation += "</div>";
    $('.IRChartCompareListNavigation').html(IRChartCompareListNavigation);
}
function drawIRChartHTMLLookup()
{
    //debugStep("drawIRChartHTMLLookup");

    //$(globalChartContainer).highcharts('StockChart', {
    //    colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
    //    chart: {
    //        alignTicks: true,
    //        panning: false,
    //        backgroundColor: 'white',
    //        borderWidth: 0,
    //        plotBorderWidth: 1,
    //        plotBorderColor: '#eeeeee',
    //        marginRight: 5,
    //        marginLeft: 5,
    //        spacingTop: 5,
    //        spacingBottom: 0,
    //        animation: {
    //            duration: globalChartAnimationMS
    //        }
    //    },

    //    rangeSelector: {
    //        selected: 1
    //    },

    //    tooltip: {
    //        shadow: false,
    //        valueDecimals: clientStyle.amountOfDecimals,
    //        changeDecimals: 2,
    //        borderRadius: 0,
    //        borderWidth: 0,
    //        shared: true,
    //        useHTML: true,
    //        backgroundColor: 'rgba(255,255,255,0)',
    //        formatter: function ()
    //        {
    //            var date = Highcharts.dateFormat('%Y-%m-%d', this.x);

    //            var time = Highcharts.dateFormat('%H:%M:%S', this.x);
    //            var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
    //            var unixDate = new moment(date + 'T00:00:00.0000000Z').valueOf();
    //            var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();

    //            return updateTooltipDCV(unixDateTime);
    //        },
    //        positioner: function (boxWidth, boxHeight, point)
    //        {
    //            var chartWidth = $(globalChartContainer).width();
    //            var plotX = point.plotX + 30;

    //            if (plotX > chartWidth - boxWidth - 50) {
    //                plotX = plotX - boxWidth - 40;
    //            }
    //            return { x: plotX, y: boxHeight };
    //        }
    //    },

    //    credits: {
    //        enabled: false
    //    },

    //    exporting: {
    //        enabled: false
    //    },

    //    navigator: {
    //        enabled: false
    //    },

    //    scrollbar: {
    //        enabled: false
    //    },

    //    rangeSelector: {
    //        enabled: false
    //    },

    //    xAxis: {
    //        ordinal: false,
    //        lineColor: '#eeeeee',
    //        gridLineColor: '#eeeeee',
    //        gridLineDashStyle: 'Solid',
    //        gridLineWidth: 1,
    //        minorGridLineWidth: 0,
    //        showFirstLabel: false,
    //        showLastLabel: false,
    //        endOnTick: false,
    //        tickPixelInterval: 100,
    //        tickLength: 0,
    //        labels: {
    //            staggerLines: 1,
    //            step: 2
    //        },
    //        dateTimeLabelFormats: getChartDateTimeLabelFormats()
    //    },

    //    yAxis: {
    //        lineColor: '#eeeeee',
    //        gridLineColor: '#eeeeee',
    //        gridLineDashStyle: 'Solid',
    //        gridLineWidth: 1,
    //        //tickPixelInterval: 40,
    //        labels: {
    //            align: 'right',
    //            x: 0,
    //            y: 0,
    //            formatter: function ()
    //            {
    //                return formatDecimal(this.value);
    //            }
    //        }
    //    },

    //    plotOptions: {
    //        series: {
    //            animation: {
    //                duration: globalChartAnimationMS
    //            }
    //        },
    //        line: {
    //            animation: false
    //        }
    //    }

    //    //title: {
    //    //    text: 'HSBC',
    //    //    floating: true,
    //    //    align: 'left',
    //    //    x: 10,
    //    //    y: 20,
    //    //    style: {
    //    //        color: '#aaaaaa'
    //    //    }
    //    //}
    //});
    //globalChartDom = getChartDOM();

}
function drawIRChartHTML()
{
    debugStep("drawIRChartHTML");

    globalChartWidth = $(globalChartContainer).css('width').replace('px', '');

    $(globalChartContainer).highcharts('StockChart', {
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
                duration: globalChartAnimationMS
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
            formatter: function ()
            {
                var date = Highcharts.dateFormat('%Y-%m-%d', this.x);

                var time = Highcharts.dateFormat('%H:%M:%S', this.x);
                var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                var unixDate = new moment(date + 'T00:00:00.0000000Z').valueOf();
                var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();

                //return updateTooltipDOHLCV(unixDateTime);

                if (useIRChartNews) {
                    return updateTooltipDOHLCVN(unixDateTime);
                } else {
                    return updateTooltipDOHLCV(unixDateTime);
                }

                
            },
            positioner: function (boxWidth, boxHeight, point)
            {
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

                if (globalChartActiveDisplayMode == "intraday") {
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
                formatter: function ()
                {
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
            top: '80%',
            height: '20%',
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
function drawIRChartMiniHTML()
{
    debugStep("drawIRChartMiniHTML");

    $(globalChartContainer).highcharts('StockChart', {
        colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
        chart: {
            panning: false,
            alignTicks: true,
            borderWidth: 1,
            borderColor: clientStyle.chart_ColourBorder,
            backgroundColor: clientStyle.chart_ColourBackground,
            plotBorderWidth: 1,
            plotBackgroundColor: '#ffffff',
            plotBorderColor: clientStyle.chart_ColourBorder,
            marginRight: 70,
            marginLeft: 10,
            spacingTop: 30,
            plotBorderWidth: 1,
            plotBorderColor: clientStyle.chart_ColourBorder,
            animation: {
                duration: globalChartAnimationMS
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
            formatter: function ()
            {
                var date = Highcharts.dateFormat('%Y-%m-%d', this.x);

                var time = Highcharts.dateFormat('%H:%M:%S', this.x);
                var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                var unixDate = new moment(date + 'T00:00:00.0000000Z').valueOf();
                var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();

                return updateTooltipDCV(unixDateTime);
            },
            positioner: function (boxWidth, boxHeight, point)
            {
                var chartWidth = $(globalChartContainer).width();
                var plotX = point.plotX + 30;

                if (plotX > chartWidth - boxWidth - 50) {
                    plotX = plotX - boxWidth - 40;
                }
                return { x: plotX, y: boxHeight };
            }
        },
        navigator: {
            enabled: false
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
            dateTimeLabelFormats: getChartDateTimeLabelFormats()
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
            // Volume
            id: 'y2',
            opposite: true,
            labels: {
                enabled: false
            },
            lineWidth: 0,
            gridLineWidth: 0,
            showFirstLabel: false,
            showLastLabel: false,
            top: 0,
            height: 50
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
                }
            }
        }
    });
    globalChartDom = getChartDOM();
}
function drawMiniquoteChart()
{
    debugStep("drawMiniquoteChart");

    $(globalChartContainer).highcharts('StockChart', {
        colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
        chart: {
            panning: false,
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
            formatter: function ()
            {
                var date = Highcharts.dateFormat('%Y-%m-%d', this.x);

                var time = Highcharts.dateFormat('%H:%M:%S', this.x);
                var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                var unixDate = new moment(date + 'T00:00:00.0000000Z').valueOf();
                var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();

                return updateTooltipDCV(unixDateTime);
            },
            positioner: function (boxWidth, boxHeight, point)
            {
                var chartWidth = $(globalChartContainer).width();
                var plotX = point.plotX + 30;

                if (plotX > chartWidth - boxWidth - 50) {
                    plotX = plotX - boxWidth - 40;
                }
                return { x: plotX, y: boxHeight };
            }
        },
        navigator: {
            enabled: false
        },
        xAxis: {
            ordinal: true,
            lineColor: '#eeeeee',
            gridLineColor: '#eeeeee',
            gridLineDashStyle: 'Solid',
            gridLineWidth: 1,
            minorGridLineWidth: 0,
            showFirstLabel: true,
            showLastLabel: false,
            type: 'datetime',
            endOnTick: false,
            tickPixelInterval: 100,
            tickLength: 0,
            labels: {
                staggerLines: 1,
                step: 2
            },
            dateTimeLabelFormats: getChartDateTimeLabelFormatsLookupCalc()
        },
        yAxis: [{
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
                formatter: function ()
                {
                    return formatDecimal(this.value) + '';
                }
            },
            title: {
                text: ''
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
        }
    });
    globalChartDom = getChartDOM();
}
function drawIRChartHTMLMiniquote()
{
    //debugStep("drawIRChartHTMLMiniquote");

    //$(globalChartContainer).highcharts('StockChart', {
    //    colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
    //    chart: {
    //        alignTicks: true,
    //        panning: false,
    //        backgroundColor: 'white',
    //        borderWidth: 0,
    //        plotBorderWidth: 1,
    //        plotBorderColor: '#eeeeee',
    //        marginRight: 5,
    //        marginLeft: 5,
    //        spacingTop: 5,
    //        spacingBottom: 0
    //    },

    //    colors: ['#54ADC6'],

    //    rangeSelector: {
    //        selected: 1
    //    },

    //    tooltip: {
    //        enabled: false
    //    },

    //    credits: {
    //        enabled: false
    //    },

    //    exporting: {
    //        enabled: false
    //    },

    //    navigator: {
    //        enabled: false
    //    },

    //    scrollbar: {
    //        enabled: false
    //    },

    //    rangeSelector: {
    //        enabled: false
    //    },

    //    xAxis: {
    //        ordinal: false,
    //        lineColor: '#eeeeee',
    //        gridLineColor: '#eeeeee',
    //        gridLineDashStyle: 'Solid',
    //        gridLineWidth: 1,
    //        minorGridLineWidth: 0,
    //        showFirstLabel: false,
    //        showLastLabel: false,
    //        endOnTick: false,
    //        tickPixelInterval: 100,
    //        tickLength: 0,
    //        labels: {
    //            staggerLines: 1,
    //            step: 2
    //        },
    //        dateTimeLabelFormats: getChartDateTimeLabelFormats()
    //    },

    //    yAxis: {
    //        lineColor: '#eeeeee',
    //        gridLineColor: '#eeeeee',
    //        gridLineDashStyle: 'Solid',
    //        gridLineWidth: 1,
    //        //tickPixelInterval: 40,
    //        labels: {
    //            align: 'right',
    //            x: 0,
    //            y: 0,
    //            formatter: function ()
    //            {
    //                return formatDecimal(this.value);
    //            }
    //        }
    //    },

    //    plotOptions: {
    //        series: {
    //            animation: {
    //                duration: globalChartAnimationMS
    //            }
    //        },
    //        line: {
    //            animation: false
    //        }
    //    }

    //    //title: {
    //    //    text: 'HSBC',
    //    //    floating: true,
    //    //    align: 'left',
    //    //    x: 10,
    //    //    y: 20,
    //    //    style: {
    //    //        color: '#aaaaaa'
    //    //    }
    //    //}
    //});
    //globalChartDom = getChartDOM();
}
function drawIRMiniquote()
{
    debugStep("drawIRMiniquote");
    var data = {
        headers: translations,
        stocks: globalRawStockData[globalActiveListingIndex]
    }
    if (typeof ($('.IRMiniquoteModule').html()) != "undefined" && typeof ($('#IRMiniquoteModuleTemplate').html()) != "undefined") {
        $(".IRMiniquoteModule").html(menuTemplate_Miniquote(data));
    }
}
function drawIRMiniquoteChart()
{
    debugStep("drawIRMiniquoteChart");
    var data = {
        headers: translations,
        stocks: globalRawStockData[globalActiveListingIndex]
    }
    if (typeof ($('.IRMiniquoteChartModule').html()) != "undefined" && typeof ($('#IRMiniquoteChartModuleTemplate').html()) != "undefined") {
        $(".IRMiniquoteChartModule").html(menuTemplate_MiniquoteChart(data));
    }
}
function redrawIRChartHTMLIntraday()
{
    debugStep("redrawIRChartHTMLIntraday");

    globalChartDom = getChartDOM();
    globalChartDom.destroy();

    globalChartMinRange = 1 * 24 * 3600 * 1000;

    drawIRChartHTML();
    drawActiveListingToChartIntraday();
}
function redrawIRChartHTMLHistorical()
{
    debugStep("redrawIRChartHTMLHistorical");
    globalChartDom.destroy();
    drawIRChartHTML();
    drawActiveListingToChartHistorical();
}
function drawActiveListingToChartHistorical()
{
    globalChartDom.addSeries({
        index: 1,
        data: globalChartListingStockData[globalActiveListingIndex],
        color: clientStyle.chart_ColourMain,
        yAxis: 0,
        visible: true,
        linkedTo: 0,
        type: 'area'
    }, false, 0);

    globalChartDom.addSeries({
        index: 3,
        data: globalChartListingStockDataVolume[globalActiveListingIndex],
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
function drawIRNewsToChartHistorical(globalChartNewsHeadlines)
{
    //globalChartDom = getChartDOM();

    globalChartDom.addSeries({
        allowPointSelect: true,
        type: 'flags',
        data: globalChartNewsHeadlines
    });

    globalChartDom.redraw();

    //data: [{
    //    x: 1427241600000,
    //    title: 'Nice 1'
    //}, {
    //    x: 1429488000000,
    //    title: 'Nice 2'
    //}]
}
function drawActiveListingToChartIntraday()
{
    globalChartDom.addSeries({
        index: 1,
        data: globalChartListingIntradayData[globalActiveListingIndex],
        color: clientStyle.chart_ColourMain,
        yAxis: 0,
        visible: true,
        linkedTo: 0,
        type: 'area'
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
function drawPlotLineToChart()
{
    debugStep("drawPlotLineToChart");

    var offsetX = 70;
    var lastPrice = globalRawStockData[globalActiveListingIndex].last;
    var yValue;
    var lastPriceDate = new moment.tz(globalRawStockData[globalActiveListingIndex].timestamp, globalActiveExchangeTimeZone).format(clientStyle.formatDate);
    var lastPriceTime = new moment.tz(globalRawStockData[globalActiveListingIndex].timestamp, globalActiveExchangeTimeZone).format(clientStyle.formatTime);

    var text = "";
    text += '<div class="chartCurrentPriceBoxOuter"><div class="chartCurrentPriceBox" style="border: 1px solid ' + clientStyle.chart_ColourMain + ';background-color: ' + clientStyle.chart_ColourMain + ';"><div class="chartCurrentPriceBoxArrow"><div class="irCPB1" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div><div class="irCPB2" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div><div class="irCPB3" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div></div>';
    text += '<div class="chartLastPrice">' + formatDecimal(lastPrice) + '</div><br />';
    text += '<div class="chartLastPriceTime">' + lastPriceTime + '</div>';
    text += '</div></div>';

    if (globalChartActiveDisplayMode == 'historical') {
        //
        //  Properly position last price indicator in Historical mode.
        //
        var lastClosePriceIndex = globalChartListingStockDataDates[globalActiveListingIndex].length - 1;
        yValue = globalChartListingStockData[globalActiveListingIndex][lastClosePriceIndex][1];
    }

    if (globalChartActiveDisplayMode == 'intraday') {
        //
        //  Properly position last price indicator in Intraday mode.
        //
        var lastIntradayIndex = globalChartListingIntradayData[globalActiveListingIndex].length - 1;
        yValue = globalChartListingIntradayData[globalActiveListingIndex][lastIntradayIndex][4];
    }

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
function drawChartHeadlineClientName()
{
    debugStep("drawChartHeadlineClientName");
    $('.IRChartClientName').html(globalRawStockData[globalActiveListingIndex].name);
}
function drawChartCurrency()
{
    debugStep("drawChartCurrency");
    $('div.IRChartCurrency').html(globalRawStockData[globalActiveListingIndex].currency);
}
function drawActiveListingToChartMiniHistorical()
{
    debugStep("drawActiveListingToChartMiniHistorical");
    globalChartDom.addSeries({
        index: 1,
        data: globalChartListingStockData[globalActiveListingIndex],
        color: clientStyle.chart_ColourMain,
        yAxis: 0,
        visible: true,
        linkedTo: 0,
        type: clientStyle.chart_DrawModeMiniquote
    }, false, 0);

    //globalChartDom.addSeries({
    //    index: 3,
    //    data: globalChartListingStockDataVolume[globalActiveListingIndex],
    //    yAxis: 1,
    //    visible: true,
    //    linkedTo: 0,
    //    type: 'column'
    //}, false, 0);

    globalChartDom.redraw();
    drawPlotLineToChart();
    drawChartHeadlineClientName();
    drawChartCurrency();
}

function drawActiveListingToChartMiniquoteHistorical()
{
    //debugStep("drawActiveListingToChartMiniquoteHistorical");
    //globalChartDom.addSeries({
    //    index: 1,
    //    data: globalChartListingStockData[globalActiveListingIndex],
    //    color: clientStyle.chart_ColourMain,
    //    name: globalRawStockData[globalActiveListingIndex].symbol,
    //    yAxis: 0,
    //    visible: true,
    //    linkedTo: 0,
    //    type: 'line'
    //}, false, 0);

    //globalChartDom.redraw();
    ////drawPlotLineToChart();
    ////drawChartHeadlineClientName();
    ////drawChartCurrency();
}
function drawActiveListingToIRMiniquoteChartHistorical()
{
    debugStep("drawActiveListingToIRMiniquoteChartHistorical");
    globalChartDom.addSeries({
        index: 1,
        data: globalChartListingStockData[globalActiveListingIndex],
        color: clientStyle.chart_ColourMain,
        name: globalRawStockData[globalActiveListingIndex].symbol,
        yAxis: 0,
        visible: true,
        linkedTo: 0,
        type: 'line'
    }, false, 0);

    globalChartDom.redraw();
}

function redrawIRChartMiniOnResize()
{
    /*
        On window resize
        setTimeout()
        globalChartDom.addSeries (IRChartMini)
        globalChartDom.redraw
    */
}
function drawNewsArticle(newsArticleData)
{
    debugStep("drawNewsArticle");
    if (typeof (newsArticleData) != 'undefined') {
        if (typeof ($('.IRArticleModule').html()) != "undefined" && typeof ($('#IRArticleTemplate').html()) != "undefined") {
            $(".IRToolArticleLogo").html('<img src="' + getLogoPath() + '" />');

            var isHTML = true;
            if (newsArticleData.data[0].content.indexOf("<html") == -1)
            {
                isHTML = false;
            }

            if (isHTML) {
                $(".IRArticleModule").html(newsArticleData.data[0].content);
            } else {
                $(".IRArticleModule").html("<pre style=\"width: 100%;font-family: Courier New;font-size: 14px;\">" + newsArticleData.data[0].content + "</pre>");
            }            
        }
    } else {
        $(".IRToolArticleLogo").html('');
        $(".IRArticleModule").html('Please provide a valid storyID');
    }
}
function drawActiveListingToChartLookupHistorical()
{
    debugStep("drawActiveListingToChartLookupHistorical");
    globalChartDom.addSeries({
        index: 1,
        data: globalChartListingStockData[globalActiveListingIndex],
        color: clientStyle.chart_ColourMain,
        name: globalRawStockData[globalActiveListingIndex].symbol,
        yAxis: 0,
        visible: true,
        linkedTo: 0,
        type: 'line'
    }, false, 0);

    globalChartDom.redraw();
}