<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = [''];
</script>

<div class="IRQuoteHorizontalModule"></div>
<br />
<div class="IRChartModule"></div>


<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">

    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
            <tr>
                <th class="Header column-first symbol">{{t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}}</th>
                <th class="Header bid">{{t_bid}}</th>
                <th class="Header ask">{{t_ask}}</th>
                <th class="Header volume">{{t_volume}}</th>
                <th class="Header high">{{t_high}}</th>
                <th class="Header low">{{t_low}}</th>
                <th class="Header column-last low">{{t_market_cap}}</th>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="Data column-first symbol">{{symbol}}</td>
                <td class="Data last">{{decimals last}} {{showCurrency}}</td>
                <td class="Data change"><span class="{{showArrow stocks/change}}"></span>{{decimals change}} ({{decimals changePercent}}%) </td>
                <td class="Data bid">{{decimals bid}}</td>
                <td class="Data ask">{{decimals ask}}</td>
                <td class="Data volume">{{toLocal volume}}</td>
                <td class="Data high">{{decimals high}}</td>
                <td class="Data low">{{decimals low}}</td>
                <td class="Data column-last low">{{showMarketCapM marketCap}}M {{showCurrency}}</td>
            </tr>
        {{/stocks}}     
    </table>

</script>

<script id="IRChartModuleTemplate" type="text/x-handlebars-template">

    <div class="IRChartNavigation">
        {{{includeIRChartCompanyName}}}
    </div>
    <div class="IRChartPlaceholderArea">
        {{{includeIRChartDomSettings}}}
        {{{includeIRChartPlaceholder}}}
        {{{includeIRChartChangePeriod 'd1'}}}
    </div>

</script>
<%= site.newFooter("IRChart") %>