<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    //site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fast.fonts.net/cssapi/c8776784-5d75-432d-ae59-d50b8bc58a15.css"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//hello.myfonts.net/count/2f4362"" type=""text/css"" />";

%>

<%= site.newHeader("IRDetailedSharePrice") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRMiniquote'];
</script>


<script id="IRMiniquoteTemplate" type="text/x-handlebars-template">

    <div class="IRMiniquoteChartPlaceholder"></div>

</script>

<div class="IRQuoteHorizontalModule"></div>

<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">
    <h3 class="vertical-header">{{headers/t_share_information_a_share}}</h3>
    <div class="IRQuoteHorizontalModule-time-updated">
        {{headers/t_updated}}
        {{#stocks}} {{showDate timestamp}} {{/stocks}}
        {{#stocks}} {{showTime time}} {{/stocks}}
    </div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
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
            <th class="Header isin">ISIN</th>
            {{/headers}}
           {{#stocks}}
            <td class="Data isin">FI0009004741</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header sector">{{t_sector}}</th>
            {{/headers}}
           {{#headers}}
            <td class="Data sector">{{t_industrial_goods_and_services}}</td>
            {{/headers}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header number-of-shares">{{t_number_of_shares}}</th>
            {{/headers}}
           {{#stocks}}
            <td class="Data number-of-shares">{{whitespaceSeperator shareMillions}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header market-cap">{{t_market_cap}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data market-cap">{{whitespaceSeperator marketCap}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header high52week">{{t_52w_high}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data high52week">{{decimals high52Week}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low52week">{{t_52w_low}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data low52week">{{decimals low52Week}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header last">{{t_last}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data last">{{decimals last}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header prev-close">{{t_previous_close}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data prev-close">{{decimals prevClose}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header change">{{t_change}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data change">{{decimals change 2}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header change-percentage">{{t_change_in_price}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data change-percentage">{{decimals changePercent}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header bid">{{t_bid}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data bid">{{decimals bid}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header ask">{{t_ask}}</th>
            {{/headers}}
           {{#stocks}}
           <td class="Data ask">{{decimals ask}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header average">{{t_average_price}}</th>
            {{/headers}}
           {{#stocks}}
           <td class="Data average">{{decimals vwap}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header volume">{{t_total_volume}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data volume">{{toLocal volume}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header turnover">{{t_turnover}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data turnover">{{getTurnover volume vwap}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header low">{{t_low}}</th>
            {{/headers}}
           {{#stocks}}
            <td class="Data low">{{decimals low}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header high">{{t_high}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data high">{{decimals high}}</td>
            {{/stocks}}
        </tr>

    </table>

</script>

<%= site.newFooter("IRDetailedSharePrice") %>

<script type="text/javascript">

    $(document).ready(function () {

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

    Handlebars.registerHelper('whitespaceSeperator', function (number) {

        var newValue = numberWithCommas(number);

        

        return newValue.replace(/\./g, " ").replace(/\,/g, " ");
    });
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    Handlebars.registerHelper('getTurnover', function(volume, vwap) {
        var turnover = (volume * vwap);
        var formattedNumber = numberWithCommas(turnover.toFixed(0));

        return formattedNumber.replace(/\./g, " ").replace(/\,/g, " ");
    });
</script>

