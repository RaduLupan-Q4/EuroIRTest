<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//cloud.typography.com/7594474/696708/css/fonts.css"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <%--<h2>Share Information</h2>--%>
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="lastPriceWrapper">
                <div class="Data last">{{decimals stocks/last}} {{stocks/currency}}</div>
                <div class="lastPriceLabel">{{headers/t_last_share_price}}</div>
            </div>
            <div class="lastPriceChangeWrapper">
                <div class="Data changeMiniquote"><span class="{{showArrow stocks/change}}"></span>{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) </div>
                <div class="Data changeLabel">{{headers/t_change}}</div>
            </div>
            <div class="marketCapWrapper">
                <div class="marketCap">{{showMarketCapM stocks/marketCap}} M {{stocks/currency}}</div>
                <div class="Data marketCapLabel">{{headers/t_market_cap}}</div>
            </div>
        </div>

    </div>
</script>

<%= site.newFooter("IRMiniquote") %>

<script type="text/javascript">

    Handlebars.registerHelper('showMarketCapM', function (number) {
        return (number / 1000000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });

</script>
