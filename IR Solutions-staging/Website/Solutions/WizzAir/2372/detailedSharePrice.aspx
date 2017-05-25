<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRDetailedSharePrice") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
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
            <th class="Header market-cap">{{t_market_cap}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data last">{{decimals last}}</td>
            <td class="Data column-first change">{{decimals change}}</td>
            <td class="Data bid">{{decimals bid}}</td>
            <td class="Data ask">{{decimals ask}}</td>
            <td class="Data market-cap">{{showLondonMarketCapM marketCap}}£</td>
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

</script>

<%= site.newFooter("IRDetailedSharePrice") %>

<script type="text/javascript" src="js/iframeResizer.contentWindow.min.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("js/iframeResizer.contentWindow.min.js")).Ticks.ToString()%>"></script>

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


 <%--setTimeout(function () {
            $('.IRDetailedSharePrice tr').each(function () {
               
                var midPrice = parseInt($(this).find('.mid-price').text(), 10);
                var prevClose = parseInt($(this).find('.prev-close').text(), 10);

                console.log(Number($('.mid-price').text(), 10));
                console.log(Number($('.prev-close').text(), 10));

                if ($('.IRDetailedSharePrice td').val()){
                    midPriceDiff = Number(midPrice - prevClose).toFixed(2);
                    $('td.mid-change').text(midPriceDiff);

                    diffPercentage = Number((midPriceDiff * 100) / prevClose).toFixed(2);
                    $('td.mid-changePercent').eq(1).text(diffPercentage);
                }
            });
               

            $('.IRToolQuoteTable tr').each(function () {
                var bidSize = parseInt($(this).find('.bidSize').attr('bidSize'));
                var askSize = parseInt($(this).find('.askSize').attr('askSize'));
                if (parseFloat(bidSize) > parseFloat(highestBidOrAskSize)) {
                    highestBidOrAskSize = bidSize;

                }
                if (parseFloat(askSize) > parseFloat(highestBidOrAskSize)) {
                    highestBidOrAskSize = askSize;
                }
            });

            var widthPerBidAsk = orderDepthBarWidth / highestBidOrAskSize;

            $('.IRToolQuoteTable tr').each(function () {
                var bidSize = parseInt($(this).find('.bidSize').attr('bidSize'));
                var askSize = parseInt($(this).find('.askSize').attr('askSize'));
                $(this).find('.orderDepthBarLeft div div.progress-bar').css('width', Math.ceil(bidSize * widthPerBidAsk) + '%');
                $(this).find('.orderDepthBarRight div div.progress-bar').css('width', Math.ceil(askSize * widthPerBidAsk) + '%');

            });--%>