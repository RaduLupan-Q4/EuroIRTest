<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare', 'StockDataInstrumentTypeOther', 'IRChartTSR'];
</script>

<div class="IRQuoteHorizontalModule"></div>
<br />
<div class="IRChartModule"></div>


<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">

    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
            <tr>
                <th class="Header symbol column-first">{{t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}}</th>
                <th class="Header bid">{{t_bid}}</th>
                <th class="Header ask">{{t_ask}}</th>
                <th class="Header volume column-last">{{t_volume}}</th>
            </tr>
        {{/headers}}
        <tr>
            <td class="Data symbol column-first">{{stocks/symbol}}</td>
            <td class="Data last">{{decimals stocks/last}} {{showCurrency}}</td>
            <td class="Data change"><span class="{{showArrow stocks/change}}"></span>{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) </td>
            <td class="Data bid">{{decimals stocks/bid}}</td>
            <td class="Data ask">{{decimals stocks/ask}}</td>
            <td class="Data volume column-last">{{toLocal stocks/volume}}</td>
        </tr>    
    </table>

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

<%= site.newFooter("IRChart") %>