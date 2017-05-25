<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  
    IRSite site = new IRSite();

    //string activeModules = "IRLookup;IRCalc";
    //site.actactiveModules = "IRLookup;IRCalc";

%>

<%= site.newHeader("IRCalc") %>
<%--<%= site.newHeader("IRSharepriceTOols") %>--%>

<script type="text/javascript">
    var activeModules = ["IRCalc"];
</script>

<div class="IRCalcModule">
    <div class="IRChartColour"></div>
    <span class="ajaxLoader">Loading</span>
</div>



<script id="IRCalcTemplate" type="text/x-handlebars-template">

    <%-- <div class="IRChartCalcPlaceholder"></div>--%>

    <form id="calc-form">
        <div class="calcSharesWrapper">
            <h2>Calculate the current value of your shareholding</h2>
            <b>To calculate the value of your holding based on a current share price of {{currency}}{{decimals last}} </b>
            <br />
            <div class="clear"></div>
            <label class="input-label amount-invested-label"><b>Number of shares owned</b></label><br />

            <input type="text" id="share-invested" step="any" min="0" /><br />
            <input type="submit" value="{{t_calculate}}" id="calculate-button" /><br />
            <div class="calculator-results">The value of your share holding is: <b>-</b></div>
        </div>

        <div class="calcValueWrapper">
            <h2>Calculate the change in the value of your holding</h2>

            <label for="from-datepicker" class="input-label from-label" style="float: left;"><b>Select the date of purchase</b></label><br />
            <div class="input-row">
                <div class="input-wrapper">
                    {{{datepicker 'from'}}}
                    {{{selectFromDay}}}
                    {{{selectFromMonth}}}
                    {{{selectFromYear 2014}}}
                </div>
            </div>
            <div class="clear"></div>
            <br />
            <b>Enter the historic cost of your holding in £'s (eg: 1000)</b><br />
            <input type="text" id="cost-invested" step="any" min="0" /><br />
            <b>OR</b><br />
            <label class="input-label amount-invested-label"><b>Enter the number of shares that you own</b></label><br />

            <input type="text" id="amount-invested" step="any" min="0" /><br />
            <input type="submit" value="{{t_calculate}}" id="calculate-button" /><br />
            <section id="result-section">
                <table class="IRToolCalcResultsTable table-look" id="lookup-table-body">
                    <tr>
                        <td class="Header column-first buy-price">Historic price per share</td>
                        <td class="Data column-first buy-price-cell">-</td>
                    </tr>
                    <tr>
                        <td class="Header value-now">Current value of your holding</td>
                        <td class="Data value-now-cell">-</td>
                    </tr>
                    <tr>
                        <td class="Header column-last yield">Change in value of your holding</td>
                        <td class="Data column-last yield-cell">-</td>
                    </tr>
                    
                </table>
            </section>
            <h2>Share price look-up</h2>
            <label for="from-datepicker" class="input-label from-label"><b>Select the date of purchase</b></label><br />
            <div class="input-row">
                <div class="input-wrapper">
                    {{{datepicker 'from'}}}
                    {{{selectFromDay}}}
                    {{{selectFromMonth}}}
                    {{{selectFromYear 2014}}}
                </div>
            </div>
            <div class="clear"></div>
            <br />
            <div class="lookup-results">Historic Share Price: <b>-</b></div>

        </div>
      
    </form>

</script>


<%= site.newFooter("IRCalc") %>
