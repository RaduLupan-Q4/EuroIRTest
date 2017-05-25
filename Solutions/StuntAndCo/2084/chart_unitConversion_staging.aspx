<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
</script>
<div>
    <table class="tabs">
        <tr class="row">
            <th>
                <div class="CUR CUR0" onclick="reload(0);">
                    USD
                </div>
            </th>
            <th>
                <div class="CUR CUR1" onclick="reload(1);">
                    GBP
                </div>
            </th>
            <th>
                <div class="CUR CUR2" onclick="reload(2);">
                    EUR
                </div>
            </th>
        </tr>
        <tr class="row">
            <td>
                <div class="CUR0 arrow">&nbsp;
                </div>
            </td>
            <td>
                <div class="CUR1 arrow">&nbsp;
                </div>
            </td>
            <td>
                <div class="CUR2 arrow">&nbsp;
                </div>
            </td>
        </tr>
    </table>
</div>
<div class="IRQuoteModule"></div>

<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

    <table class="IRQuoteModule table-look table-look-horizontal responsive-flip-horizontal">
        <tr>
            <th class="Header {{stocks/name}} last column-first">{{headers/t_last}}</th>
            <th class="Header {{stocks/name}} change">{{headers/t_change}} (%)</th>
            <th class="Header {{stocks/name}} bid">{{headers/t_bid}}</th>
            <th class="Header {{stocks/name}} ask">{{headers/t_ask}}</th>
            <th class="Header {{stocks/name}} high">{{headers/t_high}}</th>
            <th class="Header {{stocks/name}} low">{{headers/t_low}}</th>
            <th class="Header {{stocks/name}} Timestamp column-last " id="hideH">{{headers/t_time}}</th>
        </tr>
        <tr>
            <td class="Data last column-first">{{showCurrencySymbol}} {{decimals stocks/last}} (per oz)</td>
            <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
            <td class="Data bid">{{decimals stocks/bid}}</td>
            <td class="Data ask">{{decimals stocks/ask}}</td>
            <td class="Data high">{{decimals stocks/high}}</td>
            <td class="Data low">{{decimals stocks/low}}</td>
            <td class="Data Timestamp column-last" id="hideD">{{showDateTime stocks/timestamp}}</td>
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
		<div class="unitSwitchButton_outer"><div id="unitSwitchButton_OZ" class="unitSwitchButton_active unitSwitchButton" scalefactor="1"><span class="activeCurrency">$</span> per oz<img class="unitSwitchButton_active_arrowdown" src="images/select.png" /></div><div id="unitSwitchButton_KG" scalefactor="0.02835" class="unitSwitchButton"><span class="activeCurrency">$</span> per kg</div></div>
    </div>

</script>

<%= site.newFooter("IRChart") %>

<script type="text/javascript">
    var offset = 3; //gold

	var selectedUnit='unitSwitchButton_OZ';
    $(function () {
		var chartHasFinishedLoading=false;
		setInterval(function(){
			if(!chartHasFinishedLoading)
			{
				if(typeof $('#unitSwitchButton_OZ').html()!='undefined')
				{
					chartHasFinishedLoading=true;
					$('#unitSwitchButton_OZ, #unitSwitchButton_KG').click(function(){
						selectedUnit=$(this).attr('id');
						setActive_units();
					
						var scaleFactor=parseFloat($('#'+selectedUnit).attr('scalefactor'));
						changeChartUnits(scaleFactor);
					});
				}
			}
		},100);
	
	
        if (globalActiveListingIndex < 3) {
            offset = 0;//Silver
        }
        setActive();
    });
    function reload(i) {
        globalActiveListingIndex = i + offset;
        redrawIRChartHTMLHistorical();
        buildQuoteTable();
        setActive();
		setChartExtremes('historical',360);
		$('.activePeriod').removeClass('activePeriod');
		$('.IRChartChangePeriod #y1').addClass('activePeriod');
		
		var activeCurrencyArray = ['$','£','€','$','£','€'];
		$('.activeCurrency').html(activeCurrencyArray[globalActiveListingIndex]);
		selectedUnit='unitSwitchButton_OZ';
		setActive_units();
    }
    function setActive() {
        $('.CUR, .arrow').removeClass('active');
        $('.CUR' + (parseInt(globalActiveListingIndex) - parseInt(offset))).addClass('active');
    }
	//------------------------------------------------------------------------------------------------
	

	function changeChartUnits(scaleFactor) {
		$.when(requestClosePriceListingData).done(function (closePriceListingData) {
			var commodityClosePriceData = closePriceListingData.data[globalActiveListingIndex].data;
			var arrayForChart = [];
			
			$.each(commodityClosePriceData, function (listingIndex, item) {
				arrayForChart.push([getUnixFromDate(item.date), item.closePrice * scaleFactor]);
			});
			globalChartDom.series[0].setData(arrayForChart,true);
			var globalSeries=globalChartListingStockDataOHLCV[globalActiveListingIndex];
			
			
			for(Iterator=0;Iterator<globalSeries.length-1;Iterator++)
			{
				for(IteratorOLHC=1;IteratorOLHC<=4;IteratorOLHC++){
					globalSeries[Iterator][IteratorOLHC]=commodityClosePriceData[Iterator].closePrice*scaleFactor;
				}
				
			}
			var a=2;
		});
	}
	function setActive_units() {
		$('.unitSwitchButton_active_arrowdown').remove();
		$('.unitSwitchButton_active').removeClass('unitSwitchButton_active');
		$('#'+selectedUnit).addClass('unitSwitchButton_active');
		$('.unitSwitchButton_active').append('<img class="unitSwitchButton_active_arrowdown" src="images/select.png" />');
	}
</script>
