<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.header("IRQuote") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>
<%--<div class="ToolMenu IRChangeListing"></div>--%>

<div class="IRQuoteHorizontalModule"><span class="ajaxLoader">Loading</span></div>
<div class="IRQuoteVerticalModule"><span class="ajaxLoader">Loading</span></div>


<%= site.footer("IRQuote") %>

<script id="IRQuoteTableVerticalTemplate" type="text/x-handlebars-template">
    <table class="IRToolQuoteTableVertical table-look table-look-vertical quote quote-vertical responsive-vertical">
            <tr>
                <th importance="95" class="IRToolQuoteTableItem Header column-first">{{headers/t_symbol}}:</th>
                <td class="IRToolQuoteTableItem Data Symbol column-first">{{stocks/symbol}}</td>
            </tr>
            <tr>
                <th importance="95" class="IRToolQuoteTableItem Header">{{headers/t_last}}</th>
                <td class="IRToolQuoteTableItem Data Symbol">{{stocks/last}}</td>
            </tr>
            <tr>
                <th importance="95" class="IRToolQuoteTableItem Header">{{headers/t_bid}}</th>
                <td class="IRToolQuoteTableItem Data Symbol">{{stocks/bid}}</td>
            </tr>
            <tr>
                <th importance="95" class="IRToolQuoteTableItem Header">{{headers/t_ask}}</th>
                <td class="IRToolQuoteTableItem Data Symbol">{{stocks/ask}}</td>
            </tr>
            <tr>
                <th importance="95" class="IRToolQuoteTableItem Header">{{headers/t_change}}</th>
                <td class="IRToolQuoteTableItem Data Symbol">{{stocks/change}}</td>
            </tr>
            <tr>
                <th importance="95" class="IRToolQuoteTableItem Header">{{headers/t_high}}</th>
                <td class="IRToolQuoteTableItem Data Symbol">{{stocks/high}}</td>
            </tr>
            <tr>
                <th importance="95" class="IRToolQuoteTableItem Header">{{headers/t_low}}</th>
                <td class="IRToolQuoteTableItem Data Symbol">{{stocks/low}}</td>
            </tr>
            <tr>
                <th importance="95" class="IRToolQuoteTableItem Header">{{headers/t_timestamp}}</th>
                <td class="IRToolQuoteTableItem Data Symbol">{{stocks/timestamp}}</td>
            </tr>
    </table>
</script>
<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">
    <table class="IRToolQuoteTable table-look table-look-horizontal quote quote-horizontal responsive-horizontal">
        {{#headers}}
            <tr>
                <th importance="95" class="IRToolQuoteTableItem Header column-first">{{t_symbol}}</th>
                <th importance="90" class="IRToolQuoteTableItem Header">{{t_last}}</th>
                <th importance="85" class="IRToolQuoteTableItem Header">{{t_bid}}</th>
                <th importance="80" class="IRToolQuoteTableItem Header">{{t_ask}}</th>
                <th importance="75" class="IRToolQuoteTableItem Header">{{t_change}}</th>
                <th importance="70" class="IRToolQuoteTableItem Header">{{t_high}}</th>
                <th importance="65" class="IRToolQuoteTableItem Header">{{t_low}}</th>
                <th importance="60" class="IRToolQuoteTableItem Header column-last">{{t_timestamp}}</th>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="IRToolQuoteTableItem Data Symbol column-first">{{symbol}}</td>
                <td class="IRToolQuoteTableItem Data">{{last}}</td>
                <td class="IRToolQuoteTableItem Data">{{bid}}</td>
                <td class="IRToolQuoteTableItem Data">{{ask}}</td>
                <td class="IRToolQuoteTableItem Data">{{change}}</td>
                <td class="IRToolQuoteTableItem Data">{{high}}</td>
                <td class="IRToolQuoteTableItem Data">{{low}}</td>
                <td class="IRToolQuoteTableItem Data Timestamp column-last">{{timestamp}}</td>
            </tr>
        {{/stocks}}
    </table>
</script>

<div class="debugStatus"></div>
