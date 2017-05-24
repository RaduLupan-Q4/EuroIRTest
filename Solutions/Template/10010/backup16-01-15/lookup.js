﻿$(function () {
    var currency = "Kr. ";
    var stockData = null;
    
    function populateChart(closePriceListingData)
    {
        debugger
        //debugDataContent(closePriceListingData);
        var transformedData = [];
        stockData = closePriceListingData.data[0].data;

        $("#from-datepicker").datepicker("option", "minDate", new Date(stockData[0].date));
        $("#to-datepicker").datepicker("option", "minDate", new Date(stockData[0].date));

        transformedData = stockDataToChartData(stockData);

        $("#lookup-chart").highcharts({
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: "${point.y:.2f}"
            },
            xAxis: {
                tickPixelInterval: 70,
                type: 'datetime',
                labels: {
                    formatter: function () {
                        return Highcharts.dateFormat('%d %b', this.value);
                    }
                }
            },
            yAxis: {
                opposite: true,
                tickPixelInterval: 35,
                labels: {
                    formatter: function () {
                        return currency + this.value;
                    }
                },
                title: {
                    text: null
                }
            },
            plotOptions: {
                series: {
                    animation: {
                        duration: 1
                    },
                    dataGrouping: {
                        smoothed: false,
                        groupPixelWidth: 10,
                        units: [[
                            'day', [1]],
                            ['week', [1]],
                            ['month', [1]],
                            ['year', [1]
                            ]],
                        smoothed: true
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                showInLegend: false,
                name: 'Share Price',
                data: transformedData
            }]
        });
        cropGraph();
    }

    function cropGraph() {
        var highchart = $("#lookup-chart").highcharts();
        console.log("Cropping to: ", readFromDate(), " and ", readToDate());
        highchart.xAxis[0].setExtremes(readFromDate(), readToDate());
    }

    function cropListToDateRange(list, from, to) {
        //Assumes that the list is sorted by date (ascending or descending - doesn't matter)!
        var startIndex = getIndexThatBestMatchesDate(list, "date", from),
            endIndex = getIndexThatBestMatchesDate(list, "date", to);

        if (startIndex > endIndex) {
            var tmpIndex = startIndex;
            startIndex = endIndex;
            endIndex = startIndex;
        }

        return list.slice(startIndex, endIndex);
    }

    function downscaleData(list, frequency) {
        //Assumes the list is sorted by date (newest entry first)
        var downscaled = [];
        var date = new Date(list[0].date);

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
        var croppedData = cropListToDateRange(stockData, fromDate, toDate),
            downscaledData = downscaleData(croppedData, frequency);

        return stockDateToListDate(downscaledData).reverse();
    }

    function populateList(closePrices)
    {
        
        var lookupListTemplate = $("#IRLookupTableTemplate").html(),
            stockData = closePrices.data[0].data,
            compiledIRLookupListTemplate = Handlebars.compile(lookupListTemplate);

        var fromDateRaw = getParameterByName("from"),
            toDateRaw = getParameterByName("to"),
            frequency = getParameterByName("frequency") || "daily",
            fromDate = (fromDateRaw) ? new Date(fromDateRaw) : new Date(stockData[0].date),
            toDate = (toDateRaw) ? new Date(toDateRaw) : new Date(stockData[stockData.length-1].date);

        debugger
        var downscaledData = getCroppedDownscaledData(stockData, fromDate, toDate, frequency);
        //debugger
        //var atmp = stockDateToListDate(downscaledData).reverse()
        //debugger
        debugger
        $(".IRLookupModule").html(compiledIRLookupListTemplate({ closePrices: downscaledData, headers: defaultTranslations }));
    }

    //var closePriceRequest = $.ajax("http://localhost:1337/ServiceEngine/api/json/reply/RequestClosePriceBundle_OHLC", {
    //    method: "GET",
    //    traditional: true,
    //    data: {
    //        apiVersion: 1,
    //        lcid: 1033,
    //        solutionID: 10010,
    //        customerKey: 'Template',
    //        numberOfYears: 10,
    //        instrumentTypes: ["Listing"]
    //    }
    //});
    
    
    function stockDataToChartData(stockData, _dateProperty, _priceProperty) {
        var transformedData = [],
            dateProperty = _dateProperty || "date",
            priceProperty = _priceProperty || "closePrice";

        for (var i = 0; i < stockData.length; i++) {
            transformedData.push([new Date(stockData[i][dateProperty]).getTime(), stockData[i][priceProperty]]);
        }

        console.log(transformedData);
        return transformedData;
    }

    function stockDateToListDate(stockData, _dateProperty) {
        var transformedData = [],
             dateProperty = _dateProperty || "date";

        for (var i = 0; i < stockData.length; i++) {
            var entry = stockData[i];
            entry[dateProperty] = new Date(entry[dateProperty]).toLocaleDateString();

            transformedData.push(entry);
            
        }
        debugger
        return transformedData;
    }

    function readToDate() {
        var toDate = new Date();
        toDate.setDate($("#to-day").val());
        toDate.setMonth($("#to-month").val());
        toDate.setFullYear($("#to-year").val());

        return toDate;
    }

    function readFromDate() {
        var fromDate = new Date();
        fromDate.setDate($("#from-day").val());
        fromDate.setMonth($("#from-month").val());
        fromDate.setFullYear($("#from-year").val());

        return fromDate;
    }

    function readFormat() {
        return $("#format").val();
    }

    function readFrequency() {
        return $("#frequency").val();
    }

    function setFromDateSelects(date) {
        if (!date) return;

        $("#from-day").val(date.getDate());
        $("#from-month").val(date.getMonth());
        $("#from-year").val(date.getFullYear());
    }

    function setToDateSelects(date) {
        if (!date) return;

        $("#to-day").val(date.getDate());
        $("#to-month").val(date.getMonth());
        $("#to-year").val(date.getFullYear());
    }

    function swapDatepickerDates() {
        var fromDate = $("#from-datepicker").datepicker("getDate"),
            toDate = $("#to-datepicker").datepicker("getDate");

        $("#from-datepicker").datepicker("setDate", toDate);
        $("#to-datepicker").datepicker("setDate", fromDate);
    }

    function swapSelectDates() {
        var fromDate = readFromDate(),
            toDate = readToDate();

        setFromDateSelects(toDate);
        setToDateSelects(fromDate);

        var toMonth = $("#to-month").val(),
            toYear = $("#to-year").val(),
            toDay = $("#to-day").val();
    }

    
    function restrictSelectDates(earliest) {
        var dateControls = [{ reader: readFromDate, setter: setFromDateSelects}, { reader: readToDate, setter: setToDateSelects}],
            now = new Date();
        
        for (var i = 0; i < dateControls.length; i++) {
            var date = dateControls[i].reader();
            if (date > now) {
                dateControls[i].setter(now);
            } else if (earliest && date < earliest) {
                dateControls[i].setter(earliest);
            }
        }
    }

    function dateSelectChangeHandler() {
        var fromMonth = parseInt($("#from-month").val(), 10) + 1,
            fromYear = parseInt($("#from-year").val(), 10),
            fromDay = parseInt($("#from-day").val(), 10),
            validFromDay = Math.min(getDaysInMonth(fromMonth, fromYear), fromDay);

        var toMonth = parseInt($("#to-month").val(), 10) + 1,
            toYear = parseInt($("#to-year").val(), 10),
            toDay = parseInt($("#to-day").val(), 10),
            validToDay = Math.min(getDaysInMonth(toMonth, toYear), toDay);

        if (fromDay !== validFromDay) $("#from-day").val(validFromDay);
        if (toDay !== validToDay) $("#to-day").val(validToDay);
        if (readToDate() < readFromDate()) swapSelectDates();
        
        restrictSelectDates();
        
        $("#from-datepicker").datepicker("setDate", readFromDate());
        $("#to-datepicker").datepicker("setDate", readToDate());
        cropGraph();
    }

    function datePickerChangeHandler() {
        var fromDate = $("#from-datepicker").datepicker("getDate"),
            toDate = $("#to-datepicker").datepicker("getDate");

        if (toDate < fromDate) swapDatepickerDates();

        setFromDateSelects($("#from-datepicker").datepicker("getDate"));
        setToDateSelects($("#to-datepicker").datepicker("getDate"));
        cropGraph();
    }

    function submit() {
        lookup();
       
        var highchart = $("#calc-chart").highcharts();
        if (highchart) { //Temporary guard!!
            highchart.xAxis[0].setExtremes(readFromDate(), readToDate());
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

            var comparison = compareDates(new Date(currentElement[key]), pickedDate);

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

    function lookup() {
        //Read the value of format and determine what to open!
        if (readFormat().toLowerCase() === "excel") {
            var startDate = readFromDate(),
                endDate = readToDate(),
                frequency = readFrequency();
            
            closePriceRequest.done(function (closePrices) {
                var downscaledData = getCroppedDownscaledData(closePrices.data[0].data, startDate, endDate, frequency),
                    stringified = JSV.stringify(downscaledData); // Using JSV because service engine expects that.

                ajax_download("http://localhost:1337/ServiceEngine/api/json/reply/RequestClosePriceFileFromData/", {
                    data: stringified,
                    apiVersion: 1,
                    lcid: 1033,
                    solutionID: 1008,
                    customerKey: "unittest",
                    ContentType: "application/vnd.ms-excel"
                });
            });                 
        } else {
            var url = window.location.href;
            url += (url.indexOf("?") === -1) ? "?" : "&";
            url += "mode=list&from=" + readFromDate() + "&to=" + readToDate() + "&frequency=" + readFrequency();

            window.open(url, "_blank", "location=no,toolbars=no,resizable=yes");
        }
        return false;
    }

    function initializeLookup() {
        if (getParameterByName("mode") === "list") {
            requestClosePriceListingData.done(populateList);
        } else {
            var lookupTemplate = $('#IRLookupTemplate').html(),
                compiledIRLookupTemplate = Handlebars.compile(lookupTemplate);
            $(".IRLookupModule").html(compiledIRLookupTemplate(defaultTranslations));
            requestClosePriceListingData.done(populateChart);
        }

        var toDate = new Date(),
            fromDate = new Date();

        fromDate.setFullYear((new Date()).getFullYear() - 1);

        setFromDateSelects(fromDate);
        setToDateSelects(toDate);
        $(".date-select").on("change", dateSelectChangeHandler);
        $("#from-datepicker").datepicker({ showOn: "button", buttonImage: "../../inc/images/icons/calendar.png", buttonImageOnly: true, onSelect: datePickerChangeHandler, defaultDate: fromDate, maxDate: new Date()});
        $("#to-datepicker").datepicker({ showOn: "button", buttonImage: "../../inc/images/icons/calendar.png", buttonImageOnly: true, onSelect: datePickerChangeHandler, defaultDate: toDate, maxDate: new Date()});
        $("#lookup-form").on("submit", submit);
    }
    initializeLookup();
});