<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><title>IR Solutions, Euroinvestor</title><link rel="stylesheet" type="text/css" media="screen" href="/inc/css/bootstrap/3_2_0/bootstrap.min.css" /><link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.normalize.css?v=504919268000000000" /><link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.style.css?v=504011268000000000" /><link rel="stylesheet" type="text/css" href="http://fast.fonts.net/cssapi/d62c0329-9fcc-43ae-b445-59557b0dbc19.css"/><link rel="stylesheet" type="text/css" media="screen" href="ir.client.css?v=635628022893601842" /></head><body>
<style>
.chartNavBarRange {	
position:absolute;
top:5px;
width:100%;
}
.chartChangePeriod {	
position:absolute;	
top:0px;
width:100%;
}
.chartChangePeriod div {	
border:none;
width:20%;
display:inline-block!important;
background-color:White;
}

.activePeriod {	
background-color:White!important;
font-weight:bold!important;
color:black!important;
}
.IRToolQuoteTable {
margin-bottom:40px;display:none;
}
.IRChartClientName {
	border:1px solid White;
	background-color:White;
}
</style>
<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChartHTML'];
</script>

<div class="IRQuoteModule"></div>

<br />



<div class="IRChartOuter">

    <div class="IRChartHeader">
        <div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>
        <div class="IRChartCurrency">&nbsp;</div>
    </div>

    <div class="IRChartHTMLPlaceholder" style="height: 400px; min-width: 300px; clear: both;margin-top:30px;">
        <span class="ajaxLoader">Loading</span>
    </div>

    <div class="chartNavBarRange">
        <div class="chartChangePeriod">
            <div id="d5">1 week</div>
            <div id="m3">3 month</div>
            <div id="m6">6 month</div>
            <div id="y1" class="activePeriod">1 year</div>
            <div id="y2" class="">2 year</div>
        </div>
    </div>

    

</div>

<div class="disclaimer disclaimer-IRChart"><span class="disclaimer-copyright">Copyright &copy; 1997-2015 <a href="http://www.euroinvestor.com/ir/">Euroinvestor</a> </span><span class="disclaimer-dataSource">and our data suppliers. </span><span class="disclaimer-delayed">Data delayed by 15-20 min.</span><span class="disclaimer-terms"> <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">See Terms of use</a></span></div><script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script><script>window.jQuery || document.write('<script src="/inc/scripts/jquery/jquery-1.8.2.min.js"><\/script>')</script><script type="text/javascript" src="ir.client.js?v=635633334814872686" /></script><script type="text/javascript" src="/inc/scripts/core/ir.util.js?v=635648635191526718" /></script><script type="text/javascript" src="/inc/scripts/bootstrap/3_2_0/bootstrap.min.js" /></script><script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.3.0/handlebars.min.js" /></script><script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js" /></script><script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.3.1/moment-timezone.min.js" /></script><script type="text/javascript" src="/inc/scripts/browserSupport/respond.min.js" /></script><script type="text/javascript" src="/inc/scripts/moment/moment-timezone-with-data-2010-2020.min.js" /></script><script type="text/javascript" src="/inc/scripts/ir.reset.js?v=635439574943657854" /></script><script type="text/javascript" src="/inc/scripts/core/ir.behaviour.js?v=635651626267520387" /></script><script type="text/javascript" src="/inc/scripts/core/ir.util.data.js?v=635647151502049348" /></script><script type="text/javascript" src="/inc/scripts/chartHTML/highstock-2-0-4.js" /></script><script type="text/javascript" src="/inc/scripts/core/ir.util.draw_mjtest.js?v=635651178137197593" /></script></body></html>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRToolQuoteTable table-look table-look-horizontal quote quote-horizontal responsive-horizontal">
        {{#headers}}
            <tr>
                <th importance="95" class="IRToolQuoteTableItem Header column-first">{{t_symbol}}</th>
                <th importance="90" class="IRToolQuoteTableItem Header">{{t_last}}</th>
                <th importance="75" class="IRToolQuoteTableItem Header">{{t_change}}</th>
                <th importance="85" class="IRToolQuoteTableItem Header">{{t_bid}}</th>
                <th importance="80" class="IRToolQuoteTableItem Header">{{t_ask}}</th>
                <th importance="75" class="IRToolQuoteTableItem Header">{{t_volume}}</th>
                <th importance="70" class="IRToolQuoteTableItem Header">{{t_high}}</th>
                <th importance="65" class="IRToolQuoteTableItem Header">{{t_low}}</th>
                <th importance="60" class="IRToolQuoteTableItem Header column-last">{{t_timestamp}}</th>
            </tr>
        {{/headers}}
            {{#stocks}}
            <tr>
                <td class="IRToolQuoteTableItem Data Symbol column-first">{{symbol}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals last}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals change}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals bid}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals ask}}</td>
                <td class="IRToolQuoteTableItem Data">{{toLocal volume}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals high}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals low}}</td>
                <td class="IRToolQuoteTableItem Data Timestamp column-last">{{showDateTime timestamp}}</td>
            </tr>
        {{/stocks}}
    </table>
</script>