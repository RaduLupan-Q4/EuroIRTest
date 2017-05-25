<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRQuote") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
            	<th class="Header column-first">{{headers/t_open}}</th>
                <th class="Header">{{headers/t_prev_close}}</th>
                <th class="Header">{{headers/t_52w_high}}</th>
                <th class="Header">{{headers/t_52w_high_date}}</th>
                <th class="Header">{{headers/t_52w_low}}</th>
                <th class="Header">{{headers/t_52w_low_date}}</th>
                <th class="Header column-last">{{headers/t_updated}}</th>
            </tr>
            <tr>
            	<td class="Data column-first">{{decimals stocks/open}}</td>
                <td class="Data">{{decimals stocks/prevClose}}</td>
                <td class="Data">{{decimals stocks/high52Week}}</td>
                <td class="Data">{{showDateWithFormat stocks/high52WeekDate 'DD MMM YYYY'}}</td>
                <td class="Data">{{decimals stocks/low52Week}}</td>
                <td class="Data">{{showDateWithFormat stocks/low52WeekDate 'DD MMM YYYY'}}</td>
                <td class="Data column-last">{{showDateWithFormat stocks/timestamp 'DD MMM HH:MM'}}</td>
            </tr>
    </table>
</script>

<div class="IRQuoteModule"></div>

<div>
    <%= site.newFooter("IRQuote") %>
</div>