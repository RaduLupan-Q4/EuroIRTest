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
    <%--  <h2>Share Price</h2>--%>
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="Data last">{{decimals stocks/last}} <span class="currency">{{stocks/currency}}</span></div>
            <div class="Data change"><span class="{{showArrow stocks/change}}"></span>{{decimals stocks/change}} </div>
            <%-- <div class="Data closeDate">{{showTime time}} at {{showDate stocks/timestamp}} </div>--%>
           <%-- <div class="Data delayed">Please allow 15 minute delay</div>--%>
        </div>
    </div>
</script>

<div class="disclaimerWrapper" style="display: none;">
    <%= site.newFooter("IRMiniquote") %>
</div>
