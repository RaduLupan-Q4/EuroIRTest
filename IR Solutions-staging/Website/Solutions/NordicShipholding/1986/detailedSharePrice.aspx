<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRDetailedSharePrice") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<script id="IRMiniquoteTemplate" type="text/x-handlebars-template">

    <div class="IRMiniquoteChartPlaceholder"></div>

</script>


<div class="IRQuoteHorizontalModule"></div>

<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">

    <h3 class="vertical-header" style="margin-top: 0 !important; width: 100%; float: left;">Share information</h3>
     <table class="IRDetailedSharePrice table-look responsive-flip">
        <tr style="border: 0px!important;">
            <th style="border: 0px!important;"></th>
            {{#stocks}}<td class="Data last column-first" style="border: 0px!important; padding-bottom:0px;">Updated {{showDate timestamp }}
                <img src="images/icoTime.gif" />{{showTime timestamp }} All prices in DKK  </td>
   
            {{/stocks}}
        </tr>
         <tr>
            {{#headers}}<th class="Header last">Trading code</th>
            {{/headers}}
            {{#stocks}}<td class="Data last column-first">NORDIC</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header last">ISIN</th>
            {{/headers}}
            {{#stocks}}<td class="Data last column-first">DK0060083996</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header last">Sector</th>
            {{/headers}}
            {{#stocks}}<td class="Data last column-first">Oil & Gas</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header last">Number of Shares</th>
            {{/headers}}
            {{#stocks}}<td class="Data last column-first">{{toLocal shareMillions}}m</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header last">Market Value</th>
            {{/headers}}
            {{#stocks}}<td class="Data last column-first">{{showMarketCapM marketCap}}m</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header high52week">Year High</th>
            {{/headers}}
            {{#stocks}}
            <td class="Data high52week">{{decimals high52Week}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low52week">Year Low</th>
            {{/headers}}
            {{#stocks}}<td class="Data low52week">{{decimals low52Week}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header last">{{t_last}} price</th>
            {{/headers}}
            {{#stocks}}<td class="Data last column-first">{{decimals last}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header prev-close">Last closing price</th>
            {{/headers}}
            {{#stocks}}<td class="Data prev-close">{{decimals prevClose}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header change">{{t_change}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data change ">{{decimals change}} <span class="{{showArrow stocks/change}}"></span></td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header change">{{t_change}} in %</th>
            {{/headers}}
            {{#stocks}}<td class="Data change ">{{decimals changePercent}} <span class="{{showArrow stocks/change}}"></span> </td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header bid">Buy price</th>
            {{/headers}}
            {{#stocks}}<td class="Data bid">{{decimals bid}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header ask">{{t_ask}} price</th>
            {{/headers}}
           {{#stocks}}<td class="Data ask">{{decimals ask}}</td>
            {{/stocks}}

        </tr>
        <tr>
            {{#headers}}<th class="Header volume">Total volume</th>
            {{/headers}}
            {{#stocks}}<td class="Data volue">{{toLocal volume}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header high">Low price </th>
            {{/headers}}
            {{#stocks}}<td class="Data high">{{decimals low}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low">High price </th>
            {{/headers}}
            {{#stocks}}<td class="Data low">{{decimals high}}</td>
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

        }, 100);

    });

</script>
