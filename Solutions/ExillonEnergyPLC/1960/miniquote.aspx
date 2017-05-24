<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();%>
<%= site.newHeader("IRMiniquoteChart") %>


<script type="text/javascript">
    var activeModules = ["IRMiniquoteChart"];
</script>

<div class="IRMiniquote">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRMiniquoteTemplate" type="text/x-handlebars-template">
  
    <div class="IRMiniquoteChartPlaceholder"></div>

</script>

<%= site.newFooter("IRMiniquoteChart") %>