<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html dir="lrt">
<head>
<title>IR Solutions, Euroinvestor</title>
<link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.normalize.css?v=635808478203031177" />
<link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.style.css?v=635834468640737722" />
<link rel="stylesheet" href="//fast.fonts.net/cssapi/c8776784-5d75-432d-ae59-d50b8bc58a15.css" type="text/css" /><link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400,300,700" type="text/css" /><link rel="stylesheet" href="//fonts.googleapis.com/css?family=Oswald" type="text/css" />
<link rel="stylesheet" type="text/css" media="screen" href="ir.client.css?v=635850888605771978" />
</head>
<body>


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

    <div class="IRChartHTMLPlaceholder" style="height: 500px; clear: both;">
        <span class="ajaxLoader">Loading</span>
    </div>

    <div class="chartNavBarRange">
        <div class="chartChangePeriod">
            <div id="d1" class="activePeriod">1 d</div>
            <div id="d5">5 d</div>
            <div id="1m">1 m</div>
            <div id="m3">3 m</div>
            <div id="m6">6 m</div>
            <div id="y1">1 y</div>
            <div id="y2">2 y</div>
            <div id="y5" >5 y</div>
            <div id="max">Max</div>
        </div>
    </div>

</div>

<div class="disclaimer disclaimer-IRChart">
<span class="disclaimer-copyright">Copyright &copy; 1997-2015 <a href="http://www.euroinvestor.com/ir/">Euroinvestor</a> </span><span class="disclaimer-dataSource">and our data suppliers. </span><span class="disclaimer-delayed">Data delayed by 15-20 min.</span><span class="disclaimer-terms"> <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">See Terms of use</a></span></div>
<script type="text/javascript" src="/includes/js/libs/jquery1-8-3.min.js?v=635810177706204834"></script>
<script type="text/javascript" src="ir.client.js?v=635847531398927265"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.js?v=635851730186174492"></script>
<script type="text/javascript" src="/inc/scripts/bootstrap/3_2_0/bootstrap.min.js?v=635808478207695096"></script>
<script type="text/javascript" src="/includes/js/libs/handlebars1-3-0.min.js?v=635808478214120447"></script>
<script type="text/javascript" src="/includes/js/libs/moment2-7-0.min.js?v=635808478220995253"></script>
<script type="text/javascript" src="/includes/js/libs/moment-timezone0-3-1.min.js?v=635808478220995253"></script>
<script type="text/javascript" src="/inc/scripts/moment/moment-timezone-with-data-2010-2020.min.js?v=635808478211933009"></script>
<script type="text/javascript" src="/inc/scripts/browserSupport/respond.min.js?v=635808478207851217"></script>
<script type="text/javascript" src="/inc/scripts/ir.reset.js?v=635808478206445019"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.behaviour.js?v=635851685075409570"></script>
<script type="text/javascript" src="ir.util.data.js?v=635851726211716047"></script>
<script type="text/javascript" src="/includes/js/libs/highstock-2-0-4.js?v=635808478220057902"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.draw.js?v=635851715504146151"></script>
</body>
</html>



<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
     <table class="IRQuoteModule IRDetailedSharePrice table-look horizontal responsive">
            {{#headers}}
            <tr>
                <th class="Header column-first symbol">{{t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}}</th>
                <th class="Header bid">{{t_bid}}</th>
                
                <th class="Header ask">{{t_ask}}</th>
                <th class="Header volume">{{t_volume}}</th>
                
                <th class="Header column-last time">{{t_updated}}</th>
            </tr>
        {{/headers}}
            <tr>
                <td class="Data column-first symbol">{{stocks/symbol}}</td>
                <td class="Data last">{{decimals stocks/last}} {{showCurrency}}</td>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
                
                <td class="Data bid">{{decimals stocks/bid}}</td>
                
                <td class="Data ask">{{decimals stocks/ask}}</td>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
                
                <td class="Data column-last time">{{showDateTime stocks/timestamp}}</td>
            </tr>
    </table>
</script>