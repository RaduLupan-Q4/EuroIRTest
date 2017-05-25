<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
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
                <tr>
                    <td class="last" colspan="2"><span class="t_share_price">{{headers/t_share_price}}:</span>&nbsp; <span class="stocksLast">{{decimals stocks/last}}€</span> &nbsp;<span class="stocksChange">({{decimals stocks/changePercent}}%<span class="{{showArrow stocks/change}}"></span>)</span></td>
                </tr>
                <%--<tr>
                    <td class="first-col">{{headers/t_change}}</td>
                    <td class="last-col"><span class="{{showArrow stocks/change}}"></span>{{decimals stocks/change}}({{decimals stocks/changePercent}}%)</td>
                </tr>
                <tr>
                    <td class="first-col">{{headers/t_volume}}</td>
                    <td class="last-col">{{decimals stocks/volume}}</td>
                </tr>
                <tr>
                    <td class="first-col">{{headers/t_exchange}} {{headers/t_name}}</td>
                    <td class="last-col">{{stocks/exchangeName}}</td>
                </tr>
                <tr>
                    <td colspan="2" class="delayed">Delayed ~15 minutes - <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx" target="_parent">See terms</a></td>
                </tr>--%>
            </table>
        </div>
    </div>
</script>
<style>
    body {
        background: #0078b1;
    }
</style>
<%= site.newFooter("IRMiniquote") %>

