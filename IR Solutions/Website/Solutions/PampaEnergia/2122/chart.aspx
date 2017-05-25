<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare', 'IRChartNews', 'StockDataInstrumentTypeOther'];
</script>

<div class="IRQuoteModule"></div>
<br />
<div class="IRChartToolMenu IRChartChangeListing"></div><br />
 
<div class="IRChartModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
            {{#headers}}
            <tr>
                <th class="Header column-first symbol">{{t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}}</th>
                <th class="Header bid">{{t_bid}}</th>
                <th class="Header ask">{{t_ask}}</th>
                <th class="Header volume">{{t_volume}}</th>
                <th class="Header high">{{t_52w_high}}</th>
                <th class="Header low">{{t_52w_low}}</th>
                <th class="Header market-cap">{{t_market_cap}}</th>
                <th class="Header date">{{t_date}}</th>
                <th class="Header column-last time">{{t_time}}</th>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="Data column-first symbol">{{symbol}}</td>
                <td class="Data last">{{decimals last}} {{showCurrency}}</td>
                <td class="Data change"><span class="{{showArrow change}}"></span>{{decimals change}}</td>
                <td class="Data bid">{{decimals bid}}</td>
                <td class="Data ask">{{decimals ask}}</td>
                <td class="Data volume">{{toLocal volume}}</td>
                <td class="Data high">{{decimals high}}</td>
                <td class="Data low">{{decimals low}}</td>
                <td class="Data market-cap">{{showMarketCapDiluted marketCap 'ARSUSD' 25 15300000 '6.75'}}m</td>
                <td class="Data date">{{showDate timestamp}}</td>
                <td class="Data column-last time">{{showTime timestamp}}</td>
            </tr>
        {{/stocks}}
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

<script type="text/javascript">

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

</script>