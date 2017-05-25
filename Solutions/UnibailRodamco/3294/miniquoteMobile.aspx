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
    <div class="mobileWrapper">
        <div class="columnLeft">
            <div class="mini-image"></div>
        </div>
        <div class="columnRight">
            <div class="miniquote-data-header">{{headers/t_share_price}} </div>
            <div class="miniquote-data-date">{{showDateWithFormat stocks/timestamp 'MMMM DD, YYYY - HH:mm'}}</div>
            <div class="mini-last">{{decimals stocks/last}} <span class="currency">&euro;</span> </div>
            <div class="change {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span>{{decimals stocks/changePercent}} % </div>
        </div>
    </div>
</script>

<%= site.newFooter("IRMiniquote") %>