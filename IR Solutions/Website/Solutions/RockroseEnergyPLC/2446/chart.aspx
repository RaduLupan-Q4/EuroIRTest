<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChartHTML'];
    var activeFeatures = ['IRChartNews'];
</script>

<div class="IRQuoteModule"></div>
<br />

<%--<div class="ToolMenu IRChangeListing"></div>--%>

<div class="IRChartOuter">

    <div class="IRChartHeader">
        <div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>
<%--        <div class="IRChartCurrency">&nbsp;</div>--%>
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

<%= site.newFooter("IRChart") %>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
     <table class="IRQuoteModule table-look horizontal responsive">
            {{#headers}}
            <tr>
                <th class="Header column-first symbol">{{t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}}</th>
                <th class="Header bid">{{t_bid}}</th>
                <th class="Header mid">{{t_mid}}</th>
                <th class="Header ask">{{t_ask}}</th>
                <th class="Header volume">{{t_volume}}</th>
                <th class="Header high">{{t_high}}</th>
                <th class="Header column-last low">{{t_low}}</th>
                <%--<th class="Header column-last date">{{t_date}}</th>
                <th class="Header column-last time">{{t_time}}</th>--%>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="Data column-first symbol">{{symbol}}</td>
                <td class="Data last">{{decimals last}} {{showCurrency}}</td>
                <td class="Data change {{formatColour change}}">{{decimals change}} ({{decimals changePercent}}%) <span class="{{showArrow change}}"></span></td>
                <%--<td class="Data change"><span class="{{showArrow stocks/change}}"></span> {{decimals change}}</td>--%>
                <td class="Data bid">{{decimals bid}}</td>
                <td class="Data mid">{{decimals mid}}</td>
                <td class="Data ask">{{decimals ask}}</td>
                <td class="Data volume">{{toLocal volume}}</td>
                <td class="Data high">{{decimals high}}</td>
                <td class="Data column-last low">{{decimals low}}</td>
               <%-- <td class="Data column-last date">{{showDate timestamp}}</td>
                <td class="Data column-last time">{{showTime timestamp}}</td>--%>
            </tr>
        {{/stocks}}
    </table>
     <div class="updated"><span>{{headers/t_updated}}: </span><span>{{showDateTime timestamp}}</span></div>
</script>