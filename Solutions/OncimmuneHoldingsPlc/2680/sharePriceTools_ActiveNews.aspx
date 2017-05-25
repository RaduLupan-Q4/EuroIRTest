﻿<%@ Page Language="C#" AutoEventWireup="true" %> 

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();  
%>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="jquery.minitabsActiveNews.js"></script>
<link rel="stylesheet" type="text/css" href="ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.client.css")).Ticks.ToString()%>" />

<div class="tabs-container">

        <div id="container" class="tabs">
            <ul>
                <li class="tabitem tab-1"><a href="#tab-1" class="tab-1">Share Price Chart</a></li>
                <li class="tabitem"><a href="#tab-2">Investment Calculator</a></li>
                <li class="tabitem"><a href="#tab-3">Historical Lookup</a></li>
                <li class="tabitem tab-4"><a href="#tab-4" class="tab-4 ">RNS News</a></li>
                <li class="tabitem"><a href="#tab-5">Profile</a></li>
            </ul>

            <div id="tab-1" style="display: none;">
                <iframe src="chart.aspx" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>
            <div id="tab-2">
                <iframe src="calc.aspx" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>
            <div id="tab-3">
                <iframe src="lookup.aspx" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>
            <div id="tab-4">
                <iframe src="news.aspx" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>
            <div id="tab-5">
                <iframe src="profile.aspx" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>
        </div>
</div>

<script type="text/javascript">
    $(document).ready(function () {
        $("#container").minitabs();
        $('#tab-1').css({ 'display': "none" });
        $('#tab-4').css({ 'display': "block" });
        $('.tab-1').removeClass("current");
        $('.tabs > UL > LI > A.tab-4').addClass("current");
    });

</script>