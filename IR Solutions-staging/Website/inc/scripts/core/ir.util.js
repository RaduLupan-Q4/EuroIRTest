function isDev() {
    if (location.href.indexOf('localhost') > -1 || location.href.indexOf('http://ir.euroinvestor.com/SolutionsStaging') > -1 || location.href.indexOf('http://devir.euroinvestor.com/') > -1 || location.href.indexOf('file:') > -1) {
        if (navigator.userAgent.indexOf("MSIE") > -1) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}
//initAppInsights();
//if (location.href.indexOf('http://devir.euroinvestor.com/') > -1) {
//    initAppInsights();
//}

var debug = isDev();
if (debug) {
    var t0;
    var t1;
    var initTime = Date.now();
    var initTimeL = Date.now();
}

function initAppInsights() {
    debugStep("initAppInsights()");
    var appInsights = window.appInsights || function (config) {
        function r(config) {
            t[config] = function () {
                var i = arguments;
                t.queue.push(function () {
                    t[config].apply(t, i)
                })
            }
        }

        var t = { config: config }, u = document, e = window, o = "script", s = u.createElement(o), i, f;
        for (s.src = config.url || "//az416426.vo.msecnd.net/scripts/a/ai.0.js", u.getElementsByTagName(o)[0].parentNode.appendChild(s), t.cookie = u.cookie, t.queue = [], i = ["Event", "Exception", "Metric", "PageView", "Trace"]; i.length;) r("track" + i.pop());
        return r("setAuthenticatedUserContext"), r("clearAuthenticatedUserContext"), config.disableExceptionTracking || (i = "onerror", r("_" + i), f = e[i], e[i] = function (config, r, u, e, o) {
            var s = f && f(config, r, u, e, o);
            return s !== !0 && t["_" + i](config, r, u, e, o), s
        }), t
    }({
        instrumentationKey: "81488e8d-efb8-47f6-80b7-b4d516e15a23"
    });
    window.appInsights = appInsights;
    appInsights.trackPageView();
}

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
var IRProfileModule = false;
var IRPerformanceModule = false;
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
var useDividendData = false;

//
//  Triggers
//
var fetchNewsArticleData = false;

//
//  Features
//
var useIRChartNews = false;
var useIRChartTA = false;
var useIRChartTechnicalAnalysis = false;
var useIRChartCompare = false;
var useIRChartTSR = false;
var useIRChartCurrencyConversion = false;
var useIRCalcTSR = false;
var useFeatureStockOtherData = false;
var waitForAdditionalDataIRQuoteModule = false;
var useIRChartOuterTechnicalAnalysis = false;
var useFeatureCurrencyConversion = false;
var useIRChartCustomPreventDefault = false;
var useIRChartFullscreen = false;
var useIRChartSettings = false;

var useIRChartPressReleaseIRChartHeadline = false;
var usePressReleaseIRChartHeadlineData = false;
var useIRChartPressRelease = false;
var usePressReleaseData = false;
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
var globalRawCurrencyData;
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
    this.chartNavigationSettings = false;
    this.chartNavigationTAPlaceholderSpan = false;
    this.chartNavigationFullscreen = false;
    this.chartNavigationCurrencyConversionAdjustedPrice = false;
};
var chartTechnicalAnalysisModes = new function () {
    this.SMA = 'SMA';
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
    this.BolingerBands = "BolingerBands";
    this.MovingAverageEnvelope = "MovingAverageEnvelope";
    this.ParabolicSAR = "ParabolicSAR";
    this.MovingAverageConvergenceDivergence = "MovingAverageConvergenceDivergence";
};
var IRChartTechnicalAnalysisNamesCC = new function () {
    this.SimpleMovingAverage = "IRChartTASMA";
};
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
    this.BolingerBands = "Bolinger Bands";
    this.MovingAverageEnvelope = "Moving Average Envelope";
    this.ParabolicSAR = "Parabolic SAR";
    this.MovingAverageConvergenceDivergence = "Moving Average Convergence/Divergence";
};
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
// KM
var activeTA = [];
var activeTAlist = [];
var activeTAlistDates = [];
var activeTAcolor = [];
var activeTAdual = [];
var activeTAperiod = [];

//
var chartFeatureMode = chartDisplayModes.historical;
var activeSetType = 'area';
var activeSetAxisType = 'linear';
var chartAddHighLowLines = false;
// TSR
// KM new TSR feature object for chart
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
    lastSelectedMin: null,
    lastSelectedMax: null,
    redrawTSR: false,
    fetchData: true,
    startPoint: 0,
    // TSR
    updateTSR: function (id) {
        debugStep("updateTSR(" + id + ")");
        if (chartFeatureMode == chartDisplayModes.intraday) {
            globalActivePeriod = 'y1';
            updateActiveChartNavBarRangePeriod(globalActivePeriod);
            switchFeatureToHistoricalMode(356)
        } else if (globalChartActiveDisplayMode != chartDisplayModes.tsr) {
            resetIRChart();
            redrawIRChartInModeTSR();
        }
        if (IRChartTSRfeature.fetchData) {
            loadDividendBundle(clientStyle.amountOfHistoricalYears, 10);
            IRChartTSRfeature.fetchData = false;
            IRChartTSRfeature.applyTSR(id);
        } else {
            IRChartTSRfeature.applyTSR(id);
        }
    },

    applyTSR: function (TSRMode) {
        clientStyle.chart_CustomTooltipTopPX = -10;
        IRChartTSRfeature.stockDataClone = globalChartListingStockData[globalActiveListingIndex].slice(0);
        switch (TSRMode) {
            case "TSRSimple":
                $.when(requestDividendBundle).done(function (dataTSR) {
                    IRChartTSRfeature.dividentBundleData = dataTSR.dividend[0].data.slice(0);
                    IRChartTSRfeature.applySimpleTSRToChart();
                    // drawIRChartStockTSR();
                });
                break;
            case "TSRReinvest":
                $.when(requestDividendBundle).done(function (dataTSR) {
                    IRChartTSRfeature.dividentBundleData = dataTSR.dividend[0].data.slice(0);
                    IRChartTSRfeature.applyReinvestTSRToChart();
                    // drawIRChartStockTSR();
                });
                break;
        }
    },
    applySimpleTSRToChart: function () {
        debugStep("applySimpleTSRToChart");
        IRChartTSRfeature.dividendSimpleReal = [];
        var colourIndex = 1;
        var tsrDividend = IRChartTSRfeature.dividentBundleData;
        var tempStockData = globalChartListingStockData[globalActiveListingIndex];
        var j = 0;
        var k = 0;
        var kSet = false;
        if (tsrDividend.length != 0) {
            for (var i = 0; i < tsrDividend.length; i++) {
                var tempTimestamp = new Date(tsrDividend[i].extDate).getTime();
                for (j; j < tempStockData.length; j++) {
                    if (tempTimestamp <= tempStockData[j][0] && !kSet && tsrDividend.length != 0) {
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
        this.activeTSRcolor.push(globalChartColours[colourIndex]);
        IRChartTSRfeature.applyTSRnewData(globalChartColours[colourIndex], 'dividendSimpleData');
        IRChartTSRfeature.updateInterval();
    },
    applyReinvestTSRToChart: function () {
        debugStep("applyReinvestTSRToChart");
        IRChartTSRfeature.dividendReinvestReal = [];
        var colourIndex = 2;
        var tsrDividend = IRChartTSRfeature.dividentBundleData;
        var tempStockData = globalChartListingStockData[globalActiveListingIndex];
        var j = 0;
        var sB = 0; //shares bought
        var sO = 1; //shares owned
        var sBset = false;
        if (tsrDividend.length != 0) {
            for (var i = 0; i < tsrDividend.length; i++) {
                var tempTimestamp = new Date(tsrDividend[i].extDate).getTime();

                for (j; j < tempStockData.length; j++) {
                    if (tempTimestamp <= tempStockData[j][0] && !sBset && tsrDividend.length != 0) {
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
        this.activeTSRcolor.push(globalChartColours[colourIndex]);
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
        // this.selectedMin = globalChartDom.xAxis[0].min; // This is for resetting timestamp if there will be problem with tsr.
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
            this.dividendSimpleData = simpleData.slice(0);
            for (var c = 0; c < globalChartDom.series.length; c++) {
                if (globalChartDom.series[c].options.name == "dividendSimpleData") {
                    globalChartDom.series[c].update({ data: simpleData.slice(0) });
                }
            }
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
            this.dividendReinvestData = reinvestData.slice(0);
            for (var b = 0; b < globalChartDom.series.length; b++) {
                if (globalChartDom.series[b].options.name == "dividendReinvestData") {
                    globalChartDom.series[b].update({ data: this.dividendReinvestData });
                }
            }
            this.startPoint = zeroPointR;
        }
        var stockDump = [];
        for (var s = 0; s < this.stockDataClone.length; s++) {
            if (this.dividendDatesInChart[s] >= IRChartTSRfeature.selectedMin) {
                // stockDump.push([this.dividendDatesInChart[s], this.stockDataClone[s][1]/this.stockDataClone[this.startPoint][1]*100]);
                stockDump.push([this.dividendDatesInChart[s], this.stockDataClone[s][1]]);
            } else {
                // stockDump.push([this.dividendDatesInChart[s], 100 ]);
                stockDump.push([this.dividendDatesInChart[s], this.stockDataClone[s][1]]);
            }
        }
        globalChartDom.series[0].update({ data: stockDump });
        globalChartDom.redraw();
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
        IRChartTSRfeature.activeTSRcolor.splice(idS, 1);
        IRChartTSRfeature.activeTSR.splice(idS, 1);
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
        IRChartTSRfeature.activeTSR = [];
        IRChartTSRfeature.activeTSRcolor = [];
        resetIRChart();
    }
};
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
    this.huHU = 1038;
    this.itIT = 1040;
    this.skSK = 1051;
};
var translations = new function () {
    // Will be populated
};
var clientStyle = new function () {
    this.dataSource = false;
    this.chart_ColourMain = '#0284AA'; // Deprecated
    this.chart_ColourPlotBackground = '#ffffff';
    this.chart_ColourBackground = '#F9F9F9';
    this.chart_ColourBorder = '#E9E9E9';
    this.chart_ColourVolumeBars = '#aaaaaa';
    this.chart_DrawMode = 'area';
    this.chart_DrawModeMiniquote = 'line';
    this.chart_ChangePeriodSpacing = 40;
    this.chartNavigatorXAxisColor = '#888888';
    this.chartNavigatorXAxisIntradayColor = '#888888';
    this.chartNavigatorXAxisHistoricalColor = '#888888';
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

    this.chart_settingsHighLow = false;

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
    // KM for more currencies if needed
    this.chart_plusCurrency = [];
    this.setCustomExchangeTimezone = [];
};
var chartSettings = new function () {
    this.narrowWidth = 400;
    this.activeWidth = -1;
};
var clientLocaleParameters = new function () {
    this.decimalSeparator = ',';
    this.decimalSeparator1000 = '.';
};
var readyHandler = new function () {
    this.activeModulesCount = 0;
    this.activeModulesReady = 0;
    this.activeFeaturesCount = 0;
    this.activeFeaturesReady = 0;
};

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
                $.when(requestNewsDataInitial).done(function (newsDataInitial) {
                    globalAmountOfNewsItems = newsDataInitial.data.length;
                    var o = {
                        headers: translations,
                        data: newsDataInitial.data
                    };
                    //globalNewsRawData = o;
                    preloadIRChartNewsHistorical(o);
                });
            }

            if (useIRChartPressReleaseIRChartHeadline) {
                $.when(requestPressReleaseIRChartHeadlineData).done(function (newsDataInitial) {
                    //globalAmountOfNewsItems = newsDataInitial[0].data.length;
                    var o = {
                        headers: translations,
                        data: newsDataInitial.data
                    };
                    //globalNewsRawData = o;

                    preloadIRChartPressReleaseIRChartHeadlineHistorical(o);
                });
            }

            if (useIRChartPressRelease) {
                $.when(requestPressReleaseData).done(function (newsDataInitial) {
                    var o = {
                        headers: translations,
                        data: newsDataInitial[0].data
                    };
                    preloadIRChartPressReleaseHistorical(o);
                });
            }

            if (useIRChartTechnicalAnalysis) {
                attachClickHandlers('IRChartTechnicalAnalysis');
            }
            if (useIRChartCompare) {
                $.when(requestClosePriceListingData, requestClosePriceOtherData).done(function (closePriceListingData, closePriceOtherData) {
                    if (closePriceOtherData[0].data.length == 0) {
                        useIRChartCompare = false;
                        $('.IRChartComparison').remove();
                        $('.IRChartComparisonHeader').remove();
                    } else {
                        var o = {
                            headers: translations,
                            data: {
                                stock: stockData,
                                closePriceListing: closePriceListingData,
                                closePriceOther: closePriceOtherData
                            }
                        };
                        // KM reset comparison
                        preloadIRChartDataClosePriceOther(o);
                        attachClickHandlers('IRChartComparison');
                    }
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

                    // Todo amountOfNewsToLoad cut data

                    //globalNewsRawData = o;
                    buildNewsHeadlineTool(o);
                    attachClickHandlers('IRNewsHeadline');
                });
            }
            if (IREmailAlertModule) {
                $.when(requestTranslationsData).done(function () {
                    var o = {
                        headers: translations
                    }
                    buildEmailAlertTool(o);
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
            updateActiveChartNavBarRangePeriod(clientStyle.chart_DefaultPeriodSelected);
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
            updateActiveChartNavBarRangePeriod(clientStyle.chart_DefaultPeriodSelected);
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
            case "IRPerformance":
                IRPerformanceModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                useClosePriceBundleOtherData = true;
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
            case "IRChartTechnicalAnalysis":
                useIRChartTA = true;
                break;
            case "IRChartCompare":
                useIRChartCompare = true;
                break;
            case "IRChartTSR":
                useIRChartTSR = true;
                useDividendData = true;
                break;
            case "TA":
            case "IRChartOutsideTechnicalAnalysis":
                useIRChartOuterTechnicalAnalysis = true;
                break;
            case "IRCalcTSR":
                useIRCalcTSR = true;
                useDividendData = true;
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
            case "IRChartFullscreen":
                useIRChartFullscreen = true;
                break;
            case "IRChartSettings":
                useIRChartSettings = true;
                break;
            case "IRChartCustomPreventDefault":
                useIRChartCustomPreventDefault = true;
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
    return getValuesFromSplittedPath('SolutionID');
}
function getCustomerKeyRequired() {
    return getValuesFromSplittedPath('customerKey');
}
function getValuesFromSplittedPath(whatToGet) {
    //
    //  whatToGet =  solutionid | customerkey
    //
    whatToGet = whatToGet.toLowerCase()
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
                if (pathSplitGetParamsSub[0].toLowerCase() == whatToGet) {
                    fetchedValue = pathSplitGetParamsSub[1];
                }
            }
        }
        indexSolutionsFolder = -1;
    } else if (location.href.toLowerCase().indexOf("localhost") > -1) {
        indexSolutionsFolder = 2;
    }
    if (indexSolutionsFolder > -1) {
        switch (whatToGet) {
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
        if (whatToGet == "customerkey") {
            fetchedValue = "templatedevelopment";
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
function getCustomerKeyRequired_backup() {
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
        case "sk":
            lcidSelected = LCID.skSK;
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

        if (typeof (clientStyleOverwrite.chart_ChangePeriodSpacing) != "undefined") {
            clientStyle.chart_ChangePeriodSpacing = clientStyleOverwrite.chart_ChangePeriodSpacing;
        }

        if (clientStyleOverwrite.useDataSourceRKD != "undefined") {
            clientStyle.useDataSourceRKD = clientStyleOverwrite.useDataSourceRKD;
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
            if (IRPerformanceModule) {
                clientStyle.amountOfHistoricalYears = 1;
            }
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

        if (typeof (clientStyleOverwrite.chart_settingsHighLow) != 'undefined') {
            clientStyle.chart_settingsHighLow = clientStyleOverwrite.chart_settingsHighLow;
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
        // KM
        if (typeof (clientStyleOverwrite.chartCurrencyPlus) != "undefined") {
            clientStyle.chart_plusCurrency = clientStyleOverwrite.chartCurrencyPlus;
        }

        if (typeof (clientStyleOverwrite.chartNavigatorXAxisIntradayColor) != "undefined") {
            clientStyle.chartNavigatorXAxisIntradayColor = clientStyleOverwrite.chartNavigatorXAxisIntradayColor;
        }
        if (typeof (clientStyleOverwrite.chartNavigatorXAxisHistoricalColor) != "undefined") {
            clientStyle.chartNavigatorXAxisHistoricalColor = clientStyleOverwrite.chartNavigatorXAxisHistoricalColor;
        }
        if (typeof (clientStyleOverwrite.setCustomExchangeTimezone) != "undefined") {
            clientStyle.setCustomExchangeTimezone = clientStyleOverwrite.setCustomExchangeTimezone;
        }
        activeSetType = clientStyle.chart_DrawMode;
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
        case 'London Metals Exchange':
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

        case 'Prague Stock Exchange':
            moment.tz.add('Europe/Bratislava|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 16M0 1lc0 1tA0 17A0 11c0 1io0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00');
            moment.tz.link('Europe/Bratislava|Europe/Prague');
            globalActiveExchangeTimeZone = 'Europe/Bratislava';
            globalActiveLocalTimeZone = 'Central European Standard Time';
            break;

        case 'Jakarta Stock Exchange':
            moment.tz.add('Asia/Jakarta|BMT JAVT WIB JST WIB WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu');
            globalActiveExchangeTimeZone = 'Asia/Jakarta';
            globalActiveLocalTimeZone = 'Western Indonesian Time';
            break;

        case 'Warsaw Stock Exchange':
            moment.tz.add('Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00');
            globalActiveExchangeTimeZone = 'Europe/Warsaw';
            globalActiveLocalTimeZone = 'Central European Standard Time';
            break;

        case 'Bratislava Stock Exchange':
            moment.tz.add('Europe/Bratislava|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 16M0 1lc0 1tA0 17A0 11c0 1io0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00');
            moment.tz.link('Europe/Bratislava|Europe/Prague');
            globalActiveExchangeTimeZone = 'Europe/Bratislava';
            break;

        case 'Cairo and Alexandria Stock Exchange':
            moment.tz.add('Africa/Cairo|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0 1o10 jz0 gN0 pb0 1qN0 dX0 e10 xz0 1o10 bb0 e10 An0 1o10 5z0 e10 FX0 1o10 2L0 e10 IL0 1C10 Lz0 1wp0 TX0 1qN0 WL0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0');
            moment.tz.link('Africa/Cairo|Egypt');
            globalActiveExchangeTimeZone = 'Africa/Cairo';
            break;

        case 'Mexico Variable Income (Equities)':
            moment.tz.add('America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0');
            moment.tz.link('America/Mexico_City|Mexico/General');
            globalActiveExchangeTimeZone = 'America/Mexico_City';
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

    if (clientStyle.setCustomExchangeTimezone.length > 0) {
        var listingCounter = 0;
        for (var i = 0; i < clientStyle.setCustomExchangeTimezone.length; i++) {
            if (i == globalActiveListingIndex) {
                switch (clientStyle.setCustomExchangeTimezone[i].toLowerCase()) {
                    case "euronext lisbon":
                        //moment.tz.add('Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ldXn.f aPWn.f Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00');
                        //moment.tz.link('Europe/Lisbon|Portugal');
                        //globalActiveExchangeTimeZone = 'Europe/Lisbon';
                        moment.tz.add('Europe/Belfast|GMT BST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00');
                        moment.tz.link('Europe/Belfast|Europe/London');
                        globalActiveExchangeTimeZone = 'Europe/London';
                        globalActiveLocalTimeZone = 'GMT Standard Time';
                        break;
                }
            }
        }
    }

    globalActiveLocalTimeZoneShort = new moment.tz(globalActiveExchangeTimeZone).zoneAbbr();

}
function getExchangeCity(exchange) {
    var exchangeCity = "";
    switch (exchange) {
        case "OMX Nordic Equities":
            exchangeCity = "NASDAQ";
            break;
        case "OMX Nordic Indices":
            exchangeCity = "NASDAQ";
            break;
        case "London Stock Exchange":
            exchangeCity = "London";
            break;
        case "London Metals Exchange":
            exchangeCity = "LME";
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
        case 'Johannesburg Stock Exchange':
            exchangeCity = "JSE";
            break;
        case 'Nasdaq OTC Foreign':
            exchangeCity = "Nasdaq";
            break;
        case 'Prague Stock Exchange':
            exchangeCity = "Prague";
            break;
        case 'Milan Ced Borsa':
            exchangeCity = "MIL";
            break;
        case 'Canadian Venture Exchange':
            exchangeCity = "CDNX";
            break;
        case 'Jakarta Stock Exchange':
            exchangeCity = "Jakarta";
            break;
        case 'Warsaw Stock Exchange':
            exchangeCity = "Warsaw";
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
        case "OMX Nordic Indices":
            exchangeShort = "NASDAQ OMX";
            break;
        case "London Stock Exchange":
            exchangeShort = "LSE";
            break;
        case "London Metals Exchange":
            exchangeShort = "LME";
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
            exchangeShort = "MIL";
            break;
        case 'ICAP Securities and Derivatives Exchange':
            exchangeShort = "ISDX";
            break;
        case 'Canadian Venture Exchange':
            exchangeShort = "CDNX";
            break;
        case 'Prague Stock Exchange':
            exchangeShort = "PSE";
            break;
        case 'Jakarta Stock Exchange':
            exchangeShort = "JSX";
            break;
        case 'Warsaw Stock Exchange':
            exchangeShort = "Warsaw";
            break;
        case 'Toronto Stock Exchange':
            exchangeShort = "TSX";
            break;
        case 'Bratislava Stock Exchange':
            exchangeShort = "BSSE";
            break;
        case 'Cairo and Alexandria Stock Exchange':
            exchangeShort = "EGX";
            break;
        case 'Mexico Variable Income (Equities)':
            exchangeShort = "MVI";
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
    //debugStep("getChartDOM()");
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
        case "MM.DD.YYYY HH:mm":
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
        tooltipStr += "<div class=\"IRChartTooltipOpen\"><span class=\"subHeader\">" + getOHLCfromTranslations('o') + "</span>" +
            "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span>" +
            "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
        //}
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideHigh) {
    }
    else {
        // if (typeof (globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex]) != 'undefined') {
        tooltipStr += "<div class=\"IRChartTooltipHigh\"><span class=\"subHeader\">" + getOHLCfromTranslations('h') + "</span>" +
            "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</span>" +
            "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</span></div>";
        //}
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideLow) {
    }
    else {
        //if (typeof (globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex]) != 'undefined') {
        tooltipStr += "<div class=\"IRChartTooltipLow\"><span class=\"subHeader\">" + getOHLCfromTranslations('l') + "</span>" +
            "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</span>" +
            "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</span></div>";
        //}
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideClose) {
    }
    else {
        //if (typeof (globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex]) != 'undefined') {
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span>" +
            "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</span>" +
            "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</span></div>";
        //}
        //tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex].closePrice) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideVolume) {
    }
    else {
        //if (typeof (globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex]) != 'undefined') {
        tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span>" +
            "<span class=\"subShadow\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span>" +
            "<span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span></div>";
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
        tooltipStr += "<div class=\"IRChartTooltipOpen\"><span class=\"subHeader\">" + getOHLCfromTranslations('o') + "</span>" +
            "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span>" +
            "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideHigh) {
    }
    else {
        tooltipStr += "<div class=\"IRChartTooltipHigh\"><span class=\"subHeader\">" + getOHLCfromTranslations('h') + "</span>" +
            "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</span>" +
            "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</span></div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideLow) {
    }
    else {
        tooltipStr += "<div class=\"IRChartTooltipLow\"><span class=\"subHeader\">" + getOHLCfromTranslations('l') + "</span>" +
            "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</span>" +
            "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</span></div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideClose) {
    }
    else {
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span>" +
            "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</span>" +
            "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</span></div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideVolume) {
    }
    else {
        tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span>" +
            "<span class=\"subShadow\">" + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span>" +
            "<span class=\"subContent\">" + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span></div>";
    }
    return tooltipStr;
}
// KM real working TSR tooltip
function getTooltipStrSubTSR(dateIndex) {
    var tooltipStr = "";
    if (chartFeatureMode == chartDisplayModes.intraday) {
        tooltipStr += "<div class=\"IRChartTooltipDate\">" + new moment(globalChartListingIntradayDataDates[dateIndex]).format(clientStyle.formatDate) + "</div>";
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span>" +
            "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span>" +
            "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
        tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span>" +
            "<span class=\"subShadow\">" + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span>" +
            "<span class=\"subContent\">" + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span></div>";
        tooltipStr += "<div class='tooltipSep'></div>";
    } else {
        tooltipStr += "<div class=\"IRChartTooltipDate\">" + new moment(IRChartTSRfeature.dividendDatesInChart[dateIndex]).format(clientStyle.formatDate) + "</div>";
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span>" +
            "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockData[globalActiveListingIndex][dateIndex][1]) + "</span>" +
            "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockData[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
        tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span>" +
            "<span class=\"subShadow\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span>" +
            "<span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span></div>";
        tooltipStr += "<div class='tooltipSep'></div>";

        for (var i = 0; i < IRChartTSRfeature.activeTSR.length; i++) {
            tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator color" + IRChartTSRfeature.activeTSRcolor[i].replace('#', '') + " active\">" +
                "</span>" + IRChartTSRfeature.activeTSR[i].replace("Data", "").replace("dividend", "") + ": </span>" +
                "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(IRChartTSRfeature[IRChartTSRfeature.activeTSR[i]][dateIndex][1]) + "</span>" +
                "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(IRChartTSRfeature[IRChartTSRfeature.activeTSR[i]][dateIndex][1]) + "</span></div>";
        }
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
            var TSRDateIndex = 0;
            if (chartFeatureMode == chartDisplayModes.intraday) {
                TSRDateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
                if (TSRDateIndex == -1) {
                    TSRDateIndex = getClosestDateIndexForListingTSR(globalChartListingIntradayDataDates[globalActiveListingIndex], date);
                    if (dateIndex == -1) {
                        debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
                    }
                }
            } else {
                TSRDateIndex = IRChartTSRfeature.dividendDatesInChart.indexOf(date);
                if (TSRDateIndex == -1) {
                    TSRDateIndex = getClosestDateIndexForListingTSR(IRChartTSRfeature.dividendDatesInChart, date);
                    if (dateIndex == -1) {
                        debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
                    }
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
        case chartDisplayModes.comparison:
        case chartDisplayModes.ta:
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
            var TSRDateIndex = 0;
            if (chartFeatureMode == chartDisplayModes.intraday) {
                dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
                if (dateIndex == -1) {
                    dateIndex = getClosestDateIndexForListingIntraday(date);
                    if (dateIndex == -1) {
                        debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
                    }
                }
                tooltipStrSub += getTooltipStrSubIntraday(dateIndex);
            } else {
                TSRDateIndex = IRChartTSRfeature.dividendDatesInChart.indexOf(date);
                if (TSRDateIndex == -1) {
                    TSRDateIndex = getClosestDateIndexForListingTSR(IRChartTSRfeature.dividendDatesInChart, date);
                    if (dateIndex == -1) {
                        debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
                    }
                }
                tooltipStrSub += getTooltipStrSubTSR(TSRDateIndex);
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

    if (typeof (translations.t_v) == 'undefined') {
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
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }
            catch (err) {
                var newDateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('c') + " " + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][4]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('v') + " " + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][5]) + "</div>";
            }
            break;
        case chartDisplayModes.intraday:
            try {
                dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";

                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";

            }
            catch (err) {
                var newDateIndex = getClosestDateIndexForListingIntraday(date);
                tooltipStr += "<div>" + new moment(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][newDateIndex][0]).format(clientStyle.formatDateTime) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('c') + " " + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][newDateIndex][4]) + "</div>";

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
    //            tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
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
                        if (globalChartActiveDisplayMode == chartDisplayModes.comparison || globalChartActiveDisplayMode == chartDisplayModes.ta || globalChartActiveDisplayMode == chartDisplayModes.tsr) {
                            switchFeatureToHistoricalMode(days);
                        } else {
                            stateNewHistoricalPeriodSelected(days);
                        }
                    }


                    if (hours > 0) {
                        if (globalChartActiveDisplayMode == chartDisplayModes.comparison || globalChartActiveDisplayMode == chartDisplayModes.ta || globalChartActiveDisplayMode == chartDisplayModes.tsr) {
                            switchFeatureToIntradayMode(hours);
                        } else {
                            stateNewIntradayPeriodSelected(hours);
                        }
                    }


                });
            }
            break;
    }
}

function switchFeatureToHistoricalMode(days) {
    if (chartFeatureMode == chartDisplayModes.intraday) {
        clientStyle.chartNavigatorXAxisColor = clientStyle.chartNavigatorXAxisHistoricalColor;
        if (globalChartActiveDisplayMode == chartDisplayModes.tsr) {
            globalChartDom.destroy();
            globalChartActiveDisplayMode = chartDisplayModes.tsr;
            drawIRChartHtmlTSR();
            drawActiveListingToChartHistorical();
            updateChartNavBarRange('IRChart');

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
            globalChartDom.redraw();
        } else if (globalChartActiveDisplayMode == chartDisplayModes.ta) {
            globalChartDom.destroy();
            drawIRChartHtmlTA();
            drawActiveListingToChartHistorical();
            updateChartNavBarRange('IRChart');
            globalChartDom.series[0].update({
                type: 'line'
            }, false, 0);
            var tempTA = activeTA.slice();
            var tempTAcol = activeTAcolor.slice();
            var tempTAper = activeTAperiod.slice();
            activeTA = [];
            activeTAcolor = [];
            activeTAlist = [];
            activeTAlistDates = [];
            activeTAdual = [];
            $('.IRChartTAPlaceholder').html('');
            tempTA.forEach(function (item, index) {
                applyAnalysis(item, tempTAcol[index], tempTAper[index]);
            });
            globalChartDom.redraw();
        } else if (globalChartActiveDisplayMode == chartDisplayModes.comparison) {
            globalChartDom.destroy();
            drawIRChartHTMLCompare();
            drawActiveListingHistoricalToIRChartHTMLCompare();
            if (IRChartCurrencyConverter.isCurrencyActive()) {
                IRChartCurrencyConverter.recalculateComparisonWithCurency();
            }
            activeCompareUid.forEach(function (item, index) {
                addCompareSeriesToChart(activeCompare[index], item, '');
                globalChartDom.yAxis[0].setCompare('percent');
            })
        }

        chartFeatureMode = chartDisplayModes.historical
    }
    setChartExtremes(chartDisplayModes.historical, days);
}

function switchFeatureToIntradayMode(hours) {
    if (chartFeatureMode == chartDisplayModes.historical) {
        globalChartMinRange = 24 * 3600 * 1000;
        clientStyle.chartNavigatorXAxisColor = clientStyle.chartNavigatorXAxisIntradayColor;
        drawIRChartHTML();
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
        chartFeatureMode = chartDisplayModes.intraday;
    }
    setChartExtremes(chartDisplayModes.intraday, hours);
    drawPlotLineToChart();
    globalChartDom.redraw();
}

function updateActiveChartNavBarRangePeriod(period) {
    debugStep("updateActiveChartNavBarRangePeriod");
    $('div.chartChangePeriod div').removeClass('activePeriod');
    $('div.chartChangePeriod div#' + period).addClass('activePeriod');

    $('div.IRChartChangePeriod div').removeClass('activePeriod');
    $('div.IRChartChangePeriod div#' + period).addClass('activePeriod');
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

// KM SS
//var activeSetType = clientStyle.chart_DrawMode;
//var activeSetAxisType = 'linear';


function attachClickHandlers(module) {
    debugStep("attachClickHandlers(" + module + ")");
    // KM SS
    if (useIRChartCompare) {
        if (!chartEnabledClickHandlers.chartNavigationComparison) {
            if (typeof ($('.IRChartNavigation .IRChartComparison.IRChartComparisonHeader')) == 'object') {
                $('.IRChartComparisonHeader').click(function () {
                    debugStep("clicked '.IRChartComparisonHeader' in attachClickHandlers");
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

                    var cl = $('.IRChartComparisonBody').clone().css({
                        position: "absolute",
                        top: "-10000",
                        display: "block"
                    }).appendTo('.IRChartModule');
                    var heCl = cl[0].clientHeight;
                    cl.remove();
                    if (heCl > 400) {
                        $('.IRChartComparisonBodyList').slimScroll({
                            height: '400px',
                            railVisible: true
                        });
                    }
                    // events for placeholder
                    $(window).on('resize', function () {
                        if ($('.IRChartComparisonPlaceholder div:visible').length != 0)
                            IRChartComparisonplaceholderChange();
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

                    $('.IRChartComparisonBodyList .basicButtonLook').click(function () {
                        debugStep("clicked '.IRChartComparisonBodyList .basicButtonLook' in attachClickHandlers");
                        activeSetType = clientStyle.chart_DrawMode;
                        activeSetAxisType = 'linear';
                        if (chartFeatureMode == chartDisplayModes.intraday) {
                            globalActivePeriod = 'y1';
                            updateActiveChartNavBarRangePeriod(globalActivePeriod);
                            switchFeatureToHistoricalMode(365);
                        }
                        var type = $(this).attr('id').split("_")[0];
                        var id = $(this).attr('id').split("_")[1];
                        var uniqueID = $(this).attr('id').split("_")[2];
                        updateComparison(type, id, uniqueID, $(this));

                        activeTA = [];
                        $('.IRChartTA .basicButtonLook').removeClass('active');
                    });

                    $('#IRChartNavigationClearComparison').click(function () {
                        debugStep("clicked '#IRChartNavigationClearComparison' in attachClickHandlers");
                        resetIRChart();
                        if (IRChartCurrencyConverter.isCurrencyActive()) {
                            $('.IRChartCurrency').text(IRChartCurrencyConverter.curCurrency);
                        }
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
    // KM SS
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
                $('.IRChartTABodyList').slimScroll({
                    height: '400px',
                    railVisible: true
                });
                $(window).on('resize', function () {
                    if ($('.IRChartTAPlaceholder div').length != 0)
                        IRChartTAplaceholderChange();
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
                $('.IRChartTABodyList .basicButtonLook').click(function () {
                    if ($(this).not('#IRChartNavigationClearTA')) {
                        debugStep("clicked '.IRChartTABodyList .basicButtonLook' in attachClickHandlers");
                        $('.IRChartTABodyList').slimScroll();
                        activeSetType = clientStyle.chart_DrawMode;
                        activeSetAxisType = 'linear';

                        var typeId = $(this).data('type');
                        if ($(this).hasClass('active')) {
                            removeThisTechnicalAnalysis(typeId);
                            $(this).removeClass('active');
                            if (activeTA.length == 0) {
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
                    if (activeTA.length == 0) {
                        activeTAlist = [];
                        activeTAlistDates = [];
                        activeTAdual = [];
                        activeTAcolor = [];
                        drawIRChartHtmlTA();
                    }
                    var popDom = $(this).parent().parent();
                    var typeId = popDom.data('type');
                    var colorId = popDom.data('color');
                    var period = [];
                    popDom.find('.period-list').each(function (idx) {
                        period.push($(this).val());
                    });
                    updateTechnicalAnalysis(typeId, colorId, period);
                    popDom.addClass('active');
                });

                $('.IRChartNavigation .IRChartTA .inputBox .period-list').on('keydown', function (event) {
                    if (event.keyCode == 13) {
                        $(this).parent().find('.pop-submit').click();
                    }
                });
                $('#IRChartNavigationClearTA').click(function () {
                    debugStep("clicked '#IRChartNavigationClearTA' in attachClickHandlers");
                    activeTA = [];
                    globalChartActiveDisplayMode = chartDisplayModes.historical;
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
                    $('.IRChartMenuTrigger').removeClass('icon-arrow');
                    $('.IRChartNavigation .IRChartComparison').removeClass('active');
                    $('.IRChartTA .IRChartTABody').css('display', 'none');

                } else {
                    $('.IRChartMenuTrigger').addClass('icon-arrow');
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
    // KM SS
    if (useIRChartTSR) {
        if (!chartEnabledClickHandlers.chartNavigationTSR) {

            $('.IRChartTSRHeader').click(function () {
                debugStep("clicked '.IRChartTSRHeader' in attachClickHandlers");
                if ($('.IRChartTSR .IRChartTSRBody').css('display') == 'block') {

                    // $('.IRChartNavigation .IRChartTSR').removeClass('active');
                    $(this).parent().removeClass('active');
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
                    activeSetType = clientStyle.chart_DrawMode;
                    activeSetAxisType = 'linear';

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
                    activeTA = [];
                });
                $('#IRChartNavigationClearTSR').click(function () {
                    debugStep("clicked '#IRChartNavigationClearTSR' in attachClickHandlers");
                    $('.IRChartTSRBody .basicButtonLook').removeClass('active');
                    IRChartTSRfeature.cleanTSRchartData();
                });
            }
        }
        IRChartNavigationShowHide('IRChartTSRBody');
    }


    // KM click handler CurrencyConverter
    if (useIRChartCurrencyConversion) {
        IRChartCurrencyConverter.curCurrency = getActiveCurrency();
        $('.IRChartCCHeader').on('click', function () {
            debugStep("clicked '.IRChartCCHeader' in attachClickHandlers");
            if ($('j').css('display') == 'block') {

                $('.IRChartNavigation .IRChartCC').removeClass('active');
                $('.IRChartCC .IRChartCCBody').css('display', 'none');

            } else {
                $(this).parent().addClass('active');
                IRChartNavigationCloseOpenBodyDivs();
                $('.IRChartCC .IRChartCCBody').css('display', 'block');
            }
        });
        chartEnabledClickHandlers.chartNavigationCC = true;

        var cl = $('.IRChartCCBody').clone().css({
            position: "absolute",
            top: "-10000",
            display: "block"
        }).appendTo('.IRChartModule');
        var heCl = cl[0].clientHeight;
        cl.remove();
        if (heCl > 400) {
            $('.IRChartCCBodyList').slimScroll({
                height: '400px',
                railVisible: true
            });
        }

        $('.IRChartCCBody .convert-btn').click(function () {
            debugStep("clicked '.IRChartCCBody .basicButtonLook' in attachClickHandlers");
            if ($(this).data('cr') == 'clear') {
                if (IRChartCurrencyConverter.isCurrencyActive()) {
                    IRChartCurrencyConverter.chartCurrencyConverterClear();
                }
                resetIRChart();
            } else {
                IRChartCurrencyConverter.converted = false;
                IRChartCurrencyConverter.chartCurrencyConverterUpdate($(this).data('cr'));
                if (globalChartActiveDisplayMode != chartDisplayModes.comparison) {
                    resetIRChart();
                    $('.IRChartCurrency').text(IRChartCurrencyConverter.curCurrency);
                }
            }
        });

        IRChartNavigationShowHide('IRChartCCBody');
    }

    // KM FS

    if (useIRChartFullscreen && checkForBrowserFullscreen()) {
        $('.IRChartFullscreen').on('click', function () {
            chartFullscreenToogle();
        });
        $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function (e) {
            var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;
            if (!state) {
                $('.IRChartFullscreenHeader.icon').removeClass('icon-shrink');
                $('.IRChartFullscreenHeader.icon').addClass('icon-enlarge');
                $('.IRChartModule').removeClass('fullMode');
                globalChartDom.reflow();
            }
        });
    }

    // KM SS
    if (useIRChartSettings) {
        $('.IRChartSettingsHeader').on('click', function () {
            debugStep("clicked '.IRChartCCHeader' in attachClickHandlers");
            if ($('j').css('display') == 'block') {

                $('.IRChartNavigation .IRChartSettings').removeClass('active');
                $('.IRChartSettings .IRChartSettingsBody').css('display', 'none');

            } else {
                $(this).parent().addClass('active');
                IRChartNavigationCloseOpenBodyDivs();
                $('.IRChartSettings .IRChartSettingsBody').css('display', 'block');
            }
        });

        $('.IRChartSettingsBody .basicButtonLook:not(.highLow)').click(function () {
            debugStep("clicked '.IRChartSettingsBody .basicButtonLook' in attachClickHandlers");
            if (globalChartActiveDisplayMode != chartDisplayModes.historical && globalChartActiveDisplayMode != chartDisplayModes.intraday) {
                globalChartActiveDisplayMode = chartDisplayModes.historical;
                activeTA = [];
                resetIRChart();
            }

            var type = $(this).data('type');
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

            if (type == 'dot') {
                globalChartDom.series[0].update({
                    type: 'line',
                    marker: {
                        enabled: true,
                        radius: 3
                    }
                });
                $('.IRChartSettings .basicButtonLook.selectableItem:not(.moder)').removeClass("active");
                activeSetType = type;
            } else if (type == 'candlestick') {
                globalChartDom.series[0].update({
                    type: type,
                    marker: {
                        enabled: false
                    }
                });
                $('.IRChartSettings .basicButtonLook.selectableItem:not(.moder)').removeClass("active");
                activeSetType = type;
            } else if (type != 'linear' && type != 'logarithmic') {
                globalChartDom.series[0].update({
                    type: type,
                    marker: {
                        enabled: false
                    }
                });
                $('.IRChartSettings .basicButtonLook.selectableItem:not(.moder)').removeClass("active");
                activeSetType = type;
            } else if (type == 'linear' || type == 'logarithmic') {
                globalChartDom.yAxis[0].update({
                    type: type
                });
                $('.IRChartSettings .basicButtonLook.selectableItem.moder').removeClass("active");
                activeSetAxisType = type;
            }

            $(this).addClass('active');
            globalChartDom.redraw()
        });

        if (clientStyle.chart_settingsHighLow && !chartEnabledClickHandlers.chartNavigationSettings) {
            $('.IRChartSettingsBody .basicButtonLook.highLow').on('click', function () {
                if (globalChartActiveDisplayMode != chartDisplayModes.historical && globalChartActiveDisplayMode != chartDisplayModes.intraday) {
                    globalChartActiveDisplayMode = chartDisplayModes.historical;
                    activeTA = [];
                    resetIRChart();
                }
                if ($(this).hasClass('active')) {
                    removeHighLowPlotLineToChartCustom();
                    $(this).removeClass('active');
                } else {
                    updateHighLowPlotLineToChartCustom(globalChartDom.yAxis[0].getExtremes());
                    $(this).addClass('active');
                }
            });
        }

        $('#IRChartNavigationClearSettings').on('click', function () {
            resetIRChart();
        });
        chartEnabledClickHandlers.chartNavigationSettings = true;
        IRChartNavigationShowHide('IRChartSettingsBody');
    }

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
                $('.IRChartTSRHeader, .IRChartTAHeader, .IRChartComparisonHeader, .IRChartCCHeader, .IRChartSettingsHeader').on('click', function () {
                    $('.IRChartMenuTrigger').addClass('icon-arrow');
                    $('.IRChartMenuTriggerBody').css('display', 'none');
                });
                $('.IRChartMenuTrigger.icon-arrow').on('click', function () {
                    $(this).removeClass('icon-arrow');
                    $('.IRChartMenuTriggerBody').css('display', 'block');
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


function removeHighLowPlotLineToChartCustom() {
    globalChartDom.yAxis[0].removePlotLine('chartPlotLineHigh');
    globalChartDom.yAxis[0].removePlotLine('chartPlotLineLow');
    globalChartDom = getChartDOM();
}

function updateHighLowPlotLineToChartCustom(extremes) {
    debugStep("updateHighLowPlotLineToChartCustom()");
    // High
    // globalChartDom.yAxis[0].removePlotLine('chartPlotLineHigh');
    globalChartDom.yAxis[0].addPlotLine({
        value: extremes.dataMax,
        width: 1,
        color: 'green',
        dashStyle: 'dash',
        id: 'chartPlotLineHigh',
        zIndex: 1000,
        label: {
            text: 'High ' + formatDecimal(extremes.dataMax),
            align: 'left',
            y: -5,
            x: 5,
            width: 0,
            useHTML: false,
            style: {
                color: 'green'
            }
        }
    });

    // Low
    // globalChartDom.yAxis[0].removePlotLine('chartPlotLineLow');
    globalChartDom.yAxis[0].addPlotLine({
        value: extremes.dataMin,
        width: 1,
        color: 'red',
        dashStyle: 'dash',
        id: 'chartPlotLineLow',
        zIndex: 1000,
        label: {
            text: 'Low ' + formatDecimal(extremes.dataMin),
            align: 'left',
            y: -5,
            x: 5,
            width: 0,
            useHTML: false,
            style: {
                color: 'red'
            }
        }
    });
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
                    Date.UTC(toDate.year(), toDate.month(), toDate.date(), toDate.hour(), toDate.minute()),
                    false
                );
            } else {
                fromDate.add('days', -period);
                globalChartDom.xAxis[0].setExtremes(
                    Date.UTC(fromDate.year(), fromDate.month(), fromDate.date(), fromDate.hour(), fromDate.minute()),
                    Date.UTC(toDate.year(), toDate.month(), toDate.date(), toDate.hour(), toDate.minute()),
                    false
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
                    Date.UTC(toDate.year(), toDate.month(), toDate.date(), toDate.hour(), toDate.minute()),
                    false
                );
            } else {

                fromDate.add('hours', -period);
                globalChartDom.xAxis[0].setExtremes(
                    Date.UTC(fromDate.year(), fromDate.month(), fromDate.date(), fromDate.hour(), fromDate.minute()),
                    Date.UTC(toDate.year(), toDate.month(), toDate.date(), toDate.hour(), toDate.minute()),
                    false




                    //fromDate.valueOf(),
                    //lastEntryUnixDate

//Date.UTC(firstDate.year(), firstDate.month(), firstDate.date(), firstDate.hour(), firstDate.minute()),
//Date.UTC(toDate.year(), toDate.month(), toDate.date(), toDate.hour(), toDate.minute())

                    //new Date(fromDate.year(), fromDate.month(), fromDate.date(), fromDate.hour(), fromDate.minute()),
                    //new Date(toDate.year(), toDate.month(), toDate.date(), 16, 0)
                );
            }
            break;
    }
    globalChartDom.redraw();
    // KM
    if (period == 365) {
        $('.IRChartChangePeriod').find('#y1').click();
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
function getClosestDateIndexForListingTSR(datesArray, unixDate) {
    var iterations = -1;
    var newUnixDate = 0;

    //if (typeof (IRChartTSR.stockDataTSRCloneDates) == 'object') {
    for (var i = 0; i < datesArray.length - 1; i++) {
        if (newUnixDate < unixDate) {
            newUnixDate = datesArray[i];
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
// KM better thousands separator
function formatNumberWithLocalDelimiters(number) {
    try {
        if (typeof (number) == 'number') {
            if (!!(number).toString().split(".")[1]) {
                number = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);
                var h = number.toString().split(".");
                return h[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000) + clientLocaleParameters.decimalSeparator + h[1];
            } else {
                return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000);
            }
        } else {
            return "-";
        }
    }
    catch (err) {
        return "-";
    }
}
function formatNumberWithLocalDelimitersZeroDecimals(number) {

    try {
        if (typeof (number) == 'number') {

            if (clientStyle.amountOfDecimals > 0) {
                number = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);
                var h = number.toString().split(".");
                return h[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000) + clientLocaleParameters.decimalSeparator + h[1];
            } else {
                if (number >= 1000) {
                    number = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);
                    var h = number.toString().split(".");
                    return h[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000) + clientLocaleParameters.decimalSeparator;
                } else {
                    number = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);
                    return number;
                }
            }

        } else {
            return "-";
        }
    }
    catch (err) {
        return "-";
    }
}
// KM FS
function chartFullscreenToogle() {
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
        $('.IRChartFullscreenHeader.icon').removeClass('icon-enlarge');
        $('.IRChartFullscreenHeader.icon').addClass('icon-shrink');
        $('.IRChartModule').addClass('fullMode');
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
        $('.IRChartFullscreenHeader.icon').removeClass('icon-shrink');
        $('.IRChartFullscreenHeader.icon').addClass('icon-enlarge');
        $('.IRChartModule').removeClass('fullMode');
        globalChartDom.reflow();
    }
}
function checkForBrowserFullscreen() {
    return window.navigator.userAgent.indexOf("MSIE ") == -1 && !(/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor));
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
        case "MM.DD.YYYY":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%m.%d.%Y',
                week: '%m.%d.%Y',
                month: '%m.%Y',
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
        case "MM/DD/YYYY":
            debugStep("case: DD/MM/YYYY");
            var dateTimeLabelFormats = {
                second: '%m/%d/%Y',
                minute: '%m/%d/%Y',
                hour: '%m/%d/%Y',
                day: '%m/%d/%Y',
                week: '%m/%d/%Y',
                month: '%m/%d/%Y',
                year: '%m/%d/%Y'
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
        case "YYYY/MM/DD":
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
                case "DD.MM.YYYY":
                    debugStep("case: DD.MM.YYYY");
                    var dateTimeLabelFormats = {
                        second: '%d.%m.%Y',
                        minute: '%d.%m.%Y',
                        hour: '%d.%m.%Y',
                        day: '%d.%m.%Y',
                        week: '%d.%m.%Y',
                        month: '%d.%m.%Y',
                        year: '%d.%m.%Y'
                    };
                    break;
                case "MM/DD/YYYY":
                    debugStep("case: MM/DD/YYYY");
                    var dateTimeLabelFormats = {
                        second: '%m/%d/%Y',
                        minute: '%m/%d/%Y',
                        hour: '%m/%d/%Y',
                        day: '%m/%d/%Y',
                        week: '%m/%d/%Y',
                        month: '%m/%d/%Y',
                        year: '%m/%d/%Y'
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
                case "DD-MMM-YYYY":
                    debugStep("case: DD-MMM-YYYY");
                    var dateTimeLabelFormats = {
                        second: '%d-%B-%Y',
                        minute: '%d-%B-%Y',
                        hour: '%d-%B-%Y',
                        day: '%d-%B-%Y',
                        week: '%d-%B-%Y',
                        month: '%d-%B-%Y',
                        year: '%d-%B-%Y'
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
};
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
    //var searchFromDate = new Date(searchFromYear, searchFromMonth, 1);
    //var searchToDate = new Date(searchToYear, searchToMonth);

    var searchFromDate = new Date(moment((parseInt(searchFromMonth) + 1) + ' ' + searchFromYear, 'MM YYYY').format('MM/DD/YYYY'));
    var searchToDate = new Date(moment((parseInt(searchToMonth) + 1) + " " + searchToYear, 'MM YYYY').add(1, 'months').format('MM/DD/YYYY'));

    // searchToDate.setMonth(searchToDate.getMonth() + 1);
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

            //Fix for IE and firefox since date was NaN before
            var dateFound = $(this).find('.IRDate').attr('id').split('-');
            var yearFound = dateFound[0];
            var monthFound = getMonthFromString(dateFound[1]);
            var newsDate = new Date(moment((parseInt(monthFound)) + " " + yearFound, 'MM YYYY').format('MM/DD/YYYY'));

            //
            //  Category filters
            //

            if (searchFilters.indexOf('allRNSnews') == -1) {

                if (searchFilters.split(';').indexOf(newsFilters) < 1) {
                    $(this).addClass('hide');
                    hideThis = true;
                }
                else {
                    hideThis = false;
                    $(this).removeClass('hide');
                }
            }

            //
            //  Periond filters
            //
            if (newsDate < searchFromDate) {

                debugStep("newsYear < searchFromYear: " + yearFound < searchFromYear);
                $(this).addClass('hide');
                hideThis = true;
            }
            if (newsDate >= searchToDate) {
                $(this).addClass('hide');
                hideThis = true;
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
            var dateFound = $(this).find('.date').attr('id').split('-');

            var newsFilters = $(this).find('.title').attr('id');
            var newsHeadlie = $(this).find('.title').html().toLowerCase();

            var yearFound = dateFound[0];
            var monthFound = getMonthFromString(dateFound[1]);

            var newsDate = new Date(moment((parseInt(monthFound)) + " " + yearFound, 'MM YYYY').format('MM/DD/YYYY'));

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
            //  Periond filters
            //
            if (newsDate < searchFromDate) {
                $(this).addClass('hide');
                hideThis = true;
            }
            if (newsDate >= searchToDate) {
                $(this).addClass('hide');
                hideThis = true;
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
function newsHeadlineRemoveCharacters(headline) {
    headline = headline.replace('Â', '');
    headline = headline.replace('?', '');
    return headline;
}
// KM SS
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
                    $('.IRChartMenuTriggerBody').fadeOut(300);
                    $('.IRChartMenuTriggerBody').removeClass('active');
                    $('.IRChartMenuTrigger').removeClass('icon-arrow');
                }
            }, 500);
        }
    });
}

// KM SS
function IRChartNavigationHideAll() {
    if (typeof ($('.IRChartMenuTrigger')) == 'object') {
        $('.IRChartMenuTriggerBody, .IRChartTABody, .IRChartComparisonBody, .IRChartTSRBody, .IRChartSettingsBody').css('display', 'none');
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
    var index = dateArr.bestMatch(unixDate);
    return index;
}
function randomIntBetween(min, max) {
    var rnd = Math.floor(Math.random() * (max - min + 1) + min);
    return rnd;
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
}
function debugStep(msg) {
    if (debug) {
        console.log('%c' + msg, 'color: #ccc');
    }
}
function debugDataLoad(msg) {
    if (debug) {
        console.log('%c' + msg, 'color: #333');
    }
}
function debugError(msg) {
    if (debug) {
        if (location.href.indexOf('localhost') > -1 || location.href.indexOf('http://devir.euroinvestor.com/') > -1) {
            throw msg;
        }
        console.log('%c' + msg + "", 'color: #FF0000');
    }
}
function debugStatus(msg) {
    if (debug) {
        console.log('%c' + msg + "", 'color: #008800');
    }
}
function debugTimestamp(msg) {
    if (debug) {
        console.log('%c' + msg + "", 'color: #0094d4');
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
        tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator active\" style=\"border-left-color: " + globalChartColours[0] + ";\"></span>" + globalRawStockData[globalActiveListingIndex].symbol + ": </span>" +
            "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span>" +
            "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
        for (var i = 0; i < globalChartComparisonData[0].length; i++) {

            if (globalChartComparisonInChart[i + 1] == 1) {
                tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator color" + globalChartColours[i + 1].replace('#', '') + " active\">" +
                    "</span>" + globalChartComparisonSymbols[i] + ": </span> " +
                    "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartComparisonData[0][i][dateIndex][1]) + "</span>" +
                    "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartComparisonData[0][i][dateIndex][1]) + "</span></div>";
            }
        }
    }
    catch (err) {
        var newDateIndex = getClosestDateIndexForListingClosePrice(date);
        tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][0]).format(clientStyle.formatDate) + "</div>";
        tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator active\" style=\"border-left-color: " + globalChartColours[0] + ";\"></span>" + globalRawStockData[globalActiveListingIndex].symbol + ": </span>" +
            "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][1]) + "</span>" +
            "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockDataOHLCV[globalActiveListingIndex][newDateIndex][1]) + "</span></div>";
        for (var i = 0; i < globalChartComparisonData[0].length; i++) {
            if (globalChartComparisonInChart[i + 1] == 1) {
                tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator color" + globalChartColours[i + 1].replace('#', '') + " active\"></span>" + globalChartComparisonSymbols[i] + ": </span>" +
                    "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartComparisonData[0][i][newDateIndex][1]) + "</span>" +
                    "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartComparisonData[0][i][newDateIndex][1]) + "</span></div>";
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


function IRChartComparisonplaceholderChange() {
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
// KM updated this function for multi chart
function updateTooltipTechnicalAnalysisDP(date) {
    debugStep("updateTooltipTechnicalAnalysisDP");
    var dateIndex;
    var value = "-";
    var tooltipStr = "<div class=\"tooltipHtmlTA " + globalChartActiveDisplayMode + "Mode\">";
    switch (chartFeatureMode) {
        case chartDisplayModes.intraday:
            dateIndex = globalChartListingIntradayDataDates[globalActiveListingIndex].indexOf(date);
            if (dateIndex == -1) {
                dateIndex = getClosestDateIndexForListingIntraday(date);
                if (dateIndex == -1) {
                    debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
                }
            }
            tooltipStr += getTooltipStrSubIntraday(dateIndex);
            break;
        case chartDisplayModes.historical:
            try {
                dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subShadow\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</span></div>";
                tooltipStr += "<div><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subShadow\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span></div>";
            }
            catch (err) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('c') + " " + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
                tooltipStr += "<div>" + getOHLCfromTranslations('v') + " " + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</div>";
            }

            tooltipStr += "<div class='tooltipSep'></div>";
            try {
                for (var i = 0; i < activeTA.length; i++) {
                    dateIndex = activeTAlistDates[i].indexOf(date);
                    if (activeTA[i] == 'BB' || activeTA[i] == 'MAE') {
                        tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator color" + activeTAcolor[i].replace('#', '') + " active\"></span>" + activeTA[i] + ": </span><span class=\"subShadow\">" + formatLocal(activeTAlist[i][0][dateIndex][1]) + " " + formatLocal(activeTAlist[i][1][dateIndex][1]) + " " + formatLocal(activeTAlist[i][2][dateIndex][1]) + "</span><span class=\"subContent\">" + formatLocal(activeTAlist[i][0][dateIndex][1]) + " " + formatLocal(activeTAlist[i][1][dateIndex][1]) + " " + formatLocal(activeTAlist[i][2][dateIndex][1]) + "</span></div>";
                    } else if (activeTA[i] == 'MACD') {
                        tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator color" + activeTAcolor[i].replace('#', '') + " active\"></span>" + activeTA[i] + ": </span><span class=\"subShadow\">" + formatLocal(activeTAlist[i][0][dateIndex][1]) + " " + translations.t_signal + ": " + formatLocal(activeTAlist[i][1][dateIndex][1]) + "</span><span class=\"subContent\">" + formatLocal(activeTAlist[i][0][dateIndex][1]) + " " + translations.t_signal + ": " + formatLocal(activeTAlist[i][1][dateIndex][1]) + "</span></div>";
                    } else {
                        tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator color" + activeTAcolor[i].replace('#', '') + " active\"></span>" + activeTA[i] + ": </span><span class=\"subShadow\">" + formatLocal(activeTAlist[i][dateIndex][1]) + "</span><span class=\"subContent\">" + formatLocal(activeTAlist[i][dateIndex][1]) + "</span></div>";
                    }
                }
            }
            catch (err) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                for (var j = 0; j < activeTA.length; j++) {
                    if (activeTA[j] == 'BB' || activeTA[j] == 'MAE') {
                        tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator color" + activeTAcolor[j].replace('#', '') + " active\"></span>" + activeTA[j] + ": </span><span class=\"subShadow\">" + formatLocal(activeTAlist[j][0][dateIndex][1]) + " " + formatLocal(activeTAlist[j][1][dateIndex][1]) + " " + formatLocal(activeTAlist[j][2][dateIndex][1]) + "</span><span class=\"subContent\">" + formatLocal(activeTAlist[j][0][dateIndex][1]) + " " + formatLocal(activeTAlist[j][1][dateIndex][1]) + " " + formatLocal(activeTAlist[j][2][dateIndex][1]) + "</span></div>";
                    } else if (activeTA[j] == 'MACD') {
                        tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator color" + activeTAcolor[j].replace('#', '') + " active\"></span>" + activeTA[j] + ": </span><span class=\"subShadow\">" + formatLocal(activeTAlist[j][0][dateIndex][1]) + " " + translations.t_signal + ": " + formatLocal(activeTAlist[j][1][dateIndex][1]) + "</span><span class=\"subContent\">" + formatLocal(activeTAlist[j][0][dateIndex][1]) + " " + translations.t_signal + ": " + formatLocal(activeTAlist[j][1][dateIndex][1]) + "</span></div>";
                    } else {
                        tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator color" + activeTAcolor[j].replace('#', '') + " active\"></span>" + activeTA[j] + ": </span><span class=\"subShadow\">" + formatLocal(activeTAlist[j][dateIndex][1]) + "</span><span class=\"subContent\">" + formatLocal(activeTAlist[j][dateIndex][1]) + "</span></div>";
                    }
                }
            }
            break;
    }


    tooltipStr += "</div>";
    return tooltipStr;
}

// KM
function updateTechnicalAnalysis(id, color, period) {
    debugStep("updateTechnicalAnalysis(" + id + ")");
    if (chartFeatureMode == chartDisplayModes.intraday) {
        globalActivePeriod = 'y1';
        updateActiveChartNavBarRangePeriod(globalActivePeriod);
        switchFeatureToHistoricalMode(365);
    } else if (globalChartActiveDisplayMode != chartDisplayModes.ta) {
        redrawIRChartInModeTA();
    }
    switch (id) {
        case "BolingerBands":
            loadAnalysisBollingerBands(clientStyle.amountOfHistoricalYears, period[0], period[1]);
            applyAnalysis("BB", color, period);
            break;
        case "MovingAverageEnvelope":
            if (period[2] == 'simple')
                loadAnalysisMovingAverageEnvelopeSimple(clientStyle.amountOfHistoricalYears, period[0], period[1]);
            else
                loadAnalysisMovingAverageEnvelopeExponential(clientStyle.amountOfHistoricalYears, period[0], period[1]);
            applyAnalysis("MAE", color, period);
            break;

        case "ParabolicSAR":
            loadAnalysisParabolicSar(clientStyle.amountOfHistoricalYears, period[0]);
            applyAnalysis("PS", color, period);
            break;

        case "MovingAverageConvergenceDivergence":
            loadAnalysisMovingAverageConvergenceDivergence(clientStyle.amountOfHistoricalYears, period[0], period[1], period[2]);
            applyAnalysis("MACD", color, period);
            break;

        case "CommodityChannelIndex":
            loadAnalysisCommodityChannelIndex(clientStyle.amountOfHistoricalYears, period[0]);
            applyAnalysis("CCI", color, period);
            break;

        case "DirectionalMovementIndex":
            loadAnalysisDirectionalMovementIndex(clientStyle.amountOfHistoricalYears, period[0]);
            applyAnalysis("DMI", color, period);
            break;

        case "ExponentialMovingAverage":
            loadAnalysisExponentialMovingAverage(clientStyle.amountOfHistoricalYears, period[0]);
            applyAnalysis("EMA", color, period);
            break;

        case "Momentum":
            loadAnalysisMomentum(clientStyle.amountOfHistoricalYears, period[0]);
            applyAnalysis("Mom", color, period);
            break;

        case "MoneyFlowIndex":
            loadAnalysisMoneyFlowIndex(clientStyle.amountOfHistoricalYears, period[0]);
            applyAnalysis("MFI", color, period);
            break;

        case "RateOfChange":
            loadAnalysisRateOfChange(clientStyle.amountOfHistoricalYears, period[0]);
            applyAnalysis("RoC", color, period);
            break;

        case "RelativeStrengthIndex":
            loadAnalysisRelativeStrengthIndex(clientStyle.amountOfHistoricalYears, period[0]);
            applyAnalysis("RSI", color, period);
            break;

        case "SimpleMovingAverage":
            loadAnalysisSimpleMovingAverage(clientStyle.amountOfHistoricalYears, period[0]);
            applyAnalysis("SMA", color, period);
            break;

        case "WilliamsPercentR":
            loadAnalysisWilliamsPercentR(clientStyle.amountOfHistoricalYears, period[0]);
            applyAnalysis("W", color, period);
            break;

    }
}
function applyAnalysis(TAShort, color, period) {
    globalActiveTAShort = TAShort;
    if (activeTA.indexOf(TAShort) == -1) {
        switch (TAShort) {
            case "BB":
                $.when(requestAnalysisBollingerBands).done(function (dataTA) {
                    applyTripleAnalysisToChart(dataTA, TAShort, color, period);
                });
                break;
            case "MAE":
                if (period[2] == 'simple')
                    $.when(requestAnalysisMovingAverageEnvelopeSimple).done(function (dataTA) {
                        applyTripleAnalysisToChart(dataTA, TAShort, color, period);
                    });
                else
                    $.when(requestAnalysisMovingAverageEnvelopeExponential).done(function (dataTA) {
                        applyTripleAnalysisToChart(dataTA, TAShort, color, period);
                    });
                break;
            case "PS":
                $.when(requestAnalysisParabolicSar).done(function (dataTA) {
                    applyDottedAnalysisToChart(dataTA, TAShort, color, period);
                });
                break;
            case "MACD":
                $.when(requestAnalysisMovingAverageConvergenceDivergence).done(function (dataTA) {
                    applyDoubleAnalysisToChart(dataTA, TAShort, color, period);
                });
                break;
            case "SMA":
                $.when(requestAnalysisSimpleMovingAverageData).done(function (dataTA) {
                    applyAnalysisToChart(dataTA, TAShort, color, 'single', period);
                });
                break;
            case "EMA":
                $.when(requestAnalysisExponentialMovingAverageData).done(function (dataTA) {
                    applyAnalysisToChart(dataTA, TAShort, color, 'single', period);
                });
                break;
            case "CCI":
                $.when(requestAnalysisCommodityChannelIndexData).done(function (dataTA) {
                    applyAnalysisToChart(dataTA, TAShort, color, 'dual', period);
                });
                break;
            case "DMI":
                $.when(requestAnalysisDirectionalMovementIndexData).done(function (dataTA) {
                    applyAnalysisToChart(dataTA, TAShort, color, 'dual', period);
                });
                break;
            case "Mom":
                $.when(requestAnalysisMomentumData).done(function (dataTA) {
                    applyAnalysisToChart(dataTA, TAShort, color, 'dual', period);
                });
                break;
            case "MFI":
                $.when(requestAnalysisMoneyFlowIndexData).done(function (dataTA) {
                    applyAnalysisToChart(dataTA, TAShort, color, 'dual', period);
                });
                break;
            case "RoC":
                $.when(requestAnalysisRateOfChangeData).done(function (dataTA) {
                    applyAnalysisToChart(dataTA, TAShort, color, 'dual', period);
                });
                break;
            case "RSI":
                $.when(requestAnalysisRelativeStrengthIndexData).done(function (dataTA) {
                    applyAnalysisToChart(dataTA, TAShort, color, 'dual', period);
                });
                break;
            case "W":
                $.when(requestAnalysisWilliamsPercentRData).done(function (dataTA) {
                    applyAnalysisToChart(dataTA, TAShort, color, 'dual', period);
                });
                break;
        }
        activeTA.push(TAShort);
        activeTAperiod.push(period);
    }
}

function removeThisTechnicalAnalysis(id) {
    switch (id) {
        case "BolingerBands":
            removeAnalysisFromChart("BB");
            break;

        case "MovingAverageEnvelope":
            removeAnalysisFromChart("MAE");
            break;
        case "ParabolicSAR":
            removeAnalysisFromChart("PS");
            break;
        case "MovingAverageConvergenceDivergence":
            removeAnalysisFromChart("MACD");
            break;
        case "CommodityChannelIndex":
            removeAnalysisFromChart("CCI");
            break;

        case "DirectionalMovementIndex":
            removeAnalysisFromChart("DMI");
            break;

        case "ExponentialMovingAverage":
            removeAnalysisFromChart("EMA");
            break;

        case "Momentum":
            removeAnalysisFromChart("Mom");
            break;

        case "MoneyFlowIndex":
            removeAnalysisFromChart("MFI");
            break;

        case "RateOfChange":
            removeAnalysisFromChart("RoC");
            break;

        case "RelativeStrengthIndex":
            removeAnalysisFromChart("RSI");
            break;

        case "SimpleMovingAverage":
            removeAnalysisFromChart("SMA");
            break;

        case "WilliamsPercentR":
            removeAnalysisFromChart("W");
            break;

    }
}
function applyAnalysisToChart(dataTA, TAShort, color, TAtype, period) {
    stockDataTA.push([]);
    var TAArrayForChart = [];
    $.each(dataTA.data, function (listingIndex, item) {
        TAArrayForChart.push([getUnixFromDate(item.date), item.result]);
        stockDataTADates.push(getUnixFromDate(item.date));
    });
    stockDataTA[0] = TAArrayForChart;
    drawPlotLineToChart();
    if (TAtype == 'dual') {
        activeTAdual.push(TAShort);
        var percHeightMain = 100 - (15 * activeTAdual.length);

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
            data: stockDataTA[0],
            color: color,
            yAxis: globalChartDom.yAxis.length - 1,
            name: TAShort,
            // yAxis: 0,
            visible: true,
            linkedTo: 0,
            type: 'line',
            zIndex: 2
        });
    } else {
        globalChartDom.addSeries({
            data: stockDataTA[0],
            color: color,
            name: TAShort,
            yAxis: 0,
            visible: true,
            linkedTo: 0,
            type: 'line',
            zIndex: 2
        }, false, 0);
    }
    activeTAlist.push(stockDataTA[0]);
    activeTAlistDates.push(stockDataTADates);
    activeTAcolor.push(color);
    globalChartDom.redraw();
    var numb = '';
    if (typeof period != 'undefined') {
        numb = '(' + period + ')';
    }
    var activeTAhtml = $('.IRChartTAPlaceholder').html();
    activeTAhtml += '<div class="color' + color.replace('#', '') + ' active" data-ta="' + TAShort + '" style="display: block;">';
    activeTAhtml += '<span>' + TAShort + ' ' + numb + '</span>';
    activeTAhtml += '</div>';

    $('.IRChartTAPlaceholder').html(activeTAhtml);
    IRChartTAplaceholderChange();
}
function applyTripleAnalysisToChart(dataTA, TAShort, color, period) {
    var lower = [], mids = [], uppers = [];
    $.each(dataTA.data, function (listingIndex, item) {
        var dateVar = getUnixFromDate(item.date);
        stockDataTADates.push(dateVar);
        lower.push([dateVar, item.resultLower]);
        mids.push([dateVar, item.resultMiddle]);
        uppers.push([dateVar, item.resultUpper]);
    });
    stockDataTA[0] = [lower, mids, uppers];
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
    activeTAlist.push([lower, mids, uppers]);
    activeTAlistDates.push(stockDataTADates);
    activeTAcolor.push(color);
    globalChartDom.redraw();

    var activeTAhtml = $('.IRChartTAPlaceholder').html();
    activeTAhtml += '<div class="color' + color.replace('#', '') + ' active" data-ta="' + TAShort + '" style="display: block;">';
    activeTAhtml += '<span>' + TAShort + ' (' + period.join() + ')</span>';
    activeTAhtml += '</div>';

    $('.IRChartTAPlaceholder').html(activeTAhtml);
    IRChartTAplaceholderChange();
}
function applyDottedAnalysisToChart(dataTA, TAShort, color, period) {
    stockDataTA.push([]);
    var TAArrayForChart = [];
    $.each(dataTA.data, function (listingIndex, item) {
        TAArrayForChart.push([getUnixFromDate(item.date), item.result]);
        stockDataTADates.push(getUnixFromDate(item.date));
    });
    stockDataTA[0] = TAArrayForChart;
    drawPlotLineToChart();
    globalChartDom.addSeries({
        data: stockDataTA[0],
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

    activeTAlist.push(stockDataTA[0]);
    activeTAlistDates.push(stockDataTADates);
    activeTAcolor.push(color);
    globalChartDom.redraw();
    var numb = '';
    if (typeof period != 'undefined') {
        numb = '(' + period + ')';
    }
    var activeTAhtml = $('.IRChartTAPlaceholder').html();
    activeTAhtml += '<div class="color' + color.replace('#', '') + ' active" data-ta="' + TAShort + '" style="display: block;">';
    activeTAhtml += '<span>' + TAShort + ' ' + numb + '</span>';
    activeTAhtml += '</div>';

    $('.IRChartTAPlaceholder').html(activeTAhtml);
    IRChartTAplaceholderChange();
}
function applyDoubleAnalysisToChart(dataTA, TAShort, color, period) {
    stockDataTA.push([]);
    var TAArrayForChart = [], signal = [];
    $.each(dataTA.data, function (listingIndex, item) {
        TAArrayForChart.push([getUnixFromDate(item.date), item.macd]);
        signal.push([getUnixFromDate(item.date), item.signal]);
        stockDataTADates.push(getUnixFromDate(item.date));
    });
    stockDataTA[0] = [TAArrayForChart, signal];
    drawPlotLineToChart();
    activeTAdual.push(TAShort);
    var percHeightMain = 100 - (15 * activeTAdual.length);

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
        data: stockDataTA[0][0],
        color: color,
        yAxis: globalChartDom.yAxis.length - 1,
        name: TAShort,
        // yAxis: 0,
        visible: true,
        linkedTo: 0,
        type: 'line',
        zIndex: 2
    });
    globalChartDom.addSeries({
        data: stockDataTA[0][1],
        color: clientStyle.chart_ColourMain,
        yAxis: globalChartDom.yAxis.length - 1,
        name: TAShort,
        // yAxis: 0,
        visible: true,
        linkedTo: 0,
        type: 'line',
        zIndex: 2
    });
    activeTAlist.push(stockDataTA[0]);
    activeTAlistDates.push(stockDataTADates);
    activeTAcolor.push(color);
    globalChartDom.redraw();

    var activeTAhtml = $('.IRChartTAPlaceholder').html();
    activeTAhtml += '<div class="color' + color.replace('#', '') + ' active" data-ta="' + TAShort + '" style="display: block;">';
    activeTAhtml += '<span>' + TAShort + ' (' + period.join() + ')</span>';
    activeTAhtml += '</div>';

    $('.IRChartTAPlaceholder').html(activeTAhtml);
    IRChartTAplaceholderChange();
}
function removeAnalysisFromChart(TAShort) {
    globalChartDom.series.forEach(function (value, index) {
        if (value.name == TAShort) {
            if (activeTAdual.indexOf(TAShort) != -1) {
                activeTAdual.splice(activeTAdual.indexOf(TAShort), 1);
                for (var i = 0; i < globalChartDom.yAxis.length; i++) {
                    if (globalChartDom.yAxis[i].options.id == TAShort) {
                        globalChartDom.yAxis[i].remove();
                    }
                }
                var secondChange = 0;
                var percHeightMain = 100 - (15 * activeTAdual.length);
                for (var j = 0; j < globalChartDom.yAxis.length; j++) {
                    if (activeTAdual.indexOf(globalChartDom.yAxis[j].options.id) != -1) {
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
                    height: percHeightMain + '%'
                });
            } else {
                globalChartDom.series[index].remove();
            }
            activeTAlist.splice(activeTA.indexOf(TAShort), 1);
            activeTAlistDates.splice(activeTA.indexOf(TAShort), 1);
            activeTAperiod.splice(activeTA.indexOf(TAShort), 1);
            activeTA.splice(activeTA.indexOf(TAShort), 1);
            $('.IRChartTAPlaceholder').find("[data-ta=" + TAShort + "]").remove();
            return 0;
        }
    });
}
function IRChartTAplaceholderChange() {
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

// KM SS
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
        globalChartComparisonsInChart = 0;
        $('.IRChartComparisonPlaceholder div').css('display', 'none');
        $('.IRChartNavigation .IRChartComparison .IRChartComparisonBodyList .basicButtonLook').removeClass('active');

    }
    $('.IRChartSettings .basicButtonLook.selectableItem').removeClass("active");
    $('.IRChartSettings').find('.basicButtonLook[data-type="' + clientStyle.chart_DrawMode + '"]').addClass("active");
    $('.IRChartSettings .basicButtonLook.selectableItem.moder').first().addClass("active");
    $('.IRChartComparisonPlaceholder .counter').remove();
}
function resetIRChart() {
    debugStep("resetIRChart");
    activeSetType = clientStyle.chart_DrawMode;
    activeSetAxisType = 'linear';
    if (globalChartActiveDisplayMode != chartDisplayModes.ta) {
        activeTA = [];
    }
    if (globalChartActiveDisplayMode != chartDisplayModes.tsr) {
        $('.IRChartTSRBody .basicButtonLook').removeClass('active');
        IRChartTSRfeature.activeTSR = [];
        IRChartTSRfeature.activeTSRcolor = [];
    }

    globalChartActiveDisplayMode = chartDisplayModes.historical;
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
            };
            preloadIRChartPressReleaseIRChartHeadlineHistorical(o);
        });
    }
    if (useIRChartPressRelease) {
        $.when(requestStockData, requestPressReleaseData).done(function (stockData, newsDataInitial) {
            var o = {
                headers: translations,
                data: newsDataInitial[0].data
            };
            preloadIRChartPressReleaseHistorical(o);
        });
    }
}


function shadeColor(color, percent) {
    var f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}
function reApplyTSRToChart() {
    debugStep("reApplyTSRToChart");

    var indexMin = getClosestDateIndexForListingClosePriceWithDataArray(globalChartListingStockDataDates[globalActiveListingIndex], IRChartTSRfeature.selectedMin);
    var indexMax = getClosestDateIndexForListingClosePriceWithDataArray(globalChartListingStockDataDates[globalActiveListingIndex], IRChartTSRfeature.selectedMax);

    var croppedChartListingStockDataDates = globalChartListingStockDataDates[globalActiveListingIndex].slice(indexMin, indexMax);
    var croppedChartListingStockData = globalChartListingStockData[globalActiveListingIndex].slice(indexMin, indexMax);

    var TSRArrayForChartClose = [];
    var TSRArrayForChartCloseDates = [];
    var HistoricalArrayForChartClose = [];
    var dividendTotal = 0;
    var dividendIndex = 0;
    //
    // IRChartTSRfeature.dividendDatesInChart = [];
    //
    // // Iterate through alle historical prices.
    // $.each(croppedChartListingStockData, function (index, cpData) {
    //
    //     if (IRChartTSRfeature.dividendDatesAll[dividendIndex] == cpData[0]) {
    //         dividendTotal = dividendTotal + IRChartTSRfeature.dividendValuesAll[dividendIndex];
    //         IRChartTSRfeature.dividendDatesInChart.push(cpData[0]); // Save dividends used in the chart in the current calculation.
    //         dividendIndex++;
    //     } else {
    //         if (IRChartTSRfeature.dividendDatesAll[dividendIndex] < cpData[0]) {
    //             // Skip dividends that are not within the from and to date.
    //             for (var i = dividendIndex; i < IRChartTSRfeature.dividendDatesAll.length - 1; i++) {
    //                 if (IRChartTSRfeature.dividendDatesAll[i] < cpData[0]) {
    //                     dividendIndex++;
    //                 }
    //             }
    //         }
    //     }
    //
    //     var price = cpData[1] + dividendTotal;
    //     TSRArrayForChartClose.push([cpData[0], price]); // Data for plotting the chart.
    //     TSRArrayForChartCloseDates.push(cpData[0]); // Dates only to get index locations using indexOf.
    //     HistoricalArrayForChartClose.push([cpData[0], cpData[1]]); // Data for displaying the tooltip.
    // });
    //
    // IRChartTSRfeature.stockDataTSRClone = TSRArrayForChartClose; // Data for plotting the chart.
    // IRChartTSRfeature.stockDataCloneClose = HistoricalArrayForChartClose; // Data for displaying the tooltip.
    // IRChartTSRfeature.stockDataTSRCloneDates = TSRArrayForChartCloseDates; // Dates only to get index locations using indexOf.
    //
    // globalChartDom.series[2].setData(IRChartTSRfeature.stockDataTSRClone); // Update chart
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

// KM ==================================================
//Chart currency converter
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
        var period = new Date().getFullYear() - new Date(globalChartListingStockDataOHLCV[0][0][0]).getFullYear() + 1; // +1 to have more data because it registers current date for starting point of year
        loadFeatureCurrencyConversion(getActiveCurrency().replace('GBX', 'GBP'), to, period);
        $.when(requestFeatureCurrencyConversionData)
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
                        var extremes = globalChartDom.xAxis[0].getExtremes();
                        globalChartDom.destroy();
                        drawIRChartHTMLCompare();
                        drawActiveListingHistoricalToIRChartHTMLCompare();
                        activeCompareUid.forEach(function (item, index) {
                            addCompareSeriesToChart(activeCompare[index], item, '');
                            globalChartDom.yAxis[0].setCompare('percent');
                        });
                        globalChartDom.xAxis[0].setExtremes(extremes.min, extremes.max);
                    } else {
                        resetIRChart();
                    }
                    $('.IRChartCurrency').text(to);
                    IRChartCurrencyConverter.converted = true;
                }
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
                $('.IRChartCurrency').text(getActiveCurrency());
            }
            this.curCurrency = getActiveCurrency();
        }
    },
    recalculateComparisonWithCurency: function (to) {
        for (var i = 0; i < this.comparisonDataBackup.length; i++) {
            globalChartComparisonData[0][i] = this.chartCurrencyConverterFeature(this.comparisonDataBackup[i]);
        }
    }
};

