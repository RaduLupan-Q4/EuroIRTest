<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>

<% string language = "en";
    language = Request["language"];

    if (language != "fr")
    {
        language = "en";
    }
%>

<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="inc/jquery.minitabs.js"></script>
<link rel="stylesheet" href="ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.client.css")).Ticks.ToString()%>" />

<%--<link rel="stylesheet" href="investorcom.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("investorcom.css")).Ticks.ToString()%>" />--%>

<div class="tabs-container">

    <div id="container" class="tabs">
        <ul>
            <li class="tabitem"><a href="#tab-1">Share Price Chart</a></li>
            <li class="tabitem"><a href="#tab-2">Investment Calculator</a></li>
            <li class="tabitem"><a href="#tab-3">Historical Lookup</a></li>
            <%-- <li class="tabitem"><a href="#tab-4">Profile</a></li>--%>
<%--            <li class="tabitem"><a href="#tab-5">RNS News</a></li>
           
            <li class="tabitem lastTab custom"><a href="#tab-6">Admission documents</a></li>--%>
        </ul>

        <div id="tab-1">
            <iframe src="chart.aspx?language=<%= language %>" class="chartIFrame"></iframe>
        </div>
        <div id="tab-2">
            <iframe src="calc.aspx?language=<%= language %>" class="calcIFrame"></iframe>
        </div>
        <div id="tab-3">
            <iframe src="lookup.aspx?language=<%= language %>" class="lookupIFrame"></iframe>
        </div>
 <%--         <div id="tab-4">
            <iframe src="profile.aspx?language=<%= language %>" class="profileIFrame"></iframe>
        </div>
      <div id="tab-5">
            <iframe src="news.aspx?language=<%= language %>" class="newsIFrame"></iframe>
        </div>
        
        <div id="tab-6">
            <iframe id="customFrame?language=<%= language %>" src="newsAdmission.aspx"></iframe>

        </div>--%>
    </div>
</div>

<script type="text/javascript">
    $(document).ready(function () {
        $("#container").minitabs();
    });
</script>
