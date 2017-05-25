<%@ page language="C#" autoeventwireup="true" %>

<%@ import namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRMiniquote") %>




<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
               <span class="Data share-price">{{headers/t_share_price}}</span>
               <div class="gbx currency">{{decimals stocks/last}}<span class="gbxlast Data last">{{stocks/currency}}</span></div>
               <div class="miniq Data change {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span> </div> 
        </div>       
    </div>
</script>


<%= site.newFooter("IRMiniquote") %>

