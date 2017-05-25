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


<%--<link rel="stylesheet" type="text/css" href="investorcom.css">--%>

<div class="tabs-container">

    <div id="container" class="tabs">
        <ul class="navbar">
            <li class="tabitem"><a href="#tab-1">Aktiekurs Graf</a></li>
            <li class="tabitem"><a href="#tab-2">Investerings Udregner</a></li>
            <li class="tabitem"><a href="#tab-3">Historiske data</a></li>
            <li class="tabitem"><a href="#tab-4">RNS Finansnyheder</a></li>
        </ul>

        <div id="tab-1">
            <iframe src="https://ir.euroinvestor.com/Solutions/Parken/2252/chart.aspx?language=da<%= ignoreCustomCSS %>" style="width: 100%; height: 1000px; border: none;"></iframe>
        </div>
        <div id="tab-2">
            <iframe src="https://ir.euroinvestor.com/Solutions/Parken/2252/calc.aspx?language=da<%= ignoreCustomCSS %>" style="width: 100%; height: 1000px; border: none;"></iframe>
        </div>
        <div id="tab-3">
            <iframe src="https://ir.euroinvestor.com/Solutions/Parken/2252/lookup.aspx?language=da<%= ignoreCustomCSS %>" style="width: 100%; height: 1000px; border: none;"></iframe>
        </div>
        <div id="tab-4">
            <iframe src="https://ir.euroinvestor.com/Solutions/Parken/2252/news.aspx?language=da<%= ignoreCustomCSS %>" style="width: 100%; height: 1000px; border: none;"></iframe>
        </div>
    </div>
</div>

<%= site.newFooter("IRSharePriceToolsInvestorcom") %>
<script type="text/javascript">

    $(document).ready(function () {
        $("#container").minitabs();
    });

</script>
