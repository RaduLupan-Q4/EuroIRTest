<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite(); 
%>

<%= site.header("IROrders") %>

<script type="text/javascript">
    var activeModules = ['IROrders'];
</script>

<div class="IROrdersModule"></div>

<%= site.footer("IROrders") %>

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
                    <td class="Data column-last">{{bidAskLevel}}</td>
                </tr>
        {{/data}}
        {{/data}}
    </table>
</script>


<script type="text/javascript">

    setTimeout(function () {
        orderDepthBarWidth = 100;
        highestBidOrAskSize = 0;

        var bidArr = new Array();
        var askArr = new Array();


        $('.IRToolQuoteTable td.bidSize').each(function () {
            var isHighestNumber = $(this).html();
            if (parseFloat(isHighestNumber) > parseFloat(highestBidOrAskSize)) {
                highestBidOrAskSize = isHighestNumber;
            }
        });

        $('.IRToolQuoteTable td.askSize').each(function () {
            var isHighestNumber = $(this).html();
            if (parseFloat(isHighestNumber) > parseFloat(highestBidOrAskSize)) {
                highestBidOrAskSize = isHighestNumber;
            }
        });

        var widthPerBidAsk = orderDepthBarWidth / highestBidOrAskSize;

        $('.bidSize').each(function () {

            //var size = $(this).html();

            var size = parseInt($(this).attr('bidSize'));

            $(this).siblings().find('div.progress-bar').each(function () {
                if ($(this).css('float') == 'right') {
                    $(this).css('width', Math.ceil(size * widthPerBidAsk) + '%');
                }
            })
        })

        $('.askSize').each(function () {

            //var size = $(this).html();

            var size = parseInt($(this).attr('askSize'));

            $(this).siblings().find('.progress-bar').each(function () {
                if ($(this).css('float') != 'right') {
                    $(this).css('width', Math.ceil(size * widthPerBidAsk) + '%');
                }
            })
        })
    }, 300);

</script>
