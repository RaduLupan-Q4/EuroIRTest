<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Roboto:400,600,500""/>";
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <script type="text/javascript">
     var activeModules = ['IRQuote', 'IRChart'];
     var activeFeatures = ['IRChartCompare'];
    </script>
    All data before July 25, 2016, relate to Ahold (ticker: AH).<br /><br />
    <div class="IRQuoteModule"></div>

    <div class="IRChartModule">
        <div class="IRChartColour"></div>
    </div>

    <br />

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
                <td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>
                <td class="Data change {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}} arrow"></span>{{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</td>
                <td class="Data bid">{{decimals stocks/bid}}</td>
                <td class="Data ask">{{decimals stocks/ask}}</td>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
                <td class="Data high">{{decimals stocks/high}}</td>
                <td class="Data low">{{decimals stocks/low}}</td>
            </tr>
    </table>
    <div class="updated"><span>Last update: </span><span>{{showDateWithFormat timestamp 'DD MMM, YYYY HH:MM'}} {{showLocalTimeZoneShort}}</span></div>
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
<div class="chartDisclaimer" style="display: none;">
    <%= site.newFooter("IRChart") %>
</div>

<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>
