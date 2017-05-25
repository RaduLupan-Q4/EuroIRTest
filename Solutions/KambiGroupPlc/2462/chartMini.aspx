﻿<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//f.fontdeck.com/s/css/Gaw5TxJDiiEMYaqF8iLcIrFbPac/ir.euroinvestor.com/59507.css"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script type="text/javascript">
    var activeModules = ['IRChartHTMLMini'];
</script>

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
    </div>
</script>
<div class="IRChartOuter">

    <div class="IRChartHeader">
        <div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>
        <div class="IRChartCurrency">&nbsp;</div>
    </div>

    <div class="IRChartHTMLPlaceholder IRChartHTMLMiniPlaceholder">
        <span class="ajaxLoader">Loading</span>
    </div>

</div>
<div style="display:none;">
<%= site.newFooter("IRChartMini") %>
    </div>
<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>

