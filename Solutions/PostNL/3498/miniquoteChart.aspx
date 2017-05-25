<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();
	site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700""/>";

	string ln = Request["language"];
	if (!string.IsNullOrEmpty(ln) && ln.Equals("zh-t"))
	{
		site.appendCustomCSSFont = @"<link href='fonts/notosanstc.css' rel='stylesheet' type='text/css'>";
	}
%>
<%= site.newHeader("IRMiniquoteChart") %>


<script type="text/javascript">
	var activeModules = ["IRMiniquoteChart"];
</script>

<div class="IRMiniquoteChartModule">
	<span class="ajaxLoader">Loading</span>
</div>

<script type="text/javascript">
	var activeModules = ["IRMiniquoteChart"];
</script>



<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">


	<div class="IRMiniquoteChartPlaceholder"></div>

</script>
<div class="IRMiniquoteChartPlaceholder"></div>



<div style="display: none;">
	<%= site.newFooter("IRMiniquoteChart") %>
</div>
<script>
$(document).ajaxStop(function() {
  var loc = window.location.search;
if (loc.indexOf('language=nl') >-1 ) {
  translations.t_close = "Koers";
}



  });
</script>

