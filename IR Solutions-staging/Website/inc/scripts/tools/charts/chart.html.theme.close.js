function setOptionsClosePrice() {
    Highcharts.setOptions({
        colors: [graphColorHtml, secondColors],
        chart: {
            panning: false,
            marginTop: 30,
            marginRight: 50,
            marginBottom: 20,
            marginLeft: 4,
            spacingBottom: 10,
            borderWidth: 1,
            borderColor: '#aaa',
            plotBorderWidth: 1,
            plotBorderColor: '#aaa',
            alignTicks: true,
            type: graphDrawType,
            backgroundColor: {
                linearGradient: [500, 0, 500, 500],
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(240, 240, 240)']
                ]
            }
        },
        plotOptions: {
            area: {
                lineWidth: 2,
                animation: false,
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, graphColorHtml],
                        [1, 'rgba(255,255,255,0.5)']
                    ]
                },
                dataGrouping: {
                    enabled: true,
                    groupPixelWidth: 20
                }
            },
            line: {
                lineWidth: 2,
                animation: false,
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, graphColorHtml],
                        [1, 'rgba(255,255,255,0.5)']
                    ]
                },
                dataGrouping: {
                    enabled: true,
                    groupPixelWidth: 20
                }
            },
            spline: {
                color: graphColorHtml,
                marker: {
                    enabled: true,
                    radius: 3
                },
            },
            column: {
                animation: false,
                color: graphColorHtml
            },
            areaspline: {
                lineWidth: 2,
                animation: false,
                color: graphColorHtml,
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, graphColorHtml],
                        [1, 'rgba(255,255,255,0.5)']
                    ]
                }
            }
        },
        tooltip: {
            animation: false,
            shadow: false,
            crosshairs: [true, true],
            borderColor: graphColorHtml,
            borderWidth: 1,
            borderRadius: 3,
            formatter: function() {
                var format = '%Y/%m/%d';
                var str = Highcharts.dateFormat(format, this.x);

                if (graphDrawType == "candlestick") {
                    if (this.points) {
                        jQuery.each(this.points, function(i, point) {
                            var color = this.series.color;
                            if (point.point.open > 0) {
                                str += '<br/><span style="color:' + color + ';">O: ' + Highcharts.numberFormat(point.point.open, decimalsInstrument) + '</span>';
                                str += '<br/><span style="color:' + color + ';">H: ' + Highcharts.numberFormat(point.point.high, decimalsInstrument) + '</span>';
                                str += '<br/><span style="color:' + color + ';">L: ' + Highcharts.numberFormat(point.point.low, decimalsInstrument) + '</span>';
                                str += '<br/><span style="color:' + color + ';">C: ' + Highcharts.numberFormat(point.point.close, decimalsInstrument) + '</span>';
                            } else {
                                str += '<br/><span style="color:' + color + ';">V: ' + Highcharts.numberFormat(point.y, decimalsInstrument) + '</span>';
                            }
                        });
                    }
                } else {
                    if (this.points) {
                        jQuery.each(this.points, function(i, point) {
                            var val;
                            if (i == 0) {
                                val = Highcharts.numberFormat(point.y, decimalsInstrument);
                            } else {
                                val = Highcharts.numberFormat(point.y, decimalsVolume);
                            }
                            var color = this.series.color;
                            str += '<br/><span style="color:' + color + ';">' + point.series.name + ': ' + val + '</span>';
                        });
                    } else {
                        str += '<br/>' + this.point.text;
                    }
                }

                return str;
            }
        },
        xAxis: [{
            minRange: 30 * 24 * 3600 * 1000,
            lineWidth: 1,
            gridLineWidth: 1,
            gridLineColor: '#eeeeee',
            tickPixelInterval: 100,
            startOnTick: false,
            endOnTick: false
        }],
        yAxis: [{
                lineWidth: 0,
                alignTick: true,
                opposite: true,
                gridLineWidth: 1,
                gridLineColor: '#eeeeee',
                tickPixelInterval: 30,
                tickPosition: 'inside',
                tickWidth: 1,
                tickLength: 1,
                tickColor: 'gray',
                showFirstLabel: false,
                showLastLabel: true,
                labels: {
                    align: 'left',
                    x: 5,
                    y: 4
                }
            }, {
                height: graphHtmlVolumeHeight,
                top: graphHtmlVolumeTop,
                gridLineWidth: 0,
                lineWidth: 0,
                labels: {
                    enabled: false
                }
            }],
        rangeSelector: {
            inputEnabled: false,
            buttonSpacing: 5,
            buttons: [{
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'month',
                    count: 3,
                    text: '3m'
                }, {
                    type: 'month',
                    count: 6,
                    text: '6m'
                }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                }, {
                    type: 'year',
                    count: 2,
                    text: '2y'
                }, {
                    type: 'all',
                    text: 'Max'
                }],
            selected: graphDefaultRange
        },
        navigator: {
            outlineColor: '#cccccc'
        },
        scrollbar: {
            enabled: true
        },
        credits: {
            enabled: false
        }
    });
}