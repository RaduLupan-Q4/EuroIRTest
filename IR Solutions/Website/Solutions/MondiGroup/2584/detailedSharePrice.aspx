<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fast.fonts.net/cssapi/c8776784-5d75-432d-ae59-d50b8bc58a15.css"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Oswald"" type=""text/css"" />";

%>

<%= site.newHeader("IRDetailedSharePrice") %>
<style>
    body{overflow: hidden;}

</style>


<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRMiniquote'];
</script>

<script id="IRMiniquoteTemplate" type="text/x-handlebars-template">

    <div class="IRMiniquoteChartPlaceholder">
        {{headers/t_current_share_price}}

    </div>

</script>

<div class="IRQuoteHorizontalModule"></div>

<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">
    <div class="divideLine horizontal"></div>
    <h3 class="horizontal-header Header">{{headers/t_exchange_information}}</h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive">
        {{#headers}}
        <tr>
            <th class="Header exchange">{{t_exchange}}</th>
            <th class="Header symbol">{{t_ticker}}</th>
            <th class="Header date">{{t_updated}}</th>
            <th class="Header currency">{{t_currency}}</th>
            <!-- <th></th> -->
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data exchange">{{exchangeName}}</td>
            <td class="Header symbol">{{symbol}}</td>
            <td class="Data date">{{showDateTime timestamp}} {{showLocalTimeZoneShort}}</td>
            <td class="Data currency">{{currency}}</td>
            <!-- <td></td> -->
        </tr>
        {{/stocks}}
    </table>

    <h3 class="horizontal-header" style="margin-top: 0 !important; width: 100%; float: left;">{{headers/t_current_share_price_information}} <span class="currency">({{stocks/currency}})</span></h3>
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
            <td class="Data bid">{{toLocal bid}}</td>
            <td class="Data ask">{{toLocal ask}}</td>
            <td class="Data volume">{{toLocal volume}}</td>
            <td class="Data last">{{toLocal last}}</td>
        </tr>
        {{/stocks}}
    </table>

    <h3 class="horizontal-header" style="margin-top: 0 !important; width: 100%; float: left;">{{headers/t_high_low_share_price_information}} <span class="currency">({{stocks/currency}})</span></h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive">
    {{#headers}}
    <tr>
        <th class="Header last">{{t_prev_close}}</th>
        <th class="Header high">{{t_day}} {{t_high}}</th>
        <th class="Header low">{{t_day}} {{t_low}}</th>
        <th class="Header high52week">{{t_52w_high}}</th>
        <th class="Header low52week">{{t_52w_low}}</th>
    </tr>
    {{/headers}} {{#stocks}}
    <tr>
        <td class="Data last">{{toLocal prevClose}}</td>
        <td class="Data high">{{toLocal high}}</td>
        <td class="Data low">{{toLocal low}}</td>
        <td class="Data high52week">{{toLocal high52Week}}</td>
        <td class="Data low52week">{{toLocal low52Week}}</td>
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
            <td class="Data exchange">LSE</td>
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

    <h3 class="vertical-header" style="margin-top: 0 !important; width: 100%; float: left;">{{headers/t_current_share_price_information}} <span class="currency">({{stocks/currency}})</span></h3>
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
            {{#headers}}<th class="Header bid">{{t_bid}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data bid">{{toLocal bid}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header ask">{{t_ask}} (p)</th>
            {{/headers}}
           {{#stocks}}
           <td class="Data ask">{{toLocal ask}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header volume">{{t_volume}}</th>
            {{/headers}}
           {{#stocks}}
          <td class="Data volume">{{toLocal volume}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header last">{{t_last}}</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data last">{{toLocal last}}</td>
            {{/stocks}}
        </tr>
    </table>
    <h3 class="vertical-header" style="margin-top: 0 !important; width: 100%; float: left;">{{headers/t_exchange_information}} <span class="currency">({{stocks/currency}})</span></h3>
    <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}}<th class="Header prev-close">{{t_prev_close}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data prev-close">{{decimals prevClose}}</td>
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
    <h3 class="iframeH3" style=" margin-top: 20px;">{{headers/t_share_price_throughout_the_day}}</h3>
     <div class="divideLine horizontal"></div>
    <div class="divideLine vertical"></div>
    <div class="iframe-wrapper" style="height: 1080px; width: 100%;">
       
        <iframe src="https://irssl.euroinvestor.com/asp/ir/MondiGroup/2016/quote.aspx?listing=0" style="width: 100%; border: none; height: 500px;"></iframe>
    </div>
</script>

 


<%= site.newFooter("IRDetailedSharePrice") %>
<link rel="stylesheet" href="../ir.clientMaster.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("../ir.clientMaster.css")).Ticks.ToString()%>" />
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

