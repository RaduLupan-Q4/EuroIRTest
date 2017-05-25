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



<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">
    <h2>Revenue</h2>
    <div class="table-wrapper">
    <table class="IRMiniquoteChart globalSales table-look horizontal">
            <tr class="showLastPrice">
                <td class="Data">+14%<span class="<%--{{showArrow stocks/change}}--%> formatArrowPos"></span></td>
            </tr>
        <tr>
                    <td>2015: DKK 10,665 million</td>
                </tr>
                <tr>
                    <td>2014: DKK 9,346 million</td>
                </tr>
 
        </table>
        </div>
    <div class="space"></div>
    <h2>Operating profit (EBIT)</h2>
    <div class="table-wrapper">
    <table class="IRMiniquoteChart globalSales table-look horizontal">
            <tr class="showLastPrice">
                <td class="Data">+7%<span class="<%--{{showArrow stocks/change}}--%> formatArrowPos"></span></td>
            </tr>
                <tr>
                    <td>2015: DKK 1,878 million</td>
                </tr>
                <tr>
                    <td>2014: DKK 1,761 million </td>
                </tr>
        </table>
        </div>
</script>

<%= site.newFooter("IRMiniquoteChart") %>
<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>
<script type="text/javascript">
        var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };
        $(document).ready(function () {
            var style = '';
            try {
                style = getUrlParameter('style');
            }
            catch (err) {
            }
            if (style == 'light') {
                //$('#chartiframe').attr('src', 'chart.aspx?language=' + language);
                $('head').append('<link rel="stylesheet" type="text/css" href="globalSales_light.css?dadadasd">');
            } else {
                $('head').append('<link rel="stylesheet" type="text/css" href="globalSales_dark.css?ppadaddd">');
            }

        });
</script>



   