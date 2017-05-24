<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    //site.appendCustomCSSURL = "http://www.investorcom.co.uk/SharePriceChart/YOLOLTPlc.css";
    //if (!string.IsNullOrEmpty(Request.QueryString["ignoreCustomCSS"]))
    //{
    //    if (Request.QueryString["ignoreCustomCSS"].ToString() == "true")
    //    {
    //        site.appendCustomCSSURL = "";
    //    }
    //}    
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""http://fast.fonts.net/cssapi/038ef175-b9aa-42d3-9d50-b8a2b1c371e0.css"" type=""text/css"" />";
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