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
<style>
    .IRMiniquoteChartModule {
        background-color: #000;
    }

    .table-look th, .table-look td {
        border: none;
    }
    td.Data {
    text-align: right;
        padding-right: 30px;
}

    text {
        fill: #fff !important;
    }
</style>

<div class="IRMiniquoteChartModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">

    <div class="table-wrapper">
        <table class="IRMiniquoteChart table-look horizontal">
            <tr class="showLastPrice">
                <td class="Header miniquoteChart">{{stocks/name}}</td>
                <td class="Data">{{showCurrency}} </td>
            </tr>
        </table>
    </div>
    <div class="IRMiniquoteChartPlaceholder"></div>
</script>



<%= site.newFooter("IRMiniquoteChart") %>
<script type="text/javascript">

    clientStyleOverwrite.chart_ColourBorder = '#000';
    clientStyleOverwrite.chart_ColourMain = '#fff';

</script>
