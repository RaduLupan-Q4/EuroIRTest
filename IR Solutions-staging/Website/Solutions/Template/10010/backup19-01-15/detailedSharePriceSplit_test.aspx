<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.header("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<style type="text/css">
    .responsive-flip-vertical th, .responsive-flip-horizontal th {background: #54ADC6 !important; color: #fff;}
    h2 {
        background-color:#fff !important; 
        color:#000 !important; 
        font-weight: normal !important;
        text-transform: none !important;
    }
</style>

<div class="IRQuoteVerticalModule"></div>
<div class="IRQuoteHorizontalModule"></div>


<%= site.footer("IRChart") %>
<script id="IRQuoteTableVerticalTemplate" type="text/x-handlebars-template" />

<h2 style="margin-top: 0 !important;">Records</h2>

<table class="IRToolQuoteTable table-look table-look quote quote-vertical responsive-flip-vertical">
    <tr>
        <th importance="95">{{headers/t_exchange}}</th>
        <td width="173">
            <div align="left">{{stocks/exchangeName}}</div>
        </td>
    </tr>
    <tr>
        <th width="135">{{headers/t_symbol}}</th>
        <td width="151">
            <div align="left">{{stocks/symbol}}</div>
        </td>
    </tr>
    <tr>
        <th width="135">{{headers/t_currency}}</th>
        <td width="151">
            <div align="left">&pound;{{stocks/currency}}</div>
        </td>
    </tr>
    <tr>
        <th importance="95">{{headers/t_shares_outstanding}}</th>
        <td width="173">
            <div align="left">{{decimals stocks/shareMillions}}</div>
        </td>
    </tr>
    <tr>
        <th width="135">{{headers/t_last_updated}}</th>
        <td width="151">
            <div align="left">{{showTime stocks/tradeTimeStamp}}</div>
        </td>
    </tr>
    <tr>
        <th width="135">{{headers/t_date}}</th>
        <td width="151">
            <div align="left">{{showDate stocks/timestamp}}</div>
        </td>
    </tr>
</table>

<h2>Share Price Summary</h2>

<table class="IRToolQuoteTable table-look quote quote-horizontal responsive-flip-horizontal">

    <th importance="95">{{headers/t_last}} (p)</th>
    <td width="173">
        <div align="left">{{decimals stocks/last}}</div>
    </td>
    </tr>
        <tr>
            <th width="135">{{headers/t_change}} (p)</th>
            <td width="151">
                <div align="left">{{decimals stocks/change}}</div>
            </td>
        </tr>
    <tr>
        <th importance="95">{{headers/t_bid}} (p)</th>
        <td width="173">
            <div align="left">{{decimals stocks/bid}}</div>
        </td>
    </tr>
    <tr>
        <th width="135">{{headers/t_ask}} (p)</th>
        <td width="151">
            <div align="left">{{decimals stocks/ask}}</div>
        </td>
    </tr>
    <tr>
        <th width="135">{{headers/t_market_cap}}</th>
        <td width="151">
            <div align="left">{{showMarketCapM stocks/marketCap}}</div>
        </td>
    </tr>
</table>

<h2>Share Price Market Data</h2>

<table class="detailed-share-price-market table-look  detailedshareprice detailedshareprice-vertical responsive-flip-vertical">

    <th importance="95">{{headers/t_prev_close}} (p)</th>
    <td width="173">
        <div align="left">{{decimals stocks/prevClose}}</div>
    </td>
    </tr>
        <tr>
            <th width="135">{{headers/t_high}} (p)</th>
            <td width="151">
                <div align="left">{{decimals stocks/high}}</div>
            </td>
        </tr>
    <tr>
        <th importance="95">{{headers/t_low}} (p)</th>
        <td width="173">
            <div align="left">{{decimals stocks/low}}</div>
        </td>
    </tr>
    <tr>
        <th width="135">{{headers/t_52w_high}}</th>
        <td width="151">
            <div align="left">{{decimals stocks/high52Week}}</div>
        </td>
    </tr>
    <tr>
        <th width="135">{{headers/t_52w_low}}</th>
        <td width="151">
            <div align="left">{{decimals stocks/low52Week}}</div>
        </td>
    </tr>
    <tr>
        <th width="135">{{headers/t_volume}}</th>
        <td width="151">
            <div align="left">{{toLocal stocks/volume}}</div>
        </td>
    </tr>
</table>
</script>

<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template" />

<%-- <h2 colspan="2">
        	Exchange information
        </h2>
<table  class="detailed-share-price-exchange table-look" style="width: 100%;">
	<tbody>
    <tr style="font-size: 11px; line-height: 24px; height: 24px;">
    	<th>Status</th>
		<td>FULL</td>
    </tr>
    <tr style="font-size: 11px; line-height: 24px; height: 24px;">
    	<th>Index</th>
		<td>FTSE 250, FTSE 350, FTSE All Share</td>
    </tr>
    <tr style="font-size: 11px; line-height: 24px; height: 24px; border-bottom: 1px solid #f4f4f4;">
    	<th>Activities</th>
		<td>Engaged in construction, services and property</td>
    </tr>
    <tr>
    	<th>{{headers/t_symbol}}</th>
		<td>{{stocks/symbol}}</td>
    </tr>
</tbody></table>--%>

<h2 style="margin-top: 0 !important;">Records</h2>
<table class="detailed-share-price-records table-look detailedshareprice detailedshareprice-horizontal responsive-flip-horizontal">
    {{#headers}}
        <tr>
            <th>{{t_exchange}}</th>
            <th>{{t_symbol}}</th>
            <th>{{t_currency}}</th>
            <th>{{t_shares_outstanding}}</th>
            <th>{{t_last_updated}}</th>
            <th>{{t_date}}</th>
        </tr>
    {{/headers}}
        {{#stocks}}
        <tr class="data">
            <td>{{exchangeName}}</td>
            <td>{{symbol}}</td>
            <td>{{currency}}</td>
            <td>{{decimals shareMillions}}</td>
            <td>{{showTime tradeTimeStamp}}</td>
            <td>{{showDate timestamp}}</td>
        </tr>
    {{/stocks}}
</table>
<h2>Share Price Summary</h2>
<table class="detailed-share-price-summary table-look detailedshareprice detailedshareprice-horizontal responsive-flip-horizontal">
    {{#headers}}
        <tr>
            <th>{{t_last}} (p)</th>
            <th>{{t_change}} (p)</th>
            <th>{{t_bid}} (p)</th>
            <th>{{t_ask}} (p)</th>
            <th>{{t_market_cap}}</th>
        </tr>
    {{/headers}}
        {{#stocks}}
        <tr class="data">
            <td>{{decimals last}}</td>
            <td>{{decimals change}}</td>
            <td>{{decimals bid}}</td>
            <td>{{decimals ask}}</td>
            <td>{{showMarketCapM marketCap}}</td>
        </tr>
    {{/stocks}}
</table>

<h2>Share Price Market Data</h2>
<table class="detailed-share-price-market table-look detailedshareprice detailedshareprice-horizontal responsive-flip-horizontal">
    {{#headers}}
        <tr>
            <th>{{t_prev_close}} (p)</th>
            <th>{{t_high}} (p)</th>
            <th>{{t_low}} (p)</th>
            <th>{{t_52w_high}}</th>
            <th>{{t_52w_low}}</th>
            <th>{{t_volume}}</th>
        </tr>
    {{/headers}}
        {{#stocks}}
        <tr class="data">
            <td>{{decimals prevClose}}</td>
            <td>{{decimals high}}</td>
            <td>{{decimals low}}</td>
            <td>{{decimals high52Week}}</td>
            <td>{{decimals low52Week}}</td>
            <td>{{toLocal volume}}</td>
        </tr>
    {{/stocks}}
</table>
</script>