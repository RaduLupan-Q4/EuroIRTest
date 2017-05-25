//           
// Load data
//      
loadTranslationsData();

if (typeof (clientStyleOverwrite) != "undefined") {
    if (typeof (clientStyleOverwrite.useRealtimeData) != "undefined") {
        clientStyle.useRealtimeData = clientStyleOverwrite.useRealtimeData;
    }

    if (clientStyleOverwrite.amountOfHistoricalYears >= 0) {
        clientStyle.amountOfHistoricalYears = clientStyleOverwrite.amountOfHistoricalYears;
    }

    if (clientStyleOverwrite.useDataSourceRKD != "undefined") {
        clientStyle.useDataSourceRKD = clientStyleOverwrite.useDataSourceRKD;
    }

}

if (useStockData) {
    loadStockData();
}
if (useFeatureStockOtherData) {
    loadFeatureStockOtherData();
}
if (useClosePriceBundleListingData) {
    loadClosePriceBundleListingData();
}
if (useIntradayBundleListingData) {
    loadIntradayBundleListingData();
}
if (useClosePriceBundleOtherData) {
    loadClosePriceBundleOtherData();
}
//
//  The following function calls are made from within ir.util.js (when requestStockData is completed).
//
//  loadOrdersData();
//  loadTradesData();
//  loadNewsArticleData();
//  loadCalcDividendData();
//
if (useDividendData) {

    if (useStockData) {
        $.when(requestStockData)
            .done(function (stockData) {
                globalRawStockData = stockData.data;
                loadDividendBundle(100, 10);
            }
        );
    }
}

//
//  Init
//
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

    if (IRProfileModule) {

        if (typeof ($('.IRProfileModule').html()) != "undefined" && typeof ($('#IRProfileTemplate').html()) != "undefined") {
            var menuSource_IRProfile = $('#IRProfileTemplate').html();
            menuTemplate_IRProfile = Handlebars.compile(menuSource_IRProfile);
        }


    }

    if (IRChartModule) {
        if (typeof ($('.IRChartModule').html()) != "undefined" && typeof ($('#IRChartModuleTemplate').html()) != "undefined") {
            var menuSource_IRChart = $('#IRChartModuleTemplate').html();
            menuTemplate_IRChart = Handlebars.compile(menuSource_IRChart);
        }
    }

    if (IRChartHTMLModule) {
        if (typeof ($('.IRChartModule').html()) != "undefined" && typeof ($('#IRChartModuleTemplate').html()) != "undefined") {
            var menuSource_IRChartHTML = $('#IRChartModuleTemplate').html();
            menuTemplate_IRChartHTML = Handlebars.compile(menuSource_IRChartHTML);
        }
    }

    if (IRMiniquoteModule) {
        if (typeof ($('.IRMiniquoteModule').html()) != "undefined" && typeof ($('#IRMiniquoteModuleTemplate').html()) != "undefined") {
            var menuSource_Miniquote = $('#IRMiniquoteModuleTemplate').html();
            menuTemplate_Miniquote = Handlebars.compile(menuSource_Miniquote);
        }
    }

    if (IRMiniquoteChartModule) {
        if (typeof ($('.IRMiniquoteChartModule').html()) != "undefined" && typeof ($('#IRMiniquoteChartModuleTemplate').html()) != "undefined") {
            var menuSource_MiniquoteChart = $('#IRMiniquoteChartModuleTemplate').html();
            menuTemplate_MiniquoteChart = Handlebars.compile(menuSource_MiniquoteChart);
        }
    }

    if (IROrdersModule) {
        if (typeof ($('.IROrdersModule').html()) != "undefined" && typeof ($('#IROrdersTemplate').html()) != "undefined") {
            var source = $('#IROrdersTemplate').html();
            menuTemplate_OrdersTable = Handlebars.compile(source);
        }
    }

    if (IRTradesModule) {
        if (typeof ($('.IRTradesModule').html()) != "undefined" && typeof ($('#IRTradesTemplate').html()) != "undefined") {
            var source = $('#IRTradesTemplate').html();
            menuTemplate_TradesTable = Handlebars.compile(source);
        }
    }

    if (IRNewsModule) {
        if (typeof ($('.IRNewsModule').html()) != "undefined" && typeof ($('#IRNewsTemplate').html()) != "undefined") {
            var source = $('#IRNewsTemplate').html();
            menuTemplate_News = Handlebars.compile(source);
        }

        if (typeof ($('.IRNewsModule').html()) != "undefined" && typeof ($('#IRNewsEntriesTemplate').html()) != "undefined") {
            var source = $('#IRNewsEntriesTemplate').html();
            menuTemplate_NewsEntries = Handlebars.compile(source);
        }

    }
    if (IRNewsArticleModule) {
        if (typeof ($('.IRArticleModule').html()) != "undefined" && typeof ($('#IRNewsArticleTemplate').html()) != "undefined") {
            var source = $('#IRNewsArticleTemplate').html();
            toolTemplate_IRNewsArticle = Handlebars.compile(source);
        }
    }


    if (IRNewsHeadlineModule) {
        if (typeof ($('.IRNewsHeadlineModule').html()) != "undefined" && typeof ($('#IRNewsHeadlineTemplate').html()) != "undefined") {
            var source = $('#IRNewsHeadlineTemplate').html();
            menuTemplate_NewsHeadline = Handlebars.compile(source);
        }
    }

    if (IRLookupModule) {
        if (typeof ($('.IRLookupModule').html()) != "undefined" && typeof ($('#IRLookupTemplate').html()) != "undefined") {
            var source = $('#IRLookupTemplate').html();
            menuTemplate_Lookup = Handlebars.compile(source);
        }
    }

    if (IRCalcModule) {
        if (typeof ($('.IRCalcModule').html()) != "undefined" && typeof ($('#IRCalcTemplate').html()) != "undefined") {
            var source = $('#IRCalcTemplate').html();
            menuTemplate_Calc = Handlebars.compile(source);
        }
    }

    if (IRCalcSimpleModule) {
        if (typeof ($('.IRCalcModule').html()) != "undefined" && typeof ($('#IRCalcSimpleTemplate').html()) != "undefined") {
            var source = $('#IRCalcSimpleTemplate').html();
            menuTemplate_Calc = Handlebars.compile(source);
        }
    }

    if (IREmailAlertModule) {
        if (typeof ($('.IREmailAlertModule').html()) != "undefined" && typeof ($('#IREmailAlertTemplate').html()) != "undefined") {
            var source = $('#IREmailAlertTemplate').html();
            menuTemplate_EmailAlert = Handlebars.compile(source);
        }
    }

    if (IRPerformanceModule) {
        if (typeof ($('.IRPerformanceModule').html()) != "undefined" && typeof ($('#IRPerformanceModuleTemplate').html()) != "undefined") {
            var menuSource_IRPerformance = $('#IRPerformanceModuleTemplate').html();
            menuTemplate_IRPerformance = Handlebars.compile(menuSource_IRPerformance);
        }
    }
}
//
//  Load data functions
//
function loadTranslationsData() {
    debugDataLoad("loadTranslationsData");
    var postRequest = {
        lcid: clientLCID,
        apiversion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired
    };
    requestTranslationsData = $.ajax({
        url: getServiceEngingeURL() + 'RequestTranslation',
        type: 'GET',
        data: postRequest,
        traditional: true
    });
}
function loadStockData() {
    debugDataLoad("loadStockData");
    var postRequest = {
        apiversion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentTypes: ["Listing"]
    };

    var requestName = "RequestStockDataBundle";
    if (clientStyle.useRealtimeData) {
        requestName += "RT"
    }
    if (clientStyle.useDataSourceRKD) {
        requestName += "RKD"
    }

    requestStockData = $.ajax({
        url: getServiceEngingeURL() + requestName,
        type: 'GET',
        data: postRequest,
        traditional: true,
        success: function (responseData, textStatus, errorThrown) {
        },
        error: function (responseData, textStatus, errorThrown) {
            return errorThrown;
        }
    });
}
function loadFeatureStockOtherData() {
    debugDataLoad("loadFeatureStockOtherData");
    var postRequest = {
        apiversion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentTypes: ["Other"]
    };
    requestFeatureStockOtherData = $.ajax({
        url: getServiceEngingeURL() + 'RequestStockDataBundle',
        type: 'GET',
        data: postRequest,
        traditional: true
    });
}
function loadFeatureCurrencyConversion(fromCurrency, toCurrency, numberOfYears) {
    debugDataLoad("loadFeatureCurrencyConversion");
    var postRequest = {
        apiversion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        FromCurrency: fromCurrency,
        ToCurrency: toCurrency,
        NumberOfYears: numberOfYears
    };
    requestFeatureCurrencyConversionData = $.ajax({
        url: getServiceEngingeURL() + 'RequestCurrency',
        type: 'GET',
        data: postRequest,
        traditional: true
    });
}
function loadClosePriceBundleListingData() {
    debugDataLoad("loadClosePriceBundleListingData");
    var request = {
        apiVersion: clientApiVersion,
        lcid: clientLCID,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        numberOfYears: clientStyle.amountOfHistoricalYears,
        instrumentTypes: ["Listing"]
    };
    var requestName = "RequestClosePriceBundle_OHLC";
    requestClosePriceListingData = $.ajax({
        url: getServiceEngingeURL() + requestName,
        type: 'GET',
        data: request,
        traditional: true
    });
}
function loadIntradayBundleListingData() {
    debugDataLoad("loadIntradayBundleListingData");
    var request = {
        apiVersion: clientApiVersion,
        lcid: clientLCID,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        numberOfDays: 5,
        instrumentTypes: ["Listing"]
    };
    requestIntradayListingData = $.ajax({
        url: getServiceEngingeURL() + 'RequestIntradayDataBundle',
        type: 'GET',
        data: request,
        traditional: true
    });
}
function loadClosePriceBundleOtherData() {
    debugDataLoad("loadClosePriceBundleOtherData");
    var request = {
        apiVersion: clientApiVersion,
        lcid: clientLCID,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        numberOfYears: clientStyle.amountOfHistoricalYears,
        instrumentTypes: ["Peer", "Index"]
    };
    requestClosePriceOtherData = $.ajax({
        url: getServiceEngingeURL() + 'RequestClosePriceBundle_C',
        type: 'GET',
        data: request,
        traditional: true
    });
}
function loadOrdersData() {
    debugDataLoad("loadOrdersData");
    var dataRequest = {
        apiversion: clientApiVersion,
        solutionID: clientSolutionID,
        instrumentid: globalRawStockData[globalActiveListingIndex].instrumentID,
        customerKey: clientCustomerKeyRequired
    };
    requestOrdersData = $.ajax({
        url: getServiceEngingeURL() + 'RequestOrderDepthData',
        type: 'GET',
        data: dataRequest
    });
}
function loadTradesData() {
    debugDataLoad("loadTradesData");
    var dataRequest = {
        apiversion: clientApiVersion,
        solutionID: clientSolutionID,
        instrumentid: globalRawStockData[globalActiveListingIndex].instrumentID,
        customerKey: clientCustomerKeyRequired,
        amountOfTrades: clientStyle.amountOfTrades
    };
    requestTradesData = $.ajax({
        url: getServiceEngingeURL() + 'RequestTradeData',
        type: 'GET',
        data: dataRequest
    });
}
function loadNewsDataInitial() {
    debugDataLoad("loadNewsDataInitial");

    if (clientStyle.news_lockListing > -1) {
        globalActiveListingIndex = clientStyle.news_lockListing;
    }
    if (clientStyle.news_lockLCID > -1) {
        clientLCID = clientStyle.news_lockLCID;
    }

    var dataRequest = {
        lcid: clientLCID,
        pageNo: 0,
        maxRows: clientStyle.amountOfNewsToLoad,
        headlinesOnly: true,
        instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired
    };
    requestNewsDataInitial = $.ajax({
        url: getServiceEngingeURL() + 'RequestNews',
        type: 'GET',
        data: dataRequest
    });
}
function loadNewsDataInitialDummy() {
    debugDataLoad("loadNewsDataInitialDummy");
    debugError("loadNewsDataInitialDummy");
    var dataRequest = {
        lcid: 2057,
        pageNo: 0,
        maxRows: clientStyle.amountOfNewsToLoad,
        headlinesOnly: true,
        instrumentID: 1000074,
        apiVersion: 1,
        solutionID: 1934,
        customerKey: 'SarossaPlc'
    };
    requestNewsDataInitial = $.ajax({
        url: getServiceEngingeURL() + 'RequestNews',
        type: 'GET',
        data: dataRequest
    });
}
function loadNewsDataSearch(searchText) {
    debugDataLoad("loadNewsDataSearch");

    /*
    {
    "lcid":0,
    "pageNo":0
    ,"maxRows":0,
    "keyword":"String",
    "instrumentID":0,
    "apiVersion":0,
    "solutionID":0,
    "customerKey":"String"
    }
    */

    var dataRequest = {
        lcid: clientLCID,
        pageNo: 0,
        maxRows: 20000,
        keyword: searchText,
        instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired
    };
    requestNewsDataSearch = $.ajax({
        url: getServiceEngingeURL() + 'RequestSearchNews',
        type: 'GET',
        data: dataRequest
    });
}
function loadNewsArticleData() {
    debugDataLoad("loadNewsArticleData");

    if (clientStyle.news_lockListing > -1) {
        globalActiveListingIndex = clientStyle.news_lockListing;
    }
    if (clientStyle.news_lockLCID > -1) {
        clientLCID = clientStyle.news_lockLCID;
    }

    if (Number(getStoryID()) > -1 && getStoryID() != "") {
        var dataRequest = {
            storyID: getStoryID(),
            instrumentid: globalRawStockData[globalActiveListingIndex].instrumentID,
            apiversion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired
        };
        requestNewsArticleData = $.ajax({
            url: getServiceEngingeURL() + 'RequestArticle',
            type: 'GET',
            data: dataRequest
        });

        $.when(requestNewsArticleData).done(function (newsArticleData) {
            drawNewsArticle(newsArticleData);
        });
        $.when(requestNewsArticleData).fail(function () {
            drawNewsArticle(undefined);
        });
    } else {
        drawNewsArticle(undefined);
    }
}
function loadNewsArticleDataDummy() {
    debugDataLoad("loadNewsArticleDataDummy");
    debugError("loadNewsArticleDataDummy");

    if (Number(getStoryID()) > -1 && getStoryID() != "") {
        var dataRequest = {
            storyID: getStoryID(),
            instrumentid: 1000074,
            apiversion: 1,
            solutionID: 1934,
            customerKey: 'SarossaPlc'
        };
        requestNewsArticleData = $.ajax({
            url: getServiceEngingeURL() + 'RequestArticle',
            type: 'GET',
            data: dataRequest
        });

        $.when(requestNewsArticleData).done(function (newsArticleData) {
            drawNewsArticle(newsArticleData);
        });
        $.when(requestNewsArticleData).fail(function () {
            drawNewsArticle(undefined);
        });
    } else {
        drawNewsArticle(undefined);
    }
}
function loadCalcDividendData() {
    debugDataLoad("loadCalcDividendData");
    loadDividendBundle(100, 10); // Todo get "100" from clientStyle
}

function loadPressReleaseIRChartHeadlineData() {
    debugDataLoad("loadPressReleaseIRChartHeadlineData");
    var dataRequest = {
        apiversion: clientApiVersion,
        solutionID: clientSolutionID,
        instrumentid: globalRawStockData[globalActiveListingIndex].instrumentID,
        customerKey: clientCustomerKeyRequired
    };
    requestPressReleaseIRChartHeadlineData = $.ajax({
        url: getServiceEngingeURL() + 'RequestPressReleaseIRChartHeadlineData',
        type: 'GET',
        data: dataRequest
    });
}
function loadPressReleaseData() {
    debugDataLoad("loadPressReleaseData");
    var dataRequest = {
        apiversion: clientApiVersion,
        solutionID: clientSolutionID,
        instrumentid: globalRawStockData[globalActiveListingIndex].instrumentID,
        customerKey: clientCustomerKeyRequired
    };
    requestPressReleaseData = $.ajax({
        url: getServiceEngingeURL() + 'RequestPressRelease',
        type: 'GET',
        data: dataRequest
    });
}

//
//  TA
//
function loadAnalysisWilliamsPercentR(numberOfYears, period) {
    debugDataLoad("loadAnalysisWilliamsPercentR(numberOfYears[" + numberOfYears + "]period[" + period + "])");
    var request = {
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
        numberOfYears: numberOfYears,
        period: period
    };

    requestAnalysisWilliamsPercentRData = $.ajax({
        url: getServiceEngingeURL() + 'RequestAnalysisWilliamsPercentR',
        type: 'GET',
        data: request,
        traditional: true
    });
}
function loadAnalysisRelativeStrengthIndex(numberOfYears, period) {
    debugDataLoad("loadAnalysisRelativeStrengthIndex(numberOfYears[" + numberOfYears + "]period[" + period + "])");
    var request = {
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
        numberOfYears: numberOfYears,
        period: period
    };

    requestAnalysisRelativeStrengthIndexData = $.ajax({
        url: getServiceEngingeURL() + 'RequestAnalysisRelativeStrengthIndex',
        type: 'GET',
        data: request,
        traditional: true
    });
}
function loadAnalysisRateOfChange(numberOfYears, period) {
    debugDataLoad("loadAnalysisRateOfChange(numberOfYears[" + numberOfYears + "]period[" + period + "])");
    var request = {
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
        numberOfYears: numberOfYears,
        period: period
    };

    requestAnalysisRateOfChangeData = $.ajax({
        url: getServiceEngingeURL() + 'RequestAnalysisRateOfChange',
        type: 'GET',
        data: request,
        traditional: true
    });
}
function loadAnalysisMoneyFlowIndex(numberOfYears, period) {
    debugDataLoad("loadAnalysisMoneyFlowIndex(numberOfYears[" + numberOfYears + "]period[" + period + "])");
    var request = {
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
        numberOfYears: numberOfYears,
        period: period
    };

    requestAnalysisMoneyFlowIndexData = $.ajax({
        url: getServiceEngingeURL() + 'RequestAnalysisMoneyFlowIndex',
        type: 'GET',
        data: request,
        traditional: true
    });
}
function loadAnalysisMomentum(numberOfYears, period) {
    debugDataLoad("loadAnalysisMomentum(numberOfYears[" + numberOfYears + "]period[" + period + "])");
    var request = {
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
        numberOfYears: numberOfYears,
        period: period
    };

    requestAnalysisMomentumData = $.ajax({
        url: getServiceEngingeURL() + 'RequestAnalysisMomentum',
        type: 'GET',
        data: request,
        traditional: true
    });
}
function loadAnalysisDirectionalMovementIndex(numberOfYears, period) {
    debugDataLoad("loadAnalysisDirectionalMovementIndex(numberOfYears[" + numberOfYears + "]period[" + period + "])");
    var request = {
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
        numberOfYears: numberOfYears,
        period: period
    };

    requestAnalysisDirectionalMovementIndexData = $.ajax({
        url: getServiceEngingeURL() + 'RequestAnalysisDirectionalMovementIndex',
        type: 'GET',
        data: request,
        traditional: true
    });
}
function loadAnalysisCommodityChannelIndex(numberOfYears, period) {
    debugDataLoad("loadAnalysisCommodityChannelIndex(numberOfYears[" + numberOfYears + "]period[" + period + "])");
    var request = {
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
        numberOfYears: numberOfYears,
        period: period
    };
    requestAnalysisCommodityChannelIndexData = $.ajax({
        url: getServiceEngingeURL() + 'RequestAnalysisCommodityChannelIndex',
        type: 'GET',
        data: request,
        traditional: true
    });
}
function loadAnalysisSimpleMovingAverage(numberOfYears, period) {
    debugDataLoad("loadAnalysisSimpleMovingAverage(numberOfYears[" + numberOfYears + "]period[" + period + "])");
    var request = {
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
        numberOfYears: numberOfYears,
        period: period
    };
    requestAnalysisSimpleMovingAverageData = $.ajax({
        url: getServiceEngingeURL() + 'RequestAnalysisSimpleMovingAverage',
        type: 'GET',
        data: request,
        traditional: true
    });
}
function loadAnalysisExponentialMovingAverage(numberOfYears, period) {
    debugDataLoad("loadAnalysisExponentialMovingAverage(numberOfYears[" + numberOfYears + "]period[" + period + "])");
    var request = {
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
        numberOfYears: numberOfYears,
        period: period
    };
    requestAnalysisExponentialMovingAverageData = $.ajax({
        url: getServiceEngingeURL() + 'RequestAnalysisExponentialMovingAverage',
        type: 'GET',
        data: request,
        traditional: true
    });
}
function loadAnalysisMovingAverageConvergenceDivergence(numberOfYears, fast, slow, signal) {
    debugDataLoad("loadAnalysisMovingAverageConvergenceDivergence(numberOfYears[" + numberOfYears + "]fast[" + fast + "]slow[" + slow + "]signal[" + signal + "])");
    var request = {
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
        numberOfYears: numberOfYears,
        fast: fast,
        slow: slow,
        signal: signal
    };
    requestAnalysisMovingAverageConvergenceDivergence = $.ajax({
        url: getServiceEngingeURL() + 'RequestAnalysisMovingAverageConvergenceDivergence',
        type: 'GET',
        data: request,
        traditional: true
    });
}
function loadAnalysisMovingAverageEnvelopeSimple(numberOfYears, period, stray) {
    debugDataLoad("loadAnalysisMovingAverageEnvelopeSimple(numberOfYears[" + numberOfYears + "]period[" + period + "]stray[" + stray + "])");
    var request = {
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
        numberOfYears: numberOfYears,
        period: period,
        stray: stray
    };
    requestAnalysisMovingAverageEnvelopeSimple = $.ajax({
        url: getServiceEngingeURL() + 'RequestAnalysisMovingAverageEnvelopeSimple',
        type: 'GET',
        data: request,
        traditional: true
    });
}
function loadAnalysisMovingAverageEnvelopeExponential(numberOfYears, period, stray) {
    debugDataLoad("loadAnalysisMovingAverageEnvelopeExponential(numberOfYears[" + numberOfYears + "]period[" + period + "]stray[" + stray + "])");
    var request = {
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
        numberOfYears: numberOfYears,
        period: period,
        stray: stray
    };
    requestAnalysisMovingAverageEnvelopeExponential = $.ajax({
        url: getServiceEngingeURL() + 'RequestAnalysisMovingAverageEnvelopeExponential',
        type: 'GET',
        data: request,
        traditional: true
    });
}
function loadAnalysisBollingerBands(numberOfYears, period, k) {
    debugDataLoad("loadAnalysisBollingerBands(numberOfYears[" + numberOfYears + "]period[" + period + "]k[" + k + "])");
    var request = {
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
        numberOfYears: numberOfYears,
        period: period,
        K: k
    };
    requestAnalysisBollingerBands = $.ajax({
        url: getServiceEngingeURL() + 'RequestAnalysisBollingerBands',
        type: 'GET',
        data: request,
        traditional: true
    });
}
function loadAnalysisParabolicSar(numberOfYears, acceleration) {
    debugDataLoad("loadAnalysisSimpleMovingAverage(numberOfYears[" + numberOfYears + "]acceleration[" + acceleration + "])");
    var request = {
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
        numberOfYears: numberOfYears,
        acceleration: acceleration
    };
    requestAnalysisParabolicSar = $.ajax({
        url: getServiceEngingeURL() + 'RequestAnalysisParabolicSar',
        type: 'GET',
        data: request,
        traditional: true
    });
}
//
//  Currency Conversion
//
function loadCurrencyConversionAdjustedPrice(toCurrency) {
    debugDataLoad("loadCurrencyConversionAdjustedPrice(toCurrency[" + toCurrency + "])");
    var request = {

        fromCurrency: globalRawStockData[globalActiveListingIndex].currency,
        toCurrency: toCurrency,
        numberOfYears: clientStyle.amountOfHistoricalYears,
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired
    };
    requestCurrencyData = $.ajax({
        url: getServiceEngingeURL() + 'RequestCurrency',
        type: 'GET',
        data: request,
        traditional: true
    });
}

//
//  TSR begin
//
function loadDividendBundle(numberOfYears, period) {
    debugDataLoad("loadDividendBundle(numberOfYears[" + numberOfYears + "]period[" + period + "])");
    var request = {
        apiVersion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
        numberOfYears: numberOfYears,
        period: period
    };
    requestDividendBundle = $.ajax({
        url: getServiceEngingeURL() + 'RequestDividendBundle',
        type: 'GET',
        data: request,
        traditional: true
    });
}
//
//  TSR end
//

//
//  Data preloads.
//
function preloadIRLookupChartDataClosePriceListing(data) {
    debugStep("preloadIRLookupChartDataClosePriceListing");
    var listingStockData = data.data.stock[0].data;
    var listingClosePriceData = data.data.closePriceListing[0].data;
    var listingAmount = listingStockData.length;
    var totalIterations = 0;

    for (var i = 0; i < listingAmount; i++) {
        globalChartListingStockData.push([]);
        globalChartListingStockDataDates.push([]);
        globalChartListingStockDataOHLCV.push([]);
    }

    $.each(listingClosePriceData, function (listingIndex, item) {
        totalIterations++;

        var listingArrayForChart = [];
        var listingArrayForChartOHLCV = [];
        var listingArrayForChartVolume = [];

        var stop = 0;

        $.each(item.data, function (listingDataIndex, item) {
            totalIterations++;
            //
            //  Get data
            //
            var currentMainListingOpenPrice = item.openPrice;
            var currentMainListingHigh = item.high;
            var currentMainListingLow = item.low;
            var currentMainListingClosePrice = item.closePrice;
            var currentMainListingVolume = item.volume;
            var currentUnixDateForChart = new moment(item.date).valueOf();
            //var currentUnixDateForChart = new moment.tz(item.date, globalActiveExchangeTimeZone).valueOf(); // JRJR

            //
            //  Validate data
            //
            if (currentMainListingOpenPrice == 0) {
                currentMainListingOpenPrice = currentMainListingClosePrice;
            }
            if (currentMainListingHigh == 0) {
                currentMainListingHigh = currentMainListingClosePrice;
            }
            if (currentMainListingLow == 0) {
                currentMainListingLow = currentMainListingClosePrice;
            }

            //
            //  Append data
            //
            globalChartListingStockDataDates[listingIndex].push(currentUnixDateForChart);
            listingArrayForChart.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice]);
            listingArrayForChartVolume.push([currentUnixDateForChart, currentMainListingVolume]);
            listingArrayForChartOHLCV.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice, currentMainListingVolume]);
        });

        //
        //  Append last price as last point in chart.
        //
        var stock = listingStockData[listingIndex];
        var stockDataTimestamp = stock.timestamp;
        var stockDataOpenPrice = stock.open;
        var stockDataHigh = stock.high;
        var stockDataLow = stock.low;
        var stockDataClosePrice = stock.last;
        var stockDataVolume = stock.volume;

        //
        //  Validate data
        //
        if (stockDataOpenPrice == 0) {
            stockDataOpenPrice = stockDataClosePrice;
        }
        if (stockDataHigh == 0) {
            stockDataHigh = stockDataClosePrice;
        }
        if (stockDataLow == 0) {
            stockDataLow = stockDataClosePrice;
        }

        var stockDataDateOnly = new moment(stockDataTimestamp).format("YYYY-MM-DD");
        var stockDataUnixDateForChart = new moment(stockDataDateOnly + 'T00:00:00.0000000Z').valueOf();

        globalChartListingStockDataDates[listingIndex].push(stockDataUnixDateForChart);

        listingArrayForChart.push([
            stockDataUnixDateForChart,
            stockDataClosePrice,
            null,
            null,
            null
        ]);
        listingArrayForChartVolume.push([
            stockDataUnixDateForChart,
            stockDataVolume
        ]);
        listingArrayForChartOHLCV.push([
            stockDataUnixDateForChart,
            stockDataOpenPrice,
            stockDataHigh,
            stockDataLow,
            stockDataClosePrice,
            stockDataVolume
        ]);
        globalChartListingStockData[listingIndex] = listingArrayForChart;
        globalChartListingStockDataOHLCV[listingIndex] = listingArrayForChartOHLCV;
    });


    if (typeof (menuTemplate_Lookup) == "function") {
        buildLookupTool(data, menuTemplate_Lookup);
    }

}
function preloadIRCalcDataClosePriceListing(data) {
    debugStep("preloadIRCalcDataClosePriceListing");
    var listingStockData = data.data.stock[0].data;
    var listingClosePriceData = data.data.closePriceListing[0].data;
    var listingAmount = listingStockData.length;
    var totalIterations = 0;

    for (var i = 0; i < listingAmount; i++) {
        globalChartListingStockData.push([]);
        globalChartListingStockDataDates.push([]);
        globalChartListingStockDataOHLCV.push([]);
    }

    $.each(listingClosePriceData, function (listingIndex, item) {
        totalIterations++;

        var listingArrayForChart = [];
        var listingArrayForChartOHLCV = [];
        var listingArrayForChartVolume = [];

        var stop = 0;

        $.each(item.data, function (listingDataIndex, item) {
            totalIterations++;
            //
            //  Get data
            //
            var currentMainListingOpenPrice = item.openPrice;
            var currentMainListingHigh = item.high;
            var currentMainListingLow = item.low;
            var currentMainListingClosePrice = item.closePrice;
            var currentMainListingVolume = item.volume;
            var currentUnixDateForChart = new moment(item.date).valueOf();

            //
            //  Validate data
            //
            if (currentMainListingOpenPrice == 0) {
                currentMainListingOpenPrice = currentMainListingClosePrice;
            }
            if (currentMainListingHigh == 0) {
                currentMainListingHigh = currentMainListingClosePrice;
            }
            if (currentMainListingLow == 0) {
                currentMainListingLow = currentMainListingClosePrice;
            }

            //
            //  Append data
            //
            globalChartListingStockDataDates[listingIndex].push(currentUnixDateForChart);
            listingArrayForChart.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice]);
            listingArrayForChartVolume.push([currentUnixDateForChart, currentMainListingVolume]);
            listingArrayForChartOHLCV.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice, currentMainListingVolume]);
        });

        //
        //  Append last price as last point in chart.
        //
        var stock = listingStockData[listingIndex];
        var stockDataTimestamp = stock.timestamp;
        var stockDataOpenPrice = stock.open;
        var stockDataHigh = stock.high;
        var stockDataLow = stock.low;
        var stockDataClosePrice = stock.last;
        var stockDataVolume = stock.volume;

        //
        //  Validate data
        //
        if (stockDataOpenPrice == 0) {
            stockDataOpenPrice = stockDataClosePrice;
        }
        if (stockDataHigh == 0) {
            stockDataHigh = stockDataClosePrice;
        }
        if (stockDataLow == 0) {
            stockDataLow = stockDataClosePrice;
        }

        var stockDataDateOnly = new moment(stockDataTimestamp).format("YYYY-MM-DD");
        var stockDataUnixDateForChart = new moment(stockDataDateOnly + 'T00:00:00.0000000Z').valueOf();

        globalChartListingStockDataDates[listingIndex].push(stockDataUnixDateForChart);

        listingArrayForChart.push([
            stockDataUnixDateForChart,
            stockDataClosePrice,
            null,
            null,
            null
        ]);
        listingArrayForChartVolume.push([
            stockDataUnixDateForChart,
            stockDataVolume
        ]);
        listingArrayForChartOHLCV.push([
            stockDataUnixDateForChart,
            stockDataOpenPrice,
            stockDataHigh,
            stockDataLow,
            stockDataClosePrice,
            stockDataVolume
        ]);
        globalChartListingStockData[listingIndex] = listingArrayForChart;
        globalChartListingStockDataOHLCV[listingIndex] = listingArrayForChartOHLCV;
    });


    buildCalcSimpleTool(data, menuTemplate_Calc);
}
function preloadIRCalcChartDataClosePriceListing(data) {
    debugStep("preloadIRCalcChartDataClosePriceListing");
    var listingStockData = data.data.stock[0].data;
    var listingClosePriceData = data.data.closePriceListing[0].data;
    var listingAmount = listingStockData.length;
    var totalIterations = 0;

    for (var i = 0; i < listingAmount; i++) {
        globalChartListingStockData.push([]);
        globalChartListingStockDataDates.push([]);
        globalChartListingStockDataOHLCV.push([]);
    }

    $.each(listingClosePriceData, function (listingIndex, item) {
        totalIterations++;

        var listingArrayForChart = [];
        var listingArrayForChartOHLCV = [];
        var listingArrayForChartVolume = [];

        var stop = 0;

        $.each(item.data, function (listingDataIndex, item) {
            totalIterations++;
            //
            //  Get data
            //
            var currentMainListingOpenPrice = item.openPrice;
            var currentMainListingHigh = item.high;
            var currentMainListingLow = item.low;
            var currentMainListingClosePrice = item.closePrice;
            var currentMainListingVolume = item.volume;
            var currentUnixDateForChart = new moment(item.date).valueOf();

            //
            //  Validate data
            //
            if (currentMainListingOpenPrice == 0) {
                currentMainListingOpenPrice = currentMainListingClosePrice;
            }
            if (currentMainListingHigh == 0) {
                currentMainListingHigh = currentMainListingClosePrice;
            }
            if (currentMainListingLow == 0) {
                currentMainListingLow = currentMainListingClosePrice;
            }

            //
            //  Append data
            //
            globalChartListingStockDataDates[listingIndex].push(currentUnixDateForChart);
            listingArrayForChart.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice]);
            listingArrayForChartVolume.push([currentUnixDateForChart, currentMainListingVolume]);
            listingArrayForChartOHLCV.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice, currentMainListingVolume]);
        });

        //
        //  Append last price as last point in chart.
        //
        var stock = listingStockData[listingIndex];
        var stockDataTimestamp = stock.timestamp;
        var stockDataOpenPrice = stock.open;
        var stockDataHigh = stock.high;
        var stockDataLow = stock.low;
        var stockDataClosePrice = stock.last;
        var stockDataVolume = stock.volume;

        //
        //  Validate data
        //
        if (stockDataOpenPrice == 0) {
            stockDataOpenPrice = stockDataClosePrice;
        }
        if (stockDataHigh == 0) {
            stockDataHigh = stockDataClosePrice;
        }
        if (stockDataLow == 0) {
            stockDataLow = stockDataClosePrice;
        }

        var stockDataDateOnly = new moment(stockDataTimestamp).format("YYYY-MM-DD");
        var stockDataUnixDateForChart = new moment(stockDataDateOnly + 'T00:00:00.0000000Z').valueOf();

        globalChartListingStockDataDates[listingIndex].push(stockDataUnixDateForChart);

        listingArrayForChart.push([
            stockDataUnixDateForChart,
            stockDataClosePrice,
            null,
            null,
            null
        ]);
        listingArrayForChartVolume.push([
            stockDataUnixDateForChart,
            stockDataVolume
        ]);
        listingArrayForChartOHLCV.push([
            stockDataUnixDateForChart,
            stockDataOpenPrice,
            stockDataHigh,
            stockDataLow,
            stockDataClosePrice,
            stockDataVolume
        ]);
        globalChartListingStockData[listingIndex] = listingArrayForChart;
        globalChartListingStockDataOHLCV[listingIndex] = listingArrayForChartOHLCV;
    });


    buildCalcTool(data, menuTemplate_Calc);
}
function preloadIRCalcDiviendData(data) {
    debugStep("preloadIRCalcDiviendData");
    globalRawCalcDividendData = data;
    //JRJR
}
function preloadIRChartDataClosePriceListing(data) {
    debugStep("preloadIRChartDataClosePriceListing");
    var listingStockData = data.data.stock[0].data;
    var listingClosePriceData = data.data.closePriceListing[0].data;
    var listingAmount = listingStockData.length;
    var totalIterations = 0;

    for (var i = 0; i < listingAmount; i++) {
        globalChartListingStockData.push([]);
        globalChartListingStockDataDates.push([]);
        globalChartListingStockDataOHLCV.push([]);
        globalChartListingStockDataVolume.push([]);
    }

    $.each(listingClosePriceData, function (listingIndex, item) {
        totalIterations++;

        //globalListingNames
        //globalCurrencies

        var listingArrayForChart = [];
        var listingArrayForChartOHLCV = [];
        var listingArrayForChartVolume = [];

        var stop = 0;

        $.each(item.data, function (listingDataIndex, item) {
            totalIterations++;
            //
            //  Get data
            //
            var currentMainListingOpenPrice = item.openPrice;
            var currentMainListingHigh = item.high;
            var currentMainListingLow = item.low;
            var currentMainListingClosePrice = item.closePrice;
            var currentMainListingVolume = item.volume;
            var currentUnixDateForChart = new moment(item.date).valueOf();

            //
            //  Validate data
            //
            if (currentMainListingOpenPrice == 0) {
                currentMainListingOpenPrice = currentMainListingClosePrice;
            }
            if (currentMainListingHigh == 0) {
                currentMainListingHigh = currentMainListingClosePrice;
            }
            if (currentMainListingLow == 0) {
                currentMainListingLow = currentMainListingClosePrice;
            }

            //
            //  Append data
            //
            globalChartListingStockDataDates[listingIndex].push(currentUnixDateForChart);
            listingArrayForChart.push([currentUnixDateForChart, currentMainListingClosePrice, null, null, null]);
            listingArrayForChartVolume.push([currentUnixDateForChart, currentMainListingVolume]);
            listingArrayForChartOHLCV.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice, currentMainListingVolume]);
        });

        //
        //  Append last price as last point in chart.
        //
        var stock = listingStockData[listingIndex];
        var stockDataTimestamp = stock.timestamp;
        var stockDataOpenPrice = stock.open;
        var stockDataHigh = stock.high;
        var stockDataLow = stock.low;
        var stockDataClosePrice = stock.last;
        var stockDataVolume = stock.volume;

        //
        //  Validate data
        //
        if (stockDataOpenPrice == 0) {
            stockDataOpenPrice = stockDataClosePrice;
        }
        if (stockDataHigh == 0) {
            stockDataHigh = stockDataClosePrice;
        }
        if (stockDataLow == 0) {
            stockDataLow = stockDataClosePrice;
        }

        var stockDataDateOnly = new moment(stockDataTimestamp).format("YYYY-MM-DD");
        var stockDataUnixDateForChart = new moment(stockDataDateOnly + 'T00:00:00.0000000Z').valueOf();

        globalChartListingStockDataDates[listingIndex].push(stockDataUnixDateForChart);

        listingArrayForChart.push([
            stockDataUnixDateForChart,
            stockDataClosePrice,
            null,
            null,
            null
        ]);
        listingArrayForChartVolume.push([
            stockDataUnixDateForChart,
            stockDataVolume
        ]);
        listingArrayForChartOHLCV.push([
            stockDataUnixDateForChart,
            stockDataOpenPrice,
            stockDataHigh,
            stockDataLow,
            stockDataClosePrice,
            stockDataVolume
        ]);
        globalChartListingStockData[listingIndex] = listingArrayForChart;
        globalChartListingStockDataVolume[listingIndex] = listingArrayForChartVolume;
        globalChartListingStockDataOHLCV[listingIndex] = listingArrayForChartOHLCV;
    });

    debugIterations_preloadIRChartDataClosePriceListing = totalIterations;

    // Ignores the default behaviour when creating custom IRChart.
    if (useIRChartCustomPreventDefault) {

    } else {
        drawIRChartHTML();
    }


    //setIRChartHTMLExtremes(chartDisplayModes.historical, 360);

}
function preloadIRChartNewsHistorical(newsRawData) {
    // JRJR
    var chartListingEarlyDate = globalChartListingStockDataDates[globalActiveListingIndex][0];

    var chartNewsHeadlines = [];
    var IRChartNewsHeadlines = [];
    var IRChartNewsDates = [];

    $.each(newsRawData.data, function (index, item) {
        var currentDate = new moment(item.timestamp);
        var currentUnixDateForChart = new moment(currentDate.format('YYYY-MM-DD')).valueOf();

        if (currentUnixDateForChart > chartListingEarlyDate) {

            chartNewsHeadlines.push({
                x: currentUnixDateForChart,
                events: {
                    mouseOver: function () {
                    },
                    click: function () {
                        chartOpenNewsFromFlag(item);
                    }
                }
            });

            IRChartNewsDates.push(currentUnixDateForChart);
            IRChartNewsHeadlines.push(newsHeadlineRemoveCharacters(item.headline));
        }
    });

    globalChartNewsHeadlines = IRChartNewsHeadlines;
    globalChartNewsHeadlinesFlags = chartNewsHeadlines.reverse();
    globalChartNewsDates = IRChartNewsDates;

    drawIRNewsToChartHistorical();
}
function preloadIRChartPressReleaseIRChartHeadlineHistorical(newsRawData) {
    debugStep('preloadIRChartPressReleaseIRChartHeadlineHistorical');

    var chartListingEarlyDate = globalChartListingStockDataDates[globalActiveListingIndex][0];

    var chartNewsHeadlines = [];
    var IRChartNewsHeadlines = [];
    var IRChartNewsDates = [];

    $.each(newsRawData.data, function (index, item) {
        var currentDate = new moment(item.date);
        var currentUnixDateForChart = new moment(currentDate.format('YYYY-MM-DD')).valueOf();

        if (currentUnixDateForChart > chartListingEarlyDate) {

            //var itemPressRelease = {
            //    headline: item.headline,
            //    htmlUrl: item.url,
            //    timestamp: item.date
            //    };

            chartNewsHeadlines.push({
                x: currentUnixDateForChart,
                events: {
                    mouseOver: function () {
                    },
                    click: function () {
                        //chartOpenNewsFromFlag(itemPressRelease);
                        chartOpenPressReleaseFromURL(item.url);
                    }
                }
            });

            IRChartNewsDates.push(currentUnixDateForChart);
            IRChartNewsHeadlines.push(newsHeadlineRemoveCharacters(item.headline));
        }
    });

    globalChartPressReleaseIRChartHeadlineHeadlines = IRChartNewsHeadlines;
    globalChartPressReleaseIRChartHeadlineFlags = chartNewsHeadlines.reverse();
    globalChartPressReleaseIRChartHeadlineDates = IRChartNewsDates;

    if (useIRChartCustomPreventDefault) {
    } else {
        drawIRChartPressReleaseIRChartHeadlineToChartHistorical();
    }
}
function preloadIRChartPressReleaseHistorical(newsRawData) {
    debugStep('preloadIRChartPressReleaseHistorical');
    var chartListingEarlyDate = globalChartListingStockDataDates[globalActiveListingIndex][0];

    var chartNewsHeadlines = [];
    var IRChartNewsHeadlines = [];
    var IRChartNewsDates = [];

    $.each(newsRawData.data, function (index, item) {
        var currentDate = new moment(item.publishTime);
        var currentUnixDateForChart = new moment(currentDate.format('YYYY-MM-DD')).valueOf();

        if (currentUnixDateForChart > chartListingEarlyDate) {

            //var itemPressRelease = {
            //    headline: item.headline,
            //    htmlUrl: item.url,
            //    timestamp: item.date
            //    };

            chartNewsHeadlines.push({
                x: currentUnixDateForChart,
                events: {
                    mouseOver: function () {
                    },
                    click: function () {
                        $.each(item.keyValueSet, function (index, item) {
                            if (item.key == 'link') {
                                chartOpenPressReleaseFromURL(item.value)
                            }
                        });
                    }
                }
            });

            IRChartNewsDates.push(currentUnixDateForChart);
            IRChartNewsHeadlines.push(newsHeadlineRemoveCharacters(item.headline));
        }
    });

    globalChartPressReleaseIRChartHeadlineHeadlines = IRChartNewsHeadlines;
    globalChartPressReleaseIRChartHeadlineFlags = chartNewsHeadlines.reverse();
    globalChartPressReleaseIRChartHeadlineDates = IRChartNewsDates;
    if (useIRChartCustomPreventDefault) {
    } else {
        drawIRChartPressReleaseIRChartHeadlineToChartHistorical();
    }
}
function preloadIRChartDataClosePriceOther(data) {
    debugStep("preloadIRChartDataClosePriceOther");

    var totalIterations = 0;
    var listingStockData = data.data.stock[0].data;
    var listingClosePriceData = data.data.closePriceListing[0].data[globalActiveListingIndex];
    var otherClosePriceData = data.data.closePriceOther[0].data;

    var peerArrayForChart = [];
    var peerStartAtPositionHasHit = [];
    var peerLastKnownClosePrice = [];

    var comparisonList = [];
    for (var i = 0; i < otherClosePriceData.length; i++) {
        totalIterations++;
        comparisonList.push([i, otherClosePriceData[i].instrumentType, otherClosePriceData[i].name]);
        peerArrayForChart.push([]);
        peerStartAtPositionHasHit.push(false);
        peerLastKnownClosePrice.push([]);
        globalChartComparisonNames.push('');
        globalChartComparisonSymbols.push('');
        globalChartComparisonInChart.push(0);
    }
    drawIRChartCompareListNavigation(listingStockData, comparisonList);

    var addedPeerNameIndex = 0;
    $.each(listingClosePriceData.data, function (listingDataIndex, item) {

        totalIterations++;
        var currentMainListingClosePrice = item.closePrice;
        var currentMainListingDate = item.date;
        var currentUnixDateForChart = new Date(item.date).getTime();

        //
        // Each peer
        //
        $.each(otherClosePriceData, function (peerIndex, item) {
            if (addedPeerNameIndex < otherClosePriceData.length) {
                globalChartComparisonNames[peerIndex] = item.name + " (" + item.symbol + ")";
                globalChartComparisonSymbols[peerIndex] = item.symbol;
                addedPeerNameIndex += 1;
            }

            //
            // Each peer entries
            //
            var peerClosePrice = -1;
            $.each(item.data, function (peerDataIndex, item) {
                var currentPeerDate = item.date;
                var currentPeerClosePrice = item.closePrice;
                if (currentPeerDate == currentMainListingDate) {
                    if (!peerStartAtPositionHasHit[peerIndex]) {
                        peerStartAtPositionHasHit[peerIndex] = true;
                    }
                    peerClosePrice = currentPeerClosePrice;
                    peerLastKnownClosePrice[peerIndex] = currentPeerClosePrice;
                } else {
                    if (currentPeerDate < currentMainListingDate) {
                        peerClosePrice = currentPeerClosePrice; // Test to plot weekdata (non trading)
                    }

                }
            });
            if (peerClosePrice != -1) {
                peerArrayForChart[peerIndex].push([currentUnixDateForChart, peerClosePrice]);
            } else {
                if (peerStartAtPositionHasHit[peerIndex]) {
                    peerArrayForChart[peerIndex].push([currentUnixDateForChart, peerLastKnownClosePrice[peerIndex]]);
                } else {
                    //
                    //  We add null values when no data is available.
                    //  This makes the array the same length as the main listing.
                    //
                    peerArrayForChart[peerIndex].push([currentUnixDateForChart, null]);
                }
            }
        });



    });

    globalChartComparisonData.push(peerArrayForChart);

    debugIterations_preloadIRChartDataClosePriceOther = totalIterations;

}
function preloadIRChartDataClosePriceOther_old(data) {
    debugStep("preloadIRChartDataClosePriceOther");

    var listingStockData = data.data.stock[0].data;

    //  listingArr
    var listingClosePriceData = data.data.closePriceListing[0].data[globalActiveListingIndex];

    //  PeerArr
    var otherClosePriceData = data.data.closePriceOther[0].data;

    var chartCompareArrayForChart = [];
    var chartCompareStartAtPositionHasHit = [];
    var chartCompareLastKnownClosePrice = [];

    var listingAmount = listingStockData.length;
    var totalIterations = 0;
    var comparisonList = [];


    for (var i = 0; i < otherClosePriceData.length; i++) {
        if (otherClosePriceData[i].instrumentType == 'Index') {
            globalChartComparisonIndices.push([]);
            comparisonList.push([globalChartComparisonIndices.length, 'Index', otherClosePriceData[i].name]);

            //chartIndiceArrayForChart.push([]);
            //chartIndiceStartAtPositionHasHit.push(false);
            //chartIndiceLastKnownClosePrice.push([]);

            globalAmountOfIndices += 1;
        }
        if (otherClosePriceData[i].instrumentType == 'Peer') {
            globalChartComparisonPeers.push([]);
            comparisonList.push([globalChartComparisonPeers.length, 'Peer', otherClosePriceData[i].name]);

            //chartPeerArrayForChart.push([]);
            //chartPeerStartAtPositionHasHit.push(false);
            //chartPeerLastKnownClosePrice.push([]);

            globalAmountOfPeers += 1;
        }


        chartCompareArrayForChart.push([]);
        chartCompareStartAtPositionHasHit.push(false);
        chartCompareLastKnownClosePrice.push([]);
    }

    drawIRChartCompareListNavigation(listingStockData, comparisonList);

    var addedPeerNameIndex = 0;

    $.each(listingClosePriceData, function (listingIndex, item) {
        var currentMainListingClosePrice = item.closePrice;
        var currentMainListingDate = item.date;
        var currentUnixDateForChart = new Date(item.date).getTime();



        totalIterations++;



    });




}
function preloadIRChartDataIntradayListing(data) {
    debugStep("preloadIRChartDataIntradayListing");
    var listingStockData = data.data.stock[0].data;
    var listingIntradayData = data.data.intradayListing[0].data;
    var listingAmount = listingStockData.length;
    var totalIterations = 0;

    for (var i = 0; i < listingAmount; i++) {
        globalChartListingIntradayData.push([]);
        globalChartListingIntradayDataVolume.push([]);
        globalChartListingIntradayDataOHLCV.push([]);
    }

    //debugTimestamp("raw: " + listingIntradayData[globalActiveListingIndex].data[listingIntradayData[globalActiveListingIndex].data.length - 1].timestamp);
    //debugTimestamp("intraday timestamp: " + listingIntradayData[globalActiveListingIndex].data[listingIntradayData[globalActiveListingIndex].data.length - 1].timestamp);
    //debugTimestamp("intraday timestamp: " + new moment.tz(listingIntradayData[globalActiveListingIndex].data[listingIntradayData[globalActiveListingIndex].data.length - 1].timestamp, globalActiveExchangeTimeZone).format(clientStyle.formatDateTime));

    $.each(listingIntradayData, function (listingIndex, item) {

        totalIterations++;
        var listingArrayForChart = [];
        var listingArrayForChartVolume = [];
        var listingArrayForChartOHLCV = [];
        var ListingArrayIntradayDataDates = [];

        var instrumentID = item.instrumentID;

        $.each(item.data, function (listingDataIndex, item) {
            totalIterations++;
            //
            //  Get data
            //
            //var currentUnixDateForChart = new moment(item.timestamp).valueOf();
            var currentUnixDateForChart = new moment.tz(item.timestamp, globalActiveExchangeTimeZone).add(clientStyle.manualTimeOffset, 'hours').valueOf();
            //var currentUnixDateForChart = new moment(item.timestamp).valueOf();
            var currentMainListingOpenPrice = item.open;
            var currentMainListingHigh = item.high;
            var currentMainListingLow = item.low;
            var currentMainListingClosePrice = item.closePrice;
            var currentMainListingVolume = item.volume;

            //
            //  Validate data
            //
            if (currentMainListingOpenPrice == 0) {
                currentMainListingOpenPrice = currentMainListingClosePrice;
            }
            if (currentMainListingHigh == 0) {
                currentMainListingHigh = currentMainListingClosePrice;
            }
            if (currentMainListingLow == 0) {
                currentMainListingLow = currentMainListingClosePrice;
            }

            //
            //  Append data
            //

            //
            // Todo: permanently correct this.
            //
            if (clientSolutionID == '2088') {
                //debugStep("correction applied");

                // Euronext
                if (instrumentID == 1000162 || instrumentID == 1000163) {
                    currentUnixDateForChart = currentUnixDateForChart + 60 * 60 * 1000 * 1; // Correction
                    ListingArrayIntradayDataDates.push(currentUnixDateForChart + 60 * 60 * 1000 * 1); // Correction
                }

                // London
                if (instrumentID == 1000160 || instrumentID == 1000161) {
                    currentUnixDateForChart = currentUnixDateForChart; // Correction
                    ListingArrayIntradayDataDates.push(currentUnixDateForChart); // Correction
                }

                // NYSE
                if (instrumentID == 1000164 || instrumentID == 1000165) {

                    var newUnixDateForChart = currentUnixDateForChart + (60 * 60 * 1000 * 5) * -1; // Correction
                    ListingArrayIntradayDataDates.push(newUnixDateForChart);
                    currentUnixDateForChart = currentUnixDateForChart + (60 * 60 * 1000 * 5) * -1; // Correction
                }





            } else {
                ListingArrayIntradayDataDates.push(currentUnixDateForChart);
            }

            //listingArrayForChart.push([
            //    currentUnixDateForChart,
            //    currentMainListingOpenPrice,
            //    currentMainListingHigh,
            //    currentMainListingLow,
            //    currentMainListingClosePrice
            //]);


            listingArrayForChart.push([
                currentUnixDateForChart,
                currentMainListingClosePrice,
                null,
                null,
                null
            ]);

            listingArrayForChartVolume.push([
                currentUnixDateForChart,
                currentMainListingVolume
            ]);



            listingArrayForChartOHLCV.push([
                currentUnixDateForChart,
                currentMainListingOpenPrice,
                currentMainListingHigh,
                currentMainListingLow,
                currentMainListingClosePrice,
                currentMainListingVolume
            ]);

        });


        //
        //  Append last price as last point in chart.
        //
        //var stock = listingStockData[listingIndex];
        //var stockDataTimestamp = stock.timestamp;
        //var stockDataOpenPrice = stock.open;
        //var stockDataHigh = stock.high;
        //var stockDataLow = stock.low;
        //var stockDataClosePrice = stock.last;
        //var stockDataVolume = stock.volume;

        ////var stockDataDateOnly = new moment(stockDataTimestamp).format("YYYY-MM-DD");
        ////var stockDataTimeOnly = new moment(stockDataTimestamp).format("HH:MM:ss");
        //var stockDataUnixDateForChart = new moment.tz(stock.timestamp, globalActiveExchangeTimeZone).valueOf();

        //globalChartListingIntradayDataDates.push(stockDataUnixDateForChart);

        //listingArrayForChart.push([
        //    stockDataUnixDateForChart,
        //    stockDataOpenPrice,
        //    stockDataHigh,
        //    stockDataLow,
        //    stockDataClosePrice
        //]);

        //debugTimestamp("intraday timestamp NICE: " + new moment.tz(stockDataUnixDateForChart, globalActiveExchangeTimeZone).format(clientStyle.formatDateTime));


        globalChartListingIntradayDataDates[listingIndex] = ListingArrayIntradayDataDates;
        globalChartListingIntradayData[listingIndex] = listingArrayForChart;
        globalChartListingIntradayDataVolume[listingIndex] = listingArrayForChartVolume;
        globalChartListingIntradayDataOHLCV[listingIndex] = listingArrayForChartOHLCV;
    });

}
function preloadIRChartMiniDataClosePriceListing(data) {
    debugStep("preLoadDataIRChartHTMLMainListing");
    var listingStockData = data.data.stock[0].data;
    var listingClosePriceData = data.data.closePriceListing[0].data;
    var listingAmount = listingStockData.length;
    var totalIterations = 0;

    for (var i = 0; i < listingAmount; i++) {
        globalChartListingStockData.push([]);
        globalChartListingStockDataDates.push([]);
        globalChartListingStockDataOHLCV.push([]);
        globalChartListingStockDataVolume.push([]);
    }

    $.each(listingClosePriceData, function (listingIndex, item) {
        totalIterations++;

        //globalListingNames
        //globalCurrencies

        var listingArrayForChart = [];
        var listingArrayForChartOHLCV = [];
        var listingArrayForChartVolume = [];

        var stop = 0;

        $.each(item.data, function (listingDataIndex, item) {
            totalIterations++;
            //
            //  Get data
            //
            var currentMainListingOpenPrice = item.openPrice;
            var currentMainListingHigh = item.high;
            var currentMainListingLow = item.low;
            var currentMainListingClosePrice = item.closePrice;
            var currentMainListingVolume = item.volume;
            var currentUnixDateForChart = new moment(item.date).valueOf();

            //
            //  Validate data
            //
            if (currentMainListingOpenPrice == 0) {
                currentMainListingOpenPrice = currentMainListingClosePrice;
            }
            if (currentMainListingHigh == 0) {
                currentMainListingHigh = currentMainListingClosePrice;
            }
            if (currentMainListingLow == 0) {
                currentMainListingLow = currentMainListingClosePrice;
            }

            //
            //  Append data
            //
            globalChartListingStockDataDates[listingIndex].push(currentUnixDateForChart);
            listingArrayForChart.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice]);
            listingArrayForChartVolume.push([currentUnixDateForChart, currentMainListingVolume]);
            listingArrayForChartOHLCV.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice, currentMainListingVolume]);
        });

        //
        //  Append last price as last point in chart.
        //
        var stock = listingStockData[listingIndex];
        var stockDataTimestamp = stock.timestamp;
        var stockDataOpenPrice = stock.open;
        var stockDataHigh = stock.high;
        var stockDataLow = stock.low;
        var stockDataClosePrice = stock.last;
        var stockDataVolume = stock.volume;

        //
        //  Validate data
        //
        if (stockDataOpenPrice == 0) {
            stockDataOpenPrice = stockDataClosePrice;
        }
        if (stockDataHigh == 0) {
            stockDataHigh = stockDataClosePrice;
        }
        if (stockDataLow == 0) {
            stockDataLow = stockDataClosePrice;
        }

        var stockDataDateOnly = new moment(stockDataTimestamp).format("YYYY-MM-DD");
        var stockDataUnixDateForChart = new moment(stockDataDateOnly + 'T00:00:00.0000000Z').valueOf();


        globalChartListingStockDataDates[listingIndex].push(stockDataUnixDateForChart);

        listingArrayForChart.push([
            stockDataUnixDateForChart,
            stockDataClosePrice,
            null,
            null,
            null
        ]);
        listingArrayForChartVolume.push([
            stockDataUnixDateForChart,
            stockDataVolume
        ]);
        listingArrayForChartOHLCV.push([
            stockDataUnixDateForChart,
            stockDataOpenPrice,
            stockDataHigh,
            stockDataLow,
            stockDataClosePrice,
            stockDataVolume
        ]);
        globalChartListingStockData[listingIndex] = listingArrayForChart;
        globalChartListingStockDataVolume[listingIndex] = listingArrayForChartVolume;
        globalChartListingStockDataOHLCV[listingIndex] = listingArrayForChartOHLCV;
    });

    drawIRChartMiniHTML();
}
function preloadIRBenchmarkData(data) {
    debugStep("preloadIRBenchmarkData");

    // globalRawStockData


    var listingClosePriceData = data.data.closePriceListing[0].data;

    var listingClosePriceData = data.data.closePriceListing[0].data;
    var listingAmount = globalRawStockData.length;
    var totalIterations = 0;

    for (var i = 0; i < listingAmount; i++) {
        globalChartListingStockData.push([]);
        globalChartListingStockDataDates.push([]);
    }

    //$.each(listingClosePriceData, function (listingIndex, item)
    //{
    //    totalIterations++;

    //    //globalListingNames
    //    //globalCurrencies

    //    var listingArrayForChart = [];
    //    var listingArrayForChartOHLCV = [];
    //    var listingArrayForChartVolume = [];

    //    var stop = 0;

    //    $.each(item.data, function (listingDataIndex, item)
    //    {
    //        totalIterations++;
    //        //
    //        //  Get data
    //        //
    //        var currentMainListingOpenPrice = item.openPrice;
    //        var currentMainListingHigh = item.high;
    //        var currentMainListingLow = item.low;
    //        var currentMainListingClosePrice = item.closePrice;
    //        var currentMainListingVolume = item.volume;
    //        var currentUnixDateForChart = new moment(item.date).valueOf();

    //        //
    //        //  Validate data
    //        //
    //        if (currentMainListingOpenPrice == 0) {
    //            currentMainListingOpenPrice = currentMainListingClosePrice;
    //        }
    //        if (currentMainListingHigh == 0) {
    //            currentMainListingHigh = currentMainListingClosePrice;
    //        }
    //        if (currentMainListingLow == 0) {
    //            currentMainListingLow = currentMainListingClosePrice;
    //        }

    //        //
    //        //  Append data
    //        //
    //        globalChartListingStockDataDates[listingIndex].push(currentUnixDateForChart);
    //        listingArrayForChart.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice]);
    //        listingArrayForChartVolume.push([currentUnixDateForChart, currentMainListingVolume]);
    //        listingArrayForChartOHLCV.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice, currentMainListingVolume]);
    //    });

    //    //
    //    //  Append last price as last point in chart.
    //    //
    //    var stock = listingStockData[listingIndex];
    //    var stockDataTimestamp = stock.timestamp;
    //    var stockDataOpenPrice = stock.open;
    //    var stockDataHigh = stock.high;
    //    var stockDataLow = stock.low;
    //    var stockDataClosePrice = stock.last;
    //    var stockDataVolume = stock.volume;

    //    //
    //    //  Validate data
    //    //
    //    if (stockDataOpenPrice == 0) {
    //        stockDataOpenPrice = stockDataClosePrice;
    //    }
    //    if (stockDataHigh == 0) {
    //        stockDataHigh = stockDataClosePrice;
    //    }
    //    if (stockDataLow == 0) {
    //        stockDataLow = stockDataClosePrice;
    //    }

    //    var stockDataDateOnly = new moment(stockDataTimestamp).format("YYYY-MM-DD");
    //    var stockDataUnixDateForChart = new moment(stockDataDateOnly + 'T00:00:00.0000000Z').valueOf();

    //    globalChartListingStockDataDates[listingIndex].push(stockDataUnixDateForChart);

    //    listingArrayForChart.push([
    //        stockDataUnixDateForChart,
    //        stockDataOpenPrice,
    //        stockDataHigh,
    //        stockDataLow,
    //        stockDataClosePrice
    //    ]);
    //    listingArrayForChartVolume.push([
    //        stockDataUnixDateForChart,
    //        stockDataVolume
    //    ]);
    //    listingArrayForChartOHLCV.push([
    //        stockDataUnixDateForChart,
    //        stockDataOpenPrice,
    //        stockDataHigh,
    //        stockDataLow,
    //        stockDataClosePrice,
    //        stockDataVolume
    //    ]);
    //    globalChartListingStockData[listingIndex] = listingArrayForChart;
    //    globalChartListingStockDataVolume[listingIndex] = listingArrayForChartVolume;
    //    globalChartListingStockDataOHLCV[listingIndex] = listingArrayForChartOHLCV;
    //});

}
function preloadIRChartMiniquoteDataClosePriceListing(data) {
    //debugStep("preloadIRChartMiniquoteDataClosePriceListing");
    //var listingStockData = data.data.stock[0].data;
    //var listingClosePriceData = data.data.closePriceListing[0].data;
    //var listingAmount = listingStockData.length;
    //var totalIterations = 0;

    //for (var i = 0; i < listingAmount; i++) {
    //    globalChartListingStockData.push([]);
    //    globalChartListingStockDataDates.push([]);
    //    globalChartListingStockDataOHLCV.push([]);
    //    globalChartListingStockDataVolume.push([]);
    //}

    //$.each(listingClosePriceData, function (listingIndex, item)
    //{
    //    totalIterations++;

    //    //globalListingNames
    //    //globalCurrencies

    //    var listingArrayForChart = [];
    //    var listingArrayForChartOHLCV = [];
    //    var listingArrayForChartVolume = [];

    //    var stop = 0;

    //    $.each(item.data, function (listingDataIndex, item)
    //    {
    //        totalIterations++;
    //        //
    //        //  Get data
    //        //
    //        var currentMainListingOpenPrice = item.openPrice;
    //        var currentMainListingHigh = item.high;
    //        var currentMainListingLow = item.low;
    //        var currentMainListingClosePrice = item.closePrice;
    //        var currentMainListingVolume = item.volume;
    //        var currentUnixDateForChart = new moment(item.date).valueOf();

    //        //
    //        //  Validate data
    //        //
    //        if (currentMainListingOpenPrice == 0) {
    //            currentMainListingOpenPrice = currentMainListingClosePrice;
    //        }
    //        if (currentMainListingHigh == 0) {
    //            currentMainListingHigh = currentMainListingClosePrice;
    //        }
    //        if (currentMainListingLow == 0) {
    //            currentMainListingLow = currentMainListingClosePrice;
    //        }

    //        //
    //        //  Append data
    //        //
    //        globalChartListingStockDataDates[listingIndex].push(currentUnixDateForChart);
    //        listingArrayForChart.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice]);
    //        listingArrayForChartVolume.push([currentUnixDateForChart, currentMainListingVolume]);
    //        listingArrayForChartOHLCV.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice, currentMainListingVolume]);
    //    });

    //    //
    //    //  Append last price as last point in chart.
    //    //
    //    var stock = listingStockData[listingIndex];
    //    var stockDataTimestamp = stock.timestamp;
    //    var stockDataOpenPrice = stock.open;
    //    var stockDataHigh = stock.high;
    //    var stockDataLow = stock.low;
    //    var stockDataClosePrice = stock.last;
    //    var stockDataVolume = stock.volume;

    //    //
    //    //  Validate data
    //    //
    //    if (stockDataOpenPrice == 0) {
    //        stockDataOpenPrice = stockDataClosePrice;
    //    }
    //    if (stockDataHigh == 0) {
    //        stockDataHigh = stockDataClosePrice;
    //    }
    //    if (stockDataLow == 0) {
    //        stockDataLow = stockDataClosePrice;
    //    }

    //    var stockDataDateOnly = new moment(stockDataTimestamp).format("YYYY-MM-DD");
    //    var stockDataUnixDateForChart = new moment(stockDataDateOnly + 'T00:00:00.0000000Z').valueOf();

    //    globalChartListingStockDataDates[listingIndex].push(stockDataUnixDateForChart);

    //    listingArrayForChart.push([
    //        stockDataUnixDateForChart,
    //        stockDataOpenPrice,
    //        stockDataHigh,
    //        stockDataLow,
    //        stockDataClosePrice
    //    ]);
    //    listingArrayForChartVolume.push([
    //        stockDataUnixDateForChart,
    //        stockDataVolume
    //    ]);
    //    listingArrayForChartOHLCV.push([
    //        stockDataUnixDateForChart,
    //        stockDataOpenPrice,
    //        stockDataHigh,
    //        stockDataLow,
    //        stockDataClosePrice,
    //        stockDataVolume
    //    ]);
    //    globalChartListingStockData[listingIndex] = listingArrayForChart;
    //    globalChartListingStockDataVolume[listingIndex] = listingArrayForChartVolume;
    //    globalChartListingStockDataOHLCV[listingIndex] = listingArrayForChartOHLCV;
    //});

    //drawIRChartHTMLMiniquote();
}
function preloadIRMiniquoteChartDataClosePriceListing(closePriceListingData) {
    debugStep("preloadIRMiniquoteChartDataClosePriceListing");
    var listingStockData = globalRawStockData;
    var listingAmount = listingStockData.length;
    var totalIterations = 0;

    for (var i = 0; i < listingAmount; i++) {
        globalChartListingStockData.push([]);
        globalChartListingStockDataDates.push([]);
        globalChartListingStockDataOHLCV.push([]);
        globalChartListingStockDataVolume.push([]);
    }

    $.each(closePriceListingData, function (listingIndex, item) {
        totalIterations++;

        //globalListingNames
        //globalCurrencies

        var listingArrayForChart = [];
        var listingArrayForChartOHLCV = [];
        var listingArrayForChartVolume = [];

        var stop = 0;

        $.each(item.data, function (listingDataIndex, item) {
            totalIterations++;
            //
            //  Get data
            //
            var currentMainListingOpenPrice = item.openPrice;
            var currentMainListingHigh = item.high;
            var currentMainListingLow = item.low;
            var currentMainListingClosePrice = item.closePrice;
            var currentMainListingVolume = item.volume;
            var currentUnixDateForChart = new moment(item.date).valueOf();

            //
            //  Validate data
            //
            if (currentMainListingOpenPrice == 0) {
                currentMainListingOpenPrice = currentMainListingClosePrice;
            }
            if (currentMainListingHigh == 0) {
                currentMainListingHigh = currentMainListingClosePrice;
            }
            if (currentMainListingLow == 0) {
                currentMainListingLow = currentMainListingClosePrice;
            }

            //
            //  Append data
            //
            globalChartListingStockDataDates[listingIndex].push(currentUnixDateForChart);
            listingArrayForChart.push([currentUnixDateForChart, currentMainListingClosePrice]);
            listingArrayForChartVolume.push([currentUnixDateForChart, currentMainListingVolume]);
            listingArrayForChartOHLCV.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice, currentMainListingVolume]);
        });

        //
        //  Append last price as last point in chart.
        //
        var stock = listingStockData[listingIndex];
        var stockDataTimestamp = stock.timestamp;
        var stockDataOpenPrice = stock.open;
        var stockDataHigh = stock.high;
        var stockDataLow = stock.low;
        var stockDataClosePrice = stock.last;
        var stockDataVolume = stock.volume;

        //
        //  Validate data
        //
        if (stockDataOpenPrice == 0) {
            stockDataOpenPrice = stockDataClosePrice;
        }
        if (stockDataHigh == 0) {
            stockDataHigh = stockDataClosePrice;
        }
        if (stockDataLow == 0) {
            stockDataLow = stockDataClosePrice;
        }

        var stockDataDateOnly = new moment(stockDataTimestamp).format("YYYY-MM-DD");
        var stockDataUnixDateForChart = new moment(stockDataDateOnly + 'T00:00:00.0000000Z').valueOf();

        globalChartListingStockDataDates[listingIndex].push(stockDataUnixDateForChart);

        listingArrayForChart.push([
            stockDataUnixDateForChart,
            stockDataClosePrice,
            null,
            null,
            null,
        ]);
        listingArrayForChartVolume.push([
            stockDataUnixDateForChart,
            stockDataVolume
        ]);
        listingArrayForChartOHLCV.push([
            stockDataUnixDateForChart,
            stockDataOpenPrice,
            stockDataHigh,
            stockDataLow,
            stockDataClosePrice,
            stockDataVolume
        ]);
        globalChartListingStockData[listingIndex] = listingArrayForChart;
        globalChartListingStockDataVolume[listingIndex] = listingArrayForChartVolume;
        globalChartListingStockDataOHLCV[listingIndex] = listingArrayForChartOHLCV;
    });
}
function preloadIRMiniquoteChartDataIntradayListing(stockData, listingIntradayData) {
    debugStep("preloadIRMiniquoteChartDataIntradayListing");
    var listingIntradayData = listingIntradayData;
    var listingAmount = stockData.length;
    var totalIterations = 0;

    for (var i = 0; i < listingAmount; i++) {
        globalChartListingIntradayData.push([]);
        globalChartListingIntradayDataVolume.push([]);
        globalChartListingIntradayDataOHLCV.push([]);
    }

    $.each(listingIntradayData, function (listingIndex, item) {
        totalIterations++;
        var listingArrayForChart = [];
        var listingArrayForChartVolume = [];
        var listingArrayForChartOHLCV = [];
        var ListingArrayIntradayDataDates = [];

        $.each(item.data, function (listingDataIndex, item) {
            totalIterations++;
            //
            //  Get data
            //
            var currentUnixDateForChart = new moment(item.timestamp).valueOf();
            var currentMainListingOpenPrice = item.open;
            var currentMainListingHigh = item.high;
            var currentMainListingLow = item.low;
            var currentMainListingClosePrice = item.closePrice;
            var currentMainListingVolume = item.volume;

            //
            //  Validate data
            //
            if (currentMainListingOpenPrice == 0) {
                currentMainListingOpenPrice = currentMainListingClosePrice;
            }
            if (currentMainListingHigh == 0) {
                currentMainListingHigh = currentMainListingClosePrice;
            }
            if (currentMainListingLow == 0) {
                currentMainListingLow = currentMainListingClosePrice;
            }

            //
            //  Append data
            //
            ListingArrayIntradayDataDates.push(currentUnixDateForChart);

            listingArrayForChart.push([
                currentUnixDateForChart,
                currentMainListingClosePrice,
                null,
                null,
                null
            ]);

            listingArrayForChartVolume.push([
                currentUnixDateForChart,
                currentMainListingVolume
            ]);

            listingArrayForChartOHLCV.push([
                currentUnixDateForChart,
                currentMainListingOpenPrice,
                currentMainListingHigh,
                currentMainListingLow,
                currentMainListingClosePrice,
                currentMainListingVolume
            ]);

        });

        globalChartListingIntradayDataDates[listingIndex] = ListingArrayIntradayDataDates;
        globalChartListingIntradayData[listingIndex] = listingArrayForChart;
        globalChartListingIntradayDataVolume[listingIndex] = listingArrayForChartVolume;
        globalChartListingIntradayDataOHLCV[listingIndex] = listingArrayForChartOHLCV;
    });

}
function preloadIRProfile(stockData, closePriceListingData) {

    globalRawClosePriceListing = closePriceListingData;

    var data = {
        headers: translations,
        stocks: globalRawStockData[globalActiveListingIndex],
        closePriceListing: globalRawClosePriceListing[0].data[globalActiveListingIndex],
        performance: preloadIRProfileDataEntry()
    }

    return data;
}
function preloadIRProfileDataEntry(stockData) {

    //globalRawClosePriceListing

    var closePriceData = globalRawClosePriceListing[0].data;

    debugStep("preloadIRProfileDataEntry");

    var performanceData = [];

    function data(m1, m3, y1) {
        this.m1 = m1;
        this.m3 = m3;
        this.y1 = y1;
    }

    var periodIndexLocated = new function () {
        this.m1 = false;
        this.m3 = false;
        this.y1 = false;
    }

    return new data(
            getProfilePerformanceDataForPeriod('m1', 'close', closePriceData[globalActiveListingIndex].data, globalRawStockData[globalActiveListingIndex], 'listing'),
            getProfilePerformanceDataForPeriod('m3', 'close', closePriceData[globalActiveListingIndex].data, globalRawStockData[globalActiveListingIndex], 'listing'),
            getProfilePerformanceDataForPeriod('y1', 'close', closePriceData[globalActiveListingIndex].data, globalRawStockData[globalActiveListingIndex], 'listing')
        );
}
// IRPerformance (from includes/js/*)
function preloadIRPerformanceData(closePriceData, stockData, typeOfData) {

    debugStep("preloadIRPerformanceData() - typeOfData = " + typeOfData + "");
    var datas = [];
    function data(symbol, name, currency, last, m1, m3, m6, y1, yt1, yt2, timestamp, tradeTimestamp) {
        this.symbol = symbol;
        this.name = name;
        this.currency = currency;
        this.last = last;
        this.m1 = m1;
        this.m3 = m3;
        this.m6 = m6;
        this.y1 = y1;
        this.yt1 = yt1;
        this.yt2 = yt2;
        this.timestamp = timestamp;
        this.tradeTimestamp = tradeTimestamp;
    }

    var periodIndexLocated = new function () {
        this.last = false;
        this.m1 = false;
        this.m3 = false;
        this.m6 = false;
        this.y1 = false;
        this.yt1 = false;
        this.yt2 = false;
        this.timestamp = false;
        this.tradeTimestamp = false;
    }

    for (var i = 0; i < closePriceData.length; i++) {

        if (typeOfData == 'listing') {
            datas.push(
                new data(
                    closePriceData[i].symbol,
                    closePriceData[i].name,
                    closePriceData[i].currency,
                    getDataForPeriod('d1', 'showRecentPrice', closePriceData[i].data, stockData[i], typeOfData),
                    getDataForPeriod('m1', 'close', closePriceData[i].data, stockData[i], typeOfData),
                    getDataForPeriod('m3', 'close', closePriceData[i].data, stockData[i], typeOfData),
                    getDataForPeriod('m6', 'close', closePriceData[i].data, stockData[i], typeOfData),
                    getDataForPeriod('y1', 'close', closePriceData[i].data, stockData[i], typeOfData),
                    getDataForFromToPeriod('yt1', 'close', closePriceData[i].data, typeOfData),
                    getDataForFromToPeriod('yt2', 'close', closePriceData[i].data, typeOfData),
                    stockData[i].timestamp,
                    stockData[i].tradeTimestamp
                )
            );
        } else if (typeOfData == 'indices') {
            if (closePriceData[i].instrumentType == 'Index') {

                datas.push(
                    new data(
                        closePriceData[i].symbol,
                        closePriceData[i].name,
                        closePriceData[i].currency,
                        getDataForPeriod('d1', 'showRecentPrice', closePriceData[i].data, null, typeOfData),
                        getDataForPeriod('m1', 'close', closePriceData[i].data, null, typeOfData),
                        getDataForPeriod('m3', 'close', closePriceData[i].data, null, typeOfData),
                        getDataForPeriod('m6', 'close', closePriceData[i].data, null, typeOfData),
                        getDataForPeriod('y1', 'close', closePriceData[i].data, null, typeOfData),
                        0,
                        0,
                        closePriceData[i].data[closePriceData[i].data.length - 1].date,
                        closePriceData[i].data[closePriceData[i].data.length - 1].date
                    )
                );
            }
        } else if (typeOfData == 'peers') {
            if (closePriceData[i].instrumentType == 'Peer') {

                datas.push(
                    new data(
                        closePriceData[i].symbol,
                        closePriceData[i].name,
                        closePriceData[i].currency,
                        getDataForPeriod('d1', 'showRecentPrice', closePriceData[i].data, null, typeOfData),
                        getDataForPeriod('m1', 'close', closePriceData[i].data, null, typeOfData),
                        getDataForPeriod('m3', 'close', closePriceData[i].data, null, typeOfData),
                        getDataForPeriod('m6', 'close', closePriceData[i].data, null, typeOfData),
                        getDataForPeriod('y1', 'close', closePriceData[i].data, null, typeOfData),
                        0,
                        0,
                        closePriceData[i].data[closePriceData[i].data.length - 1].date,
                        closePriceData[i].data[closePriceData[i].data.length - 1].date
                    )
                );
            }
        }
    }
    return datas;
}
function getDataForPeriod(period, useOpenHighLowOrClose, closePriceData, stockData, typeOfData) {
    var subIterations = 0;
    var unixDate;
    switch (period) {
        case "d1":
            unixDate = new moment(new moment().add(0, 'days').format("YYYY-MM-DD")).valueOf();
            break;
        case "m1":
            unixDate = new moment(new moment().add(-30, 'days').format("YYYY-MM-DD")).valueOf();
            break;
        case "m3":
            unixDate = new moment(new moment().add(-90, 'days').format("YYYY-MM-DD")).valueOf();
            break;
        case "m6":
            unixDate = new moment(new moment().add(-180, 'days').format("YYYY-MM-DD")).valueOf();
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
            if (typeOfData == 'indices') {
                return closePriceData[closePriceData.length - 1].closePrice - closePriceData[index].closePrice;
            }
            if (typeOfData == 'peers') {
                return closePriceData[closePriceData.length - 1].closePrice - closePriceData[index].closePrice;
            }
            break;
        case 'showRecentPrice':
            if (typeOfData == 'listing') {

                return stockData.last;
            } else {
                return closePriceData[index].closePrice;
            }
            break;
        default:
            return "-";
            break;
    }
}
function getDataForFromToPeriod(period, useOpenHighLowOrClose, closePriceData, typeOfData) {

    var subIterations = 0;
    var unixDate;
    switch (period) {
        case "yt1":
            unixFromDate = new moment(new moment().add(-1, 'year').format("YYYY-01-01")).valueOf();
            unixToDate = new moment(new moment().add(-1, 'year').format("YYYY-12-31")).valueOf();
            break;
        case "yt2":
            unixFromDate = new moment(new moment().add(-2, 'year').format("YYYY-01-01")).valueOf();
            unixToDate = new moment(new moment().add(-2, 'year').format("YYYY-12-31")).valueOf();
            break;
    }

    var dates = [];
    for (var i = 0; i < closePriceData.length; i++) {
        dates.push(new moment(new moment(closePriceData[i].date).format("YYYY-MM-DD")).valueOf());
        subIterations++;
    }
    var indexFrom = getClosestDateFromDateArray(unixFromDate, dates);
    var indexTo = getClosestDateFromDateArray(unixToDate, dates);

    if (indexFrom == -1 && indexTo && useOpenHighLowOrClose != 'showRecentPrice') {
        return "-";
    }

    switch (useOpenHighLowOrClose) {
        case 'close':
            if (typeOfData == 'listing') {
                return closePriceData[indexTo].closePrice - closePriceData[indexFrom].closePrice;
            }
            //if (typeOfData == 'indices') {
            //    return closePriceData[closePriceData.length - 1].closePrice - closePriceData[index].closePrice;
            //}
            //if (typeOfData == 'peers') {
            //    return closePriceData[closePriceData.length - 1].closePrice - closePriceData[index].closePrice;
            //}
            break;
        default:
            return "-";
            break;
    }

}