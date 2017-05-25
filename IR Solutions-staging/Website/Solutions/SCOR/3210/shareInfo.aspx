<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    //site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""inc/fonts/stylesheet.css""/>";
%>

<%= site.newHeader("IRQuote") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteModule"></div>

<br />


<%= site.newFooter("IRQuote") %>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRToolQuoteTable table-look table-look vertical quote quote-horizontal responsive-horizontal shareinfo">

        <tr>
            <th class="IRToolQuoteTableItem Header" style="width: 10%; vertical-align: middle; line-height: normal; padding: 10px 5px 10px 5px;">{{headers/t_ticker}}</th>
            <th class="IRToolQuoteTableItem Header" style="width: 10%; vertical-align: middle; line-height: normal; padding: 10px 5px 10px 5px;">{{headers/t_exchange}}</th>
            <th class="IRToolQuoteTableItem Header" style="width: 15%; vertical-align: middle; line-height: normal; padding: 10px 5px 10px 5px;">ISIN</th>
            <th class="IRToolQuoteTableItem Header" style="width: 10%; vertical-align: middle; white-space: normal; line-height: normal; padding: 10px 5px 10px 5px;">{{headers/t_lotsize_no_of_shares}}</th>
            <th class="IRToolQuoteTableItem Header" style="width: 10%; vertical-align: middle; white-space: normal; line-height: normal; padding: 10px 5px 10px 5px;">{{headers/t_minimum_trade}} (EUR)</th>
            <th class="IRToolQuoteTableItem Header" style="width: 10%; vertical-align: middle; white-space: normal; line-height: normal; padding: 10px 5px 10px 5px;">{{headers/t_shares_outstanding}}</th>
            <th class="IRToolQuoteTableItem Header" style="width: 15%; vertical-align: middle;white-space: normal; line-height: normal; padding: 10px 5px 10px 5px;">{{headers/t_market_cap}} (EUR)</th>
            <th class="IRToolQuoteTableItem Header" style="width: 15%; vertical-align: middle; white-space: normal; line-height: normal; padding: 10px 5px 10px 5px;">{{headers/t_no_of_trades_today}}</th>
        </tr>
        <tr>
            <td class="IRToolQuoteTableItem Data Symbol">{{stocks/symbol}}</td>
            <td class="IRToolQuoteTableItem Data ">EuroNext</td>
            <td class="IRToolQuoteTableItem Data ">FR0010411983</td>
            <td class="IRToolQuoteTableItem Data ">1</td>
            <td class="IRToolQuoteTableItem Data ">{{decimals stocks/low}} </td>
            <td class="IRToolQuoteTableItem Data ">{{decimals stocks/shareMillions}}</td>
            <td class="IRToolQuoteTableItem Data ">{{toLocal stocks/marketCap}}</td>
            <td class="IRToolQuoteTableItem Data ">{{stocks/tradeCount}}</td>
        </tr>
    <table class="IRToolQuoteTable table-look horizontal">

        <tr>
            <th class="IRToolQuoteTableItem Header column-first">{{headers/t_ticker}}</th>
            <td class="IRToolQuoteTableItem Data column-last Symbol">{{stocks/symbol}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_exchange}}</th>
            <td class="IRToolQuoteTableItem Data column-last">EuroNext</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header" style="display:table-cell">ISIN</th>
            <td class="IRToolQuoteTableItem Data column-last"style="display:table-cell">FR0010411983</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_lotsize_no_of_shares}}</th>
            <td class="IRToolQuoteTableItem Data column-last">1</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_minimum_trade}} (EUR)</th>
            <td class="IRToolQuoteTableItem Data column-last">{{decimals stocks/low}} </td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_shares_outstanding}}</th>
            <td class="IRToolQuoteTableItem Data column-last">{{decimals stocks/shareMillions}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_market_cap}} (EUR)</th>
            <td class="IRToolQuoteTableItem Data column-last">{{toLocal stocks/marketCap}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_no_of_trades_today}}</th>
            <td class="IRToolQuoteTableItem Data column-last">{{stocks/tradeCount}}</td>
        </tr>
    
    </table>
</script>