<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
	IRSite site = new IRSite();
	site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""https://fonts.googleapis.com/css?family=Roboto:400,700,300"" type=""text/css"" />";
	%>

<%= site.newHeader("IRChart") %>

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
	<table class="IRQuoteModule table-look horizontal responsive">
			<tr>
				<th class="Header symbol column-first">{{headers/t_symbol}}</th>
				<th class="Header last">{{headers/t_last}}</th>
				<th class="Header change">{{headers/t_change}} (%)</th>
				<th class="Header volume">{{headers/t_volume}}</th>
				<th class="Header high">{{headers/t_days_range}}</th>
				<th class="Header prevClose column-last">{{headers/t_prev_close}}</th>
			</tr>
			<tr>
				<td class="Data symbol column-first">{{stocks/symbol}}</td>
				<td class="Data last">{{stocks/currency}} {{decimals stocks/last}}</td>
				<td class="Data change {{formatColour stocks/change}}"><span>{{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</span> <span class="{{showArrow stocks/change}}"></span></td>
				<td class="Data volume">{{toLocal stocks/volume}}</td>
				<td class="Data high" >{{decimals stocks/low}} - {{decimals stocks/high}}</td>
				<td class="Data prevClose column-last" >{{decimals stocks/prevClose}}</td>
			</tr>
	</table>
	
	<table class="table-look vertical customResponsiveVertical">
		<tr>
			<th class="Header column-first symbol">
			{{headers/t_symbol}}</td>
				<td class="Data column-first symbol">{{stocks/symbol}}</td>
		</tr>
		<tr>
			<th class="IRToolQuoteTableItem Header">{{headers/t_last}}</th>
			<td class="IRToolQuoteTableItem Data">{{decimals stocks/last}}</td>
		</tr>
		<tr>
			<th class="IRToolQuoteTableItem Header">{{headers/t_change}}</th>
			<td class="IRToolQuoteTableItem Data {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span>{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) </td>
		</tr>
		<tr>
			<th class="IRToolQuoteTableItem Header">{{headers/t_volume}}</th>
			<td class="IRToolQuoteTableItem Data">{{toLocal stocks/volume}}</td>
		</tr>
		<tr>
			<th class="IRToolQuoteTableItem Header">{{headers/t_days_range}}</th>
			<td class="IRToolQuoteTableItem Data">{{decimals stocks/low}} - {{decimals stocks/high}}</td>
		</tr>
		<tr>
			<th class="IRToolQuoteTableItem Header">{{headers/t_prev_close}}</th>
			<td class="IRToolQuoteTableItem Data">{{decimals stocks/prevClose}}</td>
		</tr>
	</table>
	
	<div class="updated" style="text-align: right"><span>Updated: {{showDateTime stocks/timestamp}} {{showLocalTimeZoneShort}}</span></div>

</script>



<script id="IRChartModuleTemplate" type="text/x-handlebars-template">
  
	<div class="IRChartNavigation">
		{{{includeIRChartCompanyName}}}

	</div>

	<div class="IRChartPlaceholderArea">
		{{{includeIRChartDomSettings}}}
		{{{includeIRChartPlaceholder}}}
		{{{includeIRChartChangePeriod 'y1'}}}
	</div>

</script>

<!-- <iframe id="performanceIframe" src="performance.aspx" style="width: 100%; height: 250px; border: none;"></iframe> -->


<%= site.newFooter("IRChart") %>
