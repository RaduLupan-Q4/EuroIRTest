var debug = isDev();
if (debug) {
    var t0, t1;
    var initTime = Date.now();
}
debugStep("ir.util.js - start");

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
var IREmailAlertModule = false;

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

//
//  Memory
//
var clientApiVersion;
var clientLCID;
var clientSolutionID;
var clientCustomerKeyRequired;
var clientAmountOfYears;
var clientAmountOfTrades;
//
var globalActiveLanguage = "en";
var globalActiveExchangeTimeZone = null;
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
var globalChartComparisonData = [];
var globalChartComparisonNames = [];
var globalChartContainer = '.IRChartHTMLPlaceholder';
var globalChartDom = null; // This is where we save and overwrite the DOM of the chart.
var globalActiveListingIndex = 0;
var globalActivePeriod = 'y1';
var globalActiveCurrency = 'N/A';
var globalAmountOfListings = 0;
var globalAmountOfIndices = 0;
var globalAmountOfPeers = 0;
var globalAmountOfNewsItems = 0;
var globalListingsSymbols = [];
var globalListingsExchangeShort = [];
var globalRawStockData;
var globalRawStockClosePriceListingData;
var globalNewsAllHeadlines = [];
//
//  IRChartHTML settings
//
var globalChartActiveDisplayMode = 'historical';
var globalChartAnimationMS = 1;
var globalChartMinRange = 14 * 24 * 3600 * 1000;
var globalChartWidth = 0;
//
//  IRNews
//
var globalNewsRawData;
var globalNewsPagesInTotal = -1;
var globalNewsEarlyYear = -1;
//
//  Objects
//
var LCID = {
    csCZ: -1,
    daDK: 1030,
    deDE: -1,
    enGB: 2057,
    esES: -1,
    fiFI: -1,
    frFR: -1,
    nlNL: -1,
    nnNO: -1,
    plPL: -1,
    svSE: -1,
    zhCHS: -1,
    zhCHT: -1
};
var translations = new function ()
{
    // Will be populated
}
var clientStyle = new function ()
{
    this.chart_ColourMain = '#0284AA';
    this.chart_ColourBackground = '#F9F9F9';
    this.chart_ColourBorder = '#E9E9E9';
    this.chart_DrawMode = 'area';
    this.chart_DrawModeMiniquote = 'line';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.amountOfHistoricalYears = 10;
    this.amountOfNewsToLoad = 20000;
    this.amountOfNewsToShow = 20;
    //this.amountOfNews = 20;

    this.amountOfNewsPerPage = 20;
    this.amountOfNewsHeadlines = 5;

    this.formatDate = 'YYYY-MM-DD';
    this.formatTime = 'HH:mm';
    this.formatDateTime = this.formatDate + ' ' + this.formatTime;
    //this.useCurrencySymbols = true;
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
} else {

}

//
//  DOM ready
//
$(function ()
{
    debugStep("ir.util.js - DOM Ready");

    initClientStyle(); // From ir.client.js (if clientStyle is defined).

    requestTranslationsData.done(function (translationsData)
    {
        debugStep("requestTranslationsData.done");
        mergeLanguage(translationsData.data);
        manualOverwriteActiveLanguage(); // TODO: remove this.
        updateChartHTMLLanguages();
        initHandlebars();
    });



    //
    //  Some data requests require a delay.
    //  As an example: requestOrdersData requires the IRInstrumentID from stock data prior to executing the ajax request.
    //
    if (useStockData) {

        $.when(requestStockData).done(function (stockData)
        {
            globalRawStockData = stockData.data;
            globalAmountOfListings = stockData.data.length;
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
                loadNewsArticleData();
            }
            //
            //  Features
            //
            if (useIRChartNews) {
                loadNewsDataInitial();
            }

            initMomentTimezone();
        });
    }

    if (useClosePriceBundleListingData && useStockData) {
        $.when(requestStockData).done(function (stockData)
        {
            globalRawStockData = stockData.data;
            globalAmountOfListings = stockData.data.length;
        });
        $.when(requestClosePriceListingData).done(function (closePriceListingData)
        {
            globalAmountOfListings = closePriceListingData.data.length;
        });
    }

    if (IRQuoteModule) {
        $.when(requestStockData, requestTranslationsData).done(function (stockData, translationsData)
        {
            buildQuoteTable();
            formatColour();
        });
    }

    if (IRChartModule) {
        $.when(requestStockData, requestClosePriceListingData, requestTranslationsData).done(function (stockData, closePriceListingData)
        {
            //globalRawStockData;
            //globalRawStockClosePriceListingData;
            // Todo
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
            drawActiveListingToChartHistorical();
            setChartExtremes('historical', 360);
        });

    }

    if (IRChartHTMLModule) {
        $.when(requestStockData, requestClosePriceListingData, requestTranslationsData).done(function (stockData, closePriceListingData)
        {
            var o = {
                headers: translations,
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData
                }
            };
            preloadIRChartDataClosePriceListing(o);
            drawActiveListingToChartHistorical();
            updateChartNavBarRange('IRChartHTML');
            updateIRChangeListing();
            attachClickHandlers('IRChartHTML');
            setChartExtremes('historical', 360);

            if (useIRChartNews) {
                $.when(requestStockData, requestNewsDataInitial).done(function (stockData, newsDataInitial)
                {
                    globalAmountOfNewsItems = newsDataInitial[0].data.length;
                    //globalNewsEarlyYear = new moment(newsDataInitial[0].data[globalAmountOfNewsItems - 1].timestamp);
                    var o = {
                        headers: translations,
                        data: newsDataInitial[0].data
                    }
                    globalNewsRawData = o;
                    preloadIRChartNewsHistorical();
                });
            }

        });

        $.when(requestStockData, requestIntradayListingData, requestTranslationsData).done(function (stockData, intradayListingData)
        {
            var o = {
                headers: translations,
                data: {
                    stock: stockData,
                    intradayListing: intradayListingData
                }
            };
            preloadIRChartDataIntradayListing(o);
        });
        $.when(requestStockData, requestClosePriceListingData, requestClosePriceOtherData, requestTranslationsData).done(function (stockData, closePriceListingData, closePriceOtherData)
        {
            var o = {
                headers: translations,
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData,
                    closePriceOther: closePriceOtherData
                }
            };
            preloadIRChartDataClosePriceOther(o);
            attachClickHandlers('IRChartHTMLCompare');
        });
    }

    if (IRChartHTMLMiniModule) {
        $.when(requestStockData, requestClosePriceListingData, requestTranslationsData).done(function (stockData, closePriceListingData)
        {
            var o = {
                headers: translations,
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData
                }
            };
            preloadIRChartMiniDataClosePriceListing(o);
            drawActiveListingToChartMiniHistorical();
            setChartExtremes('historical', 90);
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
    //        setChartExtremes('historical', 30);
    //    });
    //}

    if (IRMiniquoteModule) {
        $.when(requestStockData, requestTranslationsData).done(function (stockData, translationsData)
        {
            drawIRMiniquote();
            formatColour();
        });
    }

    if (IRMiniquoteChartModule) {
        $.when(requestStockData, requestClosePriceListingData, requestTranslationsData).done(function (stockData, closePriceListingData)
        {
            globalRawStockData = stockData[0].data;
            globalRawStockClosePriceListingData = closePriceListingData[0].data;

            globalChartContainer = '.IRMiniquoteChartPlaceholder';

            preloadIRMiniquoteChartDataClosePriceListing();
            drawIRMiniquoteChart();
            drawMiniquoteChart();
            drawActiveListingToIRMiniquoteChartHistorical();
            setChartExtremes('historical', 90);
            //preloadIRChartMiniDataClosePriceListing(o);
            //drawActiveListingToChartMiniHistorical();
            //
        });
    }

    if (IRBenchmarkModule) {
        $.when(requestStockData, requestClosePriceListingData, requestClosePriceOtherData, requestTranslationsData).done(function (stockData, closePriceListingData, closePriceOtherData)
        {
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
        $.when(requestStockData, requestClosePriceListingData, requestTranslationsData).done(function (stockData, closePriceListingData)
        {
            var o = {
                headers: translations,
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData
                }
            };

            preloadIRLookupChartDataClosePriceListing(o);
            //drawActiveListingToChartLookupHistorical();
            //setChartExtremes('historical', 360);

            //updateIRChangeListing();
            //attachClickHandlers('IRChartHTML');

        });
    }

    if (IRCalcModule) {
        globalChartContainer = '.IRChartCalcPlaceholder';
        $.when(requestStockData, requestClosePriceListingData, requestTranslationsData).done(function (stockData, closePriceListingData)
        {
            var o = {
                headers: translations,
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData
                }
            };
            preloadIRCalcChartDataClosePriceListing(o);
        });
    }

    //
    //  Some modules require a delay.
    //  As an example: requestOrdersData requires the IRInstrumentID from stock data prior to executing the ajax request.
    //
    if (IROrdersModule || IRTradesModule || IRNewsModule || IREmailAlertModule || IRNewsHeadlineModule) {
        $.when(requestStockData).done(function ()
        {
            if (IROrdersModule) {
                $.when(requestOrdersData, requestTranslationsData).done(function (ordersData)
                {
                    var o = {
                        headers: translations,
                        data: ordersData
                    }
                    buildOrdersTable(o, menuTemplate_OrdersTable);
                    formatColour(); // see ir.behaviour.js
                });
            }
            if (IRTradesModule) {
                $.when(requestTradesData, requestTranslationsData).done(function (tradesData)
                {
                    var o = {
                        headers: translations,
                        data: tradesData
                    }
                    buildTradesTable(o, menuTemplate_TradesTable);
                    formatColour(); // see ir.behaviour.js
                });
            }
            if (IRNewsModule) {
                $.when(requestNewsDataInitial, requestTranslationsData).done(function (newsDataInitial)
                {
                    globalAmountOfNewsItems = newsDataInitial[0].data.length;
                    globalNewsEarlyYear = new moment(newsDataInitial[0].data[globalAmountOfNewsItems - 1].timestamp);
                    var o = {
                        headers: translations,
                        data: newsDataInitial[0].data
                    }
                    globalNewsRawData = o;
                    buildNewsTool();
                    attachClickHandlers('IRNews');
                });
            }
            if (IRNewsHeadlineModule) {
                $.when(requestNewsDataInitial, requestTranslationsData).done(function (newsDataInitial)
                {
                    globalAmountOfNewsItems = newsDataInitial[0].data.length;
                    globalNewsEarlyYear = new moment(newsDataInitial[0].data[globalAmountOfNewsItems - 1].timestamp);
                    var o = {
                        headers: translations,
                        data: newsDataInitial[0].data
                    }
                    globalNewsRawData = o;
                    buildNewsHeadlineTool();
                    attachClickHandlers('IRNewsHeadline');
                });
            }
            if (IREmailAlertModule) {
                $.when(requestTranslationsData).done(function ()
                {
                    buildEmailAlertTool();
                });
            }

        });
    }
});

//
//  Functions
//
function checkactiveModules(activeModulesArr)
{
    debugStep("checkactiveModules");
    //
    // Check activeModules array and enable data requests and module builders.
    //
    for (var i = 0; i < activeModulesArr.length; i++) {
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
            case "IRCalc":
                IRCalcModule = true;
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
            default:
                debugError("no match for the module '" + activeModulesArr[i] + "' in activeModules");
                break;
        }
    }
}
function checkActiveFeatures(activeFeaturesArr)
{
    debugStep("checkActiveFeatures");
    //
    // Check activeFeatures array and enable features for module builders.
    //
    for (var i = 0; i < activeFeaturesArr.length; i++) {
        switch (activeFeaturesArr[i]) {
            case "IRChartNews":
                useIRChartNews = true;
                useStockData = true;
                useNewsData = true;
                break;
        }
    }
}
function initSolutionInfo()
{
    clientApiVersion = 1; // TODO, get this from provider!
    clientSolutionID = getSolutionID();
    clientCustomerKeyRequired = getCustomerKeyRequired();
    clientAmountOfYears = 10; // Listen to overwrite from ir.client.js
    clientAmountOfTrades = 5; // Listen to overwrite from ir.client.js
}
function getSolutionID()
{
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

    return fetchedSolutionID;
}
function getCustomerKeyRequired()
{
    debugStep("getCustomerKeyRequired");
    var solutionName;
    var pathSplit = location.href.split("/");
    
    if (pathSplit[3].toLowerCase() == 'solutions' || pathSplit[3].toLowerCase() == 'irmotor') {
        solutionName = pathSplit[4];

        if (pathSplit[4].toLowerCase() == 'debugsolutions')
        {
            solutionName = pathSplit[5]
        }

    } else {
        solutionName = pathSplit[3];
    }

    /* Presentation HAX JRJR TODO Remove this */
    if (solutionName == 'tools') {
        solutionName = 'Template';
    }


    return solutionName;
}
function getServiceEngingeURL()
{
    var url = 'http://' + getHost() + '/ServiceEngine/api/json/reply/';
    return url;
}
function getHost()
{
    debugStep("getHost");
    return location.host;
}
function getImagePath()
{
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
function getActiveCurrency()
{
    return globalRawStockData[globalActiveListingIndex].currency;
}
function updateLCID()
{
    debugStep("getLCID");
    updateGlobalLanguage();
    var lcidSelected;
    switch (globalActiveLanguage) {
        case "en":
            lcidSelected = LCID.enGB;
            break;
        case "da":
            lcidSelected = LCID.daDK;
            break;
    }
    clientLCID = lcidSelected;
}
function updateGlobalLanguage()
{
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
function initClientStyle()
{
    debugStep("initClientStyle");
    timerStart();
    //
    //  If clientStyleOverwrite is defined in ir.client.js, colours defined there will be used.
    //
    if (typeof (clientStyleOverwrite) != "undefined") {
        clientStyle.chart_ColourMain = clientStyleOverwrite.chart_ColourMain; // Write '#xxxxxx' and not '#xxx' or 'blue' to have transparrency in the chart.        
        clientStyle.chart_ColourBackground = clientStyleOverwrite.chart_ColourBackground;
        clientStyle.chart_ColourBorder = clientStyleOverwrite.chart_ColourBorder;

        if (clientStyleOverwrite.amountOfDecimals >= 0) {
            clientStyle.amountOfDecimals = clientStyleOverwrite.amountOfDecimals;
        }

        if (clientStyleOverwrite.amountOfTrades >= 0) {
            clientStyle.amountOfTrades = clientStyleOverwrite.amountOfTrades;
        }

        if (clientStyleOverwrite.amountOfHistoricalYears >= 0) {
            clientStyle.amountOfHistoricalYears = clientStyleOverwrite.amountOfHistoricalYears;
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

        if (typeof (clientStyleOverwrite.amountOfNewsHeadlines) != "undefined") {
            clientStyle.amountOfNewsHeadlines = clientStyleOverwrite.amountOfNewsHeadlines;
            if (clientStyle.amountOfNewsHeadlines <= 0) {
                clientStyle.amountOfNewsHeadlines = 20000;
            }
            if (clientStyle.amountOfNewsHeadlines > 20000) {
                clientStyle.amountOfNewsHeadlines = 20000;
            }
        }


    }
    if (typeof ($('.IRChartColour').css('color')) != "undefined") {
        clientStyle.chart_ColourMain = $('.IRChartColour').css('color');
    }
    timerEnd('initClientStyle');
}
function initMomentTimezone()
{
    debugStep("initMoment");

    /*
        Timezones
        See inc/scripts/moment/timezones.txt (list of exchange names from solution manager)
    */

    "London Stock Exchange"

    switch (globalRawStockData[globalActiveListingIndex].exchangeName) {
        case 'London Stock Exchange':
            moment.tz.add('Europe/Belfast|GMT BST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00');
            moment.tz.link('Europe/Belfast|Europe/London');
            globalActiveExchangeTimeZone = 'Europe/London';
            break;
    }
}
function mergeLanguage(t)
{
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
function manualOverwriteActiveLanguage()
{
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
        }

    }
}
function updateChartHTMLLanguages()
{
    //
    //  This should update all text strings in the chart (weekdays, months, symbols etc)
    //
    if (typeof (Highcharts) != "undefined") {
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
                ]
            }
        });
    }
}
function getChartDOM()
{
    debugStep("getChartDOM");
    return $(globalChartContainer).highcharts();
}
function updateTooltipDOHLCV(date)
{
    var dateIndex;
    var value = "-";
    var tooltipStr = "<div class=\"tooltipHTML\">";
    switch (globalChartActiveDisplayMode) {
        case "historical":
            try {
                dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">O:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
                tooltipStr += "<div><span class=\"subHeader\">H:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">L:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">C:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">V:</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {
                var newDateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div>O: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][1]) + "</div>";
                tooltipStr += "<div>H: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][2]) + "</div>";
                tooltipStr += "<div>L: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][3]) + "</div>";
                tooltipStr += "<div>C: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][4]) + "</div>";
                tooltipStr += "<div>V: " + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][5]) + "</div>";
            }
            break;
        case "intraday":
            try {
                dateIndex = globalChartListingIntradayDataDates.indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayData[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">O:</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
                tooltipStr += "<div><span class=\"subHeader\">H:</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][dateIndex][2]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">L:</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">C:</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][dateIndex][4]) + "</div>";

                tooltipStr += "<div><span class=\"subHeader\">V:</span><span class=\"subContent\">" + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {

                var newDateIndex = getClosestDateIndexForListingIntraday(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayData[globalActiveListingIndex][newDateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div>O: " + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][newDateIndex][1]) + "</div>";
                tooltipStr += "<div>H: " + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][newDateIndex][2]) + "</div>";
                tooltipStr += "<div>L: " + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][newDateIndex][3]) + "</div>";
                tooltipStr += "<div>C: " + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][newDateIndex][4]) + "</div>";

                tooltipStr += "<div>V: " + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][newDateIndex][5]) + "</div>";
            }
            break;
    }
    tooltipStr += "</div>";
    return tooltipStr;
    //$('.highcharts-tooltip').html(tooltipStr);
}
function updateTooltipDOHLCVN(date)
{
    var dateIndex;
    var newsIndex;
    var value = "-";
    var tooltipStr = "<div class=\"tooltipHTML\">";
    switch (globalChartActiveDisplayMode) {
        case "historical":
            try {
                dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">O:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
                tooltipStr += "<div><span class=\"subHeader\">H:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">L:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">C:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">V:</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {
                var newDateIndex = getClosestDateIndexForListingClosePrice(date);

                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div>O: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][1]) + "</div>";
                tooltipStr += "<div>H: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][2]) + "</div>";
                tooltipStr += "<div>L: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][3]) + "</div>";
                tooltipStr += "<div>C: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][4]) + "</div>";
                tooltipStr += "<div>V: " + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][5]) + "</div>";

                // NewsFlags
                //newsIndex = globalChartNewsDates.indexOf(date);
                //tooltipStr += "<div>N: " + globalChartNewsHeadlines[newsIndex] + "</div>"; // JRJR
            }
            break;
        case "intraday":
            try {
                dateIndex = globalChartListingIntradayDataDates.indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayData[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">O:</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
                tooltipStr += "<div><span class=\"subHeader\">H:</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][dateIndex][2]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">L:</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">C:</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][dateIndex][4]) + "</div>";
                
                tooltipStr += "<div><span class=\"subHeader\">V:</span><span class=\"subContent\">" + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {

                var newDateIndex = getClosestDateIndexForListingIntraday(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayData[globalActiveListingIndex][newDateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div>O: " + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][newDateIndex][1]) + "</div>";
                tooltipStr += "<div>H: " + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][newDateIndex][2]) + "</div>";
                tooltipStr += "<div>L: " + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][newDateIndex][3]) + "</div>";
                tooltipStr += "<div>C: " + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][newDateIndex][4]) + "</div>";

                tooltipStr += "<div>V: " + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][newDateIndex][5]) + "</div>";
            }
            break;
    }
    tooltipStr += "</div>";


    if (useIRChartNews) {
        newsIndex = globalChartNewsDates.indexOf(date);
        if (newsIndex > -1) {
            tooltipStr += "<div class=\"tooltipHtmlNews\">";
            tooltipStr += "<div class=\"tooltipHtmlNewsDate\">" + new moment(globalChartNewsDates[newsIndex]).format(clientStyle.formatDate) + "</div>";
            tooltipStr += "<div class=\"tooltipHtmlNewsHeadline\">" + globalChartNewsHeadlines[newsIndex] + "</div>";
            tooltipStr += "</div>";
        }
    }
    //JRJR

    // NewsFlags

    return tooltipStr;
    //$('.highcharts-tooltip').html(tooltipStr);
}
function chartOpenNewsFromFlag(item)
{
    window.open('http://' + getPathToSolution() + 'newsArticle.aspx?storyID=' + item.storyID); //JRJR
}
function getPathToSolution()
{
    return getHost() + '/solutions/' + getCustomerKeyRequired() + '/' + getSolutionID() + '/';
}
function updateTooltipDCV(date)
{
    var dateIndex;
    var value = "-";
    var tooltipStr = "<div class=\"tooltipHTML\">";
    switch (globalChartActiveDisplayMode) {
        case "historical":
            try {
                dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">C:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">V:</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {
                var newDateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div>C: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][4]) + "</div>";
                tooltipStr += "<div>V: " + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][5]) + "</div>";
            }
            break;
        case "intraday":
            try {
                dateIndex = globalChartListingIntradayDataDates.indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayData[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">C:</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][dateIndex][4]) + "</div>";
                
                tooltipStr += "<div><span class=\"subHeader\">V:</span><span class=\"subContent\">" + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
                
            }
            catch (err) {
                var newDateIndex = getClosestDateIndexForListingIntraday(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayData[globalActiveListingIndex][newDateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div>C: " + formatDecimal(globalChartListingIntradayData[globalActiveListingIndex][newDateIndex][4]) + "</div>";
                
                tooltipStr += "<div>V: " + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][newDateIndex][5]) + "</div>";
            }
            break;
    }
    tooltipStr += "</div>";
    //var dateIndex;
    //var value = "-";
    //var tooltipStr = "<div class=\"tooltipHTML\">";
    //switch (globalChartActiveDisplayMode) {
    //    case "historical":
    //        try {
    //            dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
    //            tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
    //            tooltipStr += "<div><span class=\"subHeader\">C:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
    //            tooltipStr += "<div><span class=\"subHeader\">V:</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
    //        }
    //        catch (err) {
    //            var newDateIndex = getClosestDateIndexForListingClosePrice(date);
    //            tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][0]).format(clientStyle.formatDate) + "</div>";
    //            tooltipStr += "<div>C: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][4]) + "</div>";
    //            tooltipStr += "<div>V: " + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][5]) + "</div>";
    //        }
    //        break;
    //}
    //tooltipStr += "</div>";
    return tooltipStr;
    //$('.highcharts-tooltip').html(tooltipStr);
}
function getIndexForMatchingDate(data, pickedDate)
{
    // Get the data opbject for the matching date.
}
function updateChartNavBarRange(module)
{
    debugStep("updateChartNavBarRange");
    switch (module) {
        case 'IRChartHTML':
            if (typeof ($('.chartChangePeriod')) != "undefined") {
                $('.chartChangePeriod div').click(function ()
                {
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
    }
}
function updateActiveChartNavBarRangePeriod(period)
{
    $('div.chartChangePeriod div').removeClass('activePeriod');
    $('div.chartChangePeriod div#' + period).addClass('activePeriod');
}
function updateIRChangeListing()
{
    debugStep("updateIRChangeListing");
    var element = $('.IRChangeListing');
    var subElements = "";
    var active = true;
    for (var i = 0; i < globalAmountOfListings; i++) {

        var addClass = '';
        if (active) {
            addClass = 'selected="selected"';
            active = false;
        }
        subElements += "<option value=\"" + i + "\"" + addClass + ">" + globalRawStockData[i].symbol + " - " + globalRawStockData[i].exchangeName + "</option>";
    }
    element.html("<select class=\"form-control\">" + subElements + "</select>");
}
function attachClickHandlers(module)
{
    debugStep("attachClickHandlers(" + module + ")");
    switch (module) {
        case 'IRChartHTML':
            if (typeof ($('.IRChangeListing')) != "undefined") {
                $('.IRChangeListing select').bind('change', function ()
                {
                    globalActiveListingIndex = parseInt($(this).val());
                    // TODO: buildQuoteTable();
                    redrawIRChartHTMLHistorical();
                    updateActiveChartNavBarRangePeriod(globalActivePeriod);
                    //clickedChartPeriod(globalActivePeriod);
                    //$('.ToolMenu.IRChartHTMLDisplayMode select').val(0);
                });
            }
            break;
        case 'IRChartHTMLCompare':
            if (typeof ($('.IRChartCompareListNavigation')) != "undefined") {
                $('.compareListNavigation').click(function ()
                {
                    if ($('.compareListNavigationInner').css('display') == 'block') {
                        $('.compareListNavigationInner').css('display', 'none');
                    } else {
                        $('.compareListNavigationInner').css('display', 'block');
                    }
                });

                $('.compareListNavigationInner .basicButtonLook').click(function ()
                {
                    //console.log($(this).html());
                    //console.log($(this).attr('id'));
                });

            }
            break;
        case 'IRNews':
            if (typeof ($('.newsSubmit')) != "undefined" && typeof ($('.searchText')) != "undefined") {
                $('.newsSubmit').click(function ()
                {
                    var searchText = $('.searchText').val();
                    newsSearch(searchText);
                });
            }

            $('.checkbox').click(function ()
            {
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

            //Hover effect
            $('td.Data').hover(function ()
            {
                //$('td.Data').removeClass('DataHover');
                $(this).parent().find('td').addClass('DataHover');
            }, function ()
            {
                $(this).parent().find('td').removeClass('DataHover');
            });

            $('input, textarea').placeholder();
            $('.IRNewsModule td.Data').click(function ()
            {
                var storyID = $(this).parent().attr('id');
                if ($(this).hasClass('download')) {
                    // Do nothing

                } else {
                    // Show news
                    window.open('newsArticle.aspx?storyid=' + storyID);
                }
            });

            $("#allRNSnews.checkbox").addClass('checked');
            break;

        case 'IRNewsHeadline':
            $('td.Data').hover(function ()
            {
                //$('td.Data').removeClass('DataHover');
                $(this).parent().find('td').addClass('DataHover');
            }, function ()
            {
                $(this).parent().find('td').removeClass('DataHover');
            });
            $('.IRNewsHeadlineModule td.Data').click(function ()
            {
                var storyID = $(this).parent().attr('id');
                if ($(this).hasClass('download')) {
                    // Do nothing

                } else {
                    // Show news
                    window.open('newsArticle.aspx?storyid=' + storyID);
                }
            });
            $('.IRNewsHeadlineModule div.Data').click(function ()
            {
                var storyID = $(this).parent().attr('id');
                if ($(this).hasClass('download')) {
                    // Do nothing

                } else {
                    // Show news
                    window.open('newsArticle.aspx?storyid=' + storyID);
                }
            });
            break;
    }
}
function stateNewHistoricalPeriodSelected(days)
{
    debugStep("stateNewHistoricalPeriodSelected(" + days + ")");
    checkChartState('historical');
    setChartExtremes('historical', days);
}
function stateNewIntradayPeriodSelected(hours)
{
    debugStep("stateNewIntradayPeriodSelected(" + hours + ")");
    checkChartState('intraday');
    setChartExtremes('intraday', hours);
}
function checkChartState(displayMode)
{
    if (globalChartActiveDisplayMode == 'historical' && displayMode == 'intraday') {
        globalChartActiveDisplayMode = 'intraday';
        redrawIRChartHTMLIntraday();
    }
    if (globalChartActiveDisplayMode == 'intraday' && displayMode == 'historical') {
        globalChartActiveDisplayMode = 'historical';
        redrawIRChartHTMLHistorical();
    }
}
function setChartExtremes(mode, period)
{
    debugStep("setChartExtremes(" + mode + "," + period + ")");

    switch (mode) {
        case "historical":
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
        case "intraday":
            var length = globalChartListingIntradayData[globalActiveListingIndex].length - 1;
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
function getClosestDateIndexForListingClosePrice(unixDate)
{
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
function getClosestDateIndexForListingIntraday(unixDate)
{
    var iterations = -1;
    var newUnixDate = 0;
    for (var i = 0; i <= globalChartListingIntradayDataDates.length - 1; i++) {
        if (newUnixDate < unixDate) {
            newUnixDate = globalChartListingIntradayDataDates[i];
            iterations++;
        }
    }
    return iterations;
}
function formatDecimal(number)
{
    try {
        return number.toFixed(clientStyle.amountOfDecimals);
    }
    catch (err) {
        return "-";
    }
}
function formatDecimalFileSize(number)
{
    try {
        return number.toFixed(1);
    }
    catch (err) {
        return "-";
    }
}
function formatLocal(number)
{
    return number.toLocaleString();
}
function getBrowserIEVersion()
{
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
function getStoryID()
{
    debugStep("getStoryID");
    var fetchedStoryID = -1;
    if (location.href.indexOf('?') > -1) {
        var pathSplit = location.href.split("?");
        pathSplit = pathSplit[1].split("=");
        fetchedStoryID = pathSplit[1];
    }
    return fetchedStoryID;
}
function getLogoPath()
{
    debugStep("getLogoPath");
    var logoPath = "";
    var pathSplit = location.href.split("/");
    for (var i = 0; i < pathSplit.length - 2; i++) {
        logoPath += pathSplit[i] + "/";
    }
    logoPath += "logo.png";
    return logoPath;
}
function getChartDateTimeLabelFormats()
{
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
            break;
    }
    return dateTimeLabelFormats;
}
function getChartDateTimeLabelFormatsLookupCalc()
{
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
function newsSearch(searchText)
{
    debugStep("newsSearch - [" + searchText + "]");
    var searchIn = $('#select-filter').val();

    if (searchText != "" && searchIn.toLowerCase() == 'title and content') {
        timerStart();
        loadNewsDataSearch(searchText);
        requestNewsDataSearch.done(function (newsDataSearch)
        {
            debugStep("requestNewsDataSearch.done");
            timerEnd('requestNewsDataSearch');
            buildNewsEntries(newsDataSearch);
        });
    } else if (searchText != "" && searchIn.toLowerCase() == 'title only') {
        newsFilterReset();
        newsFilter(searchText);
    } else {
        newsFilterReset();
        newsFilter('');
    }
}
function newsFilterReset()
{
    debugStep("newsFilterReset");
    timerStart();
    $('tr.Data').removeClass('hide');
    for (var page = 1; page <= globalNewsPagesInTotal; page++) {
        $('tr.Data').removeClass('page' + page);
    }
    timerEnd('newsFilterReset');
}
function newsFilter(searchText)
{
    debugStep("newsFilter");
    timerStart();
    var searchedText = "";
    if (typeof (searchText) == 'string') {
        searchedText = searchText.toLowerCase();
    }

    var searchFromYear = $('.search-from #from-year').val();
    var searchFromMonth = $('.search-from #from-month').val();

    var searchToYear = $('.search-to #to-year').val();
    var searchToMonth = $('.search-to #to-month').val();

    var searchFilters = "";
    $('div.checkbox.checkboxFilter.checked').each(function ()
    {
        searchFilters += ";" + $(this).attr('id');
    });


    timerEnd('newsFilter (part 1)');
    searchFilters = newsAddDistinctFilter(searchFilters);
    if (searchFilters == '') {
        searchFilters = ';allRNSnews';
    }
    timerStart();
    //debugStep("[fromYear][fromMonth][toYear][toMonth]");
    //debugStep("[" + searchFromYear + "][" + searchFromMonth + "][" + searchToYear + "][" + searchToMonth + "]");

    //
    //  Traverse each news entry (Timestamp, Headline, Download)
    //
    $('tr.Data').each(function ()
    {
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

    timerEnd('newsFilter (part 2)');
    setNewsPagination();
}
function newsAddDistinctFilter(filters)
{
    debugStep("newsAddDistinctFilter");
    timerStart();
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
    timerEnd('newsAddDistinctFilter');
    return RNSFiltersToReturn;
}
function isDev()
{
    if (location.href.indexOf('localhost') > -1) {
        return true;
    } else {
        return false;
    }
}
function debugStep(msg)
{
    if (debug) {
        console.log('%c' + msg, 'color: #AAA');
    }
}
function debugError(msg)
{
    if (debug) {
        console.log('%c' + msg + "", 'color: #FF0000');
    }
}
function timerStart()
{
    if (debug) {
        if (window.console) {
            t0 = performance.now();
        }
    }
}
function timerEnd(msg)
{
    if (debug) {
        t1 = performance.now();

        var timePased = (t1 - t0);
        var colouor = 'orange';
        if (timePased < 100) {
            colouor = 'green';
        }
        if (timePased > 200) {
            colouor = 'red';
        }
        console.log('%c' + timePased.toFixed(2) + " | " + msg, 'color: ' + colouor);
    }
}
debugStep("ir.util.js - end");