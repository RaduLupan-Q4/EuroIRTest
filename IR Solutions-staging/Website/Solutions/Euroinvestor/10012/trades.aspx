﻿<%@ page language="C#" autoeventwireup="true" %>

<%@ import namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();

%>
<%= site.newHeader("IRTrades") %>

<div class="IRTradesModule"></div>

<script type="text/javascript">
    var activeModules = ['IRTrades'];
</script>

<script id="IRTradesTemplate" type="text/x-handlebars-template">


    <div class="">
        <div id="prevClose">{{stocks/prevClose}}</div>
        {{stocks/changePercent}}
    </div>
    <table class="IRTradesModule table-look horizontal responsive" id="scroll-table">
        <tbody style="width: 100%;">
            <thead>
                <tr>
                    <th class="Header colum-first trade">{{headers/t_trades}}</th>
                    <th class="Header hidden timestampFull"></th>
                    <th class="Header price">{{headers/t_price}} ({{showCurrency}})</th>

                    <th class="Header volume">{{headers/t_volume}}</th>
                    <th class="Header value">{{headers/t_value}} ({{showCurrency}})</th>
                    <th class="Header column-last updated">{{headers/t_time}}</th>
                </tr>
            </thead>
            {{#data}}
            {{#data}}
            <tr>

                <td class="Data hidden timestampFull">{{timestamp}}</td>
                <td class="Data price">{{decimals tradePrice}}</td>
                <td class="Data volume">{{tradeVolume}}</td>
                <td class="Data value">{{showTradeValueLSE tradePrice tradeVolume}}</td>
                <td class="Data column-last updated" datetime="{{showDateTime timestamp}}">{{showTime timestamp}}</td>
            </tr>
            {{/data}}
            {{/data}}
        </tbody>
    </table>
</script>

<%= site.newFooter("IRTrades") %>


<script type="text/javascript">

    $(function () {
        var toolSet = false;
        function prepareTool() {
            if (!toolSet) {
                if (typeof ($('td.timestampFull').html()) != 'undefined') {

                    updateTool();

                    toolSet = true;

                    try {
                        //Scroll Table
                        $('#scroll-table').dataTable({
                            "scrollY": "336px",
                            "scrollCollapse": true,
                            "bSort": false,
                            "paging": false
                        });

                    }
                    catch (err) {
                        console.log(err);

                    }


                }
            }
        }

        setInterval(function () {
            prepareTool();
        }, 100);

    });






    function updateTool() {
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

            }
        });

        //Table Row # Counter
        $('.IRTradesModule tr td:first-child').each(function (i) {
            $(this).before('<td>' + (i + 1) + '</td>');
        });

        //Table Seperator

        var amountOfTDs = 0;
        var amountofTRsToSkip = 1;

        $("#scroll-table tr").each(function () {

            //To display date in IE and Safari
            var currDate = new moment(
                new moment(
                    $(this).find("td.timestampFull").html()
                ).format("YYYY-MM-DD")
            );
            var prevDate = new moment(
                new moment(
                    $(this).next().find("td.timestampFull").html()
                ).format("YYYY-MM-DD")
            );

            var thisHTML = '';

            amountOfTDs = Number($(this).find('td:visible').length);
            var globalColspanAmount = amountOfTDs;

            if (new moment(prevDate) < new moment(currDate)) {
                if (amountofTRsToSkip == 0) {
                    $(this).before('<tr><td class="table-seperator" colspan="' + amountOfTDs + '"><div> ' + new moment(currDate).format(clientStyle.formatDate) + ' </div></td></tr>');
                    $(this).after('<tr><td class="table-seperator" colspan="' + amountOfTDs + '"><div> ' + new moment(prevDate).format(clientStyle.formatDate) + ' </div></td></tr>');
                } else {
                    $(this).after('<tr><td class="table-seperator" colspan="' + amountOfTDs + '"><div> ' + new moment(prevDate).format(clientStyle.formatDate) + ' </div></td></tr>');
                }
            }
            else {
                if (amountofTRsToSkip == 0) {
                    $(this).before('<tr><td class="table-seperator" colspan="' + amountOfTDs + '"><div> ' + new moment(currDate).format(clientStyle.formatDate) + ' </div></td></tr>');
                }
            }
            amountofTRsToSkip--;
        });

        $('#scroll-table tr').eq(2).each(function () {
            $(this).find("td").addClass('strong tradeCounter');
        });
    }

    Handlebars.registerHelper('showTradeChange', function (tradePrice) {
        var prevClose = globalRawStockData[globalActiveListingIndex].prevClose;
        return formatDecimal(tradePrice - prevClose);
    });
    Handlebars.registerHelper('showTradeChangePercentage', function (tradePrice) {
        var prevClose = globalRawStockData[globalActiveListingIndex].prevClose;
        return formatDecimal(((tradePrice - prevClose) / prevClose) * 100);
    });

</script>