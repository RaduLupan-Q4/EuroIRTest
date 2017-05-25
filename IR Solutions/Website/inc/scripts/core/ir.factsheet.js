function isDev() {
    if (location.href.indexOf('localhost') > -1 || location.href.indexOf('http://devir.euroinvestor.com/') > -1) {
        if (navigator.userAgent.indexOf("MSIE") > -1) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}
var debug = isDev();
var IRFactsheetModule = false;
var useStockData = false;
var useClosePriceBundleListingData = false;
var useKeyFigureTransactionData = false;
//
var clientApiVersion;
var clientLCID;
var clientSolutionID;
var clientCustomerKeyRequired;
//
var factsheetExcelTab = "Factsheet";
var globalChartDom = null;
var globalActiveLanguage = "en";
var globalActiveExchangeTimeZone = null;
var clientLocaleParameters = new function () {
    this.decimalSeparator = ',';
    this.decimalSeparator1000 = '.';
};
var LCID = new function () {
    this.csCZ = 1029;
    this.daDK = 1030;
    this.deDE = 1031;
    this.enGB = 2057;
    this.enUS = 1033;
    this.esES = 3082;
    this.fiFI = 1035;
    this.frFR = 1036;
    this.nlNL = 1043;
    this.nnNO = 2068;
    this.plPL = 1045;
    this.ptPT = 2070;
    this.svSE = 1053;
    this.zhCHS = 4;
    this.zhCHT = 31748;
    this.heIL = 1037;
    this.arEG = 3073;
    this.huHU = 1038;
    this.itIT = 1040;
}
var translations = new function () {
    // Will be populated
}
var clientStyle = new function () {
    this.chart_ColourMain = '#aaaaaa';
    this.chart_ColourPie = ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'];
    this.amountOfDecimals = 2;
    this.formatDate = 'YYYY-MM-DD';
    this.formatTime = 'HH:mm';
    this.formatDateTime = this.formatDate + ' ' + this.formatTime;
}
var template_IRFactsheet;
var globalActiveListingIndex = 0;
var globalActivePeriod = 'y1';
var globalRawStockData = null;
var globalRawClosePriceListingData = null;
var globalRawKeyFiguresData = null;
var globalChartListingStockData = [];
var globalChartListingStockDataDates = [];
var globalChartListingStockDataOHLCV = [];
var globalChartUseCustomTooltipContent = false;
var globalHTMLReadingDirection = "LRT";
var chartDisplayModes = new function () {
    this.historical = 'historical',
    this.intraday = 'intraday',
    this.comparison = 'comparison',
    this.ta = 'ta',
    this.tsr = 'tsr',
    this.technicalAnalysis = 'technicalAnalysis'
};

var globalChartDataPrepared = null;
var globalChartActiveDisplayMode = chartDisplayModes.historical;
var globalChartListingHistoricalLastKnownMomentDate = null;

initSolutionInfo();
updateLCID();
loadTranslationsData();

$(function () {
    requestTranslationsData.done(function (translationsData) {
        translations = translationsData.data;
        initClientStyle();
        initHandlebars();
        if (useStockData) {
            $.when(requestStockData)
                .done(function (stockData) {
                    globalRawStockData = stockData.data[globalActiveListingIndex];

                    if (useKeyFigureTransactionData) {
                        loadKeyFigureTransactionData();

                        $.when(requestKeyFigureTransactionData)
                            .done(function (keyFigureData) {
                                globalRawKeyFiguresData = keyFigureData.tables;

                                var data = {
                                    headers: translations,
                                    stocks: globalRawStockData,
                                    keyFigures: globalRawKeyFiguresData
                                }
                                globalChartDataPrepared = data;

                                initIRFactsheet(data);

                                if (useClosePriceBundleListingData) {

                                    loadClosePriceBundleListingData();

                                    $.when(requestClosePriceListingData)
                                        .done(function (closePriceListingData) {
                                            globalRawClosePriceListingData = closePriceListingData.data[globalActiveListingIndex];

                                            var o = {
                                                headers: translations,
                                                data: {
                                                    stock: globalRawStockData,
                                                    closePriceListing: globalRawClosePriceListingData
                                                }
                                            };

                                            preloadIRChartPerformance(o);

                                            if (typeof ($('.IRFactsheetSharePriceChartPlaceholder').html()) == 'string') {

                                                var thisTarget = $('.IRFactsheetSharePriceChartPlaceholder');

                                                drawIRChartPerformance(thisTarget);
                                                drawPerformanceDataToChart(thisTarget);
                                                redrawIRChart(thisTarget);

                                            }

                                        }
                                    );
                                }

                            }
                        );
                    }
                }
            );
        }
    });
});

function initSolutionInfo() {
    debugStep("initSolutionInfo()");
    clientApiVersion = 1;
    clientSolutionID = getSolutionID();
    clientCustomerKeyRequired = getCustomerKeyRequired();
    debugStep("clientSolutionID: " + clientSolutionID);
    debugStep("clientCustomerKeyRequired: " + clientCustomerKeyRequired);
}
function initHandlebars() {
    debugStep("initHandlebars");
    if (IRFactsheetModule) {
        if (typeof ($('.IRFactsheetModule').html()) != "undefined" && typeof ($('#IRFactsheetTemplate').html()) != "undefined") {
            template_IRFactsheet = Handlebars.compile($('#IRFactsheetTemplate').html());
        }
    }
}
function initClientStyle() {
    debugStep("initClientStyle");
    if (typeof (clientStyleOverwrite) != "undefined") {
        if (typeof (clientStyleOverwrite.chart_ColourMain) != "undefined") {
            clientStyle.chart_ColourMain = clientStyleOverwrite.chart_ColourMain; // Write '#xxxxxx' and not '#xxx' or 'blue' to have transparrency in the chart.
        }
        if (typeof (clientStyleOverwrite.chart_ColourPie) != "undefined") {
            clientStyle.chart_ColourPie = clientStyleOverwrite.chart_ColourPie;
        }
    }
}

function initIRFactsheet(data) {
    debugStep("initIRFactsheet");

    if (IRFactsheetModule) {
        if (typeof ($('.IRFactsheetModule').html()) != "undefined" && typeof ($('#IRFactsheetTemplate').html()) != "undefined") {
            $(".IRFactsheetModule").html(template_IRFactsheet(data));

            $('.IRFactsheetChartPlaceholder.IRChartTypeColumn').each(function () {

                var target = $(this).html().replace("<!--", "").replace("-->", "").split(';');
                var categories = getSpecificHeadersFromKeyFigures(globalChartDataPrepared, factsheetExcelTab, target[0]);
                var dataTmp = getSpecificDataFromKeyFigures(globalChartDataPrepared, factsheetExcelTab, target[0], target[1]);
                var dataStr = "[";
                var delimiter = "";
                var yValueMin = parseFloat(99999);
                var yValueMax = parseFloat(0);
                var paddingInAmount = 1;

                if (dataTmp.length > 0) {
                    $.each(dataTmp, function () {
                        dataStr += delimiter + '{"y":' + parseFloat(this.toString().replace(",", ".")) + '}';
                        delimiter = ",";
                        if (parseFloat(this) < yValueMin) {
                            yValueMin = parseFloat(this);
                        }
                        if (parseFloat(this) > yValueMax) {
                            yValueMax = parseFloat(this);
                        }
                    });

                    yValueMin = yValueMin - paddingInAmount;
                    yValueMax = yValueMax + paddingInAmount;

                    dataStr += "]";
                    var data = JSON.parse(dataStr);

                    drawIRChartBase($(this), categories);
                    drawTargetDataToIRChartBase($(this), 'column', data);

                    $($(this)).highcharts().yAxis[0].setExtremes(yValueMin, yValueMax, false, false);

                    redrawIRChart($(this));
                } else {
                    $(this).html('No data available');
                }
            });
            $('.IRFactsheetChartPlaceholder.IRChartTypePie').each(function () {
                var target = $(this).html().replace("<!--", "").replace("-->", "").split(';');

                var dataTmp = getSpecificDataTableFromKeyFigures(globalChartDataPrepared, factsheetExcelTab, target[0], target[1]);
                drawIRChartPieWithData($(this), dataTmp);
                redrawIRChart($(this));
            });

        }
    }
}
var globalSubData;
function getSpecificHeadersFromKeyFigures(data, type, targetTable) {
    //
    //  Get the latest headers from the most recent excel upload order by default.
    //
    var amountOfYearsOrQuarters = 5;
    var highestTableID = 0;
    var subDataRet;
    $.each(data.keyFigures, function () {
        if (this.workSheetName == type && this.tableName == targetTable) {
            if (this.tableId > highestTableID) {
                var subData = this.columnHeaders;
                if (subData.length > amountOfYearsOrQuarters) {
                    subData = subData.slice(0, 5);
                }
                subDataRet = subData;
                highestTableID = this.tableId;
            }
        }
    });
    return subDataRet;
}
function getSpecificDataFromKeyFigures(data, type, targetTable, targetRow) {
    var dataSub = [];
    var amountOfYearsOrQuarters = 5;
    $.each(data.keyFigures, function () {
        if (this.workSheetName == type && this.tableName == targetTable) {
            $.each(this.rows, function () {
                if (this.rowTitle == targetRow) {
                    //var subData = this.rowData.reverse();
                    var subData = this.rowData;
                    $.each(subData, function () {
                        if (amountOfYearsOrQuarters > 0) {
                            dataSub.push(this);
                        }
                        amountOfYearsOrQuarters--;
                    });
                }
            });
        }
    });
    return dataSub;
}
function getSpecificDataTableFromKeyFigures(data, type, targetTable) {
    var dataStr = "[";
    var delimiter = "";
    $.each(data.keyFigures, function () {
        if (this.workSheetName == type && this.tableName == targetTable) {
            $.each(this.rows, function () {
                var title = this.rowTitle;
                var data = this.rowData[this.rowData.length - 1];
                dataStr += delimiter + '{ "name":"' + checkIRFactsheetTranslations(title) + '", "y":' + data + '}';
                delimiter = ",";

            });
        }
    });
    dataStr += "]";
    var data = JSON.parse(dataStr);
    return data;
}
function preloadIRChartPerformance(data) {

    debugStep("preloadIRChartPerformance");

    var listingStockData = data.data.stock;
    var listingClosePriceData = data.data.closePriceListing;
    var listingAmount = 1;
    var totalIterations = 0;

    for (var i = 0; i < listingAmount; i++) {
        globalChartListingStockData.push([]);
        globalChartListingStockDataDates.push([]);
        globalChartListingStockDataOHLCV.push([]);
    }

    var listingArrayForChart = [];
    var listingArrayForChartOHLCV = [];

    $.each(listingClosePriceData.data, function (listingDataIndex, item) {

        //
        //  Get data
        //
        var currentMainListingClosePrice = item.closePrice;
        var currentUnixDateForChart = new moment(item.date).valueOf();

        //
        //  Append data
        //
        globalChartListingStockDataDates[0].push(currentUnixDateForChart);
        listingArrayForChart.push([currentUnixDateForChart, currentMainListingClosePrice, currentMainListingClosePrice, currentMainListingClosePrice, currentMainListingClosePrice]);
        listingArrayForChartOHLCV.push([currentUnixDateForChart, currentMainListingClosePrice, currentMainListingClosePrice, currentMainListingClosePrice, currentMainListingClosePrice, null]);

    });

    //
    //  Append last price as last point in chart.
    //
    //var stock = listingStockData;
    //var stockDataTimestamp = stock.timestamp;
    //console.log(stockDataTimestamp);
    //var stockDataOpenPrice = stock.open;
    //var stockDataHigh = stock.high;
    //var stockDataLow = stock.low;
    //var stockDataClosePrice = stock.last;
    //var stockDataVolume = stock.volume;

    //var stockDataDateOnly = new moment(stockDataTimestamp).format("YYYY-MM-DD");
    //var stockDataUnixDateForChart = new moment(stockDataDateOnly + 'T00:00:00.0000000Z').valueOf();
    //globalChartListingStockDataDates[0].push(stockDataUnixDateForChart);

    //listingArrayForChart.push([
    //        stockDataUnixDateForChart,
    //        stockDataClosePrice,
    //        null,
    //        null,
    //        null
    //]);

    //listingArrayForChartOHLCV.push([
    //        stockDataUnixDateForChart,
    //        stockDataClosePrice,
    //        stockDataClosePrice,
    //        stockDataClosePrice,
    //        stockDataClosePrice,
    //        null
    //]);

    globalChartListingStockData[0] = listingArrayForChart;
    globalChartListingStockDataOHLCV[0] = listingArrayForChartOHLCV;


}
function drawIRChartPerformance(thisTarget) {
    debugStep("drawIRChartPerformance");
    $(thisTarget).highcharts('StockChart', {

        chart: {
            alignTicks: true,
            borderWidth: 1,
            borderColor: clientStyle.chart_ColourBorder,
            backgroundColor: '#ffffff',
            plotBackgroundColor: '#ffffff',
            marginRight: 70,
            marginLeft: 10,
            spacingTop: 10,
            plotBorderWidth: 1,
            plotBorderColor: clientStyle.chart_ColourBorder,
        },
        tooltip: {
            shadow: false,
            valueDecimals: clientStyle.amountOfDecimals,
            changeDecimals: 2,
            borderRadius: 0,
            borderWidth: 0,
            shared: true,
            useHTML: true,
            backgroundColor: 'rgba(255,255,255,0)',
            formatter: function () {
                var date = Highcharts.dateFormat('%Y-%m-%d', this.x);

                var time = Highcharts.dateFormat('%H:%M:%S', this.x);
                var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                var unixDate = new moment(date + 'T00:00:00.0000000Z').valueOf();
                var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();

                return updateTooltipDOHLCV(unixDateTime);
            },
            positioner: function (boxWidth, boxHeight, point) {

                var chartWidth = $(thisTarget).width();
                var plotX = point.plotX + 30;
                var plotY = (boxHeight - 52);

                if (plotX > chartWidth - boxWidth - 50) {
                    plotX = plotX - boxWidth - 40;
                }

                //
                //  When tooltip overlap yAxis, make it static.
                //  (chartWidth - X), X = yAxis width.
                //
                if (plotX > (chartWidth - 70)) {
                    plotX = (chartWidth - 70);
                }
                if (plotX < 0) {
                    plotX = 0;
                }

                if (globalChartActiveDisplayMode == chartDisplayModes.intraday) {
                    plotY = plotY + 12;
                }

                return { x: plotX, y: plotY };
            }
        },
        xAxis: {
            ordinal: true,
            align: 'center',
            lineWidth: 1,
            lineColor: clientStyle.chart_ColourBorder,
            tickLength: 0,
            gridLineWidth: 1,
            gridLineColor: '#eee',
            showFirstLabel: true,
            showLastLabel: true,
            startOnTick: false,
            endOnTick: false,
            showEmpty: false,
            type: 'datetime',
            overflow: 'justify',
            tickPixelInterval: 70,
            labels: {
                staggerLines: 1,
                align: 'center',
                step: 1,
                useHTML: true,
                formatter: function () {
                    var formattedXLabel = '';
                    var ts = new moment.tz(this.value, globalActiveExchangeTimeZone);
                    var date = new moment.tz(this.value, globalActiveExchangeTimeZone).format("YYYY-MM-DD");
                    var time = new moment.tz(this.value, globalActiveExchangeTimeZone).format("HH:mm");
                    var day = new moment.tz(this.value, globalActiveExchangeTimeZone).format("DD");
                    if (globalChartListingHistoricalLastKnownMomentDate == null) {
                        globalChartListingHistoricalLastKnownMomentDate = ts;
                    }
                    switch (globalChartActiveDisplayMode) {
                        case chartDisplayModes.historical:

                            switch (globalActivePeriod) {
                                case "m1":
                                case "m3":
                                case "m6":
                                case "y1":
                                case "y2":
                                case "y5":
                                case "max":
                                case "Max":
                                    if (globalChartListingHistoricalLastKnownMomentDate.format("YYYY") != ts.format("YYYY")) {
                                        formattedXLabel = '<span class="IRChartXAxisHeader">' + ts.format("YYYY") + '</span>';
                                    } else if (globalChartListingHistoricalLastKnownMomentDate.format("MM") != ts.format("MM")) {
                                        formattedXLabel = '<span class="">' + translateMonthShort(ts.format("MMM")) + '</span>';
                                    } else if (globalChartListingHistoricalLastKnownMomentDate.format("DD") != ts.format("DD")) {
                                        formattedXLabel = '<span class="">' + ts.format("DD") + '</span>';
                                    }
                                    break;
                                default:
                                    formattedXLabel = date;
                                    break;
                            }
                            globalChartListingHistoricalLastKnownMomentDate = new moment(this.value);
                            break;
                    }
                    return formattedXLabel;
                }
            },
            dateTimeLabelFormats: getChartDateTimeLabelFormats()
            //minRange: globalChartMinRange
        },
        yAxis: [{
            lineWidth: 1,
            lineColor: clientStyle.chart_ColourBorder,
            gridLineWidth: 1,
            gridLineColor: '#eee',
            tickPixelInterval: 35,
            showFirstLabel: true,
            showLastLabel: true,
            startOnTick: false,
            endOnTick: false,
            opposite: true,
            labels: {
                align: 'right',
                x: 50,
                y: 5,
                formatter: function () {
                    return formatDecimal(this.value) + '';
                }
            }
        }],
        scrollbar: {
            enabled: false
        },
        navigator: {
            enabled: false
        },
        rangeSelector: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            line: {
                animation: false,
                enableMouseTracking: false
            }
        }

    });

}
function drawPerformanceDataToChart(thisTarget) {
    debugStep("drawPerformanceDataToChart");

    $(thisTarget).highcharts().addSeries({
        index: 1,
        data: globalChartListingStockData[globalActiveListingIndex],
        color: clientStyle.chart_ColourMain,
        yAxis: 0,
        visible: true,
        linkedTo: 0,
        type: 'line',
        zIndex: 2
    }, false, 0);

}
function drawIRChartBase(thisTarget, categories) {
    debugStep("drawIRChartBase");

    $(thisTarget).highcharts('StockChart', {

        chart: {
            animation: false,
            alignTicks: true,
            panning: false,
            backgroundColor: '#fff',
            borderWidth: 0,
            borderColor: '#fff',
            plotBorderWidth: 1,
            plotBorderColor: '#eeeeee',
            marginRight: 5,
            marginLeft: 5,
            spacingTop: 5,
            spacingBottom: 5,
            spacingRight: 5
        },
        tooltip: {
            enabled: false
        },
        xAxis: {
            type: "category",
            align: 'center',
            tickInterval: 1,
            lineWidth: 1,
            labels: {
                step: 1,
                formatter: function () {
                    return categories[this.value];
                }
            },
            crosshair: {
                width: 0,
                color: '#fff'
            }
        },
        yAxis: {
            tickPosition: 'outside',
            opposite: true,
            lineWidth: 1,
            labels: {
                enabled: false,
                align: 'left',
                x: 5,
                y: 0
            },
            stackLabels: {
                enabled: true,
                useHTML: true,
                formatter: function () {
                    return "<span class=\"IRColumnChartStackedLabels\">" + formatLocal(this.total) + "</span>";
                }
            }
        },
        rangeSelector: {
            enabled: false
        },
        scrollbar: {
            enabled: false
        },
        navigator: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                animation: false,
                states: {
                    hover: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                }
            },
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        }

    });

}
function drawIRChartPieWithData(thisTarget, data) {

    $(thisTarget).highcharts('StockChart', {

        colors: clientStyle.chart_ColourPie,
        chart: {
            alignTicks: true,
            panning: false,
            width: 250,
            height: 250,
            backgroundColor: 'white',
            borderWidth: 0,
            borderColor: '#fff',
            plotBorderWidth: 0,
            marginRight: 5,
            marginLeft: 5,
            marginBottom: 110,
            spacingTop: 0,
            spacingBottom: 0,
            spacingRight: 5,
            type: 'pie'
        },
        tooltip: {
            shadow: false,
            valueDecimals: 0,
            changeDecimals: 2,
            borderRadius: 0,
            borderWidth: 0,
            shared: false,
            useHTML: false,
            formatter: function () {
                return "<span>" + this.key + " " + this.y + "%" + "</span>";
            }
        },
        rangeSelector: {
            enabled: false
        },
        scrollbar: {
            enabled: false
        },
        navigator: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: false,
                animation: false,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                point: {
                    events: {
                        legendItemClick: function () {
                            return false;
                        }
                    }
                },
                states: {
                    hover: {
                        halo: {
                            size: 0
                        }
                    }
                },
                showInLegend: true
            }
        },
        legend: {
            enabled: true,
            verticalAlign: 'top',
            layout: 'vertical',
            align: 'left',
            useHTML: true,
            y: 125,
            x: 0,
            labelFormatter: function () {
                return '<span class="IRChartTypePieLegend">' + this.name + ' ' + this.y + '%</span>';
            }
        },
        series: [{
            data: data,
            size: '100%',
            innerSize: '90%',
            dataLabels: {
                enabled: false
            }
        }]

    });

}
function drawTargetDataToIRChartBase(thisTarget, type, data) {
    debugStep("drawTargetDataToIRChartBase");

    $(thisTarget).highcharts().addSeries({
        data: data,
        color: clientStyle.chart_ColourMain,
        visible: true,
        pointWidth: 16,
        type: type,
        labels: {
            enabled: true
        }
    }, false, 0);

}
function redrawIRChart(thisTarget) {
    $(thisTarget).highcharts().redraw();
}
function updateLCID() {
    debugStep("updateLCID");
    updateGlobalLanguage();
    var lcidSelected;
    var decimalCommaOrPoint = 'comma';
    switch (globalActiveLanguage) {
        case "cs":
            lcidSelected = LCID.csCZ;
            break;
        case "da":
            lcidSelected = LCID.daDK;
            break;
        case "de":
            lcidSelected = LCID.deDE;
            break;
        case "en":
            lcidSelected = LCID.enGB;
            decimalCommaOrPoint = 'point';
            break;
        case "es":
            lcidSelected = LCID.esES;
            break;
        case "fi":
            lcidSelected = LCID.fiFI;
            break;
        case "fr":
            lcidSelected = LCID.frFR;
            break;
        case "nl":
            lcidSelected = LCID.nlNL;
            break;
        case "no":
            lcidSelected = LCID.nnNO;
            break;
        case "pl":
            lcidSelected = LCID.plPL;
            break;
        case "pt":
            lcidSelected = LCID.ptPT;
            break;
        case "se":
            lcidSelected = LCID.svSE;
            decimalCommaOrPoint = ' ';
            break;
        case "zh-s":
            lcidSelected = LCID.zhCHS;
            decimalCommaOrPoint = 'point';
            break;
        case "zh-t":
            lcidSelected = LCID.zhCHT;
            decimalCommaOrPoint = 'point';
            break;
        case "he":
            lcidSelected = LCID.heIL;
            globalHTMLReadingDirection = "RTL";
            decimalCommaOrPoint = 'point';
            break;
        case "ar":
            lcidSelected = LCID.arEG;
            globalHTMLReadingDirection = "RTL";
            decimalCommaOrPoint = 'point';
            break;
        case "hu":
            lcidSelected = LCID.huHU;
            break;
        case "it":
            lcidSelected = LCID.itIT;
            break;
    }
    clientLCID = lcidSelected;
    if (decimalCommaOrPoint == 'point') {
        clientLocaleParameters.decimalSeparator = '.';
        clientLocaleParameters.decimalSeparator1000 = ',';
    }
    if (decimalCommaOrPoint == ' ') {
        clientLocaleParameters.decimalSeparator = ',';
        clientLocaleParameters.decimalSeparator1000 = ' ';
    }
}
function updateGlobalLanguage() {
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
function updateTooltipDOHLCV(date) {
    debugStep("updateTooltipDOHLCV");
    var dateIndex;
    var value = "-";
    var tooltipStr = "";
    var tooltipStrSub = "";
    if (globalChartUseCustomTooltipContent) {
        tooltipStr = "<div class=\"tooltipHTML " + globalHTMLReadingDirection + " useFullOHLC" + clientStyle.chart_CustomTooltipUseFullOHLCV + " tooltipMode" + globalChartActiveDisplayMode + "\" style=\"top: " + clientStyle.chart_CustomTooltipTopPX + "px;\">";
    } else {
        tooltipStr = "<div class=\"tooltipHTML tooltipMode" + chartDisplayModes.historical + " htmlReadingDirection" + globalHTMLReadingDirection + "\" dir=\"" + globalHTMLReadingDirection.toLowerCase() + "\">"; // JRJR
    }
    switch (globalChartActiveDisplayMode) {
        case chartDisplayModes.historical:

            dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
            if (dateIndex == -1) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                if (dateIndex == -1) {
                    debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
                }
            }
            tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
            break;
    }
    tooltipStr += tooltipStrSub;
    tooltipStr += "</div>";
    return tooltipStr;
}
function updateTooltipDOHLCVN(date) {
    debugStep("updateTooltipDOHLCVN");
    var dateIndex;
    var newsIndex;
    var value = "-";
    var tooltipStr = "";
    if (globalChartUseCustomTooltipContent) {
        tooltipStr = "<div class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode useFullOHLC" + clientStyle.chart_CustomTooltipUseFullOHLCV + "\" style=\"top: " + clientStyle.chart_CustomTooltipTopPX + "px;\" >";
    } else {
        tooltipStr = "<div class=\"tooltipHTML " + globalChartActiveDisplayMode + "Mode useFullOHLC" + clientStyle.chart_CustomTooltipUseFullOHLCV + "\">";
    }
    var tooltipStrSub = "";
    switch (globalChartActiveDisplayMode) {
        case chartDisplayModes.historical:

            dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
            if (dateIndex == -1) {
                dateIndex = getClosestDateIndexForListingClosePrice(date);
                if (dateIndex == -1) {
                    debugError("error in updateTooltipDOHLCV dateIndex = " + dateIndex);
                }
            }
            tooltipStrSub += getTooltipStrSubHistorical(dateIndex);
            break;
    }
    tooltipStr += tooltipStrSub;
    tooltipStr += "</div>";

    return tooltipStr;
}
function getTooltipStrSubHistorical(dateIndex) {
    var tooltipStr = "";
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideDate) {
    }
    else {
        //if (typeof (globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex]) != 'undefined') {
        tooltipStr += "<div class=\"IRChartTooltipDate\">" + formatTooltipDate(dateIndex, globalChartListingStockDataDates) + "</div>"; //tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";
        //}
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideClose) {
    }
    else {
        //if (typeof (globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex]) != 'undefined') {
        tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
        //}
        //tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex].closePrice) + "</div>";
    }

    return tooltipStr;
}
function getSolutionID() {
    debugStep("getSolutionID");
    var fetchedSolutionID;
    var pathSplit = location.href.split("/");
    if (pathSplit[3].toLowerCase() == 'solutions' || pathSplit[3].toLowerCase() == 'irmotor' || pathSplit[3].toLowerCase() == 'solutionsstaging') {
        fetchedSolutionID = pathSplit[5];
        if (pathSplit[4].toLowerCase() == 'debugsolutions') {
            fetchedSolutionID = pathSplit[6];
        }
    } else {
        fetchedSolutionID = pathSplit[4];
    }

    //
    //  Presentation correction for MJ
    //
    if (fetchedSolutionID == 'solutioneditor') {
        fetchedSolutionID = '10010';
    }

    if (pathSplit[3].toLowerCase() == 'tools') {
        var pathSplit = pathSplit[4].split('?');
        if (pathSplit[0].toLowerCase() == 'newsarticlehtml.aspx') {
            var pathSplitGetParams = pathSplit[1].split('&');
            for (var i = 0; i < pathSplitGetParams.length - 1; i++) {
                var pathSplitGetParamsSub = pathSplitGetParams[i].split('=');
                if (pathSplitGetParamsSub[0].toLowerCase() == 'solutionid') {
                    fetchedSolutionID = pathSplitGetParamsSub[1];
                }
            }
        }
    }
    else if (pathSplit[4].toLowerCase() == 'tools') {
        var pathSplit = pathSplit[5].split('?');
        if (pathSplit[0].toLowerCase() == 'newsarticlehtml.aspx') {
            var pathSplitGetParams = pathSplit[1].split('&');
            for (var i = 0; i < pathSplitGetParams.length - 1; i++) {
                var pathSplitGetParamsSub = pathSplitGetParams[i].split('=');
                if (pathSplitGetParamsSub[0].toLowerCase() == 'solutionid') {
                    fetchedSolutionID = pathSplitGetParamsSub[1];
                }
            }
        }
    } else if (fetchedSolutionID.toLowerCase() == 'test') {
        fetchedSolutionID = 2086;
    }

    //else if (fetchedSolutionID.toLowerCase() == 'tools') {
    //    fetchedSolutionID = 2086;
    //}

    if (typeof (fetchedSolutionID) == 'string') {
        if (fetchedSolutionID.toLowerCase() == 'tools') {
            fetchedSolutionID = 2086;
        }
    }

    if (pathSplit[3] == 'debugSolutions') {
        fetchedSolutionID = pathSplit[5];
    }

    return fetchedSolutionID;
}
function getCustomerKeyRequired() {
    debugStep("getCustomerKeyRequired");
    var solutionName;
    var pathSplit = location.href.split("/");

    if (pathSplit[3].toLowerCase() == 'solutions' || pathSplit[3].toLowerCase() == 'irmotor' || pathSplit[3].toLowerCase() == 'solutionsstaging') {
        solutionName = pathSplit[4];
        if (pathSplit[4].toLowerCase() == 'debugsolutions') {
            solutionName = pathSplit[5];
        }
        if (pathSplit[3].toLowerCase() == 'debugsolutions') {
            solutionName = pathSplit[4];
        }

    } else {
        solutionName = pathSplit[3];
    }

    //
    //  Presentation correction for MJ
    //
    if (solutionName == 'tools') {
        solutionName = 'Template';
    }

    if (pathSplit[3].toLowerCase() == 'tools') {
        var pathSplit = pathSplit[4].split('?');
        if (pathSplit[0] == 'newsArticleHTML.aspx') {
            var pathSplitGetParams = pathSplit[1].split('&');
            for (var i = 0; i < pathSplitGetParams.length - 1; i++) {
                var pathSplitGetParamsSub = pathSplitGetParams[i].split('=');
                if (pathSplitGetParamsSub[0].toLowerCase() == 'customerkey') {
                    solutionName = pathSplitGetParamsSub[1];
                }
            }
        }
    }
    else if (pathSplit[4].toLowerCase() == 'tools') {
        var pathSplit = pathSplit[5].split('?');
        if (pathSplit[0] == 'newsArticleHTML.aspx') {
            var pathSplitGetParams = pathSplit[1].split('&');
            for (var i = 0; i < pathSplitGetParams.length - 1; i++) {
                var pathSplitGetParamsSub = pathSplitGetParams[i].split('=');
                if (pathSplitGetParamsSub[0].toLowerCase() == 'customerkey') {
                    solutionName = pathSplitGetParamsSub[1];
                }
            }
        }
    }

    if (solutionName == 'debugSolutions') {
        solutionName = pathSplit[4];
    }

    return solutionName;
}
function getServiceEngingeURL() {
    var url = getProtocol() + '//' + getHost() + '/ServiceEngine/api/json/reply/';
    return url;
}
function getProtocol() {
    var protocol = location.protocol;
    if (protocol == 'http:' || protocol == 'https:') {

    } else {
        protocol = 'http:';
    }
    return protocol;
}
function getHost() {
    if (location.host.indexOf("localhost:1337") > -1) {
        return location.host;
    } else if (location.host.indexOf("localhost") > -1) {
        return 'ir.euroinvestor.com';
    } else {
        return location.host;
    }
}
function getChartDateTimeLabelFormats() {
    switch (clientStyle.formatDate) {
        case "DD-MM-YYYY":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%d-%m-%Y',
                week: '%d-%m-%Y',
                month: '%m-%Y',
                year: '%Y'
            };
            break;
        case "DD/MM/YYYY":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%d/%m/%Y',
                week: '%d/%m/%Y',
                month: '%m/%Y',
                year: '%Y'
            };
            break;
        case "DD.MM.YYYY":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%d.%m.%Y',
                week: '%d.%m.%Y',
                month: '%m.%Y',
                year: '%Y'
            };
            break;
        case "DD MMM YYYY":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%d %b %Y',
                week: '%d %b %Y',
                month: '%b %Y',
                year: '%Y'
            };
            break;
        case "DD-MMM-YYYY":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%d-%b-%Y',
                week: '%d-%b-%Y',
                month: '%b-%Y',
                year: '%Y'
            };
            break;
        case "DD/MMM/YYYY":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%d/%b/%Y',
                week: '%d/%b/%Y',
                month: '%b/%Y',
                year: '%Y'
            };
            break;
        case "DD MMMM YYYY":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%d %B %Y',
                week: '%d %B %Y',
                month: '%B %Y',
                year: '%Y'
            };
            break;
            //case "DD-MMMM-YYYY":
            //    var dateTimeLabelFormats = {
            //        second: '%H:%M:%S',
            //        minute: '%H:%M',
            //        hour: '%H:%M',
            //        day: '%d-%B-%Y',
            //        week: '%d-%B-%Y',
            //        month: '%B-%Y',
            //        year: '%Y'
            //    };
            //    break;
        case "YYYY-MM-DD":
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%Y-%m-%d',
                week: '%Y-%m-%d',
                month: '%Y-%m',
                year: '%Y'
            };
            break;
        default: // YYYY-MM-DD
            var dateTimeLabelFormats = {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%Y-%m-%d',
                week: '%Y-%m-%d',
                month: '%Y-%m',
                year: '%Y'
            };
            debugError("getChartDateTimeLabelFormats() is missing support for dateFormat for clientStyle.formatDate (" + clientStyle.formatDate + ")");
            break;
    }
    return dateTimeLabelFormats;
}
function getOHLCfromTranslations(getWhat) {
    var ohlcChars = translations.t_ohlc.split('');

    var localVolumeTranslation = "V";

    //
    //  The translation from London Translations is different on Hebrew.
    //  translations.t_ohlc = 'Chart O-H-L-C'
    //
    if (globalActiveLanguage == "he" && translations.t_ohlc != 'OHLC') {

        ohlcChars = translations.t_ohlc.split(' ');
        ohlcChars = ohlcChars[1].split('-');
    }

    if (clientStyle.chart_CustomTooltipUseFullOHLCV) {
        ohlcChars[0] = translations.t_open;
        ohlcChars[1] = translations.t_high;
        ohlcChars[2] = translations.t_low;
        ohlcChars[3] = translations.t_close;
        localVolumeTranslation = translations.t_volume;
    }

    switch (getWhat) {
        case "o":
            return ohlcChars[0];
            break;
        case "h":
            return ohlcChars[1];
            break;
        case "l":
            return ohlcChars[2];
            break;
        case "c":
            return ohlcChars[3];
        case "v":
            return localVolumeTranslation;
            break;
    }
}
function setChartExtremes(thisTarget, mode, period) {
    debugStep("setChartExtremes(" + mode + "," + period + ")");

    switch (mode) {
        case chartDisplayModes.historical:
            var length = globalChartListingStockDataDates[globalActiveListingIndex].length - 1;
            var lastEntryUnixDate = globalChartListingStockDataDates[globalActiveListingIndex][length];
            var firstEntryUnix = globalChartListingStockDataDates[globalActiveListingIndex][0];
            var firstDate = moment.utc(firstEntryUnix);
            var fromDate = moment.utc(lastEntryUnixDate);
            var toDate = moment.utc(lastEntryUnixDate);
            if (period == 9999) {
                $(thisTarget).highcharts().xAxis[0].setExtremes(
                    Date.UTC(firstDate.year(), firstDate.month(), firstDate.date(), firstDate.hour(), firstDate.minute()),
                    Date.UTC(toDate.year(), toDate.month(), toDate.date(), toDate.hour(), toDate.minute())
                );
            } else {
                fromDate.add('days', -period);
                $(thisTarget).highcharts().xAxis[0].setExtremes(
                    Date.UTC(fromDate.year(), fromDate.month(), fromDate.date(), fromDate.hour(), fromDate.minute()),
                    Date.UTC(toDate.year(), toDate.month(), toDate.date(), toDate.hour(), toDate.minute())
                );
            }
            break;
    }
}
function translateMonthShort(monthIn) {

    var monthOut = monthIn;

    switch (monthIn) {
        case "Jan":
            monthOut = translations.t_jan_short;
            break;
        case "Feb":
            monthOut = translations.t_feb_short;
            break;
        case "Mar":
            monthOut = translations.t_mar_short;
            break;
        case "Apr":
            monthOut = translations.t_apr_short;
            break;
        case "May":
            monthOut = translations.t_may_short;
            break;
        case "Jun":
            monthOut = translations.t_jun_short;
            break;
        case "Jul":
            monthOut = translations.t_jul_short;
            break;
        case "Aug":
            monthOut = translations.t_aug_short;
            break;
        case "Sep":
            monthOut = translations.t_sep_short;
            break;
        case "Oct":
            monthOut = translations.t_oct_short;
            break;
        case "Nov":
            monthOut = translations.t_nov_short;
            break;
        case "Dec":
            monthOut = translations.t_dec_short;
            break;
    }

    if (globalActiveLanguage != 'ar' && globalActiveLanguage != 'he') {
        monthOut = monthOut.capitalizeFirstLetter();
    }

    return monthOut;
}
function formatLocal(number) {
    return formatNumberWithLocalDelimiters(number);
}
function formatDecimal(number) {
    try {
        if (typeof (number) == 'number') {
            return number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals).replace('.', clientLocaleParameters.decimalSeparator);
        } else {
            return "-";
        }
    }
    catch (err) {
        return "-";
    }
}
function formatNumberWithLocalDelimiters(number) {
    try {
        if (typeof (number) == 'number') {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000);
        } else {
            return "-";
        }
    }
    catch (err) {
        return "-";
    }
}
function formatDateWithFormat(timestamp, format) {
    var dateWithFormat = new moment.tz(timestamp, globalActiveExchangeTimeZone).add(clientStyle.manualTimeOffset, 'hours').format(format);
    if (format.indexOf('MMMM') > -1) {
        switch (moment(timestamp).format("MMMM")) {
            case 'January':
                dateWithFormat = dateWithFormat.replace('January', translations.t_january.capitalizeFirstLetter());
                break;
            case 'February':
                dateWithFormat = dateWithFormat.replace('February', translations.t_february.capitalizeFirstLetter());
                break;
            case 'March':
                dateWithFormat = dateWithFormat.replace('March', translations.t_march.capitalizeFirstLetter());
                break;
            case 'April':
                dateWithFormat = dateWithFormat.replace('April', translations.t_april.capitalizeFirstLetter());
                break;
            case 'May':
                dateWithFormat = dateWithFormat.replace('May', translations.t_may.capitalizeFirstLetter());
                break;
            case 'June':
                dateWithFormat = dateWithFormat.replace('June', translations.t_june.capitalizeFirstLetter());
                break;
            case 'July':
                dateWithFormat = dateWithFormat.replace('July', translations.t_july.capitalizeFirstLetter());
                break;
            case 'August':
                dateWithFormat = dateWithFormat.replace('August', translations.t_august.capitalizeFirstLetter());
                break;
            case 'September':
                dateWithFormat = dateWithFormat.replace('September', translations.t_september.capitalizeFirstLetter());
                break;
            case 'October':
                dateWithFormat = dateWithFormat.replace('October', translations.t_october.capitalizeFirstLetter());
                break;
            case 'November':
                dateWithFormat = dateWithFormat.replace('November', translations.t_november.capitalizeFirstLetter());
                break;
            case 'December':
                dateWithFormat = dateWithFormat.replace('December', translations.t_december.capitalizeFirstLetter());
                break;
        }

    } else if (format.indexOf('MMM') > -1) {

        switch (moment(timestamp).format("MMM")) {
            case 'Jan':
                dateWithFormat = dateWithFormat.replace('Jan', translations.t_jan_short.capitalizeFirstLetter());
                break;
            case 'Feb':
                dateWithFormat = dateWithFormat.replace('Feb', translations.t_feb_short.capitalizeFirstLetter());
                break;
            case 'Mar':
                dateWithFormat = dateWithFormat.replace('Mar', translations.t_mar_short.capitalizeFirstLetter());
                break;
            case 'Apr':
                dateWithFormat = dateWithFormat.replace('Apr', translations.t_apr_short.capitalizeFirstLetter());
                break;
            case 'May':
                dateWithFormat = dateWithFormat.replace('May', translations.t_may_short.capitalizeFirstLetter());
                break;
            case 'Jun':
                dateWithFormat = dateWithFormat.replace('Jun', translations.t_jun_short.capitalizeFirstLetter());
                break;
            case 'Jul':
                dateWithFormat = dateWithFormat.replace('Jul', translations.t_jul_short.capitalizeFirstLetter());
                break;
            case 'Aug':
                dateWithFormat = dateWithFormat.replace('Aug', translations.t_aug_short.capitalizeFirstLetter());
                break;
            case 'Sep':
                dateWithFormat = dateWithFormat.replace('Sep', translations.t_sep_short.capitalizeFirstLetter());
                break;
            case 'Oct':
                dateWithFormat = dateWithFormat.replace('Oct', translations.t_oct_short.capitalizeFirstLetter());
                break;
            case 'Nov':
                dateWithFormat = dateWithFormat.replace('Nov', translations.t_nov_short.capitalizeFirstLetter());
                break;
            case 'Dec':
                dateWithFormat = dateWithFormat.replace('Dec', translations.t_dec_short.capitalizeFirstLetter());
                break;
        }
    }
    return dateWithFormat;
}
function formatTooltipDate(dateIndex, data) {
    var date = "";
    switch (clientStyle.formatDate) {
        case "DD MMM":
        case "DD MMM YYYY":
            date = new moment(globalChartListingStockDataDates[globalActiveListingIndex][dateIndex]);
            return formatDateWithReplacedDate(date);
            break;
        case "DD-MMM-YYYY":
            date = new moment(globalChartListingStockDataDates[globalActiveListingIndex][dateIndex]);
            return formatDateWithReplacedDate(date).replace(' ', '-');
            break;
        case "DD/MMM/YYYY":
            date = new moment(globalChartListingStockDataDates[globalActiveListingIndex][dateIndex]);
            return formatDateWithReplacedDate(date).replace(' ', '/');
            break;
        case "DD MMMM YYYY":
        case "DD-MMMM-YYYY":
        case "DD/MMMM/YYYY":
            date = new moment(globalChartListingStockDataDates[globalActiveListingIndex][dateIndex]);
            return formatDateWithFormat(date, clientStyle.formatDate);
            break;
        case "DD.MM.YYYY":
        case "DD/MM/YYYY":
        case "DD MM YYYY":
        case "DD-MM-YYYY":
        case "YYYY-MM-DD":
        case "YYYY MM DD":

            // return wihtout replaced day or month strings.
            break;
        default:
            debugError("formatTooltipDate is missing support for dateFormat for clientStyle.formatDate (" + clientStyle.formatDate + ")");
            break;
    }
    try {
        return new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate);
    }
    catch (err) {
        return new moment().format(clientStyle.formatDate);
    }

}
function formatNumberWithLocalDelimiters(number) {
    try {
        if (typeof (number) == 'number') {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000);
        } else {
            return "-";
        }
    }
    catch (err) {
        return "-";
    }
}
Number.prototype.round = function (places) {
    return +(Math.round(this + "e+" + places) + "e-" + places);
}
String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt /*, from*/) {
        var len = this.length >>> 0;
        var from = Number(arguments[1]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0) from += len;

        for (; from < len; from++) {
            if (from in this && this[from] === elt) return from;
        }
        return -1;
    };
}

//
// Check activeModules array
//
if (typeof (activeModules) != "undefined") {
    checkactiveModules(activeModules);
} else {
    debugError("activeModules is not present in tool header");
}
if (typeof (activeFeatures) != "undefined") {
    checkActiveFeatures(activeFeatures);
}
function checkactiveModules(activeModulesArr) {
    debugStep("checkactiveModules");
    for (var i = 0; i < activeModulesArr.length; i++) {
        debugStep("Module [" + activeModulesArr[i] + "] is activated");
        switch (activeModulesArr[i]) {
            case "IRFactsheet":
                IRFactsheetModule = true;
                break;
        }
    }
}
function checkActiveFeatures(activeFeaturesArr) {
    debugStep("checkActiveFeatures");
    for (var i = 0; i < activeFeaturesArr.length; i++) {
        debugStep("Feature [" + activeFeaturesArr[i] + "] is activated");
        switch (activeFeaturesArr[i]) {
            case "ShareData":
                useStockData = true;
                break;
            case "PerformanceChart":
                useClosePriceBundleListingData = true;
                break;
            case "KeyFigures":
                useKeyFigureTransactionData = true;
                break;
        }
    }
}

if (useStockData) {
    loadStockData();
}
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
        traditional: true
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
        url: getServiceEngingeURL() + "RequestStockDataBundle",
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
function loadClosePriceBundleListingData() {
    debugStep("loadClosePriceBundleListingData");

    var request = {
        apiVersion: clientApiVersion,
        lcid: clientLCID,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        numberOfYears: 1,
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
function loadKeyFigureTransactionData() {
    debugStep("loadKeyFigureTransactionData");
    var postRequest = {
        apiversion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        instrumentID: globalRawStockData.instrumentID
    };
    requestKeyFigureTransactionData = $.ajax({
        url: getServiceEngingeURL() + "RequestKeyFigureTransactionData",
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

//
// Handlebars
//
function checkIRFactsheetTranslations(str) {
    if (globalActiveLanguage != "en") {

        if (typeof (factsheetTranslations) != "undefined") {
            $.each(factsheetTranslations, function () {
                if (this[0].toString() == str) {
                    str = this[1];
                }
            });
        }
    } else {

    }
    return str;
}
Handlebars.registerHelper('includeFactsheetAboutHeader', function (aboutStr) {
    return '<h2>' + checkIRFactsheetTranslations(aboutStr) + '</h2>';
});
Handlebars.registerHelper('includeFactsheetAboutSection', function (aboutStr) {
    return '<p>' + checkIRFactsheetTranslations(aboutStr) + '</p>';
});
Handlebars.registerHelper('includeFactsheetChart', function (type, title, targetTable, targetRow, height) {
    var ret = '<h2>' + checkIRFactsheetTranslations(title) + '</h2>';
    ret += '<div class="IRFactsheetChartPlaceholder IRChartType' + type + '" style="height: ' + height + 'px;"><!--' + targetTable + ';' + targetRow + ';' + height + '--></div>';
    return ret;
});
Handlebars.registerHelper('includeFactsheetSharePriceChartPlaceholder', function (title, height) {
    var ret = '<h2>' + checkIRFactsheetTranslations(title) + '</h2>';
    ret += '<div class="IRFactsheetSharePriceChartPlaceholder" style="height: ' + height + ';">IRFactsheetSharePriceChartPlaceholder</div>';
    return ret;
});
Handlebars.registerHelper('includeFactsheetKeyFigureHighlightH2', function (header) {
    return '<h2>' + checkIRFactsheetTranslations(header) + '</h2>';
});
Handlebars.registerHelper('includeFactsheetKeyFigureHighlightHeaders', function (workSheetName, targetTable, data) {
    var amountOfYearsOrQuarters = 4;
    var ret = "";
    ret += "<table class=\"IRFactsheetKeyFigureHighlightTable\">";
    ret += "<tr>";
    ret += "<th></th>";
    if (data.length > 0) {
        $.each(data, function () {
            if (this.workSheetName == workSheetName && this.tableName == targetTable) {
                var subData = this.columnHeaders.reverse();
                $.each(subData, function () {
                    if (amountOfYearsOrQuarters > 0) {
                        ret += "<th class=\"right\">" + this + "</th>";
                    }
                    amountOfYearsOrQuarters--;
                });
            }
        });
        ret += "</tr>";
    } else {
        ret = "No data available";
    }
    return ret;
});

Handlebars.registerHelper('includeFactsheetDownloadPDF', function () {

    var showThis = true;
    var getParams = "";


    if (location.href.indexOf('?') > -1) {
        var getParamsSplit = location.href.split('?')[1];
        if (getParamsSplit.indexOf('&') > -1) {
            getParams = getParamsSplit.split('&');
        } else {
            getParams = getParamsSplit.split(' ');
        }
        for (var i = 0; i < getParams.length; i++) {
            var key = getParams[i].split('=')[0];
            var value = getParams[i].split('=')[1];
            if (key == "mode" && value == "pdf") {
                showThis = false;
            }
        }
    }
    var ret = "";
    if (showThis) {
        ret += "<div><a href=\"" + getFactsheetPathDownloadPDF() + "\" target=\"_blank\">" + checkIRFactsheetTranslations("Download the Factsheet") + "<div class=\"IRFactsheetDownloadPDFIcon\"></div></a>";
    }
    return ret;
});
function getFactsheetPathDownloadPDF() {
    return "http://ir1.euroinvestor.com/ir/Files/Factsheets/factsheet_" + getCustomerKeyRequired() + '_' + getSolutionID() + "_" + globalActiveLanguage + ".pdf?cachebust=1";
}

Handlebars.registerHelper('includeFactsheetBanner', function (customImgPathRelativeToSolutionFolder) {
    return "<div class=\"IRFactsheetBanner\"><img src=\"http://ir.euroinvestor.com/Solutions/" + getCustomerKeyRequired() + "/" + imgPath + "\" /></div>";
});
Handlebars.registerHelper('includeFactsheetBannerOnlyPDF', function (customImgPathRelativeToSolutionFolder) {

    var showThis = false;
    var getParams = "";


    if (location.href.indexOf('?') > -1) {
        var getParamsSplit = location.href.split('?')[1];
        if (getParamsSplit.indexOf('&') > -1) {
            getParams = getParamsSplit.split('&');
        } else {
            getParams = getParamsSplit.split(' ');
        }
        for (var i = 0; i < getParams.length; i++) {
            var key = getParams[i].split('=')[0];
            var value = getParams[i].split('=')[1];
            if (key == "mode" && value == "pdf") {
                showThis = true;
            }
        }
    }
    var ret = "";
    if (showThis) {

        var imgPath = "factsheet_logo.png";
        if (customImgPathRelativeToSolutionFolder.length > 0) {
            imgPath = customImgPathRelativeToSolutionFolder;
        }

        ret += "<div class=\"IRFactsheetBanner\"><img src=\"http://ir.euroinvestor.com/Solutions/" + getCustomerKeyRequired() + "/" + imgPath + "\" /></div>";
    }
    return ret;
});

Handlebars.registerHelper('includeFactsheetKeyFigureHighlightData', function (workSheetName, targetTable, targetRow, data) {
    var amountOfYearsOrQuarters = 4;
    var ret = "";
    $.each(data, function () {
        if (this.workSheetName == workSheetName && this.tableName == targetTable) {
            $.each(this.rows, function () {
                if (this.rowTitle == targetRow) {
                    ret += "<tr>";
                    ret += "<td class=\"rowHeader\">" + checkIRFactsheetTranslations(this.rowTitle) + "</td>";
                    var subData = this.rowData.reverse();
                    $.each(subData, function () {
                        if (amountOfYearsOrQuarters > 0) {
                            ret += "<td class=\"right " + workSheetName + "\">" + this + "</td>";
                        }
                        amountOfYearsOrQuarters--;
                    });
                    ret += "</tr>";
                }
            });
        }
    });
    return ret;
});
Handlebars.registerHelper('includeFactsheetKeyFigureHighlightSpacer', function (workSheetName, targetTable, targetRow, data) {
    var amountOfYearsOrQuarters = 4;
    var ret = "";
    $.each(data, function () {
        if (this.workSheetName == workSheetName && this.tableName == targetTable) {
            $.each(this.rows, function () {
                if (this.rowTitle == targetRow) {
                    ret += "<tr>";
                    ret += "<td>" + this.rowTitle + "</td>";
                    var subData = this.rowData.reverse();
                    $.each(subData, function () {
                        if (amountOfYearsOrQuarters > 0) {
                            ret += "<td class=\"right " + type + "\">" + this + "</td>";
                        }
                        amountOfYearsOrQuarters--;
                    });
                    ret += "</tr>";
                }
            });
        }
    });
    return ret;
});
Handlebars.registerHelper('includeFactsheetKeyFigureHighlightFooter', function () {
    return "</table>";
});
Handlebars.registerHelper('decimals', function (number) {
    return formatDecimal(number);
});
Handlebars.registerHelper('toLocal', function (number) {
    return formatNumberWithLocalDelimiters(number);
});
Handlebars.registerHelper('showDateTime', function (timestamp) {
    return formatDateWithFormat(timestamp, clientStyle.formatDateTime);
});
//
function debugStep(msg) {
    if (debug) {
        console.log('%c' + msg, 'color: #ccc');
    }
}
