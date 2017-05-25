<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();

%>
<%= site.newHeader("IRTrades") %>

<div class="IRTradesModule"></div>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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

                <th class="Header colum-first trade" >Trade</th>
                <th class="Header hidden timestampFull" ></th>
                <th class="Header price">{{headers/t_price}} ({{showCurrency}})</th>
                <%--         <th class="Header changePercentage">{{headers/t_change}} (%)</th>
                <th class="Header change">{{headers/t_change}} (GBp)</th>--%>
                <th class="Header volume" id="hideMe4">{{headers/t_volume}}</th>
                <th class="Header value">Value ({{showCurrency}})</th>
                <th class="Header column-last updated" id="hideMe1">
                Time and Date

            </tr>
        </thead>
        <tbody style="width: 100%;">
            {{#data}}
            {{#data}}
            <tr>
                <%--<td class="Data"></td>--%>
                <td class="Data hidden timestampFull" >{{timestamp}}</td>
                <td class="Data price">{{decimals tradePrice}}</td>
                <td class="Data volume" id="hideMe3">{{tradeVolume}}</td>
                <td class="Data value">{{showTradeValueLSE tradePrice tradeVolume}}</td>
                <td class="Data column-last updated" datetime="{{showDateTime timestamp}}" id="hideMe2">{{showDateTime timestamp}}</td>
            </tr>
            {{/data}}
            {{/data}}
        </tbody>
    </table>
</script>

<%= site.newFooter("IRTrades") %>


<script type="text/javascript">


    $(document).ready(function () {

        var updateColspanOnResize = 0;
        var globalColspanAmount = 0;
        var tableRowCounterApplied = false;

        function prepareTableRowCounter() {
            if (!tableRowCounterApplied) {
                if (typeof ($('#scroll-table')) != 'undefined') {

                    //Compare Trade Price, Percentage Change and Price Change
                    var prevClose = globalRawStockData[globalActiveListingIndex].prevClose;
                    console.log('Prev Close:' + prevClose);

                    $('.IRTradesModule tr').each(function () {
                        console.log('try to find currPrice, currChange, currChangePercentage');

                        var currPrice = Number($(this).find("td.price").html());
                        var currChange = Number($(this).find("td.change").html());
                        var tdChangePercentage = $(this).find("td.changePercentage").text().replace('%', '');
                        var currChangePercentage = Number(tdChangePercentage);
                        var thisHTMLTradePriceChange = '';
                        console.log('CurrPrice:' + currPrice);
                        console.log('currChange:' + currChange);
                        console.log('tdChangePercentage:' + tdChangePercentage);
                        console.log('currChangePercentage:' + currChangePercentage);
                        if (currPrice > 0 && prevClose > 0) {
                            // Compare Price
                            thisHTMLTradePriceChange = $(this).find("td.price").html();

                            if (currPrice > prevClose) {
                                $(this).find("td.price").addClass('formatColourPos');
                                thisHTMLTradePriceChange = thisHTMLTradePriceChange + ' <span class="formatArrowPos"></span>';
                                $(this).find("td.changePercentage").addClass('formatColourPos');
                                $(this).find("td.change").addClass('formatColourPos');
                                console.log('CurrPrice higher than PrevClose');
                            }

                            else if (currPrice == prevClose) {
                                $(this).find("td.price").addClass('formatColourDef');
                                thisHTMLTradePriceChange = thisHTMLTradePriceChange + ' <span class="formatArrowDef"></span>';
                                console.log('CurrPrice=PrevClose');
                            }

                            else {
                                $(this).find("td.price").addClass('formatColourNeg');
                                thisHTMLTradePriceChange = thisHTMLTradePriceChange + ' <span class="formatArrowNeg"></span>';
                                $(this).find("td.changePercentage").addClass('formatColourNeg');
                                $(this).find("td.change").addClass('formatColourNeg');
                                console.log('CurrPrice lower than PrevClose');
                            }

                            $(this).find("td.price").html(thisHTMLTradePriceChange);

                        }
                    });


                    //Table Row # Counter
                    $('.IRTradesModule tr td:first-child').each(function (i) {
                        $(this).before('<td>' + (i + 1) + '</td>');
                        console.log('Table Row Counter applied');
                    });

                    tableRowCounterApplied = true;
                    console.log('tableRowCounterApplied set true');
                } 

            }
            
        }

        $(function () {
            setInterval(function () {
                prepareTableRowCounter();
            }, 200);
        });

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

        



        // Check if amountOfTDs has changed on windows resize - if yes, apply new value.
        $(window).resize(function () {
            updateColspanOnResize = 1;
            console.log('colspan updated on resize');
        });


        Handlebars.registerHelper('showTradeChange', function (tradePrice) {
            var prevClose = globalRawStockData[globalActiveListingIndex].prevClose;
            return formatDecimal(tradePrice - prevClose);
        });
        Handlebars.registerHelper('showTradeChangePercentage', function (tradePrice) {
            var prevClose = globalRawStockData[globalActiveListingIndex].prevClose;
            return formatDecimal(((tradePrice - prevClose) / prevClose) * 100);
        });
    });
</script>
