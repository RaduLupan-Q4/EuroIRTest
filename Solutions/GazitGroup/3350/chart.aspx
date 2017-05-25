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

<div class="IRQuoteModule"></div>
<div class="IRChartToolMenu IRChartChangeListing"></div>

<div class="clear"></div>

<div class="IRChartModule">
	<div class="IRChartColour"></div>
</div>
<br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
	<table class="IRQuoteModule table-look horizontal responsive">
			<tr>
				<th class="Header last column-first">{{headers/t_last}}</th>
				<th class="Header change">{{headers/t_change}} (%)</th>
				<th class="Header volume">{{headers/t_volume}}</th>
				<th class="Header bid">{{headers/t_max}}</th>
				<th class="Header ask">{{headers/t_min}}</th>
				<th class="Header prevClose column-last">{{headers/t_prev_close}}</th>
			</tr>
			<tr>
				<td class="Data last column-first">{{thousands stocks/last}}</td>
				<td class="Data change {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</td>
				<td class="Data volume">{{toLocal stocks/volume}}</td>
				<td class="Data bid">{{thousands stocks/high}}</td>
				<td class="Data ask">{{thousands stocks/low}}</td>
				<td class="Data prevClose column-last">{{thousands stocks/prevClose}}</td>
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
    Handlebars.registerHelper('thousands', function (number) {
   var sepaNumb = "-";
   try {
       if (typeof (number) == 'number') {
           if (/^./.test(number)) {
               number = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);
               var h = number.toString().split(".");
               sepaNumb = h[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000) + clientLocaleParameters.decimalSeparator + h[1];
           } else {
               sepaNumb = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals).replace('.', clientLocaleParameters.decimalSeparator);
           }
       }
   }
   catch (err) {
       debugError(err);
   }
   return sepaNumb;
});

</script>

<script type="text/javascript">
    $(document).on('click','.IRChartChangePeriod', function () {
        removeDecimalsAndAddThousands();
        removeDecimalsAndAddThousands();
    });

    document.ready = function () {
        $( document ).ajaxStop(function() {
            removeDecimalsAndAddThousands();
        });
    }

    function removeDecimalsAndAddThousands(){
        var separ = ",";
        $('.highcharts-container .highcharts-yaxis-labels, .highcharts-container .chartLastPrice').find('text').each(function(){
            var nb = $(this).text().toString().split(".");
            $(this).text(nb[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000) + clientLocaleParameters.decimalSeparator + nb[1]);
        });

        var chartBox = $('.highcharts-container .chartLastPrice').text().toString().split(".");
        $('.highcharts-container .chartLastPrice').text(chartBox[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000) + clientLocaleParameters.decimalSeparator + chartBox[1]);

        
    }

</script>