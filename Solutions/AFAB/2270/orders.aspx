<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite(); 
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""inc/fonts/stylesheet.css""/>";
%>

<%= site.newHeader("IROrders") %>

<script type="text/javascript">
    var activeModules = ['IROrders'];
</script>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<div class="IROrdersModule"></div>

<%= site.newFooter("IROrders") %>

<script id="IROrdersTemplate" type="text/x-handlebars-template">
    <table class="IRToolQuoteTable table-look responsive">
        <tr>
            <th class="Header column-first bidSize">{{headers/t_bid_size}}
            </th>
            <th class="Header bid">{{headers/t_bid}}
            </th>
            <th class="Header bidCount">{{headers/t_amount}}
            </th>
            <th class="Header orderDepthBarLeft"></th>
            <th class="Header orderDepthBarRight"></th>
            <th class="Header askCount">{{headers/t_amount}}
            </th>
            <th class="Header ask">{{headers/t_ask}}
            </th>
            <th class="Header askSize">{{headers/t_ask_size}}
            </th>
            <th class="Header column-last bidAskLevel">#
            </th>
        </tr>
        {{#data}}
            {{#data}}
                <tr>
                    <td class="Data column-first bidSize" bidSize="{{bidSize}}">{{bidSize}}</td>
                    <td class="Data bid">{{decimals bid}}</td>
                    <td class="Data bidCount">{{bidCount}}</td>
                    <td class="Data orderDepthBarLeft">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                <span class="sr-only"></span>
                            </div>
                        </div>
                    </td>
                    <td class="orderDepthBarRight">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                <span class="sr-only"></span>
                            </div>
                        </div>
                    </td>
                    <td class="Data askCount">{{askCount}}</td>
                    <td class="Data ask">{{decimals ask}}</td>

                    <td class="Data askSize" askSize="{{askSize}}">{{askSize}}</td>
                    <td class="Data column-last bidAskLevel">{{bidAskLevel}}</td>
                </tr>
        {{/data}}
        {{/data}}
    </table>
</script>


<script type="text/javascript">

    setInterval(function () {
        orderDepthBarWidth = 100;
        highestBidOrAskSize = 0;

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

        });

    }, 300);

</script>
