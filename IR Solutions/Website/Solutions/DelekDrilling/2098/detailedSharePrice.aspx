<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRDetailedSharePrice") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
    var activeDataRequests = [
        'requestClosePriceListingData'
    ];
</script>

<script id="IRMiniquoteTemplate" type="text/x-handlebars-template">

    <div class="IRMiniquoteChartPlaceholder"></div>

</script>


<div class="IRQuoteHorizontalModule"></div>

<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">
<table class="IRDetailedSharePrice table-look horizontal responsive-flip">
	<tr>
		<th class="Header exchange column-first">{{headers/t_exchange}}</th>
		<th class="Header symbol">{{headers/t_symbol}}</th>
		<th class="Header updated">{{headers/t_last_updated}}</th>
		<th class="Header currency column-last">{{headers/t_currency}}</th>
	</tr>
	<tr>
		<td class="Data exchange column-first">{{stocks/exchangeName}}</td>
		<td class="Data symbol">{{stocks/symbol}}</td>
		<td class="Data updated">{{showDateTime stocks/time}}</td>
		<td class="Data currency column-last">{{stocks/currency}}</td>
	</tr>
	<tr>
		<th class="Header bid column-first">{{headers/t_bid}}</th>
		<th class="Header ask">{{headers/t_ask}}</th>
		<th class="Header volume">{{headers/t_volume}}</th>
		<th class="Header averageVolume_3mnt column-last">{{headers/t_3_month_average_volume}}</th>
	</tr>
	<tr>
		<td class="Data bid column-first">{{decimals stocks/bid}}</td>
		<td class="Data ask">{{decimals stocks/ask}}</td>
		<td class="Data volume">{{toLocal stocks/volume}}</td>
		<td class="Data averageVolume_3mnt column-last"></td>
	</tr>
	<tr>
		<th class="Header last column-first">{{headers/t_last}}</th>
		<th class="Header formatColour change">{{headers/t_change}}</th>
		<th class="Header high">{{headers/t_high}}</th>
		<th class="Header low column-last">{{headers/t_low}}</th>
	</tr>
	<tr>
		<td class="Data last column-first">{{decimals stocks/last}}</td>
		<td class="Data change">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</td>
		<td class="Data high">{{decimals stocks/high}}</td>
		<td class="Data low column-last">{{decimals stocks/low}}</td>
	</tr>
	<tr>
		<th class="Header prev-close column-first">{{headers/t_prev_close}}</th>
		<th class="Header high52week low52week">{{headers/t_52w_high}} / {{headers/t_52w_low}}</th>
		<th class="Header shares-out">{{headers/t_shares_outstanding}}</th>
		<th class="Header market-cap column-last">{{headers/t_market_cap}}</th>
	</tr>
	<tr>
		<td class="Data prev-close column-first">{{decimals stocks/prevClose}}</td>
		<td class="Data high52week low52week">{{decimals stocks/high52Week}} / {{decimals stocks/low52Week}}</td>
		<td class="Data shares-out">{{decimals stocks/shareMillions}}m</td>
		<td class="Data market-cap column-last">{{showLondonMarketCapM stocks/marketCap}}m</td>
	</tr>
</table>
<table class="IRDetailedSharePrice table-look vertical responsive-flip">
	<tr>
		<th class="Header exchange column-first">{{headers/t_exchange}}</th>
		<td class="Data exchange column-first">{{stocks/exchangeName}}</td>
	</tr>
	<tr>
		<th class="Header symbol">{{headers/t_symbol}}</th>
		<td class="Data symbol">{{stocks/symbol}}</td>
	</tr>
	<tr>
		<th class="Header updated">{{headers/t_last_updated}}</th>
		<td class="Data updated">{{showDateTime stocks/time}}</td>
	</tr>
	<tr>
		<th class="Header currency column-last">{{headers/t_currency}}</th>
		<td class="Data currency column-last">{{stocks/currency}}</td>
	</tr>
	<tr>
		<th class="Header bid column-first">{{headers/t_bid}}</th>
		<td class="Data bid column-first">{{decimals stocks/bid}}</td>
	</tr>
	<tr>
		<th class="Header ask">{{headers/t_ask}}</th>
		<td class="Data ask">{{decimals stocks/ask}}</td>
	</tr>
	<tr>
		<th class="Header volume">{{headers/t_volume}}</th>
		<td class="Data volume">{{toLocal stocks/volume}}</td>
	</tr>
	<tr>
		<th class="Header averageVolume_3mnt column-last">{{headers/t_3_month_average_volume}}</th>
		<td class="Data averageVolume_3mnt column-last"></td>
	</tr>
	<tr>
		<th class="Header last column-first">{{headers/t_last}}</th>
		<td class="Data last column-first">{{decimals stocks/last}}</td>
	</tr>
	<tr>
		<th class="Header formatColour change">{{headers/t_change}}</th>
		<td class="Data change">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</td>
	</tr>
	<tr>
		<th class="Header high">{{headers/t_high}}</th>
		<td class="Data high">{{decimals stocks/high}}</td>
	</tr>
	<tr>
		<th class="Header low column-last">{{headers/t_low}}</th>
		<td class="Data low column-last">{{decimals stocks/low}}</td>
	</tr>
	<tr>
		<th class="Header prev-close column-first">{{headers/t_prev_close}}</th>
		<td class="Data prev-close column-first">{{decimals stocks/prevClose}}</td>
	</tr>
	<tr>
		<th class="Header high52week low52week">{{headers/t_52w_high}} / {{headers/t_52w_low}}</th>
		<td class="Data high52week low52week">{{decimals stocks/high52Week}} / {{decimals stocks/low52Week}}</td>
	</tr>
	<tr>
		<th class="Header shares-out">{{headers/t_shares_outstanding}}</th>
		<td class="Data shares-out">{{decimals stocks/shareMillions}}m</td>
	</tr>
	<tr>
		<th class="Header market-cap column-last">{{headers/t_market_cap}}</th>
		<td class="Data market-cap column-last">{{showLondonMarketCapM stocks/marketCap}}m</td>
	</tr>
</table>
</script>

<%= site.newFooter("IRDetailedSharePrice") %>
<script type="text/javascript">



    function numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
	function parse(val) {
		var result = "Not found",
			tmp = [];
		location.search
		//.replace ( "?", "" ) 
		// this is better, there might be a question mark inside
		.substr(1)
			.split("&")
			.forEach(function (item) {
			tmp = item.split("=");
			if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
		});
		return result;
	}
	$.when(requestStockData, requestClosePriceListingData, requestTranslationsData).done(function (stockData, closePriceListingData, closePriceOtherData) {
		var listing=0;
		if(parse('listing')=='1') listing=1;
		var historicalData = closePriceListingData[0].data[listing].data;
		var historicalDataPoints = historicalData.length;
		var date_3monthsAgoUnix = moment.utc('<%= DateTime.UtcNow.AddMonths(-3).ToString("yyyy-MM-dd") %>', "YYYY-MM-DD").format("X");
		var date_3monthsAgo = new Date('<%=DateTime.Now.AddMonths(-3).ToString("yyyy-MM-dd")%>');
		var avgVolume_3months = 0;
		var daysWithin_3months = 0;
		var historicalDataTest = moment.utc(historicalData[historicalDataPoints - 1].date).format("X");
		
		for (i = 0; i < historicalDataPoints; i++) {

			var histDataDateUnix = moment.utc(historicalData[historicalDataPoints - 1 - i].date).format("X");

			if (histDataDateUnix > date_3monthsAgoUnix) {
				avgVolume_3months += historicalData[historicalDataPoints - 1 - i].volume;
				daysWithin_3months++;
			}
		}
		avgVolume_3months = Math.round(avgVolume_3months / daysWithin_3months);

		//Wait Until Handlebars has finished
		var numberOf3MonthAverageVolCells=0;

		setInterval(function(){
			if(numberOf3MonthAverageVolCells==0) {
				$('td.averageVolume_3mnt').each(function(){
					numberOf3MonthAverageVolCells=numberOf3MonthAverageVolCells+1;
					$('td.averageVolume_3mnt').html(numberWithCommas(avgVolume_3months));
				});
			} else {
			
			}
		},100);
		
	});
</script>


