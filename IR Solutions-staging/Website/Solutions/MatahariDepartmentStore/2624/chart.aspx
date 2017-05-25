<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartNews', 'IRChartCompare'];
</script>

<div class="IRQuoteModule"></div>
<br />

<div class="IRChartModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
        <tr>
            <th class="Header symbol column-first">{{headers/t_symbol}}</th>
            <th class="Header last">{{headers/t_last}}</th>
            <th class="Header change">{{headers/t_change}} (%)</th>
            <th class="Header bid">{{headers/t_bid}}</th>
            <th class="Header ask">{{headers/t_ask}}</th>
            <th class="Header volume">{{headers/t_volume}}</th>
            <th class="Header high">{{headers/t_high}}</th>
            <th class="Header low">{{headers/t_low}}</th>
        </tr>
        <tr>
            <td class="Data symbol column-first">{{stocks/symbol}}</td>
            <td class="Data last">{{toLocal stocks/last}} {{stocks/currency}}</td>
            <td class="Data change {{formatColour stocks/change}}">{{toLocal stocks/change}} ({{decimals stocks/changePercent}}%)</td>
            <td class="Data bid">{{toLocal stocks/bid}}</td>
            <td class="Data ask">{{toLocal stocks/ask}}</td>
            <td class="Data volume">{{toLocal stocks/volume}}</td>
            <td class="Data high">{{toLocal stocks/high}}</td>
            <td class="Data low">{{toLocal stocks/low}}</td>
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

<%= site.newFooter("IRChart") %>

<script type="text/javascript">
    Handlebars.registerHelper('decimals', function (number) {
        return reformatDecimal(number);
    });
    function reformatDecimal(number){
        try {
            if (typeof (number) == 'number') {
                return number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals).replace('.', clientLocaleParameters.decimalSeparator) * -1;
            } else {
                return "-";
            }
        }
        catch (err) {
            return "-";
        }
    }
</script>
<div style="width: 100%; text-align: center;">
    <span style="text-align: center; width: 100%; color: #999; font-size: 10px; line-height: 12px;">Quote data provided by ©Thomson Reuters Limited. <a target="_blank" href="http://media.corporate-ir.net/media_files/irol/17/176279/Terms_Conditions.html" style="text-align: center; color: #333333;">Click for restrictions</a>
    </span>
</div>
