<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700""/>";
    
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    
    <table class="IRMiniQuoteQuoteModule table-look responsive">
        <tr>
            <td class="Data last">{{decimals stocks/last}}</td>
        </tr>
    </table>

</script>

<%= site.newFooter("IRMiniquote") %>