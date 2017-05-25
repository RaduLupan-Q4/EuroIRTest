<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();

%>


<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

<link rel="stylesheet" href="ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.client.css")).Ticks.ToString()%>" />

<div class="widgetModule">
    <div class="tabs-container">

        <div class="tabs">
            <ul id="tabs" class="categoryFilters">
                <li class="active tabitem"><a href="#tab-1">Corporate Announcements</a></li>
                <li class="tabitem"><a href="#tab-2">Upcomming Events</a></li>
                <li class="tabitem"><a href="#tab-3">News</a></li>
            </ul>
            <ul id="tab">
                <li id="tab-1">
                    <iframe src="newsHeadline.aspx" style="width: 100%; height: 1000px; border: none;"></iframe>
                </li>
                <li id="tab-2">
                    <iframe src="calendarWidget.aspx" style="width: 100%; height: 1500px; border: none;"></iframe>
                </li>
                <li id="tab-3">
                    <iframe src="newsHeadline.aspx" style="width: 100%; height: 1000px; border: none;"></iframe>
                </li>
            </ul>
        </div>
    </div>
</div>

<script type="text/javascript">


    var prepareTabsApplied = false;
    function prepareTabs() {
        if (!prepareTabsApplied) {
            if (typeof ($('.categoryFilters')) != 'undefined') {
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


    //var showChar = 100;
    //var ellipsestext = "...";
    //var moretext = "more";
    //var lesstext = "less";
    //$('.more').each(function () {
    //    var content = $(this).html();

    //    if (content.length > showChar) {

    //        var c = content.substr(0, showChar);
    //        var h = content.substr(showChar - 1, content.length - showChar);

    //        var html = c + '<span class="moreelipses">' + ellipsestext + '</span>&nbsp;<span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

    //        $(this).html(html);
    //    }

    //});

    //$(".morelink").click(function () {
    //    if ($(this).hasClass("less")) {
    //        $(this).removeClass("less");
    //        $(this).html(moretext);
    //    } else {
    //        $(this).addClass("less");
    //        $(this).html(lesstext);
    //    }
    //    $(this).parent().prev().toggle();
    //    $(this).prev().toggle();
    //    return false;
    //});

    $(document).ready(function () {
        $("ul#tabs li").click(function (e) {
            if (!$(this).hasClass("active")) {
                var tabNum = $(this).index();
                var nthChild = tabNum + 1;
                $("ul#tabs li.active").removeClass("active");
                $(this).addClass("active");
                $("ul#tab li.active").removeClass("active");
                $("ul#tab li:nth-child(" + nthChild + ")").addClass("active");
            }
        });
    });




</script>



