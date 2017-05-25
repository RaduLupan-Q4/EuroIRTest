<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>



<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule">
            <div class="Data closeDate">{{stocks/exchangeName}} | {{stocks/symbol}} </div>
            <div class="Data last"></span>{{stocks/currency}} {{decimals stocks/last}}</div>
            <div class="Data change {{formatColour stocks/change}}"> <span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}} ({{decimals stocks/changePercent}} %) </div>
            <div class="Data update">{{headers/t_updated}} {{showDateWithFormat timestamp 'DD/MM/YYYY HH:mm' }}</div>
    </div>
</script>
<div class="miniquoteDisclaimer">
    <%= site.newFooter("IRMiniquote") %>
</div>

