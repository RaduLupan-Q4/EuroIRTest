var sep1000 = ',';
var globalName = "";
var globalSubtitle = "";
var globalMark = "";
var globalColors = ['#c5da00', '#0f3e49', '#ffb403', '#7c1839', '#892da0', '#6e78dc', '#ff90a3', '#feec30', '#9ba08c', '#a0c8f0', '#9ba08c', '#892da0'];
var chart = null;
var requestConsensusData = null;
var consensusData = null;
var analArr = [{company: "ABG Sundal Collier", analyst: "Michael Vitfell-Rasmussen", country: "Denmark" },
{company: "Alm. Brand Markets", analyst: "Michael Friis Jørgensen", country: "Denmark" },
{company: "Berenberg", analyst: "Sebastian Bray", country: "United Kingdom" },
{company: "Bernstein", analyst: "Günther Zechmann", country: "United Kingdom" },
{company: "BoA Merrill Lynch", analyst: "Faisal AlAzmeh", country: "United Arab Emirates" },
{company: "Carnegie", analyst: "Lars Topholm", country: "Denmark" },
{company: "Citigroup", analyst: "Andrew Benson", country: "United Kingdom" },
{company: "Credit Suisse", analyst: "Mathew Waugh", country: "United Kingdom" },
{company: "Danske Markets", analyst: "Tobias Cornelius Björklund", country: "Denmark" },
{company: "Deutsche Bank", analyst: "Virginie Boucher-Ferte", country: "United Kingdom" },
{company: "DNB", analyst: "Rune Majlund Dahl", country: "United Kingdom" },
{company: "Goldman Sachs", analyst: "Fulvio Cazzol", country: "United Kingdom" },
{company: "Handelsbanken", analyst: "Annette Lykke", country: "Denmark" },
{company: "Investec", analyst: "Ian Hunter", country: "Denmark" },
{company: "Jefferies International", analyst: "Laurence Alexander", country: "Denmark" },
{company: "JPMorgan", analyst: "Silke Kueck-Valdes", country: "United States" },
{company: "Jyske Markets", analyst: "Frank Hørning Andersen", country: "Denmark" },
{company: "Kempen & Co", analyst: "(analyst changeover)", country: "Netherlands" },
{company: "Kepler Cheuvreux", analyst: "(analyst changeover)", country: "Sweden" },
{company: "Nordea", analyst: "Hans Gregersen", country: "Denmark" },
{company: "Nykredit Bank", analyst: "Klaus Kehl", country: "Denmark" },
{company: "Redburn", analyst: "Ian Wood", country: "United Kingdom" },
{company: "SEB", analyst: "Søren Samsøe", country: "Denmark" },
{company: "Sydbank", analyst: "Morten Imsgard", country: "Denmark" },
{company: "UBS", analyst: "(analyst changeover)", country: "United Kingdom" }

 ];
$(function () {
    loadConsensusData();
    initChart();
    $.when(requestConsensusData).then(function (res) {
        consensusData = res.tables;
        $('.deep-graph').hide();
        generateTableHeader("Consensus", "Median / Actual (DKKm)");
        generateTableRows("Consensus", "Median / Actual (DKKm)");
    });
    tableAnalyst();
    
    $(document).on('click', 'td.Data.data.click', function () {
        var sek = $(this).data('col');
        var val = getColumns("Consensus", "Median / Actual (DKKm)")[sek];

        generateYearTableHeader("Consensusadd.", val + ' (DKKm)');
        generateYearTableRows("Consensusadd.", val + ' (DKKm)');
        $('.resetTable').show();
    });

    $('.resetTable').on('click', function () {
        generateTableHeader("Consensus", "Median / Actual (DKKm)");
        generateTableRows("Consensus", "Median / Actual (DKKm)");
        $('.resetTable').hide();
        $('.deep-graph').hide();
    });
    
    $('.back-button').on('click', function () {
        $('.contributors-info').hide();
        $(".consensus-table, .title, .contributors").show();
    });

    $(document).on('click', 'td.Data.chart', function () {
        var vv = $(this).data('ttl');
        generateTableForChartViewHead("Consensus", vv);
        generateTableForChartViewRows("Consensusadd.", vv);
        $('.resetTable').show();
    });

    $(document).on('click', 'td.Data.chartDeep', function () {
        var bb = $(this).data('dd').split(',');
        var nn = $(this).data('ttl');
        var tname = $('.consensus-table thead th').first().text();
        bb = reorderChartDd(bb);
        $('.deep-graph').show();
        if(chart.series.length > 0) chart.series[0].remove();
        if (tname.indexOf('%)') === -1)
            $('.chart-title').text(tname + ' (DKKm, '+nn+')');
        else
            $('.chart-title').text(tname.replace(')', ', '+nn+')'));

        // chart.xAxis[0].update({categories: getColumns("Consensus", "Median / Actual (DKKm)")});
        chart.addSeries({data:bb})
    });

    $('.contributors li').on('click', function () {
        $('.top-line, .deep-graph, .title, .consensus-table, .contributors').hide();
        $('.contributors-info').show();
    });
});

function formatNumberThousands(nb, dec) {
    if (typeof nb === 'number' || (/^-?\d+\.?\d*$/).test(nb)) {
        nb = parseFloat(nb);
        var sp = nb.toString().split('.');
        sp[0] = sp[0].replace(/\B(?=(\d{3})+(?!\d))/g, sep1000);
        if (typeof sp[1] === 'undefined') return sp[0];
        else return sp[0] + '.' + sp[1];
    } else {
        return nb;
    }
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

function getServiceEngingeURL() {
    return getProtocol() + '//' + getHost() + '/ServiceEngine/api/json/reply/';
}

function loadConsensusData() {
    requestConsensusData = $.ajax({
        url: getServiceEngingeURL() + '/RequestKeyFigureTransactionData?apiversion=1&solutionID=3454&customerKey=novozymes&instrumentID=1002175',
        type: 'GET',
        traditional: true
    })
}

function getTableData(workSheetName, tabName) {
    var temp = [];
    for (var i = 0; i < consensusData.length; i++) {
        if (consensusData[i].workSheetName === workSheetName && consensusData[i].tableName === tabName) {
            var dItem = consensusData[i].rows;
            for (var j = 0; j < dItem.length; j++) {
                var tt = [];
                for (var t = 0; t < dItem[j].rowData.length; t++) {
                    tt.push(Number(dItem[j].rowData[t].replace(',', '.')));
                }
                temp.push({name: dItem[j].rowTitle, data: tt})
            }
            break;
        }
    }
    return temp;
}

function getColumns(worksheetName, tabName) {
    for (var i = 0; i < consensusData.length; i++) {
        if (worksheetName === consensusData[i].workSheetName && consensusData[i].tableName === tabName) {
            return consensusData[i].columnHeaders;
        }
    }
    return []
}

function generateTableHeader(worksheetName, tName) {
    var hh = getColumns(worksheetName, tName);
    var tHead = $('.consensus-table thead tr');
    tHead.html('');
    tHead.append('<th class="name">' + tName + '</th>');
    tHead.append('<th class="chart"></th>');
    for (var i = 0; i < hh.length; i++) {
        tHead.append('<th class="year">' + hh[i] + '</th>');
    }
}

function generateTableRows(worksheetName, tName) {
    var rows = getTableData(worksheetName, tName);
    var tBody = $('.consensus-table tbody');
    tBody.html('');
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].name !== "- Growth rate (%)") {
            var str = '<tr>';
            str += '<td class="Data name">' + rows[i].name + '</td>';
            str += '<td class="Data chart" data-ttl="' + rows[i].name + '" ><div class="graph"><div class="grMain grLeft"></div><div class="grMain grMid"></div><div class="grMain grRight"></div></div></td>';
            for (var j = 0; j < rows[i].data.length; j++) {
                str += '<td class="Data data click" data-col="' + j + '">' + formatNumberThousands(rows[i].data[j], 1) + '</td>';
            }
            str += '</tr>';
            tBody.append(str);
        }
    }
}

function generateYearTableHeader(worksheetName, tName) {
    var hh = getColumns(worksheetName, tName);
    var tHead = $('.consensus-table thead tr');
    tHead.html('');
    tHead.append('<th class="name">' + tName + '</th>');
    tHead.append('<th class="chart"></th>');
    for (var i = 1; i < hh.length; i++) {
        tHead.append('<th class="year">' + hh[i] + '</th>');
    }
}

function generateYearTableRows(worksheetName, tName) {
    var rows = getTableData(worksheetName, tName);
    var tBody = $('.consensus-table tbody');
    tBody.html('');
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].name !== "- Growth rate (%)") {
            var str = '<tr>';
            str += '<td class="Data name">' + rows[i].name + '</td>';
            str += '<td class="Data chart" data-ttl="' + rows[i].name + '" ><div class="graph"><div class="grMain grLeft"></div><div class="grMain grMid"></div><div class="grMain grRight"></div></div></td>';
            for (var j = 1; j < rows[i].data.length; j++) {
                str += '<td class="Data data" data-col="' + j + '">' + formatNumberThousands(rows[i].data[j], 1) + '</td>';
            }
            str += '</tr>';
            tBody.append(str);
        }
    }
}

function generateTableForChartViewHead(worksheetName, tName){
    var hh = getColumns(worksheetName, "Median / Actual (DKKm)");
    var tHead = $('.consensus-table thead tr');
    tHead.html('');
    tHead.append('<th class="name">' + tName + '</th>');
    tHead.append('<th class="chart"></th>');
    for (var j = 0; j < hh.length; j++) {
        tHead.append('<th class="year">' + hh[j] + '</th>');
    }
}

function getChartData(workSheet, tName){
    var temp = [];

    var pp = getColumns("Consensusadd.", '2016Q4e (DKKm)');
    for (var z = 0; z < pp.length; z++){
        temp.push({name: pp[z], data:[]});
    }
    for(var t = 0; t < temp.length; t++) {
        for (var i = 0; i < consensusData.length; i++) {
            if (consensusData[i].workSheetName === workSheet) {
                var dItem = consensusData[i].rows;
                for (var j = 0; j < dItem.length; j++) {
                    if (dItem[j].rowTitle === tName) {
                        temp[t].data.push(Number(dItem[j].rowData[t].replace(',', '.')));
                        break;
                    }
                }
            }
        }
    }
    return temp;
}

function initChart(){
    chart = Highcharts.chart("chartBoxy", {
        chart: {
            type: 'column',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#eae9e8',
            borderWidth: 1,
            marginTop: 50,
            events:{
                redraw: function () {
                    $('.target-chart-legend').html('');
                }
            }
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        xAxis: {
        },
        yAxis: [{
            id: 'first-axis',
            allowDecimals: false,
            title: {
                text: ''
            },
            lineWidth: 1,
            tickWidth: 1,
            labels: {
                formatter: function () {
                    return formatNumberThousands(this.value, 0);
                }
            },
            min: null,
            tickAmount: 7,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#ebebeb'
            }]

        }],
        tooltip: {
            formatter: function () {
                return '<br/><span style="color:' + this.series.color + '">' + this.x + '</span>: ' + formatNumberThousands(this.y, 2);
            }
        },
        legend: {enabled: false},
        series: []
    });
}

function generateTableForChartViewRows(workSheet, tName) {
    var rows = getChartData(workSheet, tName);
    var tBody = $('.consensus-table tbody');
    tBody.html('');
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].name !== "- Growth rate (%)") {
            var str = '<tr>';
            str += '<td class="Data name">' + rows[i].name + '</td>';
            str += '<td class="Data chartDeep" data-ttl="' + rows[i].name + '" data-dd="'+rows[i].data+'"><div class="graph"><div class="grMain grLeft"></div><div class="grMain grMid"></div><div class="grMain grRight"></div></div></td>';
            for (var j = 0; j < rows[i].data.length; j++) {
                str += '<td class="Data data" data-col="' + j + '" data-val="'+rows[i].data[j]+'">' + formatNumberThousands(rows[i].data[j], 1) + '</td>';
            }
            str += '</tr>';
            tBody.append(str);
        }
    }
    var bb = reorderChartDd(rows[2].data);
    $('.deep-graph').show();
    chart.reflow();
    if (tName.indexOf('%)') === -1)
        $('.chart-title').text(tName + ' (DKKm, Median)');
    else
        $('.chart-title').text(tName.replace(')', ', Median)'));
    if(chart.series.length > 0) chart.series[0].remove();
    chart.xAxis[0].update({categories: getColumns("Consensus", "Median / Actual (DKKm)")});
    chart.addSeries({data:bb});
}

function reorderChartDd(data) {
    var hh = getColumns("Consensus", "Median / Actual (DKKm)");
    var temp = [];
    for(var i = 0; i < data.length; i++){
        temp.push({y: Number(data[i]), color: globalColors[i], name: hh[i]})
    }
    return temp;
}

function tableAnalyst(){
    for(var i = 0; i < analArr.length; i++){
        $('.contributors-info table tbody').append('<tr><td class="Data company">'+analArr[i].company+'</td><td class="Data analyst">'+analArr[i].analyst+'</td><td class="Data country">'+analArr[i].country+'</td></tr>')
    } 
}