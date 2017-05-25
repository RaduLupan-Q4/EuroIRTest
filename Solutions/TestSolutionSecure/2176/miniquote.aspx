<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ["IRMiniquoteChart"];
</script>

<div class="IRMiniquoteChartModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">

        <table class="IRMiniquoteChart table-look horizontal">
            <tr>
                <th class="Header">{{headers/t_showExchangeShort}}</th>
                <th class="IRToolQuoteTableItem Header">{{headers/t_share_price}}</th>


                
                
            </tr>
            <tr>
                <td class="Data column-first">{{{showExchangeShort}}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals stocks/last}} {{stocks/showCurrency}}</td>
            </tr>
            <tr>
                <th class="Header">{{headers/t_share_price}}</th>
                 <td class="changePercent column-first">({{decimals stocks/changePercent}} %)</td>
            </tr>
            <tr>
                <th class="IRToolQuoteTableItem Header">{{headers/t_share_price}}</th>
                <td class="IRToolQuoteTableItem Data">{{decimals stocks/last}} {{stocks/showCurrency}}</td>
            </tr>
             
        </table>


    <%--<div class="IRMiniquoteChartPlaceholder" dir="ltr"></div>--%>
</script>

<%= site.newFooter("IRMiniquote") %>