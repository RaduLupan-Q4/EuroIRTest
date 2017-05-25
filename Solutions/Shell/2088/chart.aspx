<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>
<script type="text/javascript" src="//s00.static-shell.com/etc.clientlibs/shell-common/components/components/iframe/clientlib/external.min.js"></script>
<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare', 'StockDataInstrumentTypeOther'];
</script>

<div class="IRQuoteHorizontalModule"></div>
<br />
<div class="IRChartModule"></div>


<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">

    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        <tr>
            <th class="Header">ISIN</th>
            <th class="Header">{{headers/t_prev_close}}</th>
            <th class="Header">{{headers/t_open}}</th>
            <th class="Header">{{headers/t_last}}</th>
            <th class="Header">{{headers/t_change}}</th>
        </tr>
        <tr>
            <td class="Data" dataType="ISIN" instrumentid="{{decimals stocks/instrumentID}}"></td>
            <td class="Data">{{stocks/currency}} {{decimals stocks/prevClose}}</td>
            <td class="Data">{{stocks/currency}} {{decimals stocks/open}}</td>
            <td class="Data">{{stocks/currency}} {{decimals stocks/last}}</td>
            <td class="Data">{{stocks/currency}} {{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</td>
        </tr>
        <tr>
            <th class="Header">{{headers/t_52w_high}}</th>
            <th class="Header">{{headers/t_52w_low}}</th>
            <th class="Header">{{headers/t_volume}}</th>
            <th class="Header">{{headers/t_market_cap}}</th>
            <th class="Header">{{headers/t_days_range}}</th>
        </tr>
        <tr>
            <td class="Data">{{stocks/currency}} {{decimals stocks/high52Week}}</td>
            <td class="Data">{{stocks/currency}} {{decimals stocks/low52Week}}</td>
            <td class="Data">{{toLocal stocks/volume}}</td>
            <!-- <td class="Data">{{stocks/currency}} {{showMarketCapM stocks/marketCap}} M</td> -->
            <td class="Data">USD {{showShellMarketCap stocks/instrumentID}} BLN</td>
            <td class="Data">{{stocks/currency}} {{decimals stocks/low}} - {{decimals stocks/high}}</td>
        </tr>
    </table>

    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
		<tr><th class="Header">ISIN</th><td class="Data" dataType="ISIN" instrumentid="{{decimals stocks/instrumentID}}"></td></tr>
		<tr><th class="Header">{{headers/t_prev_close}}</th><td class="Data">{{decimals stocks/prevClose}}</td></tr>
		<tr><th class="Header">{{headers/t_open}}</th><td class="Data">{{decimals stocks/open}}</td></tr>
		<tr><th class="Header">{{headers/t_last}}</th><td class="Data">{{decimals stocks/last}}</td></tr>
		<tr><th class="Header">{{headers/t_change}}</th><td class="Data">{{decimals stocks/change}} ({{decimals stocks/changePercent}})</td></tr>
		<tr><th class="Header">{{headers/t_52w_high}}</th><td class="Data">{{decimals stocks/high52Week}}</td></tr>
		<tr><th class="Header">{{headers/t_52w_low}}</th><td class="Data">{{decimals stocks/low52Week}}</td></tr>
		<tr><th class="Header">{{headers/t_volume}}</th><td class="Data">{{stocks/volume}}</td></tr>
		<tr><th class="Header">{{headers/t_market_cap}}</th><td class="Data">{{showMarketCapM stocks/marketCap}}</td></tr>
		<tr><th class="Header">{{headers/t_days_range}}</th><td class="Data">{{decimals stocks/low}} - {{decimals stocks/high}}</td></tr>
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
        {{{includeIRChartChangePeriod 'd1'}}}
    </div>

    <div class="DisNote">
        Historical comparison is only available in views showing 1 month and longer.
    </div>

    <div class="DisNote" style="margin-top: 15px;">
        <b>Note:</b><br />
        <div style="margin-left: 5px;">
            <p>(a) "Prev Close" is the stock price of the last transaction of the previous day’s trading</p>
            <p>(b) "Open" is the price at which the first share was traded for the current trading day</p>
            <p>(c) "Last" is the latest traded price of the shares (current price)</p>
            <p>(d) "Change" is the difference between the Prev Close price and the Current price (Last Price)</p>
            <p>(e) "52 weeks High/Low" price is the highest/lowest traded price during the last 52 weeks from today’s date, based on the previous day trading close price (excluding Intraday rates)</p>
            <p>(f) "Day's range" is the range within which the stock price moved up or down for the current trading day</p>
            <p>(g) "Volume" is the total no of shares traded during the current trading day</p>
            <p>(h) "Market Capital" = current share price X no of shares in issue. This has been converted to USD at last cross currency price</p>
        </div>
        Data is provided for information only and is not intended for trading purposes
    </div>

    <div style="clear: both;"></div>

</script>

<%= site.newFooter("IRChart") %>

<script type="text/javascript">
    var hasReplacedISIN = false;
    setInterval(function () {
        if (false == hasReplacedISIN) {
            if ($("td[dataType*='ISIN']").length > 0) {
                $("td[dataType*='ISIN']").each(function () {
                    var ISIN = '-';
                    var InstrumentID = parseInt($(this).attr('instrumentID'));
                    if (InstrumentID == 1000160) ISIN = 'GB00B03MLX29';
                    if (InstrumentID == 1000161) ISIN = 'GB00B03MM408';
                    if (InstrumentID == 1000162) ISIN = 'GB00B03MLX29';
                    if (InstrumentID == 1000163) ISIN = 'GB00B03MM408';
                    if (InstrumentID == 1000165) ISIN = 'US7802591070';
                    if (InstrumentID == 1000164) ISIN = 'US7802592060';

                    $(this).html(ISIN);
                });
                hasReplacedISIN = true;
            }
        }
    }, 100);

</script>

<script type="text/javascript">

    Handlebars.registerHelper('showShellMarketCap', function (listing) {

        var listingAIndex = null;
        var listingBIndex = null;
        var currencyCross = null;
        var divideFactor = null;

        switch (listing) {
            case 1000162: // Euronext A
            case 1000163: // Euronext B
                currencyCross = getCurrencyCrossOnlyFromStockOtherData("EURUSD");
                listingAIndex = 0;
                listingBIndex = 1;
                divideFactor = 1000000000;
                break;
            case 1000160: // London A
            case 1000161: // London B
                currencyCross = getCurrencyCrossOnlyFromStockOtherData("GBPUSD");
                listingAIndex = 2;
                listingBIndex = 3;
                divideFactor = 100000000000;
                break;
            case 1000164: // NYSE A
            case 1000165: // NYSE B
                currencyCross = 1
                listingAIndex = 4;
                listingBIndex = 5;
                divideFactor = 1000000000;
                break;
        }
        var marketCapA = globalRawStockData[listingAIndex].marketCap;
        var marketCapB = globalRawStockData[listingBIndex].marketCap;

        return formatDecimalDecimal1000(((marketCapA + marketCapB) * currencyCross) / divideFactor);
    });

</script>