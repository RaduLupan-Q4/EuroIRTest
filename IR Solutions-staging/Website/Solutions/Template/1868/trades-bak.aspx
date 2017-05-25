<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();

%>
<%= site.header("IROrders") %>
<div class="IRTradesModule"></div>

<script type="text/javascript">
    var activeModules = ['IRTrades'];
</script>

<script id="IRTradesTemplate" type="text/x-handlebars-template">
    <h2>Trades</h2>
    <table class="IRTradesModule table-look horizontal responsive" id="scroll-table">
        <thead>
            <tr>
                <th class="Header column-first price">{{headers/t_price}}</th>
                <th class="Header quantity">{{headers/t_volume}}</th>
                <th class="Header bid">{{headers/t_bid}}</th>
                <th class="Header ask">{{headers/t_ask}}</th>
                <th class="Header buy-sell">Buyer/Seller</th>
                <th class="Header last updated" style="text-align: right;">Updated
                <div class="img">
                    <img style="text-align: center; padding-left: 5px; height: 12px;" src="../images/stopwatch.png" alt="stopwatch" />
                </div>
                </th>
                <th class="hidden timestampFull"></th>
            </tr>
        </thead>

        <tbody style="width: 100%;">
            {{#data}}
            {{#data}}
            
            <tr title="{{showDateTime timestamp}}">
                <td class="Data column-first price">{{decimals tradePrice}}</td>
                <td class="Data quantity">{{tradeVolume}}</td>
                <td class="Data bid">{{decimals bid}}</td>
                <td class="Data ask">
                    <span class="show-tooltip" data-toggle="tooltip" data-original-title="{{buyerID}}/{{sellerID}}">{{decimals ask}}</span>
                </td>
                <td class="buy-sell"></td>
                <%--<td>{{buyerID}}/{{sellerID}}</td>--%>
                <td class="Data column-last updated">{{showTime timestamp}}</td>
                <td class="hidden timestampFull">{{showDateTime timestamp}}</td>
            </tr>

            {{/data}}
            {{/data}}
           
        </tbody>
    </table>

</script>

<%= site.footer("IROrders") %>


<script type="text/javascript">
    //scroll-table
    $(document).ready(function () {

        setTimeout(function () {
            //Scroll Table
            $('#scroll-table').dataTable({
                "scrollY": "350px",
                "scrollCollapse": true,
                "bSort": false,
                //"autoWidth": false,
                "paging": false
                //"bAutoWidth": false,
            });

            //Show Tooltip
            $('.show-tooltip').mouseenter(function () {
                if ($(window).width() < 572) {
                    var that = $(this);
                    that.tooltip('show');
                    setTimeout(function () {
                        that.tooltip('hide');
                    }, 2000);
                }

                $('.show-tooltip').mouseleave(function () {
                    $(this).tooltip('hide');
                });
            });

            //Compare prices
            $("#scroll-table tr").each(function () {
                var curr = Number($(this).find("td.price").html());
                var prev = Number($(this).next().find("td.price").html());

                var thisHTML = '';

                if (curr > 0 && prev > 0) {
                    thisHTML = $(this).find("td.price").html();
                    if (curr > prev) {
                        $(this).find("td.price").addClass('formatColourPos');
                        thisHTML = thisHTML + ' <span class="formatArrowPos"></span>';
                    }

                    else if (curr == prev) {
                        // do nothing
                    }

                    else {
                        $(this).find("td.price").addClass('formatColourNeg');
                        thisHTML = thisHTML + ' <span class="formatArrowNeg"></span>';
                    }

                    $(this).find("td.price").html(thisHTML);
                }

            });

            //Table Seperator

            var amountOfTDs = 0;
            var amountofTRsToSkip = 1;

            $("#scroll-table tr").each(function () {

                var currDate = $(this).find("td.timestampFull").html();
                var prevDate = $(this).next().find("td.timestampFull").html();


                var currTime = getTime(currDate);
                var prevTime = getTime(prevDate);

                currDate = getSimpleDate(currDate);
                prevDate = getSimpleDate(prevDate);

                var thisHTML = '';

                if (amountOfTDs == 0) {
                    amountOfTDs = Number($(this).find('td').length);
                }

                thisHTML = $(this).find("td.timestampFull").html();

                var thisHTMLDateTime = new Date(thisHTML);

                var month = thisHTMLDateTime.getMonth();
                if (month < 10) {
                    month = '0' + month;
                }
                var day = thisHTMLDateTime.getDate();
                if (day < 10) {
                    day = '0' + day;
                }

                var simpleDate = thisHTMLDateTime.getFullYear() + '-' + month + '-' + day;

                if (new Date(prevDate) < new Date(currDate)) {

                    $(this).after('<tr><td class="table-seperator" colspan="' + amountOfTDs + '"> ' + prevDate + ' </td></tr>');
                }
                else {
                    if (amountofTRsToSkip == 0) {
                        $(this).before('<tr><td class="table-seperator" colspan="' + amountOfTDs + '"> ' + currDate + ' </td></tr>');
                    }
                }
                amountofTRsToSkip--;
            });


        }, 100);

    });


    function getTime(ts) {
        var thisHTMLDateTime = new Date(ts);

        var hours = thisHTMLDateTime.getHours();
        if (hours < 10) {
            hours = '0' + hours;
        }
        var minutes = thisHTMLDateTime.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        var simpleTime = hours + ':' + minutes;
        return simpleTime;
    }
    function getSimpleDate(ts) {
        var thisHTMLDateTime = new Date(ts);

        var month = thisHTMLDateTime.getMonth();
        if (month < 10) {
            month = '0' + month;
        }
        var day = thisHTMLDateTime.getDate();
        if (day < 10) {
            day = '0' + day;
        }

        var simpleDate = thisHTMLDateTime.getFullYear() + '-' + month + '-' + day;
        return simpleDate;
    }

</script>
