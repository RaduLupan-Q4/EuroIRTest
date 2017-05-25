<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();  

%>


<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChartHTML'];
    var activeFeatures = ['IRChartNews'];
</script> 

<div class="IRQuoteModule"></div>

<div class="IRChartOuter">

    <div class="IRChartColour"></div>

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
</div>


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
                <th class="Header Timestamp column-last">{{headers/t_time}}</th>
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
                <td class="Data Timestamp column-last">{{showDateTime stocks/timestamp}}</td>
            </tr>
    </table>
    <table class="table-look vertical customResponsiveVertical">
        <tr>
            <th class="Header column-first symbol">
            {{headers/t_symbol}}</td>
                <td class="Data column-first symbol">{{stocks/symbol}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_last}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/last}} {{stocks/showCurrency}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_change}}</th>
            <td class="IRToolQuoteTableItem change {{formatColour stocks/change}}"></span>{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"> </td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_bid}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/bid}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_ask}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/ask}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_volume}}</th>
            <td class="IRToolQuoteTableItem Data">{{toLocal stocks/volume}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_high}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/high}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_low}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/low}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_time}}</th>
            <td class="IRToolQuoteTableItem Data">{{showDateTime stocks/timestamp}}</td>
        </tr>
        <tr>
        
    </table>
</script>


<%= site.newFooter("IRChart") %>
