<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <h2>{{headers/t_share_price}}</h2>
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="Data last">{{decimals stocks/last}}</div>
            <div class="currency">{{stocks/currency}}</div>
            <div class="Data change">{{stocks/currency}} <span class="{{showArrow stocks/change}}"></span>{{decimals stocks/change}} </div>
            <div class="Data closeDate">{{showTime time}} at {{showDate stocks/timestamp}} </div>
            <%-- <div class="Data delayed">Delayed {{headers/t_15_minutes}} </div>--%>
        </div>
        <%--        <div class="divideLine"></div>
        <div class="sharePriceLinkWrapper">
            <div class="arrow"></div>
            <div class="sharePriceLink"><a href="http://www.hugogames.com/investor-relations/share-and-price-info/share-price/" target="_parrent">Share price details</a></div>
        </div>--%>
    </div>
</script>

<%= site.newFooter("IRMiniquote") %>

