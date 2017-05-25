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
    <div class="IRMiniquoteChartPlaceholder" dir="ltr"></div>
        <span class="last-price">{{decimals stocks/last}} {{stocks/currency}} </span>
        <span class="change {{formatColour stocks/change}}"> {{decimals stocks/change}}</span>
        <span class="show-time">Data as of {{showDateTime timestamp}}</span>
</script>

<%= site.newFooter("IRMiniquoteChart") %>