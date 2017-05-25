<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
     site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>

<%= site.newHeader("IRChartMini") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script type="text/javascript">
    var activeModules = ['IRChartHTMLMini'];
</script>

<div class="IRChartOuter">

    <div class="IRChartHeader">
        <div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>
        <div class="IRChartCurrency">&nbsp;</div>
    </div>
    <div class="IRChartMiniHTMLPlaceholder">
    <div class="IRChartHTMLPlaceholder IRChartHTMLMiniPlaceholder">
        <span class="ajaxLoader">Loading</span>
    </div>
    </div>
</div>

<%= site.newFooter("IRChartMini") %>