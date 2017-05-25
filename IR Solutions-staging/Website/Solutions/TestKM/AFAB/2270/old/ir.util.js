// function isDev() {
//     if (location.href.indexOf('localhost') > -1 || location.href.indexOf('http://devir.euroinvestor.com/') > -1) {
//         if (navigator.userAgent.indexOf("MSIE") > -1) {
//             return false;
//         } else {
//             return true;
//         }
//     } else {
//         return false;
//     }
// }
// //initAppInsights();
// //if (location.href.indexOf('http://devir.euroinvestor.com/') > -1) {
// //    initAppInsights();
// //}
//
// var debug = isDev();
// if (debug) {
//     var t0;
//     var t1;
//     var initTime = Date.now();
//     var initTimeL = Date.now();
// }
//
// function initAppInsights() {
//     debugStep("initAppInsights()");
//     var appInsights = window.appInsights || function (config) {
//         function r(config) { t[config] = function () { var i = arguments; t.queue.push(function () { t[config].apply(t, i) }) } } var t = { config: config }, u = document, e = window, o = "script", s = u.createElement(o), i, f; for (s.src = config.url || "//az416426.vo.msecnd.net/scripts/a/ai.0.js", u.getElementsByTagName(o)[0].parentNode.appendChild(s), t.cookie = u.cookie, t.queue = [], i = ["Event", "Exception", "Metric", "PageView", "Trace"]; i.length;) r("track" + i.pop()); return r("setAuthenticatedUserContext"), r("clearAuthenticatedUserContext"), config.disableExceptionTracking || (i = "onerror", r("_" + i), f = e[i], e[i] = function (config, r, u, e, o) { var s = f && f(config, r, u, e, o); return s !== !0 && t["_" + i](config, r, u, e, o), s }), t
//     }({
//         instrumentationKey: "81488e8d-efb8-47f6-80b7-b4d516e15a23"
//     });
//     window.appInsights = appInsights;
//     appInsights.trackPageView();
// }

// var debugIterations_preloadIRChartDataClosePriceListing = 0;
// var debugIterations_preloadIRChartDataClosePriceOther = 0;

//
//  Modules
//
var IRQuoteModule = false;
var IRChartModule = false;
var IRChartHTMLModule = false;
var IRChartHTMLMiniModule = false;
var IROrdersModule = false;
var IRTradesModule = false;
var IRNewsModule = false;
var IRNewsArticleModule = false;
var IRNewsHeadlineModule = false;
var IRBenchmarkModule = false;
var IRMiniquoteModule = false;
var IRMiniquoteChartModule = false;
var IRLookupModule = false;
var IRCalcModule = false;
var IRCalcSimpleModule = false;
var IREmailAlertModule = false;
var IRToolsNewsArticleHTMLModule = false;
var IRCustomModule = false;
var IRProfileModule = false;

var globalChartPressReleaseIRChartHeadlineDates = [];
var globalChartPressReleaseIRChartHeadlineFlags = [];
var globalChartPressReleaseIRChartHeadlineHeadlines = [];

//
//  Memory
//
var globalHTMLReadingDirection = "LRT";
var clientApiVersion;
var clientLCID;
var clientSolutionID;
var clientCustomerKeyRequired;
var clientAmountOfYears;
var clientAmountOfTrades;
//
var globalActiveLanguage = "en";
var globalActiveExchangeTimeZone = null;
var globalActiveLocalTimeZone = null;
var globalActiveLocalTimeZoneShort = null;
var globalChartListingStockData = [];
var globalChartListingStockDataVolume = [];
var globalChartListingStockDataDates = [];
var globalChartListingStockDataOHLCV = [];
var globalChartListingIntradayDataDates = [];
var globalChartListingIntradayData = [];
var globalChartListingIntradayDataVolume = [];
var globalChartListingIntradayDataOHLCV = [];

var globalChartListingIntradayLastKnownDay = -1;
var globalChartListingIntradayLastKnownMomentDate = null;
var globalChartListingHistoricalLastKnownMomentDate = null;

var globalChartNewsDates = [];
var globalChartNewsHeadlines = [];
var globalChartNewsHeadlinesFlags = [];
var globalChartComparisonData = [];
var globalChartComparisonNames = [];
var globalChartComparisonSymbols = [];
var globalChartComparisonInChart = [];
var globalChartContainer = '.IRChartHTMLPlaceholder';
var globalChartDom = null; // This is where we save and overwrite the DOM of the chart.
var globalChartComparisonsInChart = 0;
var globalChartUseCustomTooltipContent = false;
var globalActiveListingIndex = 0;
var globalActivePeriod = 'y1';
var globalActiveCurrency = 'N/A';
var globalActiveTAShort = null;
var globalAmountOfListings = 0;
var globalAmountOfIndices = 0;
var globalAmountOfPeers = 0;
var globalAmountOfNewsItems = 0;
var globalListingsSymbols = [];
var globalListingsExchangeShort = [];
var globalRawStockData;
var globalRawStockOtherData;
var globalRawCalcData;
var globalRawTSRData;
var globalRawCalcDividendData;
var globalRawClosePriceListing;
//var globalRawStockClosePriceListingData;
var globalNewsAllHeadlines = [];
var globalEarlyDate = null;
var globalChartFromDate = null;
var globalChartToDate = null;
var globalEarlyYear = null;
var globalEarlyMonth = null;
var globalEarlyDay = null;
//
//  IRChartHTML settings
//
var chartDisplayModes = new function () {
    this.historical = 'historical',
    this.intraday = 'intraday',
    this.comparison = 'comparison',
    this.ta = 'ta',
    this.tsr = 'tsr',
    this.technicalAnalysis = 'technicalAnalysis'
};
var chartEnabledClickHandlers = new function () {
    this.chartNavigationComparison = false;
    this.chartNavigationComparisonBodyList = false;
    this.chartNavigationTA = false;
    this.chartNavigationTechnicalAnalysis = false;
    this.chartNavigationTSR = false;
    this.chartNavigationTAPlaceholderSpan = false;
    this.chartNavigationFullscreen = false;
    this.chartNavigationCurrencyConversionAdjustedPrice = false;
}
var chartTechnicalAnalysisModes = new function () {
    this.SMA = 'SMA'
    this.EMA = 'EMA'
};
var chartTechnicalAnalysisNamesCC = new function () {
    this.CommodityChannelIndex = "CommodityChannelIndex";
    this.DirectionalMovementIndex = "DirectionalMovementIndex";
    this.ExponentialMovingAverage = "ExponentialMovingAverage";
    this.Momentum = "Momentum";
    this.MoneyFlowIndex = "MoneyFlowIndex";
    this.RateOfChange = "RateOfChange";
    this.RelativeStrengthIndex = "RelativeStrengthIndex";
    this.SimpleMovingAverage = "SimpleMovingAverage";
    this.WilliamsPercentR = "WilliamsPercentR";
}
var IRChartTechnicalAnalysisNamesCC = new function () {
    this.SimpleMovingAverage = "IRChartTASMA";
}
var chartTechnicalAnalysisNames = new function () {
    this.CommodityChannelIndex = "Commodity Channel Index";
    this.DirectionalMovementIndex = "Directional Movement Index";
    this.ExponentialMovingAverage = "Exponential Moving Average";
    this.Momentum = "Momentum";
    this.MoneyFlowIndex = "Money Flow Index";
    this.RateOfChange = "Rate Of Change";
    this.RelativeStrengthIndex = "Relative Strength Index";
    this.SimpleMovingAverage = "Simple Moving Average";
    this.WilliamsPercentR = "Williams Percent R";
}
var globalChartActiveDisplayMode = chartDisplayModes.historical;
var globalChartAnimationMS = 1;
var globalChartMinRange = 14 * 24 * 3600 * 1000;
var globalChartWidth = 0;
var globalChartColours = null;
var globalChartReduceHeightAtPX = 400;

//
//  IRNews
//
//var globalNewsRawData;
var globalNewsPagesInTotal = -1;
var globalNewsEarlyYear = -1;
//
//  TA
//
var stockDataTA = [];
var stockDataTADates = [];

var stockDataTSRDates = [];

//
//  Objects
//
var clientStyle = new function () {
    this.chart_ColourMain = '#0284AA'; // Deprecated
    this.chart_ColourPlotBackground = '#ffffff';
    this.chart_ColourBackground = '#F9F9F9';
    this.chart_ColourBorder = '#E9E9E9';
    this.chart_ColourVolumeBars = '#aaaaaa';
    this.chart_DrawMode = 'area';
    this.chart_DrawModeMiniquote = 'line';

    this.chart_CustomTooltipUseFullOHLCV = false;

    this.chart_CustomTooltipContent = '';
    this.chart_CustomTooltipTopPX = 0;
    this.chart_TooltipHideDate = true;
    this.chart_TooltipHideOpen = true;
    this.chart_TooltipHideHigh = true;
    this.chart_TooltipHideLow = true;
    this.chart_TooltipHideClose = true;
    this.chart_TooltipHideVolume = true;
    this.chart_TooltipHideNews = true;

    this.lookup_ChartYAxisInsideOutside = 'inside';

    this.calc_ChartYAxisInsideOutside = 'inside';

    this.miniquote_ChartYAxisInsideOutside = 'inside';

    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.amountOfHistoricalYears = 10;
    this.amountOfNewsToLoad = 20000;
    //this.amountOfNewsToShow = 20;
    //this.amountOfNews = 20;

    this.amountOfNewsPerPage = 20;
    this.amountOfNewsHeadlines = 5;

    this.formatDate = 'YYYY-MM-DD';
    this.formatTime = 'HH:mm';
    this.formatDateTime = this.formatDate + ' ' + this.formatTime;
    //this.useCurrencySymbols = true;

    this.news_lockListing = -1;
    this.news_lockLCID = -1;
    this.news_ignoreNewsStoriesWithHeadline = null;
    this.news_limitByFromYear = 0;
    this.selectIRChangeListingFormat = null;

    this.chart_DefaultPeriodSelected = 'y1';
    this.miniquoteChartDefaultPeriode = 'y1';
    this.lookup_excelTableStyle = {};
    this.lookup_excelPreHeader = "";

    this.flipDecimalAndThousandSeparators = false;

    this.manualTimeOffset = null;
    this.useRealtimeData = false;
}
var chartSettings = new function () {
    this.narrowWidth = 400;
    this.activeWidth = -1;
};


initSolutionInfo();
updateLCID();

var IRChartTSR = new function () {
    this.firstDividendDate = null;
    this.lastDividendDate = null;
    this.dividendDatesInChart = [];
    this.dividendDatesAll = [];
    this.dividendValuesAll = [];
    this.stockDataCloneClose = [];
    this.stockDataTSRClone = [];
    this.stockDataTSRCloneDates = [];
    this.rawDividendData = [];
    this.selectedMin = null;
    this.selectedMax = null;
    this.lastSelectedMin = null;
    this.lastSelectedMax = null;
    this.redrawTSR = false;
    this.fetchData = true;
}



//
// Check activeModules array
//
if (typeof (activeModules) != "undefined") {
    checkactiveModules(activeModules);
} else {
    debugError("activeModules is not present in tool header");
}

//
// Check activeFeatures array
//
if (typeof (activeFeatures) != "undefined") {
    checkActiveFeatures(activeFeatures);
}

//
// Check activeDataRequests array
//
if (typeof (activeDataRequests) != "undefined") {
    checkActiveDataRequests(activeDataRequests);
}



//
//  DOM ready
//
$(function () {

    initClientStyle(); // From ir.client.js (if clientStyle is defined).
    setReadingDirection();
    requestListingFromURL();

    requestTranslationsData.done(function (translationsData) {
        debugStep("DOM ready, requestTranslationsData.done");
        mergeLanguage(translationsData.data);
        updateChartHTMLLanguages();

        readyHandlerInit();
        initHandlebars();
    });

    //
    //  Some data requests require a delay.
    //  As an example: requestOrdersData requires the IRInstrumentID from stock data prior to executing the ajax request.
    //
    if (useStockData) {

        $.when(requestStockData)

            .done(function (stockData) {

                if (globalActiveListingIndex > stockData.data.length - 1) {
                    globalActiveListingIndex = 0;
                }

                //if (useFeatureStockOtherData) {
                //    $.when(requestFeatureStockOtherData).done(function (stockOtherData)
                //    {
                //        globalRawStockOtherData = stockOtherData.data;
                //    });
                //}

                globalRawStockData = stockData.data;
                globalAmountOfListings = stockData.data.length;


                for (var i = 0; i < globalAmountOfListings; i++) {
                    globalListingsExchangeShort.push('');
                }

                if (useOrdersData) {
                    loadOrdersData();
                }
                if (useTradeData) {
                    loadTradesData();
                }
                if (useNewsData) {
                    loadNewsDataInitial();
                }
                if (useNewsHeadlineData) {

                    clientStyle.amountOfNewsToLoad = clientStyle.amountOfNewsHeadlines;
                    loadNewsDataInitial();
                }
                if (useNewsArticleData) {

                    if (clientSolutionID == 2072) {
                        loadNewsArticleDataDummy();
                    } else {
                        loadNewsArticleData();
                    }


                }
                //
                //  Features
                //
                if (useIRChartNews) {

                    // Euronext presentation dummy news (hax)
                    if (clientSolutionID == 2072) {
                        loadNewsDataInitialDummy();
                    } else {
                        loadNewsDataInitial();
                    }
                }

                if (usePressReleaseIRChartHeadlineData) {
                    loadPressReleaseIRChartHeadlineData();
                }

                if (usePressReleaseData) {
                    loadPressReleaseData();
                }

                initMomentTimezone();

            })

            .fail(function (data) {
                errorHandling(data);
            });

    }

    if (useClosePriceBundleListingData && useStockData) {
        $.when(requestStockData).done(function (stockData) {
            globalRawStockData = stockData.data;
            globalAmountOfListings = stockData.data.length;
        });
        $.when(requestClosePriceListingData).done(function (closePriceListingData) {
            globalAmountOfListings = closePriceListingData.data.length;
            if (typeof (closePriceListingData.data[0].data[0]) != 'undefined') {
                globalEarlyDate = new moment(closePriceListingData.data[0].data[0].date).format("YYYY");
            } else {
                globalEarlyDate = new moment().format("YYYY");
            }
            if (typeof (closePriceListingData.data[0].data[0]) != 'undefined') {
                globalEarlyYear = new moment(closePriceListingData.data[0].data[0].date).format("YYYY");
            } else {
                globalEarlyYear = new moment().format("YYYY");
            }
            if (typeof (closePriceListingData.data[0].data[0]) != 'undefined') {
                globalEarlyMonth = new moment(closePriceListingData.data[0].data[0].date).format("MM");
            } else {
                globalEarlyMonth = new moment().format("MM");
            }
            if (typeof (closePriceListingData.data[0].data[0]) != 'undefined') {
                globalEarlyDay = new moment(closePriceListingData.data[0].data[0].date).format("DD");
            } else {
                globalEarlyDay = new moment().format("DD");
            }
        });
    }

    if (IRQuoteModule) {
        $.when(requestStockData, requestTranslationsData).done(function (stockData, translationsData) {
            if (!waitForAdditionalDataIRQuoteModule) {
                buildQuoteTable();
                formatColour();

                reportModuleReady('IRQuote'); // JRJR

            } else {
                if (useFeatureStockOtherData) {
                    $.when(requestFeatureStockOtherData).done(function (stockOtherData) {
                        globalRawStockOtherData = stockOtherData.data;
                        buildQuoteTable();
                        formatColour();

                        reportModuleReady('IRQuote'); // JRJR

                    });
                }
            }
        });
    }

    if (IRProfileModule) {
        $.when(requestStockData, requestTranslationsData, requestClosePriceListingData).done(function (stockData, translationsData, closePriceListingData) {
            var data = preloadIRProfile(stockData, closePriceListingData);
            buildIRProfile(data);
            formatColour();
        });
    }

    if (IRChartModule) {

        $.when(requestClosePriceOtherData).done(function (closePriceOtherData) {
            if (closePriceOtherData.data.length == 0) {
                useIRChartCompare = false;
            } else {
                useIRChartCompare = true;
            }
        });
        $.when(requestStockData, requestClosePriceListingData, requestTranslationsData).done(function (stockData, closePriceListingData) {

            globalChartContainer = '.IRChartPlaceholder';
            buildIRChartTool();

            var o = {
                headers: translations,
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData
                }
            };
            preloadIRChartDataClosePriceListing(o);
            updateChartNavBarRange('IRChart');
            updateIRChartChangeListing();
            attachClickHandlers('IRChart');

            if (useIRChartNews) {
                $.when(requestStockData, requestNewsDataInitial).done(function (stockData, newsDataInitial) {
                    globalAmountOfNewsItems = newsDataInitial[0].data.length;
                    var o = {
                        headers: translations,
                        data: newsDataInitial[0].data
                    }
                    //globalNewsRawData = o;
                    preloadIRChartNewsHistorical(o);
                });
            }

            if (useIRChartPressReleaseIRChartHeadline) {
                $.when(requestStockData, requestPressReleaseIRChartHeadlineData).done(function (stockData, newsDataInitial) {
                    //globalAmountOfNewsItems = newsDataInitial[0].data.length;
                    var o = {
                        headers: translations,
                        data: newsDataInitial[0].data
                    }
                    //globalNewsRawData = o;

                    preloadIRChartPressReleaseIRChartHeadlineHistorical(o);
                });
            }

            if (useIRChartPressRelease) {
                $.when(requestStockData, requestPressReleaseData).done(function (stockData, newsDataInitial) {
                    var o = {
                        headers: translations,
                        data: newsDataInitial[0].data
                    }
                    preloadIRChartPressReleaseHistorical(o);
                });
            }

            if (useIRChartTechnicalAnalysis) {
                attachClickHandlers('IRChartTechnicalAnalysis');
            }

        });
        $.when(requestStockData, requestIntradayListingData, requestTranslationsData).done(function (stockData, intradayListingData) {
            var o = {
                headers: translations,
                data: {
                    stock: stockData,
                    intradayListing: intradayListingData
                }
            };
            preloadIRChartDataIntradayListing(o);
        });
        $.when(requestStockData, requestClosePriceListingData, requestClosePriceOtherData, requestTranslationsData).done(function (stockData, closePriceListingData, closePriceOtherData) {
            if (useIRChartCompare) {
                var o = {
                    headers: translations,
                    data: {
                        stock: stockData,
                        closePriceListing: closePriceListingData,
                        closePriceOther: closePriceOtherData
                    }
                };
                preloadIRChartDataClosePriceOther(o);
                attachClickHandlers('IRChartComparison');
            }
        });
        $(window).resize(function () {
            IRChartNavigationHideAll();
        });
    }

    if (IRChartHTMLModule) {

        debugStep("IRChartHTMLModule");

        $.when(requestStockData, requestClosePriceListingData, requestTranslationsData).done(function (stockData, closePriceListingData) {
            buildIRChartHTMLTool();
            var o = {
                headers: translations,
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData
                }
            };
            preloadIRChartDataClosePriceListing(o);
            globalChartDom = getChartDOM();

            updateChartNavBarRange('IRChartHTML');
            updateIRChangeListing();
            attachClickHandlers('IRChartHTML');

            if (useIRChartNews) {
                $.when(requestStockData, requestNewsDataInitial).done(function (stockData, newsDataInitial) {
                    globalAmountOfNewsItems = newsDataInitial[0].data.length;
                    var o = {
                        headers: translations,
                        data: newsDataInitial[0].data
                    }
                    preloadIRChartNewsHistorical(o);
                });
            }

            if (useIRChartPressReleaseIRChartHeadline) {
                $.when(requestStockData, requestPressReleaseIRChartHeadlineData).done(function (stockData, newsDataInitial) {
                    var o = {
                        headers: translations,
                        data: newsDataInitial[0].data
                    }
                    preloadIRChartPressReleaseIRChartHeadlineHistorical(o);
                });
            }

        });
        $.when(requestStockData, requestIntradayListingData, requestTranslationsData).done(function (stockData, intradayListingData) {
            var o = {
                headers: translations,
                data: {
                    stock: stockData,
                    intradayListing: intradayListingData
                }
            };
            preloadIRChartDataIntradayListing(o);
        });
        $.when(requestStockData, requestClosePriceListingData, requestClosePriceOtherData, requestTranslationsData).done(function (stockData, closePriceListingData, closePriceOtherData) {
            if (useIRChartCompare) {
                var o = {
                    headers: translations,
                    data: {
                        stock: stockData,
                        closePriceListing: closePriceListingData,
                        closePriceOther: closePriceOtherData
                    }
                };
                preloadIRChartDataClosePriceOther(o);
                attachClickHandlers('IRChart');
            }
        });
    }

    if (IRChartHTMLMiniModule) {
        $.when(requestStockData, requestClosePriceListingData, requestTranslationsData).done(function (stockData, closePriceListingData) {
            globalChartContainer = '.IRChartHTMLMiniPlaceholder';
            var o = {
                headers: translations,
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData
                }
            };
            preloadIRChartMiniDataClosePriceListing(o);
            drawActiveListingToChartMiniHistorical();
            setChartExtremes(chartDisplayModes.historical, 90);
        });
    }

    if (IRMiniquoteModule) {
        $.when(requestStockData, requestTranslationsData).done(function (stockData, translationsData) {
            drawIRMiniquote();
            formatColour();
        });
    }

    if (IRMiniquoteChartModule) {
        globalChartContainer = '.IRMiniquoteChartPlaceholder';

        $.when(requestStockData, requestClosePriceListingData, requestTranslationsData).done(function (stockData, closePriceListingData) {

            globalRawStockData = stockData[0].data;
            preloadIRMiniquoteChartDataClosePriceListing(closePriceListingData[0].data);

            if (clientStyle.miniquoteChartDefaultPeriode == 'd1' || clientStyle.miniquoteChartDefaultPeriode == 'd5') {

            } else {
                drawIRMiniquoteChart();
                drawMiniquoteChart();
                drawActiveListingToIRMiniquoteChartHistorical();
                setChartExtremes(chartDisplayModes.historical, 90);
            }

        });
        $.when(requestStockData, requestIntradayListingData, requestTranslationsData).done(function (stockData, intradayListingData) {

            globalRawStockData = stockData[0].data;
            preloadIRMiniquoteChartDataIntradayListing(stockData[0].data, intradayListingData[0].data);

            // JRJR Todo
            if (clientStyle.miniquoteChartDefaultPeriode == 'd1' || clientStyle.miniquoteChartDefaultPeriode == 'd5') {
                globalChartActiveDisplayMode = chartDisplayModes.intraday;
                drawIRMiniquoteChart();
                drawMiniquoteChart();
            }

            if (clientStyle.miniquoteChartDefaultPeriode == 'd1') {
                drawActiveListingToIRMiniquoteChartIntraday();
                setChartExtremes(chartDisplayModes.intraday, 24);
            } else if (clientStyle.miniquoteChartDefaultPeriode == 'd5') {
                drawActiveListingToIRMiniquoteChartIntraday();
                setChartExtremes(chartDisplayModes.intraday, 120);
            }

        });

    }

    if (IRBenchmarkModule) {
        $.when(requestStockData, requestClosePriceListingData, requestClosePriceOtherData, requestTranslationsData).done(function (stockData, closePriceListingData, closePriceOtherData) {
            var o = {
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData,
                    closePriceOther: closePriceOtherData
                }
            };
            preloadIRBenchmarkData(o);
        });
    }

    if (IRLookupModule) {
        globalChartContainer = '.IRChartLookupPlaceholder';
        $.when(requestStockData, requestClosePriceListingData, requestTranslationsData).done(function (stockData, closePriceListingData) {
            var o = {
                headers: translations,
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData
                }
            };

            // Extending the original array with translations to handle legacy lookup.aspx files where {{t_frequency}} is used oposed to {{headers/t_frequency}}
            o = $.extend(translations, o);

            preloadIRLookupChartDataClosePriceListing(o);
            updateIRChangeListing();
            attachClickHandlers('IRLookupModule');
        });

    }

    if (IRCalcModule) {
        globalChartContainer = '.IRChartCalcPlaceholder';
        $.when(requestStockData, requestClosePriceListingData, requestTranslationsData).done(function (stockData, closePriceListingData, translationsData) {
            var o = {
                headers: translationsData,
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData
                }
            };
            preloadIRCalcChartDataClosePriceListing(o);
            updateIRChangeListing();
            attachClickHandlers('IRCalcModule');
        });
    }

    if (IRCalcSimpleModule) {
        $.when(requestStockData, requestClosePriceListingData, requestTranslationsData).done(function (stockData, closePriceListingData, translationsData) {
            var o = {
                headers: translationsData,
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData
                }
            };
            globalRawCalcData = o;
            preloadIRCalcDataClosePriceListing(o);
            updateIRChangeListing();
            attachClickHandlers('IRCalcSimpleModule');
        });
    }

    //
    //  Some modules require requestStockData to be available priror to load.
    //  As an example: requestOrdersData requires the IRInstrumentID from stock data prior to executing the ajax request.
    //
    if (IROrdersModule || IRTradesModule || IRNewsModule || IREmailAlertModule || IRNewsHeadlineModule || IRCalcModule) {
        $.when(requestStockData).done(function () {
            if (IROrdersModule) {
                $.when(requestOrdersData, requestTranslationsData).done(function (ordersData) {
                    var o = {
                        headers: translations,
                        data: ordersData
                    }
                    buildOrdersTable(o, menuTemplate_OrdersTable);
                    formatColour(); // see ir.behaviour.js
                });
            }
            if (IRTradesModule) {
                $.when(requestTradesData, requestTranslationsData).done(function (tradesData) {
                    var o = {
                        headers: translations,
                        data: tradesData
                    }
                    buildTradesTable(o, menuTemplate_TradesTable);
                    formatColour(); // see ir.behaviour.js
                });
            }
            if (IRNewsModule) {
                $.when(requestNewsDataInitial, requestTranslationsData).done(function (newsDataInitial) {
                    globalAmountOfNewsItems = newsDataInitial[0].data.length;
                    if (globalAmountOfNewsItems > 0) {
                        globalNewsEarlyYear = new moment(newsDataInitial[0].data[globalAmountOfNewsItems - 1].timestamp);
                        if (clientStyle.news_limitByFromYear > parseInt(new moment(newsDataInitial[0].data[globalAmountOfNewsItems - 1].timestamp).format("YYYY"))) {
                            globalNewsEarlyYear = new moment(clientStyle.news_limitByFromYear + "-01-01T00:00:00.0000000Z");
                        }
                    } else {
                        globalNewsEarlyYear = new moment();
                    }

                    var newsDataInitialObj = newsDataInitial[0].data;

                    //
                    //  Exclude some entries based on a string match in headline.
                    //
                    if (typeof (clientStyle.news_ignoreNewsStoriesWithHeadline) == 'string') {
                        var newsDataUpdatedArr = new Array();

                        var newsData = newsDataInitial[0].data;
                        var newsDataUpdated = {
                            attachments: null,
                            categories: null,
                            headline: null,
                            htmlUrl: null,
                            storyID: null,
                            timestamp: null
                        };
                        for (var i = 0; i < newsData.length; i++) {
                            if (newsData[i].headline.indexOf(clientStyle.news_ignoreNewsStoriesWithHeadline) == -1) {

                                var activeNewsYear = parseInt(new moment(newsData[i].timestamp).format("YYYY"));
                                if (clientStyle.news_limitByFromYear < activeNewsYear) {

                                    newsDataUpdatedArr.push({
                                        attachments: newsData[i].attachments,
                                        categories: newsData[i].categories,
                                        headline: newsData[i].headline,
                                        htmlUrl: newsData[i].htmlUrl,
                                        storyID: newsData[i].storyID,
                                        timestamp: newsData[i].timestamp
                                    });
                                }
                            }
                        }
                        newsDataInitialObj = newsDataUpdatedArr;
                    }


                    var o = {
                        headers: translations,
                        data: newsDataInitialObj
                    }

                    buildNewsTool(o);
                    setIRNewsInternetExplorerUpdateLoop(); // IE versions lower than 8
                    attachClickHandlers('IRNews');
                });
            }
            if (IRNewsHeadlineModule) {
                $.when(requestNewsDataInitial, requestTranslationsData).done(function (newsDataInitial) {
                    globalAmountOfNewsItems = newsDataInitial[0].data.length;
                    if (globalAmountOfNewsItems > 0) {
                        globalNewsEarlyYear = new moment(newsDataInitial[0].data[globalAmountOfNewsItems - 1].timestamp);
                    } else {
                        globalNewsEarlyYear = new moment();
                    }
                    var o = {
                        headers: translations,
                        data: newsDataInitial[0].data
                    }
                    //globalNewsRawData = o;
                    buildNewsHeadlineTool(o);
                    attachClickHandlers('IRNewsHeadline');
                });
            }
            if (IREmailAlertModule) {
                $.when(requestTranslationsData).done(function () {
                    buildEmailAlertTool();
                });
            }
            if (IRCalcModule) {
                if (useIRCalcTSR) {
                    loadCalcDividendData();
                    $.when(requestStockData, requestClosePriceListingData, requestTranslationsData, requestDividendBundle).done(function (stockData, closePriceListingData, translationsData, dividendBundleData) {
                        preloadIRCalcDiviendData(dividendBundleData);
                        // JRJR
                    });
                }
            }
        });
    }

    //
    //  Step where we decide what to draw in the tools, in chart we decide intraday or close prices.
    //
    if (IRChartModule) {

        // Ensure all data requests are ready.
        $.when(requestTranslationsData, requestStockData, requestClosePriceListingData, requestClosePriceOtherData, requestIntradayListingData).done(function () {
            if (clientStyle.chart_DefaultPeriodSelected == 'd1' || clientStyle.chart_DefaultPeriodSelected == 'd5') {

                // Default to Intraday
                checkChartState(chartDisplayModes.intraday);
                if (clientStyle.chart_DefaultPeriodSelected == 'd1') {
                    setChartExtremes(chartDisplayModes.intraday, 24);
                }
                if (clientStyle.chart_DefaultPeriodSelected == 'd5') {
                    setChartExtremes(chartDisplayModes.intraday, 120);
                }
            } else {

                // Default to Historical

                if (useIRChartCustomPreventDefault) {

                } else {

                    checkChartState(chartDisplayModes.historical);
                    drawActiveListingToChartHistorical();

                    var period = 360;

                    switch (clientStyle.chart_DefaultPeriodSelected) {
                        case "m1":
                            period = 30;
                            break;
                        case "m3":
                            period = 30 * 3;
                            break;
                        case "m6":
                            period = 30 * 6;
                            break;
                        case "y1":
                            period = 365;
                            break;
                        case "y2":
                            period = 365 * 2;
                            break;
                        case "y5":
                            period = 365 * 5;
                            break;
                        case "max":
                            period = 9999;
                            break;
                    }

                    setChartExtremes(chartDisplayModes.historical, period);
                    reportModuleReady('IRChart');
                }
            }
        });

    }
    if (IRChartHTMLModule) {

        // Ensure all data requests are ready.
        $.when(requestTranslationsData, requestStockData, requestClosePriceListingData, requestClosePriceOtherData, requestIntradayListingData).done(function () {

            if (clientStyle.chart_DefaultPeriodSelected == 'd1' || clientStyle.chart_DefaultPeriodSelected == 'd5') {

                // Default to Intraday
                checkChartState(chartDisplayModes.intraday);
                if (clientStyle.chart_DefaultPeriodSelected == 'd1') {
                    setChartExtremes(chartDisplayModes.intraday, 24);
                }
                if (clientStyle.chart_DefaultPeriodSelected == 'd5') {
                    setChartExtremes(chartDisplayModes.intraday, 120);
                }
            } else {


                // Default to Historical
                checkChartState(chartDisplayModes.historical);
                drawActiveListingToChartHistorical();

                var period = 360;

                switch (clientStyle.chart_DefaultPeriodSelected) {
                    case "m1":
                        period = 30;
                        break;
                    case "m3":
                        period = 30 * 3;
                        break;
                    case "m6":
                        period = 30 * 6;
                        break;
                    case "y1":
                        period = 365;
                        break;
                    case "y2":
                        period = 365 * 2;
                        break;
                    case "y5":
                        period = 365 * 5;
                        break;
                    case "max":
                        period = 9999;
                        break;
                }
                setChartExtremes(chartDisplayModes.historical, period);
            }
        });
    }

});

//
//  Functions
//
function setReadingDirection() {
    if (typeof ($('html').attr('dir')) == "string") {
        $('html').attr('dir', globalHTMLReadingDirection.toLowerCase());
    }
    $('body').addClass('readingDirection' + globalHTMLReadingDirection);
}
function checkActiveDataRequests(activeDataRequestsArr) {
    debugStep("checkActiveDataRequests");
    for (var i = 0; i < activeDataRequestsArr.length; i++) {
        debugStep("Module [" + activeDataRequestsArr[i] + "] is activated");
        switch (activeDataRequestsArr[i]) {
            case "requestTranslationsData":
                useStockData = true;
                break;
            case "requestStockData":
                useStockData = true;
                break;
            case "requestIntradayListingData":
                useIntradayBundleListingData = true;
                break;
            case "requestClosePriceListingData":
                useClosePriceBundleListingData = true;
                break;
            case "requestNews":
                useNewsData = true;
                break;
            case "requestDividendBundle":
                useStockData = true;
                useDividendData = true;
                break;
            case "requestNewsCalendar":
                //useNewsCalendarData = true;
                break;
            case "requestNewsCalendar":
                //useNewsCalendarData = true;
                break;
            default:
                debugError("no match for the module '" + activeDataRequestsArr[i] + "' in activeDataRequests");
                break;
        }
    }
}
function checkactiveModules(activeModulesArr) {
    debugStep("checkactiveModules");
    //
    // Check activeModules array and enable data requests and module builders.
    //
    for (var i = 0; i < activeModulesArr.length; i++) {
        debugStatus("Module [" + activeModulesArr[i] + "] is activated");
        switch (activeModulesArr[i]) {
            case "IRQuote":
                IRQuoteModule = true;
                useStockData = true;
                readyHandler.activeModulesCount += 1;
                break;
            case "IRQuoteRT":
                IRQuoteModule = true;
                useStockDataRT = true;
                break;
            case "IRChart":
                IRChartModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                useIntradayBundleListingData = true;
                useClosePriceBundleOtherData = true;
                readyHandler.activeModulesCount += 1;
                break;
            case "IRChartRT":
                IRChartModule = true;
                useStockDataRT = true;
                useClosePriceBundleListingData = true;
                useIntradayBundleListingData = true;
                useClosePriceBundleOtherData = true;
                break;
            case "IRChartHTML":
                IRChartHTMLModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                useIntradayBundleListingData = true;
                useClosePriceBundleOtherData = true;
                break;
            case "IRLookup":
                IRLookupModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                break;
            case "IRLookupNew":
                IRLookupModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                break;
            case "IRCustomModule":
                IRCustomModule = true;
                break;
            case "IRCalc":
                IRCalcModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                break;
            case "IRCalcNew":
                IRCalcModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                break;
            case "IRCalcSimple":
                IRCalcSimpleModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                break;
            case "IRChartHTMLMini":
                IRChartHTMLMiniModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                useIntradayBundleListingData = true;
                break;
            case "IRMiniQuote":
            case "IRMiniquote":
                IRMiniquoteModule = true;
                useStockData = true;
                break;
            case "IRMiniquoteChart":
                IRMiniquoteChartModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                useIntradayBundleListingData = true;
                break;
            case "IROrders":
                IROrdersModule = true;
                useStockData = true;
                useOrdersData = true;
                break;
            case "IRTrades":
                IRTradesModule = true;
                useStockData = true;
                useTradeData = true;
                break;
            case "IRNews":
                IRNewsModule = true;
                useNewsData = true;
                useStockData = true;
                break;
            case "IRNewsHeadline":
                IRNewsHeadlineModule = true;
                useNewsHeadlineData = true;
                useStockData = true;
                break;
            case "IRNewsArticle":
                IRNewsArticleModule = true;
                useNewsArticleData = true;
                useStockData = true;
                break;
            case "IRBenchmark":
                IRBenchmarkModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                useClosePriceBundleOtherData = true;
                break;
            case "IREmailAlert":
                IREmailAlertModule = true;
                useStockData = true;
                break;
            case "IRToolsNewsArticleHTML":
                IRToolsNewsArticleHTMLModule = true;
                IRNewsArticleModule = true;
                useNewsArticleData = true;
                useStockData = true;
                break;
            case "IRProfile":
                IRProfileModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                break;
            default:
                debugError("no match for the module '" + activeModulesArr[i] + "' in activeModules");
                break;
        }
    }
}
function checkActiveFeatures(activeFeaturesArr) {
    debugStep("checkActiveFeatures");
    //
    // Check activeFeatures array and enable features for module builders.
    //
    for (var i = 0; i < activeFeaturesArr.length; i++) {
        debugStatus("Feature [" + activeFeaturesArr[i] + "] is activated");
        switch (activeFeaturesArr[i]) {
            case "IRChartNews":
                useIRChartNews = true;
                useStockData = true;
                useNewsData = true;
                break;
            case "TA":
                useIRChartTA = true;
                break;
            case "IRChartTechnicalAnalysis":
                useIRChartTechnicalAnalysis = true;
                break;
            case "IRChartCompare":
                useIRChartCompare = true;
                break;
            case "IRChartTSR":
                useIRChartTSR = true;
                break;
            case "IRChartOutsideTechnicalAnalysis":
                useIRChartOuterTechnicalAnalysis = true;
                break;
            case "IRCalcTSR":
                useIRCalcTSR = true;
                break;
            case "IRChartCurrencyConversion":
                useIRChartCurrencyConversion = true;
                break;
            case "StockDataInstrumentTypeOther":
                useFeatureStockOtherData = true;
                waitForAdditionalDataIRQuoteModule = true;
                break;
            case "IRChartPressReleaseIRChartHeadline":
                useIRChartPressReleaseIRChartHeadline = true;
                usePressReleaseIRChartHeadlineData = true;
                break;
            case "IRChartPressRelease":
                useIRChartPressRelease = true;
                usePressReleaseData = true;
                break;
            case "IRChartCustomPreventDefault":
                useIRChartCustomPreventDefault = true;
                break;
            case "CurrencyConversion":
                useCurrencyConversion = true;
                break;
        }
    }
}

function initSolutionInfo() {
    debugStep("initSolutionInfo()");
    clientApiVersion = 1; // TODO, dynamically get this.
    clientSolutionID = getSolutionID();
    clientCustomerKeyRequired = getCustomerKeyRequired();
    clientAmountOfYears = 10; // Listen to overwrite from ir.client.js
    clientAmountOfTrades = 5; // Listen to overwrite from ir.client.js

    debugStep("clientSolutionID: " + clientSolutionID);
    debugStep("clientCustomerKeyRequired: " + clientCustomerKeyRequired);
}
function getSolutionID() {
    debugStep("getSolutionID");
    var fetchedSolutionID;
    var pathSplit = location.href.split("/");
    if (pathSplit[3].toLowerCase() == 'solutions' || pathSplit[3].toLowerCase() == 'irmotor' || pathSplit[3].toLowerCase() == 'solutionsstaging') {
        fetchedSolutionID = pathSplit[5];
        if (pathSplit[4].toLowerCase() == 'debugsolutions') {
            fetchedSolutionID = pathSplit[6];
        }
    } else {
        fetchedSolutionID = pathSplit[4];
    }

    //
    //  Presentation correction for MJ
    //
    if (fetchedSolutionID == 'solutioneditor') {
        fetchedSolutionID = '10010';
    }

    if (pathSplit[3].toLowerCase() == 'tools') {
        var pathSplit = pathSplit[4].split('?');
        if (pathSplit[0].toLowerCase() == 'newsarticlehtml.aspx') {
            var pathSplitGetParams = pathSplit[1].split('&');
            for (var i = 0; i < pathSplitGetParams.length - 1; i++) {
                var pathSplitGetParamsSub = pathSplitGetParams[i].split('=');
                if (pathSplitGetParamsSub[0].toLowerCase() == 'solutionid') {
                    fetchedSolutionID = pathSplitGetParamsSub[1];
                }
            }
        }
    }
    else if (pathSplit[4].toLowerCase() == 'tools') {
        var pathSplit = pathSplit[5].split('?');
        if (pathSplit[0].toLowerCase() == 'newsarticlehtml.aspx') {
            var pathSplitGetParams = pathSplit[1].split('&');
            for (var i = 0; i < pathSplitGetParams.length - 1; i++) {
                var pathSplitGetParamsSub = pathSplitGetParams[i].split('=');
                if (pathSplitGetParamsSub[0].toLowerCase() == 'solutionid') {
                    fetchedSolutionID = pathSplitGetParamsSub[1];
                }
            }
        }
    } else if (fetchedSolutionID.toLowerCase() == 'test') {
        fetchedSolutionID = 2086;
    }

    //else if (fetchedSolutionID.toLowerCase() == 'tools') {
    //    fetchedSolutionID = 2086;
    //}

    if (typeof (fetchedSolutionID) == 'string') {
        if (fetchedSolutionID.toLowerCase() == 'tools') {
            fetchedSolutionID = 2086;
        }
    }

    if (pathSplit[3] == 'debugSolutions') {
        fetchedSolutionID = pathSplit[5];
    }


    if (typeof (pathSplit[4]) != 'undefined') {
        if (pathSplit[4].toLowerCase() == 'templatedevelopment') {
            fetchedSolutionID = 2594;
        }
    }

    return fetchedSolutionID;
}
function getCustomerKeyRequired() {
    debugStep("getCustomerKeyRequired");
    var solutionName;
    var pathSplit = location.href.split("/");

    if (pathSplit[3].toLowerCase() == 'solutions' || pathSplit[3].toLowerCase() == 'irmotor' || pathSplit[3].toLowerCase() == 'solutionsstaging') {
        solutionName = pathSplit[4];
        if (pathSplit[4].toLowerCase() == 'debugsolutions') {
            solutionName = pathSplit[5];
        }
        if (pathSplit[3].toLowerCase() == 'debugsolutions') {
            solutionName = pathSplit[4];
        }

    } else {
        solutionName = pathSplit[3];
    }

    //
    //  Presentation correction for MJ
    //
    if (solutionName == 'tools') {
        solutionName = 'Template';
    }

    if (pathSplit[3].toLowerCase() == 'tools') {
        var pathSplit = pathSplit[4].split('?');
        if (pathSplit[0] == 'newsArticleHTML.aspx') {
            var pathSplitGetParams = pathSplit[1].split('&');
            for (var i = 0; i < pathSplitGetParams.length - 1; i++) {
                var pathSplitGetParamsSub = pathSplitGetParams[i].split('=');
                if (pathSplitGetParamsSub[0].toLowerCase() == 'customerkey') {
                    solutionName = pathSplitGetParamsSub[1];
                }
            }
        }
    }
    else if (pathSplit[4].toLowerCase() == 'tools') {
        var pathSplit = pathSplit[5].split('?');
        if (pathSplit[0] == 'newsArticleHTML.aspx') {
            var pathSplitGetParams = pathSplit[1].split('&');
            for (var i = 0; i < pathSplitGetParams.length - 1; i++) {
                var pathSplitGetParamsSub = pathSplitGetParams[i].split('=');
                if (pathSplitGetParamsSub[0].toLowerCase() == 'customerkey') {
                    solutionName = pathSplitGetParamsSub[1];
                }
            }
        }
    }

    if (solutionName == 'debugSolutions') {
        solutionName = pathSplit[4];
    }

    return solutionName;
}
function getServiceEngingeURL() {
    var url = getProtocol() + '//' + getHost() + '/ServiceEngine/api/json/reply/';
    return url;
}
function getProtocol() {
    var protocol = location.protocol;
    if (protocol == 'http:' || protocol == 'https:') {

    } else {
        protocol = 'http:';
    }
    return protocol;
}
function getHost() {
    if (location.host.indexOf("localhost:1337") > -1) {
        return location.host;
    } else if (location.host.indexOf("localhost") > -1) {
        return 'ir.euroinvestor.com';
    } else if (location.host.indexOf("irfeci") > -1) {
        return 'ir.euroinvestor.com';
    } else {
        return location.host;
    }
}
function getNewsArticlePath() {

    var localPath = '';
    if (getHost().indexOf('localhost:1337') > -1) {
        localPath = '/IRMotor';
    }
    return getProtocol() + '//' + getHost() + localPath + '/Tools/newsArticleHTML.aspx';
}
function getImagePath() {
    //debugStep("getImagePath");
    var pathSplit = location.href.split("/");
    var length = 3;
    var pathStr = "";
    if (pathSplit[3].toLowerCase() == 'solutions' || pathSplit[3].toLowerCase() == 'irmotor') {
        length = 3;
    }
    if (pathSplit[4].toLowerCase() == 'debugsolutions') {
        length = 4;
    }
    for (var i = 0; i < length; i++) {
        pathStr += pathSplit[i] + "/";
    }
    return pathStr + "inc/images/";
}
function getActiveCurrency() {
    return globalRawStockData[globalActiveListingIndex].currency;
}
function getActiveCurrencySymbol() {
    switch (globalRawStockData[globalActiveListingIndex].currency) {
        case "USD":
            return "$";
            break;
        case "GBP":
            return "£";
            break;
        case "EUR":
            return "€";
            break;
        default:
            return "";
            break;
    }
}
function getActiveTAShort() {
    return globalActiveTAShort;
}
function updateLCID() {
    debugStep("updateLCID");
    updateGlobalLanguage();
    var lcidSelected;
    var decimalCommaOrPoint = 'comma';
    switch (globalActiveLanguage) {
        case "cs":
            lcidSelected = LCID.csCZ;
            break;
        case "da":
            lcidSelected = LCID.daDK;
            break;
        case "de":
            lcidSelected = LCID.deDE;
            break;
        case "en":
            lcidSelected = LCID.enGB;
            decimalCommaOrPoint = 'point';
            break;
        case "es":
            lcidSelected = LCID.esES;
            break;
        case "fi":
            lcidSelected = LCID.fiFI;
            break;
        case "fr":
            lcidSelected = LCID.frFR;
            break;
        case "nl":
            lcidSelected = LCID.nlNL;
            break;
        case "no":
            lcidSelected = LCID.nnNO;
            break;
        case "pl":
            lcidSelected = LCID.plPL;
            break;
        case "pt":
            lcidSelected = LCID.ptPT;
            break;
        case "se":
            lcidSelected = LCID.svSE;
            decimalCommaOrPoint = ' ';
            break;
        case "zh-s":
            lcidSelected = LCID.zhCHS;
            decimalCommaOrPoint = 'point';
            break;
        case "zh-t":
            lcidSelected = LCID.zhCHT;
            decimalCommaOrPoint = 'point';
            break;
        case "he":
            lcidSelected = LCID.heIL;
            globalHTMLReadingDirection = "RTL";
            decimalCommaOrPoint = 'point';
            break;
        case "ar":
            lcidSelected = LCID.arEG;
            globalHTMLReadingDirection = "RTL";
            decimalCommaOrPoint = 'point';
            break;
        case "hu":
            lcidSelected = LCID.huHU;
            break;
        case "it":
            lcidSelected = LCID.itIT;
            break;
    }
    clientLCID = lcidSelected;
    if (decimalCommaOrPoint == 'point') {
        clientLocaleParameters.decimalSeparator = '.';
        clientLocaleParameters.decimalSeparator1000 = ',';
    }
    if (decimalCommaOrPoint == ' ') {
        clientLocaleParameters.decimalSeparator = ',';
        clientLocaleParameters.decimalSeparator1000 = ' ';
    }
}
function updateGlobalLanguage() {
    debugStep("updateGlobalLanguage");
    var languageDict = {};
    var getParams = location.search.substr(1).split("&")

    for (var i = 0; i < getParams.length; i++) {
        if (getParams[i].split("=")[0] == "language") {
            languageDict[getParams[i].split("=")[0]] = getParams[i].split("=")[1];
        }
    }

    if (typeof (languageDict.language) != 'undefined') {
        if (languageDict.language.length > 0) {
            globalActiveLanguage = languageDict.language;
        }
    }
}


function initClientStyle() {
    debugStep("initClientStyle");
    //
    //  If clientStyleOverwrite is defined in ir.client.js, colours defined there will be used.
    //
    if (typeof (clientStyleOverwrite) != "undefined") {
        clientStyle.chart_ColourMain = clientStyleOverwrite.chart_ColourMain; // Write '#xxxxxx' and not '#xxx' or 'blue' to have transparrency in the chart.
        clientStyle.chart_ColourBackground = clientStyleOverwrite.chart_ColourBackground;
        clientStyle.chart_ColourBorder = clientStyleOverwrite.chart_ColourBorder;
        clientStyle.chart_ColourVolumeBars = clientStyleOverwrite.chart_ColourVolumeBars;

        if (typeof (clientStyleOverwrite.chart_ColourPlotBackground) != "undefined") {
            clientStyle.chart_ColourPlotBackground = clientStyleOverwrite.chart_ColourPlotBackground;
        }

        if (clientStyleOverwrite.amountOfDecimals >= 0) {
            clientStyle.amountOfDecimals = clientStyleOverwrite.amountOfDecimals;
        }

        if (clientStyleOverwrite.news_lockListing >= 0) {
            clientStyle.news_lockListing = clientStyleOverwrite.news_lockListing;
        }

        if (clientStyleOverwrite.news_lockLCID >= 0) {
            clientStyle.news_lockLCID = clientStyleOverwrite.news_lockLCID;
        }

        if (typeof (clientStyleOverwrite.news_limitByFromYear) != "undefined" && clientStyleOverwrite.news_limitByFromYear >= 0) {
            clientStyle.news_limitByFromYear = clientStyleOverwrite.news_limitByFromYear;
        }

        if (clientStyleOverwrite.amountOfTrades >= 0) {
            clientStyle.amountOfTrades = clientStyleOverwrite.amountOfTrades;
        }

        if (clientStyleOverwrite.amountOfHistoricalYears >= 0) {
            clientStyle.amountOfHistoricalYears = clientStyleOverwrite.amountOfHistoricalYears;
        }

        if (typeof (clientStyleOverwrite.selectIRChangeListingFormat) != "undefined") {
            clientStyle.selectIRChangeListingFormat = clientStyleOverwrite.selectIRChangeListingFormat;
        }

        if (typeof (clientStyleOverwrite.formatDate) != "undefined") {
            clientStyle.formatDate = clientStyleOverwrite.formatDate;
        }
        if (typeof (clientStyleOverwrite.formatTime) != "undefined") {
            clientStyle.formatTime = clientStyleOverwrite.formatTime;
        }

        if (typeof (clientStyleOverwrite.formatDateTime) != "undefined") {
            clientStyle.formatDateTime = clientStyleOverwrite.formatDateTime;
        }

        if (typeof (clientStyleOverwrite.chart_DrawModeMiniquote) != "undefined") {
            clientStyle.chart_DrawModeMiniquote = clientStyleOverwrite.chart_DrawModeMiniquote;
        }

        if (typeof (clientStyleOverwrite.chart_DrawMode) != "undefined") {
            clientStyle.chart_DrawMode = clientStyleOverwrite.chart_DrawMode;
        }

        if (typeof (clientStyleOverwrite.news_EntamountOfNewsriesPerPage) != "undefined") {
            clientStyle.amountOfNews = clientStyleOverwrite.amountOfNews;
        }

        if (typeof (clientStyleOverwrite.amountOfNewsPerPage) != "undefined") {
            if (clientStyleOverwrite.amountOfNewsPerPage >= 0) {
                clientStyle.amountOfNewsPerPage = clientStyleOverwrite.amountOfNewsPerPage;
            }
        }

        if (typeof (clientStyleOverwrite.lookup_ChartYAxisInsideOutside) != "undefined") {
            clientStyle.lookup_ChartYAxisInsideOutside = clientStyleOverwrite.lookup_ChartYAxisInsideOutside;
        }

        if (typeof (clientStyleOverwrite.calc_ChartYAxisInsideOutside) != "undefined") {
            clientStyle.calc_ChartYAxisInsideOutside = clientStyleOverwrite.calc_ChartYAxisInsideOutside;
        }

        if (typeof (clientStyleOverwrite.miniquote_ChartYAxisInsideOutside) != "undefined") {
            clientStyle.miniquote_ChartYAxisInsideOutside = clientStyleOverwrite.miniquote_ChartYAxisInsideOutside;
        }

        if (typeof (clientStyleOverwrite.amountOfNewsHeadlines) != "undefined") {
            clientStyle.amountOfNewsHeadlines = clientStyleOverwrite.amountOfNewsHeadlines;
            if (clientStyle.amountOfNewsHeadlines <= 0) {
                clientStyle.amountOfNewsHeadlines = 20000;
            }
            if (clientStyle.amountOfNewsHeadlines > 20000) {
                clientStyle.amountOfNewsHeadlines = 20000;
            }
        }

        if (typeof (clientStyleOverwrite.chart_CustomTooltipUseFullOHLCV) != "undefined") {
            clientStyle.chart_CustomTooltipUseFullOHLCV = clientStyleOverwrite.chart_CustomTooltipUseFullOHLCV;
        }

        if (typeof (clientStyleOverwrite.chart_DefaultPeriodSelected) != "undefined") {
            clientStyle.chart_DefaultPeriodSelected = clientStyleOverwrite.chart_DefaultPeriodSelected;
        }

        if (typeof (clientStyleOverwrite.miniquoteChartDefaultPeriode) != "undefined") {
            clientStyle.miniquoteChartDefaultPeriode = clientStyleOverwrite.miniquoteChartDefaultPeriode;
        }

        if (typeof (clientStyleOverwrite.chart_CustomTooltipContent) != "undefined") {
            clientStyle.chart_CustomTooltipContent = clientStyleOverwrite.chart_CustomTooltipContent;

            globalChartUseCustomTooltipContent = true;
            var countTooltioElements = 0;
            var cssTopInPx = 0;

            var customTooltipContent = clientStyle.chart_CustomTooltipContent.split("");
            for (var i = 0; i < customTooltipContent.length; i++) {
                switch (customTooltipContent[i]) {
                    case "D":
                        clientStyle.chart_TooltipHideDate = false;
                        countTooltioElements++;
                        break;
                    case "O":
                        clientStyle.chart_TooltipHideOpen = false;
                        countTooltioElements++;
                        break;
                    case "H":
                        clientStyle.chart_TooltipHideHigh = false;
                        countTooltioElements++;
                        break;
                    case "L":
                        clientStyle.chart_TooltipHideLow = false;
                        countTooltioElements++;
                        break;
                    case "C":
                        clientStyle.chart_TooltipHideClose = false;
                        countTooltioElements++;
                        break;
                    case "V":
                        clientStyle.chart_TooltipHideVolume = false;
                        countTooltioElements++;
                        break;
                    case "N":
                        clientStyle.chart_TooltipHideNews = false;
                        countTooltioElements++;
                        break;
                }
            }
            clientStyle.chart_CustomTooltipTopPX = getTooltipCssTopInPx(countTooltioElements);
        }

        if (typeof (clientStyleOverwrite.news_ignoreNewsStoriesWithHeadline) != "undefined") {
            clientStyle.news_ignoreNewsStoriesWithHeadline = clientStyleOverwrite.news_ignoreNewsStoriesWithHeadline;
        }
        if (typeof (clientStyleOverwrite.lookup_excelTableStyle) != "undefined") {
            clientStyle.lookup_excelTableStyle = clientStyleOverwrite.lookup_excelTableStyle;
        }
        if (typeof (clientStyleOverwrite.lookup_excelPreHeader) != "undefined") {
            clientStyle.lookup_excelPreHeader = clientStyleOverwrite.lookup_excelPreHeader;
        }

        if (typeof (clientStyleOverwrite.flipDecimalAndThousandSeparators) != "undefined") {
            clientStyle.flipDecimalAndThousandSeparators = clientStyleOverwrite.flipDecimalAndThousandSeparators;

            if (clientStyle.flipDecimalAndThousandSeparators) {
                if (clientLocaleParameters.decimalSeparator == '.') {
                    clientLocaleParameters.decimalSeparator = ',';
                    clientLocaleParameters.decimalSeparator1000 = '.';
                } else {
                    clientLocaleParameters.decimalSeparator = '.';
                    clientLocaleParameters.decimalSeparator1000 = ',';
                }
            }

        }

        if (typeof (clientStyleOverwrite.manualTimeOffset) != "undefined") {
            clientStyle.manualTimeOffset = clientStyleOverwrite.manualTimeOffset;
        }

        if (typeof (clientStyleOverwrite.useRealtimeData) != "undefined") {
            clientStyle.useRealtimeData = clientStyleOverwrite.useRealtimeData;
        }



    }

    if (typeof ($('.IRChartColour').css('color')) != "undefined") {
        var rgbIRChartColour = $('.IRChartColour').css('color').match(/\d+/g);
        var hexIRChartColour = '#' + String('0' + Number(rgbIRChartColour[0]).toString(16)).slice(-2) + String('0' + Number(rgbIRChartColour[1]).toString(16)).slice(-2) + String('0' + Number(rgbIRChartColour[2]).toString(16)).slice(-2);
        clientStyle.chart_ColourMain = hexIRChartColour;
    }

    globalChartColours = [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'];

    if (typeof (clientStyleOverwrite) != "undefined") {
        if (typeof (clientStyleOverwrite.chart_Colours) != "undefined") {
            globalChartColours = clientStyleOverwrite.chart_Colours;
            globalChartColours[0] = clientStyle.chart_ColourMain;
        }
    }

}

function checkWidthAndReduceChartHeight(px) {
    //    // JRJR
    //    if (getWidth() < 400) {
    //        $(globalChartContainer).css('height', px + 'px');
    //        $('.IRChartPlaceholderArea').css('height', px + 'px');
    //        $('.IRChartPlaceholder').css('height', px + 'px');
    //        $('.highcharts-container').css('height', px + 'px');
    //    }
}
function getWidth() {
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    return x;
}
function getTooltipCssTopInPx(countTooltioElements) {
    debugStep("getTooltipCssTopInPx(" + countTooltioElements + ")");

    var retPX = 0;

    switch (countTooltioElements) {
        case 1:
            retPX = 33;
            break;
        case 2:
            retPX = 20;
            break;
        case 3:
            retPX = 5;
            break;
        case 4:
            retPX = -10;
            break;
        case 5:
            retPX = -23;
            break;
        case 6:
            retPX = -37;
            break;
    }



    //if (globalChartActiveDisplayMode == chartDisplayModes.tsr) {
    //    retPX = -10;
    //}


    return retPX;

}
function requestListingFromURL() {
    debugStep("requestListingFromURL");
    var getParams = location.search.substr(1).split("&")

    for (var i = 0; i < getParams.length; i++) {
        if (getParams[i].split("=")[0] == "listing") {
            globalActiveListingIndex = getParams[i].split("=")[1];
        }
    }
}
function initMomentTimezone() {
    debugStep("initMomentTimezones");
    /*
        Timezones
    */
    setExchangeShort(globalRawStockData[globalActiveListingIndex].exchangeName);
    switch (globalRawStockData[globalActiveListingIndex].exchangeName) {
        case 'London Stock Exchange':
        case 'Irish Stock Exchange':
        case 'ICAP Securities and Derivatives Exchange':
            moment.tz.add('Europe/Belfast|GMT BST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00');
            moment.tz.link('Europe/Belfast|Europe/London');
            globalActiveExchangeTimeZone = 'Europe/London';
            globalActiveLocalTimeZone = 'GMT Standard Time';
            globalActiveLocalTimeZoneShort = 'GMT';
            break;

        case 'EuroNext Stock Exchange':
        case 'EuroNext Indicies':
        case 'Euronext Stock Exchange':
        case 'Euronext Indicies':
        case 'OMX Nordic Equities':
        case 'OMX Nordic Indices':
        case 'Oslo Stock Exchange':
        case 'Xetra':
            moment.tz.add('Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00');
            globalActiveExchangeTimeZone = 'Europe/Berlin';
            globalActiveLocalTimeZone = 'Central European Standard Time';
            globalActiveLocalTimeZoneShort = 'CEST';
            break;

        case 'New York Stock Exchange':
        case 'Nasdaq':
            moment.tz.add('America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0');
            globalActiveExchangeTimeZone = 'America/New_York';
            globalActiveLocalTimeZone = 'Eastern Standard Time';
            globalActiveLocalTimeZoneShort = 'EST';
            break;

        case 'Hong Kong Exchange':
            moment.tz.add('Asia/Hong_Kong|LMT HKT HKST JST|-7A.G -80 -90 -90|0121312121212121212121212121212121212121212121212121212121212121212121|-2CFHA.G 1sEP6.G 1cL0 ylu 93X0 1qQu 1tX0 Rd0 1In0 NB0 1cL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1kL0 14N0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0');
            globalActiveExchangeTimeZone = 'Asia/Hong_Kong';
            globalActiveLocalTimeZone = 'China Standard Time';
            globalActiveLocalTimeZoneShort = 'CST';
            break;

        case 'Singapore Stock Exchange':
            moment.tz.add('Asia/Singapore|SMT MALT MALST MALT MALT JST SGT SGT|-6T.p -70 -7k -7k -7u -90 -7u -80|012345467|-2Bg6T.p 17anT.p 7hXE dM00 17bO 8Fyu Mspu DTA0');
            globalActiveExchangeTimeZone = 'Asia/Singapore';
            globalActiveLocalTimeZone = 'Singapore Standard Time';
            globalActiveLocalTimeZoneShort = 'SST';
            break;

        case 'Australian Stock Exchange':
            moment.tz.add('Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0');
            globalActiveExchangeTimeZone = 'Australia/Melbourne';
            globalActiveLocalTimeZone = 'AUS Eastern Standard Time';
            globalActiveLocalTimeZoneShort = 'AEST';
            break;

        case 'Tel Aviv Stock Exchange':
            moment.tz.add('Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|01212121212132121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0');
            globalActiveExchangeTimeZone = 'Asia/Jerusalem';
            globalActiveLocalTimeZone = 'Israel Standard Time';
            globalActiveLocalTimeZoneShort = 'IST';
            break;

        case 'Buenos Aires Stock Exchange':
            moment.tz.add('America/Argentina/Buenos_Aires|CMT ART ARST ART ARST|4g.M 40 30 30 20|0121212121212121212121212121212121212121213434343434343234343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 j3c0 uL0 1qN0 WL0');
            globalActiveExchangeTimeZone = 'America/Argentina/Buenos_Aires';
            globalActiveLocalTimeZone = 'Argentina Standard Time';
            globalActiveLocalTimeZoneShort = 'AST';
            break;

        case 'Kuwait Stock Exchange':
            moment.tz.add('Asia/Kuwait|LMT AST|-3b.U -30|01|-MG3b.U');
            globalActiveExchangeTimeZone = 'Asia/Kuwait';
            globalActiveLocalTimeZone = 'Arabian Standard Time';
            globalActiveLocalTimeZoneShort = 'AST';
            break;

        case 'Johannesburg Stock Exchange':
            moment.tz.add('Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0');
            globalActiveExchangeTimeZone = 'Africa/Johannesburg';
            globalActiveLocalTimeZone = 'South Africa Standard Time';
            globalActiveLocalTimeZoneShort = 'SAST';
            break;

        case 'New Zealand Stock Exchange':
            moment.tz.add('Antarctica/McMurdo|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00');
            moment.tz.link('Antarctica/McMurdo|Pacific/Auckland');
            globalActiveExchangeTimeZone = 'Pacific/Auckland';
            break;

        case 'Toronto Stock Exchange':
            moment.tz.add('America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0');
            moment.tz.link('America/Toronto|Canada/Eastern');
            globalActiveExchangeTimeZone = 'America/Toronto';
            break;

        case 'Milan Ced Borsa':
            moment.tz.add('Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2as10 M00 1cM0 1cM0 14o0 1o00 WM0 1qM0 17c0 1cM0 M3A0 5M20 WM0 1fA0 1cM0 16K0 1iO0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 Lz0 1C10 Lz0 1EN0 Lz0 1C10 Lz0 1zd0 Oo0 1C00 On0 1C10 Lz0 1zd0 On0 1C10 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00');
            globalActiveExchangeTimeZone = 'Europe/Rome';
            globalActiveLocalTimeZone = 'Central European Standard Time';
            break;

        case 'Canadian Venture Exchange':
            moment.tz.add('America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0');
            moment.tz.link('America/Vancouver|Canada/Pacific');
            globalActiveExchangeTimeZone = 'America/Vancouver';
            globalActiveLocalTimeZone = 'Pacific Daylight Time';
            break;

        default:
            debugError("initMomentTimezone() is missing configuration for [" + globalRawStockData[globalActiveListingIndex].exchangeName + "].");
            break;
    }

    if (clientStyle.manualTimeOffset > 0 || clientStyle.manualTimeOffset < 0) {
        moment.tz.add('Etc/UTC|UTC|0|0|');
        moment.tz.link('Etc/UTC|UTC');
        globalActiveExchangeTimeZone = 'Etc/UTC';
        globalActiveLocalTimeZone = '';
    } else {
        clientStyle.manualTimeOffset = 0;
    }

    globalActiveLocalTimeZoneShort = new moment.tz(globalActiveExchangeTimeZone).zoneAbbr();

}
function getExchangeCity(exchange) {
    var exchangeCity = "";
    switch (exchange) {
        case "OMX Nordic Equities":
            exchangeCity = "NASDAQ";
            break;
        case "London Stock Exchange":
            exchangeCity = "London";
            break;
        case 'Irish Stock Exchange':
            exchangeCity = "Dublin";
            break;
        case 'EuroNext Stock Exchange':
        case 'Euronext Stock Exchange':
            exchangeCity = "Euronext";
            break;
        case 'Oslo Stock Exchange':
            exchangeCity = "Oslo";
            break;
        case 'Xetra':
            exchangeCity = "Xetra";
            break;
        case 'New York Stock Exchange':
            exchangeCity = "New York";
            break;
        case 'Nasdaq':
            exchangeCity = "Nasdaq";
            break;
        case 'Hong Kong Exchange':
            exchangeCity = "Hong Kong";
            break;
        case 'Singapore Stock Exchange':
            exchangeCity = "Singapore";
            break;
        case 'Australian Stock Exchange':
            exchangeCity = "Sydney";
            break;
        case 'Tel Aviv Stock Exchange':
            exchangeCity = "Tel Aviv";
            break;
        case 'Buenos Aires Stock Exchange':
            exchangeCity = "Buenos Aires";
            break;
        case 'Kuwait Stock Exchange':
            exchangeCity = "Kuwait";
            break;
        case 'Nasdaq OTC Foreign':
            exchangeCity = "Nasdaq";
            break;
        default:
            debugError("getExchangeCity() is missing [" + exchange + "].");
            break;
    }
    return exchangeCity;
}
function getExchangeShort(exchange) {
    var exchangeShort = "";
    switch (exchange) {
        case "OMX Nordic Equities":
            exchangeShort = "NASDAQ OMX";
            break;
        case "London Stock Exchange":
            exchangeShort = "LSE";
            break;
        case 'Irish Stock Exchange':
            exchangeShort = "ISE";
            break;
        case 'EuroNext Stock Exchange':
        case 'Euronext Stock Exchange':
            exchangeShort = "Euronext";
            break;
        case 'Oslo Stock Exchange':
            exchangeShort = "OSE";
            break;
        case 'Xetra':
            exchangeShort = "Xetra";
            break;
        case 'New York Stock Exchange':
            exchangeShort = "NYSE";
            break;
        case 'Nasdaq':
            exchangeShort = "Nasdaq";
            break;
        case 'Hong Kong Exchange':
            exchangeShort = "HKEx";
            break;
        case 'Singapore Stock Exchange':
            exchangeShort = "SGX";
            break;
        case 'Australian Stock Exchange':
            exchangeShort = "ASX";
            break;
        case 'Tel Aviv Stock Exchange':
            exchangeShort = "TASE";
            break;
        case 'Buenos Aires Stock Exchange':
            exchangeShort = "BCBA";
            break;
        case 'Kuwait Stock Exchange':
            exchangeShort = "KSE";
            break;
        case 'Nasdaq OTC Foreign':
            exchangeShort = "NASDAQ OTC";
            break;
        case 'Johannesburg Stock Exchange':
            exchangeShort = "JSE";
            break;
        case 'New Zealand Stock Exchange':
            exchangeShort = "NZX";
            break;
        case 'Milan Ced Borsa':
            exchangeShort: "MIL";
            break;
        case 'ICAP Securities and Derivatives Exchange':
            exchangeShort: "ISDX";
            break;
        case 'Canadian Venture Exchange':
            exchangeShort: "CDNX";
            break;
        default:
            debugError("getExchangeShort() is missing [" + exchange + "].");
            break;
    }
    return exchangeShort;
}

function setExchangeShort(exchange) {
    var exchangeShort = getExchangeShort(exchange);
    globalListingsExchangeShort[globalActiveListingIndex] = exchangeShort;
}
function mergeLanguage(t) {
    debugStep("mergeLanguage");
    //
    //  Data from Service Enginge (requestTranslations) is merged with additionalTranslations.
    //  In case of dublicate keys, the Service Enginge data will overwrite additionalTranslations.
    //
    var additionalTranslations = {
        t_mid: 'Mid',
        t_timestamp: 'Updated', // Legacy
        t_from: 'From',
        t_to: 'To',
        t_buyer: 'Buyer',
        t_seller: 'Seller',
        t_searchFrom: 'Search from',
        t_searchTo: 'Search to',
        t_lookup: 'Lookup',
        t_searchFor: 'Search for',
        t_searchHere: 'Search here',
        t_searchIn: 'Search in',
        t_title: 'Title',
        t_titleOnly: 'Title Only',
        t_titleAndContent: 'Title and Content',
        t_allNewsTypes: 'All News Types',
        t_dateRange: 'Date Range',
        t_selectFromDate: 'Select from date',
        t_selectToDate: 'Select to date',
        t_download: 'Download',
        t_downloadFile: 'Download File',
        t_recordsPerPage: 'Records per page',
        t_today: 'Today',
        t_submit: 'Submit',
        t_close: 'Close',
        t_day: 'Day',
        t_current: 'Current'
    };
    translations = $.extend(additionalTranslations, t);
}
function manualOverwriteActiveLanguage() {
    debugStep("manualOverwriteActiveLanguage");
    //
    //  Todo: Should be removed
    //
    if (globalActiveLanguage != "en") {

        switch (globalActiveLanguage) {
            case 'da':
                translations.t_ask = "Udbud";
                translations.t_bid = "Bud";
                translations.t_change = "Ændring";
                translations.t_currency = "Kurs";
                translations.t_high = "Høj";
                translations.t_last = "Seneste";
                translations.t_low = "Lav";
                translations.t_name = "Navn";
                translations.t_symbol = "Symbol";
                translations.t_timestamp = "Opdateret";
                translations.t_tradePrice = "Handels Pris";
                translations.t_tradeVolume = "Handels Volumen";
                translations.t_type = "Type";
                translations.t_volume = "Volumen";
                translations.t_range1d = "1 d";
                translations.t_range5d = "5 d";
                translations.t_range3m = "3 m";
                translations.t_range6m = "6 m";
                translations.t_range1y = "1 å";
                translations.t_range2y = "2 å";
                translations.t_range5y = "5 å";
                translations.t_rangeMax = "Maks";
                translations.t_monday = "Mandas";
                translations.t_tuesday = "Tirsdag";
                translations.t_wednesday = "Onsdag";
                translations.t_thursday = "Torsdag";
                translations.t_friday = "Fredag";
                translations.t_saturday = "Lørdag";
                translations.t_sunday = "Søndag";
                break;

            case 'fr':
                translations.t_ask = "Vente";
                translations.t_bid = "Achat";
                translations.t_change = "Dernier";
                translations.t_currency = "Devise";
                translations.t_high = "Plus haut";
                translations.t_last = "Dernier prix";
                translations.t_low = "Plus bas";
                translations.t_name = "Name";
                translations.t_symbol = "Symbol";
                translations.t_updated = "Dernier Prix à";
                translations.t_tradePrice = "Trade Price";
                translations.t_tradeVolume = "Trade Volume";
                translations.t_type = "Type";
                translations.t_volume = "Volume";
                translations.t_range1d = "1 j";
                translations.t_range5d = "2 d";
                translations.t_range3m = "3 m";
                translations.t_range6m = "6 m";
                translations.t_range1y = "1 a";
                translations.t_range2y = "2 a";
                translations.t_range5y = "5 a";
                translations.t_rangeMax = "Max";
                //
                translations.t_monday = "Lundi";
                translations.t_tuesday = "Mardi";
                translations.t_wednesday = "Mercredi";
                translations.t_thursday = "Jeudi";
                translations.t_friday = "Vendredi";
                translations.t_saturday = "Samedi";
                translations.t_sunday = "Dimanche";

                break;
            case 'zh-cn':
                translations.t_ask = "索价";
                translations.t_bid = "出价";
                translations.t_change = "变动百分比";
                translations.t_currency = "货币";
                translations.t_high = "高";
                translations.t_last = "最新价格";
                translations.t_low = "低";
                translations.t_name = "Name";
                translations.t_symbol = "股票代码";
                translations.t_updated = "更新";
                translations.t_tradePrice = "Trade Price";
                translations.t_tradeVolume = "Trade Volume";
                translations.t_type = "Type";
                translations.t_volume = "成交量";
                translations.t_range1d = "1天";
                translations.t_range5d = "2天";
                translations.t_range3m = "3个月";
                translations.t_range6m = "6个月";
                translations.t_range1y = "1年";
                translations.t_range2y = "2年";
                translations.t_range5y = "5年";
                translations.t_rangeMax = "最长";

                translations.t_monday = "星期一";
                translations.t_tuesday = "星期二";
                translations.t_wednesday = "星期三";
                translations.t_thursday = "星期四";
                translations.t_friday = "星期五";
                translations.t_saturday = "星期六";
                translations.t_sunday = "星期日";
                break;
            default:

                break;
        }

    }
}
function updateChartHTMLLanguages() {
    debugStep("updateChartHTMLLanguages");
    //
    //  This should update all text strings in the chart (weekdays, months, symbols etc)
    //
    if (typeof (Highcharts) != "undefined") {

        var delimiter = ';';
        if (globalActiveLanguage == 'ar') {
            delimiter = '؛';
        }
        var months = translations.t_jan_feb_mar_apr_may_jun_jul_aug_sep_oct_nov_dec.split(delimiter);

        if (globalActiveLanguage == 'ar') {
            Highcharts.setOptions({
                lang: {
                    weekdays: [
                        translations.t_sunday,
                        translations.t_monday,
                        translations.t_tuesday,
                        translations.t_wednesday,
                        translations.t_thursday,
                        translations.t_friday,
                        translations.t_saturday
                    ],
                    months: [
                        translations.t_january,
                        translations.t_february,
                        translations.t_march,
                        translations.t_april,
                        translations.t_may,
                        translations.t_june,
                        translations.t_july,
                        translations.t_august,
                        translations.t_september,
                        translations.t_october,
                        translations.t_november,
                        translations.t_december
                    ],
                    shortMonths: [
                        months[0],
                        months[1],
                        months[2],
                        months[3],
                        months[4],
                        months[5],
                        months[6],
                        months[7],
                        months[8],
                        months[9],
                        months[10],
                        months[11]
                    ]
                }
            });
        }
        else {
            Highcharts.setOptions({
                lang: {
                    weekdays: [
                        translations.t_sunday,
                        translations.t_monday,
                        translations.t_tuesday,
                        translations.t_wednesday,
                        translations.t_thursday,
                        translations.t_friday,
                        translations.t_saturday
                    ],
                    months: [
                        translations.t_january.capitalizeFirstLetter(),
                        translations.t_february.capitalizeFirstLetter(),
                        translations.t_march.capitalizeFirstLetter(),
                        translations.t_april.capitalizeFirstLetter(),
                        translations.t_may.capitalizeFirstLetter(),
                        translations.t_june.capitalizeFirstLetter(),
                        translations.t_july.capitalizeFirstLetter(),
                        translations.t_august.capitalizeFirstLetter(),
                        translations.t_september.capitalizeFirstLetter(),
                        translations.t_october.capitalizeFirstLetter(),
                        translations.t_november.capitalizeFirstLetter(),
                        translations.t_december.capitalizeFirstLetter()
                    ],
                    shortMonths: [
                        months[0].capitalizeFirstLetter(),
                        months[1].capitalizeFirstLetter(),
                        months[2].capitalizeFirstLetter(),
                        months[3].capitalizeFirstLetter(),
                        months[4].capitalizeFirstLetter(),
                        months[5].capitalizeFirstLetter(),
                        months[6].capitalizeFirstLetter(),
                        months[7].capitalizeFirstLetter(),
                        months[8].capitalizeFirstLetter(),
                        months[9].capitalizeFirstLetter(),
                        months[10].capitalizeFirstLetter(),
                        months[11].capitalizeFirstLetter()
                    ]
                }
            });
        }
    }
}
function getChartDOM() {
    return $(globalChartContainer).highcharts();
}
function formatTooltipDate(dateIndex, data) {
    var date = "";
    switch (clientStyle.formatDate) {
        case "DD MMM":
        case "DD MMM YYYY":
            date = new moment(globalChartListingStockDataDates[globalActiveListingIndex][dateIndex]);
            return formatDateWithReplacedDate(date);
            break;
        case "DD-MMM-YYYY":
            date = new moment(globalChartListingStockDataDates[globalActiveListingIndex][dateIndex]);
            return formatDateWithReplacedDate(date).replace(' ', '-');
            break;
        case "DD/MMM/YYYY":
            date = new moment(globalChartListingStockDataDates[globalActiveListingIndex][dateIndex]);
            return formatDateWithReplacedDate(date).replace(' ', '/');
            break;
        case "DD MMMM YYYY":
        case "DD-MMMM-YYYY":
        case "DD/MMMM/YYYY":
            date = new moment(globalChartListingStockDataDates[globalActiveListingIndex][dateIndex]);
            return formatDateWithFormat(date, clientStyle.formatDate);
            break;
        case "DD.MM.YYYY":
        case "DD/MM/YYYY":
        case "DD MM YYYY":
        case "DD-MM-YYYY":
        case "MM/DD/YYYY":
        case "MM-DD-YYYY":
        case "MM.DD.YYYY":
        case "MM DD YYYY":
        case "YYYY-MM-DD":
        case "YYYY MM DD":

            // return wihtout replaced day or month strings.
            break;
        default:
            debugError("formatTooltipDate is missing support for dateFormat for clientStyle.formatDate (" + clientStyle.formatDate + ")");
            break;
    }
    try {
        return new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate);
    }
    catch (err) {
        return new moment().format(clientStyle.formatDate);
    }

}
function formatTooltipDateWithData(dataAtIndex) {
    var date = "";
    switch (clientStyle.formatDate) {
        case "DD MMM":
        case "DD MMM YYYY":
            date = new moment(dataAtIndex);
            return formatDateWithReplacedDate(date);
            break;
        case "DD-MMM-YYYY":
            date = new moment(dataAtIndex);
            return formatDateWithReplacedDate(date).replace(' ', '-');
            break;
        case "DD/MMM/YYYY":
            date = new moment(dataAtIndex);
            return formatDateWithReplacedDate(date).replace(' ', '/');
            break;
        case "DD.MM.YYYY":
        case "DD/MM/YYYY":
        case "DD MM YYYY":
        case "DD-MM-YYYY":

        case "YYYY-MM-DD":
        case "YYYY MM DD":
        case "DD MMMM YYYY":
        case "DD-MMMM-YYYY":

            // return wihtout replaced day or month strings.
            break;
        default:
            debugError("formatTooltipDate is missing support for dateFormat for clientStyle.formatDate (" + clientStyle.formatDate + ")");
            break;
    }
    return new moment(dataAtIndex).format(clientStyle.formatDate);
}
function formatTooltipDateTime(dateIndex, data) {
    var date = "";
    switch (clientStyle.formatDateTime) {
        case "DD MMM YYYY HH:mm":
        case "DD-MMM-YYYY HH:mm":
        case "DD/MMM/YYYY HH:mm":
            date = new moment.tz(data[globalActiveListingIndex][dateIndex][0], globalActiveExchangeTimeZone); //.add(clientStyle.manualTimeOffset, 'hours')
            return formatDateWithReplacedDate(date);
            break;
        case "DD/MM/YYYY HH:mm":
        case "DD MM YYYY HH:mm":
        case "DD-MM-YYYY HH:mm":
        case "YYYY-MM-DD HH:mm":
        case "YYYY MM DD HH:mm":
            // return wihtout replaced day or month strings.
            break;
        default:
            debugError("formatTooltipDateTime is missing support for dateFormat for clientStyle.formatDate (" + clientStyle.formatDateTime + ")");
            break;
    }
    //return new moment(data[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDateTime);
    return new moment.tz(data[globalActiveListingIndex][dateIndex][0], globalActiveExchangeTimeZone).format(clientStyle.formatDateTime); //.add(clientStyle.manualTimeOffset, 'hours')




}
function formatDateWithReplacedDate(date) {
    var monthShorts = translations.t_jan_feb_mar_apr_may_jun_jul_aug_sep_oct_nov_dec.split(';');

    if (globalChartActiveDisplayMode == chartDisplayModes.historical) {
        var dateRet = date.format(clientStyle.formatDate).toLowerCase();

        switch (date.format("MMM").toLowerCase()) {
            case "jan":
                dateRet = dateRet.replace("jan", monthShorts[0].capitalizeFirstLetter());
                break;
            case "feb":
                dateRet = dateRet.replace("feb", monthShorts[1].capitalizeFirstLetter());
                break;
            case "mar":
                dateRet = dateRet.replace("mar", monthShorts[2].capitalizeFirstLetter());
                break;
            case "apr":
                dateRet = dateRet.replace("apr", monthShorts[3].capitalizeFirstLetter());
                break;
            case "may":
                dateRet = dateRet.replace("may", monthShorts[4].capitalizeFirstLetter());
                break;
            case "jun":
                dateRet = dateRet.replace("jun", monthShorts[5].capitalizeFirstLetter());
                break;
            case "jul":
                dateRet = dateRet.replace("jul", monthShorts[6].capitalizeFirstLetter());
                break;
            case "aug":
                dateRet = dateRet.replace("aug", monthShorts[7].capitalizeFirstLetter());
                break;
            case "sep":
                dateRet = dateRet.replace("sep", monthShorts[8].capitalizeFirstLetter());
                break;
            case "oct":
                dateRet = dateRet.replace("oct", monthShorts[9].capitalizeFirstLetter());
                break;
            case "nov":
                dateRet = dateRet.replace("nov", monthShorts[10].capitalizeFirstLetter());
                break;
            case "dec":
                dateRet = dateRet.replace("dec", monthShorts[11].capitalizeFirstLetter());
                break;
        }
    } else if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
        var dateRet = date.format(clientStyle.formatDateTime).toLowerCase();
        switch (date.format("MMM").toLowerCase()) {
            case "jan":
                dateRet = dateRet.replace("jan", monthShorts[0].capitalizeFirstLetter());
                break;
            case "feb":
                dateRet = dateRet.replace("feb", monthShorts[1].capitalizeFirstLetter());
                break;
            case "mar":
                dateRet = dateRet.replace("mar", monthShorts[2].capitalizeFirstLetter());
                break;
            case "apr":
                dateRet = dateRet.replace("apr", monthShorts[3].capitalizeFirstLetter());
                break;
            case "may":
                dateRet = dateRet.replace("may", monthShorts[4].capitalizeFirstLetter());
                break;
            case "jun":
                dateRet = dateRet.replace("jun", monthShorts[5].capitalizeFirstLetter());
                break;
            case "jul":
                dateRet = dateRet.replace("jul", monthShorts[6].capitalizeFirstLetter());
                break;
            case "aug":
                dateRet = dateRet.replace("aug", monthShorts[7].capitalizeFirstLetter());
                break;
            case "sep":
                dateRet = dateRet.replace("sep", monthShorts[8].capitalizeFirstLetter());
                break;
            case "oct":
                dateRet = dateRet.replace("oct", monthShorts[9].capitalizeFirstLetter());
                break;
            case "nov":
                dateRet = dateRet.replace("nov", monthShorts[10].capitalizeFirstLetter());
                break;
            case "dec":
                dateRet = dateRet.replace("dec", monthShorts[11].capitalizeFirstLetter());
                break;
        }
    }
    else {
        var dateRet = date.format(clientStyle.formatDateTime).toLowerCase();
        //dateRet = dateRet.replace("dec", translations.t_dec_short.capitalizeFirstLetter());
    }
    return dateRet;
}
function getTooltipStrSubHistorical(dateIndex) {
    var tooltipStr = "";
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideDate) {
    }
    else {
        //if (typeof (globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex]) != 'undefined') {
        tooltipStr += "<div class=\"IRChartTooltipDate\">" + formatTooltipDate(dateIndex, globalChartListingStockDataDates) + "</div>"; //tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
        //}
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideOpen) {
    }
    else {
        // if (typeof (globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex]) != 'undefined') {
        tooltipStr += "<div class=\"IRChartTooltipOpen\"><span class=\"subHeader\">" + getOHLCfromTranslations('o') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
        //}
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideHigh) {
    }
    else {
        // if (typeof (globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex]) != 'undefined') {
        tooltipStr += "<div class=\"IRChartTooltipHigh\"><span class=\"subHeader\">" + getOHLCfromTranslations('h') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
        //}
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideLow) {
    }
    else {
        //if (typeof (globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex]) != 'undefined') {
        tooltipStr += "<div class=\"IRChartTooltipLow\"><span class=\"subHeader\">" + getOHLCfromTranslations('l') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
        //}
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideClose) {
    }
    else {
        //if (typeof (globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex]) != 'undefined') {
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
        //}
        //tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex].closePrice) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideVolume) {
    }
    else {
        //if (typeof (globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex]) != 'undefined') {
        tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
        // }
        //tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex].volume) + "</div>";
    }
    return tooltipStr;
}
function getTooltipStrSubIntraday(dateIndex) {
    var tooltipStr = "";
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideDate) {
    }
    else {
        tooltipStr += "<div class=\"IRChartTooltipDate\">" + formatTooltipDateTime(dateIndex, globalChartListingIntradayDataOHLCV) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideOpen) {
    }
    else {
        tooltipStr += "<div class=\"IRChartTooltipOpen\"><span class=\"subHeader\">" + getOHLCfromTranslations('o') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideHigh) {
    }
    else {
        tooltipStr += "<div class=\"IRChartTooltipHigh\"><span class=\"subHeader\">" + getOHLCfromTranslations('h') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</span></div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideLow) {
    }
    else {
        tooltipStr += "<div class=\"IRChartTooltipLow\"><span class=\"subHeader\">" + getOHLCfromTranslations('l') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</span></div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideClose) {
    }
    else {
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</span></div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideVolume) {
    }
    else {
        tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span></div>";
    }
    return tooltipStr;
}
function getTooltipStrSubTSR(dateIndex) {
    var tooltipStr = "";
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideDate) {
    }
    else {
        tooltipStr += "<div class=\"IRChartTooltipDate\">" + new moment(IRChartTSR.stockDataTSRClone[dateIndex][0]).format(clientStyle.formatDate) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideClose) {
    }
    else {
        //tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(IRChartTSR.stockDataCloneClose[dateIndex][1]) + "</div>";

    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideClose) {
    }
    else {
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + translations.t_tsr + "</span><span class=\"subContent\">" + formatDecimal(IRChartTSR.stockDataTSRClone[dateIndex][1]) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideVolume) {
    }
    else {
        tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
    }
    return tooltipStr;
}

function find_longest_width() {

    //var arr = globalChartListingStockDataOHLCV;

    //var result = [];
    //arr.forEach(function (el, i, array) {
    //    var a = [];
    //    el.forEach(function (el2, i2, array2) {
    //        a.push(el2.slice(1, 6));
    //    })
    //    result.push(a);
    //});


    //var max = 0;
    //for (var i = 0; i < result[0].length; i++) {
    //    for (var j = 0; j < result[0][i].length; j++) {
    //        var currentItem = result[0][i][j];
    //        if (currentItem > max) {
    //            max = currentItem;
    //        }
    //    }
    //}

    //var LETTER_CSS_WIDTH = 7;
    //var AMOUNT_OF_LETTERS_IN_BIGGEST_NUMBER = (max + '').length + 1;
    //var FINAL_WIDTH = AMOUNT_OF_LETTERS_IN_BIGGEST_NUMBER * LETTER_CSS_WIDTH;

    //$('.tooltipHTML div span.subContent').css("width", FINAL_WIDTH);

    //var maxWidth = 0;
    //$('.tooltipHTML div span.subHeader').each(function () {
    //    var itemWidth = $(this).outerWidth(true);
    //    maxWidth = Math.max(maxWidth, itemWidth)
    //});

    //$('.tooltipHTML div span.subHeader').css("width", maxWidth + 10);
    //var TooltipWrapWidth = $('.IRChartTooltipWrap').width();
    //var TooltipDateWidth = $('.IRChartTooltipDate').width();

    //var sum = FINAL_WIDTH + maxWidth;

    //if (sum > TooltipDateWidth) {
    //    //$('.tooltipHTML').css("width", sum + 30);
    //    return sum + 30;
    //} else {
    //    $('.tooltipHTML').css("width", TooltipDateWidth);
    //    return TooltipDateWidth;
    //}
}
function updateTooltipDOHLCV(date) {
    debugStep("updateTooltipDOHLCV");
    var dateIndex;
    var value = "-";
    var tooltipStr = "";
    var tooltipStrSub = "";
    if (globalChartUseCustomTooltipContent) {
        tooltipStr = "<div class=\"tooltipHTML " + globalHTMLReadingDirection + " useFullOHLC" + clientStyle.chart_CustomTooltipUseFullOHLCV + " tooltipMode" + globalChartActiveDisplayMode + "\" style=\"top: " + clientStyle.chart_CustomTooltipTopPX + "px;\">";
    } else {
        tooltipStr = "<div class=\"tooltipHTML tooltipMode" + chartDisplayModes.historical + " htmlReadingDirection" + globalHTMLReadingDirection + "\" dir=\"" + globalHTMLReadingDirection.toLowerCase() + "\">";
    }
    switch (globalChartActiveDisplayMode) {
        case chartDisplayModes.historical:

            dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
            if (dateIndex == -1) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                if (dateIndex == -1) {
                    debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
                }
            }
            tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
            break;

        case chartDisplayModes.intraday:

            dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
            if (dateIndex == -1) {
                dateIndex = getClosestDateIndexForListingIntraday(date);
                if (dateIndex == -1) {
                    debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
                }
            }
            tooltipStrSub += getTooltipStrSubIntraday(dateIndex);
            break;

        case chartDisplayModes.tsr:

            var TSRDateIndex = IRChartTSR.stockDataTSRCloneDates.indexOf(date);
            if (TSRDateIndex == -1) {
                TSRDateIndex = getClosestDateIndexForListingTSR(date);
                if (dateIndex == -1) {
                    debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
                }
            }
            tooltipStrSub += getTooltipStrSubTSR(TSRDateIndex);
            break;
    }
    tooltipStr += tooltipStrSub;
    tooltipStr += "</div>";
    return tooltipStr;
}
function updateTooltipDOHLCVN(date) {
    debugStep("updateTooltipDOHLCVN");
    var dateIndex;
    var newsIndex;
    var value = "-";
    var tooltipStr = "";
    if (globalChartUseCustomTooltipContent) {
        tooltipStr = "<div class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode useFullOHLC" + clientStyle.chart_CustomTooltipUseFullOHLCV + "\" style=\"top: " + clientStyle.chart_CustomTooltipTopPX + "px;\" >";
    } else {
        tooltipStr = "<div class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode useFullOHLC" + clientStyle.chart_CustomTooltipUseFullOHLCV + "\">";
    }
    var tooltipStrSub = "";
    switch (globalChartActiveDisplayMode) {
        case chartDisplayModes.historical:

            dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
            if (dateIndex == -1) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                if (dateIndex == -1) {
                    debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
                }
            }
            tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
            //try {
            //    dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
            //    tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
            //}
            //catch (err) {
            //    tooltipStrSub = "";
            //    dateIndex = getClosestDateIndexForListingClosePrice(date);
            //    tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
            //}
            break;
        case chartDisplayModes.intraday:
            dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
            if (dateIndex == -1) {
                dateIndex = getClosestDateIndexForListingIntraday(date);
                if (dateIndex == -1) {
                    debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
                }
            }
            tooltipStrSub += getTooltipStrSubIntraday(dateIndex);
            //try {
            //    dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
            //    tooltipStrSub += getTooltipStrSubIntraday(dateIndex);
            //}
            //catch (err) {
            //    dateIndex = getClosestDateIndexForListingIntraday(date);
            //    tooltipStrSub += getTooltipStrSubIntraday(dateIndex);
            //}
            break;
        case chartDisplayModes.tsr:

            var TSRDateIndex = IRChartTSR.stockDataTSRCloneDates.indexOf(date);
            if (TSRDateIndex == -1) {
                TSRDateIndex = getClosestDateIndexForListingTSR(date);
                if (dateIndex == -1) {
                    debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
                }
            }
            tooltipStrSub += getTooltipStrSubTSR(TSRDateIndex);
            //var TSRDateIndex;
            //try {
            //    TSRDateIndex = IRChartTSR.stockDataTSRCloneDates.indexOf(date);
            //    tooltipStrSub += getTooltipStrSubTSR(TSRDateIndex);
            //} catch (err) {
            //    TSRDateIndex = getClosestDateIndexForListingTSR(date);
            //    tooltipStrSub += getTooltipStrSubTSR(TSRDateIndex);
            //}
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
function updateTooltipDOHLCVNPressRelease(date) {
    debugStep("updateTooltipDOHLCVNPressRelease");
    var dateIndex;
    var newsIndex;
    var value = "-";
    var tooltipStr = "<div class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode\">";
    var tooltipStrSub = "";
    switch (globalChartActiveDisplayMode) {
        case chartDisplayModes.historical:
            dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
            if (dateIndex == -1) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                if (dateIndex == -1) {
                    debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
                }
            }
            tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
            break;
        case chartDisplayModes.intraday:
            dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
            if (dateIndex == -1) {
                dateIndex = getClosestDateIndexForListingIntraday(date);
                if (dateIndex == -1) {
                    debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
                }
            }
            tooltipStrSub += getTooltipStrSubIntraday(dateIndex);
            break;
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
    if (useIRChartPressReleaseIRChartHeadline || useIRChartPressRelease) {
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
function chartOpenNewsFromFlag(item) {
    //window.open('http://' + getPathToSolution() + 'newsArticle.aspx?storyID=' + item.storyID);
    window.open(getNewsArticlePath() + '?solutionID=' + getSolutionID() + '&customerKey=' + getCustomerKeyRequired() + '&storyID=' + item.storyID);

}
function chartOpenPressReleaseFromURL(url) {
    window.open(url);
}
function getOHLCfromTranslations(getWhat) {
    var ohlcChars = translations.t_ohlc.split('');

    var localVolumeTranslation = "";

    if (translations.t_v == 'undefined') {
        localVolumeTranslation = "V";
    } else {
        localVolumeTranslation = translations.t_v;
    }
    //
    //  The translation from London Translations is different on Hebrew.
    //  translations.t_ohlc = 'Chart O-H-L-C'
    //
    if (globalActiveLanguage == "he" && translations.t_ohlc != 'OHLC') {

        ohlcChars = translations.t_ohlc.split(' ');
        ohlcChars = ohlcChars[1].split('-');
    }

    if (clientStyle.chart_CustomTooltipUseFullOHLCV) {
        ohlcChars[0] = translations.t_open;
        ohlcChars[1] = translations.t_high;
        ohlcChars[2] = translations.t_low;
        ohlcChars[3] = translations.t_close;
        localVolumeTranslation = translations.t_volume;
    }

    switch (getWhat) {
        case "o":
            return ohlcChars[0];
            break;
        case "h":
            return ohlcChars[1];
            break;
        case "l":
            return ohlcChars[2];
            break;
        case "c":
            return ohlcChars[3];
        case "v":
            return localVolumeTranslation;
            break;
    }
}
function getPathToSolution() {
    return getHost() + '/solutions/' + getCustomerKeyRequired() + '/' + getSolutionID() + '/';
}

function updateTooltipLookup(date) {
    debugStep("updateTooltipLookup");
    var dateIndex;
    var value = "-";

    var tooltipStr = "";
    var tooltipStrSub = "";

    clientStyle.chart_CustomTooltipTopPX = -72;

    tooltipStr = "<div class=\"tooltipHTML tooltipMode" + chartDisplayModes.historical + " htmlReadingDirection" + globalHTMLReadingDirection + "\" dir=\"" + globalHTMLReadingDirection.toLowerCase() + "\" style=\"top: " + clientStyle.chart_CustomTooltipTopPX + "px;\">";

    globalChartUseCustomTooltipContent = true;
    clientStyle.chart_TooltipHideDate = false;
    clientStyle.chart_TooltipHideClose = false;
    clientStyle.chart_TooltipHideVolume = false;

    try {
        dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
        tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
    }
    catch (err) {
        tooltipStrSub = "";
        dateIndex = getClosestDateIndexForListingClosePrice(date);
        tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
    }

    tooltipStr += tooltipStrSub;
    tooltipStr += "</div>";

    return tooltipStr;
}
function updateTooltipCalc(date, stockData) {
    debugStep("updateTooltipCalc");
    var dateIndex;
    var value = "-";

    var tooltipStr = "";
    var tooltipStrSub = "";

    clientStyle.chart_CustomTooltipTopPX = -72;

    tooltipStr = "<div class=\"tooltipHTML tooltipMode" + chartDisplayModes.historical + " htmlReadingDirection" + globalHTMLReadingDirection + "\" dir=\"" + globalHTMLReadingDirection.toLowerCase() + "\" style=\"top: " + clientStyle.chart_CustomTooltipTopPX + "px;\">";

    globalChartUseCustomTooltipContent = true;
    clientStyle.chart_TooltipHideDate = false;
    clientStyle.chart_TooltipHideClose = false;
    clientStyle.chart_TooltipHideVolume = false;

    try {
        dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
        tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
    }
    catch (err) {
        tooltipStrSub = "";
        dateIndex = getClosestDateIndexForListingClosePrice(date);
        tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
    }

    tooltipStr += tooltipStrSub;
    tooltipStr += "</div>";

    return tooltipStr;
}
function updateTooltipDCV(date) {
    debugStep("updateTooltipDCV");
    var dateIndex;
    var value = "-";
    var tooltipStr = "<div class=\"tooltipHTML\" htmlReadingDirection" + globalHTMLReadingDirection + "\" dir=\"" + globalHTMLReadingDirection.toLowerCase() + "\">";
    switch (globalChartActiveDisplayMode) {
        case chartDisplayModes.historical:
            try {
                dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {
                var newDateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('c') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][4]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('v') + " " + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][5]) + "</div>";
            }
            break;
        case chartDisplayModes.intraday:
            try {
                dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";

                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";

            }
            catch (err) {
                var newDateIndex = getClosestDateIndexForListingIntraday(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][newDateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('c') + " " + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][newDateIndex][4]) + "</div>";

                tooltipStr += "<div>" + getOHLCfromTranslations('v') + " " + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][newDateIndex][5]) + "</div>";
            }
            break;
    }
    tooltipStr += "</div>";
    //var dateIndex;
    //var value = "-";
    //var tooltipStr = "<div class=\"tooltipHTML\">";
    //switch (globalChartActiveDisplayMode) {
    //    case chartDisplayModes.historical:
    //        try {
    //            dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
    //            tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
    //            tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
    //            tooltipStr += "<div><span class=\"subHeader\">V:</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
    //        }
    //        catch (err) {
    //            var newDateIndex = getClosestDateIndexForListingClosePrice(date);
    //            tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][0]).format(clientStyle.formatDate) + "</div>";
    //            tooltipStr += "<div>" + getOHLCfromTranslations('c') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][4]) + "</div>";
    //            tooltipStr += "<div>V: " + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][5]) + "</div>";
    //        }
    //        break;
    //}
    //tooltipStr += "</div>";
    return tooltipStr;
    //$('.highcharts-tooltip').html(tooltipStr);
}
function getIndexForMatchingDate(data, pickedDate) {
    // Get the data opbject for the matching date.
}

function updateChartNavBarRange(module) {
    debugStep("updateChartNavBarRange");

    switch (module) {
        case 'IRChartHTML':
            if (typeof ($('.chartChangePeriod')) != "undefined") {
                $('.chartChangePeriod div, .IRChartChangePeriod div').click(function () {
                    //clickedChartPeriod($(this).attr('id'));
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

                    updateActiveChartNavBarRangePeriod(e);

                    if (days > 0) {
                        stateNewHistoricalPeriodSelected(days);
                    }

                    if (hours > 0) {
                        stateNewIntradayPeriodSelected(hours);
                    }

                });
            }
            break;
        case 'IRChart':
            if (typeof ($('.chartChangePeriod')) != "undefined") {
                $('.chartChangePeriod div, .IRChartChangePeriod div').click(function () {
                    //clickedChartPeriod($(this).attr('id'));
                    var days = -1;
                    var hours = -1;
                    var e = $(this).attr('id');

                    globalActivePeriod = e;

                    switch (e.toLowerCase()) {
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

                    updateActiveChartNavBarRangePeriod(e);

                    if (days > 0) {
                        stateNewHistoricalPeriodSelected(days);
                    }


                    if (hours > 0) {
                        if (globalChartActiveDisplayMode != chartDisplayModes.comparison) {
                            stateNewIntradayPeriodSelected(hours);
                        }
                    }


                });
            }
            break;
    }
}
function updateActiveChartNavBarRangePeriod(period) {
    debugStep("updateActiveChartNavBarRangePeriod");
    if (globalChartActiveDisplayMode == chartDisplayModes.comparison) {
        if (period != 'd1' && period != 'd5') {
            $('div.chartChangePeriod div').removeClass('activePeriod');
            $('div.chartChangePeriod div#' + period).addClass('activePeriod');

            $('div.IRChartChangePeriod div').removeClass('activePeriod');
            $('div.IRChartChangePeriod div#' + period).addClass('activePeriod');
        }
    } else {
        $('div.chartChangePeriod div').removeClass('activePeriod');
        $('div.chartChangePeriod div#' + period).addClass('activePeriod');

        $('div.IRChartChangePeriod div').removeClass('activePeriod');
        $('div.IRChartChangePeriod div#' + period).addClass('activePeriod');
    }
}
function updateIRChartChangeListing() {
    debugStep("updateIRChartChangeListing");
    var element = $('.IRChartChangeListing');
    var subElements = "";
    for (var i = 0; i < globalAmountOfListings; i++) {

        var addClass = '';
        if (i == globalActiveListingIndex) {
            addClass = 'selected="selected"';
        }
        subElements += "<option value=\"" + i + "\"" + addClass + ">" + globalRawStockData[i].symbol + " - " + globalRawStockData[i].exchangeName + "</option>";
    }
    element.html("<select class=\"form-control\">" + subElements + "</select>");
}
function updateIRChangeListingEl(classEl) {
    debugStep("updateIRChangeListing");
    //var element = $('.' + classEl);
    //var subElements = "";
    //for (var i = 0; i < globalAmountOfListings; i++) {

    //    var addClass = '';
    //    if (i == globalActiveListingIndex) {
    //        addClass = 'selected="selected"';
    //    }
    //    subElements += "<option value=\"" + i + "\"" + addClass + ">" + globalRawStockData[i].symbol + " - " + globalRawStockData[i].exchangeName + "</option>";
    //}
    //element.html("<select class=\"form-control\">" + subElements + "</select>");
}
function updateIRChangeListing() {
    debugStep("updateIRChangeListing");
    var element = $('.IRChangeListing');
    var subElements = "";
    for (var i = 0; i < globalAmountOfListings; i++) {
        var addClass = '';
        if (i == globalActiveListingIndex) {
            addClass = 'selected="selected"';
        }
        switch (clientStyle.selectIRChangeListingFormat) {
            case "ExchangeCity-Symbol":
                subElements += "<option value=\"" + i + "\"" + addClass + ">" + getExchangeCity(globalRawStockData[i].exchangeName) + " " + globalRawStockData[i].symbol + "</option>";
                break;
            default:
                subElements += "<option value=\"" + i + "\"" + addClass + ">" + globalRawStockData[i].symbol + " - " + globalRawStockData[i].exchangeName + "</option>";
                break;
        }
    }
    element.html("<select class=\"form-control\">" + subElements + "</select>");
}

function attachClickHandlers(module) {
    debugStep("attachClickHandlers(" + module + ")");

    if (useIRChartCompare) {
        if (!chartEnabledClickHandlers.chartNavigationComparison) {
            if (typeof ($('.IRChartNavigation .IRChartComparison.IRChartComparisonHeader')) == 'object') {
                $('.IRChartComparisonHeader').click(function () {
                    debugStep("clicked '.IRChartComparisonHeader' in attachClickHandlers");
                    if ($('.IRChartComparison .IRChartComparisonBody').css('display') == 'block') {
                        $('.IRChartNavigation .IRChartTAHeader').removeClass('active');
                        $('.IRChartComparison .IRChartComparisonBody').css('display', 'none');
                    } else {
                        $(this).parent().addClass('active');
                        IRChartNavigationCloseOpenBodyDivs();
                        $('.IRChartComparison .IRChartComparisonBody').css('display', 'block');
                    }
                });
            }
            chartEnabledClickHandlers.chartNavigationComparison = true;
        }

        if (module == "IRChartComparison") {
            if (!chartEnabledClickHandlers.chartNavigationComparisonBodyList) {
                if (typeof ($('.IRChartComparison .IRChartComparisonBodyList .basicButtonLook')) == 'object') {
                    $('.IRChartComparisonBodyList .basicButtonLook').click(function () {
                        debugStep("clicked '.IRChartComparisonBodyList .basicButtonLook' in attachClickHandlers");
                        if ($(this).attr('id') == 'IRChartNavigationClearComparison') {

                        } else if ($(this).hasClass('IRChartNavigationCurrencyConversion')) {

                            if (!chartEnabledClickHandlers.chartNavigationCurrencyConversionAdjustedPrice) {

                                $('#comparisonList_IRChartCurrencyConversionAdjustedPrice').css('display', 'block');
                                $('#comparisonList_IRChartCurrencyConversionAdjustedPrice span.updateCurrencyConversionAdjustedPrice').on('click', function () {
                                    debugStep("clicked '#comparisonList_IRChartCurrencyConversionAdjustedPrice span.updateCurrencyConversionAdjustedPrice' in attachClickHandlers");
                                    var currencyTo = $('#comparisonList_IRChartCurrencyConversionAdjustedPrice select.currencyConversionTo').val();
                                    updateIRChartCurrencyConversion('updateCurrencyConversionAdjustedPrice', currencyTo);
                                });

                                chartEnabledClickHandlers.chartNavigationCurrencyConversionAdjustedPrice = true;
                            }
                        } else {
                            var type = $(this).attr('id').split("_")[0];
                            var id = $(this).attr('id').split("_")[1];
                            var uniqueID = $(this).attr('id').split("_")[2];
                            updateComparison(type, id, uniqueID, $(this));
                        }
                    });
                    $('#IRChartNavigationClearComparison').click(function () {
                        debugStep("clicked '#IRChartNavigationClearComparison' in attachClickHandlers");
                        resetIRChart();
                    });
                    $('.IRChartComparisonPlaceholder .ComparisonOff').click(function () {
                        debugStep("clicked '.IRChartComparisonPlaceholder .ComparisonOff' in attachClickHandlers");
                        $('#' + $(this).attr('id')).removeClass('active');
                        var type = $(this).attr('id').split("_")[0];
                        var id = $(this).attr('id').split("_")[1];
                        var uniqueID = $(this).attr('id').split("_")[2];
                        updateComparison(type, id, uniqueID, $(this));
                    });
                    chartEnabledClickHandlers.chartNavigationComparisonBodyList = true;
                }
            }

            if (typeof ($('.IRChartChangeListing')) != "undefined") {
                $('.IRChartChangeListing select').bind('change', function () {
                    debugStep("changed '.IRChartChangeListing select' in attachClickHandlers");
                    globalActiveListingIndex = parseInt($(this).val());
                    initMomentTimezone();
                    buildQuoteTable();
                    resetIRChart();
                    updateActiveChartNavBarRangePeriod(globalActivePeriod);

                    // JRJR (Reset chart)
                    //globalActiveListingIndex = parseInt($(this).val());
                    //initMomentTimezone();
                    //buildQuoteTable();
                    //redrawIRChartHTMLHistorical();
                    //updateActiveChartNavBarRangePeriod(globalActivePeriod);
                });
            }

        }

        IRChartNavigationShowHide('IRChartComparisonBody');
    }

    if (useIRChartTA) {
        if (!chartEnabledClickHandlers.chartNavigationTA) {

            $('.IRChartTAHeader').click(function () {
                debugStep("clicked '.IRChartTAHeader' in attachClickHandlers");
                if ($('.IRChartTA .IRChartTABody').css('display') == 'block') {

                    $('.IRChartNavigation .IRChartComparison').removeClass('active');
                    //$(this).parent().removeClass('active');
                    $('.IRChartTA .IRChartTABody').css('display', 'none');

                } else {
                    $(this).parent().addClass('active');
                    IRChartNavigationCloseOpenBodyDivs();
                    $('.IRChartTA .IRChartTABody').css('display', 'block');
                }
            });

            chartEnabledClickHandlers.chartNavigationTA = true;

            if (typeof ($('.IRChartTA #IRChartNavigationClearTA')) == 'object') {
                $('.IRChartTABodyList .basicButtonLook').click(function () {
                    debugStep("clicked '.IRChartTABodyList .basicButtonLook' in attachClickHandlers");
                    updateTechnicalAnalysis($(this).attr('id'));
                });
                $('#IRChartNavigationClearTA').click(function () {
                    debugStep("clicked '#IRChartNavigationClearTA' in attachClickHandlers");
                    resetIRChart();
                });
            }
        }
        IRChartNavigationShowHide('IRChartTABody');
    }

    if (useIRChartTechnicalAnalysis) {
        if (!chartEnabledClickHandlers.chartNavigationTechnicalAnalysis) {

            $('.IRChartTechnicalAnalysisControlsPlaceholder .IRChartTA').click(function () {
                debugStep("clicked '.IRChartTechnicalAnalysisControlsPlaceholder .IRChartTA' in attachClickHandlers");
                IRChartTechnicalAnalysis.updateTechnicalAnalysis($(this).attr('id'));
            });

            $('.IRChartTAHeader').click(function () {
                debugStep("clicked '.IRChartTAHeader' in attachClickHandlers");
                if ($('.IRChartTA .IRChartTABody').css('display') == 'block') {

                    $('.IRChartNavigation .IRChartComparison').removeClass('active');
                    $('.IRChartTA .IRChartTABody').css('display', 'none');

                } else {
                    $(this).parent().addClass('active');
                    IRChartNavigationCloseOpenBodyDivs();
                    $('.IRChartTA .IRChartTABody').css('display', 'block');
                }
            });

            $('.IRChartTABodyList .basicButtonLook').click(function () {
                debugStep("clicked '.IRChartTABodyList .basicButtonLook' in attachClickHandlers");
                IRChartTechnicalAnalysis.updateTechnicalAnalysis($(this).attr('id'));
            });

            chartEnabledClickHandlers.chartNavigationTechnicalAnalysis = true;
        }
        IRChartNavigationShowHide('IRChartTABody');
    }

    if (useIRChartTSR) {
        if (!chartEnabledClickHandlers.chartNavigationTSR) {

            $('.IRChartTSRHeader').click(function () {
                debugStep("clicked '.IRChartTSRHeader' in attachClickHandlers");
                if ($('.IRChartTSR .IRChartTSRBody').css('display') == 'block') {

                    $('.IRChartNavigation .IRChartTSR').removeClass('active');
                    //$(this).parent().removeClass('active');
                    $('.IRChartTSR .IRChartTSRBody').css('display', 'none');

                } else {
                    $(this).parent().addClass('active');
                    IRChartNavigationCloseOpenBodyDivs();
                    $('.IRChartTSR .IRChartTSRBody').css('display', 'block');
                }
            });

            chartEnabledClickHandlers.chartNavigationTSR = true;

            if (typeof ($('.IRChartTSR #IRChartNavigationClearTSR')) == 'object') {
                $('.IRChartTSRBody .basicButtonLook').click(function () {
                    debugStep("clicked '.IRChartTSRBody .basicButtonLook' in attachClickHandlers");
                    updateTSR($(this).attr('id'));
                });
                $('#IRChartNavigationClearTSR').click(function () {
                    debugStep("clicked '#IRChartNavigationClearTSR' in attachClickHandlers");
                    resetIRChart();
                });
            }
        }
        IRChartNavigationShowHide('IRChartTSRBody');
    }

    //
    //  Todo IRChart Fullscreen
    //
    //if (!chartEnabledClickHandlers.chartNavigationFullscreen) {
    //    $('.IRChartFullscreenHeader').click(function ()
    //    {
    //        window.open(location.href);
    //    });
    //    chartEnabledClickHandlers.chartNavigationFullscreen = true;
    //}


    switch (module) {
        case 'IRChartHTML':
            if (typeof ($('.IRChangeListing')) != "undefined") {
                $('.IRChangeListing select').bind('change', function () {
                    globalActiveListingIndex = parseInt($(this).val());
                    initMomentTimezone();
                    buildQuoteTable();
                    redrawIRChartHTMLHistorical();
                    updateActiveChartNavBarRangePeriod(globalActivePeriod);
                    //clickedChartPeriod(globalActivePeriod);
                    //$('.ToolMenu.IRChartHTMLDisplayMode select').val(0);
                });
            }
            break;
        case 'IRChart':

            if (typeof ($('.IRChartMenuTrigger')) != "undefined") {

                $('.IRChartMenuTrigger').click(function () {
                    debugStep("clicked '.IRChartMenuTrigger' in attachClickHandlers");
                    if ($('.IRChartMenuTriggerBody').css('display') == 'block') {
                        $(this).parent().removeClass('active');
                        $('.IRChartMenuTriggerBody').css('display', 'none');
                        //$('.IRChartPlaceholder').css('display', 'block');

                    } else {
                        $(this).parent().addClass('active');
                        $('.IRChartMenuTriggerBody').css('display', 'block');
                        //$('.IRChartPlaceholder').css('display', 'none');

                    }
                });
            }

            if (typeof ($('.IRChartChangeListing')) != "undefined") {
                $('.IRChartChangeListing select').bind('change', function () {
                    //function resetIRChart()
                    //{
                    //    debugStep("resetIRChart");
                    //    resetIRChartNavigation();
                    //    redrawIRChartHTMLHistorical();
                    //    setChartExtremes(chartDisplayModes.historical, 360);
                    //    drawPlotLineToChart();
                    //    if (useIRChartNews) {
                    //        drawIRNewsToChartHistorical();
                    //    }
                    //}
                    globalActiveListingIndex = parseInt($(this).val());
                    initMomentTimezone();
                    buildQuoteTable();
                    resetIRChart();
                    updateActiveChartNavBarRangePeriod(globalActivePeriod);

                    // JRJR (Reset chart)
                    //globalActiveListingIndex = parseInt($(this).val());
                    //initMomentTimezone();
                    //buildQuoteTable();
                    //redrawIRChartHTMLHistorical();
                    //updateActiveChartNavBarRangePeriod(globalActivePeriod);
                });
            }

            if (typeof ($('.IRChartDownloadHistoricalDataAsExcel')) != "undefined") {

                $('.IRChartDownloadHistoricalDataAsExcel').off().on('click', function () {
                    debugStep("clicked '.IRChartDownloadHistoricalDataAsExcel' in attachClickHandlers");

                    var startDate = new moment(globalChartFromDate, 'YYYY-MM-DD')._d;
                    var endDate = new moment(globalChartToDate, 'YYYY-MM-DD')._d;

                    requestClosePriceListingData.done(function (closePrices) {
                        var downscaledData = getCroppedDownscaledData(closePrices.data[globalActiveListingIndex].data, startDate, endDate, 'daily');
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

            }





            //$(window).resize(function ()
            //{
            //    clearTimeout(this.id);
            //    this.id = setTimeout(doneResizingChart, 1000);
            //});
            //function doneResizingChart()
            //{
            //    if (chartSettings.activeWidth != getWidth() && getWidth() <= chartSettings.narrowWidth) {
            //        $(globalChartContainer).css('height', '300px');
            //        chartSettings.activeWidth = 400;
            //    }
            //    if (chartSettings.activeWidth != getWidth() && getWidth() > chartSettings.narrowWidth) {
            //        //$(globalChartContainer).css('height', '500px');
            //        chartSettings.activeWidth = -1;
            //    }
            //}

            break;
        case 'IRChartHTMLCompare':

            break;
        case 'IRNews':
            if (typeof ($('.newsSubmit')) != "undefined" && typeof ($('.searchText')) != "undefined") {
                $('.newsSubmit').click(function () {
                    debugStep("clicked '.newsSubmit' in attachClickHandlers");
                    var searchText = $('.searchText').val();
                    newsSearch(searchText);
                });
            }

            $('.checkbox').click(function () {
                debugStep("clicked '.checkbox' in attachClickHandlers");
                if ($(this).attr('id') == 'allRNSnews') {

                    if ($(this).hasClass('checked')) {
                        $('.checkbox').removeClass('checked');
                    } else {
                        $('.checkbox').addClass('checked');
                    }
                } else {
                    $('#allRNSnews').removeClass('checked');
                    if ($(this).hasClass('checked')) {
                        $(this).removeClass('checked');
                    } else {
                        $(this).addClass('checked');
                    }
                }
            });


            if (typeof ($('table.IRNewsTool tr th.Header').html()) != "undefined") {
                //
                //  News in a Table structure
                //
                $('td.Data').hover(function () {
                    //$('td.Data').removeClass('DataHover');
                    $(this).parent().find('td').addClass('DataHover');
                }, function () {
                    $(this).parent().find('td').removeClass('DataHover');
                });
                $('.IRNewsModule td.Data').click(function () {
                    var storyID = $(this).parent().attr('id');
                    if ($(this).hasClass('download')) {
                        // Do nothing

                    } else {
                        // Show news
                        debugStep("window.open... $('.IRNewsModule td.Data').click");
                        window.open('newsArticle.aspx?storyid=' + storyID);
                    }
                });
            }
            if (typeof ($('div.IRNewsTool .IRHeaderGroup .IRHeader').html()) != "undefined") {
                //
                //  News in a Div structure
                //
                $('div.IRDataGroup .IRData').hover(function () {
                    //$('td.Data').removeClass('DataHover');
                    $(this).parent().find('.IRData').addClass('DataHover');
                }, function () {
                    $(this).parent().find('.IRData').removeClass('DataHover');
                });
                $('.IRNewsModule div.IRData').click(function () {
                    var storyID = $(this).parent().attr('id');
                    if ($(this).hasClass('IRDownload')) {
                        // Do nothing

                    } else {
                        // Show news
                        //window.open('newsArticle.aspx?storyid=' + storyID + '&language=' + globalActiveLanguage);
                        debugStep("window.open... $('.IRNewsModule div.IRData').click");
                        window.open(getNewsArticlePath() + '?solutionID=' + getSolutionID() + '&customerKey=' + getCustomerKeyRequired() + '&storyID=' + storyID + '&language=' + globalActiveLanguage);
                    }
                });
            }

            //if (typeof ($('input, textarea').html()) != "undefined") {
            //$('input, textarea').placeholder();
            $("#allRNSnews.checkbox").addClass('checked');
            break;

        case 'IRNewsHeadline':
            $('td.Data').hover(function () {
                //$('td.Data').removeClass('DataHover');
                $(this).parent().find('td').addClass('DataHover');
            }, function () {
                $(this).parent().find('td').removeClass('DataHover');
            });
            $('.IRNewsHeadlineModule td.Data').click(function () {
                var storyID = $(this).parent().attr('id');
                if ($(this).hasClass('download')) {
                    // Do nothing

                } else {
                    // Show news
                    //window.open('newsArticle.aspx?storyid=' + storyID);
                    debugStep("window.open... $('.IRNewsHeadlineModule td.Data').click");
                    window.open(getNewsArticlePath() + '?solutionID=' + getSolutionID() + '&customerKey=' + getCustomerKeyRequired() + '&storyID=' + storyID + '&language=' + globalActiveLanguage);
                }
            });
            $('.IRNewsHeadlineModule div.Data .Data').click(function () {
                var storyID = $(this).parent().attr('id');
                if ($(this).hasClass('download')) {
                    // Do nothing

                } else {
                    // Show news
                    //window.open('newsArticle.aspx?storyid=' + storyID);
                    debugStep("window.open... $('.IRNewsHeadlineModule div.Data').click");
                    window.open(getNewsArticlePath() + '?solutionID=' + getSolutionID() + '&customerKey=' + getCustomerKeyRequired() + '&storyID=' + storyID + '&language=' + globalActiveLanguage);
                }
            });
            //$('.IRNewsHeadlineModule div.Data').click(function () {
            //    var storyID = $(this).parent().attr('id');
            //    if ($(this).hasClass('download')) {
            //        // Do nothing

            //    } else {
            //        // Show news
            //        //window.open('newsArticle.aspx?storyid=' + storyID);
            //        debugStep("window.open... $('.IRNewsHeadlineModule div.Data').click");
            //        window.open(getNewsArticlePath() + '?solutionID=' + getSolutionID() + '&customerKey=' + getCustomerKeyRequired() + '&storyID=' + storyID + '&language=' + globalActiveLanguage);
            //    }
            //});
            break;
        case 'IRLookupModule':
            if (typeof ($('.IRChangeListing').html()) != "undefined") {
                $('.IRChangeListing select').bind('change', function () {
                    debugStep(' ');
                    debugStep('clicked IRChangeListing (lookup)');
                    globalActiveListingIndex = parseInt($(this).val());
                    initMomentTimezone();
                    if (typeof (menuTemplate_Lookup) == "function") {
                        buildLookupTool(globalChartListingStockData, menuTemplate_Lookup);
                        updateIRChangeListing();
                        attachClickHandlers('IRLookupModule');
                    }
                });
            }
            break;
        case 'IRCalcModule':
            if (typeof ($('.IRChangeListing').html()) != "undefined") {
                $('.IRChangeListing select').bind('change', function () {
                    debugStep(' ');
                    debugStep('clicked IRChangeListing (calc)');
                    globalActiveListingIndex = parseInt($(this).val());
                    initMomentTimezone();
                    if (typeof (menuTemplate_Calc) == "function") {
                        buildCalcTool(globalChartListingStockData, menuTemplate_Calc);
                        updateIRChangeListing();
                        attachClickHandlers('IRCalcModule');
                    }
                });
            } 
            break;
    }
}
function stateNewHistoricalPeriodSelected(days) {
    debugStep("stateNewHistoricalPeriodSelected(" + days + ")");
    checkChartState(chartDisplayModes.historical);
    setChartExtremes(chartDisplayModes.historical, days);
}
function stateNewIntradayPeriodSelected(hours) {
    debugStep("stateNewIntradayPeriodSelected(" + hours + ")");
    checkChartState(chartDisplayModes.intraday);
    setChartExtremes(chartDisplayModes.intraday, hours);
}
function checkChartState(displayMode) {
    debugStep("checkChartState(" + displayMode + ")");
    if (globalChartActiveDisplayMode == chartDisplayModes.historical && displayMode == chartDisplayModes.intraday) {
        globalChartActiveDisplayMode = chartDisplayModes.intraday;
        redrawIRChartHTMLIntraday();
    }
    if (globalChartActiveDisplayMode == chartDisplayModes.intraday && displayMode == chartDisplayModes.historical) {
        globalChartActiveDisplayMode = chartDisplayModes.historical;
        redrawIRChartHTMLHistorical();
    }
}
function setChartExtremes(mode, period) {
    debugStep("setChartExtremes(" + mode + "," + period + ")");

    switch (mode) {
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

            //var firstDate = moment(firstEntryUnix);
            //var firstDate = moment.tz(firstEntryUnix, globalActiveExchangeTimeZone);
            //var fromDate = moment(lastEntryUnixDate);
            //var fromDate = moment.tz(lastEntryUnixDate, globalActiveExchangeTimeZone);
            //var toDate = moment(lastEntryUnixDate);
            //var toDate = moment.tz(lastEntryUnixDate, globalActiveExchangeTimeZone);

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




                        //fromDate.valueOf(),
                        //lastEntryUnixDate

//Date.UTC(firstDate.year(), firstDate.month(), firstDate.date(), firstDate.hour(), firstDate.minute()),
//Date.UTC(toDate.year(), toDate.month(), toDate.date(), toDate.hour(), toDate.minute())

    //new Date(fromDate.year(), fromDate.month(), fromDate.date(), fromDate.hour(), fromDate.minute()),
        //new Date(toDate.year(), toDate.month(), toDate.date(), 16, 0)
        );


                globalChartDom.redraw();
            }
            break;
    }
}
function getClosestDateIndexForListingClosePrice(unixDate) {
    var iterations = -1;
    var newUnixDate = 0;
    for (var i = 0; i < globalChartListingStockDataDates[globalActiveListingIndex].length - 1; i++) {
        if (newUnixDate < unixDate) {
            newUnixDate = globalChartListingStockDataDates[globalActiveListingIndex][i];
            iterations++;
        }
    }
    return iterations;
}
function getClosestDateIndexForListingClosePriceWithDataArray(dataArr, unixDate) {
    var iterations = -1;
    var newUnixDate = 0;
    for (var i = 0; i < dataArr.length - 1; i++) {
        if (newUnixDate < unixDate) {
            newUnixDate = dataArr[i];
            iterations++;
        }
    }
    return iterations;
}
function getClosestDateIndexForListingIntraday(unixDate) {
    var iterations = -1;
    var newUnixDate = 0;
    for (var i = 0; i <= globalChartListingIntradayDataDates[globalActiveListingIndex].length - 1; i++) {
        if (newUnixDate < unixDate) {
            newUnixDate = globalChartListingIntradayDataDates[globalActiveListingIndex][i];
            iterations++;
        }
    }
    return iterations;
}
function getClosestDateIndexForListingTSR(unixDate) {
    var iterations = -1;
    var newUnixDate = 0;

    //if (typeof (IRChartTSR.stockDataTSRCloneDates) == 'object') {
    for (var i = 0; i < IRChartTSR.stockDataTSRCloneDates.length - 1; i++) {
        if (newUnixDate < unixDate) {
            newUnixDate = IRChartTSR.stockDataTSRCloneDates[i];
            iterations++;
        }
    }
    //}
    return iterations;
}

function formatDecimal(number) {
    try {
        if (typeof (number) == 'number') {
            return number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals).replace('.', clientLocaleParameters.decimalSeparator);
        } else {
            return "-";
        }
    }
    catch (err) {
        return "-";
    }
}
function formatDecimalWithCustomNumberOfDecimal(number, numberOfDecimals) {
    try {
        if (typeof (number) == 'number') {
            return number.round(clientStyle.amountOfDecimals).toFixed(numberOfDecimals).replace('.', clientLocaleParameters.decimalSeparator);
        } else {
            return "-";
        }
    }
    catch (err) {
        return "-";
    }
}
function formatDecimalDecimal1000(number) {
    try {
        if (typeof (number) == 'number') {
            if (number.toString().indexOf(".") > -1) {
                number = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);
                var decimalSplit = number.toString().split(".");
                var leftPart = decimalSplit[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000);
                var delimiter = clientLocaleParameters.decimalSeparator;
                var rightPart = "";
                if (typeof (decimalSplit[1]) == "undefined") {
                    rightPart = "";
                    delimiter = "";
                } else {
                    rightPart = decimalSplit[1].replace('.', clientLocaleParameters.decimalSeparator);
                }
                return leftPart + delimiter + rightPart;

            } else {

                return number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals).replace('.', clientLocaleParameters.decimalSeparator);
            }
        } else {
            return "-";
        }
    }
    catch (err) {
        return "-";
    }
}
function formatDecimalNoZero(number) {
    try {
        if (typeof (number) == 'number') {
            if (number == 0) {
                return "-";
            } else {
                return number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals).replace('.', clientLocaleParameters.decimalSeparator);
            }
        } else {
            return "-";
        }
    }
    catch (err) {
        return "-";
    }
}
function formatDecimalFileSize(number) {
    try {
        return number.round(1).toFixed(1);
    }
    catch (err) {
        return "-";
    }
}
function formatLocal(number) {
    //return number.toLocaleString(globalActiveLanguage);
    return formatNumberWithLocalDelimiters(number);
}

function translateWeekdayShort(weekIn) {
    var weekOut = weekIn;

    switch (weekIn) {
        case "Mon":
            weekOut = translations.t_mon;
            break;
        case "Tue":
            weekOut = translations.t_tue;
            break;
        case "Wed":
            weekOut = translations.t_wed;
            break;
        case "Thu":
            weekOut = translations.t_thu;
            break;
        case "Fri":
            weekOut = translations.t_fri;
            break;
        case "Sat":
            weekOut = translations.t_sat;
            break;
        case "Sun":
            weekOut = translations.t_sun;
            break;
    }

    if (globalActiveLanguage != 'ar' && globalActiveLanguage != 'he') {
        weekOut = weekOut.capitalizeFirstLetter();
    }

    return weekOut;
}
function translateMonthShort(monthIn) {

    var monthOut = monthIn;

    switch (monthIn) {
        case "Jan":
            monthOut = translations.t_jan_short;
            break;
        case "Feb":
            monthOut = translations.t_feb_short;
            break;
        case "Mar":
            monthOut = translations.t_mar_short;
            break;
        case "Apr":
            monthOut = translations.t_apr_short;
            break;
        case "May":
            monthOut = translations.t_may_short;
            break;
        case "Jun":
            monthOut = translations.t_jun_short;
            break;
        case "Jul":
            monthOut = translations.t_jul_short;
            break;
        case "Aug":
            monthOut = translations.t_aug_short;
            break;
        case "Sep":
            monthOut = translations.t_sep_short;
            break;
        case "Oct":
            monthOut = translations.t_oct_short;
            break;
        case "Nov":
            monthOut = translations.t_nov_short;
            break;
        case "Dec":
            monthOut = translations.t_dec_short;
            break;
    }

    if (globalActiveLanguage != 'ar' && globalActiveLanguage != 'he') {
        monthOut = monthOut.capitalizeFirstLetter();
    }

    return monthOut;
}
function formatDateWithFormat(timestamp, format) {

    //debugTimestamp("formatDateWithFormat raw: " + timestamp);

    var dateWithFormat = new moment.tz(timestamp, globalActiveExchangeTimeZone).add(clientStyle.manualTimeOffset, 'hours').format(format);


    //debugTimestamp("dateWithFormat: " + dateWithFormat);

    if (format.indexOf('MMMM') > -1) {
        switch (moment(timestamp).format("MMMM")) {
            case 'January':
                dateWithFormat = dateWithFormat.replace('January', translations.t_january.capitalizeFirstLetter());
                break;
            case 'February':
                dateWithFormat = dateWithFormat.replace('February', translations.t_february.capitalizeFirstLetter());
                break;
            case 'March':
                dateWithFormat = dateWithFormat.replace('March', translations.t_march.capitalizeFirstLetter());
                break;
            case 'April':
                dateWithFormat = dateWithFormat.replace('April', translations.t_april.capitalizeFirstLetter());
                break;
            case 'May':
                dateWithFormat = dateWithFormat.replace('May', translations.t_may.capitalizeFirstLetter());
                break;
            case 'June':
                dateWithFormat = dateWithFormat.replace('June', translations.t_june.capitalizeFirstLetter());
                break;
            case 'July':
                dateWithFormat = dateWithFormat.replace('July', translations.t_july.capitalizeFirstLetter());
                break;
            case 'August':
                dateWithFormat = dateWithFormat.replace('August', translations.t_august.capitalizeFirstLetter());
                break;
            case 'September':
                dateWithFormat = dateWithFormat.replace('September', translations.t_september.capitalizeFirstLetter());
                break;
            case 'October':
                dateWithFormat = dateWithFormat.replace('October', translations.t_october.capitalizeFirstLetter());
                break;
            case 'November':
                dateWithFormat = dateWithFormat.replace('November', translations.t_november.capitalizeFirstLetter());
                break;
            case 'December':
                dateWithFormat = dateWithFormat.replace('December', translations.t_december.capitalizeFirstLetter());
                break;
        }

    } else if (format.indexOf('MMM') > -1) {

        switch (moment(timestamp).format("MMM")) {
            case 'Jan':
                dateWithFormat = dateWithFormat.replace('Jan', translations.t_jan_short.capitalizeFirstLetter());
                break;
            case 'Feb':
                dateWithFormat = dateWithFormat.replace('Feb', translations.t_feb_short.capitalizeFirstLetter());
                break;
            case 'Mar':
                dateWithFormat = dateWithFormat.replace('Mar', translations.t_mar_short.capitalizeFirstLetter());
                break;
            case 'Apr':
                dateWithFormat = dateWithFormat.replace('Apr', translations.t_apr_short.capitalizeFirstLetter());
                break;
            case 'May':
                dateWithFormat = dateWithFormat.replace('May', translations.t_may_short.capitalizeFirstLetter());
                break;
            case 'Jun':
                dateWithFormat = dateWithFormat.replace('Jun', translations.t_jun_short.capitalizeFirstLetter());
                break;
            case 'Jul':
                dateWithFormat = dateWithFormat.replace('Jul', translations.t_jul_short.capitalizeFirstLetter());
                break;
            case 'Aug':
                dateWithFormat = dateWithFormat.replace('Aug', translations.t_aug_short.capitalizeFirstLetter());
                break;
            case 'Sep':
                dateWithFormat = dateWithFormat.replace('Sep', translations.t_sep_short.capitalizeFirstLetter());
                break;
            case 'Oct':
                dateWithFormat = dateWithFormat.replace('Oct', translations.t_oct_short.capitalizeFirstLetter());
                break;
            case 'Nov':
                dateWithFormat = dateWithFormat.replace('Nov', translations.t_nov_short.capitalizeFirstLetter());
                break;
            case 'Dec':
                dateWithFormat = dateWithFormat.replace('Dec', translations.t_dec_short.capitalizeFirstLetter());
                break;
        }
    }
    return dateWithFormat;
}
function formatNumberWithLocalDelimiters(number) {
    try {
        if (typeof (number) == 'number') {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000);
        } else {
            return "-";
        }
    }
    catch (err) {
        return "-";
    }
}
function getBrowserIEVersion() {
    var version = -1;
    if (navigator.userAgent.indexOf('rv:11.0') > -1) {
        version = 11;
    }
    if (navigator.userAgent.indexOf('MSIE 10') > -1) {
        version = 10;
    }
    if (navigator.userAgent.indexOf('MSIE 9') > -1) {
        version = 9;
    }
    if (navigator.userAgent.indexOf('MSIE 8') > -1) {
        version = 8;
    }
    if (navigator.userAgent.indexOf('MSIE 7') > -1) {
        version = 7;
    }
    if (navigator.userAgent.indexOf('MSIE 6') > -1) {
        version = 6;
    }
    return version;
}
function getStoryID() {
    debugStep("getStoryID");
    var fetchedStoryID = -1;
    if (IRToolsNewsArticleHTMLModule) {
        if (location.href.indexOf('?') > -1) {
            var pathSplit = location.href.split("?");
            pathSplit = pathSplit[1].split("&");
            for (var i = 0; i < pathSplit.length; i++) {
                var pathSubSplit = pathSplit[i].split('=');
                if (pathSubSplit[0].toLowerCase() == 'storyid') {
                    fetchedStoryID = pathSubSplit[1];
                }
            }
        }
    } else {
        if (location.href.indexOf('?') > -1) {
            var pathSplit = location.href.split("?");
            pathSplit = pathSplit[1].split("&");
            pathSplit = pathSplit[0].split("=");
            fetchedStoryID = pathSplit[1];
        }
    }

    return fetchedStoryID;
}
function getLogoPath() {
    debugStep("getLogoPath");
    var logoPath = "";
    if (IRToolsNewsArticleHTMLModule) {

        logoPath = "http://ir.euroinvestor.com/Solutions/";

        var fetchedCustomerKey = "";
        var fetchedSolutionID = "";

        if (location.href.indexOf('?') > -1) {

            var pathSplit = location.href.split('?');
            var subPathSplit = pathSplit[1].split('&');

            for (var i = 0; i < subPathSplit.length; i++) {
                var pathGetParameter = subPathSplit[i].split('=');
                if (pathGetParameter[0].toLowerCase() == "customerkey") {
                    fetchedCustomerKey = pathGetParameter[1];
                }
                if (pathGetParameter[0].toLowerCase() == "solutionid") {
                    fetchedSolutionID = pathGetParameter[1];
                }
            }
        }
        logoPath += fetchedCustomerKey + "/logo.png";
    }
    else {

        var pathSplit = location.href.split("/");
        for (var i = 0; i < pathSplit.length - 2; i++) {
            logoPath += pathSplit[i] + "/";
        }

        logoPath += "logo.png";
    }
    return logoPath;
}
function validateDateFormat() {
    switch (clientStyle.formatDate) {
        case "DD MMM YYYY":
        case "DD-MMM-YYYY":
        case "DD/MMM/YYYY":
        case "DD/MM/YYYY":
        case "DD MM YYYY":
        case "DD-MM-YYYY":
        case "YYYY-MM-DD":
        case "YYYY MM DD":
            break;
        default:
            debugError("formatDate is not supported [clientStyle.formatDateTime (" + clientStyle.formatDateTime + ")]");
            //debugError(" ");
            //debugError("Options:");
            //debugError("DD MMM YYYY");
            //debugError("DD-MMM-YYYY");
            //debugError("DD/MMM/YYYY");
            //debugError("DD/MM/YYYY");
            //debugError("DD MM YYYY");
            //debugError("DD-MM-YYYY");
            //debugError("YYYY-MM-DD");
            //debugError("YYYY MM DD");
            //debugError(" ");
            break;
    }
}
function validateDateTimeFormat() {
    switch (clientStyle.formatDateTime) {
        case "DD MMM YYYY HH:mm":
        case "DD-MMM-YYYY HH:mm":
        case "DD/MMM/YYYY HH:mm":
        case "DD/MM/YYYY HH:mm":
        case "DD MM YYYY HH:mm":
        case "DD-MM-YYYY HH:mm":
        case "DD.MM.YYYY HH:mm":
        case "YYYY-MM-DD HH:mm":
        case "YYYY MM DD HH:mm":
        case "DD MMMM YYYY HH:mm":
        case "DD-MMMM-YYYY HH:mm":
        case "DD/MMMM/YYYY HH:mm":
            break;
        default:
            debugError("formatDateTime is not supported [clientStyle.formatDateTime (" + clientStyle.formatDateTime + ")]");
            //debugError(" ");
            //debugError("Options:");
            //debugError("DD MMM YYYY HH:mm");
            //debugError("DD-MMM-YYYY HH:mm");
            //debugError("DD/MMM/YYYY HH:mm");
            //debugError("DD/MM/YYYY HH:mm");
            //debugError("DD MM YYYY HH:mm");
            //debugError("DD-MM-YYYY HH:mm");
            //debugError("DD.MM.YYYY HH:mm");
            //debugError("YYYY-MM-DD HH:mm");
            //debugError("YYYY MM DD HH:mm");
            //debugError(" ");
            break;
    }
}
function getChartDateTimeLabelFormats() {
    switch (clientStyle.formatDate) {
        case "MM-DD-YYYY":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%m-%d-%Y',
                week: '%m-%d-%Y',
                month: '%m-%Y',
                year: '%Y'
            };
            break;
        case "DD/MM/YYYY":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%m/%d/%Y',
                week: '%m/%d/%Y',
                month: '%m/%Y',
                year: '%Y'
            };
            break;
        case "DD-MM-YYYY":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%d-%m-%Y',
                week: '%d-%m-%Y',
                month: '%m-%Y',
                year: '%Y'
            };
            break;
        case "DD/MM/YYYY":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%d/%m/%Y',
                week: '%d/%m/%Y',
                month: '%m/%Y',
                year: '%Y'
            };
            break;
        case "DD.MM.YYYY":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%d.%m.%Y',
                week: '%d.%m.%Y',
                month: '%m.%Y',
                year: '%Y'
            };
            break;
        case "DD MMM YYYY":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%d %b %Y',
                week: '%d %b %Y',
                month: '%b %Y',
                year: '%Y'
            };
            break;
        case "DD-MMM-YYYY":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%d-%b-%Y',
                week: '%d-%b-%Y',
                month: '%b-%Y',
                year: '%Y'
            };
            break;
        case "DD/MMM/YYYY":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%d/%b/%Y',
                week: '%d/%b/%Y',
                month: '%b/%Y',
                year: '%Y'
            };
            break;
        case "DD MMMM YYYY":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%d %B %Y',
                week: '%d %B %Y',
                month: '%B %Y',
                year: '%Y'
            };
            break;
            //case "DD-MMMM-YYYY":
            //    var dateTimeLabelFormats = {
            //        second: '%H:%M:%S',
            //        minute: '%H:%M',
            //        hour: '%H:%M',
            //        day: '%d-%B-%Y',
            //        week: '%d-%B-%Y',
            //        month: '%B-%Y',
            //        year: '%Y'
            //    };
            //    break;
        case "YYYY-MM-DD":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%Y-%m-%d',
                week: '%Y-%m-%d',
                month: '%Y-%m',
                year: '%Y'
            };
            break;
        default: // YYYY-MM-DD
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%Y-%m-%d',
                week: '%Y-%m-%d',
                month: '%Y-%m',
                year: '%Y'
            };
            debugError("getChartDateTimeLabelFormats() is missing support for dateFormat for clientStyle.formatDate (" + clientStyle.formatDate + ")");
            break;
    }
    return dateTimeLabelFormats;
}
function getChartDateTimeLabelFormatsLookupCalc() {
    switch (clientStyle.formatDate) {
        case "DD-MM-YYYY":
            debugStep("case: DD-MM-YYYY");
            var dateTimeLabelFormats = {
                second: '%d-%m-%Y',
                minute: '%d-%m-%Y',
                hour: '%d-%m-%Y',
                day: '%d-%m-%Y',
                week: '%d-%m-%Y',
                month: '%d-%m-%Y',
                year: '%d-%m-%Y'
            };
            break;
        case "DD/MM/YYYY":
            debugStep("case: DD/MM/YYYY");
            var dateTimeLabelFormats = {
                second: '%d/%m/%Y',
                minute: '%d/%m/%Y',
                hour: '%d/%m/%Y',
                day: '%d/%m/%Y',
                week: '%d/%m/%Y',
                month: '%d/%m/%Y',
                year: '%d/%m/%Y'
            };
            break;
        case "DD MMMM YYYY":
            debugStep("case: DD MMMM YYYY");
            var dateTimeLabelFormats = {
                second: '%d %B %Y',
                minute: '%d %B %Y',
                hour: '%d %B %Y',
                day: '%d %B %Y',
                week: '%d %B %Y',
                month: '%d %B %Y',
                year: '%d %B %Y'
            };
            break;
        case "DD MMM YYYY":
            debugStep("case: DD MMM YYYY");
            var dateTimeLabelFormats = {
                second: '%d %b %Y',
                minute: '%d %b %Y',
                hour: '%d %b %Y',
                day: '%d %b %Y',
                week: '%d %b %Y',
                month: '%d %b %Y',
                year: '%d %b %Y'
            };
            break;
        case "DD MMM":
            debugStep("case: DD MMM");
            var dateTimeLabelFormats = {
                second: '%d %b',
                minute: '%d %b',
                hour: '%d %b',
                day: '%d %b',
                week: '%d %b',
                month: '%d %b',
                year: '%d %b'
            };
            break;
        case "DD-MMM-YYYY":
            debugStep("case: DD-MMM-YYYY");
            var dateTimeLabelFormats = {
                second: '%d-%b-%Y',
                minute: '%d-%b-%Y',
                hour: '%d-%b-%Y',
                day: '%d-%b-%Y',
                week: '%d-%b-%Y',
                month: '%d-%b-%Y',
                year: '%d-%b-%Y'
            };
            break;
        case "YYYY-MM-DD":
            debugStep("case: YYYY-MM-DD");
            var dateTimeLabelFormats = {
                second: '%Y-%m-%d',
                minute: '%Y-%m-%d',
                hour: '%Y-%m-%d',
                day: '%Y-%m-%d',
                week: '%Y-%m-%d',
                month: '%Y-%m-%d',
                year: '%Y-%m-%d'
            };
            break;
        default:
            debugStep("case: default (YYYY-MM-DD)");
            var dateTimeLabelFormats = {
                second: '%Y-%m-%d',
                minute: '%Y-%m-%d',
                hour: '%Y-%m-%d',
                day: '%Y-%m-%d',
                week: '%Y-%m-%d',
                month: '%Y-%m-%d',
                year: '%Y-%m-%d'
            };
            debugError("getChartDateTimeLabelFormatsLookupCalc() is missing support for dateFormat for clientStyle.formatDate (" + clientStyle.formatDate + ")");
            break;
    }
    return dateTimeLabelFormats;
}
function getChartDateTimeLabelFormatsIRMiniquoteChart() {

    switch (globalChartActiveDisplayMode) {
        case chartDisplayModes.intraday:
            switch (clientStyle.formatTime) {
                //case "DD-MM-YYYY":
                //    debugStep("case: DD-MM-YYYY");
                //    var dateTimeLabelFormats = {
                //        second: '%d-%m-%Y',
                //        minute: '%d-%m-%Y',
                //        hour: '%d-%m-%Y',
                //        day: '%d-%m-%Y',
                //        week: '%d-%m-%Y',
                //        month: '%d-%m-%Y',
                //        year: '%d-%m-%Y'
                //    };
                //    break;
                default:
                    var dateTimeLabelFormats = {
                        second: '%H:%M',
                        minute: '%H:%M',
                        hour: '%H:%M',
                        day: '%H:%M',
                        week: '%H:%M',
                        month: '%H:%M',
                        year: '%H:%M'
                    };
                    break;
            }
            break;
        default:
            switch (clientStyle.formatDate) {
                case "DD-MM-YYYY":
                    debugStep("case: DD-MM-YYYY");
                    var dateTimeLabelFormats = {
                        second: '%d-%m-%Y',
                        minute: '%d-%m-%Y',
                        hour: '%d-%m-%Y',
                        day: '%d-%m-%Y',
                        week: '%d-%m-%Y',
                        month: '%d-%m-%Y',
                        year: '%d-%m-%Y'
                    };
                    break;
                case "DD/MM/YYYY":
                    debugStep("case: DD/MM/YYYY");
                    var dateTimeLabelFormats = {
                        second: '%d/%m/%Y',
                        minute: '%d/%m/%Y',
                        hour: '%d/%m/%Y',
                        day: '%d/%m/%Y',
                        week: '%d/%m/%Y',
                        month: '%d/%m/%Y',
                        year: '%d/%m/%Y'
                    };
                    break;
                case "DD MMMM YYYY":
                    debugStep("case: DD MMMM YYYY");
                    var dateTimeLabelFormats = {
                        second: '%d %B %Y',
                        minute: '%d %B %Y',
                        hour: '%d %B %Y',
                        day: '%d %B %Y',
                        week: '%d %B %Y',
                        month: '%d %B %Y',
                        year: '%d %B %Y'
                    };
                    break;
                case "DD MMM YYYY":
                    debugStep("case: DD MMM YYYY");
                    var dateTimeLabelFormats = {
                        second: '%d %B %Y',
                        minute: '%d %B %Y',
                        hour: '%d %B %Y',
                        day: '%d %B %Y',
                        week: '%d %B %Y',
                        month: '%d %B %Y',
                        year: '%d %B %Y'
                    };
                    break;
                default: // YYYY-MM-DD
                    debugStep("case: default (YYYY-MM-DD)");
                    var dateTimeLabelFormats = {
                        second: '%Y-%m-%d',
                        minute: '%Y-%m-%d',
                        hour: '%Y-%m-%d',
                        day: '%Y-%m-%d',
                        week: '%Y-%m-%d',
                        month: '%Y-%m-%d',
                        year: '%Y-%m-%d'
                    };
                    debugError("getChartDateTimeLabelFormatsIRMiniquoteChart() is missing support for dateFormat for clientStyle.formatDate (" + clientStyle.formatDate + ")");
                    break;
            }
            break;


    }


    return dateTimeLabelFormats;
}
function getPrevClose() {
    return globalRawStockData[globalActiveListingIndex].prevClose;
}


function getCurrencyCrossFromStockOtherData(currencyCross) {
    debugStep("getCurrencyCrossFromStockOtherData");
    if (typeof (globalRawStockOtherData) == 'object') {
        for (var i = 0; i < globalRawStockOtherData.length; i++) {
            var symbol = globalRawStockOtherData[i].symbol;
            var cyrrencyFrom = symbol.slice(0, 3);
            if (currencyCross == globalRawStockOtherData[i].symbol) {
                if (cyrrencyFrom == globalRawStockData[globalActiveListingIndex].currency) {
                    return globalRawStockOtherData[i].last;
                } else {
                    return 1;
                }
            }
        }
    }
}
function getCurrencyCrossOnlyFromStockOtherData(currencyCross) {
    debugStep("getCurrencyCrossFromStockOtherData");
    debugStep(currencyCross);
    if (typeof (globalRawStockOtherData) == 'object') {

        for (var i = 0; i < globalRawStockOtherData.length; i++) {
            var symbol = globalRawStockOtherData[i].symbol;
            var cyrrencyFrom = symbol.slice(0, 3);
            if (currencyCross == globalRawStockOtherData[i].symbol) {
                return globalRawStockOtherData[i].last;
            }
        }
    }
}

function getCroppedDownscaledData(stockData, fromDate, toDate, frequency) {
    debugStep("getCroppedDownscaledData");
    var croppedData = cropListToDateRange(stockData, fromDate, toDate);
    var downscaledData = downscaleData(croppedData, frequency);
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

function getIndexThatBestMatchesDate(array, key, pickedDate, roundUp) {
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
function compareDates(dateToTest, compareToDate) {
    var _dateToTest = new moment(new moment(dateToTest).format("YYYY-MM-DD")).valueOf();
    var _compareToDate = new moment(new moment(compareToDate).format("YYYY-MM-DD")).valueOf();

    if (_dateToTest === _compareToDate) {
        return dateComparisons.SAME;
    }

    return (dateToTest < compareToDate) ? dateComparisons.BEFORE : dateComparisons.AFTER;
}
var dateComparisons = {
    SAME: "same",
    BEFORE: "before",
    AFTER: "after"
}
function downscaleData(list, frequency) {
    debugStep("downscaleData");

    //Assumes the list is sorted by date (newest entry first)
    var downscaled = [];
    //var date = new Date(list[0].date);
    var date = new moment(list[0].date)._d;

    switch (frequency.toLowerCase()) {
        case "daily":
            return list;
            break;
        case "monthly":
            while (date < new Date(list[list.length - 1].date)) {
                var index = getIndexThatBestMatchesDate(list, "date", date, true);
                downscaled.push(list[index]);
                date.setDate(1);
                date.setMonth(date.getMonth() + 1);
            }
            return downscaled;
            break;
        case "quarterly":
            while (date < new Date(list[list.length - 1].date)) {
                var index = getIndexThatBestMatchesDate(list, "date", date, true);
                downscaled.push(list[index]);
                date.setDate(1);
                if (date.getMonth() < 3) { date.setMonth(3); continue }
                if (date.getMonth() < 6) { date.setMonth(6); continue }
                if (date.getMonth() < 9) { date.setMonth(9); continue }
                date.setMonth(0);
                date.setFullYear(date.getFullYear() + 1);
            }

            return downscaled;
            break;

        case "yearly":
            while (date < new Date(list[list.length - 1].date)) {
                var index = getIndexThatBestMatchesDate(list, "date", date, true);
                downscaled.push(list[index]);
                date.setDate(1);
                date.setMonth(0);
                date.setFullYear(date.getFullYear() + 1);
            }

            return downscaled;
            break;
        default:
            return list;
            break;
    }

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
function ajax_download(url, data) {
    debugStep("ajax_download");

    // Check if PushPay and if iPhone
    if (clientCustomerKeyRequired.toLowerCase() == 'pushpay' && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {

        var form = '<form method="post" action="' + getServiceEngingeURL() + 'RequestClosePriceFileFromData">';
        Object.keys(data).forEach(function (key) {
            form += "<input type='hidden' name='" + key + "' value='" + data[key] + "'>";
        });
        form += '</form>';

        var OpenWindow = window.open('', '_blank', '');
        $(OpenWindow.document.body).ready(function () {
            $(OpenWindow.document.body).append(form);
            OpenWindow.document.forms[0].submit();

        });

    } else {

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
}

function newsSearch(searchText) {
    debugStep("newsSearch - [" + searchText + "]");

    if (typeof ($('#select-filter').html()) == "string") {
        var searchIn = $('#select-filter').val();

        if (searchText != "" && searchIn.toLowerCase() == 'title and content') {
            loadNewsDataSearch(searchText);
            requestNewsDataSearch.done(function (newsDataSearch) {
                debugStep("requestNewsDataSearch.done");
                buildNewsEntries(newsDataSearch);
            });
        } else if (searchText != "" && searchIn.toLowerCase() == 'title only') {
            newsFilterReset();
            newsFilter(searchText);
        } else {
            newsFilterReset();
            newsFilter('');
        }
    } else {
        //
        //  If 'Search in' drop down is not present.
        //
        newsFilterReset();
        newsFilter('');
    }
}
function newsFilterReset() {
    debugStep("newsFilterReset");

    if (typeof ($('table.IRNewsTool tr th.Header').html()) != "undefined") {
        //
        //  News in a Table structure
        //
        $('tr.Data').removeClass('hide');
        for (var page = 1; page <= globalNewsPagesInTotal; page++) {
            $('tr.Data').removeClass('page' + page);
        }
    }

    if (typeof ($('div.IRNewsTool .IRHeaderGroup .IRHeader').html()) != "undefined") {
        //
        //  News in a Div structure
        //
        $('div.IRDataGroup').removeClass('hide');
        for (var page = 1; page <= globalNewsPagesInTotal; page++) {
            $('div.IRDataGroup').removeClass('page' + page);
        }
    }
}
function newsFilter(searchText) {
    debugStep("newsFilter");
    var searchedText = "";
    if (typeof (searchText) == 'string') {
        searchedText = searchText.toLowerCase();
    }

    var searchFromYear = $('.search-from #from-year').val();
    var searchFromMonth = $('.search-from #from-month').val();

    var searchToYear = $('.search-to #to-year').val();
    var searchToMonth = $('.search-to #to-month').val();

    debugStep("searchFromYear: " + searchFromYear);
    debugStep("searchFromMonth: " + searchFromMonth);
    debugStep("searchToYear: " + searchToYear);
    debugStep("searchToMonth: " + searchToMonth);

    var searchFilters = "";

    if (typeof ($('.selectFilter').val()) == 'undefined') {
        // div checkboxes boxes
        $('div.checkbox.checkboxFilter.checked').each(function () {
            searchFilters += ";" + $(this).attr('id');
        });
    } else {
        // select drop down

        searchFilters += $('.selectFilter').val();
    }

    searchFilters = newsAddDistinctFilter(searchFilters);

    if (searchFilters == '') {
        searchFilters = ';allRNSnews';
    }

    //
    //  Traverse each news entry (Timestamp, Headline, Download)
    //
    if (typeof ($('div.IRNewsTool .IRHeaderGroup .IRHeader').html()) != "undefined") {
        //
        //  News in a Div structure
        //
        $('div.IRDataGroup').each(function () {
            var hideThis = false;
            var newsDateArr = $(this).find('.IRDate').attr('id').split('-');
            var newsYear = newsDateArr[0];
            var newsMonth = newsDateArr[1];

            var newsFilters = $(this).find('.IRTitle').attr('id');
            var newsHeadlie = $(this).find('.IRTitle').html().toLowerCase();
            
            //
            //  Periond filters
            //
            if (newsYear < searchFromYear) {

                debugStep("newsYear < searchFromYear: " + newsYear < searchFromYear);

                $(this).addClass('hide');
                //if (newsMonth < searchFromMonth) {
                //    $(this).addClass('hide');
                //}
                hideThis = true;
            }
            if (newsYear > searchToYear) {
                $(this).addClass('hide');
                //if (newsMonth > searchToMonth) {
                //    $(this).addClass('hide');
                //}
                hideThis = true;
            }
            //if (newsYear == searchFromYear) {
            //    if (newsMonth < searchFromMonth) {
            //        $(this).addClass('hide');
            //        hideThis = true;
            //    }
            //}
            //if (newsYear == searchToYear) {
            //    if (newsMonth >= searchToMonth) {
            //        $(this).addClass('hide');
            //        hideThis = true;
            //    }
            //}

            //
            //  Category filters
            //

            if (searchFilters.indexOf('allRNSnews') == -1) {

                if (searchFilters.indexOf(newsFilters) < 1) {
                    $(this).addClass('hide');
                    hideThis = true;

                } else {
                    hideThis = false;
                    $(this).removeClass('hide');
                }
            }

            //
            //  Headline filter
            //
            

            if (searchedText.length > 0) {
                if (newsHeadlie.indexOf(searchedText) == -1) {
                    $(this).addClass('hide');
                    hideThis = true;
                }
            }

        });
    }
    if (typeof ($('table.IRNewsTool tr th.Header').html()) != "undefined") {
        //
        //  News in a Table structure
        //
        $('tr.Data').each(function () {
            var hideThis = false;
            var newsDateArr = $(this).find('.date').attr('id').split('-');

            var newsYear = newsDateArr[0];
            var newsMonth = newsDateArr[1];
            var newsFilters = $(this).find('.title').attr('id');
            var newsHeadlie = $(this).find('.title').html().toLowerCase();

            //
            //  Periond filters
            //
            if (newsYear < searchFromYear) {
                $(this).addClass('hide');
                hideThis = true;
            }
            if (newsYear > searchToYear) {
                $(this).addClass('hide');
                hideThis = true;
            }

            //
            //  Category filters
            //
            if (searchFilters.indexOf('allRNSnews') == -1) {
                if (searchFilters.indexOf(newsFilters) < 1) {
                    $(this).addClass('hide');
                    hideThis = true;
                }
            }

            //
            //  Headline filter
            //
            if (newsHeadlie.indexOf(searchedText) == -1) {
                $(this).addClass('hide');
                hideThis = true;
            }
        });

    }

    setNewsPagination();

}
function newsAddDistinctFilter(filters) {
    debugStep("newsAddDistinctFilter");
    var RNSFiltersToReturn = "";
    var filtersArr = filters.split(';');
    for (var i = 0; i < filtersArr.length; i++) {
        if (filtersArr[1] == 'allRNSnews') {

            return ';allRNSnews';
        } else {
            if (RNSFiltersToReturn.indexOf(filtersArr[i]) == -1) {
                RNSFiltersToReturn += ";" + filtersArr[i];
            }
        }
    }
    return RNSFiltersToReturn;
}

function IRChartNavigationCloseOpenBodyDivs() {
    $('.IRChartComparisonBody, .IRChartTABody, .IRChartTSRBody').css('display', 'none');
}
function IRChartNavigationShowHide(navBody) {
    var timer;
    $('.' + navBody).on({
        mouseenter: function () {
            var self = this;
            clearTimeout(timer);
            timer = setTimeout(function () {
                $(self).fadeIn();
                $(self).parent().addClass('active');
            }, 100)
        },
        mouseleave: function () {
            var self = this;
            setTimeout(function () {
                if (!$(self).is(":hover")) {
                    $(self).fadeOut(300);
                    $(self).parent().removeClass('active');
                    $('.IRChartMenuTriggerBody').fadeOut(300);
                    $('.IRChartMenuTriggerBody').removeClass('active');

                }
            }, 500);
        }
    });
}
function IRChartNavigationHideAll() {
    if (typeof ($('.IRChartMenuTrigger')) == 'object') {
        $('.IRChartMenuTriggerBody, .IRChartTABody, .IRChartComparisonBody, .IRChartTSRBody').css('display', 'none');
    }
}
function IRChartEventSendExtremes(extremes) {
    $('.IRChartDomFromDate').html(Highcharts.dateFormat('%Y-%m-%d', extremes.userMin));
    $('.IRChartDomToDate').html(Highcharts.dateFormat('%Y-%m-%d', extremes.userMax));

    globalChartFromDate = Highcharts.dateFormat('%Y-%m-%d', extremes.userMin);
    globalChartToDate = Highcharts.dateFormat('%Y-%m-%d', extremes.userMax);
}
function IRChartEventUpdateIRChartComparisonPlotLine(extremes, e) {
    var unixMin = extremes.userMin;
    var unixMax = extremes.userMax;

    var IRChartCompareChangePlotY = 0;

    if (typeof (e.currentTarget.series[0]) == "object") {
        IRChartCompareChangePlotY = e.currentTarget.series[0].points[e.currentTarget.series[0].points.length - 1].change;
    }

    var minVal = 0;
    var maxVal = 0;

    if (typeof (globalChartListingStockData[globalActiveListingIndex][getClosestDateIndexForListingClosePrice(unixMax) + 1]) == 'object' &&
        typeof (globalChartListingStockData[globalActiveListingIndex][getClosestDateIndexForListingClosePrice(unixMin)]) == 'object') {
        minVal = globalChartListingStockData[globalActiveListingIndex][getClosestDateIndexForListingClosePrice(unixMin)][1];
        maxVal = globalChartListingStockData[globalActiveListingIndex][getClosestDateIndexForListingClosePrice(unixMax) + 1][1];
    }

    globalChartDom = getChartDOM();

    var yValue = IRChartCompareChangePlotY;
    var offsetX = 70;


    var lastPrice = globalRawStockData[globalActiveListingIndex].last;
    var lastPriceTime = new moment.tz(globalRawStockData[globalActiveListingIndex].timestamp, globalActiveExchangeTimeZone).add(clientStyle.manualTimeOffset, 'hours').format(clientStyle.formatTime);

    var text = "";
    text += '<div class="chartCurrentPriceBoxOuter"><div class="chartCurrentPriceBox" style="border: 1px solid ' + clientStyle.chart_ColourMain + ';background-color: ' + clientStyle.chart_ColourMain + ';"><div class="chartCurrentPriceBoxArrow"><div class="irCPB1" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div><div class="irCPB2" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div><div class="irCPB3" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div></div>';
    text += '<div class="chartLastPrice">' + formatDecimal(lastPrice) + '</div><br />';
    text += '<div class="chartLastPriceTime">' + lastPriceTime + '</div>';
    text += '</div></div>';


    globalChartDom.yAxis[0].removePlotLine('chartPlotLine');
    globalChartDom.yAxis[0].removePlotLine('chartPlotLineZero');
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
    globalChartDom.yAxis[0].addPlotLine({
        value: 0,
        width: 1,
        color: '#aaa',
        dashStyle: 'solid',
        id: 'chartPlotLineZero',
        zIndex: 1000,
        label: {
            text: ' ',
            align: 'right',
            y: 0,
            x: offsetX,
            width: 0,
            useHTML: true
        }
    });


}

function getUnixFromDate(date) {
    return new moment(date).valueOf();
}
function getProfilePerformanceDataForPeriod(period, useOpenHighLowOrClose, closePriceData, stockData, typeOfData) {
    var subIterations = 0;
    var unixDate;
    switch (period) {
        case "m1":
            unixDate = new moment(new moment().add(-30, 'days').format("YYYY-MM-DD")).valueOf();
            break;
        case "m3":
            unixDate = new moment(new moment().add(-90, 'days').format("YYYY-MM-DD")).valueOf();
            break;
        case "y1":
            unixDate = new moment(new moment().add(-365, 'days').format("YYYY-MM-DD")).valueOf();
            break;
    }
    var dates = [];
    for (var i = 0; i < closePriceData.length; i++) {
        dates.push(new moment(new moment(closePriceData[i].date).format("YYYY-MM-DD")).valueOf());
        subIterations++;
    }
    var index = getClosestDateFromDateArray(unixDate, dates);

    if (index == -1 && useOpenHighLowOrClose != 'showRecentPrice') {
        return "-";
    }

    switch (useOpenHighLowOrClose) {
        case 'close':
            if (typeOfData == 'listing') {
                return stockData.last - closePriceData[index].closePrice;
            }
            break;
        default:
            return "-";
            break;
    }
}
function getClosestDateFromDateArray(unixDate, dateArr) {
    return dateArr.bestMatch(unixDate);
}

Array.prototype.bestMatch = function (needle) {
    var index = this.length - 1;
    var prevIndex = 0;
    var match = false;
    var matchIndex = -1;
    var max = index;
    var min = 0;
    var iterations = 0;
    var stopAt = 1000; // Backup insurance.

    if (this.indexOf(needle) > -1) {
        // Match
        index = this.indexOf(needle);
        matchIndex = index;
        iterations++;
    } else {
        if (needle > this[index]) {
            matchIndex = max;
            match = true;
        }
        while (!match && stopAt > 0) {
            if (needle < this[index]) {
                max = index;
                index = randomIntBetween(min + 1, max - 1);
            } else if (needle > this[index]) {
                min = index;
                index = randomIntBetween(min + 1, max - 1);
            }
            if (max - min == 1) {
                match = true;
                matchIndex = min;
            }
            prevIndex = index;
            iterations++;
            stopAt--;
        }
    }
    return matchIndex;
};

//
//  Comparison
//
function getAmountOfPxFromTop(amountOfComprisons) {
    var px = 0;
    switch (amountOfComprisons) {
        case 1:
            px = 5;
            break;
        case 2:
            px = -9;
            break;
        case 3:
            px = -23;
            break;
        case 4:
            px = -37;
            break;
        case 5:
            px = -52;
            break;
        case 6:
            px = -65;
            break;
        case 7:
            px = -79;
            break;
        case 8:
            px = -93;
            break;
        case 9:
            px = -107;
            break;
        case 10:
            px = -121;
            break;
        case 11:
            px = -135;
            break;
        case 12:
            px = -149;
            break;
        case 13:
            px = -162;
            break;
        case 14:
            px = -176;
            break;
        default:
            px = 0;
            break;
    }
    return px;
}
function updateTooltipComparisonDC(date) {
    debugStep("updateTooltipComparisonDC");
    var dateIndex;
    var amountOfComparisonsInChart = 0;
    for (var i = 0; i < globalChartComparisonInChart.length; i++) {
        amountOfComparisonsInChart += globalChartComparisonInChart[i];
    }
    var value = "-";
    var tooltipStr = "<div class=\"tooltipHtmlComparison " + globalChartActiveDisplayMode + "Mode\" style=\"top: " + getAmountOfPxFromTop(amountOfComparisonsInChart) + "px\">";

    try {
        dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
        tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
        tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator active\" style=\"border-left-color: " + globalChartColours[0] + ";\"></span>" + globalRawStockData[globalActiveListingIndex].symbol + ": </span> <span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
        for (var i = 0; i < globalChartComparisonData[0].length; i++) {

            if (globalChartComparisonInChart[i + 1] == 1) {
                tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator color" + globalChartColours[i + 1].replace('#', '') + " active\"></span>" + globalChartComparisonSymbols[i] + ": </span> <span class=\"subContent\">" + formatDecimal(globalChartComparisonData[0][i][dateIndex][1]) + "</span></div>";
            }
        }
    }
    catch (err) {
        var newDateIndex = getClosestDateIndexForListingClosePrice(date);
        tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][0]).format(clientStyle.formatDate) + "</div>";
        tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator active\" style=\"border-left-color: " + globalChartColours[0] + ";\"></span>" + globalRawStockData[globalActiveListingIndex].symbol + ": </span> <span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][1]) + "</span></div>";
        for (var i = 0; i < globalChartComparisonData[0].length; i++) {
            if (globalChartComparisonInChart[i + 1] == 1) {
                tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator color" + globalChartColours[i + 1].replace('#', '') + " active\"></span>" + globalChartComparisonSymbols[i] + ": </span> <span class=\"subContent\">" + formatDecimal(globalChartComparisonData[0][i][newDateIndex][1]) + "</span></div>";
            }
        }
    }
    tooltipStr += "</div>";

    // NewsFlags JRJR
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
                var bottom = (chartHeight - 250) * -1;
            }

            tooltipStr += "<div class=\"tooltipHtmlNews\" style=\"bottom: " + bottom + "px;\">";
            tooltipStr += "<div class=\"tooltipHtmlNewsDate\">" + new moment(globalChartNewsDates[newsIndex]).format(clientStyle.formatDate) + "</div>";
            tooltipStr += "<div class=\"tooltipHtmlNewsHeadline\">" + IRNewsHeadline + "</div>";
            tooltipStr += "</div>";
        }
    }
    if (useIRChartPressReleaseIRChartHeadline || useIRChartPressRelease) {
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
                var bottom = (chartHeight - 250) * -1;
            }

            tooltipStr += "<div class=\"tooltipHtmlNews\" style=\"bottom: " + bottom + "px;\">";
            tooltipStr += "<div class=\"tooltipHtmlNewsDate\">" + new moment(globalChartPressReleaseIRChartHeadlineDates[newsIndex]).format(clientStyle.formatDate) + "</div>";
            tooltipStr += "<div class=\"tooltipHtmlNewsHeadline\">" + IRNewsHeadline + "</div>";
            tooltipStr += "</div>";
        }
    }

    return tooltipStr;
}
//
//  Currency Conversion
//
function updateIRChartCurrencyConversion(id, toCurrency) {
    debugStep("updateIRChartCurrencyConversion(" + id + "," + toCurrency + ")");

    switch (id) {

        case "IRChartCurrencyConversionAdjustedPrice":
            loadCurrencyConversionAdjustedPrice(toCurrency);
            applyCurrencyConversion(id);
            //applyAnalysis("CommodityChannelIndex", "CCI");
            break;
    }

}
function loadCurrencyConversionAdjustedPrice() {

}
function applyCurrencyConversion(id) {
    switch (id) {

        case "IRChartCurrencyConversionAdjustedPrice":
            $.when(requestAnalysisSimpleMovingAverageData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort);
            });
            break;
    }
}

//
//  Technical Analysis
//
function updateTooltipTechnicalAnalysisDP(date) {
    debugStep("updateTooltipTechnicalAnalysisDP");
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
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                //tooltipStr += "<div>" + getOHLCfromTranslations('o') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</div>";
                //tooltipStr += "<div>" + getOHLCfromTranslations('h') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                //tooltipStr += "<div>" + getOHLCfromTranslations('l') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('c') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('v') + " " + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }

            if (useIRChartTA) {

                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    //tooltipStr += "<div class=\"tooltipHtmlTA\">";
                    //tooltipStr += "<div class=\"tooltipHtmlTARow\">SMA: " + formatDecimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    //tooltipStr += "</div>";
                    tooltipStr += "<div>" + globalActiveTAShort + ": " + formatDecimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>" + globalActiveTAShort + ": " + formatDecimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
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

                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {

                dateIndex = getClosestDateIndexForListingIntraday(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('o') + " " + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('h') + " " + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('l') + " " + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('c') + " " + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";

                tooltipStr += "<div>" + getOHLCfromTranslations('v') + " " + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
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
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                //tooltipStr += "<div>" + getOHLCfromTranslations('o') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</div>";
                //tooltipStr += "<div>" + getOHLCfromTranslations('h') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                //tooltipStr += "<div>" + getOHLCfromTranslations('l') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('c') + " " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('v') + " " + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }

            if (useIRChartTA) {

                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    //tooltipStr += "<div class=\"tooltipHtmlTA\">";
                    //tooltipStr += "<div class=\"tooltipHtmlTARow\">SMA: " + formatDecimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    //tooltipStr += "</div>";
                    tooltipStr += "<div>" + globalActiveTAShort + ": " + formatDecimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>" + globalActiveTAShort + ": " + formatDecimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
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
    switch (TAName) {
        case "BollingerBands":
            $.when(requestAnalysisBollingerBandsData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort);
            });
            break;
        case "SimpleMovingAverage":
            $.when(requestAnalysisSimpleMovingAverageData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort);
            });
            break;
        case "ExponentialMovingAverage":
            $.when(requestAnalysisExponentialMovingAverageData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort);
            });
            break;
        case "CommodityChannelIndex":
            $.when(requestAnalysisCommodityChannelIndexData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort);
            });
            break;
        case "DirectionalMovementIndex":
            $.when(requestAnalysisDirectionalMovementIndexData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort);
            });
            break;
        case "Momentum":
            $.when(requestAnalysisMomentumData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort);
            });
            break;
        case "MoneyFlowIndex":
            $.when(requestAnalysisMoneyFlowIndexData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort);
            });
            break;
        case "RateOfChange":
            $.when(requestAnalysisRateOfChangeData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort);
            });
            break;
        case "RelativeStrengthIndex":
            $.when(requestAnalysisRelativeStrengthIndexData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort);
            });
            break;
        case "WilliamsPercentR":
            $.when(requestAnalysisWilliamsPercentRData).done(function (dataTA) {
                applyAnalysisToChart(dataTA, TAShort);
            });
            break;



    }
}
function applyAnalysisToChart(dataTA, TAShort) {
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
    activeTA += '<span>' + TAShort + '</span>';// | <div class="TASettings">Period: <input class="TASettingsInput" type="Number" value="10" /><div class="TASettingsUpdate" id="SimpleMovingAverage">Update</div></div>';
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
function resetIRChartNavigation() {
    debugStep("resetIRChartNavigation");
    $('.IRChartComparisonPlaceholder div').css('display', 'none');
    $('.IRChartNavigation .IRChartComparison .IRChartComparisonBodyList .basicButtonLook').removeClass('active');
    $('.IRChartTSRPlaceholder div').css('display', 'none');
    $('.IRChartNavigation .IRChartTSR .IRChartTSRBodyList .basicButtonLook').removeClass('active');
    globalChartComparisonsInChart = 0;
    $('.IRChartTAPlaceholder').html('');
    if (useIRChartTSR) {
        $('.IRChartTSRPlaceholder').html('');
    }
    $('.IRChartTechnicalAnalysisActiveTAControls').html('');
}
function resetIRChart() {
    debugStep("resetIRChart");
    resetIRChartNavigation();
    redrawIRChartHTMLHistorical();
    setChartExtremes(chartDisplayModes.historical, 360);
    drawPlotLineToChart();
    if (useIRChartNews) {
        drawIRNewsToChartHistorical();
    }
    if (useIRChartPressReleaseIRChartHeadline) {
        $.when(requestStockData, requestPressReleaseIRChartHeadlineData).done(function (stockData, newsDataInitial) {
            var o = {
                headers: translations,
                data: newsDataInitial[0].data
            }
            preloadIRChartPressReleaseIRChartHeadlineHistorical(o);
        });
    }
    if (useIRChartPressRelease) {
        $.when(requestStockData, requestPressReleaseData).done(function (stockData, newsDataInitial) {
            var o = {
                headers: translations,
                data: newsDataInitial[0].data
            }
            preloadIRChartPressReleaseHistorical(o);
        });
    }
}

function updateTSR(id) {

    debugStep("updateTSR(" + id + ")");

    if (globalChartActiveDisplayMode != chartDisplayModes.tsr) {
        resetIRChartNavigation();
        globalChartActiveDisplayMode = chartDisplayModes.tsr;
    }

    switch (id) {
        case "TSRSimple":
            if (IRChartTSR.fetchData) {
                loadDividendBundle(clientStyle.amountOfHistoricalYears, 10);
                IRChartTSR.fetchData = false;
                applyTSR("Simple");
            } else {
                applyTSR("Simple");
            }
            break;
    }

}

function applyTSR(TSRMode) {

    globalChartActiveDisplayMode = chartDisplayModes.tsr;

    clientStyle.chart_CustomTooltipTopPX = -10;

    switch (TSRMode) {
        case "Simple":
            $.when(requestDividendBundle).done(function (dataTSR) {
                applyTSRToChart(dataTSR, TSRMode);
            });
            break;
    }
}
function applyTSRToChart(dataTSR, TSRMode) {
    debugStep("applyTSRToChart");

    globalRawTSRData = dataTSR;
    var colourIndex = 1;
    var closePriceIndexLocation = 3;
    var TSRDataRaw = dataTSR.dividend[globalActiveListingIndex].data;
    var CPDataForTSR = globalChartListingStockData[globalActiveListingIndex];

    IRChartTSR.rawDividendData = TSRDataRaw;
    //TSRDataRaw.reverse();

    var TSRDataExtDates = [];
    var TSRDataDividends = [];


    $.each(TSRDataRaw, function (index, data) {

        var stockDataDateOnly = new moment(data.extDate).format("YYYY-MM-DD");
        var dateUnix = new moment(stockDataDateOnly + 'T00:00:00.0000000Z').valueOf();

        TSRDataExtDates.push(dateUnix);
        TSRDataDividends.push(data.dividendValue);
    });

    redrawIRChartHTMLHistorical();
    globalChartActiveDisplayMode = chartDisplayModes.tsr;

    IRChartTSR.dividendDatesAll = TSRDataExtDates;
    IRChartTSR.dividendValuesAll = TSRDataDividends;

    var TSRArrayForChart = [];
    var HistoricalArrayForChartClose = [];
    var TSRArrayForChartClose = [];
    var TSRArrayForChartCloseDates = [];
    var dividendTotal = 0;
    var dividendIndex = 0;

    $.each(CPDataForTSR, function (index, cpData) {

        if (IRChartTSR.dividendDatesAll[dividendIndex] == cpData[0]) {

            dividendTotal = dividendTotal + IRChartTSR.dividendValuesAll[dividendIndex];
            IRChartTSR.dividendDatesInChart.push(IRChartTSR.dividendDatesAll[dividendIndex]);
            dividendIndex++;
        }

        var price = cpData[closePriceIndexLocation] + dividendTotal;
        HistoricalArrayForChartClose.push([cpData[0], cpData[closePriceIndexLocation]]);  // Data for displaying the tooltip.
        TSRArrayForChart.push([cpData[0], price]); // Data for plotting the chart.
        TSRArrayForChartCloseDates.push(cpData[0]); // Dates only to get index locations using indexOf.
        TSRArrayForChartClose.push([cpData[0], price]);
    });


    IRChartTSR.stockDataCloneClose = HistoricalArrayForChartClose; // Tooltip
    IRChartTSR.stockDataTSRCloneDates = TSRArrayForChartCloseDates; // Dates only to get index locations using indexOf.
    IRChartTSR.stockDataTSRClone = TSRArrayForChartClose;

    globalChartDom.addSeries({
        id: 42,
        index: 2,
        zIndex: 1,
        data: TSRArrayForChart,
        color: shadeColor(clientStyle.chart_ColourMain, 0.25),
        yAxis: 0,
        name: 'TSR',
        visible: true,
        linkedTo: 0,
        type: 'line'
    }, false, 0);

    setChartExtremes(chartDisplayModes.historical, 360);

    globalChartDom.redraw();
    initTSRUpdateInterval();
}
function shadeColor(color, percent) {
    var f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}
function reApplyTSRToChart() {
    debugStep("reApplyTSRToChart");

    var indexMin = getClosestDateIndexForListingClosePriceWithDataArray(globalChartListingStockDataDates[globalActiveListingIndex], IRChartTSR.selectedMin);
    var indexMax = getClosestDateIndexForListingClosePriceWithDataArray(globalChartListingStockDataDates[globalActiveListingIndex], IRChartTSR.selectedMax);

    var croppedChartListingStockDataDates = globalChartListingStockDataDates[globalActiveListingIndex].slice(indexMin, indexMax);
    var croppedChartListingStockData = globalChartListingStockData[globalActiveListingIndex].slice(indexMin, indexMax);

    var TSRArrayForChartClose = [];
    var TSRArrayForChartCloseDates = [];
    var HistoricalArrayForChartClose = [];
    var dividendTotal = 0;
    var dividendIndex = 0;

    IRChartTSR.dividendDatesInChart = [];

    // Iterate through alle historical prices.
    $.each(croppedChartListingStockData, function (index, cpData) {

        if (IRChartTSR.dividendDatesAll[dividendIndex] == cpData[0]) {
            dividendTotal = dividendTotal + IRChartTSR.dividendValuesAll[dividendIndex];
            IRChartTSR.dividendDatesInChart.push(cpData[0]); // Save dividends used in the chart in the current calculation.
            dividendIndex++;
        } else {
            if (IRChartTSR.dividendDatesAll[dividendIndex] < cpData[0]) {
                // Skip dividends that are not within the from and to date.
                for (var i = dividendIndex; i < IRChartTSR.dividendDatesAll.length - 1; i++) {
                    if (IRChartTSR.dividendDatesAll[i] < cpData[0]) {
                        dividendIndex++;
                    }
                }
            }
        }

        var price = cpData[1] + dividendTotal;
        TSRArrayForChartClose.push([cpData[0], price]); // Data for plotting the chart.
        TSRArrayForChartCloseDates.push(cpData[0]); // Dates only to get index locations using indexOf.
        HistoricalArrayForChartClose.push([cpData[0], cpData[1]]); // Data for displaying the tooltip.
    });

    IRChartTSR.stockDataTSRClone = TSRArrayForChartClose; // Data for plotting the chart.
    IRChartTSR.stockDataCloneClose = HistoricalArrayForChartClose; // Data for displaying the tooltip.
    IRChartTSR.stockDataTSRCloneDates = TSRArrayForChartCloseDates; // Dates only to get index locations using indexOf.

    globalChartDom.series[2].setData(IRChartTSR.stockDataTSRClone); // Update chart
}
function initTSRUpdateInterval() {
    debugStep("initTSRUpdateInterval()");

    setInterval(function () {
        var indexMin = getClosestDateIndexForListingClosePriceWithDataArray(globalChartListingStockDataDates[globalActiveListingIndex], IRChartTSR.selectedMin);
        var indexMax = getClosestDateIndexForListingClosePriceWithDataArray(globalChartListingStockDataDates[globalActiveListingIndex], IRChartTSR.selectedMax);

        var croppedChartListingStockData = globalChartListingStockData[globalActiveListingIndex].slice(indexMin, indexMax);

        var tmpDividendDatesInChart = [];
        var dividendIndex = 0;

        $.each(croppedChartListingStockData, function (index, cpData) {
            if (IRChartTSR.dividendDatesAll[dividendIndex] == cpData[0]) {
                tmpDividendDatesInChart.push(cpData[0]);
                dividendIndex++;
            } else {
                if (IRChartTSR.dividendDatesAll[dividendIndex] < cpData[0]) {

                    for (var i = dividendIndex; i < IRChartTSR.dividendDatesAll.length - 1; i++) {

                        if (IRChartTSR.dividendDatesAll[i] < cpData[0]) {
                            dividendIndex++;
                        }

                    }
                }
            }

        });

        if (tmpDividendDatesInChart.length != IRChartTSR.dividendDatesInChart.length) {
            debugStep("TSR: A");
            debugStep("tmpDividendDatesInChart.length: " + tmpDividendDatesInChart.length);
            debugStep("IRChartTSR.dividendDatesInChart.length: " + IRChartTSR.dividendDatesInChart.length);

            IRChartTSR.redrawTSR = true;
        } else if (tmpDividendDatesInChart.length == IRChartTSR.dividendDatesInChart.length) {

            if (IRChartTSR.selectedMin < IRChartTSR.lastSelectedMin) {
                debugStep("TSR: B");
                IRChartTSR.redrawTSR = true;
            } else if (IRChartTSR.selectedMax > IRChartTSR.lastSelectedMax) {
                debugStep("TSR: C");
                IRChartTSR.redrawTSR = true;
            }
        }

        IRChartTSR.lastSelectedMin = IRChartTSR.selectedMin;
        IRChartTSR.lastSelectedMax = IRChartTSR.selectedMax;

        if (IRChartTSR.redrawTSR) {
            IRChartTSR.redrawTSR = false;
            reApplyTSRToChart();
        }
    }, 500);
}

var IRChartTechnicalAnalysisData = {
    stockDataTASMA: null,
    stockDataTAWillPctR: null,
    stockDataTAROC: null,
    stockDataTAHist: null,
    stockDataTAMACD: null,
    stockDataTASignal: null,
    stockDataTAUpper: null,
    stockDataTAMiddle: null,
    stockDataTALower: null,
    stockDataTAMomentum: null,
    stockDataTAPSAR: null
};


var IRChartTechnicalAnalysis = {

    useShortOrLongNames: 'short',
    activeAnalysis: null,
    stockDataTAColours: {
        RSI: '#657685',
        MACD: '#657685',
        MACDHist: '#657685',
        MACDSignal: '#657685',
        BBandUpper: '#5587B9',
        BBandMiddle: '#657685',
        BBandLower: '#657685',
        MAEUpper: '#5587B9',
        MAEMiddle: '#657685',
        MAELower: '#657685',
        WillPctR: '#657685',
        Momentum: '#657685'
    },
    includeTA: function (ta) {
        debugStep("IRChartTechnicalAnalysisControls.includeTA");
        var taClass = "IRChartTA" + ta;
        var taName = "";
        var taTitle = "";

        switch (ta) {
            case "SMA":
                taName += translations.t_simple_moving_average;
                break;
            case "EMA":
                taName += translations.t_exponential_moving_average;
                break;
            case "BBands":
                taName += translations.t_bollinger_bands;
                break;
            case "MACD":
                taName += translations.t_moving_average_convergence_slash_divergence;
                break;
            case "RoC":
                taName += translations.t_rate_of_change;
                break;
            case "MAES":
                taName += translations.t_moving_average_envelope + " simple";
                break;
            case "MAEE":
                taName += translations.t_moving_average_envelope + " exponential";
                break;
            case "RSI":
                taName += translations.t_relative_strength_index;
                break;
            case "Momentum":
                taName += translations.t_momentum;
                break;
            case "PSAR":
                taName += translations.t_parabolic_sar;
                break;
            case "WillPctR":
                taName += translations.t_williams_percent_r;
                break;
            default:
                debugError("TechnicalAnalysis (" + ta + ") not yet implemented!");
                return '';
                break;
        }

        taTitle = taName;

        if (this.useShortOrLongNames != 'long') {
            taName = ta;
        }

        return '<div id="' + taClass + '" class="IRChartTA ' + taClass + '" title="' + taTitle + '">' + taName + '</div>';
    },

    updateTechnicalAnalysis: function (id) {
        debugStep("IRChartTechnicalAnalysisControls.updateTechnicalAnalysis(" + id + ")");

        if (globalChartActiveDisplayMode != chartDisplayModes.technicalAnalysis) {
            globalChartActiveDisplayMode = chartDisplayModes.technicalAnalysis;

        }

        $('.IRChartTA').removeClass('active');
        $('.IRChartTA.' + id).addClass('active');

        IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis(id);
        globalActiveTAShort = id.replace("IRChartTA", "");

        switch (id) {
            case "IRChartTASMA":
                loadAnalysisSimpleMovingAverage(clientStyle.amountOfHistoricalYears, 10);
                IRChartTechnicalAnalysis.applySMA('SMA', 10);
                break;
            case "IRChartTAEMA":
                loadAnalysisExponentialMovingAverage(clientStyle.amountOfHistoricalYears, 10);
                IRChartTechnicalAnalysis.applyEMA('EMA', 10);
                break;
            case "IRChartTAMACD":
                loadAnalysisMovingAverageConvergenceDivergence(clientStyle.amountOfHistoricalYears, 12, 26, 9);
                IRChartTechnicalAnalysis.applyMACD('MACD', 12, 26, 9);
                break;
            case "IRChartTABBands":
                loadAnalysisBollingerBands(clientStyle.amountOfHistoricalYears, 20, 2);
                IRChartTechnicalAnalysis.applyBBands('BBands', 20, 2);
                break;
            case "IRChartTARoC":
                loadAnalysisRateOfChange(clientStyle.amountOfHistoricalYears, 10);
                IRChartTechnicalAnalysis.applyRoC('RoC', 10);
                break;
            case "IRChartTAMAES":
                loadAnalysisMovingAverageEnvelopeSimple(clientStyle.amountOfHistoricalYears, 20, 2);
                IRChartTechnicalAnalysis.applyMAES('MAES', 20, 2);
                break;
            case "IRChartTAMAEE":
                loadAnalysisMovingAverageEnvelopeExponential(clientStyle.amountOfHistoricalYears, 20, 2);
                IRChartTechnicalAnalysis.applyMAEE('MAEE', 20, 2);
                break;
            case "IRChartTAWillPctR":
                loadAnalysisWilliamsPercentR(clientStyle.amountOfHistoricalYears, 10);
                IRChartTechnicalAnalysis.applyWillPctR('WillPctR', 10);
                break;
            case "IRChartTARSI":
                loadAnalysisRelativeStrengthIndex(clientStyle.amountOfHistoricalYears, 10);
                IRChartTechnicalAnalysis.applyRSI('RSI', 10);
                break;
            case "IRChartTAMomentum":
                loadAnalysisMomentum(clientStyle.amountOfHistoricalYears, 10);
                IRChartTechnicalAnalysis.applyMomentum('Momentum', 10);
                break;
            case "IRChartTAPSAR":
                loadAnalysisParabolicSar(clientStyle.amountOfHistoricalYears, 0.02);
                IRChartTechnicalAnalysis.applyPSAR('PSAR', 0.02);
                break;
            default:
                debugError("updateTechnicalAnalysis [" + id + "] is not yet implemented!");
                break;
        }

    },

    redrawIRChartInModeTechnicalAnalysis: function (ta) {
        debugStep("IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis");
        globalChartDom.destroy();
        globalChartContainer = ".IRChartPlaceholder";

        globalActiveTAShort = ta.replace("IRChartTA", "");

        switch (ta) {
            case 'IRChartTASMA':
            case 'IRChartTAEMA':
            case 'IRChartTABBands':
            case 'IRChartTAMAES':
            case 'IRChartTAMAEE':
            case 'IRChartTAPSAR':
                IRChartTechnicalAnalysis.drawIRChartTechnicalAnalysis("single");
                break;
            case 'IRChartTAMACD':
            case 'IRChartTARoC':
            case 'IRChartTARSI':
            case 'IRChartTAMomentum':
            case 'IRChartTAWillPctR':
                IRChartTechnicalAnalysis.drawIRChartTechnicalAnalysis("dual");
                break;
            default:
                debugError("redrawIRChartInModeTechnicalAnalysis is missing handler for (" + ta + ")");
                break;
        }
    },

    drawIRChartTechnicalAnalysis: function (chartMode) {
        debugStep("IRChartTechnicalAnalysis.drawIRChartTechnicalAnalysis(" + chartMode + ")");
        switch (chartMode) {
            case "single":

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
                            return IRChartTechnicalAnalysis.updateTooltip(unixDateTime);
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

                            return {
                                x: plotX, y: plotY
                            };
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
                            },
                            states: {
                                hover: {
                                    enabled: true,
                                    lineWidth: 0,
                                    halo: {
                                        opacity: 0,
                                        size: 2
                                    }
                                }
                            }
                        },
                        line: IRChartTechnicalAnalysis.drawIRChartTechnicalAnalysisSetingsPlotOptionsLine(),
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

                break;
            case "dual":

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
                            return IRChartTechnicalAnalysis.updateTooltip(unixDateTime);
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

                            return {
                                x: plotX, y: plotY
                            };
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
                                color: '#aaa'
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
                            },
                            marker: {
                                symbol: 'circle',
                                radius: 2,
                                states: {
                                    hover: {
                                        enabled: true,
                                        lineWidth: 0,
                                        halo: {
                                            opacity: 0,
                                            size: 2
                                        }
                                    }
                                }
                            }
                        },
                        spline: {
                            marker: {
                                symbol: 'circle',
                                radius: 2,
                                states: {
                                    hover: {
                                        enabled: true,
                                        lineWidth: 0,
                                        halo: {
                                            opacity: 0,
                                            size: 2
                                        }
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
                                radius: 2,
                                states: {
                                    hover: {
                                        enabled: true,
                                        lineWidth: 0,
                                        halo: {
                                            opacity: 0,
                                            size: 2
                                        }
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

                break;
        }
        globalChartDom = getChartDOM();
        drawActiveListingToChartHistorical();
    },
    drawIRChartTechnicalAnalysisSetingsPlotOptionsLine: function () {

        var ret = null;

        switch (globalActiveTAShort) {
            case "PSAR":
                return {
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: false
                    },
                    lineWidth: 0,
                    marker: {
                        enabled: true,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true,
                                lineWidth: 0,
                                halo: {
                                    opacity: 0,
                                    size: 2
                                }
                            }
                        }
                    }
                };
                break;
            default:
                return {
                    animation: {
                        duration: globalChartAnimationMS
                    },
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 10,
                        forced: true,
                        approximation: 'close'
                    },
                    marker: {
                        symbol: 'circle',
                        states: {
                            hover: {
                                enabled: true,
                                lineWidth: 0,
                                halo: {
                                    opacity: 0,
                                    size: 2
                                }
                            }
                        }
                    }
                };
                break;
        }
    },

    updateTooltip: function (date) {
        debugStep("updateTooltipTechnicalAnalysisCustom");

        var dateIndex;

        var topPxStyle = "";
        switch (globalActiveTAShort) {
            case "EMA":
            case "SMA":
            case "RoC":
            case "WillPctR":
            case "RSI":
            case "Momentum":
            case "PSAR":
                topPxStyle = "style=\"top: -9px\"";
                break;
            case "MACD":
                topPxStyle = "style=\"top: -36px\"";
                break;
        }

        var tooltipStr = "<div " + topPxStyle + " class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode \">";
        try {
            dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
            tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
            tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
            tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
        }
        catch (err) {
            try {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            } catch (err) {
                debugError("error lvl 3 in IRChartTechnicalAnalysis.updateTooltip");
            }
        }

        switch (globalActiveTAShort) {

            case "SMA":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>SMA: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTASMA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    if (dateIndex > IRChartTechnicalAnalysisData.stockDataTASMA[globalActiveListingIndex].length - 1) {
                        dateIndex = IRChartTechnicalAnalysisData.stockDataTASMA[globalActiveListingIndex].length - 1;
                    }
                    tooltipStr += "<div>SMA: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTASMA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "EMA":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>EMA: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAEMA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>EMA: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAEMA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "MACD":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>Hist: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAHist[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>MACD: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAMACD[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Signal: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTASignal[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>Hist: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAHist[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>MACD: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAMACD[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Signal: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTASignal[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "RoC":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>ROC: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAROC[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>ROC: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAROC[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "BBands":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>Upper: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAUpper[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Middle: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAMiddle[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Lower: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTALower[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>Upper: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAUpper[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Middle: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAMiddle[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Lower: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTALower[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "MAES":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>Upper: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAUpper[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Middle: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAMiddle[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Lower: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTALower[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>Upper: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAUpper[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Middle: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAMiddle[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Lower: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTALower[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "MAEE":
            case "MAES":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>Upper: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAUpper[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Middle: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAMiddle[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Lower: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTALower[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>Upper: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAUpper[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Middle: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAMiddle[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Lower: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTALower[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "WillPctR":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>Will %R: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAWillPctR[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>Will %R: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAWillPctR[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "RSI":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>" + globalActiveTAShort + ": " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTARSI[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>" + globalActiveTAShort + ": " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTARSI[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "Momentum":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>" + globalActiveTAShort + ": " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAMomentum[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>" + globalActiveTAShort + ": " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAMomentum[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "PSAR":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>PSAR: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAPSAR[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>PSAR: " + formatDecimal(IRChartTechnicalAnalysisData.stockDataTAPSAR[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            default:
                debugError("IRChartTechnicalAnalysis.updateTooltip is missing handler for '" + globalActiveTAShort + "\'");
                debugger;
                break;

        }
        tooltipStr += "</div>";

        return tooltipStr;
    },

    redrawActiveSettings: function (settings) {
        debugStep("redrawActiveSettings");

        $('.IRChartComparisonPlaceholder div').css('display', 'none');
        resetIRChartNavigation();

        var settingsControls = "<div id=\"" + globalActiveTAShort + "\" class=\"IRChartTechnicalAnalysisActiveSettings\">";
        settingsControls += "<div>" + globalActiveTAShort + "</div>";
        settingsControls += "<div id=\"hidden\" class=\"showHideMe\">[Hide]</div>";
        for (var i = 0; i < settings.length; i++) {

            var title = '';
            if (typeof (settings[i].title) == "string") {
                title = settings[i].title;
            }

            settingsControls += "<div class=\"settingsPlaceholder\"><span title=\"" + title + "\">" + settings[i].name + ":</span><input class=\"setting" + settings[i].name + "\" type=\"text\" value=\"" + settings[i].value + "\" /></div>";
        }
        settingsControls += "<div class=\"settingsPlaceholder\"><div id=\"" + globalActiveTAShort + "\" class=\"updateButton\">Update</div>";
        settingsControls += "</div>";
        $('.IRChartTechnicalAnalysisActiveTAControls').html(settingsControls);

        for (var i = 0; i < settings.length; i++) {
            $('.IRChartTechnicalAnalysisActiveTAControls setting' + settings[i].name.toString() + '').val(settings[i].value);
        }

        IRChartTechnicalAnalysis.clickHandlerShowHide();

    },

    clickHandlerShowHide: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .showHideMe').off().on('click', function () {

            switch ($(this).attr('id')) {
                case "hidden":
                    $(this).attr('id', 'shown');
                    $(this).html('[Show]');
                    $('.settingsPlaceholder').css('display', 'none');
                    break;
                case "shown":
                    $(this).attr('id', 'hidden');
                    $(this).html('[Hide]');
                    $('.settingsPlaceholder').css('display', 'block');
                    break;
            }

        });
    },

    clickHandlerUpdateSMA: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingPeriod = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingPeriod').val(), 2, 100, "int");

            requestAnalysisSimpleMovingAverageData = null;

            IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis('IRChartTASMA');
            loadAnalysisSimpleMovingAverage(clientStyle.amountOfHistoricalYears, settingPeriod);
            IRChartTechnicalAnalysis.applySMA($(this).attr('id'), settingPeriod);

            IRChartTechnicalAnalysis.redrawActiveSettings([
            { name: 'Period', value: settingPeriod }
            ]);

        });
    },
    clickHandlerUpdateEMA: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingPeriod = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingPeriod').val(), 1, 100, "int");

            requestAnalysisExponentialMovingAverageData = null;

            IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis('IRChartTAEMA');

            loadAnalysisExponentialMovingAverage(clientStyle.amountOfHistoricalYears, settingPeriod);
            IRChartTechnicalAnalysis.applyEMA($(this).attr('id'), settingPeriod);

            IRChartTechnicalAnalysis.redrawActiveSettings([
                {
                    name: 'Period', value: settingPeriod
                }
            ]);

        });
    },
    clickHandlerUpdateMACD: function () {

        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingFast = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingFast').val(), 1, 100, "int");
            var settingSlow = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingSlow').val(), 1, 100, "int");
            var settingSignal = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingSignal').val(), 1, 100, "int");

            requestAnalysisMovingAverageConvergenceDivergence = null;

            IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis('IRChartTAMACD');
            loadAnalysisMovingAverageConvergenceDivergence(clientStyle.amountOfHistoricalYears, settingFast, settingSlow, settingSignal);
            IRChartTechnicalAnalysis.applyMACD($(this).attr('id'), settingFast, settingSlow, settingSignal);

            IRChartTechnicalAnalysis.redrawActiveSettings([
                {
                    name: 'Fast', value: settingFast
                },
        {
            name: 'Slow', value: settingSlow
        },
                            {
                                name: 'Signal', value: settingSignal
                            }
            ]);

        });

    },
    clickHandlerUpdateBBands: function () {

        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingPeriod = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingPeriod').val(), 1, 100, "int");
            var settingK = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingK').val(), 1, 100, "int");

            requestAnalysisBollingerBands = null;

            IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis('IRChartTABBands');
            loadAnalysisBollingerBands(clientStyle.amountOfHistoricalYears, settingPeriod, settingK);
            IRChartTechnicalAnalysis.applyBBands($(this).attr('id'), settingPeriod, settingK);

            IRChartTechnicalAnalysis.redrawActiveSettings([
                {
                    name: 'Period', value: settingPeriod
                },
            {
                name: 'K', value: settingK
            }
            ]);

        });

    },
    clickHandlerUpdateROC: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingPeriod = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingPeriod').val(), 1, 100, "int");

            requestAnalysisRateOfChangeData = null;

            IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis('IRChartTARoC');
            loadAnalysisRateOfChange(clientStyle.amountOfHistoricalYears, settingPeriod);
            IRChartTechnicalAnalysis.applyRoC($(this).attr('id'), settingPeriod);

            IRChartTechnicalAnalysis.redrawActiveSettings([
                    {
                        name: 'Period', value: settingPeriod
                    }
            ]);

        });
    },
    clickHandlerUpdateMAES: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingPeriod = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingPeriod').val(), 1, 100, "int");
            var settingStray = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingStray').val(), 1, 100, "int");

            requestAnalysisMovingAverageEnvelopeSimple = null;

            IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis('IRChartTAMAES');

            loadAnalysisMovingAverageEnvelopeSimple(clientStyle.amountOfHistoricalYears, settingPeriod, settingStray);
            IRChartTechnicalAnalysis.applyMAES($(this).attr('id'), settingPeriod, settingStray);

            IRChartTechnicalAnalysis.redrawActiveSettings([
        {
            name: 'Period', value: settingPeriod
        },
                    { name: 'Stray', value: settingStray }
            ]);

        });
    },
    clickHandlerUpdateMAEE: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingPeriod = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingPeriod').val(), 1, 100, "int");
            var settingStray = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingStray').val(), 1, 100, "int");

            requestAnalysisMovingAverageEnvelopeExponential = null;

            IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis('IRChartTAMAEE');

            loadAnalysisMovingAverageEnvelopeExponential(clientStyle.amountOfHistoricalYears, settingPeriod, settingStray);
            IRChartTechnicalAnalysis.applyMAEE($(this).attr('id'), settingPeriod, settingStray);

            IRChartTechnicalAnalysis.redrawActiveSettings([
                    {
                        name: 'Period', value: settingPeriod
                    },
                    { name: 'Stray', value: settingStray }
            ]);

        });
    },
    clickHandlerUpdateWillPctR: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingPeriod = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingPeriod').val(), 1, 100, "int");

            requestAnalysisWilliamsPercentRData = null;

            IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis('IRChartTAWillPctR');

            loadAnalysisWilliamsPercentR(clientStyle.amountOfHistoricalYears, settingPeriod);
            IRChartTechnicalAnalysis.applyWillPctR($(this).attr('id'), settingPeriod);

            IRChartTechnicalAnalysis.redrawActiveSettings([
            { name: 'Period', value: settingPeriod }
            ]);

        });
    },
    clickHandlerUpdateRSI: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingPeriod = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingPeriod').val(), 1, 100, "int");

            requestAnalysisRelativeStrengthIndexData = null;

            IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis('IRChartTARSI');

            loadAnalysisRelativeStrengthIndex(clientStyle.amountOfHistoricalYears, settingPeriod);
            IRChartTechnicalAnalysis.applyRSI($(this).attr('id'), settingPeriod);

            IRChartTechnicalAnalysis.redrawActiveSettings([
            { name: 'Period', value: settingPeriod }
            ]);

        });
    },
    clickHandlerUpdateMomentum: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingPeriod = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingPeriod').val(), 1, 100, "int");

            requestAnalysisMomentumData = null;

            IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis('IRChartTAMomentum');

            loadAnalysisMomentum(clientStyle.amountOfHistoricalYears, settingPeriod);
            IRChartTechnicalAnalysis.applyMomentum($(this).attr('id'), settingPeriod);

            IRChartTechnicalAnalysis.redrawActiveSettings([
                { name: 'Period', value: settingPeriod }
            ]);

        });
    },
    clickHandlerUpdatePSAR: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingAcceleration = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingAcceleration').val(), 0.000001, 0.02, "float");
            // TODO: min value is set to 0.000001 instead of 0.0000001 due to parseFloat limitations

            requestAnalysisParabolicSar = null;

            IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis('IRChartTAPSAR');
            loadAnalysisParabolicSar(clientStyle.amountOfHistoricalYears, settingAcceleration);
            IRChartTechnicalAnalysis.applyPSAR($(this).attr('id'), settingAcceleration);

            IRChartTechnicalAnalysis.redrawActiveSettings([
                {
                    name: 'Acceleration', title: 'Acceleration must be between 0,0000001 and 0,02.', value: settingAcceleration
                }
            ]);

        });
    },

    applySMA: function (TAShort, settingPeriod) {
        $.when(requestAnalysisSimpleMovingAverageData).done(function (data) {

            globalActiveTAShort = TAShort;
            IRChartTechnicalAnalysis.redrawActiveSettings(
                        [{
                            name: 'Period', value: settingPeriod
                        }]
                        );
            var taDataSMA = [];
            var TAArrayForChartSMA = [];
            taDataSMA.push([]);
            $.each(data.data, function (listingIndex, item) {
                stockDataTADates.push(getUnixFromDate(item.date));
                TAArrayForChartSMA.push([getUnixFromDate(item.date), item.result])
            });
            taDataSMA[0] = TAArrayForChartSMA;
            IRChartTechnicalAnalysisData.stockDataTASMA = taDataSMA;

            globalChartDom.addSeries({
                id: 42,
                index: 1,
                data: IRChartTechnicalAnalysisData.stockDataTASMA[0],
                color: globalChartColours[5],
                yAxis: 0,
                name: 'TA',
                visible: true,
                linkedTo: 0,
                type: 'line'
            }, false, 0);

            setChartExtremes(chartDisplayModes.historical, 360);

            IRChartTechnicalAnalysis.clickHandlerUpdateSMA();
        });
    },
    applyEMA: function (TAShort, settingPeriod) {
        $.when(requestAnalysisExponentialMovingAverageData).done(function (data) {

            globalActiveTAShort = TAShort;
            IRChartTechnicalAnalysis.redrawActiveSettings(
                [{
                    name: 'Period', value: settingPeriod
                }]
            );
            var taDataEMA = [];
            var TAArrayForChartEMA = [];
            taDataEMA.push([]);
            $.each(data.data, function (listingIndex, item) {
                stockDataTADates.push(getUnixFromDate(item.date));
                TAArrayForChartEMA.push([getUnixFromDate(item.date), item.result])
            });
            taDataEMA[0] = TAArrayForChartEMA;
            IRChartTechnicalAnalysisData.stockDataTAEMA = taDataEMA;

            globalChartDom.addSeries({
                id: 42,
                index: 1,
                data: IRChartTechnicalAnalysisData.stockDataTAEMA[0],
                color: globalChartColours[5],
                yAxis: 0,
                name: 'TA',
                visible: true,
                linkedTo: 0,
                type: 'line'
            }, false, 0);

            setChartExtremes(chartDisplayModes.historical, 360);

            IRChartTechnicalAnalysis.clickHandlerUpdateEMA();

        });
    },
    applyMACD: function (TAShort, settingFast, settingSlow, settingSignal) {
        $.when(requestAnalysisMovingAverageConvergenceDivergence).done(function (data) {

            globalActiveTAShort = TAShort;
            //
            //  TechnicalAnalysis settings
            //
            IRChartTechnicalAnalysis.redrawActiveSettings([
            {
                name: 'Fast', value: settingFast
            },
                {
                    name: 'Slow', value: settingSlow
                },
                    {
                        name: 'Signal', value: settingSignal
                    }
            ]);

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
                color: IRChartTechnicalAnalysis.stockDataTAColours.MACDHist,
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
                color: IRChartTechnicalAnalysis.stockDataTAColours.MACDSignal,
                yAxis: 2,
                name: 'TA',
                visible: true,
                linkedTo: 2,
                type: 'spline'
            }, false, 0);

            IRChartTechnicalAnalysisData.stockDataTAHist = taDataHist;
            IRChartTechnicalAnalysisData.stockDataTAMACD = taDataMACD;
            IRChartTechnicalAnalysisData.stockDataTASignal = taDataSignal;

            setChartExtremes(chartDisplayModes.historical, 360);

            IRChartTechnicalAnalysis.activeAnalysis = TAShort;

            IRChartTechnicalAnalysis.clickHandlerUpdateMACD();

        });
    },
    applyBBands: function (TAShort, settingPeriod, settingK) {
        $.when(requestAnalysisBollingerBands).done(function (data) {


            globalActiveTAShort = TAShort;

            //
            //  TechnicalAnalysis settings
            //
            IRChartTechnicalAnalysis.redrawActiveSettings([
                    {
                        name: 'Period', value: settingPeriod
                    },
            {
                name: 'K', value: settingK
            }
            ]);

            var taDataUpper = [];
            var taDataMiddle = [];
            var taDataLower = [];

            taDataUpper.push([]);
            taDataMiddle.push([]);
            taDataLower.push([]);

            var TAArrayForChartUpper = [];
            var TAArrayForChartMiddle = [];
            var TAArrayForChartLower = [];

            $.each(data.data, function (listingIndex, item) {

                stockDataTADates.push(getUnixFromDate(item.date));
                TAArrayForChartUpper.push([getUnixFromDate(item.date), item.resultUpper])
                TAArrayForChartMiddle.push([getUnixFromDate(item.date), item.resultMiddle])
                TAArrayForChartLower.push([getUnixFromDate(item.date), item.resultLower])
            });
            taDataUpper[0] = TAArrayForChartUpper;
            taDataMiddle[0] = TAArrayForChartMiddle;
            taDataLower[0] = TAArrayForChartLower;

            // resultUpper
            globalChartDom.addSeries({
                id: 42,
                index: 1,
                data: taDataUpper[0],
                color: IRChartTechnicalAnalysis.stockDataTAColours.BBandUpper,
                yAxis: 0,
                name: 'TA',
                visible: true,
                linkedTo: 0,
                type: 'line'
            }, false, 0);

            // resultMiddle
            globalChartDom.addSeries({
                id: 42,
                index: 2,
                data: taDataMiddle[0],
                color: IRChartTechnicalAnalysis.stockDataTAColours.BBandMiddle,
                yAxis: 0,
                name: 'TA',
                visible: true,
                linkedTo: 0,
                type: 'line'
            }, false, 0);

            // resultLower
            globalChartDom.addSeries({
                id: 42,
                index: 3,
                data: taDataLower[0],
                color: IRChartTechnicalAnalysis.stockDataTAColours.BBandLower,
                yAxis: 0,
                name: 'TA',
                visible: true,
                linkedTo: 0,
                type: 'line'
            }, false, 0);

            IRChartTechnicalAnalysisData.stockDataTAUpper = taDataUpper;
            IRChartTechnicalAnalysisData.stockDataTAMiddle = taDataMiddle;
            IRChartTechnicalAnalysisData.stockDataTALower = taDataLower;

            setChartExtremes(chartDisplayModes.historical, 360);

            IRChartTechnicalAnalysis.activeAnalysis = TAShort;

            IRChartTechnicalAnalysis.clickHandlerUpdateBBands();

        });
    },
    applyRoC: function (TAShort, settingPeriod) {
        $.when(requestAnalysisRateOfChangeData).done(function (data) {

            globalActiveTAShort = TAShort;

            IRChartTechnicalAnalysis.redrawActiveSettings([
                    {
                        name: 'Period', value: settingPeriod
                    }
            ]);

            var taDataROC = [];
            taDataROC.push([]);
            var TAArrayForChartROC = [];

            $.each(data.data, function (listingIndex, item) {
                stockDataTADates.push(getUnixFromDate(item.date));
                TAArrayForChartROC.push([getUnixFromDate(item.date), item.result])
            });
            taDataROC[0] = TAArrayForChartROC;
            IRChartTechnicalAnalysisData.stockDataTAROC = taDataROC;

            globalChartDom.addSeries({
                id: 42,
                index: 1,
                data: IRChartTechnicalAnalysisData.stockDataTAROC[0],
                color: IRChartTechnicalAnalysis.stockDataTAColours.MACDHist,
                yAxis: 2,
                name: 'TA',
                visible: true,
                linkedTo: 2,
                type: 'spline'
            }, false, 0);

            setChartExtremes(chartDisplayModes.historical, 360);

            IRChartTechnicalAnalysis.activeAnalysis = TAShort;

            IRChartTechnicalAnalysis.clickHandlerUpdateROC();

        });
    },
    applyMAES: function (TAShort, settingPeriod, settingStray) {
        $.when(requestAnalysisMovingAverageEnvelopeSimple).done(function (data) {

            globalActiveTAShort = TAShort;

            IRChartTechnicalAnalysis.redrawActiveSettings([
            {
                name: 'Period', value: settingPeriod
            },
            {
                name: 'Stray', value: settingStray
            }
            ]);

            var taDataUpper = [];
            var taDataMiddle = [];
            var taDataLower = [];

            taDataUpper.push([]);
            taDataMiddle.push([]);
            taDataLower.push([]);

            var TAArrayForChartUpper = [];
            var TAArrayForChartMiddle = [];
            var TAArrayForChartLower = [];

            $.each(data.data, function (listingIndex, item) {

                stockDataTADates.push(getUnixFromDate(item.date));
                TAArrayForChartUpper.push([getUnixFromDate(item.date), item.resultUpper])
                TAArrayForChartMiddle.push([getUnixFromDate(item.date), item.resultMiddle])
                TAArrayForChartLower.push([getUnixFromDate(item.date), item.resultLower])
            });
            taDataUpper[0] = TAArrayForChartUpper;
            taDataMiddle[0] = TAArrayForChartMiddle;
            taDataLower[0] = TAArrayForChartLower;

            // resultUpper
            globalChartDom.addSeries({
                id: 42,
                index: 1,
                data: taDataUpper[0],
                color: IRChartTechnicalAnalysis.stockDataTAColours.MAEUpper,
                yAxis: 0,
                name: 'TA',
                visible: true,
                linkedTo: 0,
                type: 'line'
            }, false, 0);

            // resultMiddle
            globalChartDom.addSeries({
                id: 42,
                index: 2,
                data: taDataMiddle[0],
                color: IRChartTechnicalAnalysis.stockDataTAColours.MAEMiddle,
                yAxis: 0,
                name: 'TA',
                visible: true,
                linkedTo: 0,
                type: 'line'
            }, false, 0);

            // resultLower
            globalChartDom.addSeries({
                id: 42,
                index: 3,
                data: taDataLower[0],
                color: IRChartTechnicalAnalysis.stockDataTAColours.MAELower,
                yAxis: 0,
                name: 'TA',
                visible: true,
                linkedTo: 0,
                type: 'line'
            }, false, 0);

            IRChartTechnicalAnalysisData.stockDataTAUpper = taDataUpper;
            IRChartTechnicalAnalysisData.stockDataTAMiddle = taDataMiddle;
            IRChartTechnicalAnalysisData.stockDataTALower = taDataLower;

            setChartExtremes(chartDisplayModes.historical, 360);

            IRChartTechnicalAnalysis.activeAnalysis = TAShort;

            IRChartTechnicalAnalysis.clickHandlerUpdateMAES();

        });
    },
    applyMAEE: function (TAShort, settingPeriod, settingStray) {
        $.when(requestAnalysisMovingAverageEnvelopeExponential).done(function (data) {

            globalActiveTAShort = TAShort;

            IRChartTechnicalAnalysis.redrawActiveSettings([
            {
                name: 'Period', value: settingPeriod
            },
            {
                name: 'Stray', value: settingStray
            }
            ]);

            var taDataUpper = [];
            var taDataMiddle = [];
            var taDataLower = [];

            taDataUpper.push([]);
            taDataMiddle.push([]);
            taDataLower.push([]);

            var TAArrayForChartUpper = [];
            var TAArrayForChartMiddle = [];
            var TAArrayForChartLower = [];

            $.each(data.data, function (listingIndex, item) {

                stockDataTADates.push(getUnixFromDate(item.date));
                TAArrayForChartUpper.push([getUnixFromDate(item.date), item.resultUpper])
                TAArrayForChartMiddle.push([getUnixFromDate(item.date), item.resultMiddle])
                TAArrayForChartLower.push([getUnixFromDate(item.date), item.resultLower])
            });
            taDataUpper[0] = TAArrayForChartUpper;
            taDataMiddle[0] = TAArrayForChartMiddle;
            taDataLower[0] = TAArrayForChartLower;

            // resultUpper
            globalChartDom.addSeries({
                id: 42,
                index: 1,
                data: taDataUpper[0],
                color: IRChartTechnicalAnalysis.stockDataTAColours.MAEUpper,
                yAxis: 0,
                name: 'TA',
                visible: true,
                linkedTo: 0,
                type: 'line'
            }, false, 0);

            // resultMiddle
            globalChartDom.addSeries({
                id: 42,
                index: 2,
                data: taDataMiddle[0],
                color: IRChartTechnicalAnalysis.stockDataTAColours.MAEMiddle,
                yAxis: 0,
                name: 'TA',
                visible: true,
                linkedTo: 0,
                type: 'line'
            }, false, 0);

            // resultLower
            globalChartDom.addSeries({
                id: 42,
                index: 3,
                data: taDataLower[0],
                color: IRChartTechnicalAnalysis.stockDataTAColours.MAELower,
                yAxis: 0,
                name: 'TA',
                visible: true,
                linkedTo: 0,
                type: 'line'
            }, false, 0);

            IRChartTechnicalAnalysisData.stockDataTAUpper = taDataUpper;
            IRChartTechnicalAnalysisData.stockDataTAMiddle = taDataMiddle;
            IRChartTechnicalAnalysisData.stockDataTALower = taDataLower;

            setChartExtremes(chartDisplayModes.historical, 360);

            IRChartTechnicalAnalysis.activeAnalysis = TAShort;

            IRChartTechnicalAnalysis.clickHandlerUpdateMAEE();

        });
    },
    applyWillPctR: function (TAShort, settingPeriod) {
        $.when(requestAnalysisWilliamsPercentRData).done(function (data) {

            globalActiveTAShort = TAShort;

            IRChartTechnicalAnalysis.redrawActiveSettings([
                {
                    name: 'Period', value: settingPeriod
                }
            ]);

            var taDataWillPctR = [];

            taDataWillPctR.push([]);

            var TAArrayForChartWillPctRr = [];

            $.each(data.data, function (listingIndex, item) {

                stockDataTADates.push(getUnixFromDate(item.date));
                TAArrayForChartWillPctRr.push([getUnixFromDate(item.date), item.result])
            });
            taDataWillPctR[0] = TAArrayForChartWillPctRr;

            // resultUpper
            globalChartDom.addSeries({
                id: 42,
                index: 1,
                data: taDataWillPctR[0],
                color: IRChartTechnicalAnalysis.stockDataTAColours.WillPctR,
                yAxis: 2,
                name: 'TA',
                visible: true,
                linkedTo: 1,
                type: 'line'
            }, false, 0);

            IRChartTechnicalAnalysisData.stockDataTAWillPctR = taDataWillPctR;

            setChartExtremes(chartDisplayModes.historical, 360);

            IRChartTechnicalAnalysis.activeAnalysis = TAShort;

            IRChartTechnicalAnalysis.clickHandlerUpdateWillPctR();

        });
    },
    applyRSI: function (TAShort, settingPeriod) {
        $.when(requestAnalysisRelativeStrengthIndexData).done(function (data) {

            globalActiveTAShort = TAShort;

            IRChartTechnicalAnalysis.redrawActiveSettings([
                {
                    name: 'Period', value: settingPeriod
                }
            ]);

            var taDataRSI = [];

            taDataRSI.push([]);

            var TAArrayForChartRSIr = [];

            $.each(data.data, function (listingIndex, item) {

                stockDataTADates.push(getUnixFromDate(item.date));
                TAArrayForChartRSIr.push([getUnixFromDate(item.date), item.result])
            });
            taDataRSI[0] = TAArrayForChartRSIr;

            // resultUpper
            globalChartDom.addSeries({
                id: 42,
                index: 1,
                data: taDataRSI[0],
                color: IRChartTechnicalAnalysis.stockDataTAColours.RSI,
                yAxis: 2,
                name: 'TA',
                visible: true,
                linkedTo: 1,
                type: 'line'
            }, false, 0);

            IRChartTechnicalAnalysisData.stockDataTARSI = taDataRSI;

            setChartExtremes(chartDisplayModes.historical, 360);

            IRChartTechnicalAnalysis.activeAnalysis = TAShort;

            IRChartTechnicalAnalysis.clickHandlerUpdateRSI();

        });
    },
    applyMomentum: function (TAShort, settingPeriod) {
        $.when(requestAnalysisMomentumData).done(function (data) {

            globalActiveTAShort = TAShort;

            IRChartTechnicalAnalysis.redrawActiveSettings([
            {
                name: 'Period', value: settingPeriod
            }
            ]);

            var taDataMomentum = [];

            taDataMomentum.push([]);

            var TAArrayForChartMomentum = [];

            $.each(data.data, function (listingIndex, item) {

                stockDataTADates.push(getUnixFromDate(item.date));
                TAArrayForChartMomentum.push([getUnixFromDate(item.date), item.result])
            });
            taDataMomentum[0] = TAArrayForChartMomentum;

            // resultUpper
            globalChartDom.addSeries({
                id: 42,
                index: 1,
                data: taDataMomentum[0],
                color: IRChartTechnicalAnalysis.stockDataTAColours.Momentum,
                yAxis: 2,
                name: 'TA',
                visible: true,
                linkedTo: 1,
                type: 'line'
            }, false, 0);

            IRChartTechnicalAnalysisData.stockDataTAMomentum = taDataMomentum;

            setChartExtremes(chartDisplayModes.historical, 360);

            IRChartTechnicalAnalysis.activeAnalysis = TAShort;

            IRChartTechnicalAnalysis.clickHandlerUpdateMomentum();

        });
    },
    applyPSAR: function (TAShort, settingAcceleration) {
        $.when(requestAnalysisParabolicSar).done(function (data) {

            globalActiveTAShort = TAShort;
            IRChartTechnicalAnalysis.redrawActiveSettings(
                    [{
                        name: 'Acceleration', title: 'Acceleration must be between 0,0000001 and 0,02.', value: settingAcceleration
                    }]
            );
            var taDataPSAR = [];
            var TAArrayForChartPSAR = [];
            taDataPSAR.push([]);
            $.each(data.data, function (listingIndex, item) {
                stockDataTADates.push(getUnixFromDate(item.date));
                TAArrayForChartPSAR.push([getUnixFromDate(item.date), item.result])
            });
            taDataPSAR[0] = TAArrayForChartPSAR;
            IRChartTechnicalAnalysisData.stockDataTAPSAR = taDataPSAR;

            globalChartDom.addSeries({
                id: 42,
                index: 1,
                data: IRChartTechnicalAnalysisData.stockDataTAPSAR[0],
                color: globalChartColours[5],
                yAxis: 0,
                name: 'TA',
                visible: true,
                linkedTo: 0,
                type: 'line'
            }, false, 0);

            setChartExtremes(chartDisplayModes.historical, 360);

            IRChartTechnicalAnalysis.clickHandlerUpdatePSAR();
        });
    },

    validateSetting: function (setting, min, max, type) {
        var settingEntered;
        switch (type) {
            case "int":
                settingEntered = parseInt(setting);
                min = parseInt(min);
                max = parseInt(max);
                break;
            case "float":
                settingEntered = parseFloat(setting);
                min = parseFloat(min);
                max = parseFloat(max);
                break;
        }
        if (settingEntered < min) {
            settingEntered = min;
        }
        if (settingEntered > max) {
            settingEntered = max;
        }
        return settingEntered;
    }

};

function errorHandling(data) {
    debugStep("errorHandling");
    debugError(data.statusText);

    if (data.statusText.indexOf('Invalid solutionID') > -1) {
        $('html').html('The share price page is currently unavailable.');
    } else if (data.statusText.indexOf('Bad Request') > -1) {
        $('html').html('The share price page is currently unavailable.');
    } else {
        $('html').html('The share price page is currently unavailable.');
    }
}

if (typeof ($('.IRDEBUG')) == "object") {
    //updateIRDEBUG();
}
function updateIRDEBUG() {
    var strDebug = 'DEBUG';
    strDebug += strD('DisplayMode', globalChartActiveDisplayMode);
    strDebug += strD('globalActiveLanguage', globalActiveLanguage);
    strDebug += strD('clientLCID', clientLCID);
    //try
    //{
    //    strDebug += strD('exchangeName', globalRawStockData[globalActiveListingIndex].exchangeName);
    //}catch(err) {

    //}
    strDebug += strD('globalActiveExchangeTimeZone', globalActiveExchangeTimeZone);
    strDebug += strD('globalChartComparisonsInChart', globalChartComparisonsInChart);
    strDebug += strD('Iterations (debugIterations_preloadIRChartDataClosePriceListing)', debugIterations_preloadIRChartDataClosePriceListing);
    strDebug += strD('Iterations (debugIterations_preloadIRChartDataClosePriceOther)', debugIterations_preloadIRChartDataClosePriceOther);

    $('.IRDEBUG').html(strDebug);
}
function strD(strT, str) {
    return '<div>' + strT + ' [ ' + str + ' ]</div>';
}
String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt /*, from*/) {
        var len = this.length >>> 0;
        var from = Number(arguments[1]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0) from += len;

        for (; from < len; from++) {
            if (from in this && this[from] === elt) return from;
        }
        return -1;
    };
}
Number.prototype.round = function (places) {
    return +(Math.round(this + "e+" + places) + "e-" + places);
}

//

var modulesReady = new function () {
    this.AllTools = null;
    this.IRQuote = null;
    this.IRChart = null;
    /*
        null = not set
        false = present but not ready
        true = ready as in written to DOM
    */
};
var readyHandlerCustomCode = new function () {
    this.AllTools = null;
    this.IRQuote = null;
    this.IRChart = null;
};

function readyHandlerInit() {

    if (typeof (readyHandler.IRQuote) != 'undefined') {
        readyHandlerCustomCode.IRQuote = readyHandler.IRQuote;
        modulesReady.IRQuote = false;
    }
    if (typeof (readyHandler.IRChart) != 'undefined') {
        readyHandlerCustomCode.IRChart = readyHandler.IRChart;
        modulesReady.IRChart = false;
    }

}

function reportModuleReady(module) {

    switch (module) {
        case 'IRQuote':
            if (modulesReady.IRQuote == false) {
                readyHandlerCustomCode.IRQuote();
                modulesReady.IRQuote = true;
            }
            break;
        case 'IRChart':
            if (modulesReady.IRChart == false) {
                readyHandlerCustomCode.IRChart();
                modulesReady.IRChart = true;
            }
            break;
    }
}



//


//var modulesSelectedShouldBeReady = null;
//var toolHasBeenUpdated = false;
//var modulesReady = new function () {
//    this.IRQuote = null;
//    this.IRChart = null;
//};
//function readyHandlerModuleIsReady(module) {
//    debugError('readyHandlerModuleIsReady(' + module + ')');
//    switch (module) {
//        case 'IRQuote':
//            modulesReady.IRQuote = true;
//            break;
//        case 'IRChart':
//            modulesReady.IRChart = true;
//            break;
//    }

//}
//function readyHandlerPrepareModules() {
//    debugError('readyHandlerPrepareModules()');

//    // 1) Prepare modulesReady
//    if (modulesShouldBeReady != null && modulesSelectedShouldBeReady == null) {

//        modulesSelectedShouldBeReady = modulesShouldBeReady;
//        for (var i = 0; i < modulesSelectedShouldBeReady.length; i++) {
//            switch (modulesSelectedShouldBeReady[i]) {
//                case 'IRQuote':
//                    modulesReady.IRQuote = false;
//                    break;
//                case 'IRChart':
//                    modulesReady.IRChart = false;
//                    break;
//            }
//        }
//    }

//}
//function readyHandlerCheckModules() {

//    debugError('readyHandlerCheckModules()');

//    // 2) check of modules are ready
//    var ready = true;
//    $.each(modulesReady, function (key, value) {

//        if (value == false) {
//            ready = false;
//        }

//    });

//    if (ready && !toolHasBeenUpdated) {
//        readyHandlerUpdateTool();
//        toolHasBeenUpdated = true;
//    }


//}
//var readyHandlerUpdateTool = function readyHandlerUpdateTool() {

//    debugStep("readyHandlerUpdateTool() - initial");

//}
