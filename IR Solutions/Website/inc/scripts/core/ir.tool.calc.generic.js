var stockData = null; 
var calcInputMemory = new function () {
    this.currentHoldingAmount = null;
    this.currentHoldingValue = null;
}
var calcClickHandlersStatus = new function () {
    this.calculateCurrentValueOfHolding = false;
    this.calculateValueChange = false;
    this.calcLookupValueChange = false;
    this.changeListing = false;
}
function initializeCalc() {
    debugStep(" ");
    debugStep("initializeCalc");
    var calcTemplate = $('#IRCalcSimpleTemplate').html();
    var compiledIRCalcTemplate = Handlebars.compile(calcTemplate);
    $(".IRCalcModule").html(compiledIRCalcTemplate(translations));
    requestClosePriceListingData.done(setData);
    setCalcClickHandlers();
}
function setData(closePriceListingData) {
    debugStep("setData");
    stockData = closePriceListingData.data[globalActiveListingIndex].data;
    if (typeof ($('.outputValueMostRecent')) != 'undefined') {
        $('.outputValueMostRecent').html(formatDecimal(globalRawStockData[globalActiveListingIndex].last));
    }
    // Todo Init from and to date pickers defaults.
}
function setCalcClickHandlers() {
    debugStep("setCalcClickHandlers");
    if (!calcClickHandlersStatus.calculateCurrentValueOfHolding) {
        debugStep("attached calcClickHandlersStatus.calculateCurrentValueOfHolding");
        $('.IRCalcButton.calculateCurrentValueOfHolding, #calculateCurrentValueOfHolding').click(function () {
            debugStep(" ");
            debugStep("clicked calculateCurrentValueOfHolding");

            if (typeof ($('.valueCurrentValueOfHolding')) != 'undefined') {
                calculateCurrentValueOfHolding();
            }

        });
        calcClickHandlersStatus.calculateCurrentValueOfHolding = true;
    }
    if (!calcClickHandlersStatus.calculateValueChange) {
        $('.IRCalcButton.CalculateValueChange').click(function () {
            debugStep(" ");
            debugStep("clicked CalculateValueChange");
            calculateValueChange();
        });
        calcClickHandlersStatus.calculateValueChange = true;
    }
    if (!calcClickHandlersStatus.calcLookupValueChange) {
        $('.IRCalcLookupValue .date-select').bind('change', function () {
            calculateLookupValue();
        });
        calcClickHandlersStatus.calcLookupValueChange = true;
    }
    if (!calcClickHandlersStatus.changeListing) {
        $('.IRCalcChangeListing').bind('change', function () {
            calcClickHandlersStatus.changeListing = false;
            calcClickHandlersStatus.calculateCurrentValueOfHolding = false;
            globalActiveListingIndex = $(this).val();
            buildCalcSimpleTool(globalRawCalcData, menuTemplate_Calc);
        });
        calcClickHandlersStatus.changeListing = true;
    }
}
function calculateCurrentValueOfHolding() {
    calcInputMemory.currentHoldingAmount = Number($('.valueCurrentValueOfHolding').val());
    calcInputMemory.currentHoldingValue = calcInputMemory.currentHoldingAmount * globalRawStockData[globalActiveListingIndex].last;
    $('.IRCalcCurrentValueOfHolding .currentHoldingValue').html(Number(calcInputMemory.currentHoldingValue).toFixed(2));
}
function calculateValueChange() {
    var valueOfChange = 0;
    var inputManualFromPrice = parseInt($('.inputManualFromPrice').val());
    var inputSharesAmount = parseInt($('.inputSharesAmount').val());
    var fromDate = readFromDate();
    var bestMatchIndex = getIndexThatBestMatchesDate(stockData, "date", readFromDateObject('IRCalcValueChange'));
    var priceAtFromDate = stockData[bestMatchIndex].closePrice;
    var last = globalRawStockData[globalActiveListingIndex].last;
    var valueNow = 0;
    var sharesBought = 0;
    var valueOfHolding = 0;

    if (inputManualFromPrice == 'NaN') {
        inputManualFromPrice = 0;
    }
    if (inputSharesAmount == 'NaN') {
        inputSharesAmount = 0;
    }
    if (inputManualFromPrice > 0) {
        valueOfChange = last - inputManualFromPrice;
        sharesBought = inputManualFromPrice / priceAtFromDate;
        valueOfHolding = sharesBought * last;
    }
    if (inputSharesAmount > 0) {
        var valueInitial = priceAtFromDate * inputSharesAmount;
        valueNow = last * inputSharesAmount;
        valueOfChange = valueNow - valueInitial;
        valueOfHolding = inputSharesAmount * last;
    }

    $('.IRCalcValueChange .outputValueMostRecent').html(formatDecimal(priceAtFromDate));
    $('.IRCalcValueChange .outputValueOfHolding').html(formatDecimal(valueOfHolding));
    $('.IRCalcValueChange .outputValueChange').html(formatDecimal(valueOfChange));
}
function calculateLookupValue() {
    var bestMatchIndex = getIndexThatBestMatchesDate(stockData, "date", readFromDateObject('IRCalcLookupValue'));
    var priceAtFromDate = stockData[bestMatchIndex].closePrice;
    $('.IRCalcLookupValue .outputLookupValue').html(Number(priceAtFromDate));
}
function readFromDate(className) {
    var y = parseInt($('.' + className + ' #from-year').val());
    var m = parseInt($('.' + className + ' #from-month').val());
    var d = parseInt($('.' + className + ' #from-day').val());

    var fromDate = y + "-" + (m + 1) + "-" + d;

    var fromDateM = new moment(fromDate, 'YYYY-MM-DD'); // JRJR Todo: add .tz
    return fromDateM.format("YYYY-MM-DD");
}
function readFromDateObject(className) {
    var y = parseInt($('.' + className + ' #from-year').val());
    var m = parseInt($('.' + className + ' #from-month').val());
    var d = parseInt($('.' + className + ' #from-day').val());

    var fromDate = y + "-" + (m + 1) + "-" + d;

    var fromDateM = new moment(fromDate, 'YYYY-MM-DD'); // JRJR Todo: add .tz
    return fromDateM._d;
}
var comparisons = {
    SAME: "same",
    BEFORE: "before",
    AFTER: "after"
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
function compareDates(dateToTest, compareToDate) {
    var _dateToTest = new Date(dateToTest.getTime()).setHours(0, 0, 0, 0),
        _compareToDate = new Date(compareToDate.getTime()).setHours(0, 0, 0, 0);

    if (_dateToTest === _compareToDate) {
        return comparisons.SAME;
    }

    return (dateToTest < compareToDate) ? comparisons.BEFORE : comparisons.AFTER;
}

Handlebars.registerHelper('inputText', function (className) {
    return '<input class="' + className + '" type="text" />';
});
Handlebars.registerHelper('inputManualFromPrice', function (id) {
    return '<input class="inputManualFromPrice" type="text" />';
});
Handlebars.registerHelper('inputSharesAmount', function () {
    return '<input class="inputSharesAmount" type="text" />';
});
Handlebars.registerHelper('constrolsIRCalcButton', function (className) {
    return '<div class="IRCalcButton ' + className + '">Calculate</div>';
})
Handlebars.registerHelper('constrolsIRCalcChangeListing', function (className) {
    var html = "";
    for (var i = 0; i < globalAmountOfListings; i++) {

        var exchangeSimple = getExchangeCity(globalRawStockData[i].exchangeName);
        var symbol = globalRawStockData[i].symbol;

        var addClass = '';
        if (i == globalActiveListingIndex) {
            addClass = 'selected="selected"';
        }
        html += "<option value=\"" + i + "\"" + addClass + ">" + exchangeSimple + " " + symbol + "</option>";
    }
    html = "<select class=\"" + className + "\">" + html + "</select>"
    return html;
})
Handlebars.registerHelper('outputValue', function (className) {
    return '<span class="' + className + '" type="text">-</span>';
});
var initConstrolsIRCalcChangeListingNoDefault = 2;
Handlebars.registerHelper('constrolsIRCalcChangeListingNoDefault', function (className) {
    var html = "";

    if (initConstrolsIRCalcChangeListingNoDefault > 0) {
        html += "<option value=\"-1\" selected=\"selected\">Select share type</option>";
    }
    for (var i = 0; i < globalAmountOfListings; i++) {

        var exchangeSimple = getExchangeCity(globalRawStockData[i].exchangeName);
        var symbol = globalRawStockData[i].symbol;

        var addClass = '';
        if (i == globalActiveListingIndex) {
            addClass = 'selected="selected"';
            if (initConstrolsIRCalcChangeListingNoDefault > 0) {
                addClass = '';
                initConstrolsIRCalcChangeListingNoDefault -= 1;
            }
        }
        html += "<option value=\"" + i + "\"" + addClass + ">" + exchangeSimple + " " + symbol + "</option>";
    }
    html = "<select class=\"" + className + "\">" + html + "</select>"
    return html;
});