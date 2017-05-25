//
// Init
//
function initHandlebars()
{
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
    if (IRTradesModule) {
        if (typeof ($('.IRTradesModule').html()) != "undefined" && typeof ($('#IRTradesTemplate').html()) != "undefined") {
            var source = $('#IRTradesTemplate').html();
            menuTemplate_TradesTable = Handlebars.compile(source);
        }
    }
    if (IRBenchmarkModule) {

        if (typeof ($('.IRBenchmarkModule').html()) != "undefined" && typeof ($('#IRBenchmarkTableTemplate').html()) != "undefined") {
            var menuSource_BenchmarkTable = $('#IRBenchmarkTableTemplate').html();
            menuTemplate_BenchmarkTable = Handlebars.compile(menuSource_BenchmarkTable);
        }
    }
    Handlebars.registerHelper('for', function (from, to, incr, block)
    {
        var accum = '';
        for (var i = from; i < to; i += incr) {
            var twoCharRep = (i <= 9) ? "0" + i : "" + i;

            accum += block.fn(i, twoCharRep);
        }
        return accum;
    });

    Handlebars.registerHelper('iteratePreviousNYears', function (yearsBack, block)
    {
        var thisYear = new Date().getFullYear(),
            accum = '';

        for (var i = thisYear - yearsBack; i <= thisYear; i++) {
            accum += block.fn(i);
        }
        return accum;
    });

    Handlebars.registerHelper('decimal', function (number, numberOfDecimals)
    {
        return number.toFixed(numberOfDecimals);
    });
}

//
// Load data
//

updateLCID();
loadTranslationsData();

if (useStockData) {
    loadStockDataBundle();
}
if (useTradeData) {
    loadTradeData();
}
if (useClosePriceBundleListingData) {
    loadClosePriceBundleListingData();
}
if (useClosePriceBundleOtherData) {
    loadClosePriceBundleOtherData();
}
if (useIntradayData) {
    loadIntradayData();
}
if (useIntradayBundleData) {
    loadIntradayBundleData();
}
if (useNewsData) {
    loadNewsData();
}

//
// Retrieve data functions
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

function loadNewsData()
{
    debugStep("loadNewsData");
    var postRequest = {
        apiversion: clientApiVersion,
        solutionID: 10020,
        //customerKey: clientCustomerKeyRequired,
        customerKey: 'LeniGasAndOil',
        LCID: 1033,
        MaxRows: 20,
        pageno: 0,
        instrumentid: 1000008 // TODO get this automaticcaly
    };
    requestNewsData = $.ajax({
        url: getServiceEngingeURL() + 'RequestNews',
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
function loadStockDataBundle()
{
    debugStep("loadStockDataBundle");
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
function loadTradeData()
{
    debugStep("loadTradeData");
    var postRequest = {
        apiversion: clientApiVersion,
        solutionID: clientSolutionID,
        instrumentid: 100021, // TODO, get this from provider!
        lcid: clientLCID,
        amountOfTrades: clientAmountOfTrades
    };
    requestTradeData = $.ajax({
        url: getServiceEngingeURL() + 'RequestTradeData',
        type: 'POST',
        data: postRequest,
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
    var postClosePriceDataRequest = {
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
        data: postClosePriceDataRequest,
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
function loadIntradayData()
{
    debugStep("loadIntradayData");
    var postIntradayDataRequest = {
        apiVersion: clientApiVersion,
        lcid: clientLCID,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        numberOfDays: 1,
        instrumentID: 103136
    };
    requestIntradayData = $.ajax({
        url: getServiceEngingeURL() + 'RequestIntradayData',
        type: 'GET',
        data: postIntradayDataRequest,
        traditional: true,
        success: function (responseData, textStatus, errorThrown)
        {
        },
        error: function (responseData, textStatus, errorThrown)
        {
        }
    });
}
function loadIntradayBundleData()
{
    debugStep("loadIntradayBundleData");
    var postIntradayBundleDataRequest = {
        apiVersion: clientApiVersion,
        lcid: clientLCID,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        numberOfDays: 5,
        instrumentTypes: ["Listing"]
    };
    requestIntradayBundleData = $.ajax({
        url: getServiceEngingeURL() + 'RequestIntradayDataBundle',
        type: 'GET',
        data: postIntradayBundleDataRequest,
        traditional: true,
        success: function (responseData, textStatus, errorThrown)
        {
        },
        error: function (responseData, textStatus, errorThrown)
        {
        }
    });
}

//
// DOM operations
//
function buildTradeTable(data, template)
{
    debugStep("buildTradeTable");
    $(".IRTradesModule").html(template(data));
}
function buildBenchmarkTable(dataObject, menuTemplate_BenchmarkTable)
{
    debugStep("buildBenchmarkTable");
    $(".IRBenchmarkModule").html(menuTemplate_BenchmarkTable(dataObject));
    
}
function preLoadData(type, data)
{
    //
    //  Input
    //  type = [listing/index,peer/intradayBundle]
    //  data = data object from service engine
    //
    debugStep("preLoadData");
    //
    //  If data is unset, populate.
    //
    switch (type) {
        case "listing":
            if (typeof (listingData) == "undefined") {
                globalNumberOfListings = data.data.closePriceListing.length;
                preLoadDataHTMLChartBundle(type, data);
            }
            break;
        case "index,peer":
            if (typeof (compareData) == "undefined") {
                globalNumberOfComparisonsInstruments = data.data.closePriceOther[0].length;
                preLoadDataHTMLChartBundle(type, data);
            }
            break;
        case "intraday":
            preLoadDataHTMLChartBundle(type, data);
            break;
        case "intradayBundle":
            preLoadDataHTMLChartBundle(type, data);
            break;
    }
}

function preLoadDataHTMLChartBundle(type, data)
{
    //
    //  Subject to change! TODO
    //

    debugStep("preLoadDataHTMLChartBundle");
    //
    //  Only process data once
    //
    switch (type) {

        case "intradayBundle":

            debugStep('case "intradayBundle"');

            //
            //  Init
            //
            var intradayArr = data.data.intradayListing[0].data;
            var stockDataArr = data.data.stock[0].data;

            if (chartDataActionPopulateIntradayData) {

                for (var i = 0; i < intradayArr.length; i++) {
                    chartIntradayBasicData.push([]);
                    chartIntradayData.push([]);
                }
            }

            //
            //  Populate each listing
            //
            $.each(intradayArr, function (listingIndex, item)
            {
                globalListingNames[listingIndex] = item.name + " (" + item.symbol + ")";

                var intradayBasicArrayForChart = [];
                var intradayArrayForChart = [];
                $.each(item.data, function (listingDataIndex, item)
                {

                    var currentMainListingOpenPrice = item.open;
                    var currentMainListingHigh = item.high;
                    var currentMainListingLow = item.low;
                    var currentMainListingClosePrice = item.closePrice;

                    if (currentMainListingOpenPrice == 0) {
                        currentMainListingOpenPrice = currentMainListingClosePrice;
                    }
                    if (currentMainListingHigh == 0) {
                        currentMainListingHigh = currentMainListingClosePrice;
                    }
                    if (currentMainListingLow == 0) {
                        currentMainListingLow = currentMainListingClosePrice;
                    }
                    var currentUnixDateForChart = new moment(item.timestamp).valueOf();

                    //var currentMainListingClosePrice = item.closePrice;
                    //var currentUnixDateForChart = new Date(item.timestamp).getTime();
                    if (chartDataActionPopulateIntradayData) {

                        intradayBasicArrayForChart.push([currentUnixDateForChart, currentMainListingClosePrice]);
                        intradayArrayForChart.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice]);
                    }

                });

                if (chartDataActionPopulateIntradayData) {

                    if (stockDataArr.length == intradayArr.length) {
                        try {

                            //
                            //  Last Price and date
                            //
                            var lastPriceDateInit = new Date(stockDataArr[listingIndex].timestamp);
                            var lastPriceDateInitMoment = new moment(lastPriceDateInit);

                            var currentUnixDateForChart = new moment(item.timestamp).valueOf();


                            var year = lastPriceDateInitMoment.format('YYYY');
                            var month = lastPriceDateInitMoment.format('MM');
                            var day = lastPriceDateInitMoment.format('DD');
                            var hour = lastPriceDateInitMoment.format('HH');
                            var minute = lastPriceDateInitMoment.format('mm');

                            //debugData("y[" + year + "] m[" + month + "] d[" + day + "] h[" + hour + "] m[" + minute + "]");
                            //debugData("y[" + year + "] m[" + month + "] d[" + day + "] h[" + hour + "] m[" + minute + "]");

                            var lastPriceDate = new Date(year, month - 1, day, hour, minute, 0, 0);
                            var lastPrice = stockDataArr[listingIndex].last;
                            //

                            if (intradayArrayForChart[intradayArrayForChart.length - 1][0] <= lastPriceDate.getTime()) {
                                //intradayArrayForChart[intradayArrayForChart.length - 1][1] = lastPrice;
                                //intradayArrayForChart.push([lastPriceDate.getTime(), lastPrice]);
                            }
                            else {
                                //intradayBasicArrayForChart.push([currentUnixDateForChart, lastPrice]);
                                //intradayArrayForChart.push([currentUnixDateForChart, lastPrice, lastPrice, lastPrice, lastPrice]);
                            }

                        }
                        catch (err) {
                            debugDataContent(err);
                        }
                    }
                    chartIntradayBasicData[listingIndex] = intradayBasicArrayForChart;
                    chartIntradayData[listingIndex] = intradayArrayForChart;
                }

            });

            if (chartIntradayData.length == intradayArr.length) {
                chartDataActionPopulateIntradayData = false;
            }

            break;

        case "listing_old":
            debugStep('case "listing"');
            //
            //  Init
            //
            //var listingArr = data.data.closePriceListing.data; // Legacy
            var listingArr = data.data.closePriceListing[0].data;
            var stockDataArr = data.data.stock[0].data;

            if (chartDataActionPopulateListingData) {

                for (var i = 0; i < listingArr.length; i++) {
                    chartListingData.push([]);
                    globalListingNames.push([]);
                }
            }
            //
            //  Populate each listing
            //

            $.each(listingArr, function (listingIndex, item)
            {
                globalListingNames[listingIndex] = item.name + " (" + item.symbol + ")";

                var listingArrayForChart = [];
                $.each(item.data, function (listingDataIndex, item)
                {
                    //debugData(new Date(item.date).getTime() + " (JS epoc)");
                    //debugData(new moment(item.date).format("X") + " (moment format('X') unix)");
                    //debugData(new moment(item.date).unix() + " (moment .unix() unix)");
                    //debugData(new moment(item.date).valueOf() + " (moment epoc .valueOf())");

                    var currentMainListingClosePrice = item.closePrice;

                    //// JS
                    //var currentUnixDateForChart = new Date(item.date).getTime();

                    // Moment
                    var currentUnixDateForChart = new moment(item.date).valueOf();

                    if (chartDataActionPopulateListingData) {
                        listingArrayForChart.push([currentUnixDateForChart, currentMainListingClosePrice]);
                    }
                });

                if (chartDataActionPopulateListingData) {

                    if (stockDataArr.length == listingArr.length) {
                        try {

                            //
                            //  Last Price and date
                            //
                            var lastPriceDateInit = new Date(stockDataArr[listingIndex].timestamp);
                            var lastPriceDateInitMoment = new moment.utc(lastPriceDateInit);


                            var year = lastPriceDateInitMoment.format('YYYY');
                            var month = lastPriceDateInitMoment.format('MM');
                            var day = lastPriceDateInitMoment.format('DD');
                            var hour = lastPriceDateInitMoment.format('HH');
                            var minute = lastPriceDateInitMoment.format('mm');

                            //debugData("y[" + year + "] m[" + month + "] d[" + day + "] h[" + hour + "] m[" + minute + "]");

                            var lastPriceDate = new Date(year, month - 1, day, hour, minute, 0, 0);

                            var lastPrice = stockDataArr[listingIndex].last;
                            //


                            if (listingArrayForChart[listingArrayForChart.length - 1][0] == lastPriceDate.getTime()) {
                                listingArrayForChart[listingArrayForChart.length - 1][1] = lastPrice;
                            } else {
                                listingArrayForChart.push([lastPriceDate.getTime(), lastPrice]);
                            }


                        }
                        catch (err) {
                            debugDataContent(err);
                        }
                    }
                }

                chartListingData[listingIndex] = listingArrayForChart;
            });

            if (chartDataActionPopulateListingData) {
                redrawHTMLChartWithNewListing();
                setChartExtremes('historical', 360);
            }

            if (chartListingData.length == listingArr.length) {
                chartDataActionPopulateListingData = false;
            }
            break;

        case "listing":
            debugStep('case "listing"');
            //
            //  Init
            //
            //var listingArr = data.data.closePriceListing.data; // Legacy
            var listingArr = data.data.closePriceListing[0].data;
            var stockDataArr = data.data.stock[0].data;

            if (chartDataActionPopulateListingData) {

                for (var i = 0; i < listingArr.length; i++) {
                    chartListingBasicData.push([]);
                    chartListingData.push([]);
                    chartListingVolumeData.push([]);
                    globalListingNames.push([]);
                }
            }
            //
            //  Populate each listing
            //

            $.each(listingArr, function (listingIndex, item)
            {
                globalListingNames[listingIndex] = item.name + " (" + item.symbol + ")";
                globalCurrencies[listingIndex] = item.currency;

                var listingBasicArrayForChart = [];
                var listingArrayForChart = [];
                var listingVolumeArrayForChart = [];
                $.each(item.data, function (listingDataIndex, item)
                {
                    var currentMainListingOpenPrice = item.openPrice;
                    var currentMainListingHigh = item.high;
                    var currentMainListingLow = item.low;
                    var currentMainListingClosePrice = item.closePrice;
                    var currentMainListingVolume = item.volume;

                    if (currentMainListingOpenPrice == 0) {
                        currentMainListingOpenPrice = currentMainListingClosePrice;
                    }
                    if (currentMainListingHigh == 0) {
                        currentMainListingHigh = currentMainListingClosePrice;
                    }
                    if (currentMainListingLow == 0) {
                        currentMainListingLow = currentMainListingClosePrice;
                    }

                    if (currentMainListingVolume == 0) {
                        currentMainListingVolume = 0;
                    }

                    // Moment 
                    var currentUnixDateForChart = new moment(item.date).valueOf(); // JS: // var currentUnixDateForChart = new Date(item.date).getTime();

                    if (chartDataActionPopulateListingData) {
                        listingBasicArrayForChart.push([currentUnixDateForChart, currentMainListingClosePrice]);
                        listingArrayForChart.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice]);
                        listingVolumeArrayForChart.push([currentUnixDateForChart, currentMainListingVolume]); // Volume
                    }
                });

                if (chartDataActionPopulateListingData) {

                    if (stockDataArr.length == listingArr.length) {
                        try {

                            //
                            //  Last Price and date
                            //
                            var lastPriceDateInit = new Date(stockDataArr[listingIndex].timestamp);
                            var lastPriceDateInitMoment = new moment(lastPriceDateInit);

                            var year = lastPriceDateInitMoment.format('YYYY');
                            var month = lastPriceDateInitMoment.format('MM');
                            var day = lastPriceDateInitMoment.format('DD');
                            var hour = lastPriceDateInitMoment.format('HH');
                            var minute = lastPriceDateInitMoment.format('mm');

                            var lastPriceDate = new Date(year, month - 1, day, hour, minute, 0, 0);
                            var lastPrice = stockDataArr[listingIndex].last;
                            var lastVolume = stockDataArr[listingIndex].volume;
                            


                            // Todo
                            // Do not add point lte[IE 8]
                            //if (listingArrayForChart[listingArrayForChart.length - 1][0] == lastPriceDate.getTime()) {
                            //    listingArrayForChart[listingArrayForChart.length - 1][1] = lastPrice;
                            //    listingBasicArrayForChart[listingBasicArrayForChart.length - 1][1] = lastPrice;
                            //    listingVolumeArrayForChart[listingVolumeArrayForChart.length - 1][1] = lastVolume; // Volume
                            //} else {
                            //    listingArrayForChart.push([lastPriceDate.getTime(), lastPrice, lastPrice, lastPrice, lastPrice]);
                            //    listingBasicArrayForChart.push([lastPriceDate.getTime(), lastPrice]);
                            //    listingVolumeArrayForChart.push([lastPriceDate.getTime(), lastVolume]); // Volume
                            //}

                        }
                        catch (err) {
                            debugDataContent(err);
                        }
                    }
                }
                chartListingBasicData[listingIndex] = listingBasicArrayForChart;
                chartListingData[listingIndex] = listingArrayForChart;
                chartListingVolumeData[listingIndex] = listingVolumeArrayForChart;
            });

            if (chartDataActionPopulateListingData) {
                redrawHTMLChartWithNewListing();
                setChartExtremes('historical', 360);
            }

            if (chartListingData.length == listingArr.length) {
                chartDataActionPopulateListingData = false;
            }
            break;

        case "index,peer":
            debugStep('case "index,peer"');
            //
            //  Init
            //
            var listingArr = data.data.closePriceListing[0].data[globalActiveListingIndex];

            var peerArr = data.data.closePriceOther[0].data;

            var peerArrayForChart = [];
            var peerStartAtPositionHasHit = [];
            var peerLastKnownClosePrice = [];

            for (var i = 0; i < peerArr.length; i++) {
                peerStartAtPositionHasHit.push(false);
                peerLastKnownClosePrice.push([]);
                peerArrayForChart.push([]);
                chartCompareNames.push('');
            }

            var addedPeerNameIndex = 0;
            $.each(listingArr.data, function (listingDataIndex, item)
            {

                var currentMainListingClosePrice = item.closePrice;
                var currentMainListingDate = item.date;
                var currentUnixDateForChart = new Date(item.date).getTime();
                // Each peer

                $.each(peerArr, function (peerIndex, item)
                {

                    if (addedPeerNameIndex < peerArr.length) {
                        chartCompareNames[peerIndex] = item.name + " (" + item.symbol + ")";
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

            chartCompareData.push(peerArrayForChart);

            if (chartCompareData[0].length == peerArr.length) {
                chartDataActionPopulateCompareData = false;
            }
            break;
    }

}

//
// Other
//
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