<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>


    <div class="tabs-container" >

        <div id="container" class="tabs">
            <ul class="tabsWrapper">
                <li class="tabitem firstTab"><a href="#tab-1">NASDAQ</a></li>
                <li class="tabitem lastTab"><a href="#tab-2">TASE</a></li>
            </ul>

            <div id="tab-1">

                <iframe id="USiFrame" src="chartNasdaq.aspx?listing=0"></iframe>

            </div>
            <div id="tab-2">

                <iframe id="TASEiFrame" src="chartTASE.aspx?listing=1"></iframe>

            </div>

        </div>
    </div>

<%= site.newHeader("IRChart") %>
<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
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
