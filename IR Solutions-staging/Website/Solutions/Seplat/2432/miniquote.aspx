<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:400,300,500,700&subset=latin,latin-ext"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<style>
    body {
        background: transparent;
    }
</style>
<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>


<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">

    <iframe class="NSEMiniquote" src="http://ir1.euroinvestor.com/asp/ir/SEPLAT/2016/miniquoteNSE.aspx?listing=1"></iframe>
    <div class="divider" style="border-bottom: 1px solid #bfbfbf; margin-top: 10px; margin-bottom: 10px;"></div>
    <div class="IRMiniQuoteQuoteModule">
        <div class="miniquoteDetailsWrapper">
            <a href="http://seplatpetroleum.com/investor-centre/share-price/">
                <h3>{{stocks/exchangeName}}</h3>
            </a>
            <table class="miniquoteTable">

                <tr>
                    <td class="last" colspan="2"><strong>{{decimals stocks/last}} </strong>{{stocks/currency}}</td>
                </tr>
                <tr class="change-tr">
                    <td class="first-col">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) - {{showDateWithFormat stocks/tradeTimestamp 'DD MM YYYY'}} at {{showDateWithFormat stocks/tradeTimestamp 'hh:mm'}}</td>
                </tr>
            </table>

        </div>
    </div>
</script>
<div class="miniquoteDisclaimer" style="display: none;">
    <%= site.newFooter("IRQuote") %>
</div>

