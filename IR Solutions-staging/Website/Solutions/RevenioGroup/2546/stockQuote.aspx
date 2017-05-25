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
        <h2>Stock Quote</h2>
        <div class="IRMiniquoteChartPlaceholder"></div>
        <div class="stockQuote table-wrapper">
            <table class="IRMiniquoteChart table-look horizontal">
                <tr class="showLastPrice">
                    <td class="Data">{{decimals stocks/last}}<span class="{{showArrow stocks/change}}"></span></td>
                </tr>
                <tr>
                    <td class="Date">{{showDateWithFormat timestamp 'MMM DD, YYYY - HH:mm'}} CET  </td>
                </tr>
                <tr>
                    <td class="Info">{{stocks/name}} (OMX : {{stocks/symbol}})</td>
                </tr>
            </table>
            <button type="submit" class="submit" onclick="window.location.href='chart.aspx'">Stock Chart</button>
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
                $('head').append('<link rel="stylesheet" type="text/css" href="stockQuote_light.css?v=1234">');
            } else {
                $('head').append('<link rel="stylesheet" type="text/css" href="stockQuote_dark.css?v=1234">');
            }

        });
</script>


   