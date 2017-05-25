<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ["IRMiniquote"];
</script>

<div class="IRMiniquoteModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div>{{stocks/last}}&nbsp;GBp</div>


    <%--<div class="IRMiniquoteChartPlaceholder" dir="ltr"></div>--%>
</script>
<%= site.newFooter("IRQuote") %>
