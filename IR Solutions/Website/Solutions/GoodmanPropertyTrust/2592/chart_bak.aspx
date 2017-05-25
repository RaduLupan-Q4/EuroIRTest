<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700""/>";
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <script type="text/javascript">
        var activeModules = ['IRQuote', 'IRChart'];
    </script>

    <div class="IRQuoteModule"></div>
    <div class="IRChartModule">
        <div class="IRChartColour"></div>
    </div>

    <br />
   
<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
<!--    <div class="name">{{stocks/name}} (Euronext Paris: {{stocks/symbol}}): FR0000077919</div>-->
   <div class="table-wrapper">
    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
                <th class="Header last column-first">{{headers/t_last}}</th>
                <th class="Header change">{{headers/t_change}} (%)</th>
                <th class="Header bid">{{headers/t_bid}}</th>
                <th class="Header ask">{{headers/t_ask}}</th>
                <th class="Header volume">{{headers/t_volume}}</th>
                <th class="Header high">{{headers/t_high}}</th>
                <th class="Header low column-last">{{headers/t_low}}</th>
            </tr>
            <tr>
                <td class="Data last column-first">{{decimals stocks/last}} {{stocks/currency}}</td>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%)<%-- <span class="{{showArrow stocks/change}}"></span>--%></td>
                <td class="Data bid">{{decimals stocks/bid}}</td>
                <td class="Data ask">{{decimals stocks/ask}}</td>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
                <td class="Data high">{{decimals stocks/high}}</td>
                <td class="Data low column-last">{{decimals stocks/low}}</td>
            </tr>
    </table>
    </div>
    <div class="updated"><span>Last update: </span><span>{{showDateWithFormat timestamp 'DD MMM, YYYY HH:MM'}}</span></div>
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




<div class="chartDisclaimer">
    <%= site.newFooter("IRChart") %>
</div>
