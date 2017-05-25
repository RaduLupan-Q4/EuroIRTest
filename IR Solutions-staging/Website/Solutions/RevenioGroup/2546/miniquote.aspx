<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>



<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRQuoteModule">
        <table>
            <tr>
                <td colspan="3"> {{stocks/exchangeName}} </td>
            </tr>
            <tr>
                <td> {{stocks/name}} </td>
                <td> {{decimals stocks/last}} {{stocks/currency}} </td>
                <td> <span class="change {{formatColour stocks/change}}">{{decimals stocks/changePercent}}</span> </td>
            </tr>
        </table>

    </div>
</script>
<div class="miniquoteDisclaimer">
    <%= site.newFooter("IRMiniquote") %>
</div>







