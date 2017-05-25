<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700""/>";
%>

<%= site.newHeader("IRChart") %>


<div class="tabs-container">
    <iframe id="miniquoteChart" src="miniquote.aspx"></iframe>
    <div id="container" class="tabs">
        <ul class="tabsWrapper">
            <li class="tabitem firstTab"><a href="#tab-1">Share Graph</a></li>
            <li class="tabitem tab2"><a href="#tab-2">Share Data</a></li>
            <li class="tabitem tab3"><a href="#tab-3">Calculator</a></li>
            <li class="tabitem lastTab"><a href="#tab-4">Trades</a></li>
        </ul>

        <div id="tab-1">

            <iframe id="chartIframe" src="chart.aspx"></iframe>
            <iframe id="performanceIframe" src="performance.aspx"></iframe>

        </div>
        <div id="tab-2">

            <iframe id="sharedataiFrame" src="detailedSharePrice.aspx"></iframe>

        </div>
        <div id="tab-3">

            <iframe id="calculatoriFrame" src="calc.aspx"></iframe>

        </div>
        <div id="tab-4">

            <iframe id="ordersiFrame" src="orders.aspx"></iframe>
            <iframe id="tradesiFrame" src="trades.aspx"></iframe>

        </div>

    </div>
</div>
<%--<div class="miniquoteDisclaimer2">
        Data delayed 15-20 min. <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx" class="link-target">See Terms.</a>
    </div>--%>

<link rel="stylesheet" href="calcCustom.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("calcCustom.css")).Ticks.ToString()%>" />
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="inc/jquery.minitabs.js"></script>
<script type="text/javascript">


    var prepareTabsApplied = false;

    function prepareTabs() {
        if (!prepareTabsApplied) {
            if (typeof ($('.tabsWrapper').html()) != 'undefined') {
                $("#container").minitabs();
                prepareTabsApplied = true;
            }
        }
    }
    $(function () {
        setInterval(function () {
            prepareTabs();
        }, 200);
    });

</script>
