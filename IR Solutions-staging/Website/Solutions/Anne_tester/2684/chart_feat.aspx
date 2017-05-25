<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html dir="lrt">
<head>
<title>IR Solutions, Euroinvestor</title>
<link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.normalize.css" />
<link rel="stylesheet" type="text/css" media="screen" href="Core/ir.style.css?v=3.9" />

<link rel="stylesheet" type="text/css" media="screen" href="ir.client.css?v=98787678346566683423534598373485632348786457899" />
</head>
<body>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartTechnicalAnalysis','IRChartCompare', 'IRChartFullscreen', 'IRChartSettings', 'IRChartNews', 'StockDataInstrumentTypeOther', 'IRChartTSR', 'IRChartCurrencyConversion'];
</script>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template"> 
    <div class="companyInfoWrapper">
       <%--<div class="updated"><span>{{headers/t_updated}}: </span><span>{{showTime stocks/timestamp}} on {{showDateWithFormat stocks/timestamp 'DD MMM, YYYY'}}</span></div>--%>
</div>
</script>

<div class="IRQuoteModule"></div>
<br />
<div class="IRChartToolMenu"></div><br />
 
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

   
<!-- Footer Start  -->

<div class="disclaimer disclaimer-IRChart">
<span class="disclaimer-copyright">Copyright &copy; 1997-2016 <a href="http://www.euroinvestor.com/ir/">Euroinvestor</a> </span><span class="disclaimer-dataSource">and our data suppliers. </span><span class="disclaimer-delayed">Data delayed by 15-20 min.</span><span class="disclaimer-terms"> <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">See Terms of use</a></span></div>
<script type="text/javascript" src="/includes/js/libs/jquery1-8-3.min.js?v=635810177706204834"></script>
<script type="text/javascript" src="Core/jquery.slimscroll.min.js?v=3.9"></script>

<script type="text/javascript" src="ir.client.js?v=7834534983"></script>
<script type="text/javascript" src="Core/ir.util.js?v=3.9"></script>
<script type="text/javascript" src="/inc/scripts/bootstrap/3_2_0/bootstrap.min.js?v=635979478298352876"></script>
<script type="text/javascript" src="/includes/js/libs/handlebars1-3-0.min.js?v=635808478214120447"></script>
<script type="text/javascript" src="/includes/js/libs/moment2-7-0.min.js?v=635808478220995253"></script>
<script type="text/javascript" src="/includes/js/libs/moment-timezone0-3-1.min.js?v=635808478220995253"></script>
<script type="text/javascript" src="/inc/scripts/moment/moment-timezone-with-data-2010-2020.min.js?v=635808478211933009"></script>
<script type="text/javascript" src="/inc/scripts/browserSupport/respond.min.js?v=635979478298523004"></script>
<script type="text/javascript" src="/inc/scripts/ir.reset.js?v=635979478297302170"></script>
<script type="text/javascript" src="Core/ir.behaviour.js?v=3.9"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.data.js?v=636035065599684865"></script>
<script type="text/javascript" src="/includes/js/libs/highstock-2-0-4.js?v=635808478220057902"></script>
<script type="text/javascript" src="/includes/js/libs/screenfull.min.js?v=635900880957835169"></script>
<script type="text/javascript" src="/includes/js/libs/jquery.printElement.min.js?v=635900963119873276"></script>
<script type="text/javascript" src="/includes/js/libs/jsv.js?v=635900946166650015"></script>
<script type="text/javascript" src="Core/ir.util.draw.js?v=3.9"></script>
</body>
</html>
<!-- Footer End -->