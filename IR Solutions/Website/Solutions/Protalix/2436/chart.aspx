<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Lato:400,300,700"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>


    <div class="tabs-container" >

        <div id="container" class="tabs">
            <ul class="tabsWrapper">
                <li class="tabitem firstTab"><a href="#tab-1">NYSE MKT</a></li>
                <li class="tabitem lastTab"><a href="#tab-2">TASE</a></li>
            </ul>

            <div id="tab-1">

                <iframe id="USiFrame" src="chartNYSE.aspx?listing=0"></iframe>

            </div>
            <div id="tab-2">

                <iframe id="TASEiFrame" src="chartTASE.aspx?listing=1"></iframe>

            </div>

        </div>
    </div>

    <%--<div class="miniquoteDisclaimer2">
        Data delayed 15-20 min. <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx" class="link-target">See Terms.</a>
    </div>--%>


<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="inc/jquery.minitabs.js"></script>
<script type="text/javascript">

    console.log('jquery');
    var prepareTabsApplied = false;
    console.log('prepareTabsApplied = false');
    function prepareTabs() {
        console.log('prepareTabs()');
        if (!prepareTabsApplied) {
            console.log('prepareTabsApplied not applied');
            if (typeof ($('.tabsWrapper').html()) != 'undefined') {
                console.log('.expected document found');
                $("#container").minitabs();
                console.log('create minitabs');
                prepareTabsApplied = true;
            }
        }
        console.log('prepare tabs skipped');
    }
    $(function () {
        setInterval(function () {
            prepareTabs();
        }, 200);
    });

</script>
