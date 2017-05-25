 <%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""inc/fonts/stylesheet.css""/>";
%>

<%= site.newHeader("IRQuote") %> 

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteModule"></div>

<br />


<%= site.newFooter("IRQuote") %>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRToolQuoteTable table-look table-look horizontal quote quote-horizontal responsive-horizontal shareinfo">
        <tr>
            <th class="IRToolQuoteTableItem Header column-first">{{headers/t_symbol}}</th>
            <td class="IRToolQuoteTableItem Data column-last Symbol">{{stocks/symbol}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_exchange}}</th>
            <td class="IRToolQuoteTableItem Data column-last">OMX</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_lotsize_no_of_shares}}</th>
            <td class="IRToolQuoteTableItem Data column-last">1</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_minimum_trade}}</th>
            <td class="IRToolQuoteTableItem Data column-last">{{decimals stocks/low}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_shares_outstanding}}</th>
            <td class="IRToolQuoteTableItem Data column-last">{{decimals stocks/shareMillions}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_market_cap}}</th>
            <td class="IRToolQuoteTableItem Data column-last">{{toLocal stocks/marketCap}}</td>
        </tr>
<%--        <tr>
            <th importance="70" class="IRToolQuoteTableItem Header">{{headers/t_no_of_trades_today}}</th>
            <td class="IRToolQuoteTableItem Data column-last">{{decimals stocks/high}}</td>
        </tr>--%>

    </table>
</script>