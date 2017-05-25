<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare'];
</script>

<div class="IRQuoteModule"></div>
<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<br />
<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
        <tr>
            <th class="Header column-first symbol">{{headers/t_symbol}}</th>
            <th class="Header last">{{headers/t_last}}</th>
            <th class="Header change">{{headers/t_change}}</th>
            <th class="Header high">{{headers/t_day_high}}</th>
            <th class="Header low">{{headers/t_day_low}}</th>
            <th class="YTDHigh">YTD {{headers/t_high}}</th>
            <th class="YTDLow">YTD {{headers/t_low}}</th>
            <th class="Header bid">{{headers/t_bid}}</th>
            <th class="Header ask">{{headers/t_ask}}</th>
            <th class="Header volume column-last">{{headers/t_volume}}</th>

        </tr>
        <tr>
            <td class="Data column-first symbol">{{stocks/symbol}}</td>
            <td class="Data last">{{stocks/last}}</td>
            <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
            <td class="Data high">{{decimals stocks/high}}</td>
            <td class="Data low">{{decimals stocks/low}}</td>
            <td class="Data YTDHigh">{{decimals stocks/highYear}}</td>
            <td class="Data YTDLow">{{decimals stocks/lowYear}}</td>
            <td class="Data bid">{{decimals stocks/bid}}</td>
            <td class="Data ask">{{decimals stocks/ask}}</td>
            <td class="Data volume column-last">{{toLocal stocks/volume}}</td>
        </tr>
    </table>
    <table class="table-look vertical customResponsiveVertical">
        <tr>
            <th class="Header column-first symbol">
            {{headers/t_symbol}}</td>
                <td class="Data column-first symbol">{{stocks/symbol}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_last}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/last}} {{stocks/showCurrency}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_change}}</th>
            <td class="IRToolQuoteTableItem change {{formatColour stocks/change}}"></span>{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_day_high}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/high}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_day_low}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/low}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">YTD {{headers/t_high}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/highYear}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">YTD {{headers/t_low}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/lowYear}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_bid}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/bid}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_ask}}</th>
            <td class="IRToolQuoteTableItem Data">{{decimals stocks/ask}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_volume}}</th>
            <td class="IRToolQuoteTableItem Data">{{toLocal stocks/volume}}</td>
        </tr>
    </table>
    <div class="isinTimestampWrapper">
        <div class="isinCode">ISIN code: MT0000780107</div>
        <div class="updated"><span>{{headers/t_updated}}: </span><span>{{showDateTime timestamp}}</span></div>
    </div>
</script>


<script id="IRChartModuleTemplate" type="text/x-handlebars-template">
    <div class="downloadDataAsExcelWrapper buttonStyle">
        {{{includeIRChartDownloadDataAsExcel 'Download Excel'}}}
    </div>
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
<div class="chartDisclaimer">
    <%= site.newFooter("IRChart") %>
</div>
