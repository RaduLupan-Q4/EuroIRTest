<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartSettings','IRChartCompare','IRChartTechnicalAnalysis','IRChartTSR','IRChartCurrencyConversion'];
</script>

<!-- <script id="IRQuoteTableTemplate" type="text/x-handlebars-template"> 
    <div class="companyInfoWrapper">
       <%--<div class="updated"><span>{{headers/t_updated}}: </span><span>{{showTime stocks/timestamp}} on {{showDateWithFormat stocks/timestamp 'DD MMM, YYYY'}}</span></div>--%>
</div>
</script> -->

<div class="IRQuoteModule"></div>
<div class="IRChartToolMenu"></div>
 
<div class="IRChartModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
                <th class="Header last column-first">{{headers/t_last}}</th>
                <th class="Header change">{{headers/t_change}} (%)</th>
                <th class="Header volume">{{headers/t_volume}}</th>
                <th class="Header prevclose">{{headers/t_prev_close}}</th>
                <th class="Header open">{{headers/t_open_price}}</th>
                <th class="Header yearhigh">{{headers/t_52w_high}}</th>
                <th class="Header yearlow column-last">{{headers/t_52w_low}}</th>
            </tr>
            <tr>
                <td class="Data last column-first">{{decimals stocks/last}} {{stocks/currency}}</td>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} {{stocks/currency}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
                <td class="Data prevclose">{{decimals stocks/prevClose}} {{stocks/currency}}</td>
                <td class="Data open">{{decimals stocks/open}} {{stocks/currency}}</td>
                <td class="Data yearhigh">{{decimals stocks/high52Week}} {{stocks/currency}}</td>
                <td class="Data yearlow column-last">{{decimals stocks/low52Week}} {{stocks/currency}}</td>
            </tr>
    </table>

    <div class="updated"><span>{{headers/t_updated}}: {{showDateWithFormat stocks/datetimestamp 'MM/DD/YYYY HH:mm'}} {{showLocalTimeZoneShort}}</span></div>
    
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
  </script>

    <div>
    <%= site.newFooter("IRChart") %>
</div>
<script src="rtchartquote.js?v=0.1"></script>