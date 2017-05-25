/*
    Data utility
*/

//
// Debug
//
var initTime = Date.now();
var serviceEngingeURL = setDevProdLink("dev"); // [dev/prod]
//debugSteps("util.js");
debugData("serviceEngingeURL");
debugDataContent(serviceEngingeURL);

//
// Load data
//
loadStockData();
loadHistoricalData();
loadBenchmarkData();
loadTradesData();
loadIntradayData();

$(function ()
{
    debugSteps("dom ready");

    initHandlebars();

    requestStockData.done(function (stockData)
    {
        var quoteTableData = {
            headers: {
                "t_symbol": "Symbol",
                "t_bid": "Bid",
                "t_ask": "Ask",
                "t_last": "Last",
                "t_change": "Change",
                "t_high": "High",
                "t_low": "Low",
                "t_timestamp": "Updated"
            },
            stocks: stockData
        }
        buildQuoteTable(quoteTableData, menuTemplate_QuoteTable);
    })
    requestBenchMarkData.done(function (benchmarkData)
    {
        var quoteBenchmarkData = {
            headers: {
                "t_name": "Name"
            },
            data: benchmarkData
        }
        buildBenchmarkTable(quoteBenchmarkData, menuTemplate_Benchmark);
    });
    requestTradesData.done(function (tradesData)
    {
        var quoteTradesData = {
            headers: {
                "t_name": "Name"
            },
            data: tradesData
        }
        buildTradesTable(quoteTradesData, menuTemplate_Trades);
    });
    requestIntradayData.done(function (intradayData)
    {
        var quoteIntradayData = {
            headers: {
                "t_name": "Name"
            },
            data: intradayData
        }
        buildIntradayTable(quoteIntradayData, menuTemplate_Intraday);
    });
    $.when(requestStockData, requestClosePriceData).done(function (stockData, closePriceData)
    {
        var quoteTableData = {
            stockData: stockData[0],
            closePriceData: closePriceData[0]
        }

        var historicalQuotesData = {
            closePriceData: closePriceData[0]
        }
        buildHistoricalQuotesTable(historicalQuotesData, menuTemplate_HistoricalQuotes);
    });
});

//
// Init functions
//
function initHandlebars()
{
    var menuSource_QuoteTable = $('#IRQuoteTableTemplate').html();
    menuTemplate_QuoteTable = Handlebars.compile(menuSource_QuoteTable);

    var menuSource_HistoricalQuotes = $('#IRHistoricalQuotesTableTemplate').html();
    menuTemplate_HistoricalQuotes = Handlebars.compile(menuSource_HistoricalQuotes);

    var menuSource_Benchmark = $('#IRBenchmarkTableTemplate').html();
    menuTemplate_Benchmark = Handlebars.compile(menuSource_Benchmark);

    var menuSource_Trades = $('#IRTradesTableTemplate').html();
    menuTemplate_Trades = Handlebars.compile(menuSource_Trades);

    var menuSource_Intraday = $('#IRIntradayTableTemplate').html();
    menuTemplate_Intraday = Handlebars.compile(menuSource_Intraday);
}

//
// load data functions
//
function loadStockData()
{
    debugSteps("loadStockData()");
    requestStockData = $.ajax({
        url: serviceEngingeURL + 'RequestStockData',
        type: 'POST',
        data: postRequest,
        success: function (responseData, textStatus, errorThrown)
        {
            //debugSteps("requestStockData:" + textStatus);
        },
        error: function (responseData, textStatus, errorThrown)
        {
            debugSteps("requestStockData:" + errorThrown);
        }
    });
}
function loadHistoricalData()
{
    debugSteps("loadHistoricalData()");
    postClosePriceDataRequest = {
        fromDate: "1900-01-01",
        toDate: "2016-01-01",
        apiVersion: 1,
        lcid: 1033,
        solutionID: 1656,
        instrumentID: 100021
    };

    requestClosePriceData = $.ajax({
        url: serviceEngingeURL + 'RequestClosePriceData',
        type: 'POST',
        data: postClosePriceDataRequest,
        success: function (responseData, textStatus, errorThrown)
        {
            //debugSteps("requestClosePriceData:" + textStatus);
        },
        error: function (responseData, textStatus, errorThrown)
        {
            debugSteps("requestClosePriceData:" + errorThrown);
        }
    });
}
function loadBenchmarkData(active)
{
    postBenchMarkDataRequest = {
        type: 0,
        apiVersion: 1,
        lcid: 1033,
        solutionID: 1656,
        instrumentID: 100021
    };
    requestBenchMarkData = $.ajax({
        url: serviceEngingeURL + 'RequestBenchMarkData',
        type: 'POST',
        data: postBenchMarkDataRequest,
        success: function (responseData, textStatus, errorThrown)
        {
            //debugSteps("requestBenchMarkData:" + textStatus);
        },
        error: function (responseData, textStatus, errorThrown)
        {
            debugSteps("requestBenchMarkData:" + errorThrown);
        }
    });

}
function loadTradesData()
{
    postTradesRequest = {
        apiVersion: 1,
        lcid: 1033,
        solutionID: 1656,
        instrumentID: 100021,
        amountOfTrades: 5
    };
    requestTradesData = $.ajax({
        url: serviceEngingeURL + 'RequestTradeData',
        type: 'POST',
        data: postTradesRequest,
        success: function (responseData, textStatus, errorThrown)
        {
            //debugSteps("requestBenchMarkData:" + textStatus);
        },
        error: function (responseData, textStatus, errorThrown)
        {
            debugSteps("requestBenchMarkData:" + errorThrown);
        }
    });
}
function loadIntradayData()
{
    postIntradayDataRequest = {
        fromDate: "2014-08-03",
        toDate: "2014-08-04",
        apiVersion: 1,
        lcid: 1033,
        solutionID: 1656,
        instrumentID: 100021
    };

    requestIntradayData = $.ajax({
        url: serviceEngingeURL + 'RequestIntradayData',
        type: 'POST',
        data: postIntradayDataRequest,
        success: function (responseData, textStatus, errorThrown)
        {
            //debugSteps("requestClosePriceData:" + textStatus);
        },
        error: function (responseData, textStatus, errorThrown)
        {
            debugSteps("requestClosePriceData:" + errorThrown);
        }
    });
}

//
// build functions
//
function buildQuoteTable(quoteTableData, menuTemplate_QuoteTable)
{
    $(".IRQuoteTableContainer").html(menuTemplate_QuoteTable(quoteTableData));
    debugSteps('buildQuoteTable');
}
function buildHistoricalQuotesTable(historicalQuotesData, menuTemplatea)
{
    $(".IRHistoricalQuotesTableContainer").html(menuTemplatea(historicalQuotesData));
    debugSteps('buildHistoricalQuotesTable');
}
function buildBenchmarkTable(benchmarkData, menuTemplate_Benchmark)
{
    $(".IRBenchmarkTableContainer").html(menuTemplate_Benchmark(benchmarkData));
    debugSteps("buildBenchmarkTable");
}
function buildTradesTable(tradesData, menuTemplate_Trades)
{
    $(".IRTradesTableContainer").html(menuTemplate_Trades(tradesData));
    debugSteps("buildTradesTable");
}
function buildIntradayTable(intradayData, menuTemplate_Intraday)
{
    $(".IRIntradayTableContainer").html(menuTemplate_Intraday(intradayData));
    debugSteps("buildIntradayTable");
}



//
// Debug functions
//
function debugSteps(msg)
{
    //console.log('%cStep ' + stepCounter, 'color: #666');
    console.log('%c' + msg + '', 'color: #3DB4FF');
    console.log('%c' + timer(), 'color: #777');
    //stepCounter++;
}
function debugData(msg)
{
    //console.log('%cStep ' + stepCounter, 'color: #666');
    //console.log('%c' + msg, 'color: #FF7C00');
    //stepCounter++;
}
function debugDataContent(msg)
{
    //console.log(msg);
    //console.log('%c' + timer(), 'color: #777');
}
function timer()
{
    return "" + Math.abs(new Date() - initTime) + " ms";
}
function setDevProdLink(state)
{
    var url = '';
    if (state == 'dev') {
        url = 'http://localhost:1337/ServiceEngine/api/json/reply/';
    }
    if (state == 'prod') {
        url = 'http://devir.euroinvestor.com/ServiceEngine/api/json/reply/';
    }
    return url;
}