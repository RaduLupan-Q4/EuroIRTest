<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
    var activeFeatures = ['IRChartCompare'];
</script>

<div class="IRQuoteModule"></div>
<br />
<iframe src="about:blank" id="oldIRFrame" scrolling="no" style="width:100%;border:none;height:650px"></iframe>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
                <th class="Header symbol column-first">{{headers/t_updated}}</th>
                <th class="Header last">{{headers/t_last}}</th>
                <th class="Header change">{{headers/t_change}}</th>
                <th class="Header bid">{{headers/t_bid}} - {{headers/t_ask}}</th>
                <th class="Header volume">{{headers/t_volume}}</th>
                <th class="Header low column-last">{{headers/t_open}}</th>
            </tr>
            <tr>
                <td class="Data symbol column-first">{{showDateWithFormat stocks/timestamp 'DD MMM HH:MM'}}</td>
                <td class="Data last blue">{{decimals stocks/last}}</td>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
                <td class="Data bid blue">{{decimals stocks/bid}} - {{decimals stocks/ask}}</td>
                <td class="Data volume blue">{{spaceInsteadOfDot stocks/volume}}</td>
                <td class="Data low column-last blue">{{decimals stocks/low}}</td>
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

<%= site.newFooter("IRChart") %>

<%--<script type="text/javascript">

    Handlebars.registerHelper('showMarketCapDiluted', function (number, currencyCrossStr, factor, warrants, strikePrice)
    {
        var marketCapDiluted = 0;
        var currency = globalRawStockData[globalActiveListingIndex].currency;
        var currencyCross = getCurrencyCrossFromStockOtherData(currencyCrossStr);
        console.log('currencyCross:' + currencyCross);
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
        var factor = 25; // Custom Value
        var warrants = 1695859459; // Custom Value Previous: 15261943

        var strikePrice = 6.75; // Custom Value
        var price = globalRawStockData[globalActiveListingIndex].last; // Last
        var marketCap = 0;
        var issuedSharesADR = issuedShares / factor;
        var issuedSharesTotal = issuedSharesADR + warrants;
        if (price >= strikePrice) {
            marketCap = (((issuedShares / factor) + warrants) - ((warrants * strikePrice) / price)) * price;
        } else {
            marketCap = ((price * issuedShares)) / factor;
        }
		//above calculation is disabled
		
        return (price * issuedShares);
    }

    function getMktCapDilutedBCBA(currencyCross) {
        var issuedShares = globalRawStockData[globalActiveListingIndex].shareMillions * 1000000; // Custom Value (or MarketCap Auto)
        var factor = 25; // Custom Value
        var warrants = 1695859459; // Custom Value
        var strikePrice = 6.75; // Custom Value
        var oficialFX = currencyCross; // Custom Value
        var price = globalRawStockData[globalActiveListingIndex].last; // Last
        var marketCap = 0;
        var issuedSharesTotal = issuedShares + (warrants * factor);
        if (price >= strikePrice) {
            marketCap = ((issuedShares + (warrants * factor)) - ((warrants * strikePrice * oficialFX) / price)) * (price / oficialFX);
        } else {
            marketCap = (price * issuedShares) / oficialFX;
        }
		//above calculation is disabled
        return (price * issuedShares) / oficialFX;
    }

</script>--%>
<script type="text/javascript">
    
    Handlebars.registerHelper('spaceInsteadOfDot', function (number) {
        var newNumber = formatNumberWithLocalDelimiters(number);
        var removeDot = newNumber.replace('.',' ');
        return removeDot;
    });

    var enURL="http://ir1.euroinvestor.com/asp/ir/Danone/2013/qc_f_nymotor.aspx";
    var frURL="http://ir1.euroinvestor.com/asp/ir/Danone/2013/qc_f_nymotor.aspx?language=fr";
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    if(getParameterByName('language')=='fr'){
        $('#oldIRFrame').attr('src',frURL);
    } else {
        $('#oldIRFrame').attr('src',enURL);
    }
    //HAX
    function buildQuoteTable() {
        debugStep("buildQuoteTable");
        var data = {
            headers: translations,
            stocks: globalRawStockData[globalActiveListingIndex]
        }
        if (typeof ($('.IRQuoteModule').html()) != "undefined" && typeof ($('#IRQuoteTableTemplate').html()) != "undefined") {
            $(".IRQuoteModule").html(menuTemplate_QuoteTable(data));
            applyCssClassesForResponsive();
        }
        if (typeof ($('.IRQuoteHorizontalModule').html()) != "undefined" && typeof ($('#IRQuoteTableHorizontalTemplate').html()) != "undefined") {
            $(".IRQuoteHorizontalModule").html(menuTemplate_QuoteTableHorizontal(data));
        }
        if (typeof ($('.IRQuoteVerticalModule').html()) != "undefined" && typeof ($('#IRQuoteTableVerticalTemplate').html()) != "undefined") {
            $(".IRQuoteVerticalModule").html(menuTemplate_QuoteTableVertical(data));
        }
    }
</script>