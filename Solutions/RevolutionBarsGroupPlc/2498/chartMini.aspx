<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""http://fast.fonts.net/cssapi/9a16628e-8fe6-4d0b-ae99-7f88b2b32d15.css"" type=""text/css"" />";
%>

<%= site.newHeader("IRChartMini") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<script type="text/javascript">
    var activeModules = ['IRChartHTMLMini'];
</script>

<%--<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <h2>Share Price Chart</h2>
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="Data price">{{decimals stocks/last}}p</div>
         <div class="info-wrapper">
            <div class="marketCapWrapper">
                <div class="Header">Mkt Cap: </div>
                <div class="Data">£{{showLondonMarketCapM stocks/marketCap}}m</div>
            </div>
            <div class="volumeWrapper">
                <div class="Header">Today's Volume: </div>
                <div class="Data volume">{{toLocal stocks/volume}}</div>
            </div>    
        </div>       
    </div>
</script>--%>
<div class="IRChartOuter">
    <div class="IRChartHeader">
        <div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>
        <div class="IRChartCurrency">&nbsp;</div>
    </div>
    <div class="IRChartHTMLPlaceholder IRChartHTMLMiniPlaceholder">
        <span class="ajaxLoader">Loading</span>
    </div>

    <div class="chartNavBarRange" style="display: none;">
        <div class="chartChangePeriod">
            <div id="d1">1 d</div>
            <div id="d5">5 d</div>
            <div id="m3">3 m</div>
            <div id="m6" class="activePeriod">6 m</div>
            <div id="y1">1 y</div>
            <div id="y2">2 y</div>
            <div id="y5">5 y</div>
            <div id="max">Max</div>
        </div>
    </div>
</div>

<%= site.newFooter("IRChartMini") %>