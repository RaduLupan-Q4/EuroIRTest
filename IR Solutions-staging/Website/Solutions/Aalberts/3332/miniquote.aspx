<%@ page language="C#" autoeventwireup="true" %>

<%@ import namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
           <div class="currencyDataChangeContainer">
                <div class="currency">{{decimals stocks/last}}<span class="Data last"> </span>{{stocks/currency}}</div>
                <div class="Data change {{stocks/change}}">{{decimals stocks/changePercent}}%  <span class="{{showArrow stocks/change}}"></span></div>
            </div>
              
        </div>
    </div>
</script>

<%= site.newFooter("IRMiniquote") %>

