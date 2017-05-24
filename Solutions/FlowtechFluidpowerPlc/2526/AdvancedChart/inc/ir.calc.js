var stockDataBackup = null;
var stockData = null;
var globalRawCurrencyData = null;
var globalActiveCalcCurrency = null;
function stockDataToChartData(stockData, _dateProperty, _priceProperty) {
    var transformedData = [],
        dateProperty = _dateProperty || "date",
        priceProperty = _priceProperty || "closePrice";

    for (var i = 0; i < stockData.length; i++) {
        transformedData.push([new Date(stockData[i][dateProperty]).getTime(), stockData[i][priceProperty]]);
    }

    return transformedData;
}
function readUnit() {
    return units.fromStringValue($("input[name=invested]:checked").val());
}
function getDaysInMonth(m, y) {
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((!(y % 4) && y % 100) || !(y % 400)) {
        daysInMonth[1] = 29;
    }
    return daysInMonth[--m];
}

function submitCheck() {

    debugStep("submitCheck()");
    
    var fromCurrency = globalActiveCalcCurrency;
    var toCurrency = $('#currencyConversion').val();
    if (typeof (toCurrency) != "undefined" && toCurrency != "Current" && fromCurrency != toCurrency && toCurrency != "GBX") {

        globalActiveCalcCurrency = toCurrency.replace('GBX', 'GBP');

        loadFeatureCurrencyConversion(fromCurrency.replace('GBX', 'GBP'), toCurrency.replace('GBX', 'GBP'), 10); 

        $.when(requestFeatureCurrencyConversionData)

            .done(function (currencyConversionData) {

                globalRawCurrencyData = currencyConversionData.data;
                stockData = stockDataBackup;
                adjustStockData(fromCurrency.replace('GBX', 'GBP'));
                submit();
            });

    } else {
        if (toCurrency == 'Current') {

            globalActiveCalcCurrency = 'GBP';
            // reverse data
            stockData = stockDataBackup;
            adjustStockDataNoConversion();

            submit();
            

        } else {

            globalActiveCalcCurrency = 'GBP';
            // reverse data
            stockData = stockDataBackup;
            adjustStockDataNoConversion();

            submit();
        }
    }
    return false;
}
function submit() {
    debugStep("submit");

    //globalChartListingStockDataOHLCV[globalActiveListingIndex] = stockData;

    if ($('#amount-invested').val() != 0 && $('#amount-invested').val() != "" && $('#amount-invested').val() != "-") {
        $('.result-wrapper').css('display', 'block');
    }

    $('.cumulative-change').click(function () {
        $('.IRChartCalcPlaceholder').css('display', 'block');
        $('.IRChartStackedCalcPlaceholder').css('display', 'none');
        $('.graph-text').html("Cumulative change");
    });
    $('.periodical-change').click(function () {
        $('.IRChartCalcPlaceholder').css('display', 'none');
        $('.IRChartStackedCalcPlaceholder').css('display', 'block');
        $('.graph-text').html("Periodical change");
    });
    
    var results = calculate();
    if (typeof (results.buyStockPrice) == 'undefined') {
        setResultsAsNoData();
    } else {

        if (results.buyStockPrice > 0) {

            $(".value-then-cell").text(globalActiveCalcCurrency + ' ' + formatDecimal(results.buyValue));
            $(".buy-price-cell").text(globalActiveCalcCurrency + ' ' + formatDecimal(results.buyStockPrice));
            $(".est-shares-cell").text(formatDecimal(results.shares));
            $(".sell-price-cell").text(globalActiveCalcCurrency + ' ' + formatDecimal(results.sellStockPrice));
            $(".value-now-cell").text(globalActiveCalcCurrency + ' ' + formatDecimal(results.sellValue));
            $(".yield-cell").text(formatDecimal(results.percentReturn) + "%");


            calculateAnnualizedChange();


            //$(".buy-price-cell").text(globalActiveCalcCurrency + ' ' + results.buyStockPrice.toFixed(2));
            //$(".est-shares-cell").text(results.shares.toFixed(2));
            //$(".sell-price-cell").text(globalActiveCalcCurrency + ' ' + results.sellStockPrice.toFixed(2));
            //$(".value-now-cell").text(globalActiveCalcCurrency + ' ' + results.sellValue.toFixed(2));
            //$(".yield-cell").text(results.percentReturn.toFixed(2) + "%");
        } else {
            setResultsAsNoData();
        }


        var highchart = $(globalChartContainer).highcharts();
        var newData = stockDataToChartData(stockData, "date", "closePrice");
        //var newData = stockDataToChartData(results.valueOfHoldingData, "date", "closePrice");

        highchart.series[0].setData(newData);
        highchart.xAxis[0].setExtremes(readFromDate(), readToDate());
    }


    return false;
}
var units = {
    SHARES: "shares",
    AMOUNT: "amount",
    fromStringValue: function (stringValue) {
        return _.find(units, function (unit) {
            return (unit === stringValue);
        }) || null;
    }
}
function setResultsAsNoData() {
    $(".buy-price-cell").text("-");
    $(".est-shares-cell").text("-");
    $(".sell-price-cell").text("-");
    $(".value-now-cell").text("-");
    $(".yield-cell").text("-");
}
function compareDates(dateToTest, compareToDate) {
    var _dateToTest = new Date(dateToTest.getTime()).setHours(0, 0, 0, 0),
        _compareToDate = new Date(compareToDate.getTime()).setHours(0, 0, 0, 0);

    if (_dateToTest === _compareToDate) {
        return comparisons.SAME;
    }
    return (dateToTest < compareToDate) ? comparisons.BEFORE : comparisons.AFTER;
}
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
function calculateValueOfHoldingWithReinvestDividend(dividendData, stockData, shares) {
    debugStep("calculateValueOfHoldingWithReinvestDividend");
    return _.map(stockData, function (stockDataEntry) {
        _.each(dividendData, function (dividendDataEntry) {
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
function calculateValueOfHoldingWithCashDividend(dividendData, stockData, investmentDate, shares) {
    debugStep("calculateValueOfHoldingWithCashDividend");
    return _.map(stockData, function (stockDataEntry) {
        var dividendReturns = _.map(dividendData, function (dividendDataEntry) {
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
function calculateValueOfHoldingWithoutDividend(stockData, shares) {
    debugStep("calculateValueOfHoldingWithoutDividend");
    return _.map(stockData, function (stockDataEntry) {
        return {
            date: stockDataEntry.date,
            valueOfHolding: stockDataEntry.closePrice * shares
        };
    });
}
function outputClosePriceArray(stockData) {
    return _.map(stockData, function (stockDataEntry) {
        return {
            date: stockDataEntry.date,
            closePrice: stockDataEntry.closePrice
        };
    });
}
function calculateValueOfHolding(stockData, dividendData, investmentDate, shares) {
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

function calculate() {

    debugStep("calculate");
    var amountInvested = parseFloat($("#amount-invested").val(), 10),
        unit = readUnit(),
        fromDate = readFromDate(),
        toDate = readToDate(),
        results = {};
    if (amountInvested && stockData) {

        var startIndex = getIndexThatBestMatchesDate(stockData, "date", new Date(fromDate)),
            endIndex = getIndexThatBestMatchesDate(stockData, "date", new Date(toDate)),
            buyStockPrice = parseFloat(stockData[startIndex].closePrice),
            sellStockPrice = parseFloat(stockData[endIndex].closePrice);

        results.investmentDate = fromDate;
        results.buyStockPrice = parseFloat(buyStockPrice);
        results.sellStockPrice = parseFloat(sellStockPrice);


        results.shares = (unit === units.SHARES) ? amountInvested : amountInvested / buyStockPrice;
        results.buyValue = (unit === units.SHARES) ? results.shares * buyStockPrice : amountInvested;
        results.valueOfHoldingData = calculateValueOfHolding(stockData, null, fromDate, results.shares);
        results.sellValue = results.valueOfHoldingData[endIndex].valueOfHolding;
        results.percentReturn = ((results.sellValue - results.buyValue) / results.buyValue) * 100;


        results.closePriceArray = outputClosePriceArray(stockData);
    }

    return results;
}
function initializeCalc() {
    debugStep("initializeCalc");
    var calcTemplate = $('#IRCalcTemplate').html();
    var compiledIRCalcTemplate = Handlebars.compile(calcTemplate);
    $(".IRCalcModule").html(compiledIRCalcTemplate(translations));
    requestClosePriceListingData.done(populateChart);

    globalActiveCalcCurrency = getActiveCurrency();

    $('input[name=invested]:radio').on("change", function () {
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

    $("ul.tabs a").click(function () {
        $('ul li.calcActive').removeClass('calcActive');
        $(this).closest('li').addClass('calcActive');

        if ($(this).attr('id') == "byAmountInvested") {
            $('#amount-radio').prop('checked', true);
            $('.amount-invested-label').text("Amount invested");
            $('#amount-invested').val(amountInvestedValue);

        } else {
            $('#shares-radio').prop('checked', true);
            $('.amount-invested-label').text("Number of shares invested");
            $('#amount-invested').val(($('.est-shares-cell').text()));
        }
    });

    $("#calc-form").on("submit", submitCheck);
}
//
// Comon for both Calc & Lookup
//
var comparisons = {
    SAME: "same",
    BEFORE: "before",
    AFTER: "after"
}
function populateChart(closePriceListingData) {
    debugStep("populateChart");
    var transformedData = [];
    stockData = closePriceListingData.data[globalActiveListingIndex].data;

    stockDataBackup = stockData;

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
            formatter: function () {
                var date = Highcharts.dateFormat('%Y-%m-%d', this.x);

                var time = Highcharts.dateFormat('%H:%M:%S', this.x);
                var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                var unixDate = new moment(date + 'T00:00:00.0000000Z').valueOf();
                var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();
                return updateTooltipCalcCustom(unixDateTime, stockData);
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
                    formatter: function () {
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
function cropGraph() {
    debugStep("cropGraph");
    $(globalChartContainer).highcharts().xAxis[0].setExtremes(readFromDate(), readToDate());
    $(globalChartContainer).highcharts().xAxis[0].setExtremes(readFromDate(), readToDate());
}
function readFromDate() {
    var fromDate = new Date(parseInt($("#from-year").val()), parseInt($("#from-month").val()), parseInt($("#from-day").val()));
    return fromDate;
}
function readToDate() {
    var toDate = new Date(parseInt($("#to-year").val()), parseInt($("#to-month").val()), parseInt($("#to-day").val()));
    return toDate;
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
    var fromDate = $("#from-datepicker").datepicker("getDate");
    var toDate = $("#to-datepicker").datepicker("getDate");

    $("#from-datepicker").datepicker("setDate", toDate);
    $("#to-datepicker").datepicker("setDate", fromDate);
}
function swapSelectDates() {
    var fromDate = readFromDate();
    var toDate = readToDate();

    setFromDateSelects(toDate);
    setToDateSelects(fromDate);

    var toMonth = $("#to-month").val();
    var toYear = $("#to-year").val();
    var toDay = $("#to-day").val();
}
function dateSelectChangeHandler() {
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
function restrictSelectDates(earliest) {
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
function datePickerChangeHandler() {
    debugStep("datePickerChangeHandler");
    var fromDate = $("#from-datepicker").datepicker("getDate"),
        toDate = $("#to-datepicker").datepicker("getDate");

    if (toDate < fromDate) swapDatepickerDates();

    setFromDateSelects($("#from-datepicker").datepicker("getDate"));
    setToDateSelects($("#to-datepicker").datepicker("getDate"));
}

// Custom
function adjustStockData(fromCurrency) {

    debugStep("adjustStockData(fromCurrency: " + fromCurrency + ")");

    var stockDataClone = [];

    var divideFactor = 1;
    if (getActiveCurrency().toLowerCase() == "gbx") {
        divideFactor = 100;
    }

    $.each(stockData, function (index, item) {

        var stockDataElement = {
            closePrice: null,
            date: null,
            high: null,
            low: null,
            openPrice: null,
            volume: null
        };

        var dateTS = new moment(item.date);

        var indexMatch = getIndexThatBestMatchesDate(globalRawCurrencyData, "date", new Date(item.date));

        stockDataElement.date = item.date;
        stockDataElement.closePrice = (item.closePrice / divideFactor) * globalRawCurrencyData[indexMatch].conversationFactor;
        stockDataElement.openPrice = (item.openPrice / divideFactor) * globalRawCurrencyData[indexMatch].conversationFactor;
        stockDataElement.high = (item.high / divideFactor) * globalRawCurrencyData[indexMatch].conversationFactor;
        stockDataElement.low = (item.low / divideFactor) * globalRawCurrencyData[indexMatch].conversationFactor;
        stockDataElement.volume = item.volume;

        stockDataClone.push(stockDataElement);

        globalChartListingStockDataDates[0].push(dateTS.valueOf());

    });

    stockData = stockDataClone;
    globalChartListingStockDataOHLCV = stockDataClone;

    //globalChartListingStockDataOHLCV[globalActiveListingIndex] = stockData;

}
function adjustStockDataNoConversion() {

    debugStep("adjustStockDataNoConversion");

    var stockDataClone = [];

    var divideFactor = 1;
    if (getActiveCurrency().toLowerCase() == "gbx") {
        divideFactor = 100;
    }

    $.each(stockData, function (index, item) {

        var stockDataElement = {
            closePrice: null,
            date: null,
            high: null,
            low: null,
            openPrice: null,
            volume: null
        };

        var dateTS = new moment(item.date);

        stockDataElement.date = item.date;
        stockDataElement.closePrice = (item.closePrice / divideFactor);
        stockDataElement.openPrice = (item.openPrice / divideFactor);
        stockDataElement.high = (item.high / divideFactor);
        stockDataElement.low = (item.low / divideFactor);
        stockDataElement.volume = item.volume;

        stockDataClone.push(stockDataElement);

        globalChartListingStockDataDates[0].push(dateTS.valueOf());

    });

    stockData = stockDataClone;
    globalChartListingStockDataOHLCV = stockDataClone;

    //globalChartListingStockDataOHLCV[globalActiveListingIndex] = stockData;

}
function calculateAnnualizedChange() {


    $('.result-close-button').click(function () {
        $('.result-wrapper').css('display', 'none');
    });
    var amountOfShares = ($('.Data.est-shares-cell').text() * 100);

    //get start and end-date input
    var oldStartDate = moment.utc(readFromDate()).toISOString();
    var closestStartDate = getIndexThatBestMatchesDate(stockData, "date", new Date(oldStartDate), true);
    var startDate = stockData[closestStartDate].date;

    var oldEndDate = moment.utc(readToDate()).toISOString();
    var closestEndDateIndex = getIndexThatBestMatchesDate(stockData, "date", new Date(oldEndDate), true);
    var endDate = stockData[closestEndDateIndex].date;


    //get amount of days
    var amountOfDays = calcDaysBetweenDates(startDate, endDate);

    //filter data
    var filteredData = filterData(startDate, endDate);

    //get start date and end date based on filtered data
    $('.Initial-investment-from').html(moment(startDate).format("dddd, MMMM Do YYYY"));
    $('.End-Value-to').html(moment(endDate).format("dddd, MMMM Do YYYY"));

    //get "value then" value based on filtered array
    var valueThen = (filteredData[0].closePrice / 100 * amountOfShares);
    $('.value-then-cell').html(valueThen.toFixed(2));

    //get value now
    //var valueNow = ((requestStockData.responseJSON.data[0].prevClose * amountOfShares) / 100);
    //var valueNow = ((stockData[0].prevClose * amountOfShares) / 100);
    var valueNow = ((filteredData[filteredData.length - 1].closePrice * amountOfShares) / 100);

    //get change value
    $('.change-cell').text(parseFloat(valueNow - valueThen).toFixed(2));
    //get annualized change
    var annualChange = ((Math.pow(valueNow / valueThen, (1 / (amountOfDays / 365))) - 1) * 100);
    $('.annualized-change-cell').text(annualChange.toFixed(2) + "%");


    //show view depending on amount of days
    if (amountOfDays <= 15) {
        dataArrayOutputter('daily', filteredData);
    }
    if (amountOfDays > 15 && amountOfDays <= 90) {
        dataArrayOutputter('weekly', filteredData);
    }
    if (amountOfDays > 90 && amountOfDays <= 365) {
        dataArrayOutputter('monthly', filteredData);
    }

    if (amountOfDays > 365 && amountOfDays < 1095) {
        dataArrayOutputter('quarterly', filteredData);

    }
    if (amountOfDays >= 1095) {
        dataArrayOutputter('yearly', filteredData);
    }

    //creates arrays of data and categories
    function dataArrayOutputter(frequency, closePriceArray) {

        //var startDay = moment(closePriceArray[0].date).format('M');

        var startClosePrise = (closePriceArray[0].closePrice / 100 * amountOfShares);
        var startClosePriseDate = (moment(closePriceArray[0].date).format('DD/MM/YYYY'));

        //start categories row
        //var startCategoryDate = "Start";

        //Arrays
        var sharePriceArray = [];
        var categoriesArray = [];

        var filteredDataLength = closePriceArray.length;
        var previousTriggertimestamp;

        for (var i = 0; i < filteredDataLength; i++) {
            var fullDate = closePriceArray[filteredDataLength - i - 1];
            var convertedDate = moment(fullDate.date, 'YYYY/MM/DD');
            var triggertimestamp;

            if (frequency == 'yearly') {
                triggertimestamp = convertedDate.format('YYYY');
            }
            if (frequency == 'quarterly') {
                triggertimestamp = Math.floor((parseInt(convertedDate.format('M')) - 1) / 3);
            }
            if (frequency == 'monthly') {
                triggertimestamp = convertedDate.format('M');
            }
            if (frequency == 'weekly') {
                triggertimestamp = getWeek(convertedDate.format('YYYY'), convertedDate.format('M'), convertedDate.format('D'));
            }
            if (frequency == 'daily') {
                triggertimestamp = convertedDate.format('D');
                startClosePriseDate = moment(closePriceArray[0].date).format('D');


            }

            if (triggertimestamp != previousTriggertimestamp && triggertimestamp != startClosePriseDate) {
                //push to sharePrice Array
                sharePriceArray.unshift(fullDate.closePrice / 100 * amountOfShares);
                categoriesArray.unshift(moment(fullDate.date).format('DD/MM/YYYY'));
            }
            previousTriggertimestamp = triggertimestamp;
        }
        //push to sharePrice Array
        sharePriceArray.unshift(startClosePrise);
        //push to categories array
        categoriesArray.unshift(moment(startClosePriseDate).format('DD/MM/YYYY'));


        //calculate the value which will then be shown in chart
        calculateIncreaseDecrease(categoriesArray, sharePriceArray);
    }

    function y2k(number) { return (number < 1000) ? number + 1900 : number; }
    function getWeek(year, month, day) {
        var when = new Date(year, month - 1, day);
        var newYear = new Date(year, 0, 1);
        var modDay = newYear.getDay();
        if (modDay == 0) modDay = 6; else modDay--;

        var daynum = ((Date.UTC(y2k(year), when.getMonth(), when.getDate(), 0, 0, 0) -
                     Date.UTC(y2k(year), 0, 1, 0, 0, 0)) / 1000 / 60 / 60 / 24) + 1;

        if (modDay < 4) {
            var weeknum = Math.floor((daynum + modDay - 1) / 7) + 1;
        }
        else {
            var weeknum = Math.floor((daynum + modDay - 1) / 7);
            if (weeknum == 0) {
                year--;
                var prevNewYear = new Date(year, 0, 1);
                var prevmodDay = prevNewYear.getDay();
                if (prevmodDay == 0) prevmodDay = 6; else prevmodDay--;
                if (prevmodDay < 4) weeknum = 53; else weeknum = 52;
            }
        }

        return +weeknum;
    }

    //calculate the differenst between the arrays from dataArrayOutputter
    function calculateIncreaseDecrease(categoriesArray, sharePriceArray) {
        var increase = [null];
        var decrease = [null];
        var newSharePriceArray = [];

        newSharePriceArray.push(sharePriceArray[0]);
        var newSharePrice;

        for (var i = 0; i < sharePriceArray.length - 1; i++) {
            var difference = (sharePriceArray[i + 1] - sharePriceArray[i]);
            var differenceRounded = Math.round(difference * 100) / 100;


            if (differenceRounded >= 0) {
                newSharePrice = sharePriceArray[i + 1] - differenceRounded;
                newSharePriceArray.push(newSharePrice);
                increase.push(differenceRounded);
                decrease.push(null);
            } else {
                newSharePrice = sharePriceArray[i] - -differenceRounded;
                newSharePriceArray.push(newSharePrice);
                decrease.push(Math.abs(differenceRounded));
                increase.push(null);
            }
        }
        var yAxisStart = Math.min.apply(Math, newSharePriceArray) - 5;
        if (yAxisStart < 0) {
            drawStackChart(categoriesArray, newSharePriceArray, decrease, increase, 0);

        } else {
            drawStackChart(categoriesArray, newSharePriceArray, decrease, increase, yAxisStart);
        }

    }


    //filter data by selected period
    function filterData(startDate, endDate) {

        // Currency Conversion



        // END

        var filteredData = stockData.filter(function (item) {


            if (item.date >= startDate && item.date <= endDate) {
                return item;
            }
        });
        return filteredData;
    }


    //calculate amount of days between start- and endDate
    function calcDaysBetweenDates(startDate, endDate) {
        var date_diff = (moment(endDate) - moment(startDate));
        var convertToAmountDays = Math.round(date_diff / (1000 * 60 * 60 * 24));
        return convertToAmountDays;
    }


    //Draw stack chart
    function drawStackChart(categories, sharePrice, decrease, increase, yAxisStart) {
        var stackedColumnStyle = ['rgb(137, 165, 78)', 'rgb(170, 70, 67)', 'rgb(163, 163, 163)'];

        $('.IRChartStackedCalcPlaceholder').highcharts({
            chart: {
                type: 'column'
            },
            colors: stackedColumnStyle,
            title: {
                text: ''
            },
            xAxis: {
                labels: {
                    rotation: -60
                },
                categories: categories
            },
            yAxis: {
                min: yAxisStart,
                title: {
                    text: globalActiveCalcCurrency // JRJR
                }
            },
            tooltip: {
                formatter: function () {
                    //get shareprice of last object
                    var objects = this.points;
                    var sharePriceIndex = objects[objects.length - 1];
                    var sharePrice = sharePriceIndex.y;

                    var change = "";
                    var changePercent = "";
                    var value = sharePrice;


                    if (objects[0].series.index == 1) {
                        //value is decreasing
                        change = '<span>Change ' + globalActiveCalcCurrency + '): </span><span style="color:' + objects[0].series.color + '; font-weight: bold"> -' + objects[0].y + '</span><br>';
                        percentChange = (((sharePrice + objects[0].y) - sharePrice) / sharePrice * 100).toFixed(2);
                        changePercent = '<span>Change (%): </span><span style="color:' + objects[0].series.color + '; font-weight: bold"> -' + percentChange + '</span><br>';

                    } else if (objects[0].series.index == 0) {
                        //value is incresing
                        change = '<span>Change (' + globalActiveCalcCurrency + '): </span><span style="color:' + objects[0].series.color + '; font-weight: bold">' + objects[0].y + '</span><br>';
                        percentChange = (((sharePrice + objects[0].y) - sharePrice) / sharePrice * 100).toFixed(2);
                        changePercent = '<span>Change (%): </span><span style="color:' + objects[0].series.color + '; font-weight: bold"> -' + percentChange + '</span><br>';

                    }

                    var html = '<span>' + sharePriceIndex.key + '</span><br>' +
                        '<span>Value (' + globalActiveCalcCurrency + '): </span><span><b>' + formatDecimalDecimal1000_fixed_noDecimals(value) + '</b></span><br>' +
                        '<span>Share price (' + globalActiveCalcCurrency + '): </span><span><b>' + formatDecimalDecimal1000_fixed_noDecimals((sharePrice / amountOfShares * 100)) + '</b></span><br>' +
                        change + "<br>" +
                        changePercent + "<br>";
                    return html;
                },

                style: {
                    fontFamily: 'inherit',
                    color: 'rgb(100, 119, 131)',
                    fontSize: '18px',
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    valueDecimals: 2
                },
                borderColor: 'rgb(204, 204, 204)',
                //pointFormat: '<span>{series.name}</span>: <b style="color:{series.color}">{point.y}</b><br/>',
                shared: true
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    borderWidth: 0
                }
            },
            credits: {
                enabled: false
            },
            series: [
            {
                index: 0,
                name: 'Value increase compared to previous period',
                data: increase
            }, {
                index: 1,
                name: 'Value decrease compared to previous period',
                data: decrease
            }, {
                index: 2,
                name: 'Share Price',
                data: sharePrice,
                showInLegend: false
            }]
        });
    };

    $(window).resize();



}
// END
function debugDataContent(data) {
    if (debug) {
        if (window.console) {
            console.log(data);
        }
    }
}

function updateTooltipCalcCustom(date, stockData) {
    
    debugStep("updateTooltipCalc");
    var dateIndex;
    var value = "-";

    var tooltipStr = "";
    var tooltipStrSub = "";

    clientStyle.chart_CustomTooltipTopPX = -72;

    tooltipStr = "<div class=\"tooltipHTML tooltipMode" + chartDisplayModes.historical + " htmlReadingDirection" + globalHTMLReadingDirection + "\" dir=\"" + globalHTMLReadingDirection.toLowerCase() + "\" style=\"top: " + clientStyle.chart_CustomTooltipTopPX + "px;\">";

    globalChartUseCustomTooltipContent = true;
    clientStyle.chart_TooltipHideDate = false;
    clientStyle.chart_TooltipHideClose = false;
    clientStyle.chart_TooltipHideVolume = false;

    try {
        dateIndex = globalChartListingStockDataDates[globalActiveListingIndex].indexOf(date);
        tooltipStrSub += getTooltipStrSubHistoricalCustom(dateIndex);
    }
    catch (err) {
        tooltipStrSub = "";
        dateIndex = getClosestDateIndexForListingClosePriceCustom(date);
        tooltipStrSub += getTooltipStrSubHistoricalCustom(dateIndex);
    }

    tooltipStr += tooltipStrSub;
    tooltipStr += "</div>";

    return tooltipStr;
}
function getClosestDateIndexForListingClosePriceCustom(unixDate) {
    var iterations = -1;
    var newUnixDate = 0;
    for (var i = 0; i < globalChartListingStockDataDates[globalActiveListingIndex].length - 1; i++) {
        if (newUnixDate < unixDate) {
            newUnixDate = globalChartListingStockDataDates[globalActiveListingIndex][i];
            iterations++;
        }
    }
    return iterations;
}
function getTooltipStrSubHistoricalCustom(dateIndex) {
    var tooltipStr = "";
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideDate) {
    }
    else {
        tooltipStr += "<div class=\"IRChartTooltipDate\">" + formatTooltipDateCustom(dateIndex, globalChartListingStockDataDates) + "</div>"; //tooltipStr += "<div>" + new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate) + "</div>";

    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideOpen) {
    }
    else {
        tooltipStr += "<div class=\"IRChartTooltipOpen\"><span class=\"subHeader\">" + getOHLCfromTranslations('o') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideHigh) {
    }
    else {
        tooltipStr += "<div class=\"IRChartTooltipHigh\"><span class=\"subHeader\">" + getOHLCfromTranslations('h') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][2]) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideLow) {
    }
    else {
        tooltipStr += "<div class=\"IRChartTooltipLow\"><span class=\"subHeader\">" + getOHLCfromTranslations('l') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][3]) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideClose) {
    }
    else {
        try {
            tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[dateIndex].closePrice) + "</div>";
        } catch (err) {
            tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
        }
        //tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span><span class=\"subContent\">" + formatDecimal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex].closePrice) + "</div>";
    }
    if (globalChartUseCustomTooltipContent && clientStyle.chart_TooltipHideVolume) {
    }
    else {

        try {
            tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[dateIndex].volume) + "</div>";
        } catch (err) {
            tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][4]) + "</div>";
        }
        //tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span><span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex].volume) + "</div>";
    }
    return tooltipStr;
}
function formatTooltipDateCustom(dateIndex, data) {
    var date = "";
    switch (clientStyle.formatDate) {
        case "DD MMM":
        case "DD MMM YYYY":
            date = new moment(globalChartListingStockDataDates[globalActiveListingIndex][dateIndex]);
            return formatDateWithReplacedDate(date);
            break;
        case "DD-MMM-YYYY":
            date = new moment(globalChartListingStockDataDates[globalActiveListingIndex][dateIndex]);
            return formatDateWithReplacedDate(date).replace(' ', '-');
            break;
        case "DD/MMM/YYYY":
            date = new moment(globalChartListingStockDataDates[globalActiveListingIndex][dateIndex]);
            return formatDateWithReplacedDate(date).replace(' ', '/');
            break;
        case "DD MMMM YYYY":
        case "DD-MMMM-YYYY":
        case "DD/MMMM/YYYY":
            date = new moment(globalChartListingStockDataDates[globalActiveListingIndex][dateIndex]);
            return formatDateWithFormat(date, clientStyle.formatDate);
            break;
        case "DD.MM.YYYY":
        case "DD/MM/YYYY":
        case "DD MM YYYY":
        case "DD-MM-YYYY":
        case "YYYY-MM-DD":
        case "YYYY MM DD":

            // return wihtout replaced day or month strings.
            break;
        default:
            debugError("formatTooltipDate is missing support for dateFormat for clientStyle.formatDate (" + clientStyle.formatDate + ")");
            break;
    }
    try {
        return new moment(globalChartListingStockDataOHLCV[dateIndex].date).format(clientStyle.formatDate);
    } catch (err) {
        return new moment(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][0]).format(clientStyle.formatDate);
    }

}

$(function () {

    if (typeof ($('.IRCalcModule').html()) != "undefined" && typeof ($('#IRCalcTemplate').html()) != "undefined") {
        var source = $('#IRCalcTemplate').html();
        menuTemplate_Calc = Handlebars.compile(source);
    }

    globalChartContainer = '.IRChartCalcPlaceholder';
    $.when(requestStockData, requestClosePriceListingData, requestTranslationsData).done(function (stockData, closePriceListingData, translationsData) {
        var o = {
            headers: translationsData,
            data: {
                stock: stockData,
                closePriceListing: closePriceListingData
            }
        };
        preloadIRCalcChartDataClosePriceListing(o);
        updateIRChangeListing();
        attachClickHandlers('IRCalcModule');
        initializeCalc();
    });
});