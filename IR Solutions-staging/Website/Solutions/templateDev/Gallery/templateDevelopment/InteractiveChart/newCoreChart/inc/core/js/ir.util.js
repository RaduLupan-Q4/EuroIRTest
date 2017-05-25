//
//Modules variables
//

var ModulesList = {
    IRQuoteModule: {
        name: 'IRQuoteModule',
        view: '.IRQuoteModule',
        template: '#IRQuoteTableTemplate',
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
        listView: '.IRLookupTableModule',
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
    },
    IRCustomModule: {
        name: 'IRCustomModule',
        view: '.IRCustomModule',
        template: '#IRCustomModuleTemplate',
        dataUse: ['StockData'],
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
    IRChartCompare: {use: false},
    CurrencyConversion: {use: false},
    IRChartTSR: {use: false},
    IRChartCurrencyConversion: {use: false},
    IRChartFullscreen: {use: false},
    IRChartSettings: {use: false},
    IRCalcTSR: {use: false},
    IRFeatureStockOtherData: {use: false, dataUse: ['FeatureStockOtherData']},
    IRChartOuterTechnicalAnalysis: {use: false},
    IRChartCustomPreventDefault: {use: false},
    IRChartPressReleaseIRChartHeadline: {use: false, dataUse: ['PressReleaseIRChartHeadlineData']},
    IRChartPressRelease: {use: false, dataUse: ['PressReleaseData']}
};

//
//  Triggers
//
var fetchNewsArticleData = false;
var chartEnabledClickHandlers = {
    chartNavigationComparison: false,
    chartNavigationComparisonBodyList: false,
    chartNavigationTA: false,
    chartNavigationTSR: false,
    chartNavigationCC: false,
    chartNavigationTAPlaceholderSpan: false,
    chartNavigationFullscreen: false,
    chartNavigationSettings: false,
    chartNavigationCurrencyConversionAdjustedPrice: false,
    chartNavigationMenu: false
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
    comparison_intraday: 'comparison_intraday',
    ta: 'ta',
    ta_intraday: 'ta_intraday',
    tsr: 'tsr',
    tsr_intraday: 'tsr_intraday'
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

//Global CSS Classes
var IrChartColour = '.IRChartColour';
var IrChartPlace = '.IRChartPlaceholder';
var IrChartMiniquotePlace = '.IRMiniquoteChartPlaceholder';
var IrChartLookupPlace = '.IRChartLookupPlaceholder';
var IrChartCalcPlace = '.IRChartCalcPlaceholder';
var IrChartHtmlMiniPlace = '.IRChartHTMLMiniPlaceholder';
var IrChartTapPlace = '.IRChartTAPlaceholder';
var IrChartTsrpPlace = '.IRChartTSRPlaceholder';
var IrChartComparisonPlace = '.IRChartComparisonPlaceholder';

// Global Arrays
var globalDefaultCurrencyList = ['GBP', 'USD', 'EUR', 'DKK'];
var globalChartListingStockData = [];
var globalChartListingStockDataVolume = [];
var globalChartListingStockDataDates = [];
var globalChartListingStockDataOHLCV = [];
var globalChartListingIntradayDataDates = [];
var globalChartListingIntradayData = [];
var globalChartListingIntradayDataVolume = [];
var globalChartListingIntradayDataOHLCV = [];
var globalListingsExchangeShort = [];

var globalChartPressReleaseIRChartHeadlineDates = [];
var globalChartPressReleaseIRChartHeadlineFlags = [];
var globalChartPressReleaseIRChartHeadlineHeadlines = [];

var globalRNSFilters = [];
var globalChartNewsDates = [];
var globalChartNewsHeadlines = [];
var globalChartNewsHeadlinesFlags = [];

var globalChartComparisonData = [];
var globalChartComparisonNames = [];
var globalChartComparisonSymbols = [];
var globalChartComparisonInChart = [];


var globalDefaultSettings = {
    activeSetType: 'area',
    activeSetAxisType: 'linear'
};
//
//  IRNews
//
var globalNewsPagesInTotal = -1;
var globalNewsEarlyYear = -1;
var IRNewsPaginationActivePage = 1;
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
    chart_ColourMain: '#03A9F4',
    chart_ColourPlotBackground: '#ffffff',
    chart_ColourBackground: '#F9F9F9',
    chart_ColourBorder: '#E9E9E9',
    chart_ColourVolumeBars: '#FF9800',
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
    chart_plusCurrency: [],
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
    paginationShowNumber: 5,
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
initClientStyle();
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
    var lowerCaseArr = pathArr.map(function (value) {
        return value.toLowerCase();
    });
    if ($.inArray('tools', lowerCaseArr) != -1 && lowerCaseArr[0] == 'newsarticlehtml.aspx') { //lower cases to prevent from uppercase mistakes in files
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
// GLOBAL
function initClientStyle() {
    debugStep("initClientStyle");
    //
    //  If clientStyleOverwrite is defined in ir.client.js, colours defined there will be used.
    //
    if (typeof (clientStyleOverwrite) != "undefined") {
        if (clientStyleOverwrite.chart_ColourMain >= 0) {
            clientStyle.chart_ColourMain = clientStyleOverwrite.chart_ColourMain;
        } else if (typeof ($(IrChartColour).css('stroke')) != "undefined") {
            clientStyle.chart_ColourMain = getColor('stroke');
        }

        if (clientStyleOverwrite.chart_ColourVolumeBars >= 0) {
            clientStyle.chart_ColourVolumeBars = clientStyleOverwrite.chart_ColourVolumeBars;
        } else if (typeof ($(IrChartColour).css('fill')) != "undefined") {
            clientStyle.chart_ColourVolumeBars = getColor('fill');
        }

        if (clientStyleOverwrite.chart_ColourPlotBackground >= 0) {
            clientStyle.chart_ColourPlotBackground = clientStyleOverwrite.chart_ColourPlotBackground;
        } else if (typeof ($(IrChartColour).css('color')) != "undefined") {
            clientStyle.chart_ColourPlotBackground = getColor('color');
        }

        if (clientStyleOverwrite.chart_ColourBackground >= 0) {
            clientStyle.chart_ColourBackground = clientStyleOverwrite.chart_ColourBackground;
        } else if (typeof ($(IrChartColour).css('background-color')) != "undefined") {
            clientStyle.chart_ColourBackground = getColor('background-color');
        }

        if (clientStyleOverwrite.chart_ColourBorder >= 0) {
            clientStyle.chart_ColourBorder = clientStyleOverwrite.chart_ColourBorder;
        } else if (typeof ($(IrChartColour).css('border-color')) != "undefined") {
            clientStyle.chart_ColourBorder = getColor('border-color');
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

        if (typeof (clientStyleOverwrite.paginationShowNumber) != "undefined") {
            if (clientStyleOverwrite.paginationShowNumber >= 0) {
                clientStyle.paginationShowNumber = clientStyleOverwrite.paginationShowNumber;
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
        if (typeof (clientStyleOverwrite.chartCurrencyPlus) != "undefined") {
            clientStyle.chart_plusCurrency = clientStyleOverwrite.chartCurrencyPlus;
        }
    }

    globalChartColours = [clientStyle.chart_ColourMain, '#1A237E', '#8BC34A', '#2962FF', '#009688', '#CDDC39', '#3F51B5', '#607D8B', '#455A64', '#0097A7', '#F44336', '#673AB7', '#795548', '#1B5E20', '#827717', '#8BC34A', '#AB47BC', '#00BCD4', '#E91E63', '#FF9800', '#FF5722', '#FFEB3B', '#9E9E9E', '#5D4037', '#E64A19', '#C2185B'];

    if (typeof (clientStyleOverwrite) != "undefined") {
        if (typeof (clientStyleOverwrite.chart_Colours) != "undefined") {
            globalChartColours = clientStyleOverwrite.chart_Colours;
            globalChartColours[0] = clientStyle.chart_ColourMain;
        }
    }
    globalDefaultSettings.activeSetType = clientStyle.chart_DrawMode;

    if (typeof (clientRNSFilters) != "undefined") {
        globalRNSFilters = clientRNSFilters;
    }
}
// GLOBAL
function getColor(prop) {
    var rgbIRChartColour = $(IrChartColour).css(prop).match(/\d+/g);
    return "#" + ((1 << 24) + (Number(rgbIRChartColour[0]) << 16) + (Number(rgbIRChartColour[1]) << 8) + Number(rgbIRChartColour[2])).toString(16).slice(1);
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
// GLOBAL
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
    dAw = clientStyle.formatDate.replace('DD', '%d');
    dAw = dAw.replace('YYYY', '%Y');

    if (dAw.indexOf("MMMM") != -1) {
        dAw = dAw.replace('MMMM', '%B');
    } else if (dAw.indexOf("MMM") != -1) {
        dAw = dAw.replace('MMM', '%b');
    } else {
        dAw = dAw.replace('MM', '%m');
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

    dAw = clientStyle.formatDate.replace('DD', '%d');
    dAw = dAw.replace('YYYY', '%Y');

    if (dAw.indexOf("MMMM") != -1) {
        dAw = dAw.replace('MMMM', '%B');
    } else if (dAw.indexOf("MMM") != -1) {
        dAw = dAw.replace('MMM', '%b');
    } else {
        dAw = dAw.replace('MM', '%m');
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
        dAw = clientStyle.formatDate.replace('DD', '%d');
        dAw = dAw.replace('YYYY', '%Y');

        if (dAw.indexOf("MMMM") != -1) {
            dAw = dAw.replace('MMMM', '%B');
        } else if (dAw.indexOf("MMM") != -1) {
            dAw = dAw.replace('MMM', '%b');
        } else {
            dAw = dAw.replace('MM', '%m');
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

// Tooltips for chart ===================================================================================
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
                dateIndex = getClosestDateIndexForDataArray(globalChartListingStockDataDates[globalActiveListingIndex], date);
                if (dateIndex == -1)
                    debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
            }
            if (dateIndex != -1)
                tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
            break;
        case chartDisplayModes.tsr_intraday:
        case chartDisplayModes.intraday:
            dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
            if (dateIndex == -1) {
                dateIndex = getClosestDateIndexForDataArray(globalChartListingIntradayDataDates[globalActiveListingIndex], date);
                if (dateIndex == -1)
                    debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
            }
            if (dateIndex != -1)
                tooltipStrSub += getTooltipStrSubIntraday(dateIndex);
            break;
        case chartDisplayModes.tsr:
            var TSRDateIndex = IRChartTSRfeature.dividendDatesInChart.indexOf(date);
            if (TSRDateIndex == -1) {
                TSRDateIndex = getClosestDateIndexForDataArray(IRChartTSRfeature.dividendDatesInChart, date);
                if (dateIndex == -1)
                    debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
            }
            if (TSRDateIndex != -1)
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
                dateIndex = getClosestDateIndexForDataArray(globalChartListingStockDataDates[globalActiveListingIndex], date);
                if (dateIndex == -1)
                    debugError("error in updateTooltipDOHLCVN dateIndex = " + dateIndex);
            }
            if (dateIndex != -1)
                tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
            break;
        case chartDisplayModes.tsr_intraday:
        case chartDisplayModes.intraday:
            dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
            if (dateIndex == -1) {
                dateIndex = getClosestDateIndexForDataArray(globalChartListingIntradayDataDates[globalActiveListingIndex], date);
                if (dateIndex == -1)
                    debugError("error in updateTooltipDOHLCVN dateIndex = " + dateIndex);
            }
            if (dateIndex != -1)
                tooltipStrSub += getTooltipStrSubIntraday(dateIndex);
            break;

        case chartDisplayModes.tsr:
            var TSRDateIndex = IRChartTSRfeature.dividendDatesInChart.indexOf(date);
            if (TSRDateIndex == -1) {
                TSRDateIndex = getClosestDateIndexForDataArray(IRChartTSRfeature.dividendDatesInChart, date);
                if (dateIndex == -1)
                    debugError("error in updateTooltipDOHLCVN dateIndex = " + dateIndex);
            }
            if (TSRDateIndex != -1)
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
            dateIndex = getClosestDateIndexForDataArray(globalChartListingStockDataDates[globalActiveListingIndex], date);
            if (dateIndex == -1)
                debugError("error in updateTooltipDOHLCVNPressRelease dateIndex = " + dateIndex);
        }
        if (dateIndex != -1)
            tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
    } else if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
        dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
        if (dateIndex == -1) {
            dateIndex = getClosestDateIndexForDataArray(globalChartListingIntradayDataDates[globalActiveListingIndex], date);
            if (dateIndex == -1)
                debugError("error in updateTooltipDOHLCVNPressRelease dateIndex = " + dateIndex);
        }
        if (dateIndex != -1)
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
    dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
    if (dateIndex == -1) {
        dateIndex = getClosestDateIndexForDataArray(globalChartListingStockDataDates[globalActiveListingIndex], date);
        if (dateIndex == -1)
            debugError("error in updateTooltipLookup dateIndex = " + dateIndex);
    }
    if (dateIndex != -1)
        tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
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
    dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
    if (dateIndex == -1) {
        dateIndex = getClosestDateIndexForDataArray(globalChartListingStockDataDates[globalActiveListingIndex], date);
        if (dateIndex == -1)
            debugError("error in updateTooltipCalc dateIndex = " + dateIndex);
    }
    if (dateIndex != -1)
        tooltipStrSub += getTooltipStrSubHistorical(dateIndex);

    tooltipStr += tooltipStrSub;
    tooltipStr += "</div>";
    return tooltipStr;
}
function updateTooltipDCV(date) {
    debugStep("updateTooltipDCV");
    var dateIndex;
    var tooltipStr = "<div class=\"tooltipHTML\" htmlReadingDirection" + globalHTMLReadingDirection + "\" dir=\"" + globalHTMLReadingDirection.toLowerCase() + "\">";
    switch (globalChartActiveDisplayMode) {
        case chartDisplayModes.historical:
            dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
            if (dateIndex == -1) {
                dateIndex = getClosestDateIndexForDataArray(globalChartListingStockDataDates[globalActiveListingIndex], date);
                if (dateIndex == -1)
                    debugError("error in updateTooltipDCV dateIndex = " + dateIndex);
            }
            if (dateIndex != -1) {
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div>" +
                    "<span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span>" +
                    "<span class=\"subShadow\">" + NumberFormat.decimal1000Zeros(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</span>" +
                    "<span class=\"subContent\">" + NumberFormat.decimal1000Zeros(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</span>" +
                    "</div>";
                tooltipStr += "<div>" +
                    "<span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span>" +
                    "<span class=\"subShadow\">" + NumberFormat.decimal1000(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span>" +
                    "<span class=\"subContent\">" + NumberFormat.decimal1000(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span>" +
                    "</div>";
            }
            break;
        case chartDisplayModes.intraday:
            dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
            if (dateIndex == -1) {
                dateIndex = getClosestDateIndexForDataArray(globalChartListingIntradayDataDates[globalActiveListingIndex], date);
                if (dateIndex == -1)
                    debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
            }
            if (dateIndex != -1) {
                tooltipStr += "<div>" + new moment(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div>" +
                    "<span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span>" +
                    "<span class=\"subShadow\">" + NumberFormat.decimal1000Zeros(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</span>" +
                    "<span class=\"subContent\">" + NumberFormat.decimal1000Zeros(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</span>" +
                    "</div>";
                tooltipStr += "<div>" +
                    "<span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span>" +
                    "<span class=\"subShadow\">" + NumberFormat.decimal1000(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span>" +
                    "<span class=\"subContent\">" + NumberFormat.decimal1000(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span>" +
                    "</div>";
            }
            break;
    }
    tooltipStr += "</div>";
    return tooltipStr;
}
function updateTooltipTechnicalAnalysisDP(date) {
    debugStep("updateTooltipTechnicalAnalysisDP");
    var dateIndex;
    var tooltipStr = "<div class=\"tooltipHtmlTA " + globalChartActiveDisplayMode + "Mode\">";
    if (globalChartActiveDisplayMode == chartDisplayModes.ta_intraday) {
        dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
        if (dateIndex == -1) {
            dateIndex = getClosestDateIndexForDataArray(globalChartListingIntradayDataDates[globalActiveListingIndex], date);
            if (dateIndex == -1)
                debugError("error in updateTooltipTechnicalAnalysisDP dateIndex = " + dateIndex);
        }
        if (dateIndex != -1)
            tooltipStr += getTooltipStrSubIntraday(dateIndex);
    } else {
        dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
        if (dateIndex == -1) {
            dateIndex = getClosestDateIndexForDataArray(globalChartListingStockDataDates[globalActiveListingIndex], date);
            if (dateIndex == -1)
                debugError("error in updateTooltipTechnicalAnalysisDP dateIndex = " + dateIndex);
        }
        if (dateIndex != -1) {
            tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
            tooltipStr += "<div>" +
                "<span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span>" +
                "<span class=\"subContent\">" + NumberFormat.decimal1000Zeros(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</span>" +
                "</div>";
            tooltipStr += "<div>" +
                "<span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span>" +
                "<span class=\"subContent\">" + NumberFormat.decimal1000(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span>" +
                "</div>";
            tooltipStr += "<div class='tooltipSep'></div>";

            for (var i = 0; i < IRChartTAfeature.activeTA.length; i++) {
                dateIndex = IRChartTAfeature.activeTAlistDates[i].indexOf(date);
                if (dateIndex == -1) {
                    dateIndex = getClosestDateIndexForDataArray(IRChartTAfeature.activeTAlistDates[i], date);
                }
                if (IRChartTAfeature.activeTA[i] == 'BB' || IRChartTAfeature.activeTA[i] == 'MAE') {
                    tooltipStr += "<div>" +
                        "<span class=\"subHeader\"><span class=\"colorIndicator color" + IRChartTAfeature.activeTAcolor[i].replace('#', '') + " active\"></span>" + IRChartTAfeature.activeTA[i] + ": </span>" +
                        "<span class=\"subShadow\">" + NumberFormat.decimal1000Zeros(IRChartTAfeature.activeTAlist[i][0][dateIndex][1]) + " " + NumberFormat.decimal1000Zeros(IRChartTAfeature.activeTAlist[i][1][dateIndex][1]) + " " + NumberFormat.decimal1000Zeros(IRChartTAfeature.activeTAlist[i][2][dateIndex][1]) + "</span>" +
                        "<span class=\"subContent\">" + NumberFormat.decimal1000Zeros(IRChartTAfeature.activeTAlist[i][0][dateIndex][1]) + " " + NumberFormat.decimal1000Zeros(IRChartTAfeature.activeTAlist[i][1][dateIndex][1]) + " " + NumberFormat.decimal1000Zeros(IRChartTAfeature.activeTAlist[i][2][dateIndex][1]) + "</span>" +
                        "</div>";
                } else if (IRChartTAfeature.activeTA[i] == 'MACD') {
                    tooltipStr += "<div>" +
                        "<span class=\"subHeader\"><span class=\"colorIndicator color" + IRChartTAfeature.activeTAcolor[i].replace('#', '') + " active\"></span>" + IRChartTAfeature.activeTA[i] + ": </span>" +
                        "<span class=\"subShadow\">" + NumberFormat.decimal1000Zeros(IRChartTAfeature.activeTAlist[i][0][dateIndex][1]) + " " + translations.t_signal + ": " + NumberFormat.decimal1000Zeros(IRChartTAfeature.activeTAlist[i][1][dateIndex][1]) + "</span>" +
                        "<span class=\"subContent\">" + NumberFormat.decimal1000Zeros(IRChartTAfeature.activeTAlist[i][0][dateIndex][1]) + " " + translations.t_signal + ": " + NumberFormat.decimal1000Zeros(IRChartTAfeature.activeTAlist[i][1][dateIndex][1]) + "</span>" +
                        "</div>";
                } else {
                    tooltipStr += "<div>" +
                        "<span class=\"subHeader\"><span class=\"colorIndicator color" + IRChartTAfeature.activeTAcolor[i].replace('#', '') + " active\"></span>" + IRChartTAfeature.activeTA[i] + ": </span>" +
                        "<span class=\"subShadow\">" + NumberFormat.decimal1000Zeros(IRChartTAfeature.activeTAlist[i][dateIndex][1]) + "</span>" +
                        "<span class=\"subContent\">" + NumberFormat.decimal1000Zeros(IRChartTAfeature.activeTAlist[i][dateIndex][1]) + "</span>" +
                        "</div>";
                }
            }
        }
    }
    tooltipStr += "</div>";
    return tooltipStr;
}
function updateTooltipComparisonDC(date) {
    debugStep("updateTooltipComparisonDC");
    var pixelCasesComparison = [0, 5, -9, -23, -37, -52, -65, -79, -93, -107, -121, -135, -149, -162, -179];
    var dateIndex;
    var amountOfComparisonsInChart = 0;
    for (var i = 0; i < globalChartComparisonInChart.length; i++) {
        amountOfComparisonsInChart += globalChartComparisonInChart[i];
    }
    var tooltipStr = "<div class=\"tooltipHtmlComparison " + globalChartActiveDisplayMode + "Mode\" style=\"top: " + pixelCasesComparison[amountOfComparisonsInChart < pixelCasesComparison.length ? amountOfComparisonsInChart : 0] + "px\">";

    if (globalChartActiveDisplayMode == chartDisplayModes.comparison_intraday) {
        dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
        if (dateIndex == -1) {
            dateIndex = getClosestDateIndexForDataArray(globalChartListingIntradayDataDates[globalActiveListingIndex], date);
            if (dateIndex == -1)
                debugError("error in updateTooltipComparisonDC dateIndex = " + dateIndex);
        }
        if (dateIndex != -1)
            tooltipStr += getTooltipStrSubIntraday(dateIndex);
    } else {
        dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
        if (dateIndex == -1) {
            dateIndex = getClosestDateIndexForDataArray(globalChartListingStockDataDates[globalActiveListingIndex], date);
            if (dateIndex == -1)
                debugError("error in updateTooltipComparisonDC dateIndex = " + dateIndex);
        }
        if (dateIndex != -1) {
            tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
            tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator active\" style=\"border-left-color: " + globalChartColours[0] + ";\"></span>" + globalRawStockData[globalActiveListingIndex].symbol + ": </span> <span class=\"subContent\">" + NumberFormat.decimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
            for (var j = 0; j < globalChartComparisonData[0].length; j++) {
                if (globalChartComparisonInChart[j + 1] == 1) {
                    tooltipStr += "<div>" +
                        "<span class=\"subHeader\"><span class=\"colorIndicator color" + globalChartColours[j + 1].replace('#', '') + " active\"></span>" + globalChartComparisonSymbols[j] + ": </span> " +
                        "<span class=\"subShadow\">" + NumberFormat.decimal1000Zeros(globalChartComparisonData[0][j][dateIndex][1]) + "</span>" +
                        "<span class=\"subContent\">" + NumberFormat.decimal1000Zeros(globalChartComparisonData[0][j][dateIndex][1]) + "</span>" +
                        "</div>";
                }
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

// 'subShadow' class is used for making tooltip flexible and adabtive to the content
function getTooltipStrSubHistorical(dateIndex) {
    var tooltipStr = "";
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideDate) {
        tooltipStr += "<div class=\"IRChartTooltipDate\">" + formatTooltipDate(dateIndex, globalChartListingStockDataDates) + "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideOpen) {
        tooltipStr += "<div class=\"IRChartTooltipOpen\">" +
            "<span class=\"subHeader\">" + getOHLCfromTranslations('o') + "</span>" +
            "<span class=\"subShadow\">" + NumberFormat.decimal1000Zeros(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span>" +
            "<span class=\"subContent\">" + NumberFormat.decimal1000Zeros(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span>" +
            "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideHigh) {
        tooltipStr += "<div class=\"IRChartTooltipHigh\">" +
            "<span class=\"subHeader\">" + getOHLCfromTranslations('h') + "</span>" +
            "<span class=\"subShadow\">" + NumberFormat.decimal1000Zeros(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</span>" +
            "<span class=\"subContent\">" + NumberFormat.decimal1000Zeros(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</span>" +
            "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideLow) {
        tooltipStr += "<div class=\"IRChartTooltipLow\">" +
            "<span class=\"subHeader\">" + getOHLCfromTranslations('l') + "</span>" +
            "<span class=\"subShadow\">" + NumberFormat.decimal1000Zeros(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</span>" +
            "<span class=\"subContent\">" + NumberFormat.decimal1000Zeros(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</span>" +
            "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideClose) {
        tooltipStr += "<div class=\"IRChartTooltipClose\">" +
            "<span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span>" +
            "<span class=\"subShadow\">" + NumberFormat.decimal1000Zeros(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</span>" +
            "<span class=\"subContent\">" + NumberFormat.decimal1000Zeros(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</span>" +
            "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideVolume) {
        tooltipStr += "<div class=\"IRChartTooltipVolume\">" +
            "<span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span>" +
            "<span class=\"subShadow\">" + NumberFormat.decimal1000(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span>" +
            "<span class=\"subContent\">" + NumberFormat.decimal1000(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span>" +
            "</div>";
    }
    return tooltipStr;
}
function getTooltipStrSubIntraday(dateIndex) {
    var tooltipStr = "";
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideDate) {
        tooltipStr += "<div class=\"IRChartTooltipDate\">" + formatTooltipDateTime(dateIndex, globalChartListingIntradayDataOHLCV) + "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideOpen) {
        tooltipStr += "<div class=\"IRChartTooltipOpen\">" +
            "<span class=\"subHeader\">" + getOHLCfromTranslations('o') + "</span>" +
            "<span class=\"subShadow\">" + NumberFormat.decimal1000Zeros(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span>" +
            "<span class=\"subContent\">" + NumberFormat.decimal1000Zeros(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span>" +
            "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideHigh) {
        tooltipStr += "<div class=\"IRChartTooltipHigh\">" +
            "<span class=\"subHeader\">" + getOHLCfromTranslations('h') + "</span>" +
            "<span class=\"subShadow\">" + NumberFormat.decimal1000Zeros(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</span>" +
            "<span class=\"subContent\">" + NumberFormat.decimal1000Zeros(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</span>" +
            "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideLow) {
        tooltipStr += "<div class=\"IRChartTooltipLow\">" +
            "<span class=\"subHeader\">" + getOHLCfromTranslations('l') + "</span>" +
            "<span class=\"subShadow\">" + NumberFormat.decimal1000Zeros(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</span>" +
            "<span class=\"subContent\">" + NumberFormat.decimal1000Zeros(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</span>" +
            "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideClose) {
        tooltipStr += "<div class=\"IRChartTooltipClose\">" +
            "<span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span>" +
            "<span class=\"subShadow\">" + NumberFormat.decimal1000Zeros(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</span>" +
            "<span class=\"subContent\">" + NumberFormat.decimal1000Zeros(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</span>" +
            "</div>";
    }
    if (!globalChartUseCustomTooltipContent || !clientStyle.chart_TooltipHideVolume) {
        tooltipStr += "<div class=\"IRChartTooltipVolume\">" +
            "<span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span>" +
            "<span class=\"subShadow\">" + NumberFormat.decimal1000(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span>" +
            "<span class=\"subContent\">" + NumberFormat.decimal1000(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span>" +
            "</div>";
    }
    return tooltipStr;
}
function getTooltipStrSubTSR(dateIndex) {
    var tooltipStr = "";
    tooltipStr += "<div class=\"IRChartTooltipDate\">" + new moment(IRChartTSRfeature.dividendDatesInChart[dateIndex]).format(clientStyle.formatDate) + "</div>";
    tooltipStr += "<div class=\"IRChartTooltipClose\">" +
        "<span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span>" +
        "<span class=\"subShadow\">" + NumberFormat.decimal1000Zeros(globalChartListingStockData[globalActiveListingIndex][dateIndex][1]) + "</span>" +
        "<span class=\"subContent\">" + NumberFormat.decimal1000Zeros(globalChartListingStockData[globalActiveListingIndex][dateIndex][1]) + "</span>" +
        "</div>";
    tooltipStr += "<div class='tooltipSep'></div>";
    for (var i = 0; i < IRChartTSRfeature.activeTSR.length; i++) {
        tooltipStr += "<div>" +
            "<span class=\"subHeader\">" +
            "<span class=\"colorIndicator color" + IRChartTSRfeature.activeTSRcolor[i].replace('#', '') + " active\"></span>" + (IRChartTSRfeature.activeTSR[i] == 'dividendSimpleData' ? translations.t_tsr_simple : translations.t_tsr_reinvest).replace("TSR", "") + ": </span>" +
            "<span class=\"subShadow\">" + NumberFormat.decimal1000Zeros(IRChartTSRfeature[IRChartTSRfeature.activeTSR[i]][dateIndex][1]) + "</span>" +
            "<span class=\"subContent\">" + NumberFormat.decimal1000Zeros(IRChartTSRfeature[IRChartTSRfeature.activeTSR[i]][dateIndex][1]) + "</span>" +
            "</div>";
    }
    tooltipStr += "<div class='tooltipSep'></div>";
    tooltipStr += "<div class=\"IRChartTooltipVolume\">" +
        "<span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span>" +
        "<span class=\"subShadow\">" + NumberFormat.decimal1000(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span>" +
        "<span class=\"subContent\">" + NumberFormat.decimal1000(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span>" +
        "</div>";
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
    weekOut = weekOut.capitalizeFirstLetter();
    return weekOut;
}
// #end of chart tooltip

function updateChartNavBarRange(module) { //Todo try to check if the switch can be merged
    debugStep("updateChartNavBarRange");
    if (module == 'IRChartHTMLModule' && typeof ($('.chartChangePeriod')) != "undefined") {
        $('.chartChangePeriod div, .IRChartChangePeriod div').on('click', function () {
            var days = -1;
            var hours = -1;
            var e = $(this).data('timemode');
            if (e == 'd1' || e == 'd5') {
                hours = periodSelector(e);
            } else {
                days = periodSelector(e);
            }
            updateActiveChartNavBarRangePeriod(e);
            if (days > 0) {
                stateNewHistoricalPeriodSelected(days);
            }
            if (hours > 0) {
                stateNewIntradayPeriodSelected(hours);
            }
        });
    } else if (module == 'IRChartModule' && typeof ($('.chartChangePeriod')) != "undefined") {
        $('.chartChangePeriod div, .IRChartChangePeriod div').on('click', function () {
            globalChartDom.showLoading("Loading..."); // TODO make it in translations
            var days = -1;
            var hours = -1;
            var e = $(this).data('timemode');
            globalActivePeriod = e;
            if (e == 'd1' || e == 'd5') {
                hours = periodSelector(e);
            } else {
                days = periodSelector(e);
            }

            updateActiveChartNavBarRangePeriod(e);
            if (days > 0) {
                if (globalChartActiveDisplayMode == chartDisplayModes.comparison_intraday) {
                    IRChartComparisonFeature.changeBackToHistorical(days);
                } else if (globalChartActiveDisplayMode == chartDisplayModes.ta_intraday) {
                    IRChartTAfeature.changeBackToHistorical(days);
                } else if (globalChartActiveDisplayMode == chartDisplayModes.tsr_intraday) {
                    IRChartTSRfeature.changeBackToHistorical(days);
                } else {
                    stateNewHistoricalPeriodSelected(days);
                }
            }
            if (hours > 0) {
                if (globalChartActiveDisplayMode == chartDisplayModes.comparison) {
                    IRChartComparisonFeature.changeToIntraday(hours);
                } else if (globalChartActiveDisplayMode == chartDisplayModes.ta) {
                    IRChartTAfeature.changeToIntraday(hours);
                } else if (globalChartActiveDisplayMode == chartDisplayModes.tsr) {
                    IRChartTSRfeature.changeToIntraday(hours);
                } else {
                    stateNewIntradayPeriodSelected(hours);
                }
            }
            globalChartDom.hideLoading();
        });
    }
}
function updateActiveChartNavBarRangePeriod(period) {
    debugStep("updateActiveChartNavBarRangePeriod");
    $('div.chartChangePeriod div').removeClass('activePeriod');
    $('div.chartChangePeriod div[data-timemode="' + period + '"]').addClass('activePeriod');
    $('div.IRChartChangePeriod div').removeClass('activePeriod');
    $('div.IRChartChangePeriod div[data-timemode="' + period + '"]').addClass('activePeriod');

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
            fromDate.add(-period, 'days');
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

// Global function to find closest index in date array (date array, date) -> index
function getClosestDateIndexForDataArray(dataArr, unixDate) {
    var iterations = 0;
    for (var i = 0; i < dataArr.length; i++) {
        if (unixDate < dataArr[i]) {
            iterations = i == 0 ? 0 : i - 1;
            break
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

    var searchFromDate = new Date(moment((parseInt(searchFromMonth) + 1) + ' ' + searchFromYear, 'MM YYYY').format('MM/DD/YYYY'));
    var searchToDate = new Date(moment((parseInt(searchToMonth) + 1) + " " + searchToYear, 'MM YYYY').add(1, 'month').format('MM/DD/YYYY'));

    //  Traverse each news entry (Timestamp, Headline, Download)
    if (typeof ($('div.IRNewsTool .IRHeaderGroup .IRHeader').html()) != "undefined") {
        //  News in a Div structure
        $('div.IRDataGroup').each(function () {
            var newsFilters = $(this).find('.IRTitle').data('newstitle');
            var newsHeadlie = $(this).find('.IRTitle').html().toLowerCase();

            var dateFound = $(this).find('.IRDate').data('newsdate').split('-');
            var yearFound = dateFound[0];
            var monthFound = getMonthFromString(dateFound[1]);
            var newsDate = new Date(moment((parseInt(monthFound)) + " " + yearFound, 'MM YYYY').format('MM/DD/YYYY'));

            //  Periond filters
            if (newsDate < searchFromDate) {
                $(this).addClass('hide');
            }
            if (newsDate >= searchToDate) {
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
            var newsFilters = $(this).find('.IRTitle').data('newstitle');
            var newsHeadlie = $(this).find('.IRTitle').html().toLowerCase();

            var newsDateArr = $(this).find('.IRDate').data('newsdate').split('-');
            var yearFound = newsDateArr[0];
            var monthFound = getMonthFromString(newsDateArr[1]);
            var newsDate = new Date(moment((parseInt(monthFound)) + " " + yearFound, 'MM YYYY').format('MM/DD/YYYY'));

            //  Periond filters
            if (newsDate < searchFromDate) {
                $(this).addClass('hide');
            }
            if (newsDate >= searchToDate) {
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
    applyIRNewsPagination();
}

function getMonthFromString(mon) {
    if (mon.length === 3)
        return moment(mon, 'MMM').format('MM');
    else if (mon.length < 3)
        return moment(mon, 'MM').format('MM');
    else if (mon.length > 3)
        return moment(mon, 'MMMM').format('MM');
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


function applyIRNewsPagination() {
    if (clientStyle.paginationShowNumber > 0) {
        $('.IRNewsPaginationPageNew, .IRNewsPageNumber').on('click', function () {
            if ($(this).hasClass('IRNewsPaginationPageNext') && !$(this).hasClass('inactive')) {
                updateIRNewsPagination((parseInt(IRNewsPaginationActivePage + 1)));
            } else if ($(this).hasClass('IRNewsPaginationPagePrev') && !$(this).hasClass('inactive')) {
                updateIRNewsPagination((parseInt(IRNewsPaginationActivePage - 1)));
            } else if (!$(this).hasClass('inactive')) {
                updateIRNewsPagination(parseInt($(this).data('page')));
            }
        });
    }
}

function updateIRNewsPagination(page) {
    var currentPage;
    currentPage = IRNewsPaginationActivePage = page;

    setNewsActivePage(IRNewsPaginationActivePage);

    var minPage = (currentPage - 2);
    var maxPage = (currentPage + 2);

    $('.IRNewsPageNumber').removeClass('active');
    $('.IRNewsPageNumber.IRNewsPageNumber' + currentPage).addClass('active');
    $('.IRNewsPaginationPagePrev, .IRNewsPaginationPageNext').removeClass('inactive');
    //
    if (maxPage <= clientStyle.paginationShowNumber) {
        maxPage = clientStyle.paginationShowNumber;
    } else {
        $('.IRNewsPaginationPageNext').removeClass('inactive');
    }

    if (minPage >= globalNewsPagesInTotal - clientStyle.paginationShowNumber) {
        minPage = globalNewsPagesInTotal - clientStyle.paginationShowNumber;
    } else {
        $('.IRNewsPaginationPagePrev').removeClass('inactive');
    }

    if (maxPage <= clientStyle.paginationShowNumber) {
        if (currentPage == 1) {
            $('.IRNewsPaginationPagePrev').addClass('inactive');
        }
    }

    if (currentPage != 1) {
        $('.IRNewsPaginationPagePrev').removeClass('inactive');
    }
    if (currentPage != globalNewsPagesInTotal) {
        $('.IRNewsPaginationPageNext').removeClass('inactive');
    }
    if (minPage >= globalNewsPagesInTotal - clientStyle.paginationShowNumber) {

        if (currentPage == globalNewsPagesInTotal) {
            $('.IRNewsPaginationPageNext').addClass('inactive');
        }
    }
    for (var i = 1; i <= globalNewsPagesInTotal; i++) {
        if (i < minPage) {
            $('.IRNewsPageNumber' + i).removeClass('hiddenPage').addClass('hiddenPage');
        }
        else if (i > maxPage) {
            $('.IRNewsPageNumber' + i).removeClass('hiddenPage').addClass('hiddenPage');
        } else {
            $('.IRNewsPageNumber' + i).removeClass('hiddenPage');
        }
    }
}

//
//  Chart
//
function IRChartNavigationCloseOpenBodyDivs() {
    $('.IRChartComparisonBody, .IRChartTABody, .IRChartTSRBody, .IRChartCCBody, .IRChartSettingsBody').css('display', 'none');
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
                        $('.IRChartMenuTrigger').removeClass('icon-arrow');

                    });
                }
            }, 500);
        }
    });
}
function IRChartNavigationHideAll() {
    if (typeof ($('.IRChartMenuTrigger')) == 'object') {
        $('.IRChartMenuTriggerBody, .IRChartTABody, .IRChartComparisonBody, .IRChartTSRBody, .IRChartCCBody, .IRChartSettingsBody').css('display', 'none');
    }
}

function IRChartEventSendExtremes(extremes) {
    $('.IRChartDomFromDate').html(Highcharts.dateFormat('%Y-%m-%d', extremes.userMin));
    $('.IRChartDomToDate').html(Highcharts.dateFormat('%Y-%m-%d', extremes.userMax));
    globalChartFromDate = Highcharts.dateFormat('%Y-%m-%d', extremes.userMin);
    globalChartToDate = Highcharts.dateFormat('%Y-%m-%d', extremes.userMax);
}

//
//  Chart features ========================================================================================
//
// TA Chart feature
var IRChartTAfeature = {
    list: {
        SimpleMovingAverage: {
            type: "SimpleMovingAverage",
            name: "Simple Moving Average",
            short: "SMA",
            nb: {period: 10},
            cat: "indicator"
        },
        ExponentialMovingAverage: {
            type: "ExponentialMovingAverage",
            name: "Exponential Moving Average",
            short: "EMA",
            nb: {period: 10},
            cat: "indicator"
        },
        BolingerBands: {
            type: "BolingerBands",
            name: "Bolinger Bands",
            short: "BB",
            nb: {period: 20, k: 2},
            cat: "indicator"
        },
        MovingAverageEnvelope: {
            type: "MovingAverageEnvelope",
            name: "Moving Average Envelope",
            short: "MAE",
            nb: {period: 10, stray: 1},
            radio: ["t_simple_moving_average", "t_exponential_moving_average"],
            cat: "indicator"
        },
        ParabolicSAR: {
            type: "ParabolicSAR",
            name: "Parabolic SAR",
            short: "PS",
            nb: {acceleration: 0.02},
            cat: "indicator"
        },
        MovingAverageConvergenceDivergence: {
            type: "MovingAverageConvergenceDivergence",
            name: "Moving Average Convergence Divergence",
            short: "MACD",
            nb: {short: 12, long: 26, signal: 9},
            cat: "indicator"
        },
        CommodityChannelIndex: {
            type: "CommodityChannelIndex",
            name: "Commodity Channel Index",
            short: "CCI",
            nb: {period: 10},
            cat: "oscillator"
        },
        DirectionalMovementIndex: {
            type: "DirectionalMovementIndex",
            name: "Directional Movement Index",
            short: "DMI",
            nb: {period: 14},
            cat: "oscillator"
        },
        Momentum: {type: "Momentum", name: "Momentum", short: "Mom", nb: {period: 10}, cat: "oscillator"},
        MoneyFlowIndex: {
            type: "MoneyFlowIndex",
            name: "Money Flow Index",
            short: "MFI",
            nb: {period: 14},
            cat: "oscillator"
        },
        RateOfChange: {type: "RateOfChange", name: "Rate Of Change", short: "RoC", nb: {period: 15}, cat: "oscillator"},
        RelativeStrengthIndex: {
            type: "RelativeStrengthIndex",
            name: "Relative Strength Index",
            short: "RSI",
            nb: {period: 14},
            cat: "oscillator"
        },
        WilliamsPercentR: {
            type: "WilliamsPercentR",
            name: "Williams Percent R",
            short: "W",
            nb: {period: 10},
            cat: "oscillator"
        }
    },
    stockDataTA: [],
    stockDataTADates: [],
    activeTA: [],
    activeTAlist: [],
    activeTAlistDates: [],
    activeTAcolor: [],
    activeTAdual: [],
    activeTAperiod: [],
    updateTechnicalAnalysis: function (id, color, period) {
        debugStep("updateTechnicalAnalysis(" + id + ")");
        if (globalChartActiveDisplayMode == chartDisplayModes.ta_intraday) {
            globalActivePeriod = 'y1';
            updateActiveChartNavBarRangePeriod(globalActivePeriod);
            IRChartTAfeature.changeBackToHistorical(365)
        } else if (globalChartActiveDisplayMode != chartDisplayModes.ta) {
            this.activeTA = [];
            this.activeTAlist = [];
            this.activeTAcolor = [];
            this.activeTAdual = [];
            this.activeTAlistDates = [];
            redrawIRChartInModeTA();
        }
        globalChartDom.showLoading("Loading..."); // TODO make it in translations
        switch (id) {
            case "BolingerBands":
                RequestData.analysisBollingerBands(clientStyle.amountOfHistoricalYears, period[0], period[1]);
                IRChartTAfeature.applyAnalysis("BB", color, period);
                break;

            case "MovingAverageEnvelope":
                if (period[2] == IRChartTAfeature.list.MovingAverageEnvelope.radio[0])
                    RequestData.analysisMovingAverageEnvelopeSimple(clientStyle.amountOfHistoricalYears, period[0], period[1]);
                else
                    RequestData.analysisMovingAverageEnvelopeExponential(clientStyle.amountOfHistoricalYears, period[0], period[1]);
                IRChartTAfeature.applyAnalysis("MAE", color, period);
                break;

            case "ParabolicSAR":
                RequestData.analysisParabolicSar(clientStyle.amountOfHistoricalYears, period[0]);
                IRChartTAfeature.applyAnalysis("PS", color, period);
                break;

            case "MovingAverageConvergenceDivergence":
                RequestData.analysisMovingAverageConvergenceDivergence(clientStyle.amountOfHistoricalYears, period[0], period[1], period[2]);
                IRChartTAfeature.applyAnalysis("MACD", color, period);
                break;

            case "CommodityChannelIndex":
                RequestData.analysisCommodityChannelIndex(clientStyle.amountOfHistoricalYears, period[0]);
                IRChartTAfeature.applyAnalysis("CCI", color, period);
                break;

            case "DirectionalMovementIndex":
                RequestData.analysisDirectionalMovementIndex(clientStyle.amountOfHistoricalYears, period[0]);
                IRChartTAfeature.applyAnalysis("DMI", color, period);
                break;

            case "ExponentialMovingAverage":
                RequestData.analysisExponentialMovingAverage(clientStyle.amountOfHistoricalYears, period[0]);
                IRChartTAfeature.applyAnalysis("EMA", color, period);
                break;

            case "Momentum":
                RequestData.analysisMomentum(clientStyle.amountOfHistoricalYears, period[0]);
                IRChartTAfeature.applyAnalysis("Mom", color, period);
                break;

            case "MoneyFlowIndex":
                RequestData.analysisMoneyFlowIndex(clientStyle.amountOfHistoricalYears, period[0]);
                IRChartTAfeature.applyAnalysis("MFI", color, period);
                break;

            case "RateOfChange":
                RequestData.analysisRateOfChange(clientStyle.amountOfHistoricalYears, period[0]);
                IRChartTAfeature.applyAnalysis("RoC", color, period);
                break;

            case "RelativeStrengthIndex":
                RequestData.analysisRelativeStrengthIndex(clientStyle.amountOfHistoricalYears, period[0]);
                IRChartTAfeature.applyAnalysis("RSI", color, period);
                break;

            case "SimpleMovingAverage":
                RequestData.analysisSimpleMovingAverage(clientStyle.amountOfHistoricalYears, period[0]);
                IRChartTAfeature.applyAnalysis("SMA", color, period);
                break;

            case "WilliamsPercentR":
                RequestData.analysisWilliamsPercentR(clientStyle.amountOfHistoricalYears, period[0]);
                IRChartTAfeature.applyAnalysis("W", color, period);
                break;

        }
    },
    applyAnalysis: function (TAShort, color, period) {
        if (IRChartTAfeature.activeTA.indexOf(TAShort) == -1) {
            switch (TAShort) {
                case "BB":
                    $.when(ResponseData.requestAnalysisBollingerBands).done(function (dataTA) {
                        IRChartTAfeature.applyTripleAnalysisToChart(dataTA, TAShort, color, period);
                    });
                    break;
                case "MAE":
                    if (period[2] == IRChartTAfeature.list.MovingAverageEnvelope.radio[0])
                        $.when(ResponseData.requestAnalysisMovingAverageEnvelopeSimple).done(function (dataTA) {
                            period[2] = translations[period[2].replace("_moving_average", "")];
                            IRChartTAfeature.applyTripleAnalysisToChart(dataTA, TAShort, color, period);
                        });
                    else
                        $.when(ResponseData.requestAnalysisMovingAverageEnvelopeExponential).done(function (dataTA) {
                            period[2] = translations[period[2].replace("_moving_average", "")];
                            IRChartTAfeature.applyTripleAnalysisToChart(dataTA, TAShort, color, period);
                        });
                    break;
                case "PS":
                    $.when(ResponseData.requestAnalysisParabolicSar).done(function (dataTA) {
                        IRChartTAfeature.applyDottedAnalysisToChart(dataTA, TAShort, color, period);
                    });
                    break;
                case "MACD":
                    $.when(ResponseData.requestAnalysisMovingAverageConvergenceDivergence).done(function (dataTA) {
                        IRChartTAfeature.applyDoubleAnalysisToChart(dataTA, TAShort, color, period);
                    });
                    break;
                case "SMA":
                    $.when(ResponseData.requestAnalysisSimpleMovingAverageData).done(function (dataTA) {
                        IRChartTAfeature.applyAnalysisToChart(dataTA, TAShort, color, 'single', period);
                    });
                    break;
                case "EMA":
                    $.when(ResponseData.requestAnalysisExponentialMovingAverageData).done(function (dataTA) {
                        IRChartTAfeature.applyAnalysisToChart(dataTA, TAShort, color, 'single', period);
                    });
                    break;
                case "CCI":
                    $.when(ResponseData.requestAnalysisCommodityChannelIndexData).done(function (dataTA) {
                        IRChartTAfeature.applyAnalysisToChart(dataTA, TAShort, color, 'dual', period);
                    });
                    break;
                case "DMI":
                    $.when(ResponseData.requestAnalysisDirectionalMovementIndexData).done(function (dataTA) {
                        IRChartTAfeature.applyAnalysisToChart(dataTA, TAShort, color, 'dual', period);
                    });
                    break;
                case "Mom":
                    $.when(ResponseData.requestAnalysisMomentumData).done(function (dataTA) {
                        IRChartTAfeature.applyAnalysisToChart(dataTA, TAShort, color, 'dual', period);
                    });
                    break;
                case "MFI":
                    $.when(ResponseData.requestAnalysisMoneyFlowIndexData).done(function (dataTA) {
                        IRChartTAfeature.applyAnalysisToChart(dataTA, TAShort, color, 'dual', period);
                    });
                    break;
                case "RoC":
                    $.when(ResponseData.requestAnalysisRateOfChangeData).done(function (dataTA) {
                        IRChartTAfeature.applyAnalysisToChart(dataTA, TAShort, color, 'dual', period);
                    });
                    break;
                case "RSI":
                    $.when(ResponseData.requestAnalysisRelativeStrengthIndexData).done(function (dataTA) {
                        IRChartTAfeature.applyAnalysisToChart(dataTA, TAShort, color, 'dual', period);
                    });
                    break;
                case "W":
                    $.when(ResponseData.requestAnalysisWilliamsPercentRData).done(function (dataTA) {
                        IRChartTAfeature.applyAnalysisToChart(dataTA, TAShort, color, 'dual', period);
                    });
                    break;
            }
            IRChartTAfeature.activeTA.push(TAShort);
            IRChartTAfeature.activeTAperiod.push(period);
        }
    },
    removeThisTechnicalAnalysis: function (id) {
        switch (id) {
            case "BolingerBands":
                IRChartTAfeature.removeAnalysisFromChart("BB");
                break;

            case "MovingAverageEnvelope":
                IRChartTAfeature.removeAnalysisFromChart("MAE");
                break;

            case "ParabolicSAR":
                IRChartTAfeature.removeAnalysisFromChart("PS");
                break;

            case "MovingAverageConvergenceDivergence":
                IRChartTAfeature.removeAnalysisFromChart("MACD");
                break;

            case "CommodityChannelIndex":
                IRChartTAfeature.removeAnalysisFromChart("CCI");
                break;

            case "DirectionalMovementIndex":
                IRChartTAfeature.removeAnalysisFromChart("DMI");
                break;

            case "ExponentialMovingAverage":
                IRChartTAfeature.removeAnalysisFromChart("EMA");
                break;

            case "Momentum":
                IRChartTAfeature.removeAnalysisFromChart("Mom");
                break;

            case "MoneyFlowIndex":
                IRChartTAfeature.removeAnalysisFromChart("MFI");
                break;

            case "RateOfChange":
                IRChartTAfeature.removeAnalysisFromChart("RoC");
                break;

            case "RelativeStrengthIndex":
                IRChartTAfeature.removeAnalysisFromChart("RSI");
                break;

            case "SimpleMovingAverage":
                IRChartTAfeature.removeAnalysisFromChart("SMA");
                break;

            case "WilliamsPercentR":
                IRChartTAfeature.removeAnalysisFromChart("W");
                break;

        }
    },
    applyAnalysisToChart: function (dataTA, TAShort, color, TAtype, period) {
        IRChartTAfeature.stockDataTA = [];
        IRChartTAfeature.stockDataTADates = [];
        for (var q = 0; q < dataTA.data.length; q++) {
            IRChartTAfeature.stockDataTA.push([getUnixFromDate(dataTA.data[q].date), dataTA.data[q].result]);
            IRChartTAfeature.stockDataTADates.push(getUnixFromDate(dataTA.data[q].date));
        }
        drawPlotLineToChart();
        if (TAtype == 'dual') {
            IRChartTAfeature.activeTAdual.push(TAShort);
            var percHeightMain = 100 - (15 * IRChartTAfeature.activeTAdual.length);

            globalChartDom.yAxis[0].update({
                top: '0%',
                height: percHeightMain + '%'
            });
            globalChartDom.yAxis[1].update({
                top: percHeightMain / 2 + '%',
                height: percHeightMain / 2 + '%'
            });
            globalChartDom.addAxis({
                id: TAShort,
                title: '',
                visible: true,
                opposite: true,
                showFirstLabel: true,
                showLastLabel: false,
                startOnTick: true,
                endOnTick: true,
                top: percHeightMain + '%',
                height: '15%',
                offset: '15%'
            });

            globalChartDom.addSeries({
                data: IRChartTAfeature.stockDataTA,
                color: color,
                yAxis: globalChartDom.yAxis.length - 1,
                name: TAShort,
                visible: true,
                linkedTo: 0,
                type: 'line',
                zIndex: 2
            });
        } else {
            globalChartDom.addSeries({
                data: IRChartTAfeature.stockDataTA,
                color: color,
                name: TAShort,
                yAxis: 0,
                visible: true,
                linkedTo: 0,
                type: 'line',
                zIndex: 2
            }, false, 0);
        }
        IRChartTAfeature.activeTAlist.push(IRChartTAfeature.stockDataTA);
        IRChartTAfeature.activeTAlistDates.push(IRChartTAfeature.stockDataTADates);
        IRChartTAfeature.activeTAcolor.push(color);
        globalChartDom.redraw();
        var numb = '';
        if (typeof period != 'undefined') {
            numb = '(' + period + ')';
        }
        var activeTAhtml = $(IrChartTapPlace).html();
        activeTAhtml += '<div class="color' + color.replace('#', '') + ' active" data-ta="' + TAShort + '" style="display: block;">';
        activeTAhtml += '<span>' + TAShort + ' ' + numb + '</span>';
        activeTAhtml += '</div>';

        $(IrChartTapPlace).html(activeTAhtml);
        globalChartDom.hideLoading();
    },
    applyDoubleAnalysisToChart: function (dataTA, TAShort, color, period) {
        var TAArrayForChart = [], signal = [];
        $.each(dataTA.data, function (listingIndex, item) {
            TAArrayForChart.push([getUnixFromDate(item.date), item.macd]);
            signal.push([getUnixFromDate(item.date), item.signal]);
            IRChartTAfeature.stockDataTADates.push(getUnixFromDate(item.date));
        });
        IRChartTAfeature.stockDataTA = [TAArrayForChart, signal];
        drawPlotLineToChart();
        IRChartTAfeature.activeTAdual.push(TAShort);
        var percHeightMain = 100 - (15 * IRChartTAfeature.activeTAdual.length);

        globalChartDom.yAxis[0].update({
            top: '0%',
            height: percHeightMain + '%'
        });
        globalChartDom.yAxis[1].update({
            top: '0%',
            height: percHeightMain + '%'
        });
        globalChartDom.addAxis({
            id: TAShort,
            title: '',
            visible: true,
            opposite: true,
            showFirstLabel: true,
            showLastLabel: false,
            startOnTick: true,
            endOnTick: true,
            top: percHeightMain + '%',
            height: '15%',
            offset: '15%'
        });
        globalChartDom.addSeries({
            data: IRChartTAfeature.stockDataTA[0],
            color: color,
            yAxis: globalChartDom.yAxis.length - 1,
            name: TAShort,
            visible: true,
            linkedTo: 0,
            type: 'line',
            zIndex: 2
        });
        globalChartDom.addSeries({
            data: IRChartTAfeature.stockDataTA[1],
            color: clientStyle.chart_ColourMain,
            yAxis: globalChartDom.yAxis.length - 1,
            name: TAShort,
            visible: true,
            linkedTo: 0,
            type: 'line',
            zIndex: 2
        });
        IRChartTAfeature.activeTAlist.push(IRChartTAfeature.stockDataTA);
        IRChartTAfeature.activeTAlistDates.push(IRChartTAfeature.stockDataTADates);
        IRChartTAfeature.activeTAcolor.push(color);
        globalChartDom.redraw();

        var activeTAhtml = $(IrChartTapPlace).html();
        activeTAhtml += '<div class="color' + color.replace('#', '') + ' active" data-ta="' + TAShort + '" style="display: block;">';
        activeTAhtml += '<span>' + TAShort + ' (' + period.join() + ')</span>';
        activeTAhtml += '</div>';

        $(IrChartTapPlace).html(activeTAhtml);
        globalChartDom.hideLoading();
    },
    applyDottedAnalysisToChart: function (dataTA, TAShort, color, period) {
        var TAArrayForChart = [];
        $.each(dataTA.data, function (listingIndex, item) {
            TAArrayForChart.push([getUnixFromDate(item.date), item.result]);
            IRChartTAfeature.stockDataTADates.push(getUnixFromDate(item.date));
        });
        IRChartTAfeature.stockDataTA = TAArrayForChart;
        drawPlotLineToChart();
        globalChartDom.addSeries({
            data: IRChartTAfeature.stockDataTA,
            color: color,
            name: TAShort,
            yAxis: 0,
            lineWidth: 0,
            marker: {
                enabled: true,
                radius: 2
            },
            visible: true,
            linkedTo: 0,
            type: 'line',
            zIndex: 2
        }, false, 0);

        IRChartTAfeature.activeTAlist.push(IRChartTAfeature.stockDataTA);
        IRChartTAfeature.activeTAlistDates.push(IRChartTAfeature.stockDataTADates);
        IRChartTAfeature.activeTAcolor.push(color);
        globalChartDom.redraw();
        var numb = '';
        if (typeof period != 'undefined') {
            numb = '(' + period + ')';
        }
        var activeTAhtml = $(IrChartTapPlace).html();
        activeTAhtml += '<div class="color' + color.replace('#', '') + ' active" data-ta="' + TAShort + '" style="display: block;">';
        activeTAhtml += '<span>' + TAShort + ' ' + numb + '</span>';
        activeTAhtml += '</div>';

        $(IrChartTapPlace).html(activeTAhtml);
        globalChartDom.hideLoading();
    },
    applyTripleAnalysisToChart: function (dataTA, TAShort, color, period) {
        var lower = [], mids = [], uppers = [];
        $.each(dataTA.data, function (listingIndex, item) {
            var dateVar = getUnixFromDate(item.date);
            IRChartTAfeature.stockDataTADates.push(dateVar);
            lower.push([dateVar, item.resultLower]);
            mids.push([dateVar, item.resultMiddle]);
            uppers.push([dateVar, item.resultUpper]);
        });
        IRChartTAfeature.stockDataTA = [lower, mids, uppers];
        drawPlotLineToChart();
        globalChartDom.addSeries({
            data: lower,
            color: color,
            name: TAShort,
            yAxis: 0,
            visible: true,
            linkedTo: 0,
            type: 'line',
            zIndex: 2
        }, false, 0);
        globalChartDom.addSeries({
            data: mids,
            color: color,
            name: TAShort,
            yAxis: 0,
            visible: true,
            linkedTo: 0,
            type: 'line',
            zIndex: 2
        }, false, 0);
        globalChartDom.addSeries({
            data: uppers,
            color: color,
            name: TAShort,
            yAxis: 0,
            visible: true,
            linkedTo: 0,
            type: 'line',
            zIndex: 2
        }, false, 0);
        IRChartTAfeature.activeTAlist.push([lower, mids, uppers]);
        IRChartTAfeature.activeTAlistDates.push(IRChartTAfeature.stockDataTADates);
        IRChartTAfeature.activeTAcolor.push(color);
        globalChartDom.redraw();

        var activeTAhtml = $(IrChartTapPlace).html();
        activeTAhtml += '<div class="color' + color.replace('#', '') + ' active" data-ta="' + TAShort + '" style="display: block;">';
        activeTAhtml += '<span>' + TAShort + ' (' + period.join() + ')</span>';
        activeTAhtml += '</div>';

        $(IrChartTapPlace).html(activeTAhtml);
        globalChartDom.hideLoading();
    },
    removeAnalysisFromChart: function (TAShort) {
        for (var z = 0; z < globalChartDom.series.length; z++) {
            if (globalChartDom.series[z].options.name == TAShort) {
                if (IRChartTAfeature.activeTAdual.indexOf(TAShort) != -1) {
                    IRChartTAfeature.activeTAdual.splice(IRChartTAfeature.activeTAdual.indexOf(TAShort), 1);
                    for (var i = 0; i < globalChartDom.yAxis.length; i++) {
                        if (globalChartDom.yAxis[i].options.id == TAShort) {
                            globalChartDom.yAxis[i].remove();
                            break;
                        }
                    }
                    var secondChange = 0;
                    var percHeightMain = 100 - (15 * IRChartTAfeature.activeTAdual.length);
                    for (var j = 0; j < globalChartDom.yAxis.length; j++) {
                        if (IRChartTAfeature.activeTAdual.indexOf(globalChartDom.yAxis[j].options.id) != -1) {
                            globalChartDom.yAxis[j].update({
                                top: percHeightMain + (secondChange * 15) + '%'
                            });
                            secondChange++;
                        }
                    }
                    globalChartDom.yAxis[0].update({
                        height: percHeightMain + '%'
                    });
                    globalChartDom.yAxis[1].update({
                        top: percHeightMain / 2 + '%',
                        height: percHeightMain / 2 + '%'
                    });
                } else {
                    globalChartDom.series[z].remove();
                }
                var id = IRChartTAfeature.activeTA.indexOf(TAShort);
                IRChartTAfeature.activeTAlist.splice(id, 1);
                IRChartTAfeature.activeTAlistDates.splice(id, 1);
                IRChartTAfeature.activeTAperiod.splice(id, 1);
                IRChartTAfeature.activeTAcolor.splice(id, 1);
                IRChartTAfeature.activeTA.splice(id, 1);
                $(IrChartTapPlace).find("[data-ta=" + TAShort + "]").remove();
                break;
            }
        }
        ;
    },
    changeToIntraday: function (time) {
        debugStep("redrawIRChartInModeComparison intraday");
        globalChartDom.destroy();
        updateActiveChartNavBarRangePeriod(globalActivePeriod);
        globalChartActiveDisplayMode = chartDisplayModes.ta_intraday;
        drawIRChartHtmlTA();
        drawIntradayToIRChartfeatureMode(time);
    },
    changeBackToHistorical: function (days) {
        debugStep("redrawIRChartInModeTA historical");
        globalChartDom.destroy();
        globalChartActiveDisplayMode = chartDisplayModes.ta;
        drawIRChartHtmlTA();
        drawActiveListingToChartHistorical();
        globalChartDom.series[0].update({
            type: 'line'
        }, false, 0);
        var tempTA = this.activeTA.slice();
        var tempTAcol = this.activeTAcolor.slice();
        var tempTAper = this.activeTAperiod.slice();
        this.activeTA = [];
        this.activeTAcolor = [];
        this.activeTAlist = [];
        this.activeTAlistDates = [];
        this.activeTAdual = [];
        $('.IRChartTAPlaceholder').html('');
        tempTA.forEach(function (item, index) {
            IRChartTAfeature.applyAnalysis(item, tempTAcol[index], tempTAper[index]);
        });
        setChartExtremes(chartDisplayModes.historical, days);
        drawPlotLineToChart();
        globalChartDom.redraw();
    },
    placeholderChange: function () {
        $('.IRChartTAPlaceholder').css({
            'width': $('.IRChartPlaceholder')[0].clientWidth - 70
        });
        var width = 0;
        var count = 0;
        $('.IRChartTAPlaceholder .counter').remove();
        $('.IRChartTAPlaceholder').append('<span class="counter"></span>')
        $.each($('.IRChartTAPlaceholder div'), function (idx, item) {
            width += $(item).outerWidth(true);
            if (width > $('.IRChartTAPlaceholder').width()) {
                count++;
                $('.IRChartTAPlaceholder .counter').text("+" + count);
            }
        });
        $('.IRChartTAPlaceholder').css({
            'background': 'transparent',
            'border-bottom': "none",
            'box-shadow': '0 0 0 0',
            'height': '30px'
        });
    },
    attachEvents: function () {
        var chartTaBody = '.IRChartTA .IRChartTABody';
        $('.IRChartTAHeader').click(function () {
            debugStep("clicked '.IRChartTAHeader' in attachClickHandlers");
            if ($(chartTaBody).css('display') == 'block') {
                $(this).parent().removeClass('active');
                $(chartTaBody).css('display', 'none');

            } else {
                $(this).parent().addClass('active');
                IRChartNavigationCloseOpenBodyDivs();
                $(chartTaBody).css('display', 'block');
            }
        });

        if (typeof ($('.IRChartTA .IRChartNavigationClearTA')) == 'object') {
            chartEnabledClickHandlers.chartNavigationTA = true;
            $(window).on('resize', function () {
                if ($('.IRChartTAPlaceholder div').length != 0)
                    IRChartTAfeature.placeholderChange();
                else
                    $('.IRChartTAPlaceholder').width(0);
            });
            $('.IRChartTAPlaceholder').on('click', function (e) {
                e.stopPropagation();
                if ($('.IRChartTAPlaceholder .counter').text().length > 1 && $('.IRChartTAPlaceholder .counter').css('display') != 'none') {
                    $('.IRChartTAPlaceholder').css({
                        'background': clientStyle.chart_ColourBackground,
                        'border-bottom': "1px solid " + clientStyle.chart_ColourBorder,
                        'box-shadow': '0 0 7px -2px',
                        'height': 'auto'
                    });
                    $('.IRChartTAPlaceholder .counter').hide();
                } else {
                    $('.IRChartTAPlaceholder').css({
                        'background': 'transparent',
                        'border-bottom': "none",
                        'box-shadow': '0 0 0 0',
                        'height': '30px'
                    });
                    $('.IRChartTAPlaceholder .counter').show();
                }
            });
            $(document).on('click', function () {
                $('.IRChartTAPlaceholder').css({
                    'background': 'transparent',
                    'border-bottom': "none",
                    'box-shadow': '0 0 0 0',
                    'height': '30px'
                });
                $('.IRChartTAPlaceholder .counter').show();
            });

            $('.IRChartTABodyList').slimScroll({
                height: '400px',
                railVisible: true
            });
            $('.IRChartTABodyList .basicButtonLook').click(function () {
                if ($(this).not('.IRChartNavigationClearTA')) {
                    debugStep("clicked '.IRChartTABodyList .basicButtonLook' in attachClickHandlers");
                    $('.IRChartTABodyList').slimScroll();
                    var typeId = $(this).data('type');
                    if ($(this).hasClass('active')) {
                        IRChartTAfeature.removeThisTechnicalAnalysis(typeId);
                        $(this).removeClass('active');
                        if (IRChartTAfeature.activeTA.length == 0) {
                            drawIRChartHTML();
                            resetIRChart();
                        }
                    } else if (!$(this).hasClass('pop') && !$(this).hasClass('active')) {
                        var inp = $(this).find('.inputBox');
                        inp.find('.period-list:not(.hidenIn)').each(function (idx) {
                            $(this).val(Number($(this).data('min')));
                        });
                        $('.IRChartTABodyList .basicButtonLook').find('.inputBox').slideUp(300);
                        $(this).find('.inputBox').slideDown(300);
                        $(this).addClass('pop');
                    } else if ($(this).hasClass('pop') && !$(this).hasClass('active')) {
                        $('.IRChartTABodyList .basicButtonLook').find('.inputBox').slideUp(300);
                        $(this).find('.inputBox').slideDown(300);
                    }
                }
            });

            $('.IRChartNavigation .IRChartTA .inputBox .rad').on('click', function () {
                $(this).parent().parent().find('.hidenIn').val($(this).val())
            });
            $('.IRChartNavigation .IRChartTA .inputBox label').on('click', function (event) {
                event.stopPropagation();
            });

            $(document).on('click', '.IRChartNavigation .IRChartTA .inputBox .pop-submit', function (event) {
                event.stopPropagation();
                if (IRChartCurrencyConverter.isCurrencyActive()) {
                    IRChartCurrencyConverter.chartCurrencyConverterClear();
                }
                var popDom = $(this).parent().parent();
                var typeId = popDom.data('type');
                var colorId = popDom.data('color');
                var period = [];
                popDom.find('.period-list').each(function (idx) {
                    if ($(this).val() != '')
                        period.push($(this).val());
                });
                if (period.length != 0) {
                    IRChartTAfeature.updateTechnicalAnalysis(typeId, colorId, period);
                    popDom.addClass('active');
                    IRChartTAfeature.placeholderChange();
                }
            });

            $('.IRChartNavigation .IRChartTA .inputBox .period-list').on('keydown', function (event) {
                if (event.keyCode == 13) {
                    $(this).parent().find('.pop-submit').click();
                }
            });
            $('.IRChartNavigationClearTA').click(function () {
                debugStep("clicked '.IRChartNavigationClearTA' in attachClickHandlers");
                resetIRChart();
            });
        }
        IRChartNavigationShowHide('IRChartTABody');
    }
};

// TSR Chart feature
var IRChartTSRfeature = {
    firstDividendDate: null,
    lastDividendDate: null,
    stockDataClone: [],
    dividentBundleData: null,
    dividendDatesInChart: [],
    dividendSimpleData: [],
    dividendReinvestData: [],
    dividendSimpleReal: [],
    dividendReinvestReal: [],
    activeTSR: [],
    activeTSRcolor: [],
    selectedMin: null,
    selectedMax: null,
    fetchData: true,
    startPoint: 0,
    updateTSR: function (id) {
        debugStep("updateTSR(" + id + ")");
        if (globalChartActiveDisplayMode == chartDisplayModes.tsr_intraday) {
            globalActivePeriod = 'y1';
            updateActiveChartNavBarRangePeriod(globalActivePeriod);
            IRChartTSRfeature.changeBackToHistorical(365);
        } else if (globalChartActiveDisplayMode != chartDisplayModes.tsr) {
            redrawIRChartInModeTSR();
        }
        globalChartDom.showLoading("Loading..."); // TODO make it in translations
        if (IRChartTSRfeature.fetchData) {
            RequestData.dividendBundle(clientStyle.amountOfHistoricalYears, 10);
            IRChartTSRfeature.fetchData = false;
            IRChartTSRfeature.applyTSR(id);
        } else {
            IRChartTSRfeature.applyTSR(id);
        }
    },
    applyTSR: function (TSRMode) {
        clientStyle.chart_CustomTooltipTopPX = -10;
        IRChartTSRfeature.stockDataClone = globalChartListingStockData[globalActiveListingIndex].slice();
        switch (TSRMode) {
            case "TSRSimple":
                $.when(ResponseData.requestDividendBundle).done(function (dataTSR) {
                    IRChartTSRfeature.dividentBundleData = dataTSR.dividend[0].data;
                    IRChartTSRfeature.applySimpleTSRToChart();
                });
                break;
            case "TSRReinvest":
                $.when(ResponseData.requestDividendBundle).done(function (dataTSR) {
                    IRChartTSRfeature.dividentBundleData = dataTSR.dividend[0].data;
                    IRChartTSRfeature.applyReinvestTSRToChart();
                });
                break;
        }
    },
    applySimpleTSRToChart: function () {
        debugStep("applySimpleTSRToChart");
        IRChartTSRfeature.dividendSimpleReal = [];
        var colourIndex = 1;
        var tsrDividend = IRChartTSRfeature.dividentBundleData.slice(0);
        var tempStockData = globalChartListingStockData[globalActiveListingIndex].slice(0);
        var j = 0;
        var k = 0;
        var kSet = false;
        if (tsrDividend.length != 0) {
            for (var i = 0; i < tsrDividend.length; i++) {
                var tempTimestamp = new Date(tsrDividend[i].extDate).getTime();

                for (j; j < tempStockData.length; j++) {
                    if (tempTimestamp <= tempStockData[j][0] && !kSet) {
                        k = k + tsrDividend[i].dividendValue;
                        kSet = true;
                    } else if (tempTimestamp > tempStockData[j][0] && k != 0) { // KM this part for iterating if there is more dividend data
                        kSet = false;
                        break;
                    }
                    IRChartTSRfeature.dividendSimpleReal.push(tempStockData[j][1] + k);
                    if (IRChartTSRfeature.dividendDatesInChart.length != tempStockData.length) {
                        IRChartTSRfeature.dividendDatesInChart.push(tempStockData[j][0]);
                    }
                }
            }

        } else {
            for (j; j < tempStockData.length; j++) {
                IRChartTSRfeature.dividendSimpleReal.push(tempStockData[j][1]);
                if (IRChartTSRfeature.dividendDatesInChart.length != tempStockData.length) {
                    IRChartTSRfeature.dividendDatesInChart.push(tempStockData[j][0]);
                }
            }
        }
        this.activeTSRcolor.push(globalChartColours[1]);
        var place = $(IrChartTsrpPlace).html();
        place += '<div class="color' + globalChartColours[1].replace('#', '') + ' active" data-tsr="dividendSimpleData" style="display: block;">';
        place += '<span>' + translations.t_tsr_simple + '</span>'; // TODO make it in translations
        place += '</div>';
        $(IrChartTsrpPlace).html(place);
        IRChartTSRfeature.applyTSRnewData(globalChartColours[colourIndex], 'dividendSimpleData');
        IRChartTSRfeature.updateInterval();
    },
    applyReinvestTSRToChart: function () {
        debugStep("applyReinvestTSRToChart");
        IRChartTSRfeature.dividendReinvestReal = [];
        var colourIndex = 2;
        var tsrDividend = IRChartTSRfeature.dividentBundleData.slice(0);
        var tempStockData = globalChartListingStockData[globalActiveListingIndex].slice(0);
        var j = 0;
        var sB = 0; //shares bought
        var sO = 1; //shares owned
        var sBset = false;
        if (tsrDividend.length != 0) {
            for (var i = 0; i < tsrDividend.length; i++) {
                var tempTimestamp = new Date(tsrDividend[i].extDate).getTime();

                for (j; j < tempStockData.length; j++) {
                    if (tempTimestamp <= tempStockData[j][0] && !sBset) {
                        sB = tsrDividend[i].dividendValue / tempStockData[j][1] * sO;
                        sO = sO + sB;
                        sBset = true;
                    } else if (tempTimestamp > tempStockData[j][0] && sB != 0) { // KM this part for iterating if there is more dividend data
                        sBset = false;
                        break;
                    }
                    IRChartTSRfeature.dividendReinvestReal.push(tempStockData[j][1] * sO);
                    if (IRChartTSRfeature.dividendDatesInChart.length != tempStockData.length) {
                        IRChartTSRfeature.dividendDatesInChart.push(tempStockData[j][0]);
                    }
                }
            }
        } else {
            for (j; j < tempStockData.length; j++) {
                IRChartTSRfeature.dividendReinvestReal.push(tempStockData[j][1]);
                if (IRChartTSRfeature.dividendDatesInChart.length != tempStockData.length) {
                    IRChartTSRfeature.dividendDatesInChart.push(tempStockData[j][0]);
                }
            }
        }
        this.activeTSRcolor.push(globalChartColours[2]);
        var place = $(IrChartTsrpPlace).html();
        place += '<div class="color' + globalChartColours[2].replace('#', '') + ' active" data-tsr="dividendReinvestData" style="display: block;">';
        place += '<span>' + translations.t_tsr_reinvest + '</span>'; // TODO make it in translations
        place += '</div>';

        $(IrChartTsrpPlace).html(place);
        IRChartTSRfeature.applyTSRnewData(globalChartColours[colourIndex], "dividendReinvestData");
        IRChartTSRfeature.updateInterval();
    },
    applyTSRnewData: function (color, name) {
        globalChartDom.addSeries({
            zIndex: 10,
            data: [],
            color: color,
            yAxis: 0,
            name: name,
            linkedTo: 0,
            type: 'line'
        }, false, 0);
        IRChartTSRfeature.activeTSR.push(name);
        setChartExtremes(chartDisplayModes.historical, 360);

        globalChartDom.redraw();
    },
    updateInterval: function () {
        if (this.dividendSimpleReal.length > 0) {
            var simpleData = [];
            var zeroPoint = 0;
            var zeroPointSetS = true;
            for (var i = 0; i < this.dividendSimpleReal.length; i++) {
                if (this.dividendDatesInChart[i] >= this.selectedMin) {
                    zeroPoint = zeroPointSetS ? i : zeroPoint;
                    zeroPointSetS = false;
                    // simpleData.push([this.dividendDatesInChart[i], (this.dividendSimpleReal[i]*(this.stockDataClone[zeroPoint][1]/this.dividendSimpleReal[zeroPoint]))/this.dividendSimpleReal[zeroPoint]*100]);
                    simpleData.push([this.dividendDatesInChart[i], this.dividendSimpleReal[i] * (this.stockDataClone[zeroPoint][1] / this.dividendSimpleReal[zeroPoint])]);
                } else {
                    // simpleData.push([this.dividendDatesInChart[i], 100 ]);
                    simpleData.push([this.dividendDatesInChart[i], this.stockDataClone[i][1]]);
                }
            }
            for (var c = 0; c < globalChartDom.series.length; c++) {
                if (globalChartDom.series[c].options.name == "dividendSimpleData") {
                    globalChartDom.series[c].update({data: simpleData});
                    globalChartDom.redraw();
                    break;
                }
            }
            this.dividendSimpleData = simpleData.slice(0);
            this.startPoint = zeroPoint;
        }
        if (this.dividendReinvestReal.length > 0) {
            var reinvestData = [];
            var zeroPointR = 0;
            var zeroPointSetR = true;
            for (var j = 0; j < this.dividendReinvestReal.length; j++) {
                if (this.dividendDatesInChart[j] >= this.selectedMin) {
                    zeroPointR = zeroPointSetR ? j : zeroPointR;
                    zeroPointSetR = false;
                    // reinvestData.push([this.dividendDatesInChart[j], (this.dividendReinvestReal[j]*(this.stockDataClone[zeroPointR][1]/this.dividendReinvestReal[zeroPointR]))/this.dividendReinvestReal[zeroPointR]*100]);
                    reinvestData.push([this.dividendDatesInChart[j], this.dividendReinvestReal[j] * (this.stockDataClone[zeroPointR][1] / this.dividendReinvestReal[zeroPointR])]);
                } else {
                    // reinvestData.push([this.dividendDatesInChart[j], 100 ]);
                    reinvestData.push([this.dividendDatesInChart[j], this.stockDataClone[j][1]]);
                }
            }
            for (var b = 0; b < globalChartDom.series.length; b++) {
                if (globalChartDom.series[b].options.name == "dividendReinvestData") {
                    globalChartDom.series[b].update({data: reinvestData});
                    globalChartDom.redraw();
                    break;
                }
            }
            this.dividendReinvestData = reinvestData.slice(0);
            this.startPoint = zeroPointR;
        }
        var stockTemp = [];
        for (var s = 0; s < this.stockDataClone.length; s++) {
            if (this.dividendDatesInChart[s] >= IRChartTSRfeature.selectedMin) {
                // stockDump.push([this.dividendDatesInChart[s], this.stockDataClone[s][1]/this.stockDataClone[this.startPoint][1]*100]);
                stockTemp.push([this.dividendDatesInChart[s], this.stockDataClone[s][1]]);
            } else {
                // stockDump.push([this.dividendDatesInChart[s], 100 ]);
                stockTemp.push([this.dividendDatesInChart[s], this.stockDataClone[s][1]]);
            }
        }
        globalChartDom.series[0].update({data: stockTemp});
        globalChartDom.redraw();
        globalChartDom.hideLoading();
    },
    removeTSR: function (id) {
        switch (id) {
            case "TSRSimple":
                IRChartTSRfeature.removeThisTSR("dividendSimpleData");
                break;
            case "TSRReinvest":
                IRChartTSRfeature.removeThisTSR("dividendReinvestData");
                break;
        }
    },
    removeThisTSR: function (name) {
        var idS = IRChartTSRfeature.activeTSR.indexOf(name);
        $(IrChartTsrpPlace).find("[data-tsr=" + name + "]").remove();

        IRChartTSRfeature.activeTSRcolor.splice(idS, 1);
        IRChartTSRfeature.activeTSR.splice(idS, 1);
        IRChartTSRfeature[name] = [];
        for (var i = 0; i < globalChartDom.series.length; i++) {
            if (globalChartDom.series[i].options.name == name) {
                globalChartDom.series[i].remove();
                break;
            }
        }
        IRChartTSRfeature[name] = [];
        if (IRChartTSRfeature.activeTSR.length == 0) {
            IRChartTSRfeature.cleanTSRchartData();

        }
    },
    cleanTSRchartData: function () {
        resetIRChart();
    },
    changeToIntraday: function (time) {
        debugStep("redrawIRChartInModeTSR intraday");
        globalChartDom.destroy();
        updateActiveChartNavBarRangePeriod(globalActivePeriod);
        globalChartActiveDisplayMode = chartDisplayModes.tsr_intraday;
        drawIRChartHtmlTSR();
        drawIntradayToIRChartfeatureMode(time);
    },
    changeBackToHistorical: function (days) {
        debugStep("redrawIRChartInModeTSR historical");
        globalChartDom.destroy();
        globalChartActiveDisplayMode = chartDisplayModes.tsr;

        drawIRChartHtmlTSR();
        drawActiveListingToChartHistorical();
        drawIRChartStockTSR();

        IRChartTSRfeature.activeTSR.forEach(function (item, index) {
            globalChartDom.addSeries({
                zIndex: 10,
                data: IRChartTSRfeature[item],
                color: item == "dividendSimpleData" ? globalChartColours[1] : globalChartColours[2],
                yAxis: 0,
                name: item,
                linkedTo: 0,
                type: 'line'
            }, false, 0);
        });

        IRChartTSRfeature.updateInterval();

        setChartExtremes(chartDisplayModes.historical, days);
        drawPlotLineToChart();
        globalChartDom.redraw();
    },
    attachEvents: function () {
        if (typeof ($('.IRChartTSR .IRChartTSRBodyList .basicButtonLook')) == 'object') {
            var chartTsrBody = '.IRChartTSR .IRChartTSRBody';

            $('.IRChartTSRHeader').click(function () {
                debugStep("clicked '.IRChartTSRHeader' in attachClickHandlers");
                if ($(chartTsrBody).css('display') == 'block') {
                    $(this).parent().removeClass('active');
                    $(chartTsrBody).css('display', 'none');

                } else {
                    $(this).parent().addClass('active');
                    IRChartNavigationCloseOpenBodyDivs();
                    $(chartTsrBody).css('display', 'block');
                }
            });

            chartEnabledClickHandlers.chartNavigationTSR = true;

            if (typeof ($('.IRChartTSR .IRChartNavigationClearTSR')) == 'object') {
                $('.IRChartTSRBody .basicButtonLook').click(function () {
                    debugStep("clicked '.IRChartTSRBody .basicButtonLook' in attachClickHandlers");
                    if (IRChartCurrencyConverter.isCurrencyActive()) {
                        IRChartCurrencyConverter.chartCurrencyConverterClear();
                    }
                    if ($(this).hasClass('active')) {
                        IRChartTSRfeature.removeTSR($(this).data('mode'));
                        $(this).removeClass('active');
                    } else {
                        IRChartTSRfeature.updateTSR($(this).data('mode'));
                        $(this).addClass('active');
                    }
                });
                $('.IRChartNavigationClearTSR').click(function () {
                    debugStep("clicked '.IRChartNavigationClearTSR' in attachClickHandlers");
                    $('.IRChartTSRBody .basicButtonLook').removeClass('active');
                    IRChartTSRfeature.cleanTSRchartData();
                });
            }
            IRChartNavigationShowHide('IRChartTSRBody');
        }
    }
};

// Chart Currency Converter (CC) feature
var IRChartCurrencyConverter = {
    stockDataBackup: null,
    intradayDataBackup: null,
    comparisonDataBackup: [],
    last: null,
    inc: 0,
    currWeight: 1,
    curCurrency: null,
    allWeights: [],
    converted: false,
    isCurrencyActive: function () {
        return this.curCurrency != getActiveCurrency() && this.curCurrency != null;
    },
    chartCurrencyConverterUpdate: function (to) {
        globalChartDom.showLoading("Loading..."); // TODO make it in translations
        var period = new Date().getFullYear() - new Date(globalChartListingStockDataOHLCV[0][0][0]).getFullYear() + 1; // +1 to have more data because it registers current date for starting point of year
        RequestData.featureCurrencyConversion(getActiveCurrency().replace('GBX', 'GBP'), to, period);
        $.when(ResponseData.requestFeatureCurrencyConversionData)
            .done(function (currencyConversionData) {
                IRChartCurrencyConverter.allWeights = currencyConversionData.data;
                if (!IRChartCurrencyConverter.converted && IRChartCurrencyConverter.allWeights.length != 0) {
                    var tempStock = IRChartCurrencyConverter.chartCurrencyConverterStockData();
                    globalChartListingStockData[0] = tempStock;
                    globalChartListingStockDataOHLCV[0] = tempStock;
                    var tempIntraday = IRChartCurrencyConverter.chartCurrencyConverterIntraDayData();
                    globalChartListingIntradayData[0] = tempIntraday;
                    globalChartListingIntradayDataOHLCV[0] = tempIntraday;
                    globalRawStockData[globalActiveListingIndex].last = IRChartCurrencyConverter.chartCurrencyConverterLastPrice();
                    IRChartCurrencyConverter.curCurrency = to;
                    if (globalChartActiveDisplayMode == chartDisplayModes.comparison) {
                        IRChartCurrencyConverter.recalculateComparisonWithCurency(to);
                        globalChartDom.redraw();
                    } else {
                        resetIRChart();
                        $('.IRChartCurrency').text(to);
                    }
                    IRChartCurrencyConverter.converted = true;
                }
                globalChartDom.hideLoading(); // TODO make it in translations
            });
    },
    getClosestDateIndex: function (obj, key, picked) {
        for (var i = this.inc; i < obj.length; i++) {
            var tempTime = new Date(obj[i][key]).getTime();
            if (picked > tempTime) {
                IRChartCurrencyConverter.inc = i;
            } else {
                return IRChartCurrencyConverter.inc;
            }
        }
        return IRChartCurrencyConverter.inc;
    },
    chartCurrencyConverterStockData: function () {
        this.inc = 0;
        var stockDataClone = [];
        var divideFactor = 1;
        if (getActiveCurrency().toLowerCase() == "gbx") {
            divideFactor = 100;
        }
        var workData;
        if (this.stockDataBackup == null) {
            workData = globalChartListingStockDataOHLCV[0];
            this.stockDataBackup = globalChartListingStockDataOHLCV[0];
        } else {
            workData = this.stockDataBackup;
        }
        $.each(workData, function (index, item) {
            var stockDataElement = [];
            var indexMatch = IRChartCurrencyConverter.getClosestDateIndex(IRChartCurrencyConverter.allWeights, 'date', item[0]);
            stockDataElement[0] = item[0];
            stockDataElement[1] = (item[1] / divideFactor) * IRChartCurrencyConverter.allWeights[indexMatch].conversationFactor;
            stockDataElement[2] = (item[2] / divideFactor) * IRChartCurrencyConverter.allWeights[indexMatch].conversationFactor;
            stockDataElement[3] = (item[3] / divideFactor) * IRChartCurrencyConverter.allWeights[indexMatch].conversationFactor;
            stockDataElement[4] = (item[4] / divideFactor) * IRChartCurrencyConverter.allWeights[indexMatch].conversationFactor;
            stockDataElement[5] = item[5];
            stockDataClone.push(stockDataElement);
        });
        this.currWeight = IRChartCurrencyConverter.allWeights[this.inc].conversationFactor;
        return stockDataClone;
    },
    chartCurrencyConverterIntraDayData: function () {
        this.inc = 0;
        var IntraDayDataClone = [];
        var divideFactor = 1;
        if (getActiveCurrency().toLowerCase() == "gbx") {
            divideFactor = 100;
        }
        var workData;
        if (this.intradayDataBackup == null) {
            workData = globalChartListingIntradayDataOHLCV[0];
            this.intradayDataBackup = globalChartListingIntradayDataOHLCV[0];
        } else {
            workData = this.intradayDataBackup;
        }
        $.each(workData, function (index, item) {
            var IntraDayDataElement = [];
            var indexMatch = IRChartCurrencyConverter.getClosestDateIndex(IRChartCurrencyConverter.allWeights, 'date', item[0]);

            IntraDayDataElement[0] = item[0];
            IntraDayDataElement[1] = (item[1] / divideFactor) * IRChartCurrencyConverter.allWeights[indexMatch].conversationFactor;
            IntraDayDataElement[2] = (item[2] / divideFactor) * IRChartCurrencyConverter.allWeights[indexMatch].conversationFactor;
            IntraDayDataElement[3] = (item[3] / divideFactor) * IRChartCurrencyConverter.allWeights[indexMatch].conversationFactor;
            IntraDayDataElement[4] = (item[4] / divideFactor) * IRChartCurrencyConverter.allWeights[indexMatch].conversationFactor;
            IntraDayDataElement[5] = item[5];
            IntraDayDataClone.push(IntraDayDataElement);
        });
        this.currWeight = IRChartCurrencyConverter.allWeights[this.inc].conversationFactor;
        return IntraDayDataClone;
    },
    chartCurrencyConverterFeature: function (workData) {
        this.inc = 0;
        var divideFactor = 1;
        var DataClone = [];
        if (getActiveCurrency().toLowerCase() == "gbx") {
            divideFactor = 100;
        }
        $.each(workData, function (index, item) {
            var DataElement = [];
            var indexMatch = IRChartCurrencyConverter.getClosestDateIndex(IRChartCurrencyConverter.allWeights, 'date', item[0]);

            DataElement[0] = item[0];
            DataElement[1] = (item[1] / divideFactor) * IRChartCurrencyConverter.allWeights[indexMatch].conversationFactor;
            DataClone.push(DataElement);
        });
        return DataClone;
    },
    chartCurrencyConverterLastPrice: function () {
        var lastPrice = 0;
        var divideFactor = 1;
        if (getActiveCurrency().toLowerCase() == "gbx") {
            divideFactor = 100;
        }
        if (this.last == null) {
            lastPrice = globalRawStockData[globalActiveListingIndex].last;
            this.last = lastPrice;
        } else {
            lastPrice = this.last;
        }
        return (lastPrice / divideFactor) * IRChartCurrencyConverter.currWeight;
    },
    chartCurrencyConverterClear: function () {
        if (this.stockDataBackup !== null && this.intradayDataBackup !== null && this.last !== null) {
            globalChartListingStockData[0] = this.stockDataBackup;
            globalChartListingStockDataOHLCV[0] = this.stockDataBackup;
            globalChartListingIntradayData[0] = this.intradayDataBackup;
            globalChartListingIntradayDataOHLCV[0] = this.intradayDataBackup;
            globalRawStockData[globalActiveListingIndex].last = this.last;
            if (globalChartActiveDisplayMode == chartDisplayModes.comparison) {
                globalChartComparisonData[0] = this.comparisonDataBackup;
                globalChartDom.redraw();
            } else {
                resetIRChart();
                $('.IRChartCurrency').text(getActiveCurrency());
            }
            this.curCurrency = getActiveCurrency();
            $('.IRChartCCBody .basicButtonLook').removeClass('active').css('border-color', '')
        }
    },
    recalculateComparisonWithCurency: function () {
        for (var i = 0; i < this.comparisonDataBackup.length; i++) {
            globalChartComparisonData[0][i] = this.chartCurrencyConverterFeature(this.comparisonDataBackup[i]);
        }
    },
    attachEvents: function () {
        if (typeof ($('.IRChartCC .IRChartCCBodyList .basicButtonLook')) == 'object') {
            IRChartCurrencyConverter.curCurrency = getActiveCurrency();
            var chartCcBody = '.IRChartCC .IRChartCCBody';
            $('.IRChartCCHeader').on('click', function () {
                debugStep("clicked '.IRChartCCHeader' in attachClickHandlers");
                if ($(chartCcBody).css('display') == 'block') {
                    $(this).parent().removeClass('active');
                    $(chartCcBody).css('display', 'none');
                } else {
                    $(this).parent().addClass('active');
                    IRChartNavigationCloseOpenBodyDivs();
                    $(chartCcBody).css('display', 'block');
                }
            });

            chartEnabledClickHandlers.chartNavigationCC = true;
            var cl = $('.IRChartCCBody').clone().css({
                position: "absolute",
                top: "-10000",
                display: "block"
            }).appendTo('.IRChartCC');
            var heCl = cl[0].clientHeight;
            cl.remove();
            if (heCl > 400) {
                $('.IRChartCCBodyList').slimScroll({
                    height: '400px',
                    railVisible: true
                });
            }

            $('.IRChartCCBody .basicButtonLook').click(function () {
                debugStep("clicked '.IRChartCCBody .basicButtonLook' in attachClickHandlers");
                if (!!$(this).data('cr')) {
                    IRChartCurrencyConverter.converted = false;
                    IRChartCurrencyConverter.chartCurrencyConverterUpdate($(this).data('cr'));
                    var btn = $(this);
                    $.when(ResponseData.requestFeatureCurrencyConversionData)
                        .done(function () {
                            if (IRChartCurrencyConverter.converted) {
                                $('.IRChartCCBody .basicButtonLook').removeClass('active').css('border-color', '');
                                btn.addClass('active').css('border-color', globalChartColours[0]);
                            }
                        })
                }
            });

            $('.IRChartCCBody .IRChartNavigationClearCC').click(function () {
                IRChartCurrencyConverter.chartCurrencyConverterClear();
            });

            $('.IRChartCCBody .basicButtonLook:not(.IRChartNavigationClearCC)').on({
                mouseenter: function () {
                    $(this).css('border-color', globalChartColours[0])
                },
                mouseleave: function () {
                    if (!$(this).hasClass('active'))
                        $(this).css('border-color', '')
                }
            });
            IRChartNavigationShowHide('IRChartCCBody');
        }
    }
};

// Chart Comparison feature
var IRChartComparisonFeature = {
    activeCompare: [],
    activeCompareUid: [],
    addCompareSeriesToChart: function (id, uniqueID) {
        debugStep("addCompareSeriesToChart(" + id + ", " + uniqueID + ")");
        if (globalChartActiveDisplayMode == chartDisplayModes.comparison_intraday) {
            globalActivePeriod = 'y1';
            updateActiveChartNavBarRangePeriod(globalActivePeriod);
            IRChartComparisonFeature.changeBackToHistorical(365);
        } else if (globalChartActiveDisplayMode != chartDisplayModes.comparison && globalChartActiveDisplayMode != chartDisplayModes.comparison_intraday) {
            redrawChartInCompareMode();
        }
        globalChartDom.showLoading("Loading..."); // TODO make it in translations
        IRChartComparisonFeature.activeCompare.push(id);
        IRChartComparisonFeature.activeCompareUid.push(uniqueID);
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
        globalChartDom.yAxis[0].setCompare('percent');
    },
    removeCompareSeriesFromChart: function (id, uniqueID) {
        debugStep("removeCompareSeriesFromChart(" + id + ", " + uniqueID + ")");
        IRChartComparisonFeature.activeCompare.splice(IRChartComparisonFeature.activeCompareUid.indexOf(uniqueID), 1);
        IRChartComparisonFeature.activeCompareUid.splice(IRChartComparisonFeature.activeCompareUid.indexOf(uniqueID), 1);
        globalChartDom.get(uniqueID).remove();
        globalChartComparisonInChart[uniqueID] = 0;
        if (IRChartComparisonFeature.activeCompare.length == 0)
            IRChartComparisonFeature.clearComparisonChart();
    },
    clearComparisonChart: function () {
        resetIRChart();
    },
    updateActiveComparisonList: function (id, uniqueID) {
        var comparisonSelector = $('.comparisonList_' + uniqueID);
        var display = comparisonSelector.css('display');
        if (display == "block") {
            comparisonSelector.css('display', 'none');
        } else {
            comparisonSelector.css('display', 'block');
        }
    },
    updateIRChartComparisonPlotLine: function (extremes, e) {
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
    },
    changeToIntraday: function (time) {
        debugStep("redrawIRChartInModeComparison intraday");
        globalChartDom.destroy();
        globalChartActiveDisplayMode = chartDisplayModes.comparison_intraday;
        drawIRChartHTMLCompare();
        drawIntradayToIRChartfeatureMode(time);

    },
    changeBackToHistorical: function (days) {
        debugStep("redrawIRChartInModeComparison historical");
        globalChartActiveDisplayMode = chartDisplayModes.comparison;
        redrawChartInCompareMode();
        for (var i = 0; i < this.activeCompare.length; i++) {
            globalChartDom.addSeries({
                id: IRChartComparisonFeature.activeCompareUid[i],
                index: IRChartComparisonFeature.activeCompare[i],
                data: globalChartComparisonData[0][IRChartComparisonFeature.activeCompare[i]],
                color: globalChartColours[IRChartComparisonFeature.activeCompareUid[i]],
                yAxis: 0,
                name: globalChartComparisonNames[IRChartComparisonFeature.activeCompare[i]],
                visible: true,
                linkedTo: 0,
                type: 'line'
            }, false, 0);
            globalChartComparisonInChart[IRChartComparisonFeature.activeCompareUid[i]] = 1;
            globalChartDom.yAxis[0].setCompare('percent');
        }
        setChartExtremes(chartDisplayModes.historical, days);
        drawPlotLineToChart();
        globalChartDom.redraw();
    },
    placeholderChange: function () {
        $('.IRChartComparisonPlaceholder').css({
            'width': $('.IRChartPlaceholder')[0].clientWidth - 70
        });
        var width = 0;
        var count = 0;
        $('.IRChartComparisonPlaceholder .counter').remove();
        $('.IRChartComparisonPlaceholder').append('<span class="counter"></span>');
        $.each($('.IRChartComparisonPlaceholder div'), function (idx, item) {
            if ($(item).css('display') != 'none') {
                width += $(item).outerWidth(true);
                if (width > $('.IRChartComparisonPlaceholder').width()) {
                    count++;
                    $('.IRChartComparisonPlaceholder .counter').text("+" + count);
                }
            }
        });
        $('.IRChartComparisonPlaceholder').css({
            'background': 'transparent',
            'border-bottom': "none",
            'box-shadow': '0 0 0 0',
            'height': '30px'
        });
    },
    attachEvent: function () {
        if (typeof ($('.IRChartComparison .IRChartComparisonBodyList .basicButtonLook')) == 'object') {
            var chartCompBody = '.IRChartComparison .IRChartComparisonBody';
            $('.IRChartComparisonHeader').click(function () {
                debugStep("clicked '.IRChartComparisonHeader' in attachClickHandlers");
                if ($(chartCompBody).css('display') == 'block') {
                    $(this).parent().removeClass('active');
                    $(chartCompBody).css('display', 'none');
                } else {
                    $(this).parent().addClass('active');
                    IRChartNavigationCloseOpenBodyDivs();
                    $(chartCompBody).css('display', 'block');
                }
            });

            chartEnabledClickHandlers.chartNavigationComparison = true;


            // events for placeholder
            $(window).on('resize', function () {
                if ($('.IRChartComparisonPlaceholder div:visible').length != 0)
                    IRChartComparisonFeature.placeholderChange();
                else
                    $('.IRChartComparisonPlaceholder').width(0);
            });
            $('.IRChartComparisonPlaceholder').on('click', function (e) {
                e.stopPropagation();
                if ($('.IRChartComparisonPlaceholder .counter').text().length > 1 && $('.IRChartComparisonPlaceholder .counter').css('display') != 'none') {
                    $('.IRChartComparisonPlaceholder').css({
                        'background': clientStyle.chart_ColourBackground,
                        'border-bottom': "1px solid " + clientStyle.chart_ColourBorder,
                        'box-shadow': '0 0 7px -2px',
                        'height': 'auto'
                    });
                    $('.IRChartComparisonPlaceholder .counter').hide();
                } else {
                    $('.IRChartComparisonPlaceholder').css({
                        'background': 'transparent',
                        'border-bottom': "none",
                        'box-shadow': '0 0 0 0',
                        'height': '30px'
                    });
                    $('.IRChartComparisonPlaceholder .counter').show();
                }
            });
            $(document).on('click', function () {
                $('.IRChartComparisonPlaceholder').css({
                    'background': 'transparent',
                    'border-bottom': "none",
                    'box-shadow': '0 0 0 0',
                    'height': '30px'
                });
                $('.IRChartComparisonPlaceholder .counter').show();
            });
            // @ end of placeholder events

            $(document).on('click', '.IRChartComparisonBodyList .basicButtonLook', function () {
                debugStep("clicked '.IRChartComparisonBodyList .basicButtonLook' in attachClickHandlers");
                var type = $(this).data('type');
                var id = $(this).data('id');
                var uniqueID = $(this).data('unique');

                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    IRChartComparisonFeature.removeCompareSeriesFromChart(id, uniqueID);
                } else {
                    $(this).addClass('active');
                    IRChartComparisonFeature.addCompareSeriesToChart(id, uniqueID);
                }
                IRChartComparisonFeature.updateActiveComparisonList(id, uniqueID);
                IRChartComparisonFeature.placeholderChange();
                globalChartDom.hideLoading();
            });

            $(document).on('click', '.IRChartNavigationClearComparison', function () {
                debugStep("clicked '.IRChartNavigationClearComparison' in attachClickHandlers");
                IRChartComparisonFeature.clearComparisonChart();
            });

            $('.IRChartChangeListing select').bind('change', function () {
                debugStep("changed '.IRChartChangeListing select' in attachClickHandlers");
                globalActiveListingIndex = parseInt($(this).val());
                initMomentTimezone();
                buildQuoteTable();
                resetIRChart();
                updateActiveChartNavBarRangePeriod(globalActivePeriod);
            });

            IRChartNavigationShowHide('IRChartComparisonBody');
        }
    }
};

// Chart Fullscreen feature
var IRChartFullscreenFeature = {
    chartFullscreenToogle: function () {
        var fullIcon = $('.IRChartFullscreenHeader.icon');
        var elem = document.documentElement;
        if ((document.fullScreenElement !== undefined && document.fullScreenElement === null)
            || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null)
            || (document.mozFullScreen !== undefined && !document.mozFullScreen)
            || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
            if (elem.requestFullScreen) {
                elem.requestFullScreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullScreen) {
                elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
            fullIcon.removeClass('icon-enlarge');
            fullIcon.addClass('icon-shrink');
            $(ModulesList.IRChartModule.view).addClass('fullMode');
            globalChartDom.reflow()
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            fullIcon.removeClass('icon-shrink');
            fullIcon.addClass('icon-enlarge');
            $(ModulesList.IRChartModule.view).removeClass('fullMode');
            globalChartDom.reflow();
        }
    },
    attachEvent: function () {
        $('.IRChartFullscreen').on('click', function () {
            IRChartFullscreenFeature.chartFullscreenToogle();
        });
        $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function (e) {
            var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;
            var fullIcon = $('.IRChartFullscreenHeader.icon');
            if (!state) {
                fullIcon.removeClass('icon-shrink');
                fullIcon.addClass('icon-enlarge');
                $(ModulesList.IRChartModule.view).removeClass('fullMode');
                globalChartDom.reflow();
            }
        });
    }
};

// Chart Settings feature
var IRChartSettingsFeature = {
    convertToDot: function () {
        globalChartDom.series[0].update({
            type: 'line',
            marker: {
                enabled: true,
                radius: 3
            }
        });
        globalDefaultSettings.activeSetType = "dot";
    },
    convertToOthers: function (type) {
        globalChartDom.series[0].update({
            type: type,
            marker: {
                enabled: false
            }
        });
        globalDefaultSettings.activeSetType = type;
    },
    convertGraphType: function (type) {
        globalChartDom.yAxis[0].update({
            type: type
        });
        globalDefaultSettings.activeSetAxisType = type;
        if (globalDefaultSettings.activeSetType == "dot") {
            globalChartDom.series[0].update({
                type: 'line',
                marker: {
                    enabled: true,
                    radius: 3
                }
            });
        }
    },
    setChartData: function (type) {
        if (type != 'linear' && type != 'logarithmic') {
            if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
                globalChartDom.series[0].update({
                    data: globalChartListingIntradayDataOHLCV[0],
                    marker: {
                        enabled: false
                    }
                });
            }
        } else {
            globalChartDom.series[0].update({
                data: globalChartListingStockDataOHLCV[0],
                marker: {
                    enabled: false
                }
            });
        }
        globalChartDom.redraw();
    },
    attachEvent: function () {
        $('.IRChartSettingsHeader').on('click', function () {
            debugStep("clicked '.IRChartSettingsHeader' in attachClickHandlers");
            if ($('j').css('display') == 'block') {

                $('.IRChartNavigation .IRChartSettings').removeClass('active');
                $('.IRChartSettings .IRChartSettingsBody').css('display', 'none');

            } else {
                $(this).parent().addClass('active');
                IRChartNavigationCloseOpenBodyDivs();
                $('.IRChartSettings .IRChartSettingsBody').css('display', 'block');
            }
        });
        chartEnabledClickHandlers.chartNavigationSettings = true;
        $('.IRChartSettingsBody .basicButtonLook:not(.IRChartNavigationClearSettings)').click(function () {
                debugStep("clicked '.IRChartSettingsBody .basicButtonLook' in attachClickHandlers");
                if (globalChartActiveDisplayMode != chartDisplayModes.historical && globalChartActiveDisplayMode != chartDisplayModes.intraday) {
                    globalChartActiveDisplayMode = chartDisplayModes.historical;
                    resetIRChart();
                }

                $(this).addClass('active').css('border-color', globalChartColours[0]);
                var type = $(this).data('type');
                IRChartSettingsFeature.setChartData(type);
                switch (type) {
                    case "dot":
                        IRChartSettingsFeature.convertToDot();
                        $('.IRChartSettingsBody .basicButtonLook:not(.moder)').removeClass('active').css('border-color', '');
                        break;
                    case "candlestick":
                    case "area":
                    case "line":
                        IRChartSettingsFeature.convertToOthers(type);
                        $('.IRChartSettingsBody .basicButtonLook:not(.moder)').removeClass('active').css('border-color', '');
                        break;
                    case "linear":
                    case "logarithmic":
                        IRChartSettingsFeature.convertGraphType(type);
                        $('.IRChartSettingsBody .basicButtonLook.moder').removeClass('active').css('border-color', '');
                        break;
                    default:
                        break;
                }
                $(this).addClass('active').css('border-color', globalChartColours[0]);
                globalChartDom.redraw();
            }
        );
        $('.IRChartNavigationClearSettings').on('click', function () {
            resetIRChart();
        });
        $('.IRChartSettingsBody .basicButtonLook:not(.IRChartNavigationClearSettings)').on({
            mouseenter: function () {
                $(this).css('border-color', globalChartColours[0])
            },
            mouseleave: function () {
                if (!$(this).hasClass('active'))
                    $(this).css('border-color', '')
            }
        });
        IRChartNavigationShowHide('IRChartSettingsBody');
    }
};

// #end of chart features
//
//  Chart features ========================================================================================
//
// GLOBAL
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

// Todo Make it local for module
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
            if (!chartEnabledClickHandlers.chartNavigationMenu) {
                if (typeof ($(chartMenuTrigger)) != "undefined") {
                    $(document).on('click', chartMenuTrigger, function () {
                        debugStep("clicked  '" + chartMenuTrigger + "' in attachClickHandlers");
                        if ($(chartMenuTriggerBody).css('display') == 'block') {
                            $(this).parent().removeClass('active');
                            $(chartMenuTriggerBody).css('display', 'none');
                        } else {
                            $(this).parent().addClass('active');
                            $(chartMenuTriggerBody).css('display', 'block');
                        }
                    });

                    $('.IRChartTSRHeader, .IRChartTAHeader, .IRChartComparisonHeader, .IRChartCCHeader, .IRChartSettingsHeader').on('click', function () {
                        $('.IRChartMenuTrigger').addClass('icon-arrow');
                        $('.IRChartMenuTriggerBody').css('display', 'none');
                    });

                    $('.IRChartMenuTrigger.icon-arrow').on('click', function () {
                        $(this).removeClass('icon-arrow');
                        $('.IRChartMenuTriggerBody').css('display', 'block');
                    });

                    $('.IRChartNavigation .IRChartNavigationInner .IRChartMenuTriggerBody .IRChartNavigationClear').on('click', function () {
                        resetIRChart();
                    });

                    chartEnabledClickHandlers.chartNavigationMenu = true;
                }
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
        // Todo still have ids
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
                if ($(this).data('filtercat') == 'allRNSnews') {
                    $(this).toggleClass('checked');
                    if($(this).hasClass('checked')) $('.checkbox').addClass('checked');
                    else $('.checkbox').removeClass('checked');
                } else {
                    $('.allRNSnews').removeClass('checked');
                    $(this).toggleClass('checked');
                }
            });

            $('.IRDataGroup .IRDate, .IRDataGroup .IRTitle').on('click', function () {
                debugStep("clicked news article link");
                var articleId = $(this).closest('.IRDataGroup').data('article-id');
                window.open(getNewsArticlePath() + '?solutionID=' + getSolutionID() + '&customerKey=' + getClientName() + '&storyID=' + articleId + '&language=' + globalActiveLanguage, '_blank');
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
                        var articleId = $(this).data('article-id');
                        window.open(getNewsArticlePath() + '?solutionID=' + getSolutionID() + '&customerKey=' + getClientName() + '&storyID=' + articleId + '&language=' + globalActiveLanguage, '_blank');

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
                        var articleId = $(this).data('article-id');
                        window.open(getNewsArticlePath() + '?solutionID=' + getSolutionID() + '&customerKey=' + getClientName() + '&storyID=' + articleId + '&language=' + globalActiveLanguage, '_blank');
                    }
                });
            }
            $(".allRNSnews.checkbox").addClass('checked');
        },
        // Todo still have ids
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

    if (FeaturesList.IRChartCompare.use && !chartEnabledClickHandlers.chartNavigationComparison) {
        IRChartComparisonFeature.attachEvent();
    }

    if (FeaturesList.IRChartTA.use && !chartEnabledClickHandlers.chartNavigationTA) {
        IRChartTAfeature.attachEvents();
    }
    if (FeaturesList.IRChartTSR.use && !chartEnabledClickHandlers.chartNavigationTSR) {
        IRChartTSRfeature.attachEvents();
    }
    if (FeaturesList.IRChartCurrencyConversion.use && !chartEnabledClickHandlers.chartNavigationCC) {
        IRChartCurrencyConverter.attachEvents();
    }
    if (FeaturesList.IRChartFullscreen.use && checkForBrowserFullscreen()) {
        IRChartFullscreenFeature.attachEvent();
    }
    if (FeaturesList.IRChartSettings.use) {
        IRChartSettingsFeature.attachEvent();
    }
    if (moduleHandlers.hasOwnProperty(module)) {
        moduleHandlers[module]();
    }
}
//
//  Global functions as sort of API to use anywhere ========================================================================================
//
//
// Number format functions
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
                formated = number.round(numberOfDecimals).toFixed(numberOfDecimals).replace('.', clientLocaleParameters.decimalSeparator);
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
                if (!!(number).toString().split(".")[1]) {
                    number = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);
                    var h = number.toString().split(".");
                    sepaNumb = h[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000) + clientLocaleParameters.decimalSeparator + h[1];
                } else {
                    sepaNumb = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000);
                }
            }
        }
        catch (err) {
            debugError(err);
        }
        return sepaNumb;
    },
    decimal1000Zeros: function (number) {
        var sepaNumb = "-";
        try {
            if (typeof (number) == 'number') {
                number = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);
                var h = number.toString().split(".");
                sepaNumb = h[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000) + clientLocaleParameters.decimalSeparator + h[1];
            }
        }
        catch (err) {
            debugError(err)
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
    }
};
// Function to get URI valuy for param  GLOBAL
function getUriParam(key) { // Returns URL Parameter by the key
    var results = new RegExp('[\?&]' + key + '=([^&#]*)').exec(window.location.href);
    try {
        return results[1];
    }
    catch (err) {
        return 0;
    }
}
// Global
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
// Global checks if internet explorer version is less then 11
function checkForBrowserFullscreen() {
    return window.navigator.userAgent.indexOf("MSIE ") == -1 && !(/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)); // !!navigator.userAgent.match(/Trident.*rv\:11\./) for IE11
}
// Global chart functions
function resetIRChartNavigation() {
    debugStep("resetIRChartNavigation");
    if (globalChartActiveDisplayMode != chartDisplayModes.ta) {
        $('.IRChartTAPlaceholder div').css('display', 'none');
        $('.IRChartNavigation .IRChartTA .IRChartTABodyList .basicButtonLook').removeClass('active');
        $('.IRChartTAPlaceholder').html('');
    }
    if (globalChartActiveDisplayMode != chartDisplayModes.tsr) {
        $('.IRChartTSRPlaceholder div').css('display', 'none');
        $('.IRChartNavigation .IRChartTSR .IRChartTSRBodyList .basicButtonLook').removeClass('active');
        $('.IRChartTSRPlaceholder').html('');
    }
    if (globalChartActiveDisplayMode != chartDisplayModes.comparison) {
        $('.IRChartComparisonPlaceholder div').css('display', 'none');
        $('.IRChartNavigation .IRChartComparison .IRChartComparisonBodyList .basicButtonLook').removeClass('active');
    }
    if (FeaturesList.IRChartSettings.use) {
        $('.IRChartSettings .basicButtonLook.selectableItem').removeClass("active").css('border-color', '');
        $('.IRChartSettings').find('.basicButtonLook[data-type="' + clientStyle.chart_DrawMode + '"]').addClass("active").css('border-color', globalChartColours[0]);
        $('.IRChartSettings .basicButtonLook.selectableItem.moder').first().addClass("active").css('border-color', globalChartColours[0]);
    }
}
function resetIRChart() {
    debugStep("resetIRChart");
    globalDefaultSettings.activeSetType = clientStyle.chart_DrawMode;
    globalDefaultSettings.activeSetAxisType = 'linear';
    if (globalChartActiveDisplayMode == chartDisplayModes.comparison || globalChartActiveDisplayMode == chartDisplayModes.comparison_intraday) {
        this.activeCompare = [];
        if (IRChartCurrencyConverter.isCurrencyActive()) {
            $('.IRChartCurrency').text(IRChartCurrencyConverter.curCurrency);
        }
    } else if (globalChartActiveDisplayMode == chartDisplayModes.ta || globalChartActiveDisplayMode == chartDisplayModes.ta_intraday) {
        IRChartTAfeature.activeTA = [];
    } else if (globalChartActiveDisplayMode == chartDisplayModes.tsr || globalChartActiveDisplayMode == chartDisplayModes.tsr_intraday) {
        IRChartTSRfeature.activeTSR = [];
        IRChartTSRfeature.activeTSRcolor = [];
    }
    globalChartActiveDisplayMode = chartDisplayModes.historical;
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
// Global custom radio button
function addPrettyRadioBtn() {
    $("input[type=radio]").each(function () {
        var rb = $(this);
        rb.css('display', 'none');
        if (rb.is(':checked'))
            $('<span class="radioBtn checked"></span>').insertBefore(rb);
        else
            $('<span class="radioBtn"></span>').insertBefore(rb);
    })
    $(document).on('change', "input[type=radio]", function () {
        var n = $(this).attr('name');
        $("input[type=radio]").each(function () {
            ($(this).attr('name') == n ) ? $(this).prev().removeClass('checked') : 0;
        })
        $(this).is(':checked') ? $(this).prev().addClass('checked') : $(this).prev().removeClass('checked');
    })
}


// Finds closest index in object by given date timestamp and object key for date (object, timestamp, object date key)
function getClosestObjIndexByDate(obj, picked, key) {
    var arr = [];
    var origArr = [];
    for (var i = 0; i < obj.length; i++) {
        arr.push(new Date(obj[i][key]).getTime());
        origArr.push(new Date(obj[i][key]).getTime());
    }
    arr.sort(function (left, right) {
        return Math.abs(picked - left) - Math.abs(picked - right);
    });
    debugStep("Closest index [" + origArr.indexOf(arr[0]) + "] for timestamp [" + picked + "]");
    return origArr.indexOf(arr[0]);
}

function periodSelector(selector) {
    var period = 360;
    switch (selector) {
        case "d1":
            period = 24;
            break;
        case "d5":
            period = 120;
            break;
        case "m1":
            period = 30;
            break;
        case "m3":
            period = 90; //30 * 3
            break;
        case "m6":
            period = 180; //30 * 6
            break;
        case "y1":
            period = 365;
            break;
        case "y2":
            period = 730; //365 * 2
            break;
        case "y5":
            period = 1825; //365 * 5
            break;
        case "max":
            period = 9999;
            break;
    }
    return period;
}