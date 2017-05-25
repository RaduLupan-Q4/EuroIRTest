<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""https://fonts.googleapis.com/css?family=Roboto:400,700,300"" type=""text/css"" />";
    %> 

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare', 'IRChartNews'];
</script>

<div class="IRQuoteModule"></div><br />
<div class="clear"></div>
<div class="chartExchangeWrapper">
    <label>Exchange:</label>
    <div class="IRChartToolMenu IRChartChangeListing"></div>
</div>
<br /><br />

<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>
<br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
  
    <iframe id="miniquoteSecondListing" src="miniquotemulti.aspx"></iframe>
</script>


<script id="IRChartModuleTemplate" type="text/x-handlebars-template">
  
    <div class="IRChartNavigation">
        {{{includeIRChartCompanyName}}}
        {{{includeIRChartNavigation}}}
    </div>

    <div class="IRChartPlaceholderArea">
        {{{includeIRChartDomSettings}}}
        {{{includeIRChartPlaceholder}}}
        {{{includeIRChartChangePeriod 'y1'}}}
    </div>

</script>

<%= site.newFooter("IRChart") %>

