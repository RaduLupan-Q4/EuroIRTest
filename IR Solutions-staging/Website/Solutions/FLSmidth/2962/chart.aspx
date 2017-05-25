<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartSettings', 'IRChartCompare', 'IRChartTA', 'IRChartCurrencyConversion'];
</script>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
            	<th class="Header symbol column-first">{{headers/t_symbol}}</th>
                <th class="Header price-at">{{headers/t_last}}</th>
                <th class="Header change">{{headers/t_change}} (%)</th>
                <th class="Header bid">{{headers/t_bid}}</th>
                <th class="Header ask">{{headers/t_ask}}</th>
                <th class="Header volume">{{headers/t_volume}}</th>
                <th class="Header high">{{headers/t_high}}</th>
                <th class="Header low column-last">{{headers/t_low}}</th>
            </tr>
            <tr>
            	<td class="Data price-at column-first">{{stocks/name}}</td>
                <td class="Data price-at">{{decimals stocks/last}} {{stocks/currency}}</td>
                <td class="Data change {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</td>
                <td class="Data bid">{{decimals stocks/bid}}</td>
                <td class="Data ask">{{decimals stocks/ask}}</td>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
                <td class="Data high">{{decimals stocks/high}}</td>
                <td class="Data low column-last">{{decimals stocks/low}}</td>
            </tr>
    </table>
    <div class="updated"><span>{{headers/t_updated}}: </span><span>{{showDateWithFormat stocks/tradeTimestamp 'DD/MM/YYYY HH:mm'}} {{showLocalTimeZoneShort}}</span></div>
    
</script>

<div class="IRQuoteModule"></div>
<br />
<div class="IRChartToolMenu"></div><br />
 
<div class="IRChartModule"></div>

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

<div>
    <%= site.newFooter("IRChart") %>
</div>