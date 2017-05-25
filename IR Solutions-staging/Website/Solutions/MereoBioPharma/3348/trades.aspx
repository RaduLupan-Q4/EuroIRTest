<%@ page language="C#" autoeventwireup="true" %>

<%@ import namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:300,400,700"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700"" />";

%>

<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,700" type="text/css" /><link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700" />

<%= site.newHeader("IRTrades") %>

<div class="IRTradesModule"></div>

<script type="text/javascript">
    var activeModules = ['IRTrades'];
</script>

<script id="IRTradesTemplate" type="text/x-handlebars-template">
    
    <table class="IRTradesModule table-look horizontal responsive" id="scroll-table">
        <tbody>
            <thead>
                <tr>
                    <th class="Header colum-first trade">{{headers/t_date}}</th>
                    <th class="Header price">{{headers/t_price}} ({{showCurrency}})</th>
                    <th class="Header volume">{{headers/t_volume}}</th>
                    <th class="Header value">{{headers/t_value}} (GBP)</th>
                    <th class="Header column-last updated">{{headers/t_time}}</th>
                </tr>
            </thead>
            {{#data}}
            {{#data}}
            
            <tr>

                <td class="Data timestampFull">{{showDateWithFormat timestamp 'DD.MM.YYYY'}}</td>
                <td class="Data price">{{decimals tradePrice}}</td>
                <td class="Data volume">{{toLocal tradeVolume}}</td>
                <td class="Data value">{{showTradeValue tradePrice tradeVolume}}</td>
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
                    
                } else {
                    
                }
            }
            else {
                if (amountofTRsToSkip == 0) {
                    
                }
            }
            amountofTRsToSkip--;
        });

        // $('#scroll-table tr').eq(2).each(function () {
        //     $(this).find("td").addClass('strong tradeCounter');
        // });
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
        return formatNumberWithLocalDelimiters(Number(price * volume) / 100);
    });

</script>
