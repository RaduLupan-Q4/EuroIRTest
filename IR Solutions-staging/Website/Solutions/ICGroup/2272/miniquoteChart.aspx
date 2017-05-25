<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900|Oswald:400,300,700""/>";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700""/>";
%>
<%= site.newHeader("IRMiniquoteChart") %>

<script type="text/javascript">
    var activeModules = ["IRMiniquoteChart"];
</script>


<div class="IRMiniquoteChartModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">

    <div class="table-wrapper">
    <table class="IRMiniquoteChart table-look horizontal">
            <tr class="showLastPrice">
                <td class="Header miniquoteChart">{{headers/t_last}}</td>
                <td class="Data">{{decimals stocks/last}} {{showCurrency}} </td>
            </tr>
            <tr>
                <td class="Header change miniquoteChart">{{headers/t_change}}</td>
                <td class="Data change">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
            </tr>
            <tr>
                <td class="Header miniquoteChart">{{headers/t_market_cap}}</td>
                <td class="Data ">{{showMarketCapM stocks/marketCap}}M {{showCurrency}} </td>
            </tr>
            <%--<tr>
                <td class="Header Timestamp miniquoteChart"></td>
                <td class="Data Timestamp"></td>
            </tr>--%>
        </table>
        </div>
        <div class="IRMiniquoteChartPlaceholder"></div>
    <div class="timestamp">{{headers/t_updated}} : {{showDateTime stocks/timestamp}}</div>
</script>



<%= site.newFooter("IRMiniquoteChart") %>
   