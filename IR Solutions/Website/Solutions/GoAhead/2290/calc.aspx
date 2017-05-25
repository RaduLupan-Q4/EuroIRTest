<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  
    IRSite site = new IRSite();
    site.appendCustomCSSURL = "http://fonts.googleapis.com/css?family=Open+Sans";
%>

<%= site.newHeader("IRCalc") %>

<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
    var activeDataRequests = [
        'requestStockData',
        'requestClosePriceListingData'
    ];
</script>
<div class="calcNavbarWrapper">
    <ul class="tabs">
        <li class="calcActive"><a href="#tab1" class="tabOption" id="byAmountInvested">By amount invested</a></li>
        <li><a href="#tab2" class="tabOption" id="bySharesBought">By shares bought</a></li>
    </ul>
</div>

<div class="IRCalcModule">
    <div class="IRChartColour"></div>
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRCalcTemplate" type="text/x-handlebars-template">
    <div class="calc-form-wrapper">
        <form id="calc-form">

            <div class="input-row">
                <label for="from-datepicker" class="input-label from-label" style="float: left;"><%--{{t_from}}:--%>Date of investment</label>
                <div class="input-wrapper">
                    {{{selectFromDay}}}
                {{{selectFromMonth}}}
                {{{selectFromYear}}}
                 {{{datepicker 'from'}}}
                </div>
            </div>
            <div class="input-row">
                <label for="to-datepicker" class="input-label to-label"><%--{{t_to}}:--%>End date of investment </label>
                <div class="input-wrapper">
                    {{{selectToDay}}}
                    {{{selectToMonth}}}
                    {{{selectToYear}}}
                    {{{datepicker 'to'}}}
                </div>
            </div>
            <div class="input-row" style="display: none">
                <label class="input-label invested-label">{{t_invested}}: </label>
                <div class="input-wrapper">
                    <input type="radio" name="invested" value="amount" id="amount-radio" checked="checked" />
                    <label for="amount-radio">Amount</label>
                    <input type="radio" name="invested" value="shares" id="shares-radio" />
                    <label for="shares-radio">Shares</label>
                </div>
            </div>
            <div class="input-row">
                <label class="input-label amount-invested-label">{{t_amount_invested}}</label>
                <div class="input-wrapper">
                    <span id="currency-symbol"></span>
                    <input type="text" id="amount-invested" step="any" min="0" />
                </div>
            </div>
            <div class="input-row">
                <label class="input-label currencyConversion-label">Currency</label>
                <div class="input-wrapper">
                    <select id="currencyConversion">
                        <option value="Current">Local Currency</option>
                        <option value="GBX">GBP</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
            </div>
            <div class="input-row" style="height: 40px;">
                <input type="submit" class="IRButton" value="Show data" id="calculate-button" />
            </div>
        </form>
    </div>

    <div class="result-wrapper" style="display: none">
        <div class="result-close-button">
            <span>X</span>
        </div>
        <section id="result-section">
            <div class="section-then">

                <div class="Initial-investment-wrapper">
                    <div>
                        Initial investment
                    </div>
                    <div class="Initial-investment-from">
                    </div>
                </div>
                <table class="IRToolCalcResultsTable table-look vertical responsive initial-investment">
                    <tr>
                        <td class="Header value-then">Value Then</td>
                        <td class="Data value-then-cell">-</td>
                    </tr>
                    <tr>
                        <td class="Header buy-price">Share Price</td>
                        <td class="Data buy-price-cell">-</td>
                    </tr>
                    <tr>
                        <td class="Header est-shares">Share bought</td>
                        <td class="Data est-shares-cell">-</td>
                    </tr>
                </table>
            </div>

            <div class="section-now">
                <div class="End-Value-wrapper">
                    <div>
                        End Value
                    </div>
                    <div class="End-Value-to">
                    </div>
                </div>
                <table class="IRToolCalcResultsTable table-look vertical responsive end-value">
                    <tr>
                        <td class="Header value-now">Value Now</td>
                        <td class="Data value-now-cell">-</td>
                    </tr>
                    <tr>
                        <td class="Header sell-price">Share Price</td>
                        <td class="Data sell-price-cell">-</td>
                    </tr>

                    <tr>
                        <td class="Header change">Change</td>
                        <td class="Data change-cell">-</td>
                    </tr>
                    <tr>
                        <td class="Header yield"><%--{{t_yield}}--%>Change (%)</td>
                        <td class="Data yield-cell">-</td>
                    </tr>
                    <tr>
                        <td class="Header annualized-change">Annualized change (%)</td>
                        <td class="Data annualized-change-cell">-</td>
                    </tr>
                </table>
            </div>
        </section>
        <div class="graph-section">
            <div class="change-graph">
                <div class="graph-text">Cumulative change</div>
                <button class="cumulative-change" src="" />
                <button class="periodical-change" src="" />
            </div>
            <div class="IRChartCalcPlaceholder" style="width: 100%;"></div>
            <div class="IRChartStackedCalcPlaceholder" style="width: 100%; height: 400px; margin: 0 auto; display: none"></div>
        </div>
    </div>

</script>

<div class="calcDisclaimer">
    <%= site.newFooter("IRCalc") %>
</div>
<script type="text/javascript" src="inc/ir.calc.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/ir.calc.js")).Ticks.ToString()%>2"></script>
<script type="text/javascript">

    function formatDecimalDecimal1000_fixed_noDecimals(number) {
        try {
            if (typeof (number) == 'number') {
                number = number.round(0).toFixed(0);
                var decimalSplit = number.toString().split(".");
                var leftPart = decimalSplit[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000);
                var delimiter = clientLocaleParameters.decimalSeparator;
                return leftPart;
            } else {
                return "-";
            }
        }
        catch (err) {
            return "-";
        }
    }

</script>

