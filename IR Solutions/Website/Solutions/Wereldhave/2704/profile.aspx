<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    
%>

<%= site.newHeader("IRQuote") %>


<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

    <!-- Profile -->
    <div class="profile-wrapper">

        <table class="IRTable table-look">
            <tbody>
                <tr>
                    <th class="Header symbol top">{{headers/t_symbol}}</th>
                    <td class="Data symbol top">{{stocks/symbol}}</td>
                </tr>
                <tr>
                    <th class="Header exchange">{{headers/t_exchange}}</th>
                    <td class="Data exchange">{{stocks/exchangeName}}</td>
                </tr>
                <tr>
                    <th class="Header min-trade">{{headers/t_minimum_trade}} ({{stocks/currency}})</th>
                    <td class="Data min-trade">{{decimals stocks/low}}</td>
                </tr>
                <tr>
                    <th class="Header shares-issued">{{headers/t_shares_outstanding}}</th>
                    <td class="Data shares-issued">{{stocks/shareMillions}} M</td>
                </tr>
                <tr>
                    <th class="Header market-cap">{{headers/t_market_cap}} ({{stocks/currency}})</th>
                    <td class="Data market-cap">{{showMarketCapM stocks/marketCap}} M</td>
                </tr>
                <tr>
                    <th class="Header no-of-trades">{{headers/t_no_of_trades_today}}</th>
                    <td class="Data no-of-trades">{{toLocal stocks/tradeCount}}</td>
                </tr>
            </tbody>
        </table>
    </div>

</script>

<%= site.newFooter("IRQuote") %>


<script>
  


    //var customXApplied = false;
 

    //function prepareCustomX() {
    //    if (!customXApplied) {
      
    //        if (typeof ($('.Data.market-cap').html()) != 'undefined') {
           
    //            var url = 'http://ir.euroinvestor.com/ServiceEngine/api/xml/reply/RequestTradeData?apiversion=1&solutionID=2534&instrumentid=1000735&customerKey=AholdGroup&amountOfTrades=100';

    //            $.ajax({
    //                url: url,
    //            })
    //            .done(function (data) {

    //                var prices = [];
    //                $('TradeEntry', data).each(function () {
    //                    prices.push($('TradePrice', this).text());
    //                })
                        
    //                var elements = tradeCount.length;

    //                $(".Data.no-of-trades").html(elements); 
    //                console.log('')
    //                //to show all data as xml loads
    //                $(".IRTable").css("visibility", "visible");
    //            });
    //            customXApplied = true;
    //        }
    //    }
    //}
    //$(function () {
    //    setInterval(function () {
    //        prepareCustomX();
    //    }, 200);
    //});


</script>
