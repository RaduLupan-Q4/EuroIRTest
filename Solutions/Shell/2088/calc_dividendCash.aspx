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
        var calculationsApplied = false;
        var scripDividendData;
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
/*							alert(globalActiveListingIndex);
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
*/
                            if ($('.IRCalcChangeListing').val() == -1) {
                                valueMatch = 0;
                                readyToCalc = false;
                            }

                            if ($('.IRCalcSelectDividendPeriod').val() == -1) {
                                valueMatch = 0;
                                readyToCalc = false;
                            }


                            var activeCurrency = getActiveCurrency();
							
							var selectedListingAndCurrency=globalActiveListingIndex+'-'+currencySelected;
                            switch (selectedListingAndCurrency) {
                                case "0-EUR":
                                case "1-EUR":
                                case "2-EUR":
                                case "3-EUR":
                                    valueMatch = scripDividendData.EUR[indexMatch];
                                    activeCurrency = "EUR";
                                    break;
                                case "0-GBp":
                                case "1-GBp":
                                case "2-GBp":
                                case "3-GBp":
                                    valueMatch = scripDividendData.GBX[indexMatch];
                                    activeCurrency = "GBp";
                                    break;
                                case "0-USD":
                                case "1-USD":
                                case "2-USD":
                                case "3-USD":
                                    valueMatch = scripDividendData.USD[indexMatch];
                                    activeCurrency = "USD";
                                    break;
                                case "4-EUR":
                                case "5-EUR":
                                    valueMatch = 0;
                                    activeCurrency = "EUR";
                                    break;
                                case "4-GBp":
                                case "5-GBp":
                                    valueMatch = 0;
                                    activeCurrency = "GBp";
                                    break;
                                case "4-USD":
                                case "5-USD":
                                    valueMatch = scripDividendData.DivPerAds[indexMatch];
                                    activeCurrency = "USD";
                                    break;
                                case "0-":
                                case "1-":
                                case "2-":
                                case "3-":
                                case "4-":
                                case "5-":
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

        

        function initializeCalculator() 
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
        }

        
        $(function () {
            $.ajax({
                type: "GET",
                url: "https://irssl.euroinvestor.com/asp/ir/IRM_Shell/DividendJSON.aspx"
            }).success(function (result) {
                scripDividendData = JSON.parse(result);
                initializeCalculator();
            });
        });

    </script>


</script>
<%= site.newFooter("IRCalcSimple") %>


