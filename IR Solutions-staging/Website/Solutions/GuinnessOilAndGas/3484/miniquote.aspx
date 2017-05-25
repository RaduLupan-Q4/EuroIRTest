<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
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
            <div class="Data closeDate">{{stocks/exchangeName}} : {{stocks/symbol}} </div>
            <div class="Data last"><span class="{{showArrow stocks/change}}"></span>{{decimals stocks/last}}<span class="currency">{{stocks/currency}}</span></div>
            <div class="Data change"><%--<b>--%>{{headers/t_change}}: <%--</b>--%>{{decimals stocks/change}} ({{stocks/changePercent}} %) </div>

            <%--<div class="Data delayed">Delayed {{headers/t_15_minutes}} </div>--%>
        </div>
    </div>
</script>
<div class="miniquoteDisclaimer">
    <%= site.newFooter("IRMiniquote") %>
</div>

