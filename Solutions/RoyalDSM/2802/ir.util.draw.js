// 
//  DOM Operations
//  
function buildOrdersTable(data, template) {
    debugStep("buildOrdersTable");
    $(".IROrdersModule").html(template(data));
}
function buildTradesTable(data, template) {
    debugStep("buildTradesTable");
    $(".IRTradesModule").html(template(data));
}
function buildBenchmark() {
    debugStep("buildBenchmark");
}
function buildNewsTool(newsRawData) {
    debugStep("buildNewsTool");
    $(".IRNewsModule").html(menuTemplate_News(newsRawData));
    if (typeof ($('.IRNewsModule').html()) != "undefined" && typeof ($('#IRNewsEntriesTemplate').html()) != "undefined") {
        $(".IRNewsEntries").html(menuTemplate_NewsEntries(newsRawData));
    }
    setIRNewsDivRowWidth();
    newsFilter();
}
function buildNewsHeadlineTool(newsRawData) {
    debugStep("buildNewsHeadlineTool");
    $(".IRNewsHeadlineModule").html(menuTemplate_NewsHeadline(newsRawData));
    //if (typeof ($('.IRNewsModule').html()) != "undefined" && typeof ($('#IRNewsEntriesTemplate').html()) != "undefined") {
    //    $(".IRNewsEntries").html(menuTemplate_NewsEntries(globalNewsRawData));
    //}

}
function buildEmailAlertTool() {
    debugStep("buildEmailAlertTool");
    if (typeof ($('.IREmailAlertModule').html()) != "undefined" && typeof ($('#IREmailAlertTemplate').html()) != "undefined") {
        $(".IREmailAlertModule").html(menuTemplate_EmailAlert());
    }
}
function buildNewsEntries(data) {
    newsFilterReset();
    debugStep("buildNewsEntries");
    if (typeof ($('table.IRNewsTool tr th.Header').html()) != "undefined") {
        $('tr.Data').addClass('hide');
        for (var i = 0; i < data.storyIds.length; i++) {
            $('#' + data.storyIds[i]).removeClass('hide');
        }
    }
    if (typeof ($('div.IRNewsTool .IRHeaderGroup .IRHeader').html()) != "undefined") {
        $('div.IRDataGroup').addClass('hide');
        for (var i = 0; i < data.storyIds.length; i++) {
            $('#' + data.storyIds[i]).removeClass('hide');
        }
    }
    newsFilter();
}
function setNewsPagination() {
    debugStep("setNewsPagination");

    if (typeof ($('table.IRNewsTool tr th.Header').html()) != "undefined") {
        //
        //  News in a Table structure
        //
        for (var page = 1; page <= globalNewsPagesInTotal; page++) {
            $('tr.Data').removeClass('page' + page);
        }

        var count = 0;
        var page = 1;
        $('tr.Data').each(function () {
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

        setNewsActivePage(1);

        // Set Click Handler
        $('.IRNewsPageNumber').click(function () {
            var page = $(this).html();
            setNewsActivePage(page);
        });
    }

    if (typeof ($('div.IRNewsTool .IRHeaderGroup .IRHeader').html()) != "undefined") {
        //
        //  News in a Div structure
        //
        for (var page = 1; page <= globalNewsPagesInTotal; page++) {
            $('div.IRDataGroup').removeClass('page' + page);
        }

        var count = 0;
        var page = 1;
        $('div.IRDataGroup').each(function () {
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

        setNewsActivePage(1);

        // Set Click Handler
        $('.IRNewsPageNumber').click(function () {
            var page = $(this).html();
            setNewsActivePage(page);
        });
    }

}
function setNewsActivePage(activePage) {
    debugStep("setNewsActivePage");
    if (typeof ($('table.IRNewsTool tr th.Header').html()) != "undefined") {
        //
        //  News in a Table structure
        //
        for (var page = 1; page <= globalNewsPagesInTotal; page++) {
            $('tr.Data.page' + page).addClass('hide');
        }
        $('tr.Data.page' + activePage).removeClass('hide');

        $('.IRNewsPageNumber').removeClass('active');
        $('.IRNewsPageNumber' + activePage).addClass('active');
    }
    if (typeof ($('div.IRNewsTool .IRHeaderGroup .IRHeader').html()) != "undefined") {
        //
        //  News in a Div structure
        //
        for (var page = 1; page <= globalNewsPagesInTotal; page++) {
            $('div.IRDataGroup.page' + page).addClass('hide');
        }
        $('div.IRDataGroup.page' + activePage).removeClass('hide');

        $('.IRNewsPageNumber').removeClass('active');
        $('.IRNewsPageNumber' + activePage).addClass('active');
    }
}
function buildLookupTool(data, template) {
    debugStep("buildLookupTool");
    $(".IRLookupModule").html(template(data));
    initializeLookup(data);
}
function buildCalcTool(data, template) {
    debugStep("buildCalcTool");
    //$(".IRCalcModule").html(template(data));
    initializeCalc(data);
}
function buildCalcSimpleTool(data, template) {
    debugStep("buildCalcSimpleTool");
    $(".IRCalcModule").html(template(data));
    initializeCalc();
}
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
function buildIRProfile(data) {
    debugStep("buildIRProfile");
    if (typeof ($('.IRProfileModule').html()) != "undefined" && typeof ($('#IRProfileTemplate').html()) != "undefined") {
        $(".IRProfileModule").html(menuTemplate_IRProfile(data));
    }

}
function applyCssClassesForResponsive() {
    var amountOfElements = -1;
    for (var i = 0; i < 2; i++) {
        var tableElementTarget = "th";
        if (i == 1) {
            tableElementTarget = "td";
        }
        if (amountOfElements == -1) {
            $('.IRQuoteModule ' + tableElementTarget).each(function () {
                amountOfElements++;
            });
        }
        var counter = 0;
        $('.IRQuoteModule ' + tableElementTarget).each(function () {
            $(this).addClass("IRElement" + counter);
            if (counter == amountOfElements) {
                $(this).addClass("IRElementLast"); // Last element
            }
            counter++;
        });
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
function buildIRChartHTMLTool() {
    debugStep("buildIRChartHTMLTool");
    var data = {
        headers: translations,
        stocks: globalRawStockData[globalActiveListingIndex]
    }
    if (typeof ($('.IRChartModule').html()) != "undefined" && typeof ($('#IRChartModuleTemplate').html()) != "undefined") {
        $(".IRChartModule").html(menuTemplate_IRChartHTML(data));
    }
}
function drawIRChartCompareListNavigation(listingStockData, comparisonList) {
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

        IRChartComparisonBodyList += "<div title=\"" + type + "\" class=\"basicButtonLook color" + globalChartColours[uniqueColorID].replace('#', '') + "\" id=\"" + type + "_" + id + "_" + uniqueColorID + "\">" + comparisonList[i][2] + "</div><br />";
        //comparisonPlaceholder += "<div id=\"comparisonList_" + uniqueColorID + "\" class=\"color" + globalChartColours[uniqueColorID].replace('#', '') + " active\"><span>" + name + "</span><div class=\"ComparisonOff active\" id=\"" + type + "_" + id + "_" + uniqueColorID + "\"></div></div>";
        comparisonPlaceholder += "<div id=\"comparisonList_" + uniqueColorID + "\" class=\"color" + globalChartColours[uniqueColorID].replace('#', '') + " active\"><span>" + name + "</span></div>";
        uniqueColorID += 1;
        previousType = type;
    }

    if (useIRChartCurrencyConversion) {

        //
        //  Currency adjusted share price
        //
        //IRChartComparisonBodyList += '<div class="IRChartComparisonBodyListHeader">' + translations.t_currency + '</div>';
        //IRChartComparisonBodyList += "<div class=\"basicButtonLook IRChartNavigationCurrencyConversion\" id=\"IRChartCurrencyConversionAdjustedPrice\">" + translations.t_currency_adjusted_share_price + "</div>";

        //comparisonPlaceholder += "<div id=\"comparisonList_IRChartCurrencyConversionAdjustedPrice\" class=\"color" + globalChartColours[uniqueColorID].replace('#', '') + " active\"><span class=\"settingsCurrencyConversionAdjustedPrice\">";
        //comparisonPlaceholder += "To: <select class=\"currencyConversionTo\" style=\"height: 30px;\"><option value=\"USD\">USD</option><option value=\"GBX\">GBX</option></select>";
        //comparisonPlaceholder += "</span><span class=\"updateCurrencyConversionAdjustedPrice\">[update]</span></div>";
    }

    IRChartComparisonBodyList += "<div class=\"basicButtonLook\" id=\"IRChartNavigationClearComparison\">" + translations.t_clear_all + "</div>";

    IRChartComparisonBodyList += "</div>";
    $('.IRChartComparisonBody').html(IRChartComparisonBodyList);
    $('.IRChartComparisonPlaceholder').html(comparisonPlaceholder);
}
function drawIRChartHTMLLookup() {
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
// KM updated to show tooltips in TA mode
function drawIRChartHTML() {
    debugStep("drawIRChartHTML");
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

                        IRChartTSRfeature.selectedMin = this.xAxis[0].min;
                        IRChartTSRfeature.selectedMax = this.xAxis[0].max;
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

                return {x: plotX, y: plotY};
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
                },
                turboThreshold: 10000
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

}
function drawIRChartMiniHTML() {
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
            formatter: function () {
                //var date = Highcharts.dateFormat('%Y-%m-%d', this.x);

                //var time = Highcharts.dateFormat('%H:%M:%S', this.x);
                var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                //var unixDate = new moment(date + 'T00:00:00.0000000Z').valueOf();
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
function drawMiniquoteChart() {
    debugStep("drawMiniquoteChart");

    $(globalChartContainer).highcharts('StockChart', {
        colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
        chart: applyMiniquoteChartChart(),
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
        },
        yAxis: applyMiniquoteChartYAxis(),
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
function drawIRChartHTMLMiniquote() {
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
function drawIRMiniquote() {
    debugStep("drawIRMiniquote");
    var data = {
        headers: translations,
        stocks: globalRawStockData[globalActiveListingIndex]
    }
    if (typeof ($('.IRMiniquoteModule').html()) != "undefined" && typeof ($('#IRMiniquoteModuleTemplate').html()) != "undefined") {
        $(".IRMiniquoteModule").html(menuTemplate_Miniquote(data));
    }
}
function drawIRMiniquoteChart() {
    debugStep("drawIRMiniquoteChart");
    var data = {
        headers: translations,
        stocks: globalRawStockData[globalActiveListingIndex]
    }
    if (typeof ($('.IRMiniquoteChartModule').html()) != "undefined" && typeof ($('#IRMiniquoteChartModuleTemplate').html()) != "undefined") {
        $(".IRMiniquoteChartModule").html(menuTemplate_MiniquoteChart(data));
    }
}
function redrawIRChartHTMLIntraday() {
    debugStep("redrawIRChartHTMLIntraday");

    debugStep("globalChartContainer: " + globalChartContainer);
    globalChartMinRange = 24 * 3600 * 1000;

    drawIRChartHTML();
    drawActiveListingToChartIntraday();
}
function redrawIRChartHTMLHistorical() {
    debugStep("redrawIRChartHTMLHistorical");
    globalChartDom.destroy();
    drawIRChartHTML();
    drawActiveListingToChartHistorical();
    if (useIRChartNews) {
        drawIRNewsToChartHistorical();
    }
    if (useIRChartPressReleaseIRChartHeadline) {
        if (useIRChartCustomPreventDefault) {

        } else {
            drawIRChartPressReleaseIRChartHeadlineToChartHistorical();
        }
    }
    // JRJR
    globalChartActiveDisplayMode = chartDisplayModes.historical;
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

}
function drawActiveListingToIRChartHTMLHistorical() {
    debugStep("drawActiveListingToIRChartHTMLHistorical");
}
function drawIRNewsToChartHistorical() {
    debugStep("drawIRNewsToChartHistorical");
    //globalChartDom = getChartDOM();

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
    //globalChartDom = getChartDOM();

    globalChartDom.addSeries({
        allowPointSelect: true,
        type: 'flags',
        data: globalChartPressReleaseIRChartHeadlineFlags
    });

    globalChartDom.redraw();
}
function drawActiveListingToChartIntraday() {
    debugStep("drawActiveListingToChartIntraday");

    if (typeof (globalChartDom) != 'undefined') {
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
    } else {
        debugError("globalChartDom is undefined in drawActiveListingToChartIntraday()");
    }


}
function drawPlotLineToChart() {
    debugStep("drawPlotLineToChart");

    var offsetX = 70;
    var lastPrice = globalRawStockData[globalActiveListingIndex].last;
    var yValue = null;

    // Hotfix JSE Mediclinic (MEI)
    if (globalRawStockData[globalActiveListingIndex].instrumentID == 1000534) {
        globalRawStockData[globalActiveListingIndex].timestamp = globalRawStockData[globalActiveListingIndex].tradeTimestamp;
    }

    var lastPriceDate = new moment.tz(globalRawStockData[globalActiveListingIndex].timestamp, globalActiveExchangeTimeZone).add(clientStyle.manualTimeOffset, 'hours').format(clientStyle.formatDate);
    var lastPriceTime = new moment.tz(globalRawStockData[globalActiveListingIndex].timestamp, globalActiveExchangeTimeZone).add(clientStyle.manualTimeOffset, 'hours').format(clientStyle.formatTime);

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
        //var lastIntradayIndex = globalChartListingIntradayDataDates.length - 1;
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


    //debugTimestamp("rawTimestamp: " + globalRawStockData[globalActiveListingIndex].timestamp);
    //debugTimestamp("lastPriceDate: " + lastPriceDate);
    //debugTimestamp("lastPriceTime: " + lastPriceTime);

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
    //globalChartDom = getChartDOM();

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

function drawActiveListingToChartMiniquoteHistorical() {
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

function redrawIRChartMiniOnResize() {
    /*
     On window resize
     setTimeout()
     globalChartDom.addSeries (IRChartMini)
     globalChartDom.redraw
     */
}
function drawNewsArticle(newsArticleData) {
    debugStep("drawNewsArticle");


    if (typeof (newsArticleData) != 'undefined') {
        if (typeof ($('.IRArticleModule').html()) != "undefined" && typeof ($('#IRArticleTemplate').html()) != "undefined") {

            var timestamp = '';

            if (newsArticleData.instrumentID == 1000820) {
                timestamp += '<div style="position: absolute; top: 10px; right: 10px; font-family: sans-serif; font-size: 12px;">Released: ' + moment(newsArticleData.data[0].timestamp).add('hours', -1).format("YYYY-MM-DD HH:mm") + '</div>';
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

                    if (newsArticleData.data[0].categories[0].categoryType == 'GlobeNewswire') {
                        var cssStyle = '<style>/* @group init */ html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,hr,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td { margin: 0; padding: 0; border:none; outline:none; font-size:100.1%; font-weight:normal; } body { background: #fff !important; color: #000 !important; font:normal 75%/1.5 Arial,Verdana, sans-serif !important; /*base font 12px*/ } input, textarea { font-family: Arial, Sans-Serif; } fieldset { border: solid 0 transparent; } img {border: 0;} span {font-weight: inherit;} a { text-decoration:none; color:#999; } a:hover { color:#FFA244; } ul {list-style: none;} ul.hugin {/*for release content*/ list-style-type: disc; padding-left: 3em; } ol.hugin {/*for release content*/ padding-left: 3em; } div.clear { clear: both; overflow: hidden; height: 0; font-size: 0; line-height: 0; } * html div.clear { width: 1px; height: 1px; } .offscreen { z-index: 99; position: absolute; top: -9000px; left: -9000px; } table { width: 100%; } table td, table th { text-align: left; vertical-align: top; font-weight: normal; padding:5px; } address { font-style: normal; } dfn { font-style: normal; } .fclear:after { content:"."; display:block; clear:both; visibility:hidden; height:0; font-size:0; } .fclear {display:inline-block;} * html .fclear {height:1px;} .fclear {display:block;} /* @end */ .release-detail { margin: 15px 10px; } .release-detail-content { margin: 0 0 35px; } .release-detail h1 { font-size: 1em; font-weight: bold; margin: 0 0 25px; text-transform: uppercase; } .release-detail h4 { margin: 0 0 14px; } .release-detail p { margin: 0 0 10px; } .release-detail address { float: left; margin: 0 0 25px; padding: 25px 0 0; border-top: 1px solid #ededed; } .release-detail address dfn { display: block; font-weight: bold; } .release-detail .phones { clear: both; margin: 0 0 30px; } .release-detail .phones li { display: inline; font-weight: bold; } .release-addons { margin:20px 0 0 0; } .release-addons .release-addon { margin: 0 0 20px; border-bottom: 1px solid #ededed; } .release-addons .release-addon-last { border-bottom: 0; } .release-addons .release-addon-description { margin: 0 0 10px; } .release-addons .release-addon-description .icon { float: left; margin: 20px 0 0 10px; width: 16px; height: 16px; background: no-repeat 0 0; } .release-addons .release-addon-description .icon-pdf { background-image: url(../images/icon_pdf.png); } .release-addons .release-addon-description .icon-annual-report { background-image: url(../images/icon_calendar_annual_press.png); } .release-addons .release-addon-description p { margin: 0 0 0 40px; } .release-addons .release-addon-description p dfn { font-weight: bold; }  .IRArticleModule p, .IRArticleModule b { font-size: 12px; line-height: 19px; margin: 0 0 10px;}  .IRArticleModule h1 { font-size: 1em; font-weight: bold; margin: 0 0 25px; text-transform: uppercase; }</style>';
                        var headline = newsArticleData.data[0].headline;
                        $(".IRArticleModule").html(cssStyle + "<h1>" + headline + "</h1>" + newsArticleData.data[0].content + "");
                    } else if (newsArticleData.data[0].categories[0].categoryType == 'NasdaqOMXCategoryName') {
                        var cssStyle = '<style>h3 { font-family: Arial; font-size: 14pt; font-weight: bold; text-align: left; margin-top: 18px; }</style>';
                        var headline = newsArticleData.data[0].headline;
                        $(".IRArticleModule").html(cssStyle + "<h3>" + headline + "</h3>" + newsArticleData.data[0].content + "");


                    } else {
                        $(".IRArticleModule").html("<pre style=\"width: 100%;font-family: Courier New;font-size: 14px;\">" + newsArticleData.data[0].content + "</pre>");
                    }
                } else {
                    $(".IRArticleModule").html("<pre style=\"width: 100%;font-family: Courier New;font-size: 14px;\">" + newsArticleData.data[0].content + "</pre>");
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
            }

            $(".IRArticleModule").html(toolTemplate_IRNewsArticle(data));

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
function updateComparison(type, id, uniqueID, thisPeer) {
    debugStep("updateComparison - type[" + type + "] id[" + id + "]");

    if (globalChartActiveDisplayMode == chartDisplayModes.intraday ||
        globalChartActiveDisplayMode == chartDisplayModes.historical ||
        globalChartActiveDisplayMode == chartDisplayModes.ta ||
        globalChartComparisonsInChart == 0) {

        redrawChartInCompareMode();
        thisPeer.addClass('active');
        addCompareSeriesToChart(id, uniqueID, thisPeer);
        globalChartDom.yAxis[0].setCompare('percent');
        $('.IRChartCurrency').html('%'); // Show Percent
        setChartExtremes(chartDisplayModes.historical, 365);
        drawPlotLineToChart();

        if (useIRChartNews) {
            drawIRNewsToChartHistorical();
        }

        //if (useIRChartPressReleaseIRChartHeadline) {
        drawIRChartPressReleaseIRChartHeadlineToChartHistorical(); // JRJR
        //}
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
    // KM clean array
    globalChartComparisonInChart.forEach(function (val, idx) {
        globalChartComparisonInChart[idx] = 0;
    });
    globalChartDom.destroy();
    drawIRChartHTMLCompare();
    if (IRChartCurrencyConverter.comparisonDataBackup.length == 0){
        IRChartCurrencyConverter.comparisonDataBackup = [];
        for(var i = 0; i < globalChartComparisonData[0].length; i++){
            IRChartCurrencyConverter.comparisonDataBackup.push(globalChartComparisonData[0][i].slice());
        }
    }
    if (IRChartCurrencyConverter.isCurrencyActive()){
        IRChartCurrencyConverter.recalculateComparisonWithCurency();
    }
    drawActiveListingHistoricalToIRChartHTMLCompare();
    globalChartActiveDisplayMode = chartDisplayModes.comparison;
    resetIRChartNavigation();
}
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

                return {x: plotX, y: plotY};
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
                        [0, clientStyle.chart_ColourMain],
                        [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
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
                turboThreshold: 10000,
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
//
//  Technical Analysis
//
function redrawIRChartInModeTA() {
    debugStep("redrawIRChartInModeTA");
    globalChartDom.destroy();
    drawIRChartHtmlTA();
    drawActiveListingToChartHistorical();
    updateChartNavBarRange('IRChart');
    globalChartDom.series[0].update({
        type: 'line'
    }, false, 0);
    setChartExtremes(chartDisplayModes.historical, 360);
    globalChartDom.redraw();
    globalChartActiveDisplayMode = chartDisplayModes.ta;
    activeTA = [];
    resetIRChartNavigation();
    attachClickHandlers('IRChart');
}
function drawIRChartHtmlTA() {
    debugStep("drawIRChartHtmlTA");

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

                    if (useIRChartTA) {

                        IRChartTSRfeature.selectedMin = this.xAxis[0].min;
                        IRChartTSRfeature.selectedMax = this.xAxis[0].max;
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
                        [0, clientStyle.chart_ColourMain],
                        [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
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
                        case chartDisplayModes.ta:

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
                turboThreshold: 10000
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

//
//  TSR 
//
// KM added new functions for TSR to separate them from rest of chart
function redrawIRChartInModeTSR() {
    debugStep("redrawIRChartInModeTSR");
    globalChartDom.destroy();
    drawIRChartHtmlTSR();
    drawActiveListingToChartHistorical();
    updateChartNavBarRange('IRChart');
    setChartExtremes(chartDisplayModes.historical, 360);
    drawIRChartStockTSR();
    globalChartDom.redraw();
    globalChartActiveDisplayMode = chartDisplayModes.tsr;
    IRChartTSRfeature.activeTSR = [];
    resetIRChartNavigation();
    attachClickHandlers('IRChart');
}
function drawIRChartStockTSR(){
    var tsrGroup = [];
    var tempStock = globalChartListingStockData[globalActiveListingIndex];
    for (var i = 0; i < tempStock.length; i++){
        tsrGroup.push([tempStock[i][0], tempStock[i][1]/tempStock[0][1]*100]);
    }
    globalChartDom.series[0].update({
        data: tsrGroup,
        type: 'line'
    }, false, 0);
}
function drawIRChartHtmlTSR() {
    debugStep("drawIRChartHtmlTSR");
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

                    if (useIRChartTA) {

                        IRChartTSRfeature.selectedMin = this.xAxis[0].min;
                        IRChartTSRfeature.selectedMax = this.xAxis[0].max;
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
            useHTML: true,
            shared: true,
            backgroundColor: 'rgba(255,255,255,0)',
            formatter: function () {
                var date = Highcharts.dateFormat('%Y-%m-%d', this.x);
                var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();
                return updateTooltipDOHLCV(unixDateTime);
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
                        [0, clientStyle.chart_ColourMain],
                        [1, Highcharts.Color(clientStyle.chart_ColourMain).setOpacity(0.25).get('rgba')]
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
                        case chartDisplayModes.tsr:

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
            dateTimeLabelFormats: getChartDateTimeLabelFormats(),
            // minRange: globalChartMinRange

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
                turboThreshold: 10000
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