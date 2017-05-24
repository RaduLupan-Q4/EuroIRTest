<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    //site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:300,400,700"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule sharepriceWrapper"><span class="ajaxLoader">Loading</span></div>
           

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniquoteModuleWrapper">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div>
                <div class="Data last">{{decimals stocks/last}}</div>
                <div class="currency">{{stocks/currency}}</div>
            </div>
            <div class="clear"></div>
            <div class="Data changeWrapper">{{headers/t_change}}: <span class="change">{{decimals stocks/change}} {{decimals stocks/changePercent}} %</span></div>
            <div class="Data marketCapWrapper">{{headers/t_market_cap}}: <span class="marketCap">&pound; {{showLondonMarketCapM stocks/marketCap}}m </span></div>
        </div>
    </div></div>
    <div class="data-delayed">{{headers/t_last_updated}}: {{showDateWithFormat timestamp 'DD MMM YY hh:mm'}} {{showLocalTimeZoneShort}}</div>
</script>

<%= site.newFooter("IRMiniquote") %>

