<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700""/>";
%>
<%= site.newHeader("IRMiniquoteChart") %>


<script type="text/javascript">
    var activeModules = ["IRMiniquoteChart"];
</script>

<div class="IRMiniquoteChartModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script type="text/javascript">
    var activeModules = ["IRMiniquoteChart"];
</script>



<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">
    <div class="topData">
        <span class="Data last left ">{{stocks/symbol}} {{decimals stocks/last}} {{stocks/currency}}</span><span class="Data change right {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <%--<span class="{{showArrow stocks/change}}"></span>--%></span>
        <div class="updated">as of {{showDateWithFormat timestamp 'DD/MM/YYYY'}}</div>
    </div>
    <div class="IRMiniquoteChartPlaceholder_outer">
        <div class="IRMiniquoteChartPlaceholder"></div>
    </div>
    <%--<div class="bottomData">
        <table>
            <tr>
                <th>{{headers/t_high}}/{{headers/t_low}}  </th>
                <td>{{decimals stocks/low}}/{{decimals stocks/high}}</td>
            </tr>
            <tr>
                <th>{{headers/t_volume}}</th>
                <td>{{toLocal stocks/volume}}</td>
            </tr>
        </table>
    </div>--%>


</script>
<div class="IRMiniquoteChartPlaceholder"></div>



<%= site.newFooter("IRMiniquoteChart") %>
   