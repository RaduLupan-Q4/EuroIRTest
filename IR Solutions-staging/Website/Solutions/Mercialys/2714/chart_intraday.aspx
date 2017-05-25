<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = [];
</script>

<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<script id="IRChartModuleTemplate" type="text/x-handlebars-template">

    <div class="IRChartNavigation">
        {{{includeIRChartCompanyName}}}
        {{{includeIRChartNavigation}}}
    </div>

    <div class="IRChartPlaceholderArea">
        {{{includeIRChartDomSettings}}}
        {{{includeIRChartPlaceholder}}}
        <%--{{{includeIRChartChangePeriod 'd1'}}}--%>
    </div>

</script>

<%= site.newFooter("IRChart") %>


<link rel="stylesheet" href="chartadvanced.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("chartadvanced.css")).Ticks.ToString()%>" />

<script type="text/javascript">
    var clientStyleOverwrite = new function() {
        this.chart_DefaultPeriodSelected = 'd1';
    }
    Handlebars.registerHelper('toLocalTurnover', function (vwap, volume) {
        var number = 0;
        try {
            number = Number(vwap) * Number(volume);
            number = number.toFixed(0);
            //number = Number(vwap * volume).toLocaleString();

        }
        catch (err) {
            number = 0;
        }
        //return formatLocal(vwap * volume);
        return Number(number).toLocaleString();
    });
</script>
