<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>


<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartPressRelease', 'IRChartCompare'];
</script>

<div class="IRQuoteModule"></div>
<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
<!--    <div class="name">{{stocks/name}} (Euronext Paris: {{stocks/symbol}}): FR0000077919</div>-->
    <table class="IRQuoteModule table-look horizontal responsive">
           {{#headers}}
        <tr>
                <th class="Header symbol column-first">{{t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}} (%)</th>
                <th class="Header bid">{{t_bid}}</th>
                <th class="Header ask">{{t_ask}}</th>
                <th class="Header volume">{{t_volume}}</th>
                <th class="Header marketCap">{{t_market_cap}}</th>
                <th class="Header open">{{t_open}}</th>
                <th class="Header prevClose">{{t_prev_close}}</th>
                <th class="Header high">{{t_high}}</th>
                <th class="Header low column-last">{{t_low}}</th>             
            </tr>
         {{/headers}}
        {{#stocks}}
            <tr>
                <td class="Data symbol column-first">{{symbol}}</td>
                <td class="Data last">{{decimals last}}</td>
                <td class="Data change {{formatColour change}}"><span class="{{showArrow change}}"></span> {{decimals change}} ({{decimals changePercent}}%)</td>
                <td class="Data bid">{{decimals bid}}</td>
                <td class="Data ask">{{decimals ask}}</td>
                <td class="Data volume">{{toLocal volume}}</td>
                <td class="Data marketCap ">£{{roundUpLondonMarketCapM marketCap}} M</td>
                <td class="Data open">{{decimals open}}</td>
                <td class="Data prevClose">{{decimals prevClose}}</td>
                <td class="Data high">{{decimals high}}</td>
                <td class="Data low column-last">{{decimals low}}</td>
                
            </tr>
        {{/stocks}}
    </table>
    <div class="updated"><strong>{{headers/t_exchange}}: </strong><span>LSE</span> <strong>{{headers/t_updated}}: </strong><span>{{showDateWithFormat stocks/timestamp 'DD-MMM-YY HH:MM'}}</span> GMT</div>
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




<script type="text/javascript">
    Handlebars.registerHelper('roundUpLondonMarketCapM', function (number) {
        return (Math.round(number / 1000000) / 100).toFixed(0);
    });


</script>
