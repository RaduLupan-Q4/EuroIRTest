<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700""/>";
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <script type="text/javascript">
        var activeModules = ['IRQuote', 'IRChart'];
    </script>

    <div class="IRQuoteModule"></div>
    <div class="IRChartModule">
        <div class="IRChartColour"></div>
    </div>

    <br />
    <script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule chart table-look horizontal">
        <tr>
            <th colspan="3">{{headers/t_exchange_information}}: {{stocks/symbol}} {{showDateWithFormat timestamp 'DD MMM, YYYY HH:MM'}} ({{showLocalTimeZoneShort}})</th>
        </tr>
        <tr>
            <td>{{headers/t_last}}</td>
            <td>{{headers/t_change}}:<span  class="nowrap"> &euro; <span class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}}</span></span></td>
            <td>{{headers/t_volume}}  ({{headers/t_pcs}}.): {{toLocal stocks/volume}}</td>
        </tr>
        <tr>
            <td class="Data last"><span  class="nowrap">&euro; {{decimals stocks/last}}</span></td>
            <td>{{headers/t_percent_change}}: <span  class="nowrap">&euro; <span class="Data change {{formatColour stocks/change}}">{{decimals stocks/changePercent}} %</span></span></td>
            <td>{{headers/t_market_cap}}: <span class="nowrap">&euro; {{headers/t_million}} {{showMarketCapM stocks/marketCap}}</span> </td>
        </tr>
    </table>
<!--    <div class="updated"><span>Last update: </span><span>{{showDateWithFormat timestamp 'DD MMM, YYYY HH:MM'}}</span></div>-->
</script>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    
</script>

<script id="IRChartModuleTemplate" type="text/x-handlebars-template">

<!--
    <div class="IRChartNavigation">
        {{{includeIRChartCompanyName}}}
        {{{includeIRChartNavigation}}}
    </div>
-->

    <div class="IRChartPlaceholderArea">
        {{{includeIRChartDomSettings}}}
        {{{includeIRChartPlaceholder}}}
        {{{includeIRChartChangePeriod 'y1'}}}
    </div>

</script>
<div class="chartDisclaimer">
    <%= site.newFooter("IRChart") %>
</div>


