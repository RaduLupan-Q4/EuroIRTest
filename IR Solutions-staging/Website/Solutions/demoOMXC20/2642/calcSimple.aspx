<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700"" type=""text/css"" />";
%>

<%= site.newHeader("IRCalc") %>



<link href='//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700' rel='stylesheet' type='text/css'>
<script type="text/javascript">
    var activeModules = ["IRCalc"];
</script>

<div class="IRCalcModule">
    <div class="IRChartColour"></div>
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRCalcTemplate" type="text/x-handlebars-template">

    <div class="IRChartCalcPlaceholder"></div>

    <div class="customCalcModuleWrapper">
        <form id="calc-form">
            <span class="title">Choose Investment</span>
            <div class="formDivider">
                <div class="input-row">
                    <label class="input-label invested-label">{{t_invested}}: </label>
                    <div class="input-wrapper wide-input radio">
                        <label for="amount-radio">
                        <input type="radio" name="invested" value="amount" id="amount-radio" checked="checked" />
                        {{t_amount}}</label>
                        <label for="shares-radio">
                        <input type="radio" name="invested" value="shares" id="shares-radio" />
                        {{t_shares}}</label>
                    </div>
                </div>
                <div class="input-row">
                    <label class="input-label amount-invested-label">{{t_amount_invested}}:</label>
                    <div class="input-wrapper">
                        <span id="currency-symbol"></span>
                        <input type="text" id="amount-invested" class="wide-input" step="any" min="0" />
                    </div>
                </div>
                <div class="input-row">
                    <label for="from-datepicker" class="input-label from-label" style="float: left;">{{t_from}}:</label>
                    <div class="input-wrapper">
                        {{{datepicker 'from'}}}
                {{{selectFromDay}}}
                {{{selectFromMonth}}}
                {{{selectFromYear}}}
                    </div>
                </div>
                <div class="input-row">
                    <label for="to-datepicker" class="input-label to-label">{{t_to}}: </label>
                    <div class="input-wrapper">
                        {{{datepicker 'to'}}}
                {{{selectToDay}}}
                {{{selectToMonth}}}
                {{{selectToYear}}}
                    </div>
                </div>
            </div>
            <div class="formDivider">
                <div class="input-row">
                    <div class="input-wrapper calculateButton">
                        <input type="submit" value="{{t_calculate}}" id="calculate-button" />
                    </div>
                </div>
            </div>
        </form>
        <div class="divideLine"></div>
        <section id="result-section">
            <span class="title">Summary</span>
            <table class="IRToolCalcResultsTable table-look vertical responsive-flip">
                <tr>
                    <th class="Header date">{{t_investment_date}}</th>
                    <td class="Data start-date-cell">-</td>
                </tr>
                <tr>
                    <th class="Header value">{{t_value}}</th>
                    <td class="Data buy-value-cell">-</td>
                </tr>
                <tr>
                    <th class="Header number-of-shares">{{t_number_of_shares}}</th>
                    <td class="Data est-shares-cell">-</td>
                </tr>
                <tr>
                    <th class="Header price">{{t_price}}</th>
                    <td class="Data buy-price-cell">-</td>
                </tr>
                <tr>
                    <th class="Header end-date">End date</th>
                    <td class="Data end-date-cell">-</td>
                </tr>

                <tr>
                    <th class="Header sell-price">{{t_sell_price}}</th>
                    <td class="Data sell-price-cell">-</td>
                </tr>
                <tr>
                    <th class="Header value">Value at End Date:</th>
                    <td class="Data value-now-cell">-</td>
                </tr>
                <tr>
                    <th class="Header change-in-price">{{t_change}} %:</th>
                    <td class="Data yield-cell">-</td>
                </tr>
                <tr>
                    <th class="Header change">{{t_change}}:</th>
                    <td class="Data yield-change-cell">-</td>
                </tr>
            </table>
        </section>
    </div>

</script>


<%= site.newFooter("IRCalc") %>
<script type="text/javascript" src="inc/postHeight.js"></script>
<link rel="stylesheet" type="text/css" href="calc.css" />
<link rel="stylesheet" type="text/css" href="style.css" />
