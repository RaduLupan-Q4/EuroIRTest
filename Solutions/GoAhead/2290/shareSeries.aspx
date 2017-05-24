<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();

%>

<%= site.newHeader("IRQuote") %>

<script type="text/javascript">
    var activeModules = ['IRQuote','IRPerformance'];
</script>
<%--<link rel="stylesheet" type="text/css" media="screen" href="stylesheet.css" />--%>
<div class="IRQuoteModule"></div>

<br />


<%= site.newFooter("IRQuote") %>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="ShareInfoTable table-look table-look horizontal quote quote-horizontal responsive-horizontal shareinfo">
        <tr>
            <th class="ShareInfoTable Header first">Share Series</th>
            <td class="ShareInfoTable Data first">Go-Ahead Group</td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_time}}</th>
            <td class="ShareInfoTable Data">{{showDate stocks/tradeTimestamp}} {{showTime stocks/tradeTimestamp}} (GMT)</td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_currency}}</th>
            <td class="ShareInfoTable Data">{{stocks/currency}}</td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">Market</th>
            <td class="ShareInfoTable Data">London</td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_isin}}</th>
            <td class="ShareInfoTable Data">GB0003753778</td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_symbol}}</th>
            <td class="ShareInfoTable Data">{{stocks/symbol}}</td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_bid}}</th>
            <td class="ShareInfoTable Data">{{thousandSeperatorAndTwoDecimals stocks/bid}}</td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_ask}}</th>
            <td class="ShareInfoTable Data">{{thousandSeperatorAndTwoDecimals stocks/ask}}</td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_open}}</th>
            <td class="ShareInfoTable Data">{{thousandSeperatorAndTwoDecimals stocks/open}}</td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_last}}</th>
            <td class="ShareInfoTable Data">{{thousandSeperatorAndTwoDecimals stocks/last}}</td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_change}} +/-</th>
            <td class="ShareInfoTable Data posNegCell {{formatColour stocks/change}}">{{thousandSeperatorAndTwoDecimals stocks/change}}<span></span></td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_change}} %</th>
            <td class="ShareInfoTable Data posNegCell {{formatColour stocks/change}}">{{thousandSeperatorAndTwoDecimals stocks/changePercent}}<span></span></td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_high}}</th>
            <td class="ShareInfoTable Data">{{thousandSeperatorAndTwoDecimals stocks/high}}</td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_low}}</th>
            <td class="ShareInfoTable Data">{{thousandSeperatorAndTwoDecimals stocks/low}}</td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_volume}}</th>
            <td class="ShareInfoTable Data">{{thousandSeperatorAndNoDecimals stocks/volume}}</td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_prev_close}}</th>
            <td class="ShareInfoTable Data">{{thousandSeperatorAndTwoDecimals stocks/prevClose}}</td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_52w_high}}</th>
            <td class="ShareInfoTable Data">{{thousandSeperatorAndTwoDecimals stocks/high52Week}}</td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_52w_low}}</th>
            <td class="ShareInfoTable Data">{{thousandSeperatorAndTwoDecimals stocks/low52Week}}</td>
        </tr>
        <!--<tr>
            <th class="ShareInfoTable Header">YTD %</th>
            <td class="ShareInfoTable Data"></td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">52 Weeks %</th>
            <td class="ShareInfoTable Data"></td>
        </tr>-->
        <tr>
            <th class="ShareInfoTable Header">Industry</th>
            <td class="ShareInfoTable Data">Travel & Tourism</td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_number_of_shares}}</th>
            <td class="ShareInfoTable Data">{{decimals stocks/shareMillions}}M</td>
        </tr>
        <tr>
            <th class="ShareInfoTable Header">{{headers/t_market_cap}}</th>
            <td class="ShareInfoTable Data">{{showLondonMarketCapM stocks/marketCap}}M</td>
        </tr>
    </table>
</script>

<script type="text/javascript" src="inc/helpers.js?a=4"></script>
