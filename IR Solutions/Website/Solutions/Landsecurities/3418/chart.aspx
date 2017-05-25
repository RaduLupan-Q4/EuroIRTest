<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartSettings','IRChartCompare'];
</script>

<!-- <script id="IRQuoteTableTemplate" type="text/x-handlebars-template"> 
    <div class="companyInfoWrapper">
       <%--<div class="updated"><span>{{headers/t_updated}}: </span><span>{{showTime stocks/timestamp}} on {{showDateWithFormat stocks/timestamp 'DD MMM, YYYY'}}</span></div>--%>
</div>
</script> -->

<div class="IRQuoteModule"></div>
<br />
<div class="IRChartToolMenu"></div><br />
 
<div class="IRChartModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
	<div class="table-top-info">		 
		<div><span class="bold">{{headers/t_exchange}}:</span> {{showExchangeShort}} </div>
		<div><span class="bold">{{headers/t_symbol}}:</span> {{stocks/symbol}} </div>
		<div><span class="bold">{{headers/t_isin}}:</span> GB0031809436 </div>
	</div>
    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
                <th class="Header price-at column-first">{{headers/t_last}}</th>
                <th class="Header change">{{headers/t_change}} (%)</th>
                <th class="Header bid">{{headers/t_bid}}</th>
                <th class="Header ask">{{headers/t_ask}}</th>
                <th class="Header days-range">{{headers/t_days_range}}</th>
                <th class="Header volume">{{headers/t_volume}}</th>
                <th class="Header time column-last">{{headers/t_time}}</th>
            </tr>
            <tr>
                <td class="Data price-at column-first">{{decimals stocks/last}}p</td>
                <td class="Data change {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</td>
                <td class="Data bid">{{decimals stocks/bid}}p</td>
                <td class="Data ask">{{decimals stocks/ask}}p</td>
                <td class="Data days-range">{{decimals stocks/low}}p - {{decimals stocks/high}}p</td>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
                <td class="Data time column-last">{{showDateWithFormat stocks/datetimestamp 'MM/DD/YYYY HH:mm'}} {{showLocalTimeZoneShort}}</td>
            </tr>
    </table>

</script>

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

<div>
    <%= site.newFooter("IRChart") %>
</div>


