<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRDetailedSharePrice") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteVerticalModule"></div>
<div class="IRQuoteHorizontalModule"></div>


<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">

<h2 style="margin-top: 0 !important;">Records</h2>
<table class="IRDetailedSharePrice table-look horizontal responsive-flip">
    {{#headers}}
        <tr>
            <th class="Header exchange">{{t_exchange}}</th>
            <th class="Header symbol">{{t_symbol}}</th>
            <th class="Header currency">{{t_currency}}</th>
            <th class="Header shares-out">{{t_shares_outstanding}}</th>
            <th class="Header column-last updated">{{t_last_updated}}</th>
            <th class="Header column-last date">{{t_date}}</th>
        </tr>
    {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data exchange">{{exchangeName}}</td>
            <td class="Data symbol">{{symbol}}</td>
            <td class="Data currency">{{currency}}</td>
            <td class="Data shares-out">{{decimals shareMillions}}</td>
            <td class="Data column-last updated">{{showTime tradeTimeStamp}}</td>
            <td class="Data column-last date">{{showDate timestamp}}</td>
        </tr>
    {{/stocks}}
</table>
<h2>Share Price Summary</h2>
<table class="IRDetailedSharePrice table-look horizontal responsive-flip">
    {{#headers}}
        <tr>
            <th class="Header last">{{t_last}} (p)</th>
            <th class="Header change">{{t_change}} (p)</th>
            <th class="Header bid">{{t_bid}} (p)</th>
            <th class="Header ask">{{t_ask}} (p)</th>
            <th class="Header market-cap">{{t_market_cap}}</th>
        </tr>
    {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data last">{{decimals last}}</td>
            <td class="Data change formatColour">{{decimals change}}</td>
            <td class="Data bid">{{decimals bid}}</td>
            <td class="Data ask">{{decimals ask}}</td>
            <td class="Data market-cap">{{showLondonMarketCapM marketCap}}m</td>
        </tr>
    {{/stocks}}
</table>

<h2>Share Price Market Data</h2>
<table class="IRDetailedSharePrice table-look horizontal responsive-flip">
    {{#headers}}
        <tr>
            <th class="Header prev-close">{{t_prev_close}} (p)</th>
            <th class="Header high">{{t_high}} (p)</th>
            <th class="Header low">{{t_low}} (p)</th>
            <th class="Header high52week">{{t_52w_high}}</th>
            <th class="Header low52week">{{t_52w_low}}</th>
            <th class="Header volume">{{t_volume}}</th>
        </tr>
    {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data prev-close">{{decimals prevClose}}</td>
            <td class="Data high">{{decimals high}}</td>
            <td class="Data low">{{decimals low}}</td>
            <td class="Data high52week">{{decimals high52Week}}</td>
            <td class="Data low52week">{{decimals low52Week}}</td>
            <td class="Data volue">{{toLocal volume}}</td>
        </tr>
    {{/stocks}}
</table>
</script>
<%= site.newFooter("IRDetailedSharePrice") %>
<link rel="stylesheet" type="text/css" href="detailedSharePrice.css" />