<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRQuote") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteModule" id="padFix"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <div class="displayTimeDate">Date & Time: {{stocks/timestamp}}</div>
    <table class="ShareDisplay table-look horizontal responsive">
        {{#headers}}
            <tr>
                <th class="ShareDisplay Header column-first symbol">{{t_share}}</th>
                <th class="ShareDisplay Header last">{{t_last}}</th>
                <th class="ShareDisplay Header change">{{t_high}}</th>
                <th class="ShareDisplay Header bid">{{t_low}}</th>
                <th class="ShareDisplay Header ask">(+/-)</th>
                <th class="ShareDisplay Header volume">%</th>
                <th class="ShareDisplay Header high">{{t_bid}}</th>
                <th class="ShareDisplay Header low">{{t_ask}}</th>
                <th class="ShareDisplay Header column-last time">{{t_volume}}</th>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="ShareDisplay Data column-first symbol">{{name}} Group</td>
                <td class="ShareDisplay Data last">{{decimals last}} </td>
                <td class="ShareDisplay Data change">{{decimals high}} </td>
                <td class="ShareDisplay Data bid">{{decimals low}}</td>
                <td class="ShareDisplay Data ask">{{decimals change}}</td>
                <td class="ShareDisplay Data volume">{{decimals changePercent}}</td>
                <td class="ShareDisplay Data high">{{decimals bid}}</td>
                <td class="ShareDisplay Data low">{{decimals ask}}</td>
                <td class="ShareDisplay Data column-last time">{{decimals volume}}</td>
            </tr>
        {{/stocks}}
    </table>
    <div>
        <div>Share Graph</div>
        <div>Share Data</div>
        <div>Trades</div>
        <div>Performance</div>
    </div>
</script>

<%= site.newFooter("IRQuote") %>