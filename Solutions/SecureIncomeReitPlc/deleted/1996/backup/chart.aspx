<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChartHTML'];
</script>


<div class="IRQuoteModule"></div>

<%--<div class="ToolMenu IRChangeListing"></div>--%>

<div class="IRChartOuter">

    <div class="IRChartColour"></div>

    <div class="IRChartHeader">
        <%--<div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>--%>
        <%--<div class="IRChartCompareListNavigation"></div>--%>
        <div class="IRChartCurrency">&nbsp;</div>
    </div>



    <div class="IRChartHTMLPlaceholder" style="height: 500px; clear: both;">
        <span class="ajaxLoader">Loading</span>
    </div>

    <%-- {{{showChartChangePeriod 'y1'}}}--%>

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
</div>
<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
        <tr>
            <th class="Header last">{{headers/t_last}}</th>
            <th class="Header change">{{headers/t_change}}</th>
            <th class="Header bidAsk">{{headers/t_bid}} - {{headers/t_ask}}</th>
            <th class="Header volume">{{headers/t_volume}}</th>
            <th class="Header highLow">{{headers/t_high}} - {{headers/t_low}}</th>
            <th class="Header Timestamp column-last">{{headers/t_exchange}}</th>
        </tr>
        <tr>
            <td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>
            <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
            <td class="Data bidAsk">{{decimals stocks/bid}} - {{decimals stocks/ask}}</td>
            <td class="Data volume">{{toLocal stocks/volume}}</td>
            <td class="Data highLow">{{decimals stocks/high}} - {{decimals stocks/low}}</td>
            <td class="Data Timestamp column-last">{{stocks/exchangeName}}</td>
        </tr>
        <tr>
            
        </tr>
    </table>
    <div class="Data Timestamp column-last" style="float:right; font-size: 12px; height: 30px; padding-top:5px;">{{showDateTime stocks/timestamp}}</div>
</script>


<%= site.newFooter("IRChart") %>