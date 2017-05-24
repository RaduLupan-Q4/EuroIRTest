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
    <div class="miniquoteHeader"></div>
    
        
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="Data last">{{decimals stocks/last}}</div>
            
            <div class="Data change"> <span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}}{{stocks/currency}} | {{decimals stocks/changePercent}}% </div>
            <div class="Data highLow52Week">{{headers/t_52w_high_low}}: {{decimals stocks/high52Week}} / {{decimals stocks/low52Week}} </div>
            <%--<div class="Data delayed">{{headers/t_data_is_15_min_delayed}}</div>--%>
        </div>
        <div class="divideLine"></div>
       
    </div>
</script>

<%= site.newFooter("IRMiniquote") %>

