<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    //site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""https://fonts.googleapis.com/css?family=Roboto:400,700,300"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule">
        <div class="miniquoteDetailsWrapper">
            <%--<h3>Latest share price</h3>--%>
            <div class="Data updated">Last updated {{showDateWithFormat timestamp 'DD MMM YYYY'}}</div>
            <div>
                <div class="Data last">{{decimals stocks/last}} <div class="currency">{{stocks/currency}}</div></div>        
            </div>
            <div class="Data change">
                <span class="decimals"><span class="{{showArrow stocks/change}} arrow"></span>{{decimals stocks/change}}</span>
                <span class="decimals"><span class="{{showArrow stocks/change}} arrow"></span>{{decimals stocks/changePercent}}%</span>
            </div>
        </div>

    </div>
</script>

<%= site.newFooter("IRMiniquote") %>

