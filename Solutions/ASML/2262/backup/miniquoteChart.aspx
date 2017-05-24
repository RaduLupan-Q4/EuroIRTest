<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900|Oswald:400,300,700""/>";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700""/>";
%>
<%= site.newHeader("IRMiniquoteChart") %>


<script type="text/javascript">
    var activeModules = ["IRMiniquoteChart", "IRQuoteMulti"];
    var activeFeatures = [];
</script>

<div class="IRMiniquoteChartModule">
    <span class="ajaxLoader">Loading</span>
</div>

<div class="IRQuoteModule"></div>

<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniquoteChartPlaceholder"></div>
   <div class="table-wrapper">
        <table class="IRMiniquoteChart table-look horizontal">
       <%--      <tr>
                <th>{{stocks/symbol}}
                </th>
                <td>{{stocks/last}}{{stocks/currency}}
                </td>
            </tr>
            <tr>
                <th>{{stocks/symbol}}
                </th>
                <td>{{stocks/last}}{{stocks/currency}}</td>
            </tr>
            <%--        <tr class="showLastPrice">
                <th class="Header miniquoteChart">{{headers/t_last}}</th>
                <td class="Data"><span style="font-weight: bold;">{{decimals stocks/last}}</span> {{showCurrency}} </td>
            </tr>
            <tr>
                <th class="Header change miniquoteChart">{{headers/t_change}}</th>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</td>
            </tr>
            <tr>
                <th class="Header miniquoteChart">{{headers/t_volume}}</th>
                <td class="Data ">{{decimals stocks/volume}} </td>
            </tr>
            <tr>
                <th class="Header Timestamp miniquoteChart">{{headers/t_updated}}</th>
                <td class="Data Timestamp">{{showDateTime stocks/timestamp}}</td>
            </tr>--%>
        </table>

    </div>

</script>
<script id="IRQuoteMultiTableTemplate" type="text/x-handlebars-template">
    <div class="table-wrapper">
        <table class="IRMiniquoteChart table-look horizontal" >
            {{#headers}}
            <tr>
                <%--<th >{{t_symbol}}</th>--%>
                <%--<th >{{t_last}}</th>--%>
            </tr>
            {{/headers}}
        {{#stocks}}
            <tr>
                <th >{{symbol}}</th>
                <td >{{decimals last}} {{currency}}</td>
            </tr>
            {{/stocks}}
        </table>
    </div>
</script>
<%--<div class="heightFilling"></div>--%>

<%= site.newFooter("IRMiniquoteChart") %>
   