//
//Modules variables
//

//Todo try combine all same type of functions into obj methods
var ModulesList = {
    IRQuoteModule: {  // Todo merge Quote modules into one
        name: 'IRQuoteModule',
        view: '.IRQuoteModule',
        template: '#IRQuoteTableTemplate',
        dataUse: ['StockData'],
        active: false
    },
    IRQuoteHorizontalModule: { // Todo merge Quote modules into one
        name: '',
        view: '.IRQuoteHorizontalModule',
        template: '#IRQuoteTableHorizontalTemplate',
        dataUse: ['StockData'],
        active: false
    },
    IRQuoteVerticalModule: { // Todo merge Quote modules into one
        name: '',
        view: '.IRQuoteVerticalModule',
        template: '#IRQuoteTableVerticalTemplate',
        dataUse: ['StockData'],
        active: false
    },
    IRProfileModule: {
        name: 'IRProfileModule',
        view: '.IRProfileModule',
        template: '#IRProfileModuleTemplate',
        dataUse: ['StockData', 'ClosePriceBundleListingData'],
        active: false
    },
    IRChartModule: {
        name: 'IRChartModule',
        view: '.IRChartModule',
        template: '#IRChartModuleTemplate',
        dataUse: ['StockData', 'ClosePriceBundleListingData', 'IntradayBundleListingData', 'ClosePriceBundleOtherData'],
        active: false
    },
    IRChartHTMLModule: {
        name: 'IRChartHTML',
        view: '.IRChartModule',
        template: '#IRChartModuleTemplate',
        dataUse: ['StockData', 'ClosePriceBundleListingData', 'IntradayBundleListingData', 'ClosePriceBundleOtherData'],
        active: false
    },
    IRMiniquoteModule: {
        name: 'IRMiniquoteModule',
        view: '.IRMiniquoteModule',
        template: '#IRMiniquoteModuleTemplate',
        dataUse: ['StockData'],
        active: false
    },
    IRMiniquoteChartModule: {
        name: 'IRMiniquoteChartModule',
        view: '.IRMiniquoteChartModule',
        template: '#IRMiniquoteChartModuleTemplate',
        dataUse: ['StockData', 'ClosePriceBundleListingData', 'IntradayBundleListingData'],
        active: false
    },
    IROrdersModule: {
        name: 'IROrdersModule',
        view: '.IROrdersModule',
        template: '#IROrdersModuleTemplate',
        dataUse: ['StockData', 'OrdersData'],
        active: false
    },
    IRTradesModule: {
        name: 'IRTradesModule',
        view: '.IRTradesModule',
        template: '#IRTradesModuleTemplate',
        dataUse: ['StockData', 'TradeData'],
        active: false
    },
    IRNewsModule: {
        name: 'IRNewsModule',
        view: '.IRNewsModule',
        template: '#IRNewsModuleTemplate',
        dataUse: ['StockData', 'NewsData'],
        active: false
    },
    IRNewsEntriesModule: {
        name: 'IRNewsEntriesModule',
        view: '.IRNewsEntriesModule',
        template: '#IRNewsEntriesModuleTemplate',
        dataUse: ['StockData'],
        active: false
    },
    IRNewsArticleModule: {
        view: '.IRArticleModule',
        template: '#IRNewsArticleModuleTemplate',
        dataUse: ['StockData', 'NewsArticleData'],
        active: false
    },
    IRNewsHeadlineModule: {
        name: 'IRNewsHeadlineModule',
        view: '.IRNewsHeadlineModule',
        template: '#IRNewsHeadlineModuleTemplate',
        dataUse: ['StockData', 'NewsHeadlineData'],
        active: false
    },
    IRLookupModule: {
        name: 'IRLookupModule',
        view: '.IRLookupModule',
        template: '#IRLookupModuleTemplate',
        listTemplate: '#IRLookupTableModuleTemplate',
        dataUse: ['StockData', 'ClosePriceBundleListingData'],
        active: false
    },
    IRCalcModule: {
        name: 'IRCalcModule',
        view: '.IRCalcModule',
        template: '#IRCalcModuleTemplate',
        dataUse: ['StockData', 'ClosePriceBundleListingData'],
        active: false
    },
    IREmailAlertModule: {
        name: 'IREmailAlertModule',
        view: '.IREmailAlertModule',
        template: '#IREmailAlertModuleTemplate',
        dataUse: ['StockData'],
        active: false
    },
    IRPerformanceModule: {
        name: 'IRPerformanceModule',
        view: '.IRPerformanceModule',
        template: '#IRPerformanceModuleTemplate',
        dataUse: [],
        active: false
    },
    IRBenchmarkModule: {
        name: 'IRBenchmarkModule',
        view: '.IRBenchmarkModule',
        template: '#IRBenchmarkModuleTemplate',
        dataUse: ['StockData', 'ClosePriceBundleListingData', 'ClosePriceBundleOtherData'],
        active: false
    }
};
var compiledTemplates = {
    menuTemplate_QuoteTable: null,
    menuTemplate_IRProfile: null,
    menuTemplate_IRChart: null,
    menuTemplate_IRChartHTML: null,
    menuTemplate_Miniquote: null,
    menuTemplate_MiniquoteChart: null,
    menuTemplate_OrdersTable: null,
    menuTemplate_TradesTable: null,
    menuTemplate_News: null,
    menuTemplate_NewsEntries: null,
    menuTemplate_NewsHeadline: null,
    toolTemplate_IRNewsArticle: null,
    menuTemplate_Lookup: null,
    menuTemplate_Calc: null,
    menuTemplate_EmailAlert: null,
    menuTemplate_Performance: null
};
//
//  Data
//
var DataList = {
    StockData: {use: false},
    ClosePriceBundleListingData: {use: false},
    IntradayBundleListingData: {use: false},
    ClosePriceBundleOtherData: {use: false},
    OrdersData: {use: false},
    TradeData: {use: false},
    NewsData: {use: false},
    NewsArticleData: {use: false},
    NewsHeadlineData: {use: false},
    DividendData: {use: false},
    StockDataRT: {use: false},
    FeatureStockOtherData: {use: false},
    PressReleaseIRChartHeadlineData: {use: false},
    PressReleaseData: {use: false}
};
var cityExchangeList = {
    OMXNordicEquities: {city: "NASDAQ", short: "NASDAQ OMX"},
    LondonStockExchange: {city: "London", short: "LSE"},
    IrishStockExchange: {city: "Dublin", short: "ISE"},
    EuronextStockExchange: {city: "Euronext", short: "Euronext"},
    OsloStockExchange: {city: "Oslo", short: "OSE"},
    Xetra: {city: "Xetra", short: "Xetra"},
    NewYorkStockExchange: {city: "New York", short: "NYSE"},
    Nasdaq: {city: "Nasdaq", short: "Nasdaq"},
    HongKongExchange: {city: "Hong Kong", short: "HKEx"},
    SingaporeStockExchange: {city: "Singapore", short: "SGX"},
    AustralianStockExchange: {city: "Sydney", short: "ASX"},
    TelAvivStockExchange: {city: "Tel Aviv", short: "TASE"},
    BuenosAiresStockExchange: {city: "Buenos Aires", short: "BCBA"},
    KuwaitStockExchange: {city: "Kuwait", short: "KSE"},
    NasdaqOTCForeign: {city: "Nasdaq", short: "Nasdaq"},
    JohannesburgStockExchange: {short: "JSE"},
    NewZealandStockExchange: {short: "NZX"},
    MilanCedBorsa: {short: "MIL"},
    ICAPSecuritiesandDerivativesExchange: {short: "ISDX"},
    CanadianVentureExchange: {short: "CDNX"}
};

var useStockData = false;
var useDividendData = false;
var useStockDataRT = false;
//
//  Features
//
var FeaturesList = { // Todo debug true/false from old core
    IRChartNews: {use: false, dataUse: ['StockData', 'NewsData']},
    IRChartTA: {use: false},
    IRChartTechnicalAnalysis: {use: false},
    IRChartCompare: {use: false},
    CurrencyConversion: {use: false},
    IRChartTSR: {use: false},
    IRChartCurrencyConversion: {use: false},
    IRCalcTSR: {use: false},
    IRChartOuterTechnicalAnalysis: {use: false},
    IRChartCustomPreventDefault: {use: false},
    IRChartPressReleaseIRChartHeadline: {use: false, dataUse: ['PressReleaseIRChartHeadlineData']},
    IRChartPressRelease: {use: false, dataUse: ['PressReleaseData']}
};

var useFeatureStockOtherData; //Todo combine these
var waitForAdditionalDataIRQuoteModule;

//
//  Triggers
//
var fetchNewsArticleData = false;
var chartEnabledClickHandlers = {
    chartNavigationComparison: false,
    chartNavigationComparisonBodyList: false,
    chartNavigationTA: false,
    chartNavigationTechnicalAnalysis: false,
    chartNavigationTSR: false,
    chartNavigationTAPlaceholderSpan: false,
    chartNavigationFullscreen: false,
    chartNavigationCurrencyConversionAdjustedPrice: false
};

//
//  Memory
//
var clientApiVersion;
var clientLCID;
var clientSolutionID;
var clientCustomerKeyRequired;
var clientAmountOfYears;
var clientAmountOfTrades;

var chartDisplayModes = {
    historical: 'historical',
    intraday: 'intraday',
    comparison: 'comparison',
    ta: 'ta',
    tsr: 'tsr',
    technicalAnalysis: 'technicalAnalysis'
};
// Global variables
var globalHTMLReadingDirection = "LRT";
var globalActiveLanguage = "en";
var delimiter = ';';
var globalActiveExchangeTimeZone = null;
var globalActiveLocalTimeZone = null;
var globalActiveLocalTimeZoneShort = null;
var translations = {
    // Will be populated
};
var clientLocaleParameters = {
    decimalSeparator: ',',
    decimalSeparator1000: '.'
};
var globalChartColours;
var globalChartFromDate = null;
var globalChartToDate = null;
var globalEarlyYear = null;
var globalEarlyMonth = null;
var globalEarlyDay = null;
var globalEarlyDate = null;
var globalChartListingIntradayLastKnownDay = -1;
var globalChartListingHistoricalLastKnownMomentDate = null;
var globalChartContainer = '.IRChartHTMLPlaceholder';
var globalChartDom = null; // This is where we save and overwrite the DOM of the chart.
var globalChartComparisonsInChart = 0;
var globalChartUseCustomTooltipContent = false;
var globalChartActiveDisplayMode = chartDisplayModes.historical;
var globalChartAnimationMS = 1;
var globalChartMinRange = 1209600000; //14 * 24 * 3600 * 1000;
var globalChartWidth = 0;
var globalActiveListingIndex = 0;
var globalActivePeriod = 'y1';
var globalActiveTAShort = null;
var globalAmountOfListings = 0;
var globalAmountOfIndices = 0;
var globalAmountOfPeers = 0;
var globalAmountOfNewsItems = 0;
var globalRawStockData;
var globalRawStockOtherData;
var globalRawCalcData;
var globalRawTSRData;
var globalRawCalcDividendData;
var globalRawClosePriceListing;
//Global Classes
var IrChartColour = '.IRChartColour';
var IrChartPlace = '.IRChartPlaceholder';
var IrChartMiniquotePlace = '.IRMiniquoteChartPlaceholder';
var IrChartLookupPlace = '.IRChartLookupPlaceholder';
var IrChartCalcPlace = '.IRChartCalcPlaceholder';
var IrChartHtmlMiniPlace = '.IRChartHTMLMiniPlaceholder';
var IrChartTapPlace = '.IRChartTAPlaceholder';
var IrChartTsrpPlace = '.IRChartTSRPlaceholder';
var IrChartComparisonPlace = '.IRChartTSRPlaceholder';

// Global Arrays
var globalChartListingStockData = [];
var globalChartListingStockDataVolume = [];
var globalChartListingStockDataDates = [];
var globalChartListingStockDataOHLCV = [];
var globalChartListingIntradayDataDates = [];
var globalChartListingIntradayData = [];
var globalChartListingIntradayDataVolume = [];
var globalChartListingIntradayDataOHLCV = [];
var globalListingsExchangeShort = [];
var globalChartNewsDates = [];
var globalChartNewsHeadlines = [];
var globalChartNewsHeadlinesFlags = [];
var globalChartComparisonData = [];
var globalChartComparisonNames = [];

var globalChartComparisonSymbols = [];
var globalChartComparisonInChart = [];

//
//  IRNews
//
var globalNewsPagesInTotal = -1;
var globalNewsEarlyYear = -1;
//
//  Objects
//
var LCID = {
    cs: {id: 1029},
    da: {id: 1030},
    de: {id: 1031},
    en: {id: 2057, separator: 'point'},
    enUS: {id: 1033},
    es: {id: 3082},
    fi: {id: 1035},
    fr: {id: 1036},
    nl: {id: 1043},
    no: {id: 2068},
    pl: {id: 1045},
    pt: {id: 2070},
    se: {id: 1053, separator: 'space'},
    zh_s: {id: 4, separator: 'point'},
    zh_t: {id: 31748, separator: 'point'},
    he: {id: 1037, separator: 'point', direction: 'RTL'},
    ar: {id: 3073, separator: 'point', direction: 'RTL', delimiter: '؛'},
    hu: {id: 1038},
    it: {id: 1040}
};
var translate = {};
//
//Default Client Style
//
var clientStyle = {
    chart_ColourMain: '#0284AA', // Deprecated
    chart_ColourPlotBackground: '#ffffff',
    chart_ColourBackground: '#F9F9F9',
    chart_ColourBorder: '#E9E9E9',
    chart_ColourVolumeBars: '#aaaaaa',
    chart_DrawMode: 'area',
    chart_DrawModeMiniquote: 'line',

    chart_CustomTooltipUseFullOHLCV: false,

    chart_CustomTooltipContent: '',
    chart_CustomTooltipTopPX: 0,
    chart_TooltipHideDate: true,
    chart_TooltipHideOpen: true,
    chart_TooltipHideHigh: true,
    chart_TooltipHideLow: true,
    chart_TooltipHideClose: true,
    chart_TooltipHideVolume: true,
    chart_TooltipHideNews: true,

    lookup_ChartYAxisInsideOutside: 'inside',
    calc_ChartYAxisInsideOutside: 'inside',
    miniquote_ChartYAxisInsideOutside: 'inside',

    amountOfDecimals: 2,
    amountOfTrades: 100,
    amountOfHistoricalYears: 10,
    amountOfNewsToLoad: 20000,

    amountOfNewsPerPage: 20,
    amountOfNewsHeadlines: 5,

    formatDate: 'YYYY-MM-DD',
    formatTime: 'HH:mm',
    formatDateTime: this.formatDate + ' ' + this.formatTime,

    news_lockListing: -1,
    news_lockLCID: -1,
    news_ignoreNewsStoriesWithHeadline: null,
    news_limitByFromYear: 0,
    selectIRChangeListingFormat: null,

    chart_DefaultPeriodSelected: 'y1',
    miniquoteChartDefaultPeriode: 'y1',
    lookup_excelTableStyle: {},
    lookup_excelPreHeader: "",

    flipDecimalAndThousandSeparators: false,

    manualTimeOffset: null,
    useRealtimeData: false
};

//
// Trigger custom code by checking when all modules load
//
var ModulesReady = {
    activeModules: [],
    activeCount: 0,
    triggerCustom: function () {
    },
    triggerCustomModule: {},
    callbackStart: function (mod) {
        if ($.inArray(mod, this.activeModules) != -1) {
            try {
                this.triggerCustomModule[mod]();
            } catch (err) {
            }
        }
        if (this.activeCount == 0) {
            this.triggerCustom();
        }
    },
    startModule: function (module) {
        this.activeModules.push(module);
        this.activeCount++;
    },
    endModule: function (module) {
        this.activeCount--;
        this.callbackStart(module);
        this.activeModules.splice($.inArray(module, this.activeModules), 1);
    }
};
var AjaxReady = {
    triggerCustom: function (callback) {
        $(document).ajaxStop(function () {
            callback();
            debugStep('Ajax Ready Callback');
        });
    }
};
//
// Trigger Start functions
//
initSolutionInfo();
initCheckActive();
updateLCID();
initData();
//
//  Init Functions
//
function initCheckActive() {
    // Check activeModules array
    if (typeof (activeModules) != "undefined") {
        checkActiveModules(activeModules);
    } else {
        debugError("activeModules is not present in tool header");
    }

    // Check activeFeatures array
    if (typeof (activeFeatures) != "undefined") {
        checkActiveFeatures(activeFeatures);
    }

    // Check activeDataRequests array
    if (typeof (activeDataRequests) != "undefined") {
        checkActiveDataRequests(activeDataRequests);
    }
}
function initSolutionInfo() {
    debugStep("initSolutionInfo()");

    clientApiVersion = 1; // TODO, dynamically get this.
    clientSolutionID = getSolutionID();
    clientCustomerKeyRequired = getClientName();

    clientAmountOfYears = 10; // Listen to overwrite from ir.client.js
    clientAmountOfTrades = 5; // Listen to overwrite from ir.client.js

    debugStep("clientSolutionID: " + clientSolutionID);
    debugStep("clientCustomerKeyRequired: " + clientCustomerKeyRequired);
}
function getSolutionID() {
    var solArr = window.location.pathname.split("/");
    solArr.reverse();
    return clientVariable.solutionId || solArr[1];
}
function getClientName() {
    var nameArr = window.location.pathname.split("/");
    nameArr.reverse();
    return clientVariable.clientName.toLowerCase() || nameArr[2].toLowerCase();
}
function getCustomerKeyRequired() {
    debugStep("getCustomerKeyRequired");
    var solutionName;
    var pathArr = window.location.pathname.split("/");
    pathArr.reverse();
    solutionName = getClientName();
    var lowerCaseArr = pathArr .map(function(value) {
        return value.toLowerCase();
    });
    if($.inArray('tools', lowerCaseArr) != -1 && lowerCaseArr[0] == 'newsarticlehtml.aspx'){ //lower cases to prevent from uppercase mistakes in files
        solutionName = getUriParam('customerkey');
    }
    return solutionName;
}
function initData() {
    RequestData.translationsData();
    if (typeof (clientStyleOverwrite) != "undefined") {
        if (typeof (clientStyleOverwrite.useRealtimeData) != "undefined") {
            clientStyle.useRealtimeData = clientStyleOverwrite.useRealtimeData;
        }
        if (clientStyleOverwrite.amountOfHistoricalYears >= 0) {
            clientStyle.amountOfHistoricalYears = clientStyleOverwrite.amountOfHistoricalYears;
        }

    }

    if (DataList.StockData.use) {
        RequestData.stockData();
    }
    if (DataList.FeatureStockOtherData.use) {
        RequestData.featureStockOtherData();
    }
    if (DataList.ClosePriceBundleListingData.use) {
        RequestData.closePriceBundleListingData();
    }
    if (DataList.IntradayBundleListingData.use) {
        RequestData.intradayBundleListingData();
    }
    if (DataList.ClosePriceBundleOtherData.use) {
        RequestData.closePriceBundleOtherData();
    }
    if (DataList.DividendData.use && DataList.StockData.use) {
        $.when(ResponseData.requestStockData)
            .done(function (stockData) {
                    globalRawStockData = stockData.data;
                    RequestData.dividendBundle(100, 10);
                }
            );
    }

}

function checkActiveDataRequests(activeDataRequestsArr) {
    debugStep("checkActiveDataRequests");
    for (var i = 0; i < activeDataRequestsArr.length; i++) {
        debugStep("Module [" + activeDataRequestsArr[i] + "] is activated");
        if (activeDataRequestsArr[i] in DataList) {
            DataList[activeDataRequestsArr[i]].use = true;
        } else {
            debugError("no match for the module '" + activeDataRequestsArr[i] + "' in activeDataRequests");
        }

    }

// Todo Remove bottom
    switch (activeDataRequestsArr[i]) {
        case "requestDividendBundle":
            useStockData = true;
            useDividendData = true;
            break;
    }
}
function checkActiveModules(activeModulesArr) {
    debugStep("checkActiveModules");
    //
    // Check activeModules array and enable data requests and module builders.
    //
    for (var i = 0; i < activeModulesArr.length; i++) {
        debugStatus("Module [" + activeModulesArr[i] + "] is activated");
        var active = activeModulesArr[i] + 'Module';
        if (active in ModulesList) {
            ModulesList[active].active = true;
            if ('dataUse' in ModulesList[active]) {
                checkActiveDataRequests(ModulesList[active].dataUse);
            }
            ModulesReady.startModule(ModulesList[active].name);
        } else {
            debugError("no match for the module '" + activeModulesArr[i] + "' in activeModules");
        }
    }

// Todo Remove bottom
//
//             case "IRQuoteRT":
//                 ModulesList.IRQuoteModule.active = true;
//                 useStockDataRT = true; //Todo solve this
//
//             case "IRChartRT":
//                 ModulesList.IRChartModule.active = true;
//                 useStockDataRT = true; //Todo solve this
}
function checkActiveFeatures(activeFeaturesArr) {
    debugStep("checkActiveFeatures");
    //
    // Check activeFeatures array and enable features for module builders.
    //
    for (var i = 0; i < activeFeaturesArr.length; i++) {
        debugStatus("Feature [" + activeFeaturesArr[i] + "] is activated");
        if (activeFeaturesArr[i] in FeaturesList) {
            FeaturesList[activeFeaturesArr[i]].use = true;
            if ('dataUse' in FeaturesList[activeFeaturesArr[i]]) {
                checkActiveDataRequests(FeaturesList[activeFeaturesArr[i]].dataUse);
            }
        } else {
            debugError("no match for the module '" + activeFeaturesArr[i] + "' in activeModules");
        }
    }

// Todo Remove bottom

    debugStatus("Feature [" + activeFeaturesArr[i] + "] is activated");
    switch (activeFeaturesArr[i]) {
        case "StockDataInstrumentTypeOther":
            useFeatureStockOtherData = true;
            waitForAdditionalDataIRQuoteModule = true;
            break;
    }
}

function updateLCID() {
    debugStep("updateLCID");
    updateGlobalLanguage();
    var languageString = globalActiveLanguage.replace('-', '_');
    if (languageString in LCID) {
        clientLCID = LCID[languageString].id;
        if ('separator' in LCID[languageString]) {
            changeGlobalDecimalSeparator(LCID[languageString].separator);
        }
        if ('direction' in LCID[languageString]) {
            globalHTMLReadingDirection = LCID[languageString].direction;
        }
        // Todo make it global
        if (globalActiveLanguage == 'ar') {

        }
        if ('delimiter' in LCID[languageString]) {
            delimiter = LCID[languageString].delimiter;
        }
    }
}

//decimal separators
function changeGlobalDecimalSeparator(decimalCommaOrPoint) {
    switch (decimalCommaOrPoint) {
        case 'point':
            clientLocaleParameters.decimalSeparator = '.';
            clientLocaleParameters.decimalSeparator1000 = ',';
            break;
        case 'space':
            clientLocaleParameters.decimalSeparator = ',';
            clientLocaleParameters.decimalSeparator1000 = ' ';
            break;
        default:
            clientLocaleParameters.decimalSeparator = ',';
            clientLocaleParameters.decimalSeparator1000 = '.';
            break;
    }
}
//
// Service Engine URL
//
function getServiceEngingeURL() {
    return getProtocol() + '//' + getHost() + '/ServiceEngine/api/json/reply/';
}
function getProtocol() {
    var protocol = location.protocol;
    if (protocol != 'http:' || protocol != 'https:') {
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
    }
    return location.host;
}

//
// Paths
//
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
function getLogoPath() {
    debugStep("getLogoPath");
    var logoPath = "";
    if (IRToolsNewsArticleHTMLModule) {

        logoPath = "http://ir.euroinvestor.com/Solutions/";

        var fetchedCustomerKey = "";
        var keyParam = getUriParam("customerkey");
        if (keyParam) {
            fetchedCustomerKey = keyParam;
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
function getPathToSolution() {
    return getHost() + '/solutions/' + getCustomerKeyRequired() + '/' + getSolutionID() + '/';
}
//
// Client Style Overwrite
//
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

    if (typeof ($(IrChartColour).css('color')) != "undefined") {
        var rgbIRChartColour = $(IrChartColour).css('color').match(/\d+/g);
        clientStyle.chart_ColourMain = '#' + String('0' + Number(rgbIRChartColour[0]).toString(16)).slice(-2) + String('0' + Number(rgbIRChartColour[1]).toString(16)).slice(-2) + String('0' + Number(rgbIRChartColour[2]).toString(16)).slice(-2);
    }

    globalChartColours = [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'];

    if (typeof (clientStyleOverwrite) != "undefined") {
        if (typeof (clientStyleOverwrite.chart_Colours) != "undefined") {
            globalChartColours = clientStyleOverwrite.chart_Colours;
            globalChartColours[0] = clientStyle.chart_ColourMain;
        }
    }

}

//
// Global variables init
//
function setReadingDirection() {
    var htmlSelector = 'html';
    if (typeof ($(htmlSelector).attr('dir')) == "string") {
        $(htmlSelector).attr('dir', globalHTMLReadingDirection.toLowerCase());
    }
    $('body').addClass('readingDirection' + globalHTMLReadingDirection);
}
function updateGlobalLanguage() {
    debugStep("updateGlobalLanguage");
    var langParam = getUriParam("language");
    if (langParam) {
        globalActiveLanguage = langParam;
    }
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
function requestListingFromURL() {
    debugStep("requestListingFromURL");
    var listingParam = getUriParam('listing');
    if (listingParam) {
        globalActiveListingIndex = listingParam;
    }
}
function getExchangeCity(exchange) {
    var exchangeCity = "";
    var exchangeParam = exchange.replace(/\s/g, '');
    if (exchangeParam in cityExchangeList) {
        exchangeCity = cityExchangeList[exchangeParam].city;
    } else {
        debugError("getExchangeCity() is missing [" + exchange + "].");
    }
    return exchangeCity;
}
function setExchangeShort(exchange) {
    var exchangeShort = "";
    var exchangeParam = exchange.replace(/\s/g, '');
    if (exchangeParam in cityExchangeList) {
        exchangeCity = cityExchangeList[exchangeParam].short;
    } else {
        debugError("getExchangeShort() is missing [" + exchange + "].");
    }
    globalListingsExchangeShort[globalActiveListingIndex] = exchangeShort;
}
function getStoryID() {
    debugStep("getStoryID");
    var fetchedStoryID = -1;
    var storyIdParam = getUriParam('storyid');
    if (storyIdParam) {
        fetchedStoryID = storyIdParam;
    }
    return fetchedStoryID;
}
function getChartDOM() {
    return $(globalChartContainer).highcharts();
}

function getChartDateTimeLabelFormats() {
    var dateTimeLabelFormats = {
        second: '%H:%M:%S',
        minute: '%H:%M',
        hour: '%H:%M',
        day: '%Y-%m-%d',
        week: '%Y-%m-%d',
        month: '%Y-%m',
        year: '%Y'
    };
    var dAw;
    clientStyle.formatDate.replace('DD', '%d');
    clientStyle.formatDate.replace('YYYY', '%Y');
    if (clientStyle.formatDate.indexOf("MMMM") != -1) {
        dAw = clientStyle.formatDate.replace('MMMM', '%B');
    } else if (clientStyle.formatDate.indexOf("MMM") != -1) {
        dAw = clientStyle.formatDate.replace('MMM', '%b');
    } else {
        dAw = clientStyle.formatDate.replace('MM', '%m');
    }
    dateTimeLabelFormats.day = dAw;
    dateTimeLabelFormats.week = dAw;
    var dd = clientStyle.formatDate.indexOf('%d');
    if (dd != 0) {
        dateTimeLabelFormats.month = clientStyle.formatDate.replace(clientStyle.formatDate.slice(dd - 1, dd + 2), '');
    } else {
        dateTimeLabelFormats.month = clientStyle.formatDate.replace(clientStyle.formatDate.slice(dd, dd + 3), '');
    }

    return dateTimeLabelFormats;
}
function getChartDateTimeLabelFormatsLookupCalc() {
    var dateTimeLabelFormats = {
        second: '%Y-%m-%d',
        minute: '%Y-%m-%d',
        hour: '%Y-%m-%d',
        day: '%Y-%m-%d',
        week: '%Y-%m-%d',
        month: '%Y-%m-%d',
        year: '%Y-%m-%d'
    };
    var dAw;
    clientStyle.formatDate.replace('DD', '%d');
    clientStyle.formatDate.replace('YYYY', '%Y');
    if (clientStyle.formatDate.indexOf("MMMM") != -1) {
        dAw = clientStyle.formatDate.replace('MMMM', '%B');
    } else if (clientStyle.formatDate.indexOf("MMM") != -1) {
        dAw = clientStyle.formatDate.replace('MMM', '%b');
    } else {
        dAw = clientStyle.formatDate.replace('MM', '%m');
    }
    dateTimeLabelFormats.second = dAw;
    dateTimeLabelFormats.minute = dAw;
    dateTimeLabelFormats.hour = dAw;
    dateTimeLabelFormats.day = dAw;
    dateTimeLabelFormats.week = dAw;
    dateTimeLabelFormats.month = dAw;
    dateTimeLabelFormats.year = dAw;

    return dateTimeLabelFormats;
}
function getChartDateTimeLabelFormatsIRMiniquoteChart() {
    var dateTimeLabelFormats = {
        second: '%H:%M',
        minute: '%H:%M',
        hour: '%H:%M',
        day: '%H:%M',
        week: '%H:%M',
        month: '%H:%M',
        year: '%H:%M'
    };
    if (globalChartActiveDisplayMode != chartDisplayModes.intraday) {
        var dAw;
        clientStyle.formatDate.replace('DD', '%d');
        clientStyle.formatDate.replace('YYYY', '%Y');
        if (clientStyle.formatDate.indexOf("MMMM") != -1) {
            dAw = clientStyle.formatDate.replace('MMMM', '%B');
        } else if (clientStyle.formatDate.indexOf("MMM") != -1) {
            dAw = clientStyle.formatDate.replace('MMM', '%b');
        } else {
            dAw = clientStyle.formatDate.replace('MM', '%m');
        }
        dateTimeLabelFormats.second = dAw;
        dateTimeLabelFormats.minute = dAw;
        dateTimeLabelFormats.hour = dAw;
        dateTimeLabelFormats.day = dAw;
        dateTimeLabelFormats.week = dAw;
        dateTimeLabelFormats.month = dAw;
        dateTimeLabelFormats.year = dAw;
    }
    return dateTimeLabelFormats;
}
function getUnixFromDate(date) {
    return new moment(date).valueOf();
}
function getProfilePerformanceDataForPeriod(period, useOpenHighLowOrClose, closePriceData, stockData, typeOfData) {
    var subIterations = 0;
    var unixDate;
    if (period === "m1") {
        unixDate = new moment(new moment().add(-30, 'days').format("YYYY-MM-DD")).valueOf();
    } else if (period === "m3") {
        unixDate = new moment(new moment().add(-90, 'days').format("YYYY-MM-DD")).valueOf();
    } else if (period === "y1") {
        unixDate = new moment(new moment().add(-365, 'days').format("YYYY-MM-DD")).valueOf();
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
    if (useOpenHighLowOrClose == 'close' && typeOfData == 'listing') {
        return stockData.last - closePriceData[index].closePrice;
    } else {
        return "-";
    }
}
function getClosestDateFromDateArray(unixDate, dateArr) {
    return dateArr.bestMatch(unixDate);
}

function updateChartHTMLLanguages() {
    debugStep("updateChartHTMLLanguages");
    //
    //  This should update all text strings in the chart (weekdays, months, symbols etc)
    //
    if (typeof (Highcharts) != "undefined") {
        var months = translations.t_jan_feb_mar_apr_may_jun_jul_aug_sep_oct_nov_dec.split(delimiter);

        if (globalActiveLanguage == 'ar') { //Todo make it in the server
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
        } else {
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

function updateTooltipDOHLCV(date) {
    debugStep("updateTooltipDOHLCV");
    var dateIndex;
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

    // NewsFlags
    var chartHeight, bottom, IRNewsHeadline;
    if (FeaturesList.IRChartNews.use) {
        newsIndex = globalChartNewsDates.indexOf(date);
        if (newsIndex > -1) {
            chartHeight = -1;
            bottom = -1;
            IRNewsHeadline = globalChartNewsHeadlines[newsIndex];
            if (IRNewsHeadline.length > 50) {
                IRNewsHeadline = IRNewsHeadline.substr(0, 50) + "...";
            }
            if (typeof ($(globalChartContainer).css('height')) == 'string') {
                chartHeight = Number($(globalChartContainer).css('height').replace("px", ""));
                bottom = (chartHeight - 300) * -1;
            }
            tooltipStr += "<div class=\"tooltipHtmlNews\" style=\"bottom: " + bottom + "px;\">";
            tooltipStr += "<div class=\"tooltipHtmlNewsDate\">" + new moment(globalChartNewsDates[newsIndex]).format(clientStyle.formatDate) + "</div>";
            tooltipStr += "<div class=\"tooltipHtmlNewsHeadline\">" + IRNewsHeadline + "</div>";
            tooltipStr += "</div>";
        }
    }
    if (FeaturesList.IRChartPressReleaseIRChartHeadline.use) {
        newsIndex = globalChartPressReleaseIRChartHeadlineDates.indexOf(date);
        if (newsIndex > -1) {
            chartHeight = -1;
            bottom = -1;
            IRNewsHeadline = globalChartPressReleaseIRChartHeadlineHeadlines[newsIndex];
            if (IRNewsHeadline.length > 50) {
                IRNewsHeadline = IRNewsHeadline.substr(0, 50) + "...";
            }
            if (typeof ($(globalChartContainer).css('height')) == 'string') {
                chartHeight = Number($(globalChartContainer).css('height').replace("px", ""));
                bottom = (chartHeight - 300) * -1;
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
    var tooltipStr = "<div class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode\">";
    var tooltipStrSub = "";
    if (globalChartActiveDisplayMode == chartDisplayModes.historical) {
        dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
        if (dateIndex == -1) {
            dateIndex = getClosestDateIndexForListingClosePrice(date);
            if (dateIndex == -1) {
                debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
            }
        }
        tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
    } else if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
        dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
        if (dateIndex == -1) {
            dateIndex = getClosestDateIndexForListingIntraday(date);
            if (dateIndex == -1) {
                debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
            }
        }
        tooltipStrSub += getTooltipStrSubIntraday(dateIndex);
    }
    tooltipStr += tooltipStrSub;
    tooltipStr += "</div>";
    // NewsFlags
    var chartHeight, bottom, IRNewsHeadline;
    if (FeaturesList.IRChartNews.use) {
        newsIndex = globalChartNewsDates.indexOf(date);
        if (newsIndex > -1) {
            chartHeight = -1;
            bottom = -1;
            IRNewsHeadline = globalChartNewsHeadlines[newsIndex];
            if (IRNewsHeadline.length > 50) {
                IRNewsHeadline = IRNewsHeadline.substr(0, 50) + "...";
            }
            if (typeof ($(globalChartContainer).css('height')) == 'string') {
                chartHeight = Number($(globalChartContainer).css('height').replace("px", ""));
                bottom = (chartHeight - 300) * -1;
            }
            tooltipStr += "<div class=\"tooltipHtmlNews\" style=\"bottom: " + bottom + "px;\">";
            tooltipStr += "<div class=\"tooltipHtmlNewsDate\">" + new moment(globalChartNewsDates[newsIndex]).format(clientStyle.formatDate) + "</div>";
            tooltipStr += "<div class=\"tooltipHtmlNewsHeadline\">" + IRNewsHeadline + "</div>";
            tooltipStr += "</div>";
        }
    }
    if (FeaturesList.IRChartPressReleaseIRChartHeadline.use || FeaturesList.IRChartPressRelease.use) {
        newsIndex = globalChartPressReleaseIRChartHeadlineDates.indexOf(date);
        if (newsIndex > -1) {
            chartHeight = -1;
            bottom = -1;
            IRNewsHeadline = globalChartPressReleaseIRChartHeadlineHeadlines[newsIndex];
            if (IRNewsHeadline.length > 50) {
                IRNewsHeadline = IRNewsHeadline.substr(0, 50) + "...";
            }
            if (typeof ($(globalChartContainer).css('height')) == 'string') {
                chartHeight = Number($(globalChartContainer).css('height').replace("px", ""));
                bottom = (chartHeight - 300) * -1;
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
function formatTooltipDateTime(dateIndex, data) {
    var date = "";
    switch (clientStyle.formatDateTime) {
        case "DD MMM YYYY HH:mm":
        case "DD-MMM-YYYY HH:mm":
        case "DD/MMM/YYYY HH:mm":
            date = new moment.tz(data[globalActiveListingIndex][dateIndex][0], globalActiveExchangeTimeZone);
            return formatDateWithReplacedDate(date);
            break;
        case "DD/MM/YYYY HH:mm":
        case "DD MM YYYY HH:mm":
        case "DD-MM-YYYY HH:mm":
        case "YYYY-MM-DD HH:mm":
        case "YYYY MM DD HH:mm":
            break;
        default:
            debugError("formatTooltipDateTime is missing support for dateFormat for clientStyle.formatDate (" + clientStyle.formatDateTime + ")");
            break;
    }
    return new moment.tz(data[globalActiveListingIndex][dateIndex][0], globalActiveExchangeTimeZone).format(clientStyle.formatDateTime);
}
function formatDateWithReplacedDate(date) {
    var monthShorts = translations.t_jan_feb_mar_apr_may_jun_jul_aug_sep_oct_nov_dec.split(';');
    var defaultMonths = {
        jan: 0,
        feb: 1,
        mar: 2,
        apr: 3,
        may: 4,
        jun: 5,
        jul: 6,
        aug: 7,
        sep: 8,
        oct: 9,
        nov: 10,
        dec: 11
    };
    var dateRet;
    if (globalChartActiveDisplayMode == chartDisplayModes.historical) {
        dateRet = date.format(clientStyle.formatDate).toLowerCase();
        dateRet = dateRet.replace(date.format("MMM").toLowerCase(), monthShorts[defaultMonths[date.format("MMM").toLowerCase()]].capitalizeFirstLetter());
    } else if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
        dateRet = date.format(clientStyle.formatDateTime).toLowerCase();
        dateRet = dateRet.replace(date.format("MMM").toLowerCase(), monthShorts[defaultMonths[date.format("MMM").toLowerCase()]].capitalizeFirstLetter());
    } else {
        dateRet = date.format(clientStyle.formatDateTime).toLowerCase();
    }
    return dateRet;
}
function formatDateWithFormat(timestamp, format) {
    var dateWithFormat = new moment.tz(timestamp, globalActiveExchangeTimeZone).add(clientStyle.manualTimeOffset, 'hours').format(format);
    if (format.indexOf('MMMM') != -1) {
        var monthTemp = moment(timestamp).format("MMMM");
        dateWithFormat = dateWithFormat.replace(monthTemp, translations['t_' + monthTemp.toLowerCase()].capitalizeFirstLetter());
    } else if (format.indexOf('MMM') > -1) {
        var monthTempShort = moment(timestamp).format("MMM");
        dateWithFormat = dateWithFormat.replace(monthTempShort, translations['t_' + monthTempShort.toLowerCase() + '_short'].capitalizeFirstLetter());
    }
    return dateWithFormat;
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
    return monthOut;
}

function getTooltipStrSubHistorical(dateIndex) {
    var tooltipStr = "";
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideDate) {
        tooltipStr += "<div class=\"IRChartTooltipDate\">" + formatTooltipDate(dateIndex, globalChartListingStockDataDates) + "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideOpen) {
        tooltipStr += "<div class=\"IRChartTooltipOpen\"><span class=\"subHeader\">" + getOHLCfromTranslations('o') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideHigh) {
        tooltipStr += "<div class=\"IRChartTooltipHigh\"><span class=\"subHeader\">" + getOHLCfromTranslations('h') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideLow) {
        tooltipStr += "<div class=\"IRChartTooltipLow\"><span class=\"subHeader\">" + getOHLCfromTranslations('l') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideClose) {
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideVolume) {
        tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
    }
    return tooltipStr;
}
function getTooltipStrSubIntraday(dateIndex) {
    var tooltipStr = "";
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideDate) {
        tooltipStr += "<div class=\"IRChartTooltipDate\">" + formatTooltipDateTime(dateIndex, globalChartListingIntradayDataOHLCV) + "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideOpen) {
        tooltipStr += "<div class=\"IRChartTooltipOpen\"><span class=\"subHeader\">" + getOHLCfromTranslations('o') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideHigh) {
        tooltipStr += "<div class=\"IRChartTooltipHigh\"><span class=\"subHeader\">" + getOHLCfromTranslations('h') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</span></div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideLow) {
        tooltipStr += "<div class=\"IRChartTooltipLow\"><span class=\"subHeader\">" + getOHLCfromTranslations('l') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</span></div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideClose) {
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</span></div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideVolume) {
        tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span></div>";
    }
    return tooltipStr;
}
function getTooltipStrSubTSR(dateIndex) {
    var tooltipStr = "";
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideDate) {
        tooltipStr += "<div class=\"IRChartTooltipDate\">" + new moment(IRChartTSR.stockDataTSRClone[dateIndex][0]).format(clientStyle.formatDate) + "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideClose) {
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + NumberFormat.decimal(IRChartTSR.stockDataCloneClose[dateIndex][1]) + "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideClose) {
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + translations.t_tsr + "</span><span class=\"subContent\">" + NumberFormat.decimal(IRChartTSR.stockDataTSRClone[dateIndex][1]) + "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideVolume) {
        tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + NumberFormat.local(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
    }
    return tooltipStr;
}

function updateTooltipLookup(date) {
    debugStep("updateTooltipLookup");
    var dateIndex;
    var tooltipStrSub = "";
    clientStyle.chart_CustomTooltipTopPX = -72;
    var tooltipStr = "<div class=\"tooltipHTML tooltipMode" + chartDisplayModes.historical + " htmlReadingDirection" + globalHTMLReadingDirection + "\" dir=\"" + globalHTMLReadingDirection.toLowerCase() + "\" style=\"top: " + clientStyle.chart_CustomTooltipTopPX + "px;\">";
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
    var tooltipStrSub = "";
    clientStyle.chart_CustomTooltipTopPX = -72;
    var tooltipStr = "<div class=\"tooltipHTML tooltipMode" + chartDisplayModes.historical + " htmlReadingDirection" + globalHTMLReadingDirection + "\" dir=\"" + globalHTMLReadingDirection.toLowerCase() + "\" style=\"top: " + clientStyle.chart_CustomTooltipTopPX + "px;\">";
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
    var dateIndex, newDateIndex;
    var tooltipStr = "<div class=\"tooltipHTML\" htmlReadingDirection" + globalHTMLReadingDirection + "\" dir=\"" + globalHTMLReadingDirection.toLowerCase() + "\">";
    switch (globalChartActiveDisplayMode) {
        case chartDisplayModes.historical:
            try {
                dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + NumberFormat.local(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {
                newDateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('c') + " " + NumberFormat.decimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][4]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('v') + " " + NumberFormat.local(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][5]) + "</div>";
            }
            break;
        case chartDisplayModes.intraday:
            try {
                dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + NumberFormat.local(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {
                newDateIndex = getClosestDateIndexForListingIntraday(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][newDateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('c') + " " + NumberFormat.decimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][newDateIndex][4]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('v') + " " + NumberFormat.local(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][newDateIndex][5]) + "</div>";
            }
            break;
    }
    tooltipStr += "</div>";
    return tooltipStr;
}

function updateChartNavBarRange(module) { //Todo try to check if the switch can be merged
    debugStep("updateChartNavBarRange");
    if (module == 'IRChartHTML' && typeof ($('.chartChangePeriod')) != "undefined") {
        $('.chartChangePeriod div, .IRChartChangePeriod div').click(function () {
            var days = -1;
            var hours = -1;
            var e = $(this).data('timemode');
            switch (e) {
                case 'd1':
                    hours = 24;
                    break;
                case 'd5':
                    hours = 120;
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
                    days = 720;
                    break;
                case 'max':
                    days = 9999;
                    break;
                default:
                    days = 1800;
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
    } else if (module == 'IRChart' && typeof ($('.chartChangePeriod')) != "undefined") {
        $('.chartChangePeriod div, .IRChartChangePeriod div').on('click', function () {
            var days = -1;
            var hours = -1;
            var e = $(this).data('timemode');
            globalActivePeriod = e;
            switch (e.toLowerCase()) {
                case 'd1':
                    hours = 24;
                    break;
                case 'd5':
                    hours = 120;
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
                    days = 720;
                    break;
                case 'max':
                    days = 9999;
                    break;
                default:
                    days = 1800;
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
}
function updateActiveChartNavBarRangePeriod(period) {
    debugStep("updateActiveChartNavBarRangePeriod");
    if (globalChartActiveDisplayMode == chartDisplayModes.comparison && period != 'd1' && period != 'd5') {
        $('div.chartChangePeriod div').removeClass('activePeriod');
        $('div.chartChangePeriod div#' + period).addClass('activePeriod');
        $('div.IRChartChangePeriod div').removeClass('activePeriod');
        $('div.IRChartChangePeriod div#' + period).addClass('activePeriod');
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
function updateIRChangeListing() {
    debugStep("updateIRChangeListing");
    var element = $('.IRChangeListing');
    var subElements = "";
    for (var i = 0; i < globalAmountOfListings; i++) {
        var addClass = '';
        if (i == globalActiveListingIndex) {
            addClass = 'selected="selected"';
        }
        if (clientStyle.selectIRChangeListingFormat == "ExchangeCity-Symbol") {
            subElements += "<option value=\"" + i + "\"" + addClass + ">" + getExchangeCity(globalRawStockData[i].exchangeName) + " " + globalRawStockData[i].symbol + "</option>";
        } else {
            subElements += "<option value=\"" + i + "\"" + addClass + ">" + globalRawStockData[i].symbol + " - " + globalRawStockData[i].exchangeName + "</option>";
        }
    }
    element.html("<select class=\"form-control\">" + subElements + "</select>");
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
    var length, lastEntryUnixDate, firstEntryUnix, firstDate, fromDate, toDate;
    if (mode == chartDisplayModes.historical) {
        length = globalChartListingStockDataDates[globalActiveListingIndex].length - 1;
        lastEntryUnixDate = globalChartListingStockDataDates[globalActiveListingIndex][length];
        firstEntryUnix = globalChartListingStockDataDates[globalActiveListingIndex][0];
        firstDate = moment.utc(firstEntryUnix);
        fromDate = moment.utc(lastEntryUnixDate);
        toDate = moment.utc(lastEntryUnixDate);
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
    } else if (mode == chartDisplayModes.intraday) {
        length = globalChartListingIntradayData[globalActiveListingIndex].length - 1;
        if (length != -1) {
            lastEntryUnixDate = globalChartListingIntradayData[globalActiveListingIndex][length][0];
            firstEntryUnix = globalChartListingIntradayData[globalActiveListingIndex][0][0];
            firstDate = moment.utc(firstEntryUnix);
            fromDate = moment.utc(lastEntryUnixDate);
            toDate = moment.utc(lastEntryUnixDate);
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
                );
                globalChartDom.redraw();
            }
        }
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
    for (var i = 0; i < IRChartTSR.stockDataTSRCloneDates.length - 1; i++) {
        if (newUnixDate < unixDate) {
            newUnixDate = IRChartTSR.stockDataTSRCloneDates[i];
            iterations++;
        }
    }
    return iterations;
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
        startIndex = endIndex;
        endIndex = startIndex;
    }
    return list.slice(startIndex, endIndex + 1); // Slice makes the date format localized. TODO
}
function getIndexThatBestMatchesDate(array, key, pickedDate, roundUp) {
    var minIndex = 0,
        maxIndex = array.length - 1,
        currentIndex,
        currentElement;
    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = array[currentIndex];
        var comparison = compareDates(new moment(new moment(currentElement[key]).format("YYYY-MM-DD"))._d, pickedDate);
        if (comparison === dateComparisons.BEFORE) {
            minIndex = currentIndex + 1;
        } else if (comparison === dateComparisons.AFTER) {
            maxIndex = currentIndex - 1;
        } else {
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
};
function downscaleData(list, frequency) {
    debugStep("downscaleData");
    var index, downscaled = [];
    var date = new moment(list[0].date)._d;
    switch (frequency.toLowerCase()) {
        case "daily":
            return list;
            break;
        case "monthly":
            while (date < new Date(list[list.length - 1].date)) {
                index = getIndexThatBestMatchesDate(list, "date", date, true);
                downscaled.push(list[index]);
                date.setDate(1);
                date.setMonth(date.getMonth() + 1);
            }
            return downscaled;
            break;
        case "quarterly":
            while (date < new Date(list[list.length - 1].date)) {
                index = getIndexThatBestMatchesDate(list, "date", date, true);
                downscaled.push(list[index]);
                date.setDate(1);
                if (date.getMonth() < 3) {
                    date.setMonth(3);
                    continue
                }
                if (date.getMonth() < 6) {
                    date.setMonth(6);
                    continue
                }
                if (date.getMonth() < 9) {
                    date.setMonth(9);
                    continue
                }
                date.setMonth(0);
                date.setFullYear(date.getFullYear() + 1);
            }
            return downscaled;
            break;

        case "yearly":
            while (date < new Date(list[list.length - 1].date)) {
                index = getIndexThatBestMatchesDate(list, "date", date, true);
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
        iframe_html = "<html><head></head><body><form method='POST' action='" + url + "'>";
        Object.keys(data).forEach(function (key) {
            iframe_html += "<input type='hidden' name='" + key + "' value='" + data[key] + "'>";
        });
        iframe_html += "</form></body></html>";
        iframe_doc.open();
        iframe_doc.write(iframe_html);
        $(iframe_doc).find('form').submit();

    }
}
//
//  News
// Todo this part could be converted into object
function newsSearch(searchText) {
    debugStep("newsSearch - [" + searchText + "]");
    if (typeof ($('.select-filter').html()) == "string") {
        var searchIn = $('.select-filter').val();
        if (searchText != "" && searchIn.toLowerCase() == 'title and content') {
            RequestData.newsDataSearch(searchText);
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
        //  If 'Search in' drop down is not present.
        newsFilterReset();
        newsFilter('');
    }
}
function newsFilterReset() {
    debugStep("newsFilterReset");
    if (typeof ($('table.IRNewsTool tr th.Header').html()) != "undefined") {
        //  News in a Table structure
        $('tr.Data').removeClass('hide');
        for (var page = 1; page <= globalNewsPagesInTotal; page++) {
            $('tr.Data').removeClass('page' + page);
        }
    }
    if (typeof ($('div.IRNewsTool .IRHeaderGroup .IRHeader').html()) != "undefined") {
        //  News in a Div structure
        $('div.IRDataGroup').removeClass('hide');
        for (var page_a = 1; page_a <= globalNewsPagesInTotal; page_a++) {
            $('div.IRDataGroup').removeClass('page' + page_a);
        }
    }
}
function newsFilter(searchText) {
    debugStep("newsFilter");
    var searchedText = "";
    if (typeof (searchText) == 'string') {
        searchedText = searchText.toLowerCase();
    }
    var searchFromYear = $('.search-from .from-year').val();
    var searchFromMonth = $('.search-from .from-month').val();
    var searchToYear = $('.search-to .to-year').val();
    var searchToMonth = $('.search-to .to-month').val();
    debugStep("searchFromYear: " + searchFromYear);
    debugStep("searchFromMonth: " + searchFromMonth);
    debugStep("searchToYear: " + searchToYear);
    debugStep("searchToMonth: " + searchToMonth);

    var searchFilters = "";

    if (typeof ($('.selectFilter').val()) == 'undefined') {
        $('div.checkbox.checkboxFilter.checked').each(function () {
            searchFilters += ";" + $(this).data('filtercat');
        });
    } else {
        searchFilters += $('.selectFilter').val();
    }
    searchFilters = newsAddDistinctFilter(searchFilters);
    if (searchFilters.trim() == '' || searchFilters.indexOf('null') != -1) {
        searchFilters = ';allRNSnews';
    }

    //  Traverse each news entry (Timestamp, Headline, Download)
    if (typeof ($('div.IRNewsTool .IRHeaderGroup .IRHeader').html()) != "undefined") {
        //  News in a Div structure
        $('div.IRDataGroup').each(function () {
            var newsDateArr = $(this).find('.IRDate').data('newsdate').split('-');
            var newsYear = newsDateArr[0];
            var newsFilters = $(this).find('.IRTitle').data('newstitle');
            var newsHeadlie = $(this).find('.IRTitle').html().toLowerCase();
            //  Periond filters
            if (newsYear < searchFromYear) {
                debugStep("newsYear < searchFromYear: " + newsYear < searchFromYear);
                $(this).addClass('hide');
            }
            if (newsYear > searchToYear) {
                $(this).addClass('hide');
            }
            //  Category filters
            if (searchFilters.indexOf('allRNSnews') == -1) {
                if (searchFilters.indexOf(newsFilters) < 1) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            }
            //  Headline filter
            if (searchedText.length > 0 && newsHeadlie.indexOf(searchedText) == -1) {
                $(this).addClass('hide');
            }

        });
    }
    if (typeof ($('table.IRNewsTool tr th.Header').html()) != "undefined") {
        //  News in a Table structure
        $('tr.Data').each(function () {
            var newsDateArr = $(this).find('.IRDate').data('newsdate').split('-');
            var newsYear = newsDateArr[0];
            var newsFilters = $(this).find('.IRTitle').data('newstitle');
            var newsHeadlie = $(this).find('.IRTitle').html().toLowerCase();
            //  Periond filters
            if (newsYear < searchFromYear) {
                $(this).addClass('hide');
            }
            if (newsYear > searchToYear) {
                $(this).addClass('hide');
            }
            //  Category filters
            if (searchFilters.indexOf('allRNSnews') == -1 && searchFilters.indexOf(newsFilters) < 1) {
                $(this).addClass('hide');
            }
            //  Headline filter
            if (newsHeadlie.indexOf(searchedText) == -1) {
                $(this).addClass('hide');
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
//
//  Chart
//
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
                    $('.IRChartMenuTriggerBody').fadeOut(300, function () {
                        $(this).removeClass('active');
                    });
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
    var IRChartCompareChangePlotY = 0;

    if (typeof (e.currentTarget.series[0]) == "object") {
        IRChartCompareChangePlotY = e.currentTarget.series[0].points[e.currentTarget.series[0].points.length - 1].change;
    }
    globalChartDom = getChartDOM();

    var yValue = IRChartCompareChangePlotY;
    var offsetX = 70;
    var lastPrice = globalRawStockData[globalActiveListingIndex].last;
    var lastPriceTime = new moment.tz(globalRawStockData[globalActiveListingIndex].timestamp, globalActiveExchangeTimeZone).add(clientStyle.manualTimeOffset, 'hours').format(clientStyle.formatTime);

    var text = "";
    text += '<div class="chartCurrentPriceBoxOuter"><div class="chartCurrentPriceBox" style="border: 1px solid ' + clientStyle.chart_ColourMain + ';background-color: ' + clientStyle.chart_ColourMain + ';"><div class="chartCurrentPriceBoxArrow"><div class="irCPB1" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div><div class="irCPB2" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div><div class="irCPB3" style="background-color: ' + clientStyle.chart_ColourMain + ';"></div></div>';
    text += '<div class="chartLastPrice">' + NumberFormat.decimal(lastPrice) + '</div><br />';
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
//
//  Comparison
//
function updateTooltipComparisonDC(date) {
    debugStep("updateTooltipComparisonDC");
    var pixelCasesComparison = [0, 5, -9, -23, -37, -52, -65, -79, -93, -107, -121, -135, -149, -162, -179];
    var dateIndex;
    var amountOfComparisonsInChart = 0;
    for (var i = 0; i < globalChartComparisonInChart.length; i++) {
        amountOfComparisonsInChart += globalChartComparisonInChart[i];
    }
    var tooltipStr = "<div class=\"tooltipHtmlComparison " + globalChartActiveDisplayMode + "Mode\" style=\"top: " + pixelCasesComparison[amountOfComparisonsInChart < pixelCasesComparison.length ? amountOfComparisonsInChart : 0] + "px\">";
    try {
        dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
        tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
        tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator active\" style=\"border-left-color: " + globalChartColours[0] + ";\"></span>" + globalRawStockData[globalActiveListingIndex].symbol + ": </span> <span class=\"subContent\">" + NumberFormat.decimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
        for (var j = 0; j < globalChartComparisonData[0].length; j++) {
            if (globalChartComparisonInChart[j + 1] == 1) {
                tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator color" + globalChartColours[j + 1].replace('#', '') + " active\"></span>" + globalChartComparisonSymbols[j] + ": </span> <span class=\"subContent\">" + NumberFormat.decimal(globalChartComparisonData[0][j][dateIndex][1]) + "</span></div>";
            }
        }
    }
    catch (err) {
        var newDateIndex = getClosestDateIndexForListingClosePrice(date);
        tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][0]).format(clientStyle.formatDate) + "</div>";
        tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator active\" style=\"border-left-color: " + globalChartColours[0] + ";\"></span>" + globalRawStockData[globalActiveListingIndex].symbol + ": </span> <span class=\"subContent\">" + NumberFormat.decimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][1]) + "</span></div>";
        for (var k = 0; k < globalChartComparisonData[0].length; k++) {
            if (globalChartComparisonInChart[k + 1] == 1) {
                tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator color" + globalChartColours[k + 1].replace('#', '') + " active\"></span>" + globalChartComparisonSymbols[k] + ": </span> <span class=\"subContent\">" + NumberFormat.decimal(globalChartComparisonData[0][k][newDateIndex][1]) + "</span></div>";
            }
        }
    }
    tooltipStr += "</div>";
    var bottom, IRNewsHeadline;
    if (FeaturesList.IRChartNews.use) {
        newsIndex = globalChartNewsDates.indexOf(date);
        if (newsIndex > -1) {
            bottom = -1;
            IRNewsHeadline = globalChartNewsHeadlines[newsIndex];
            if (IRNewsHeadline.length > 50) {
                IRNewsHeadline = IRNewsHeadline.substr(0, 50) + "...";
            }
            if (typeof ($(globalChartContainer).css('height')) == 'string') {
                chartHeight = Number($(globalChartContainer).css('height').replace("px", ""));
                bottom = (chartHeight - 250) * -1;
            }
            tooltipStr += "<div class=\"tooltipHtmlNews\" style=\"bottom: " + bottom + "px;\">";
            tooltipStr += "<div class=\"tooltipHtmlNewsDate\">" + new moment(globalChartNewsDates[newsIndex]).format(clientStyle.formatDate) + "</div>";
            tooltipStr += "<div class=\"tooltipHtmlNewsHeadline\">" + IRNewsHeadline + "</div>";
            tooltipStr += "</div>";
        }
    }
    if (FeaturesList.IRChartPressReleaseIRChartHeadline.use || FeaturesList.IRChartPressRelease.use) {
        newsIndex = globalChartPressReleaseIRChartHeadlineDates.indexOf(date);
        if (newsIndex > -1) {
            bottom = -1;
            IRNewsHeadline = globalChartPressReleaseIRChartHeadlineHeadlines[newsIndex];

            if (IRNewsHeadline.length > 50) {
                IRNewsHeadline = IRNewsHeadline.substr(0, 50) + "...";
            }
            if (typeof ($(globalChartContainer).css('height')) == 'string') {
                chartHeight = Number($(globalChartContainer).css('height').replace("px", ""));
                bottom = (chartHeight - 250) * -1;
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
    if (id == "IRChartCurrencyConversionAdjustedPrice") {
        $.when(requestAnalysisSimpleMovingAverageData).done(function (dataTA) {
            applyAnalysisToChart(dataTA, TAShort);
        });
    }
}
//
// Technical Analysis
//
var TechnicalAnalysisList = {
    // IRChartNavigationClear: {short: , nb: 360},
    CommodityChannelIndex: {short: "CCI", nb: 10},
    DirectionalMovementIndex: {short: "DMI", nb: 14},
    ExponentialMovingAverage: {short: "EMA", nb: 10},
    Momentum: {short: "Mom", nb: 10},
    MoneyFlowIndex: {short: "MFI", nb: 14},
    RateOfChange: {short: "RoC", nb: 15},
    RelativeStrengthIndex: {short: "RSI", nb: 14},
    SimpleMovingAverage: {short: "SMA", nb: 10},
    WilliamsPercentR: {short: "W", nb: 10}
};
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
function updateTooltipTechnicalAnalysisDP(date) {
    debugStep("updateTooltipTechnicalAnalysisDP");
    var dateIndex;
    var tooltipStr = "<div class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode\">";
    switch (globalChartActiveDisplayMode) {
        case chartDisplayModes.historical:
            try {
                dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + NumberFormat.local(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('c') + " " + NumberFormat.decimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('v') + " " + NumberFormat.local(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            if (FeaturesList.IRChartTA.use) {
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>" + globalActiveTAShort + ": " + NumberFormat.decimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>" + globalActiveTAShort + ": " + NumberFormat.decimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
            }
            break;
        case chartDisplayModes.intraday:
            try {
                dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('o') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('h') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('l') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + NumberFormat.local(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {
                dateIndex = getClosestDateIndexForListingIntraday(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('o') + " " + NumberFormat.decimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('h') + " " + NumberFormat.decimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('l') + " " + NumberFormat.decimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('c') + " " + NumberFormat.decimal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('v') + " " + NumberFormat.local(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            break;
        case chartDisplayModes.ta:
            try {
                dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + NumberFormat.local(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('c') + " " + NumberFormat.decimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('v') + " " + NumberFormat.local(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }

            if (FeaturesList.IRChartTA.use) {

                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>" + globalActiveTAShort + ": " + NumberFormat.decimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>" + globalActiveTAShort + ": " + NumberFormat.decimal(stockDataTA[globalActiveListingIndex][dateIndex][1]) + "</div>";
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
    if (id in TechnicalAnalysisList) {
        RequestData.analysisWilliamsPercentR(clientStyle.amountOfHistoricalYears, TechnicalAnalysisList.nb);
        applyAnalysis(id, TechnicalAnalysisList.short);
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
    activeTA += '<span>' + TAShort + '</span>';
    activeTA += '</div>';

    $(IrChartTapPlace).html(activeTA);

    globalChartDom.redraw();
}
function resetIRChartNavigation() {
    debugStep("resetIRChartNavigation");
    $(IrChartComparisonPlace + ' div').css('display', 'none');
    $(IrChartTsrpPlace + ' div').css('display', 'none');
    $('.IRChartNavigation .basicButtonLook').removeClass('active');
    globalChartComparisonsInChart = 0;
    $(IrChartTapPlace).html('');
    if (FeaturesList.IRChartTSR.use) {
        $(IrChartTsrpPlace).html('');
    }
    $('.IRChartTechnicalAnalysisActiveTAControls').html('');
}
function resetIRChart() {
    debugStep("resetIRChart");
    resetIRChartNavigation();
    redrawIRChartHTMLHistorical();
    setChartExtremes(chartDisplayModes.historical, 360);
    drawPlotLineToChart();
    if (FeaturesList.IRChartNews.use) {
        drawIRNewsToChartHistorical();
    }
    if (FeaturesList.IRChartPressReleaseIRChartHeadline.use) {
        $.when(requestStockData, requestPressReleaseIRChartHeadlineData).done(function (stockData, newsDataInitial) {
            var o = {
                headers: translations,
                data: newsDataInitial[0].data
            };
            PreloadData.irChartPressReleaseIRChartHeadlineHistorical(o);
        });
    }
    if (FeaturesList.IRChartPressRelease.use) {
        $.when(requestStockData, requestPressReleaseData).done(function (stockData, newsDataInitial) {
            var o = {
                headers: translations,
                data: newsDataInitial[0].data
            };
            PreloadData.irChartPressReleaseHistorical(o);
        });
    }
}
function updateTSR(id) {
    debugStep("updateTSR(" + id + ")");
    if (globalChartActiveDisplayMode != chartDisplayModes.tsr) {
        resetIRChartNavigation();
        globalChartActiveDisplayMode = chartDisplayModes.tsr;
    }

    if (id == "TSRSimple") {
        if (IRChartTSR.fetchData) {
            RequestData.DividendBundle(clientStyle.amountOfHistoricalYears, 10);
            IRChartTSR.fetchData = false;
        }
        applyTSR("Simple");
    }
}
function applyTSR(TSRMode) {

    globalChartActiveDisplayMode = chartDisplayModes.tsr;
    clientStyle.chart_CustomTooltipTopPX = -10;
    if (TSRMode == "Simple") {
        $.when(requestDividendBundle).done(function (dataTSR) {
            applyTSRToChart(dataTSR, TSRMode);
        });
    }
}
function applyTSRToChart(dataTSR, TSRMode) {
    debugStep("applyTSRToChart");

    globalRawTSRData = dataTSR;
    var closePriceIndexLocation = 3;
    var TSRDataRaw = dataTSR.dividend[globalActiveListingIndex].data;
    var CPDataForTSR = globalChartListingStockData[globalActiveListingIndex];

    IRChartTSR.rawDividendData = TSRDataRaw;

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
// obj for TA for now
var chartDefaultProperties = {
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
                return NumberFormat.decimal(this.value) + '';
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
        }, spline: {
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
    }
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
        var taName, taTitle;

        switch (ta) {
            case "SMA":
                taTitle = translations.t_simple_moving_average;
                break;
            case "EMA":
                taTitle = translations.t_exponential_moving_average;
                break;
            case "BBands":
                taTitle = translations.t_bollinger_bands;
                break;
            case "MACD":
                taTitle = translations.t_moving_average_convergence_slash_divergence;
                break;
            case "RoC":
                taTitle = translations.t_rate_of_change;
                break;
            case "MAES":
                taTitle = translations.t_moving_average_envelope + " simple";
                break;
            case "MAEE":
                taTitle = translations.t_moving_average_envelope + " exponential";
                break;
            case "RSI":
                taTitle = translations.t_relative_strength_index;
                break;
            case "Momentum":
                taTitle = translations.t_momentum;
                break;
            case "PSAR":
                taTitle = translations.t_parabolic_sar;
                break;
            case "WillPctR":
                taTitle = translations.t_williams_percent_r;
                break;
            default:
                debugError("TechnicalAnalysis (" + ta + ") not yet implemented!");
                return '';
                break;
        }
        if (this.useShortOrLongNames != 'long') {
            taName = ta;
        } else {
            taName = taTitle;
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

        this.redrawIRChartInModeTechnicalAnalysis(id);
        globalActiveTAShort = id.replace("IRChartTA", "");

        switch (id) {
            case "IRChartTASMA":
                RequestData.analysisSimpleMovingAverage(clientStyle.amountOfHistoricalYears, 10);
                IRChartTechnicalAnalysis.applySMA('SMA', 10);
                break;
            case "IRChartTAEMA":
                RequestData.analysisExponentialMovingAverage(clientStyle.amountOfHistoricalYears, 10);
                IRChartTechnicalAnalysis.applyEMA('EMA', 10);
                break;
            case "IRChartTAMACD":
                RequestData.analysisMovingAverageConvergenceDivergence(clientStyle.amountOfHistoricalYears, 12, 26, 9);
                IRChartTechnicalAnalysis.applyMACD('MACD', 12, 26, 9);
                break;
            case "IRChartTABBands":
                RequestData.analysisBollingerBands(clientStyle.amountOfHistoricalYears, 20, 2);
                IRChartTechnicalAnalysis.applyBBands('BBands', 20, 2);
                break;
            case "IRChartTARoC":
                RequestData.analysisRateOfChange(clientStyle.amountOfHistoricalYears, 10);
                IRChartTechnicalAnalysis.applyRoC('RoC', 10);
                break;
            case "IRChartTAMAES":
                RequestData.analysisMovingAverageEnvelopeSimple(clientStyle.amountOfHistoricalYears, 20, 2);
                IRChartTechnicalAnalysis.applyMAES('MAES', 20, 2);
                break;
            case "IRChartTAMAEE":
                RequestData.analysisMovingAverageEnvelopeExponential(clientStyle.amountOfHistoricalYears, 20, 2);
                IRChartTechnicalAnalysis.applyMAEE('MAEE', 20, 2);
                break;
            case "IRChartTAWillPctR":
                RequestData.analysisWilliamsPercentR(clientStyle.amountOfHistoricalYears, 10);
                IRChartTechnicalAnalysis.applyWillPctR('WillPctR', 10);
                break;
            case "IRChartTARSI":
                RequestData.analysisRelativeStrengthIndex(clientStyle.amountOfHistoricalYears, 10);
                IRChartTechnicalAnalysis.applyRSI('RSI', 10);
                break;
            case "IRChartTAMomentum":
                RequestData.analysisMomentum(clientStyle.amountOfHistoricalYears, 10);
                IRChartTechnicalAnalysis.applyMomentum('Momentum', 10);
                break;
            case "IRChartTAPSAR":
                RequestData.analysisParabolicSar(clientStyle.amountOfHistoricalYears, 0.02);
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
                this.drawIRChartTechnicalAnalysis("single");
                break;
            case 'IRChartTAMACD':
            case 'IRChartTARoC':
            case 'IRChartTARSI':
            case 'IRChartTAMomentum':
            case 'IRChartTAWillPctR':
                this.drawIRChartTechnicalAnalysis("dual");
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
                if (globalActiveTAShort == "PSAR") {
                    chartDefaultProperties.plotOptions.line.dataGrouping = {enabled: false};
                } else {
                    delete chartDefaultProperties.plotOptions.line.marker.radius;
                }
                $(globalChartContainer).highcharts('StockChart', chartDefaultProperties);
                break;
            case "dual":
                chartDefaultProperties.yAxis[0].top = '0%';
                chartDefaultProperties.yAxis[0].height = '60%';
                chartDefaultProperties.yAxis[1].top = '20%';
                chartDefaultProperties.yAxis[1].height = '40%';
                delete chartDefaultProperties.plotOptions.series.states;
                var ta = {
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
                            return NumberFormat.decimal(this.value) + '';
                        }
                    }
                };
                chartDefaultProperties.yAxis.push(ta);
                $(globalChartContainer).highcharts('StockChart', chartDefaultProperties);
                break;
        }
        console.log(getChartDOM())
        globalChartDom = getChartDOM();
        drawActiveListingToChartHistorical();
    },
    updateTooltip: function (date) {
        debugStep("updateTooltipTechnicalAnalysisCustom");

        var dateIndex;

        var topPxStyle = "";
        if ($.inArray(globalActiveTAShort, ["EMA", "SMA", "RoC", "WillPctR", "RSI", "Momentum", "PSAR"]) > -1) {
            topPxStyle = 'style="top: -9px"';
        } else if (globalActiveTAShort == "MACD") {
            topPxStyle = 'style="top: -36px"';
        }

        var tooltipStr = "<div " + topPxStyle + " class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode \">";
        try {
            dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
            tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
            tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
            tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + NumberFormat.local(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
        }
        catch (err) {
            try {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + NumberFormat.decimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + NumberFormat.local(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            } catch (err) {
                debugError("error lvl 3 in IRChartTechnicalAnalysis.updateTooltip");
            }
        }

        switch (globalActiveTAShort) {

            case "SMA":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>SMA: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTASMA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    if (dateIndex > IRChartTechnicalAnalysisData.stockDataTASMA[globalActiveListingIndex].length - 1) {
                        dateIndex = IRChartTechnicalAnalysisData.stockDataTASMA[globalActiveListingIndex].length - 1;
                    }
                    tooltipStr += "<div>SMA: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTASMA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "EMA":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>EMA: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAEMA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>EMA: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAEMA[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "MACD":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>Hist: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAHist[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>MACD: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAMACD[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Signal: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTASignal[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>Hist: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAHist[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>MACD: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAMACD[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Signal: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTASignal[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "RoC":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>ROC: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAROC[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>ROC: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAROC[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "BBands":
            case "MAES":
            case "MAEE":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>Upper: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAUpper[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Middle: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAMiddle[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Lower: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTALower[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>Upper: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAUpper[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Middle: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAMiddle[globalActiveListingIndex][dateIndex][1]) + "</div>";
                    tooltipStr += "<div>Lower: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTALower[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "WillPctR":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>Will %R: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAWillPctR[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>Will %R: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAWillPctR[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "RSI":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>" + globalActiveTAShort + ": " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTARSI[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>" + globalActiveTAShort + ": " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTARSI[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "Momentum":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>" + globalActiveTAShort + ": " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAMomentum[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>" + globalActiveTAShort + ": " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAMomentum[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                break;

            case "PSAR":
                try {
                    dateIndex = stockDataTADates.indexOf(date);
                    tooltipStr += "<div>PSAR: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAPSAR[globalActiveListingIndex][dateIndex][1]) + "</div>";
                }
                catch (err) {
                    dateIndex = getClosestDateIndexForListingClosePrice(date);
                    tooltipStr += "<div>PSAR: " + NumberFormat.decimal(IRChartTechnicalAnalysisData.stockDataTAPSAR[globalActiveListingIndex][dateIndex][1]) + "</div>";
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

        for (var j = 0; j < settings.length; j++) {
            $('.IRChartTechnicalAnalysisActiveTAControls setting' + settings[j].name.toString() + '').val(settings[j].value); //Todo check if its really needed double casting to string
        }

        this.clickHandlerShowHide();
    },

    clickHandlerShowHide: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .showHideMe').off().on('click', function () {
            if ($(this).hasClass('hidden')) {
                $(this).removeClass('hidden');
                $(this).addClass('shown');
                $(this).html('[Show]');
                $('.settingsPlaceholder').css('display', 'none');
            } else {
                $(this).removeClass('shown');
                $(this).addClass('hidden');
                $(this).html('[Hide]');
                $('.settingsPlaceholder').css('display', 'block');
            }
        });
    },
    clickHandlerUpdateSMA: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingPeriod = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingPeriod').val(), 2, 100, "int");

            requestAnalysisSimpleMovingAverageData = null;

            IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis('IRChartTASMA');
            RequestData.analysisSimpleMovingAverage(clientStyle.amountOfHistoricalYears, settingPeriod);
            IRChartTechnicalAnalysis.applySMA($(this).attr('id'), settingPeriod);

            IRChartTechnicalAnalysis.redrawActiveSettings([
                {name: 'Period', value: settingPeriod}
            ]);

        });
    },
    clickHandlerUpdateEMA: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingPeriod = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingPeriod').val(), 1, 100, "int");

            requestAnalysisExponentialMovingAverageData = null;

            this.redrawIRChartInModeTechnicalAnalysis('IRChartTAEMA');

            RequestData.analysisExponentialMovingAverage(clientStyle.amountOfHistoricalYears, settingPeriod);
            this.applyEMA($(this).attr('id'), settingPeriod);

            this.redrawActiveSettings([
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
            RequestData.analysisMovingAverageConvergenceDivergence(clientStyle.amountOfHistoricalYears, settingFast, settingSlow, settingSignal);
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
            RequestData.analysisBollingerBands(clientStyle.amountOfHistoricalYears, settingPeriod, settingK);
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
            RequestData.analysisRateOfChange(clientStyle.amountOfHistoricalYears, settingPeriod);
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

            RequestData.analysisMovingAverageEnvelopeSimple(clientStyle.amountOfHistoricalYears, settingPeriod, settingStray);
            IRChartTechnicalAnalysis.applyMAES($(this).attr('id'), settingPeriod, settingStray);

            IRChartTechnicalAnalysis.redrawActiveSettings([
                {
                    name: 'Period', value: settingPeriod
                },
                {name: 'Stray', value: settingStray}
            ]);

        });
    },
    clickHandlerUpdateMAEE: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingPeriod = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingPeriod').val(), 1, 100, "int");
            var settingStray = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingStray').val(), 1, 100, "int");

            requestAnalysisMovingAverageEnvelopeExponential = null;

            IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis('IRChartTAMAEE');

            RequestData.analysisMovingAverageEnvelopeExponential(clientStyle.amountOfHistoricalYears, settingPeriod, settingStray);
            IRChartTechnicalAnalysis.applyMAEE($(this).attr('id'), settingPeriod, settingStray);

            IRChartTechnicalAnalysis.redrawActiveSettings([
                {
                    name: 'Period', value: settingPeriod
                },
                {name: 'Stray', value: settingStray}
            ]);

        });
    },
    clickHandlerUpdateWillPctR: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingPeriod = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingPeriod').val(), 1, 100, "int");

            requestAnalysisWilliamsPercentRData = null;

            IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis('IRChartTAWillPctR');

            RequestData.analysisWilliamsPercentR(clientStyle.amountOfHistoricalYears, settingPeriod);
            IRChartTechnicalAnalysis.applyWillPctR($(this).attr('id'), settingPeriod);

            IRChartTechnicalAnalysis.redrawActiveSettings([
                {name: 'Period', value: settingPeriod}
            ]);

        });
    },
    clickHandlerUpdateRSI: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingPeriod = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingPeriod').val(), 1, 100, "int");

            requestAnalysisRelativeStrengthIndexData = null;

            IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis('IRChartTARSI');

            RequestData.analysisRelativeStrengthIndex(clientStyle.amountOfHistoricalYears, settingPeriod);
            IRChartTechnicalAnalysis.applyRSI($(this).attr('id'), settingPeriod);

            IRChartTechnicalAnalysis.redrawActiveSettings([
                {name: 'Period', value: settingPeriod}
            ]);

        });
    },
    clickHandlerUpdateMomentum: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingPeriod = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingPeriod').val(), 1, 100, "int");

            requestAnalysisMomentumData = null;

            IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis('IRChartTAMomentum');

            RequestData.analysisMomentum(clientStyle.amountOfHistoricalYears, settingPeriod);
            IRChartTechnicalAnalysis.applyMomentum($(this).attr('id'), settingPeriod);

            IRChartTechnicalAnalysis.redrawActiveSettings([
                {name: 'Period', value: settingPeriod}
            ]);

        });
    },
    clickHandlerUpdatePSAR: function () {
        $('.IRChartTechnicalAnalysisActiveSettings .updateButton').off().on('click', function () {

            var settingAcceleration = IRChartTechnicalAnalysis.validateSetting($('.IRChartTechnicalAnalysisActiveSettings .settingAcceleration').val(), 0.000001, 0.02, "float");
            // TODO: min value is set to 0.000001 instead of 0.0000001 due to parseFloat limitations

            requestAnalysisParabolicSar = null;

            IRChartTechnicalAnalysis.redrawIRChartInModeTechnicalAnalysis('IRChartTAPSAR');
            RequestData.analysisParabolicSar(clientStyle.amountOfHistoricalYears, settingAcceleration);
            IRChartTechnicalAnalysis.applyPSAR($(this).attr('id'), settingAcceleration);

            IRChartTechnicalAnalysis.redrawActiveSettings([
                {
                    name: 'Acceleration',
                    title: 'Acceleration must be between 0,0000001 and 0,02.',
                    value: settingAcceleration
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
                    name: 'Acceleration',
                    title: 'Acceleration must be between 0,0000001 and 0,02.',
                    value: settingAcceleration
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

function formatColour() {
    $('.formatColour').each(function () {
        $(this).removeClass("formatColour");
        try {
            if (parseFloat($(this).html()) > 0) {
                $(this).addClass("formatColourPos");
            }
            if (parseFloat($(this).html()) < 0) {
                $(this).addClass("formatColourNeg");
            }
        }
        catch (e) {
        }
    });
}
//
//  MommentTimezone init
//
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
//
// Number format functions
//
var NumberFormat = {
    decimal: function (number) {
        var formated = "-";
        try {
            if (typeof (number) == 'number') {
                formated = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals).replace('.', clientLocaleParameters.decimalSeparator);
            }
        }
        catch (err) {
            debugError(err);
        }
        return formated;
    },
    decimalWithCustomNumberOfDecimal: function (number, numberOfDecimals) {
        var formated = "-";
        try {
            if (typeof (number) == 'number') {
                formated = number.round(clientStyle.amountOfDecimals).toFixed(numberOfDecimals).replace('.', clientLocaleParameters.decimalSeparator);
            }
        }
        catch (err) {
            debugError(err);
        }
        return formated;
    },
    decimal1000: function (number) {
        var sepaNumb = "-";
        try {
            if (typeof (number) == 'number') {
                if (/^./.test(number)) {
                    number = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);
                    var h = number.toString().split(".");
                    sepaNumb = h[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000) + clientLocaleParameters.decimalSeparator + h[1];
                } else {
                    sepaNumb = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals).replace('.', clientLocaleParameters.decimalSeparator);
                }
            }
        }
        catch (err) {
            debugError(err);
        }
        return sepaNumb;
    },
    decimalNoZero: function (number) {
        var nb = "-";
        try {
            if (typeof (number) == 'number') {
                if (number) {
                    nb = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals).replace('.', clientLocaleParameters.decimalSeparator);
                }
            }
        }
        catch (err) {
            debugError(err);
        }
        return nb;
    },
    decimalFileSize: function (number) {
        var nb = "-";
        try {
            nb = number.round(1).toFixed(1);
        }
        catch (err) {
            debugError(err);
        }
        return nb;
    },
    local: function (number) {
        var nb = "-";
        try {
            if (typeof (number) == 'number') {
                nb = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000);
            }
        }
        catch (err) {
            debugError(err);
        }
        return nb;
    }
};

function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
Number.prototype.round = function (places) {
    return +(Math.round(this + "e+" + places) + "e-" + places);
};
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
String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.toLowerCase().slice(1);
};
function shadeColor(color, percent) {
    var f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}
//
//  Attach Click Handler
function attachClickHandlers(module) {
    debugStep("attachClickHandlers(" + module + ")");
    var moduleHandlers = {
        IRChartHTMLModule: function () {
            var changeListing = '.IRChangeListing';
            if (typeof ($(changeListing)) != "undefined") {
                $(changeListing + 'select').on('change', function () {
                    globalActiveListingIndex = parseInt($(this).val());
                    initMomentTimezone();
                    buildQuoteTable();
                    redrawIRChartHTMLHistorical();
                    updateActiveChartNavBarRangePeriod(globalActivePeriod);
                });
            }
        },
        IRChartModule: function () {
            var chartMenuTrigger = '.IRChartMenuTrigger';
            var chartMenuTriggerBody = '.IRChartMenuTriggerBody';
            var chartHistoricalExcel = '.IRChartDownloadHistoricalDataAsExcel';
            if (typeof ($(chartMenuTrigger)) != "undefined") {
                $(chartMenuTrigger).on('click', function () {
                    debugStep("clicked '" + chartMenuTrigger + "' in attachClickHandlers");
                    if ($(chartMenuTriggerBody).css('display') == 'block') {
                        $(this).parent().removeClass('active');
                        $(chartMenuTriggerBody).css('display', 'none');
                    } else {
                        $(this).parent().addClass('active');
                        $(chartMenuTriggerBody).css('display', 'block');
                    }
                });
            }
            if (typeof ($(chartHistoricalExcel)) != "undefined") {
                $(chartHistoricalExcel).off().on('click', function () {
                    debugStep("clicked '" + chartHistoricalExcel + "' in attachClickHandlers");
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
        },
        IRNewsModule: function () {
            if (typeof $('.newsSubmit') != "undefined" && typeof ($('.searchText')) != "undefined") {
                $('.newsSubmit').on('click', function () {
                    debugStep("clicked '.newsSubmit' in attachClickHandlers");
                    var searchText = $('.searchText').val();
                    newsSearch(searchText);
                });
            }
            $('.checkbox').on('click', function () {
                debugStep("clicked '.checkbox' in attachClickHandlers");
                if ($(this).attr('id') == 'allRNSnews') {
                    $('.checkbox').toggleClass('checked');
                } else {
                    $('#allRNSnews').removeClass('checked');
                    $(this).removeClass('checked');
                }
            });
            if (typeof ($('table.IRNewsTool tr th.Header').html()) != "undefined") {
                //
                //  News in a Table structure
                //
                $('td.Data').hover(function () {
                    $(this).parent().find('td').addClass('DataHover');
                }, function () {
                    $(this).parent().find('td').removeClass('DataHover');
                });
                $('.IRNewsModule td.Data').on('click', function () {
                    var storyID = $(this).parent().attr('id');
                    if (!$(this).hasClass('download')) {
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
                    $(this).parent().find('.IRData').addClass('DataHover');
                }, function () {
                    $(this).parent().find('.IRData').removeClass('DataHover');
                });
                $('.IRNewsModule div.IRData').on('click', function () {
                    var storyID = $(this).parent().attr('id');
                    if (!$(this).hasClass('IRDownload')) {
                        // Show news
                        debugStep("window.open... $('.IRNewsModule div.IRData').click");
                        window.open(getNewsArticlePath() + '?solutionID=' + getSolutionID() + '&customerKey=' + getCustomerKeyRequired() + '&storyID=' + storyID + '&language=' + globalActiveLanguage);
                    }
                });
            }
            $("#allRNSnews.checkbox").addClass('checked');
        },
        IRNewsHeadlineModule: function () {
            $('td.Data').on({
                mouseenter: function () {
                    $(this).parent().find('td').addClass('DataHover');
                },
                mouseleave: function () {
                    $(this).parent().find('td').removeClass('DataHover');
                }
            });

            $('.IRNewsHeadlineModule td.Data').on('click', function () {
                var storyID = $(this).parent().attr('id');
                console.log(getCustomerKeyRequired())
                if (!$(this).hasClass('download')) {
                    // Show news
                    debugStep("window.open... $('.IRNewsHeadlineModule td.Data').click");
                    window.open(getNewsArticlePath() + '?solutionID=' + getSolutionID() + '&customerKey=' + getCustomerKeyRequired() + '&storyID=' + storyID + '&language=' + globalActiveLanguage);
                }
            });

            $('.IRNewsHeadlineModule div.Data .Data').click(function () {
                var storyID = $(this).parent().attr('id');
                if (!$(this).hasClass('download')) {
                    // Show news
                    debugStep("window.open... $('.IRNewsHeadlineModule div.Data').click");
                    window.open(getNewsArticlePath() + '?solutionID=' + getSolutionID() + '&customerKey=' + getCustomerKeyRequired() + '&storyID=' + storyID + '&language=' + globalActiveLanguage);
                }
            });
        },
        IRLookupModule: function () {
            var changeListing = '.IRChangeListing';
            if (typeof ($(changeListing).html()) != "undefined") {
                $(changeListing + ' select').on('change', function () {
                    debugStep('clicked IRChangeListing (lookup)');
                    initMomentTimezone();
                    if (typeof (compiledTemplates.menuTemplate_Lookup) == "function") {
                        buildLookupTool(parseInt($(this).val(), compiledTemplates.menuTemplate_Lookup));
                        updateIRChangeListing();
                        attachClickHandlers('IRLookupModule');
                    }
                });
            }
        },
        IRCalcModule: function () {
            var changeListing = '.IRChangeListing';
            if (typeof ($(changeListing).html()) != "undefined") {
                $(changeListing + ' select').on('change', function () {
                    debugStep(' ');
                    debugStep('clicked IRChangeListing (calc)');
                    initMomentTimezone();
                    if (typeof (compiledTemplates.menuTemplate_Calc) == "function") {
                        buildCalcTool(globalChartListingStockData, compiledTemplates.menuTemplate_Calc);
                        updateIRChangeListing();
                        attachClickHandlers('IRCalcModule');
                    }
                });
            }
        }
    };
    if (FeaturesList.IRChartCompare.use) {
        if (!chartEnabledClickHandlers.chartNavigationComparison) {
            if (typeof ($('.IRChartNavigation .IRChartComparison.IRChartComparisonHeader')) == 'object') {
                var chartCompBody = '.IRChartComparison .IRChartComparisonBody';
                $('.IRChartComparisonHeader').click(function () {
                    debugStep("clicked '.IRChartComparisonHeader' in attachClickHandlers");
                    if ($(chartCompBody).css('display') == 'block') {
                        $('.IRChartNavigation .IRChartTAHeader').removeClass('active');
                        $(chartCompBody).css('display', 'none');
                    } else {
                        $(this).parent().addClass('active');
                        IRChartNavigationCloseOpenBodyDivs();
                        $(chartCompBody).css('display', 'block');
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
                                var comparingListPriceAdjust = '.comparisonList_IRChartCurrencyConversionAdjustedPrice';
                                $(comparingListPriceAdjust).css('display', 'block');
                                $(comparingListPriceAdjust + ' span.updateCurrencyConversionAdjustedPrice').on('click', function () {
                                    debugStep("clicked '" + comparingListPriceAdjust + " span.updateCurrencyConversionAdjustedPrice' in attachClickHandlers");
                                    var currencyTo = $(comparingListPriceAdjust + ' select.currencyConversionTo').val();
                                    updateIRChartCurrencyConversion('updateCurrencyConversionAdjustedPrice', currencyTo);
                                });
                                chartEnabledClickHandlers.chartNavigationCurrencyConversionAdjustedPrice = true;
                            }
                        } else { //Todo test data and id variables needs fixing 
                            var type = $(this).data('type');
                            var id = $(this).data('id');
                            var uniqueID = $(this).data('unique');
                            updateComparison(type, id, uniqueID, $(this));
                        }
                    });
                    $('.IRChartNavigationClearComparison').click(function () {
                        debugStep("clicked '.IRChartNavigationClearComparison' in attachClickHandlers");
                        resetIRChart();
                    });
                    $('.IRChartComparisonPlaceholder .ComparisonOff').on('click', function () {
                        debugStep("clicked '.IRChartComparisonPlaceholder .ComparisonOff' in attachClickHandlers");
                        $('#' + $(this).attr('id')).removeClass('active');
                        var type = $(this).data('type');
                        var id = $(this).data('id');
                        var uniqueID = $(this).data('unique');
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
                });
            }
        }

        IRChartNavigationShowHide('IRChartComparisonBody');
    }

    if (FeaturesList.IRChartTA.use) {
        if (!chartEnabledClickHandlers.chartNavigationTA) {
            var chartTaBody = '.IRChartTA .IRChartTABody';
            $('.IRChartTAHeader').click(function () {
                debugStep("clicked '.IRChartTAHeader' in attachClickHandlers");
                if ($(chartTaBody).css('display') == 'block') {

                    $('.IRChartNavigation .IRChartComparison').removeClass('active');
                    //$(this).parent().removeClass('active');
                    $(chartTaBody).css('display', 'none');

                } else {
                    $(this).parent().addClass('active');
                    IRChartNavigationCloseOpenBodyDivs();
                    $(chartTaBody).css('display', 'block');
                }
            });
            if (typeof ($('.IRChartTA #IRChartNavigationClearTA')) == 'object') {
                $('.IRChartTABodyList .basicButtonLook').click(function () {
                    debugStep("clicked '.IRChartTABodyList .basicButtonLook' in attachClickHandlers");
                    updateTechnicalAnalysis($(this).attr('id'));
                });
                $('#IRChartNavigationClearTA').click(function () {
                    debugStep("clicked '.IRChartNavigationClearTA' in attachClickHandlers");
                    resetIRChart();
                });
            }
            chartEnabledClickHandlers.chartNavigationTA = true;
        }
        IRChartNavigationShowHide('IRChartTABody');
    }

    if (FeaturesList.IRChartTechnicalAnalysis.use) {
        if (!chartEnabledClickHandlers.chartNavigationTechnicalAnalysis) {
            var chartTABody = '.IRChartTA .IRChartTABody';
            $('.IRChartTechnicalAnalysisControlsPlaceholder .IRChartTA').on('click', function () {
                debugStep("clicked '.IRChartTechnicalAnalysisControlsPlaceholder .IRChartTA' in attachClickHandlers");
                IRChartTechnicalAnalysis.updateTechnicalAnalysis($(this).attr('id'));
            });
            $('.IRChartTAHeader').click(function () {
                debugStep("clicked '.IRChartTAHeader' in attachClickHandlers");
                if ($(chartTABody).css('display') == 'block') {
                    $('.IRChartNavigation .IRChartComparison').removeClass('active');
                    $(chartTABody).css('display', 'none');
                } else {
                    $(this).parent().addClass('active');
                    IRChartNavigationCloseOpenBodyDivs();
                    $(chartTABody).css('display', 'block');
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

    if (FeaturesList.IRChartTSR.use) {
        if (!chartEnabledClickHandlers.chartNavigationTSR) {
            var chartTsrBody = '.IRChartTSR .IRChartTSRBody';
            var cartTsrClearNav = '.IRChartTSR .IRChartNavigationClearTSR';
            $('.IRChartTSRHeader').on('click', function () {
                debugStep("clicked '.IRChartTSRHeader' in attachClickHandlers");
                if ($(chartTsrBody).css('display') == 'block') {
                    $('.IRChartNavigation .IRChartTSR').removeClass('active');
                    $(chartTsrBody).css('display', 'none');
                } else {
                    $(this).parent().addClass('active');
                    IRChartNavigationCloseOpenBodyDivs();
                    $(chartTsrBody).css('display', 'block');
                }
            });
            if (typeof ($(cartTsrClearNav)) == 'object') {
                $(chartTsrBody + ' .basicButtonLook').click(function () {
                    debugStep("clicked '.IRChartTSRBody .basicButtonLook' in attachClickHandlers");
                    updateTSR($(this).attr('id'));
                });
                $(cartTsrClearNav).on('click', function () {
                    debugStep("clicked '.IRChartNavigationClearTSR' in attachClickHandlers");
                    resetIRChart();
                });
            }
            chartEnabledClickHandlers.chartNavigationTSR = true;
        }
        IRChartNavigationShowHide('IRChartTSRBody');
    }

    if (module in moduleHandlers) {
        moduleHandlers[module]();
    }
}

// Fyunction to get URI valuy for param
function getUriParam(key) { // Returns URL Parameter by the key
    var results = new RegExp('[\?&]' + key + '=([^&#]*)').exec(window.location.href);
    try {
        return results[1];
    }
    catch (err) {
        return 0;
    }
}

// to use in future for finding best match
// getClosestDateIndex2: function (obj, key, picked) {
//     var arr = [];
//     var origArr = [];
//     for (var i = 0; i < obj.length; i++) {
//         arr.push(new Date(obj[i][key]).getTime());
//         origArr.push(new Date(obj[i][key]).getTime());
//     }
//     arr.sort(function (left, right) {
//         return Math.abs(picked - left) - Math.abs(picked - right);
//     });
//     return origArr.indexOf(arr[0]);
// },