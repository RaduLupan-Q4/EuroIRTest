<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""http://fast.fonts.net/cssapi/9a16628e-8fe6-4d0b-ae99-7f88b2b32d15.css"" type=""text/css"" />";
%>

<%= site.newHeader("IRChartMini") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<script type="text/javascript">
    var activeModules = ['IRMiniquote', 'IRChartHTMLMini', 'IRChartHTML'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

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
</script>

<div class="IRChartHTMLMiniPlaceholder">
    <span class="ajaxLoader">Loading</span>
</div>


<%= site.newFooter("IRChartMini") %>