<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();  

%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
    var activeFeatures = [''];
</script>

<div class="IRQuoteModule miniquote-table"></div><br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
	<span class="exchange-name">{{stocks/exchangeName}}</span>
    <table class="IRQuoteModule table-look horizontal responsive miniquote">
            <tr>
            	<th class="Header exchange column-first">{{headers/t_symbol}}</th>
                <th class="Header last">{{headers/t_price}}</th>
                <th class="Header change">{{headers/t_change}}</th>
                <th class="Header volume">{{headers/t_volume}}</th>
            </tr>
            <tr>
            	<td class="Data exchange column-first">{{stocks/symbol}}</td>
                <td class="Data last">{{stocks/currency}} {{decimals stocks/last}}</td>
                <td class="Data change {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}} ({{decimals stocks/changePercent}}%) </td>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
            </tr>
    </table>
    <span class="data-delayed">{{headers/t_data_is_15_min_delayed}}</span>
</script>

<%= site.newFooter("IRChart") %>
