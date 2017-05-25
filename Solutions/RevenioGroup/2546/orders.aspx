<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700""/>";

%>

<%= site.newHeader("IROrders") %>

<script type="text/javascript">
    var activeModules = ['IROrders'];
</script>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<div class="IROrdersModule"></div>

<script id="IROrdersTemplate" type="text/x-handlebars-template">
    <table class="IRToolQuoteTable table-look responsive">
        <tr>
            <th class="Header column-first bidSize">{{headers/t_volume}}
            </th>
            <th class="Header bid">{{headers/t_bid}}
            </th>
            <th class="Header orderDepthBarLeft"></th>
            <th class="Header orderDepthBarRight"></th>
            <th class="Header ask">{{headers/t_ask}}
            </th>
            <th class="Header askSize column-last">{{headers/t_volume}}
            </th>
        </tr>
        {{#data}} {{#data}}
        <tr>
            <td class="Data column-first bidSize" bidsize="{{bidSize}}">{{toLocal bidSize}}</td>
            <td class="Data bid">{{decimals bid}}</td>
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
            <td class="Data ask">{{decimals ask}}</td>

            <td class="Data askSize column-last" asksize="{{askSize}}">{{toLocal askSize}}</td>
        </tr>
        {{/data}} {{/data}}
       <tr class="totalVolume">
           <td colspan="1" class="totalVolumeBid"></td>
           <td colspan="4" class="TotalVolumeTitle">Total {{headers/t_volume}}</td>
           <td colspan="1" class="totalVolumeAsk"></td>
       </tr>
    </table>
</script>

<div class="ordersDisclaimer">
    <%= site.newFooter("IROrders") %>
</div>



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


        function calculateSum() {
            var bid = 0;

            $(".Data.bidSize").each(function () {
                var value = $(this).attr("bidSize");
                if (!isNaN(value) && value.length != 0) {
                    bid += parseFloat(value);
                }
            });
            $(".totalVolumeBid").html(bid);
            var ask = 0;
            $(".Data.askSize").each(function () {
                var value = $(this).attr("askSize");
                if (!isNaN(value) && value.length != 0) {
                    ask += parseFloat(value);
                }
            });
            $(".totalVolumeAsk").html(ask);
        };
        calculateSum();

        //Function to add thousand "," seperator
        function addCommas(nStr) {
            nStr += '';
            var x = nStr.split('.');
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            return x1 + x2;
        }
        
        
        $(".totalVolumeBid").each(function(){
            var currPriceVal = $(this).text();
            $(this).text(addCommas(currPriceVal));
        });
        
        $(".totalVolumeAsk").each(function(){
            var currPriceVal = $(this).text();
            $(this).text(addCommas(currPriceVal));
        });
    }, 300);

</script>




