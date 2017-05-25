<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""http://fast.fonts.net/cssapi/01e0bdf2-65ce-4a4a-9d7a-25eb0880e7fe.css"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Rubik:300,400,700"" />";
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script type="text/javascript">
    var activeModules = ['IRChartHTMLMini'];
</script>

<div class="IRChartOuter">

    <div class="IRChartHeader">
        <div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>
        <div class="IRChartCurrency">&nbsp;</div>
    </div>

    <div class="IRChartHTMLPlaceholder IRChartHTMLMiniPlaceholder">
        <span class="ajaxLoader">Loading</span>
    </div>

</div>

<%= site.newFooter("IRChartMini") %>