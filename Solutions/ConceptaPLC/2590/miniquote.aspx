<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
 
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

