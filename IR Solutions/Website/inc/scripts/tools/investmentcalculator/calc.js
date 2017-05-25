var fromDate;
var toDate;
var dateFormat = "yy/mm/dd"
var numberSeperator = ".";
var numberOfDecimals = 2;
var emptyDataChar = "-";
var thousandSeperator = ",";
var data = new Array();

$(document).ready(function () {
    setDefaultValues();
    setCalculateButtonBindings();
    setInvestedTypeButtonBindings();
    fetchData(instrumentid);
    $('.calculate-button').click(function () {
        var e = document.getElementById("listings");
        var instrid = e.options[e.selectedIndex].value;
        fetchData(instrid);
    });
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

function setDefaultValues() {
    $('.IRToolInvestmentCalculatorControlsAmountInvested > input').css('value', 0);
    investedType = $('input[name=InvestedType]:checked').val();
    toDate = new Date();
    fromDate = new Date();
    fromDate.setMonth(toDate.getMonth() - 12);
    setDatePickerBindings('.IRToolInvestmentCalculatorControlsPeriodFrom input', fromDate);
    setDatePickerBindings('.IRToolInvestmentCalculatorControlsPeriodTo input', toDate);
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

function getInputAmount() {
    var value = stringToFloat($('.IRToolInvestmentCalculatorControlsAmountInvested > input').val());
    return value;
}

function setDatePickerBindings(elementID, startDate) {
    $(elementID).datepicker({
        dateFormat: dateFormat,
        changeYear: true,
        changeMonth: true,
        defaultDate: startDate,
        showOn: "both",
        buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
        buttonImageOnly: true,
        onSelect: function (date) {
            startDate = new Date(date);
        }
    });
    $(elementID).datepicker('setDate', startDate);
 
    /* .datepicker({
         dateFormat: dateFormat, defaultDate: datepickerStartDate, changeYear: true, changeMonth: true, yearRange: "-30:+0",
         onSelect: function(date) {
         }*/
}

function setInvestedTypeButtonBindings() {
    $('.IRToolInvestmentCalculatorControlsInvestmentType input').each(function () {
        $(this).click(function () {
            setInvestedType($(this).val());
        });
    });
}

function setInvestedType(investedType) {
    this.investedType = investedType;
}

function fetchData(instrid) {
    var dataToDate = new Date();
    var dataFromDate = new Date();
    dataFromDate.setYear(toDate.getFullYear() - 10);
    var dataFromDateString = dataFromDate.getFullYear() + "-" + dataFromDate.getMonth() + "-" + dataFromDate.getDate();
    var dataToDateString = dataToDate.getFullYear() + "-" + dataToDate.getMonth() + "-" + dataToDate.getDate();

    $.ajax({
        type: "POST",
        url: "../../../../ServiceEngine/api/json/reply/RequestClosePriceData",
        data: { fromDate: dataFromDateString, toDate: dataToDateString, apiVersion: 0, lcid: 0, solutionID: solutionID, instrumentID: instrid },
        dataType: 'json',
        cache: true,
        success: function (content) {
            for (var i = 0; i < content.length; i++) {
                var jsonEntry = content[i];
                var entry = new Object();
                entry.utcDate = Date(parseInt(jsonEntry.utcDate.substr(6)));
                entry.closePrice = jsonEntry.closePrice;
                entry.currency = jsonEntry.currency;
                data[i] = entry;
            }
            // processShareInput();
            //drawChart();
        },
        error: function (error) {
            console.log(error);
            showDataError("Could not load data - " + error);
        }
    });
}

function isNumeric(value) {
    value = String(value);
    var result = parseFloat(value.replace(numberSeperator, "."));
    if (!isNaN(result)) {
        return true;
    }
    return false;
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

function addThousandSeperator(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeperator);
}

function stringToFloat(valueString) {
    return parseFloat(valueString);
}

function limitDecimals(value) {
    return value.toFixed(numberOfDecimals);
}

function isNaNZeroOrNull(value) {
    if (value == null || value == 0 || isNaN(parseFloat(value))) {
        return true;
    }
    return false;
}

function calculate() {

    var buyPrice = getBuyPrice();
    var sellPrice = getSellPrice();
    var shares = getNumberOfShares(buyPrice);
    var valueNow = getValueNow(sellPrice, shares);
    var amount = getAmount();
    var yieldValue = getYield(valueNow, amount);
    if (getInputAmount() != 0) {
        setSellPrice(sellPrice);
        setBuyPrice(buyPrice);
        setShares(shares);
        setValueNow(valueNow);
        setYield(yieldValue);
    }
}

function getNumberOfShares(buyPrice) {
    var shares = getInputAmount();
    if (investedType == 'Amount') {
       shares = (shares / buyPrice);
    }
    return shares;
}

function getAmount(buyPrice) {
    var amount = getInputAmount();
    if (investedType == 'shares') {
        amount = (shares * buyPrice);
    }
    return amount;
}

function getValueNow(sellPrice, shares) {
    return (sellPrice * shares);
}

function setShares(shares) {
    $('.IRToolInvestmentCalculatorResultsTable.Data.NumberOfShares').html(formatNumber(shares));
}

function setBuyPrice(price) {
    $('.BuyPrice.Data').html(formatNumber(price));
}

function setSellPrice(price) {
    $('.SellPrice.Data').html(formatNumber(price));
}

function setValueNow(price) {
    $('.ValueNow.Data').html(formatNumber(price));
}

function getFromDate() {
    var dateString = $('.IRToolInvestmentCalculatorControlsPeriodFrom > input').val();
    return (new Date(dateString));
}

function getToDate() {
    var dateString = $('.IRToolInvestmentCalculatorControlsPeriodTo > input').val();
    return (new Date(dateString));
}

function getBuyPrice() {
    var entry = getNearestDate(fromDate, "Buy");
    return entry.closePrice;
}

function getYield(valueNow, amount) {
    return (((valueNow - amount) / amount) * 100);
}

function setYield(value) {
    $('.Data.Yield').html(formatNumber(value));
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
        } 
    } else if (action == "Buy") {
        result = getHighestDateNearest(date);
        if (result == null) {
            result = getLowestDateNearest(date);
        }
    }
    return result;
}

function getHighestDateNearest(date) {
    var currentEntry;
    var currentDate;
    var result;
    for (var i = 0; i < data.length; i++) {
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

function compareDates(d1, d2) {
    d1 = new Date(d1);
    if (d1 < d2) {
        return -1;
    } else if (d1 > d2) {
        return 1;
    }
    return 0;
}