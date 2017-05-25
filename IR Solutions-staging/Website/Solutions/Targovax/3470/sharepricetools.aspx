<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();

%>
<%= site.newHeader("IRSharePriceToolsInvestorcom") %>

<link href="https://fonts.googleapis.com/css?family=Open+Sans:700" rel="stylesheet">

<div class="tabs-container">

        <div id="container" class="tabs">
            <ul>
                <li class="tabitem"><a href="#tab-1">Share Price Chart</a></li>
                <li class="tabitem"><a href="#tab-2">Investment Calculator</a></li>
                <li class="tabitem"><a href="#tab-3">Historical Lookup</a></li>
            </ul>

            <div id="tab-1">
                <iframe src="chart.aspx" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>
            <div id="tab-2">
                <iframe src="calc.aspx" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>
            <div id="tab-3">
                <iframe src="lookup.aspx" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>

        </div>
</div>

<%= site.newFooter("IRSharePriceToolsInvestorcom") %>
<script type="text/javascript">
    $(document).ready(function () {
        $("#container").minitabs();
    });
</script>