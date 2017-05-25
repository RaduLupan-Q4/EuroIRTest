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



<%--<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>--%>
<%--<iframe style="width: 100%; float: left; height: 700px; overflow: hidden; border: none;" src="chart.aspx"></iframe>--%>
<div class="IRQuoteHorizontalModule"></div>

<%--<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">

  <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="last-price-wrapper">
                <div class="Data last">{{decimals stocks/last}}</div>
                <div class="currency">{{stocks/currency}}</div>
            </div>

            <div class="Data change">
                <div style="float: left;">{{headers/t_change}}: {{stocks/currency}} </div>
                <div style="margin-left: 5px;">{{decimals stocks/change}} {{decimals stocks/changePercent}}% </div>
                <div class="Data delayed">Delayed by at least 15 mins.</div>
            </div>



        </div>

    </div>
</script>--%>


<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">
    <%-- <h1>Detailed Share Price</h1>
    <h2 style="float:left; margin-right: 5px;">Current Share Price:</h2><h3 style="float:left; width: 50px;"> {{decimals stocks/last}} </h3><p style="float: left; margin-right: 10px; margin-top: 4px;"> p</p> <span class="formatColour"> {{decimals stocks/change}}p</span>
    
    <div class="divideLine horizontal"></div>--%>
    <h3 class="horizontal-header">Record</h3>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header symbol">{{t_symbol}}</th>
            <th class="Header exchange">{{t_exchange}}</th>
            <th class="Header currency">{{t_currency}}</th>
            <th class="Header updated">{{t_shares_outstanding}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data symbol">{{symbol}}</td>
            <td class="Data exchange">{{exchangeName}}</td>  
            <td class="Data currency">{{currency}}</td>
            <td class="Data updated">{{decimals shareMillions}}m</td>
        </tr>
        {{/stocks}}
    </table>


    <h3 class="horizontal-header" style="margin-top: 0 !important; width: 100%; float: left;">Current Share Price Information (GBX)</h3>
    <div class="divideLine horizontal"></div>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
            <th class="Header column-first change">{{t_day}} {{t_change}}</th>
            <th class="Header bid">{{t_bid}}</th>
            <th class="Header ask">{{t_ask}}</th>
            <th class="Header volume">{{t_day}} {{t_volume}}</th>
            <th class="Header prevClose">{{t_last}} {{t_close}}</th>
        </tr>
        {{/headers}}
        {{#stocks}}
        <tr>
            <td class="Data column-first change">{{decimals change}} ({{decimals changePercent}}%)</td>
            <td class="Data bid">{{decimals bid}}</td>
            <td class="Data ask">{{decimals ask}}</td>
            <td class="Data volume">{{toLocal volume}}</td>
            <td class="Data prevClose">{{prevClose}}</td>
        </tr>
        {{/stocks}}
    </table>

    <h3 class="horizontal-header" style="margin-top: 0 !important; width: 100%; float: left;">High/Low Share Price Information (GBX)</h3>
    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        {{#headers}}
        <tr>
           <%-- <th class="Header prev-close">{{t_prev_close}} (p)</th>--%>
            <th class="Header last">{{t_last}}</th>
            <th class="Header high">{{t_day}} {{t_high}}</th>
            <th class="Header low">{{t_day}} {{t_low}}</th>
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


    <h3 class="vertical-header">Exchange Information</h3>
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
            {{#stocks}}<td class="Data market-cap">£{{showLondonMarketCapM marketCap}}m</td>
            {{/stocks}}
        </tr>

    </table>

    <h3 class="vertical-header" style="margin-top: 0 !important; width: 100%; float: left;">Current Share Price Information (GBX)</h3>
    <div class="divideLine vertical"></div>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">

        <tr>
            {{#headers}}<th class="Header last">{{t_last}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data last column-first">{{decimals last}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header change">{{t_change}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data change formatColour">{{decimals change}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header change">{{t_change}} (%)</th>
            {{/headers}}
            {{#stocks}}<td class="Data change formatColour">{{decimals changePercent}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header bid">{{t_bid}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data bid">{{decimals bid}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header ask">{{t_ask}} (p)</th>
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
    <h3 class="vertical-header" style="margin-top: 0 !important; width: 100%; float: left;">Current Share Price Information (GBX)</h3>
    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            {{#headers}}<th class="Header prev-close">{{t_prev_close}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data prev-close">{{decimals prevClose}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header last">{{t_last}} (p)</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data last">{{decimals last}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header high">{{t_day}} {{t_high}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data high">{{decimals high}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low">{{t_day}} {{t_low}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data low">{{decimals low}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header high52week">{{t_52w_high}} (p)</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data high52week">{{decimals high52Week}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low52week">{{t_52w_low}} (p)</th>
            {{/headers}}
            {{#stocks}}<td class="Data low52week">{{decimals low52Week}}</td>
            {{/stocks}}
        </tr>

    </table>


    <h3 class="horizontal-header">Shareprice Throughout the day</h3>
    <div class="iframe-wrapper" style="height: 1208px;">
        <div class="divideLine"></div>
        <%--<iframe src="http://ir1.euroinvestor.com/asp/ir/thegymgroup/detailedSharePrice.aspx" style="width: 100%; border: none; height: 1208px;"></iframe>--%>
    </div>

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

</script>

