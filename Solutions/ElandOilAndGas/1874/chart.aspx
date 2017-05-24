<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""http://fast.fonts.net/cssapi/67e36371-95df-4329-9a84-39047761fab4.css"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChartHTML'];
</script>

<div class="IRQuoteModule"></div>

<br />

<%--<div class="ToolMenu IRChangeListing"></div>--%>

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

    <%--<div class="chartCurrentPriceBoxOuter">
        
        <div class="chartCurrentPriceBox">
            <div class="chartCurrentPriceBoxArrow">
                <div class="irCPB1"></div>
                <div class="irCPB2"></div>
                <div class="irCPB3"></div>
            </div>
            
            <span class="chartLastPrice"></span>
        </div>
    </div>--%>

</div>

<%= site.newFooter("IRChart") %>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRToolQuoteTable table-look table-look-horizontal quote quote-horizontal responsive-horizontal">
        {{#headers}}
            <tr>
                <th class="IRToolQuoteTableItem Header column-first">{{t_symbol}}</th>
                <th class="IRToolQuoteTableItem Header">{{t_open}}</th>
                <th class="IRToolQuoteTableItem Header">{{t_last}}</th>
                <th class="IRToolQuoteTableItem Header">{{t_change}}</th>
                <th class="IRToolQuoteTableItem Header">{{t_bid}}</th>
                <th class="IRToolQuoteTableItem Header">{{t_ask}}</th>
                <th class="IRToolQuoteTableItem Header">{{t_volume}}</th>
                <th class="IRToolQuoteTableItem Header">{{t_high}}</th>
                <th class="IRToolQuoteTableItem Header">{{t_low}}</th>
                <th class="IRToolQuoteTableItem Header">{{t_market_cap}}</th>
                <th class="IRToolQuoteTableItem Header">52w High - Low</th>
                <th class="IRToolQuoteTableItem Header column-last">{{t_timestamp}}</th>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="IRToolQuoteTableItem Data Symbol column-first">{{symbol}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals open}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals last}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals change}} ({{decimals changePercent}}%)</td>
                <td class="IRToolQuoteTableItem Data">{{decimals bid}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals ask}}</td>
                <td class="IRToolQuoteTableItem Data">{{toLocal volume}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals high}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals low}}</td>
                <td class="IRToolQuoteTableItem Data">{{showLondonMarketCapM marketCap}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals high52Week}} - {{decimals low52Week}}</td>
                <td class="IRToolQuoteTableItem Data Timestamp column-last">{{showDateTime timestamp}}</td>
            </tr>
        {{/stocks}}
    </table>
</script>