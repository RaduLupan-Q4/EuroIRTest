<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRDetailedSharePrice") %>
<link rel="stylesheet" type="text/css" media="screen" href="ir.client2.css?v=635822354550154180" />

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<script id="IRMiniquoteTemplate" type="text/x-handlebars-template">
  
    <div class="IRMiniquoteChartPlaceholder"></div>

</script>


<div class="IRQuoteHorizontalModule"></div>

<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">
    <h3 class="horizontal-header">Exchange Information</h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header exchange">{{t_exchange}}</th>
            <th class="Header symbol">{{t_symbol}}</th>
            <th class="Header updated">{{t_updated}}</th>
            <th class="Header column-last currency">{{t_currency}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data exchange">{{exchangeName}}</td>
            <td class="Data symbol">{{symbol}}</td>
            <td class="Data updated">{{showDateTime time}}</td>
            <td class="Data column-last currency">{{currency}}</td>
        </tr>
        {{/stocks}}
    </table>
    
    
    <h3 class="horizontal-header" style="margin-top: 0 !important; width: 100%; float:left;">Current Share Price Information (EUR)</h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header change column-first">{{t_day}} {{t_change}}</th>
            <th class="Header bid">{{t_bid}}</th>
            <th class="Header ask">{{t_ask}}</th>
            <th class="Header volume">{{t_day}} {{t_volume}}</th>
            <th class="Header column-last prev-close">{{t_prev_close}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data change formatColour column-first">{{decimals change}} ({{decimals changePercent}}%)</td>
            <td class="Data bid">{{decimals bid}}</td>
            <td class="Data ask">{{decimals ask}}</td>
            <td class="Data volume">{{toLocal volume}}</td>
            <td class="Data column-last prev-close">{{decimals prevClose}}</td>
        </tr>
        {{/stocks}}
    </table>

    <h3 class="horizontal-header">High/Low share price information (EUR)</h3>
        <div class="divideLine horizontal"></div>
     <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header prev-close">{{t_prev_close}}</th>
            <th class="Header symbol">{{t_day}} {{t_high}}</th>
            <th class="Header low">{{t_day}} {{t_low}}</th>
            <th class="Header high52week">{{t_52w_high}}</th>
            <th class="Header column-last low52week">{{t_52w_low}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data prev-close">{{decimals last}}</td>
            <td class="Data high">{{decimals high}}</td>
            <td class="Data low">{{decimals low}}</td>
            <td class="Data high52week">{{decimals high52Week}}</td>
            <td class="Data column-last low52week">{{decimals low52Week}}</td>
            <%--<td class="Data shares-out">{{decimals shareMillions}}m</td>
            <td class="Data market-cap">£{{showLondonMarketCapM marketCap}}m</td>--%>
        </tr>
        {{/stocks}}
    </table>


    <h3 class="vertical-header">Exchange Information</h3>
        <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">  
        <tr>
          {{#headers}}  <th class="Header exchange">{{t_exchange}}</th>{{/headers}}
           {{#stocks}} <td class="Data exchange">{{exchangeName}}</td>  {{/stocks}}
            </tr> 
        <tr>
           {{#headers}} <th class="Header symbol">{{t_symbol}}</th>{{/headers}}
            {{#stocks}} <td class="Data symbol">{{symbol}}</td>  {{/stocks}}
        </tr>
        <tr>
           {{#headers}} <th class="Header currency">{{t_currency}}</th>{{/headers}}
           {{#stocks}} <td class="Data currency">{{currency}}</td>  {{/stocks}}
            </tr> 
        <tr>
           {{#headers}} <th class="Header shares-out">{{t_shares_outstanding}}</th>{{/headers}}
            {{#stocks}} <td class="Data shares-out">{{decimals shareMillions}}m</td>  {{/stocks}}
            </tr> 
        <tr>
            {{#headers}}<th class="Header market-cap">{{t_market_cap}}</th>{{/headers}}
            {{#stocks}}<td class="Data market-cap">£{{showLondonMarketCapM marketCap}}m</td>  {{/stocks}}
        </tr>
    </table>

    <h3 class="vertical-header" style="margin-top: 0 !important; width: 100%; float:left;">Current Share Price Information (EUR)</h3>
        <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        
        <tr>
            {{#headers}}<th class="Header change column-first">{{t_day}} {{t_change}}</th>{{/headers}}
            {{#stocks}}<td class="Data change formatColour column-first">{{decimals change}} ({{decimals changePercent}}%)</td>{{/stocks}}
            </tr>
        <tr>
            {{#headers}}<th class="Header bid">{{t_bid}}</th>{{/headers}}
            {{#stocks}}<td class="Data change formatColour">{{decimals change}}</td>{{/stocks}}
            </tr>
        <tr>
            {{#headers}}<th class="Header bid">{{t_ask}}</th>{{/headers}}
            {{#stocks}}<td class="Data change formatColour">{{decimals changePercent}}</td>{{/stocks}}
            </tr>
        <tr>
            {{#headers}}<th class="Header volume">{{t_day}} {{t_volume}}</th>{{/headers}}
            {{#stocks}}<td class="Data volue">{{toLocal volume}}</td>{{/stocks}}
        </tr>
        <tr>
           {{#headers}}<th class="Header prev-close">{{t_prev_close}}</th>{{/headers}}
           {{#stocks}}<td class="Data prev-close">{{decimals prevClose}}</td>{{/stocks}}

        </tr>
       

    </table>
      <h3 class="vertical-header">High/Low share price information (EUR)</h3>
        <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        
        <tr>
          {{#headers}}<th class="Header prev-close">{{t_prev_close}}</th>{{/headers}}
           {{#stocks}}<td class="Data prev-close">{{decimals last}}</td>{{/stocks}}
            </tr> 
        <tr>
           {{#headers}}<th class="Header symbol">{{t_day}} {{t_high}}</th>{{/headers}}
            {{#stocks}}<td class="Data high">{{decimals high}}</td>{{/stocks}}
        </tr>
        <tr>
           {{#headers}}<th class="Header low">{{t_day}} {{t_low}}</th>{{/headers}}
           {{#stocks}}<td class="Data low">{{decimals low}}</td>{{/stocks}}
            </tr> 
        <tr>
           {{#headers}}<th class="Header high52week">{{t_52w_high}}</th>{{/headers}}
            {{#stocks}}<td class="Data high52week">{{decimals high52Week}}</td>{{/stocks}}
            </tr> 
        <tr>
            {{#headers}}<th class="Header low52week">{{t_52w_low}}</th>{{/headers}}
            {{#stocks}}<td class="Data low52week">{{decimals low52Week}}</td></td>{{/stocks}}
        </tr>
    </table>
    


</script>

<%= site.newFooter("IRDetailedSharePrice") %>

<script type="text/javascript">

    $(document).ready(function () {

        setTimeout(function () {
            $('.IRDetailedSharePrice td').each(function () {

                midPrice = Number($('.last').eq(1).text(), 10),
                prevClose = Number($('.prev-close').eq(1).text(), 10),

                midPriceDiff = Number(midPrice - prevClose).toFixed(2);
                $('td.mid-change').eq(3).text(midPriceDiff);

                diffPercentage = Number((midPriceDiff * 100) / prevClose).toFixed(2);
                $('td.mid-changePercent').eq(3).text(diffPercentage);

            });

        }, 500);

    });

</script>
<style>
	h3 {
    font-family: verdana;
    font-weight: bold;
	}
</style>

