<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSURL = "http://www.investorcom.co.uk/SharePriceChart/XPPowerPlc.css";
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

<div class="IRMiniquoteModule" style="width: 100%;"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="sharePriceHeader">{{headers/t_share_price}}</div>
    <table class="IRMiniQuoteQuoteModule table-look responsive">
        <tr>
            <td class="Data last">{{decimals stocks/last}}</td>
        </tr>
    </table>
    <div class="Data updateDateTime">as at {{showDateTime time}} </div>
     <div class="Data changeWrapper"><span class="{{showArrow stocks/change}}"></span> <div class="lastPriceChange"><span class="lastPriceChangeText">{{decimals stocks/change}}</span> <span class="Data change formatColour changePercent">({{decimals stocks/changePercent}}%)</span></div></div>
            
</script>

<%= site.newFooter("IRMiniquote") %>

