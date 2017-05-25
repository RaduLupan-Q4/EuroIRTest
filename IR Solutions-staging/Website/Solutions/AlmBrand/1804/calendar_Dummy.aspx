<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>


<script type="text/javascript">
    var activeModules = ['IRNews'];

</script>

<div class="IRCalendar">
    <%--  <h2>Category Filter</h2>--%>
    <ul class="categoryFilters">
        <%--<li><a href="#">All</a></li>
        <li><a href="#">Exibitions</a></li>--%>
        <li class="active">
            <button showCategory="financial">Financial</button></li>
        <li>
            <button showCategory="roadshow">Roadshows</button></li>
    </ul>

    <div style="clear: both;"></div>
    <div class="divLine"></div>
    <div id="calendarDatesEncapsulator"></div>
    <div class="calendarRemindAllEncapsulator">
        <b>Sign up for Email Reminders</b>
        <p>Please select the events above that you want to receive email reminders for or check the box below to receive reminders for all events</p>
        <a class="calendarReminderAll">Sign up for all events</a>
    </div>
    <div class="calendarRemindAllEncapsulator">
        <div class="sendMeReminderInAdvance">
            <div>Send me reminders</div>
            <div>
                <select class="" id="demo" name="demo">
                <option value="15 minutes">15&nbsp;minutes</option>
                <option value="30 minutes">30&nbsp;minutes</option>
                <option value="1 hour">1&nbsp;hour</option>
                <option value="2 hours">2&nbsp;hours</option>
                <option value="4 hours">4&nbsp;hours</option>
                <option value="8 hours">8&nbsp;hours</option>
                <option value="24 hours">24&nbsp;hours</option>
                <option value="48 hours">48&nbsp;hours</option>
            </select>
            </div>
            <div>
                before the events take place
            </div>
        </div><br />
        <label>Send the calendar reminders to </label><br />
        <input id="emailCalendarSignup" type="text" placeholder="Eg youremail@mail.com" /><input id="emailCalendarSignup_submit" class="calendarButtonStyle" type="button" value="Sign Up" />
        <div class="dialogueBox" id="dialogueBox_register" style="display: none;">
            <h3>Fantastic, you are almost there!</h3>
            <p>Please check your inbox to confirm your email alert subscription</p>
            <img class="verificationImage" src="images/verification.png">
            <div class="closeBox">X</div>
        </div>
        
        
    </div>
    </>

    <div class="clear" style="clear: both;"></div>
    <h2 style="margin-top: 20px;">Unsubscribe</h2>
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

<div class="CalendarDate_template" style="display:block;">
    <div class="CalendarDate category_¤CATEGORY¤" style="display:none;">
        <div class="contentWrapper">
            <div class="calendarDate">
                <span class="calendarDay">¤DAY¤</span>
                <span class="calendarMonth">¤MONTH¤</span>
            </div>
            <div class="CalendarContentWrapper">
                <div class="calendarContent">
                    <span class="calendarTitle">¤TITLE¤</span>
                    <span class="calendarTime">¤TIME¤</span>
                </div>
            </div>
            <div class="calendarMoreInfo">
                <a href="#" class="calendarDetails">View Details</a>
                <a href="#" class="calendarReminder">Email Reminder</a>
                <a href="#" class="calendarAddTo">Add to calendar</a>
                <span class="toggle" style="display: none; width: 100%; max-width: 600px; float: left; font-family: verdana; padding-top: 10px; line-height: 20px;">
                    <span class="startDate" style="display: none;">20150908T070000Z</span>
                    <span class="endDate" style="display: none;">20150908T093000Z</span>
                    <span class="location" style="display: none;">Frankfurt, Germany</span>
                    ¤DESCRIPTIVE_TEXT¤
                </span>
            </div>
        </div>
    <div class="divLine"></div>
    </div>
</div>

<div class="transparantOverlay" style="display:none;"></div>

<%= site.newFooter("IRChart") %>

<%--</script>--%>

<%--<script id="IRQuoteTableVerticalTemplate" type="text/x-handlebars-template">--%>

<script type="text/javascript">

    //ICS File
    msgData1 = $('.startDate').text();
    msgData2 = $('.endDate').text();
    msgData3 = $('.location').text();

    var icsMSG = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Our Company//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:me@google.com\nDTSTAMP:20120315T170000Z\nATTENDEE;CN=My Self ;RSVP=TRUE:MAILTO:mede@euroinvestor.com\nORGANIZER;CN=Me:MAILTO::mede@euroinvestor.com\nDTSTART:" + msgData1 + "\nDTEND:" + msgData2 + "\nLOCATION:" + msgData3 + "\nSUMMARY:Our Meeting Office\nEND:VEVENT\nEND:VCALENDAR";
    var calendarDate = " asd \"sd\" as";

    function addCalendarDate(category, day, month, title, time, descriptiveText) {
        $('#calendarDatesEncapsulator').append($('.CalendarDate_template').html().replace('¤CATEGORY¤', category).replace('¤DAY¤', day).replace('¤MONTH¤', month).replace('¤TITLE¤', title).replace('¤TIME¤', time).replace('¤DESCRIPTIVE_TEXT¤', descriptiveText));
    }
    function showCategory(category) {
        $('.CalendarDate').hide();
        $('.category_' + category).show();
        
    }
    addCalendarDate('financial', 12, 'May', 'Publication of Interim Report, 1st quarter of 2015', '11:00', 'Lorem ipsum dolor sit amet, lobortis interdum sed cras fringilla quam sem, egestas ut eget, varius blandit commodo. Sed metus inceptos, elit quam. Quis vestibulum consectetur eget vehicula faucibus leo, eu est metus eleifend, tincidunt risus ut, faucibus quisque lectus ullamcorper, elementum convallis blandit tristique tristique non. Ut suscipit tincidunt, natoque');
    addCalendarDate('financial', 20, 'August', 'Publication of Interim Report, 1st half year of 2015', '13:00', 'Lorem ipsum dolor sit amet, lobortis interdum sed cras fringilla quam sem, egestas ut eget, varius blandit commodo. Sed metus inceptos, elit quam. Quis vestibulum consectetur eget vehicula faucibus leo, eu est metus eleifend, tincidunt risus ut, faucibus quisque lectus ullamcorper, elementum convallis blandit tristique tristique non. Ut suscipit tincidunt, natoque');
    addCalendarDate('financial', 11, 'November', 'Publication of Interim Report, 3rd quarter of 2015', '16:00', 'Lorem ipsum dolor sit amet, lobortis interdum sed cras fringilla quam sem, egestas ut eget, varius blandit commodo. Sed metus inceptos, elit quam. Quis vestibulum consectetur eget vehicula faucibus leo, eu est metus eleifend, tincidunt risus ut, faucibus quisque lectus ullamcorper, elementum convallis blandit tristique tristique non. Ut suscipit tincidunt, natoque');

    addCalendarDate('roadshow', 18, 'April', 'Roadshow in London', '11:00', 'Lorem ipsum dolor sit amet, lobortis interdum sed cras fringilla quam sem, egestas ut eget, varius blandit commodo. Sed metus inceptos, elit quam. Quis vestibulum consectetur eget vehicula faucibus leo, eu est metus eleifend, tincidunt risus ut, faucibus quisque lectus ullamcorper, elementum convallis blandit tristique tristique non. Ut suscipit tincidunt, natoque');
    addCalendarDate('roadshow', 10, 'June', 'Roadshow in Stockholm', '13:00', 'Lorem ipsum dolor sit amet, lobortis interdum sed cras fringilla quam sem, egestas ut eget, varius blandit commodo. Sed metus inceptos, elit quam. Quis vestibulum consectetur eget vehicula faucibus leo, eu est metus eleifend, tincidunt risus ut, faucibus quisque lectus ullamcorper, elementum convallis blandit tristique tristique non. Ut suscipit tincidunt, natoque');
    addCalendarDate('roadshow', 16, 'July', 'Roadshow in Copenhagen Headquarters', '16:00', 'Lorem ipsum dolor sit amet, lobortis interdum sed cras fringilla quam sem, egestas ut eget, varius blandit commodo. Sed metus inceptos, elit quam. Quis vestibulum consectetur eget vehicula faucibus leo, eu est metus eleifend, tincidunt risus ut, faucibus quisque lectus ullamcorper, elementum convallis blandit tristique tristique non. Ut suscipit tincidunt, natoque');

    $('.calendarReminder').click(function () {
        if ($(this).hasClass('calendarReminder_checked')) {
            $(this).removeClass('calendarReminder_checked');
        }
        else {
            $(this).addClass('calendarReminder_checked');
        }
    });
    $('.calendarReminderAll').click(function () {
        if ($(this).hasClass('calendarReminderAll_checked')) {
            $('.calendarReminder').removeClass('calendarReminder_checked');
            $('.calendarReminderAll').removeClass('calendarReminderAll_checked');
        }
        else {
            $('.calendarReminder').addClass('calendarReminder_checked');
            $('.calendarReminderAll').addClass('calendarReminderAll_checked');
        }

    });
    $('.calendarAddTo').click(function () {
        window.open("data:text/calendar;charset=utf8," + escape(icsMSG));
    });

    $(".calendarDetails").click(function () {
        if ($(this).hasClass('calendarDetails_expanded'))
        {
            $(this).removeClass('calendarDetails_expanded');
        } else {
            $(this).addClass('calendarDetails_expanded');
        }
        $(this).parent().find("span.toggle").slideToggle("fast");
    });

    //Category Filters
    $('.categoryFilters').on('click', 'li', function () {
        $('.categoryFilters li.active').removeClass('active');
        $(this).addClass('active');
        showCategory($(this).find('button').attr('showCategory'));
    });
    $('#emailCalendarSignup_submit').click(function () {
        $('#dialogueBox_register').show();
        $('.transparantOverlay').show();
    });
    $('.closeBox').click(function () {
        $('#dialogueBox_register').hide();
        $('.transparantOverlay').hide();
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
        });
        $('select').parent().on('click', function () {
            $(this).find('ul').slideToggle('fast');
        });
        showCategory('financial');
    });

</script>

<link rel="stylesheet" type="text/css" href="ir.calendar_test.css" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
