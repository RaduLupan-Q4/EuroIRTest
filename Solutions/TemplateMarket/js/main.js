/**
 * Created by Mediapark on 3/5/2015.
 */
$(document).ready(function() {

    function goToByScroll(id) {
        // Reove "link" from the ID
        id = id.replace("link", "");
        // Scroll
        $('html,body').animate({
                scrollTop: $("#" + id).offset().top - 20
            },
            'slow');
    }

    $(".side-tools-menu > ul > li > a").click(function(e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).attr("id"));
    });

    $('#nav-icon3').click(function() {
        $(this).toggleClass('open');
    });

    $(function() {

        $.ajax({
            url: "http://ir.euroinvestor.com/ServiceEngine/api/json/reply/RequestClosePriceBundle_OHLC?apiVersion=1&lcid=2057&solutionID=2626&customerKey=demoOMXC20&numberOfYears=1&instrumentTypes=Index",
            success: function(results) {
                var data = results.data;
                data.forEach(function(item) {

                    var id = item.instrumentID;
                    var arr = [];
                    var sixMonths = new Date();
                       sixMonths.setMonth(sixMonths.getMonth() - 6);
                       sixMonths.setHours(0,0,0);
                    item.data.forEach(function(nb) {
                        var dd = new Date(nb.date)
                        if (dd.getTime() >= sixMonths.getTime()) {
                        arr.push([dd.getTime(), nb.closePrice]);
                    }
                    });
                    $('#container').highcharts({

                        chart: {
                            zoomType: 'x'
                        },

                        title: {
                            text: 'OMX C20'
                        },
                        xAxis: {
                            type: 'datetime',
                            showFirstLabel: true,
                            startOnTick: true,
                            labels: {
                                format: '{value:%b}',
                            }
                        },
                        yAxis: {
                            title: {
                                text: 'Close Price'
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        exporting: {
                            enabled: false
                        },
                        credits: {
                            enabled: false
                        },
                        plotOptions: {
                            area: {
                                fillColor: {
                                    linearGradient: {
                                        x1: 0,
                                        y1: 0,
                                        x2: 0,
                                        y2: 1
                                    },
                                    stops: [
                                        [0, '#3D9DB8'],
                                        [1, '#fff']
                                    ]
                                },
                                marker: {
                                    radius: 2
                                },
                                lineWidth: 1,
                                states: {
                                    hover: {
                                        lineWidth: 1,
                                        enabled: true
                                    }
                                },
                                threshold: null
                            }
                        },

                        series: [{
                            type: 'area',
                            name: 'Close Price',
                            data: arr,
                        }]
                    });
                });

            }
        })
    });

    $(function () {
        var arr = [];
        var arr2 = [];
        var zero = 0;

        $.ajax({
            url: "http://ir.euroinvestor.com/ServiceEngine/api/json/reply/RequestClosePriceBundle_OHLC?apiVersion=1&lcid=2057&solutionID=2626&customerKey=demoOMXC20&numberOfYears=1&instrumentTypes=Index",
            success: function (result) {
                var instrumentID = 1000874;
                var data = result.data;
                arr = [];
                arr2 = [];
                var sixMonths = new Date();
                sixMonths.setMonth(sixMonths.getMonth() - 6);
                sixMonths.setHours(0,0,0);
                for (var i = 0; i < data.length; i++) {
                    if (data[i].instrumentID === instrumentID) {
                        var d = data[i].data;
                        for (var j = 0; j < d.length; j++) {
                            var dd = new Date(data[i].data[j].date);

                            if (dd.getTime() >= sixMonths.getTime()) {
                                if (zero == 0)
                                    zero = d[j].closePrice;

                                var point = (d[j].closePrice / zero)-1;
                                var rand = Math.random();
                                var point2 = ((d[j].closePrice  + 1000 * rand)/(zero  + 1000 * rand))-1;

                                arr.push([dd.getTime(), point]);
                                arr2.push([dd.getTime(), point2]);
                            }
                        }
                    }
                }
            }
        }).done(function () {
            $('#container2').highcharts({
                title: {
                    text: 'FTSE 100'
                },
                xAxis: {
                    type: 'datetime',
                    showFirstLabel: true,
                    startOnTick: true,
                    labels: {
                        format: '{value:%b}',
                    }
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    labels: {
                        formatter: function () {
                            return this.value + '%';
                        }
                    }
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#3D9DB8'],
                                [1, '#fff']
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null,
                        pointStart: arr[0][0]
                    },
                    line: {
                        color: '#353535',
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null,
                        pointStart: arr[0][0]
                    }
                },
                tooltip: {
                   formatter: function() {
                        return  this.series.name +' <br/>' + Math.round((this.y + 1) * zero ) + ' ' + this.y.toFixed(2) + '(%)' ;
                    }
                },
                exporting: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                series: [{
                    type: 'area',
                    name: 'FTSE 100',
                    data: arr
                },
                    {
                        type: 'line',
                        name: 'DAX 30',
                        data: arr2
                    }]
            });
        });
    });

    $('.hamburger').click(function() {
      $(".mobile ul").slideToggle();
    });
});
