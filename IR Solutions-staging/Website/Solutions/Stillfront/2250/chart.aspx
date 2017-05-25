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
<br />

<div class="IRChartOuter">

    <div class="IRChartHeader">
        <div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>
        <div class="IRChartCurrency">&nbsp;</div>
    </div>

    <div class="IRChartHTMLPlaceholder" style="height: 500px; clear: both;">
        <span class="ajaxLoader">Loading</span>
    </div>

    <div class="chartNavBarRange">
        <div class="chartChangePeriod">
            <div id="d1" class="activePeriod">1 d</div>
            <div id="d5">5 d</div>
            <div id="1m">1 m</div>
            <div id="m3">3 m</div>
            <div id="m6">6 m</div>
            <div id="y1">1 y</div>
            <div id="y2">2 y</div>
            <div id="y5" >5 y</div>
            <div id="max">Max</div>
        </div>
    </div>

</div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
     <table class="IRQuoteModule IRDetailedSharePrice table-look horizontal responsive">
            {{#headers}}
            <tr>
                <th class="Header column-first symbol">{{t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}}</th>
                <th class="Header bid">{{t_bid}}</th>
                
                <th class="Header ask">{{t_ask}}</th>
                <th class="Header volume">{{t_volume}}</th>
                
                <th class="Header column-last time">{{t_updated}}</th>
            </tr>
        {{/headers}}
            <tr>
                <td class="Data column-first symbol">{{stocks/symbol}}</td>
                <td class="Data last">{{decimals stocks/last}} {{showCurrency}}</td>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
                
                <td class="Data bid">{{decimals stocks/bid}}</td>
                
                <td class="Data ask">{{decimals stocks/ask}}</td>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
                
                <td class="Data column-last time">{{showDateTime stocks/timestamp}}</td>
            </tr>
    </table>
</script>

<%= site.newFooter("IRChart") %>