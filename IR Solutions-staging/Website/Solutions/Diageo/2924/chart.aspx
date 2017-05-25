<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartSettings','IRChartCompare','IRChartTechnicalAnalysis','IRChartCurrencyConversion'];
</script>
<div class="IRQuoteModule"></div>
<div class="IRChartToolMenu"></div>
 
<div class="IRChartModule"></div> 

<script id="IRChartModuleTemplate" type="text/x-handlebars-template">
   <div class="IRchartToolMeniu IRChartChangeListing"></div>
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

<div>
    <%= site.newFooter("IRChart") %>
</div>