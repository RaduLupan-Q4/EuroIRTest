<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRDetailedShareprice") %>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>


<div class="IRQuoteVerticalModule"></div>
<div class="IRQuoteHorizontalModule"></div>

<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">
  <%--  <span class="part1">Share Price</span><br/>--%>
    <span class="IRNewsText">Past performance is not a guide to future performance.</span>
<h2 style="margin-top: 10px;">Record</h2>
<table class="IRDetailedSharePrice table-look horizontal responsive">
    {{#headers}}
        <tr>
            <th class="Header symbol">{{t_symbol}}</th>
            <th class="Header exchange">{{t_exchange}}</th>
            <th class="Header currency" id="Hcur">{{t_currency}}</th>
            <th class="Header shares-out">{{t_shares_outstanding}}</th>
            <th class="Header column-last date" id="Hdate">{{t_date}}</th>
            <th class="Header column-last updated">{{t_time}}</th>
        </tr>
    {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data symbol">{{symbol}}</td>      
            <td class="Data exchange">{{exchangeName}}</td>
            <td class="Data currency title="<a title="Great British Pence" id="Dcur">{{currency}}</a></td>
            <td class="Data shares-out">{{decimals shareMillions}}m</td>
            <td class="Data column-last date" id="Ddate">{{showDate timestamp}}</td>
            <td class="Data column-last updated">{{showTime tradeTimeStamp}}</td>
        </tr>
    {{/stocks}}
</table>
<h2>Share Price Summary</h2>
<table class="IRDetailedSharePrice table-look horizontal responsive">
    {{#headers}}
        <tr>
            <th class="Header last">{{t_last}}</th>
            <th class="Header change">{{t_change}}</th>
            <th class="Header bid">{{t_bid}}</th>
            <th class="Header ask">{{t_ask}}</th>
            <th class="Header market-cap">{{t_market_cap}}</th>
        </tr>
    {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data last">{{decimals last}}p</td>
            <td class="Data change formatColour">{{decimals change}}p</td>
            <td class="Data bid">{{decimals bid}}p</td>
            <td class="Data ask">{{decimals ask}}p</td>
            <td class="Data market-cap">{{showLondonMarketCapM marketCap}}m</td>
        </tr>
    {{/stocks}}
</table>

<h2>Share Price Markets Data</h2>
<table class="IRDetailedSharePrice table-look horizontal responsive">
    {{#headers}}
        <tr>
            <th class="Header last">{{t_last}}</th>
            <th class="Header prev-close">{{t_prev_close}}</th>
            <th class="Header high">{{t_high}}</th>
            <th class="Header low">{{t_low}}</th>
            <th class="Header high52week" id="Hhigh52">{{t_52w_high}}</th>
            <th class="Header low52week" id="Hlow52">{{t_52w_low}}</th>
            <th class="Header volume">{{t_volume}}</th>
        </tr>
    {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data last">{{decimals last}}p</td>
            <td class="Data prev-close">{{decimals prevClose}}p</td>
            <td class="Data high">{{decimals high}}p</td>
            <td class="Data low">{{decimals low}}p</td>
            <td class="Data high52week" id="Dhigh52">{{decimals high52Week}}p</td>
            <td class="Data low52week" id="Dlow52">{{decimals low52Week}}p</td>
            <td class="Data volue">{{toLocal volume}}</td>
        </tr>
    {{/stocks}}
</table>
 
    <div class="iframe-wrapper" style="height: 500px;">
    <h2>Share Price Throughout the Day</h2>
    <iframe src="http://ir1.euroinvestor.com/asp/ir/GlobalEnergyPlc/detailedSharePrice.aspx" style="width: 100%; border: none; height: 500px;"></iframe>
    </div>
</script>

<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.js"></script> 

<%= site.newFooter("IRDetailedShareprice") %>
