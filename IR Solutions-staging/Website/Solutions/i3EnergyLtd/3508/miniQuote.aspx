<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Raleway:300,400,500,700"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Oswald"" type=""text/css"" />";
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
                <div class="miniquoteSharePriceTitle">{{headers/t_share_price}}</div>
                <div class="Data last">{{decimals stocks/last}}</div>
            </div>
            <div class="clear"></div>
            <div class="Data updatedTimestamp">{{showDateWithFormat timestamp 'DD MMM YY HH:mm'}} {{showLocalTimeZoneShort}}</div>
			
            <!-- <div class="Data change">{{headers/t_change}}: {{decimals stocks/change}} {{decimals stocks/changePercent}} %</div> -->
            <!-- <div class="Data delayed">{{headers/t_market_cap}} {{showLondonMarketCapM stocks/marketCap}}M </div>  -->
        </div>
    </div></div>
</script>

<%= site.newFooter("IRMiniquote") %>

