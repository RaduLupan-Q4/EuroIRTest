<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fast.fonts.net/cssapi/d62c0329-9fcc-43ae-b445-59557b0dbc19.css""/>";
%>

<%= site.newHeader("IRChartMini") %>

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