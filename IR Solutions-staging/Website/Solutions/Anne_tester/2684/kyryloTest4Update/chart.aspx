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

<div class="IRQuoteModule">
</div>
<div class="clear"></div>


<div class="IRChartModule">
	<div class="IRChartColour"></div>
</div>
<br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
<h2 class="allTools">{{headers/t_share_price}}</h2>
	<table class="IRQuoteModule table-look horizontal responsive">
			<tr>
				<th class="Header symbol column-first">{{headers/t_symbol}}</th>
				<th class="Header last">{{headers/t_last}}</th>
				<th class="Header change">{{headers/t_change}} (%)</th>
				<th class="Header bid">{{headers/t_bid}}</th>
				<th class="Header ask">{{headers/t_ask}}</th>
				<th class="Header volume">{{headers/t_volume}}</th>
				<th class="Header open">{{headers/t_open}}</th>
				<th class="Header prevClose">{{headers/t_prev_close}}</th>
				<th class="Header high">{{headers/t_high}}</th>
				<th class="Header low column-last">{{headers/t_low}}</th>
			</tr>
			<tr>
				<td class="Data symbol column-first">{{stocks/symbol}}</td>
				<td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>
				<td class="Data change {{formatColour stocks/change}}"><span>{{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</span> <span class="{{showArrow stocks/change}}"></span></td>
				<td class="Data bid">{{decimals stocks/bid}}</td>
				<td class="Data ask">{{decimals stocks/ask}}</td>
				<td class="Data volume">{{toLocal stocks/volume}}</td>
				<td class="Data open">{{decimals stocks/open}}</td>
				<td class="Data prevClose">{{decimals stocks/prevClose}}</td>
				<td class="Data high">{{decimals stocks/high}}</td>
				<td class="Data low column-last">{{decimals stocks/low}}</td>
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
			<th class="IRToolQuoteTableItem Header">{{headers/t_bid}}</th>
			<td class="IRToolQuoteTableItem Data">{{decimals stocks/bid}}</td>
		</tr>
		<tr>
			<th class="IRToolQuoteTableItem Header">{{headers/t_ask}}</th>
			<td class="IRToolQuoteTableItem Data">{{decimals stocks/ask}}</td>
		</tr>
		<tr>
			<th class="IRToolQuoteTableItem Header">{{headers/t_volume}}</th>
			<td class="IRToolQuoteTableItem Data">{{toLocal stocks/volume}}</td>
		</tr>
		<tr>
			<th class="IRToolQuoteTableItem Header">{{headers/t_open}}</th>
			<td class="IRToolQuoteTableItem Data">{{decimals stocks/open}}</td>
		</tr>
		<tr>
			<th class="IRToolQuoteTableItem Header">{{headers/t_prev_close}}</th>
			<td class="IRToolQuoteTableItem Data">{{decimals stocks/prevClose}}</td>
		</tr>
		<tr>
			<th class="IRToolQuoteTableItem Header">{{headers/t_high}}</th>
			<td class="IRToolQuoteTableItem Data">{{decimals stocks/high}}</td>
		</tr>
		<tr>
			<th class="IRToolQuoteTableItem Header">{{headers/t_low}}</th>
			<td class="IRToolQuoteTableItem Data">{{decimals stocks/low}}</td>
		</tr>
	</table>
	
	<div class="updated" style="text-align: right"><span>Updated: {{showDateTime stocks/timestamp}} {{showLocalTimeZoneShort}}</span></div>

</script>




<script id="IRChartModuleTemplate" type="text/x-handlebars-template">
  
	<div class="IRChartNavigation">
	    {{{includeIRChartNavigation}}}
		{{{includeIRChartCompanyName}}}
		

	</div>

	<div class="IRChartPlaceholderArea">
		{{{includeIRChartDomSettings}}}
		{{{includeIRChartPlaceholder}}}
		{{{includeIRChartChangePeriod 'y1'}}}
	</div>

</script>

<%= site.newFooter("IRChart") %>
