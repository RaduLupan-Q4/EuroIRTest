<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
     site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700""/>";

%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartNews'];
</script>

<div class="IRQuoteModule"></div>
<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
<!--    <div class="name">{{stocks/name}} (Euronext Paris: {{stocks/symbol}}): FR0000077919</div>-->
    <table class="IRQuoteModule table-look horizontal responsive">
                        <tr>
                <th class="Header symbol column-first">{{headers/t_symbol}}</th>
                <th class="Header last">{{headers/t_last}}</th>
                <th class="Header change">{{headers/t_change}} (%)</th>
                <th class="Header bid">{{headers/t_bid}}</th>
                <th class="Header ask">{{headers/t_ask}}</th>
                <th class="Header high">{{headers/t_high}}</th>
                <th class="Header low">{{headers/t_low}}</th>
                <th class="Header volume column-last">{{headers/t_volume}}</th>
            </tr>
            <tr>
                <td class="Data symbol column-first">{{stocks/symbol}}</td>
                <td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
                <td class="Data bid">{{decimals stocks/bid}}</td>
                <td class="Data ask">{{decimals stocks/ask}}</td>
                <td class="Data high">{{decimals stocks/high}}</td>
                <td class="Data low">{{decimals stocks/low}}</td>
                <td class="Data volume column-last">{{toLocal stocks/volume}}</td>
            </tr>
    </table>
    <div class="updated"><span>Last update: </span><span>{{showDateWithFormat timestamp 'DD MMM, YYYY HH:MM'}}</span></div>
</script>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    
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
<%--<link type="text/css" rel="stylesheet" href="investorcom.css" />--%>