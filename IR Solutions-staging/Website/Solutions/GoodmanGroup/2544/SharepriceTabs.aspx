<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700""/>";
%>

<%= site.newHeader("IRChart") %>

<div class="tabs-container">
    <div id="container" class="tabs">
        <ul class="tabsWrapper">
            <li class="tabitem tab-1"><a href="//ir.euroinvestor.com/Solutions/GoodmanGroup/2544/chart.aspx">Security price information |</a></li>
            <li class="tabitem tab-2"><a href="//ir.euroinvestor.com/Solutions/GoodmanGroup/2544/lookup.aspx">Historical price lookup |</a></li>
            <li class="tabitem tab-3"><a href="//ir.euroinvestor.com/Solutions/GoodmanGroup/2544/calc.aspx">Investment calculator</a></li>
        </ul>

        <div id="tab-1">
            <iframe id="chartIframe" src="chart.aspx"></iframe>
        </div>
        <div id="tab-2">
            <iframe id="lookupiFrame" src="lookup.aspx"></iframe>
        </div>
        <div id="tab-3">
            <iframe id="calculatoriFrame" src="calc.aspx"></iframe>
        </div>


    </div>
</div>
<%--<div class="miniquoteDisclaimer2">
        Data delayed 15-20 min. <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx" class="link-target">See Terms.</a>
    </div>--%>

<%--<link rel="stylesheet" href="calcCustom.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("calcCustom.css")).Ticks.ToString()%>" />--%>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript">


    //var prepareTabsApplied = false;

    //function prepareTabs() {
    //    if (!prepareTabsApplied) {
    //        if (typeof ($('.tabsWrapper').html()) != 'undefined') {
    //            $("#container").minitabs();
    //            prepareTabsApplied = true;
    //        }
    //    }
    //}
    //$(function () {
    //    setTimeout(function () {
    //        prepareTabs();
    //    }, 200);
    //});

    //$(".tab-1").click(function () {
    //    $('html, body').animate({
    //        scrollTop: $("#tab-1").offset().top
    //    }, 1000);
    //});
    //$(".tab-2").click(function () {
    //    $('html, body').animate({
    //        scrollTop: $("#tab-2").offset().top
    //    }, 1000);
    //});
    //$(".tab-3").click(function () {
    //    $('html, body').animate({
    //        scrollTop: $("#tab-3").offset().top
    //    }, 1000);
    //});

</script>


