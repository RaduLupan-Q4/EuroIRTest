<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRCalcSimple") %>

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
            dates: ['2015 Q2', '2015 Q1', '2014 Q1', '2013 Q4', '2013 Q3', '2013 Q2', '2013 Q1', '2012 Q4', '2012 Q3', '2012 Q2', '2012 Q1', '2011 Q4', '2011 Q3', '2011 Q2', '2011 Q1', '2010 Q4', '2010 Q3', '2010 Q2', '2010 Q1', '2009 Q4', '2009 Q3', '2009 Q2', '2009 Q1', '2008 Q4', '2008 Q3', '2008 Q2', '2008 Q1', '2007 Q4', '2007 Q3', '2007 Q2', '2007 Q1', '2006 Q4', '2006 Q3', '2006 Q2', '2006 Q1'],
            GBX: [30.9200, 30.7500, 28.0300, 26.8800, 27.5100, 28.6700, 28.9900, 28.7900, 26.8600, 27.0800, 27.9200, 26.7400, 27.1100, 25.7700, 25.7100, 25.8200, 26.7200, 26.8900, 27.3700, 26.3600, 25.6500, 25.5900, 28.6500, 27.9700, 24.5400, 20.2100, 20.0500, 18.1100, 17.5900, 17.5600, 18.0900, 16.6000, 16.7700, 17.0800, 17.1300],
            EUR: [0.4227, 0.4195, 0.3468, 0.3244, 0.3290, 0.3406, 0.3411, 0.3314, 0.3333, 0.3421, 0.3468, 0.3202, 0.3167, 0.2909, 0.2888, 0.3002, 0.3138, 0.4200, 0.4200, 0.4200, 0.4200, 0.4200, 0.4200, 0.4000, 0.4000, 0.4000, 0.4000, 0.3600, 0.3600, 0.3600, 0.3600, 0.0000, 0.0000, 0.0000, 0.0000],
            USD: [0.4700, 0.4700, 0.4700, 0.4500, 0.4500, 0.4500, 0.4500, 0.4300, 0.4300, 0.4300, 0.4300, 0.4200, 0.4200, 0.4200, 0.4200, 0.4200, 0.4200, 0.3227, 0.3154, 0.3018, 0.2845, 0.2987, 0.3211, 0.3025, 0.3113, 0.2571, 0.2557, 0.2435, 0.2530, 0.2627, 0.2648, 0.2500, 0.2500, 0.2500, 0.2500],
            RefSharePrice: [27.9780, 31.2170, 39.4520, 35.5460, 33.3860, 31.9240, 33.9440, 33.0000, 32.9060, 35.4250, 32.7850, 36.3150, 34.9530, 32.3170, 34.9860, 34.2970, 33.4390, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            DivPerAds: [0.9400, 0.9400, 0.9400, 0.9000, 0.9000, 0.9000, 0.9000, 0.8600, 0.8600, 0.8600, 0.8600, 0.8400, 0.8400, 0.8400, 0.8400, 0.8400, 0.8400, 0.8400, 0.8400, 0.8400, 0.8400, 0.8400, 0.8400, 0.8000, 0.8000, 0.8000, 0.8000, 0.7200, 0.7200, 0.7200, 0.7200, 0.6500, 0.6294, 0.6308, 0.6305],
            RefSharePriceUSD: [55.9560, 62.4340, 78.9040, 71.0920, 66.7720, 63.8480, 67.8880, 66.0000, 65.8120, 70.8500, 65.5700, 73.9110, 71.1400, 65.7750, 71.2080, 69.8050, 68.0580, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            //RefSharePriceUSD: [27.9780, 31.2170, 39.4520, 35.5460, 33.3860, 31.9240, 33.9440, 33.0000, 32.9060, 35.4250, 32.7850, 36.3150, 34.9530, 32.3170, 34.9860, 34.2970, 33.4390, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            AltRefAdsPrice: [0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73.7190, 70.9550, 65.6040, 71.0220, 69.6230, 67.8810, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };

        

        var calculationsApplied = false;
        function prepareToolCalculations() {
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

