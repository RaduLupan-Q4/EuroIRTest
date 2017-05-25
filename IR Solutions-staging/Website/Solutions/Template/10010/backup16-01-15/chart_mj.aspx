
<html><head><title>IR Solutions, Euroinvestor</title><link rel="stylesheet" type="text/css" media="screen" href="http://ir.euroinvestor.com/inc/css/bootstrap/3_2_0/bootstrap.min.css" /><link rel="stylesheet" type="text/css" media="screen" href="http://ir.euroinvestor.com/inc/css/ir.normalize.css?v=504911268000000000" /><link rel="stylesheet" type="text/css" media="screen" href="http://ir.euroinvestor.com/inc/css/ir.style.css?v=504911268000000000" /><link rel="stylesheet" type="text/css" media="screen" href="ir.client.css?v=635570121376087529" /></head></body>



<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChartHTML'];
</script>

<div class="IRQuoteModule"></div>

<div class="ToolMenu IRChangeListing"></div>

<div class="IRChartOuter">

    <div class="IRChartHeader">
        <div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>
        <div class="IRChartCurrency">&nbsp;</div>
    </div>

    <div class="IRChartHTMLPlaceholder" style="height: 500px; clear: both;">
        <span class="ajaxLoader">Loading</span>
    </div>

    <div class="chartNavBarRange">
        <div class="chartChangePeriod">
            <!--<div id="d1">1 d</div>-->
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


<div class="disclaimer disclaimer-IRChart"><span class="disclaimer-copyright">Copyright &copy; 1997-2015 <a href="http://www.euroinvestor.com/ir/">Euroinvestor</a> </span><span class="disclaimer-dataSource">and our data suppliers. </span><span class="disclaimer-delayed">Data delayed by 15-20 min.</span><span class="disclaimer-terms"> <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">See Terms of use</a></span></div><script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" /></script><script type="text/javascript" src="ir.client.js?v=635569325935934798" /></script><script type="text/javascript" src="http://ir.euroinvestor.com/inc/scripts/ir.util.js?v=635563984376361182" /></script><script type="text/javascript" src="http://ir.euroinvestor.com/inc/scripts/bootstrap/3_2_0/bootstrap.min.js" /></script><script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.3.0/handlebars.min.js" /></script><script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js" /></script><script type="text/javascript" src="http://ir.euroinvestor.com/inc/scripts/browserSupport/respond.min.js" /></script><script type="text/javascript" src="http://ir.euroinvestor.com/inc/scripts/ir.reset.js?v=635439574943657854" /></script><script type="text/javascript" src="http://ir.euroinvestor.com/inc/scripts/ir.behaviour.js?v=635520135999048231" /></script><script type="text/javascript" src="http://ir.euroinvestor.com/inc/scripts/defaultTranslations.js?v=635512322868823728" /></script><script type="text/javascript" src="http://ir.euroinvestor.com/inc/scripts/chartHTML/highstock-2-0-4.js" /></script><script type="text/javascript" src="http://ir.euroinvestor.com/inc/scripts/ir.data.util.js?v=635561370278776643" /></script><script type="text/javascript" src="http://ir.euroinvestor.com/inc/scripts/ir.draw.util.js?v=635561370442582497" /></script></body></html>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRToolQuoteTable table-look table-look-horizontal quote quote-horizontal responsive-horizontal">
        {{#headers}}
            <tr>
                <th importance="95" class="IRToolQuoteTableItem Header column-first">{{t_symbol}}</th>
                <th importance="90" class="IRToolQuoteTableItem Header">{{t_last}}</th>
                <th importance="75" class="IRToolQuoteTableItem Header">{{t_change}}</th>
                <th importance="85" class="IRToolQuoteTableItem Header">{{t_bid}}</th>
                <th importance="85" class="IRToolQuoteTableItem Header">{{t_mid}}</th>
                <th importance="80" class="IRToolQuoteTableItem Header">{{t_ask}}</th>
                <th importance="75" class="IRToolQuoteTableItem Header">{{t_volume}}</th>
                <th importance="70" class="IRToolQuoteTableItem Header">{{t_high}}</th>
                <th importance="65" class="IRToolQuoteTableItem Header">{{t_low}}</th>
                <th importance="60" class="IRToolQuoteTableItem Header column-last">{{t_date}}</th>
                <th importance="50" class="IRToolQuoteTableItem Header column-last">{{t_time}}</th>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="IRToolQuoteTableItem Data Symbol column-first">{{symbol}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals last}} {{showCurrency}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals change}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals bid}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals mid}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals ask}}</td>
                <td class="IRToolQuoteTableItem Data">{{toLocal volume}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals high}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals low}}</td>
                <td class="IRToolQuoteTableItem Data Timestamp column-last">{{showDate timestamp}}</td>
                <td class="IRToolQuoteTableItem Data Timestamp column-last">{{showTime timestamp}}</td>
            </tr>
        {{/stocks}}
    </table>
</script>
