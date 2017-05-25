<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900""/>";
%>

<%= site.newHeader("IRDetailedSharePrice") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRMiniquote'];
</script>

<script id="IRMiniquoteTemplate" type="text/x-handlebars-template">

    <div class="IRMiniquoteChartPlaceholder"></div>

</script>

<%--<iframe id="chartiframe" style="width: 100%; float: left; height: 730px; overflow: hidden; border: none; background-color:transparent;" src="about:blank"></iframe>--%>

<div class="IRQuoteHorizontalModule"></div>

<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">
    <%-- <h1>Detailed Share Price</h1>
    <h2 style="float:left; margin-right: 5px;">Current Share Price:</h2><h3 style="float:left; width: 50px;"> {{decimals stocks/last}} </h3><p style="float: left; margin-right: 10px; margin-top: 4px;"> p</p> <span class="formatColour"> {{decimals stocks/change}}p</span>
    --%>
    <h3 class="horizontal-header">{{headers/t_exchange_information}}</h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header exchange">{{t_exchange}}</th>
            <th class="Header symbol">{{t_symbol}}</th>
            <th class="Header updated">{{t_updated}}</th>
            <th class="Header currency">{{t_currency}}</th>
            <%--<th class="Header shares-out">{{t_shares_outstanding}}</th>--%>
            <th class="Header market-cap">{{t_market_cap}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data exchange">{{exchangeName}}</td>
            <td class="Data symbol">{{symbol}}</td>
            <td class="Data updated">{{showDate timestamp}} {{showTime time}}</td>
            <td class="Data currency">{{currency}}</td>
            <%--<td class="Data shares-out">{{decimals shareMillions}}m</td>--%>
            <td class="Data market-cap">{{showMarketCapM marketCap}}m</td>
        </tr>
        {{/stocks}}
    </table>


    <h3 class="horizontal-header"> {{headers/t_current_share_price_information}}</h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header column-first change">{{t_change}}</th>
            <th class="Header bid">{{t_bid}}</th>
            <th class="Header ask">{{t_ask}}</th>
            <th class="Header volume">{{t_volume}}</th>
            <th class="Header prevClose">{{t_last}} {{t_close}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data column-first change">{{decimals change}} ({{decimals changePercent}}%)</td>
            <td class="Data bid">{{decimals bid}}</td>
            <td class="Data ask">{{decimals ask}}</td>
            <td class="Data volue">{{toLocal volume}}</td>
            <td class="Data prevClose">{{prevClose}}</td>
        </tr>
        {{/stocks}}
    </table>

    <h3 class="horizontal-header">{{headers/t_high_low_share_price_information}}</h3>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
           <%-- <th class="Header prev-close">{{t_prev_close}} (p)</th>--%>
            <th class="Header last">{{t_last}}</th>
            <th class="Header high">{{t_high}}</th>
            <th class="Header low"> {{t_low}}</th>
            <th class="Header high52week">{{t_52w_high}}</th>
            <th class="Header low52week">{{t_52w_low}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <%--<td class="Data prev-close">{{decimals prevClose}}</td>--%>
            <td class="Data last">{{decimals last}}</td>
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
            <td class="Header exchange">{{t_exchange}}</td>
            {{/headers}}
           {{#stocks}}
            <td class="Data exchange">{{exchangeName}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <td class="Header symbol">{{t_symbol}}</td>
            {{/headers}}
            {{#stocks}}
            <td class="Data symbol">{{symbol}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <td class="Header currency">{{t_currency}}</td>
            {{/headers}}
           {{#stocks}}
            <td class="Data currency">{{currency}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <td class="Header shares-out">{{t_shares_outstanding}}</td>
            {{/headers}}
            {{#stocks}}
            <td class="Data shares-out">{{decimals shareMillions}}m</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<td class="Header market-cap">{{t_market_cap}}</td>
            {{/headers}}
            {{#stocks}}<td class="Data market-cap">£ {{showLondonMarketCapM marketCap}}m</td>
            <%--{{#stocks}}<td class="Data market-cap">{{showMarketCapM marketCap}}m</td>--%>
            {{/stocks}}
        </tr>

    </table>

    <h3 class="vertical-header" style="margin-top: 30px !important; width: 100%; float: left;"> {{headers/t_current_share_price_information}}</h3>
    <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">

        <tr>
            {{#headers}}<td class="Header last">{{t_last}} (p)</td>
            {{/headers}}
            {{#stocks}}<td class="Data last column-first">{{decimals last}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<td class="Header change">{{t_change}} (p)</td>
            {{/headers}}
            {{#stocks}}<td class="Data change">{{decimals change}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<td class="Header change">{{t_change}} (%)</td>
            {{/headers}}
            {{#stocks}}<td class="Data change">{{decimals changePercent}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<td class="Header bid">{{t_bid}} (p)</td>
            {{/headers}}
            {{#stocks}}<td class="Data bid">{{decimals bid}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <td class="Header ask">{{t_ask}} (p)</td>
            {{/headers}}
           {{#stocks}}<td class="Data ask">{{decimals ask}}</td>
            {{/stocks}}

        </tr>
        <tr>
            {{#headers}}<td class="Header volume">{{t_volume}}</td>
            {{/headers}}
            {{#stocks}}<td class="Data volue">{{toLocal volume}}</td>
            {{/stocks}}
        </tr>
    </table>
    <h3 class="vertical-header" style="margin-top: 30px !important; width: 100%; float: left;">{{headers/t_high_low_share_price_information}}</h3>
    <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}}<td class="Header prev-close">{{t_prev_close}} (p)</td>
            {{/headers}}
            {{#stocks}}<td class="Data prev-close">{{decimals prevClose}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<td class="Header last">{{t_last}} (p)</td>
            {{/headers}}
            {{#stocks}}
            <td class="Data last">{{decimals last}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<td class="Header high">{{t_high}} (p)</td>
            {{/headers}}
            {{#stocks}}<td class="Data high">{{decimals high}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<td class="Header low">{{t_low}} (p)</td>
            {{/headers}}
            {{#stocks}}<td class="Data low">{{decimals low}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<td class="Header high52week">{{t_52w_high}} (p)</td>
            {{/headers}}
            {{#stocks}}
            <td class="Data high52week">{{decimals high52Week}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<td class="Header low52week">{{t_52w_low}} (p)</td>
            {{/headers}}
            {{#stocks}}<td class="Data low52week">{{decimals low52Week}}</td>
            {{/stocks}}
        </tr>

    </table>


<%--    <h3 class="horizontal-header">Shareprice Throughout the day</h3>
    <div class="iframe-wrapper" style="height: 1208px;">
        <div class="divideLine"></div>
        <iframe src="http://ir1.euroinvestor.com/asp/ir/thegymgroup/detailedSharePrice.aspx" style="width: 100%; border: none; height: 1208px;"></iframe>
    </div>--%>

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

