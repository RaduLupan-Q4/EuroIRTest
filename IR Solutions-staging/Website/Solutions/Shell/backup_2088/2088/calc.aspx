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
                Last traded price
            </div>
            <div class="floatBox right">
                {{{outputValue 'outputValueMostRecent'}}} {{showCurrency}}
            </div>
        </div>

        <div class="floatBoxOuter">
            <div class="floatBox left">
                Enter the number of shares that you own
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
                <button class="IRCalculateButton" id="calculateCurrentValueOfHolding">{{{constrolsIRCalcButton 'calculateCurrentValueOfHolding'}}}</button><br />
            </div>
        </div>

        <div style="clear: both;"></div>

        <h3>Results</h3>

        <div class="calcResultOuter">

            <div class="floatBoxOuterRes">
                <div class="floatBoxInner left">
                    Last traded price
                </div>
                <div class="floatBoxInner right">
                    {{{outputValue 'outputValueMostRecent'}}} {{showCurrency}}
                </div>
            </div>

            <div class="floatBoxOuterRes">
                <div class="floatBoxInner left">
                    Current value of your holding
                </div>
                <div class="floatBoxInner right">
                    {{{outputValue 'currentHoldingValue'}}} {{showCurrency}}
                </div>
            </div>

        </div>

    </div>

    <div style="clear: both;"></div>

</script>

<%= site.newFooter("IRCalcSimple") %>

<script type="text/javascript">

    var calculationsApplied = false;
    function prepareToolCalculations() {
        if (!calculationsApplied) {


            if (typeof ($('.outputValueMostRecent').html()) == 'string') {

                if (typeof ($('.outputValueMostRecent')) != 'undefined') {
                    $('.outputValueMostRecent').html('-');
                }

                calculationsApplied = true;
            }
        }

    }

    $(function () {
        if (typeof ($('.outputValueMostRecent').html()) == 'string') {

            if (typeof ($('.outputValueMostRecent')) != 'undefined') {
                $('.outputValueMostRecent').html('-');
            }
        }
        setInterval(function () {
            prepareToolCalculations();
        }, 500);
    });

</script>