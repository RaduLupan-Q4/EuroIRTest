<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
%>
<%= site.newHeader("IRCustomModule") %>

<style>
    .disclaimer-IRCustomModule {
        display: none;
    }
</style>

<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
    var activeDataRequests = [
        'requestStockData'
    ];
</script>

<div class="IRCustomModuleMiniquote">
    
    <div class="disclaimer-customMiniquote">
        Delayed ~15 minutes <a target="_blank" href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">See terms</a>
    </div>

    <div class="exchangeGroup" id="amsterdam">
        <div class="exchangeCity">&nbsp;</div>
        <div class="subExchangeRow subListingA">
            <div class="ticker">&nbsp;</div>
            <div class="price">&nbsp;</div>
            <div class="change">&nbsp;</div>
        </div>
        <div class="subExchangeRow subListingB">
            <div class="ticker">&nbsp;</div>
            <div class="price">&nbsp;</div>
            <div class="change">&nbsp;</div>
        </div>
    </div>

    <div class="exchangeGroup" id="london">
        <div class="exchangeCity">&nbsp;</div>
        <div class="subExchangeRow subListingA">
            <div class="ticker">&nbsp;</div>
            <div class="price">&nbsp;</div>
            <div class="change">&nbsp;</div>
        </div>
        <div class="subExchangeRow subListingB">
            <div class="ticker">&nbsp;</div>
            <div class="price">&nbsp;</div>
            <div class="change">&nbsp;</div>
        </div>
    </div>

    <div class="exchangeGroup" id="newyork">
        <div class="exchangeCity">&nbsp;</div>
        <div class="subExchangeRow subListingA">
            <div class="ticker">&nbsp;</div>
            <div class="price">&nbsp;</div>
            <div class="change">&nbsp;</div>
        </div>
        <div class="subExchangeRow subListingB">
            <div class="ticker">&nbsp;</div>
            <div class="price">&nbsp;</div>
            <div class="change">&nbsp;</div>
        </div>
    </div>
    
    <div class="clear"></div>
    
</div>

<%= site.newFooter("IRCustomModule") %>

<script type="text/javascript">

    var toolRawStockData = null;
    var toolSet = false;
    $(function ()
    {
        function prepareTool() {
            if (!toolSet) {
                $.when(requestStockData).done(prepareData);
                toolSet = true;
            }
        }

        setInterval(function () {
            prepareTool();
        }, 100);

    });

    function prepareData(stockData) {
        toolRawStockData = stockData.data;
        buildTool();
    }
    function buildTool() {

        var toolDOM = "";

        var listingIndex = 0;
        $('#amsterdam .exchangeCity').html("Amsterdam"); //$('#amsterdam .exchangeCity').html(getExchangeCity(toolRawStockData[listingIndex].exchangeName));
        var subListing = "A";
        $('#amsterdam .subListing' + subListing + ' .ticker').html(getPosNegNeutralSpan(toolRawStockData[listingIndex].changePercent) + " " + toolRawStockData[listingIndex].symbol);
        $('#amsterdam .subListing' + subListing + ' .price').html('€' + formatDecimalNoZero(toolRawStockData[listingIndex].last));
        $('#amsterdam .subListing' + subListing + ' .change').html("(" + formatDecimalNoZero(toolRawStockData[listingIndex].changePercent) + "%)");
        listingIndex = 1;
        subListing = "B";
        $('#amsterdam .subListing' + subListing + ' .ticker').html(getPosNegNeutralSpan(toolRawStockData[listingIndex].changePercent) + " " + toolRawStockData[listingIndex].symbol);
        $('#amsterdam .subListing' + subListing + ' .price').html('€' + formatDecimalNoZero(toolRawStockData[listingIndex].last));
        $('#amsterdam .subListing' + subListing + ' .change').html("(" + formatDecimalNoZero(toolRawStockData[listingIndex].changePercent) + "%)");

        listingIndex = 2;
        $('#london .exchangeCity').html(getExchangeCity(toolRawStockData[listingIndex].exchangeName));
        subListing = "A";
        $('#london .subListing' + subListing + ' .ticker').html(getPosNegNeutralSpan(toolRawStockData[listingIndex].changePercent) + " " + toolRawStockData[listingIndex].symbol);
        $('#london .subListing' + subListing + ' .price').html(formatDecimalNoZero(toolRawStockData[listingIndex].last) + 'p');
        $('#london .subListing' + subListing + ' .change').html("(" + formatDecimalNoZero(toolRawStockData[listingIndex].changePercent) + "%)");
        listingIndex = 3;
        subListing = "B";
        $('#london .subListing' + subListing + ' .ticker').html(getPosNegNeutralSpan(toolRawStockData[listingIndex].changePercent) + " " + toolRawStockData[listingIndex].symbol);
        $('#london .subListing' + subListing + ' .price').html(formatDecimalNoZero(toolRawStockData[listingIndex].last) + 'p');
        $('#london .subListing' + subListing + ' .change').html("(" + formatDecimalNoZero(toolRawStockData[listingIndex].changePercent) + "%)");

        listingIndex = 4;
        $('#newyork .exchangeCity').html(getExchangeCity(toolRawStockData[listingIndex].exchangeName));
        subListing = "A";
        $('#newyork .subListing' + subListing + ' .ticker').html(getPosNegNeutralSpan(toolRawStockData[listingIndex].changePercent) + " " + toolRawStockData[listingIndex].symbol);
        $('#newyork .subListing' + subListing + ' .price').html(formatDecimalNoZero(toolRawStockData[listingIndex].last));
        $('#newyork .subListing' + subListing + ' .change').html("(" + formatDecimalNoZero(toolRawStockData[listingIndex].changePercent) + "%)");
        listingIndex = 5;
        subListing = "B";
        $('#newyork .subListing' + subListing + ' .ticker').html(getPosNegNeutralSpan(toolRawStockData[listingIndex].changePercent) + " " + toolRawStockData[listingIndex].symbol);
        $('#newyork .subListing' + subListing + ' .price').html(formatDecimalNoZero(toolRawStockData[listingIndex].last));
        $('#newyork .subListing' + subListing + ' .change').html("(" + formatDecimalNoZero(toolRawStockData[listingIndex].changePercent) + "%)");

    }

    function getPosNegNeutralSpan(number)
    {
        var addClass = "";
        var value = Number(number);
        if (value > 0) {
            addClass = "formatArrowPos";
        } else if (value == 0) {
            addClass = "formatArrowDef";
        }
        else {
            addClass = "formatArrowNeg";
        }
        return "<span class=\"" + addClass + "\"></span>";
    }

</script>