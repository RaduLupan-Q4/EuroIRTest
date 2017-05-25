<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();%>
<%= site.newHeader("IRMiniquoteChart") %>


<script type="text/javascript">
    var activeModules = ["IRMiniquoteChart"];
</script>

<div class="IRMiniquoteChartModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">
<div class="IRMiniquoteChartPlaceholder"></div>
    <div class="table-wrapper">
        <div class="divideLine"></div>
            <table class="IRMiniquoteChart table-look horizontal">
                <tr class="showLastPrice">
                    <th class="Header">{{headers/t_share_price}}</th>
                    <td class="Data">{{decimals stocks/last}}</td>
                </tr>
                <tr>
                    <th class="Header change">{{headers/t_change}}</th>
                    <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
                </tr>
                <tr>
                    <th class="Header">{{headers/t_volume}}</th>
                    <td class="Data">{{toLocal stocks/volume}}</td>
                </tr>
            </table>
 
    </div>

</script>

<%= site.newFooter("IRMiniquoteChart") %>