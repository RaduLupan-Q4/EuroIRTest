<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartSettings', 'IRChartCompare', 'IRChartPressReleaseIRChartHeadline'];
</script>

<!-- <script id="IRQuoteTableTemplate" type="text/x-handlebars-template"> 
    <div class="companyInfoWrapper">
       <%--<div class="updated"><span>{{headers/t_updated}}: </span><span>{{showTime stocks/timestamp}} on {{showDateWithFormat stocks/timestamp 'DD MMM, YYYY'}}</span></div>--%>
</div>
</script> -->

<div class="IRQuoteModule"></div>
<div class="IRChartToolMenu"></div>
 
<div class="IRChartModule"></div>

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

<div>
    <%= site.newFooter("IRChart") %>
</div>
<script type="text/javascript">
    var reflow = setInterval(function(){reFunction()}, 500);
    var allow = 0;
    function reFunction() {
        try{
            if (document.readyState === 'complete' && globalChartDom.hasRendered){
                $('.IRChartPlaceholder').width($('.IRChartPlaceholder').width()-5);
                globalChartDom.reflow()
                $('.IRChartPlaceholder').removeAttr('style');
                globalChartDom.reflow();
                if (allow > 5) clearInterval(reflow);
                allow ++
            }
        }catch(err){}
    }
</script>