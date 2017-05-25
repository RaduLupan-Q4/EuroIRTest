<%@ Page Language="C#" AutoEventWireup="true" %>
<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900|Oswald:400,300,700""/>";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700""/>";
%>
<%= site.header("IRMiniquoteChart") %>
<script type="text/javascript">
    var activeModules = ['IRMiniquoteMulti', 'IRMiniquoteChart'];
    var activeFeatures = [];
</script>

<div class="IRMiniquoteChartModule"></div>
<div class="IRQuoteModule"></div>

<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">
    
    <div class="MQTop">
        <div class="MQticker">ASML</div>
        <div class="MQcurrency">EUR</div>
    </div>
    

    <div class="IRMiniquoteChartPlaceholderArea IRChartModule">
        {{{includeIRMiniquoteChartPlaceholder}}}
    </div>

</script>

<script id="IRQuoteMultiTableTemplate" type="text/x-handlebars-template">

    <div class="MiniQuoteDataRow">
        ASML Share (15 min. delayed, <a class="miniquoteChartDisclaimerLink" target="_blank" href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">see terms</a>)<br />
        AEX: {{decimals stocks.0/last}} (€)<br />
        NASDAQ: {{decimals stocks.1/last}} ($)<br />
    </div>

</script>

<%= site.footer("IRMiniquoteChart") %>