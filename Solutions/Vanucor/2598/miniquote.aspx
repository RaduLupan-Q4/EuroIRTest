<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <%-- <h2>Share Price</h2>--%>
    <table class="IRMiniQuoteModule table-look responsive">
        
            <div class="Data currency column-first"><span class="currency">{{stocks/currency}}</span><span class="lastPrice column-last">{{decimals stocks/last}}</span></div>
        
        <%--<table class="sharePriceDetailsWrapper">--%>
            <tr>
                <td class="Data change column-first">{{headers/t_change}}</td>
                <td class="column-last"><span class="{{showArrow stocks/change}}"></span>{{decimals stocks/change}}<span class="Data change formatColour" style="text-align: right">({{decimals stocks/changePercent}}%)</span></td>
            </tr>
            <tr>
                <td class="Data change column-first">{{headers/t_volume}}</td>
                <td class="column-last" style="text-align: right">{{toLocal stocks/volume}}</td>
            </tr>
        <tr>
                <td class="Data exchange column-first">{{headers/t_exchange}}</td>
                <td class="column-last" style="text-align: right">{{stocks/exchangeName}}</td>
            </tr>
            <%--<div class="Data closeDate">Last updated at {{showTime time}} </div>--%>
        <%--</table>--%>

    </table>
            <div class="delayed">Delayed by 15 mins</div>

</script>
<div style="display: none;">
    <%= site.newFooter("IRMiniquote") %>
</div>
