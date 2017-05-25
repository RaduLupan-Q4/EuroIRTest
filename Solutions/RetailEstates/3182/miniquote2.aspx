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
    <div class="IRMiniQuoteQuoteModule">
        <div class="leftColumn">
            <div class="Data last"><span class="currency">{{stocks/currency}}</span> {{decimals stocks/last}} </div>
            <div class="Data change {{formatColour stocks/change}}">{{decimals stocks/changePercent}} % <span class="{{showArrow stocks/change}}"></span></div>
        </div>
        <div class="rigthColumn">
            <div class="Data name">{{stocks/name}} ({{stocks/symbol}}) </div>
            <div class="Data updated">{{showDateWithFormat stocks/timestamp 'DD MMM HH:mm'}} {{showLocalTimeZoneShort}} </div>
        </div>
    </div>
</script>

<%= site.newFooter("IRMiniquote") %>

