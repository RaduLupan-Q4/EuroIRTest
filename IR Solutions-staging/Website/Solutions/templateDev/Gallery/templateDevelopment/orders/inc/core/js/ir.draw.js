//
//  DOM Operations
//

// Todo reduce this code with 
// function drawHtml (module, data, template){
//     if (typeof ($(module.view).html()) != "undefined" && typeof ($(module.template).html()) != "undefined") {
//         $(module.view).html(template(data));
//     }
// }
// core needs to work before it can be checked

function buildOrdersTable(data, template) {
    debugStep("buildOrdersTable");
    if (typeof template == "function") {
        $(ModulesList.IROrdersModule.view).html(template(data));
        ModulesReady.endModule(ModulesList.IROrdersModule.name);
    } else {
        debugError("Template wasn't compiled")
    }
}

function buildTradesTable(data, template) {
    debugStep("buildTradesTable");
    if (typeof template == "function") {
        $(ModulesList.IRTradesModule.view).html(template(data));
        ModulesReady.endModule(ModulesList.IRTradesModule.name);
    } else {
        debugError("Template wasn't compiled")
    }
}

function buildBenchmark() {
    debugStep("buildBenchmark");
}

function buildNewsTool(newsRawData) {
    debugStep("buildNewsTool");
    if (typeof ($(ModulesList.IRNewsModule.view).html()) != "undefined" && typeof ($(ModulesList.IRNewsEntriesModule.template).html()) != "undefined") {
        $(ModulesList.IRNewsModule.view).html(compiledTemplates.menuTemplate_News(newsRawData));
        ModulesReady.endModule(ModulesList.IRNewsModule.name);

        $(ModulesList.IRNewsEntriesModule.view).html(compiledTemplates.menuTemplate_NewsEntries(newsRawData));
        ModulesReady.endModule(ModulesList.IRNewsEntriesModule.name);

        var newsHeader = 'div.IRNewsTool .HeaderGroup .Header';
        if (typeof ($(newsHeader).html()) != "undefined") {
            var newsRows = 0;
            $(newsHeader).each(function () {
                newsRows = newsRows + 1;
            });
            $(newsHeader).addClass("cols" + newsRows);
            var newsData = 'div.IRNewsTool .DataGroup .Data';
            if (typeof ($(newsData).html()) != "undefined") {
                $(newsData).addClass("cols" + newsRows);
            }
        }
        newsFilter();
    }
}

function buildNewsHeadlineTool(newsRawData) {
    debugStep("buildNewsHeadlineTool");
    $(ModulesList.IRNewsHeadlineModule.view).html(compiledTemplates.menuTemplate_NewsHeadline(newsRawData));
    ModulesReady.endModule(ModulesList.IRNewsHeadlineModule.name);
}
function buildEmailAlertTool(data) {
    debugStep("buildEmailAlertTool");
    if (typeof ($(ModulesList.IREmailAlertModule.view).html()) != "undefined" && typeof ($(ModulesList.IREmailAlertModule.template).html()) != "undefined") {
        $(ModulesList.IREmailAlertModule.view).html(compiledTemplates.menuTemplate_EmailAlert(data));
        ModulesReady.endModule(ModulesList.IREmailAlertModule.name);
    }
}
function buildCalcTool(data, template) {
    debugStep("buildCalcTool");
    $(ModulesList.IRCalcModule.view).html(template(data));
    ModulesReady.endModule(ModulesList.IRCalcModule.name);
    initializeCalc(data);
}

function buildIRChartTool() {
    debugStep("buildIRChartTool");
    var data = {
        headers: translations,
        stocks: globalRawStockData[globalActiveListingIndex]
    };
    if (typeof ($(ModulesList.IRChartModule.view).html()) != "undefined" && typeof ($(ModulesList.IRChartModule.template).html()) != "undefined") {
        $(ModulesList.IRChartModule.view).html(compiledTemplates.menuTemplate_IRChart(data));
        ModulesReady.endModule(ModulesList.IRChartModule.name);
    }
}
function buildIRChartHTMLTool() {
    debugStep("buildIRChartHTMLTool");
    var data = {
        headers: translations,
        stocks: globalRawStockData[globalActiveListingIndex]
    };
    if (typeof ($(ModulesList.IRChartHTMLModule.view).html()) != "undefined" && typeof ($(ModulesList.IRChartHTMLModule.template).html()) != "undefined") {
        $(ModulesList.IRChartHTMLModule.view).html(compiledTemplates.menuTemplate_IRChartHTML(data));
        ModulesReady.endModule(ModulesList.IRChartHTMLModule.name);
    }
}
function buildQuoteTable() {
    debugStep("buildQuoteTable");
    var data = {
        headers: translations,
        stocks: globalRawStockData
    };
    if (typeof ($(ModulesList.IRQuoteModule.view).html()) != "undefined" && typeof ($(ModulesList.IRQuoteModule.template).html()) != "undefined") {
        $(ModulesList.IRQuoteModule.view).html(compiledTemplates.menuTemplate_QuoteTable(data));
        ModulesReady.endModule(ModulesList.IRQuoteModule.name);
        applyCssClassesForResponsive();
    }
    // if (typeof ($(ModulesList.IRQuoteHorizontalModule.view).html()) != "undefined" && typeof ($(ModulesList.IRQuoteHorizontalModule.template).html()) != "undefined") {
    //     $(ModulesList.IRQuoteHorizontalModule.view).html(compiledTemplates.menuTemplate_QuoteTableHorizontal(data));
    // }
    // if (typeof ($(ModulesList.IRQuoteVerticalModule.view).html()) != "undefined" && typeof ($(ModulesList.IRQuoteVerticalModule.template).html()) != "undefined") {
    //     $(ModulesList.IRQuoteVerticalModule.view).html(compiledTemplates.menuTemplate_QuoteTableVertical(data));
    // }
}
function buildIRProfile(data) {
    debugStep("buildIRProfile");
    if (typeof ($(ModulesList.IRProfileModule.view).html()) != "undefined" && typeof ($(ModulesList.IRProfileModule.template).html()) != "undefined") {
        $(ModulesList.IRProfileModule.view).html(compiledTemplates.menuTemplate_IRProfile(data));
        ModulesReady.endModule(ModulesList.IRProfileModule.name);
    }

}
function buildLookupTool(data, template) {
    debugStep("buildLookupTool");
    if (typeof ($(ModulesList.IRLookupModule.view).html()) != "undefined" && typeof ($(ModulesList.IRLookupModule.template).html()) != "undefined") {
        $(ModulesList.IRLookupModule.view).html(template(data));
        initializeLookup(data);
        ModulesReady.endModule(ModulesList.IRLookupModule.name);
    }
}
function buildCustomTool(){
    debugStep("buildIRChartTool");
    var data = {
        headers: translations,
        stocks: globalRawStockData[globalActiveListingIndex]
    };
    if (typeof ($(ModulesList.IRCustomModule.view).html()) != "undefined" && typeof ($(ModulesList.IRCustomModule.template).html()) != "undefined") {
        $(ModulesList.IRCustomModule.view).html(compiledTemplates.menuTemplate_IRCustom(data));
        ModulesReady.endModule(ModulesList.IRCustomModule.name);
    }
}
function drawIRMiniquote() {
    debugStep("drawIRMiniquote");
    var data = {
        headers: translations,
        stocks: globalRawStockData[globalActiveListingIndex]
    };
    if (typeof ($(ModulesList.IRMiniquoteModule.view).html()) != "undefined" && typeof ($(ModulesList.IRMiniquoteModule.template).html()) != "undefined") {
        $(ModulesList.IRMiniquoteModule.view).html(compiledTemplates.menuTemplate_Miniquote(data));
        ModulesReady.endModule(ModulesList.IRMiniquoteModule.name);
    }
}

function drawIRMiniquoteChart() {
    debugStep("drawIRMiniquoteChart");
    var data = {
        headers: translations,
        stocks: globalRawStockData[globalActiveListingIndex]
    };
    if (typeof ($(ModulesList.IRMiniquoteChartModule.view).html()) != "undefined" && typeof ($(ModulesList.IRMiniquoteChartModule.template).html()) != "undefined") {
        $(ModulesList.IRMiniquoteChartModule.view).html(compiledTemplates.menuTemplate_MiniquoteChart(data));
        ModulesReady.endModule(ModulesList.IRMiniquoteChartModule.name);
    }
}


// Todo rebuild news functions to remove all classes and tags.
function buildNewsEntries(data) {
    newsFilterReset();
    debugStep("buildNewsEntries");
    if (typeof ($('table.IRNewsTool tr th.Header').html()) != "undefined") {
        $('tr.Data').addClass('hide');
        for (var i = 0; i < data.storyIds.length; i++) {
            $('.' + data.storyIds[i]).removeClass('hide');
        }
    }
    if (typeof ($('div.IRNewsTool .IRHeaderGroup .IRHeader').html()) != "undefined") {
        $('div.IRDataGroup').addClass('hide');
        for (var j = 0; j < data.storyIds.length; j++) {
            $('.' + data.storyIds[j]).removeClass('hide');
        }
    }
    newsFilter();
}

function setNewsPagination() {
    debugStep("setNewsPagination");

    if (typeof ($('table.IRNewsTool tr th.Header').html()) != "undefined") {
        //  News in a Table structure
        generatePagination('tr.Data');
    }

    if (typeof ($('div.IRNewsTool .IRHeaderGroup .IRHeader').html()) != "undefined") {
        //  News in a Div structure
        generatePagination('div.IRDataGroup');
    }
}
function setNewsActivePage(activePage) {
    debugStep("setNewsActivePage");
    if (typeof ($('table.IRNewsTool tr th.Header').html()) != "undefined") {
        //  News in a Table structure
        activePageSetter('tr.Data.page', activePage);
    }
    if (typeof ($('div.IRNewsTool .IRHeaderGroup .IRHeader').html()) != "undefined") {
        //  News in a Div structure
        activePageSetter('div.IRDataGroup.page', activePage);
    }
}
function generatePagination(place) {
    var count, page, i, j, paginationHTML;
    for (j = 1; j <= globalNewsPagesInTotal; j++) {
        $(place).removeClass('page' + j);
    }
    count = 0;
    page = 1;
    $(place).each(function () {
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

    paginationHTML = "";
    if (clientStyle.paginationShowNumber > 0){
        paginationHTML += '<div class="IRNewsPaginationPageNew IRNewsPaginationPagePrev inactive">Prev</div>';

        for (i = 1; i <= globalNewsPagesInTotal; i++) {
            if (i <= clientStyle.paginationShowNumber)
                paginationHTML += '<div class=\"IRNewsPageNumber IRNewsPageNumber' + i + '" data-page=\"' + i + '\">' + i + '</div>';
            else
                paginationHTML += '<div class=\"IRNewsPageNumber hiddenPage IRNewsPageNumber' + i + '" data-page=\"' + i + '\">' + i + '</div>';
        }

        paginationHTML += '<div class="IRNewsPaginationPageNew IRNewsPaginationPageNext">Next</div>';
    } else {
        for (i = 1; i <= globalNewsPagesInTotal; i++) {
            paginationHTML += '<div class=\"IRNewsPageNumber IRNewsPageNumber' + i + '" data-page=\"' + i + '\">' + i + '</div>';
        }
    }
    

    $('.IRNewsPagination').html(paginationHTML);
    setNewsActivePage(1);

    $(document).on('click', '.IRNewsPageNumber', function () {
        setNewsActivePage($(this).data('page'));
    });
}
function activePageSetter(place, activePage) {
    var pageNumber = '.IRNewsPageNumber';
    for (var page = 1; page <= globalNewsPagesInTotal; page++) {
        $(place + page).addClass('hide');
    }
    $(place + activePage).removeClass('hide');

    $(pageNumber).removeClass('active');
    $(pageNumber + activePage).addClass('active');
}



function applyCssClassesForResponsive() {
    var amountOfElements = -1;
    for (var i = 0; i < 2; i++) {
        var tableElementTarget = "th";
        if (i == 1) {
            tableElementTarget = "td";
        }
        var quoteModuleTarget = $('.IRQuoteModule ' + tableElementTarget);
        if (amountOfElements == -1) {
            quoteModuleTarget.each(function () {
                amountOfElements++;
            });
        }
        var counter = 0;
        quoteModuleTarget.each(function () {
            $(this).addClass("IRElement" + counter);
            if (counter == amountOfElements) {
                $(this).addClass("IRElementLast"); // Last element
            }
            counter++;
        });
    }
}

var mainChart = {
    colors: globalChartColours,
    chart: {
        panning: false,
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
        backgroundColor: 'rgba(255,255,255,0)'
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
                return NumberFormat.decimal(this.value) + '';
            }
        }
    }, {}],
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
            turboThreshold: 1000000,
            animation: {
                duration: globalChartAnimationMS
            },
            states: {
                hover: {
                    enabled: true,
                    lineWidth: 2
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
            },
            color: clientStyle.chart_ColourVolumeBars
        }
    }
};

function drawIRChartHTML() {
    debugStep("drawIRChartHTML");
    var defaultChart = $.extend(true, {}, mainChart);
    var chartParam = {
        events: {
            load: function () {
                IRChartEventSendExtremes(this.xAxis[0].getExtremes());
            },
            redraw: function () {

                if (FeaturesList.IRChartTSR.use) {
                    IRChartTSR.selectedMin = this.xAxis[0].min;
                    IRChartTSR.selectedMax = this.xAxis[0].max;
                }

                IRChartEventSendExtremes(this.xAxis[0].getExtremes());
            }
        },
        volume: {
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
                        [0, clientStyle.chart_ColourMain],
                        [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                    ]
                }
            }
        },
        tooltip: {
            formatter: function () {
                var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();
                if (FeaturesList.IRChartNews.use) {
                    return updateTooltipDOHLCVN(unixDateTime);
                } else if (DataList.PressReleaseIRChartHeadlineData.use) {
                    return updateTooltipDOHLCVNPressRelease(unixDateTime);
                } else if (DataList.PressReleaseData.use) {
                    return updateTooltipDOHLCVNPressRelease(unixDateTime);
                }
                else {
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

                if (plotX > (chartWidth - 70)) {
                    plotX = (chartWidth - 70);
                }
                if (plotX < 0) {
                    plotX = 0;
                }
                if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
                    plotY = plotY + 12;
                }
                return {x: plotX, y: plotY};
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
                            if ($.inArray(globalActivePeriod, ["m1", "m3", "m6", "y1", "y2", "y5", "max", "Max"]) > -1) {
                                if (globalChartListingHistoricalLastKnownMomentDate.format("YYYY") != ts.format("YYYY")) {
                                    formattedXLabel = '<span class="IRChartXAxisHeader">' + ts.format("YYYY") + '</span>';
                                } else if (globalChartListingHistoricalLastKnownMomentDate.format("MM") != ts.format("MM")) {
                                    formattedXLabel = '<span class="">' + translateMonthShort(ts.format("MMM")) + '</span>';
                                } else if (globalChartListingHistoricalLastKnownMomentDate.format("DD") != ts.format("DD")) {
                                    formattedXLabel = '<span class="">' + ts.format("DD") + '</span>';
                                }
                            } else {
                                formattedXLabel = date;
                            }
                            globalChartListingHistoricalLastKnownMomentDate = new moment(this.value);
                            break;
                    }
                    return formattedXLabel;
                }
            },
            dateTimeLabelFormats: getChartDateTimeLabelFormats()
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
            tooltip: {},
            y: -21,
            states: {
                hover: {
                    fillColor: 'rgba(255,255,255,0.5)'
                }
            }

        }
    };
    defaultChart.events = chartParam.events;
    defaultChart.navigator = chartParam.navigator;
    defaultChart.tooltip.formatter = chartParam.tooltip.formatter;
    defaultChart.tooltip.positioner = chartParam.tooltip.positioner;
    defaultChart.xAxis = chartParam.xAxis;
    defaultChart.yAxis[1] = chartParam.volume;
    defaultChart.plotOptions.flags = chartParam.flags;

    $(globalChartContainer).highcharts('StockChart', defaultChart);
    globalChartDom = getChartDOM();
}
function drawIRChartMiniHTML() {
    debugStep("drawIRChartMiniHTML");
    var defaultChart = $.extend(true, {}, mainChart);
    var chartParam = {
        tooltip: {
            formatter: function () {
                var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();
                return updateTooltipDCV(unixDateTime);
            },
            positioner: function (boxWidth, boxHeight, point) {
                var chartWidth = $(globalChartContainer).width();
                var plotX = point.plotX + 30;
                if (plotX > chartWidth - boxWidth - 50) {
                    plotX = plotX - boxWidth - 40;
                }
                return {x: plotX, y: boxHeight};
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
        volume: {
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
        }
    };
    defaultChart.navigator = chartParam.navigator;
    defaultChart.tooltip.formatter = chartParam.tooltip.formatter;
    defaultChart.tooltip.positioner = chartParam.tooltip.positioner;
    defaultChart.xAxis = chartParam.xAxis;
    defaultChart.yAxis[1] = chartParam.volume;
    $(globalChartContainer).highcharts('StockChart', defaultChart);
    globalChartDom = getChartDOM();
}
function applyMiniquoteChartYAxis() {
    var tempYAxis = {
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
                return NumberFormat.decimal(this.value) + '';
            }
        },
        title: {
            text: ''
        }
    };
    switch (clientStyle.miniquote_ChartYAxisInsideOutside) {
        case 'inside':
            return tempYAxis;
        case 'outside':
            tempYAxis.labels.align = 'outside';
            tempYAxis.labels.x = 5
            return tempYAxis;
    }
}
function applyMiniquoteChartChart() {
    var tempChartReturn = {
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
    };
    switch (clientStyle.miniquote_ChartYAxisInsideOutside) {
        case 'inside':
            return tempChartReturn;
        case 'outside':
            tempChartReturn.marginRight = 60;
            return tempChartReturn;
    }
}
function drawMiniquoteChart() {
    debugStep("drawMiniquoteChart");
    var defaultChart = $.extend(true, {}, mainChart);
    defaultChart.chart = applyMiniquoteChartChart();
    defaultChart.tooltip.formatter = function () {
        var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
        var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();
        return updateTooltipDCV(unixDateTime);
    };
    defaultChart.tooltip.positioner = function (boxWidth, boxHeight, point) {
        var chartWidth = $(globalChartContainer).width();
        var plotX = point.plotX + 30;
        if (plotX > chartWidth - boxWidth - 50) {
            plotX = plotX - boxWidth - 40;
        }
        return {x: plotX, y: boxHeight};
    };
    defaultChart.tooltip.navigator = {
        enabled: false
    };
    defaultChart.xAxis = {
        ordinal: true,
        lineColor: '#eeeeee',
        gridLineColor: '#eeeeee',
        gridLineDashStyle: 'Solid',
        gridLineWidth: 1,
        minorGridLineWidth: 0,
        showFirstLabel: true,
        showLastLabel: true,
        type: 'datetime',
        startOnTick: false,
        endOnTick: false,
        tickPixelInterval: 100,
        tickLength: 0,
        labels: {
            staggerLines: 1,
            step: 2
        },
        dateTimeLabelFormats: getChartDateTimeLabelFormatsIRMiniquoteChart()
    };
    defaultChart.yAxis = applyMiniquoteChartYAxis();

    $(globalChartContainer).highcharts('StockChart', defaultChart);
    globalChartDom = getChartDOM();
}

function redrawIRChartHTMLIntraday() {
    debugStep("redrawIRChartHTMLIntraday");
    debugStep("globalChartContainer: " + globalChartContainer);
    globalChartMinRange = 86400000; //24 * 3600 * 1000;
    drawIRChartHTML();
    drawActiveListingToChartIntraday();
}
function redrawIRChartHTMLHistorical() {
    debugStep("redrawIRChartHTMLHistorical");
    globalChartDom.destroy();
    drawIRChartHTML();
    drawActiveListingToChartHistorical();
    if (FeaturesList.IRChartNews.use) {
        drawIRNewsToChartHistorical();
    }
    if (FeaturesList.IRChartPressReleaseIRChartHeadline.use) {
        if (!FeaturesList.IRChartCustomPreventDefault.use) {
            drawIRChartPressReleaseIRChartHeadlineToChartHistorical();
        }
    }
    globalChartActiveDisplayMode = chartDisplayModes.historical;
}
function drawActiveListingToChartHistorical() {
    debugStep("drawActiveListingToChartHistorical");
    if (typeof (globalChartDom) != 'undefined') {
        if (FeaturesList.IRChartSettings.use) {
            if (globalDefaultSettings.activeSetType == 'dot') {
                globalChartDom.addSeries({
                    index: 1,
                    data: globalChartListingStockDataOHLCV[globalActiveListingIndex],
                    color: clientStyle.chart_ColourMain,
                    yAxis: 0,
                    visible: true,
                    linkedTo: 0,
                    type: 'line',
                    zIndex: 2,
                    marker: {
                        enabled: true,
                        radius: 3
                    }
                }, false, 0);
            } else {
                globalChartDom.addSeries({
                    index: 1,
                    data: globalChartListingStockDataOHLCV[globalActiveListingIndex],
                    color: clientStyle.chart_ColourMain,
                    yAxis: 0,
                    visible: true,
                    linkedTo: 0,
                    type: globalDefaultSettings.activeSetType,
                    zIndex: 2
                }, false, 0);
            }
            globalChartDom.yAxis[0].update({
                type: globalDefaultSettings.activeSetAxisType
            });
        } else {
            globalChartDom.addSeries({
                index: 1,
                data: globalChartListingStockData[globalActiveListingIndex],
                color: clientStyle.chart_ColourMain,
                yAxis: 0,
                visible: true,
                linkedTo: 0,
                type: clientStyle.chart_DrawMode,
                zIndex: 0
            }, false, 0);
        }
        globalChartDom.addSeries({
            index: 3,
            data: globalChartListingStockDataVolume[globalActiveListingIndex],
            yAxis: 1,
            color: clientStyle.chart_ColourVolumeBars,
            visible: true,
            linkedTo: 0,
            zIndex: 2,
            type: 'column'
        }, false, 0);

        drawPlotLineToChart();
        drawChartHeadlineClientName();
        drawChartCurrency();
        globalChartDom.redraw();
    } else {
        debugError("globalChartDom is undefined in drawActiveListingToChartHistorical()");
    }
}
function drawIRNewsToChartHistorical() {
    debugStep("drawIRNewsToChartHistorical");
    globalChartDom.addSeries({
        allowPointSelect: true,
        type: 'flags',
        data: globalChartNewsHeadlinesFlags,
        zIndex: 10
    });
    globalChartDom.redraw();
}
function drawIRChartPressReleaseIRChartHeadlineToChartHistorical() {
    debugStep("drawIRChartPressReleaseIRChartHeadlineToChartHistorical");
    globalChartDom.addSeries({
        allowPointSelect: true,
        type: 'flags',
        data: globalChartPressReleaseIRChartHeadlineFlags,
        zIndex: 10
    });
    globalChartDom.redraw();
}
function drawActiveListingToChartIntraday() {
    debugStep("drawActiveListingToChartIntraday");

    if (typeof (globalChartDom) != 'undefined') {
        if (FeaturesList.IRChartSettings.use) {
            if (globalDefaultSettings.activeSetType == 'dot') {
                globalChartDom.addSeries({
                    index: 1,
                    data: globalChartListingIntradayDataOHLCV[globalActiveListingIndex],
                    color: clientStyle.chart_ColourMain,
                    yAxis: 0,
                    visible: true,
                    linkedTo: 0,
                    type: 'line',
                    zIndex: 2,
                    marker: {
                        enabled: true,
                        radius: 3
                    }
                }, false, 0);
            } else {
                globalChartDom.addSeries({
                    index: 1,
                    data: globalChartListingIntradayDataOHLCV[globalActiveListingIndex],
                    color: clientStyle.chart_ColourMain,
                    yAxis: 0,
                    visible: true,
                    linkedTo: 0,
                    type: globalDefaultSettings.activeSetType
                }, false, 0);
            }
            globalChartDom.yAxis[0].update({
                type: globalDefaultSettings.activeSetAxisType
            });
        } else {
            globalChartDom.addSeries({
                index: 1,
                data: globalChartListingIntradayData[globalActiveListingIndex],
                color: clientStyle.chart_ColourMain,
                yAxis: 0,
                visible: true,
                linkedTo: 0,
                type: clientStyle.chart_DrawMode
            }, false, 0);
        }
        globalChartDom.addSeries({
            index: 3,
            data: globalChartListingIntradayDataVolume[globalActiveListingIndex],
            yAxis: 1,
            color: clientStyle.chart_ColourVolumeBars,
            visible: true,
            linkedTo: 0,
            type: 'column'
        }, false, 0);
        globalChartDom.redraw();
        drawPlotLineToChart();
        drawChartHeadlineClientName();
        drawChartCurrency();
    } else {
        debugError("globalChartDom is undefined in drawActiveListingToChartIntraday()");
    }
}
function drawPlotLineToChart() {
    debugStep("drawPlotLineToChart");

    var offsetX = 70;
    var lastPrice = globalRawStockData[globalActiveListingIndex].last;
    var yValue = null;

    var lastPriceTime = new moment.tz(globalRawStockData[globalActiveListingIndex].timestamp, globalActiveExchangeTimeZone).add(clientStyle.manualTimeOffset, 'hours').format(clientStyle.formatTime);

    var text = "";
    text += '<div class="chartCurrentPriceBoxOuter"><div class="chartCurrentPriceBox" style="border: 1px solid ' + clientStyle.chart_ColourMain + ';background-color: ' + clientStyle.chart_ColourMain + ';"><div class="chartCurrentPriceBoxArrow"><div class="irCPB1" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div><div class="irCPB2" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div><div class="irCPB3" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div></div>';
    text += '<div class="chartLastPrice">' + NumberFormat.decimal(lastPrice) + '</div><br />';
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
        var lastIntradayIndex = globalChartListingIntradayData[globalActiveListingIndex].length - 1; // JRJR
        if (lastIntradayIndex > -1) {
            yValue = globalChartListingIntradayData[globalActiveListingIndex][lastIntradayIndex][1];
        } else {
            yValue = 0;
        }
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
function drawActiveListingToChartMiniHistorical() {
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
    globalChartDom.redraw();
    drawPlotLineToChart();
    drawChartHeadlineClientName();
    drawChartCurrency();
}

function drawActiveListingToIRMiniquoteChartHistorical() {
    debugStep("drawActiveListingToIRMiniquoteChartHistorical");
    globalChartDom.addSeries({
        index: 1,
        data: globalChartListingStockData[globalActiveListingIndex],
        color: clientStyle.chart_ColourMain,
        name: globalRawStockData[globalActiveListingIndex].symbol,
        yAxis: 0,
        visible: true,
        linkedTo: 0,
        type: clientStyle.chart_DrawModeMiniquote
    }, false, 0);

    globalChartDom.redraw();
}
function drawActiveListingToIRMiniquoteChartIntraday() {
    debugStep("drawActiveListingToIRMiniquoteChartIntraday");
    globalChartDom.addSeries({
        index: 1,
        data: globalChartListingIntradayData[globalActiveListingIndex],
        color: clientStyle.chart_ColourMain,
        name: globalRawStockData[globalActiveListingIndex].symbol,
        yAxis: 0,
        visible: true,
        linkedTo: 0,
        type: clientStyle.chart_DrawModeMiniquote
    }, false, 0);

    globalChartDom.redraw();
}

function drawNewsArticle(newsArticleData) {
    debugStep("drawNewsArticle");
// Todo css class and id is unknown
    if (typeof (newsArticleData) != 'undefined') {
        if (typeof ($('.IRArticleModule').html()) != "undefined" && typeof ($('#IRArticleTemplate').html()) != "undefined") {
            var timestamp = '';
            if (newsArticleData.instrumentID == 1000820) {
                timestamp += '<div style="position: absolute; top: 10px; right: 10px; font-family: sans-serif; font-size: 12px;">Released: ' + moment(newsArticleData.data[0].timestamp).add(-1, "hours").format("YYYY-MM-DD HH:mm") + '</div>';
                $(".IRToolArticleTimestamp").html(timestamp);
            }
            $(".IRToolArticleLogo").html('<img src="' + getLogoPath() + '" />');
            var isHTML = true;
            if (newsArticleData.data[0].content.indexOf("<html") == -1) {
                isHTML = false;
            }
            if (isHTML) {
                $(".IRArticleModule").html(newsArticleData.data[0].content);
            } else {
                if (typeof (newsArticleData.data[0].categories[0]) != 'undefined') {
                    var cssStyle, headline; // Todo remove below inline css
                    if (newsArticleData.data[0].categories[0].categoryType == 'GlobeNewswire') {
                        cssStyle = '<style> html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,hr,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td { margin: 0; padding: 0; border:none; outline:none; font-size:100.1%; font-weight:normal; } body { background: #fff !important; color: #000 !important; font:normal 75%/1.5 Arial,Verdana, sans-serif !important;} input, textarea { font-family: Arial, sans-serif; } fieldset { border: solid 0 transparent; } img {border: 0;} span {font-weight: inherit;} a { text-decoration:none; color:#999; } a:hover { color:#FFA244; } ul {list-style: none;} ul {list-style-type: disc; padding-left: 3em; } ol {padding-left: 3em; } div.clear { clear: both; overflow: hidden; height: 0; font-size: 0; line-height: 0; } * html div.clear { width: 1px; height: 1px; } .offscreen { z-index: 99; position: absolute; top: -9000px; left: -9000px; } table { width: 100%; } table td, table th { text-align: left; vertical-align: top; font-weight: normal; padding:5px; } address { font-style: normal; } dfn { font-style: normal; } .fclear:after { content:"."; display:block; clear:both; visibility:hidden; height:0; font-size:0; } .fclear {display:inline-block;} * html .fclear {height:1px;} .fclear {display:block;} /* @end */ .release-detail { margin: 15px 10px; } .release-detail-content { margin: 0 0 35px; } .release-detail h1 { font-size: 1em; font-weight: bold; margin: 0 0 25px; text-transform: uppercase; } .release-detail h4 { margin: 0 0 14px; } .release-detail p { margin: 0 0 10px; } .release-detail address { float: left; margin: 0 0 25px; padding: 25px 0 0; border-top: 1px solid #ededed; } .release-detail address dfn { display: block; font-weight: bold; } .release-detail .phones { clear: both; margin: 0 0 30px; } .release-detail .phones li { display: inline; font-weight: bold; } .release-addons { margin:20px 0 0 0; } .release-addons .release-addon { margin: 0 0 20px; border-bottom: 1px solid #ededed; } .release-addons .release-addon-last { border-bottom: 0; } .release-addons .release-addon-description { margin: 0 0 10px; } .release-addons .release-addon-description .icon { float: left; margin: 20px 0 0 10px; width: 16px; height: 16px; background: no-repeat 0 0; } .release-addons .release-addon-description .icon-pdf { background-image: url("../img/icon_pdf.png"); } .release-addons .release-addon-description .icon-annual-report { background-image: url("../img/icon_calendar_annual_press.png"); } .release-addons .release-addon-description p { margin: 0 0 0 40px; } .release-addons .release-addon-description p dfn { font-weight: bold; }  .IRArticleModule p, .IRArticleModule b { font-size: 12px; line-height: 19px; margin: 0 0 10px;}  .IRArticleModule h1 { font-size: 1em; font-weight: bold; margin: 0 0 25px; text-transform: uppercase; }</style>';
                        headline = newsArticleData.data[0].headline;
                        $(".IRArticleModule").html(cssStyle + "<h1>" + headline + "</h1>" + newsArticleData.data[0].content + "");
                    } else if (newsArticleData.data[0].categories[0].categoryType == 'NasdaqOMXCategoryName') {
                        cssStyle = '<style>h3 { font-family: Arial,sans-serif; font-size: 14pt; font-weight: bold; text-align: left; margin-top: 18px; }</style>';
                        headline = newsArticleData.data[0].headline;
                        $(".IRArticleModule").html(cssStyle + "<h3>" + headline + "</h3>" + newsArticleData.data[0].content + "");
                    } else {
                        $(".IRArticleModule").html("<pre style=\"width: 100%;font-family: Courier New, sans-serif;font-size: 14px;\">" + newsArticleData.data[0].content + "</pre>");
                    }
                } else {
                    $(".IRArticleModule").html("<pre style=\"width: 100%;font-family: Courier New, sans-serif;font-size: 14px;\">" + newsArticleData.data[0].content + "</pre>");
                }
            }
        }
        if (typeof ($('.IRArticleModule').html()) != "undefined" && typeof ($('#IRNewsArticleTemplate').html()) != "undefined") {
            var data = {
                headers: translations,
                article: newsArticleData,
                articleData: newsArticleData.data[0],
                attachments: newsArticleData.data[0].attachments,
                categories: newsArticleData.data[0].categories
            };
            $(".IRArticleModule").html(compiledTemplates.toolTemplate_IRNewsArticle(data));
        }
    } else {
        $(".IRToolArticleLogo").html('');
        $(".IRArticleModule").html('Please provide a valid storyID');
    }
}
function drawActiveListingToChartLookupHistorical() {
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

//
//  Comparison
//
function drawIRChartCompareListNavigation(comparisonList) {
    debugStep("drawIRChartCompareListNavigation");
    var uniqueColorID = 1;

    var comparisonPlaceholder = "";
    var IRChartComparisonBodyList = "";
    IRChartComparisonBodyList += "<div class=\"IRChartComparisonBodyList\">";

    for (var i = 0; i < comparisonList.length; i++) {


        if (comparisonList[i][1] != type) {
            var compareHeader = comparisonList[i][1];
            switch (compareHeader.toLowerCase()) {
                case "index":
                    compareHeader = translations.t_indices;
                    break;
                case "peer":
                    compareHeader = translations.t_peers;
                    break;
                default:
                    debugError("drawIRChartCompareListNavigation is missing support for '" + compareHeader + "' in IRChartComparisonBodyListHeader");
                    break;

            }
            IRChartComparisonBodyList += '<div class="IRChartComparisonBodyListHeader">' + compareHeader + '</div>';
        }

        var id = comparisonList[i][0];
        var previousType = "<div class=\"__\"></div>";
        var type = comparisonList[i][1];
        var name = comparisonList[i][2];

        IRChartComparisonBodyList += "<div title=\"" + type + "\" class=\"basicButtonLook color" + globalChartColours[uniqueColorID].replace('#', '') + "\" data-id='" + id + "' data-type='" + type + "' data-unique='" + uniqueColorID + "'>" + comparisonList[i][2] + "</div><br />";
        comparisonPlaceholder += "<div class=\"comparisonList_" + uniqueColorID + " color" + globalChartColours[uniqueColorID].replace('#', '') + " active\"><span>" + name + "</span></div>";
        uniqueColorID += 1;
        previousType = type;
    }
    IRChartComparisonBodyList += "<div class=\"basicButtonLook colorBlack IRChartNavigationClearComparison\">" + translations.t_reset + "</div>";

    IRChartComparisonBodyList += "</div>";
    $('.IRChartComparisonBody').html(IRChartComparisonBodyList);
    $('.IRChartComparisonPlaceholder').html(comparisonPlaceholder);
    var cl = $('.IRChartComparisonBody').clone().css({
        position: "absolute",
        top: "-10000",
        display: "block"
    }).appendTo('.IRChartComparison');
    var heCl = cl[0].clientHeight;
    cl.remove();
    if (heCl > 400) {
        $('.IRChartComparisonBodyList').slimScroll({
            height: '400px',
            railVisible: true
        });
    }
}
function redrawChartInCompareMode() {
    debugStep("redrawChartInCompareMode");
    if(globalChartActiveDisplayMode != chartDisplayModes.comparison && globalChartActiveDisplayMode != chartDisplayModes.comparison_intraday){
        globalActivePeriod = 'y1';
        updateActiveChartNavBarRangePeriod(globalActivePeriod);
        IRChartComparisonFeature.activeCompare = [];
        IRChartComparisonFeature.activeCompareUid = [];
        globalChartComparisonInChart.forEach(function (val, idx) {
            globalChartComparisonInChart[idx] = 0;
        });
    }

    globalChartActiveDisplayMode = chartDisplayModes.comparison;

    globalChartDom.destroy();
    drawIRChartHTMLCompare();
    if (IRChartCurrencyConverter.comparisonDataBackup.length == 0) {
        IRChartCurrencyConverter.comparisonDataBackup = [];
        for (var i = 0; i < globalChartComparisonData[0].length; i++) {
            IRChartCurrencyConverter.comparisonDataBackup.push(globalChartComparisonData[0][i].slice());
        }
    }
    if (IRChartCurrencyConverter.isCurrencyActive()) {
        IRChartCurrencyConverter.recalculateComparisonWithCurency();
    }

    resetIRChartNavigation();

    $('.IRChartCurrency').html('%'); // Show Percent

    setChartExtremes(chartDisplayModes.historical, 365);
    drawPlotLineToChart();

    drawActiveListingHistoricalToIRChartHTMLCompare();

    if (FeaturesList.IRChartNews.use) {
        drawIRNewsToChartHistorical();
    }
}
function drawIRChartHTMLCompare() {
    debugStep("drawIRChartHTMLCompare");
    globalChartWidth = $(globalChartContainer).css('width').replace('px', '');
    var defaultChart = $.extend(true, {}, mainChart);
    defaultChart.events = {
        load: function (e) {
            IRChartEventSendExtremes(this.xAxis[0].getExtremes());
            IRChartComparisonFeature.updateIRChartComparisonPlotLine(this.xAxis[0].getExtremes(), e);
        },
        redraw: function (e) {
            IRChartEventSendExtremes(this.xAxis[0].getExtremes());
            IRChartComparisonFeature.updateIRChartComparisonPlotLine(this.xAxis[0].getExtremes(), e);
        }
    };
    defaultChart.tooltip.formatter = function () {
        var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
        var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();
        return updateTooltipComparisonDC(unixDateTime);
    };
    defaultChart.tooltip.positioner = function (boxWidth, boxHeight, point) {
        var chartWidth = $(globalChartContainer).width();
        var plotX = point.plotX + 30;
        var plotY = (boxHeight - 52);
        if (plotX > chartWidth - boxWidth - 50) {
            plotX = plotX - boxWidth - 40;
        }
        if (plotX > (chartWidth - 180)) {
            plotX = (chartWidth - 180);
        }
        if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
            plotY = plotY + 12;
        }
        return {x: plotX, y: plotY};
    };
    defaultChart.navigator = {
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
                    [0, clientStyle.chart_ColourMain],
                    [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                ]
            }
        }
    };
    defaultChart.xAxis = {
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
                if (globalChartActiveDisplayMode == chartDisplayModes.comparison_intraday) {
                    if (globalChartListingIntradayLastKnownDay != day) {
                        formattedXLabel = '<span class="IRChartXAxisHeader">' + translateWeekdayShort(ts.format("ddd")) + " " + ts.format("DD") + '</span>';
                    } else {
                        formattedXLabel = time;
                    }

                    globalChartListingIntradayLastKnownDay = day;
                } else {
                    if ($.inArray(globalActivePeriod, ["m1", "m3", "m6", "y1", "y2", "y5", "max", "Max"]) > -1) {
                        if (globalChartListingHistoricalLastKnownMomentDate.format("YYYY") != ts.format("YYYY")) {
                            formattedXLabel = '<span class="IRChartXAxisHeader">' + ts.format("YYYY") + '</span>';
                        } else if (globalChartListingHistoricalLastKnownMomentDate.format("MM") != ts.format("MM")) {
                            formattedXLabel = '<span class="">' + translateMonthShort(ts.format("MMM")) + '</span>';
                        } else if (globalChartListingHistoricalLastKnownMomentDate.format("DD") != ts.format("DD")) {
                            formattedXLabel = '<span class="">' + ts.format("DD") + '</span>';
                        }
                    } else {
                        formattedXLabel = date;
                    }
                    globalChartListingHistoricalLastKnownMomentDate = new moment(this.value);

                }
                return formattedXLabel;
            }
        },
        dateTimeLabelFormats: getChartDateTimeLabelFormats()
    };
    defaultChart.yAxis[1] = {
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
    };
    defaultChart.plotOptions.flags = {
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
        tooltip: {},
        y: -21,
        states: {
            hover: {
                fillColor: 'rgba(255,255,255,0.5)'
            }
        }

    };

    $(globalChartContainer).highcharts('StockChart', defaultChart);
    globalChartDom = getChartDOM();
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
    globalChartDom.addSeries({
        index: 3,
        data: globalChartListingStockDataVolume[globalActiveListingIndex],
        color: clientStyle.chart_ColourVolumeBars,
        yAxis: 1,
        visible: true,
        linkedTo: 0,
        type: 'column'
    }, false, 0);
    drawChartHeadlineClientName();
}

//
//  Technical Analysis
//
function redrawIRChartInModeTA() {
    debugStep("redrawIRChartInModeTA");
    globalActivePeriod = 'y1';
    updateActiveChartNavBarRangePeriod(globalActivePeriod);

    globalChartDom.destroy();
    globalChartActiveDisplayMode = chartDisplayModes.ta;
    drawIRChartHtmlTA();
    drawActiveListingToChartHistorical();
    updateChartNavBarRange('IRChart');
    globalChartDom.series[0].update({
        type: 'line'
    }, false, 0);
    globalChartDom.redraw();
    setChartExtremes(chartDisplayModes.historical, 360);
    resetIRChartNavigation();
    attachClickHandlers('IRChart');
}
function drawIRChartHtmlTA() {
    var defaultChart = $.extend(true, {}, mainChart);
    debugStep("drawIRChartHtmlTA");
    globalChartWidth = $(globalChartContainer).css('width').replace('px', '');
    defaultChart.chart.events = {
        load: function () {
            IRChartEventSendExtremes(this.xAxis[0].getExtremes());
        },
        redraw: function () {
            // if (FeaturesList.IRChartTA.use) {
            //     IRChartTSRfeature.selectedMin = this.xAxis[0].min;
            //     IRChartTSRfeature.selectedMax = this.xAxis[0].max;
            // }
            IRChartEventSendExtremes(this.xAxis[0].getExtremes());
        }
    };
    defaultChart.tooltip.formatter = function () {
        var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
        var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();
        return updateTooltipTechnicalAnalysisDP(unixDateTime);
    };
    defaultChart.tooltip.positioner = function (boxWidth, boxHeight, point) {
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
        return {x: plotX, y: plotY};
    };
    defaultChart.navigator = {
        outlineColor: clientStyle.chart_ColourBorder,
        adaptToUpdatedData: true,
        maskInside: false,
        maskFill: 'rgba(255, 255, 255, 0.75)',
        handles: {
            backgroundColor: clientStyle.chart_ColourBackground,
            borderColor: '#aaa'
        }
    };
    defaultChart.xAxis = {
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
                if (globalChartActiveDisplayMode == chartDisplayModes.ta_intraday) {
                    if (globalChartListingIntradayLastKnownDay != day) {
                        formattedXLabel = '<span class="IRChartXAxisHeader">' + translateWeekdayShort(ts.format("ddd")) + " " + ts.format("DD") + '</span>';
                    } else {
                        formattedXLabel = time;
                    }

                    globalChartListingIntradayLastKnownDay = day;
                } else {
                    if ($.inArray(globalActivePeriod, ["m1", "m3", "m6", "y1", "y2", "y5", "max", "Max"]) > -1) {
                        if (globalChartListingHistoricalLastKnownMomentDate.format("YYYY") != ts.format("YYYY")) {
                            formattedXLabel = '<span class="IRChartXAxisHeader">' + ts.format("YYYY") + '</span>';
                        } else if (globalChartListingHistoricalLastKnownMomentDate.format("MM") != ts.format("MM")) {
                            formattedXLabel = '<span class="">' + translateMonthShort(ts.format("MMM")) + '</span>';
                        } else if (globalChartListingHistoricalLastKnownMomentDate.format("DD") != ts.format("DD")) {
                            formattedXLabel = '<span class="">' + ts.format("DD") + '</span>';
                        }
                    } else {
                        formattedXLabel = date;
                    }
                    globalChartListingHistoricalLastKnownMomentDate = new moment(this.value);
                }
                return formattedXLabel;
            }
        },
        dateTimeLabelFormats: getChartDateTimeLabelFormats(),
        minRange: globalChartMinRange
    };
    defaultChart.yAxis[1] = {
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
    };
    defaultChart.plotOptions.flags = {
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
        tooltip: {},
        y: -21,
        states: {
            hover: {
                fillColor: 'rgba(255,255,255,0.5)'
            }
        }

    };
    $(globalChartContainer).highcharts('StockChart', defaultChart);
    globalChartDom = getChartDOM();
}
//
// TSR
//
function redrawIRChartInModeTSR() {
    debugStep("redrawIRChartInModeTSR");
    globalActivePeriod = 'y1';
    updateActiveChartNavBarRangePeriod(globalActivePeriod);

    globalChartDom.destroy();
    globalChartActiveDisplayMode = chartDisplayModes.tsr;
    drawIRChartHtmlTSR();
    drawActiveListingToChartHistorical();
    updateChartNavBarRange('IRChart');
    drawIRChartStockTSR();
    globalChartDom.redraw();
    setChartExtremes(chartDisplayModes.historical, 360);
    IRChartTSRfeature.activeTSR = [];
    IRChartTSRfeature.activeTSRcolor = [];
    resetIRChartNavigation();
    attachClickHandlers('IRChart');
}
function drawIRChartStockTSR() {
    var tsrGroup = [];
    var tempStock = globalChartListingStockData[globalActiveListingIndex];
    for (var i = 0; i < tempStock.length; i++) {
        tsrGroup.push([tempStock[i][0], tempStock[i][1] / tempStock[IRChartTSRfeature.startPoint][1] * 100]);
    }
    globalChartDom.series[0].update({
        data: tsrGroup,
        type: 'line'
    }, false, 0);
}
function drawIRChartHtmlTSR() {
    debugStep("drawIRChartHtmlTSR");
    var defaultChart = $.extend(true, {}, mainChart);
    globalChartWidth = $(globalChartContainer).css('width').replace('px', '');
    defaultChart.chart.events = {
        load: function (e) {
            IRChartEventSendExtremes(this.xAxis[0].getExtremes());
        },
        redraw: function (e) {
            IRChartTSRfeature.selectedMin = this.xAxis[0].min;
            IRChartTSRfeature.selectedMax = this.xAxis[0].max;
            IRChartEventSendExtremes(this.xAxis[0].getExtremes());
        }
    };
    defaultChart.tooltip.formatter = function () {
        var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
        var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();
        return updateTooltipDOHLCV(unixDateTime);
    };
    defaultChart.tooltip.positioner = function (boxWidth, boxHeight, point) {
        var chartWidth = $(globalChartContainer).width();
        var plotX = point.plotX + 30;
        var plotY = (boxHeight - 52);

        if (plotX > chartWidth - boxWidth - 50) {
            plotX = plotX - boxWidth - 40;
        }

        //
        //  When tooltip overlap yAxis, make it static.
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

        return {x: plotX, y: plotY};
    };
    defaultChart.navigator = {
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
                    [0, clientStyle.chart_ColourMain],
                    [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
                ]
            }
        }
    };
    defaultChart.xAxis = {
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
        events: {
            setExtremes: function () {
                IRChartTSRfeature.updateInterval();
            }
        },
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
                if (globalChartActiveDisplayMode == chartDisplayModes.tsr_intraday) {
                    if (globalChartListingIntradayLastKnownDay != day) {
                        formattedXLabel = '<span class="IRChartXAxisHeader">' + translateWeekdayShort(ts.format("ddd")) + " " + ts.format("DD") + '</span>';
                    } else {
                        formattedXLabel = time;
                    }

                    globalChartListingIntradayLastKnownDay = day;
                } else {
                    if ($.inArray(globalActivePeriod, ["m1", "m3", "m6", "y1", "y2", "y5", "max", "Max"]) > -1) {
                        if (globalChartListingHistoricalLastKnownMomentDate.format("YYYY") != ts.format("YYYY")) {
                            formattedXLabel = '<span class="IRChartXAxisHeader">' + ts.format("YYYY") + '</span>';
                        } else if (globalChartListingHistoricalLastKnownMomentDate.format("MM") != ts.format("MM")) {
                            formattedXLabel = '<span class="">' + translateMonthShort(ts.format("MMM")) + '</span>';
                        } else if (globalChartListingHistoricalLastKnownMomentDate.format("DD") != ts.format("DD")) {
                            formattedXLabel = '<span class="">' + ts.format("DD") + '</span>';
                        }
                    } else {
                        formattedXLabel = date;
                    }
                    globalChartListingHistoricalLastKnownMomentDate = new moment(this.value);
                }
                return formattedXLabel;
            }
        },
        dateTimeLabelFormats: getChartDateTimeLabelFormats()
        // minRange: globalChartMinRange
    };
    defaultChart.yAxis[1] = {
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
    };
    defaultChart.plotOptions.flags = {
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
        tooltip: {},
        y: -21,
        states: {
            hover: {
                fillColor: 'rgba(255,255,255,0.5)'
            }
        }

    };
    $(globalChartContainer).highcharts('StockChart', defaultChart);
    globalChartDom = getChartDOM();
}
// Intraday mode in Chart feature mode.
function drawIntradayToIRChartfeatureMode(hours) {
    globalChartDom.addSeries({
        index: 5,
        data: globalChartListingIntradayData[globalActiveListingIndex],
        color: clientStyle.chart_ColourMain,
        yAxis: 0,
        visible: true,
        linkedTo: 0,
        type: 'line'
    });
    globalChartDom.addSeries({
        index: 2,
        data: globalChartListingIntradayDataVolume[globalActiveListingIndex],
        yAxis: 1,
        visible: true,
        linkedTo: 0,
        type: 'column'
    });
    setChartExtremes(chartDisplayModes.intraday, hours);
    drawPlotLineToChart();
    globalChartDom.redraw();
}