<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700""/>";
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
    
<div class="tabs-container">
    <div id="container" class="tabs">
        <ul class="tabsWrapper">
            <li class="tabitem tab-1"><a class="current" href="//ir.euroinvestor.com/Solutions/GoodmanPropertyTrust/2592/chart.aspx" target="_self">Security price information |</a></li>
            <li class="tabitem tab-2"><a href="//ir.euroinvestor.com/Solutions/GoodmanPropertyTrust/2592/lookup.aspx" target="_self">Historical price lookup |</a></li>
            <li class="tabitem tab-3"><a href="//ir.euroinvestor.com/Solutions/GoodmanPropertyTrust/2592/calc.aspx" target="_self">Investment calculator</a></li>
        </ul>
    </div>
</div>

    <div class="table-wrapper">
        <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
                <th class="Header last column-first">{{headers/t_last}}</th>
                <th class="Header change">{{headers/t_change}}</th>
                <th class="Header bid">{{headers/t_bid}}</th>
                <th class="Header ask">{{headers/t_ask}}</th>
                <th class="Header volume">{{headers/t_volume}}</th>
                <th class="Header high">{{headers/t_high}}</th>
                <th class="Header low column-last">{{headers/t_low}}</th>
            </tr>
            <tr>
                <td class="Data last column-first">{{decimals stocks/last}}<%-- {{stocks/currency}}--%></td>
                <td class="Data change {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</td>
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

<iframe width="100%" height="600" src="//ir1.euroinvestor.com/asp/ir/GoodmanPropertyTrust/2016/chart.aspx"></iframe>

<%--<script id="IRChartModuleTemplate" type="text/x-handlebars-template">

    <div class="IRChartNavigation">
        {{{includeIRChartCompanyName}}}

    </div>

    <div class="IRChartPlaceholderArea">
        {{{includeIRChartDomSettings}}}
            {{{includeIRChartPlaceholder}}}
            {{{includeIRChartChangePeriod 'y1'}}}
    </div>

</script>--%>




<div class="chartDisclaimer">
    <%= site.newFooter("IRChart") %>
</div>
