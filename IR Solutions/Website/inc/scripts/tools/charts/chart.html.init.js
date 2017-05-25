var dateSeperator = "/";
var chartData = new Array();
var chartVolumeData = new Array();
var seriesOptions = new Array();
var minDate = null;
var maxDate = null;
var requestMethods = ["ClosePriceData", "IntradayData", "BenchmarkClosePriceData", "BenchmarkIntradayData"];

function loadHTMLChart(requestMethodIndex) {
    var o = {
        fromDate: getDate(-10),
        toDate: getDate(0),
        apiVersion: 0,
        lcid: 0,
        solutionID: 1004,
        instrumentID: 100019
    };
    $.ajax({
        type: 'POST',
        crossDomain: true,

        // Todo: Auto detect localhost, dev and live environment.
        url: "http://localhost:1337/ServiceEngine/api/json/reply/Request" + requestMethods[requestMethodIndex],

        data: o,

        dataType: 'json',
        cache: true,
        success: function(content) {
            data = content;
            console.log(data);
            parseData(requestMethods[requestMethodIndex]);
            initializeChart();
            drawChart(graphContainer, requestMethods[requestMethodIndex]);
        },
        error: function(thrownError) {
            showDataError("Could not load data.");
        }
    });
}

function showDataError(text) {
    console.log("DEBUG: " + text);
}

function parseData(parseMethod) {
    $.each(data, function(i) {
        this.utcDate = unixDateToDate(this.utcDate);

        switch (parseMethod) {
        case 'ClosePriceData':
            // HTML Chart format expected: yyyy MM dd

            chartData.push([
                Date.UTC(this.utcDate.getFullYear(), this.utcDate.getMonth(), this.utcDate.getDate()),
                parseFloat(data[i].openPrice),
                parseFloat(data[i].high),
                parseFloat(data[i].low),
                parseFloat(data[i].closePrice)
            ]);
            chartVolumeData.push([
                Date.UTC(this.utcDate.getFullYear(), this.utcDate.getMonth(), this.utcDate.getDate()),
                parseFloat(data[i].volume)
            ]);

            break;
        case 'IntradayData':
            // HTML Chart format expected: yyyy MM dd HH mm

            chartData.push([
                Date.UTC(this.utcDate.getFullYear(), this.utcDate.getMonth(), this.utcDate.getDate(), this.utcDate.getHours(), this.utcDate.getMinutes()),
                parseFloat(data[i].openPrice),
                parseFloat(data[i].high),
                parseFloat(data[i].low),
                parseFloat(data[i].closePrice)
            ]);
            chartVolumeData.push([
                Date.UTC(this.utcDate.getFullYear(), this.utcDate.getMonth(), this.utcDate.getDate(), this.utcDate.getHours(), this.utcDate.getMinutes()),
                parseFloat(data[i].volume)
            ]);

            break;
        }
    });
}

function unixDateToDate(dateString) {
    //TODO Generic solution to remove timezone information
    dateString = dateString.replace('/Date(', '').replace('-0000)/', '').replace('+0200)/', '');
    return new Date(parseInt(dateString));
}

function initializeChart() {
    seriesOptions[0] = {
        name: 'Close',
        data: chartData,
        threshold: null,
        animation: false,
        yAxis: 0
    };
    seriesOptions[1] = {
        name: 'Volume',
        data: chartVolumeData,
        type: 'column',
        animation: false,
        groupPadding: 0.3,
        borderWidth: 0,
        yAxis: 1,
        linkedTo: 0
    };
}

function drawChart(divElement, drawType) {
    switch (drawType) {
    case 'ClosePriceData':
        setOptionsClosePrice();
        break;
    case 'IntradayData':
        setOptionsIntraday();
        break;
    }
    window.chart = new Highcharts.StockChart({
        chart: {
            renderTo: divElement
        },
        yAxis: [{}, {}], // Dummy placeholders for volume data.
        series: seriesOptions
    });
    $('#GraphHtmlControls').show();
}

function stringToDate(dateString) {
    dateString = dateString.replaceAll('-', '/').replaceAll(dateSeperator, '/');
    return new Date(dateString);
}

function stringToDateUTC(date) {
    console.log(date);
    date = date.replaceAll('-', '/').replaceAll(dateSeperator, '/');

    return date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
}

function showDataError(message) {
    $('#data_error').html(message);
}

String.prototype.replaceAll = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof(str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
};

function getDate(yearsBack) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear() + yearsBack;
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy + '/' + mm + '/' + dd;
    return today;
}