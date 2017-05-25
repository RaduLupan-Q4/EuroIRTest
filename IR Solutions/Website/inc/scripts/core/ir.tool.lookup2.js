var globalIRLookupRawInitialClosePriceData = null;
var globalIRLookupRawClosePriceData = null;
var globalIRLookupChartData = null;
var globalIRLookupChartRawData = null;

var IRLookup = {

    fromDate: null,
    toDate: null,
    closePriceData: null,
    globalIRLookupEarlyDate: null,
    globalIRLookupLateDate: null,
    dateComparisons: {
        SAME: "same",
        BEFORE: "before",
        AFTER: "after"
    },

    comparisons: {
        SAME: "same",
        BEFORE: "before",
        AFTER: "after"
    },

    initControls: function () {
        debugStep('IRLookup.initControls');

        IRLookup.toDate = this.getToDate();
        var todayM = new moment.tz(new moment(), globalActiveExchangeTimeZone);
        if (todayM.diff(this.getFromDate(), 'year') == 0) {
            IRLookup.fromDate = this.getFromDate(); // first closePrice is within the year
        } else {
            IRLookup.fromDate = new moment.tz(IRLookup.toDate, globalActiveExchangeTimeZone).subtract(1, 'y');
            IRLookup.setFromDateSelects(IRLookup.fromDate);
        }
        IRLookup.setToDateSelects(IRLookup.toDate);
        IRLookup.globalIRLookupLateDate = this.getToDate();

        $(".date-select").on("change", IRLookup.dateSelectChangeHandler);

        $("#from-datepicker").datepicker({
            showOn: "button",
            buttonImage: getImagePath() + "icons/calendar.png",
            buttonImageOnly: true,
            onSelect: IRLookup.datePickerChangeHandler2,
            defaultDate: IRLookup.fromDate._d,
            minDate: IRLookup.globalIRLookupEarlyDate._d,
            maxDate: new Date()
        });
        $("#to-datepicker").datepicker({
            showOn: "button",
            buttonImage: getImagePath() + "icons/calendar.png",
            buttonImageOnly: true,
            onSelect: IRLookup.datePickerChangeHandler2,
            defaultDate: IRLookup.toDate._d,
            minDate: IRLookup.globalIRLookupEarlyDate._d,
            maxDate: new Date()
        });

        $("#from-datepicker").datepicker("setDate", IRLookup.getFromDate()._d);
        $("#to-datepicker").datepicker("setDate", IRLookup.getToDate()._d);

        $("#lookup-button").on("click", IRLookup.submit);
    },

    initChart: function () {
        debugStep("IRLookup.initChart");
        var transformedData = [];
        var transformedDataAll = [];
        for (var i = 0; i < globalIRLookupRawClosePriceData.length; i++) {
            var unixTimestamp = new moment.tz(globalIRLookupRawClosePriceData[i].date, globalActiveExchangeTimeZone).valueOf();
            var closePrice = globalIRLookupRawClosePriceData[i].closePrice;
            if (unixTimestamp > this.fromDate.valueOf() && unixTimestamp < this.toDate.valueOf()) {
                transformedData.push([unixTimestamp, closePrice]);
            }
            transformedDataAll.push([unixTimestamp, closePrice]);
        }
        globalIRLookupChartData = transformedData;
    },

    drawChart: function () {
        debugStep("IRLookup.drawChart");
        $(globalChartContainer).highcharts({
            colors: globalChartColours,
            chart: {
                alignTicks: true,
                panning: false,
                backgroundColor: 'white',
                borderWidth: 0,
                borderColor: '#fff',
                plotBorderWidth: 1,
                plotBorderColor: '#eeeeee',
                marginRight: 50,
                marginLeft: 5,
                spacingTop: 5,
                spacingBottom: 5,
                spacingRight: 5,
                animation: {
                    duration: globalChartAnimationMS
                }
            },
            credits: {
                enabled: false
            },
            xAxis: {
                ordinal: true,
                lineColor: '#eeeeee',
                gridLineWidth: 1,
                gridLineColor: '#eeeeee',
                tickPixelInterval: 100,
                tickLength: 0,
                type: 'datetime',
                dateTimeLabelFormats: getChartDateTimeLabelFormatsLookupCalc(),
                showFirstLabel: false,
                showLastLabel: false,
                offset: 0,
                startOnTick: true,
                endOnTick: true,
                labels: {
                    staggerLines: 1,
                    step: 2
                },
                maxZoom: 1
            },
            yAxis: {
                lineWidth: 0,
                lineColor: '#eeeeee',
                gridLineWidth: 1,
                gridLineColor: '#eeeeee',
                tickPixelInterval: 35,
                opposite: true,
                startOnTick: true,
                endOnTick: true,
                useHTML: true,
                showFirstLabel: true,
                showLastLabel: false,
                offset: 0,
                labels: {
                    align: 'left',
                    x: 5,
                    y: -5,
                    useHTML: true,
                    formatter: function () {
                        //return formatDecimal(this.value) + '';
                        return '<div>' + formatDecimal(this.value) + '</div><div class="dummyWhiteBox"></div>';
                    }
                },
                title: {
                    text: ''
                }
            },
            title: {
                text: ''
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
                    var unixDateTime = new moment.tz(Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x) + '.0000000Z', globalActiveExchangeTimeZone).valueOf();
                    return updateTooltipCalc(unixDateTime);
                },
                positioner: function (boxWidth, boxHeight, point) {
                    var chartWidth = $(globalChartContainer).width();
                    var plotX = point.plotX + 30;

                    if (plotX > chartWidth - boxWidth - 50) {
                        plotX = plotX - boxWidth - 40;
                    }
                    return { x: plotX, y: boxHeight };
                }
            },
            plotOptions: {
                series: {
                    animation: {
                        duration: 1
                    },
                    dataGrouping: {
                        groupPixelWidth: 10,
                        units: [[
                            'day', [1]],
                            ['week', [1]],
                            ['month', [1]],
                            ['year', [1]
                            ]],
                        smoothed: true
                    },
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                showInLegend: false,
                data: globalIRLookupChartData,
                color: clientStyle.chart_ColourMain
            }]
        });
    },

    cropChart: function () {
        debugStep("IRLookup.cropChart");
        $(globalChartContainer).highcharts().xAxis[0].setExtremes(IRLookup.fromDate._d, IRLookup.toDate._d);
    },

    dateSelectChangeHandler: function () {
        debugStep("IRLookup.dateSelectChangeHandler");

        var fromYear = parseInt($("#from-year").val(), 10);
        var fromMonth = parseInt($("#from-month").val(), 10) + 1;
        var fromDay = parseInt($("#from-day").val(), 10);
        var validFromDay = Math.min(IRLookup.getDaysInMonth(fromMonth, fromYear), fromDay);

        var toYear = parseInt($("#to-year").val(), 10);
        var toMonth = parseInt($("#to-month").val(), 10) + 1;
        var toDay = parseInt($("#to-day").val(), 10);
        var validToDay = Math.min(IRLookup.getDaysInMonth(toMonth, toYear), toDay);

        if (fromDay !== validFromDay) $("#from-day").val(validFromDay);
        if (toDay !== validToDay) $("#to-day").val(validToDay);

        IRLookup.fromDate = new moment.tz(fromYear + '-' + fromMonth + '-' + fromDay, 'YYYY-MM-DD', globalActiveExchangeTimeZone);
        IRLookup.toDate = new moment.tz(toYear + '-' + toMonth + '-' + toDay, 'YYYY-MM-DD', globalActiveExchangeTimeZone);

        if (IRLookup.toDate.diff(IRLookup.fromDate, 'days') < 0) {
            IRLookup.swapSelectDates();
        }

        IRLookup.restrictSelectDates();

        $("#from-datepicker").datepicker("setDate", IRLookup.getFromDate()._d);
        $("#to-datepicker").datepicker("setDate", IRLookup.getToDate()._d);

        //if (IRLookup.getToDate() < IRLookup.getFromDate()) 

        IRLookup.updateChart();
        IRLookup.cropChart();

    },

    datePickerChangeHandler2: function () {

        debugStep("IRLookup.datePickerChangeHandler2");

        var fromDate = new moment($("#from-datepicker").datepicker("getDate"));
        var toDate = new moment($("#to-datepicker").datepicker("getDate"));

        if (toDate < fromDate) IRLookup.swapDatepickerDates();

        IRLookup.setFromDateSelects(fromDate);
        IRLookup.setToDateSelects(toDate);

        IRLookup.fromDate = fromDate;
        IRLookup.toDate = toDate;

        IRLookup.initChart();
        IRLookup.drawChart();
        IRLookup.cropChart();

    },

    updateChart: function () {
        debugStep("IRLookup.updateChart");
        IRLookup.initChart();
        IRLookup.drawChart();
    },

    restrictSelectDates: function () {
        debugStep("IRLookup.restrictSelectDates");

        if (this.getFromDate().diff(IRLookup.globalIRLookupEarlyDate, 'days') < 0) {
            IRLookup.fromDate = IRLookup.globalIRLookupEarlyDate;
            debugStep("restricting fromDate");
            IRLookup.setFromDateSelects(IRLookup.fromDate);
        }
        if (this.getToDate().diff(IRLookup.globalIRLookupLateDate, 'days') > 0) {
            IRLookup.toDate = IRLookup.globalIRLookupLateDate;
            debugStep("restricting ToDate");
            IRLookup.setToDateSelects(IRLookup.toDate);
        }

    },

    swapSelectDates: function () {
        debugStep("IRLookup.swapSelectDates");

        var tmpFromDate = IRLookup.fromDate;
        IRLookup.fromDate = IRLookup.toDate;
        IRLookup.toDate = tmpFromDate;

        IRLookup.setFromDateSelects(IRLookup.fromDate);
        IRLookup.setToDateSelects(IRLookup.toDate);

    },

    swapDatepickerDates: function () {
        debugStep("IRLookup.swapDatepickerDates");
        var fromDate = $("#from-datepicker").datepicker("getDate");
        var toDate = $("#to-datepicker").datepicker("getDate");

        $("#from-datepicker").datepicker("setDate", toDate);
        $("#to-datepicker").datepicker("setDate", fromDate);
    },

    getFromDate: function () {
        debugStep("IRLookup.getFromDate");
        var d = parseInt($("#from-day").val());
        var m = parseInt($("#from-month").val()) + 1;
        var y = parseInt($("#from-year").val());
        if (parseInt(d) < 10) {
            d = 0 + '' + d;
        }
        if (parseInt(m) < 10) {
            m = 0 + '' + m;
        }
        var date = new moment.tz(y + '-' + m + '-' + d, 'YYYY-MM-DD', globalActiveExchangeTimeZone);
        return date;
    },

    getToDate: function () {
        debugStep("IRLookup.getToDate");
        var d = parseInt($("#to-day").val());
        var m = parseInt($("#to-month").val()) + 1;
        var y = parseInt($("#to-year").val());
        if (parseInt(d) < 10) {
            d = 0 + '' + d;
        }
        if (parseInt(m) < 10) {
            m = 0 + '' + m;
        }
        var date = new moment.tz(y + '-' + m + '-' + d, 'YYYY-MM-DD', globalActiveExchangeTimeZone);
        return date;
    },

    getDaysInMonth: function (m, y) {
        debugStep("IRLookup.getDaysInMonth");
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if ((!(y % 4) && y % 100) || !(y % 400)) {
            daysInMonth[1] = 29;
        }
        return daysInMonth[--m];
    },

    setFromDateSelects: function (date) {
        if (!date) return;

        var d = parseInt(date.format("DD"));
        var m = parseInt(date.format("MM")) - 1;
        var y = parseInt(date.format("YYYY"));

        $("#from-day").val(d);
        $("#from-month").val(m);
        $("#from-year").val(y);
    },

    setToDateSelects: function (date) {
        if (!date) return;

        var d = parseInt(date.format("DD"));
        var m = parseInt(date.format("MM")) - 1;
        var y = parseInt(date.format("YYYY"));

        $("#to-day").val(d);
        $("#to-month").val(m);
        $("#to-year").val(y);
    },

    submit: function (e) {
        debugStep('IRLookup.submit');
        IRLookup.lookup();
        return false;
    },

    lookup: function () {
        debugStep('IRLookup.lookup');

        IRLookup.fromDate = IRLookup.getFromDate();
        IRLookup.toDate = IRLookup.getToDate();

        switch (IRLookup.readFormat().toLowerCase()) {
            case 'html':
                IRLookup.openWindowWithResults();
                break;
            case 'excel':
                IRLookup.downloadExcelFromFile();
                break;
        }
    },

    openWindowWithResults: function () {
        debugStep('IRLookup.openWindowWithResults');
        var url = window.location.href;
        url += (url.indexOf("?") === -1) ? "?" : "&";
        url += "mode=list&from=" + IRLookup.fromDate.format("YYYY-MM-DD") + "&to=" + IRLookup.toDate.format("YYYY-MM-DD") + "&frequency=" + IRLookup.readFrequency();
        url += "&listing=" + globalActiveListingIndex;
        window.open(url, "_blank", "height=400,location=no,toolbars=no,resizable=yes,scrollbars=yes");
    },

    downloadExcelFromFile: function () {
        debugStep('IRLookup.downloadExcelFromFile');

        var startDate = IRLookup.fromDate;
        var endDate = IRLookup.toDate;
        var frequency = IRLookup.readFrequency();

        globalIRLookupRawClosePriceData = globalIRLookupRawInitialClosePriceData.slice(0);
        var downscaledData = IRLookup.getCroppedDownscaledData(globalIRLookupRawClosePriceData, startDate, endDate, frequency);

        var stringified = JSV.stringify(downscaledData); // Using JSV because service engine expects that.
        var tableHeader = {
            t_date: translations.t_date,
            t_open: translations.t_open,
            t_high: translations.t_high,
            t_low: translations.t_low,
            t_close: translations.t_close,
            t_volume: translations.t_volume
        };

        var preHeader = eval(clientStyle.lookup_excelPreHeader);

        IRLookup.ajax_download(getServiceEngingeURL() + "RequestClosePriceFileFromData", {
            data: stringified,
            headers: JSON.stringify(tableHeader),
            preHeader: JSON.stringify(preHeader),
            tableStyle: JSON.stringify(clientStyle.lookup_excelTableStyle),
            apiVersion: clientApiVersion,
            fileName: clientCustomerKeyRequired + '_historical.xlsx',
            solutionID: clientSolutionID,
            lcid: clientLCID,
            customerKey: clientCustomerKeyRequired,
            ContentType: "application/vnd.ms-excel"
        });

    },

    readFormat: function () {
        return $("#format").val();
    },

    readFrequency: function () {
        return $("#frequency").val();
    },

    getParameterByName: function (name) {
        debugStep("IRLookup.getParameterByName");
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },

    populateList: function () {
        debugStep('IRLookup.populateList');
        var template = $("#IRLookupTableTemplate").html();
        var templateCompiled = Handlebars.compile(template);
        var getParamFromDateRaw = IRLookup.getParameterByName("from");
        var getParamToDateRaw = IRLookup.getParameterByName("to");
        var getParamFrequency = IRLookup.getParameterByName("frequency") || "daily";
        var getParamFromDate = (getParamFromDateRaw) ? new moment.tz(getParamFromDateRaw, globalActiveExchangeTimeZone)._d : new moment(stockData[globalIRLookupRawClosePriceData[0]].date)._d;
        var getParamToDate = (getParamToDateRaw) ? new moment.tz(getParamToDateRaw, globalActiveExchangeTimeZone)._d : new moment(stockData[globalIRLookupRawClosePriceData[globalIRLookupRawClosePriceData.length - 1]].date)._d;
        var downscaledData = IRLookup.getCroppedDownscaledData(globalIRLookupRawClosePriceData, getParamFromDate, getParamToDate, getParamFrequency);

        $(".IRLookupModule").html(templateCompiled({ closePrices: downscaledData, headers: translations }));
    },

    getCroppedDownscaledData: function (stockData, fromDate, toDate, frequency) {

        debugStep("IRLookup.getCroppedDownscaledData");
        var croppedData = IRLookup.cropListToDateRange(stockData, fromDate, toDate);
        var downscaledData = IRLookup.downscaleData(croppedData, frequency);
        return IRLookup.stockDateToListDate(downscaledData).reverse();
    },

    cropListToDateRange: function (list, from, to) {
        debugStep("IRLookup.cropListToDateRange");

        //Assumes that the list is sorted by date (ascending or descending - doesn't matter)!
        var startIndex = IRLookup.getIndexThatBestMatchesDate(list, "date", from);
        var endIndex = IRLookup.getIndexThatBestMatchesDate(list, "date", to);

        if (startIndex > endIndex) {
            var tmpIndex = startIndex;
            startIndex = endIndex;
            endIndex = startIndex;
        }

        //var listCopy = IRLookup.deepCopy(list); JR TODO
        
        if (startIndex == endIndex) {
            return list.slice(startIndex, endIndex); // Using deepCopy to create a new array of objects without refernce to the original.
        } else {
            return list.slice(startIndex, endIndex + 1); // Using deepCopy to create a new array of objects without refernce to the original.
        }

        
    },

    deepCopy: function (arr) {
        try {

            var out = [];
            for (var i = 0, len = arr.length; i < len; i++) {
                var item = arr[i];
                var obj = {};
                for (var k in item) {
                    obj[k] = item[k];
                }
                out.push(obj);
            }
        }
        catch (err) {
            debugStep("Error");
            debugStep(err);
        }
        return out;
    },

    downscaleData: function (list, frequency) {
        debugStep("IRLookup.downscaleData");

        //Assumes the list is sorted by date (newest entry first)
        var downscaled = [];

        if (list.length == 0) {
            return list;
        }

        //var date = new Date(list[0].date);
        var date = new moment(list[0].date)._d;

        switch (frequency.toLowerCase()) {
            case "daily":
                return list;
                break;
            case "monthly":
                while (date < new Date(list[list.length - 1].date)) {
                    var index = IRLookup.getIndexThatBestMatchesDate(list, "date", date, true);
                    downscaled.push(list[index]);
                    date.setDate(1);
                    date.setMonth(date.getMonth() + 1);
                }
                return downscaled;
                break;
            case "quarterly":
                while (date < new Date(list[list.length - 1].date)) {
                    var index = IRLookup.getIndexThatBestMatchesDate(list, "date", date, true);
                    downscaled.push(list[index]);
                    date.setDate(1);
                    if (date.getMonth() < 3) { date.setMonth(3); continue }
                    if (date.getMonth() < 6) { date.setMonth(6); continue }
                    if (date.getMonth() < 9) { date.setMonth(9); continue }
                    date.setMonth(0);
                    date.setFullYear(date.getFullYear() + 1);
                }

                return downscaled;
                break;

            case "yearly":
                while (date < new Date(list[list.length - 1].date)) {
                    var index = IRLookup.getIndexThatBestMatchesDate(list, "date", date, true);
                    downscaled.push(list[index]);
                    date.setDate(1);
                    date.setMonth(0);
                    date.setFullYear(date.getFullYear() + 1);
                }

                return downscaled;
                break;
            default:
                return list;
                break;
        }

    },

    getIndexThatBestMatchesDate: function (array, key, pickedDate, roundUp) {
        debugStep("IRLookup.getIndexThatBestMatchesDate");
        var minIndex = 0;
        var maxIndex = array.length - 1;
        var currentIndex;
        var currentElement;

        while (minIndex <= maxIndex) {
            currentIndex = (minIndex + maxIndex) / 2 | 0;
            currentElement = array[currentIndex];

            var comparison = IRLookup.compareDates(new moment(new moment(currentElement[key]).format("YYYY-MM-DD"))._d, pickedDate);

            if (comparison === IRLookup.dateComparisons.BEFORE) {
                minIndex = currentIndex + 1;
            }
            else if (comparison === IRLookup.dateComparisons.AFTER) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }

        if (roundUp && new Date(currentElement[key]) < pickedDate) {
            currentIndex = Math.min(currentIndex, array.length - 1);
        }

        return currentIndex;
    },

    compareDates: function (dateToTest, compareToDate) {
        debugStep("IRLookup.compareDates");
        var _dateToTest = new moment(new moment(dateToTest).format("YYYY-MM-DD")).valueOf();
        var _compareToDate = new moment(new moment(compareToDate).format("YYYY-MM-DD")).valueOf();

        if (_dateToTest === _compareToDate) {
            return IRLookup.dateComparisons.SAME;
        }

        return (dateToTest < compareToDate) ? IRLookup.dateComparisons.BEFORE : IRLookup.dateComparisons.AFTER;
    },

    stockDateToListDate: function (stockData, _dateProperty) {
        debugStep("IRLookup.stockDateToListDate");
        var transformedData = [];
        var dateProperty = _dateProperty || "date";

        for (var i = 0; i < stockData.length; i++) {

            var entry = stockData[i];
            entry[dateProperty] = new moment(entry[dateProperty]).format(clientStyle.formatDate); // JRJR todo, make this a seperate option in ir.client.js
            transformedData.push(entry);

        }
        return transformedData;
    },

    ajax_download: function (url, data) {
        debugStep("IRLookup.ajax_download");

        // Check if PushPay and if iPhone
        if (clientCustomerKeyRequired.toLowerCase() == 'pushpay' && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
            var form = '<form method="post" action="' + getServiceEngingeURL() + 'RequestClosePriceFileFromData">';
            Object.keys(data).forEach(function (key) {
                form += "<input type='hidden' name='" + key + "' value='" + data[key] + "'>";
            });
            form += '</form>';
            var OpenWindow = window.open('', '_blank', '');
            $(OpenWindow.document.body).ready(function () {
                $(OpenWindow.document.body).append(form);
                OpenWindow.document.forms[0].submit();
            });

        } else {

            var $iframe,
                iframe_doc,
                iframe_html;

            if (($iframe = $('#download_iframe')).length === 0) {
                $iframe = $("<iframe id='download_iframe' style='display: none' src='about:blank'></iframe>").appendTo("body");
            }

            iframe_doc = $iframe[0].contentWindow || $iframe[0].contentDocument;
            if (iframe_doc.document) {
                iframe_doc = iframe_doc.document;
            }

            iframe_html = "<html><head></head><body><form method='POST' action='" +
                          url + "'>"

            Object.keys(data).forEach(function (key) {
                iframe_html += "<input type='hidden' name='" + key + "' value='" + data[key] + "'>";
            });

            iframe_html += "</form></body></html>";

            iframe_doc.open();
            iframe_doc.write(iframe_html);
            $(iframe_doc).find('form').submit();

        }
    }

}

function datePickerChangeHandler() {
    debugStep("IRLookup.datePickerChangeHandler");

    var fromDate = new moment($("#from-datepicker").datepicker("getDate"));
    var toDate = new moment($("#to-datepicker").datepicker("getDate"));

    if (toDate < fromDate) IRLookup.swapDatepickerDates();

    IRLookup.setFromDateSelects(fromDate);
    IRLookup.setToDateSelects(toDate);

    IRLookup.fromDate = fromDate;
    IRLookup.toDate = toDate;

    IRLookup.initChart();
    IRLookup.drawChart();
    IRLookup.cropChart();

}

function initializeLookup(data) {
    debugStep('initializeLookup');

    globalIRLookupRawClosePriceData = data.data.closePriceListing[0].data[0].data;
    globalIRLookupRawInitialClosePriceData = globalIRLookupRawClosePriceData.slice(0);

    IRLookup.closePriceData = data.data.closePriceListing[0].data[0].data;

    IRLookup.globalIRLookupEarlyDate = new moment.tz(globalIRLookupRawClosePriceData[0].date, globalActiveExchangeTimeZone);

    switch (IRLookup.getParameterByName("mode").toLocaleLowerCase()) {
        case 'list':
            IRLookup.populateList();
            break;
        default:
            IRLookup.initControls();
            IRLookup.initChart();
            IRLookup.drawChart();
            IRLookup.cropChart();
            break;
    }
}