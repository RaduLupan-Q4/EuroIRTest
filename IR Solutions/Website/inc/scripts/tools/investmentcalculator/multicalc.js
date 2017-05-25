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

$(document).ready(function() {
    addEmptyDataCharInEmptyRows();
    disableSellButton();
    $.ajax({
        cache: true,
        success: function(content) {
            data = content;
            parseData();
            initializeDatePicker();
            //initializeChart();
            //drawChart();
        },
        error: function() {
            showDataError("Could not load data.");
        },
        dataType: 'json',
        url: '../../../inc/dataproviders/closeprice/json/jsonclosepriceprovider.aspx?sid=' + solutionID + '&iid=' + instrumentid
    });
});

function addEmptyDataCharInEmptyRows() {
    $('#investment_table td').each(function(i) {
        $(this).html(emptyDataChar);
    });
}

function disableSellButton() {
    $('#btn_sell').attr('disabled', 'true');
}

function disableBuyButton() {
    $('#btn_buy').attr('disabled', 'true');
}

function enableBuyButton() {
    $('#btn_buy').removeAttr('disabled');
}

function enableSellButton() {
    $('#btn_sell').removeAttr('disabled');
}

function parseData() {
    var lowestYear = 0;
    $.each(data, function(i) {
        this.date = stringToDate(this.date);
        this.UTCDate = stringToDateUTC(this.date);
        this.c = parseFloat(this.c);
        chartData.push([
            Date.UTC(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()),
            parseFloat(data[i].c)
        ]);
        if (this.date.getFullYear() < lowestYear || lowestYear == 0) {
            lowestYear = this.date.getFullYear();
        }
        if (i == 0) {
            currency = this.currency;
        }
    });
    setYearDifference(lowestYear);
}

function stringToDate(dateString) {
    dateString = dateString.replaceAll('-', '/').replaceAll(dateSeperator, '/');
    return new Date(dateString);
}

function stringToDateUTC(date) {
    return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
}

function setYearDifference(lowestYear) {
    var currentDate = new Date();
    yearDifferenceFromToday = lowestYear - currentDate.getFullYear();
}

function initializeDatePicker() {
    $("#datepicker").datepicker({ dateFormat: dateFormat, defaultDate: datepickerStartDate, changeYear: true, changeMonth: true, yearRange: yearDifferenceFromToday + ":+0", onSelect: function(date) { disableSellAndBuyButtonIfDateIsBeforeEarliestBuyDate(date); } });
}

function clearDatePickerError() {
    $('#datepicker_error').html("");
}

function disableSellAndBuyButtonIfDateIsBeforeEarliestBuyDate(dateString) {
    clearDatePickerError();
    var errorString = "";
    var sellDate = getEntryByDate(dateString, "Sell").date;
    var buyDate = getEntryByDate(dateString, "Buy").date;
    var dateSpecified = stringToDate(dateString);
    var earliestBuyDate = getEarliestBuyDate();

    if (entryExists(buyDate)) {
        disableBuyButton();
        errorString += "* Buy is disabled for the nearest date found prior to a existing buy date <br />";
    } else {
        enableBuyButton();
    }
    if (earliestBuyDate == null || entryExists(buyDate) || entryExists(sellDate) || sellDate <= earliestBuyDate) {
        disableSellButton();
        if (investments.length == 0) {
            errorString += "* Sell is disabled as no shares has been bought";
        } else if (dateSpecified > sellDate || dateSpecified < sellDate) {
            errorString += "* Sell is disabled for the nearest date found prior to the existing buy date <br />";
        } else {
            errorString += "* Sell is disabled prior to the earliest buy date <br />"; // It is not possible to sell shares before any was bought
        }
    } else if (investments.length > 0) {
        enableSellButton();
    }
    showDatepickerError(errorString);
}

function limitDecimals(value) {
    return value.toFixed(numberOfDecimals);
}

function addThousandSeperator(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeperator);
}

function isNumeric(value) {
    var result = parseFloat(value.replace(numberSeperator, "."));
    if (!isNaN(result)) {
        return true;
    }
    return false;
}

function getEntryByDate(dateString, action) {
    var currentDate = null;
    var currentEntry = null;
    var date = new Date(dateString);
    var result = null;
    for (var i = data.length - 1; i >= 0; i--) {
        currentEntry = data[i];
        currentDate = new Date(currentEntry.date);
        if (currentDate.getDate() == date.getDate() && currentDate.getMonth() == date.getMonth() && currentDate.getFullYear() == date.getFullYear()) {
            result = currentEntry;
            break;
        }
    }
    if (result == null) {
        result = getNearestDate(date, action);
    }
    return cloneEntry(result);
}

function cloneEntry(entry) {
    var clone = new Object();
    clone.date = new Date(entry.date);
    clone.UTCDate = parseFloat(entry.UTCDate);
    clone.c = entry.c + "";
    clone.dividend = entry.dividend.toString();
    return clone;
}

function getNearestDate(dateString, action) {
    var result;
    if (action == "Sell") {
        result = getLowestDateNearest(dateString);
        if (result == null) {
            result = getHighestDateNearest(dateString);
        }
    } else if (action == "Buy") {
        result = getHighestDateNearest(dateString);
        if (result == null) {
            result = getLowestDateNearest(dateString);
        }
    }
    return result;
}

function getLowestDateNearest(date) {
    var date = new Date(date);
    var currentEntry;
    var currentDate;
    var result;
    for (var i = data.length - 1; i >= 0; i--) {
        currentEntry = data[i];
        currentDate = new Date(currentEntry.date);
        if (currentDate < date) {
            if (result == null || currentDate > new Date(result.date)) {
                result = currentEntry;
            }
        }
    }
    return result;
}

function getHighestDateNearest(date) {
    var date = new Date(date);
    var currentEntry;
    var currentDate;
    var result;
    for (var i = data.length - 1; i >= 0; i--) {
        currentEntry = data[i];
        currentDate = new Date(currentEntry.date);
        if (currentDate > date) {
            if (result == null || currentDate < new Date(result.date)) {
                result = currentEntry;
            }
        }
    }
    return result;
}

function setTodaysDateInDatePicker() {
    $('#datepicker').datepicker('setDate', new Date());
}

function processShareInput(action) {
    clearErrorMessages();
    var hasFailed = false;
    var dateString = $('#datepicker').val();
    var date = stringToDate(dateString);
    var numberOfSharesString = $('#amount').val();
    var numberOfShares;
    if (numberOfSharesIsValid(numberOfSharesString)) {
        numberOfShares = stringToFloat(numberOfSharesString);
    } else {
        showNumberOfSharesError("Number of shares is not valid");
        hasFailed = true;
    }
    if (action == "Sell" && numberOfShares > totalShares) {
        showNumberOfSharesError("It is not possible to sell more shares than bought");
        hasFailed = true;
    }
    if (!dateIsValid(date, action)) {
        hasFailed = true;
    }
    if (!hasFailed) {
        tradeShare(date, numberOfShares, action);
        enableSellButton();
        setTodaysDateInDatePicker();

        // JR added this to make sure the buttons don't get disabled once the datepicker is reset.
        var dateString = $('#datepicker').val();
        disableSellAndBuyButtonIfDateIsBeforeEarliestBuyDate(dateString);
    }
    if (totalShares == 0) {
        disableSellButton();
    }
    disableSellAndBuyButtonIfDateIsBeforeEarliestBuyDate(dateString);
}

function clearErrorMessages() {
    $('.error').html("");
}

function getEarliestBuyDate() {
    var earliestDate = null;
    for (var i = 0; i < investments.length; i++) {
        var entry = investments[i];
        if (entry.action == "Buy" && (earliestDate == null || entry.date < earliestDate)) {
            earliestDate = entry.date;
        }
    }
    return earliestDate;
}

function numberOfSharesIsValid(numberOfShares) {
    if (numberOfShares != null && isNumeric(numberOfShares) && stringToFloat(numberOfShares) > 0) {
        return true;
    }
    return false;
}

function stringToFloat(valueString) {
    return parseFloat(valueString);
}

function showNumberOfSharesError(message) {
    $('#amount_shares_error').html(message);
}

function showDatepickerError(message) {
    $('#datepicker_error').html(message);
}

function showDataError(message) {
    $('#data_error').html(message);
}

function dateIsValid(date, action) {
    var today = new Date();
    var earliestBuyDate = getEarliestBuyDate();
    if (entryExists(date)) {
        return false;
    }
    if (action == "Sell" && date < earliestBuyDate) {
        showDatepickerError("Sell is disabled prior to the earliest buy date"); //Can't sell shares before earliest buy date
        return false;
    } else if ((date.getFullYear() - today.getFullYear()) >= yearDifferenceFromToday) {
        return true;
    }
    showDatepickerError("Invalid date");
    return false;
}

function entryExists(date) {
    for (var i = 0; i < investments.length; i++) {
        var entryDate = investments[i].date;
        if (entryDate.getFullYear() == date.getFullYear() && entryDate.getMonth() == date.getMonth() && entryDate.getDay() == date.getDay()) {
            showDatepickerError("Only one buy or sell entry per day"); //It is not possible to sell or buy more than once on one day
            return true;
        }
    }
    return false;
}

function tradeShare(date, numberOfShares, action) {
    if (action == "Buy") {
        totalShares += numberOfShares;
    } else if (action == "Sell") {
        totalShares -= numberOfShares;
    }
    var entry = getEntryByDate(date, action);
    entry.numberOfShares = parseFloat(numberOfShares);
    entry.action = action;
    if (entry != null) {
        addInvestment(entry);
        updateInvestmentTable();
        updateResultbar();
    } else {
        showDataError("Could not find any entries");
    }
}

function addInvestment(entry) {
    investments.push(entry);
}

function updateInvestmentTable() {
    sortInvestmentTableByDate();
    addDividendEntries();
    sortInvestmentTableByDate();
    parseAndShowInvestmentTable();
    //setAxisScales();
}

function updateResultbar() {
    var resultbar = $('#resultbar tr');
    var dateCell = resultbar.find('.date');
    var sharesBoughtCell = resultbar.find('.shares_bought');
    var buyValueCell = resultbar.find('.buy_value');
    var sellValueCell = resultbar.find('.sell_value');
    var payOutCell = resultbar.find('.payout');
    var totalAmountCell = resultbar.find('.total_amount');
    var yieldCell = resultbar.find('.yield');
    var sharesBought = 0;
    var sharesSold = 0;
    var totalBuyValue = 0;
    var totalSellValue = 0;
    var totalPayout = 0;
    $.each(investments, function(i) {
        var entry = investments[i];
        if (entry.action == "Buy") {
            totalBuyValue += returnZeroIfNullOrNaN(calculateShareValue(entry.numberOfShares, entry.c));
            sharesBought += returnZeroIfNullOrNaN(entry.numberOfShares);
        } else if (entry.action == "Sell") {
            totalSellValue += returnZeroIfNullOrNaN(calculateShareValue(entry.numberOfShares, entry.c));
        } else if (entry.action == "Payout") {
            totalPayout += returnZeroIfNullOrNaN(entry.payout);
        }
    });
    sharesSold = sharesBought;
    var lastEntry = investments[investments.length - 1];
    //totalSellValue += returnZeroIfNullOrNaN(calculateShareValue(sharesBought, lastEntry.c)); // er flyttet op i en if sætning.
    var totalAmount = calculateEstimatedShares(lastEntry.c, totalBuyValue - totalSellValue) * lastEntry.c;

    totalAmount = totalSellValue - totalBuyValue;

    var yield = getYieldValue(totalBuyValue, totalSellValue, totalPayout);
    dateCell.html(formatDate(lastEntry.date));
    sharesBoughtCell.html(returnEmptyDataCharIfNaNOrNull(sharesBought));
    buyValueCell.html(returnEmptyDataCharIfNaNOrNull(formatValue(totalBuyValue)));
    sellValueCell.html(returnEmptyDataCharIfNaNOrNull(formatValue(totalSellValue)));
    payOutCell.html(returnEmptyDataCharIfNaNOrNull(formatValue(totalPayout)));
    totalAmountCell.html(returnEmptyDataCharIfNaNOrNull(formatValue(totalAmount)));
    yieldCell.html(yield);
}

function addDividendEntries() {
    $.each(investments, function(i) {
        if (i == 0) {
            return true;
        }
        var previousDate = investments[i - 1].date;
        var currentDate = this.date;
        $.each(data, function(j) {
            var entry = data[j];
            if (isNumeric(entry.dividend) && entry.date >= previousDate && entry.date <= currentDate && !payOutEntryExists(entry)) {
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
    if (entry1.date > entry2.date) return 1;
    if (entry1.date < entry2.date) return -1;
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
            shareValue = calculateShareValue(entry.numberOfShares, entry.c);
            if (entry.action == "Buy") {
                totalAmount += shareValue;
                totalNumberOfShares += returnZeroIfNullOrNaN(entry.numberOfShares);
            } else {
                totalAmount -= shareValue;
                totalNumberOfShares -= returnZeroIfNullOrNaN(entry.numberOfShares);
            }
            estimatedShares = calculateEstimatedShares(entry.c, totalAmount);
        }
        if (entry.action == "Payout") {
            shareValue = calculateShareValue(totalNumberOfShares, entry.c);
            entry.payout = calculatePayoutValue(totalNumberOfShares, entry.dividend);
        }
        var row = '<tr class="' + className + '"><td>' + formatDate(entry.date) + '</td><td>'
            + addOperationSign(entry.numberOfShares, entry.action) + '</td><td>' //returnEmptyDataCharIfNaNOrNull(addOperationSign(entry.numberOfShares, entry.action))
            + formatValue(entry.c) + '</td><td>'
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
    console.log(value);
    console.log(isNaN(value));
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

function calculateShareValue(numberOfShares, shareValue) {
    console.log("Shares: " + numberOfShares);
    console.log("Share value" + shareValue);
    console.log("result: " + shareValue * numberOfShares);
    return shareValue * numberOfShares;
}

function calculateEstimatedShares(closeprice, totalAmount) {
    return totalAmount / closeprice;
}

function calculatePayoutValue(numberOfShares, dividendValue) {
    return numberOfShares * dividendValue;
}

function getYieldValue(totalBuyValue, totalSellValue, totalPayout) {
    var yield = ((((totalSellValue + totalPayout) - totalBuyValue) / totalBuyValue) * 100); // (old calculation) var yield = amount / buyValue * 100;
    var result = returnEmptyDataCharIfNaNOrNull(formatNumber(yield));
    if (result != emptyDataChar) {
        result += "%";
    }
    return result;
}

function addOperationSign(value, action) {
    var str = "";
    if (action == "Buy") {
        str = 'Bought ' + value + ' shares';
    } else if (action == "Sell") {
        str = 'Sold ' + value + ' shares';
    } else {
        str = 'Dividend Payout';
    }
    return str;
}

String.prototype.replaceAll = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof(str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
};