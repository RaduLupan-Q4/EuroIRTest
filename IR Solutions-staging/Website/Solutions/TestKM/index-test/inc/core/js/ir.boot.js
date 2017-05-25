//
//  DOM ready
//
function boot() {
    // $(document).ready( function () {
        setReadingDirection();
        requestListingFromURL();

        ResponseData.requestTranslationsData.done(function (translationsData) {
            debugStep("DOM ready, ResponseData.requestTranslationsData.done");
            translations = translationsData.data;
            updateChartHTMLLanguages();
            initHandlebars();

            // Sends Iframe message for height and ready message
            var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            if (MutationObserver) {
                var target = document.querySelector('body');
                var observer = new MutationObserver(function (mutations) {
                    window.parent.postMessage($('body')[0].clientHeight, "*");
                });

                var config = {attributes: true, childList: true, subtree: true, characterData: true};
                observer.observe(target, config);
            }
            $(window).on('resize', function () {
                window.parent.postMessage($('body')[0].clientHeight, "*");
            })
        });


        //
        //  Some data ResponseData.requests require a delay.
        //  As an example: ResponseData.requestOrdersData requires the IRInstrumentID from stock data prior to executing the ajax ResponseData.request.
        //  Data Promises
        //
        if (DataList.StockData.use) {

            $.when(ResponseData.requestStockData)
                .done(function (stockData) {
                    if (globalActiveListingIndex > stockData.data.length - 1) {
                        globalActiveListingIndex = 0;
                    }
                    globalRawStockData = stockData.data;
                    globalAmountOfListings = stockData.data.length;
                    for (var i = 0; i < globalAmountOfListings; i++) {
                        globalListingsExchangeShort.push('');
                    }
                    //
                    //  Additional Data Load
                    //
                    if (DataList.OrdersData.use) {
                        RequestData.ordersData();
                    }
                    if (DataList.TradeData.use) {
                        RequestData.tradesData();
                    }
                    if (DataList.NewsData.use || DataList.NewsHeadlineData.use) {
                        if (DataList.NewsHeadlineData.use) {
                            clientStyle.amountOfNewsToLoad = clientStyle.amountOfNewsHeadlines;
                        }
                        RequestData.newsDataInitial();
                    }
                    if (DataList.NewsArticleData.use) {
                        RequestData.newsArticleData();
                    }
                    //
                    //  Additional Library start
                    //
                    initMomentTimezone();

                    // Lets first to load the stockData before executing other promises
                    promiseData();
                    // Lets first to load the stockData before executing other promises because all modules needs StockData
                    promiseModule();

                })
                .fail(function (data) {
                    errorHandling(data);
                });
        }
    // });
}
//
//  Module Promises
//
function promiseModule() {
    if (ModulesList.IRQuoteModule.active) {
        $.when(ResponseData.requestTranslationsData).done(function () {
            if (!FeaturesList.IRFeatureStockOtherData.use) {
                buildQuoteTable();
                formatColour();
            } else if (DataList.FeatureStockOtherData.use) {
                $.when(ResponseData.requestFeatureStockOtherData).done(function (stockOtherData) {
                    globalRawStockOtherData = stockOtherData.data;
                    buildQuoteTable();
                    formatColour();
                });
            }

        });
    }

    if (ModulesList.IRProfileModule.active) {
        $.when(ResponseData.requestTranslationsData, ResponseData.requestClosePriceListingData).done(function (translationsData, closePriceListingData) {
            var data = PreloadData.irProfile(closePriceListingData);
            buildIRProfile(data);
            formatColour();
        });
    }

    if (ModulesList.IRChartModule.active) {
        $.when(ResponseData.requestStockData, ResponseData.requestClosePriceListingData, ResponseData.requestTranslationsData).done(function (stockData, closePriceListingData, translateData) {
            globalChartContainer = IrChartPlace;
            buildIRChartTool();

            var o = {
                headers: translations,
                data: closePriceListingData[0].data
            };
            PreloadData.irChartDataClosePriceListing(o);
            updateChartNavBarRange(ModulesList.IRChartModule.name);
            updateIRChartChangeListing();
            attachClickHandlers(ModulesList.IRChartModule.name);

            //  Features
            if (FeaturesList.IRChartNews.use) {
                $.when(ResponseData.requestNewsDataInitial).done(function (newsDataInitial) {
                    globalAmountOfNewsItems = newsDataInitial.data.length;
                    if (newsDataInitial != null) {
                        var o = {
                            headers: translations,
                            data: newsDataInitial.data
                        };
                        PreloadData.irChartNewsHistorical(o);
                    }
                });
            }

            if (FeaturesList.IRChartPressReleaseIRChartHeadline.use) {
                $.when(ResponseData.requestPressReleaseIRChartHeadlineData).done(function (newsDataInitial) {
                    var o = {
                        headers: translations,
                        data: newsDataInitial.data
                    };
                    PreloadData.irChartPressReleaseIRChartHeadlineHistorical(o);
                });
            }

            if (FeaturesList.IRChartPressRelease.use) {
                $.when(ResponseData.requestPressReleaseData).done(function (newsDataInitial) {
                    if (newsDataInitial != null) {
                        var o = {
                            headers: translations,
                            data: newsDataInitial.data
                        };
                        PreloadData.irChartPressReleaseHistorical(o);
                    }
                });
            }
            $.when(ResponseData.requestIntradayListingData, ResponseData.requestTranslationsData).done(function (intradayListingData) {
                var o = {
                    headers: translations,
                    data: intradayListingData[0].data
                };
                PreloadData.irChartDataIntradayListing(o);
            });

            if (FeaturesList.IRChartCompare.use) {
                $.when(ResponseData.requestClosePriceListingData, ResponseData.requestClosePriceOtherData).done(function (closePriceListingData, closePriceOtherData) {
                    var o = {
                        headers: translations,
                        data: {
                            closePriceListing: closePriceListingData[0].data[globalActiveListingIndex],
                            closePriceOther: closePriceOtherData[0].data
                        }
                    };
                    PreloadData.irChartDataClosePriceOther(o);
                    attachClickHandlers(ModulesList.IRChartModule.name);
                });
            }
            $(window).resize(function () {
                IRChartNavigationHideAll();
            });
        });
    }

    if (ModulesList.IRChartHTMLModule.active) {

        debugStep(ModulesList.IRChartHTMLModule.name);
        $.when(ResponseData.requestClosePriceListingData, ResponseData.requestTranslationsData).done(function (closePriceListingData) {
            buildIRChartHTMLTool();
            var o = {
                headers: translations,
                data: closePriceListingData[0].data
            };
            PreloadData.irChartDataClosePriceListing(o);
            globalChartDom = getChartDOM();

            updateChartNavBarRange(ModulesList.IRChartHTMLModule.name);
            updateIRChangeListing();
            attachClickHandlers(ModulesList.IRChartHTMLModule.name);

            if (FeaturesList.IRChartNews.use) {
                $.when(ResponseData.requestStockData, ResponseData.requestNewsDataInitial).done(function (stockData, newsDataInitial) {
                    globalAmountOfNewsItems = newsDataInitial[0].data.length;
                    var o = {
                        headers: translations,
                        data: newsDataInitial.data
                    };
                    PreloadData.irChartNewsHistorical(o);
                });
            }

            if (FeaturesList.IRChartPressReleaseIRChartHeadline.use) {
                $.when(ResponseData.requestPressReleaseIRChartHeadlineData).done(function (newsDataInitial) {
                    var o = {
                        headers: translations,
                        data: newsDataInitial.data
                    };
                    PreloadData.irChartPressReleaseIRChartHeadlineHistorical(o);
                });
            }

        });
        $.when(ResponseData.requestIntradayListingData, ResponseData.requestTranslationsData).done(function (intradayListingData) {
            var o = {
                headers: translations,
                data: {
                    stock: stockData,
                    intradayListing: intradayListingData
                }
            };
            PreloadData.irChartDataIntradayListing(o);
        });
        $.when(ResponseData.requestStockData, ResponseData.requestClosePriceListingData, ResponseData.requestClosePriceOtherData, ResponseData.requestTranslationsData).done(function (stockData, closePriceListingData, closePriceOtherData) {
            if (FeaturesList.IRChartCompare.use) {
                var o = {
                    headers: translations,
                    data: {
                        closePriceListing: closePriceListingData[0].data[globalActiveListingIndex],
                        closePriceOther: closePriceOtherData[0].data
                    }
                };
                PreloadData.irChartDataClosePriceOther(o);
                attachClickHandlers(ModulesList.IRChartModule.name);
            }
        });
    }

    if (ModulesList.IRMiniquoteModule.active) {
        $.when(ResponseData.requestTranslationsData).done(function () {
            drawIRMiniquote();
            formatColour();
        });
    }

    if (ModulesList.IRMiniquoteChartModule.active) {
        globalChartContainer = IrChartMiniquotePlace;

        $.when(ResponseData.requestClosePriceListingData, ResponseData.requestTranslationsData).done(function (closePriceListingData) {
            PreloadData.irMiniquoteChartDataClosePriceListing(closePriceListingData[0].data);

            if (clientStyle.miniquoteChartDefaultPeriode == 'd1' || clientStyle.miniquoteChartDefaultPeriode == 'd5') {

            } else {
                drawIRMiniquoteChart();
                drawMiniquoteChart();
                drawActiveListingToIRMiniquoteChartHistorical();
                setChartExtremes(chartDisplayModes.historical, 90);
            }

        });
        $.when(ResponseData.requestIntradayListingData, ResponseData.requestTranslationsData).done(function (intradayListingData) {

            PreloadData.irMiniquoteChartDataIntradayListing(intradayListingData[0].data);

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
    //  Todo no performance / benchmark tool
    if (ModulesList.IRBenchmarkModule.active) {
        $.when(ResponseData.requestStockData, ResponseData.requestClosePriceListingData, ResponseData.requestClosePriceOtherData, ResponseData.requestTranslationsData).done(function (stockData, closePriceListingData, closePriceOtherData) {
            var o = {
                data: {
                    stock: stockData,
                    closePriceListing: closePriceListingData,
                    closePriceOther: closePriceOtherData
                }
            };
            PreloadData.irBenchmarkData(o);
        });
    }

    if (ModulesList.IRLookupModule.active) {
        globalChartContainer = IrChartLookupPlace;
        $.when(ResponseData.requestClosePriceListingData, ResponseData.requestTranslationsData).done(function (closePriceListingData) {
            var o = {
                headers: translations,
                data: closePriceListingData[0].data
            };

            // Extending the original array with translations to handle legacy lookup.aspx files where {{t_frequency}} is used oposed to {{headers/t_frequency}}
            o = $.extend(translations, o);
            PreloadData.irLookupChartDataClosePriceListing(o);
            updateIRChangeListing();
            attachClickHandlers(ModulesList.IRLookupModule.name);
        });
    }

    if (ModulesList.IRCalcModule.active) {
        globalChartContainer = IrChartCalcPlace;
        $.when(ResponseData.requestClosePriceListingData, ResponseData.requestTranslationsData).done(function (closePriceListingData) {
            var o = {
                headers: translations,
                data: closePriceListingData[0].data
            };
            PreloadData.irCalcChartDataClosePriceListing(o);
            updateIRChangeListing();
            attachClickHandlers(ModulesList.IRCalcModule.name);
        });
    }
    //
    //  Some modules require ResponseData.requestStockData to be available priror to load.
    //  As an example: ResponseData.requestOrdersData requires the IRInstrumentID from stock data prior to executing the ajax ResponseData.request.
    //
    //
    //  Modules
    //
    if (ModulesList.IROrdersModule.active) {
        $.when(ResponseData.requestOrdersData, ResponseData.requestTranslationsData).done(function (ordersData) {
            var o = {
                headers: translations,
                data: ordersData
            };
            buildOrdersTable(o, compiledTemplates.menuTemplate_OrdersTable);
            formatColour();
        });
    }
    if (ModulesList.IRTradesModule.active) {
        $.when(ResponseData.requestTradesData, ResponseData.requestTranslationsData).done(function (tradesData) {
            var o = {
                headers: translations,
                data: tradesData
            };
            buildTradesTable(o, compiledTemplates.menuTemplate_TradesTable);
            formatColour();
        });
    }
    if (ModulesList.IRNewsModule.active) {
        $.when(ResponseData.requestNewsDataInitial, ResponseData.requestTranslationsData).done(function (newsDataInitial) {
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
                var newsDataUpdatedArr = [];
                var newsData = newsDataInitial[0].data;
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
            };
            buildNewsTool(o);
            attachClickHandlers(ModulesList.IRNewsModule.name);
        });
    }
    if (ModulesList.IRNewsHeadlineModule.active) {
        $.when(ResponseData.requestNewsDataInitial, ResponseData.requestTranslationsData).done(function (newsDataInitial) {
            globalAmountOfNewsItems = newsDataInitial[0].data.length;
            if (globalAmountOfNewsItems > 0) {
                globalNewsEarlyYear = new moment(newsDataInitial[0].data[globalAmountOfNewsItems - 1].timestamp);
            } else {
                globalNewsEarlyYear = new moment();
            }
            var o = {
                headers: translations,
                data: newsDataInitial[0].data
            };
            buildNewsHeadlineTool(o);
            attachClickHandlers(ModulesList.IRNewsHeadlineModule.name);
        });
    }
    if (ModulesList.IREmailAlertModule.active) {
        $.when(ResponseData.requestTranslationsData).done(function () {
            var o = {
                headers: translations
            };
            buildEmailAlertTool(o);
        });
    }
    if (ModulesList.IRCalcModule.active) {
        if (FeaturesList.IRCalcTSR.use) {
            RequestData.calcDividendData();
            $.when(ResponseData.requestClosePriceListingData, ResponseData.requestTranslationsData, ResponseData.requestDividendBundle).done(function (closePriceListingData, translationsData, dividendBundleData) {
                PreloadData.irCalcDiviendData(dividendBundleData);
            });
        }
    }
    if (ModulesList.IRCustomModule.active) {
        $.when(ResponseData.requestStockData, ResponseData.requestTranslationsData).done(function (stockData, translationsData) {
            buildCustomTool();
        });
    }
    //
    //  Features
    //
    if (FeaturesList.IRChartNews.use) {
        RequestData.newsDataInitial();
    }
    if (FeaturesList.IRChartPressReleaseIRChartHeadline.use) {
        RequestData.pressReleaseIRChartHeadlineData();
    }
    if (FeaturesList.IRChartPressReleaseIRChartHeadline.use) {
        RequestData.pressReleaseData();
    }


    //
    //  Step where we decide what to draw in the tools, in chart we decide intraday or close prices.
    //
    if (ModulesList.IRChartModule.active) {
        // Ensure all data ResponseData.requests are ready.
        $.when(ResponseData.requestTranslationsData, ResponseData.requestStockData, ResponseData.requestClosePriceListingData, ResponseData.requestClosePriceOtherData, ResponseData.requestIntradayListingData).done(function () {
            if (clientStyle.chart_DefaultPeriodSelected == 'd1' || clientStyle.chart_DefaultPeriodSelected == 'd5') {
                // Default to Intraday
                checkChartState(chartDisplayModes.intraday);
                setChartExtremes(chartDisplayModes.intraday, periodSelector(clientStyle.chart_DefaultPeriodSelected));

            } else {
                // Default to Historical
                if (!FeaturesList.IRChartCustomPreventDefault.use) {
                    checkChartState(chartDisplayModes.historical);
                    drawActiveListingToChartHistorical();
                    setChartExtremes(chartDisplayModes.historical, periodSelector(clientStyle.chart_DefaultPeriodSelected));
                    ModulesReady.endModule(ModulesList.IRChartModule.name);
                }
            }
        });

    }
    if (ModulesList.IRChartHTMLModule.active) {
        // Ensure all data ResponseData.requests are ready.
        $.when(ResponseData.requestTranslationsData, ResponseData.requestStockData, ResponseData.requestClosePriceListingData, ResponseData.requestClosePriceOtherData, ResponseData.requestIntradayListingData).done(function () {
            if (clientStyle.chart_DefaultPeriodSelected == 'd1' || clientStyle.chart_DefaultPeriodSelected == 'd5') {
                // Default to Intraday
                checkChartState(chartDisplayModes.intraday);
                setChartExtremes(chartDisplayModes.intraday, periodSelector(clientStyle.chart_DefaultPeriodSelected));
            } else {
                // Default to Historical
                checkChartState(chartDisplayModes.historical);
                drawActiveListingToChartHistorical();
                setChartExtremes(chartDisplayModes.historical, periodSelector(clientStyle.chart_DefaultPeriodSelected));
            }
        });
    }
}

function promiseData() {
    if (DataList.ClosePriceBundleListingData.use && DataList.StockData.use) {
        $.when(ResponseData.requestStockData).done(function (stockData) {
            globalRawStockData = stockData.data;
            globalAmountOfListings = stockData.data.length;
        });
        $.when(ResponseData.requestClosePriceListingData).done(function (closePriceListingData) {
            globalAmountOfListings = closePriceListingData.data.length;

            if (typeof (closePriceListingData.data[0].data[0]) != 'undefined') {
                globalEarlyYear = new moment(closePriceListingData.data[0].data[0].date).format("YYYY");
                globalEarlyMonth = new moment(closePriceListingData.data[0].data[0].date).format("MM");
                globalEarlyDay = new moment(closePriceListingData.data[0].data[0].date).format("DD");
            } else {
                globalEarlyYear = new moment().format("YYYY");
                globalEarlyMonth = new moment().format("MM");
                globalEarlyDay = new moment().format("DD");
            }
        });
    }
}
