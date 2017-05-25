/** Settings */
var currency;
var datepickerStartDate = 0;
var numberOfDecimals = 2;
var numberSeperator = ".";
var thousandSeperator = ",";
var dateSeperator = "/";
var dateFormat = "yy" + dateSeperator + "mm" + dateSeperator + "dd";
var emptyDataChar = "-";

var data;
var volume = new Array();
var chartData = new Array();
var investments = new Array();
var seriesOptions = new Array();
var totalShares = 0;
var yearDifferenceFromToday = 0;
var minDate = null;
var maxDate = null;
//Used to fetch data
var fromDate = null;
var toDate = null;



$(document).ready(function () {
    setDefaultValues();
    setCalculateButtonBindings();
    setDatePickerBindings();
    setInvestedTypeButtonBindings();
    fetchData(instrumentid);

    /*addEmptyDataCharInEmptyRows();
    disableSellButton();
    initializeDatePicker();
    //initializeChart();
    $('.calculate-button').click(function() {
        var e = document.getElementById("listings");
        var instrid = e.options[e.selectedIndex].value;
        fromDate = $('#datepicker_from').val();
        toDate = $('#datepicker_to').val();
        fetchData(instrid);
    });*/
});

var dateFormat = "yy/mm/dd"
var investmentType;
var investedAmount;

function setDefaultValues() {
    $('.IRToolInvestmentCalculatorControlsAmountInvested > input').css('value', 0);
    investedType = $('input[name=InvestedType]:checked').val();
    toDate = new Date();
    fromDate = new Date();
    fromDate.setMonth(toDate.getMonth() - 12);
}

function setCalculateButtonBindings() {
    $('.styledButton').click(function () {
        var value = $('#form_field_txt').val();
        if (!isNumeric(value)) {
            value = 0;
        }
        investedAmount = formatNumber(value);
        calculate();
    });
}

function calculate() {
    var buyPrice = getBuyPrice();
    var numberOfShares = getNumberOfShares();
    var sellPrice;
    var valueNow;
    var yield;
}

function getBuyPrice() {
    var entry = getNearestDate(fromDate, "Buy");
    return entry.closePrice;
}

function getSellPrice() {
    var entry = getNearestDate(toDate, "Sell");
    return entry.closePrice;
}

function getNearestDate(date, action) {
    var result;
    if (action == "Sell") {
        result = getLowestDateNearest(date);
        if (result == null) {
            result = getHighestDateNearest(date);
        }a
    } else if (action == "Buy") {
        result = getHighestDateNearest(date);
        if (result == null) {
            result = getLowestDateNearest(date);
        }
    }
    return result;
}

function getLowestDateNearest(date) {
    var currentEntry;
    var currentDate;
    var result;
    for (var i = data.length - 1; i >= 0; i--) {
        currentEntry = data[i];
        currentDate = currentEntry.utcDate;
        if (compareDates(currentDate, date) == -1) {
            if (result == null || compareDates(currentDate, result.utcDate) == 1) {
                result = currentEntry;
            }
        }
    }
    return result;
}

function getHighestDateNearest(date) {
    var currentEntry;
    var currentDate;
    var result;
    for (var i = data.length - 1; i >= 0; i--) {
        currentEntry = data[i];
        currentDate = currentEntry.utcDate;
        if (compareDates(currentDate, date) == 1) {
            if (result == null || compareDates(currentDate, result.utcDate) == -1) {
                result = currentEntry;
            }
        }
    }
    return result;
}

function compareDates(d1, d2) {
    if (d1.getFullYear() <= d2.getFullYear() && d1.getMonth() <= d2.getMonth() && d1.getDate() < d2.getDate()) {
        return -1;
    } else if (d1.getFullYear() == d2.getFullYear() && d1.getMonth() == d2.getMonth() && d1.getDate() == d2.getDate()) {
        return 0;
    } else if (d1.getFullYear() >= d2.getFullYear() && d1.getMonth() >= d2.getMonth() && d1.getDate() > d2.getDate()) {
        return 1;
    }
}

function getNumberOfShares() { 
    var shares = 0;
    var valueString = $('.IRToolInvestmentCalculatorControlsAmountInvested > input').val();
    if (isNumeric(valueString)) {
        shares = formatNumber(valueString); 
        if (investedType == "Amount") { 
            shares = (shares / getEarliestClosePrice()); 
        }
    }
    return shares;
}

function getEarliestClosePrice() {
    return data[0].closePrice;
}
           function getValueNow() { }
               function getYield() {}



function setDatePickerBindings() {
    $('.datepicker').datepicker({
        dateFormat: dateFormat,
        changeYear: true,
        changeMonth: true,
        showOn: "both",
        buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
        buttonImageOnly: true
    });    
   /* .datepicker({
        dateFormat: dateFormat, defaultDate: datepickerStartDate, changeYear: true, changeMonth: true, yearRange: "-30:+0",
        onSelect: function(date) {
        }*/
}
function setInvestedTypeButtonBindings() {
    $('.IRToolInvestmentCalculatorControlsInvestmentType input').each(function () {
        $(this).click(function() {
            setInvestedType($(this).val());
        });
    });
}

function getInvestedType() {
    var investedType = $('input[name=InvestedType]:checked');
    return investedType;
}

function setInvestedType(investedType) {
    this.investedType = investedType;
}

function fetchData(instrid) {
  fromDate = '2010-03-03';
    toDate = '2012-03-03';
    $.ajax({
        type: "POST",
        url: "../../../../ServiceEngine/api/json/reply/RequestClosePriceData",
        data: { fromDate: fromDate, toDate: toDate, apiVersion: 0, lcid: 0, solutionID: solutionID, instrumentID: instrid },
        dataType: 'json',
        cache: true,
        success: function (content) {
            data = content;
            parseData();
           // processShareInput();
            //drawChart();
        },
        error: function (error) {
            console.log(error);
            showDataError("Could not load data - " + error);
        }
    });
}

function showDataError(text) {
    console.log("DEBUG: " + text);
}

function addEmptyDataCharInEmptyRows() {
    $('#investment_table td').each(function(i) {
        $(this).html(emptyDataChar);
    });
}

function parseData() {
    var lowestYear = 0;
    $.each(data, function(i) {
        this.utcDate = unixDateToDate(this.utcDate);
        //this.UTCDate = stringToDateUTC(this.utcDate);
        this.closePrice = parseFloat(this.closePrice);
        chartData.push([
            Date.UTC(this.utcDate.getFullYear(), this.utcDate.getMonth(), this.utcDate.getDate()),
            parseFloat(data[i].closePrice)
        ]);
        if (this.utcDate.getFullYear() < lowestYear || lowestYear == 0) {
            lowestYear = this.utcDate.getFullYear();
        }
        if (i == 0) {
            currency = this.currency;
        }
    });
    setYearDifference(lowestYear);
}

function unixDateToDate(dateString) {
    //TODO Generic solution to remove timezone information
    dateString = dateString.replace('/Date(', '').replace('+0200)/', '');
    return new Date(parseInt(dateString));
}

function stringToDate(date) {
    return new Date(date);
}

function setYearDifference(lowestYear) {
    var currentDate = new Date();
    yearDifferenceFromToday = lowestYear - currentDate.getFullYear();
}

function initializeDatePicker() {
    $("#datepicker_from").datepicker({
        dateFormat: dateFormat, defaultDate: datepickerStartDate, changeYear: true, changeMonth: true, yearRange: "-30:+0",
        onSelect: function(date) {
        }
    });
    $("#datepicker_to").datepicker({
        dateFormat: dateFormat, defaultDate: datepickerStartDate, changeYear: true, changeMonth: true, yearRange: "-30:+0",
        onSelect: function(date) {
        }
    });
}

function limitDecimals(value) {
    return value.toFixed(numberOfDecimals);
}

function addThousandSeperator(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeperator);
}

function isNumeric(value) {
    value = String(value);
    var result = parseFloat(value.replace(numberSeperator, "."));
    if (!isNaN(result)) {
        return true;
    }
    return false;
}

function cloneEntry(entry) {
    var clone = new Object();
    clone.utcDate = new Date(entry.utcDate);
    clone.UTCDate = parseFloat(entry.UTCDate);
    clone.closePrice = entry.closePrice + "";
    clone.dividend = entry.dividend.toString();
    return clone;
}



function setTodaysDateInDatePicker() {
    $('#datepicker_from').datepicker('setDate', new Date());
}

function processShareInput() {
    var hasFailed = false;
    var amountString = $('#amount').val();
    var amount;
    var investedType = $('input[name=InvestedType]:checked', 'form').val();
    if (amountIsValid(amountString)) {
        amount = stringToFloat(amountString);
        tradeShare(fromDate, toDate, amount, investedType);
        //setTodaysDateInDatePicker();
    }
}



function amountIsValid(amount) {
    if (amount != null && isNumeric(amount) && stringToFloat(amount) > 0) {
        return true;
    }
    return false;
}

function stringToFloat(valueString) {
    return parseFloat(valueString);
}

function dateIsValid(date, action) {
    var today = new Date();
    var earliestBuyDate = getEarliestBuyDate();
    if (entryExists(date)) {
        return false;
    }
    if (action == "Sell" && date < earliestBuyDate) {
        return false;
    } else if ((date.getFullYear() - today.getFullYear()) >= yearDifferenceFromToday) {
        return true;
    }
    return false;
}

function entryExists(date) {
    for (var i = 0; i < investments.length; i++) {
        var entryDate = investments[i].utcDate;
        if (entryDate.getFullYear() == date.getFullYear() && entryDate.getMonth() == date.getMonth() && entryDate.getDay() == date.getDay()) {
            return true;
        }
    }
    return false;
}

function tradeShare(fromDate, toDate, amount, investedType) {
    var result = getResult(fromDate, toDate, amount, investedType);
    updateResultbar(result);
}

function getResult(fromDate, toDate, amount, investedType) {
    var buyPrice = getNearestDate(fromDate, "Buy");
    var sellPrice = getNearestDate(toDate, "Sell");
    var shares;
    var amountInvested;
    if (investedType == "InvestedTypeShares") {
        shares = amount;
        amountInvested = buyPrice.closePrice * shares;
    } else {
        shares = calculateEstimatedShares(sellPrice.closePrice, amount);
        amountInvested = amount;
    }
    var result = new Object();
    result.buyPrice = buyPrice.closePrice;
    result.sellPrice = sellPrice.closePrice;
    result.shares = shares;
    result.valueNow = sellPrice.closePrice * shares;
    result.yield = getYieldValue(buyPrice, sellPrice, shares);
    return result;
}

function addInvestment(entry) {
    investments.push(entry);
}

function updateInvestmentTable() {
    //sortInvestmentTableByDate();
    //addDividendEntries();
    //sortInvestmentTableByDate();
    //parseAndShowInvestmentTable();
    //setAxisScales();
}

function updateResultbar(result) {
    var resultbar = $('#resultbar tr');
    var buyValueCell = resultbar.find('.buy_price');
    var numberofSharesCell = resultbar.find('.shares');
    var sellValueCell = resultbar.find('.sell_price');
    var valueNowCell = resultbar.find('.value_now');
    var yieldCell = resultbar.find('.yield');
    buyValueCell.html(returnEmptyDataCharIfNaNOrNull(formatValue(result.buyPrice)));
    sellValueCell.html(returnEmptyDataCharIfNaNOrNull(formatValue(result.sellPrice)));
    numberofSharesCell.html(returnEmptyDataCharIfNaNOrNull(limitDecimals(result.shares)));
    valueNowCell.html(returnEmptyDataCharIfNaNOrNull(formatValue(result.sellPrice * result.shares)));
    yieldCell.html(result.yield);
}

function addDividendEntries() {
    $.each(investments, function(i) {
        if (i == 0) {
            return true;
        }
        var previousDate = investments[i - 1].utcDate;
        var currentDate = this.utcDate;
        $.each(data, function(j) {
            var entry = data[j];
            if (isNumeric(entry.dividend) && entry.utcDate >= previousDate && entry.utcDate <= currentDate && !payOutEntryExists(entry)) {
                entry.action = "Payout";
                investments.splice(i, 0, entry);
            }
        });
    });
}

function payOutEntryExists(entry) {
    if (investments.indexOf(entry) == -1) {
        return false;
    }
    return true;
}

function sortInvestmentTableByDate() {
    if (investments.length > 1) {
        investments.sort(date_sort_asc);
    }
}

var date_sort_asc = function(entry1, entry2) {
    if (entry1.utcDate > entry2.utcDate) return 1;
    if (entry1.utcDate < entry2.utcDate) return -1;
    return 0;
};

function parseAndShowInvestmentTable() {
    var investmentTable = $('#investment_table tbody');
    investmentTable.html("");
    var totalAmount = 0;
    var totalNumberOfShares = 0;
    $.each(investments, function(i) {
        var entry = investments[i];
        setMinAndMaxDate(entry.UTCDate);
        var className = getEvenRowClassName(i);
        var shareValue = 0;
        var estimatedShares = 0;
        if (entry.action != "Payout") {
            shareValue = calculateShareValue(entry.volume, entry.closePrice);
            if (entry.action == "Buy") {
                totalAmount += shareValue;
                totalNumberOfShares += returnZeroIfNullOrNaN(entry.volume);
            } else {
                totalAmount -= shareValue;
                totalNumberOfShares -= returnZeroIfNullOrNaN(entry.volume);
            }
            estimatedShares = calculateEstimatedShares(entry.closePrice, totalAmount);
        }
        if (entry.action == "Payout") {
            shareValue = calculateShareValue(totalNumberOfShares, entry.closePrice);
            entry.payout = calculatePayoutValue(totalNumberOfShares, entry.dividend);
        }
        var row = '<tr class="' + className + '"><td>' + formatDate(entry.utcDate) + '</td><td>'
            + addOperationSign(entry.volume, entry.action) + '</td><td>' //returnEmptyDataCharIfNaNOrNull(addOperationSign(entry.volume, entry.action))
            + formatValue(entry.closePrice) + '</td><td>'
            + formatValue(totalAmount) + '</td><td>'
            + formatNumber(entry.dividend) + '</td><td>'
            + formatValue(entry.payout) + '</td><td>'
            + totalNumberOfShares + '</td><td>'
            + formatValue(shareValue) + '</td></tr>'; //shareValue
        investmentTable.append(row);
    });
}

function setAxisScales() {
    if (investments.length > 1 && (maxDate - minDate) >= 604800) {
        chart.xAxis[0].setExtremes(
            minDate,
            maxDate);
    }
}

function setMinAndMaxDate(dateValue) {
    if (dateValue < minDate || minDate == null) {
        minDate = dateValue;
    }
    if (dateValue > maxDate || maxDate == null) {
        maxDate = dateValue;
    }
}

function getEvenRowClassName(index) {
    if ((index % 2) == 0) {
        return "row_even";
    }
    return "row_odd";
}

function returnZeroIfNullOrNaN(value) {
    if (isNaNZeroOrNull(value)) {
        return 0;
    }
    return value;
}

function formatDate(date) {
    var lowerCaseDateFormat = dateFormat.toLowerCase().replaceAll(dateSeperator, "");
    var indexOfYear = null;
    var indexOfMonth = null;
    var indexOfDay = null;
    var position = 0;
    for (var i = 0; i < lowerCaseDateFormat.length; i++) {
        var letter = lowerCaseDateFormat[i];
        if (letter == "y" && indexOfYear == null) {
            indexOfYear = position;
            position++;
        } else if (letter == "m" && indexOfMonth == null) {
            indexOfMonth = position;
            position++;
        } else if (letter == "d" && indexOfDay == null) {
            indexOfDay = position;
            ;
            position++;
        }
    }
    var dateArray = new Array();
    dateArray[indexOfYear] = date.getFullYear();
    dateArray[indexOfMonth] = ('0' + (date.getMonth() + 1)).slice(-2);
    dateArray[indexOfDay] = ('0' + date.getDate()).slice(-2);
    ;
    var result = "";
    for (var i = 0; i < dateArray.length; i++) {
        result += dateArray[i];
        if (i < (dateArray.length - 1)) {
            result += dateSeperator;
        }
    }
    return result;
}

function formatNumber(value) {
    value = limitDecimals(stringToFloat(value));
    if (isNaNZeroOrNull(value)) {
        return emptyDataChar;
    }
    var valueSplit = value.toString().split(".");
    var result = addThousandSeperator(valueSplit[0]);
    if (valueSplit.length > 1) {
        result += numberSeperator + valueSplit[1];
    }
    result;
    return result;
}

function formatValue(value) {
    value = limitDecimals(stringToFloat(value));
    if (isNaNZeroOrNull(value)) {
        return emptyDataChar;
    }
    var valueSplit = value.toString().split(".");
    var result = addThousandSeperator(valueSplit[0]);
    if (valueSplit.length > 1) {
        result += numberSeperator + valueSplit[1];
    }
    result += currency;
    return result;
}

function isNaNZeroOrNull(value) {
    if (value == null || value == 0 || isNaN(parseFloat(value))) {
        return true;
    }
    return false;
}

function returnEmptyDataCharIfNaNOrNull(value) {
    if (isNaNZeroOrNull(value)) {
        return emptyDataChar;
    }
    return value;
}

function calculateShareValue(volume, shareValue) {
    return shareValue * volume;
}

function calculateEstimatedShares(closeprice, totalAmount) {
    return totalAmount / closeprice;
}

function calculatePayoutValue(volume, dividendValue) {
    return volume * dividendValue;
}

function getYieldValue(fromEntry, toEntry, shares) {
    var totalAmount = 0;
    var valueNow = shares * toEntry.closePrice;
    var amount = shares * fromEntry.closePrice;
    var yield = ((valueNow - amount) / amount) * 100;
    var result = returnEmptyDataCharIfNaNOrNull(formatNumber(yield));
    if (result != emptyDataChar) {
        result += "%";
    }
    return result;
}

String.prototype.replaceAll = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof(str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
};