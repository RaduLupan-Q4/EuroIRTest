<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700"" type=""text/css"" />";
%>

<%= site.newHeader("IRCalc2") %>



<link href='//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700' rel='stylesheet' type='text/css'>
<script type="text/javascript">
    var activeModules = ["IRCalc"];
</script>

<div class="IRCalcModule">
    <div class="IRChartColour"></div>
    <span class="ajaxLoader">Loading</span>
</div>
<script id="IRCalcTemplate" type="text/x-handlebars-template">

    <div class="tabs-container">
    <div id="container" class="tabs">
        <ul class="tabsWrapper">
            <li class="tabitem tab-1"><a href="//ir.euroinvestor.com/Solutions/GoodmanPropertyTrust/2592/chart.aspx" target="_self">Security price information |</a></li>
            <li class="tabitem tab-2"><a href="//ir.euroinvestor.com/Solutions/GoodmanPropertyTrust/2592/lookup.aspx" target="_self">Historical price lookup |</a></li>
            <li class="tabitem tab-3"><a class="current" href="//ir.euroinvestor.com/Solutions/GoodmanPropertyTrust/2592//calc.aspx" target="_self">Investment calculator</a></li>
        </ul>
    </div>
</div>
    <div class="IRChartCalcPlaceholder"></div>

    <form id="calc-form">
        <div class="formDivider">
            <div class="input-row">
                <label for="from-datepicker" class="input-label from-label" style="float: left;">{{t_from}}:</label>
                <div class="input-wrapper">
                    {{{datepicker 'from'}}}
                    {{{selectFromDay}}}
                    {{{selectFromMonth}}}
                    {{{selectFromYear 2014}}}
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
                <label class="input-label invested-label">{{t_invested}}: </label>
                <div class="input-wrapper wide-input radio">
                    <input type="radio" name="invested" value="amount" id="amount-radio" checked="checked" />
                    <label for="amount-radio">{{t_amount}}</label>
                    <input type="radio" name="invested" value="shares" id="shares-radio" />
                    <label for="shares-radio">{{t_shares}}</label>
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
                <div class="input-wrapper calculateButton">
                    <input type="submit" value="{{t_submit}}" id="calculate-button" />
                </div>
            </div>
        </div>
    </form>
    <div class="divideLine"></div>

    <section id="result-section">
       <div class="table-wrapper">
        <table class="IRToolCalcResultsTable table-look horizontal responsive-flip">
            <thead>
                <tr>
                    <th class="Header buy-price">{{t_buy_price}}</th>
                    
                    <th class="Header est-shares">{{t_est_number_of_shares}}</th>
                    
                    <th class="Header sell-price">{{t_sell_price}}</th>
                    <th class="Header value-now">{{t_value_now}}</th>
                    <th class="Header yield">{{t_yield}}</th>
                </tr>
            </thead>
            <tbody id="lookup-table-body">
                <tr class="row-1">
                    <td class="Data buy-price-cell">-</td>
                    <td class="Data est-shares-cell">-</td>
                    <td class="Data sell-price-cell">-</td>
                    <td class="Data value-now-cell">-</td>
                    <td class="Data yield-cell">-</td>
                </tr>
            </tbody>
        </table>
        </div>
    </section>
    <section id="result-section">
        <table class="IRToolCalcResultsTable table-look vertical responsive-flip">
            <tr>
                <th class="Header buy-price">{{t_buy_price}}</th>
                <td class="Data buy-price-cell">-</td>
            </tr>
            <tr>
                <th class="Header est-shares">{{t_est_number_of_shares}}</th>
                <td class="Data est-shares-cell">-</td>
            </tr>
            <tr>
                <th class="Header sell-price">{{t_sell_price}}</th>
                <td class="Data sell-price-cell">-</td>
            </tr>
            <tr>
                <th class="Header value-now">{{t_value_now}}</th>
                <td class="Data value-now-cell">-</td>
            </tr>
            <tr>
                <th class="Header yield">{{t_yield}}</th>
                <td class="Data yield-cell">-</td>
            </tr>
        </table>
    </section>
</script>



<%= site.newFooter("IRCalc2") %>

<%--<link rel="stylesheet" href="calcCustom.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("calcCustom.css")).Ticks.ToString()%>" />--%>

