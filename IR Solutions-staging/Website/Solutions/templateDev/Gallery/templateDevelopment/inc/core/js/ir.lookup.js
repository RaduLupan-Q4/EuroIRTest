var currency = "GBp ";
var stockData = null;
function cropListToDateRange(list, from, to) {
    debugStep("cropListToDateRange");
    var startIndex = getIndexThatBestMatchesDate(list, "date", from),
        endIndex = getIndexThatBestMatchesDate(list, "date", to);


    if (startIndex > endIndex) {
        var tmpIndex = startIndex;
        startIndex = endIndex;
        endIndex = startIndex;
    }


    return list.slice(startIndex, endIndex + 1); // Slice makes the date format localized. TODO
}
function downscaleData(list, frequency) {
    debugStep("downscaleData");

    //Assumes the list is sorted by date (newest entry first)
    var downscaled = [];
    var date = new moment(list[0].date)._d;

    switch (frequency.toLowerCase()) {
        case "daily":
            return list;
            break;
        case "monthly":
            while (date < new Date(list[list.length - 1].date)) {
                var index = getIndexThatBestMatchesDate(list, "date", date, true);
                downscaled.push(list[index]);
                date.setDate(1);
                date.setMonth(date.getMonth() + 1);
            }
            return downscaled;
            break;
        case "quarterly":
            while (date < new Date(list[list.length - 1].date)) {
                var index = getIndexThatBestMatchesDate(list, "date", date, true);
                downscaled.push(list[index]);
                date.setDate(1);
                if (date.getMonth() < 3) {
                    date.setMonth(3);
                    continue
                }
                if (date.getMonth() < 6) {
                    date.setMonth(6);
                    continue
                }
                if (date.getMonth() < 9) {
                    date.setMonth(9);
                    continue
                }
                date.setMonth(0);
                date.setFullYear(date.getFullYear() + 1);
            }

            return downscaled;
            break;

        case "yearly":
            while (date < new Date(list[list.length - 1].date)) {
                var index = getIndexThatBestMatchesDate(list, "date", date, true);
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

}
function getCroppedDownscaledData(stockData, fromDate, toDate, frequency) {
    debugStep("getCroppedDownscaledData");
    var croppedData = cropListToDateRange(stockData, fromDate, toDate);
    var downscaledData = downscaleData(croppedData, frequency);
    return stockDateToListDate(downscaledData).reverse();
}
function populateList(closePrices) {
    debugStep('populateList');

    var lookupListTemplate = $(ModulesList.IRLookupModule.listTemplate).html(),
        stockData = closePrices.data[globalActiveListingIndex].data,
        compiledIRLookupListTemplate = Handlebars.compile(lookupListTemplate);

    var fromDateRaw = getParameterByName("from"),
        toDateRaw = getParameterByName("to"),
        frequency = getParameterByName("frequency") || "daily",
        fromDate = (fromDateRaw) ? new moment(fromDateRaw)._d : new moment(stockData[globalActiveListingIndex].date)._d,
        toDate = (toDateRaw) ? new moment(toDateRaw)._d : new moment(stockData[stockData.length - 1].date)._d;
    var downscaledData = getCroppedDownscaledData(stockData, fromDate, toDate, frequency);

    $(".IRLookupModule").html(compiledIRLookupListTemplate({closePrices: downscaledData, headers: translations}));
}
function stockDataToChartData(stockData, _dateProperty, _priceProperty) {
    debugStep("stockDataToChartData");
    var transformedData = [],
        dateProperty = _dateProperty || "date",
        priceProperty = _priceProperty || "closePrice";
    var first = true;

    for (var i = 0; i < stockData.length; i++) {

        if (first) {
            first = false;
        }
        transformedData[i] = [new moment(stockData[i][dateProperty]).valueOf(), stockData[i][priceProperty]];
    }
    return transformedData;
}
function stockDateToListDate(stockData, _dateProperty) {
    debugStep("stockDateToListDate");
    var transformedData = [],
        dateProperty = _dateProperty || "date";

    for (var i = 0; i < stockData.length; i++) {

        var entry = stockData[i];
        entry[dateProperty] = new moment(entry[dateProperty]).format(clientStyle.formatDate);
        transformedData.push(entry);

    }

    return transformedData;
}
function readFromDateLookupResults() {
    debugStep("readFromDateLookupResults");

    var fromDateM = new moment();
    fromDateM.date(Number($(".from-day").val()));
    fromDateM.month(Number($(".from-month").val()));
    fromDateM.year(Number($(".from-year").val()));

    var year = fromDateM.format("YYYY");
    var month = fromDateM.format("MM");
    var day = fromDateM.format("DD");

    return year + "-" + month + "-" + day;
}
function readToDateLookupResults() {
    debugStep("readToDateLookupResults");

    var toDateM = new moment();
    toDateM.date(Number($(".to-day").val()));
    toDateM.month(Number($(".to-month").val()));
    toDateM.year(Number($(".to-year").val()));

    var year = toDateM.format("YYYY");
    var month = toDateM.format("MM");
    var day = toDateM.format("DD");

    return year + "-" + month + "-" + day;
}
function readFormat() {
    debugStep("readFormat");
    return $(".format").val();
}
function readFrequency() {
    debugStep("readFrequency");
    return $(".frequency").val();
}
function submitLookup() {
    debugStep("submit");
    lookup();
    var highchart = $(globalChartContainer).highcharts();
    if (highchart) {
        highchart.xAxis[0].setExtremes(readFromDate().getTime(), readToDate().getTime());
    }
    return false;
}
function getIndexThatBestMatchesDate(array, key, pickedDate, roundUp) {
    var minIndex = 0;
    var maxIndex = array.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = array[currentIndex];

        var comparison = compareDates(new moment(new moment(currentElement[key]).format("YYYY-MM-DD"))._d, pickedDate);

        if (comparison === dateComparisons.BEFORE) {
            minIndex = currentIndex + 1;
        }
        else if (comparison === dateComparisons.AFTER) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }

    if (roundUp && new Date(currentElement[key]) < pickedDate) {
        currentIndex = Math.min(currentIndex + 1, array.length - 1);
    }

    return currentIndex;
}
function getParameterByName(name) {
    debugStep("getParameterByName");
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
/*
 * It seems impossible to trigger a file to be downloaded from the browser as the results of an ajax request. File downloads are only
 * trigger when the request results from submitting a form. Consequently a temporary, invisible iframe with a form is temporarily created. The 
 * data (JSV encoded) is then written to a hidden field and the form is submitted. For more details see http://stackoverflow.com/questions/4545311/download-a-file-by-jquery-ajax
 */
function ajax_download(url, data) {
    debugStep("ajax_download");

    // Todo Check if PushPay and if iPhone
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

        iframe_html = "<html><head></head><body><form method='POST' action='" + url + "'>";

        Object.keys(data).forEach(function (key) {
            iframe_html += "<input type='hidden' name='" + key + "' value='" + data[key] + "'>";
        });

        iframe_html += "</form></body></html>";

        iframe_doc.open();
        iframe_doc.write(iframe_html);
        $(iframe_doc).find('form').submit();
    }
}
function lookup() {
    debugStep("lookup");

    //Read the value of format and determine what to open!
    if (readFormat().toLowerCase() === "excel") {
        var startDate = readFromDate(),
            endDate = readToDate(),
            frequency = readFrequency();
        var downscaledData,
            stringified,
            tableHeader;
        ResponseData.requestClosePriceListingData.done(function (closePrices) {
            if (IRCustomModule) {
                stockData = globalClosePriceData;

                downscaledData = getCroppedDownscaledData(globalClosePriceData, startDate, endDate, frequency);
                stringified = JSV.stringify(downscaledData); // Using JSV because service engine expects that.
                tableHeader = {
                    t_date: translations.t_date,
                    t_open: translations.t_open,
                    t_high: translations.t_high,
                    t_low: translations.t_low,
                    t_close: translations.t_close,
                    t_volume: translations.t_volume
                };

                var preHeader = eval(clientStyle.lookup_excelPreHeader);
                ajax_download(getServiceEngingeURL() + "RequestClosePriceFileFromData", {
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

            } else {

                downscaledData = getCroppedDownscaledData(closePrices.data[globalActiveListingIndex].data, startDate, endDate, frequency);
                stringified = JSV.stringify(downscaledData); // Using JSV because service engine expects that.
                tableHeader = {
                    t_date: translations.t_date,
                    t_open: translations.t_open,
                    t_high: translations.t_high,
                    t_low: translations.t_low,
                    t_close: translations.t_close,
                    t_volume: translations.t_volume
                };

                preHeader = eval(clientStyle.lookup_excelPreHeader);
                ajax_download(getServiceEngingeURL() + "RequestClosePriceFileFromData", {
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
            }

        });
    } else {
        var url = window.location.href;
        url += (url.indexOf("?") === -1) ? "?" : "&";
        url += "mode=list&from=" + readFromDateLookupResults() + "&to=" + readToDateLookupResults() + "&frequency=" + readFrequency();
        url += "&listing=" + globalActiveListingIndex;
        window.open(url, "_blank", "height=400,location=no,toolbars=no,resizable=yes,scrollbars=yes");
    }
    return false;
}
function initializeLookup(data) {
    debugStep('initializeLookup');
    if (getParameterByName("mode") === "list") {
        ResponseData.requestClosePriceListingData.done(populateList);
    } else {
        ResponseData.requestClosePriceListingData.done(populateChart);
    }
    var toDateM = new moment()._d;
    var fromDateM = new moment()._d;

    fromDateM.setFullYear(fromDateM.getFullYear() - 1);

    setFromDateSelects(fromDateM);
    setToDateSelects(toDateM);
    $(".date-select").on("change", dateSelectChangeHandler);
    $(".from-datepicker").datepicker({
        showOn: "button",
        buttonImage: getImagePath() + "icons/calendar.png",
        buttonImageOnly: true,
        onSelect: datePickerChangeHandler,
        defaultDate: fromDateM,
        maxDate: new Date()
    });
    $(".to-datepicker").datepicker({
        showOn: "button",
        buttonImage: getImagePath() + "icons/calendar.png",
        buttonImageOnly: true,
        onSelect: datePickerChangeHandler,
        defaultDate: toDateM,
        maxDate: new Date()
    });
    $(".lookup-form").on("submit", submitLookup);
}
function compareDates(dateToTest, compareToDate) {
    var _dateToTest = new moment(new moment(dateToTest).format("YYYY-MM-DD")).valueOf();
    var _compareToDate = new moment(new moment(compareToDate).format("YYYY-MM-DD")).valueOf();

    if (_dateToTest === _compareToDate) {
        return dateComparisons.SAME;
    }

    return (dateToTest < compareToDate) ? dateComparisons.BEFORE : dateComparisons.AFTER;
}
function getDaysInMonth(m, y) {
    debugStep("getDaysInMonth");
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((!(y % 4) && y % 100) || !(y % 400)) {
        daysInMonth[1] = 29;
    }
    return daysInMonth[--m];
}
//
// Comon for both Calc & Lookup
//
var dateComparisons = {
    SAME: "same",
    BEFORE: "before",
    AFTER: "after"
};
function populateChart(closePriceListingData) {
    debugStep("populateChart");
    var minDate = new moment(closePriceListingData.data[globalActiveListingIndex].data[0].date)._d;
    var maxData = new moment(closePriceListingData.data[globalActiveListingIndex].data[0].date)._d;
    $(".from-datepicker").datepicker("option", "minDate", maxData);
    $(".to-datepicker").datepicker("option", "maxDate", maxData);
    var transformedData = stockDataToChartData(closePriceListingData.data[globalActiveListingIndex].data);
    $(globalChartContainer).highcharts({
        colors: [clientStyle.chart_ColourMain, '#002395', '#03C03C', '#0F52BA', '#138808', '#3B444B', '#4B5320', '#507D2A', '#556B2F', '#FF0000', '#779ECB', '#915C83', '#91877D', '#FF00DC', '#967117', '#9932CC', '#00FF90', '#A4C639', '#B2EC5D', '#CBA135', '#CD9575', '#91877D', '#967117', '#FF8C00', '#779ECB', '#A4C639'],
        chart: applyChartChart(),
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
                var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();

                return updateTooltipLookup(unixDateTime);
            },
            positioner: function (boxWidth, boxHeight, point) {
                var chartWidth = $(globalChartContainer).width();
                var plotX = point.plotX + 30;

                if (plotX > chartWidth - boxWidth - 50) {
                    plotX = plotX - boxWidth - 40;
                }
                return {x: plotX, y: boxHeight};
            }
        },
        xAxis: {
            ordinal: true,
            lineColor: '#eeeeee',
            gridLineColor: '#eeeeee',
            gridLineDashStyle: 'Solid',
            gridLineWidth: 1,
            minorGridLineWidth: 0,
            showFirstLabel: true,
            showLastLabel: false,
            type: 'datetime',
            endOnTick: false,
            tickPixelInterval: 100,
            tickLength: 0,
            labels: {
                staggerLines: 1,
                step: 2
            },
            dateTimeLabelFormats: getChartDateTimeLabelFormatsLookupCalc()
        },
        yAxis: applyChartYAxis(),
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
        credits: {
            enabled: false
        },
        series: [{
            showInLegend: false,
            name: 'Share Price',
            data: transformedData,
            color: clientStyle.chart_ColourMain
        }]
    });

    dateSelectChangeHandler();
}
function applyChartChart() {
    switch (clientStyle.lookup_ChartYAxisInsideOutside) {
        case 'inside':
            return {
                alignTicks: true,
                panning: false,
                backgroundColor: 'white',
                borderWidth: 0,
                borderColor: '#fff',
                plotBorderWidth: 1,
                plotBorderColor: '#eeeeee',
                marginRight: 5,
                marginLeft: 5,
                spacingTop: 5,
                spacingBottom: 5,
                spacingRight: 5,
                animation: {
                    duration: globalChartAnimationMS
                }
            };
            break;
        case 'outside':
            return {
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
            };
            break;
    }
}
function applyChartYAxis() {
    switch (clientStyle.lookup_ChartYAxisInsideOutside) {
        case 'inside':
            return {
                lineWidth: 0,
                gridLineWidth: 1,
                gridLineColor: '#eee',
                tickPixelInterval: 35,
                showFirstLabel: true,
                showLastLabel: false,
                startOnTick: true,
                endOnTick: true,
                opposite: true,
                labels: {
                    align: 'right',
                    x: -5,
                    y: -5,
                    formatter: function () {
                        return NumberFormat.decimal(this.value) + '';
                    }
                },
                title: {
                    text: ''
                }
            };
            break;
        case 'outside':
            return {
                lineWidth: 0,
                gridLineWidth: 1,
                gridLineColor: '#eee',
                tickPixelInterval: 35,
                showFirstLabel: true,
                showLastLabel: false,
                startOnTick: true,
                endOnTick: true,
                opposite: true,
                tickPosition: 'outside',
                labels: {
                    align: 'left',
                    x: 5,
                    y: -5,
                    formatter: function () {
                        return NumberFormat.decimal(this.value) + '';
                    }
                },
                title: {
                    text: ''
                }
            };
            break;
    }
}
function cropGraph() {
    debugStep("cropGraph");

    $(globalChartContainer).highcharts().xAxis[0].setExtremes(readFromDate().getTime(), readToDate().getTime());
}
function readFromDate() {
    debugStep("readFromDate");
    var fromDate = new Date();
    fromDate.setDate($(".from-day").val());
    fromDate.setMonth($(".from-month").val());
    fromDate.setFullYear($(".from-year").val());

    var fromDateM = new moment();
    fromDateM.date($(".from-day").val());
    fromDateM.month($(".from-month").val());
    fromDateM.year($(".from-year").val());

    return fromDate;
}
function readToDate() {
    debugStep("readToDate");
    var toDate = new Date();
    toDate.setDate($(".to-day").val());
    toDate.setMonth($(".to-month").val());
    toDate.setFullYear($(".to-year").val());

    var toDateM = new moment();


    toDateM.date($(".to-day").val());
    toDateM.month($(".to-month").val());
    toDateM.year($(".to-year").val());


    return toDate;
}
function setFromDateSelects(date) {
    debugStep('setFromDateSelects');
    if (!date) return;
    $(".from-day").val(date.getDate());
    $(".from-month").val(date.getMonth());
    $(".from-year").val(date.getFullYear());
}
function setToDateSelects(date) {
    debugStep('setToDateSelects');
    if (!date) return;
    $(".to-day").val(date.getDate());
    $(".to-month").val(date.getMonth());
    $(".to-year").val(date.getFullYear());
}
function swapDatepickerDates() {
    debugStep("swapDatepickerDates");
    var fromDate = $(".from-datepicker").datepicker("getDate");
    var toDate = $(".to-datepicker").datepicker("getDate");

    $(".from-datepicker").datepicker("setDate", toDate);
    $(".to-datepicker").datepicker("setDate", fromDate);
}
function swapSelectDates() {
    debugStep("swapSelectDates");
    var fromDate = readFromDate();
    var toDate = readToDate();

    setFromDateSelects(toDate);
    setToDateSelects(fromDate);
}
function dateSelectChangeHandler() {
    debugStep('dateSelectChangeHandler');
    var fromMonth = parseInt($(".from-month").val(), 10) + 1;
    var fromYear = parseInt($(".from-year").val(), 10);
    var fromDay = parseInt($(".from-day").val(), 10);
    var validFromDay = Math.min(getDaysInMonth(fromMonth, fromYear), fromDay);

    var toMonth = parseInt($(".to-month").val(), 10) + 1;
    var toYear = parseInt($(".to-year").val(), 10);
    var toDay = parseInt($(".to-day").val(), 10);
    var validToDay = Math.min(getDaysInMonth(toMonth, toYear), toDay);

    if (fromDay !== validFromDay) $(".from-day").val(validFromDay);
    if (toDay !== validToDay) $(".to-day").val(validToDay);
    if (readToDate() < readFromDate()) swapSelectDates();


    restrictSelectDates();

    $(".from-datepicker").datepicker("setDate", readFromDate());
    $(".to-datepicker").datepicker("setDate", readToDate());
    cropGraph();
}
function restrictSelectDates(earliest) {
    debugStep("restrictSelectDates");
    var dateControls = [{reader: readFromDate, setter: setFromDateSelects}, {
        reader: readToDate,
        setter: setToDateSelects
    }];
    var now = new Date();

    for (var i = 0; i < dateControls.length; i++) {
        var date = dateControls[i].reader();
        if (date > now) {
            dateControls[i].setter(now);
        } else if (earliest && date < earliest) {
            dateControls[i].setter(earliest);
        }
    }
}
function datePickerChangeHandler() {
    debugStep("datePickerChangeHandler");
    var fromDate = $(".from-datepicker").datepicker("getDate");
    var toDate = $(".to-datepicker").datepicker("getDate");

    if (toDate < fromDate) swapDatepickerDates();

    setFromDateSelects($(".from-datepicker").datepicker("getDate"));
    setToDateSelects($(".to-datepicker").datepicker("getDate"));
    cropGraph();
}