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
            <div class="Data change">{{headers/t_change}}: {{decimals stocks/change}}p / {{decimals stocks/changePercent}}%</div>
            <div class="Data delayed">{{headers/t_market_cap}}: £{{showLondonMarketCapM stocks/marketCap}}m </div>
        </div>
         <div class="Data updated">Last {{headers/t_updated}}: {{showDateWithFormat timestamp 'DD MMM YYYY HH:MM'}} GMT</div>
    </div></div>
   
</script>

<%= site.newFooter("IRMiniquote") %>

