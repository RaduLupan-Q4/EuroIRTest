<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartSettings', 'IRChartCompare'];
</script>

<%--<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
            	<th class="Header symbol column-first">{{headers/t_last_updated}}</th>
                <th class="Header price-at">{{headers/t_last}}</th>
                <th class="Header change">+ / -</th>
                <th class="Header change">+ / - %</th>
                <th class="Header bid">{{headers/t_bid}}</th>
                <th class="Header ask">{{headers/t_ask}}</th>
                <th class="Header volume column-last">{{headers/t_volume}}</th>
            </tr>
            <tr>
            	<td class="Data price-at column-first">{{showDateWithFormat stocks/timestamp 'DD/MM/YYYY HH:MM'}}</td>
                <td class="Data price-at">{{decimals stocks/last}} {{stocks/currency}}</td>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}}</td>
                <td class="Data change {{formatColour stocks/change}}">({{decimals stocks/changePercent}}%)</td>
                <td class="Data bid">{{decimals stocks/bid}}</td>
                <td class="Data ask">{{decimals stocks/ask}}</td>
                <td class="Data volume column-last">{{toLocal stocks/volume}}</td>
            </tr>
    </table>
    
</script>--%>

<div class="IRQuoteModule"></div>
<div class="IRChartToolMenu"></div>
 
<div class="IRChartModule"></div>

<script id="IRChartModuleTemplate" type="text/x-handlebars-template">
   
    <div class="IRChartNavigation">
        {{{includeIRChartCompanyName}}}
        {{{includeIRChartNavigation}}}
    </div>
    
    <div class="IRChartPlaceholderArea">
        {{{includeIRChartDomSettings}}}
        {{{includeIRChartPlaceholder}}}
        {{{includeIRChartChangePeriod 'y1'}}}
    </div>
    
</script>

<%--<iframe class="iframe chart2" src="chart2.aspx?listing=0" frameborder="0"></iframe>--%>

<div>
    <%= site.newFooter("IRChart") %>
</div>