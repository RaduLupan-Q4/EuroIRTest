<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:400,300,500,700&subset=latin,latin-ext"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule">
        <div class="miniquoteDetailsWrapper">
            <table class="mQuoteTable">
                <td class="first-col">{{headers/t_last_share_price}}</td>
                <tr>
                    <td class="last" colspan="2"><p>{{stocks/currency}} </p>{{decimals stocks/last}}</td>
                </tr>
                <tr class="change-tr">
                    <td class="first-col">{{stocks/currency}}: {{decimals stocks/change}}  <span class="procent">Percent ({{decimals stocks/changePercent}}%)</span><span class="{{showArrow stocks/change}}"></span></td>
                </tr>
            </table>
            <table class="mQuoteTable bottom-table">
                <tr>
                    <td class="first-col"><strong>{{headers/t_volume}}:</strong> {{toLocal stocks/volume}}</td>
                </tr>
                <tr>
                    <td class="first-col"><strong>{{headers/t_symbol}}:</strong> {{stocks/symbol}}</td>
                </tr>
                <tr>
                    <td colspan="2" class="delayed">Delayed ~15 minutes - <a class="link-target" href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">See terms</a></td>
                </tr>
            </table>
        </div>
    </div>
</script>
<div class="miniquoteDisclaimer">
    <%= site.newFooter("IRQuote") %>
</div>

<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>
