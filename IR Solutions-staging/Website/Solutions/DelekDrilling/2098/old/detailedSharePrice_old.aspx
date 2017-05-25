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
        {{#headers}}
        <tr>
            <th class="Header exchange column-first">{{t_exchange}}</th>
            <th class="Header symbol">{{t_symbol}}</th>
            <th class="Header updated">{{t_last_updated}}</th>
            <th class="Header currency column-last">{{t_currency}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data exchange column-first">{{exchangeName}}</td>
            <td class="Data symbol">{{symbol}}</td>
            <td class="Data updated">{{showDateTime time}}</td>
            <td class="Data currency column-last">{{currency}}</td>
        </tr>
        {{/stocks}}
    </table>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}}    
            <th class="Header exchange">{{t_exchange}}</th>
            {{/headers}}{{#stocks}}<td class="Data exchange">{{exchangeName}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}  
            <th class="Header symbol">{{t_symbol}}</th>
            {{/headers}}{{#stocks}}<td class="Data symbol">{{symbol}}</td>
            {{/stocks}} 
        </tr>
        <tr>
            {{#headers}} 
            <th class="Header updated">{{t_last_updated}}</th>
            {{/headers}}{{#stocks}}<td class="Data updated">{{showDateTime time}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header currency">{{t_currency}}</th>
            {{/headers}}{{#stocks}}<td class="Data currency">{{currency}}</td>
            {{/stocks}}
        </tr>
    </table>

    <!--<h3 class="horizontal-header" style="margin-top: 0 !important; width: 100%; float: left;">{{headers/t_share_info}}</h3>-->
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header change column-first">{{t_change}}</th>
            <th class="Header bid">{{t_bid}}</th>
            <th class="Header ask">{{t_ask}}</th>
            <th class="Header volume">{{t_volume}}</th>
            <th class="Header prev-close column-last">{{t_prev_close}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data change formatColour column-first">{{decimals change}} ({{decimals changePercent}}%)</td>
            <td class="Data bid">{{decimals bid}}</td>
            <td class="Data ask">{{decimals ask}}</td>
            <td class="Data volue">{{toLocal volume}}</td>
            <td class="Data prev-close column-last">{{decimals prevClose}}</td>
        </tr>
        {{/stocks}}
    </table>

    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}}<th class="Header change column-first">{{t_change}}</th>
            {{/headers}}{{#stocks}}<td class="Data change formatColour column-first">{{decimals change}} ({{decimals changePercent}}%)</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header bid">{{t_bid}}</th>
            {{/headers}}{{#stocks}}<td class="Data bid">{{decimals bid}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header ask">{{t_ask}}</th>
            {{/headers}}{{#stocks}}<td class="Data ask">{{decimals ask}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header volume">{{t_volume}}</th>
            {{/headers}}{{#stocks}}<td class="Data volue">{{toLocal volume}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header prev-close">{{t_prev_close}}</th>
            {{/headers}}{{#stocks}}<td class="Data prev-close">{{decimals prevClose}}</td>
            {{/stocks}}
        </tr>
    </table>


    <!--<h3 class="horizontal-header">{{headers/t_high}}/{{headers/t_low}} {{headers/t_share_info}}</h3>-->
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header prev-close column-first">{{t_prev_close}}</th>
            <th class="Header symbol">{{t_high}}</th>
            <th class="Header low">{{t_low}}</th>
            <th class="Header high52week">{{t_52w_high}}</th>
            <th class="Header low52week column-last">{{t_52w_low}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data last column-first">{{decimals last}}</td>
            <td class="Data high">{{decimals high}}</td>
            <td class="Data low">{{decimals low}}</td>
            <td class="Data high52week">{{decimals high52Week}}</td>
            <td class="Data low52week column-last">{{decimals low52Week}}</td>
        </tr>
        {{/stocks}}
    </table>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}}<th class="Header prev-close">{{t_prev_close}}</th>
            {{/headers}}{{#stocks}}<td class="Data last">{{decimals last}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header symbol"> {{t_high}}</th>
            {{/headers}}{{#stocks}}<td class="Data high">{{decimals high}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low"> {{t_low}}</th>
            {{/headers}}{{#stocks}}<td class="Data low">{{decimals low}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header high52week">{{t_52w_high}}</th>
            {{/headers}}{{#stocks}}<td class="Data high52week">{{decimals high52Week}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low52week">{{t_52w_low}}</th>
            {{/headers}}{{#stocks}}<td class="Data low52week">{{decimals low52Week}}</td>
            {{/stocks}}
        </tr>
    </table>

    <!--<h3 class="vertical-header">{{headers/t_exchange}}</h3>-->
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}} 
            <th class="Header exchange">{{headers/t_exchange}}</th>
            {{/headers}}
           {{#stocks}}
            <td class="Data exchange">{{exchangeName}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header symbol">{{t_symbol}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data symbol">{{symbol}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header currency">{{t_currency}}</th>
            {{/headers}}
           {{#stocks}}
            <td class="Data currency">{{currency}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header shares-out">{{t_shares_outstanding}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data shares-out">{{decimals shareMillions}}m</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header market-cap">{{t_market_cap}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data market-cap">£{{showLondonMarketCapM marketCap}}m</td>
            {{/stocks}}
        </tr>
    </table>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header exchange column-first">{{t_exchange}}</th>
            <th class="Header symbol">{{t_symbol}}</th>
            <th class="Header currency">{{t_currency}}</th>
            <th class="Header shares-out">{{t_shares_outstanding}}</th>
            <th class="Header market-cap column-last">{{t_market_cap}}</th>
        </tr>
        {{/headers}}
            {{#stocks}}
        <tr>
            <td class="Data exchange column-first">{{exchangeName}}</td>
            <td class="Data symbol">{{symbol}}</td>
            <td class="Data currency">{{currency}}</td>
            <td class="Data shares-out">{{decimals shareMillions}}m</td>
            <td class="Data market-cap column-last">£{{showLondonMarketCapM marketCap}}m</td>
        </tr>
        {{/stocks}}
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

		$('.avg_volume_Past3months').html(numberWithCommas(avgVolume_3months));
	});
</script>


