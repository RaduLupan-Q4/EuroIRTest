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



<%= site.newFooter("IRCalcSimple") %>

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
                Subject to Dutch Witholding Tax (applicable to ADSs only)
            </div>
            <div class="floatBox right">
                <div class="IRCalcSelectTaxOuter"></div>
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
                <button class="IRCalculateButton" style="display: none;" id="calculateScripDividend">{{{constrolsIRCalcButton 'calculateScripDividend'}}}</button><br />
            </div>
        </div>

        <div style="clear: both;"></div>

        <h3>Results</h3>

        <div class="calcResultOuter">


            <div class="floatBoxOuterRes">
                <div class="floatBoxInner left">
                    US $ Dividend per share
                </div>
                <div class="floatBoxInner right">
                    $ <span class="resultValueDiv"></span>
                </div>
            </div>

            <div class="floatBoxOuterRes">
                <div class="floatBoxInner left">
                    US $ Cash dividend equivalent <sup>1</sup>
                </div>
                <div class="floatBoxInner right">
                    $ <span class="resultValueCashDivEquiv"></span>
                </div>
            </div>

            <div class="floatBoxOuterRes">
                <div class="floatBoxInner left">
                    US $ Scrip Reference Price <sup>2</sup>
                </div>
                <div class="floatBoxInner right">
                    $ <span class="resultValueRefPrice"></span>
                </div>
            </div>

            <div class="floatBoxOuterRes">
                <div class="floatBoxInner left">
                    Number of new whole A shares/ ADSs issued <sup>3</sup>
                </div>
                <div class="floatBoxInner right">
                    <span class="resultValueSharesIssued"></span>
                </div>
            </div>

            <div class="floatBoxOuterRes">
                <div class="floatBoxInner left">
                    US $ Current Residual Cash balance <sup>4</sup>
                </div>
                <div class="floatBoxInner right">
                    $ <span class="resultValueResidualCash"></span>
                </div>
            </div>

        </div>

        <div style="clear: both;"></div>


        <br />

        <div class="floatBoxOuter shellDisclaimer">

            <br />

            <p>
                <sup>1</sup>
                The total dividend in US$ a shareholder is entitled to according to the number of shares held at the record date. 
            </p>
            <br />
            <p>
                <sup>2</sup>
                The Reference Share Price is used for calculating a Participating Shareholder’s entitlement under the Scrip Dividend Programme. 
            The Reference Share Price will be the US dollar equivalent of the average of the closing price for the Company’s A Shares listed on Euronext Amsterdam for the five dealing days commencing on (and including) the date on which the Shares are first quoted ex-dividend. The Reference Share Price is calculated by reference to the Euronext Amsterdam closing price. The US dollar equivalent of the closing price on each of the dealing days referred to above will be calculated using a market exchange rate prevailing at the time (the “Reference Exchange Rate”). 
            The Reference ADS Price will equal the Reference Share Price of the two A sharers underlying each new A ADS plus the UK stamp duty reserve tax (“SDRT”), which is chargeable at 1.5 per cent with respect to each new A ADSs. For holders of A ADS's who are subject to Dutch withholding tax, the Reference ADS Price will also include an amount equal to Dutch withholding tax rate of 15 per cent on the SDRT. 
            </p>
            <br />
            <p>
                <sup>3</sup>
                The number of new A shares or A ADSs entitled to based on the dividend entitlement of the selected quarter. 
            Depending on how a Participating Shareholder holds shares, fractional entitlements are dealt with in different ways and either paid to the Participating Shareholder in cash or carried forward to the next quarter. If your fractional entitlements are carried forward, the new number of whole A shares or A ADSs may deviate from the indication provided in this calculator. 
            </p>
            <br />
            <p>
                <sup>4</sup>
                Depending on how a Participating Shareholder holds shares, fractional entitlements are dealt with in different ways and either paid to the Participating Shareholder in cash or carried forward to the next quarter. If the fractional entitlements are paid to the Participating Shareholder, the exact amount may deviate from the indication provided in this calculator.
            </p>

        </div>

    </div>

    <div style="clear: both;"></div>

    <script type="text/javascript">


        var scripDividendData;
        var calculationsApplied = false;
        function prepareToolCalculations() {

            $('.IRCalcChangeListing option').each(function () {
                $(this).html($(this).html().replace('Euronext', 'Amsterdam'));
            });


            if (!calculationsApplied) {

                if (typeof ($('.calculateScripDividend')) != 'undefined') {

                    calculationsApplied = true;

                    var selectedYear;
                    $('.IRCalcSelectDividendPeriod').bind('change', function () {
                        
                        var year = $(this).val().split(' ')[0];
                        
                        if (year <= 2011) {

                            if (globalActiveListingIndex == 4 || globalActiveListingIndex == 5) {
                                // If exchange is NYSE
                                $('.IRCalcSelectTaxOuter').html("<select><option value=\"0\" selected=\"selected\">No</option><option value=\"1\">Yes</option></select>");
                            } else {
                                $('.IRCalcSelectTaxOuter').html("<b>N/A</b>");
                            }
                        } else {
                            $('.IRCalcSelectTaxOuter').html("<b>N/A</b>");
                        }

                    });

                    $('#calculateScripDividend').click(function () {
                        var readyToCalc = true;
                        debugStep(" ");
                        debugStep("clicked calculateScripDividend");

                        var indexMatch = scripDividendData.dates.indexOf($('.IRCalcSelectDividendPeriod').val());
                        var valueMatch;

                        switch (globalActiveListingIndex) {
                            case 0:
                            case 1:
                                valueMatch = scripDividendData.GBX[indexMatch];
                                break;
                            case 2:
                            case 3:
                                valueMatch = scripDividendData.EUR[indexMatch];
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

                        var last = globalRawStockData[globalActiveListingIndex].last;
                        var tax = 0;
                        tax = parseInt($('.IRCalcSelectTaxOuter select').val());
                        amountOfShares = Number($('.valueCurrentValueOfHolding').val());
                        dividendPerShare = valueMatch;
                        totalDividendPaid = valueMatch * amountOfShares;

                        // Results
                        var divValue = scripDividendData.USD[indexMatch];
                        var refValue = scripDividendData.RefSharePrice[indexMatch];
                        if (globalActiveListingIndex == 4 || globalActiveListingIndex == 5) {
                            // If exchange is NYSE
                            divValue = scripDividendData.DivPerAds[indexMatch];
                            refValue = scripDividendData.RefSharePriceUSD[indexMatch];
                        }
                        var sharesIssuedValue = Math.floor(divValue * amountOfShares / refValue);
                        var residualCashvalue = divValue * amountOfShares - sharesIssuedValue * refValue;
                        if (tax == 1) {
                            residualCashvalue = residualCashvalue * 0.85;
                        }

                        if (readyToCalc) {

                            $('.resultValueDiv').html(parseFloat(divValue).toFixed(2));
                            $('.resultValueCashDivEquiv').html(parseFloat(divValue * amountOfShares).toFixed(2));
                            $('.resultValueRefPrice').html(parseFloat(refValue).toFixed(3));
                            $('.resultValueSharesIssued').html(sharesIssuedValue);
                            $('.resultValueResidualCash').html(residualCashvalue.toFixed(2));
                        }
                    });
                    $('#calculateScripDividend').css('display', 'block');
                }

                
            }
        }

        function initializeScripCalculator()
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

            setInterval(function () {
                prepareToolCalculations();
            }, 500);

          
                $('.IRCalcSelectDividendPeriodOuter').html(selectDividendDOM);
                $('.IRCalcSelectTaxOuter').html("<b>N/A</b>");


        }
        $(function () {
            $.ajax({
                type: "GET",
                url: "https://irssl.euroinvestor.com/asp/ir/IRM_Shell/DividendJSON.aspx"
            }).success(function (result) {
                scripDividendData = JSON.parse(result);
                initializeScripCalculator();
            });
        });

    </script>

</script>

