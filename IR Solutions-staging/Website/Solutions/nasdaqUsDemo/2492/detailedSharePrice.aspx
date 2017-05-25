<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Oswald"" type=""text/css"" />";
    //site.appendCustomCSSURL = "http://www.nektan.com/resources/css/style.css";

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
    <div class="divideLine horizontal"></div>
    <h3 class="horizontal-header Header">{{headers/t_exchange_information}}</h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive">
        {{#headers}}
        <tr>
            <th class="Header column-first exchange">{{t_exchange}}</th>
            <th class="Header symbol">{{t_ticker}}</th>
            <th class="Header date">{{t_updated}}</th>
            <th class="Header currency">{{t_currency}}</th>
            <th></th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data column-first exchange">{{exchangeName}}</td>
            <td class="Header symbol">{{symbol}}</td>
            <td class="Data date">{{showDateTime timestamp}}</td>
            <td class="Data currency">{{currency}}</td>
            <td></td>
        </tr>
        {{/stocks}}
    </table>

    <h3 class="horizontal-header" style="margin-top: 0 !important; width: 100%; float: left;">{{headers/t_current_share_price_information}} ({{stocks/currency}})</h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive">
        {{#headers}}
        <tr>
            <th class="Header column-first change">{{t_day}} {{t_change}}</th>
            <th class="Header bid">{{t_bid}}</th>
            <th class="Header ask">{{t_ask}}</th>
            <th class="Header volume">{{t_volume}}</th>
            <th class="Header last">{{t_last}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data column-first change">{{decimals change}} ({{decimals changePercent}}%)</td>
            <td class="Data bid">{{decimals bid}}</td>
            <td class="Data ask">{{decimals ask}}</td>
            <td class="Data volume">{{decimals volume}}</td>
            <td class="Data last">{{decimals last}}</td>
        </tr>
        {{/stocks}}
    </table>

    <h3 class="horizontal-header" style="margin-top: 0 !important; width: 100%; float: left;">{{headers/t_high_low_share_price_information}} ({{stocks/currency}})</h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive">
    {{#headers}}
    <tr>
        <th class="Header column-first last">{{t_prev_close}}</th>
        <th class="Header high">{{t_day}} {{t_high}}</th>
        <th class="Header low">{{t_day}} {{t_low}}</th>
        <th class="Header high52week">{{t_52w_high}}</th>
        <th class="Header low52week">{{t_52w_low}}</th>
    </tr>
    {{/headers}} {{#stocks}}
    <tr>
        <td class="Data column-first last">{{decimals prevClose}}</td>
        <td class="Data high">{{decimals high}}</td>
        <td class="Data low">{{decimals low}}</td>
        <td class="Data high52week">{{decimals high52Week}}</td>
        <td class="Data low52week">{{decimals low52Week}}</td>
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
            <td class="Data exchange">{{exchangeName}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header symbol">{{t_ticker}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data symbol">{{symbol}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header date">{{t_updated}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data date">{{showDateTime timestamp}}</td>
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

    </table>

    <h3 class="vertical-header" style="margin-top: 0 !important; width: 100%; float: left;">{{headers/t_current_share_price_information}} ({{stocks/currency}})</h3>
    <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">

        <tr>
            {{#headers}}<th class="Header column-first change">{{t_day}} {{t_change}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data last column-first">{{decimals change}} ({{decimals changePercent}}%)</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header bid">{{t_bid}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data bid">{{decimals change}}</td>
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
            <th class="Header volume">{{t_volume}}</th>
            {{/headers}}
           {{#stocks}}
          <td class="Data volume">{{decimals volume}}</td>
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
    </table>
    <h3 class="vertical-header" style="margin-top: 0 !important; width: 100%; float: left;">{{headers/t_exchange_information}} ({{stocks/currency}})</h3>
    <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}}<th class="Header column-first prev-close">{{t_prev_close}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data column-first prev-close">{{decimals prevClose}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header high">{{t_day}} {{t_high}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data high">{{decimals high}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low">{{t_day}} {{t_low}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data low">{{decimals low}}</td>
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
    </table>
    <%--<h3>{{headers/t_share_price_throughout_the_day}}</h3>
    <div class="iframe-wrapper" style="height: 1208px;">
        <div class="divideLine"></div>
        <iframe src="http://ir1.euroinvestor.com/asp/ir/HuntsworthPlc/detailedSharePrice.aspx" style="width: 100%; border: none; height: 1208px;"></iframe>
    </div>--%>
</script>

 


<%= site.newFooter("IRDetailedSharePrice") %>

<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>

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

</script>

