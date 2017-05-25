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
    <table class="IRMiniquoteChart table-look horizontal last-price">
        <tr>
            <th class="IRToolQuoteTableItem Header column-first">Stock Quote</th>

        </tr>
        <tr>
            <td class="IRToolQuoteTableItem Data column-first">{{decimals stocks/last}} {{stocks/showCurrency}}</td>
        </tr>
    </table>
    <table class="IRMiniquoteChart table-look horizontal change">
        <tr>
            <th class="Header column-last">LSE</th>
        </tr>

        <tr>
            <td class="change column-last">{{decimals stocks/change}}</td>
        </tr>
        <tr>
            <td class="changePercent column-last">({{decimals stocks/changePercent}} %)</td>
        </tr>
    </table>
        </div>
    <div class="IRMiniquoteChartPlaceholder"></div>
</script>


<%= site.newFooter("IRMiniquoteChart") %>
   