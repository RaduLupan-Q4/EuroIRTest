<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();

    string language = Request["language"];
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
    <%string t_trading = "Trade";
      string t_sector = "Sector";
      string t_in = "in";
      string t_all_price = "All prices in DKK";
      string t_average = "Average";
    
    if (language.Equals("da")) {
       t_trading = "Handels";
       t_sector = "Sektor";
       t_in = "i";
       t_all_price = "Alle priser er i DKK";
       t_average = "Gennemsnitlig";
       } %>
    <h3 class="vertical-header" style="margin-top: 0 !important; width: 100%; float: left;">Share information</h3>
    <table class="IRDetailedSharePrice table-look responsive-flip">
        <tr style="border: 0px!important;">
            <th style="border: 0px!important;"></th>
            {{#stocks}}<td class="Data time column-first" style="border: 0px!important; padding-bottom: 0px;">{{t_updated}} {{showDate timestamp }}
                <img src="images/icoTime.gif" />{{showTime timestamp }} <%=t_all_price %>  </td>

            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header code"><%=t_trading %> {{t_code}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data code column-first">CHEMM</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header isin">{{t_isin}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data isin column-first">DK0060055861</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header sector"><%=t_sector %></th>
            {{/headers}}
            {{#stocks}}<td class="Data sector column-first">Health Care</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header noShares">{{t_number_of_shares}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data noShares column-first">{{toLocal shareMillions}}m</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header value">{{t_market_cap}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data value column-first">{{showMarketCapM marketCap}}m</td>
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
            {{#headers}}<th class="Header price">{{t_last}} {{t_price}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data last column-first">{{decimals last}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header prev-close">{{t_prev_close}} {{t_price}}</th>
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
            {{#headers}}<th class="Header changeP">{{t_change}} <%=t_in %> %</th>
            {{/headers}}
            {{#stocks}}<td class="Data changeP ">{{decimals changePercent}} <span class="{{showArrow stocks/change}}"></span></td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header bid">{{t_buy_price}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data bid">{{decimals bid}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}
            <th class="Header ask">{{t_ask}} {{t_price}}</th>
            {{/headers}}
           {{#stocks}}<td class="Data ask">{{decimals ask}}</td>
            {{/stocks}}

        </tr>

        <tr>
            {{#headers}}<th class="Header high"><%=t_average %> {{t_price}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data high">{{decimals vwap}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header volume">Total {{t_volume}}</th>
            {{/headers}}
            {{#stocks}}<td class="Data volume">{{toLocal volume}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header turnover">Turnover</th>
            {{/headers}}
            {{#stocks}}
                <td class="Data turnover">{{showTurnover volume vwap}}      </td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header low">{{t_low}} {{t_price}} </th>
            {{/headers}}
            {{#stocks}}<td class="Data low">{{decimals low}}</td>
            {{/stocks}}
        </tr>
        <tr>
            {{#headers}}<th class="Header high">{{t_high}} {{t_price}} </th>
            {{/headers}}
            {{#stocks}}<td class="Data high">{{decimals high}}</td>
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
    Handlebars.registerHelper('showTurnover', function (volume, vwap) {
        return formatLocal(Number((volume * vwap).toFixed(0)));
    });

</script>
