<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>


<div class="IRCalendar">
    <%--  <h2>Category Filter</h2>--%>
    <ul class="categoryFilters">
        <%--<li><a href="#">All</a></li>
        <li><a href="#">Exibitions</a></li>--%>
        <li class="active">
            <button>Financial</button></li>
        <li>
            <button>Roadshows</button></li>
    </ul>

    <div style="clear: both;"></div>
    <div class="divLine"></div>
    <div class="CalendarDate">
        <div class="contentWrapper">
            <div class="calendarDate">
                <span class="calendarDay">08</span>
                <span class="calendarMonth">September</span>
            </div>
            <div class="CalendarContentWrapper">
                <div class="calendarContent">
                    <span class="calendarTitle">Guggenheim Securities Conference, Boston</span>
                    <span class="calendarTime">09:00</span>
                </div>
            </div>
            <div class="calendarMoreInfo">
                <a href="#" class="calendarDetails" id="calendarDetails1">View Details</a>
                <div class="calendarReminder">
                    <select class="calendarReminder" id="demo" name="demo">
                        <option value="Add reminder">Email reminder</option>
                        <option value="15 minutes">15 minutes</option>
                        <option value="30 minutes">30 minutes</option>
                        <option value="1 hour">1 hour</option>
                        <option value="2 hours">2 hours</option>
                        <option value="4 hours">4 hours</option>
                        <option value="8 hours">8 hours</option>
                        <option value="24 hours">24 hours</option>
                        <option value="48 hours">48 hours</option>
                    </select>
                </div>

                <a href="#" class="calendarAddTo">Add to calendar</a>
                <span class="toggle1" style="display: none; width: 100%; max-width: 600px; float: left; font-family: verdana; padding-top: 10px; line-height: 20px;">
                    <%--<strong>Start date: </strong>--%><span class="startDate" style="display: none;">20150908T070000Z</span>
                    <%--<strong>End date: </strong>--%><span class="endDate" style="display: none;">20150908T093000Z</span>
                    <%-- <strong>Location: </strong>--%><span class="location" style="display: none;">Frankfurt, Germany</span>
                    Lorem ipsum dolor sit amet, et convallis morbi voluptates porttitor leo libero, ipsum leo inceptos curabitur arcu, in lectus nulla neque gravida. In pellentesque id diam iaculis ultrices, montes hendrerit elit pellentesque lectus, ac urna proin non erat id, pellentesque sem.
                <%--<br />
                    <span class="socialIcons">
                        <label style="float: left;">Share </label>
                        <a class="twitterIcon" href="https://twitter.com/share" class="icon-twitter" data-lang="en" data-count="none" target="_blank"></a>
                        <a class="linkedinIcon" href="http://www.linkedin.com/shareArticle?mini=true&url={articleUrl}&title={articleTitle}&summary={articleSummary}&source={articleSource}"></a>
                    </span>--%>
                </span>
            </div>

        </div>
    </div>
    <div class="divLine"></div>


    <div class="CalendarDate">
        <div class="calendarDate">
            <span class="calendarDay">19</span>
            <span class="calendarMonth">September</span>
        </div>
        <div class="CalendarContentWrapper">
            <div class="calendarContent">
                <span class="calendarTitle">Annual General Meeting, Copenhagen)</span>
                <span class="calendarTime">11:30</span>
            </div>
        </div>
        <div class="calendarMoreInfo">
            <a href="#" class="calendarDetails" id="calendarDetails2">View Details</a>
            <a href="#" class="calendarReminder calendarReminder2">Add a reminder</a>
            <a href="#" class="calendarAddTo">Add to calendar</a>
            <span class="toggle2" style="display: none; width: 100%; max-width: 600px; float: left; font-family: verdana; line-height: 20px; padding-top: 10px;">
                <%--<strong>Start date: </strong>--%><span class="startDate" style="display: none;">20150919T093000Z</span><%--<br />--%>
                <%--<strong>End date: </strong>--%><span class="endDate" style="display: none;">20150908T140000Z</span><%--<br />--%>
                <%--<strong>Location: </strong>--%><span class="location" style="display: none;">Frankfurt, Germany</span>
                Lorem ipsum dolor sit amet, et convallis morbi voluptates porttitor leo libero, ipsum leo inceptos curabitur arcu, in lectus nulla neque gravida. In pellentesque id diam iaculis ultrices, montes hendrerit elit pellentesque lectus, ac urna proin non erat id, pellentesque sem.
           <%-- <br />
                <span class="socialIcons">
                    <label style="float: left;">Share </label>
                    <a class="twitterIcon" href="https://twitter.com/share" class="icon-twitter" data-lang="en" data-count="none" target="_blank"></a>
                    <a class="linkedinIcon" href="http://www.linkedin.com/shareArticle?mini=true&url={articleUrl}&title={articleTitle}&summary={articleSummary}&source={articleSource}"></a>
                </span>--%>
            </span>
        </div>
    </div>
    <div class="divLine"></div>

    <div class="CalendarDate">
        <div class="calendarDate">
            <span class="calendarDay">04</span>
            <span class="calendarMonth">October</span>
        </div>
        <div class="CalendarContentWrapper">
            <div class="calendarContent">
                <span class="calendarTitle">Exane 17th European CEO Seminar, Paris</span>
                <span class="calendarTime">13:30</span>
            </div>
        </div>
        <div class="calendarMoreInfo">
            <a href="#" class="calendarDetails" id="calendarDetails3">View Details</a>
            <a href="#" class="calendarReminder calendarReminder2">Add a reminder</a>
            <a href="#" class="calendarAddTo">Add to calendar</a>
            <span class="toggle3" style="display: none; width: 100%; max-width: 600px; float: left; font-family: verdana; line-height: 20px; padding-top: 10px;">
                <%--<strong>Start date:</strong>--%><span class="startDate" style="display: none;">20151004T113000Z</span><%--<br />--%>
                <%-- <strong>End date: </strong>--%><span class="endDate" style="display: none;">20150908T153000Z</span><%--<br />--%>
                <%-- <strong>Location: </strong>--%><span class="location" style="display: none;">Frankfurt, Germany</span>
                Lorem ipsum dolor sit amet, et convallis morbi voluptates porttitor leo libero, ipsum leo inceptos curabitur arcu, in lectus nulla neque gravida. In pellentesque id diam iaculis ultrices, montes hendrerit elit pellentesque lectus, ac urna proin non erat id, pellentesque sem.
            <%--<br />
                <span class="socialIcons">
                    <label style="float: left;">Share </label>
                    <a class="twitterIcon" href="https://twitter.com/share" class="icon-twitter" data-lang="en" data-count="none" target="_blank"></a>
                    <a class="linkedinIcon" href="http://www.linkedin.com/shareArticle?mini=true&url={articleUrl}&title={articleTitle}&summary={articleSummary}&source={articleSource}"></a>
                </span>--%>
            </span>
        </div>
    </div>
    <div class="divLine"></div>

    <div class="calendarRemindAll">
        <label>Sign up up for all events. </label>
        <input class="calendarButtonStyle" type="button" value="Remind All" />
    </div>
    </>

    <div class="clear" style="clear: both;"></div>
    <h2 style="margin-top: 20px;">Subscribe</h2>
    <p style="padding-left: 1%;">
        If you would like to unsubscribe, please type in your email and press the <b>unsubscribe</b> button
    </p>

    <div class="unsubscribe">
        <form action="emailAlerts.aspx">

            <br />
            <b style="font-size: 11.5px; padding-left: 1%;">Email address</b>
            <br />
            <input tabindex="1" class="informationInput enterInformationLoginEmail" name="enterInformationLoginEmail" type="email" value="" />
            <input class="calendarButtonStyle" type="button" value="Unsubscribe" />

        </form>
    </div>
</div>

<%= site.newFooter("IRChart") %>

<%--</script>--%>

<%--<script id="IRQuoteTableVerticalTemplate" type="text/x-handlebars-template">--%>

<script type="text/javascript">

    //ICS File
    msgData1 = $('.startDate').text();
    msgData2 = $('.endDate').text();
    msgData3 = $('.location').text();

    var icsMSG = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Our Company//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:me@google.com\nDTSTAMP:20120315T170000Z\nATTENDEE;CN=My Self ;RSVP=TRUE:MAILTO:mede@euroinvestor.com\nORGANIZER;CN=Me:MAILTO::mede@euroinvestor.com\nDTSTART:" + msgData1 + "\nDTEND:" + msgData2 + "\nLOCATION:" + msgData3 + "\nSUMMARY:Our Meeting Office\nEND:VEVENT\nEND:VCALENDAR";

    $('.calendarAddTo').click(function () {
        window.open("data:text/calendar;charset=utf8," + escape(icsMSG));
    });

    $("#calendarDetails1").click(function () {
        $(this).css('background-image', 'url(images/detailedDown.png)');
        $("span.toggle1").slideToggle("fast");
    });
    $("#calendarDetails2").click(function () {
        $(this).css('background-image', 'url(images/detailedDown.png)');
        $("span.toggle2").slideToggle("fast");
    });
    $("#calendarDetails3").click(function () {
        $(this).css('background-image', 'url(images/detailedDown.png)');
        $("span.toggle3").slideToggle("fast");
    });


    //Category Filters
    $('.categoryFilters').on('click', 'li', function () {
        $('.categoryFilters li.active').removeClass('active');
        $(this).addClass('active');
    });


    //Select code
    $(document).ready(function () {
        $('select').wrap('<div class="select_wrapper"></div>')
        $('select').parent().prepend('<span>' + $(this).find(':selected').text() + '</span>');
        $('select').parent().children('span').width($('select').width());
        $('select').css('display', 'none');
        $('select').parent().append('<ul class="select_inner"></ul>');
        $('select').children().each(function () {
            var opttext = $(this).text();
            var optval = $(this).val();
            $('select').parent().children('.select_inner').append('<li id="' + optval + '">' + opttext + '</li>');
        });


        //View Details
        $('select').parent().find('li').on('click', function () {
            var cur = $(this).attr('id');
            $('select').parent().children('span').text($(this).text());
            $('select').children().removeAttr('selected');
            $('select').children('[value="' + cur + '"]').attr('selected', 'selected');
            console.log($('select').children('[value="' + cur + '"]').text());
        });
        $('select').parent().on('click', function () {
            $(this).find('ul').slideToggle('fast');
        });
    });

</script>

<link rel="stylesheet" type="text/css" href="ir.calendar_test.css" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
