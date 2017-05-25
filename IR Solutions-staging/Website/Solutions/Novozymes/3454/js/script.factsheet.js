var clientLCID = 2057;
var clientApiVersion = 1;
var clientSolutionID = 3454;
var clientCustomerKeyRequired = 'novozymes';
var sep1000 = ',';
var totalNumberOfYears = 5;

// data requests
var requestStockData = null;
var requestFactsheetData = null;
var requestTranslationsData = null;
var requestC20Data = null;
var requestClosePriceData = null;
// object variables
var chart = null;
var globalColors = ['#c5da00', '#0f3e49', '#ffb403', '#7c1839', '#892da0', '#6e78dc', '#ff90a3'];
var translations = {};
var globalRawStockData = {};
var globalRawFactsheetData = {};
// handlebar 
var template_IRFactsheet = null;

var factsheetTranslations = {
    "Key Figures (DKK million)": "Nøgletal (mio. kr.)",
    "Revenue": "Omsætning",
    "EBITDA": "Resultat af primær drift før af-/nedskrivninger",
    "Operating profit / EBIT": "Resultat af primær drift (EBIT)",
    "Net profit": "Periodens resultat",
    "Total assets": "Aktiver",
    "Net interest-bearing debt": "Rentebærende gæld, netto",
    "Equity attributable to shareholders in Novozymes A/S": "Egenkapital aktionærer i NZ A/S",
    "Cash Flow from operating activities": "Pengestrømme fra driftsaktivitet",
    "Net investments excluding acquisitions": "Nettoinvesteringer før opkøbsaktivitet",
    "Free cash flow before net acquisitions and securities": "Frie pengestrømme før opkøb og værdipapirer",
    "Free cash flow": "Frie pengestrømme efter opkøb",
    "Earnings per share (EPS), diluted": "Resultat pr. aktie a 2 kr.(udvandet)",
    "(%)": "Nøgletal (%)",
    "Revenue growth, DKK": "Omsætningsvækst, danske kroner",
    "Revenue growth, organic": "Omsætningsvækst, organisk",
    "Gross margin": "Bruttomargin",
    "EBITDA margin": "Overskudsgrad (EBITDA)",
    "EBIT margin": "Overskudsgrad",
    "Effective tax rate": "Effektiv skatteprocent",
    "Equity ratio": "Egenkapitalandel",
    "Debt-to-equity ratio": "Gæld/egenkapitalandel",
    "Return on equity": "Egenkapitalens forrentning",
    "ROIC including goodwill": "Afkast af investeret kapital (inkl. goodwill)",
    "Share information": "Aktieinformation",
    "Shares (A + B Shares) million": "Antal aktier (A + B aktier), mio.",
    "Nominal unit size, DKK": "Nominelt stykstørrelse",
    "Common stock, DKK million": "Aktiekapital, mio. kr.",
    "Treasury shares, million": "Antal egne aktier, mio.",
    "Stock options outstanding, million": "Antal udestående aktier i optionsprogrammer, mio",
    "Dividend per share**, DKK": "Udbytte pr. aktie**, DKK",
    "Payout ratio of net profit**": "Udbytteandel af årets resultat**",
    "Share price at year-end, DKK": "Aktiepris ultimo",
    "Book value per share, DKK": "Indre værdi pr. aktie, danske kroner",
    "*The Novozymes stock was split 1:5 from year 2011.": "*Der blev foretaget aktiesplit 1:5 fra 2011.",
    "**2016: Proposed.": "**2016: Foreslåede.",
    "EBIT": "Resultat af primær drift",
    "Household Care": "Vaskemidler",
    "Food & Beverages": "Føde- og drikkevarer",
    "Bioenergy": "Bioenergi",
    "Agriculture & Feed": "Landbrug og foder",
    "Technical & Pharma": "Tekniske og farma",
    "North America": "Nordamerika",
    "Europe, Middle East & Africa": "Europa, Mellemøsten & Afrika",
    "Asia Pacific": "Asien & Oceanien",
    "Latin America": "Latinamerika",
    "Sales by industry": "Salgets fordeling",
    "Sales by geography": "Geografisk fordeling af salget"
};

// $(function () {
document.addEventListener("DOMContentLoaded", function(){
    checkLanguage();

    function getChartData(name, currentNode) {
        var i,
            currentChild,
            result;

        if (name === currentNode.name) {
            return currentNode;
        } else {
            if (typeof currentNode.data !== 'undefined') {

                for (i = 0; i < currentNode.data.length; i += 1) {
                    currentChild = currentNode.data[i];
                    result = getChartData(name, currentChild);
                    if (result !== false) {
                        return result;
                    }
                }
            }
            if (typeof currentNode.group !== 'undefined') {
                for (var g = 0; g < currentNode.group.length; g++) {
                    for (i = 0; i < currentNode.group[g].data.length; i += 1) {
                        currentChild = currentNode.group[g].data[i];
                        result = getChartData(name, currentChild);
                        if (result !== false) {
                            return result;
                        }
                    }
                }
            }
            return false;
        }
    }

    loadTranslationsData();
    loadStockData();
    $.when(requestTranslationsData, requestStockData).done(function (translationsData, stockData) {
        translations = translationsData[0].data;
        globalRawStockData = stockData[0].data[0];

        loadFactsheetData();
        $.when(requestFactsheetData).done(function (factsheetData) {
            globalRawFactsheetData = factsheetData.tables.filter(function (item) {
                return item.workSheetName === "Factsheet" || item.workSheetName === "Keyfigures";
            });
            var o = {
                headers: translations,
                data: {
                    stock: preorderStockData(globalRawStockData),
                    factsheet: globalRawFactsheetData
                }
            };
            initHandlebars(o);

            loadC20Data();
            loadClosePriceData();
            $.when(requestC20Data, requestClosePriceData).done(function (c20Data, closePriceData) {
                generateMainChart();
                calculateData(closePriceData[0].data[0].data, c20Data[0].data[0].data)
            });

            buildMiniChartsColumn();
            buildMiniChartsPie();
        });
    });
});

function checkLanguage() {
    if (getUrlParam('language') === 'da') clientLCID = 1030;
    else clientLCID = 2057;
}

function loadTranslationsData() {
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
        traditional: true
    });
}

function loadFactsheetData() {
    var postRequest = {
        apiversion: clientApiVersion,
        solutionID: clientSolutionID,
        instrumentID: globalRawStockData.instrumentID,
        customerKey: clientCustomerKeyRequired
    };
    requestFactsheetData = $.ajax({
        url: getServiceEngingeURL() + "RequestKeyFigureTransactionData",
        type: 'GET',
        data: postRequest,
        traditional: true
    });


}

function loadClosePriceData() {
    var postRequest = {
        lcid: clientLCID,
        apiversion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        numberOfYears: 10,
        instrumentTypes: ['Listing']
    };
    requestClosePriceData = $.ajax({
        url: getServiceEngingeURL() + "RequestClosePriceBundle_OHLC",
        type: 'GET',
        data: postRequest,
        traditional: true
    });
}

function loadC20Data() {
    var postRequest = {
        lcid: clientLCID,
        apiversion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired,
        numberOfYears: 10,
        instrumentTypes: ['Index', 'Peer']
    };
    requestC20Data = $.ajax({
        url: getServiceEngingeURL() + "RequestClosePriceBundle_C",
        type: 'GET',
        data: postRequest,
        traditional: true
    });
}

function preorderStockData(data) {
    var tmp = {};
    var date = new Date(data.timestamp);
    tmp.shareDate = date.getDate() + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();
    tmp.previousClose = formatNumberThousands(data.prevClose, 2);
    tmp.change = formatNumberThousands(data.changePercent, 2);
    tmp.volume = formatNumberThousands(data.volume, 0);
    tmp.numbShares = formatNumberThousands(data.shareMillions * 1000000, 0);
    tmp.marketCap = formatNumberThousands(data.marketCap / 1000000, 2)
    return tmp;
}

function getUrlParam(key) {
    var results = new RegExp('[\?&]' + key + '=([^&#]*)').exec(window.location.href);
    try {
        return results[1];
    }
    catch (err) {
        return 0;
    }
}

function getServiceEngingeURL() {
    return getProtocol() + '//' + getHost() + '/ServiceEngine/api/json/reply/';
}

function getProtocol() {
    var protocol = location.protocol;
    if (protocol === 'http:' || protocol === 'https:') {

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

function initHandlebars(data) {
    if (typeof ($('.IRfactsheetModule').html()) !== "undefined" && typeof ($('#IRFactsheetTemplate').html()) !== "undefined") {
        template_IRFactsheet = Handlebars.compile($('#IRFactsheetTemplate').html());
        $(".IRfactsheetModule").html(template_IRFactsheet(data));
    }
}

function formatNumberThousands(nb, dec) {
    if (typeof nb === 'number' || (/^-?\d+\.?\d*$/).test(nb)) {
        nb = parseFloat(nb);

        nb = (+(Math.round(nb + "e" + dec) + "e-" + dec)).toFixed(dec);
        var sp = nb.toString().split('.');
        sp[0] = sp[0].replace(/\B(?=(\d{3})+(?!\d))/g, sep1000);
        if (typeof sp[1] === 'undefined' && dec === 0) return sp[0];
        else return sp[0] + '.' + sp[1];
    } else {
        return nb;
    }
}

function checkFactsheetTranslations(str) {
    if (typeof (factsheetTranslations) !== "undefined" && getUrlParam('language') === 'da') {
        if (typeof factsheetTranslations[str] !== "undefined") str = factsheetTranslations[str];
    }
    return str;
}

// Main functions

function generateMainChart() {
    chart = Highcharts.stockChart("chartView", {
        chart: {
            type: 'column',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            color: globalColors,
            marginTop: 20
        },
        credits: {enabled: false},
        scrollbar: {enabled: false},
        rangeSelector: {
            enabled: false
        },
        title: {
            text: ''
        },
        navigator: {enabled: false},
        xAxis: {
            type: 'datetime',
            units: [[
                'month',
                [1]
            ]],
            dateTimeLabelFormats: {
                month: '%b'
            }
        },
        yAxis: [{
            id: 'first-axis',
            allowDecimals: false,
            opposite: false,
            tickAmount: 7,
            title: {
                text: '%',
                align: 'high',
                offset: 25,
                rotation: 0,
                y: -10
            },
            labels: {
                formatter: function () {
                    return formatNumberThousands(this.value, 0);
                }
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        }, {
            id: 'second-axis',
            allowDecimals: false,
            opposite: true,
            tickAmount: 7,
            title: {
                text: translations.t_volume + ' x 10,000',
                align: 'high',
                offset: -65,
                rotation: 0,
                y: -10
            },
            labels: {
                formatter: function () {
                    return formatNumberThousands(this.value / 10000, 0);
                }
            },
            plotLines: [{
                value: 0,
                width:1,
                color: '#808080'
            }]

        }],
        tooltip: {
            useHTML: true,
            shared: true,
            formatter: function () {
                var date = new Date(this.x);
                var str = '<div><b>' + ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + '</b></div>';
                var list = this.points;
                for (var i = list.length - 1; i >= 0; i--) {
                    if (list[i].series.name === 'Volume')
                        str += '<div style="color: ' + list[i].color + '"><b>' + translations.t_volume + ': </b>' + formatNumberThousands(list[i].y, 0) + '</div>';
                    else
                        str += '<div style="color: ' + list[i].color + '"><b>' + list[i].series.name + ': </b>' + formatNumberThousands(list[i].y, 0) + ' DKK ' + formatNumberThousands(list[i].point.change, 2) + '%</div>'
                }
                return str;
            }
        },
        series: [],
        legend: {
            enabled: false,
            layout: 'horizontal',
            borderWidth: 0,
            useHTML: true,
            squareSymbol: false,
            symbolWidth: 16,
            symbolHeight: 11,
            symbolRadius: 3,
            floating: true
        },
        plotOptions: {
            line: {
                connectNulls: true,
                marker: {enabled: false}
            },
            series: {
                events: {
                    afterAnimate: function () {
                        var el = '.chartBox';
                        if (this.name !== 'Volume') $(el).prepend('<div class="legendMiniItem"><span class="legendMiniSymbol" style="background-color: ' + this.color + '"></span>' + this.name + '</div>');
                    }
                }
            }
        }
    });
}

function calculateData(pd, cd) {
    var fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 90);
    fromDate = fromDate.getTime();
    var volumeData = formatDataValues(pd, 'volume', fromDate);
    var priceData = formatDataValues(pd, 'closePrice', fromDate);
    var omxData = formatDataValues(cd, 'closePrice', fromDate);

    chart.addSeries({
        data: volumeData,
        type: 'column',
        yAxis: 'second-axis',
        name: 'Volume',
        sym: '',
        color: '#6e78dc'
    }, false);
    chart.addSeries({
        data: omxData,
        type: 'line',
        yAxis: 'first-axis',
        name: 'OMX C20',
        sym: '%',
        color: '#2f102c'
    }, false);
    chart.addSeries({
        data: priceData,
        type: 'line',
        yAxis: 'first-axis',
        name: 'NZYM B',
        sym: '%',
        color: '#cac70e'
    }, false);
    chart.yAxis[0].setCompare('percent');
    chart.redraw();
}

function formatDataValues(dd, item, date) {
    var temp = [];
    for (var i = 0; i < dd.length; i++) {
        if (date <= new Date(dd[i].date).getTime()) temp.push([new Date(dd[i].date).getTime(), dd[i][item]])
    }
    return temp;
}

$.fn.buildChart = function (data, options) {
    var settings = $.extend({
        name: ''
    }, options);
    var el = this;
    var id = this.attr('id');
    var axis = [{
        id: 'first-axis',
        lineWidth: 1,
        allowDecimals: false,
        title: {
            text: translations.t_million,
            align: 'high',
            offset: -15,
            rotation: 0,
            y: -10
        },
        labels: {
            formatter: function () {
                return formatNumberThousands(this.value, 0);
            }
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    }];
    if (data.length > 1) axis.push({
        id: 'second-axis',
        lineWidth: 1,
        allowDecimals: false,
        opposite: true,
        title: {
            text: '%',
            align: 'high',
            offset: 20,
            rotation: 0,
            y: -10
        },
        tickAmount: 5,
        gridLineWidth: 0,
        labels: {
            formatter: function () {
                return formatNumberThousands(this.value, 0);
            }
        },

        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    });
    Highcharts.chart(id, {
        colors: globalColors,
        chart: {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            height: 300,
            events: {
                load: function () {
                    $(el).prepend('<div class="chartTitle">' + settings.name + '</div>')
                }
            },
            marginTop: 30
        },
        credits: {
            enabled: false
        },
        title: {
            text: '',
            useHTML: true,
            style: {"font-size": "15px"},
            // floating: true
        },
        xAxis: {
            categories: []
        },
        yAxis: axis,
        series: data,
        plotOptions: {
            line: {
                tooltip: {
                    useHTML: true,
                    headerFormat: '<div>{point.x}: </div>',
                    pointFormatter: function () {
                        return '<div><b>' + formatNumberThousands(this.y, 0) + ' %</b></div>';
                    }
                },
                connectNulls: true,
                events: {
                    afterAnimate: function () {
                        buildLegendColumnLine(this)
                    }
                }
            },
            column: {
                dataLabels: {
                    align: 'center',
                    enabled: true,
                    crop: false,
                    overflow: 'none',
                    formatter: function () {
                        return formatNumberThousands(this.y, 0);
                    }
                },
                tooltip: {
                    useHTML: true,
                    headerFormat: '<div>{point.x}: </div>',
                    pointFormatter: function () {
                        return '<div><b>' + formatNumberThousands(this.y, 0) + ' M DKK</b></div>';
                    }
                },
                events: {
                    afterAnimate: function () {
                        buildLegendColumnLine(this)
                    }
                }
            },
            pie: {
                showInLegend: true,
                dataLabels: false,
                minSize: 100,
                tooltip: {
                    useHTML: true,
                    headerFormat: '',
                    pointFormatter: function () {
                        if (this.index === this.series.data.length - 1) {
                            var p = 0;
                            for (var i = 0; i < this.series.data.length; i++) {
                                p += Number(formatNumberThousands(this.series.data[i].percentage, 0));
                            }
                            if (p !== 100) this.percentage = Number(formatNumberThousands(this.percentage, 0)) - (p - 100);
                        }
                        return '<div>'+ checkFactsheetTranslations(this.name) +': </div><div><b>' + formatNumberThousands(this.percentage, 0) + ' %</b></div>';
                    },
                    valueDecimals: 0
                },
                events: {
                    afterAnimate: function () {
                        buildLegendPie(this.data)
                    }
                }
            },
            series: {}
        }

    });
    function buildLegendPie(d) {
        var str = '<ul class="legendMiniBox">';
        var p = 0;
        for (var i = 0; i < d.length; i++) {
            p += Number(formatNumberThousands(d[i].percentage, 0));
            if (i === (d.length - 1) && p !== 100) d[i].percentage = Number(formatNumberThousands(d[i].percentage, 0)) - (p - 100);
            str += '<li><span class="legendMiniSymbol" style="background-color: ' + d[i].color + '"></span>' + formatNumberThousands(d[i].percentage, 0) + ' % ' + checkFactsheetTranslations(d[i].name) + '</li>';
        }
        str += '</ul>';
        $(el).append(str)
    }

    function buildLegendColumnLine(d) {
        if ($(el).find('.legendMiniItem').length > 0) {
            $('<div class="legendMiniItem"><span class="legendMiniSymbol" style="background-color: ' + d.color + '"></span>' + checkFactsheetTranslations(d.name) + '</div>').insertAfter($(el).find('.legendMiniItem').last())
        } else {
            $('<div class="legendMiniItem"><span class="legendMiniSymbol" style="background-color: ' + d.color + '"></span>' + checkFactsheetTranslations(d.name) + '</div>').insertAfter($(el).find('.chartTitle'))
        }
    }

};

function buildMiniChartsColumn() {
    var cat = getDataCategories(globalRawFactsheetData, 'Revenue', 'Factsheet');
    var dr = reorderChartDataColumnLine(getDataValues(globalRawFactsheetData, 'Factsheet', 'Revenue', 'Revenue'), cat);
    $('#revenueChart').buildChart([{
        data: dr,
        type: 'column',
        name: checkFactsheetTranslations('Revenue')
    }], {name: checkFactsheetTranslations('Revenue')});

    var de = reorderChartDataColumnLine(getDataValues(globalRawFactsheetData, 'Factsheet', 'Revenue', 'Operating profit / EBIT'), cat);
    var dem = reorderChartDataColumnLine(getDataValues(globalRawFactsheetData, 'Factsheet', '(%)', 'EBIT margin'), cat);
    $('#ebitChart').buildChart([{data: de, type: 'column', name: checkFactsheetTranslations('EBIT')}, {
        data: dem,
        type: 'line',
        name: checkFactsheetTranslations('EBIT margin'),
        yAxis: 'second-axis'
    }], {name: checkFactsheetTranslations('EBIT')});
}

function reorderChartDataColumnLine(data, cat) {
    var dd = [];
    for (var i = 0; i < data.length; i++) {
        dd.push({name: '', y: data[i], x: cat[i]})
    }
    return dd;
}

function buildMiniChartsPie() {
    var cats = getDataCategories(globalRawFactsheetData, 'Income Statement, MDKK', 'Keyfigures');

    var di = getDataValuesKeyfigures(globalRawFactsheetData, 'Keyfigures', 'Revenue by industry, MDKK', ['Total Sales']);
    di = orderPieDec(di);
    $('#salesIndustryChart').buildChart([{
        data: di,
        type: 'pie'
    }], {name: (getUrlParam('language') === 'da' ? '' : cats[cats.length - 1]) + ' ' + checkFactsheetTranslations('Sales by industry') + ' ' + (getUrlParam('language') === 'da' ? cats[cats.length - 1] : ''), type: 'pie'});

    var dg = getDataValuesKeyfigures(globalRawFactsheetData, 'Keyfigures', 'Revenue by geographical area, MDKK', []);
    var id = 0, eu = 0;
    var fd = false, fe = true;
    for (var i = 0; i < dg.length; i++) {
        if (dg[i].name === 'Denmark') {
            id = i;
            fd = true;
        }
        if (dg[i].name === 'Rest of Europe, Middle East & Africa') {
            eu = i;
            fe = true;
        }
    }
    if (fd && fe) {
        dg[eu].y += dg[id].y;
        dg[eu].name = dg[eu].name.replace('Rest of ', '');
        dg.splice(id, 1);
    }
    dg = orderPieDec(dg);
    $('#salesGeographyChart').buildChart([{
        data: dg,
        type: 'pie'
    }], {name: (getUrlParam('language') === 'da' ? '' : cats[cats.length - 1]) + ' ' + checkFactsheetTranslations('Sales by geography') + ' ' + (getUrlParam('language') === 'da' ? cats[cats.length - 1] : '')});
}

function getDataValuesKeyfigures(data, workSheetName, targetTable, exclude) {
    var temp = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].workSheetName === workSheetName && data[i].tableName.toLowerCase() === targetTable.toLowerCase()) {
            for (var j = 0; j < data[i].rows.length; j++) {
                var row = data[i].rows[j];
                if (exclude.indexOf(row.rowTitle) === -1) {
                    var subData = row.rowData.slice(row.rowData.length - 1);
                    // var tempRow = [];
                    for (var k = 0; k < subData.length; k++) {
                        temp.push({name: row.rowTitle, y: parseFloat(subData[k].replace(',','.'))});
                    }
                }
            }
            break
        }
    }
    return temp;
}

function getDataValues(data, workSheetName, targetTable, targetRow) {
    var temp = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].workSheetName === workSheetName && data[i].tableName.toLowerCase() === targetTable.toLowerCase()) {
            for (var j = 0; j < data[i].rows.length; j++) {
                var row = data[i].rows[j];
                if (row.rowTitle.toLowerCase() === targetRow.toLowerCase()) {
                    var subData = row.rowData.slice(row.rowData.length - totalNumberOfYears);
                    for (var k = 0; k < subData.length; k++) {
                        temp.push(parseFloat(subData[k].replace(',','.')));
                    }
                    break
                }
            }
            break
        }
    }
    return temp;
}

function getDataCategories(data, targetTable, workSheetName) {
    var temp = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].workSheetName === workSheetName && data[i].tableName === targetTable) {
            var subData = data[i].columnHeaders.slice(data[i].columnHeaders.length - totalNumberOfYears);
            for (var k = 0; k < subData.length; k++) {
                temp.push(parseFloat(subData[k]));
            }
            break;
        }
    }
    return temp;
}

function getFactsheetPathDownloadPDF() {
    return "http://ir1.euroinvestor.com/ir/Files/Factsheets/factsheet_" + clientCustomerKeyRequired + '_' + clientSolutionID + "_" + 'en' + ".pdf?cachebust=1";
}

function orderPieDec(data){
    var temp = [];
    for(var i = 0; i < data.length; i++){
        var top = 0;
        for(var j = 0; j < data.length; j++){
            top = data[j].y > top && temp.indexOf(data[j].y) === -1 ? data[j].y : top;
        }
        if(temp.indexOf(top) === -1) temp.push(top)
    }
    var ret = [];
    for(var k = 0; k < temp.length; k++){
        for(var l = 0; l < data.length; l++){
            if (temp[k] === data[l].y){
                ret.push(data[l]);
                break;
            }
        }
    }
    return ret;
}
// Handlebar helpers
Handlebars.registerHelper('formatThousandSep', function (number, dec) {
    return formatNumberThousands(number, dec);
});

Handlebars.registerHelper('tableFactsheetRowHeader', function (number, dec) {
    return formatNumberThousands(number, dec);
});

Handlebars.registerHelper('includeFactsheetKeyFigureHighlightHeaders', function (targetTable, data, name) {
    var workSheetName = 'Factsheet';
    if (typeof name !== 'string') name = '';
    var ret = '';
    var subData = getDataCategories(data, targetTable, workSheetName);
    if (subData.length > 0) {
        ret += "<tr>";
        ret += "<th>" + checkFactsheetTranslations(name)+ "</th>";
        for (var k = 0; k < subData.length; k++) {
            ret += "<th class=\"right\">" + subData[k] + "</th>";
        }
        ret += "</tr>";
    }
    return ret;
});

Handlebars.registerHelper('includeTableFactsheetRowData', function (targetTable, targetRow, data, dec, symb) {
    var ret = '';
    var workSheetName = 'Factsheet';
    if (typeof dec !== 'number') dec = 0;
    if (typeof symb !== 'string') symb = '';
    var dataLine = getDataValues(data, workSheetName, targetTable, targetRow);
    if (dataLine.length > 0) {
        ret += "<tr>";
        ret += "<td class=\"rowHeader\">" + checkFactsheetTranslations(targetRow) + "</td>";
        for (var k = 0; k < dataLine.length; k++) {
            ret += "<td class=\"right " + workSheetName + "\">" + formatNumberThousands(dataLine[k], dec) + symb + "</td>";
        }
        ret += "</tr>";
    }
    return ret;
});

Handlebars.registerHelper('includeTableFactsheetRowSeparator', function (text) {
    var ret = '';
    ret += "<tr class=\"boldRow\">";
    ret += "<td>" + checkFactsheetTranslations(text) + "</td>";
    for (var i = 0; i < totalNumberOfYears; i++) {
        ret += "<td class=\"right\"></td>";
    }
    ret += "</tr>";
    return ret;
});

Handlebars.registerHelper('getFactsheetTranslation', function (str) {
    return checkFactsheetTranslations(str);
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
            if (key === "mode" && value === "pdf") {
                showThis = false;
            }
        }
    }
    var ret = "";
    if (showThis) {
        ret += "<a href=\"" + getFactsheetPathDownloadPDF() + "\" target=\"_blank\">" + translations.t_download + " PDF<div class=\"IRFactsheetDownloadPDFIcon\"></div></a>";
    }
    return ret;
});