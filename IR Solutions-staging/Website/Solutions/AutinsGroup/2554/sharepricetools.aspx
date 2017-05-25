<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite(); 
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700""/>";

%>
<%= site.newHeader("IRSharePriceToolsInvestorcom") %>


<div class="tabs-container">

    <div id="container" class="tabs">
        <ul class="tabsWrapper">
            <li class="tabitem firstTab"><a href="#tab-1">Share Price Chart</a></li>
            <li class="tabitem tab2"><a href="#tab-2">Calculator</a></li>
            <li class="tabitem tab3"><a href="#tab-3">Historical Lookup</a></li>
            <li class="tabitem tab4"><a href="#tab-4">RSS News</a></li>
            <li class="tabitem tab5"><a href="#tab-5">Profile</a></li>
        </ul>
        <div id="tab-1">

            <iframe id="chartIframe" src="chart.aspx"></iframe>

        </div>
        <div id="tab-2">

            <iframe id="calculatoriFrame" src="calc.aspx"></iframe>

        </div>
        <div id="tab-3">

            <iframe id="simpleLookupiFrame" src="lookup.aspx"></iframe>

        </div>

        <div id="tab-4">

            <iframe id="newsiFrame" src="news.aspx"></iframe>

        </div>
        
        <div id="tab-5">

            <iframe id="profileiFrame" src="profile.aspx"></iframe>

        </div>
    </div>
</div>

<%= site.newFooter("IRSharePriceToolsInvestorcom") %>
<script type="text/javascript" src="//minitabs.googlecode.com/files/jquery.minitabs.js"></script>
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