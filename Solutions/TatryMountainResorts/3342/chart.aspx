<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>


<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare'];
</script>

<div class="IRQuoteModule"></div>
<br />
<div class="clear"></div>

<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>
<br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
        <tr>
            <th class="Header symbol column-first">{{headers/t_exchange}}</th>
            <th class="Header lastPrice">{{headers/t_last}}</th>
            <th class="Header change">{{headers/t_change}}</th>
            <th class="Header volume">{{headers/t_volume}}</th>
            <th class="Header highYear">{{headers/t_market_cap}}</th>
            <th class="Header lowYear column-last">{{headers/t_52w_range}}</th>
        </tr>
        <tr>
            <td class="Data column-first symbol">{{stocks/exchangeName}}</td>
            <td class="Data lastPrice">{{decimals stocks/last}} {{stocks/currency}}</td>
            <td class="Data change {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/changePercent}}% </td>
            <td class="Data volume">{{toLocal stocks/volume}}</td>
            <td class="Data highYear">{{decimals stocks/marketCap}} m{{stocks/currency}}</td>
            <td class="Data lowYear column-last">{{decimals stocks/low52Week}} - {{decimals stocks/high52Week}} {{stocks/currency}}</td>
        </tr>
    </table>
    <div class="updated" style="text-align: right"><span>{{headers/t_updated}}: {{showDateTime stocks/timestamp}}</span></div>

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
