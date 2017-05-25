<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart")%>
<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare'];
</script>


<div class="sharePriceToolsIFrameWrapper">
    <iframe id="chartiframe" src="about:blank"></iframe>
    <iframe id="calciframe" src="about:blank"></iframe>
    <iframe id="lookupiframe" src="about:blank"></iframe>
</div>



<%= site.newFooter("IRChart") %>

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
            $('#calciframe').attr('src', 'calc.aspx?language=' + language);
        } else {
            $('#calciframe').attr('src', 'calc.aspx');
        }
        if (language != undefined) {
            $('#lookupiframe').attr('src', 'lookup.aspx?language=' + language);
        } else {
            $('#lookupiframe').attr('src', 'lookup.aspx');
        }
    });
</script>

<link rel="stylesheet" href="ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.client.css")).Ticks.ToString()%>" />


