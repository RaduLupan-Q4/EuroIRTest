<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRDetailedSharePrice") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<script id="IRMiniquoteTemplate" type="text/x-handlebars-template">

    <div class="IRMiniquoteChartPlaceholder"></div>

</script>


<div class="IRQuoteHorizontalModule"></div>

<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">
    <h3 class="horizontal-header">Exchange Information</h3>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header exchange column-first">{{t_exchange}}</th>
            <th class="Header symbol">{{t_symbol}}</th>
            <th class="Header updated">{{t_updated}}</th>
            <th class="Header currency column-last">{{t_currency}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data exchange column-first">{{exchangeName}}</td>
            <td class="Data symbol">{{symbol}}</td>
            <td class="Data updated">{{showDateTime time}}</td>
            <td class="Data currency column-last">{{currency}}</td>
        </tr>
        {{/stocks}}
    </table>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}}    
            <th class="Header exchange">{{t_exchange}}</th>
            {{/headers}}{{#stocks}}<td class="Data exchange">{{exchangeName}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}  
            <th class="Header symbol">{{t_symbol}}</th>
            {{/headers}}{{#stocks}}<td class="Data symbol">{{symbol}}</td>
            {{/stocks}} 
        </tr>
        <tr>
            {{#headers}} 
            <th class="Header updated">{{t_updated}}</th>
            {{/headers}}{{#stocks}}<td class="Data updated">{{showDateTime time}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header currency">{{t_currency}}</th>
            {{/headers}}{{#stocks}}<td class="Data currency">{{currency}}</td>
            {{/stocks}}
        </tr>
    </table>

    <h3 class="horizontal-header" style="margin-top: 0 !important; width: 100%; float: left;">Current Share Price Information</h3>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header change column-first">{{t_day}} {{t_change}}</th>
            <th class="Header bid">{{t_bid}}</th>
            <th class="Header ask">{{t_ask}}</th>
            <th class="Header volume">{{t_day}} {{t_volume}}</th>
            <th class="Header prev-close column-last">{{t_prev_close}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data change formatColour column-first">{{decimals change}} ({{decimals changePercent}}%)</td>
            <td class="Data bid">{{decimals bid}}</td>
            <td class="Data ask">{{decimals ask}}</td>
            <td class="Data volue">{{toLocal volume}}</td>
            <td class="Data prev-close column-last">{{decimals prevClose}}</td>
        </tr>
        {{/stocks}}
    </table>

    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}}<th class="Header change column-first">{{t_day}} {{t_change}}</th>
            {{/headers}}{{#stocks}}<td class="Data change formatColour column-first">{{decimals change}} ({{decimals changePercent}}%)</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header bid">{{t_bid}}</th>
            {{/headers}}{{#stocks}}<td class="Data bid">{{decimals bid}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header ask">{{t_ask}}</th>
            {{/headers}}{{#stocks}}<td class="Data ask">{{decimals ask}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header volume">{{t_day}} {{t_volume}}</th>
            {{/headers}}{{#stocks}}<td class="Data volue">{{toLocal volume}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header prev-close">{{t_prev_close}}</th>
            {{/headers}}{{#stocks}}<td class="Data prev-close">{{decimals prevClose}}</td>
            {{/stocks}}
        </tr>
    </table>


    <h3 class="horizontal-header">High/Low share price information</h3>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header prev-close column-first">{{t_prev_close}}</th>
            <th class="Header symbol">{{t_day}} {{t_high}}</th>
            <th class="Header low">{{t_day}} {{t_low}}</th>
            <th class="Header high52week">{{t_52w_high}}</th>
            <th class="Header low52week column-last">{{t_52w_low}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data last column-first">{{decimals last}}</td>
            <td class="Data high">{{decimals high}}</td>
            <td class="Data low">{{decimals low}}</td>
            <td class="Data high52week">{{decimals high52Week}}</td>
            <td class="Data low52week column-last">{{decimals low52Week}}</td>
            <%--<td class="Data shares-out">{{decimals shareMillions}}m</td>
            <td class="Data market-cap">£{{showLondonMarketCapM marketCap}}m</td>--%>
        </tr>
        {{/stocks}}
    </table>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}}<th class="Header prev-close">{{t_prev_close}}</th>
            {{/headers}}{{#stocks}}<td class="Data last">{{decimals last}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header symbol">{{t_day}} {{t_high}}</th>
            {{/headers}}{{#stocks}}<td class="Data high">{{decimals high}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low">{{t_day}} {{t_low}}</th>
            {{/headers}}{{#stocks}}<td class="Data low">{{decimals low}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header high52week">{{t_52w_high}}</th>
            {{/headers}}{{#stocks}}<td class="Data high52week">{{decimals high52Week}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low52week">{{t_52w_low}}</th>
            {{/headers}}{{#stocks}}<td class="Data low52week">{{decimals low52Week}}</td>
            {{/stocks}}
        </tr>
    </table>

    <h3 class="vertical-header">Exchange Information</h3>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}} 
            <th class="Header exchange">{{t_exchange}}</th>
            {{/headers}}
           {{#stocks}}
            <td class="Data exchange">{{exchangeName}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header symbol">{{t_symbol}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data symbol">{{symbol}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header currency">{{t_currency}}</th>
            {{/headers}}
           {{#stocks}}
            <td class="Data currency">{{currency}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header shares-out">{{t_shares_outstanding}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data shares-out">{{decimals shareMillions}}m</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header market-cap">{{t_market_cap}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data market-cap">£{{showLondonMarketCapM marketCap}}m</td>
            {{/stocks}}
        </tr>
    </table>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header exchange column-first">{{t_exchange}}</th>
            <th class="Header symbol">{{t_symbol}}</th>
            <th class="Header currency">{{t_currency}}</th>
            <th class="Header shares-out">{{t_shares_outstanding}}</th>
            <th class="Header market-cap column-last">{{t_market_cap}}</th>
        </tr>
        {{/headers}}
            {{#stocks}}
        <tr>
            <td class="Data exchange column-first">{{exchangeName}}</td>
            <td class="Data symbol">{{symbol}}</td>
            <td class="Data currency">{{currency}}</td>
            <td class="Data shares-out">{{decimals shareMillions}}m</td>
            <td class="Data market-cap column-last">£{{showLondonMarketCapM marketCap}}m</td>
        </tr>
        {{/stocks}}
    </table>
   <%-- <h3 class="vertical-header" style="margin-top: 0 !important; width: 100%; float: left;">Current Share Price Information</h3>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">

        <tr>
            {{#headers}}<th class="Header change column-first">{{t_day}} {{t_change}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data change formatColour column-first">{{decimals change}} ({{decimals changePercent}}%)</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header bid">{{t_bid}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data change formatColour">{{decimals change}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header bid">{{t_ask}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data change formatColour">{{decimals changePercent}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header volume">{{t_day}} {{t_volume}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data volue">{{toLocal volume}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header prev-close">{{t_prev_close}}</th>
            {{/headers}}
           {{#stocks}}<td class="Data prev-close">{{decimals prevClose}}</td>
            {{/stocks}}

        </tr>


    </table>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        <tr>
            {{#headers}}
            <th class="Header change column-first">{{t_day}} {{t_change}}</th>
            <th class="Header bid">{{t_bid}}</th>
            <th class="Header bid">{{t_ask}}</th>
            <th class="Header volume">{{t_day}} {{t_volume}}</th>
            <th class="Header prev-close">{{t_prev_close}}</th>
            {{/headers}}
        </tr>
        <tr>
            {{#stocks}}
            <td class="Data change formatColour column-first">{{decimals change}} ({{decimals changePercent}}%)</td>
            <td class="Data change formatColour">{{decimals change}}</td>
            <td class="Data change formatColour">{{decimals changePercent}}</td>
            <td class="Data volue">{{toLocal volume}}</td>
            <td class="Data prev-close">{{decimals prevClose}}</td>
            {{/stocks}}
        </tr>
    </table>--%>
    <h3 class="vertical-header">High/Low share price information </h3>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">

        <tr>
            {{#headers}}<th class="Header prev-close">{{t_prev_close}}</th>
            {{/headers}}
           {{#stocks}}<td class="Data last">{{decimals last}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header symbol">{{t_day}} {{t_high}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data high">{{decimals high}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low">{{t_day}} {{t_low}}</th>
            {{/headers}}
           {{#stocks}}<td class="Data low">{{decimals low}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header high52week">{{t_52w_high}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data high52week">{{decimals high52Week}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low52week">{{t_52w_low}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data low52week">{{decimals low52Week}}</td>
            </td>{{/stocks}}
        </tr>
    </table>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        <tr>
            {{#headers}}
            <th class="Header prev-close column-first">{{t_prev_close}}</th>
            <th class="Header symbol">{{t_day}} {{t_high}}</th>
            <th class="Header low">{{t_day}} {{t_low}}</th>
            <th class="Header high52week">{{t_52w_high}}</th>
            <th class="Header low52week column-last">{{t_52w_low}}</th>
            {{/headers}}
        </tr>
        <tr>
            {{#stocks}}
            <td class="Data last column-first">{{decimals last}}</td>
            <td class="Data high">{{decimals high}}</td>
            <td class="Data low">{{decimals low}}</td>
            <td class="Data high52week">{{decimals high52Week}}</td>
            <td class="Data low52week column-last">{{decimals low52Week}}</td>
            {{/stocks}}
        </tr>
    </table>

</script>

<%= site.newFooter("IRDetailedSharePrice") %>


