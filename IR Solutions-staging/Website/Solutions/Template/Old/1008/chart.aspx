<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.header("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChartHTML'];
</script>

<div class="IRQuoteModule" style="clear: both;"></div>

<div class="ToolMenu IRChangeListing"></div>

<div class="ToolMenu IRChartHTMLDisplayMode"></div>

<div class="chartCurrentPriceBox">
    <span class="chartLastPrice"></span>
</div>

<div class="IRChartHTMLOuter" style="height: 400px; clear: both;">
    <span class="ajaxLoader">Loading</span>
</div>

<%= site.footer("IRChart") %>

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
                <td class="IRToolQuoteTableItem Data">{{decimal last}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimal change}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimal bid}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimal ask}}</td>
                <td class="IRToolQuoteTableItem Data">{{noDecimals volume}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimal high}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimal low}}</td>
                <td class="IRToolQuoteTableItem Data Timestamp column-last">{{timestamp}}</td>
            </tr>
        {{/stocks}}
    </table>
</script>

<div class="debugStatus"></div>