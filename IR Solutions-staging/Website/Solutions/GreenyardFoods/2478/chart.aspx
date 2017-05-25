<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
     site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = [''];
</script>

<div class="IRQuoteModule"></div>
<br />
<div class="IRChartModule"></div>


<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

    <table class="IRQuoteModule table-look horizontal responsive">
        {{#headers}}
            <tr>
                <th class="Header symbol column-first">{{t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}}</th>
                <th class="Header high">{{t_high}}</th>
                <th class="Header low">{{t_low}}</th>
                <th class="Header volume column-last">{{t_volume}}</th>
            </tr>
        {{/headers}}
        <tr>
            <td class="Data symbol column-first">{{stocks/symbol}}</td>
            <td class="Data last">{{decimals stocks/last}} {{showCurrency}}</td>
            <td class="Data change"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}} ({{decimals stocks/changePercent}}%) </td>
            <td class="Data high">{{decimals stocks/high}} {{showCurrency}}</td>
            <td class="Data low">{{decimals stocks/low}} {{showCurrency}}</td>
            <td class="Data volume column-last">{{toLocal stocks/volume}}</td>
        </tr>    
    </table>
    <div class="updatedWrapper">
        {{headers/t_updated}}: {{showDateTime stocks/timestamp}}
    </div>
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