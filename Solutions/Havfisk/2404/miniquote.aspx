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
    <h2>{{headers/t_share_price}}</h2>
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div>
                <div class="Data last">{{decimals stocks/last}}</div>
                <div class="currency">{{stocks/currency}}</div>
            </div>
            <div class="Data change">{{headers/t_change}}: {{decimals stocks/change}} {{decimals stocks/changePercent}}%</div>
            <div class="Data closeDate">{{showTime time}} at {{showDate stocks/timestamp}} </div>
        </div>
    </div>
</script>

<%= site.newFooter("IRQuote") %>

