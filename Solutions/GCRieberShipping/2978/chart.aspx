﻿<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet""  href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,500,700"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <script type="text/javascript">
     var activeModules = ['IRQuote', 'IRChart'];
     var activeFeatures = ['IRChartSettings', 'IRChartCompare', 'IRChartCurrencyConversion'];
    </script>

    <div class="IRQuoteModule"></div>
    <div class="IRChartModule">
        <div class="IRChartColour"></div>
    </div>

    <br />
    <script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <div class="companyInfoWrapper">
        <div class="chartName">{{stocks/name}} (<%--{{stocks/exchangeName}}--%>OSE: {{stocks/symbol}})</div>
        <div class="updated"><%--<span>{{headers/t_updated}}: </span>--%><span>{{showTime stocks/timestamp}} ET on {{showDateWithFormat stocks/timestamp 'DD MMM, YYYY'}}</span></div>
    </div>

    <table class="IRQuoteModule table-look horizontal customResponsive">
        <tr>
            <th class="Header last column-first">{{headers/t_last}}</th>
            <th class="Header change">{{headers/t_change}}</th>
            <th class="Header open">{{headers/t_open}}</th>
            <th class="Header high">{{headers/t_bid}}</th>
            <th class="Header yearHigh column-last">{{headers/t_52w_high}}</th>
        </tr>
        <tr>
            <td class="Data symbol column-first" rowspan="3" style="vertical-align: middle" id="chartLast">{{decimals stocks/last}}</td>
            <%--<td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>--%>
            <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} <span class="{{showArrow stocks/change}}"></span> ({{decimals stocks/changePercent}}%) </td>
            <td class="Data open">{{decimals stocks/open}}</td>
            <td class="Data high">{{decimals stocks/bid}}</td>
            <td class="Data high column-last">{{decimals stocks/high52Week}}</td>

            <%--<td class="Data Timestamp column-last"id="hideD">{{showDateTime stocks/timestamp}}</td>--%>
        </tr>
        <tr>
            <th class="Header volume">{{headers/t_volume}}</th>
            <th class="Header prevClose">{{headers/t_prev_close}}</th>
            <th class="Header low">{{headers/t_ask}}</th>
            <th class="Header low column-last">{{headers/t_52w_low}}</th>
            <%--<th class="Header Timestamp column-last " id="hideH">{{headers/t_time}}</th>--%>
        </tr>
        <tr>
            <td class="Data volume">{{toLocal stocks/volume}}</td>
            <td class="Data prevClose">{{decimals stocks/prevClose}}</td>
            <td class="Data low">{{decimals stocks/ask}}</td>
            <td class="Data low column-last">{{decimals stocks/low52Week}}</td>
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
<div class="chartDisclaimer">
    <%= site.newFooter("IRChart") %>
</div>
