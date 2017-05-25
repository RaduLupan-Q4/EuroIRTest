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
    <h5>{{headers/t_share_price}}</h5>
    <table class="IRMiniQuoteQuoteModule table-look responsive">
        <tr>
            <td class="Data last">{{decimals stocks/last}}<span class="Data currency">{{stocks/currency}}</span></td>
        </tr>
        <tr>
            <td class="Data changePercent"><span class="{{showArrow stocks/change}}"></span>{{decimals stocks/changePercent}}%</td>
        </tr> 
        <tr>
            <td class="Data lastUpdated"><span class="LastUpdatedTxt">{{headers/t_last_updated}}:</span> {{showDateWithFormat stocks/timestamp 'DD MMM YYYY HH:mm'}}</td>
        </tr>
    </table>

</script>

<%= site.newFooter("IRMiniquote") %>

