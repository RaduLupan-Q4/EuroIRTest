<base href="http://ir.euroinvestor.com/solutions/ElectraEquity/2362/detailedshareprice.aspx" target="_blank">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html dir="lrt">
<head>
<title>IR Solutions, Euroinvestor</title>
<link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.normalize.css?v=635808478203031177" />
<link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.style.css?v=635888065011828445" />
<link rel="stylesheet" type="text/css" href="http://fast.fonts.net/cssapi/d62c0329-9fcc-43ae-b445-59557b0dbc19.css"/>
<link rel="stylesheet" type="text/css" media="screen" href="ir.client.css?v=635628022893601842" />
</head>
<body>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRMiniquote'];
</script>

<script id="IRMiniquoteTemplate" type="text/x-handlebars-template">

    <div class="IRMiniquoteChartPlaceholder"></div>

</script>

<div class="IRQuoteHorizontalModule"></div>

<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">
    <div class="divideLine horizontal"></div>
    <h3 class="horizontal-header">Record</h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header symbol">{{t_symbol}}</th>
            <th class="Header exchange">{{t_exchange}}</th>
            <th class="Header currency">{{t_currency}}</th>
            <th class="Header shares-out">{{t_shares_outstanding}}</th>
            <th class="Header date">{{t_date}}</th>
            <th class="Header time">{{t_time}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Header symbol">{{symbol}}</td>
            <td class="Data exchange">{{exchangeName}}</td>
            <td class="Data currency">{{currency}}</td>
            <td class="Data shares-out">{{decimals shareMillions}}m</td>
            <td class="Data date">{{showDate timestamp}}</td>
            <td class="Data time">{{showTime time}}</td>
        </tr>
        {{/stocks}}
    </table>

    <h3 class="horizontal-header" style="margin-top: 0 !important; width: 100%; float: left;">Share Price Summary</h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header last">{{t_last}}</th>
            <th class="Header column-first change">{{t_day}} {{t_change}}</th>
            <th class="Header bid">{{t_bid}}</th>
            <th class="Header ask">{{t_ask}}</th>
            <th class="Header divided">{{t_dividend}} {{t_yield}}</th>
            <th class="Header market-cap">{{t_market_cap}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data last">{{decimals last}}</td>
            <td class="Data column-first change">{{decimals change}}</td>
            <td class="Data bid">{{decimals bid}}</td>
            <td class="Data ask">{{decimals ask}}</td>
            <td class="Data change">{{changePercent}}%</td>
            <td class="Data market-cap">{{showLondonMarketCapM marketCap}}m</td>
        </tr>
        {{/stocks}}
    </table>

    <h3 class="horizontal-header" style="margin-top: 0 !important; width: 100%; float: left;">Share Price Markets Data</h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
    {{#headers}}
    <tr>
        <th class="Header last">{{t_last}}</th>
        <th class="Header prev-close">{{t_prev_close}} (p)</th>
        <th class="Header high">{{t_day}} {{t_high}}</th>
        <th class="Header low">{{t_day}} {{t_low}}</th>
        <th class="Header high52week">{{t_52w_high}}</th>
        <th class="Header low52week">{{t_52w_low}}</th>
        <th class="Header volume">{{t_volume}}</th>
    </tr>
    {{/headers}} {{#stocks}}
    <tr>
        <td class="Data last">{{decimals last}}</td>
        <td class="Data prev-close">{{decimals prevClose}}</td>
        <td class="Data high">{{decimals high}}</td>
        <td class="Data low">{{decimals low}}</td>
        <td class="Data high52week">{{decimals high52Week}}</td>
        <td class="Data low52week">{{decimals low52Week}}</td>
        <td class="Data volume">{{toLocal volume}}</td>
    </tr>
    {{/stocks}}
</table>

    <h3 class="vertical-header">Record</h3>
    <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">

        <tr>
            {{#headers}}
            <th class="Header symbol">{{t_symbol}}</th>
            {{/headers}}
           {{#stocks}}
            <td class="Data symbol">{{symbol}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header exchange">{{t_exchange}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data exchange">{{exchangeName}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header currency">{{t_currency}}</th>
            {{/headers}}
           {{#stocks}}
            <td class="Data currency">{{currency}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header shares-out">{{t_shares_outstanding}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data shares-out">{{decimals shareMillions}}m</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Data date">{{t_date}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data date">{{showDate timestamp}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header time">{{t_time}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data time">{{showTime time}}</td>
            {{/stocks}}
        </tr>

    </table>

    <h3 class="vertical-header" style="margin-top: 0 !important; width: 100%; float: left;">Share Price Summary</h3>
    <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">

        <tr>
            {{#headers}}<th class="Header last">{{t_last}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data last column-first">{{decimals last}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header column-first change">{{t_day}} {{t_change}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data column-first change">{{decimals change}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header bid">{{t_bid}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data bid">{{decimals bid}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header ask">{{t_ask}} (p)</th>
            {{/headers}}
           {{#stocks}}
           <td class="Data ask">{{decimals ask}}</td>
            {{/stocks}}

        </tr>
        <tr>
            {{#headers}}
            <th class="Header divided">{{t_dividend}} {{t_yield}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data change">{{changePercent}}%</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header market-cap">{{t_market_cap}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data market-cap">{{showLondonMarketCapM marketCap}}m</td>
            {{/stocks}}
        </tr>
    </table>
    <h3 class="vertical-header" style="margin-top: 0 !important; width: 100%; float: left;">Share Price Markets Data</h3>
    <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}}
            <th class="Header last">{{t_last}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data last">{{decimals last}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header prev-close">{{t_prev_close}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data prev-close">{{decimals prevClose}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header high">{{t_day}} {{t_high}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data high">{{decimals high}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low">{{t_day}} {{t_low}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data low">{{decimals low}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header high52week">{{t_52w_high}} (p)</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data high52week">{{decimals high52Week}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low52week">{{t_52w_low}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data low52week">{{decimals low52Week}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header volume">{{t_volume}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data volume">{{toLocal volume}}</td>
            {{/stocks}}
        </tr>

    </table>


    <!-- <h3 class="horizontal-header">Shareprice Throughout the day</h3>
    <div class="iframe-wrapper" style="height: 1208px;">
        <div class="divideLine"></div>
        <iframe src="http://ir1.euroinvestor.com/asp/ir/thegymgroup/detailedSharePrice.aspx" style="width: 100%; border: none; height: 1208px;"></iframe>
    </div> -->

</script>

<div class="disclaimer disclaimer-IRDetailedSharePrice">
<span class="disclaimer-copyright">Copyright &copy; 1997-2016 <a href="http://www.euroinvestor.com/ir/">Euroinvestor</a> </span><span class="disclaimer-dataSource">and our data suppliers. </span><span class="disclaimer-delayed">Data delayed by 15-20 min.</span><span class="disclaimer-terms"> <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">See Terms of use</a></span></div>
<script type="text/javascript" src="/includes/js/libs/jquery2-1-4.min.js?v=635808478220682775"></script>
<script type="text/javascript" src="ir.client.js?v=635884543752230826"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.js?v=635889825208297564"></script>
<script type="text/javascript" src="/inc/scripts/bootstrap/3_2_0/bootstrap.min.js?v=635793031199586841"></script>
<script type="text/javascript" src="/includes/js/libs/handlebars1-3-0.min.js?v=635808478214120447"></script>
<script type="text/javascript" src="/includes/js/libs/moment2-7-0.min.js?v=635808478220995253"></script>
<script type="text/javascript" src="/includes/js/libs/moment-timezone0-3-1.min.js?v=635808478220995253"></script>
<script type="text/javascript" src="/inc/scripts/moment/moment-timezone-with-data-2010-2020.min.js?v=635808478211933009"></script>
<script type="text/javascript" src="/inc/scripts/browserSupport/respond.min.js?v=635793031199506909"></script>
<script type="text/javascript" src="/inc/scripts/ir.reset.js?v=635793031198936378"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.behaviour.js?v=635889809206474823"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.data.js?v=635888936510309995"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.draw.js?v=635888936486174890"></script>
</body>
</html>


<script type="text/javascript">

    $(document).ready(function () {

        setTimeout(function () {
            $('.IRDetailedSharePrice td').each(function () {

                midPrice = Number($('.last').eq(1).text(), 10),
                prevClose = Number($('.prev-close').eq(1).text(), 10),

                midPriceDiff = Number(midPrice - prevClose).toFixed(2);
                $('td.mid-change').eq(3).text(midPriceDiff);

                diffPercentage = Number((midPriceDiff * 100) / prevClose).toFixed(2);
                $('td.mid-changePercent').eq(3).text(diffPercentage);

            });

        }, 500);

    });

</script>