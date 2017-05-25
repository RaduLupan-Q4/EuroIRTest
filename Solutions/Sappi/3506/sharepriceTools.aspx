<%--<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRCustomModule") %>
<%@ Import Namespace="Infrastructure.Providers" %>

<%
    var listing = Request.QueryString["listing"];
    var language = Request.QueryString["language"];

    if (language == null)
    {
        language = "en";
    }

    if (listing == null)
    {
        listing = "0";
    }
%>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.client.css")).Ticks.ToString()%>" />
    <script type="text/javascript">
        var activeModules = ['IRCustomModule'];
    </script>


</head>

<body>
    <div id="IRData"></div>

    <script id="IRDataTemplate" type="text/x-handlebars-template">
        {{#data}}
        <div class="tools-container">
            <div id="container" class="tabs">
                <iframe class="iframe chartTable" src="chartTable.aspx?listing=<%= listing %>&language=<%= language %>" frameborder="0" width="100%"></iframe>
                

                <ul class="tabsContent">
                    <li class="tabitem iframeOne"><a href="#tab-1">Share Graph</a></li>
                    <li class="tabitem"><a href="#tab-2">Share Data</a></li>
                    <li class="tabitem"><a href="#tab-3">Performance</a></li>

                </ul>


                <div id="tab-1">
<iframe id='wl_chartTab' style=""src ="http://cloud.weblink.com.au/clients/sappi/v3/chartformresponsive.aspx" width="100%" height="466px" scrolling="no" frameborder="0"></iframe>
                    <iframe src="chart.aspx" width="100%" height="700px" class="chartIFrame"></iframe>
                </div>
                <div id="tab-2">
                    <iframe src="profile.aspx" width="100%" height="700px" class="calcIFrame"></iframe>
                </div>
                <div id="tab-3">
                    <iframe src="profile.aspx" width="100%" height="700px" class="lookupIFrame"></iframe>
                </div>
            </div>
        </div>
        {{/data}}
    </script>

    <%= site.newFooter("IRCustomModule") %>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <script type="text/javascript" src="inc/jquery.minitabs.js"></script>
                    <script src="http://cloud.weblink.com.au/styles/chartstyles/responsive/WL_TabFrameFunctions.js"></script>

    <script>
        var listen = setInterval(function () {
            if ($('.iframeOne a').hasClass('current')) {
                clearInterval(listen);
            }
            $("#container").minitabs();
        }, 100);


        $.when(requestTranslationsData).done(function (data) {

            var source = $('#IRDataTemplate').html();
            var template = Handlebars.compile(source);
            $('#IRData').html(template(data));

        });

    </script>
</body>
</html>--%>
<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRCustomModule") %>
<link href="ir.client.css" rel="stylesheet" />
<script src="http://cloud.weblink.com.au/styles/chartstyles/responsive/WL_TabFrameFunctions.js"></script>


<script type="text/javascript">
    var activeModules = ['IRCustomModule'];


</script>
<div id="container">
<iframe id='wl_chartTab' style=""src ="http://cloud.weblink.com.au/clients/sappi/v3/chartformresponsive.aspx" width="100%" height="auto" scrolling="no" frameborder="0"></iframe>
    
</div>
    <%= site.newFooter("IRCustomModule") %>