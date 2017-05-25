var debug = isDev();
if (debug) {
    var t0, t1;
    var initTime = Date.now();
    var initTimeL = Date.now();
}
debugStep("ir.util.js - start");

var debugIterations_preloadIRChartDataClosePriceListing = 0;
var debugIterations_preloadIRChartDataClosePriceOther = 0;

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

//
//  Data
//
var useStockData = false;
var useClosePriceBundleListingData = false;
var useIntradayBundleListingData = false;
var useClosePriceBundleOtherData = false;
var useOrdersData = false;
var useTradeData = false;
var useNewsData = false;
var useNewsArticleData = false;
var useNewsHeadlineData = false;

//
//  Triggers
//
var fetchNewsArticleData = false;

//
//  Features
//
var useIRChartNews = false;
var useIRChartTA = false;
var useIRChartCompare = true;
var useIRChartCurrencyConversion = true;
var useFeatureStockOtherData = false;
var waitForAdditionalDataIRQuoteModule = false;

var useIRChartPressReleaseIRChartHeadline = false;
var usePressReleaseIRChartHeadlineData = false;
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
//var globalRawStockClosePriceListingData;
var globalNewsAllHeadlines = [];
//
//  IRChartHTML settings
//
var chartDisplayModes = new function () {
    this.historical = 'historical',
    this.intraday = 'intraday',
    this.comparison = 'comparison',
    this.ta = 'ta'
};
var chartEnabledClickHandlers = new function () {
    this.chartNavigationComparison = false;
    this.chartNavigationComparisonBodyList = false;
    this.chartNavigationTA = false;
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
//
//  Objects
//
var LCID = new function () {
    this.csCZ = 1029;
    this.daDK = 1030;
    this.deDE = 1031;
    this.enGB = 2057;
    this.enUS = 1033;
    this.esES = 3082;
    this.fiFI = 1035;
    this.frFR = 1036;
    this.nlNL = 1043;
    this.nnNO = 2068;
    this.plPL = 1045;
    this.ptPT = 2070;
    this.svSE = 1053;
    this.zhCHS = 4;
    this.zhCHT = 31748;
    this.heIL = 1037;
    this.arEG = 3073;
}
var translations = new function () {
    // Will be populated
}
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
    this.selectIRChangeListingFormat = null;
}
var chartSettings = new function () {
    this.narrowWidth = 400;
    this.activeWidth = -1;
}

initSolutionInfo();
updateLCID();

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
    debugStep("ir.util.js - DOM Ready");

    setReadingDirection();

    setInterval(function () { updateIRDEBUG() }, 1000);

    initClientStyle(); // From ir.client.js (if clientStyle is defined).

    requestListingFromURL();

    requestTranslationsData.done(function (translationsData) {
        debugStep("requestTranslationsData.done");
        mergeLanguage(translationsData.data);
        //manualOverwriteActiveLanguage(); // TODO: remove this.
        updateChartHTMLLanguages();
        initHandlebars();
    });




    //
    //  Some data requests require a delay.
    //  As an example: requestOrdersData requires the IRInstrumentID from stock data prior to executing the ajax request.
    //




    if (useStockData) {

        $.when(requestStockData).done(function (stockData) {
            if (globalActiveListingIndex > stockData.data.length - 1) {
                globalActiveListingIndex = 0;
            }

            //if (useFeatureStockOtherData) {

            //}

            //if (useFeatureStockOtherData) {
            //    $.when(requestFeatureStockOtherData).done(function (stockOtherData)
            //    {
            //        debugStep("globalRawStockOtherData is set");
            //        globalRawStockOtherData = stockOtherData.data;
            //    });
            //}

            debugStep("globalRawStockData is set");
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

            initMomentTimezone();
        });
    }

    if (useClosePriceBundleListingData && useStockData) {
        $.when(requestStockData).done(function (stockData) {
            globalRawStockData = stockData.data;
            globalAmountOfListings = stockData.data.length;
        });
        $.when(requestClosePriceListingData).done(function (closePriceListingData) {
            globalAmountOfListings = closePriceListingData.data.length;
        });
    }

    if (IRQuoteModule) {
        $.when(requestStockData, requestTranslationsData).done(function (stockData, translationsData) {
            if (!waitForAdditionalDataIRQuoteModule) {
                buildQuoteTable();
                formatColour();
            } else {
                if (useFeatureStockOtherData) {
                    $.when(requestFeatureStockOtherData).done(function (stockOtherData) {
                        debugStep("globalRawStockOtherData is set");
                        globalRawStockOtherData = stockOtherData.data;
                        buildQuoteTable();
                        formatColour();
                    });

                }
            }
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
            //checkWidthAndReduceChartHeight(300); // Todo: height of mobile devices
            drawActiveListingToChartHistorical();

            updateChartNavBarRange('IRChart');
            setChartExtremes(chartDisplayModes.historical, 360);
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
            //globalChartContainer = '.IRChartPlaceholder';
            buildIRChartHTMLTool();
            var o = {
                headers: translations,
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData
                }
            };
            //globalChartContainer = '.IRChartPlaceholder';
            preloadIRChartDataClosePriceListing(o);
            //drawActiveListingToChartHistorical();
            globalChartDom = getChartDOM();

            drawActiveListingToChartHistorical();
            updateChartNavBarRange('IRChartHTML');
            updateIRChangeListing();
            attachClickHandlers('IRChartHTML');
            setChartExtremes(chartDisplayModes.historical, 360);

            if (useIRChartNews) {
                $.when(requestStockData, requestNewsDataInitial).done(function (stockData, newsDataInitial) {
                    globalAmountOfNewsItems = newsDataInitial[0].data.length;
                    //globalNewsEarlyYear = new moment(newsDataInitial[0].data[globalAmountOfNewsItems - 1].timestamp);
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

    //if (IRChartMiniquoteModule) {
    //    $.when(requestStockData, requestClosePriceListingData, requestTranslationsData).done(function (stockData, closePriceListingData)
    //    {
    //        var o = {
    //            headers: translations,
    //            data: {
    //                stock: stockData,
    //                closePriceListing: closePriceListingData
    //            }
    //        };

    //        preloadIRChartMiniquoteDataClosePriceListing(o);
    //        drawActiveListingToChartMiniquoteHistorical();
    //        setChartExtremes(chartDisplayModes.historical, 30);
    //    });
    //}

    if (IRMiniquoteModule) {
        $.when(requestStockData, requestTranslationsData).done(function (stockData, translationsData) {
            drawIRMiniquote();
            formatColour();
        });
    }

    if (IRMiniquoteChartModule) {
        $.when(requestStockData, requestClosePriceListingData, requestTranslationsData).done(function (stockData, closePriceListingData) {
            globalRawStockData = stockData[0].data;
            //globalRawStockClosePriceListingData = closePriceListingData[0].data;

            globalChartContainer = '.IRMiniquoteChartPlaceholder';

            preloadIRMiniquoteChartDataClosePriceListing(closePriceListingData[0].data);
            drawIRMiniquoteChart();
            drawMiniquoteChart();
            drawActiveListingToIRMiniquoteChartHistorical();
            setChartExtremes(chartDisplayModes.historical, 90);
            //preloadIRChartMiniDataClosePriceListing(o);
            //drawActiveListingToChartMiniHistorical();
            //
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

            preloadIRLookupChartDataClosePriceListing(o);
            updateIRChangeListing();
            attachClickHandlers('IRLookupModule');
            //JRJR

            //drawActiveListingToChartLookupHistorical();
            //setChartExtremes(chartDisplayModes.historical, 360);

            //updateIRChangeListing();
            //attachClickHandlers('IRChartHTML');

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
    if (IROrdersModule || IRTradesModule || IRNewsModule || IREmailAlertModule || IRNewsHeadlineModule) {
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
                    } else {
                        globalNewsEarlyYear = new moment();
                    }
                    var o = {
                        headers: translations,
                        data: newsDataInitial[0].data
                    }
                    //globalNewsRawData = o;
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
            case "requestStockData":
                useStockData = true;
                break;
            case "requestIntradayListingData":
                useIntradayBundleListingData = true;
                break;
            case "requestClosePriceListingData":
                useClosePriceBundleListingData = true;
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
        debugStep("Module [" + activeModulesArr[i] + "] is activated");
        switch (activeModulesArr[i]) {
            case "IRQuote":
                IRQuoteModule = true;
                useStockData = true;
                break;
            case "IRChart":
                IRChartModule = true;
                useStockData = true;
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
            case "IRCustomModule":
                IRCustomModule = true;
                break;
            case "IRCalc":
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
        debugStep("Feature [" + activeFeaturesArr[i] + "] is activated");
        switch (activeFeaturesArr[i]) {
            case "IRChartNews":
                useIRChartNews = true;
                useStockData = true;
                useNewsData = true;
                break;
            case "TA":
                useIRChartTA = true;
                break;
            case "IRChartCompare":
                useIRChartCompare = true;
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
        }
    }
}

function initSolutionInfo() {
    debugStep("initSolutionInfo()");
    clientApiVersion = 1; // TODO, get this from provider!
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
    if (pathSplit[3].toLowerCase() == 'solutions' || pathSplit[3].toLowerCase() == 'irmotor') {
        fetchedSolutionID = pathSplit[5];
        if (pathSplit[4].toLowerCase() == 'debugsolutions') {
            fetchedSolutionID = pathSplit[6];
        }
    } else {
        fetchedSolutionID = pathSplit[4];
    }

    /* Presentation HAX JRJR TODO Remove this */
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

    return fetchedSolutionID;
}
function getCustomerKeyRequired() {
    debugStep("getCustomerKeyRequired");
    var solutionName;
    var pathSplit = location.href.split("/");

    if (pathSplit[3].toLowerCase() == 'solutions' || pathSplit[3].toLowerCase() == 'irmotor') {
        solutionName = pathSplit[4];
        if (pathSplit[4].toLowerCase() == 'debugsolutions') {
            solutionName = pathSplit[5]
        }

    } else {
        solutionName = pathSplit[3];
    }



    /* Presentation HAX JRJR TODO Remove this */
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
    debugStep("getHost");
    return location.host;
}
function getImagePath() {
    //debugStep("getImagePath");
    var pathSplit = location.href.split("/");
    var length = 3;
    var pathStr = "";
    if (pathSplit[3].toLowerCase() == 'solutions' || pathSplit[3].toLowerCase() == 'irmotor') {
        length = 3;
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
            break;
        case "zh-s":
            lcidSelected = LCID.zhCHS;
            break;
        case "zh-t":
            lcidSelected = LCID.zhCHT;
            break;
        case "he":
            lcidSelected = LCID.heIL;
            globalHTMLReadingDirection = "RTL";
            break;
        case "ar":
            lcidSelected = LCID.arEG;
            globalHTMLReadingDirection = "RTL";
            break;
    }
    clientLCID = lcidSelected;
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

        if (typeof (clientStyleOverwrite.formatTime) != "undefined" && typeof (clientStyleOverwrite.formatDateTime) != "undefined") {
            clientStyle.formatDateTime = clientStyleOverwrite.formatDate + ' ' + clientStyleOverwrite.formatTime;
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

        if (clientStyleOverwrite.amountOfNewsPerPage >= 0) {
            clientStyle.amountOfNewsPerPage = clientStyleOverwrite.amountOfNewsPerPage;
        }

        if (typeof (clientStyleOverwrite.lookup_ChartYAxisInsideOutside) != "undefined") {
            clientStyle.lookup_ChartYAxisInsideOutside = clientStyleOverwrite.lookup_ChartYAxisInsideOutside;
        }

        if (typeof (clientStyleOverwrite.calc_ChartYAxisInsideOutside) != "undefined") {
            clientStyle.calc_ChartYAxisInsideOutside = clientStyleOverwrite.calc_ChartYAxisInsideOutside;
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
    }

    if (typeof ($('.IRChartColour').css('color')) != "undefined") {
        var rgbIRChartColour = $('.IRChartColour').css('color').match(/\d+/g);
        var hexIRChartColour = '#' + String('0' + Number(rgbIRChartColour[0]).toString(16)).slice(-2) + String('0' + Number(rgbIRChartColour[1]).toString(16)).slice(-2) + String('0' + Number(rgbIRChartColour[2]).toString(16)).slice(-2);
        clientStyle.chart_ColourMain = hexIRChartColour;
    }
    globalChartColours = [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'];
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

    switch (countTooltioElements) {
        case 1:
            return 33;
            break;
        case 2:
            return 20;
            break;
        case 3:
            return 5;
            break;
        case 4:
            return -10;
            break;
        case 5:
            return -23;
            break;
        case 6:
            return -37;
            break;
    }

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

        default:
            debugError("initMomentTimezone() is missing configuration for [" + globalRawStockData[globalActiveListingIndex].exchangeName + "].");
            break;
    }

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
    return new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate);
}
function formatTooltipDateTime(dateIndex, data) {
    var date = "";
    switch (clientStyle.formatDateTime) {
        case "DD MMM YYYY HH:mm":
        case "DD-MMM-YYYY HH:mm":
        case "DD/MMM/YYYY HH:mm":
            date = new moment(data[globalActiveListingIndex][dateIndex][0]);
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
    return new moment(data[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDateTime);
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
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideDate) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipDate\">" + formatTooltipDate(dateIndex, globalChartListingStockDataDates) + "</div>"; //tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideOpen) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipOpen\"><span class=\"subHeader\">" + getOHLCfromTranslations('o') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideHigh) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipHigh\"><span class=\"subHeader\">" + getOHLCfromTranslations('h') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideLow) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipLow\"><span class=\"subHeader\">" + getOHLCfromTranslations('l') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideClose) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideVolume) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
    }
    return tooltipStr;
}

function getTooltipStrSubIntraday(dateIndex) {
    var tooltipStr = "";
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideDate) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipDate\">" + formatTooltipDateTime(dateIndex, globalChartListingIntradayDataOHLCV) + "</div>";



    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideOpen) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipOpen\"><span class=\"subHeader\">" + getOHLCfromTranslations('o') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideHigh) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipHigh\"><span class=\"subHeader\">" + getOHLCfromTranslations('h') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideLow) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipLow\"><span class=\"subHeader\">" + getOHLCfromTranslations('l') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideClose) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideVolume) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
    }
    return tooltipStr;
}
function updateTooltipDOHLCV(date) {
    var dateIndex;
    var value = "-";
    var tooltipStr = "";
    var tooltipStrSub = "";
    if (globalChartUseCustomTooltipContent) {
        tooltipStr = "<div class=\"tooltipHTML\" class=\"" + globalHTMLReadingDirection + "\" style=\"top: " + clientStyle.chart_CustomTooltipTopPX + "px;\">";
    } else {
        tooltipStr = "<div class=\"tooltipHTML tooltipMode" + chartDisplayModes.historical + " htmlReadingDirection" + globalHTMLReadingDirection + "\" dir=\"" + globalHTMLReadingDirection.toLowerCase() + "\">"; // JRJR
    }
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
    }
    tooltipStr += tooltipStrSub;
    tooltipStr += "</div>";
    return tooltipStr;
}
function updateTooltipDOHLCVN(date) {
    var dateIndex;
    var newsIndex;
    var value = "-";
    var tooltipStr = "<div class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode\">";
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
    var dateIndex;
    var newsIndex;
    var value = "-";
    var tooltipStr = "<div class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode\">";
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
function chartOpenNewsFromFlag(item) {
    window.open('http://' + getPathToSolution() + 'newsArticle.aspx?storyID=' + item.storyID);
}
function chartOpenPressReleaseFromURL(url) {
    window.open(url);
}
function getOHLCfromTranslations(getWhat) {
    var ohlcChars = translations.t_ohlc.split('');

    var localVolumeTranslation = "V";

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
            //return "Open";
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
function updateTooltipCalc(date) {
    return updateTooltipLookup(date);
}
function updateTooltipDCV(date) {
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
                    if ($('.IRChartComparison .IRChartComparisonBody').css('display') == 'block') {
                        //$('.IRChartNavigationInner div').removeClass('active');
                        $('.IRChartNavigation .IRChartTAHeader').removeClass('active');
                        //$(this).parent().removeClass('active');
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
                        if ($(this).attr('id') == 'IRChartNavigationClearComparison') {

                        } else if ($(this).hasClass('IRChartNavigationCurrencyConversion')) {

                            if (!chartEnabledClickHandlers.chartNavigationCurrencyConversionAdjustedPrice) {

                                $('#comparisonList_IRChartCurrencyConversionAdjustedPrice').css('display', 'block');
                                $('#comparisonList_IRChartCurrencyConversionAdjustedPrice span.updateCurrencyConversionAdjustedPrice').on('click', function () {
                                    var currencyTo = $('#comparisonList_IRChartCurrencyConversionAdjustedPrice select.currencyConversionTo').val();
                                    updateIRChartCurrencyConversion('updateCurrencyConversionAdjustedPrice', currencyTo);
                                    // JRJR
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
                        resetIRChart();
                    });

                    if (useIRChartCurrencyConversion) {

                        //if ($(this).hasClass('IRChartNavigationCurrencyConversion')) {

                        //}

                        //$('#IRChartCurrencyConversionAdjustedPrice').click(function () {
                        //    //console.log("Apply IRChartCurrencyConversionAdjustedPrice");
                        //    //console.log($(this).attr('id'));

                        //    //comparisonList_IRChartCurrencyConversionAdjustedPrice



                        //    //updateTechnicalAnalysis($(this).attr('id'));



                        //    updateIRChartCurrencyConversion($(this).attr('id'));

                        //});
                    }
                    $('.IRChartComparisonPlaceholder .ComparisonOff').click(function () {
                        $('#' + $(this).attr('id')).removeClass('active');
                        var type = $(this).attr('id').split("_")[0];
                        var id = $(this).attr('id').split("_")[1];
                        var uniqueID = $(this).attr('id').split("_")[2];
                        updateComparison(type, id, uniqueID, $(this));
                    });

                    //$('.IRChartComparisonPlaceholder .ComparisonOff').click(function () {
                    //    // JRJR

                    //    var elem = document.getElementById('IRChartComparisonPlaceholder');
                    //    window.mySwipe = Swipe(elem, {
                    //        // startSlide: 4,
                    //        // auto: 3000,
                    //        // continuous: true,
                    //        // disableScroll: true,
                    //        // stopPropagation: true,
                    //        // callback: function(index, element) {},
                    //        // transitionEnd: function(index, element) {}
                    //    });

                    //});

                    chartEnabledClickHandlers.chartNavigationComparisonBodyList = true;
                }
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

        }

        IRChartNavigationShowHide('IRChartComparisonBody');
    }



    if (useIRChartTA) {
        if (!chartEnabledClickHandlers.chartNavigationTA) {

            $('.IRChartTAHeader').click(function () {
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
                    updateTechnicalAnalysis($(this).attr('id'));
                });
                $('#IRChartNavigationClearTA').click(function () {
                    resetIRChart();
                });
            }
        }
        IRChartNavigationShowHide('IRChartTABody');
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
                    debugStep("clicked .newsSubmit");
                    var searchText = $('.searchText').val();
                    newsSearch(searchText);
                });
            }

            $('.checkbox').click(function () {
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
                        window.open('newsArticle.aspx?storyid=' + storyID);
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
                    window.open('newsArticle.aspx?storyid=' + storyID);
                }
            });
            $('.IRNewsHeadlineModule div.Data').click(function () {
                var storyID = $(this).parent().attr('id');
                if ($(this).hasClass('download')) {
                    // Do nothing

                } else {
                    // Show news
                    window.open('newsArticle.aspx?storyid=' + storyID);
                }
            });
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
            if (period == 120) {
                globalChartDom.xAxis[0].setExtremes(
                    Date.UTC(firstDate.year(), firstDate.month(), firstDate.date(), firstDate.hour(), firstDate.minute()),
                    Date.UTC(toDate.year(), toDate.month(), toDate.date(), toDate.hour(), toDate.minute())
                );
            } else {
                fromDate.add('hours', -period);
                globalChartDom.xAxis[0].setExtremes(
                    Date.UTC(fromDate.year(), fromDate.month(), fromDate.date(), fromDate.hour(), toDate.minute()),
                    Date.UTC(toDate.year(), toDate.month(), toDate.date(), toDate.hour(), toDate.minute())
                );
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
function formatDecimal(number) {
    try {
        return number.toFixed(clientStyle.amountOfDecimals);
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
                return number.toFixed(clientStyle.amountOfDecimals);
            }
        }
    }
    catch (err) {
        return "-";
    }
}
function formatDecimalFileSize(number) {
    try {
        return number.toFixed(1);
    }
    catch (err) {
        return "-";
    }
}
function formatLocal(number) {
    //return number.toLocaleString(globalActiveLanguage);
    return formatNumberWithLocalDelimiters(number);
}
function formatNumberWithLocalDelimiters(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
            pathSplit = pathSplit[1].split("=");
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
function getChartDateTimeLabelFormats() {
    switch (clientStyle.formatDate) {
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
            var dateTimeLabelFormats = {
                second: '%d-%m-%Y',
                minute: '%d-%m-%Y',
                hour: '%d-%m-%Y',
                day: '%d-%m-%Y',
                week: '%d-%m-%Y',
                month: '%m-%Y',
                year: '%Y'
            };
            break;
        default: // YYYY-MM-DD
            var dateTimeLabelFormats = {
                second: '%Y-%m-%d',
                minute: '%Y-%m-%d',
                hour: '%Y-%m-%d',
                day: '%Y-%m-%d',
                week: '%Y-%m-%d',
                month: '%Y-%m',
                year: '%Y'
            };
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
    $('div.checkbox.checkboxFilter.checked').each(function () {
        searchFilters += ";" + $(this).attr('id');
    });

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
    $('.IRChartComparisonBody, .IRChartTABody').css('display', 'none');
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
                }
            }, 500);
        }
    });
}
function IRChartNavigationHideAll() {
    if (typeof ($('.IRChartMenuTrigger')) == 'object') {
        $('.IRChartMenuTriggerBody, .IRChartTABody, .IRChartComparisonBody').css('display', 'none');
    }
}
function IRChartEventSendExtremes(extremes) {
    //TODO
    //To be used for the download data in the chart.
    $('.IRChartDomFromDate').html(Highcharts.dateFormat('%Y-%m-%d', extremes.userMin));
    $('.IRChartDomToDate').html(Highcharts.dateFormat('%Y-%m-%d', extremes.userMax));


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
    var lastPriceTime = new moment.tz(globalRawStockData[globalActiveListingIndex].timestamp, globalActiveExchangeTimeZone).format(clientStyle.formatTime);

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
function isDev() {
    if (location.href.indexOf('localhost') > -1 || location.href.indexOf('http://devir.euroinvestor.com/') > -1) {
        if (navigator.userAgent.indexOf("MSIE") > -1) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}
function debugStep(msg) {
    if (debug) {
        console.log('%c' + msg, 'color: #AAA');
        //console.log(msg);
    }
}
function debugError(msg) {
    if (debug) {
        console.log('%c' + msg + "", 'color: #FF0000');
    }
}
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
    return tooltipStr;
}

//
//  Commodity Conversion
//




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
    globalChartComparisonsInChart = 0;
    if (useIRChartTA) {
        $('.IRChartTAPlaceholder').html('');
    }

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
}

debugStep("ir.util.js - end");

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