var sep1000 = ',';
var globalName = "";
var globalSubtitle = "";
var globalMark = "";
var globalColors = ['#c5da00', '#0f3e49', '#ffb403', '#7c1839', '#892da0', '#6e78dc', '#ff90a3', '#feec30', '#9ba08c', '#a0c8f0', '#9ba08c', '#892da0'];


var requestRecommendationData = null;
var recommendationData = null;

var requestTargetPriceData = null;
var targetPriceData = null;

$(function () {
    loadRecomendationData();
    $.when(requestRecommendationData).then(function (res) {
        recommendationData = res;
        recommendPriceChart(
            formatDataForChart(recommendationData, globalColors[0], 'area')
        );
    });

    loadTargetPriceData();
    $.when(requestTargetPriceData).then(function (res) {
        targetPriceData = res;
        targetPriceChart([
            formatDataForChart(targetPriceData[0], globalColors[0], 'area'),
            formatDataForChart(targetPriceData[1], globalColors[1], 'line')
        ]);
    });

    $('.contributors li').on('click', function () {
        $('.tabs, .under-tabs, .title, .gradient-main-div, .detailed-recommendation, .recommendations, .recommendation-history-graph, .target-price-history-graph, .contributors').hide();
        $('.contributors-info').show();
    });

    calculateAvgConsensus();
    calculateDetailedRec();
});

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

function loadRecomendationData(){
    requestRecommendationData = $.ajax({
        url: 'js/recommendations.json',
        type: 'GET',
        traditional: true
    })
}

function loadTargetPriceData(){
    requestTargetPriceData = $.ajax({
        url: 'js/targetPrice.json',
        type: 'GET',
        traditional: true
    })
}

function formatDataForChart(data, color, type) {
    var temp = {};
    var tempData = [];
    var date = new Date();
    var yearBack = date.setFullYear( date.getFullYear() - 1 );

    for (var i = 0; i < data.data.length; i ++){
        if(yearBack <=  data.data[i].Date) tempData.push([data.data[i].Date,  data.data[i].Value]);
    }
    temp.name = data.name;
    temp.data = tempData;
    temp.color = color;
    temp.type = type;
    return temp;
}

function formatDate(date) {
    var tempDate = new Date(date);
    return tempDate.getDate() + '/' + ('0' + (tempDate.getMonth() + 1)).slice(-2) + '/' + tempDate.getFullYear();
}

function recommendPriceChart(data) {
    Highcharts.chart("historyChart", {
        chart: {
            type: 'area',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#eae9e8',
            borderWidth: 1
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                month: '%b'
            },
            tickAmount: 12
        },
        yAxis: [{
            id: 'first-axis',
            // allowDecimals: false,
            title: {
                text: ''
            },
            lineWidth: 1,
            tickWidth: 1,
            labels: {
                y: -10,
                formatter: function () {
                    switch (this.value){
                        case 0.5:
                            return 'Sell';
                        case 1.5:
                            return 'Underperform';
                        case 2.5:
                            return 'Hold';
                        case 3.5:
                            return 'Outerform';
                        case 4.5:
                            return 'Buy';
                        default:
                            return '';
                    }
                }
            },
            min: 0.5,
            max: 5.5,

            minorTickInterval: 'auto',
            tickPositions:[0.5,1.5,2.5,3.5,4.5,5.5],
            tickmarkPlacement: 'between',
            plotLines: [{
                value: 0,
                width: 1,
                color: '#ebebeb'
            }]

        }],
        tooltip: {
            formatter: function () {
                console.log(this);
                return s;
            }
        },
        legend: {enabled: false},
        series: [data]
    });
}

function targetPriceChart(data) {
    Highcharts.chart("targetPriceChart", {
        chart: {
            type: 'area',
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
            type: 'datetime',
            dateTimeLabelFormats: {
                month: '%b'
            },
            tickAmount: 12
        },
        yAxis: [{
            id: 'first-axis',
            allowDecimals: false,
            title: {
                text: 'DKK'
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
                var s = '<div>' + formatDate(this.x) + '</div>';
                s += '<br/><span style="color:' + this.series.color + '">' + this.series.name + '</span>: ' + formatNumberThousands(this.y, 2) + ' DKK';
                return s;
            }
        },
        legend: {enabled: false},
        series: data,
        plotOptions: {
            line: {
                connectNulls: true,
                lineWidth: 1
            },
            series: {
                events: {
                    afterAnimate: function () {
                        $('.target-chart-legend').append('<div class="leg-elem"><span style="background-color: '+this.color+'"></span>'+ this.name+'</div>')
                    }
                }
            }
        }
    });
}

function calculateDetailedRec(){
    var rows = $('.recommendations-table').find('td.quantity');
    var height = 0;
    for (var i = 0; i < rows.length; i++){
        var val = Number($(rows[i]).text());
        height = val > height ? val : height;
    }
    var rowsInd = $('.recommendations-table').find('td.indicator');
    for (var j = 0; j < rows.length; j++){
        var wid = Number($(rows[j]).text());
        var width = (wid*100)/height;
        $(rowsInd[j]).find('div').first().css('width', (width == 0 ? 1 : width) + '%');
    }
}

function calculateAvgConsensus() {
    var val = Number($('td.current-avg').text());

    $('.arrow-pointer').css('width', (val*100)/5.5 + '%');
    $('.arrow-pointer .arrow-nb').text(val)
}