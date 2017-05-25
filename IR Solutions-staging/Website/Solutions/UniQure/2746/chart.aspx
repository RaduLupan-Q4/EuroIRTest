<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();  

%>


<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = [''];
</script>

<div class="IRQuoteModule"></div><br />
<div class="clear"></div>

<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>
<br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
                <th class="Header last column-first">{{headers/t_last}}</th>
                <th class="Header change">{{headers/t_change}} (%)</th>
                <th class="Header volume">{{headers/t_volume}}</th>
                <th class="Header prevClose">{{headers/t_prev_close}}</th>
                <th class="Header open">{{headers/t_open}}</th>
                <th class="Header highYear">{{headers/t_high}} {{headers/t_year}}</th>
                <th class="Header lowYear column-last">{{headers/t_low}} {{headers/t_year}}</th>
            </tr>
            <tr>
                <td class="Data last column-first">{{decimals stocks/last}} {{stocks/currency}}</td>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} {{stocks/currency}} ({{decimals stocks/changePercent}}%) </td>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
                <td class="Data prevClose">{{decimals stocks/prevClose}} {{stocks/currency}}</td>
                <td class="Data open">{{decimals stocks/open}} {{stocks/currency}}</td>
                <td class="Data highYear" >{{decimals stocks/highYear}} {{stocks/currency}}</td>
                <td class="Data lowYear column-last" >{{decimals stocks/lowYear}} {{stocks/currency}}</td>
            </tr>
    </table>

    <table class="table-look vertical customResponsiveVertical">
        <tr>
            <th class="IRToolQuoteTableItem Header column-first last">{{headers/t_last}}</td>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/last}} {{stocks/currency}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_change}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/change}} {{stocks/currency}} ({{decimals stocks/changePercent}}%) </td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_volume}}</th>
            <td class="IRToolQuoteTableItem Data">{{toLocal stocks/volume}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_prev_close}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/prevClose}} {{stocks/currency}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_open}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/open}} {{stocks/currency}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_high}} {{headers/t_year}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/highYear}} {{stocks/currency}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_low}} {{headers/t_year}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/lowYear}} {{stocks/currency}}</td>
        </tr>
    </table>


    <div class="updated" style="text-align: right"><span>Updated: {{showDateTime stocks/timestamp}} {{showLocalTimeZoneShort}}</span></div>

</script>


<script id="IRChartModuleTemplate" type="text/x-handlebars-template">
  
    <div class="IRChartNavigation">
        {{{includeIRChartCompanyName}}}
    </div>

    <div class="IRChartPlaceholderArea">
        {{{includeIRChartDomSettings}}}
        {{{includeIRChartPlaceholder}}}
        {{{includeIRChartChangePeriod 'y1'}}}
    </div>

</script>


<%= site.newFooter("IRChart") %>
