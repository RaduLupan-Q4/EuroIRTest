<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
	site.appendCustomCSSURL = "";
    string ignoreCustomCSS = "";
    if (!string.IsNullOrEmpty(Request.QueryString["ignoreCustomCSS"]))
    {
        if (Request.QueryString["ignoreCustomCSS"].ToString() == "true")
        {
            ignoreCustomCSS = "?ignoreCustomCSS=true";
			site.appendCustomCSSURL = "";
        }
    }    
%>
<%= site.newHeader("IRSharePriceToolsInvestorcom") %>


<div class="tabs-container">

        <div id="container" class="tabs">
            <ul>
                <li class="tabitem"><a href="#tab-1">Share Price Chart</a></li>
                <li class="tabitem"><a href="#tab-2">Invested Calculator</a></li>
                <li class="tabitem"><a href="#tab-3">Email Alert</a></li>
                <li class="tabitem"><a href="#tab-5">Miniquote</a></li>
            </ul>

            <div id="tab-1">
                <iframe src="chart.aspx" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>
            <div id="tab-2">
                <iframe src="calc.aspx" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>
            <div id="tab-3">
                <iframe src="emailAlerts.aspx" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>
            <div id="tab-5">
                <iframe src="chartMini.aspx" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>
        </div>
</div>

<%= site.newFooter("IRSharePriceToolsInvestorcom") %>
<script type="text/javascript">
    $(document).ready(function () {
        $("#container").minitabs();
    });
</script>