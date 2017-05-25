<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRQuote") %>

<link href="//fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

    <!-- Profile -->
    <div class="profile-wrapper">

       
        <div class="table-wrapper">
            <div class="company-listing-data">
                <h2>Company Listing Data</h2>
                <table class="IRTable table-look responsive">
                    <tr>
                        <td class="Header epic top">EPIC</td>
                        <td class="Data epic top"><b>{{stocks/symbol}}</b></td>
                    </tr>
                    <tr>
                        <td class="Header sector">Sector</td>
                        <td class="Data sector">Technology</td>
                    </tr>
                   <%-- <tr>
                        <td class="Header sedol">SEDOL</td>
                        <td class="Data sedol"></td>
                    </tr>--%>
                    <tr>
                        <td class="Header isin">ISIN</td>
                        <td class="Data isin">GB00BZ1B7619</td>
                    </tr>
                    <tr>
                        <td class="Header market-sector">Market Sector</td>
                        <td class="Data market-sector">Information Technology</td>
                    </tr>
                    <%--<tr>
                        <td class="Header market-segment">Market Segment</td>
                        <td class="Data market-segment"></td>
                    </tr>--%>
                    <tr>
                        <td class="Header country">Country of register</td>
                        <td class="Data country">United Kingdom</td>
                    </tr>
                    <tr>
                        <td class="Header currency">{{headers/t_currency}}</td>
                        <td class="Data currency">British Pence</td>
                    </tr>
                    <%--<tr>
                        <td class="Header nms">NMS</td>
                        <td class="Data nms"></td>
                    </tr>--%>
                    <tr>
                        <td class="Header date-listed">Date Listed</td>
                        <td class="Data date-listed">19 Dec 2016</td>
                    </tr>
                </table>
            </div>
            <div class="price-data">
                <h2>{{headers/t_price}} Data</h2>
                <table class="IRTable table-look responsive">
                    <tbody>
                        <tr>
                            <td class="Header currency top">{{headers/t_currency}}</td>
                            <td class="Data currency top">{{stocks/currency}}</td>
                        </tr>
                        <tr>
                            <td class="Header price">{{headers/t_last}} {{headers/t_price}}</td>
                            <td class="Data price">{{decimals stocks/last}} <span class="{{showArrow stocks/change}}"></span></td>
                        </tr>
                        <tr>
                            <td class="Header change">{{headers/t_change}} {{headers/t_today}}</td>
                            <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}}</td>
                        </tr>
                        <tr>
                            <td class="Header volume">{{headers/t_volume}}</td>
                            <td class="Data volume">{{toLocal stocks/volume}}</td>
                        </tr>
                        <tr>
                            <td class="Header prev-close">{{headers/t_prev_close}} </td>
                            <td class="Data prev-close">{{decimals stocks/prevClose}}</td>
                        </tr>
                        <tr>
                            <td class="Header shares-issued">Shares Issued</td>
                            <td class="Data shares-issued">{{thousands stocks/shareMillions}}m</td>
                        </tr>
                        <tr>
                            <td class="Header market-cap">{{headers/t_market_cap}}</td>
                            <td class="Data market-cap">£{{showLondonMarketCapM stocks/marketCap}}m</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</script> 
 
<%= site.newFooter("IRQuote") %>

<%--<script type="text/javascript">
    Handlebars.registerHelper('thousands', function (number) {
   var sepaNumb = "-";
   try {
       if (typeof (number) == 'number') {
           if (/^./.test(number)) {
               number = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);
               var h = number.toString().split(".");
               sepaNumb = h[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000) + clientLocaleParameters.decimalSeparator + h[1];
           } else {
               sepaNumb = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals).replace('.', clientLocaleParameters.decimalSeparator);
           }
       }
   }
   catch (err) {
       debugError(err);
   }
   return sepaNumb;
});

</script>--%>