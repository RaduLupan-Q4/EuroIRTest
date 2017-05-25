<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""https://fonts.googleapis.com/css?family=Open+Sans:300"" type=""text/css"" />";

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
            <div class="lastPriceChangeWrapper">
                <div class="Data changeMiniquote"><%--<span class="{{showArrow stocks/change}}"></span>--%> <span class="currencySymbol">$</span><span class="Data last">{{decimalsToFixed stocks/last}} <%--{{stocks/currency}}--%></span> <span class="currency">{{stocks/currency}}<%--{{decimals stocks/change}}--%></span> <%--({{decimals stocks/changePercent}}%)--%> </div>
                <%--  <div class="Data changeLabel">{{headers/t_change}}</div>--%>
            </div>
            <%-- <div class="marketCapWrapper">
                <div class="marketCap">{{showMarketCapM stocks/marketCap}} M {{stocks/currency}}</div>
                <div class="Data marketCapLabel">{{headers/t_market_cap}}</div>
            </div>--%>
        </div>

    </div>
</script>
<div class="IRMiniquoteModuleDisclaimer">
    <%= site.newFooter("IRMiniquote") %>
</div>


<script type="text/javascript">
    Handlebars.registerHelper('decimalsToFixed', function (number) {
        return number.toFixed(3);
    })

</script>

