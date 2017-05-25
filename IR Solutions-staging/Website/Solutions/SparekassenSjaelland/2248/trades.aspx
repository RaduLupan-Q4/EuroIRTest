<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();

%>
<%= site.newHeader("IRTrades") %>

<div class="IRTradesModule"></div>

<script type="text/javascript">
    var activeModules = ['IRTrades'];
</script>

<script id="IRTradesTemplate" type="text/x-handlebars-template">
    <%--    <h2>Trades</h2>--%>
    <%--  <div class="divideLine"></div>--%>
    <div class="">
        <div id="prevClose">{{stocks/prevClose}}</div>
        {{stocks/changePercent}}
    </div>
    <table class="IRTradesModule table-look horizontal responsive" id="scroll-table">
        <thead>
            <tr>

                <th class="Header column-first updated" style="text-align: left;">{{headers/t_updated}}
                <%--<th class="Header hidden timestampFull"></th>--%>
                <th class="Header price">{{headers/t_price}} (DKK)</th>
                <%--         <th class="Header changePercentage">{{headers/t_change}} (%)</th>
                <th class="Header change">{{headers/t_change}} (GBp)</th>--%>
                <th class="Header volume">{{headers/t_volume}}</th>
                <th class="Header value">Value</th>
                <th class="Header column-last updated updated-timestamp">
                {{headers/t_last_updated}}
            </tr>
        </thead>
        <tbody style="width: 100%;">
            {{#data}}
            {{#data}}
            <tr>
                <%--<td class="Data"></td>--%>
                <%--<td class="Data hidden timestampFull">{{timestamp}}</td>--%>
                <td class="Data column-first updated" datetime="{{showDateTime timestamp}}">{{showTime timestamp}}</td>
                <td class="Data price">{{decimals tradePrice}}</td>
                <td class="Data volume">{{tradeVolume}}</td>
                <td class="Data value">{{showTradeValueLSE tradePrice tradeVolume}}</td>
                <td class="Data column-last updated updated-timestamp" datetime="{{showDateTime timestamp}}">{{showDateTime timestamp}}</td>
            </tr>
            {{/data}}
            {{/data}}
        </tbody>
    </table>
</script>

<%= site.newFooter("IRTrades") %>


<script type="text/javascript">

    var updateColspanOnResize = 0;
    var globalColspanAmount = 0;

    $(document).ready(function () {
        setTimeout(function () {
            //Scroll Table
            //$('#scroll-table').dataTable({
            //    "scrollY": "215px",
            //    "scrollCollapse": true,
            //    "bSort": false,
            //    "paging": false
            //});
            //$('.dataTables_scrollBody').css({'overflow-y','scroll');
          
            //Compare Trade Price, Percentage Change and Price Change
            var prevClose = globalRawStockData[globalActiveListingIndex].prevClose;

            $(".IRTradesModule tr").each(function () {

                var currPrice = Number($(this).find("td.price").html());
                var currChange = Number($(this).find("td.change").html());
                var tdChangePercentage = $(this).find("td.changePercentage").text().replace('%', '');
                var currChangePercentage = Number(tdChangePercentage);
                var thisHTMLTradePriceChange = '';

                if (currPrice > 0 && prevClose > 0) {
                    // Compare Price
                    thisHTMLTradePriceChange = $(this).find("td.price").html();

                    if (currPrice > prevClose) {
                        $(this).find("td.price").addClass('formatColourPos');
                        thisHTMLTradePriceChange = thisHTMLTradePriceChange + ' <span class="formatArrowPos"></span>';
                        $(this).find("td.changePercentage").addClass('formatColourPos');
                        $(this).find("td.change").addClass('formatColourPos');
                    }

                    else if (currPrice == prevClose) {
                        $(this).find("td.price").addClass('formatColourDef');
                        thisHTMLTradePriceChange = thisHTMLTradePriceChange + ' <span class="formatArrowDef"></span>';
                    }

                    else {
                        $(this).find("td.price").addClass('formatColourNeg');
                        thisHTMLTradePriceChange = thisHTMLTradePriceChange + ' <span class="formatArrowNeg"></span>';
                        $(this).find("td.changePercentage").addClass('formatColourNeg');
                        $(this).find("td.change").addClass('formatColourNeg');
                    }

                    $(this).find("td.price").html(thisHTMLTradePriceChange);


                    // Compare Percentage Change
                    //thisHTML = $(this).find("td.changePercentage").html();

                    //if (currChangePercentage > 0) {
                    //    $(this).find("td.changePercentage").addClass('formatColourPos');
                    //}

                    //else if (currChangePercentage == 0) {
                    //}

                    //else {
                    //    $(this).find("td.changePercentage").addClass('formatColourNeg');
                    //}

                    //$(this).find("td.changePercentage").html(thisHTML);


                    // Compare Price Change
                    //thisHTML = '';
                    //thisHTML = $(this).find("td.change").html();

                    //if (currChange > 0) {
                    //    $(this).find("td.change").addClass('formatColourPos');
                    //}

                    //else if (currChange == 0) {
                    //    // do nothing
                    //}

                    //else {
                    //    $(this).find("td.change").addClass('formatColourNeg');
                    //}

                    //$(this).find("td.change").html(thisHTML);
                }
            });
       

            ////Table Row # Counter
            //$('.IRTradesModule tr td:first-child').each(function (i) {
            //    $(this).before('<td>' + (i + 1) + '</td>');
            //});


            //Table Seperator

            var amountOfTDs = 0;
            var amountofTRsToSkip = 1;

            $("#scroll-table tr").each(function () {

                //To display date in IE and Safari
                var currDate = new moment($(this).find("td.timestampFull").html());
                var prevDate = new moment($(this).next().find("td.timestampFull").html());


                var currTime = getTime(currDate);
                var prevTime = getTime(prevDate);

                currDate = getSimpleDate(currDate);
                prevDate = getSimpleDate(prevDate);

                var thisHTML = '';


                amountOfTDs = Number($(this).find('td:visible').length);
                globalColspanAmount = amountOfTDs;


                if (new moment(prevDate) < new moment(currDate)) {
                    if (amountofTRsToSkip == 0) {
                        $(this).before('<tr><td class="table-seperator" colspan="' + amountOfTDs + '"><hr /><div> ' + new moment(currDate).format(clientStyle.formatDate) + ' </div></td></tr>');
                        $(this).after('<tr><td class="table-seperator" colspan="' + amountOfTDs + '"><hr /><div> ' + new moment(prevDate).format(clientStyle.formatDate) + ' </div></td></tr>');
                    } else {
                        $(this).after('<tr><td class="table-seperator" colspan="' + amountOfTDs + '"><hr /><div> ' + new moment(prevDate).format(clientStyle.formatDate) + ' </div></td></tr>');
                    }
                }
                else {
                    if (amountofTRsToSkip == 0) {
                        $(this).before('<tr><td class="table-seperator" colspan="' + amountOfTDs + '"><hr /><div> ' + new moment(currDate).format(clientStyle.formatDate) + ' </div></td></tr>');
                    }
                }
                amountofTRsToSkip--;
            });

            $('#scroll-table tr').eq(2).each(function () {
                $(this).find("td").addClass('strong');
            });

        }, 300);

        //function getTime(ts) {
        //    var thisHTMLDateTime = new Date(ts);

        //    var hours = thisHTMLDateTime.getHours();
        //    if (hours < 10) {
        //        hours = '0' + hours;
        //    }
        //    var minutes = thisHTMLDateTime.getMinutes();
        //    if (minutes < 10) {
        //        minutes = '0' + minutes;
        //    }

        //    var simpleTime = hours + ':' + minutes;
        //    return simpleTime;
        //}

        //function getSimpleDate(ts) {
        //    var thisHTMLDateTime = new Date(ts);

        //    var month = thisHTMLDateTime.getMonth() + 1;
        //    if (month < 10) {
        //        month = '0' + month;
        //    }
        //    var day = thisHTMLDateTime.getDate();
        //    if (day < 10) {
        //        day = '0' + day;
        //    }

        //    var simpleDate = thisHTMLDateTime.getFullYear() + '-' + month + '-' + day;
        //    return simpleDate;
        //}

        //setInterval(function () { updateColspan() }, 200);

    });

    // Check if amountOfTDs has changed on windows resize - if yes, apply new value.
    $(window).resize(function () {
        updateColspanOnResize = 1;
    });

    //function updateColspan() {

    //    if (updateColspanOnResize == 1) {
    //        updateColspanOnResize = 0;
    //        $("#scroll-table tr").each(function () {
    //            amountOfTDs = Number($(this).find('td:visible').length);

    //        });

    //        if (amountOfTDs != globalColspanAmount) {
    //            $('.table-seperator').attr('colspan', amountOfTDs);
    //            globalColspanAmount = amountOfTDs;
    //        }
    //    }
    //}

    Handlebars.registerHelper('showTradeChange', function (tradePrice) {
        var prevClose = globalRawStockData[globalActiveListingIndex].prevClose;
        return formatDecimal(tradePrice - prevClose);
    });
    Handlebars.registerHelper('showTradeChangePercentage', function (tradePrice) {
        var prevClose = globalRawStockData[globalActiveListingIndex].prevClose;
        return formatDecimal(((tradePrice - prevClose) / prevClose) * 100);
    });

</script>
