<%@ page language="C#" autoeventwireup="true" %>

<%@ import namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,500,700,300""/>";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
           <div class="currencyDataChangeContainer">
                <div class="currency"><span class="Data price">{{headers/t_price}}</span> <span class="Data last">{{decimals stocks/last}}</span></div>
               <div class="Data change">{{headers/t_change}}: <span class="{{showArrow stocks/change}}"></span> <span>{{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</span></div>
            </div>
            <div class="Data volume">{{headers/t_volume}}: <span>{{toLocal stocks/volume}}</span></div>
            </div>
            <div class="Data closeDate">Delayed ~15 minutes</div> 
        </div>
</script>

<%= site.newFooter("IRMiniquote") %>

