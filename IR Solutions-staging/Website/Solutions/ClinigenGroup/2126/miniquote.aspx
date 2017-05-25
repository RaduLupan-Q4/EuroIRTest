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
    <h2>Share Price</h2>
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteSharepriceWrapper">
            <div class="Data last">{{stocks/currency}} {{decimals stocks/last}}</div>
            
        </div>
        <div class="sharePriceDetailsWrapper">

            <div class="Data change">{{headers/t_change}}: <span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}}p <td class="Data change formatColour">{{decimals stocks/changePercent}}%</td></div>
            <%--<div class="Data closeDate">Last updated at {{showTime time}} </div>--%>
            <div class="delayed">Delayed by 15 mins</div>
        </div>
    </div>
</script>
<div style="display: none;">
<%= site.newFooter("IRMiniquote") %>
    </div>
