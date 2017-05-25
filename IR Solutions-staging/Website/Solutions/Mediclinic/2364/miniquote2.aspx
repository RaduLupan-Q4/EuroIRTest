<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSURL = "http://fonts.googleapis.com/css?family=Open+Sans";
%>

<%= site.header("IRMiniquoteChart") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquoteMulti', 'IRMiniquoteChart'];
    var activeFeatures = [];
</script>

<div class="IRMiniquoteChartModule"></div>
<div class="IRQuoteModule"></div>

<script id="IRQuoteMultiTableTemplate" type="text/x-handlebars-template">

    <%--    <div class="MiniQuoteDataRow">
        ASML Share (15 min. delayed, <a class="miniquoteChartDisclaimerLink" target="_blank" href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">see terms</a>)<br />
        AEX: {{decimals stocks.0/last}} (€)<br />
        NASDAQ: {{decimals stocks.1/last}} ($)<br />
    </div>--%>

    <div class="shareWrapper col-sm-7">
        <div class="share LSEWrapper">
            <h4>LSE ({{stocks.0/symbol}})</h4>
            <p>As at {{showDateWithFormat stocks.0/timestamp 'DD MMM YYYY HH:MM'}}</p>
            <p>
                <span>{{decimals stocks.0/last}}</span> GBP {{decimals stocks.0/change}} <span class="{{showArrow stocks.0/change}}"></span>

            </p>
        </div>
        <div class="divideLine"></div>
        <div class="share JSEWrapper">
            <h4>JSE ({{stocks.1/symbol}})</h4>
            <p>As at {{showDateWithFormat stocks.1/tradeTimestamp 'DD MMM YYYY HH:MM'}}</p>
            <p>
                <span class="lastPrice">{{toLocal stocks.1/last}} </span>ZAR {{decimals stocks.1/change}} <span class="{{showArrow stocks.1/change}}"></span>
            </p>
        </div>

    </div>

    <div class="tabs-container" >

        <div id="container" class="tabs">
            <ul class="tabsWrapper">
                <li class="tabitem firstTab"><a href="#tab-1">LSE ({{stocks.0/symbol}})</a></li>
                <li class="tabitem lastTab"><a href="#tab-2">JSE ({{stocks.1/symbol}})</a></li>
            </ul>

            <div id="tab-1">

                <iframe id="LSEiFrame" src="chartMini.aspx?listing=0"></iframe>

            </div>
            <div id="tab-2">

                <iframe id="JSEiFrame" src="chartMini.aspx?listing=1"></iframe>

            </div>

        </div>
    </div>

    <div class="miniquoteDisclaimer2">
        Data delayed 15-20 min. <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx" class="link-target">See Terms.</a>
    </div>


</script>

<%= site.footer("IRMiniquoteChart") %>



<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="http://minitabs.googlecode.com/files/jquery.minitabs.js"></script>
<script type="text/javascript">


    var prepareTabsApplied = false;
    function prepareTabs() {
        if (!prepareTabsApplied) {
            if (typeof ($('.JSEWrapper .lastPrice').html()) != 'undefined') {
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
