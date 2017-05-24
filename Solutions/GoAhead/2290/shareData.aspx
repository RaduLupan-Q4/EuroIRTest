<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();

%>

<%= site.newHeader("IRQuote") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<%--<link rel="stylesheet" type="text/css" media="screen" href="stylesheet.css" />--%>
<div class="IRQuoteModule"></div>

<br />


<%= site.newFooter("IRQuote") %>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="shareData table-look table-look horizontal quote quote-horizontal responsive-horizontal shareinfo">
                     <tr>
            <th class="shareData Header">{{headers/t_currency}}</th>
            <td class="shareData Data">{{stocks/currency}}</td>
        </tr>
        <tr>
            <th class="shareData Header">Market</th>
            <td class="shareData Data">London (GBX)</td>
        </tr>
        <tr>
            <th class="shareData Header">{{headers/t_isin}} code</th>
            <td class="shareData Data">GB0003753778</td>
        </tr>
        <tr>
            <th class="shareData Header">{{headers/t_ticker}} code</th>
            <td class="shareData Data">{{stocks/symbol}}</td>
        </tr>
        <tr>
            <th class="shareData Header">List</th>
            <td class="shareData Data">Main Market</td>
        </tr>
        <tr>
            <th class="shareData Header">Industry</th>
            <td class="shareData Data">Travel & Tourism</td>
        </tr>
        <tr>
            <th class="shareData Header">Market Capitalization (GBP)</th>
            <td class="shareData Data">{{showLondonMarketCapM stocks/marketCap}}M</td>
        </tr>
        <tr>
            <th class="shareData Header">{{headers/t_number_of_shares}}</th>
            <td class="shareData Data">{{decimals stocks/shareMillions}}M</td>
        </tr>
         </table>
</script>
