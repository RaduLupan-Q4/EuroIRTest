<%@ page language="C#" autoeventwireup="true" %>

<%@ import namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    //site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <h2 class="IRminiquoteHeader">{{headers/t_share_price}}</h2>
    <div class="IRminiquote Data last"><%--<span class="{{showArrow stocks/change}}"></span>--%>{{decimals stocks/last}}<span class="IRminiquote currency">{{stocks/currency}}</span></div>
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="IRminiquote Data closeDate">{{showDate stocks/timestamp}} {{showTime time}} </div>               
            <div class="IRminiquote Data change">{{decimals stocks/change}} <%--({{stocks/changePercent}} %)--%> </div>
            <%-- <div class="Data delayed">Delayed {{headers/t_15_minutes}} </div>--%>
        </div>
    </div>
</script>

<%= site.newFooter("IRQuote") %>

