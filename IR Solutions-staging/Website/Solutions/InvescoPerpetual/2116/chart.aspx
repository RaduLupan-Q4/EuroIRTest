<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %> 

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['TA','IRChartCompare', 'IRChartNews', 'StockDataInstrumentTypeOther'];
</script>

<div class="IRQuoteModule"></div>
<br />
<div class="IRChartToolMenu"></div><br />
 
<div class="IRChartModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive" border-collapse="0">
            {{#headers}}
            <tr>
                <th class="Header column-first symbol">{{t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}}</th>
                <th class="Header bid">{{t_bid}}</th>
                <th class="Header ask">{{t_ask}}</th>
                <th class="Header volume">{{t_volume}}</th>
                <th class="Header high">{{t_52w_high}}</th>
                <th class="Header low">{{t_52w_low}}</th>
                <%--<th class="Header market-cap">{{t_market_cap}}</th>--%>
                <th class="Header date">{{t_date}}</th>
                <th class="Header column-last time">{{t_time}}</th>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="Data column-first symbol">{{symbol}}</td>
                <td class="Data last">{{decimals last}} {{showCurrency}}</td>
                <td class="Data change"><span class="{{showArrow stocks/change}}"></span>&nbsp;{{decimals change}}</td>
                <td class="Data bid">{{decimals bid}}</td>
                <td class="Data ask">{{decimals ask}}</td>
                <td class="Data volume">{{toLocal volume}}</td>
                <td class="Data high">{{decimals high}}</td>
                <td class="Data low">{{decimals low}}</td>
                <%--<td class="Data market-cap">{{showMarketCapInSpecificCurrenyM marketCap 'ARSUSD'}}m</td>--%>
                <td class="Data date">{{showDate timestamp}}</td>
                <td class="Data column-last time">{{showTime timestamp}}</td>
            </tr>
        {{/stocks}}
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




<%= site.newFooter("IRChart") %>


