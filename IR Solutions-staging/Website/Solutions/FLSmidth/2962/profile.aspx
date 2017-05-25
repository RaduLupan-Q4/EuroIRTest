<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRQuote") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
<div class="profile-wrapper">       
        <div class="table-wrapper">
            <div class="company-listing-data">
                <table class="IRTable table-look responsive">
                    <tr>
                        <td class="Header epic top column-first">{{headers/t_ticker}}</td>
                        <td class="Data epic top">{{stocks/name}}</td>
                    </tr>
                    <tr>
                        <td class="Header sector">{{headers/t_exchange}}</td>
                        <td class="Data sector">Copenhagen</td>
                    </tr>
                    
                  	<tr>
                        <td class="Header isin">{{headers/t_isin}}</td>
                        <td class="Data isin">DK0010234467</td>
                    </tr>
                    
                    <tr>
                        <td class="Header market-sector">{{headers/t_lotsize_no_of_shares}}</td>
                        <td class="Data market-sector">1</td>
                    </tr>
                    
                    <tr>
                        <td class="Header country">{{headers/t_minimum_trade}} ({{stocks/currency}})</td>
                        <td class="Data country">{{decimals stocks/last}}</td>
                    </tr>
                    <tr>
                          <td class="Header shares">{{headers/t_shares_outstanding}}</td>
                          <td class="Data shares">{{decimals stocks/shareMillions}} M</td>
                    </tr>                  
                    <tr>
                          <td class="Header market-cap">{{headers/t_market_cap}} ({{stocks/currency}})</td>
                          <td class="Data market-cap">{{showMarketCapN stocks/marketCap}}</td>
                    </tr>
                    <tr>
                        <td class="Header isin">{{headers/t_no_of_trades_today}}</td>
                        <td class="Data isin">{{stocks/tradeCount}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

</script> 
 
<%= site.newFooter("IRQuote") %>


<script type="text/javascript">
Handlebars.registerHelper('showMarketCapN', function (number) {
     var sepaNumb = "-";
       try {
           if (typeof (number) == 'number') {
            number = number/ 1000000;
               if (!!(number).toString().split(".")[1]) {
                   number = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);
                   var h = number.toString().split(".");
                   sepaNumb = h[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000) + ' M';
               } else {
                   sepaNumb = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000) + ' M';
               }
           }
       }
       catch (err) {
           debugError(err);
       }
       return sepaNumb;
});
</script>