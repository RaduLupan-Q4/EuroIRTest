<%@ page language="C#" autoeventwireup="true" %>

<%@ import namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>
<%= site.newHeader("IRTrades") %>

<style>
    body {
        overflow: hidden;
    }
</style>
<div class="IRTradesModule"></div>

<script type="text/javascript">
    var activeModules = ['IRTrades'];
</script>

<script id="IRTradesTemplate" type="text/x-handlebars-template">
    
<h2 class="allTools">{{headers/t_trades}}</h2>
    <table class="IRTradesModule table-look horizontal responsive" id="scroll-table">
        <tbody >
            <thead>
                <tr>
                    <th class="Header colum-first trade">{{headers/t_time}}</th>
                    <th class="Header price">{{headers/t_price}} ({{showCurrency}})</th>
                    <th class="Header volume">{{headers/t_volume}}</th>
                    <th class="Header value">{{headers/t_bid}}</th>
                    <th class="Header value column-last">{{headers/t_ask}}</th>
                </tr>
            </thead>
            {{#data}}
            {{#data}}
            <%--{{#if_eq this}}--%>
            <tr>

                <td class="Data updated" datetime="{{showDateWithFormat timestamp 'YYYY-MMM-DD'}}">{{showDateWithFormat timestamp 'DD MMM YYYY'}} {{showTime timestamp}}</td>
                <td class="Data price">{{decimals tradePrice}}</td>
                <td class="Data volume">{{tradeVolume}}</td>
                <td class="Data value">{{bid}}</td>
                <td class="Data value column-last">{{ask}}</td>
                
            </tr>
            <%--{{/if_eq}}--%>
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
                            "scrollY": "390px",
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
            var currPrice = globalRawStockData[globalActiveListingIndex].currPrice;
            var change = globalRawStockData[globalActiveListingIndex].change;

            $(".IRTradesModule tr").each(function(index, item) {

                var currPrice = Number($(this).find("td.price").html());
                var currChange = Number($(this).find("td.change").html());
                var tdChangePercentage = $(this).find("td.changePercentage").text().replace('%', '');
                var currChangePercentage = Number(tdChangePercentage);
                var thisHTMLTradePriceChange = '';

                var nextObject = $(this).next();
                var nextPrice = Number(nextObject.find("td.price").html());

                checkPrice(currPrice, nextPrice, $(item));

            });

            function checkPrice(currPrice, nextPrice, object) {
                if (currPrice > 0 && nextPrice > 0) {
                    // Compare Price
                    thisHTMLTradePriceChange = object.find("td.price").html();

                    if (currPrice > nextPrice) {
                        object.find("td.price").addClass('formatColourPos');
                        thisHTMLTradePriceChange = thisHTMLTradePriceChange + ' <span class="formatArrowPos"></span>';
                        object.find("td.changePercentage").addClass('formatColourPos');
                        object.find("td.change").addClass('formatColourPos');
                    } else if (currPrice == nextPrice) {
                        object.find("td.price").addClass('formatColourDef');
                        thisHTMLTradePriceChange = thisHTMLTradePriceChange + ' <span class="formatArrowDef"></span>';
                    } else {
                        object.find("td.price").addClass('formatColourNeg');
                        thisHTMLTradePriceChange = thisHTMLTradePriceChange + ' <span class="formatArrowNeg"></span>';
                        object.find("td.changePercentage").addClass('formatColourNeg');
                        object.find("td.change").addClass('formatColourNeg');
                    }
                    object.find("td.price").html(thisHTMLTradePriceChange);

                }
            }

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

    Handlebars.registerHelper('showTradeValue', function (price, volume) {
        return formatDecimal(Number((price * volume)));
    });
    
    Handlebars.registerHelper('if_eq', function (object, opts) {

        var date = new Date();
        var dateToday = moment(date).format('DD-MM-YYYY');

        var objectDate = moment(object.timestamp).format('DD-MM-YYYY');

        if (dateToday == objectDate) {
            return opts.fn(this);
        }
    });
</script>