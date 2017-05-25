//
//  Memory
//
var chart = null;
var globalNumberOfListings = 0;
var globalNumberOfComparisonsInstruments = 0;

var globalChartListingDataArr;
var globalChartCompareDataArr;
var globalChartData = null;
var globalQuoteTableData;
var globalClosePriceListingData;
var globalListingNames = [];
var globalCurrencies = [];
var globalActiveLanguage = "en";
var chartPlotLineAdded = false;
var chartLastPriceBoxAdded = false;
var globalActivePeriod = 'y1';
var globalActiveCurrency = 'N/A';
var globalLastPriceTime = 'N/A';

var globalLastPriceDate = "N/A";
var globalLastPriceTime = "N/A";

var globalActiveListingLastPrice;
var globalVisibleSeriesCount = 1;

var compareData;
var chartListingBasicData = [];
var chartListingData = [];
var chartListingVolumeData = [];
var chartIntradayBasicData = [];
var chartIntradayData = [];
var chartDataActionPopulateListingData = true;
var chartDataActionPopulateIntradayData = true;
var chartCompareData = [];
var chartCompareNames = [];

//
//  Save index/peer data to reduce data iterations.
//  Note: not implemented yet, has been made ready.
//
var chartDataActionPopulateCompareData = true;
var chartCompareDataCollection = [];
var globalChangeListingData;

//
//  Chart settings
//

var chartTooltipFormat = '%d/%m/%Y';
var chartTooltipDecimals = 2;
var timestampFormat = "YYYY-MM-DD HH:mm";

var chartTooltipFormatDate = "%a %Y-%m-%d";
var chartTooltipFormatTime = '%a %Y-%m-%d %H:%M';

var chartContainerElement = '.IRChartHTMLPlaceholder';
var chartContainerMiniElement = '.IRChartHTMLMiniPlaceholder';
var chartContainerMiniQuoteElement = '.IRMiniQuoteChartModule';
var globalChartContainer = chartContainerElement;
var globalChartType;

var chartTooltipOffsetY = 30;
var chartActiveDisplayMode = 'historical';
var chartGlobalAnimationMS = 0;


$(function ()
{
    
    
    if (IRQuoteModule) {
        $.when(requestStockData, requestTranslationsData).done(function (stockData, translationsData)
        {
            globalQuoteTableData = stockData[0];
            globalNumberOfListings = globalQuoteTableData.data.length;
            setGlobalLastPriceDataAndTime(globalQuoteTableData);
            setGlobalCurrency(globalQuoteTableData);

            updateQuoteTable();
            setClickHandler("IRQuote", globalNumberOfListings, null, getChangeListingObject("IRQuoteModule", globalQuoteTableData));
            formatColour(); // see ir.behaviour.js
        });
    }

    if (IRMiniQuoteModule) {
        $.when(requestStockData, requestTranslationsData).done(function (stockData, translationsData)
        {
            globalQuoteTableData = stockData[0];
            globalNumberOfListings = globalQuoteTableData.data.length;
            setGlobalLastPriceDataAndTime(globalQuoteTableData);
            setGlobalCurrency(globalQuoteTableData);
            updateMiniQuoteTable();
            setClickHandler("IRMiniQuote", globalNumberOfListings, null, getChangeListingObject("IRMiniQuoteModule", globalQuoteTableData));
            formatColour(); // see ir.behaviour.js
        });
    }

    if (IRMiniQuoteChart) {
        chartContainerElement = chartContainerMiniQuoteElement;
        globalChartContainer = chartContainerMiniQuoteElement;
        globalChartType = chartToolTypes.typeChartMini;
        drawChartMini(chartContainerElement, chartContainerElement);
        requestStockData.done(function (stockData)
        {
            globalQuoteTableData = stockData;
            setGlobalLastPriceDataAndTime(globalQuoteTableData);
            setGlobalCurrency(globalQuoteTableData);
        });

        $.when(requestStockData, requestClosePriceListingData).done(function (stockData, closePriceListingData)
        {
            var o = {
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData
                }
            }
            //
            //  Preload
            //  preLoadData(type, data)
            //  type = "listing" or "index,peer"
            //

            preLoadData("listing", o, globalActiveListingIndex);
        });
        $.when(requestStockData, requestIntradayBundleData).done(function (stockData, intradayBundleData)
        {
            var o = {
                data: {
                    stock: stockData,
                    intradayListing: intradayBundleData
                }
            }
            preLoadData("intradayBundle", o, globalActiveListingIndex);
        });
        positionDisclaimer(-50);
    }

    if (IRCalc2Module) {
        $.when(requestClosePriceListingData, requestTranslationsData).done(function (closePriceListingData, translationsData)
        {
            globalClosePriceListingData = closePriceListingData;
            initCalc();
        });
    }

    if (IRNewsModule) {
        $.when(requestTranslationsData).done(function (translationsData)
        {
            var o = {
                headers: translations,
                data: null
            }
            buildNewsTool(o, menuTemplate_News);
        });
    }

    if (IRTradesModule) {

        $.when(requestTradeData, requestTranslationsData).done(function (tradeData, translationsData)
        {
            var o = {
                headers: translations,
                data: tradeData
            }
            buildTradeTable(o, menuTemplate_TradesTable);
            formatColour(); // see ir.behaviour.js
        });
    }

    if (IROrdersModule) {

        $.when(requestOrdersData, requestTranslationsData).done(function (ordersData, translationsData)
        {
            var o = {
                headers: translations,
                data: ordersData
            }
            buildOrdersTable(o, menuTemplate_OrdersTable);
            formatColour(); // see ir.behaviour.js
        });


        //requestOrdersData.done(function (ordersData)
        //{
        //    var o = {
        //        headers: {
        //            "t_symbol": translations.t_symbol,
        //            "t_bid": translations.t_bid,
        //            "t_ask": translations.t_ask,
        //            "t_tradePrice": translations.t_tradePrice,
        //            "t_tradeVolume": translations.t_tradeVolume,
        //            "t_change": translations.t_change,
        //            "t_high": translations.t_high,
        //            "t_low": translations.t_low,
        //            "t_timestamp": translations.t_timestamp
        //        },
        //        data: ordersData
        //    }
        //    buildOrdersTable(o, menuTemplate_OrdersTable);
        //    formatColour(); // see ir.behaviour.js
        //});
    }

    if (IRBenchmarkModule) {

        $.when(requestClosePriceListingData, requestClosePriceOtherData).done(function (closePriceListingData, closePriceOtherData)
        {
            var benchmarkTableData = {
                headers: translations,
                data: {
                    closePriceListing: closePriceListingData[0],
                    closePriceOther: closePriceOtherData
                }
            }

            if (typeof ($('.IRBenchmarkModule').html()) != "undefined" && typeof ($('#IRBenchmarkTableTemplate').html()) != "undefined") {
                buildBenchmarkTable(benchmarkTableData, menuTemplate_BenchmarkTable);
            }
            formatColour(); // see ir.behaviour.js
        });
    }

    if (IRChartHTMLModule) {

        globalChartType = chartToolTypes.typeChart;
        drawChart(chartContainerElement, chartContainerElement);

        requestStockData.done(function (stockData)
        {
            globalQuoteTableData = stockData;
            setGlobalLastPriceDataAndTime(globalQuoteTableData);
            setGlobalCurrency(globalQuoteTableData);
        });

        $.when(requestStockData, requestClosePriceListingData).done(function (stockData, closePriceListingData)
        {
            var o = {
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData
                }
            }
            //
            //  Preload
            //  preLoadData(type, data)
            //  type = "listing" or "index,peer"
            //
            preLoadData("listing", o, globalActiveListingIndex);
        });
        $.when(requestClosePriceListingData, requestClosePriceOtherData).done(function (closePriceListingData, closePriceOtherData)
        {
            //
            //  Will be deprecated
            //
            var o = {
                data: {
                    closePriceListing: closePriceListingData,
                    closePriceOther: closePriceOtherData
                }
            }

            //
            //  Preload
            //  preLoadData(type, data)
            //  type = "listing" or "index,peer"
            //
            //
            prepareChartCompareList(o);
            preLoadData("index,peer", o, globalActiveListingIndex);

            globalChartData = o;
            globalNumberOfListings = globalChartData.data.closePriceListing[0].data.length;
            globalNumberOfComparisonsInstruments = globalChartData.data.closePriceOther[0].data.length;

            setClickHandler("IRChartHTML", globalNumberOfListings, globalNumberOfComparisonsInstruments, getChangeListingObject("IRChartHTMLModule", closePriceListingData));

        });
        $.when(requestStockData, requestIntradayBundleData).done(function (stockData, intradayBundleData)
        {
            var o = {
                data: {
                    stock: stockData,
                    intradayListing: intradayBundleData
                }
            }
            preLoadData("intradayBundle", o, globalActiveListingIndex);
        });
        updateChartNavBarRange();
    }

    if (IRChartHTMLModule2) {

        globalChartType = chartToolTypes.typeChart;
        drawChart(chartContainerElement, chartContainerElement);

        requestStockData.done(function (stockData)
        {
            globalQuoteTableData = stockData;
            setGlobalLastPriceDataAndTime(globalQuoteTableData);
            setGlobalCurrency(globalQuoteTableData);
        });

        $.when(requestStockData, requestClosePriceListingData).done(function (stockData, closePriceListingData)
        {
            var o = {
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData
                }
            }
            //
            //  Preload
            //  preLoadData(type, data)
            //  type = "listing" or "index,peer"
            //
            preLoadData("listing", o, globalActiveListingIndex);
            setClickHandler("IRChartHTML2", globalNumberOfListings, globalNumberOfComparisonsInstruments, getChangeListingObject("IRChartHTMLModule", closePriceListingData));
        });
        updateChartNavBarRange();
    }

    if (IRChartHTMLMiniModule) {

        chartContainerElement = chartContainerMiniElement;
        globalChartContainer = chartContainerMiniElement;
        globalChartType = chartToolTypes.typeChartMini;
        drawChartMini(chartContainerElement, chartContainerElement);
        requestStockData.done(function (stockData)
        {
            globalQuoteTableData = stockData;
            setGlobalLastPriceDataAndTime(globalQuoteTableData);
            setGlobalCurrency(globalQuoteTableData);
        });

        $.when(requestStockData, requestClosePriceListingData).done(function (stockData, closePriceListingData)
        {
            var o = {
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData
                }
            }
            //
            //  Preload
            //  preLoadData(type, data)
            //  type = "listing" or "index,peer"
            //

            preLoadData("listing", o, globalActiveListingIndex);
        });
        $.when(requestStockData, requestIntradayBundleData).done(function (stockData, intradayBundleData)
        {
            var o = {
                data: {
                    stock: stockData,
                    intradayListing: intradayBundleData
                }
            }
            preLoadData("intradayBundle", o, globalActiveListingIndex);
        });
        positionDisclaimer(-50);

    }



});




function setClickHandler(module, numberOfListings, numberOfComparisonsInstruments, listingObject)
{
    debugStep("setClickHandler");
    switch (module) {
        case 'IRQuote':
            prepareChangeListing(numberOfListings, listingObject);
            activateClickHandler(module);
            break;
        case 'IRMiniQuote':
            //prepareChangeListing(numberOfListings, listingObject);
            activateClickHandler(module);
            break;
        case 'IRChartHTML':
            prepareChangeListing(numberOfListings, listingObject);
            prepareChangeChartMode(numberOfComparisonsInstruments);
            activateClickHandler(module);
            break;
        default:
            debugError("no match for the module '" + module + "' in setClickHandler()");
            break;
    }
}
function prepareChangeChartMode(numberOfComparisonsInstruments)
{
    debugStep("prepareChangeChartMode");
    var element = $('.IRChartHTMLDisplayMode');
    var subElements = "";
    subElements += returnSubChartHTMLDisplayModeElement(true, 'Historical');
    subElements += returnSubChartHTMLDisplayModeElement(false, 'Compare');
    //subElements += returnSubChartHTMLDisplayModeElement(false, 'Intraday');
    element.html("<select class=\"form-control\" name=\"IRChartHTMLDisplayMode\">" + subElements + "</select>");
}
function returnSubChartHTMLDisplayModeElement(active, mode)
{
    var addClass = '';
    if (active) {
        addClass = 'selected="selected"';
    }
    return "<option value=\"" + mode.toLowerCase() + "\"" + addClass + ">" + mode + "</option>";
}

function activateClickHandler(module)
{
    debugStep("activateClickHandler");
    switch (module) {

        case 'IRQuote':
            if (typeof ($('.IRChangeListing')) != "undefined") {
                $('.IRChangeListing select').bind('change', function ()
                {
                    globalActiveListingIndex = $(this).val();
                    updateQuoteTable();
                });
            }
            break;

        case 'IRMiniQuote':
            if (typeof ($('.IRChangeListing')) != "undefined") {
                $('.IRChangeListing select').bind('change', function ()
                {
                    globalActiveListingIndex = $(this).val();
                    updateQuoteTable();
                });
            }
            break;

        case 'IRChartHTML':
            if (typeof ($('.chartCompareList')) != "undefined") {
                $('.chartCompareList div').click(function ()
                {
                    debugStep("clicked '.chartCompareList div'");
                    showHideCompareSeries($(this).attr('id'));
                });
            }
            $('.IRChartHTMLDisplayMode select').bind('change', function ()
            {
                var activeHTMLDisplayMode = $(this).val();
                redrawHTMLChartWithCompareData(activeHTMLDisplayMode);
            });
            break;
        default:
            debugError("no match for the module '" + module + "' in activateClickHandler()");
            break;
    }
}



var chartToolTypes = new function ()
{
    this.typeChart = "chart";
    this.typeChartMini = "chartMini";
    this.typeChartLookup = "chartLookupCalc";
    this.typeChartCalc = "chartLookupCalc";
}