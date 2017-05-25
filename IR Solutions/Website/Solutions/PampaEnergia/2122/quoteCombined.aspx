<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
	IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script type="text/javascript">
	var activeModules = ['IRQuote', 'IRChartHTMLMini', ];
	var activeFeatures = ['StockDataInstrumentTypeOther'];
</script>
<div class="IRQuoteCombinedModuleWrapper">
	<div class="IRQuoteCombinedModule instrumentSelection">

		<div id="selectedPampa" class="selectedPampa" style="float: left; width: 110px; height: 35px; text-align: left; line-height: 25px; cursor: pointer;">
			<span class="instrument CUR CUR0" id="1000182" onmouseover="reload(0);">
				<img alt="" style="position: relative; top: 2px" src="pics/logo_PampaEnergia.png" />
				(NYSE)</span>
			<span>&nbsp;/&nbsp;</span>
			<span class="instrument CUR CUR1" id="1000181" onmouseover="reload(1);">(BA)</span>
		</div>
		<div style="float: left; width: 11px;">
			<span class="separator">&nbsp;|&nbsp;</span>
		</div>


		<!-- /////////////////////////////////////// -->
		<div id="selectedPetrobras" style="float: left; width: 100px; text-align: left; height: 40px; line-height: 18px; cursor: pointer;">
			<span class="instrument CUR CUR8" id="1000881" onmouseover="reload(8);">
			<span id="petrobras">Petrobras Argentina</span><br>
				<span class="petrobrasNyse">(NYSE)</span></span>
			<span>&nbsp;/&nbsp;</span>
			<span class="instrument CUR CUR9" id="1000882" onmouseover="reload(9);">(BA)</span>
		</div>
		<div style="float: left; width: 11px;">
			<span class="separator">&nbsp;|&nbsp;</span>
		</div>

		<!-- /////////////////////////////////////// -->


		<div id="selectedPetroleraPampa" style="float: left; width: 105px; height: 25px; line-height: 20px; cursor: pointer;">
			<span class="instrument CUR CUR5" id="1000186" onmouseover="reload(5);">
				<img alt="" src="pics/logo_petroleraPampa2.png" style="margin-top: 2px;" /></span>
		</div>
		<div style="float: left; width: 11px;">
			<span class="separator">&nbsp;|&nbsp;</span>
		</div>

		<div id="selectedTGS" style="float: left; width: 85px; height: 25px; line-height: 25px; text-align: left; cursor: pointer;">
			<span class="instrument CUR CUR6" id="1000188" onmouseover="reload(6);">
				<img alt="" style="position: relative; top: 2px" src="pics/logo_TGS.png" />
				(NYSE)</span>
			<span>&nbsp;/&nbsp;</span>
			<span class="instrument CUR CUR7" id="1000187" onmouseover="reload(7);">(BA)</span>
		</div>
		<div style="float: left; width: 11px;">
			<span class="separator">&nbsp;|&nbsp;</span>
		</div>


		<div id="selectedEdenor" style="float: left; width: 85px; height: 40px; line-height: 30px; padding-top: 2px; text-align: left; cursor: pointer;">
			<span class="instrument CUR CUR2" id="1000183" onmouseover="reload(2);">
				<img alt="" src="pics/logo_Edenor2.png" />
				(NYSE)</span>
			<span>&nbsp;/&nbsp;</span>
			<span class="instrument CUR CUR3" id="1000184" onmouseover="reload(3);">(BA)</span>
		</div>
		<div style="float: left; width: 11px;">
			<span class="separator">&nbsp;|&nbsp;</span>
		</div>

		<div id="selectedTransener" style="float: left; width: 80px; height: 25px; line-height: 20px; cursor: pointer;">
			<span class="instrument CUR CUR4" id="1000185" onmouseover="reload(4);">
				<img alt="" src="pics/logo_Transener.png" style="margin-top: 2px;" /></span>
		</div>
		<div style="float: left; width: 11px;">
			<span class="separator">&nbsp;|&nbsp;</span>
		</div>



	</div>
	<div class="quoteCombinedWrapper">
		<div class="IRChartOuter">

			<div class="IRChartHeader">
				<div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>
				<div class="IRChartCurrency">&nbsp;</div>
			</div>

			<div class="IRChartHTMLPlaceholder IRChartHTMLMiniPlaceholder">
				<span class="ajaxLoader">Loading</span>
			</div>

		</div>
		<div class="IRQuoteModule"></div>
	</div>

	<div class="IRChartToolMenu IRChartChangeListing"></div>
	<br />

	<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

		<div class="IRQuoteModuleTable table-look responsive">
			<div class="content">
				<div class="tableHeader contentLine">{{stocks/name}}</div>
				<div class="contentLine">
					<div class="Header column-first last">{{headers/t_last}}</div>
					<div class="Data column-last latestPrice">{{decimals stocks/last}}</div>
				</div>

				<div class="contentLine">
					<div class="Header column-first latestChangeLabel">{{headers/t_change}}</div>
					<div class="Data column-last latestChange">{{showCurrency}} {{decimals stocks/change}} <span class="{{showArrow stocks/change}}"></span>{{decimals stocks/changePercent}} %</div>
				</div>
				<div class="contentLine">
					<div class="Header column-first marketCapLabel">{{headers/t_market_cap}}</div>
					<div class="Data column-last marketCap">{{showMarketCapDiluted marketCap 'ARSUSD' 25 15300000 '6.75'}}m</div>
				</div>
				<div>
					<div class="Data column-first timestamp">{{showDateWithFormat stocks/timestamp 'MMMM DD, YYYY'}}</div>
					<div class="Data column-last exchangeShort">{{headers/t_source}}: {{stocks/name}}</div>
				</div>
				<div>
					<div class="Data column-first informationUpdate">* {{headers/t_net_of_repurchases}}</div>
					<div class="Data informationUpdate">{{headers/t_data_is_at_least_15_min_delayed}}</div>
				</div>
			</div>

			<div class="selectedExchangeLink CUR0"><a href="//ir.euroinvestor.com/Solutions/PampaEnergia/2122/chart.aspx?listing=0" target="_blank" id="">{{headers/t_stock_chart}}</a></div>
			<div class="selectedExchangeLink CUR1"><a href="//ir.euroinvestor.com/Solutions/PampaEnergia/2122/chart.aspx?listing=1" target="_blank" id="">{{headers/t_stock_chart}}</a></div>
			<div class="selectedExchangeLink CUR2"><a href="//ir.euroinvestor.com/Solutions/PampaEnergia/2122/chart.aspx?listing=2" target="_blank" id="">{{headers/t_stock_chart}}</a></div>
			<div class="selectedExchangeLink CUR3"><a href="//ir.euroinvestor.com/Solutions/PampaEnergia/2122/chart.aspx?listing=3" target="_blank" id="">{{headers/t_stock_chart}}</a></div>
			<div class="selectedExchangeLink CUR4"><a href="//ir.euroinvestor.com/Solutions/PampaEnergia/2122/chart.aspx?listing=4" target="_blank" id="">{{headers/t_stock_chart}}</a></div>
			<div class="selectedExchangeLink CUR5"><a href="//ir.euroinvestor.com/Solutions/PampaEnergia/2122/chart.aspx?listing=5" target="_blank" id="">{{headers/t_stock_chart}}</a></div>
			<div class="selectedExchangeLink CUR6"><a href="//ir.euroinvestor.com/Solutions/PampaEnergia/2122/chart.aspx?listing=6" target="_blank" id="">{{headers/t_stock_chart}}</a></div>
			<div class="selectedExchangeLink CUR7"><a href="//ir.euroinvestor.com/Solutions/PampaEnergia/2122/chart.aspx?listing=7" target="_blank" id="">{{headers/t_stock_chart}}</a></div>
			<div class="selectedExchangeLink CUR8"><a href="//ir.euroinvestor.com/Solutions/PampaEnergia/2122/chart.aspx?listing=8" target="_blank" id="">{{headers/t_stock_chart}}</a></div>
			<div class="selectedExchangeLink CUR9"><a href="//ir.euroinvestor.com/Solutions/PampaEnergia/2122/chart.aspx?listing=9" target="_blank" id="">{{headers/t_stock_chart}}</a></div>
		</div>
	</script>
</div>

<%= site.newFooter("IRChartMini") %>


<script type="text/javascript">

	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;
		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');
			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	};




	function getLanguageParameter() {
		var language = '';
		language = getUrlParameter('language');

		if (language == 'es') {
			languageDeclared = true;
		}
		if (language == 'en') {

		}
		if (language === undefined) {
			language = 'en';
			//do nothing

		}
		$('.selectedExchangeLink a').each(function () {
			$(this).attr('href', $(this).attr('href') + '&language=' + language);
		});
	}


	var customXApplied = false;

	function prepareCustomX() {
		if ($('.selectedExchangeLink').length > 0) {
			if (!customXApplied) {

				getLanguageParameter();
			}
			customXApplied = true;
		}
	}

	// setInterval(function () {
	// prepareCustomX();

	// }, 1000);




	Handlebars.registerHelper('showMarketCapDiluted', function (number, currencyCrossStr, factor, warrants, strikePrice) {
		var marketCapDiluted = 0;

		var currency = globalRawStockData[globalActiveListingIndex].currency;
		var currencyCross = getCurrencyCrossFromStockOtherData(currencyCrossStr);

		if (currency == "USD") {
			marketCapDiluted = getMktCapDilutedADRs();
		}
		if (currency == "ARS") {
			marketCapDiluted = getMktCapDilutedBCBA(currencyCross);
		}
		marketCapDiluted = marketCapDiluted / 1000000;
		return currencyCrossStr.slice(3) + " " + formatDecimal(marketCapDiluted);
	});

	function getMktCapDilutedADRs() {
		//var issuedShares = 1314310895;
		var issuedShares = globalRawStockData[globalActiveListingIndex].shareMillions * 1000000; // Custom Value (or MarketCap Auto)
		var price = globalRawStockData[globalActiveListingIndex].last; // Last
		var factor = 1; // Custom Value
		marketCap = (price * issuedShares) / factor;

		//Below is disabled
		if (false) {

			var warrants = 1695859459; // Custom Value Previous: 15261943

			var strikePrice = 6.75; // Custom Value
			var marketCap = 0;
			var issuedSharesADR = issuedShares / factor;
			var issuedSharesTotal = issuedSharesADR + warrants;
			if (price >= strikePrice) {
				marketCap = (((issuedShares / factor) + warrants) - ((warrants * strikePrice) / price)) * price;
			} else {
				marketCap = (price * issuedShares) / factor;
			}
		}
		return marketCap;
	}

	function getMktCapDilutedBCBA(currencyCross) {
		var issuedShares = globalRawStockData[globalActiveListingIndex].shareMillions * 1000000; // Custom Value (or MarketCap Auto)
		var price = globalRawStockData[globalActiveListingIndex].last; // Last
		var oficialFX = currencyCross; // Custom Value
		var factor = 1; // Custom Value
		marketCap = (price * issuedShares) / oficialFX;
		if (false) {
			var warrants = 1695859459; // Custom Value
			var strikePrice = 6.75; // Custom Value
			var marketCap = 0;
			var issuedSharesTotal = issuedShares + (warrants * factor);
			if (price >= strikePrice) {
				marketCap = ((issuedShares + (warrants * factor)) - ((warrants * strikePrice * oficialFX) / price)) * (price / oficialFX);
			} else {
				marketCap = (price * issuedShares) / oficialFX;
			}
		}
		return marketCap;
	}


	function redrawIRChartHTMLMini() {
		//globalChartDom.destroy();
		drawIRChartMiniHTML();
		drawChartCurrency();
		drawActiveListingToIRMiniquoteChartHistorical();
		drawPlotLineToChart();
		drawChartHeadlineClientName();
	}

	var offset = 0; //gold

	$(function () {
		if (globalActiveListingIndex < 8) {
			offset = 0;//Silver
		}
		setActive();

	});

	function reload(i) {
		globalActiveListingIndex = i + offset;
		//redrawIRChartHTMLHistorical();
		initMomentTimezone();
		redrawIRChartHTMLMini();
		buildQuoteTable();
		setActive();
		setChartExtremes('historical', 90);
		getLanguageParameter();
		//$('.activePeriod').removeClass('activePeriod');
		//$('.IRChartChangePeriod #y1').addClass('activePeriod');


		//Update Interactive Chart Link
		if (document.querySelector('.active') !== null) {
			if (document.querySelector('.selectedExchangeLink.CUR0.active') !== null) {
				$('.selectedExchangeLink.CUR0').css('display', 'block');
			}
			else {
				$('.quoteCombinedWrapper .selectedExchangeLink.CUR0').css('display', 'none');
				$('.selectedExchangeLink.active').css('display', 'block');
			}
		}

	}
	function setActive() {
		$('.CUR, .arrow').removeClass('active');
		$('.CUR' + (parseInt(globalActiveListingIndex) - parseInt(offset))).addClass('active');
	}


	<%-- function updateStockChart(selectedInstrument)
	{
		instrId = selectedInstrument;		    
			
		var selectedDivClass;
		if (instrId == <%= quoteInstruments(0) %>) {
			selectedDivClass == "selectedPampa";
			interactiveURL = interactiveBaseURL + "?listing=0&language=<%= language%>";	        
		}		    
	
		if (instrId == <%= quoteInstruments(1) %>) {
			selectedDivClass == "selectedPampa";
			interactiveURL = interactiveBaseURL + "?listing=1&language=<%= language%>";
		}
	}--%>
</script>
