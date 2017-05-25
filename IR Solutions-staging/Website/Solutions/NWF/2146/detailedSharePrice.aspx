<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""https://fonts.googleapis.com/css?family=Roboto:400,700,300"" type=""text/css"" />";
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
   
    <h3 class="horizontal-header">Market summary</h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header symbol">EPIC</th>
            <th class="Header exchange">{{t_exchange}}</th>
            <th class="Header currency">{{t_currency}}</th>
            <th class="Header last-trade">Last trade</th>
            <%--  <th class="Header shares-out">{{t_shares_outstanding}}</th>
            <th class="Header market-cap">{{t_market_cap}}</th>--%>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data symbol">{{symbol}}</td>
            <td class="Data exchange">{{exchangeName}}</td>
            <td class="Data currency">{{currency}}</td>
            <td class="Data currency">{{showDateWithFormat timestamp 'DD/MM/YYYY HH:mm' }}</td>
            <%--<td class="Data shares-out">{{decimals shareMillions}}m</td>
            <td class="Data market-cap">£{{showLondonMarketCapM marketCap}}m</td>--%>
        </tr>
        {{/stocks}}
    </table>


    <h3 class="horizontal-header" style="margin-top: 0 !important; width: 100%; float: left;">Share price summary</h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header last">{{t_last}} (p)</th>
            <th class="Header change">{{t_change}} (p)</th>
            <th class="Header market-cap">{{t_market_cap}}</th>
            <th class="Header prev-close">{{t_prev_close}} (p)</th>
            
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data last column-first">{{decimals last}}</td>
            <td class="Data change formatColour">{{decimals change}}</td>
            <td class="Data market-cap">£{{showLondonMarketCapM marketCap}}m</td>
             <td class="Data prev-close">{{decimals prevClose}}</td>
            
        </tr>
        {{/stocks}}
        
    </table>

    <h3 class="horizontal-header" style="margin-top: 0 !important; width: 100%; float: left;">Share price market data</h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header prev-close">{{t_best_bid}} (p)</th>
            <th class="Header last">{{t_best_offer}} (p)</th>
            <th class="Header high">{{t_day_high}} (p)</th>
            <th class="Header low">{{t_day_low}} (p)</th>
            <th class="Header volume">{{t_volume}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data prev-close">{{decimals bid}}</td>
            <td class="Data last">{{decimals ask}}</td>
            <td class="Data high">{{decimals high}}</td>
            <td class="Data low">{{decimals low}}</td>
            <td class="Data volue">{{toLocal volume}}</td>
        </tr>
        {{/stocks}}

    </table>

    <h3 class="vertical-header">Market summary</h3>
    <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}}
            <th class="Header symbol">EPIC</th>
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
            <th class="Header last-trade">Last trade</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data currency">{{showDateWithFormat timestamp 'DD/MM/YYYY HH:mm' }}</td>
            {{/stocks}}
        </tr>

       <%-- <tr>
            {{#headers}}
            <th class="Header shares-out">{{t_shares_outstanding}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data shares-out">{{decimals shareMillions}}m</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header market-cap">{{t_market_cap}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data market-cap">£{{showLondonMarketCapM marketCap}}m</td>
            {{/stocks}}
        </tr>--%>

    </table>

    <h3 class="vertical-header" style="margin-top: 0 !important; width: 100%; float: left;">Share price summary</h3>
    <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}}<th class="Header last">{{t_last}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data last column-first">{{decimals last}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header change">{{t_change}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data change formatColour">{{decimals change}}</td>
            {{/stocks}}
        </tr>
         <tr>
            {{#headers}}<th class="Header market-cap">{{t_market_cap}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data market-cap">£{{showLondonMarketCapM marketCap}}m</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header bid">{{t_prev_close}} (p)</th>
            {{/headers}}
            {{#stocks}} <td class="Data prev-close">{{decimals prevClose}}</td>
            {{/stocks}}
        </tr>
       <%-- <tr>
            {{#headers}}
            <th class="Header ask">{{t_ask}} (p)</th>
            {{/headers}}
           {{#stocks}}<td class="Data ask">{{decimals ask}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header volume">{{t_volume}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data volue">{{toLocal volume}}</td>
            {{/stocks}}
        </tr>--%>



    </table>
    <h3 class="vertical-header" style="margin-top: 0 !important; width: 100%; float: left;">Share price market data</h3>
    <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}}
            <th class="Header ask">{{t_best_bid}} (p)</th>
            {{/headers}}
           {{#stocks}}<td class="Data ask">{{decimals bid}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header ask">{{t_best_offer}} (p)</th>
            {{/headers}}
           {{#stocks}}<td class="Data ask">{{decimals ask}}</td>
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
            {{#headers}}<th class="Header volume">{{t_volume}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data volue">{{toLocal volume}}</td>
            {{/stocks}}
        </tr>
    </table>
</script>

<%= site.newFooter("IRDetailedSharePrice") %>

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