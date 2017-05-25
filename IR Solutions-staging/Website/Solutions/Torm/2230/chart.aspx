﻿<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//cloud.typography.com/7594474/696708/css/fonts.css"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare']; //, 'IRChartNews'
</script>
 
<div class="IRQuoteModule"></div>
<br /> 

<div class="IRChartToolMenu"></div>
<br />

<div class="IRChartModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
        {{#headers}}
            <tr>
                <%--<th class="Header column-first symbol">{{t_symbol}}</th>--%>
                <th class="Header column-first last">{{t_last}}</th>
                <th class="Header volume">{{t_volume}}</th>
                <th class="Header openPrice">{{t_open}} {{t_price}}</th>

                <%--<th class="Header bid">{{t_bid}}</th>
                <th class="Header ask">{{t_ask}}</th>--%>

                <th class="Header high">{{t_high}}</th>
                <th class="Header low">{{t_low}}</th>
                <th class="Header change">{{t_change}}</th>
                <th class="Header prevClose">{{t_prev_close}}</th>
                <%--<th class="Header column-last time">{{t_updated}}</th>--%>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <%--<td class="Data column-first symbol">{{symbol}}</td>--%>
                <td class="Data column-first last">{{decimals last}}</td>
                <td class="Data volume">{{toLocal volume}}</td>
                <td class="Data bid">{{decimals open}}</td>

                <%--<td class="Data bid">{{decimals bid}}</td>
                <td class="Data ask">{{decimals ask}}</td>--%>

                <td class="Data high">{{decimals high}}</td>
                <td class="Data low">{{decimals low}}</td>
                <td class="Data change"><span class="{{showArrow change}}"></span>{{decimals change}} ({{decimals changePercent}}%) </td>
                <td class="Data prevClose">{{decimals prevClose}}</td>
                <%--<td class="Data column-last time">{{showDateTime timestamp}}</td>--%>
            </tr>
        {{/stocks}}
    </table>
    <div class="updated"><span>{{headers/t_updated}}: </span><span>{{showDateTime timestamp}}</span></div>
</script>

<script id="IRChartModuleTemplate" type="text/x-handlebars-template">

    <div class="IRChartNavigation">
        {{{includeIRChartCompanyName}}}
        {{{includeIRChartNavigation}}}
    </div>

    <div class="IRChartPlaceholderArea">
        {{{includeIRChartDomSettings}}}
        {{{includeIRChartPlaceholder}}}
        {{{includeIRChartChangePeriod 'm3'}}}
    </div>

</script>
<div class="chartDisclaimer">
<%= site.newFooter("IRChart") %>
    </div>


<script type="text/javascript">
    $(function () {
        var toolSet = false;

        function prepareTool() {   
            if (!toolSet) {
                if (typeof ($('.chartCurrentPriceBox').html()) != 'undefined') {
                    setChartExtremes(chartDisplayModes.historical, 90);
                    toolSet = true;
               
                }
            }
        }
        setInterval(function () {
            prepareTool();
        }, 100);

    });

</script>