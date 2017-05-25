<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.header("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteVerticalModule"></div>
<div class="IRQuoteHorizontalModule"></div>


<%= site.footer("IRChart") %>
<script id="IRQuoteTableVerticalTemplate" type="text/x-handlebars-template">

<h2 style="margin-top: 0 !important;">Records</h2>

<table class="IRDetailedSharePrice table-look vertical responsive-flip">
    <tr>
        <th class="Header exchange">{{headers/t_exchange}}</th>
        <td class="Data exchange">
            {{stocks/exchangeName}}
        </td>
    </tr>
    <tr>
        <th class="Header symbol">{{headers/t_symbol}}</th>
        <td class="Data symbol">
            {{stocks/symbol}}
        </td>
    </tr>
    <tr>
        <th class="Header currency">{{headers/t_currency}}</th>
        <td class="Data currency">
            {{stocks/currency}}
        </td>
    </tr>
    <tr>
        <th class="Header shares-out">{{headers/t_shares_outstanding}}</th>
        <td class="Data shares-out">
            {{decimals stocks/shareMillions}}
        </td>
    </tr>
    <tr>
        <th class="Header updated">{{headers/t_last_updated}}</th>
        <td class="Data updated">
            {{showTime stocks/tradeTimeStamp}}
        </td>
    </tr>
    <tr>
        <th class="Header date">{{headers/t_date}}</th>
        <td class="Data date">
            {{showDate stocks/timestamp}}
        </td>
    </tr>
</table>

<h2>Share Price Summary</h2>

<table class="IRDetailedSharePrice table-look vertical responsive-flip">
    <tr>
        <th class="Header last">{{headers/t_last}} (p)</th>
        <td class="Data last">
            {{decimals stocks/last}}
        </td>
    </tr>
    <tr>
        <th class="Header change">{{headers/t_change}} (p)</th>
        <td class="Data change formatColour">
            {{decimals stocks/change}}
        </td>
    </tr>
    <tr>
        <th class="Header bid">{{headers/t_bid}} (p)</th>
        <td class="Data bid">
            {{decimals stocks/bid}}
        </td>
    </tr>
    <tr>
        <th class="Header ask">{{headers/t_ask}} (p)</th>
        <td class="Data ask">
            {{decimals stocks/ask}}
        </td>
    </tr>
    <tr>
        <th class="Header market-cap">{{headers/t_market_cap}}</th>
        <td class="Data market-cap">
            {{showMarketCapM stocks/marketCap}}
        </td>
    </tr>
</table>

<h2>Share Price Market Data</h2>

<table class="IRDetailedSharePrice table-look vertical responsive-flip">
    <tr>
        <th class="Header prev-close">{{headers/t_prev_close}} (p)</th>
        <td class="Data prev-close">
            {{decimals stocks/prevClose}}
        </td>
    </tr>
    <tr>
        <th class="Header high">{{headers/t_high}} (p)</th>
        <td class="Data high">
            {{decimals stocks/high}}
        </td>
    </tr>
    <tr>
        <th class="Header low">{{headers/t_low}} (p)</th>
        <td class="Data low">
            {{decimals stocks/low}}
        </td>
    </tr>
    <tr>
        <th class="Header high52week">{{headers/t_52w_high}}</th>
        <td class="Data high52week">
            {{decimals stocks/high52Week}}
        </td>
    </tr>
    <tr>
        <th class="Header low52week">{{headers/t_52w_low}}</th>
        <td class="Data low52week">
            {{decimals stocks/low52Week}}
        </td>
    </tr>
    <tr>
        <th class="Header volume">{{headers/t_volume}}</th>
        <td class="Data volume">
            {{toLocal stocks/volume}}
        </td>
    </tr>
</table>
</script>

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
            <td class="Data market-cap">{{showMarketCapM marketCap}}</td>
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

<link rel="stylesheet" type="text/css" href="detailedSharePrice.css" />