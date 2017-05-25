//
// Load data
//
// loadTranslationsData();
// loadStockData();
//
//  Load data functions
//
var ResponseData = {
    requestAnalysisBollingerBands: null,
    requestAnalysisCommodityChannelIndexData: null,
    requestAnalysisDirectionalMovementIndexData: null,
    requestAnalysisExponentialMovingAverageData: null,
    requestAnalysisMomentumData: null,
    requestAnalysisMoneyFlowIndexData: null,
    requestAnalysisMovingAverageConvergenceDivergence: null,
    requestAnalysisMovingAverageEnvelopeExponential: null,
    requestAnalysisMovingAverageEnvelopeSimple: null,
    requestAnalysisParabolicSar: null,
    requestAnalysisRateOfChangeData: null,
    requestAnalysisRelativeStrengthIndexData: null,
    requestAnalysisSimpleMovingAverageData: null,
    requestAnalysisWilliamsPercentRData: null,
    requestClosePriceListingData: null,
    requestClosePriceOtherData: null,
    requestCurrencyData: null,
    requestDividendBundle: null,
    requestFeatureCurrencyConversionData: null,
    requestFeatureStockOtherData: null,
    requestIntradayListingData: null,
    requestNewsDataSearch: null,
    requestOrdersData: null,
    requestPressReleaseData: null,
    requestPressReleaseIRChartHeadlineData: null,
    requestStockData: null,
    requestTradesData: null,
    requestTranslationsData: null
};
var RequestData = {
    translationsData: function () {
        debugDataLoad("loadTranslationsData");
        var postRequest = {
            lcid: clientLCID,
            apiversion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired
        };
        ResponseData.requestTranslationsData = this.getAjaxRequest(postRequest, 'RequestTranslation');
    },

    stockData: function () {
        debugDataLoad("loadStockData");
        var postRequest = {
            apiversion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            instrumentTypes: ["Listing"]
        };
        var requestName = "RequestStockDataBundle";
        if (clientStyle.useRealtimeData) requestName += "RT";
        if (clientStyle.useDataSourceRKD) requestName += "RKD";
        ResponseData.requestStockData = this.getAjaxRequest(postRequest, requestName);
    },

    featureStockOtherData: function () {
        debugDataLoad("loadFeatureStockOtherData");
        var postRequest = {
            apiversion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            instrumentTypes: ["Other"]
        };
        ResponseData.requestFeatureStockOtherData = this.getAjaxRequest(postRequest, 'RequestStockDataBundle');
    },

    featureCurrencyConversion: function (fromCurrency, toCurrency, numberOfYears) {
        debugDataLoad("loadFeatureCurrencyConversion");
        var postRequest = {
            apiversion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            FromCurrency: fromCurrency,
            ToCurrency: toCurrency,
            NumberOfYears: numberOfYears
        };
        ResponseData.requestFeatureCurrencyConversionData = this.getAjaxRequest(postRequest, 'RequestCurrency');
    },
    closePriceBundleListingData: function () {
        debugDataLoad("loadClosePriceBundleListingData");
        var postRequest = {
            apiVersion: clientApiVersion,
            lcid: clientLCID,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            numberOfYears: clientStyle.amountOfHistoricalYears,
            instrumentTypes: ["Listing"]
        };
        ResponseData.requestClosePriceListingData = this.getAjaxRequest(postRequest, 'RequestClosePriceBundle_OHLC');
    },
    intradayBundleListingData: function () {
        debugDataLoad("loadIntradayBundleListingData");
        var postRequest = {
            apiVersion: clientApiVersion,
            lcid: clientLCID,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            numberOfDays: 5,
            instrumentTypes: ["Listing"]
        };
        ResponseData.requestIntradayListingData = this.getAjaxRequest(postRequest, 'RequestIntradayDataBundle');
    },
    closePriceBundleOtherData: function () {
        debugDataLoad("loadClosePriceBundleOtherData");
        var postRequest = {
            apiVersion: clientApiVersion,
            lcid: clientLCID,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            numberOfYears: clientStyle.amountOfHistoricalYears,
            instrumentTypes: ["Peer", "Index"]
        };
        ResponseData.requestClosePriceOtherData = this.getAjaxRequest(postRequest, 'RequestClosePriceBundle_C');
    },
    ordersData: function () {
        debugDataLoad("loadOrdersData");
        var postRequest = {
            apiversion: clientApiVersion,
            solutionID: clientSolutionID,
            instrumentid: globalRawStockData[globalActiveListingIndex].instrumentID,
            customerKey: clientCustomerKeyRequired
        };
        ResponseData.requestOrdersData = this.getAjaxRequest(postRequest, 'RequestOrderDepthData');
    },
    tradesData: function () {
        debugDataLoad("loadTradesData");
        var postRequest = {
            apiversion: clientApiVersion,
            solutionID: clientSolutionID,
            instrumentid: globalRawStockData[globalActiveListingIndex].instrumentID,
            customerKey: clientCustomerKeyRequired,
            amountOfTrades: clientStyle.amountOfTrades
        };
        ResponseData.requestTradesData = this.getAjaxRequest(postRequest, 'RequestTradeData');
    },
    newsDataInitial: function () {
        debugDataLoad("loadNewsDataInitial");

        if (clientStyle.news_lockListing > -1) {
            globalActiveListingIndex = clientStyle.news_lockListing;
        }
        if (clientStyle.news_lockLCID > -1) {
            clientLCID = clientStyle.news_lockLCID;
        }

        var postRequest = {
            lcid: clientLCID,
            pageNo: 0,
            maxRows: clientStyle.amountOfNewsToLoad,
            headlinesOnly: true,
            instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired
        };
        ResponseData.requestNewsDataInitial = this.getAjaxRequest(postRequest, 'RequestNews');
    },
    newsDataSearch: function (searchText) {
        debugDataLoad("loadNewsDataSearch");
        var postRequest = {
            lcid: clientLCID,
            pageNo: 0,
            maxRows: 20000,
            keyword: searchText,
            instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired
        };
        ResponseData.requestNewsDataSearch = this.getAjaxRequest(postRequest, 'RequestSearchNews');
    },
    newsArticleData: function () {
        debugDataLoad("loadNewsArticleData");
        if (clientStyle.news_lockListing > -1) {
            globalActiveListingIndex = clientStyle.news_lockListing;
        }
        if (clientStyle.news_lockLCID > -1) {
            clientLCID = clientStyle.news_lockLCID;
        }
        if (Number(getStoryID()) > -1 && getStoryID() != "") {
            var postRequest = {
                storyID: getStoryID(),
                instrumentid: globalRawStockData[globalActiveListingIndex].instrumentID,
                apiversion: clientApiVersion,
                solutionID: clientSolutionID,
                customerKey: clientCustomerKeyRequired
            };
            ResponseData.requestNewsArticleData = this.getAjaxRequest(postRequest, 'RequestArticle');
// Todo move when promise somewhere else also if's make it simple
            $.when(ResponseData.requestNewsArticleData)
                .done(function (newsArticleData) {
                    drawNewsArticle(newsArticleData);
                })
                .fail(function () {
                    drawNewsArticle(undefined);
                });
        } else {
            drawNewsArticle(undefined);
        }
    },
    pressReleaseIRChartHeadlineData: function () {
        debugDataLoad("loadPressReleaseIRChartHeadlineData");
        var postRequest = {
            apiversion: clientApiVersion,
            solutionID: clientSolutionID,
            instrumentid: globalRawStockData[globalActiveListingIndex].instrumentID,
            customerKey: clientCustomerKeyRequired
        };
        ResponseData.requestPressReleaseIRChartHeadlineData = this.getAjaxRequest(postRequest, 'RequestPressReleaseIRChartHeadlineData');
    },
    pressReleaseData: function () {
        debugDataLoad("loadPressReleaseData");
        var postRequest = {
            apiversion: clientApiVersion,
            solutionID: clientSolutionID,
            instrumentid: globalRawStockData[globalActiveListingIndex].instrumentID,
            customerKey: clientCustomerKeyRequired
        };
        ResponseData.requestPressReleaseData = this.getAjaxRequest(postRequest, 'RequestPressRelease');
    },

//
//  TA data load
//
    analysisWilliamsPercentR: function (numberOfYears, period) {
        debugDataLoad("loadAnalysisWilliamsPercentR(numberOfYears[" + numberOfYears + "]period[" + period + "])");
        var postRequest = {
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
            numberOfYears: numberOfYears,
            period: period
        };
        ResponseData.requestAnalysisWilliamsPercentRData = this.getAjaxRequest(postRequest, 'RequestAnalysisWilliamsPercentR');
    },
    analysisRelativeStrengthIndex: function (numberOfYears, period) {
        debugDataLoad("loadAnalysisRelativeStrengthIndex(numberOfYears[" + numberOfYears + "]period[" + period + "])");
        var postRequest = {
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
            numberOfYears: numberOfYears,
            period: period
        };

        ResponseData.requestAnalysisRelativeStrengthIndexData = this.getAjaxRequest(postRequest, 'RequestAnalysisRelativeStrengthIndex');
    },
    analysisRateOfChange: function (numberOfYears, period) {
        debugDataLoad("loadAnalysisRateOfChange(numberOfYears[" + numberOfYears + "]period[" + period + "])");
        var postRequest = {
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
            numberOfYears: numberOfYears,
            period: period
        };

        ResponseData.requestAnalysisRateOfChangeData = this.getAjaxRequest(postRequest, 'RequestAnalysisRateOfChange');
    },
    analysisMoneyFlowIndex: function (numberOfYears, period) {
        debugDataLoad("loadAnalysisMoneyFlowIndex(numberOfYears[" + numberOfYears + "]period[" + period + "])");
        var postRequest = {
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
            numberOfYears: numberOfYears,
            period: period
        };

        ResponseData.requestAnalysisMoneyFlowIndexData = this.getAjaxRequest(postRequest, 'RequestAnalysisMoneyFlowIndex');
    },
    analysisMomentum: function (numberOfYears, period) {
        debugDataLoad("loadAnalysisMomentum(numberOfYears[" + numberOfYears + "]period[" + period + "])");
        var postRequest = {
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
            numberOfYears: numberOfYears,
            period: period
        };

        ResponseData.requestAnalysisMomentumData = this.getAjaxRequest(postRequest, 'RequestAnalysisMomentum');
    },
    analysisDirectionalMovementIndex: function (numberOfYears, period) {
        debugDataLoad("loadAnalysisDirectionalMovementIndex(numberOfYears[" + numberOfYears + "]period[" + period + "])");
        var postRequest = {
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
            numberOfYears: numberOfYears,
            period: period
        };

        ResponseData.requestAnalysisDirectionalMovementIndexData = this.getAjaxRequest(postRequest, 'RequestAnalysisDirectionalMovementIndex');
    },
    analysisCommodityChannelIndex: function (numberOfYears, period) {
        debugDataLoad("loadAnalysisCommodityChannelIndex(numberOfYears[" + numberOfYears + "]period[" + period + "])");
        var postRequest = {
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
            numberOfYears: numberOfYears,
            period: period
        };
        ResponseData.requestAnalysisCommodityChannelIndexData = this.getAjaxRequest(postRequest, 'RequestAnalysisCommodityChannelIndex');
    },
    analysisSimpleMovingAverage: function (numberOfYears, period) {
        debugDataLoad("loadAnalysisSimpleMovingAverage(numberOfYears[" + numberOfYears + "]period[" + period + "])");
        var postRequest = {
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
            numberOfYears: numberOfYears,
            period: period
        };
        ResponseData.requestAnalysisSimpleMovingAverageData = this.getAjaxRequest(postRequest, 'RequestAnalysisSimpleMovingAverage');
    },
    analysisExponentialMovingAverage: function (numberOfYears, period) {
        debugDataLoad("loadAnalysisExponentialMovingAverage(numberOfYears[" + numberOfYears + "]period[" + period + "])");
        var postRequest = {
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
            numberOfYears: numberOfYears,
            period: period
        };
        ResponseData.requestAnalysisExponentialMovingAverageData = this.getAjaxRequest(postRequest, 'RequestAnalysisExponentialMovingAverage');
    },
    analysisMovingAverageConvergenceDivergence: function (numberOfYears, fast, slow, signal) {
        debugDataLoad("loadAnalysisMovingAverageConvergenceDivergence(numberOfYears[" + numberOfYears + "]fast[" + fast + "]slow[" + slow + "]signal[" + signal + "])");
        var postRequest = {
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
            numberOfYears: numberOfYears,
            fast: fast,
            slow: slow,
            signal: signal
        };
        ResponseData.requestAnalysisMovingAverageConvergenceDivergence = this.getAjaxRequest(postRequest, 'RequestAnalysisMovingAverageConvergenceDivergence');
    },
    analysisMovingAverageEnvelopeSimple: function (numberOfYears, period, stray) {
        debugDataLoad("loadAnalysisMovingAverageEnvelopeSimple(numberOfYears[" + numberOfYears + "]period[" + period + "]stray[" + stray + "])");
        var postRequest = {
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
            numberOfYears: numberOfYears,
            period: period,
            stray: stray
        };
        ResponseData.requestAnalysisMovingAverageEnvelopeSimple = this.getAjaxRequest(postRequest, 'RequestAnalysisMovingAverageEnvelopeSimple');
    },
    analysisMovingAverageEnvelopeExponential: function (numberOfYears, period, stray) {
        debugDataLoad("loadAnalysisMovingAverageEnvelopeExponential(numberOfYears[" + numberOfYears + "]period[" + period + "]stray[" + stray + "])");
        var postRequest = {
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
            numberOfYears: numberOfYears,
            period: period,
            stray: stray
        };
        ResponseData.requestAnalysisMovingAverageEnvelopeExponential = this.getAjaxRequest(postRequest, 'RequestAnalysisMovingAverageEnvelopeExponential');
    },
    analysisBollingerBands: function (numberOfYears, period, k) {
        debugDataLoad("loadAnalysisBollingerBands(numberOfYears[" + numberOfYears + "]period[" + period + "]k[" + k + "])");
        var postRequest = {
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
            numberOfYears: numberOfYears,
            period: period,
            K: k
        };
        ResponseData.requestAnalysisBollingerBands = this.getAjaxRequest(postRequest, 'RequestAnalysisBollingerBands');
    },
    analysisParabolicSar: function (numberOfYears, acceleration) {
        debugDataLoad("loadAnalysisSimpleMovingAverage(numberOfYears[" + numberOfYears + "]acceleration[" + acceleration + "])");
        var postRequest = {
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
            numberOfYears: numberOfYears,
            acceleration: acceleration
        };
        ResponseData.requestAnalysisParabolicSar = this.getAjaxRequest(postRequest, 'RequestAnalysisParabolicSar');
    },
//
//  Currency Conversion
//
    currencyConversionAdjustedPrice: function (toCurrency) {
        debugDataLoad("loadCurrencyConversionAdjustedPrice(toCurrency[" + toCurrency + "])");
        var postRequest = {

            fromCurrency: globalRawStockData[globalActiveListingIndex].currency,
            toCurrency: toCurrency,
            numberOfYears: clientStyle.amountOfHistoricalYears,
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired
        };
        ResponseData.requestCurrencyData = this.getAjaxRequest(postRequest, 'RequestCurrency');
    },

//
//  TSR begin
//
    dividendBundle: function (numberOfYears, period) {
        debugDataLoad("loadDividendBundle(numberOfYears[" + numberOfYears + "]period[" + period + "])");
        var postRequest = {
            apiVersion: clientApiVersion,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            instrumentID: globalRawStockData[globalActiveListingIndex].instrumentID,
            numberOfYears: numberOfYears,
            period: period
        };
        ResponseData.requestDividendBundle = this.getAjaxRequest(postRequest, 'RequestDividendBundle');
    },
    calcDividendData: function () {
        debugDataLoad("loadCalcDividendData");
        this.dividendBundle(clientStyle.amountOfDividentYears, 10);
    },
//  @ end of TSR

    getAjaxRequest: function (request, requestName) {
        return $.ajax({
            url: getServiceEngingeURL() + requestName,
            type: 'GET',
            data: request,
            traditional: true
        })
            .fail(function (err) {
                debugError("Data load error!" + err);
            });
    }
};
//
//  Data preloads.
//
var PreloadData = {
    irLookupChartDataClosePriceListing: function (data) {
        debugStep("preloadIRLookupChartDataClosePriceListing");
        var listingStockData = globalRawStockData;
        var listingClosePriceData = data.data;
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
            $.each(item.data, function (listingDataIndex, item) {
                totalIterations++;
                //  Get data
                var currentMainListingOpenPrice = item.openPrice;
                var currentMainListingHigh = item.high;
                var currentMainListingLow = item.low;
                var currentMainListingClosePrice = item.closePrice;
                var currentMainListingVolume = item.volume;
                var currentUnixDateForChart = new moment(item.date).valueOf();
                //  Validate data
                if (currentMainListingOpenPrice == 0) {
                    currentMainListingOpenPrice = currentMainListingClosePrice;
                }
                if (currentMainListingHigh == 0) {
                    currentMainListingHigh = currentMainListingClosePrice;
                }
                if (currentMainListingLow == 0) {
                    currentMainListingLow = currentMainListingClosePrice;
                }
                //  Append data
                globalChartListingStockDataDates[listingIndex].push(currentUnixDateForChart);
                listingArrayForChart.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice]);
                listingArrayForChartVolume.push([currentUnixDateForChart, currentMainListingVolume]);
                listingArrayForChartOHLCV.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice, currentMainListingVolume]);
            });
            //  Append last price as last point in chart.
            var stock = listingStockData[listingIndex];
            var stockDataTimestamp = stock.timestamp;
            var stockDataOpenPrice = stock.open;
            var stockDataHigh = stock.high;
            var stockDataLow = stock.low;
            var stockDataClosePrice = stock.last;
            var stockDataVolume = stock.volume;
            //  Validate data
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
        if (typeof (compiledTemplates.menuTemplate_Lookup) == "function") {
            buildLookupTool(data, compiledTemplates.menuTemplate_Lookup);
        }

    },
    irCalcDataClosePriceListing: function (data) {
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
            $.each(item.data, function (listingDataIndex, item) {
                totalIterations++;
                //  Get data
                var currentMainListingOpenPrice = item.openPrice;
                var currentMainListingHigh = item.high;
                var currentMainListingLow = item.low;
                var currentMainListingClosePrice = item.closePrice;
                var currentMainListingVolume = item.volume;
                var currentUnixDateForChart = new moment(item.date).valueOf();
                //  Validate data
                if (currentMainListingOpenPrice == 0) {
                    currentMainListingOpenPrice = currentMainListingClosePrice;
                }
                if (currentMainListingHigh == 0) {
                    currentMainListingHigh = currentMainListingClosePrice;
                }
                if (currentMainListingLow == 0) {
                    currentMainListingLow = currentMainListingClosePrice;
                }
                //  Append data
                globalChartListingStockDataDates[listingIndex].push(currentUnixDateForChart);
                listingArrayForChart.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice]);
                listingArrayForChartVolume.push([currentUnixDateForChart, currentMainListingVolume]);
                listingArrayForChartOHLCV.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice, currentMainListingVolume]);
            });

            //  Append last price as last point in chart.
            var stock = listingStockData[listingIndex];
            var stockDataTimestamp = stock.timestamp;
            var stockDataOpenPrice = stock.open;
            var stockDataHigh = stock.high;
            var stockDataLow = stock.low;
            var stockDataClosePrice = stock.last;
            var stockDataVolume = stock.volume;

            //  Validate data
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
        if (typeof (compiledTemplates.menuTemplate_Calc) == "function") {
            buildCalcSimpleTool(data, compiledTemplates.menuTemplate_Calc);
        }
    },
    irCalcChartDataClosePriceListing: function (data) {
        debugStep("preloadIRCalcChartDataClosePriceListing");
        var listingStockData = globalRawStockData;
        var listingClosePriceData = data.data;
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
        if (typeof (compiledTemplates.menuTemplate_Calc) == "function") {
            buildCalcTool(data, compiledTemplates.menuTemplate_Calc);
        }
    },
    irCalcDiviendData: function (data) {
        debugStep("preloadIRCalcDiviendData");
        globalRawCalcDividendData = data;
    },
    irChartDataClosePriceListing: function (data) {
        debugStep("preloadIRChartDataClosePriceListing");
        var listingStockData = globalRawStockData.slice();
        var listingClosePriceData = data.data;
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

            $.each(item.data, function (listingDataIndex, item) {
                totalIterations++;

                //  Get data
                var currentMainListingOpenPrice = item.openPrice;
                var currentMainListingHigh = item.high;
                var currentMainListingLow = item.low;
                var currentMainListingClosePrice = item.closePrice;
                var currentMainListingVolume = item.volume;
                var currentUnixDateForChart = new moment(item.date).valueOf();

                //  Validate data
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
                globalChartListingStockDataDates[listingIndex].push(currentUnixDateForChart);
                listingArrayForChart.push([currentUnixDateForChart, currentMainListingClosePrice, null, null, null]);
                listingArrayForChartVolume.push([currentUnixDateForChart, currentMainListingVolume]);
                listingArrayForChartOHLCV.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice, currentMainListingVolume]);
            });

            //
            //  Append last price as last point in chart.
            var stock = listingStockData[listingIndex];
            var stockDataTimestamp = stock.timestamp;
            var stockDataOpenPrice = stock.open;
            var stockDataHigh = stock.high;
            var stockDataLow = stock.low;
            var stockDataClosePrice = stock.last;
            var stockDataVolume = stock.volume;

            //
            //  Validate data
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
        if (!FeaturesList.IRChartCustomPreventDefault.use) {
            drawIRChartHTML();
        }
    },
    irChartNewsHistorical: function (newsRawData) {
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
                IRChartNewsHeadlines.push(item.headline);
            }
        });

        globalChartNewsHeadlines = IRChartNewsHeadlines;
        globalChartNewsHeadlinesFlags = chartNewsHeadlines.reverse();
        globalChartNewsDates = IRChartNewsDates;

        drawIRNewsToChartHistorical();
    },
    irChartPressReleaseIRChartHeadlineHistorical: function (newsRawData) {
        debugStep('preloadIRChartPressReleaseIRChartHeadlineHistorical');
        var chartListingEarlyDate = globalChartListingStockDataDates[globalActiveListingIndex][0];
        var chartNewsHeadlines = [];
        var IRChartNewsHeadlines = [];
        var IRChartNewsDates = [];

        $.each(newsRawData.data, function (index, item) {
            var currentDate = new moment(item.date);
            var currentUnixDateForChart = new moment(currentDate.format('YYYY-MM-DD')).valueOf();
            if (currentUnixDateForChart > chartListingEarlyDate) {
                chartNewsHeadlines.push({
                    x: currentUnixDateForChart,
                    events: {
                        mouseOver: function () {
                        },
                        click: function () {
                            chartOpenPressReleaseFromURL(item.url);
                        }
                    }
                });

                IRChartNewsDates.push(currentUnixDateForChart);
                IRChartNewsHeadlines.push(item.headline);
            }
        });

        globalChartPressReleaseIRChartHeadlineHeadlines = IRChartNewsHeadlines;
        globalChartPressReleaseIRChartHeadlineFlags = chartNewsHeadlines.reverse();
        globalChartPressReleaseIRChartHeadlineDates = IRChartNewsDates;

        if (!FeaturesList.IRChartCustomPreventDefault.use) {
            drawIRChartPressReleaseIRChartHeadlineToChartHistorical();
        }
    },
    irChartPressReleaseHistorical: function (newsRawData) {
        debugStep('preloadIRChartPressReleaseHistorical');
        var chartListingEarlyDate = globalChartListingStockDataDates[globalActiveListingIndex][0];
        var chartNewsHeadlines = [];
        var IRChartNewsHeadlines = [];
        var IRChartNewsDates = [];

        $.each(newsRawData.data, function (index, item) {
            var currentDate = new moment(item.publishTime);
            var currentUnixDateForChart = new moment(currentDate.format('YYYY-MM-DD')).valueOf();
            if (currentUnixDateForChart > chartListingEarlyDate) {
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
                IRChartNewsHeadlines.push(item.headline);
            }
        });

        globalChartPressReleaseIRChartHeadlineHeadlines = IRChartNewsHeadlines;
        globalChartPressReleaseIRChartHeadlineFlags = chartNewsHeadlines.reverse();
        globalChartPressReleaseIRChartHeadlineDates = IRChartNewsDates;
        if (!FeaturesList.IRChartCustomPreventDefault.use) {
            drawIRChartPressReleaseIRChartHeadlineToChartHistorical();
        }
    }
    ,
    irChartDataClosePriceOther: function (data) {
        debugStep("preloadIRChartDataClosePriceOther");

        var totalIterations = 0;
        var listingStockData = globalRawStockData;
        var listingClosePriceData = data.data.closePriceListing;
        var otherClosePriceData = data.data.closePriceOther;

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
        drawIRChartCompareListNavigation(comparisonList);

        var addedPeerNameIndex = 0;
        $.each(listingClosePriceData.data, function (listingDataIndex, item) {

            totalIterations++;
            var currentMainListingDate = item.date;
            var currentUnixDateForChart = new Date(item.date).getTime();
            // Each peer
            $.each(otherClosePriceData, function (peerIndex, item) {
                if (addedPeerNameIndex < otherClosePriceData.length) {
                    globalChartComparisonNames[peerIndex] = item.name + " (" + item.symbol + ")";
                    globalChartComparisonSymbols[peerIndex] = item.symbol;
                    addedPeerNameIndex += 1;
                }
                // Each peer entries
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
                        peerArrayForChart[peerIndex].push([currentUnixDateForChart, null]);
                    }
                }
            });
        });

        globalChartComparisonData.push(peerArrayForChart);

        debugIterations_preloadIRChartDataClosePriceOther = totalIterations;

    },
    irChartDataIntradayListing: function (data) {
        debugStep("preloadIRChartDataIntradayListing");
        var listingStockData = globalRawStockData;
        var listingIntradayData = data.data;
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

            var instrumentID = item.instrumentID;

            $.each(item.data, function (listingDataIndex, item) {
                totalIterations++;

                //  Get data
                var currentUnixDateForChart = new moment.tz(item.timestamp, globalActiveExchangeTimeZone).add(clientStyle.manualTimeOffset, 'hours').valueOf();
                var currentMainListingOpenPrice = item.open;
                var currentMainListingHigh = item.high;
                var currentMainListingLow = item.low;
                var currentMainListingClosePrice = item.closePrice;
                var currentMainListingVolume = item.volume;


                //  Validate data
                if (currentMainListingOpenPrice == 0) {
                    currentMainListingOpenPrice = currentMainListingClosePrice;
                }
                if (currentMainListingHigh == 0) {
                    currentMainListingHigh = currentMainListingClosePrice;
                }
                if (currentMainListingLow == 0) {
                    currentMainListingLow = currentMainListingClosePrice;
                }

                //  Append data

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

    },
    irChartMiniDataClosePriceListing: function (data) {
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

            var listingArrayForChart = [];
            var listingArrayForChartOHLCV = [];
            var listingArrayForChartVolume = [];
            $.each(item.data, function (listingDataIndex, item) {
                totalIterations++;
                //  Get data
                var currentMainListingOpenPrice = item.openPrice;
                var currentMainListingHigh = item.high;
                var currentMainListingLow = item.low;
                var currentMainListingClosePrice = item.closePrice;
                var currentMainListingVolume = item.volume;
                var currentUnixDateForChart = new moment(item.date).valueOf();
                //  Validate data
                if (currentMainListingOpenPrice == 0) {
                    currentMainListingOpenPrice = currentMainListingClosePrice;
                }
                if (currentMainListingHigh == 0) {
                    currentMainListingHigh = currentMainListingClosePrice;
                }
                if (currentMainListingLow == 0) {
                    currentMainListingLow = currentMainListingClosePrice;
                }
                //  Append data
                globalChartListingStockDataDates[listingIndex].push(currentUnixDateForChart);
                listingArrayForChart.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice]);
                listingArrayForChartVolume.push([currentUnixDateForChart, currentMainListingVolume]);
                listingArrayForChartOHLCV.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice, currentMainListingVolume]);
            });

            //  Append last price as last point in chart.
            var stock = listingStockData[listingIndex];
            var stockDataTimestamp = stock.timestamp;
            var stockDataOpenPrice = stock.open;
            var stockDataHigh = stock.high;
            var stockDataLow = stock.low;
            var stockDataClosePrice = stock.last;
            var stockDataVolume = stock.volume;

            //  Validate data
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
    },
    irBenchmarkData: function (data) {
        debugStep("preloadIRBenchmarkData");
        var listingAmount = globalRawStockData.length;
        for (var i = 0; i < listingAmount; i++) {
            globalChartListingStockData.push([]);
            globalChartListingStockDataDates.push([]);
        }
    },
    irMiniquoteChartDataClosePriceListing: function (closePriceListingData) {
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
            var listingArrayForChart = [];
            var listingArrayForChartOHLCV = [];
            var listingArrayForChartVolume = [];
            $.each(item.data, function (listingDataIndex, item) {
                totalIterations++;
                //  Get data
                var currentMainListingOpenPrice = item.openPrice;
                var currentMainListingHigh = item.high;
                var currentMainListingLow = item.low;
                var currentMainListingClosePrice = item.closePrice;
                var currentMainListingVolume = item.volume;
                var currentUnixDateForChart = new moment(item.date).valueOf();
                //  Validate data
                if (currentMainListingOpenPrice == 0) {
                    currentMainListingOpenPrice = currentMainListingClosePrice;
                }
                if (currentMainListingHigh == 0) {
                    currentMainListingHigh = currentMainListingClosePrice;
                }
                if (currentMainListingLow == 0) {
                    currentMainListingLow = currentMainListingClosePrice;
                }
                //  Append data
                globalChartListingStockDataDates[listingIndex].push(currentUnixDateForChart);
                listingArrayForChart.push([currentUnixDateForChart, currentMainListingClosePrice]);
                listingArrayForChartVolume.push([currentUnixDateForChart, currentMainListingVolume]);
                listingArrayForChartOHLCV.push([currentUnixDateForChart, currentMainListingOpenPrice, currentMainListingHigh, currentMainListingLow, currentMainListingClosePrice, currentMainListingVolume]);
            });
            //  Append last price as last point in chart.
            var stock = listingStockData[listingIndex];
            var stockDataTimestamp = stock.timestamp;
            var stockDataOpenPrice = stock.open;
            var stockDataHigh = stock.high;
            var stockDataLow = stock.low;
            var stockDataClosePrice = stock.last;
            var stockDataVolume = stock.volume;
            //  Validate data
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
    },
    irMiniquoteChartDataIntradayListing: function (stockData, listingIntradayData) {
        debugStep("preloadIRMiniquoteChartDataIntradayListing");
        var listingAmount = globalRawStockData.length;
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
                var currentUnixDateForChart = new moment(item.timestamp).valueOf();
                var currentMainListingOpenPrice = item.open;
                var currentMainListingHigh = item.high;
                var currentMainListingLow = item.low;
                var currentMainListingClosePrice = item.closePrice;
                var currentMainListingVolume = item.volume;

                //  Validate data
                if (currentMainListingOpenPrice == 0) {
                    currentMainListingOpenPrice = currentMainListingClosePrice;
                }
                if (currentMainListingHigh == 0) {
                    currentMainListingHigh = currentMainListingClosePrice;
                }
                if (currentMainListingLow == 0) {
                    currentMainListingLow = currentMainListingClosePrice;
                }

                //  Append data
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
    },
    irProfile: function (closePriceListingData) {

        globalRawClosePriceListing = closePriceListingData;

        return {
            headers: translations,
            stocks: globalRawStockData[globalActiveListingIndex],
            closePriceListing: globalRawClosePriceListing[0].data[globalActiveListingIndex],
            performance: this.irProfileDataEntry()
        };
    },
    irProfileDataEntry: function (stockData) {
        var closePriceData = globalRawClosePriceListing[0].data;

        debugStep("preloadIRProfileDataEntry");
        function data(m1, m3, y1) {
            this.m1 = m1;
            this.m3 = m3;
            this.y1 = y1;
        }

        return new data(
            getProfilePerformanceDataForPeriod('m1', 'close', closePriceData[globalActiveListingIndex].data, globalRawStockData[globalActiveListingIndex], 'listing'),
            getProfilePerformanceDataForPeriod('m3', 'close', closePriceData[globalActiveListingIndex].data, globalRawStockData[globalActiveListingIndex], 'listing'),
            getProfilePerformanceDataForPeriod('y1', 'close', closePriceData[globalActiveListingIndex].data, globalRawStockData[globalActiveListingIndex], 'listing')
        );
    }
};