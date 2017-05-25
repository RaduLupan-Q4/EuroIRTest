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
                        <td class="Header epic top column-first">{{headers/t_currency}}</td>
                        <td class="Data epic top">{{stocks/currency}}</td>
                    </tr>
                    <tr>
                        <td class="Header sector">{{headers/t_market}}</td>
                        <td class="Data sector">Johannesburg (ZAR)</td>
                    </tr>
                    <tr>
                        <td class="Header sector"></td>
                        <td class="Data sector">USOTC (USD)</td>
                    </tr>

                    <tr>
                        <td class="Header isin">{{headers/t_isin}} (Sappi (JSE)) </td>
                        <td class="Data isin">ZAE000006284</td>
                    </tr>
                    <tr>
                        <td class="Header isin">{{headers/t_isin}} (Sappi ADR (OTC)) </td>
                        <td class="Data isin">US8030692029</td>
                    </tr>
                    <tr>
                        <td class="Header epic top column-first">{{headers/t_ticker}} (Sappi (JSE))</td>
                        <td class="Data epic top">SAP</td>
                    </tr>
                    <tr>
                        <td class="Header epic top column-first">{{headers/t_ticker}} (Sappi ADR (OTC))</td>
                        <td class="Data epic top">{{stocks/symbol}}</td>
                    </tr>
                    <tr>
                        <td class="Header epic top column-first">Industry</td>
                        <td class="Data epic top">None</td>
                    </tr>
            
                     <tr>
                        <td class="Header market-cap">{{headers/t_market_cap}} (EUR)</td>
                        <td class="Data market-cap">50,829,405,110</td>
                        <%--<td class="Data market-cap">{{showMarketCapN stocks/marketCap}}</td>--%>
                    </tr>
                      <tr>
                        <td class="Header shares">{{headers/t_shares_outstanding}} (Sappi (JSE))</td>
                        <td class="Data shares">556,30 M</td>
                    </tr>
    
                    <tr>
                        <td class="Header shares">{{headers/t_shares_outstanding}} (Sappi ADR (OTC))</td>
                        <td class="Data shares">{{decimals stocks/shareMillions}} M</td>
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
                number = number / 1000000;
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
