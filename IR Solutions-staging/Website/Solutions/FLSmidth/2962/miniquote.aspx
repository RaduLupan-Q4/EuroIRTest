<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();%>
<%= site.newHeader("IRMiniquote") %>


<script type="text/javascript">
    var activeModules = ["IRMiniquote"];
</script>

<div class="IRMiniquoteModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">                          
            <div class="Data last"> <span class="currency">{{stocks/currency}}</span> {{decimals stocks/last}} </div>
            <div class="border"></div>
            <div class="Data change {{formatColour stocks/change}}"> <span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}}</div>
            
            <div class="Data name">{{stocks/name}} ({{stocks/symbol}}) </div>
    </div>
</script>

<%= site.newFooter("IRMiniquote") %>

