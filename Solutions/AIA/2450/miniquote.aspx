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
    <h2>{{headers/t_share_price}}</h2>
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="Data last">{{decimals stocks/last}}</div>
            <div class="currency">{{stocks/currency}}</div>
            <div class="Data change"> <span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}}p - {{showDateWithFormat timestamp 'DD MMM YYYY'}} </div>
            <%--<div class="Data closeDate">{{showTime time}} at {{showDate stocks/timestamp}} </div>--%>
            <a class="Data delayed">{{headers/t_data_is_15_min_delayed}} </a>
        </div>
        
        <%--<div class="sharePriceLinkWrapper">
            <div class="arrow"></div>
            <div class="sharePriceLink"><a href="http://www.market-tech.com" target="_parrent">Share price details</a></div>
        </div>--%>
    </div>
</script>

<%= site.newFooter("IRMiniquote") %>

