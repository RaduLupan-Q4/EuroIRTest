<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();
%>
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
        <table class="IRMiniquoteChart table-look horizontal">
            <tr>
                <th class="miniquoteHeader">{{headers/t_last}}</th>
                <td class="miniquoteData">{{decimals stocks/last}} {{stocks/currency}}</td>
            </tr>
            <tr>
                <th class="miniquoteHeader">{{headers/t_change}}</th>
                <td class="miniquoteData">{{decimals stocks/change}}</td>
            </tr>
            <tr>
                <th class="miniquoteHeader">{{headers/t_volume}}</th>
                <td class="miniquoteData">{{decimals stocks/volume}} </td>
            </tr>
            <%--       <tr>
                <th class="miniquoteHeader">{{headers/t_updated}}</th>
                <td class="miniquoteData">{{decimals stocks/tradeTimestamp}} </td>
            </tr>--%>
        </table>
    </div>

</script>


<%= site.newFooter("IRMiniquoteChart") %>
   