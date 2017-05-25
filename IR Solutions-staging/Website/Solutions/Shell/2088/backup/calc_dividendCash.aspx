<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRCalcSimple") %>
<script type="text/javascript" src="//s00.static-shell.com/etc.clientlibs/shell-common/components/components/iframe/clientlib/external.min.js"></script>
<script type="text/javascript">
    var activeModules = ["IRCalcSimple"];
</script>

<div class="IRCalcModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRCalcSimpleTemplate" type="text/x-handlebars-template">

    <div class="IRCalcSection IRCalcCurrentValueOfHolding">

        <h3>Calculate the value of your holding</h3>

        <div class="floatBoxOuter">
            <div class="floatBox left">
                Share type
            </div>
            <div class="floatBox right">
                {{{constrolsIRCalcChangeListingNoDefault 'IRCalcChangeListing'}}}
            </div>
        </div>

        <div class="floatBoxOuter">
            <div class="floatBox left">
                Dividend payment date
            </div>
            <div class="floatBox right">
                <div class="IRCalcSelectDividendPeriodOuter"></div>
            </div>
        </div>

        <div class="floatBoxOuter">
            <div class="floatBox left">
                Currency
            </div>
            <div class="floatBox right">
                <div class="IRCalcSelectCurrencyOuter"></div>
            </div>
        </div>

        <div class="floatBoxOuter">
            <div class="floatBox left">
                Enter number of shares owned at payment date
            </div>
            <div class="floatBox right">
                {{{inputText 'valueCurrentValueOfHolding'}}}
            </div>
        </div>

        <div class="floatBoxOuter">
            <div class="floatBox left">
                &nbsp;
            </div>
            <div class="floatBox right">
                <button class="IRCalculateButton" style="display: none;" id="calculateCashDividend">{{{constrolsIRCalcButton 'calculateCashDividend'}}}</button><br />
            </div>
        </div>

        <div style="clear: both;"></div>

        <h3>Results</h3>

        <div class="calcResultOuter">

            <div class="floatBoxOuterRes">
                <div class="floatBoxInner left">
                    Dividend per share
                </div>
                <div class="floatBoxInner right">
                    <span class="valueDividendPerShare">-</span>
                </div>
            </div>

            <div class="floatBoxOuterRes">
                <div class="floatBoxInner left">
                    Total dividend paid
                </div>
                <div class="floatBoxInner right">
                    <span class="valueDividendTotal">-</span>
                </div>
            </div>

        </div>

        <div style="clear: both;"></div>

    </div>


    <script type="text/javascript">

        var scripDividendData = {
dates: [
'2015 Q4','2015 Q3','2015 Q2','2015 Q1','2014 Q4','2014 Q3','2014 Q2','2014 Q1','2013 Q4','2013 Q3','2013 Q2','2013 Q1','2012 Q4','2012 Q3','2012 Q2','2012 Q1','2011 Q4','2011 Q3','2011 Q2','2011 Q1','2010 Q4','2010 Q3','2010 Q2','2010 Q1','2009 Q4','2009 Q3','2009 Q2','2009 Q1','2008 Q4','2008 Q3','2008 Q2','2008 Q1','2007 Q4','2007 Q3','2007 Q2','2007 Q1','2006 Q4','2006 Q3','2006 Q2','2006 Q1'
 ] ,
GBX: [
32.78,31.07,30.92,30.75,31.2,30.16,29.09,28.03,26.88,27.51,28.67,28.99,28.79,26.86,27.08,27.92,26.74,27.11,25.77,25.71,25.82,26.72,26.89,27.37,26.36,25.65,25.59,28.65,27.97,24.54,20.21,20.05,18.11,17.59,17.56,18.09,16.6,16.77,17.08,17.13
 ] ,
EUR: [
0.4221,0.43,0.4227,0.4195,0.43,0.38,0.3632,0.3468,0.3244,0.329,0.3406,0.3411,0.3314,0.3333,0.3421,0.3468,0.3202,0.3167,0.2909,0.2888,0.3002,0.3138,0.42,0.42,0.42,0.42,0.42,0.42,0.4,0.4,0.4,0.4,0.36,0.36,0.36,0.36,0,0,0,0
 ] ,
USD: [
0.47,0.47,0.47,0.47,0.47,0.47,0.47,0.47,0.45,0.45,0.45,0.45,0.43,0.43,0.43,0.43,0.42,0.42,0.42,0.42,0.42,0.42,0.3227,0.3154,0.3018,0.2845,0.2987,0.3211,0.3025,0.3113,0.2571,0.2557,0.2435,0.253,0.2627,0.2648,0.25,0.25,0.25,0.25
 ] ,
RefSharePrice: [
22.46,24.519,27.978,31.217,0,0,0,39.452,35.546,33.386,31.924,33.944,33,32.906,35.425,32.785,36.315,34.953,32.317,34.986,34.297,33.439,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
 ] ,
DivPerAds: [
0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.9,0.9,0.9,0.9,0.86,0.86,0.86,0.86,0.84,0.84,0.84,0.84,0.84,0.84,0.84,0.84,0.84,0.84,0.84,0.84,0.8,0.8,0.8,0.8,0.72,0.72,0.72,0.72,0.65,0.6294,0.6308,0.6305
 ] ,
RefSharePriceUSD: [
44.92,49.038,55.956,62.434,0,0,0,78.904,71.092,66.772,63.848,67.888,66,65.812,70.85,65.57,73.911,71.14,65.775,71.208,69.805,68.058,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
 ] ,
AltRefAdsPrice: [
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,73.719,70.955,65.604,71.022,69.623,67.881,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
 ]};

/*
        var scripDividendData = {
            dates: ['2015 Q3', '2015 Q2', '2015 Q1', '2014 Q4', '2014 Q3', '2014 Q2', '2014 Q1', '2013 Q4', '2013 Q3', '2013 Q2', '2013 Q1', '2012 Q4', '2012 Q3', '2012 Q2', '2012 Q1', '2011 Q4', '2011 Q3', '2011 Q2', '2011 Q1', '2010 Q4', '2010 Q3', '2010 Q2', '2010 Q1', '2009 Q4', '2009 Q3', '2009 Q2', '2009 Q1', '2008 Q4', '2008 Q3', '2008 Q2', '2008 Q1', '2007 Q4', '2007 Q3', '2007 Q2', '2007 Q1', '2006 Q4', '2006 Q3', '2006 Q2', '2006 Q1'],
            GBX: [31.0700, 30.9200, 30.75, 31.2, 30.16, 29.09, 28.03, 26.88, 27.51, 28.67, 28.99, 28.79, 26.86, 27.08, 27.92, 26.74, 27.11, 25.77, 25.71, 25.82, 26.72, 26.89, 27.37, 26.36, 25.65, 25.59, 28.65, 27.97, 24.54, 20.21, 20.05, 18.11, 17.59, 17.56, 18.09, 16.6, 16.77, 17.08, 17.1300],
            EUR: [0.4299, 0.4227, 0.4195, 0.43, 0.38, 0.363, 0.3468, 0.3244, 0.329, 0.3406, 0.3411, 0.3314, 0.3333, 0.3421, 0.3468, 0.3202, 0.3167, 0.2909, 0.2888, 0.3002, 0.3138, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42, 0.4, 0.4, 0.4, 0.4, 0.36, 0.36, 0.36, 0.36, 0, 0, 0, 0.0000],
            USD: [0.4700, 0.4700, 0.47, 0.47, 0.47, 0.47, 0.47, 0.45, 0.45, 0.45, 0.45, 0.43, 0.43, 0.43, 0.43, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42, 0.3227, 0.3154, 0.3018, 0.2845, 0.2987, 0.3211, 0.3025, 0.3113, 0.2571, 0.2557, 0.2435, 0.253, 0.2627, 0.2648, 0.25, 0.25, 0.25, 0.2500],
            RefSharePrice: [24.5190, 27.9780, 31.217, 0, 0, 0, 39.452, 35.546, 33.386, 31.924, 33.944, 33, 32.906, 35.425, 32.785, 36.315, 34.953, 32.317, 34.986, 34.297, 33.439, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            DivPerAds: [0.9400, 0.9400, 0.94, 0.94, 0.94, 0.94, 0.94, 0.9, 0.9, 0.9, 0.9, 0.86, 0.86, 0.86, 0.86, 0.84, 0.84, 0.84, 0.84, 0.84, 0.84, 0.84, 0.84, 0.84, 0.84, 0.84, 0.84, 0.8, 0.8, 0.8, 0.8, 0.72, 0.72, 0.72, 0.72, 0.65, 0.6294, 0.6308, 0.6305],
            RefSharePriceUSD: [49.0380, 55.9560, 62.434, 0, 0, 0, 78.904, 71.092, 66.772, 63.848, 67.888, 66, 65.812, 70.85, 65.57, 73.911, 71.14, 65.775, 71.208, 69.805, 68.058, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            AltRefAdsPrice: [0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73.719, 70.955, 65.604, 71.022, 69.623, 67.881, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        };
*/
        

        var calculationsApplied = false;
        function prepareToolCalculations() {
            $('.IRCalcChangeListing option').each(function () {
                $(this).html($(this).html().replace('Euronext', 'Amsterdam'));
            });

            if (!calculationsApplied) {
                if (typeof ($('.IRCalcSelectCurrency').html()) == 'string')
                {

                    if (typeof ($('.calculateCashDividend')) != 'undefined') {


                        $('.IRCalcSelectCurrency').bind('change', function () {
                            $('.valueDividendPerShare').html("-");
                            $('.valueDividendTotal').html("-");
                        });

                        $('.IRCalcButton.calculateCashDividend, #calculateCashDividend').click(function () {
                            var readyToCalc = true;
                            debugStep(" ");
                            debugStep("clicked calculateCashDividend");

                            currencySelected = $('.IRCalcSelectCurrency').val();

                            var indexMatch = scripDividendData.dates.indexOf($('.IRCalcSelectDividendPeriod').val());
                            switch (globalActiveListingIndex) {
                                case 0:
                                case 1:
                                    valueMatch = scripDividendData.EUR[indexMatch];
                                    break;
                                case 2:
                                case 3:
                                    valueMatch = scripDividendData.GBX[indexMatch];
                                    break;
                                case 4:
                                case 5:
                                    valueMatch = scripDividendData.USD[indexMatch];
                                    break;
                            }

                            if ($('.IRCalcChangeListing').val() == -1) {
                                valueMatch = 0;
                                readyToCalc = false;
                            }

                            if ($('.IRCalcSelectDividendPeriod').val() == -1) {
                                valueMatch = 0;
                                readyToCalc = false;
                            }


                            var activeCurrency = getActiveCurrency();
                            switch (currencySelected) {
                                case "EUR":
                                    valueMatch = scripDividendData.EUR[indexMatch];
                                    activeCurrency = "EUR";
                                    break;
                                case "GBp":
                                    valueMatch = scripDividendData.GBX[indexMatch];
                                    activeCurrency = "GBp";
                                    break;
                                case "USD":
                                    valueMatch = scripDividendData.DivPerAds[indexMatch];
                                    activeCurrency = "USD";
                                    break;
                                case "":
                                    valueMatch = 0;
                                    activeCurrency = "";
                                    readyToCalc = false;
                                    break;
                            }

                            var last = globalRawStockData[globalActiveListingIndex].last;
                            amountOfShares = Number($('.valueCurrentValueOfHolding').val());
                            dividendPerShare = valueMatch;
                            totalDividendPaid = valueMatch * amountOfShares;

                            if (readyToCalc) {
                                $('.valueDividendPerShare').html(valueMatch.toFixed(4) + ' ' + activeCurrency);
                                $('.valueDividendTotal').html(totalDividendPaid.toFixed(2) + ' ' + activeCurrency);
                            }

                        });
                        $('#calculateCashDividend').css('display', 'block');
                    }

                    calculationsApplied = true;
                }
            }

        }

        

        $(function ()
        {
            
            
            var amountOfShares = 0;
            var dividendPerShare = 0;
            var totalDividendPaid = 0;
            var valueMatch = 0;

            var selectDividendDOM = '<select class="IRCalcSelectDividendPeriod">';
            selectDividendDOM += '<option value="-1">Select a date</option>';
            for (var i = 0; i < scripDividendData.dates.length; i++) {
                selectDividendDOM += '<option value="' + scripDividendData.dates[i] + '">' + scripDividendData.dates[i] + '</option>';
            }
            selectDividendDOM += '</select>';

            var selectCurrencyDOM = '<select class="IRCalcSelectCurrency">';
            selectCurrencyDOM += '<option selected="selected" value="">Select Currency</option>';
            selectCurrencyDOM += '<option value="EUR">EUR</option>';
            selectCurrencyDOM += '<option value="GBp">GBp</option>';
            selectCurrencyDOM += '<option value="USD">USD</option>';
            selectCurrencyDOM += '</select>';

            var currencySelected = ''; // JRJR

            setInterval(function () {
                prepareToolCalculations();
            }, 500);

                $('.IRCalcSelectDividendPeriodOuter').html(selectDividendDOM);
                $('.IRCalcSelectCurrencyOuter').html(selectCurrencyDOM);
        });

    </script>


</script>

<%= site.newFooter("IRCalcSimple") %>

