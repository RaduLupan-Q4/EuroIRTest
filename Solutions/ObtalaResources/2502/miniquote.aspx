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

    <table class="IRMiniQuoteQuoteModule table-look responsive">
        <tr>
            <td class="Data updated" style="float: left; width: 100%; font-size: 12px; line-height: 1; padding:0; text-align: center;">As at {{showDateTime timestamp}}</td>
            <td class="Data last" style="font-size: 25px; float: left; width: 100%; color: #111111; padding:0; text-align: center;">{{stocks/currency}} {{decimals stocks/last}}</td>
        </tr>
    </table>

</script>

<%= site.newFooter("IRMiniquote") %>

