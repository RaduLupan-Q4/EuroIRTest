<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSURL = "http://www.investorcom.co.uk/SharePriceChart/STMGroupPlc.css";
    if (!string.IsNullOrEmpty(Request.QueryString["ignoreCustomCSS"]))
    {
        if (Request.QueryString["ignoreCustomCSS"].ToString() == "true")
        {
            site.appendCustomCSSURL = "";
        }
    }
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">

    <table class="IRMiniQuoteQuoteModule table-look responsive">
        <tr>
            <td class="Data last" colspan="2">{{decimalsNoZero stocks/mid}}p</td>
        </tr>
        <tr>
            <td class="Data bid ask_bid">{{headers/t_bid}}&nbsp;{{decimalsNoZero stocks/bid}}p</td>
            <td class="Data ask ask_bid">{{headers/t_ask}}&nbsp;{{decimalsNoZero stocks/ask}}p</td>
        </tr>
    </table>

</script>

<%= site.newFooter("IRMiniquote") %>

