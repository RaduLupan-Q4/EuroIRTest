//
// Debug
//
var debug = isDev();
//var debug = false;
var debugInDom = false;

//
// Allowed Data
//
var useStockData = false;
var useClosePriceBundleListingData = false;
var useClosePriceBundleOtherData = false;
var useIntradayData = false;
var useIntradayBundleData = false;
var useindexPeerData = false;
var useComparisonData = false;
var useTradeData = false;
var useNewsData = false;
//
// Allowed Modules
//
var IRQuoteModule = false;
var IRTradesModule = false;
var IRBenchmarkModule = false;
var IRBenchmarkTestModule = false;
var IRChartHTMLModule = false;
var IRChartHTMLModule2 = false;
var IRChartHTMLMiniModule = false;
var IRCalcModule = false;
var IRCalc2Module = false;
var IRLookupModule = false;
var IRNewsModule = false;

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
var chart = null;
var globalChartDom = null; // This is where we save and overwrite the DOM of the chart.
var globalNumberOfListings = 0;
var globalNumberOfComparisonsInstruments = 0;
var globalActiveListingIndex = 0;
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
var globalChartContainer = chartContainerElement;
var globalChartType;

var chartTooltipOffsetY = 30;
var chartActiveDisplayMode = 'historical';
var chartGlobalAnimationMS = 0;
//
// Check activeModules array (see ir.util.js)
//
if (typeof (activeModules) != "undefined") {
    checkactiveModules(activeModules);
} else {
    debugError("activeModules is not present in tool header");
}

//
// Check activeFeatures array (see ir.util.js)
//
if (typeof (activeFeatures) != "undefined") {
    checkactiveFeatures(activeFeatures);
} else {
    //debugError("activeFeatures is not present in tool header");
}

//
//  Extending Handlebars
//  See ir.behaviour.js for definitions.
//
function formatDecimal(number)
{
    try {
        return number.toFixed(clientStyle.amountOfDecimals);
    }
    catch (err) {
        debugDataContent(err);
        return "-";
    }
}
function formatLocal(number)
{
    return number.toLocaleString();
}

function setGlobalLastPriceDataAndTime(globalQuoteTableData)
{
    //
    //  Prepare timestamp data for chart last price indicator.
    //
    var mts = new moment(globalQuoteTableData.data[0].timestamp);
    globalLastPriceDate = mts.format("YYYY-MM-DD");
    globalLastPriceTime = mts.format("HH:mm");
    //
}
function setGlobalCurrency(globalQuoteTableData)
{
    globalActiveCurrency = globalQuoteTableData.data[globalActiveListingIndex].currency;
}

initSolutionInfo();


$(function ()
{
    initClientStyle(); // From ir.client.js (if clientStyle is defined).
    initHandlebars();

    requestTranslationsData.done(function (translationsData)
    {
        mergeLanguage(translationsData.data);
        manualOverwriteActiveLanguage(); // TODO: remove this.
        updateChartHTMLLanguages();
    });

    if (IRQuoteModule) {
        $.when(requestStockData, requestTranslationsData).done(function (stockData, translationsData)
        {
            globalQuoteTableData = stockData[0];
            globalNumberOfListings = globalQuoteTableData.data.length;
            setGlobalLastPriceDataAndTime(globalQuoteTableData);
            setGlobalCurrency(globalQuoteTableData);

            updateQuoteTable();
            setClickHandler("IRQuote", globalNumberOfListings, null, getChangeListingObject("IRQuoteModule", globalQuoteTableData));
        });
    }

    if (IRCalc2Module)
    {
        $.when(requestClosePriceListingData, requestTranslationsData).done(function (closePriceListingData, translationsData)
        {
            globalClosePriceListingData = closePriceListingData;
            initCalc();
        });
    }

    if (IRTradesModule) {
        requestTradeData.done(function (tradeData)
        {
            var o = {
                headers: {
                    "t_symbol": translations.t_symbol,
                    "t_bid": translations.t_bid,
                    "t_ask": translations.t_ask,
                    "t_tradePrice": translations.t_tradePrice,
                    "t_tradeVolume": translations.t_tradeVolume,
                    "t_change": translations.t_change,
                    "t_high": translations.t_high,
                    "t_low": translations.t_low,
                    "t_timestamp": translations.t_timestamp
                },
                data: tradeData
            }
            buildTradeTable(o, menuTemplate_TradesTable);
        })
    }

    if (IRBenchmarkModule) {

        $.when(requestClosePriceListingData, requestClosePriceOtherData).done(function (closePriceListingData, closePriceOtherData)
        {
            var benchmarkTableData = {
                headers: {
                    "t_symbol": translations.t_symbol,
                    "t_type": translations.t_type,
                    "t_currency": translations.t_currency,
                    "t_name": translations.t_name
                },
                data: {
                    closePriceListing: closePriceListingData[0],
                    closePriceOther: closePriceOtherData
                }
            }
            buildBenchmarkTable(benchmarkTableData, menuTemplate_BenchmarkTable);
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
        t_to: 'To'
    };
    translations = $.extend(additionalTranslations, t);
}
function manualOverwriteActiveLanguage()
{
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


    // Todo: only when chart is activated.

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
function positionDisclaimer(pxTop)
{
    $('body').css('overflow', 'hidden');
    $('.disclaimer').css('top', pxTop + 'px');
}
function initSolutionInfo()
{
    clientApiVersion = 1; // TODO, get this from provider!
    clientSolutionID = getSolutionID();
    clientCustomerKeyRequired = getCustomerKeyRequired();
    clientAmountOfYears = 10; // Listen to overwrite from ir.client.js
    clientAmountOfTrades = 5; // Listen to overwrite from ir.client.js
}
function initClientStyle()
{
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

        if (typeof (clientStyleOverwrite.formatDate) != "undefined")
        {
            clientStyle.formatDate = clientStyleOverwrite.formatDate;
        }
        if (typeof (clientStyleOverwrite.formatTime) != "undefined") {
            clientStyle.formatTime = clientStyleOverwrite.formatTime;
        }

        if (typeof (clientStyleOverwrite.formatTime) != "undefined" && typeof (clientStyleOverwrite.formatDateTime) != "undefined") {
            clientStyle.formatDateTime = clientStyleOverwrite.formatDate + ' ' + clientStyleOverwrite.formatTime;
        }
    }
    //clientStyle.chart_ColourMain = $('.IRChartColour').css('color');
}
function getChangeListingObject(method, o)
{
    var generic;
    if (method == "IRChartHTMLModule") {
        generic = o[0].data;
    }
    if (method == "IRQuoteModule") {
        generic = o.data;
    }
    return generic;
}
function getSolutionID()
{
    debugStep("getSolutionID");
    var fetchedSolutionID;
    var pathSplit = location.href.split("/");
    if (pathSplit[3].toLowerCase() == 'solutions' || pathSplit[3].toLowerCase() == 'irmotor') {
        fetchedSolutionID = pathSplit[5];
    } else {
        fetchedSolutionID = pathSplit[4];
    }

    /* Presentation HAX JRJR TODO Remove this */
    if (fetchedSolutionID == 'solutioneditor') {
        fetchedSolutionID = '10010';
    }

    return fetchedSolutionID;
}
function isDev()
{
    debugStep("getLocationInfo");
    var pathSplit = location.href.split("/");
    if (pathSplit[2].toLowerCase() == 'ir.euroinvestor.com' && pathSplit[3].toLowerCase() == 'solutions') {
        return false;
    } else {
        return true;
    }
}
function getCustomerKeyRequired()
{
    debugStep("getCustomerKeyRequired");
    var solutionName;
    var pathSplit = location.href.split("/");
    if (pathSplit[3].toLowerCase() == 'solutions' || pathSplit[3].toLowerCase() == 'irmotor') {
        solutionName = pathSplit[4];
    } else {
        solutionName = pathSplit[3];
    }

    /* Presentation HAX JRJR TODO Remove this */
    if (solutionName == 'tools')
    {
        solutionName = 'Template';
    }
    

    return solutionName;
}
function getHost()
{
    debugStep("getHost");
    return location.host;
}
function setClickHandler(module, numberOfListings, numberOfComparisonsInstruments, listingObject)
{
    debugStep("setClickHandler");
    switch (module) {
        case 'IRQuote':
            prepareChangeListing(numberOfListings, listingObject);
            activateClickHandler(module);
            break;
        case 'IRChartHTML':
            prepareChangeListing(numberOfListings, listingObject);
            prepareChangeChartMode(numberOfComparisonsInstruments);
            activateClickHandler(module);
            break;
        case 'IRChartHTML2':
            prepareChangeListing(numberOfListings, listingObject);
            prepareChangeChartMode(numberOfComparisonsInstruments);
            activateClickHandler(module);
            break;
        default:
            debugError("no match for the module '" + module + "' in setClickHandler()");
            break;
    }
}
function prepareChangeListing(numberOfListings, listingObject)
{
    debugStep("prepareChangeListing");
    var element = $('.IRChangeListing');
    var subElements = "";
    var active = true;
    for (var i = 0; i < numberOfListings; i++) {
        subElements += returnSingleChangeListingSubElement(active, i, listingObject[i]);
        active = false;
    }
    element.html("<select class=\"form-control\">" + subElements + "</select>");

}
function returnSingleChangeListingSubElement(active, index, listingsObject)
{
    var addClass = '';
    if (active) {
        addClass = 'selected="selected"';
    }
    return "<option value=\"" + index + "\"" + addClass + ">" + listingsObject.symbol + " - " + listingsObject.exchangeName + "</option>";
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

        case 'IRChartHTML':
            if (typeof ($('.IRChangeListing')) != "undefined") {
                $('.IRChangeListing select').bind('change', function ()
                {
                    globalActiveListingIndex = $(this).val();
                    updateQuoteTable();
                    redrawHTMLChartWithNewListing();
                    //setChartExtremes('historical', globalActivePeriod); //JRJR
                    clickedChartPeriod(globalActivePeriod);
                    $('.ToolMenu.IRChartHTMLDisplayMode select').val(0);
                });
            }
            if (typeof ($('.chartChangePeriod')) != "undefined") {
                $('.chartChangePeriod div').click(function ()
                {
                    clickedChartPeriod($(this).attr('id'));
                });
            }
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
        case 'IRChartHTML2':
            
            if (typeof ($('.chartChangePeriod')) != "undefined") {
                $('.chartChangePeriod div').click(function ()
                {
                    clickedChartPeriod2($(this).attr('id'));
                });
            }
            break;
        default:
            debugError("no match for the module '" + module + "' in activateClickHandler()");
            break;
    }
}
//
// Auto switch between dev, stage and prod environment.
//
function getServiceEngingeURL()
{
    var url = 'http://' + getHost() + '/ServiceEngine/api/json/reply/';
    return url;
}
function getChartDOM()
{
    debugStep("getChartDOM");
    return $(globalChartContainer).highcharts();
}
function getActivePeriod()
{



    //for (var i = 0; i < $('.chartChangePeriod').length; i++)
    //{
    //    debugDataContent($('.chartChangePeriod')[i]);

    //    //debugDataContent($('.chartChangePeriod div')[i]);


    //}

}

//
// Check activeModules array and enable data requests and module builders.
//
function checkactiveModules(activeModulesArr)
{
    debugStep("checkactiveModules");

    for (var i = 0; i < activeModulesArr.length; i++) {
        switch (activeModulesArr[i]) {
            case 'Test':
                break;
            case "IRQuote":
                IRQuoteModule = true;
                useStockData = true;
                break;
            case "IRTrades":
                IRTradesModule = true;
                useTradeData = true;
                break;
            case "IRBenchmark":
                IRBenchmarkModule = true;
                useClosePriceBundleListingData = true;
                useClosePriceBundleOtherData = true;
                break;
            case 'IRBenchmarkTest':
                IRBenchmarkTestModule = true;
                useClosePriceBundleListingData = true;
                useClosePriceBundleOtherData = true;
                break;
            case 'IRChartHTML':
                IRChartHTMLModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                useClosePriceBundleOtherData = true;
                useIntradayBundleData = true;
                break;
            case 'IRChartHTML2':
                IRChartHTMLModule2 = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                break;
            case 'IRChartHTMLMini':
                IRChartHTMLMiniModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                useIntradayBundleData = true;
                break;
            case 'IRCalc':
                IRCalcModule = true;
                useStockData = true;
                useClosePriceBundleListingData = true;
                break;
            case 'IRCalc2':
                IRCalc2Module = true;
                useClosePriceBundleListingData = true;
                break;
            case 'IRLookup':
                IRLookupModule = true;
                useClosePriceBundleListingData = true;
                break;
            case 'IRNews':
                IRNewsModule = true;
                useNewsData = true;
                break;
            default:
                debugError("no match for the module '" + activeModulesArr[i] + "' in activeModules");
                break;
        }
    }
}
//
// Check activeModules array and enable data requests and module builders.
//
function checkactiveFeatures(activeFeaturesArr)
{
    debugStep("checkactiveFeatures");

    for (var i = 0; i < activeFeaturesArr.length; i++) {

        switch (activeFeaturesArr[i]) {
            case '':
                break;
            default:
                debugError("no match for the module '" + activeFeaturesArr[i] + "' in activeFeatures");
                break;
        }

    }
}
//
//  Chart Features
//
function chartSetNewExtremes()
{
    var periodFrom = moment.utc(getChartDOM().xAxis[0].getExtremes().min);
    var periodTo = moment.utc(getChartDOM().xAxis[0].getExtremes().max);

    var periodFromMonth = periodFrom.month() + 1;
    var periodToMonth = periodTo.month() + 1;

    $('.chartPeriodFrom').html(periodFrom.year() + '-' + periodFromMonth + '-' + periodFrom.date());
    $('.chartPeriodTo').html(periodTo.year() + '-' + periodToMonth + '-' + periodTo.date());
}
var chartToolTypes = new function ()
{
    this.typeChart = "chart";
    this.typeChartMini = "chartMini";
    this.typeChartLookup = "chartLookupCalc";
    this.typeChartCalc = "chartLookupCalc";
}
//
//  Languages
//
var translations = new function ()
{
    // Will be populated
}
var LCID = {
    csCZ: -1,
    daDK: 1030,
    deDE: 1031,
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
//
//  ClientStyle
//
var clientStyle = new function ()
{
    this.chart_ColourMain = '#0284AA';
    this.chart_ColourBackground = '#F9F9F9';
    this.chart_ColourBorder = '#E9E9E9';
    this.amountOfDecimals = 2;
    this.formatDate = 'YYYY-MM-DD';
    this.formatTime = 'HH:mm';
    this.formatDateTime = this.formatDate + ' ' + this.formatTime;
}

//
// Debug functions
//
if (debug) {
    var initTime = Date.now();
}
function debugStep(msg)
{
    if (debug) {
        var ms = ' - ' + Math.abs(new Date() - initTime) + 'ms';
        console.log('%c' + msg + ms, 'color: #AAA');
        initTime = Date.now();
    }
    
}
function debugData(msg)
{
    if (debug) {
        console.log('%c' + msg, 'color: #FF7C00');
    }
}
function debugDataContent(msg)
{
    if (debug) {
        console.log(msg);
    }
}
function debugError(msg)
{
    if (debug) {
        console.log('%c' + msg + "", 'color: #FF0000');
    }
}
