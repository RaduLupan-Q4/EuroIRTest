var globalIRCalcData = null;
var globalIRCalcRawData = null;
var globalIRCalcChartData = null;
var globalIRCalcChartRawData = null;
var globalIRCalcDiviendData = null;

var globalIRCalcDataClosePrice = null;

var IRChartTSR = new function () {
    this.dividendDatesAll = [];
    this.dividendValuesAll = [];
}

var IRCalc = {

    earlyDate: null,
    lateDate: null,
    fromDate: null,
    toDate: null,
    comparisons: {
        SAME: "same",
        BEFORE: "before",
        AFTER: "after"
    },
    units: {
        SHARES: "shares",
        AMOUNT: "amount"
    },

    template: function () {
        debugStep("IRCalc.template");
        var template = $('#IRCalcTemplate').html();
        var compiledTemplate = Handlebars.compile(template);
        $(".IRCalcModule").html(compiledTemplate(translations));
    },

    initControls: function () {

        IRCalc.earlyDate = new moment.tz(globalIRCalcDataClosePrice[0].date, globalActiveExchangeTimeZone);
        IRCalc.lateDate = new moment.tz(globalIRCalcDataClosePrice[globalIRCalcDataClosePrice.length - 1].date, globalActiveExchangeTimeZone);

        if (parseInt(IRCalc.earlyDate.format("YYYY")) < parseInt(new moment().format("YYYY"))) {

            this.fromDate = new moment();

        } else {
        }

        $("#calculate-button").on("click", IRCalc.submit);
    },

    submit: function () {
        debugStep("IRCalc.submit");

        var results = IRCalc.calculate();

        //if (typeof (results.buyStockPrice) == 'undefined') {
        //    IRCalc.resetResults;
        //} else {
        //    if (results.buyStockPrice > 0) {

        //        var chart = $(globalChartContainer).highcharts();

        //        $(".buy-price-cell").text(getActiveCurrency() + ' ' + formatDecimal(results.buyStockPrice));
        //        $(".est-shares-cell").text(formatDecimal(results.shares));
        //        $(".sell-price-cell").text(getActiveCurrency() + ' ' + formatDecimal(results.sellStockPrice));
        //        $(".value-now-cell").text(getActiveCurrency() + ' ' + formatDecimal(results.sellValue));

        //        $(".payout-cell").text(formatDecimal(results.payout));
        //        $(".yield-cell").text(formatDecimal(results.percentReturn) + " %");

        //        chart.series[0].setData(globalIRCalcChartRawData);
        //        chart.xAxis[0].setExtremes(IRCalc.fromDate.valueOf(), IRCalc.toDate.valueOf());

        //    } else {
        //        IRCalc.resetResults;
        //    }

        //}
        return false;
    },

    calculate: function () {
        debugStep("IRCalc.calculate");

        var amountInvested = parseFloat($("#amount-invested").val());
        var unit = $("input[name=invested]:checked").val();
        var fromDate = IRCalc.fromDate;
        var toDate = IRCalc.toDate;
        var results = {};
        var dividendSelected = $("#dividend").val();

        if (globalIRCalcDiviendData == null) {
            globalIRCalcDiviendData = globalRawCalcDividendData[0].dividend[0].data;
        }

        if (amountInvested && globalIRCalcRawData) {

            var startIndex = IRCalc.getIndexThatBestMatchesDate(globalIRCalcRawData, "date", IRCalc.fromDate._d);
            var endIndex = IRCalc.getIndexThatBestMatchesDate(globalIRCalcRawData, "date", IRCalc.toDate._d);

            var buyDate = new moment(globalIRCalcRawData[startIndex].date).format("YYYY-MM-DD");
            var buyStockPrice = parseFloat(globalIRCalcRawData[startIndex].closePrice);
            var sellDate = new moment(globalIRCalcRawData[endIndex].date).format("YYYY-MM-DD");
            var sellStockPrice = parseFloat(globalIRCalcRawData[endIndex].closePrice);

            results.buyDate = buyDate;
            results.buyStockPrice = buyStockPrice;
            results.sellDate = sellDate;
            results.sellStockPrice = sellStockPrice;
            results.shares = (unit === IRCalc.units.SHARES) ? parseFloat(amountInvested) : parseFloat(amountInvested / buyStockPrice);
            results.valueOfHoldingData = IRCalc.calculateValueOfHolding(dividendSelected, fromDate, results.shares);



            results.buyValue = parseFloat(results.valueOfHoldingData[startIndex][1]);
            results.sellValue = parseFloat(results.valueOfHoldingData[endIndex][1]);
            results.payout = IRCalc.calculatePayout();

            results.percentReturn = ((results.sellValue - results.buyValue) / results.buyValue) * 100;

        }
        return results;
    },
        
    getIndexThatBestMatchesDate: function (array, key, pickedDate) {
        var minIndex = 0;
        var maxIndex = array.length - 1;
        var currentIndex;
        var currentElement;
        while (minIndex <= maxIndex) {
            currentIndex = (minIndex + maxIndex) / 2 | 0;
            currentElement = array[currentIndex];
            var comparison = IRCalc.compareDates(new Date(currentElement[key]), pickedDate);
            if (comparison === IRCalc.comparisons.BEFORE) {
                minIndex = currentIndex + 1;
            }
            else if (comparison === IRCalc.comparisons.AFTER) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }
        return currentIndex;
    },

    compareDates: function (dateToTest, compareToDate) {
        var _dateToTest = new Date(dateToTest.getTime()).setHours(0, 0, 0, 0),
        _compareToDate = new Date(compareToDate.getTime()).setHours(0, 0, 0, 0);
        if (_dateToTest === _compareToDate) {
            return IRCalc.comparisons.SAME;
        }
        return (dateToTest < compareToDate) ? IRCalc.comparisons.BEFORE : IRCalc.comparisons.AFTER;
    }

};

function initializeCalc(data) {
    debugStep("initializeCalc");
    
    globalIRCalcDataClosePrice = data.data.closePriceListing[0].data[0].data;
    
    IRCalc.template();
    IRCalc.initControls();
    //IRCalc.prepareChartData();
    //IRCalc.drawChart();
    // JRJR
}