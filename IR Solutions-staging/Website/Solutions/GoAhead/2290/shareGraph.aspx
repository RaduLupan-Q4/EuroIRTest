<%--<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html dir="lrt">
<head>
    <title>IR Solutions, Euroinvestor</title>
    <link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.normalize.css?v=635793031194669922" />
    <link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.style.css?v=635890532135184019" />
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700" />
    <link rel="stylesheet" type="text/css" media="screen" href="/includes/css/libs/jquery-ui1-11-1_smoothness.css?v=635810169525468128" />
    <%--<link rel="stylesheet" type="text/css" media="screen" href="allTools.css" />
</head>--%>

<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRCustomModule") %>

<link rel="stylesheet" href="shareGraph.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("shareGraph.css")).Ticks.ToString()%>" />
<script type="text/javascript">
    var activeModules = ["IRCustomModule"];
</script>

<div class="IRCustomModule">

    <div style="overflow: hidden; margin: 15px auto;">
        <iframe scrolling="no" src="http://devir.euroinvestor.com/solutions/GoAhead/2290/chart.aspx" style="border: 0px none; margin-left: 0px; height: 812px; margin-top: 0px; width: 100%; margin-bottom: -740px"></iframe>
    </div>
    <div id="tabs-container">
        <div class="navbar-wrapper">
            <ul class="tabs-menu">
                <li class="current"><a href="#tab-1">Share graph</a></li>
                <li><a href="#tab-2">Share Data</a></li>
                <li><a href="#tab-3">Trades</a></li>
                <li><a href="#tab-4">Performance</a></li>
            </ul>
        </div>

        <div class="tab">
            <%--            <div id="tab-1" class="tab-content">
                <iframe id="chartIframe" src="http://devir.euroinvestor.com/solutions/GoAhead/2290/chart.aspx" style="width: 100%; height: 950px;"></iframe>
            </div>--%>
            <div id="tab-1" class="tab-content" style="overflow: hidden; margin: 15px auto; height: 800px;">
                <iframe scrolling="no" src="http://devir.euroinvestor.com/solutions/GoAhead/2290/chart.aspx" style="border: 0px none; margin-left: 0px; height: 875px; margin-top: -100px; width: 100%; /* margin-bottom: 77px; */"></iframe>
            </div>
            <div id="tab-2" class="tab-content">
                <iframe id="shareDataIframe" src="http://devir.euroinvestor.com/solutions/GoAhead/2290/Sharedata.aspx" style="width: 100%; height: 270px;"></iframe>
            </div>

            <div id="tab-3" class="tab-content">
                <iframe id="tradesIframe" src="http://devir.euroinvestor.com/solutions/GoAhead/2290/trades.aspx" style="width: 100%; height: 535px;"></iframe>
            </div>

            <div id="tab-4" class="tab-content">
                <iframe id="performanceIframe" src="http://devir.euroinvestor.com/solutions/GoAhead/2290/performance.aspx" style="width: 100%; height: 175px;"></iframe>
            </div>
        </div>
    </div>
</div>

<%= site.newFooter("IRCustomModule") %>

<script>
    var customXApplied = false;
    function prepareCustomX() {
        if (!customXApplied) {
            if (typeof ($('.tab-content')) != 'undefined') {


                //tab navigation
                $(document).ready(function () {
                    $(".tabs-menu a").click(function (event) {
                        event.preventDefault();
                        $(this).parent().addClass("current");
                        $(this).parent().siblings().removeClass("current");
                        var tab = $(this).attr("href");
                        $(".tab-content").not(tab).css("display", "none");
                        $(tab).css('display', 'block');
                    });
                });

                customXApplied = true;
            }
        }
    }
    $(function () {
        setInterval(function () {
            prepareCustomX();
        }, 200);
    });

</script>
