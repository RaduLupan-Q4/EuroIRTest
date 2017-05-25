<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fast.fonts.net/cssapi/d62c0329-9fcc-43ae-b445-59557b0dbc19.css""/>";
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChartHTML'];
</script>

<div class="IRQuoteModule"></div>

<br />

<%--<div class="ToolMenu IRChangeListing"></div>--%>

<div class="IRChartOuter" style="display:none">

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

    <%--<div class="chartCurrentPriceBoxOuter">
        
        <div class="chartCurrentPriceBox">
            <div class="chartCurrentPriceBoxArrow">
                <div class="irCPB1"></div>
                <div class="irCPB2"></div>
                <div class="irCPB3"></div>
            </div>
            
            <span class="chartLastPrice"></span>
        </div>
    </div>--%>

</div>

<%= site.newFooter("IRChart") %>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRToolQuoteTable table-look table-look-horizontal quote quote-horizontal responsive-horizontal">
        {{#headers}}
        {{/headers}}
            {{#stocks}}
<tr><th>Symbol</th><th>Prev Close</th><th>Day High</th><th>Day Low</th><th>Bid</th></tr>
<tr><td>{{symbol}}</td><td>{{decimals prevClose}}</td><td>{{decimalsNoZero high}}</td><td>{{decimalsNoZero low}}</td><td>{{decimalsNoZero bid}}</td></tr>
<tr><th>Price</th><th>Change</th><th>Change (%)</th><th>Volume</th><th></th></tr>
<tr><td>{{decimals last}}</td><td>{{decimals change}}</td><td>{{decimals changePercent}}</td><td>{{toLocal volume}}</td><td></td></tr>
<tr></tr>
<tr></tr>

        {{/stocks}}
    </table>

</script>	
<script type="text/javascript">
Handlebars.registerHelper('calculatedMid', function (bid,ask) {
	var midOut='-';
	if(parseInt(bid)!=0 && parseInt(ask)!=0)
	{
		midOut=(bid+ask)/2;
	}

    return formatDecimalNoZero(midOut);
});
</script>
