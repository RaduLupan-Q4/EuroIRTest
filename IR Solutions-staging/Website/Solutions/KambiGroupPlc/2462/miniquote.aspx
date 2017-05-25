<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
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
    <%--<div class="chartMiniIFrameWrapper"><iframe src="miniquoteChart.aspx"></iframe></div>--%>
    <div class="miniquoteModuleWrapper">
        <table class="IRMiniQuoteQuoteModule table-look responsive">
            <tr class="updatedTime">
                <th class="Data closeDate">{{showDateWithFormat timestamp 'DD MMM YYYY - HH:mm'}} </th>
            </tr>
            <tr>
                <th class="Header clientName">{{stocks/name}} ({{stocks/symbol}})</th>
            </tr>
            <tr>
                <th class="Header sharePrice">{{headers/t_share_price}} </th>
                <th class="Header change">{{headers/t_change}} </th>
            </tr>
            <tr>

                <td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>

                <td class="Data change">{{decimals stocks/change}} <span class="{{showArrow stocks/change}}"></span></td>

            </tr>
        </table>
    </div>
</script>
<div class="miniquoteDisclaimerWrapper">
    <%= site.newFooter("IRQuote") %>
</div>
