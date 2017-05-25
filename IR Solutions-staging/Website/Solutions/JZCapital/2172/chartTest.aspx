<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fast.fonts.net/cssapi/d62c0329-9fcc-43ae-b445-59557b0dbc19.css""/>";
%>

<%= site.newHeader("IRChart") %>

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
                <th importance="95" class="IRToolQuoteTableItem Header column-first">{{t_symbol}}</th>
                <th importance="90" class="IRToolQuoteTableItem Header">{{t_last}}</th>
                <th importance="75" class="IRToolQuoteTableItem Header">{{t_change}}</th>
                <th importance="85" class="IRToolQuoteTableItem Header">{{t_bid}}</th>
                <th importance="80" class="IRToolQuoteTableItem Header">{{t_ask}}</th>
                <th importance="75" class="IRToolQuoteTableItem Header">{{t_volume}}</th>
                <th importance="70" class="IRToolQuoteTableItem Header">{{t_high}}</th>
                <th importance="65" class="IRToolQuoteTableItem Header">{{t_low}}</th>
                <th importance="60" class="IRToolQuoteTableItem Header column-last">{{t_timestamp}}</th>
            </tr>
        {{/headers}}
            {{#stocks}}
            <tr>
                <td class="IRToolQuoteTableItem Data Symbol column-first">{{symbol}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals last}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals change}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals bid}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals ask}}</td>
                <td class="IRToolQuoteTableItem Data">{{toLocal volume}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals high}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals low}}</td>
                <td class="IRToolQuoteTableItem Data Timestamp column-last">{{showDateTime timestamp}}</td>
            </tr>
        {{/stocks}}
    </table>
</script>