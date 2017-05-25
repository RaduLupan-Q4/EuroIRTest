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
if (useIRChartDividendData) {
    loadIRChartDividendData();
}

//
//  Load data functions
//
function loadTranslationsData() {
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
        success: function (responseData, textStatus, errorThrown) {
        },
        error: function (responseData, textStatus, errorThrown) {
        }
    });
}
function loadStockData() {
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
        success: function (responseData, textStatus, errorThrown) {
        },
        error: function (responseData, textStatus, errorThrown) {
        }
    });
}
function loadIRChartDividendData() {
    debugStep("loadIRChartDividendData");

    var request = {
        apiVersion: clientApiVersion,
        lcid: clientLCID,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        numberOfYears: clientStyle.amountOfHistoricalYears,
        instrumentTypes: ["Listing"]
    };
    requestDividendBundleData = $.ajax({
        url: getServiceEngingeURL() + 'RequestDividendBundle',
        type: 'GET',
        data: request,
        traditional: true,
        success: function (responseData, textStatus, errorThrown) {
        },
        error: function (responseData, textStatus, errorThrown) {
        }
    });
}
function loadClosePriceBundleListingData() {
    debugStep("loadClosePriceBundleListingData");

    if (IRPerformanceModule) {
        clientStyle.amountOfHistoricalYears = 1;
    }

    var request = {
        apiVersion: clientApiVersion,
        lcid: clientLCID,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        numberOfYears: clientStyle.amountOfHistoricalYears,
        instrumentTypes: ["Listing"]
    };
    requestClosePriceListingData = $.ajax({
        url: getServiceEngingeURL() + 'RequestClosePriceBundle_OHLC',
        type: 'GET',
        data: request,
        traditional: true,
        success: function (responseData, textStatus, errorThrown) {
        },
        error: function (responseData, textStatus, errorThrown) {
        }
    });
}
function loadIntradayBundleListingData() {
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
        success: function (responseData, textStatus, errorThrown) {
        },
        error: function (responseData, textStatus, errorThrown) {
        }
    });
}
function loadClosePriceBundleOtherData() {
    debugStep("loadClosePriceBundleOtherData");

    if (IRPerformanceModule) {
        clientStyle.amountOfHistoricalYears = 1;
    }

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
        traditional: true,
        success: function (responseData, textStatus, errorThrown) {
        },
        error: function (responseData, textStatus, errorThrown) {
        }
    });
}
//
//  TA
//
function loadAnalysisWilliamsPercentR(numberOfYears, period) {
    debugStep("loadAnalysisWilliamsPercentR(numberOfYears[" + numberOfYears + "]period[" + period + "])");
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
        traditional: true,
        success: function (responseData, textStatus, errorThrown) {
        },
        error: function (responseData, textStatus, errorThrown) {
        }
    });
}
function loadAnalysisRelativeStrengthIndex(numberOfYears, period) {
    debugStep("loadAnalysisRelativeStrengthIndex(numberOfYears[" + numberOfYears + "]period[" + period + "])");
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
        traditional: true,
        success: function (responseData, textStatus, errorThrown) {
        },
        error: function (responseData, textStatus, errorThrown) {
        }
    });
}
function loadAnalysisRateOfChange(numberOfYears, period) {
    debugStep("loadAnalysisRateOfChange(numberOfYears[" + numberOfYears + "]period[" + period + "])");
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
        traditional: true,
        success: function (responseData, textStatus, errorThrown) {
        },
        error: function (responseData, textStatus, errorThrown) {
        }
    });
}
function loadAnalysisMoneyFlowIndex(numberOfYears, period) {
    debugStep("loadAnalysisMoneyFlowIndex(numberOfYears[" + numberOfYears + "]period[" + period + "])");
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
        traditional: true,
        success: function (responseData, textStatus, errorThrown) {
        },
        error: function (responseData, textStatus, errorThrown) {
        }
    });
}
function loadAnalysisMomentum(numberOfYears, period) {
    debugStep("loadAnalysisMomentum(numberOfYears[" + numberOfYears + "]period[" + period + "])");
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
        traditional: true,
        success: function (responseData, textStatus, errorThrown) {
        },
        error: function (responseData, textStatus, errorThrown) {
        }
    });
}
function loadAnalysisDirectionalMovementIndex(numberOfYears, period) {
    debugStep("loadAnalysisDirectionalMovementIndex(numberOfYears[" + numberOfYears + "]period[" + period + "])");
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
        traditional: true,
        success: function (responseData, textStatus, errorThrown) {
        },
        error: function (responseData, textStatus, errorThrown) {
        }
    });
}
function loadAnalysisCommodityChannelIndex(numberOfYears, period) {
    debugStep("loadAnalysisCommodityChannelIndex(numberOfYears[" + numberOfYears + "]period[" + period + "])");
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
        traditional: true,
        success: function (responseData, textStatus, errorThrown) {
        },
        error: function (responseData, textStatus, errorThrown) {
        }
    });
}
function loadAnalysisSimpleMovingAverage(numberOfYears, period) {
    debugStep("loadAnalysisSimpleMovingAverage(numberOfYears[" + numberOfYears + "]period[" + period + "])");
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
        traditional: true,
        success: function (responseData, textStatus, errorThrown) {
        },
        error: function (responseData, textStatus, errorThrown) {
        }
    });
}
function loadAnalysisExponentialMovingAverage(numberOfYears, period) {
    debugStep("loadAnalysisExponentialMovingAverage(numberOfYears[" + numberOfYears + "]period[" + period + "])");
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
        traditional: true,
        success: function (responseData, textStatus, errorThrown) {
        },
        error: function (responseData, textStatus, errorThrown) {
        }
    });
}
//
//  TSR
//
function loadDividendBundle(numberOfYears, period) {
    debugStep("loadDividendBundle(numberOfYears[" + numberOfYears + "]period[" + period + "])");
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
        traditional: true,
        success: function (responseData, textStatus, errorThrown) {
        },
        error: function (responseData, textStatus, errorThrown) {
        }
    });
}
//
//  Data preloads.
//
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

    debugStep("preloadIRChartDataIntradayListing | total iterations [" + totalIterations + "]");
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

    debugStep("preloadIRChartDataClosePriceListing | total iterations [" + totalIterations + "]");
    debugIterations_preloadIRChartDataClosePriceListing = totalIterations;

    drawIRChartHTML();
    //setIRChartHTMLExtremes(chartDisplayModes.historical, 360);

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
        comparisonList.push([i, otherClosePriceData[i].instrumentType, otherClosePriceData[i].name, otherClosePriceData[i].symbol]);
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

    debugStep("preloadIRChartDataClosePriceOther | total iterations [" + totalIterations + "]");
    debugIterations_preloadIRChartDataClosePriceOther = totalIterations;
}
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
if(closePriceData[i].data.length > 0){
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
    }
    return datas;
}
function preloadIRCalcDataClosePriceListing(data) {
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

    debugStep("preloadIRCalcChartDataClosePriceListing | total iterations [" + totalIterations + "]");

    buildCalcTool(data, menuTemplate_Calc);
}
function preloadIRMiniquoteChartClosePriceListing(data) {
    debugStep("preloadIRMiniquoteChartClosePriceListing");
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

    debugStep("preloadIRMiniquoteChartClosePriceListing | total iterations [" + totalIterations + "]");
}
function preloadIRMiniquoteChartIntradayListing(data) {

    debugStep("preloadIRMiniquoteChartIntradayListing");
    var listingStockData = data.data.stock[0].data;
    var listingIntradayData = data.data.intradayListing[0].data;
    var listingAmount = listingStockData.length;
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

    debugStep("preloadIRMiniquoteChartIntradayListing | total iterations [" + totalIterations + "]");
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
function getClosestDateFromDateArray(unixDate, dateArr) {
    var index = dateArr.bestMatch(unixDate);
    return index;
}
var showOnlyOnce = true;

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
