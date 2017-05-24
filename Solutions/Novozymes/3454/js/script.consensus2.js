var sep1000 = ',';
var globalName = "";
var globalSubtitle = "";
var globalMark = "";
var globalColors = ['#c5da00', '#0f3e49', '#ffb403', '#7c1839', '#892da0', '#6e78dc', '#ff90a3', '#feec30', '#9ba08c', '#a0c8f0', '#9ba08c', '#892da0'];
var chart = null;
var requestConsensusData = null;
var consensusData = null;
var template_IRConsensus = null;
var mainTableData = {};
var mainColumns = [];
$(function () {
    loadConsensusData();
    initChart();
    $.when(requestConsensusData).then(function (res) {
        $('.deep-graph').hide();

        var dd = res.tables.filter(function (item) {
            return (/^Consensus/).test(item.workSheetName);
        });
        consensusData = dd;
        var tableData = dd.filter(function (item) {
            return (/^Consensus$/).test(item.workSheetName);
        });
        mainColumns = dd[0].columnHeaders;
        mainTableData = {
            headers: mainColumns,
            tableName: 'Median / Actual (DKKm)',
            data: tableData
        };
        initHandlebars(mainTableData);
    });
/*
    $(document).on('click', 'td.Data.data.click', function () {
        var val = mainTableData.headers[$(this).data('col')];
        var regVal = new RegExp(val);

        var cont = consensusData.filter(function (item) {
            return regVal.test(item.workSheetName);
        });
        if (cont.length > 0) {
            cont = cont.map(function (elem) {
                var temp = JSON.parse(JSON.stringify(elem));
                for (var i = 0; i < temp.rows.length; i++) {
                    temp.rows[i].rowData.shift();
                }
                return temp;
            });

            var column = cont[0].columnHeaders;
            column.shift();
            var o = {
                headers: column,
                tableName: val,
                data: cont
            };
            initHandlebars(o);
            $('.Data.data').removeClass('click');
            $('.resetTable').show();
        }
    });
*/
    $('.resetTable').on('click', function () {
        $('.lastDate, .deep-graph, .title, .consensus-table, .contributors').show();
        initHandlebars(mainTableData);
        $('.resetTable, .deep-graph, .contributors-info').hide();
    });
/*
    $(document).on('click', 'td.Data.chart', function () {
        var vv = $(this).data('ttl');
        vv = vv.split('&&');

        var cont = consensusData.filter(function (item) {
            return (/^Consensusadd/).test(item.workSheetName) && item.tableName.toLowerCase() === vv[0].toLowerCase();
        });
        var dd = [];
        for (var i = 0; i < mainColumns.length; i++) {
            var regVal = new RegExp(mainColumns[i]);
            for (var j = 0; j < cont.length; j++) {
                if (regVal.test(cont[j].workSheetName)) {
                    for (var l = 0; l < cont[j].rows.length; l++) {
                        if (cont[j].rows[l].rowTitle === vv[1]) {
                            dd.push(cont[j].rows[l].rowData);
                            break;
                        }
                    }
                    break;
                }
            }
        }
        cont = {titles: cont[0].columnHeaders, data: dd};
        var o = {
            headers: mainColumns,
            tableName: vv[1],
            data: cont
        };

        initHandlebarsChartTable(o);
        $('.resetTable').show();
        $('td.Data.chartDeep').first().trigger('click');
    });
*/
    $(document).on('click', 'td.Data.chartDeep', function () {
        var nn = $(this).data('ttl');
        var tname = $('.consensus-table thead th').first().text();
        var per = $(this).parent().find('.Data.data');
        var data = [];
        for(var i = 0; i < per.length; i++){
            data.push($(per[i]).data('val'));
        }
        $('.deep-graph').show();
        if (chart.series.length > 0) chart.series[0].remove();
        if (tname.indexOf('%)') === -1)
            $('.chart-title').text(tname + ' (DKKm, ' + nn + ')');
        else
            $('.chart-title').text(tname.replace(')', ', ' + nn + ')'));

        chart.xAxis[0].update({categories: mainColumns});
        chart.addSeries({data: data})
    });

    $('.contributors li').on('click', function () {
        $('.lastDate, .deep-graph, .title, .consensus-table, .contributors').hide();
        $('.contributors-info').show();
        $('.resetTable').show();
    });
});


function initHandlebars(data) {
    if (typeof ($('.consensus-table').html()) !== "undefined" && typeof ($('#consensus-table-template').html()) !== "undefined") {
        template_IRConsensus = Handlebars.compile($('#consensus-table-template').html());
        $(".consensus-table").html(template_IRConsensus(data));
    }
}
function initHandlebarsChartTable(data) {
    if (typeof ($('.consensus-table').html()) !== "undefined" && typeof ($('#consensus-chart-table-template').html()) !== "undefined") {
        template_IRConsensus = Handlebars.compile($('#consensus-chart-table-template').html());
        $(".consensus-table").html(template_IRConsensus(data));
    }
}
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

function getServiceEngingeURL() {
    return getProtocol() + '//' + getHost() + '/ServiceEngine/api/json/reply/';
}

function loadConsensusData() {
    requestConsensusData = $.ajax({
        url: getServiceEngingeURL() + '/RequestKeyFigureTransactionData?apiversion=1&solutionID=3454&instrumentID=1002175&customerKey=novozymes',
        type: 'GET',
        traditional: true
    })
}

function initChart() {
    chart = Highcharts.chart("chartBoxy", {
        chart: {
            type: 'column',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#eae9e8',
            borderWidth: 1,
            marginTop: 50,
            events: {
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
        xAxis: {},
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

Handlebars.registerHelper('generateHeader', function (data, tName) {
    var str = '';
    str += '<th class="name">' + tName + '</th>';
    str += '<th class="chart"></th>';
    for (var i = 0; i < data.length; i++) {
        str += '<th class="year">' + data[i] + '</th>';
    }
    return str;
});

Handlebars.registerHelper('generateTableRow', function (data, tName, subRow) {
    var str = '';
    for (var i = 0; i < data.length; i++) {
        if (typeof tName === 'string' && tName.toLowerCase() === data[i].tableName.toLowerCase()) {
            for (var j = 0; j < data[i].rows.length; j++) {
                var row = data[i].rows[j];
                if (tName.toLowerCase() === row.rowTitle.toLowerCase() && (typeof subRow !== 'string' || subRow.length === 0)) {
                    str += '<tr>';
                    str += '<td class="Data name" style="font-weight: bold">' + row.rowTitle + '</td>';
                    str += '<td class="Data chart" data-ttl="' + tName + '&&' + row.rowTitle + '" ><div class="graph"><div class="grMain grLeft"></div><div class="grMain grMid"></div><div class="grMain grRight"></div></div></td>';
                    for (var k = 0; k < row.rowData.length; k++) {
                        str += '<td class="Data data click" data-col="' + k + '" style="font-weight: bold">' + formatNumberThousands(row.rowData[k].replace(',', '.'), 1) + '</td>';
                    }
                    str += '</tr>';
                    break;
                } else if (typeof subRow === 'string' && subRow.toLowerCase() === row.rowTitle.toLowerCase()) {
                    str += '<tr>';
                    str += '<td class="Data name">- ' + row.rowTitle + '</td>';
                    str += '<td class="Data chart" data-ttl="' + tName + '&&' + row.rowTitle + '" ><div class="graph"><div class="grMain grLeft"></div><div class="grMain grMid"></div><div class="grMain grRight"></div></div></td>';
                    for (var k = 0; k < row.rowData.length; k++) {
                        str += '<td class="Data data click" data-col="' + k + '">' + formatNumberThousands(row.rowData[k].replace(',', '.'), 1) + '</td>';
                    }
                    str += '</tr>';
                    break;
                }
            }
            break;
        }
    }
    return str;
});
Handlebars.registerHelper('generateChartTable', function (data) {
    var str = '';
    for (var i = 0; i < data.titles.length; i++) {
        str += '<tr>';
        str += '<td class="Data name">' + data.titles[i] + '</td>';
        str += '<td class="Data chartDeep" data-ttl="' + data.titles[i] + '"><div class="graph"><div class="grMain grLeft"></div><div class="grMain grMid"></div><div class="grMain grRight"></div></div></td>';
        for (var j = 0; j < data.data.length; j++) {
            str += '<td class="Data data" data-col="' + j + '" data-val="' + data.data[j][i].replace(',', '.') + '">' + formatNumberThousands(data.data[j][i].replace(',', '.'), 1) + '</td>';
        }
        str += '</tr>';
    }
    return str;
});
