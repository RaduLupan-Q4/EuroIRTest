<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSURL = "//www.investorcom.co.uk/SharePriceChart/HealthPerm.css";
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
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="inc/jquery.minitabs.js"></script>
<link rel="stylesheet" type="text/css" href="ir.client.css">
<link rel="stylesheet" type="text/css" href="investorcom.css">

<div class="tabs-container">

        <div id="container" class="tabs">
            <ul>
                <li class="tabitem"><a href="#tab-1">Share Price Chart</a></li>
                <li class="tabitem"><a href="#tab-2">Investment Calculator</a></li>
                <li class="tabitem"><a href="#tab-3">Historical Lookup</a></li>
                <li class="tabitem"><a href="#tab-4">RNS News</a></li>
                <li class="tabitem"><a href="#tab-5">Profile</a></li>
            </ul>

            <div id="tab-1">
                <iframe src="chart.aspx<%= ignoreCustomCSS %>" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>
            <div id="tab-2">
                <iframe src="calc.aspx<%= ignoreCustomCSS %>" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>
            <div id="tab-3">
                <iframe src="lookup.aspx<%= ignoreCustomCSS %>" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>
            <div id="tab-4">
                <iframe src="news.aspx<%= ignoreCustomCSS %>" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>
            <div id="tab-5">
                <iframe src="profile.aspx<%= ignoreCustomCSS %>" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>
        </div>
</div>

<script type="text/javascript">
    $(document).ready(function () {
        $("#container").minitabs();
    });
</script>