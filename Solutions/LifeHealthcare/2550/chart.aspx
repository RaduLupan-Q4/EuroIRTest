<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""http://fast.fonts.net/cssapi/01e0bdf2-65ce-4a4a-9d7a-25eb0880e7fe.css"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=John+Sans+Text+Pro"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>
<script src="https://use.typekit.net/nju5lsy.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script> 

<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
</script>

<div class="IRQuoteModule"></div>
<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <%--<div class="companyInfoWrapper">
        <div class="chartName">{{stocks/name}} ({{stocks/exchangeName}}: {{stocks/symbol}})</div>
        <div class="updated"><span>{{showTime stocks/timestamp}} {{showLocalTimeZoneShort}} on {{showDateWithFormat stocks/timestamp 'DD MMM, YYYY'}}</span></div>
    </div>--%>

    <table class="IRQuoteModule table-look horizontal customResponsive chart">
        <tr>
            <th class="Header last column-first">{{headers/t_last}}</th>
            <th class="Header change">{{headers/t_change}}</th>
            <th class="Header open">{{headers/t_open}}</th>
            <th class="Header high">{{headers/t_high}}</th>
            <th class="Header 52high column-last">{{headers/t_52w_high}}</th>
        </tr>
        <tr>
            <td class="Data last column-first" rowspan="3" style="vertical-align: middle" id="chartLast"> <span class="currency">{{stocks/currency}}</span>  {{decimals stocks/last}}</td>
            
            <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} <span class="{{showArrow stocks/change}}"></span> ({{decimals stocks/changePercent}}%) </td>
            <td class="Data open">{{decimals stocks/open}}</td>
            <td class="Data high">{{decimals stocks/high}}</td>
            <td class="Data 52high column-last">{{decimals stocks/high52Week}}</td>

            
        </tr>
        <tr>
            <th class="Header volume">{{headers/t_volume}}</th>
            <th class="Header prevClose">{{headers/t_prev_close}}</th>
            <th class="Header low">{{headers/t_low}}</th>
            <th class="Header 52low column-last">{{headers/t_52w_low}}</th>
            
        </tr>
        <tr>
            <td class="Data volume">{{toLocal stocks/volume}}</td>
            <td class="Data prevClose">{{decimals stocks/prevClose}}</td>
            <td class="Data low">{{decimals stocks/low}}</td>
            <td class="Data 52low column-last">{{decimals stocks/low52Week}}</td>
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