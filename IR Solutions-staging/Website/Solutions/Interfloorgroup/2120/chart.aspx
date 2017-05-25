 <%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote',  'IRChart', 'IRTrades'];
</script>

<div class="IRQuotseModule"></div>

<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>
<div class="IRQuoteModule"></div>
<div class="IRTradesModule"></div>



<script id="IRMiniquoteModule" type="text/x-handlebars-template">
      <h1 class="header">Current Share Price</h1>

  <div class="miniQuotePrice">
      <span class="lastHeader">{{decimals stocks/last}}{{stocks/currency}}</span>
  </div>
  <div class="miniQuoteChange">
      Day change: {{decimals stocks/change}} {{decimals stocks/changePercent}}%<br />
      Share price at {{showTime stocks/timestamp}} BST
      <div class="delayed">Delayed by 15 mins</div>
  </div>

</script>
<script id="IRChartModuleTemplate" type="text/x-handlebars-template">

    <div class="IRChartNavigation">
        {{{includeIRChartCompanyName}}}
        {{{includeIRChartNavigation}}}
    </div>

    <div class="IRChartPlaceholderArea">
        {{{includeIRChartDomSettings}}}
        {{{includeIRChartPlaceholder}}}
        {{{includeIRChartChangePeriod 'y1'}}}
    </div>

</script>
<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <h2 class="header">Exchange information</h2>
    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
                <th class="Header exchange column-first">{{headers/t_exchange}}</th>
                <th class="Header symbol">{{headers/t_symbol}}</th>
                <th class="Header timestamp">{{headers/t_updated}}</th>
                <th class="Header currency">{{headers/t_currency}}</th>
            </tr>
            <tr>
                <td class="Data exchange column-first">{{stocks/exchange_name}}</td>
                <td class="Data symbol"> {{stocks/symbol}}</td>
                <td class="Data timestamp">{{showDateTime stocks/timestamp}}</td>
                <td class="Data currency ">{{stocks/currency}}</td>
            </tr>
    </table>
    <h2 class="header">Current Share Price Information ({{stocks/currency}})</h2>
    
    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
                <th class="Header symbol column-first">Day {{headers/t_change}}</th>
                <th class="Header last">{{headers/t_bid}}</th>
                <th class="Header change">{{headers/t_ask}}</th>
                <th class="Header volume">{{headers/t_volume}}</th>
                <th class="Header prev_close">{{headers/t_prev_close}}</th>
            </tr>
            <tr>
 <td class="Data change {{formatColour stocks/change}} column-first">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
                <td class="Data last">{{decimals stocks/bid}} </td>
                <td class="Data last">{{decimals stocks/ask}} </td>
                <td class="Data volume">{{decimals stocks/volume}}</td>
                <td class="Data prev_close">{{decimals stocks/prev_close}}</td>
            </tr>
    </table>
        <h2 class="header">High/low Share Price Information ({{stocks/currency}})</h2>
    
    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
                <th class="Header change column-first">{{headers/t_last}}</th>
                <th class="Header high">Day {{headers/t_high}}</th>
                <th class="Header low">Day {{headers/t_low}}</th>
                <th class="Header high52week">{{headers/t_52w_high}}</th>
                <th class="Header low52week">{{headers/t_52w_low}}</th>
            </tr>
            <tr>
                 <td class="Data high column-first">{{decimals stocks/last}} </td>
                <td class="Data high">{{decimals stocks/high}} </td>
                <td class="Data low">{{decimals stocks/low}} </td>
                <td class="Data high52week">{{decimals stocks/high52week}}</td>
                <td class="Data low52week">{{decimals stocks/low52week}}</td>
            </tr>
    </table>
    
</script>
<script id="IRTradesTemplate" type="text/x-handlebars-template">
    <h2 class="header">Share Price Throughout the Day</h2>
    <div class="divideLine"></div>
    <div class="">
        <div id="prevClose">{{stocks/prevClose}}</div>
        {{stocks/changePercent}}
    </div>
    <table class="IRTradesModule table-look horizontal responsive" id="scroll-table">
        <thead>
            <tr>
                <th class="Header column-first updated" style="text-align: left;">{{headers/t_time}}</th>
                <th class="Header hidden timestampFull"></th>
                <th class="Header price">{{headers/t_price}}</th>
                <th class="Header changePercentage">Day {{headers/t_change}}</th>
                <th class="Header change">Day Percentage {{headers/t_change}}</th>
                <th class="Header column-last volume">{{headers/t_volume}}</th>

            </tr>
        </thead>
        <tbody style="width: 100%;">
            {{#data}}
            {{#data}}
            <tr>
                <td class="Data column-first updated" datetime="{{showDateTime timestamp}}">{{showTime timestamp}}</td>
                <td class="Data hidden timestampFull">{{timestamp}}</td>
                <td class="Data price">{{decimals tradePrice}}</td>
                <td class="Data changePercentage">{{showTradeChangePercentage tradePrice}} %</td>
                <td class="Data change">{{showTradeChange tradePrice}}</td>
                <td class="Data column-last volume">{{tradeVolume}}</td>
            </tr>
            {{/data}}
            {{/data}}
        </tbody>
    </table>
</script>
<%= site.newFooter("IRChart") %>