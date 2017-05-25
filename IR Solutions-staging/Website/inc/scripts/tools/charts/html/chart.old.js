var data = new Array();
var chartData = new Array();
var seriesOptions = new Array();
var minDate = null;
var maxDate = null;

function loadHTMLChart(divElement) {
    $.ajax({
        cache: true,
        success: function(content) {
            data = content;
            parseData();
            initializeChart();
            drawChart(divElement);
        },
        error: function() {
            showDataError("Could not load data.");
        },
        dataType: 'json',
        url: '../../../inc/dataproviders/closeprice/json/jsonclosepriceprovider.aspx?sid=' + solutionID + '&iid=' + instrumentid
    });
}

function parseData() {
    console.log(data);
    $.each(data, function(i) {
        this.date = stringToDate(this.date);
        this.UTCDate = stringToDateUTC(this.date);
        chartData.push([
            Date.UTC(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()),
            parseFloat(data[i].c)
        ]);
    });
    minDate = data[0].UTCDate;
    maxDate = data[data.length - 1].UTCDate;
}

function stringToDate(dateString) {
    //dateString = dateString.replaceAll('-', '/').replaceAll(dateSeperator, '/');
    return new Date(dateString);
}

function stringToDateUTC(date) {
    return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
}

String.prototype.replaceAll = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof(str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
};

function hasFlash() {
    var hasFlash = false;
    try {
        var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if (fo) hasFlash = true;
    } catch(e) {
        if (navigator.mimeTypes["application/x-shockwave-flash"] != undefined) hasFlash = true;
    }
    return hasFlash;
}

function initializeChart() {
    seriesOptions[0] = {
        name: 'Close Price',
        data: chartData,
        type: 'area',
        threshold: null,
        yAxis: 0
    };
}

function drawChart(divElement) {
    window.chart = new Highcharts.StockChart({
        colors: [graphColor.replace('0x', ''), '#AA4643'],
        chart: {
            renderTo: divElement,
            panning: false,
            animation: false,
            plotBorderColor: '#eee',
            plotBorderWidth: 1,
            marginTop: 10,
            marginBottom: 20,
            marginLeft: 10,
            marginRight: 30
        },
        plotOptions: {
            area: {
                animation: false,
                dataGrouping: {
                    approximation: "open",
                    groupPixelWidth: 100,
                    smoothed: true,
                    units: [[
                        'month',
                        [1]
                    ]]
                }
            }
        },
        tooltip: {
            animation: false,
            shadow: false,
            crosshairs: [{
                    dashStyle: 'dash'
                }, {
                    dashStyle: 'dash'
                }],
            borderColor: '#7EB610',
            borderWidth: 2,
            formatter: function() {
                var format = '%Y/%m/%d';
                var str = Highcharts.dateFormat(format, this.x);
                if (this.points) {
                    jQuery.each(this.points, function(i, point) {
                        var val = Highcharts.numberFormat(point.y, 2);
                        var color = this.series.color;
                        str += '<br/><span style="color:' + color + ';">' + point.series.name + ': ' + val + '</span>';
                    });
                } else {
                    str += '<br/>' + this.point.text;
                }
                return str;
            }
        },
        rangeSelector: {
            selected: 5,
            enabled: false,
            inputEnabled: false
        },
        xAxis: {
            minRange: maxDate - minDate * 60,
            id: 'x-axis',
            gridLineWidth: 1,
            gridLineColor: '#eeeeee',
            alignTick: true,
            showFirstLabel: true,
            showLastLabel: true,
            tickLength: 0,
            tickPixelInterval: 100,
            maxPadding: 0
        },
        yAxis: {
            id: 'y-axis',
            lineWidth: 0,
            gridLineWidth: 1,
            gridLineColor: '#eeeeee',
            alignTick: true, // true
            opposite: true,
            tickPixelInterval: 50,
            tickLength: 0,
            showFirstLabel: true,
            showLastLabel: true,
            labels: {
                align: 'left',
                x: 5,
                y: 4
            },
            maxPadding: 0
        },
        navigator: { enabled: false },
        scrollbar: { enabled: false },
        credits: { enabled: false },
        series: seriesOptions
    });
}