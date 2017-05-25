<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:300,400,700"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700"" />";
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
    <h4 class="horizontal-header Header">{{headers/t_exchange_information}}</h4>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive">
        {{#headers}}
        <tr>
            <th class="Header symbol column-first">{{t_ticker}}</th>
            <th class="Header exchange ">{{t_exchange}}</th>           
            <th class="Header currency">{{t_currency}}</th>
            <th class="Header date">{{t_market_cap}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Header symbol column-first">{{symbol}}</td>
            <td class="Data exchange">{{exchangeName}}</td>
            <td class="Data currency">{{currency}}</td>
             <td class="Data market-cap">£{{showLondonMarketCapM marketCap}}m</td>
        </tr>
        {{/stocks}}
    </table>

    <h4 class="horizontal-header" style="margin-top: 0 !important; width: 100%; float: left;">{{headers/t_current_share_price_information}} ({{stocks/currency}})</h4>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive">
        {{#headers}}
        <tr>
            <th class="Header column-first change">{{t_current}} (p)</th>
            <th class="Header change">{{t_change}} (p)</th>
            <th class="Header changePercent">{{t_change}} {{t_percent}} (%)</th>
            <th class="Header bid">{{t_best_bid}} (p)</th>
            <th class="Header ask">{{t_best_offer}} (p)</th>
            <th class="Header volume">{{t_day_volume}}</th>
            
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data column-first last">{{decimals last}}</td>
            <td class="Data change">{{decimals change}}</td>
            <td class="Data changePercent">{{decimals changePercent}}</td>
            <td class="Data bid">{{decimals bid}}</td>
            <td class="Data ask">{{decimals ask}}</td>
            <td class="Data volume">{{toLocal volume}}</td>
            
        </tr>
        {{/stocks}}
    </table>

    <%--<h4 class="horizontal-header" style="margin-top: 0 !important; width: 100%; float: left;">{{headers/t_high_low_share_price_information}}  ({{stocks/currency}})</h4>--%>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice highLowInfoTable table-look horizontal responsive">
        {{#headers}}
    <tr>
        <th class="Header last column-first">{{t_prev_close}} (p)</th>
        <th class="Header high">{{t_day}} {{t_high}} (p)</th>
        <th class="Header low">{{t_day}} {{t_low}} (p)</th>
        <th class="Header high52week">{{t_52weeks_high}} (p)</th>
        <th class="Header low52week">{{t_52weeks_low}} (p)</th>
    </tr>
        {{/headers}} {{#stocks}}
    <tr>
        <td class="Data last column-first">{{decimals prevClose}}</td>
        <td class="Data high">{{decimals high}}</td>
        <td class="Data low">{{decimals low}}</td>
        <td class="Data high52week">{{decimals high52Week}}</td>
        <td class="Data low52week">{{decimals low52Week}}</td>
    </tr>
        {{/stocks}}
    </table>


    <h4 class="vertical-header">{{headers/t_exchange_information}}</h4>
    <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
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
            <th class="Header exchange">{{t_exchange}}</th>
            {{/headers}}
           {{#stocks}}
            <td class="Data exchange">{{exchangeName}}</td>
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
            <th class="Header date">{{t_market_cap}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data market-cap">£{{showLondonMarketCapM marketCap}}m</td>
            {{/stocks}}
        </tr>
        

    </table>

    <h4 class="vertical-header" style="margin-top: 0 !important; width: 100%; float: left;">{{headers/t_current_share_price_information}} ({{stocks/currency}})</h4>
    <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">

        <tr>
            {{#headers}}<th class="Header column-first change">{{t_current}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data last column-first">{{decimals last}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header bid">{{t_change}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data bid">{{decimals change}}</td>
            {{/stocks}}
        </tr>
         <tr>
            {{#headers}}<th class="Header bid">{{t_change}} (%)</th>
            {{/headers}}
            {{#stocks}}<td class="Data bid">{{decimals changePercent}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header bid">{{t_best_bid}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data bid">{{decimals bid}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header ask">{{t_best_offer}} (p)</th>
            {{/headers}}
           {{#stocks}}
           <td class="Data ask">{{decimals ask}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header volume">{{t_day_volume}}</th>
            {{/headers}}
           {{#stocks}}
          <td class="Data volume">{{toLocal volume}}</td>
            {{/stocks}}
        </tr>
    </table>
   <%-- <h4 class="vertical-header" style="margin-top: 0 !important; width: 100%; float: left;">{{headers/t_high_low_share_price_information}} ({{stocks/currency}})</h4>--%>
    <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}}<th class="Header prev-close">{{t_prev_close}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data prev-close">{{decimals prevClose}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header high">{{t_day_high}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data high">{{decimals high}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low">{{t_day_low}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data low">{{decimals low}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header high52week">{{t_52weeks_high}} (p)</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data high52week">{{decimals high52Week}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low52week">{{t_52weeks_low}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data low52week">{{decimals low52Week}}</td>
            {{/stocks}}
        </tr>
    </table>
</script>
<h4 class="header">Last Ten Trades</h4>
<iframe src="trades.aspx" frameborder="0" width="100%" height="500"></iframe>

<div style="display: none;">
    <%= site.newFooter("IRDetailedSharePrice") %>
</div>
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

