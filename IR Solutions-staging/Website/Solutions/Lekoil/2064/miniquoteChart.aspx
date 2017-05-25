<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();%>
<%= site.newHeader("IRMiniquoteChart") %>


<script type="text/javascript">
    var activeModules = ["IRMiniquoteChart"];
</script>
<div class="IRMiniquoteChartPlaceholder"></div>

<div class="IRMiniquoteChartModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">
    <div class="table-wrapper">
    <div class="divideLine"></div>
    <table class="IRMiniquoteChart table-look horizontal">
        <tr class="showLastPrice">
            <th class="Header">{{headers/t_last}}</th>
            <td class="Data"> <span style="font-weight: bold;">{{decimals stocks/last}}</span> {{showCurrency}} </td>
        </tr>
    <tr>
    <th class="Header change">{{headers/t_change}}</th>
    <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
    </tr>
    <tr>
    <th class="Header Timestamp">{{headers/t_updated}}</th>
    <td class="Data Timestamp">{{showDateTime stocks/timestamp}}</td>
    </tr>
    </table>
 
        </div>
  

<%--    <div>
        prevClose: 
        {{stocks/prevClose}}
        <br />
        last: 
        {{stocks/last}}
        <br />
        closeDate: 
        {{stocks/closeDate}}
        <br />
        timestamp: 
        {{stocks/timestamp}}

    </div>--%>
</script>

<%= site.newFooter("IRMiniquoteChart") %>