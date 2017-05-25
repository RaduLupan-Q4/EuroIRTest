
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><title>IR Solutions, Euroinvestor</title><link rel="stylesheet" type="text/css" media="screen" href="/inc/css/bootstrap/3_2_0/bootstrap.min.css" /><link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.normalize.css?v=504911268000000000" /><link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.style.css?v=504911268000000000" /><link rel="stylesheet" type="text/css" media="screen" href="ir.client.css?v=635624636633362145" /><link rel="stylesheet" type="text/css" media="screen" href="http://www.investorcom.co.uk/SharePriceChart/EdenResearch.css" /></head><body>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChartHTML'];
    var activeFeatures = ['IRChartNews'];
</script>

<div class="IRQuoteModule"></div>

<div class="IRChartOuter">

    <div class="IRChartColour"></div>

    <div class="IRChartHeader">
        <div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>
        <div class="IRChartCurrency">&nbsp;</div>
    </div>

    <div class="IRChartHTMLPlaceholder" style="height: 500px; clear: both;">
        <span class="ajaxLoader">Loading</span>
    </div>

    <div class="chartNavBarRange">
        <div class="chartChangePeriod">
            <div id="d1">1 d</div>
            <div id="d5">5 d</div>
            <div id="m3">3 m</div>
            <div id="m6">6 m</div>
            <div id="y1" class="activePeriod">1 y</div>
            <div id="y2">2 y</div>
            <div id="y5">5 y</div>
            <div id="max">Max</div>
        </div>
    </div>
</div>


<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
                <th class="Header symbol column-first">{{headers/t_symbol}}</th>
                <th class="Header last">{{headers/t_last}}</th>
                <th class="Header change">{{headers/t_change}} (%)</th>
                <th class="Header bid">{{headers/t_bid}}</th>
                <th class="Header ask">{{headers/t_ask}}</th>
                <th class="Header volume">{{headers/t_volume}}</th>
                <th class="Header high">{{headers/t_high}}</th>
                <th class="Header low">{{headers/t_low}}</th>
                <th class="Header Timestamp column-last">{{headers/t_time}}</th>
            </tr>
            <tr>
                <td class="Data symbol column-first">{{stocks/symbol}}</td>
                <td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
                <td class="Data bid">{{decimals stocks/bid}}</td>
                <td class="Data ask">{{decimals stocks/ask}}</td>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
                <td class="Data high">{{decimals stocks/high}}</td>
                <td class="Data low">{{decimals stocks/low}}</td>
                <td class="Data Timestamp column-last">{{showDateTime stocks/timestamp}}</td>
            </tr>
    </table>
</script>


<div class="disclaimer disclaimer-IRChart"><span class="disclaimer-copyright">Copyright &copy; 1997-2015 <a href="http://www.euroinvestor.com/ir/">Euroinvestor</a> </span><span class="disclaimer-dataSource">and our data suppliers. </span><span class="disclaimer-delayed">Data delayed by 15-20 min.</span><span class="disclaimer-terms"> <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">See Terms of use</a></span></div><script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script><script>window.jQuery || document.write('<script src="/inc/scripts/jquery/jquery-1.8.2.min.js"><\/script>')</script><script type="text/javascript" src="ir.client.js?v=635653096430342114" /></script><script type="text/javascript" src="/inc/scripts/core/ir.util.js?v=635654019863632439" /></script><script type="text/javascript" src="/inc/scripts/bootstrap/3_2_0/bootstrap.min.js" /></script><script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.3.0/handlebars.min.js" /></script><script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js" /></script><script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.3.1/moment-timezone.min.js" /></script><script type="text/javascript" src="/inc/scripts/browserSupport/respond.min.js" /></script><script type="text/javascript" src="/inc/scripts/moment/moment-timezone-with-data-2010-2020.min.js" /></script><script type="text/javascript" src="/inc/scripts/ir.reset.js?v=635439574943657854" /></script><script type="text/javascript" src="/inc/scripts/core/ir.behaviour.js?v=635653879361617055" /></script><script type="text/javascript" src="/inc/scripts/core/ir.util.data.js?v=635653864095628204" /></script><script type="text/javascript" src="/inc/scripts/chartHTML/highstock-2-0-4.js" /></script><script type="text/javascript" src="/inc/scripts/core/ir.util.draw_mjTestNewsLabels.js?v=635653831561140050" /></script></body></html>
