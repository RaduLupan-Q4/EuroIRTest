//
// Load data
//
loadTranslationsData();

if (useStockData) {
    loadStockData();
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
//

//
//  Init
//
function initHandlebars()
{
    debugStep("initHandlebars");
    timerStart();
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

    if (IRChartModule) {
        if (typeof ($('.IRChartModule').html()) != "undefined" && typeof ($('#IRChartModuleTemplate').html()) != "undefined") {
            var menuSource_IRChart = $('#IRChartModuleTemplate').html();
            menuTemplate_IRChart = Handlebars.compile(menuSource_IRChart);
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

    if (IREmailAlertModule) {
        if (typeof ($('.IREmailAlertModule').html()) != "undefined" && typeof ($('#IREmailAlertTemplate').html()) != "undefined") {
            var source = $('#IREmailAlertTemplate').html();
            menuTemplate_EmailAlert = Handlebars.compile(source);
        }
    }

    timerEnd('initHandlebars')
}
//
//  Load data functions
//
function loadTranslationsData()
{
    debugStep("loadTranslationsData");
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
        traditional: true,
        success: function (responseData, textStatus, errorThrown)
        {
        },
        error: function (responseData, textStatus, errorThrown)
        {
        }
    });
}
function loadStockData()
{
    debugStep("loadStockData");
    var postRequest = {
        apiversion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentTypes: ["Listing"]
    };
    requestStockData = $.ajax({
        url: getServiceEngingeURL() + 'RequestStockDataBundle',
        type: 'GET',
        data: postRequest,
        traditional: true,
        success: function (responseData, textStatus, errorThrown)
        {
        },
        error: function (responseData, textStatus, errorThrown)
        {
        }
    });
}
function loadClosePriceBundleListingData()
{
    debugStep("loadClosePriceBundleListingData");
    var request = {
        apiVersion: clientApiVersion,
        lcid: clientLCID,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        numberOfYears: 10,
        instrumentTypes: ["Listing"]
    };
    requestClosePriceListingData = $.ajax({
        url: getServiceEngingeURL() + 'RequestClosePriceBundle_OHLC',
        type: 'GET',
        data: request,
        traditional: true,
        success: function (responseData, textStatus, errorThrown)
        {
        },
        error: function (responseData, textStatus, errorThrown)
        {
        }
    });
}
function loadIntradayBundleListingData()
{
    debugStep("loadIntradayBundleListingData");
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
        traditional: true,
        success: function (responseData, textStatus, errorThrown)
        {
        },
        error: function (responseData, textStatus, errorThrown)
        {
        }
    });
}
function loadClosePriceBundleOtherData()
{
    debugStep("loadClosePriceBundleOtherData");
    var request = {
        apiVersion: clientApiVersion,
        lcid: clientLCID,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        numberOfYears: 10,
        instrumentTypes: ["Peer", "Index"]
    };
    requestClosePriceOtherData = $.ajax({
        url: getServiceEngingeURL() + 'RequestClosePriceBundle_C',
        type: 'GET',
        data: request,
        traditional: true,
        success: function (responseData, textStatus, errorThrown)
        {
        },
        error: function (responseData, textStatus, errorThrown)
        {
        }
    });
}
function loadOrdersData()
{
    debugStep("loadOrdersData");
    var dataRequest = {
        apiversion: clientApiVersion,
        solutionID: clientSolutionID,
        instrumentid: globalRawStockData[globalActiveListingIndex].instrumentID,
        customerKey: clientCustomerKeyRequired
    };
    requestOrdersData = $.ajax({
        url: getServiceEngingeURL() + 'RequestOrderDepthData',
        type: 'GET',
        data: dataRequest,
        success: function (responseData, textStatus, errorThrown)
        {
        },
        error: function (responseData, textStatus, errorThrown)
        {
        }
    });
}
function loadTradesData()
{
    debugStep("loadTradesData");
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
        data: dataRequest,
        success: function (responseData, textStatus, errorThrown)
        {
        },
        error: function (responseData, textStatus, errorThrown)
        {
        }
    });
}
function loadNewsDataInitial()
{
    debugStep("loadNewsDataInitial");
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
        data: dataRequest,
        success: function (responseData, textStatus, errorThrown)
        {
        },
        error: function (responseData, textStatus, errorThrown)
        {
        }
    });
}
function loadNewsDataSearch(searchText)
{
    debugStep("loadNewsDataSearch");

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
        data: dataRequest,
        success: function (responseData, textStatus, errorThrown)
        {
        },
        error: function (responseData, textStatus, errorThrown)
        {
        }
    });
}
function loadNewsArticleData()
{
    debugStep("loadNewsArticleData");

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
            data: dataRequest,
            success: function (responseData, textStatus, errorThrown)
            {
            },
            error: function (responseData, textStatus, errorThrown)
            {
            }
        });

        $.when(requestNewsArticleData).done(function (newsArticleData)
        {
            drawNewsArticle(newsArticleData);
        });
        $.when(requestNewsArticleData).fail(function ()
        {
            drawNewsArticle(undefined);
        });
    } else {
        drawNewsArticle(undefined);
    }
}
//
//  Data preloads.
//
function preloadIRLookupChartDataClosePriceListing(data)
{
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

    $.each(listingClosePriceData, function (listingIndex, item)
    {
        totalIterations++;

        var listingArrayForChart = [];
        var listingArrayForChartOHLCV = [];
        var listingArrayForChartVolume = [];

        var stop = 0;

        $.each(item.data, function (listingDataIndex, item)
        {
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
            stockDataOpenPrice,
            stockDataHigh,
            stockDataLow,
            stockDataClosePrice
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

    debugStep("preloadIRLookupChartDataClosePriceListing | total iterations [" + totalIterations + "]");

    buildLookupTool(data, menuTemplate_Lookup);
}
function preloadIRCalcChartDataClosePriceListing(data)
{
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

    $.each(listingClosePriceData, function (listingIndex, item)
    {
        totalIterations++;

        var listingArrayForChart = [];
        var listingArrayForChartOHLCV = [];
        var listingArrayForChartVolume = [];

        var stop = 0;

        $.each(item.data, function (listingDataIndex, item)
        {
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
            stockDataOpenPrice,
            stockDataHigh,
            stockDataLow,
            stockDataClosePrice
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

    debugStep("preloadIRCalcChartDataClosePriceListing | total iterations [" + totalIterations + "]");

    buildCalcTool(data, menuTemplate_Calc);
}
function preloadIRChartDataClosePriceListing(data)
{
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

    $.each(listingClosePriceData, function (listingIndex, item)
    {
        totalIterations++;

        //globalListingNames
        //globalCurrencies

        var listingArrayForChart = [];
        var listingArrayForChartOHLCV = [];
        var listingArrayForChartVolume = [];

        var stop = 0;

        $.each(item.data, function (listingDataIndex, item)
        {
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
            stockDataOpenPrice,
            stockDataHigh,
            stockDataLow,
            stockDataClosePrice
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

    debugStep("preloadIRChartDataClosePriceListing | total iterations [" + totalIterations + "]");

    drawIRChartHTML();
    //setIRChartHTMLExtremes('historical', 360);

}
function preloadIRChartNewsHistorical()
{
    // JRJR
    var chartListingEarlyDate = globalChartListingStockDataDates[globalActiveListingIndex][0];

    var chartNewsHeadlines = [];
    var IRChartNewsHeadlines = [];
    var IRChartNewsDates = [];
    var headlineTest = [];

    $.each(globalNewsRawData.data, function (index, item)
    {
        var currentDate = new moment(item.timestamp);
        var currentUnixDateForChart = new moment(currentDate.format('YYYY-MM-DD')).valueOf();

        if (currentUnixDateForChart > chartListingEarlyDate) {
            chartNewsHeadlines.push({
                x: currentUnixDateForChart,
                events: {
                    mouseOver: function ()
                    {
                        //console.log("Hover");
                    },
                    click: function ()
                    {
                        chartOpenNewsFromFlag(item);
                    }
                }
            });

            IRChartNewsDates.push(currentUnixDateForChart);
            IRChartNewsHeadlines.push(item.headline);
        }
    });
    globalChartNewsHeadlines = IRChartNewsHeadlines;
    globalChartNewsDates = IRChartNewsDates;
    drawIRNewsToChartHistorical(chartNewsHeadlines.reverse());
}
function preloadIRChartDataClosePriceOther(data)
{
    debugStep("preloadIRChartDataClosePriceOther");
    var totalIterations = 0;
    var listingStockData = data.data.stock[0].data;
    var listingClosePriceData = data.data.closePriceListing[0].data[globalActiveListingIndex];
    var otherClosePriceData = data.data.closePriceOther[0].data;

    //console.log(data.data.closePriceOther);

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
    }
    drawIRChartCompareListNavigation(listingStockData, comparisonList);

    var addedPeerNameIndex = 0;
    $.each(listingClosePriceData.data, function (listingDataIndex, item)
    {
        totalIterations++;
        var currentMainListingClosePrice = item.closePrice;
        var currentMainListingDate = item.date;
        var currentUnixDateForChart = new Date(item.date).getTime();

        //
        // Each peer
        //
        $.each(otherClosePriceData, function (peerIndex, item)
        {
            if (addedPeerNameIndex < otherClosePriceData.length) {
                globalChartComparisonNames[peerIndex] = item.name + " (" + item.symbol + ")";
                addedPeerNameIndex += 1;
            }

            //
            // Each peer entries
            //
            var peerClosePrice = -1;
            $.each(item.data, function (peerDataIndex, item)
            {
                var currentPeerDate = item.date;
                var currentPeerClosePrice = item.closePrice;
                if (currentPeerDate == currentMainListingDate) {
                    if (!peerStartAtPositionHasHit[peerIndex]) {
                        peerStartAtPositionHasHit[peerIndex] = true;
                    }
                    peerClosePrice = currentPeerClosePrice;
                    peerLastKnownClosePrice[peerIndex] = currentPeerClosePrice;
                }
            });
            if (peerClosePrice != -1) {
                peerArrayForChart[peerIndex].push([currentUnixDateForChart, peerClosePrice]);
            } else {
                if (peerStartAtPositionHasHit[peerIndex]) {
                    peerArrayForChart[peerIndex].push([currentUnixDateForChart, peerLastKnownClosePrice[peerIndex]]);
                }
            }
        });
    });

    globalChartComparisonData.push(peerArrayForChart);

    debugStep("preloadIRChartDataClosePriceOther | total iterations [" + totalIterations + "]");
}
function preloadIRChartDataClosePriceOther_old(data)
{
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

    $.each(listingClosePriceData, function (listingIndex, item)
    {
        var currentMainListingClosePrice = item.closePrice;
        var currentMainListingDate = item.date;
        var currentUnixDateForChart = new Date(item.date).getTime();



        totalIterations++;



    });

    debugStep("preloadIRChartDataClosePriceOther | total iterations [" + totalIterations + "]");



}
function preloadIRChartDataIntradayListing(data)
{
    debugStep("preloadIRChartDataIntradayListing");
    var listingStockData = data.data.stock[0].data;
    var listingIntradayData = data.data.intradayListing[0].data;
    var listingAmount = listingStockData.length;
    var totalIterations = 0;

    for (var i = 0; i < listingAmount; i++) {
        globalChartListingIntradayData.push([]);
    }

    $.each(listingIntradayData, function (listingIndex, item)
    {
        totalIterations++;
        var listingArrayForChart = [];

        $.each(item.data, function (listingDataIndex, item)
        {
            totalIterations++;
            //
            //  Get data
            //
            var currentUnixDateForChart = new moment(item.timestamp).valueOf();
            var currentMainListingOpenPrice = item.open;
            var currentMainListingHigh = item.high;
            var currentMainListingLow = item.low;
            var currentMainListingClosePrice = item.closePrice;

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
            globalChartListingIntradayDataDates.push(currentUnixDateForChart);
            listingArrayForChart.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice]);
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

        //var stockDataDateOnly = new moment(stockDataTimestamp).format("YYYY-MM-DD");
        //var stockDataTimeOnly = new moment(stockDataTimestamp).format("HH:MM:ss");
        //var stockDataUnixDateForChart = new moment(stockDataDateOnly + 'T' + stockDataTimeOnly + '.0000000Z').valueOf();

        //globalChartListingIntradayDataDates.push(stockDataUnixDateForChart);

        //listingArrayForChart.push([
        //    stockDataUnixDateForChart,
        //    stockDataOpenPrice,
        //    stockDataHigh,
        //    stockDataLow,
        //    stockDataClosePrice
        //]);


        globalChartListingIntradayData[listingIndex] = listingArrayForChart;
    });

    debugStep("preloadIRChartDataIntradayListing | total iterations [" + totalIterations + "]");
}
function preloadIRChartMiniDataClosePriceListing(data)
{
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

    $.each(listingClosePriceData, function (listingIndex, item)
    {
        totalIterations++;

        //globalListingNames
        //globalCurrencies

        var listingArrayForChart = [];
        var listingArrayForChartOHLCV = [];
        var listingArrayForChartVolume = [];

        var stop = 0;

        $.each(item.data, function (listingDataIndex, item)
        {
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
            stockDataOpenPrice,
            stockDataHigh,
            stockDataLow,
            stockDataClosePrice
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
function preloadIRBenchmarkData(data)
{
    debugStep("preloadIRBenchmarkData");

    // globalRawStockData


    var listingClosePriceData = data.data.closePriceListing[0].data;
    //console.log(listingClosePriceData);

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

    debugStep("preloadIRChartDataClosePriceListing | total iterations [" + totalIterations + "]");
}
function preloadIRChartMiniquoteDataClosePriceListing(data)
{
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

function preloadIRMiniquoteChartDataClosePriceListing()
{
    //debugStep("preloadIRMiniquoteChartDataClosePriceListing");

    //var listingStockData = globalRawStockData;
    //var listingClosePriceData = globalRawStockClosePriceListingData;
    //var listingAmount = listingStockData.length;
    //var totalIterations = 0;

    //for (var i = 0; i < listingAmount; i++) {
    //    globalChartListingStockData.push([]);
    //    globalChartListingStockDataDates.push([]);
    //}

    //$.each(listingClosePriceData, function (listingIndex, item)
    //{
    //    totalIterations++;

    //    //globalListingNames
    //    //globalCurrencies

    //    var listingArrayForChart = [];

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
    //    globalChartListingStockData[listingIndex] = listingArrayForChart;
    //});
}
function preloadIRMiniquoteChartDataClosePriceListing(data)
{
    debugStep("preloadIRMiniquoteChartDataClosePriceListing");
    var listingStockData = globalRawStockData;
    var listingClosePriceData = globalRawStockClosePriceListingData;
    var listingAmount = listingStockData.length;
    var totalIterations = 0;

    for (var i = 0; i < listingAmount; i++) {
        globalChartListingStockData.push([]);
        globalChartListingStockDataDates.push([]);
        globalChartListingStockDataOHLCV.push([]);
        globalChartListingStockDataVolume.push([]);
    }

    $.each(listingClosePriceData, function (listingIndex, item)
    {
        totalIterations++;

        //globalListingNames
        //globalCurrencies

        var listingArrayForChart = [];
        var listingArrayForChartOHLCV = [];
        var listingArrayForChartVolume = [];

        var stop = 0;

        $.each(item.data, function (listingDataIndex, item)
        {
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
            stockDataOpenPrice,
            stockDataHigh,
            stockDataLow,
            stockDataClosePrice
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