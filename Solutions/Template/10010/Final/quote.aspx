<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteModule"></div>

<%= site.newFooter("IRChart") %>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRToolQuoteTable table-look table-look-horizontal quote quote-horizontal responsive-horizontal">
            <tr>
                <th class="IRToolQuoteTableItem Header column-first">{{headers/t_symbol}}</th>
                <th class="IRToolQuoteTableItem Header">{{headers/t_last}}</th>
                <th class="IRToolQuoteTableItem Header">{{headers/t_change}}</th>
                <th class="IRToolQuoteTableItem Header">{{headers/t_bid}}</th>
                <th class="IRToolQuoteTableItem Header">{{headers/t_mid}}</th>
                <th class="IRToolQuoteTableItem Header">{{headers/t_ask}}</th>
                <th class="IRToolQuoteTableItem Header">{{headers/t_volume}}</th>
                <th class="IRToolQuoteTableItem Header">{{headers/t_high}}</th>
                <th class="IRToolQuoteTableItem Header">{{headers/t_low}}</th>
                <th class="IRToolQuoteTableItem Header">{{headers/t_date}}</th>
                <th class="IRToolQuoteTableItem Header column-last">{{headers/t_time}}</th>
            </tr>
            <tr>
                <td class="IRToolQuoteTableItem Data Symbol column-first">{{stocks/symbol}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals stocks/last}} {{stocks/showCurrency}}</td>
                <td class="IRToolQuoteTableItem Data formatColour">{{decimals stocks/change}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals stocks/bid}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals stocks/mid}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals stocks/ask}}</td>
                <td class="IRToolQuoteTableItem Data">{{toLocal stocks/volume}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals stocks/high}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals stocks/low}}</td>
                <td class="IRToolQuoteTableItem Data">{{showDate stocks/timestamp}}</td>
                <td class="IRToolQuoteTableItem Data Timestamp column-last">{{showTime stocks/timestamp}}</td>
            </tr>
    </table>
</script>
