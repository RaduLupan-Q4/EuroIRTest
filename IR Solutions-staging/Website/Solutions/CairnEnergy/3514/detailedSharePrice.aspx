<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
	IRSite site = new IRSite();
%>
<%= site.newHeader("IRDetailedSharePrice") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRMiniquote', 'IRTrades'];
</script>
<script id="IRMiniquoteTemplate" type="text/x-handlebars-template">
    <div class="IRMiniquoteChartPlaceholder"></div>
</script>
<div class="IRQuoteHorizontalModule"></div>

<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">
    
    <h3 class="horizontal-header">{{headers/t_exchange_information}}</h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header exchange column-first">{{t_exchange}}</th>
            <th class="Header symbol">{{t_symbol}}</th>
            <th class="Header currency">{{t_currency}}</th>
            <th class="Header shares-out">{{t_shares_outstanding}}</th>
            <th class="Header market-cap column-last">{{t_market_cap}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data exchange column-first">{{exchangeName}}</td>
            <td class="Data symbol">{{symbol}}</td>
            <td class="Data currency">{{currency}}</td>
            <td class="Data shares-out">{{decimals shareMillions}}m</td>
            <td class="Data market-cap column-last">&pound;{{showLondonMarketCapM marketCap}}m</td>
        </tr>
        {{/stocks}}
    </table>
    <h3 class="horizontal-header"> {{headers/t_current_share_price_information}}</h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
        	<th class="Header column-first last">{{t_last}}</th>
            <th class="Header change">{{t_change}}</th>
            <th class="Header change">{{t_change}} (%)</th>
            <th class="Header bid">{{t_bid}}</th>
            <th class="Header ask">{{t_ask}}</th>
            <th class="Header volume column-last">{{t_volume}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
        	<td class="Data column-first last">{{decimals last}}</td>
            <td class="Data change">{{decimals change}}</td>
            <td class="Data change">{{decimals changePercent}}</td>
            <td class="Data bid">{{decimals bid}}</td>
            <td class="Data ask">{{decimals ask}}</td>
            <td class="Data volume column-last">{{toLocal volume}}</td>
        </tr>
        {{/stocks}}
    </table>

    <h3 class="horizontal-header">{{headers/t_high_low_share_price_information}}</h3>
        <div class="divideLine"></div>    

    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header prev-close column-first">{{t_prev_close}} </th>
            <th class="Header high">{{t_high}}</th>
            <th class="Header low"> {{t_low}}</th>
            <th class="Header high52week">{{t_52w_high}}</th>
            <th class="Header low52week column-last">{{t_52w_low}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            
            <td class="Data prevClose column-first">{{decimals prevClose}}</td>
            <td class="Data high">{{decimals high}}</td>
            <td class="Data low">{{decimals low}}</td>
            <td class="Data high52week">{{decimals high52Week}}</td>
            <td class="Data low52week column-last">{{decimals low52Week}}</td>
        </tr>
        {{/stocks}}
    </table>


    <h3 class="vertical-header">{{headers/t_exchange_information}}</h3>
    <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">

        <tr>
            {{#headers}} 
            <th class="Header exchange">{{t_exchange}}</th>
            {{/headers}}
           {{#stocks}}
            <td class="Data exchange">{{showExchangeShort}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header symbol">{{t_symbol}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data symbol">{{symbol}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header currency">{{t_currency}}</th>
            {{/headers}}
           {{#stocks}}
            <td class="Data currency">{{currency}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header shares-out">{{t_shares_outstanding}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data shares-out">{{decimals shareMillions}}m</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header market-cap">{{t_market_cap}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data market-cap">&pound;{{showLondonMarketCapM marketCap}}m</td>
            {{/stocks}}
        </tr>

    </table>

    <h3 class="vertical-header" style="margin-top: 0 !important; width: 100%; float: left;"> {{headers/t_current_share_price_information}}</h3>
    <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">

        <tr>
            {{#headers}}<th class="Header last">{{t_last}} </th>
            {{/headers}}
            {{#stocks}}<td class="Data last">{{decimals last}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header change">{{t_change}} </th>
            {{/headers}}
            {{#stocks}}<td class="Data change">{{decimals change}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header change">{{t_change}} (%)</th>
            {{/headers}}
            {{#stocks}}<td class="Data change">{{decimals changePercent}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header bid">{{t_bid}} </th>
            {{/headers}}
            {{#stocks}}<td class="Data bid">{{decimals bid}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header ask">{{t_ask}} </th>
            {{/headers}}
           {{#stocks}}<td class="Data ask">{{decimals ask}}</td>
            {{/stocks}}

        </tr>
        <tr>
            {{#headers}}<th class="Header volume">{{t_volume}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data volue">{{toLocal volume}}</td>
            {{/stocks}}
        </tr>
    </table>
    <h3 class="vertical-header" style="margin-top: 0 !important; width: 100%; float: left;">{{headers/t_high_low_share_price_information}}</h3>
  <div class="divideLine vertical"></div>
      <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}}<th class="Header prev-close">{{t_prev_close}} </th>
            {{/headers}}
            {{#stocks}}<td class="Data prev-close">{{decimals prevClose}}</td>
            {{/stocks}}
        </tr>

        <tr>
            {{#headers}}<th class="Header high">{{t_high}} </th>
            {{/headers}}
            {{#stocks}}<td class="Data high">{{decimals high}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low">{{t_low}} </th>
            {{/headers}}
            {{#stocks}}<td class="Data low">{{decimals low}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header high52week">{{t_52w_high}} </th>
            {{/headers}}
            {{#stocks}}
            <td class="Data high52week">{{decimals high52Week}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low52week">{{t_52w_low}} </th>
            {{/headers}}
            {{#stocks}}<td class="Data low52week">{{decimals low52Week}}</td>
            {{/stocks}}
        </tr>

    </table>
</script>


<%= site.newFooter("IRDetailedSharePrice") %>

<script type="text/javascript">
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    $(document).ready(function () {

        var language = '';
       
        try {
            language = getUrlParameter('language');
        }
        catch (err) {
        }
        if (language != undefined) {
            $('#chartiframe').attr('src', 'chart.aspx?language=' + language);
        } else {
            $('#chartiframe').attr('src', 'chart.aspx');
        }
        setTimeout(function () {
            $('.IRDetailedSharePrice td').each(function () {

                midPrice = Number($('.last').eq(1).text(), 10),
                prevClose = Number($('.prev-close').eq(1).text(), 10),

                midPriceDiff = Number(midPrice - prevClose).toFixed(2);
                $('td.mid-change').eq(3).text(midPriceDiff);

                diffPercentage = Number((midPriceDiff * 100) / prevClose).toFixed(2);
                $('td.mid-changePercent').eq(3).text(diffPercentage);

            });

        }, 500);

    });

</script>
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
        $('.IRTradesModule tr td:first-child').each(function (i) {
            var count = $('.IRTradesModule tr td:first-child').length;
            $(this).before('<td class="rowCounter">' + (count - i) + '</td>');
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
        return formatNumberWithLocalDelimiters(Number((price * volume) / 100));
    });


    Handlebars.registerHelper('if_eq', function (object, opts) {

        var date = new Date();
        var dateToday = moment(date).format('DD-MM-YYYY');

        var objectDate = moment(object.timestamp).format('DD-MM-YYYY');

        if (dateToday == objectDate) {
            return opts.fn(this);
        }

        //return timestamp;
    });

</script>