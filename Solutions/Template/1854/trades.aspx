<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();

%>
<%= site.newHeader("IROrders") %>
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
            </tr>
        </thead>

        <tbody style="width: 100%;">
            {{#data}}
            {{#data}}
                <tr>
                    <td class="Data column-first price">{{decimals tradePrice}}</td>
                    <td class="Data quantity">{{tradeVolume}}</td>
                    <td class="Data bid">{{decimals bid}}</td>
                    <td class="Data ask">
                        <span class="show-tooltip" data-toggle="tooltip" data-original-title="{{buyerID}}/{{sellerID}}">{{decimals ask}}</span>
                    </td>
                    <td class="buy-sell"></td>
                    <%--<td>{{buyerID}}/{{sellerID}}</td>--%>
                    <td class="Data column-last updated">{{showDateTime timestamp}}</td>
                </tr>
            {{/data}}
            {{/data}}
            <tr>
                <td style="display: none;"></td>
                <td style="display: none;"></td>
                <td style="display: none;"></td>
                <td style="display: none;"></td>
                <td style="display: none;"></td>
                <td class="table-seperator" colspan="6">21 January 15</td>
            </tr>
            <tr>
                <td class="Data column-first price formatColourPos">326.00</td>
                <td class="Data quantity">46.412</td>
                <td class="Data bid">325.50</td>
                <td class="Data ask">
                    <span class="show-tooltip" data-toggle="tooltip" data-original-title="Seller: POH">325.50</span>
                </td>
                <td class="Data buy-sell"></td>
                <td class="Data column-last updated">11:28</td>
            </tr>
            <tr>
                <td class="Data column-first price formatColourNeg">325.50</td>
                <td class="Data quantity">11</td>
                <td class="Data bid">325.00</td>
                <td class="Data ask">
                    <span class="show-tooltip" data-toggle="tooltip" data-original-title="Seller: HBC">325.50</span>
                </td>
                <td class="Data buy-sell"></td>
                <td class="Data column-last updated">11:27</td>
            </tr>
        </tbody>
    </table>

</script>

<%= site.newFooter("IROrders") %>


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

            var curr = Number($(this).find("td.ask").html());
            var prev = Number($(this).next().find("td.ask").html());

            var thisHTML = '';

            $("#scroll-table tr").each(function () {
                var curr = Number($(this).find("td.ask").html());
                var prev = Number($(this).next().find("td.ask").html());

                var thisHTML = '';

                if (prev < curr ) {
                    thisHTML = $(this).find("td.ask").html();
                    if (prev < curr) {
                       // $(this).find("td.ask").addClass('formatColourPos');
                       // thisHTML = thisHTML + ' <span class="formatArrowPos"></span>';
                        $('#scroll-table tr').after('<tr><td class="table-seperator" colspan="6"> ' + Date() + ' </td></tr>');
                    }

                    else {
                        // do nothing
                    }

                    $(this).find("td.ask").html(thisHTML);
                }

            });
            
            //$('#scroll-table tr').after('<tr><td class="table-seperator" colspan="6"> ' + Date() + ' </td></tr>');
           
        }, 100);

    });

</script>