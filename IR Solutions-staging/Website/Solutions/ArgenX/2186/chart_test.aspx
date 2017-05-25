<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChartHTML'];
    var activeFeatures = ['IRChartCompare', 'IRChartPressReleaseIRChartHeadline'];
</script>

<div class="IRQuoteModule"></div>
<br />

<%--<div class="IRChartToolMenu IRChartChangeListing"></div><br />--%>
<h2 style="padding-left:0;">Historical Trade Info</h2>
<div style="font-size:90%;">Average daily number of shares traded.</div>
<iframe src="customTool_averageVolume.aspx" allowtransparency="true" style="width: 100%; height: 150px; border: none;"></iframe>
<h2>Stock Chart</h2>
<div class="IRChartModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
        {{#headers}}
            <tr>
                <th class="Header column-first symbol">{{t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}}</th>
                <th class="Header bid">{{t_bid}}</th>
                <th class="Header ask">{{t_ask}}</th>
                <th class="Header volume">{{t_volume}}</th>
                <th class="Header high">{{t_high}}</th>
                <th class="Header low">{{t_low}}</th>
                <th class="Header low">{{t_market_cap}}</th>
                <th class="Header column-last time">{{t_updated}}</th>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="Data column-first symbol">{{symbol}}</td>
                <td class="Data last">{{decimals last}} {{showCurrency}}</td>
                <td class="Data change"><span class="{{showArrow stocks/change}}"></span>{{decimals change}} ({{decimals changePercent}}%) </td>
                <td class="Data bid">{{decimals bid}}</td>
                <td class="Data ask">{{decimals ask}}</td>
                <td class="Data volume">{{toLocal volume}}</td>
                <td class="Data high">{{decimals high}}</td>
                <td class="Data low">{{decimals low}}</td>
                <td class="Data low">{{showMarketCapM marketCap}}M {{showCurrency}}</td>
                <td class="Data column-last time">{{showDateTime timestamp}}</td>
            </tr>
        {{/stocks}}
    </table>
</script>

<div class="IRChartOuter">

    <div class="IRChartColour"></div>

    <div class="IRChartHeader">
        <div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>
        <div class="IRChartCurrency">&nbsp;</div>
    </div>

    <div class="IRChartNavigation">
        <div class="IRChartCompanyName">argenx</div>
        <div class="IRChartNavigationInner">
            <div class="IRChartMenuTrigger">Menu</div>
            <div class="IRChartMenuTriggerBody" style="display: none;">
                <div class="IRChartComparisonHeader">Comparison</div>
            </div>
            <div class="IRChartComparison">
                    <div class="IRChartComparisonHeader">Comparison</div>
                <div class="IRChartComparisonBody" style="display: none;">
                    <div class="IRChartComparisonBodyList">
                        <div class="IRChartComparisonBodyListHeader">Index</div>
                        <div title="Index" class="basicButtonLook color002395" id="Index_0_1">Bel Mid Index</div><br>
                        <div title="Index" class="basicButtonLook color03C03C" id="Index_1_2">AMX Index</div><br>
                        <div title="Index" class="basicButtonLook color0F52BA" id="Index_2_3">NEXT Biotech</div><br>
                        <div title="Index" class="basicButtonLook color138808" id="Index_3_4">NASDAQ Biotech</div><br>
                        <div class="basicButtonLook" id="IRChartNavigationClearComparison">Clear all</div>

                    </div>

                </div>

            </div>

        </div>

    </div>

    <div class="IRChartHTMLPlaceholder" style="height: 500px; clear: both;">
        <span class="ajaxLoader">Loading</span>
    </div>

    <div class="chartNavBarRange">
        <div class="chartChangePeriod">
            <div id="d1">1 d</div>
            <div id="d5">5 d</div>
            <div id="m3">3 m</div>
            <div id="m6">6 m</div>
            <div id="y1" class="activePeriod">1 y</div>
            <div id="y2">2 y</div>
            <div id="y5">5 y</div>
            <div id="max">Max</div>
        </div>
    </div>
</div>

<div class="chartDisclaimer">
    <%= site.newFooter("IRChart") %>
</div>
