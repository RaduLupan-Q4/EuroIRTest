<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
     site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>


    <div class="tabs-container" >

        <div id="container" class="tabs">
            <ul class="tabsWrapper">
                <li class="tabitem firstTab"><a href="#tab-1">Simple</a></li>
                <li class="tabitem firstTab"><a href="#tab-2">Graphical</a></li>
                <li class="tabitem lastTab"><a href="#tab-3">Text Rich</a></li>
            </ul>

            <div id="tab-1">

                <iframe id="chartiFrame" src="calcSimple.aspx"></iframe>

            </div>
            <div id="tab-2">

                <iframe id="chartAdvancediFrame" src="calc.aspx"></iframe>

            </div>
            <div id="tab-3">

                <iframe id="chartAdvancediFrame" src="calcTextRich.aspx"></iframe>

            </div>
        </div>
    </div>

    <%--<div class="miniquoteDisclaimer2">
        Data delayed 15-20 min. <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx" class="link-target">See Terms.</a>
    </div>--%>


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