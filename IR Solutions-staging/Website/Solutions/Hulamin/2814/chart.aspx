<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
	IRSite site = new IRSite();
	site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""https://fonts.googleapis.com/css?family=Roboto:400,700,300"" type=""text/css"" />";
	%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = [''];
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
				<th class="Header high">{{headers/t_high}}</th>
				<th class="Header low">{{headers/t_low}}</th>
				<th class="Header open">{{headers/t_open}}</th>
				<th class="Header prevClose">{{headers/t_prev_close}}</th>
				<th class="Header volume column-last">{{headers/t_volume}}</th>
			</tr>
			<tr>
				<td class="Data symbol column-first">{{stocks/symbol}}</td>
				<td class="Data last">{{decimals stocks/last}}</td>
				<td class="Data change {{formatColour stocks/change}}"><span>{{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</span> <span class="{{showArrow stocks/change}}"></span></td>
				<td class="Data high">{{decimals stocks/high}}</td>
				<td class="Data low">{{decimals stocks/low}}</td>
				<td class="Data open">{{decimals stocks/open}}</td>
				<td class="Data prevClose">{{decimals stocks/prevClose}}</td>
				<td class="Data volume column-last">{{toLocal stocks/volume}}</td>
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
