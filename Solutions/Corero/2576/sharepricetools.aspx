<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    //site.appendCustomCSSURL = "";
    //   string ignoreCustomCSS = "";
    //   if (!string.IsNullOrEmpty(Request.QueryString["ignoreCustomCSS"]))
    //   {
    //       if (Request.QueryString["ignoreCustomCSS"].ToString() == "true")
    //       {
    //           ignoreCustomCSS = "?ignoreCustomCSS=true";
    //		site.appendCustomCSSURL = "";
    //       }
    //   }    
%>
<%= site.newHeader("IRCustomModule") %>
<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
</script>


<div class="tabs-container">

        <div id="container" class="tabs">
            <ul>
                <li class="tabitem"><a href="#tab-1">Share Price Chart</a></li>
                <li class="tabitem"><a href="#tab-2">Investment Calculator</a></li>
                <li class="tabitem"><a href="#tab-3">Historical Lookup</a></li>
                <%--<li class="tabitem"><a href="#tab-4">RNS News</a></li>--%>
                <li class="tabitem last-tab"><a href="#tab-4">Profile</a></li>
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
<%--            <div id="tab-4">
                <iframe src="news.aspx" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>--%>
            <div id="tab-4">
                <iframe src="profile.aspx" style="width: 100%; height: 2000px; border: none;"></iframe>
            </div>
        </div>
</div>

<%= site.newFooter("IRCustomModule") %>
<script type="text/javascript" src="/inc/scripts/jquery/jquery.minitabs.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("/inc/scripts/jquery/jquery.minitabs.js")).Ticks.ToString()%>"></script>

<script type="text/javascript">
    $(document).ready(function () {
        $("#container").minitabs();
    });
</script>