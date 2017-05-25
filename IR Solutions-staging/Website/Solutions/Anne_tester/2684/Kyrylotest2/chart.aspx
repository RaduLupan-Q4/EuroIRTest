<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
	IRSite site = new IRSite();
	site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""https://fonts.googleapis.com/css?family=Roboto:400,700,300"" type=""text/css"" />";
	%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart', 'IROrders'];
    var activeFeatures = ['IRChartCompare'];
</script>

<div class="IRQuoteModule">
</div>


<div class="clear"></div>


<div class="IRChartModule">
	<div class="IRChartColour"></div>
</div>
<br />


<div class="IROrdersModule"></div> <!--Orderbook, ShareInfo module-->




<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
<h2 class="allTools">{{headers/t_share_price}}</h2>
	<table class="IRQuoteModule table-look horizontal responsive">
			<tr>
				<th class="Header symbol column-first">{{headers/t_date}}</th>
				<th class="Header change ">+/-SEK</th>
				<th class="Header change">+/- %</th>
				<th class="Header last">{{headers/t_last}}</th>
				<th class="Header bid">{{headers/t_bid}}</th>
				<th class="Header ask">{{headers/t_ask}}</th>
				<th class="Header high">{{headers/t_high}}</th>
				<th class="Header low ">{{headers/t_low}}</th>
				<th class="Header column-last volume">{{headers/t_volume}}</th>
				
				
			</tr>
			<tr>
				<td class="Data symbol column-first">{{showDateTime stocks/timestamp}}</td>
				<td class="Data change {{formatColour stocks/change}}">{{stocks/change}}</td>
				<td class="Data change {{formatColour stocks/change}}">{{stocks/change}}</td>
				<td class="Data last">{{decimals stocks/last}}</td>
				<td class="Data bid">{{decimals stocks/bid}}</td>
				<td class="Data ask">{{decimals stocks/ask}}</td>
				<td class="Data high">{{decimals stocks/high}}</td>
				<td class="Data low ">{{decimals stocks/low}}</td>
				<td class="Data column-last volume">{{toLocal stocks/volume}}</td>
				
				
			</tr>
	</table>
	
	<table class="table-look vertical customResponsiveVertical">
		<tr>
			<th class="Header column-first symbol">
			{{headers/t_date}}</th>
				<td class="Data column-first symbol">{{showDateTime stocks/timestamp}}</td>
		</tr>
		<tr>
			<th class="IRToolQuoteTableItem Header">+/-SEK</th>
			<td class="IRToolQuoteTableItem Data {{formatColour stocks/change}}">{{stocks/change}}</td>
		</tr>
		<tr>
			<th class="IRToolQuoteTableItem Header">+/- %</th>
			<td class="IRToolQuoteTableItem Data {{formatColour stocks/change}}">{{stocks/change}}</td>
		</tr>
		<tr>
			<th class="IRToolQuoteTableItem Header">{{headers/t_last}}</th>
			<td class="IRToolQuoteTableItem Data">{{decimals stocks/last}}</td>
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
			<th class="IRToolQuoteTableItem Header">{{headers/t_high}}</th>
			<td class="IRToolQuoteTableItem Data">{{decimals stocks/high}}</td>
		</tr>
		<tr>
			<th class="IRToolQuoteTableItem Header">{{headers/t_low}}</th>
			<td class="IRToolQuoteTableItem Data">{{decimals stocks/low}}</td>
		</tr>
		<tr>
			<th class="IRToolQuoteTableItem Header">{{headers/t_volume}}</th>
			<td class="IRToolQuoteTableItem Data">{{toLocal stocks/volume}}</td>
		</tr>
	</table>
	

</script>


<script id="IRChartModuleTemplate" type="text/x-handlebars-template">
  
<!--
	<div class="IRChartNavigation">
	    {{{includeIRChartNavigation}}}
		{{{includeIRChartCompanyName}}}
		

	</div>
-->

	<div class="IRChartPlaceholderArea">
		{{{includeIRChartDomSettings}}}
		{{{includeIRChartPlaceholder}}}
		{{{includeIRChartChangePeriod 'y1'}}}
	</div>
 <!----------------------------------------------- ShareInfo------------------------------------------------>
    <div class="shareInfo">
        <div class="shareInfoHead"><span class="shareTxt">SHARE INFORMATION</span> <div class="greyLineLeft"></div></div>
        <table class="shareTableMain IRToolQuoteTable">
                <tr class="shareTableLeft Header">
                    <th shareTableLeft style="width: 95%"></th> <th class="shareTableLeft2" style="width: 5%"></th>
                </tr>
                <tr class="border">
                    <td class="shareTd Header column-first">MARKET CAPITALIZATION, MSEK </td> <td id="marketHB" id="newMarketHB" class="shareData column-last">{{ stocks/marketCap}}</td>
                </tr> 
<!--            showLondonMarketCapM-->
                <tr class="border">
                    <td class="shareTd Header column-first">SHARE PRICE, DEC 31, SEK</td> <td class="shareData column-last" id="sharePrice"></td>
                </tr>
                <tr class="border">
                    <td class="shareTd Header column-first">CHANGE IN % SINCE DEC 31</td> <td class="shareData column-last" id="changeInPercent"></td>
                </tr>
                <tr class="border">
                    <td class="shareTd Header column-first" >YEAR HIGH, SEK </td> <td class="shareData column-last" id="yearHigh">{{decimals stocks/highYear}}</td>
                </tr>
                <tr class="border">
                    <td class="shareTd Header column-first" >YEAR LOW, SEK</td> <td class="Data shareData column-last" id="yearLow">{{decimals stocks/lowYear}}</td>
                </tr>
                <tr class="border">
                    <td class="Data shareTd Header column-first">ALL TIME HIGH, SEK</td> <td class="Data shareData column-last"></td>
                </tr>
                <tr class="border">
                    <td class="Data shareTd Header column-first">ALL TIME HIGH DATE</td><td class="Data shareData column-last" ></td>
                </tr>

        </table>

    </div>
    <!-----------------------------------------------ShareInfo End------------------------------------------------>
</script>

<!-----------------------------------------------Orderbook------------------------------------------------>
<script id="IROrdersTemplate" type="text/x-handlebars-template">
  <div class="orderBookContainer">
   <div class="shareInfoHead"><span class="shareTxt">ORDERBOOK</span> <div class="greyLineLeft"></div></div>
    <table class="IRToolQuoteTable table-look responsive orderbook">
        <tr>
            <th class="Header column-first bidSize Border-right">{{headers/t_quantity}}
            </th>
            <th class="Header bid">{{headers/t_bid}}
            </th>
            <th class="Header ask ">{{headers/t_ask}}
            </th>
            <th class="Header askSize column-last">{{headers/t_quantity}}
            </th>
        </tr>
        {{#data}} {{#data}} 
        <tr>
            <td class="Data column-first bidSize Border-right" bidSize="{{bidSize}}">{{toLocal bidSize}}</td>
            <td class="Data bid">{{decimals bid}}</td>
            <td class="Data ask column-last">{{decimals ask}}</td>

            <td class="Data askSize column-last" askSize="{{askSize}}">{{toLocal askSize}}</td>
        </tr>
        {{/data}} {{/data}}
<!--       <tr class="totalVolume"><td colspan=1 class="totalVolumeBid"></td><td colspan=4 class="TotalVolumeTitle">Total {{headers/t_volume}}</td><td colspan=1 class="totalVolumeAsk"></td></tr>-->
    </table>
    
    </div>
    <!-----------------------------------------------Orderbook End------------------------------------------------>
    
   
    
</script>


<script type="text/javascript">

    setInterval(function () {
        orderDepthBarWidth = 100;
        highestBidOrAskSize = 0;

        $('.IRToolQuoteTable tr').each(function () {
            var bidSize = parseInt($(this).find('.bidSize').attr('bidSize'));
            var askSize = parseInt($(this).find('.askSize').attr('askSize'));
            if (parseFloat(bidSize) > parseFloat(highestBidOrAskSize)) {
                highestBidOrAskSize = bidSize;

            }
            if (parseFloat(askSize) > parseFloat(highestBidOrAskSize)) {
                highestBidOrAskSize = askSize;
            }
        });

        var widthPerBidAsk = orderDepthBarWidth / highestBidOrAskSize;

        $('.IRToolQuoteTable tr').each(function () {
            var bidSize = parseInt($(this).find('.bidSize').attr('bidSize'));
            var askSize = parseInt($(this).find('.askSize').attr('askSize'));
            $(this).find('.orderDepthBarLeft div div.progress-bar').css('width', Math.ceil(bidSize * widthPerBidAsk) + '%');
            $(this).find('.orderDepthBarRight div div.progress-bar').css('width', Math.ceil(askSize * widthPerBidAsk) + '%');

        });


        function calculateSum() {
            var bid = 0;

            $(".bidSize").each(function () {
                var value = $(this).text();
                if (!isNaN(value) && value.length != 0) {
                    bid += parseFloat(value);
                }
            });
            $(".totalVolumeBid").text(bid);
            var ask = 0;
            $(".askSize").each(function () {
                var value = $(this).text();
                if (!isNaN(value) && value.length != 0) {
                    ask += parseFloat(value);         
                }
            });
            $(".totalVolumeAsk").text(ask);
        };
        calculateSum();

    }, 1000);
    
    
    

</script>

<script id="IRCustomModule" type="text/x-handlebars-template">
   
    
                
</script>


<%= site.newFooter("IRChart") %>
