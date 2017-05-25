var debug = isDev(); 
//debug = false;
if (debug) {
    var t0 = Date.now();
    var t1 = Date.now();
}
//
//  Modules
//
var IRQuoteModule = false;
var IRQuoteMultiModule = false;
var IRChartModule = false;
var IRPerformanceModule = false;
var IRCalcModule = false;
var IRMiniquoteChartModule = false;
//
//  Features
//
var useIRChartNews = false;
var useIRChartTA = false;
var useIRChartCompare = true;
var useIRChartView = false;
var useIRChartTSR = false;
//
//  Data
//
var useStockData = false;
var useClosePriceBundleListingData = false;
var useIntradayBundleListingData = false;
var useClosePriceBundleOtherData = false;
var useIRChartDividendData = false;
//
//  Memory
//
var clientApiVersion;
var clientLCID;
var clientSolutionID;
var clientCustomerKeyRequired;
var clientAmountOfYears;
var clientAmountOfTrades;
var globalHTMLReadingDirection = "LRT";
var globalListingsExchangeShort = [];
var globalActiveLanguage = "en";
var globalActivePeriod = 'y1';
var globalActiveLocalTimeZone = null;
var globalActiveLocalTimeZoneShort = null;
var globalRawStockData;
var globalActiveListingIndex = 0;
var globalChartListingIntradayDataDates = [];
var globalChartListingIntradayData = [];
var globalChartListingIntradayDataVolume = [];
var globalChartListingIntradayDataOHLCV = [];
var globalChartNewsDates = [];
var globalChartNewsHeadlines = [];
var globalChartNewsHeadlinesFlags = [];
var globalChartListingStockData = [];
var globalChartListingStockDataVolume = [];
var globalChartListingStockDataDates = [];
var globalChartListingStockDataOHLCV = [];
var globalChartComparisonData = [];
var globalChartComparisonNames = [];
var globalChartComparisonSymbols = [];
var globalChartComparisonInChart = [];
//
//  IRChart settings
//
var chartDisplayModes = new function () {
    this.historical = 'historical',
    this.intraday = 'intraday',
    this.comparison = 'comparison',
    this.ta = 'ta',
    this.tsr = 'tsr'
};
var chartEnabledClickHandlers = new function () {
    this.chartNavigationComparison = false;
    this.chartNavigationComparisonBodyListWide = false;
    this.chartNavigationComparisonBodyListNarrow = false;
    this.chartNavigationTA = false;
    this.chartNavigationTAPlaceholderSpan = false;
    this.chartNavigationFullscreen = false;
    this.chartNavigationView = false;

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
var globalChartUseCustomTooltipContent = false;
var globalNewsPagesInTotal = -1;
var globalNewsEarlyYear = -1;
var stockDataTA = [];
var stockDataTADates = [];
var stockDataTSR = [];
var stockDataTSRDates = [];
var stockDataTSRForTooltip = [];
//
//  Objects
//
var LCID = new function () {
    this.csCZ = 1029;
    this.daDK = 1030;
    this.deDE = 1031;
    this.enGB = 2057;
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

    this.chart_CustomTooltipContent = '';
    this.chart_CustomTooltipTopPX = 0;
    this.chart_TooltipHideDate = true;
    this.chart_TooltipHideOpen = true;
    this.chart_TooltipHideHigh = true;
    this.chart_TooltipHideLow = true;
    this.chart_TooltipHideClose = true;
    this.chart_TooltipHideVolume = true;
    this.chart_TooltipHideNews = true;

    this.miniquoteChartDrawMode = 'area';
    this.miniquoteChartDefaultPeriode = 'm1';

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


}
var clientLocaleParameters = new function () {
    this.decimalSeparator = ',';
    this.decimalSeparator1000 = '.';
};

initSolutionInfo();
updateLCID();
//
// Check activeModules, enable data requests and module builders.
//
if (typeof (activeModules) != "undefined") {
    checkActiveModules(activeModules);
} else {
    debugError("activeModules is not present in tool header");
}
//
// Check activeFeatures, enable data requests and module builders.
//
if (typeof (activeFeatures) != "undefined") {
    checkActiveFeatures(activeFeatures);
} else {
}

//
//  DOM ready
//
$(function () {
    debugStep("ir.util.js - DOM Ready");
    setReadingDirection();
    initClientStyle(); // From ir.client.js (if clientStyle is defined).
    requestListingFromURL();
    $.when(requestTranslationsData).done(function (translationsData) {
        debugStep("requestTranslationsData.done");
        mergeLanguage(translationsData.data);
        updateChartHTMLLanguages();
        initHandlebars();
    });
    if (useStockData) {
        $.when(requestStockData).done(function (stockData) {
            if (globalActiveListingIndex > stockData.data.length - 1) {
                globalActiveListingIndex = 0;
            }
            globalRawStockData = stockData.data;
            globalAmountOfListings = stockData.data.length;

            for (var i = 0; i < globalAmountOfListings; i++) {
                globalListingsExchangeShort.push('');
            }

            initMomentTimezone();
        });
    }
    if (IRQuoteModule) {
        $.when(requestStockData, requestTranslationsData).done(function (stockData, translationsData) {
            buildQuoteTable();
            formatColour();
        });
    }
    if (IRQuoteMultiModule) {
        $.when(requestStockData, requestTranslationsData).done(function (stockData, translationsData) {
            buildQuoteMultiTable();
            formatColour();
        });
    }
    if (IRMiniquoteChartModule) {
        $.when(requestStockData, requestClosePriceListingData, requestIntradayListingData, requestTranslationsData).done(function (stockData, closePriceListingData, intradayListingData) {
            var o = {
                headers: translations,
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData,
                    intradayListing: intradayListingData
                }
            };
            preloadIRMiniquoteChartClosePriceListing(o);
            preloadIRMiniquoteChartIntradayListing(o);
            globalChartContainer = '.IRMiniquoteChartPlaceholder';
            buildIRMiniquoteChartTool();
            // JRJR
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
            drawActiveListingToChartHistorical();
            updateChartNavBarRange('IRChart');

            IRChartNavigation.initNavigation();

            setChartExtremes(chartDisplayModes.historical, 360);
            attachClickHandlers('IRChart');
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
    if (IRPerformanceModule) {

        $.when(requestStockData, requestClosePriceListingData, requestClosePriceOtherData, requestTranslationsData).done(function (stockData, closePriceListingData, closePriceOtherData) {
            debugStep("Done: requestStockData, requestClosePriceListingData, requestClosePriceOtherData, requestTranslationsData");
            var performanceData = {
                headers: translations,
                subHeaders: translations,
                dataListings: preloadIRPerformanceData(closePriceListingData[0].data, stockData[0].data, 'listing'),
                dataIndices: preloadIRPerformanceData(closePriceOtherData[0].data, null, 'indices'),
                dataPeers: preloadIRPerformanceData(closePriceOtherData[0].data, null, 'peers')
            };
            buildIRPerformanceModule(performanceData);
            formatColour();
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
            preloadIRCalcDataClosePriceListing(o);
            //updateIRChangeListing();
            //attachClickHandlers('IRCalcModule');
        });
    }
});
function setReadingDirection() {
    if (typeof ($('html').attr('dir')) == "string") {
        $('html').attr('dir', globalHTMLReadingDirection.toLowerCase());
    }
    $('body').addClass('readingDirection' + globalHTMLReadingDirection);
}
function checkActiveModules(activeModulesArr) {
    debugStep("checkactiveModules");
    for (var i = 0; i < activeModulesArr.length; i++) {
        debugStep("activating module: " + activeModulesArr[i]);
        switch (activeModulesArr[i]) {
            case "IRQuote":
                IRQuoteModule = true;
                useStockData = true;
                break;
            case "IRQuoteMulti":
                IRQuoteMultiModule = true;
                useStockData = true;
                break;
            case "IRChart":
                IRChartModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                useIntradayBundleListingData = true;
                useClosePriceBundleOtherData = true;
                break;
            case "IRPerformance":
                IRPerformanceModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                useClosePriceBundleOtherData = true;
                break;
            case "IRCalc":
                IRCalcModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                break;
            case "IRMiniquote":
                IRQuoteModule = true;
                useStockData = true;
                break;
            case "IRMiniquoteChart":
                IRMiniquoteChartModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                useIntradayBundleListingData = true;
                break;
            case "IRMiniquoteMulti":
                IRQuoteMultiModule = true;
                useStockData = true;
                break;
            default:
                debugError("checkactiveModules() - no match for " + activeModulesArr[i]);
                break;
        }
    }
}
function checkActiveFeatures(activeFeaturesArr) {
    debugStep("checkActiveFeatures");
    for (var i = 0; i < activeFeaturesArr.length; i++) {
        debugStep("activating feature: " + activeFeaturesArr[i]);
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
            case "IRChartTSR":
                useIRChartView = true;
                useIRChartTSR = true;
                useIRChartDividendData = true;
        }
    }
}
function initClientStyle() {
    debugStep("initClientStyle");
    if (typeof (clientStyleOverwrite) != "undefined") {
        clientStyle.chart_ColourMain = clientStyleOverwrite.chart_ColourMain; // Write '#xxxxxx' and not '#xxx' or 'blue' to have transparrency in the chart.        
        clientStyle.chart_ColourBackground = clientStyleOverwrite.chart_ColourBackground;
        clientStyle.chart_ColourBorder = clientStyleOverwrite.chart_ColourBorder;
        clientStyle.chart_ColourVolumeBars = clientStyleOverwrite.chart_ColourVolumeBars;
        if (clientStyleOverwrite.amountOfHistoricalYears >= 0) {
            clientStyle.amountOfHistoricalYears = clientStyleOverwrite.amountOfHistoricalYears;
            if (IRPerformanceModule) {
                clientStyle.amountOfHistoricalYears = 1;
            }
        }
    }
    if (typeof ($('.IRChartColour').css('color')) != "undefined") {
        var rgbIRChartColour = $('.IRChartColour').css('color').match(/\d+/g);
        var hexIRChartColour = '#' + String('0' + Number(rgbIRChartColour[0]).toString(16)).slice(-2) + String('0' + Number(rgbIRChartColour[1]).toString(16)).slice(-2) + String('0' + Number(rgbIRChartColour[2]).toString(16)).slice(-2);
        clientStyle.chart_ColourMain = hexIRChartColour;
    }
    if (typeof (clientStyleOverwrite.chart_DrawMode) != "undefined") {
        clientStyle.chart_DrawMode = clientStyleOverwrite.chart_DrawMode;
    }
    if (typeof (clientStyleOverwrite.miniquoteChartDrawMode) != "undefined") {
        clientStyle.miniquoteChartDrawMode = clientStyleOverwrite.miniquoteChartDrawMode;
    }
    globalChartColours = [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'];

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
function initSolutionInfo() {
    debugStep("initSolutionInfo()");
    clientApiVersion = 1; // TODO, get this from provider!
    clientSolutionID = getSolutionID();
    clientCustomerKeyRequired = getCustomerKeyRequired();
    clientAmountOfYears = 10;
    clientAmountOfTrades = 5;
    debugStep("clientSolutionID: " + clientSolutionID);
    debugStep("clientCustomerKeyRequired: " + clientCustomerKeyRequired);
}
function getSolutionID() {
    return getValuesFromSplittedPath('SolutionID');
}
function getCustomerKeyRequired() {
    return getValuesFromSplittedPath('customerKey');
}
function getValuesFromSplittedPath(whatToGet) {
    //
    //  whatToGet =  solutionid | customerkey
    //
    var pathSplit = location.href.toLowerCase().split("/");
    var fetchedValue = "";
    var fetchedIndexLocation = -1;
    var indexSolutionsFolder = -1;

    if (location.href.toLowerCase().indexOf("/debugsolutions/") > -1) {
        indexSolutionsFolder = pathSplit.indexOf("debugsolutions");
    } else if (location.href.toLowerCase().indexOf("/solutions/") > -1) {
        indexSolutionsFolder = pathSplit.indexOf("solutions");
    } else if (location.href.toLowerCase().indexOf("/solutionsstaging/") > -1) {
        indexSolutionsFolder = pathSplit.indexOf("solutionsstaging");
    } else if (location.href.toLowerCase().indexOf("/tools/") > -1) {
        if (location.href.toLowerCase().indexOf("?") > -1) {
            var pathSplitQuestionmark = location.href.toLowerCase().split("?");
            var pathSplitGetParams = pathSplitQuestionmark[1];
            pathSplitGetParams = pathSplitGetParams.split("&");
            for (var i = 0; i < pathSplitGetParams.length - 1; i++) {
                var pathSplitGetParamsSub = pathSplitGetParams[i].split('=');
                if (pathSplitGetParamsSub[0].toLowerCase() == whatToGet.toLowerCase()) {
                    fetchedValue = pathSplitGetParamsSub[1];
                }
            }
        }
        indexSolutionsFolder = -1;
    } else if (location.href.toLowerCase().indexOf("localhost") > -1) {
        indexSolutionsFolder = 2;
    }
    if (indexSolutionsFolder > -1) {
        switch (whatToGet.toLowerCase()) {
            case "customerkey":
                fetchedIndexLocation = indexSolutionsFolder + 1;
                break;
            case "solutionid":
                fetchedIndexLocation = indexSolutionsFolder + 2;
                break;
        }
        fetchedValue = pathSplit[fetchedIndexLocation];
    } else {
        // should be set prior to this step.
    }

    //
    //  Custom modifications
    //
    if (location.href.toLowerCase().indexOf("/templatedevelopment/") > -1) {
        if (whatToGet == "solutionid") {
            fetchedValue = 2594;
        }
    }
    if (location.href.toLowerCase().indexOf("simulatelocalhost") > -1) {
        if (whatToGet == "solutionid") {
            fetchedValue = 2552;
        }
        if (whatToGet == "customerkey") {
            fetchedValue = 'JR';
        }
    }
    //

    debugStep("requested[" + whatToGet + "], fetchedValue[" + fetchedValue + "]");
    return fetchedValue;
}
function getSolutionID_backup() {
    debugStep("getSolutionID");
    var fetchedSolutionID;
    var pathSplit = location.href.split("/");
    if (location.href.toLowerCase().indexOf("devir.euroinvestor.com/template") > -1) {
        fetchedSolutionID = pathSplit[4];
        if (fetchedSolutionID.toLowerCase() == "tools") {
            fetchedSolutionID = 2086;
        }
    } else if (location.href.toLowerCase().indexOf("localhost:1337/irmotor/template") > -1) {
        fetchedSolutionID = pathSplit[5];
        if (fetchedSolutionID.toLowerCase() == "tools") {
            fetchedSolutionID = 2086;
        }
    } else if (location.href.toLowerCase().indexOf("localhost:1337/irmotor/debugsolutions/") > -1) {
        fetchedSolutionID = pathSplit[6];
    } else if (location.href.toLowerCase().indexOf("devir.euroinvestor.com/solutions") > -1 || location.href.toLowerCase().indexOf("ir.euroinvestor.com/solutions") > -1) {
        fetchedSolutionID = pathSplit[5];
    }

    return fetchedSolutionID;
}
function getCustomerKeyRequired_backup() {
    debugStep("getCustomerKeyRequired");
    var solutionName;
    var pathSplit = location.href.split("/");
    if (location.href.toLowerCase().indexOf("devir.euroinvestor.com/template") > -1) {
        solutionName = "Template";
    }
    if (location.href.toLowerCase().indexOf("localhost:1337/irmotor/template") > -1) {
        solutionName = "Template";
    }
    if (location.href.toLowerCase().indexOf("localhost:1337/irmotor/debugsolutions/") > -1) {
        solutionName = pathSplit[5];
    }
    if (location.href.toLowerCase().indexOf("devir.euroinvestor.com/solutions") > -1 || location.href.toLowerCase().indexOf("ir.euroinvestor.com/solutions") > -1) {
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
    }
    clientLCID = lcidSelected;
    if (decimalCommaOrPoint == 'point') {
        clientLocaleParameters.decimalSeparator = '.';
        clientLocaleParameters.decimalSeparator1000 = ',';
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
            //globalActiveLocalTimeZoneShort = 'GMT';
            break;

        case 'Euronext Stock Exchange':
        case 'EuroNext Stock Exchange':
        case 'EuroNext Indicies':
        case 'OMX Nordic Equities':
        case 'OMX Nordic Indices':
        case 'Oslo Stock Exchange':
        case 'Xetra':
            moment.tz.add('Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00');
            globalActiveExchangeTimeZone = 'Europe/Berlin';
            globalActiveLocalTimeZone = 'Central European Standard Time';
            //globalActiveLocalTimeZoneShort = 'CEST';
            break;

        case 'New York Stock Exchange':
        case 'Nasdaq':
            moment.tz.add('America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0');
            globalActiveExchangeTimeZone = 'America/New_York';
            globalActiveLocalTimeZone = 'Eastern Standard Time';
            //globalActiveLocalTimeZoneShort = 'EST';
            break;

        case 'Hong Kong Exchange':
            moment.tz.add('Asia/Hong_Kong|LMT HKT HKST JST|-7A.G -80 -90 -90|0121312121212121212121212121212121212121212121212121212121212121212121|-2CFHA.G 1sEP6.G 1cL0 ylu 93X0 1qQu 1tX0 Rd0 1In0 NB0 1cL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1kL0 14N0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0');
            globalActiveExchangeTimeZone = 'Asia/Hong_Kong';
            globalActiveLocalTimeZone = 'China Standard Time';
            //globalActiveLocalTimeZoneShort = 'CST';
            break;

        case 'Singapore Stock Exchange':
            moment.tz.add('Asia/Singapore|SMT MALT MALST MALT MALT JST SGT SGT|-6T.p -70 -7k -7k -7u -90 -7u -80|012345467|-2Bg6T.p 17anT.p 7hXE dM00 17bO 8Fyu Mspu DTA0');
            globalActiveExchangeTimeZone = 'Asia/Singapore';
            globalActiveLocalTimeZone = 'Singapore Standard Time';
            //globalActiveLocalTimeZoneShort = 'SST';
            break;

        case 'Australian Stock Exchange':
            moment.tz.add('Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0');
            globalActiveExchangeTimeZone = 'Australia/Melbourne';
            globalActiveLocalTimeZone = 'AUS Eastern Standard Time';
            //globalActiveLocalTimeZoneShort = 'AEST';
            break;

        case 'Tel Aviv Stock Exchange':
            moment.tz.add('Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|01212121212132121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0');
            globalActiveExchangeTimeZone = 'Asia/Jerusalem';
            globalActiveLocalTimeZone = 'Israel Standard Time';
            //globalActiveLocalTimeZoneShort = 'IST';
            break;

        case 'Buenos Aires Stock Exchange':
            moment.tz.add('America/Argentina/Buenos_Aires|CMT ART ARST ART ARST|4g.M 40 30 30 20|0121212121212121212121212121212121212121213434343434343234343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 j3c0 uL0 1qN0 WL0');
            globalActiveExchangeTimeZone = 'America/Argentina/Buenos_Aires';
            globalActiveLocalTimeZone = 'Argentina Standard Time';
            //globalActiveLocalTimeZoneShort = 'AST';
            break;

        case 'Kuwait Stock Exchange':
            moment.tz.add('Asia/Kuwait|LMT AST|-3b.U -30|01|-MG3b.U');
            globalActiveExchangeTimeZone = 'Asia/Kuwait';
            globalActiveLocalTimeZone = 'Arabian Standard Time';
            //globalActiveLocalTimeZoneShort = 'AST';
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
        case 'Euronext Stock Exchange':
        case 'EuroNext Stock Exchange':
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
            debugError("setExchangeShort is missing [" + exchange + "].");
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
        case 'Euronext Stock Exchange':
        case 'EuroNext Stock Exchange':
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
            exchangeShort: "BCBA";
            break;
        case 'Kuwait Stock Exchange':
            exchangeShort = "KSE";
            break;
        case 'Nasdaq OTC Foreign':
            exchangeShort: "NASDAQ OTC";
            break;
        case 'Milan Ced Borsa':
            exchangeShort: "MIL";
            break;
        case 'Canadian Venture Exchange':
            exchangeShort: "CDNX";
            break;
        default:
            debugError("setExchangeShort is missing [" + exchange + "].");
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
function updateChartHTMLLanguages() {
    debugStep("updateChartHTMLLanguages");
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
                    translations.t_jan_short.capitalizeFirstLetter(),
                    translations.t_feb_short.capitalizeFirstLetter(),
                    translations.t_mar_short.capitalizeFirstLetter(),
                    translations.t_apr_short.capitalizeFirstLetter(),
                    translations.t_may_short.capitalizeFirstLetter(),
                    translations.t_jun_short.capitalizeFirstLetter(),
                    translations.t_jul_short.capitalizeFirstLetter(),
                    translations.t_aug_short.capitalizeFirstLetter(),
                    translations.t_sep_short.capitalizeFirstLetter(),
                    translations.t_oct_short.capitalizeFirstLetter(),
                    translations.t_nov_short.capitalizeFirstLetter(),
                    translations.t_dec_short.capitalizeFirstLetter()
                ]
            }
        });
    }
}
function initHandlebars() {
    debugStep("initHandlebars");
    if (IRQuoteModule) {
        if (typeof ($('.IRQuoteModule').html()) != "undefined" && typeof ($('#IRQuoteTableTemplate').html()) != "undefined") {
            var menuSource_QuoteTable = $('#IRQuoteTableTemplate').html();
            menuTemplate_QuoteTable = Handlebars.compile(menuSource_QuoteTable);
        }

        if (typeof ($('.IRQuoteHorizontalModule').html()) != "undefined" && typeof ($('#IRQuoteTableHorizontalTemplate').html()) != "undefined") {
            var menuSource_QuoteTableHorizontal = $('#IRQuoteTableHorizontalTemplate').html();
            menuTemplate_QuoteTableHorizontal = Handlebars.compile(menuSource_QuoteTableHorizontal);
        }

        if (typeof ($('.IRQuoteVerticalModule').html()) != "undefined" && typeof ($('#IRQuoteTableVerticalTemplate').html()) != "undefined") {
            var menuSource_QuoteTableVertical = $('#IRQuoteTableVerticalTemplate').html();
            menuTemplate_QuoteTableVertical = Handlebars.compile(menuSource_QuoteTableVertical);
        }
    }
    if (IRQuoteMultiModule) {
        if (typeof ($('.IRQuoteModule').html()) != "undefined" && typeof ($('#IRQuoteMultiTableTemplate').html()) != "undefined") {
            var menuSource_QuoteMultiTable = $('#IRQuoteMultiTableTemplate').html();
            menuTemplate_QuoteMultiTable = Handlebars.compile(menuSource_QuoteMultiTable);
        }
    }
    if (IRChartModule) {
        if (typeof ($('.IRChartModule').html()) != "undefined" && typeof ($('#IRChartModuleTemplate').html()) != "undefined") {
            var menuSource_IRChart = $('#IRChartModuleTemplate').html();
            menuTemplate_IRChart = Handlebars.compile(menuSource_IRChart);
        }
    }
    if (IRPerformanceModule) {
        if (typeof ($('.IRPerformanceModule').html()) != "undefined" && typeof ($('#IRPerformanceModuleTemplate').html()) != "undefined") {
            var menuSource_IRPerformance = $('#IRPerformanceModuleTemplate').html();
            menuTemplate_IRPerformance = Handlebars.compile(menuSource_IRPerformance);
        }
    }

    if (IRMiniquoteChartModule) {
        if (typeof ($('.IRMiniquoteChartModule').html()) != "undefined" && typeof ($('#IRMiniquoteChartModuleTemplate').html()) != "undefined") {
            var menuSource_IRMiniquoteChart = $('#IRMiniquoteChartModuleTemplate').html();
            menuTemplate_IRMiniquoteChart = Handlebars.compile(menuSource_IRMiniquoteChart);
        }
    }
}
function formatDecimal(number) {
    try {
        if (typeof (number) == 'number') {
            return number.toFixed(clientStyle.amountOfDecimals).replace('.', clientLocaleParameters.decimalSeparator);
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
        return number.toFixed(1);
    }
    catch (err) {
        return "-";
    }
}
function formatLocal(number) {
    //return number.toLocaleString();
    return formatNumberWithLocalDelimiters(number);
}
function formatNumberWithLocalDelimiters(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
        counter = 0;
    }
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
function getIRMiniquoteChartDateTimeLabelFormats() {
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
        default: // YYYY-MM-DD
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%Y-%m-%d',
                week: '%Y-%m-%d',
                month: '%Y-%m-%d',
                year: '%Y'
            };
            break;
    }
    return dateTimeLabelFormats;
}
function IRChartEventSendExtremes(extremes) {
    //TODO
    //To be used for the download data in the chart.


    $('.IRChartDomFromDate').html(Highcharts.dateFormat('%Y-%m-%d', extremes.userMin));
    $('.IRChartDomToDate').html(Highcharts.dateFormat('%Y-%m-%d', extremes.userMax));


}
function getChartDOM() {
    return $(globalChartContainer).highcharts();
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
                            days = 90;
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
function updateChartWithPeriod(module, period) {
    debugStep("updateChartWithPeriod");
    switch (module) {
        case 'IRMiniquoteChartModule':
            if (typeof ($('.IRMiniquoteChartPlaceholder')) != "undefined") {

                var days = -1;
                var hours = -1;

                switch (period) {
                    case 'd1':
                        hours = 24;
                        break;
                    case 'd5':
                        hours = 24 * 5;
                        break;
                    case 'm1':
                        days = 90;
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
                if (days > 0) {
                    stateNewHistoricalPeriodSelected(days);
                }

                if (hours > 0) {
                    stateNewIntradayPeriodSelected(hours);
                }

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
            var lastEntryUnixDate = globalChartListingIntradayData[globalActiveListingIndex][length][0];
            //var lastEntryUnixDate = new moment.tz(globalChartListingIntradayData[globalActiveListingIndex][length][0], globalActiveExchangeTimeZone).valueOf();
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

            /*
                Backup
                ---
                var length = globalChartListingIntradayData[globalActiveListingIndex].length - 1;
                var lastEntryUnixDate = globalChartListingIntradayData[globalActiveListingIndex][length][0];
                //var lastEntryUnixDate = new moment.tz(globalChartListingIntradayData[globalActiveListingIndex][length][0], globalActiveExchangeTimeZone).valueOf();
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
                ---
            
            */

            break;
    }
}
function attachClickHandlers(module) {
    debugStep("attachClickHandlers(" + module + ")");

    if (useIRChartCompare) {
        if (!chartEnabledClickHandlers.chartNavigationComparison) {

            debugStep("attachClickHandlers - useIRChartCompare");

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

                $('.IRChartNavigationCloseOpen').click(function () {
                    $('.IRChartNavigationWideInner').css('display', 'none'); //JRJR
                });
            }
            chartEnabledClickHandlers.chartNavigationComparison = true;
        }

        if (module == "IRChartComparison") {

            if (!chartEnabledClickHandlers.chartNavigationComparisonBodyListWide) {

                if (typeof ($('.IRChartNavigation .IRChartNavigationWideOuter .navComparison .IRChartCompareElement')) == 'object') {

                    $('.IRChartNavigation .IRChartNavigationWideOuter .navComparison .IRChartCompareElement').click(function () {
                        debugStep("clicked IRChartCompareElement");

                        if ($(this).attr('id') == 'IRChartNavigationClearComparison') {
                            resetIRChart();
                        } else {
                            var type = $(this).attr('id').split("_")[0];
                            var id = $(this).attr('id').split("_")[1];
                            var uniqueID = $(this).attr('id').split("_")[2];
                            updateComparison(type, id, uniqueID, $(this));
                        }
                    });
                    chartEnabledClickHandlers.chartNavigationComparisonBodyListWide = true;
                }
                if (typeof ($('.IRChartModule .IRChartNavigation .IRChartNavigationInner .IRChartNavigationNarrow .IRChartNavigationNarrowOuter .IRChartNavigationNarrowMenu li'))) {
                    $('.IRChartModule .IRChartNavigation .IRChartNavigationInner .IRChartNavigationNarrow .IRChartNavigationNarrowOuter .IRChartNavigationNarrowMenu li.has-sub #IRChartCompareList li span').click(function () {
                        debugStep("clicked IRChartCompareList li element");

                        if ($(this).attr('id') == 'IRChartNavigationClearComparison') {

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
                    chartEnabledClickHandlers.chartNavigationComparisonBodyListNarrow = true;
                }

            }
        }
        IRChartNavigationShowHide('IRChartNavigationWideInner');
    }

    if (useIRChartTA) {
        if (!chartEnabledClickHandlers.chartNavigationTA) {

            debugStep("attachClickHandlers - useIRChartTA");

            if (typeof ($('.IRChartNavigation .IRChartNavigationWide .IRChartTAElement')) == 'object') {

                $('.IRChartNavigation .IRChartNavigationWide .IRChartTAElement').click(function () {
                    debugStep("clicked IRChartTAElement");

                    if ($(this).attr('id') == 'IRChartNavigationClearTA') {

                    } else {

                        //JRJR
                        var id = $(this).attr('id');

                        $('.IRChartNavigation .IRChartNavigationWide .IRChartTAElement').removeClass('active');
                        $(this).addClass('active');

                        updateTechnicalAnalysis(id);
                    }

                });
            }

            //

            chartEnabledClickHandlers.chartNavigationTA = true;
        }
    }

    if (useIRChartTA) {
        if (!chartEnabledClickHandlers.chartNavigationTA) {

            debugStep("useIRChartTA = true");

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

    if (useIRChartTSR) {
        if (!chartEnabledClickHandlers.chartNavigationView) {

            debugStep("attachClickHandlers - useIRChartView");

            if (typeof ($('.IRChartNavigation .IRChartNavigationWide .IRChartViewElement')) == 'object') {

                $('.IRChartNavigation .IRChartNavigationWide .IRChartViewElement').click(function () {
                    debugStep("clicked IRChartViewElement");

                    if ($(this).attr('id') == 'IRChartNavigationClearView') {

                    } else {

                        //JRJR
                        var id = $(this).attr('id');

                        $('.IRChartNavigation .IRChartNavigationWide .IRChartViewElement').removeClass('active');
                        $(this).addClass('active');

                        updateTSR(id);

                        //updateTechnicalAnalysis(id);
                    }

                });
            }

            chartEnabledClickHandlers.chartNavigationView = true;
        }
        IRChartNavigationShowHide('IRChartViewBody');
    } // JRJR


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

            $('input, textarea').placeholder();
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
    }
}

var IRChartStates = new function () {
    this.narrow = 0;
    this.wide = 1;
}
var IRChartNavigation = new function () {
    this.IRChartUpdate = false;
    this.IRChartState = IRChartStates.narrow;
    this.IRChartWidthModule = -1;
    this.IRChartWidthCompanyName = -1;
    this.IRChartWidthPadding = 30;
    this.InitIRChartWidthWideNavigation = -1;
    this.InitIRChartWidthNarrowNavigation = -1;
    this.initNavigation = initIRChartNavigation;
    this.updateNavigation = updateIRChartNavigationDom;
    this.initIntervalUpdate = initIRChartNavigationIntervalUpdate;
    this.setClickHandler = setClickHandlerIRChartNavigation;
};
var IRChartTSR = new function () {
    this.firstDividendDate = null;
    this.lastDividendDate = null;
    this.dividendDatesInChart = [];
    this.dividendDatesAll = [];
    this.dividendValuesAll = [];
    this.stockDataTSRClone = [];
    this.rawDividendData = [];
}

function initIRChartNavigation() {
    debugStep("initIRChartNavigation()");
    IRChartNavigation.IRChartWidthModule = getIRChartNavigationElementWidth('.IRChartModule');
    IRChartNavigation.IRChartWidthCompanyName = getIRChartNavigationElementWidth('.IRChartCompanyName');
    $('.IRChartNavigationWide').css('display', 'block');
    var IRChartWidthWideNavigation = -1;
    $('.IRChartNavigationWide .IRChartNavigationWideOuter').each(function () {
        IRChartWidthWideNavigation += Number($(this).width());
    });
    IRChartNavigation.InitIRChartWidthWideNavigation = IRChartWidthWideNavigation;
    $('.IRChartNavigationWide').css('display', 'none');
    $('.IRChartNavigationNarrow').css('display', 'block');
    IRChartNavigation.InitIRChartWidthNarrowNavigation = $('.IRChartNavigationNarrow').width();
    $('.IRChartNavigationWide').css('display', 'block');
    IRChartNavigation.updateNavigation();
    IRChartNavigation.setClickHandler();
    IRChartNavigation.initIntervalUpdate();
}
function updateIRChartNavigationDom() {
    debugStep("updateIRChartNavigationDom()");
    var IRChartWideThresshold = IRChartNavigation.IRChartWidthCompanyName + IRChartNavigation.InitIRChartWidthWideNavigation + IRChartNavigation.IRChartWidthPadding;
    if (IRChartWideThresshold >= IRChartNavigation.IRChartWidthModule) {
        IRChartNavigation.IRChartState = IRChartStates.narrow;
        $('.IRChartNavigationNarrow').css('display', 'block');
        $('.IRChartNavigationWide').css('display', 'none');
    } else {
        IRChartNavigation.IRChartState = IRChartStates.wide;
        $('.IRChartNavigationWide').css('display', 'block');
        $('.IRChartNavigationNarrow').css('display', 'none');
    }
}
function getIRChartNavigationElementWidth(el) {
    if ($(el).css('display') != 'none') {
        return Number($(el).width());
    } else {
        return -1;
    }
}
function initIRChartNavigationIntervalUpdate() {
    setInterval(function () {
        intervalUpdateIRChartNavigation();
    }, 500);
}
function setClickHandlerIRChartNavigation() {
    debugStep("setClickHandlerIRChartNavigation()");
    $('.IRChartNavigationNarrow .navTrigger').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.IRChartNavigationNarrowMenu').css('display', 'none');
        } else {
            $(this).addClass('active');
            $('.IRChartNavigationNarrowMenu').css('display', 'block');
        }
    });

    $('.IRChartNavigationWide .navTrigger').on('click', function () {
        var active = "#" + $(this).attr('id');
        var target = "";
        switch (active) {
            case "#navTriggerComparison":
                target = ".navComparison";
                break;
            case "#navTriggerTA":
                target = ".navTA";
                break;
            case "#navTriggerView":
                target = ".navView";
                break;
        }
        if ($(active).hasClass('active')) {
            $(active).remove('active');

            $('.navTrigger').removeClass('active');
            $('.IRChartNavigationWideInner').css('display', 'none');
        } else {
            $('.navTrigger').removeClass('active');
            $('.IRChartNavigationWideInner').css('display', 'none');

            $(active).addClass('active');
            $(target).slideDown().css('display', 'block');
        }



    });

    $('.IRChartNavigationNarrowMenu li.has-sub>span').on('click', function () {
        var thisEl = $(this);

        thisEl.removeAttr('href');
        var element = thisEl.parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });
}
function intervalUpdateIRChartNavigation() {
    //debugStep("intervalUpdateIRChartNavigation()");
    if (IRChartNavigation.IRChartWidthModule != getIRChartNavigationElementWidth('.IRChartModule')) {
        IRChartNavigation.IRChartWidthModule = getIRChartNavigationElementWidth('.IRChartModule');
        IRChartNavigation.IRChartWidthCompanyName = getIRChartNavigationElementWidth('.IRChartCompanyName');
        IRChartNavigation.InitIRChartWidthNarrowNavigation = getIRChartNavigationElementWidth('.IRChartNavigationNarrow');
        $('.IRChartNavigationWide').css('display', 'none');
        $('.IRChartNavigationNarrow').css('display', 'none');
        IRChartNavigation.IRChartUpdate = true;
    }
    else {
        if (IRChartNavigation.IRChartUpdate) {
            IRChartNavigation.updateNavigation();
            IRChartNavigation.IRChartUpdate = false;
        }
    }
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
function updateTooltipDOHLCV(date) {
    var dateIndex;
    var value = "-";
    var tooltipStr = "";
    var tooltipStrSub = "";
    if (globalChartUseCustomTooltipContent) {
        //tooltipStr = "<div class=\"tooltipHTML\" style=\"top: " + clientStyle.chart_CustomTooltipTopPX + "px;\">";
        tooltipStr = "<div class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode htmlReadingDirection" + globalHTMLReadingDirection + "\" dir=\"" + globalHTMLReadingDirection + "\" style=\"top: " + clientStyle.chart_CustomTooltipTopPX + "px;\">";
    } else {
        tooltipStr = "<div class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode htmlReadingDirection" + globalHTMLReadingDirection + "\" dir=\"" + globalHTMLReadingDirection.toLowerCase() + "\">";
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
        case chartDisplayModes.tsr:
            try {
                dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStrSub += getTooltipStrSubTSR(dateIndex);
            }
            catch (err) {
                tooltipStrSub = "";
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStrSub += getTooltipStrSubTSR(dateIndex);
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
    return tooltipStr;
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
function getTooltipStrSubHistorical(dateIndex) {
    var tooltipStr = "";
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideDate) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipDate\">" + formatTooltipDate(dateIndex, globalChartListingStockDataDates) + "</div>"; //tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideOpen) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipOpen\"><span class=\"subHeader\">O:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideHigh) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipHigh\"><span class=\"subHeader\">H:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideLow) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipLow\"><span class=\"subHeader\">L:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideClose) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">C:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideVolume) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">V:</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
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
        tooltipStr += "<div class=\"IRChartTooltipOpen\"><span class=\"subHeader\">O:</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideHigh) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipHigh\"><span class=\"subHeader\">H:</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideLow) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipLow\"><span class=\"subHeader\">L:</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideClose) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">C:</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideVolume) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">V:</span><span class=\"subContent\">" + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
    }
    return tooltipStr;
}
function getTooltipStrSubTSR(dateIndex) {
    var tooltipStr = "";
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideDate) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipDate\">" + formatTooltipDate(dateIndex, globalChartListingStockDataDates) + "</div>"; //tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideClose) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">C:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideClose) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">TSR:</span><span class=\"subContent\" style=\"padding-left: 10px;\">" + formatDecimal(IRChartTSR.stockDataTSRClone[dateIndex][1]) + "</div>";
    }
    //

    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideVolume) { }
    else {
        tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">V:</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
    }
    return tooltipStr;
}
function formatTooltipDate(dateIndex, data) {
    var date = "";
    switch (clientStyle.formatDate) {
        case "DD MMM YYYY":
            date = new moment(globalChartListingStockDataDates[globalActiveListingIndex][dateIndex]);
            return formatDateWithReplacedDate(date);
            break;
        case "DD-MMM-YYYY":
            date = new moment(globalChartListingStockDataDates[globalActiveListingIndex][dateIndex]);
            return formatDateWithReplacedDate(date).replace(' ', '-');
            break;
        case "DD/MM/YYYY":
        case "DD MM YYYY":
        case "DD-MM-YYYY":
        case "YYYY-MM-DD":
        case "YYYY MM DD":
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
    if (globalChartActiveDisplayMode == chartDisplayModes.historical) {
        var dateRet = date.format(clientStyle.formatDate).toLowerCase();
        switch (date.format("MMM").toLowerCase()) {
            case "jan":
                dateRet = dateRet.replace("jan", translations.t_jan_short.capitalizeFirstLetter());
                break;
            case "feb":
                dateRet = dateRet.replace("feb", translations.t_feb_short.capitalizeFirstLetter());
                break;
            case "mar":
                dateRet = dateRet.replace("mar", translations.t_mar_short.capitalizeFirstLetter());
                break;
            case "apr":
                dateRet = dateRet.replace("apr", translations.t_apr_short.capitalizeFirstLetter());
                break;
            case "may":
                dateRet = dateRet.replace("may", translations.t_may_short.capitalizeFirstLetter());
                break;
            case "jun":
                dateRet = dateRet.replace("jun", translations.t_jun_short.capitalizeFirstLetter());
                break;
            case "jul":
                dateRet = dateRet.replace("jul", translations.t_jul_short.capitalizeFirstLetter());
                break;
            case "aug":
                dateRet = dateRet.replace("aug", translations.t_aug_short.capitalizeFirstLetter());
                break;
            case "sep":
                dateRet = dateRet.replace("sep", translations.t_sep_short.capitalizeFirstLetter());
                break;
            case "oct":
                dateRet = dateRet.replace("oct", translations.t_oct_short.capitalizeFirstLetter());
                break;
            case "nov":
                dateRet = dateRet.replace("nov", translations.t_nov_short.capitalizeFirstLetter());
                break;
            case "dec":
                dateRet = dateRet.replace("dec", translations.t_dec_short.capitalizeFirstLetter());
                break;
        }
    } else if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
        var dateRet = date.format(clientStyle.formatDateTime).toLowerCase();
    }
    else {
        var dateRet = date.format(clientStyle.formatDateTime).toLowerCase();
        //dateRet = dateRet.replace("dec", translations.t_dec_short.capitalizeFirstLetter());
    }
    return dateRet;
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
                    $(self).parent().find('.navTrigger').removeClass('active');
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
function updateTooltipComparisonDC(date) {
    var dateIndex;
    var amountOfComparisonsInChart = 0;
    for (var i = 0; i < globalChartComparisonInChart.length; i++) {
        amountOfComparisonsInChart += globalChartComparisonInChart[i];
    }
    var value = "-";
    var tooltipStr = "<div class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode\" style=\"top: " + getAmountOfPxFromTop(amountOfComparisonsInChart) + "px\">";

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
function getUnixFromDate(date) {
    return new moment(date).valueOf();
}
function getActiveTAShort() {
    return globalActiveTAShort;
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
//
//  Technical Analysis
//
function getAnalysisDrawModes(TAShort) {
    switch (TAShort) {
        case "SMA":
            return 'single';
            break;
        case "EMA":
            return 'single';
            break;
        default:
            return 'dual';
    }
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
                //tooltipStr += "<div><span class=\"subHeader\">O:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
                //tooltipStr += "<div><span class=\"subHeader\">H:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                //tooltipStr += "<div><span class=\"subHeader\">L:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">C:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">V:</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                //tooltipStr += "<div>O: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</div>";
                //tooltipStr += "<div>H: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                //tooltipStr += "<div>L: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div>C: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
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
                tooltipStr += "<div><span class=\"subHeader\">O:</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
                tooltipStr += "<div><span class=\"subHeader\">H:</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">L:</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">C:</span><span class=\"subContent\">" + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";

                tooltipStr += "<div><span class=\"subHeader\">V:</span><span class=\"subContent\">" + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {

                dateIndex = getClosestDateIndexForListingIntraday(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div>O: " + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</div>";
                tooltipStr += "<div>H: " + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                tooltipStr += "<div>L: " + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div>C: " + formatDecimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";

                tooltipStr += "<div>V: " + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            break;
        case chartDisplayModes.ta:
            try {
                dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                //tooltipStr += "<div><span class=\"subHeader\">O:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
                //tooltipStr += "<div><span class=\"subHeader\">H:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                //tooltipStr += "<div><span class=\"subHeader\">L:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">C:</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">V:</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                //tooltipStr += "<div>O: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</div>";
                //tooltipStr += "<div>H: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                //tooltipStr += "<div>L: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div>C: " + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
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
function resetIRChartNavigation() {
    debugStep("resetIRChartNavigation");
    $('.IRChartComparisonPlaceholder div').css('display', 'none');
    $('.IRChartNavigation .IRChartComparison .IRChartComparisonBodyList .basicButtonLook').removeClass('active');
    $('.IRChartNavigation .IRChartNavigationNarrowMenu .IRChartCompareElement').removeClass('active');
    $('.IRChartNavigation .IRChartNavigationWide .IRChartCompareElement').removeClass('active');
    $('.IRChartNavigation .IRChartNavigationWide .IRChartTAElement').removeClass('active');
    $('.IRChartNavigation .IRChartNavigationWide .IRChartViewElement').removeClass('active');
    globalChartComparisonsInChart = 0;
    if (useIRChartTA) {
        $('.IRChartTAPlaceholder').html('');
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
            loadDividendBundle(clientStyle.amountOfHistoricalYears, 10);
            applyTSR("Simple");
            break;
    }

}
function applyTSR(TSRMode) {

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

    var colourIndex = 9;
    var TSRDataRaw = dataTSR.dividend[globalActiveListingIndex].data;
    var CPDataForTSR = globalChartListingStockData[globalActiveListingIndex];

    IRChartTSR.rawDividendData = TSRDataRaw;

    //TSRDataRaw.reverse();

    var TSRDataPaymentDates = [];
    var TSRDataDividends = [];

    $.each(TSRDataRaw, function (index, data) {

        var stockDataDateOnly = new moment(data.paymentDate).format("YYYY-MM-DD");
        var dateUnix = new moment(stockDataDateOnly + 'T00:00:00.0000000Z').valueOf();

        TSRDataPaymentDates.push(dateUnix);
        TSRDataDividends.push(data.dividendValue);
    });

    redrawIRChartHTMLHistorical();
    globalChartActiveDisplayMode = chartDisplayModes.tsr;

    IRChartTSR.dividendDatesAll = TSRDataPaymentDates;
    IRChartTSR.dividendValuesAll = TSRDataDividends;

    var TSRArrayForChart = [];
    var TSRArrayForChartTooltip = [];
    var TSRArrayForChartClose = [];
    var iterations = 0;
    var dividendTotal = 0;
    var dividendIndex = 0;


    $.each(CPDataForTSR, function (index, cpData) {

        if (TSRDataPaymentDates[dividendIndex] == cpData[0]) {
            dividendTotal = dividendTotal + TSRDataDividends[dividendIndex];
            dividendIndex++;
        }



        var price = cpData[1] + dividendTotal;
        TSRArrayForChart.push([cpData[0], price]);
        TSRArrayForChartClose.push([cpData[0], 242]);
        TSRArrayForChartTooltip.push([cpData[0], cpData[4] + dividendTotal]);
        stockDataTSRDates.push(cpData[0]);

        iterations++;
    });



    //TSRArrayForChart[TSRArrayForChart.length - 1] = globalRawStockData[globalActiveListingIndex].last + dividendTotal;

    stockDataTSR = TSRArrayForChart;
    stockDataTSRForTooltip = TSRArrayForChartTooltip;
    IRChartTSR.stockDataTSRClone = TSRArrayForChartClose;


    // JRJR

    //index: 1,
    //data: globalChartListingStockData[globalActiveListingIndex],
    //color: clientStyle.chart_ColourMain,
    //yAxis: 0,
    //visible: true,
    //linkedTo: 0,
    //type: clientStyle.chart_DrawMode

    globalChartDom.addSeries({
        id: 42,
        index: 2,
        data: TSRArrayForChart,
        color: globalChartColours[colourIndex],
        yAxis: 0,
        name: 'TSR',
        visible: true,
        linkedTo: 0,
        type: 'line'
    }, false, 0);

    globalChartDom.redraw();
}
function IRChartEventTSRUpdateSetData(thisEvent) {
    //debugStep("IRChartEventTSRUpdateSetData");

    var fromDate = new moment(Highcharts.dateFormat('%Y-%m-%d', thisEvent.xAxis[0].getExtremes().userMin));
    var toDate = new moment(Highcharts.dateFormat('%Y-%m-%d', thisEvent.xAxis[0].getExtremes().userMax));

    if (globalChartActiveDisplayMode == chartDisplayModes.tsr) {
        recalculateStockDataTSRClone(fromDate, toDate);
    }

    // JRJR

}
function recalculateStockDataTSRClone(fromDate, toDate) {
    // JRJR TSR
    debugStep("recalculateStockDataTSRClone");

    var dividendIndex = 0;
    var dividendTotal = 0;
    var TSRArrayForChartClose = [];
    var TSRArrayForChartTooltip = [];


    //IRChartTSR.dividendDatesAll = TSRDataPaymentDates;
    //IRChartTSR.dividendValuesAll = TSRDataDividends;


    $.each(globalChartListingStockData[globalActiveListingIndex], function (index, cpData) {

        if (IRChartTSR.dividendDatesAll[dividendIndex] == cpData[0]) {
            dividendTotal = dividendTotal + IRChartTSR.dividendDatesAll[dividendIndex];
            dividendIndex++;
        }

        var price = cpData[1] + dividendTotal;
        TSRArrayForChartClose.push([cpData[0], price]);
        TSRArrayForChartTooltip.push([cpData[0], cpData[4] + dividendTotal]);
        //stockDataTSRDates.push(cpData[0]);


    });

    //stockDataTSR = TSRArrayForChart;
    stockDataTSRForTooltip = TSRArrayForChartTooltip;

    IRChartTSR.stockDataTSRClone = TSRArrayForChartClose;


    // JRJR
    globalChartDom.series[2].setData(TSRArrayForChartClose);


    //var updateData = false;
    //if (IRChartTSR.firstDividendDate.format("YYYY-MM-DD") != fromDate.format("YYYY-MM-DD")) {
    //    IRChartTSR.firstDividendDate = fromDate;
    //    updateData = true;
    //}
    //if (IRChartTSR.lastDividendDate.format("YYYY-MM-DD") != toDate.format("YYYY-MM-DD")) {
    //    IRChartTSR.lastDividendDate = toDate;
    //    updateData = true;
    //}




    //IRChartTSR.firstDividendDate = new moment(Highcharts.dateFormat('%Y-%m-%d', thisEvent.xAxis[0].getExtremes().userMin));
    //IRChartTSR.lastDividendDate = new moment(Highcharts.dateFormat('%Y-%m-%d', thisEvent.xAxis[0].getExtremes().userMax));






    //var debugArrayBeforeAfter = [];
    //debugArrayBeforeAfter.push(IRChartTSR.stockDataTSRClone);

    /*
    
        Input
        Extremes: From
        Extremes: To

        Action
        
        Update stockDataTSRClone with new set of dividend data.
        getChartDOM().series[2].setData(IRChartTSR.stockDataTSRClone);
    */


    //var IRChartTSR = new function () {
    //    this.firstDividend = null;
    //    this.lastDividend = null;
    //    this.stockDataTSRClone = [];
    //}

    //IRChartTSR.rawDividendData;

    //var TSRDataPaymentDates = [];
    //var TSRDataDividends = [];

    //$.each(IRChartTSR.rawDividendData, function (index, data) {

    //    var stockDataDateOnly = new moment(data.paymentDate).format("YYYY-MM-DD");
    //    var dateUnix = new moment(stockDataDateOnly + 'T00:00:00.0000000Z').valueOf();

    //    TSRDataPaymentDates.push(dateUnix);
    //    TSRDataDividends.push(data.dividendValue);
    //});

    //$.each(globalChartListingStockData[globalActiveListingIndex], function (index, cpData) {

    //    if (TSRDataPaymentDates[dividendIndex] == cpData[0]) {
    //        dividendTotal = dividendTotal + TSRDataDividends[dividendIndex];
    //        dividendIndex++;
    //    }

    //    var price = cpData[1] + dividendTotal;
    //    TSRArrayForChart.push([cpData[0], price]);
    //    TSRArrayForChartClose.push([cpData[0], 242]);
    //    TSRArrayForChartTooltip.push([cpData[0], cpData[4] + dividendTotal]);
    //    stockDataTSRDates.push(cpData[0]);

    //    iterations++;
    //});



    //debugArrayBeforeAfter.push(IRChartTSR.stockDataTSRClone);





    //var colourIndex = 9;
    //var TSRDataRaw = dataTSR.dividend[globalActiveListingIndex].data;
    //var CPDataForTSR = globalChartListingStockData[globalActiveListingIndex];

    ////TSRDataRaw.reverse();

    //var TSRDataPaymentDates = [];
    //var TSRDataDividends = [];

    //$.each(TSRDataRaw, function (index, data) {

    //    var stockDataDateOnly = new moment(data.paymentDate).format("YYYY-MM-DD");
    //    var dateUnix = new moment(stockDataDateOnly + 'T00:00:00.0000000Z').valueOf();

    //    TSRDataPaymentDates.push(dateUnix);
    //    TSRDataDividends.push(data.dividendValue);
    //});

    //redrawIRChartHTMLHistorical();
    //globalChartActiveDisplayMode = chartDisplayModes.tsr;

    //var TSRArrayForChart = [];
    //var TSRArrayForChartTooltip = [];
    //var TSRArrayForChartClose = [];
    //var iterations = 0;
    //var dividendTotal = 0;
    //var dividendIndex = 0;



    //$.each(CPDataForTSR, function (index, cpData) {

    //    if (TSRDataPaymentDates[dividendIndex] == cpData[0]) {
    //        dividendTotal = dividendTotal + TSRDataDividends[dividendIndex];
    //        dividendIndex++;
    //    }



    //    var price = cpData[1] + dividendTotal;
    //    TSRArrayForChart.push([cpData[0], price]);
    //    TSRArrayForChartClose.push([cpData[0], 242]);
    //    TSRArrayForChartTooltip.push([cpData[0], cpData[4] + dividendTotal]);
    //    stockDataTSRDates.push(cpData[0]);



    //    iterations++;
    //});



    ////TSRArrayForChart[TSRArrayForChart.length - 1] = globalRawStockData[globalActiveListingIndex].last + dividendTotal;







    //stockDataTSR = TSRArrayForChart;
    //stockDataTSRForTooltip = TSRArrayForChartTooltip;
    //stockDataTSRClone = TSRArrayForChartClose;



    //// JRJR

    ////index: 1,
    ////data: globalChartListingStockData[globalActiveListingIndex],
    ////color: clientStyle.chart_ColourMain,
    ////yAxis: 0,
    ////visible: true,
    ////linkedTo: 0,
    ////type: clientStyle.chart_DrawMode

    //globalChartDom.addSeries({
    //    id: 43,
    //    index: 2,
    //    data: TSRArrayForChart,
    //    color: globalChartColours[colourIndex],
    //    yAxis: 0,
    //    name: 'TSR',
    //    visible: true,
    //    linkedTo: 0,
    //    type: 'line'
    //}, false, 0);

    //globalChartDom.redraw();
}
//
//  Debug
//
function isDev() {
    if (location.href.indexOf('localhost') > -1 || location.href.indexOf('http://devir.euroinvestor.com/') > -1) {
        return true;
    } else {
        return false;
    }
}
function debugStep(msg) {
    if (debug) {
        console.log('%c' + msg, 'color: #AAA');
        debugTime('');
    }
}
function debugError(msg) {
    if (debug) {
        console.log('%c' + msg + "", 'color: #FF0000');
    }
}
function debugTime(msg) {
    if (debug) {
        console.log('%c' + "[" + (Date.now() - t0) + "][" + (Date.now() - t1) + "] ms" + "", 'color: #EEEEEE');
        t1 = Date.now();
    }
}