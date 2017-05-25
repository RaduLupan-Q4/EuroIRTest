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
        <table class="IRMiniquoteChart table-look horizontal">
            <tr class="showLastPrice">
                <td class="Header miniquoteChart">{{decimals stocks/last}}p</td>
            </tr>
            <tr>
                <td id="miniquoteChartChange" class="Header change miniquoteChart" value="{{stocks/change}}">{{decimals stocks/change}}p</td>
            </tr>

        </table>
    </div>
    <div class="IRMiniquoteChartWrapper">
        <div class="IRMiniquoteChartPlaceholder"></div>
    </div>
</script>


<div class="disclaimer-IRMiniquoteChart" style="display: none;">
<%= site.newFooter("IRMiniquoteChart") %>
</div>
<script type="text/javascript">
    var clientStyleOverwrite = new function () {
        this.chart_ColourMain = '#FFFFFF'; //0284AA
        this.chart_ColourBackground = '#0177BD';
        this.chart_ColourBorder = '#FFFFFF';
        this.miniquoteChartDefaultPeriode = 'm4';
        //this.amountOfDecimals = 2;

    }
</script>
