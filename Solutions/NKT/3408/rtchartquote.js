(function () {

    // TIMER ==============================================================================================

    function realTimeChart() {
        if (typeof $('.highcharts-root') == "object") {
            $.when(requestStockData, requestClosePriceListingData, requestTranslationsData, requestIntradayListingData).done(function () {
                if (globalChartActiveDisplayMode == chartDisplayModes.historical || globalChartActiveDisplayMode == chartDisplayModes.intraday) {
                    loadStockData();
                    loadClosePriceBundleListingData();
                    loadIntradayBundleListingData();
                    loadNewsDataInitial()
                }
            });
            getDataClosePrice();
        }
    }

    setInterval(realTimeChart, 30000); // update every 30s

    // CHART RT ============================================================================================
    function getDataClosePrice() {

        $.when(requestStockData, requestClosePriceListingData, requestIntradayListingData, requestNewsDataInitial).done(function (stockData, closePriceListingData, intradayListingData, newsDataInitial) {
            globalRawStockData = stockData[0].data;
            globalAmountOfListings = stockData[0].data.length;

            buildQuoteTable();

            var o = {
                headers: translations,
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData
                }
            };
            preloadClosePrice(o);

            var b = {
                headers: translations,
                data: {
                    stock: stockData,
                    intradayListing: intradayListingData
                }
            };
            preloadIntradayData(b);

            if (useIRChartPressReleaseIRChartHeadline) {
                globalAmountOfNewsItems = newsDataInitial[0].data.length;
                var n = {
                    headers: translations,
                    data: newsDataInitial[0].data
                };

                preloadNewsHistoricalData(n);
            }
            //
            // if (useIRChartPressReleaseIRChartHeadline) {
            //     $.when(requestPressReleaseIRChartHeadlineData).done(function (newsDataInitial) {
            //         //globalAmountOfNewsItems = newsDataInitial[0].data.length;
            //         var o = {
            //             headers: translations,
            //             data: newsDataInitial[0].data
            //         };
            //         //globalNewsRawData = o;
            //
            //         preloadIRChartPressReleaseIRChartHeadlineHistorical(o);
            //     });
            // }
            //

            updateChartData();
            drawPlotLineToChart();
            globalChartDom.redraw();
        });

    }

    function preloadClosePrice(data) {
        debugStep("preloadIRChartDataClosePriceListing");
        var listingStockData = data.data.stock[0].data;
        var listingClosePriceData = data.data.closePriceListing[0].data;
        var listingAmount = listingStockData.length;
        var totalIterations = 0;
        globalChartListingStockData = [];
        globalChartListingStockDataDates = [];
        globalChartListingStockDataOHLCV = [];
        globalChartListingStockDataVolume = [];
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
    }

    function preloadIntradayData(data) {
        function preloadIRChartDataIntradayListing(data) {
            debugStep("preloadIRChartDataIntradayListing");
            var listingStockData = data.data.stock[0].data;
            var listingIntradayData = data.data.intradayListing[0].data;
            var listingAmount = listingStockData.length;
            var totalIterations = 0;

            globalChartListingIntradayData = [];
            globalChartListingIntradayDataVolume = [];
            globalChartListingIntradayDataOHLCV = [];

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
    }

    function preloadNewsHistoricalData(newsRawData) {
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
    }

    function updateChartData() {
        if (globalChartActiveDisplayMode == chartDisplayModes.historical) {
            if (useIRChartSettings) {
                globalChartDom.series[0].setData(globalChartListingStockDataOHLCV[globalActiveListingIndex]);
            } else {
                globalChartDom.series[0].setData(globalChartListingStockData[globalActiveListingIndex]);
            }
            if (useIRChartPressReleaseIRChartHeadline) {
                globalChartDom.series[3].setData(globalChartNewsHeadlinesFlags);
            }
            globalChartDom.series[2].setData(globalChartListingStockDataVolume[globalActiveListingIndex]);
        } else if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
            if (useIRChartSettings) {
                globalChartDom.series[0].setData(globalChartListingIntradayDataOHLCV[globalActiveListingIndex]);
            } else {
                globalChartDom.series[0].setData(globalChartListingIntradayData[globalActiveListingIndex]);
            }
            globalChartDom.series[2].setData(globalChartListingIntradayDataVolume[globalActiveListingIndex]);
        }
    }

    // QUOTE RT ============================================================================================


})();
