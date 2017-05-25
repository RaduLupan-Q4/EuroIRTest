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
                <li class="tabitem firstTab"><a href="#tab-1"><span>English</span></a></li>
                <li class="tabitem lastTab"><a href="#tab-2"><span>Danish</span></a></li>
            </ul>

            <div id="tab-1">

                <iframe id="newsEN" src="news.aspx?language=en"></iframe>

            </div>
            <div id="tab-2">

                <iframe id="newsDA" src="news.aspx?language=da"></iframe>

            </div>

        </div>
    </div>

    <%--<div class="miniquoteDisclaimer2">
        Data delayed 15-20 min. <a href="//ir.euroinvestor.com/disclaimer/terms_conditions.aspx" class="link-target">See Terms.</a>
    </div>--%>


<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
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
