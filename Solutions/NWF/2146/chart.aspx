<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""http://fast.fonts.net/cssapi/6da7dd2e-d6b3-46dd-adcb-7276ef650f12.css"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
</script>

<div class="IRQuoteModule"></div>
<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<br />

<%--<div class="ToolMenu IRChangeListing"></div>--%>

<%--<div class="IRChartOuter">

    <div class="IRChartHeader">
        <div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>
        <div class="IRChartCurrency">&nbsp;</div>
    </div>

    <div class="IRChartHTMLPlaceholder" style="height: 500px; clear: both;">
        <span class="ajaxLoader">Loading</span>
    </div>

    <div class="chartNavBarRange">
        <div class="chartChangePeriod">
            <div id="d1">1 d</div>
            <div id="d5">5 d</div>
            <div id="m3">3 m</div>
            <div id="m6">6 m</div>
            <div id="y1" class="activePeriod">1 y</div>
            <div id="y2">2 y</div>
            <div id="y5">5 y</div>
            <div id="max">Max</div>
        </div>
    </div>
</div>--%>



<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
                <th class="Header symbol column-first">{{headers/t_symbol}}</th>
                <th class="Header last">{{headers/t_last}}</th>
                <th class="Header change">{{headers/t_change}} (%)</th>
                <th class="Header bid">{{headers/t_bid}}</th>
                <th class="Header ask">{{headers/t_ask}}</th>
                <th class="Header volume">{{headers/t_volume}}</th>
                <th class="Header high">{{headers/t_high}}</th>
                <th class="Header low">{{headers/t_low}}</th>
                <th class="Header Timestamp column-last " id="hideH">{{headers/t_time}}</th>
            </tr>
            <tr>
                <td class="Data symbol column-first">{{stocks/symbol}}</td>
                <td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
                <td class="Data bid">{{decimals stocks/bid}}</td>
                <td class="Data ask">{{decimals stocks/ask}}</td>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
                <td class="Data high">{{decimals stocks/high}}</td>
                <td class="Data low">{{decimals stocks/low}}</td>
                <td class="Data Timestamp column-last"id="hideD">{{showDateTime stocks/timestamp}}</td>
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