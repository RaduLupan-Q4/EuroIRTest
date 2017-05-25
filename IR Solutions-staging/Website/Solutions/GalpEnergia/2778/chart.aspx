<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
	IRSite site = new IRSite();
	site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:400,700,300"" type=""text/css"" />";
	%>

<%= site.newHeader("IRChart") %>

<% string language = "en";
    language = Request["language"];

    if (language != "pt")
    {
        language = "en";
    }
%>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare'];
</script>

<div class="IRQuoteModule"></div><br />
<div class="clear"></div>

<div class="IRChartModule">
	<div class="IRChartColour"></div>
</div>
<br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

	<div class="exchange"><span><b>{{headers/t_exchange}}:</b> NYSE Euronext Lisbon</span> <span><b>{{headers/t_symbol}}:</b> {{stocks/symbol}}</span><span><b>{{headers/t_updated}}:</b> {{showDateTime stocks/timestamp}} {{showLocalTimeZoneShort}}</span></div>
	
	<table class="IRQuoteModule table-look horizontal responsive">
			<tr>
				<th class="Header last">{{headers/t_last}}</th>
				<th class="Header change">{{headers/t_change}}</th>
				<th class="Header change">{{headers/t_change}} (%)</th>
				<th class="Header volume">{{headers/t_volume}}</th>
				<th class="Header low">{{headers/t_min}}</th>
				<th class="Header high">{{headers/t_max}}</th>
				<th class="Header openPrice">{{headers/t_open_price}}</th>
				<th class="Header prevClose">{{headers/t_prev_close}}</th>
				<th class="Header marketCap">{{headers/t_market_cap}}</th>				
			</tr>
			<tr>
				<td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>
				<td class="Data change {{formatColour stocks/change}}"><span>{{decimals stocks/change}}</span> <span class="{{showArrow stocks/change}}"></span></td>
				<td class="Data change {{formatColour stocks/change}}"><span>{{decimals stocks/changePercent}} %</span> <span class="{{showArrow stocks/change}}"></span></td>
				<td class="Data volume">{{toLocal stocks/volume}}</td>
				<td class="Data low">{{decimals stocks/low}} {{stocks/currency}}</td>
				<td class="Data high" >{{decimals stocks/high}} {{stocks/currency}}</td>
				<td class="Data openPrice" >{{decimals stocks/open}} {{stocks/currency}}</td>
				<td class="Data prevClose" >{{decimals stocks/prevClose}} {{stocks/currency}}</td>
				<td class="Data marketCap" >{{millions stocks/marketCap}} M {{stocks/currency}}</td>
			</tr>
	</table>
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

<script type="text/javascript">
if(globalActiveLanguage == 'pt'){
	Handlebars.registerHelper('millions', function(number){
    	var temp = (number/1000000).round(2);
    	var a = temp.toString().split('.');
    	return a[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "," + a[1]
    });
}else{
    Handlebars.registerHelper('millions', function(number){
    	var temp = (number/1000000).round(2);
    	var a = temp.toString().split('.');
    	return a[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + a[1]
    });
}
</script>