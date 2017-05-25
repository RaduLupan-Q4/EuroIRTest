<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="inc/jquery.minitabs.js"></script>
<link rel="stylesheet" href="ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.client.css")).Ticks.ToString()%>" />

<link rel="stylesheet" href="investorcom.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("investorcom.css")).Ticks.ToString()%>" />

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
                <iframe src="chart.aspx" class="chartIFrame"></iframe>
            </div>
            <div id="tab-2">
                <iframe src="calc.aspx" class="calcIFrame"></iframe>
            </div>
            <div id="tab-3">
                <iframe src="lookup.aspx" class="lookupIFrame"></iframe>
            </div>
            <div id="tab-4">
                <iframe src="news.aspx" class="newsIFrame"></iframe>
            </div>
            <div id="tab-5">
                <iframe src="profile.aspx" class="profileIFrame"></iframe>
            </div>
        </div>
</div>

<script type="text/javascript">
    $(document).ready(function () {
        $("#container").minitabs();
    });
</script>