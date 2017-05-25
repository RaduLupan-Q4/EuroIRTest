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
        <div class="miniquoteDetailsWrapper">
            <div>
                <div class="Data last">{{decimals stocks/last}}</div>
                <div class="currency">{{stocks/currency}}</div>
            </div>
            <div class="Data change">{{headers/t_change}}: {{decimals stocks/change}} {{decimals stocks/changePercent}}%</div>
            <div class="Data closeDate">{{showTime time}} at {{showDate stocks/timestamp}} </div>
            <div class="Data delayed">{{headers/t_data_is_at_least_15_min_delayed}} </div>
        </div>
    </div>
</script>

<%= site.newFooter("IRMiniquote") %>

