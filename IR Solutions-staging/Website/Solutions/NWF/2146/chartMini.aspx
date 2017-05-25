<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
        site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""http://fast.fonts.net/cssapi/6da7dd2e-d6b3-46dd-adcb-7276ef650f12.css"" type=""text/css"" />";
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