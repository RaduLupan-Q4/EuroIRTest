<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>
<%= site.newHeader("IRCustomModule") %>
<% string language = "en";
    language = Request["language"];

    if (language != "es")
    {
        language = "en";
    }
%>

<link rel="stylesheet" type="text/css" href="ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.client.css")).Ticks.ToString()%>"></link>
<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
</script>
<style>
    body {
        overflow: hidden;
    }
     .disclaimer.disclaimer-IRCustomModule {
         display: none;
     }
</style>


<div class="tabs-container">

        <div id="container" class="tabs">
            <ul>
                <li class="tabitem"><a href="#tab-1">NYSE</a></li>
                <li class="tabitem"><a href="#tab-2">MERVAL</a></li>
            </ul>
            
            <div id="tab-1">
                <iframe src="miniquotechart.aspx?language=<%= language %>&listing=0" style="width: 100%; height: 400px; border: none;"></iframe>
            </div>
            <div id="tab-2">
                <iframe src="miniquotechart.aspx?language=<%= language %>&listing=1" style="width: 100%; height: 400px; border: none;"></iframe>
            </div>
        </div>
</div>
<%= site.newFooter("IRCustomModule") %>
<script type="text/javascript" src="/inc/scripts/jquery/jquery.minitabs.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("/inc/scripts/jquery/jquery.minitabs.js")).Ticks.ToString()%>"></script>

<script type="text/javascript">
    $(document).ready(function () {
        $("#container").minitabs();


        //if (typeof ($('#container').html()) != 'undefined') {
        //    //
        //    console.log('test');
        //    $('.exchangeName1').html('test');
        //    //
        //    customXApplied = true;
        //}
    });

</script>
