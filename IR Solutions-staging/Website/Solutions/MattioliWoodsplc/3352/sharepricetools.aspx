<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRSharePriceToolsInvestorcom") %>


<div class="tabs-container">

        <div id="container" class="tabs">
            <ul>
                <li class="tabitem"><a href="#tab-1">Share Price Chart</a></li>
                <li class="tabitem txtCalc"><a href="#tab-2">Investment Calculator</a></li>
                <li class="tabitem"><a href="#tab-4">Lookup</a></li>
                <li class="tabitem"><a href="#tab-5">Profile</a></li>
            </ul>

            <div id="tab-1">
                <iframe src="chart.aspx" style="width: 100%; height: 600px; border: none;"></iframe>
            </div>
            <div id="tab-2">
                <iframe src="calc.aspx" style="width: 100%; height: 600px; border: none;"></iframe>
            </div>
            <div id="tab-4">
                <iframe src="lookup.aspx" style="width: 100%; height: 500px; border: none;"></iframe>
            </div>
            <div id="tab-5">
                <iframe src="profile.aspx" style="width: 100%; height: 1000px; border: none;"></iframe>
            </div>
        </div>
</div>


<%= site.newFooter("IRSharePriceToolsInvestorcom") %>
<script type="text/javascript">
    $(document).ready(function () {
        $("#container").minitabs();
    });
</script>