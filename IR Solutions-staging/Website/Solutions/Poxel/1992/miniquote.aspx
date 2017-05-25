<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900|Oswald:400,300,700""/>";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700""/>";
    %>

<%= site.newHeader("IRMiniquote") %>


<script type="text/javascript">
    var activeModules = ["IRMiniquote"];
</script>

<div class="IRMiniquote">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRMiniquoteTemplate" type="text/x-handlebars-template">
  
    <div class="IRMiniquoteChartPlaceholder"></div>

</script>

<%= site.newFooter("IRMiniquote") %>