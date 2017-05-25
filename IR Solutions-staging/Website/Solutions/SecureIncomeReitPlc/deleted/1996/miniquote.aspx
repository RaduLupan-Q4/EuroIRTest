<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <h2>Share Price</h2>
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="Data last">{{decimals stocks/last}}</div>
            <div class="currency">{{stocks/currency}}</div>
            <div class="Data change">{{stocks/currency}} <span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}} </div>
            <div class="Data closeDate">{{showTime time}} at {{showDate stocks/timestamp}} </div>
            <div class="Data delayed">Delayed 15 minutes </div>
        </div>
        <div class="divideLine"></div>
        <div class="sharePriceLinkWrapper">
            <div class="arrow"></div>
            <div class="sharePriceLink"><a href="http://www.market-tech.com" target="_parrent">Share price details</a></div>
        </div>
    </div>
</script>

<%= site.newFooter("IRMiniquote") %>

