var stockData = null;

var euroInvestor = euroInvestor || {};

euroInvestor.currencyUtils = (function () {

    function currencyAbbreviationToSymbol(abbreviation) {
        switch (abbreviation) {
            case "GBX":
            case "GBP":
                return "£";
            case "USD":
                return "$";
            default:
                return "";
        }
    }

    return {
        currencyAbbreviationToSymbol: currencyAbbreviationToSymbol
    }
}());


euroInvestor.dateUtils = (function () {
    /*
       * Enumeration of how a date can relate to another.
       */
    //var comparisons = {
    //    SAME: "same",
    //    BEFORE: "before",
    //    AFTER: "after"
    //}


    /**
     * Determines one date relates to another (is the same, before or after)
     *
     * @param {Date} dateToTest     The date to test
     * @param {Date} compareToDate  The date to compare against
     *
     * @return {comparison} How the dateToTest relates to the compareToDate (either comparison.SAME, comparison.BEFORE, or comparison.AFTER).
     */
    function compareDates(dateToTest, compareToDate) {
        var _dateToTest = new Date(dateToTest.getTime()).setHours(0, 0, 0, 0),
            _compareToDate = new Date(compareToDate.getTime()).setHours(0, 0, 0, 0);

        if (_dateToTest === _compareToDate) {
            return comparisons.SAME;
        }

        return (dateToTest < compareToDate) ? comparisons.BEFORE : comparisons.AFTER;
    }


    /**
     * Given an array of objects, and the name of the property that holds the date for each object this function does a binary search for the index of the object, 
     * whose date most closely matches the given pickedDate. Note that it is assumed that the arrayed is sorted in ascending order, according to the date property!
     *
     * @param {[Objects]} array     Array of javascript objects. Each must have a property with the name of the "key" param value, containing a Date object.
     *                              Furthermore the array must be sorted in ascending order, according to this property.
     * @param {String} key          The name of the object property that holds the Date object.
     * @param {Date} pickedDate     The date whose closest match will be searched for.
     *
     * @return {Number} The index of the object whose date object is closest to the pickedDate.
     */
    function getIndexThatBestMatchesDate(array, key, pickedDate) {
        var minIndex = 0;
        var maxIndex = array.length - 1;
        var currentIndex;
        var currentElement;


        while (minIndex <= maxIndex) {
            currentIndex = (minIndex + maxIndex) / 2 | 0;
            currentElement = array[currentIndex];

            var comparison = compareDates(new Date(currentElement[key]), pickedDate);

            if (comparison === comparisons.BEFORE) {
                minIndex = currentIndex + 1;
            }
            else if (comparison === comparisons.AFTER) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }

        return currentIndex;
    }

    return {
        getIndexThatBestMatchesDate: getIndexThatBestMatchesDate
    }
}());


euroInvestor.numberUtils = (function () {
    "use strict";

    /**
     * Rounds the given number off to the requested number of decimals. As opposed to the native toFixed method, this doesn't return a 
     * string but a number.
     *
     * @param {Number} number               The number to round off.
     * @param {Number} numberOfDecimals     The number of decimals to round off to.
     *
     * @return {Number} The rounded off number.
     */
    function roundToDecimals(number, numberOfDecimals) {
        return parseFloat(number.toFixed(numberOfDecimals), 10);
    }

    /**
     * Adds thousand separators to the given number.
     *
     * @param {number|string} number        The number to add thousand separator to.
     *
     * @return {string} The given number as a string with thousand separators
     */
    function addThousandSeparator(number) {
        number += '';
        var x = number.split("."),
            x1 = x[0],
            x2 = x.length > 1 ? "." + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + "," + '$2');
        }
        return x1 + x2;
    }

    return {
        roundToDecimals: roundToDecimals,
        addThousandSeparator: addThousandSeparator,
    }
}());

function stockDataToChartData(stockData, _dateProperty, _priceProperty)
{
    var transformedData = [],
        dateProperty = _dateProperty || "date",
        priceProperty = _priceProperty || "closePrice";

    for (var i = 0; i < stockData.length; i++) {
        transformedData.push([new Date(stockData[i][dateProperty]).getTime(), stockData[i][priceProperty]]);
    }

    return transformedData;
}
function readUnit()
{
    return units.fromStringValue($("input[name=invested]:checked").val());
}
function getDaysInMonth(m, y)
{
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((!(y % 4) && y % 100) || !(y % 400)) {
        daysInMonth[1] = 29;
    }
    return daysInMonth[--m];
}

function submit()
{
    debugStep("submit");
    var results = calculate();

    if (typeof (results.buyStockPrice) == 'undefined') {
        setResultsAsNoData();
    } else {

        if (results.buyStockPrice > 0) {

            
            $(".buy-price-cell").text(getActiveCurrency() + ' ' + formatDecimal(results.buyStockPrice));
            $(".est-shares-cell").text(formatDecimal(results.shares));
            $(".sell-price-cell").text(getActiveCurrency() + ' ' + formatDecimal(results.sellStockPrice));
            $(".value-now-cell").text(getActiveCurrency() + ' ' + formatDecimal(results.sellValue));
            $(".yield-cell").text(formatDecimal(results.percentReturn) + "%");
            //$(".buy-price-cell").text(getActiveCurrency() + ' ' + results.buyStockPrice.toFixed(2));
            //$(".est-shares-cell").text(results.shares.toFixed(2));
            //$(".sell-price-cell").text(getActiveCurrency() + ' ' + results.sellStockPrice.toFixed(2));
            //$(".value-now-cell").text(getActiveCurrency() + ' ' + results.sellValue.toFixed(2));
            //$(".yield-cell").text(results.percentReturn.toFixed(2) + "%");
        } else {
            setResultsAsNoData();
        }


        
        var highchart = $(globalChartContainer).highcharts();
        var newData = stockDataToChartData(results.closePriceArray, "date", "closePrice");
        //var newData = stockDataToChartData(results.valueOfHoldingData, "date", "closePrice");

        highchart.series[0].setData(newData);
        highchart.xAxis[0].setExtremes(readFromDate(), readToDate());

    }

    
    
    return false;
}
var units = {
    SHARES: "shares",
    AMOUNT: "amount",
    fromStringValue: function (stringValue)
    {
        return _.find(units, function (unit)
        {
            return (unit === stringValue);
        }) || null;
    }
}
function setResultsAsNoData()
{
    $(".buy-price-cell").text("-");
    $(".est-shares-cell").text("-");
    $(".sell-price-cell").text("-");
    $(".value-now-cell").text("-");
    $(".yield-cell").text("-");
}
function compareDates(dateToTest, compareToDate)
{
    var _dateToTest = new Date(dateToTest.getTime()).setHours(0, 0, 0, 0),
        _compareToDate = new Date(compareToDate.getTime()).setHours(0, 0, 0, 0);

    if (_dateToTest === _compareToDate) {
        return comparisons.SAME;
    }
    return (dateToTest < compareToDate) ? comparisons.BEFORE : comparisons.AFTER;
}
function getIndexThatBestMatchesDate(array, key, pickedDate)
{
    var minIndex = 0;
    var maxIndex = array.length - 1;
    var currentIndex;
    var currentElement;


    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = array[currentIndex];

        var comparison = compareDates(new Date(currentElement[key]), pickedDate);

        if (comparison === comparisons.BEFORE) {
            minIndex = currentIndex + 1;
        }
        else if (comparison === comparisons.AFTER) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }

    return currentIndex;
}
function calculateValueOfHoldingWithReinvestDividend(dividendData, stockData, shares)
{
    debugStep("calculateValueOfHoldingWithReinvestDividend");
    return _.map(stockData, function (stockDataEntry)
    {
        _.each(dividendData, function (dividendDataEntry)
        {
            if (compareDates(new Date(dividendDataEntry.date), new Date(stockDataEntry.date)) === comparisons.SAME) {
                var payout = dividendDataEntry.dividend * shares;
                shares += payout / stockDataEntry.closePrice;
            }
        });

        return {
            date: stockDataEntry.date,
            valueOfHolding: stockDataEntry.closePrice * shares
        }
    });
}
function calculateValueOfHoldingWithCashDividend(dividendData, stockData, investmentDate, shares)
{
    debugStep("calculateValueOfHoldingWithCashDividend");
    return _.map(stockData, function (stockDataEntry)
    {
        var dividendReturns = _.map(dividendData, function (dividendDataEntry)
        {
            if (compareDates(new Date(dividendDataEntry.date), investmentDate) === comparisons.AFTER &&
                compareDates(new Date(dividendDataEntry.date), new Date(stockDataEntry.date)) !== comparisons.AFTER) {
                return dividendDataEntry.dividend * shares;
            }

            return 0;
        });

        var totalDividend = _.reduce(dividendReturns, function (memo, num) { return memo + num; }, 0);

        return {
            date: stockDataEntry.date,
            valueOfHolding: stockDataEntry.closePrice * shares + totalDividend
        }
    });
}
function calculateValueOfHoldingWithoutDividend(stockData, shares)
{
    debugStep("calculateValueOfHoldingWithoutDividend");
    return _.map(stockData, function (stockDataEntry)
    {
        return {
            date: stockDataEntry.date,
            valueOfHolding: stockDataEntry.closePrice * shares
        };
    });
}
function outputClosePriceArray(stockData)
{
    return _.map(stockData, function (stockDataEntry)
    {
        return {
            date: stockDataEntry.date,
            closePrice: stockDataEntry.closePrice
        };
    });
}
function calculateValueOfHolding(stockData, dividendData, investmentDate, shares)
{
    debugStep("calculateValueOfHolding");
    var dividend = $("#dividend").val();
    debugStep("dividend: " + dividend);

        switch (dividend) {
            case "cash":
                return calculateValueOfHoldingWithCashDividend(dividendData, stockData, investmentDate, shares);
                break;
            case "reinvest":
                return calculateValueOfHoldingWithReinvestDividend(dividendData, stockData, shares);
                break;
            case "none":
            default:
                return calculateValueOfHoldingWithoutDividend(stockData, shares);
                break;
        }
}

function calculate()
{
    
    debugStep("calculate");
    var amountInvested = parseFloat($("#amount-invested").val(), 10),
        unit = readUnit(),
        fromDate = readFromDate(),
        toDate = readToDate(),
        results = {};

    if (amountInvested && stockData) {
        var startIndex = getIndexThatBestMatchesDate(stockData, "date", new Date(fromDate)),
            endIndex = getIndexThatBestMatchesDate(stockData, "date", new Date(toDate)),
            buyStockPrice = stockData[startIndex].closePrice,
            sellStockPrice = stockData[endIndex].closePrice;
        results.investmentDate = fromDate;
        results.buyStockPrice = buyStockPrice;
        results.sellStockPrice = sellStockPrice;


        results.shares = (unit === units.SHARES) ? amountInvested : amountInvested / buyStockPrice;
        results.buyValue = (unit === units.SHARES) ? results.shares * buyStockPrice : amountInvested;
        results.valueOfHoldingData = calculateValueOfHolding(stockData, null, fromDate, results.shares);
        results.sellValue = results.valueOfHoldingData[endIndex].valueOfHolding;
        results.percentReturn = ((results.sellValue-results.buyValue) / results.buyValue) * 100;
		
        results.closePriceArray = outputClosePriceArray(stockData);
    }

    return results;
}
function initializeCalc()
{
    debugStep("initializeCalc");
    var calcTemplate = $('#IRCalcTemplate').html();
    var compiledIRCalcTemplate = Handlebars.compile(calcTemplate);
    $(".IRCalcModule").html(compiledIRCalcTemplate(translations));
    requestClosePriceListingData.done(populateChart);

    $('input[name=invested]:radio').on("change", function ()
    {
        if (readUnit().toLowerCase() === "amount") {
            $("#currency-symbol").show();
        } else {
            $("#currency-symbol").hide();
        }
    });

    var toDate = new Date();
    var fromDate = new Date();

    fromDate.setFullYear((new Date()).getFullYear() - 1);

    setFromDateSelects(fromDate);
    setToDateSelects(toDate);
    $(".date-select").on("change", dateSelectChangeHandler);
    $("#from-datepicker").datepicker({ showOn: "button", buttonImage: getImagePath() + "icons/calendar.png", buttonImageOnly: true, onSelect: datePickerChangeHandler, defaultDate: fromDate, maxDate: new Date() });
    $("#to-datepicker").datepicker({ showOn: "button", buttonImage: getImagePath() + "icons/calendar.png", buttonImageOnly: true, onSelect: datePickerChangeHandler, defaultDate: toDate, maxDate: new Date() });

    $("#calc-form").on("submit", submit);
}
//
// Comon for both Calc & Lookup
//
var comparisons = {
    SAME: "same",
    BEFORE: "before",
    AFTER: "after"
}
function populateChart(closePriceListingData)
{
    debugStep("populateChart");
    var transformedData = [];
    stockData = closePriceListingData.data[globalActiveListingIndex].data;

    $("#from-datepicker").datepicker("option", "minDate", new Date(stockData[0].date));
    $("#to-datepicker").datepicker("option", "minDate", new Date(stockData[0].date));

    dateSelectChangeHandler();

    transformedData = stockDataToChartData(stockData);
    
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
            formatter: function ()
            {
                var date = Highcharts.dateFormat('%Y-%m-%d', this.x);

                var time = Highcharts.dateFormat('%H:%M:%S', this.x);
                var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                var unixDate = new moment(date + 'T00:00:00.0000000Z').valueOf();
                var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();

                return updateTooltipCalc(unixDateTime);
            },
            positioner: function (boxWidth, boxHeight, point)
            {
                var chartWidth = $(globalChartContainer).width();
                var plotX = point.plotX + 30;

                if (plotX > chartWidth - boxWidth - 50) {
                    plotX = plotX - boxWidth - 40;
                }
                return { x: plotX, y: boxHeight };
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
    cropGraph();
}
function applyChartChart()
{
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
            }
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
            }
            break;
    }
}
function applyChartYAxis()
{
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
                    formatter: function ()
                    {
                        return formatDecimal(this.value) + '';
                    }
                },
                title: {
                    text: ''
                }
            }
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
                useHTML: true,
                tickPosition: 'outside',
                labels: {
                    align: 'left',
                    x: 5,
                    y: -5,
                    formatter: function ()
                    {
                        return formatDecimal(this.value) + '';
                    }
                },
                title: {
                    text: ''
                }
            }
            break;
    }
}
function cropGraph()
{
    debugStep("cropGraph");
    $(globalChartContainer).highcharts().xAxis[0].setExtremes(readFromDate(), readToDate());
    $(globalChartContainer).highcharts().xAxis[0].setExtremes(readFromDate(), readToDate());
}
function readFromDate()
{
    var fromDate = new Date(parseInt($("#from-year").val()), parseInt($("#from-month").val()), parseInt($("#from-day").val()));
    return fromDate;
}
function readToDate()
{
    var toDate = new Date(parseInt($("#to-year").val()),parseInt($("#to-month").val()),parseInt($("#to-day").val()));
    return toDate;
}
function setFromDateSelects(date)
{
    if (!date) return;
    $("#from-day").val(date.getDate());
    $("#from-month").val(date.getMonth());
    $("#from-year").val(date.getFullYear());
}
function setToDateSelects(date)
{
    if (!date) return;
    $("#to-day").val(date.getDate());
    $("#to-month").val(date.getMonth());
    $("#to-year").val(date.getFullYear());
}
function swapDatepickerDates()
{
    var fromDate = $("#from-datepicker").datepicker("getDate");
    var toDate = $("#to-datepicker").datepicker("getDate");

    $("#from-datepicker").datepicker("setDate", toDate);
    $("#to-datepicker").datepicker("setDate", fromDate);
}
function swapSelectDates()
{
    var fromDate = readFromDate();
    var toDate = readToDate();

    setFromDateSelects(toDate);
    setToDateSelects(fromDate);

    var toMonth = $("#to-month").val();
    var toYear = $("#to-year").val();
    var toDay = $("#to-day").val();
}
function dateSelectChangeHandler()
{
    debugStep("dateSelectChangeHandler");
    var fromMonth = parseInt($("#from-month").val(), 10) + 1;
    var fromYear = parseInt($("#from-year").val(), 10);
    var fromDay = parseInt($("#from-day").val(), 10);
    var validFromDay = Math.min(getDaysInMonth(fromMonth, fromYear), fromDay);

    var toMonth = parseInt($("#to-month").val(), 10) + 1;
    var toYear = parseInt($("#to-year").val(), 10);
    var toDay = parseInt($("#to-day").val(), 10);
    var validToDay = Math.min(getDaysInMonth(toMonth, toYear), toDay);

    if (fromDay !== validFromDay) $("#from-day").val(validFromDay);
    if (toDay !== validToDay) $("#to-day").val(validToDay);
    if (readToDate() < readFromDate()) swapSelectDates();

    restrictSelectDates();

    $("#from-datepicker").datepicker("setDate", readFromDate());
    $("#to-datepicker").datepicker("setDate", readToDate());
}
function restrictSelectDates(earliest)
{
    debugStep("restrictSelectDates");
    var dateControls = [{ reader: readFromDate, setter: setFromDateSelects }, { reader: readToDate, setter: setToDateSelects }];
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
function datePickerChangeHandler()
{
    debugStep("datePickerChangeHandler");
    var fromDate = $("#from-datepicker").datepicker("getDate"),
        toDate = $("#to-datepicker").datepicker("getDate");

    if (toDate < fromDate) swapDatepickerDates();

    setFromDateSelects($("#from-datepicker").datepicker("getDate"));
    setToDateSelects($("#to-datepicker").datepicker("getDate"));
}

function debugDataContent(data)
{
    if (debug) {
        if (window.console) {
            console.log(data);
        }
    }
}