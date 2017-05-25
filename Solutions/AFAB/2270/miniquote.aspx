<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""inc/fonts/stylesheet.css""/>";
%>
<%= site.newHeader("IRMiniquote") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <table class="IRToolQuoteTable table-look table-look horizontal quote quote-horizontal responsive-horizontal">
        {{#stocks}}
            <tr>
                <td class="IRToolQuoteTableItem Data Symbol column-first">{{symbol}}</td>
                <td class="IRToolQuoteTableItem Data">SSE</td>
                                <td class="IRToolQuoteTableItem Data">{{decimals last}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals change}}</td>
                <td class="IRToolQuoteTableItem Data Timestamp column-last">{{showTime timestamp}}</td>
            </tr>
        {{/stocks}}
    </table>
</script>

<%= site.newFooter("IRQuote") %>

