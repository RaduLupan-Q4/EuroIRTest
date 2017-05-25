<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSURL = "http://www.investorcom.co.uk/SharePriceChart/CyanTechnology.css";
    if (!string.IsNullOrEmpty(Request.QueryString["ignoreCustomCSS"]))
    {
        if (Request.QueryString["ignoreCustomCSS"].ToString() == "true")
        {
            site.appendCustomCSSURL = "";
        }
    }    

%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChartHTML'];
    var activeFeatures = ['IRChartNews'];
</script>

<div class="IRQuoteModule"></div>

<div class="IRChartOuter">

    <div class="IRChartColour"></div>

    <div class="IRChartHeader">
        <div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>
        <div class="IRChartCurrency">&nbsp;</div>
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


<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
                <th class="Header symbol column-first">{{headers/t_symbol}}</th>
                <th class="Header last">Current Share Price</th>
                <th class="Header change">{{headers/t_change}} (%)</th>
                <th class="Header volume">Close price</th>
                <th class="Header volume">{{headers/t_volume}}</th>
            </tr>
            <tr>
                <td class="Data symbol column-first">{{stocks/symbol}}</td>
                <td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimalsTwoDigits stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
                <td class="Data volume">{{decimals stocks/prevClose}}</td>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
            </tr>
    </table>
</script>


<%= site.newFooter("IRChart") %>
<%--<link type="text/css" rel="stylesheet" href="investorcom.css" />--%>
<script type="text/javascript">
	Handlebars.registerHelper('decimalsTwoDigits', function (number) {
		return number.round(2).toFixed(2);
	}); 

</script>