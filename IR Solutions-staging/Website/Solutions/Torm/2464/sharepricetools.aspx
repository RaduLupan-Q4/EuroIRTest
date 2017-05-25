<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//cloud.typography.com/7594474/696708/css/fonts.css"" type=""text/css"" />";
%>
<%= site.newHeader("IRDetailedSharePrice") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="http://minitabs.googlecode.com/files/jquery.minitabs.js"></script>
<link rel="stylesheet" type="text/css" href="ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.client.css")).Ticks.ToString()%>">

<div class="IRQuoteHorizontalModule"></div>

<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">

    <div class="sharePriceTools">
        <h2>{{headers/t_stock_chart}}</h2>
        <iframe id="chartiframe" src="about:blank" allowtransparency="true" allowfullscreen style="width: 100%; height: 770px; border: none; background-color: transparent; overflow: hidden;"></iframe>
        <h2>{{headers/t_benchmark}}</h2>
        <div class="iframePerformance">
            <iframe id="performanceiframe" src="about:blank" style="width: 100%; height: 570px; border: none; background-color: transparent; overflow: hidden;"></iframe>
        </div>
        <h2>{{headers/t_historical_lookup}}</h2>
        <div class="iframeLookup">
            <iframe id="lookupiframe" src="about:blank" style="width: 100%;  border: none; background-color: transparent; overflow: hidden;"></iframe>
        </div>
        <h2>{{headers/t_investment_calculator}}</h2>
        <div class="iframeCalc">
            <iframe id="calciframe" src="about:blank" style="width: 100%; height: 300px; border: none; background-color: transparent; overflow: hidden;"></iframe>
        </div>


    </div>
</script>
<%= site.newFooter("IRDetailedSharePrice") %>
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
        var hasChangedIframes = 0;

        setInterval(function () {

            if (0 == hasChangedIframes && (parseInt($('iframe').length)) > 0) {
                hasChangedIframes = 1;
                var language = '';
                try {
                    language = getUrlParameter('language');
                }
                catch (err) {
                }
                if (language != undefined) {
                    $('#chartiframe').attr('src', 'chart.aspx?language=' + language);
                } else {
                    $('#chartiframe').attr('src', 'chart.aspx');
                }
                if (language != undefined) {
                    $('#performanceiframe').attr('src', 'performance.aspx?language=' + language);
                } else {
                    $('#performanceiframe').attr('src', 'performance.aspx');
                }
                if (language != undefined) {
                    $('#calciframe').attr('src', '//ir1.euroinvestor.com/asp/ir/TORM/2015/calc.aspx?language=' + language);
                } else {
                    $('#calciframe').attr('src', '//ir1.euroinvestor.com/asp/ir/TORM/2015/calc.aspx');
                }
                if (language != undefined) {
                    $('#lookupiframe').attr('src', 'lookup.aspx?language=' + language);
                } else {
                    $('#lookupiframe').attr('src', 'lookup.aspx');
                }
            }
        }, 10);
    });
</script>



