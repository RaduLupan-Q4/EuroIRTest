
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html dir="lrt">
<head>
<title>IR Solutions, Euroinvestor</title>
<link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.normalize.css?v=635808478203031177" />
<link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.style.css?v=635814545104915227" />

<link rel="stylesheet" type="text/css" media="screen" href="ir.client.css?v=635798324735430040" />
</head>
<body>


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
    </div>

</script>

<div class="disclaimer disclaimer-IRChart">
<span class="disclaimer-copyright">Copyright &copy; 1997-2015 <a href="http://www.euroinvestor.com/ir/">Euroinvestor</a> </span><span class="disclaimer-dataSource">and our data suppliers. </span><span class="disclaimer-delayed">Data delayed by 15-20 min.</span><span class="disclaimer-terms"> <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">See Terms of use</a></span></div>
<script type="text/javascript" src="/includes/js/libs/jquery1-8-3.min.js?v=635810177706204834"></script>
<script type="text/javascript" src="ir.client.js?v=635736827545472580"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util_mjtest.js?v=635817344370120533"></script>
<script type="text/javascript" src="/inc/scripts/bootstrap/3_2_0/bootstrap.min.js?v=635808478207695096"></script>
<script type="text/javascript" src="/includes/js/libs/handlebars1-3-0.min.js?v=635808478214120447"></script>
<script type="text/javascript" src="/includes/js/libs/moment2-7-0.min.js?v=635808478220995253"></script>
<script type="text/javascript" src="/includes/js/libs/moment-timezone0-3-1.min.js?v=635808478220995253"></script>
<script type="text/javascript" src="/inc/scripts/moment/moment-timezone-with-data-2010-2020.min.js?v=635808478211933009"></script>
<script type="text/javascript" src="/inc/scripts/browserSupport/respond.min.js?v=635808478207851217"></script>
<script type="text/javascript" src="/inc/scripts/ir.reset.js?v=635808478206445019"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.behaviour.js?v=635815403525531175"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.data.js?v=635816417810234411"></script>
<script type="text/javascript" src="/includes/js/libs/highstock-2-0-4.js?v=635808478220057902"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.draw.js?v=635816416343601283"></script>
    <div class="testbutton">TEST</div>
</body>
</html>


<script type="text/javascript">
    var offset = 3; //gold

    $(function () {
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
		
    }
    function setActive() {
        $('.CUR, .arrow').removeClass('active');
        $('.CUR' + (parseInt(globalActiveListingIndex) - parseInt(offset))).addClass('active');
    }
	
	
	
	
	
	

setTimeout(function () {
    $('.testbutton').click(function () {//asdd
        //var a = globalRawStockData;

        var scaleFactor=100;
        var a = globalChartDom;
        var b = 2;
			
			/*
        while (globalChartDom.series.length > 0)
            globalChartDom.series[0].remove(true);*/
        $.when(requestClosePriceListingData).done(function (closePriceListingData) {
            var commodityClosePriceData = closePriceListingData.data[0].data;
            var arrayForChart = [];
            $.each(commodityClosePriceData, function (listingIndex, item) {
                arrayForChart.push([getUnixFromDate(item.date), item.closePrice * scaleFactor]);
            });
			
			
			
            globalChartDom.series[0].setData(arrayForChart,true);
			var globalSeries=globalChartListingStockDataOHLCV[0];
			var count=0;
			for(Count=0;Count<globalSeries.length;Count++)
			{
				globalChartListingStockDataOHLCV[0][Count][1]=globalChartListingStockDataOHLCV[0][Count][1]*scaleFactor;
				globalChartListingStockDataOHLCV[0][Count][2]=globalChartListingStockDataOHLCV[0][Count][2]*scaleFactor;
				globalChartListingStockDataOHLCV[0][Count][3]=globalChartListingStockDataOHLCV[0][Count][3]*scaleFactor;
				globalChartListingStockDataOHLCV[0][Count][4]=globalChartListingStockDataOHLCV[0][Count][4]*scaleFactor;
				
			}
			console.log(Count);
			/*
			globalChartDom.tooltip.options.formatter = function () {
                var date = Highcharts.dateFormat('%Y-%m-%d', this.x);
                var dateTime = Highcharts.dateFormat('%Y-%m-%dT%H:%M:%S', this.x);
                var unixDateTime = new moment(dateTime + '.0000000Z').valueOf();
                return updateTooltipComparisonDC(unixDateTime);
            }*/
			
            /*globalChartDom.addSeries({
                index: 0,
                data: arrayForChart,
                color: clientStyle.chart_ColourMain,
                yAxis: 0,
                visible: true,
                linkedTo: 0,
                type: clientStyle.chart_DrawMode
            }, false, 0);
*/
            globalChartDom.redraw();
			/*
    globalChartDom = getChartDOM(); 
    globalChartDom.destroy();
    drawIRChartHTML();
    drawActiveListingToChartIntraday();
*/
            var bss = 2;
        });
    });
}, 2000);
	
	
	
</script>
