<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>


<%= site.newHeader("IRChart") %>

<% string language = "en";
    language = Request["language"];

    if (language != "fr")
    {
        language = "en";
    }
%>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare'];
</script>

<div class="IRQuoteModule"></div>
<br />
<div class="clear"></div>

<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>
<br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
        <tr>
            <th class="Header symbol column-first">{{headers/t_symbol}}</th>
            <th class="Header lastPrice">{{headers/t_last}}</th>
            <th class="Header change">{{headers/t_change}} (%)</th>
            <th class="Header volume">{{headers/t_volume}}</th>
            <th class="Header open">{{headers/t_open}}</th>
            <th class="Header prevClose">{{headers/t_prev_close}}</th>

            <th class="Header highYear">{{headers/t_day_high}}</th>
            <th class="Header lowYear column-last">{{headers/t_day_low}}</th>
        </tr>
        <tr>
            <td class="Data column-first symbol">{{stocks/symbol}}</td>
            <td class="Data lastPrice">{{decimals stocks/last}} {{stocks/currency}}</td>
            <td class="Data change {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}} ({{decimals stocks/changePercent}}%) </td>
            <td class="Data volume">{{toLocal stocks/volume}}</td>
            <td class="Data open">{{decimals stocks/open}}</td>
            <td class="Data prevClose">{{decimals stocks/prevClose}}</td>

            <td class="Data highYear">{{decimals stocks/high}}</td>
            <td class="Data lowYear column-last">{{decimals stocks/low}}</td>
        </tr>
    </table>
    
    <table class="table-look vertical customResponsiveVertical">
        <tr>
            <th class="IRToolQuoteTableItem Header column-first last">{{headers/t_symbol}}</td>
            <td class="IRToolQuoteTableItem Data">{{stocks/symbol}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_last}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/last}} {{stocks/currency}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_change}}</th>
            <td class="IRToolQuoteTableItem Data {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}} ({{decimals stocks/changePercent}}%) </td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_volume}}</th>
            <td class="IRToolQuoteTableItem Data">{{toLocal stocks/volume}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_open}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/open}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_prev_close}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/prevClose}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_day_high}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/high}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_day_low}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/low}}</td>
        </tr>
    </table>
    <div class="updated" style="text-align: right"><span>{{headers/t_updated}}: {{showDateWithFormat stocks/datetimestamp 'MM/DD/YYYY HH:mm'}}</span></div>

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
