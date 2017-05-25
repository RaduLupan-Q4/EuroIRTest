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

<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">
<!--
            <table class="IRMiniquoteChart table-look horizontal">
               <tr>
                   <td class="Data sharePrice">{{headers/t_share_price}} at <span>{{showTime timestamp}}</span></td>
               </tr>
                <tr>
                    <th class="Header symbol column-first">{{stocks/symbol}}</th>
                </tr>
                <tr>
                    <td class="Data last"> {{decimals stocks/change}} p</td>
                </tr>
                <tr>
                    <td class="Data change">{{headers/t_change}}: {{decimals stocks/changePercent}}%</td>
                </tr>
            </table>

<div class="line"></div>
-->
<div class="IRMiniquoteChartPlaceholder"></div>

<!--
<div class="footerCont">
    <div class="cube"></div><span>Landsec</span>
</div>
-->

</script>
<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>




<div style="display: none;">
	<%= site.newFooter("IRMiniquoteChart") %>
</div>

