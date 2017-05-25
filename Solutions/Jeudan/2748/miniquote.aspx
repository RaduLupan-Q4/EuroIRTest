<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fast.fonts.net/cssapi/c8776784-5d75-432d-ae59-d50b8bc58a15.css"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Oswald"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
<%--    <h2>Share Price</h2>--%>
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="Data last">{{decimals stocks/last}} <span class="currency">{{stocks/currency}}</span></div>
            <div class="Data change"><span class="changeText">{{headers/t_change}}:</span> <span style="margin-right: 5px;">{{stocks/currency}}</span><span style="margin-right: 5px;">{{decimals stocks/change}}</span> {{decimals stocks/changePercent}}% </div>
            <div class="Header marketCap">{{headers/t_market_cap}}:  </div><div class="Data marketCap">{{showMarketCapM stocks/marketCap}}m {{stocks/currency}}  </div>
           <div class="updated"><span>{{headers/t_updated}}: </span><span>{{showDateWithFormat stocks/timestamp 'DD MMM HH:MM'}} {{showLocalTimeZoneShort}}</span></div>

        </div>
     
        <%--<div class="sharePriceLinkWrapper">
            
            <div class="sharePriceLink"><a href="#" target="_parrent">View Share price details</a></div><div class="arrow"></div>
        </div>--%>
    </div>
</script>
<div class="miniquotedisclaimer" style="display:none;">
<%= site.newFooter("IRMiniquote") %>
    </div>



