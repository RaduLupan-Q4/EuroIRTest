<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
	IRSite site = new IRSite();
	site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:400,700,300"" type=""text/css"" />";
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
				<th class="Header symbol column-first">{{headers/t_exchange}}</th>
				<th class="Header symbol">{{headers/t_symbol}}</th>
				<th class="Header last">{{headers/t_last}}</th>
				<th class="Header change">{{headers/t_change}}</th>
				<th class="Header bid">{{headers/t_bid}}</th>
				<th class="Header ask">{{headers/t_ask}}</th>
				<th class="Header volume column-last">{{headers/t_volume}}</th>
			</tr>
			<tr>
				<td class="Data symbol column-first">{{stocks/exchangeName}}</td>
				<td class="Data symbol">{{stocks/symbol}}</td>
				<td class="Data last">{{decimals stocks/last}}</td>
				<td class="Data change {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span> <span> {{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</span> </td>
				<td class="Data bid">{{decimals stocks/bid}}</td>
				<td class="Data ask">{{decimals stocks/ask}}</td>
				<td class="Data volume column-last">{{toLocal stocks/volume}}</td>
			</tr>
	</table>
	
	<div class="updated" style="text-align: left"><span>{{headers/t_data_as_of}} {{showDateTime stocks/timestamp}} {{showLocalTimeZoneShort}}</span></div>

</script>




<script id="IRChartModuleTemplate" type="text/x-handlebars-template">
  
	<div class="IRChartNavigation">
		{{{includeIRChartCompanyName}}}
		{{{includeIRChartNavigation}}}

	</div>

	<div class="IRChartPlaceholderArea">
		{{{includeIRChartDomSettings}}}
		{{{includeIRChartPlaceholder}}}
		{{{includeIRChartChangePeriod 'm3'}}}
	</div>

</script>

<%= site.newFooter("IRChart") %>

<script type="text/javascript">
$(document).ready(function(){
	$(document).on('click', '.basicButtonLook', function(){
		if($('.basicButtonLook.active').length == 1)
			$('#m3').click();
	})
})
</script>