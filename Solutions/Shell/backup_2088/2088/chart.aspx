<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare'];
</script>

<div class="IRQuoteHorizontalModule"></div>
<br />
<div class="IRChartModule"></div>


<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template">

    <table class="IRDetailedSharePrice table-look horizontal responsive-flip">
        <tr>
            <th class="Header">{{headers/t_prev_close}}</th>
            <th class="Header">{{headers/t_open}}</th>
            <th class="Header">{{headers/t_change}}</th>
            <th class="Header">{{headers/t_52w_high}}</th>
            <th class="Header">{{headers/t_52w_low}}</th>
        </tr>
        <tr>
            <td class="Data">{{decimals stocks/prevClose}}</td>
            <td class="Data">{{decimals stocks/open}}</td>
            <td class="Data">{{decimals stocks/change}} ({{decimals stocks/changePercent}})</td>
            <td class="Data">{{decimals stocks/high52Week}}</td>
            <td class="Data">{{decimals stocks/low52Week}}</td>
        </tr>
        <tr>
            <th class="Header">{{headers/t_updated}}</th>
            <th class="Header">{{headers/t_last}}</th>
            <th class="Header">{{headers/t_days_range}}</th>
            <th class="Header">{{headers/t_volume}}</th>
            <th class="Header">{{headers/t_market_cap}}</th>
            <th class="Header">&nbsp;</th>
        </tr>
        <tr>
            <td class="Data">{{showDateTime stocks/timestamp}}</td>
            <td class="Data">{{decimals stocks/last}}</td>
            <td class="Data">{{decimals stocks/low}} - {{decimals stocks/high}}</td>
            <td class="Data">{{stocks/volume}}</td>
            <td class="Data">{{showMarketCapM stocks/marketCap}}</td>
            <td class="Data">&nbsp;</td>
        </tr>
    </table>

    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            <th class="Header">{{headers/t_prev_close}}</th>
            <td class="Data">{{decimals stocks/prevClose}}</td>
        </tr>
        <tr>
            <th class="Header">{{headers/t_open}}</th>
            <td class="Data">{{decimals stocks/open}}</td>
        </tr>
        <tr>
            <th class="Header">{{headers/t_change}}</th>
            <td class="Data">{{decimals stocks/change}} ({{decimals stocks/changePercent}})</td>
        </tr>
        <tr>
            <th class="Header">{{headers/t_52w_high}}</th>
            <td class="Data">{{decimals stocks/high52Week}}</td>
        </tr>
        <tr>
            <th class="Header">{{headers/t_52w_low}}</th>
            <td class="Data">{{decimals stocks/low52Week}}</td>
        </tr>
    </table>

   

    <table class="IRDetailedSharePrice table-look vertical responsive-flip">
        <tr>
            <th class="Header">{{headers/t_updated}}</th>
            <td class="Data">{{showDateTime stocks/timestamp}}</td>
        </tr>
        <tr>
            <th class="Header">{{headers/t_last}}</th>
            <td class="Data">{{decimals stocks/last}}</td>
        </tr>
        <tr>
            <th class="Header">{{headers/t_days_range}}</th>
            <td class="Data">{{decimals stocks/low}} - {{decimals stocks/high}}</td>
        </tr>
        <tr>
            <th class="Header">{{headers/t_volume}}</th>
            <td class="Data">{{stocks/volume}}</td>
        </tr>
        <tr>
            <th class="Header">{{headers/t_market_cap}}</th>
            <td class="Data">{{showMarketCapM stocks/marketCap}}</td>
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
        {{{includeIRChartChangePeriod 'd1'}}}
    </div>

    <div class="DisNote">
        Historical comparison is only available in views showing 1 month and longer.
    </div>

    <div class="DisNote" style="margin-top: 15px;">
        <b>Note:</b><br />
        <div style="margin-left: 5px;">
            <p>(a) "Prev Close" is the stock price of the last transaction of the previous day’s trading</p>
            <p>(b) "Open" is the price at which the first share was traded for the current trading day</p>
            <p>(c) "Last" is the latest traded price of the shares (current price)</p>
            <p>(d) "Change" is the difference between the Prev Close price and the Current price (Last Price)</p>
            <p>(e) "52 weeks High/Low" price is the highest/lowest traded price during the last 52 weeks from today’s date, based on the previous day trading close price (excluding Intraday rates)</p>
            <p>(f) "Day's range" is the range within which the stock price moved up or down for the current trading day</p>
            <p>(g) "Volume" is the total no of shares traded during the current trading day</p>
            <p>(h) "Market Capital" = current share price X no of shares in issue</p>
        </div>
        Data is provided for information only and is not intended for trading purposes
    </div>

    <div style="clear: both;"></div>

</script>

<%= site.newFooter("IRChart") %>