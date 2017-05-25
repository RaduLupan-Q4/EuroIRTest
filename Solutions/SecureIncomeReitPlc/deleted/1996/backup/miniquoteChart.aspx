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
    <div class="table-wrapper">
    <table class="IRMiniquoteChart table-look horizontal">
        <tr class="showLastPrice">
            <td class="Data column-first last">{{decimals stocks/last}} </td>
            <td class="Data currency">{{showCurrency}}</td>
        </tr>
        <tr>
            <td class="Data column-last">as of {{showDate stocks/timestamp}}</td>
        </tr>
    </table>
        </div>
    <div class="IRMiniquoteChartPlaceholder"></div>

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

   