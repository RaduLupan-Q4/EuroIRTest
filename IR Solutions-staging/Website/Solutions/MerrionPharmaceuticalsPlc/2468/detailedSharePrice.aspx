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



    <h3 class="horizontal-header" style="margin-top: 0 !important; width: 100%; float: left;">{{headers/t_current_share_price_information}}</h3>

    <table class="IRDetailedSharePrice table-look horizontal responsive">
        {{#headers}}
        <tr>
            <th class="Header last">{{t_current}} (€)</th>
            <th class="Header change">{{t_change}} (€)</th>
            <th class="Header change">{{t_change}} (%)</th>
            <th class="Header bid">{{t_best_bid}} (€)</th>
            <th class="Header ask">{{t_best_offer}} (€)</th>
            <th class="Header volume">{{t_day_volume}}</th>

        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data last">{{decimals last}}</td>
            <td class="Data change">{{decimals change}}</td>
            <td class="Data changePercent">({{decimals changePercent}}%)</td>
            <td class="Data bid">{{decimals bid}}</td>
            <td class="Data ask">{{decimals ask}}</td>
            <td class="Data volume">{{toLocal volume}}</td>

        </tr>
        {{/stocks}}
        {{#headers}}
        <tr>
            <th class="Header last">{{t_prev_close}} (€)</th>
            <th class="Header change">Last trade (€)</th>
            <th class="Header change">{{t_day_high}} (€)</th>
            <th class="Header bid">{{t_day_low}} (€)</th>
            <th class="Header ask">{{t_52w_high}} (€)</th>
            <th class="Header volume">{{t_52w_low}} (€)</th>

        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data prevClose">{{decimals prevClose}}</td>
            <td class="Data change">{{decimals lastTradePrice}}</td>
            <td class="Data changePercent">{{decimals high}}</td>
            <td class="Data bid">{{decimals low}}</td>
            <td class="Data ask">{{decimals high52Week}}</td>
            <td class="Data volume">{{decimals low52Week}}</td>

        </tr>
        {{/stocks}}
    </table>


    <h3 class="vertical-header" style="margin-top: 0 !important; margin-bottom:0; width: 100%; float: left;">{{headers/t_current_share_price_information}}</h3>

    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            <th class="Header last">{{headers/t_current}} (€)</th>
            <td class="Data last">{{decimals stocks/last}}</td>
        </tr>
        <tr>
            <th class="Header change">{{headers/t_change}} (€)</th>
            <td class="Data last">{{decimals stocks/change}}</td>
        </tr>
        <tr>
            <th class="Header change">{{headers/t_change}} (%)</th>
            <td class="Data last">{{decimals stocks/changePercent}}</td>
        </tr>
        <tr>
            <th class="Header bid">{{headers/t_best_bid}} (€)</th>
            <td class="Data bid">{{decimals stocks/bid}}</td>
        </tr>
        <tr>
            <th class="Header ask">{{headers/t_best_offer}} (€)</th>
            <td class="Data ask">{{decimals stocks/ask}}</td>
        </tr>
        <tr>
            <th class="Header volume">{{headers/t_day_volume}}</th>
            <td class="Data volume">{{toLocal stocks/volume}}</td>
        </tr>
       
    </table>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
         <tr>
            <th class="Header last">{{headers/t_prev_close}} (€)</th>
            <td class="Data prevClose">{{decimals stocks/prevClose}}</td>
        </tr>
        <tr>
            <th class="Header change">Last trade (€)</th>
            <td class="Data change">{{decimals stocks/lastTradePrice}}</td>
        </tr>
        <tr>
            <th class="Header change">{{headers/t_day_high}} (%)</th>
            <td class="Data changePercent">{{decimals stocks/high}}</td>
        </tr>
        <tr>
            <th class="Header bid">{{headers/t_day_low}} (€)</th>
            <td class="Data bid">{{decimals stocks/low}}</td>
        </tr>
        <tr>
            <th class="Header ask">{{headers/t_52w_high}} (€)</th>
            <td class="Data ask">{{decimals stocks/high52Week}}</td>
        </tr>
        <tr>
            <th class="Header volume">{{headers/t_52w_low}} (€)</th>
            <td class="Data volume">{{decimals stocks/low52Week}}</td>
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