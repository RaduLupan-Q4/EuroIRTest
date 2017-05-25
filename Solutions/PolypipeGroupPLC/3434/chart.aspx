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

<div class="IRChartModule">
	<div class="IRChartColour"></div>
</div>
<br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
	<table class="IRQuoteModule table-look horizontal responsive">
			<tr>
				<th class="Header symbol column-first">{{headers/t_symbol}}</th>
				<th class="Header last">{{headers/t_last}}</th>
				<th class="Header change">{{headers/t_change}} (%)</th>
				<th class="Header volume">{{headers/t_volume}}</th>
				<th class="Header marketCap">{{headers/t_market_cap}}</th>
				<th class="Header high">{{headers/t_day_high}}</th>
				<th class="Header low column-last">{{headers/t_day_low}}</th>
			</tr>
			<tr>
				<td class="Data symbol column-first">{{stocks/symbol}}</td>
				<td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>
				<td class="Data change {{formatColour stocks/change}}"><span>{{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</span> <span class="{{showArrow stocks/change}}"></span></td>
				<td class="Data volume">{{toLocal stocks/volume}}</td>
				<td class="Data marketCap">&pound; {{millions stocks/marketCap}} M</td>
				<td class="Data high">{{decimals stocks/high}}</td>
				<td class="Data low column-last">{{decimals stocks/low}}</td>
			</tr>
	</table>
	
	<div class="updated" style="text-align: right"><span>Updated: {{showDateTime stocks/timestamp}} {{showLocalTimeZoneShort}}</span></div>

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


Handlebars.registerHelper('millions', function(number){

    var temp = (number/100000000).round(2);
    
    return temp;

    });

</script>