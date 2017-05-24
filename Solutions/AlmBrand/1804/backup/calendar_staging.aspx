<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html dir="lrt">
<head>
    <title>IR Solutions, Euroinvestor</title>
    <link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.normalize.css?v=635793031194669922" />
    <link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.style.css?v=635862925598295019" />

    <link rel="stylesheet" type="text/css" media="screen" href="ir.client.css?v=635863107082357038" />
    <style>
        body {
            overflow: auto !important;
        }
    </style>
</head>
<body>


    <script type="text/javascript">
        var activeModules = ['IRCustomModule'];
        //var activeDataRequests = [
        //    'RequestNewsCalendar',
        //    'RequestAnnouncement'
        //];
    </script>

    <div class="IRCalendar">

        <ul class="categoryFilters">

            <li class="active">
                <button showcategory="Financial">Financial</button></li>
            <li>
                <button showcategory="Roadshow">Roadshows</button></li>
        </ul>

        <div style="clear: both;"></div>
        <div class="divLine"></div>
        <%--<div id="calendarDatesEncapsulator"></div>--%>
        <div class="IRNewsCalendar"></div>

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
            </div>
            <br />
            <label>Send the calendar reminders to </label>
            <br />
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

    <script id="IRNewsCalendarTemplate" type="text/x-handlebars-template">
        {{#each data}}
        
        <div class="CalendarDate_template" style="display: block;">
            <div class="CalendarDate category_{{keyValueSet.[0].value}}<%--category_¤CATEGORY¤--%>" style="display: block;">
                <div class="contentWrapper">
                    <div class="calendarDate">
                        <span class="calendarDay">
                            <!--¤DAY¤-->
                            {{getStartDate keyValueSet}}</span>
                        <span class="calendarMonth">
                            <!--¤MONTH¤-->
                            {{showDateWithFormat keyValueSet.[1].value 'MMMM'}}</span>
                    </div>
                    <div class="CalendarContentWrapper">
                        <div class="calendarContent">
                            <span class="calendarTitle"><%--¤TITLE¤--%> {{headline}}</span>
                            <span class="calendarTime"><%--¤TIME¤--%> {{showDateWithFormat keyValueSet.[1].value 'HH:mm'}}</span>
                        </div>
                    </div>
                    <div class="calendarMoreInfo">
                        <a href="#" class="calendarDetails">View Details</a>
                        <a href="#" class="calendarReminder">Email Reminder</a>
                        <a href="#" class="calendarAddTo calendarFormat" enddate="value.1" fromdate="{{showDateTime timestamp}}" subject="{{headline}}" category="{{headline}}" location="{{value.[2]}}">Add to calendar</a>
                        <span class="toggle" style="display: none; width: 100%; max-width: 600px; float: left; font-family: verdana; padding-top: 10px; line-height: 20px;">
                            <%--<span class="startDate" style="display: none;">20150908T070000Z</span>
                            <span class="endDate" style="display: none;">20150908T093000Z</span>
                            <span class="location" style="display: none;">Frankfurt, Germany</span>--%>
                            <%--¤DESCRIPTIVE_TEXT¤--%>
                            {{text}}
                        </span>
                    </div>
                </div>

                <div class="divLine"></div>
            </div>

        </div>
        {{/each}}
    </script>




    <div class="transparantOverlay" style="display: none;"></div>

    <div class="disclaimer disclaimer-IRChart">
        <span class="disclaimer-copyright">Copyright &copy; 1997-2016 <a href="http://www.euroinvestor.com/ir/">Euroinvestor</a> </span><span class="disclaimer-dataSource">and our data suppliers. </span><span class="disclaimer-delayed">Data delayed by 15-20 min.</span><span class="disclaimer-terms"> <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">See Terms of use</a></span>
    </div>
    <script type="text/javascript" src="/includes/js/libs/jquery2-1-4.min.js?v=635808478220682775"></script>
    <script type="text/javascript" src="ir.client.js?v=635875157737220579"></script>
    <script type="text/javascript" src="/inc/scripts/core/ir.util.js?v=635881093467946908"></script>
    <script type="text/javascript" src="/inc/scripts/bootstrap/3_2_0/bootstrap.min.js?v=635793031199586841"></script>
    <script type="text/javascript" src="/includes/js/libs/handlebars1-3-0.min.js?v=635808478214120447"></script>
    <script type="text/javascript" src="/includes/js/libs/moment2-7-0.min.js?v=635808478220995253"></script>
    <script type="text/javascript" src="/includes/js/libs/moment-timezone0-3-1.min.js?v=635808478220995253"></script>
    <script type="text/javascript" src="/inc/scripts/moment/moment-timezone-with-data-2010-2020.min.js?v=635808478211933009"></script>
    <script type="text/javascript" src="/inc/scripts/browserSupport/respond.min.js?v=635793031199506909"></script>
    <script type="text/javascript" src="/inc/scripts/ir.reset.js?v=635793031198936378"></script>
    <script type="text/javascript" src="/inc/scripts/core/ir.behaviour.js?v=635878632341319521"></script>
    <script type="text/javascript" src="/inc/scripts/core/ir.util.data.js?v=635878578224785611"></script>
    <script type="text/javascript" src="/includes/js/libs/highstock-2-0-4.js?v=635808478220057902"></script>
    <script type="text/javascript" src="/inc/scripts/core/ir.util.draw.js?v=635881093567350259"></script>
</body>
</html>

<script type="text/javascript">


    //Get JSON from calender feed
    $(function () {
        $.getJSON('http://ir.euroinvestor.com/serviceengine/api/json/reply/RequestNewsCalendar?apiVersion=1&solutionID=1804&CustomerKey=AlmBrand&InstrumentID=100059', function (data) {
            var allData = data;

            var source = $('#IRNewsCalendarTemplate').html();
            var template = Handlebars.compile(source);
            $('.IRNewsCalendar').html(template(allData));

        }); //getJSON
    }); //function

    Handlebars.registerHelper('getStartDate', function (objects, options) {

        function getObjects(obj, key, val) {
            var objects = [];
            for (var i in obj) {
                if (!obj.hasOwnProperty(i)) continue;
                if (typeof obj[i] == 'object') {
                    objects = objects.concat(getObjects(obj[i], key, val));
                } else if (i == key && obj[key] == val) {
                    objects.push(obj.value);
                }
            }
            return objects;
        }

        //eventstarttime timestamp value
        var objectValue = getObjects([objects], 'key', 'eventstarttime');
        //Format eventstattime to DD
        var startDate = formatDateWithFormat(objectValue[0], 'DD');

        return startDate;
    });



    var customXApplied = false;
    function prepareCustomX() {
        if (!customXApplied) {
            if (typeof ($('.expectedDOMElement')) != 'undefined') {

                $('.calendarAddTo').on('click', function () {

                    //Read the value of format and determine what to open!
                    if ('.calendarFormat') {



                        var startDate = $('#calendarFormat').attr('fromDate');

                        var endDate = "20150908T093000Z";
                        var subject = $('#calendarFormat').attr('subject');
                        var category = $('#calendarFormat').attr('category');
                        var location = $('#calendarFormat').attr('location');

                        console.log('startDate ' + startDate + '---- endDate ' + endDate + '---- Subject ' + subject + '----- Location ' + location);

                        ////ICS File
                        //var icsMSG = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Our Company//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:me@google.com\nDTSTAMP:20120315T170000Z\nATTENDEE;CN=My Self ;RSVP=TRUE:MAILTO:mede@euroinvestor.com\nORGANIZER;CN=Me:MAILTO::mede@euroinvestor.com\nDTSTART:" + startDate + "\nDTEND:" + endDate + "\nLOCATION:" + subject + "\nSUMMARY:" + subject + "\nEND:VEVENT\nEND:VCALENDAR";
                        //var calendarDate = " asd \"sd\" as";
                        //window.open("data:text/calendar;charset=utf8," + escape(icsMSG));
                    }
                });

                ////ICS File
                //msgData1 = $('.startDate').text();
                //msgData2 = $('.endDate').text();
                ////msgData3 = $('.location').text();
                //msgData3 = "Frankfurt, Germany";

                //var icsMSG = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Our Company//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:me@google.com\nDTSTAMP:20120315T170000Z\nATTENDEE;CN=My Self ;RSVP=TRUE:MAILTO:mede@euroinvestor.com\nORGANIZER;CN=Me:MAILTO::mede@euroinvestor.com\nDTSTART:" + msgData1 + "\nDTEND:" + msgData2 + "\nLOCATION:" + msgData3 + "\nSUMMARY:Our Meeting Office\nEND:VEVENT\nEND:VCALENDAR";
                //var calendarDate = " asd \"sd\" as";

                //function addCalendarDate(category, day, month, title, time, descriptiveText) {
                //    $('#calendarDatesEncapsulator').append($('.CalendarDate_template').html().replace('¤CATEGORY¤', category).replace('¤DAY¤', day).replace('¤MONTH¤', month).replace('¤TITLE¤', title).replace('¤TIME¤', time).replace('¤DESCRIPTIVE_TEXT¤', descriptiveText));
                //}
                function showCategory(category) {
                    $('.CalendarDate').hide();
                    $('.category_' + category).show();

                }
                //addCalendarDate('financial', 12, 'May', 'Publication of Interim Report, 1st quarter of 2015', '11:00', 'Lorem ipsum dolor sit amet, lobortis interdum sed cras fringilla quam sem, egestas ut eget, varius blandit commodo. Sed metus inceptos, elit quam. Quis vestibulum consectetur eget vehicula faucibus leo, eu est metus eleifend, tincidunt risus ut, faucibus quisque lectus ullamcorper, elementum convallis blandit tristique tristique non. Ut suscipit tincidunt, natoque');
                //addCalendarDate('financial', 20, 'August', 'Publication of Interim Report, 1st half year of 2015', '13:00', 'Lorem ipsum dolor sit amet, lobortis interdum sed cras fringilla quam sem, egestas ut eget, varius blandit commodo. Sed metus inceptos, elit quam. Quis vestibulum consectetur eget vehicula faucibus leo, eu est metus eleifend, tincidunt risus ut, faucibus quisque lectus ullamcorper, elementum convallis blandit tristique tristique non. Ut suscipit tincidunt, natoque');
                //addCalendarDate('financial', 11, 'November', 'Publication of Interim Report, 3rd quarter of 2015', '16:00', 'Lorem ipsum dolor sit amet, lobortis interdum sed cras fringilla quam sem, egestas ut eget, varius blandit commodo. Sed metus inceptos, elit quam. Quis vestibulum consectetur eget vehicula faucibus leo, eu est metus eleifend, tincidunt risus ut, faucibus quisque lectus ullamcorper, elementum convallis blandit tristique tristique non. Ut suscipit tincidunt, natoque');

                //addCalendarDate('roadshow', 18, 'April', 'Roadshow in London', '11:00', 'Lorem ipsum dolor sit amet, lobortis interdum sed cras fringilla quam sem, egestas ut eget, varius blandit commodo. Sed metus inceptos, elit quam. Quis vestibulum consectetur eget vehicula faucibus leo, eu est metus eleifend, tincidunt risus ut, faucibus quisque lectus ullamcorper, elementum convallis blandit tristique tristique non. Ut suscipit tincidunt, natoque');
                //addCalendarDate('roadshow', 10, 'June', 'Roadshow in Stockholm', '13:00', 'Lorem ipsum dolor sit amet, lobortis interdum sed cras fringilla quam sem, egestas ut eget, varius blandit commodo. Sed metus inceptos, elit quam. Quis vestibulum consectetur eget vehicula faucibus leo, eu est metus eleifend, tincidunt risus ut, faucibus quisque lectus ullamcorper, elementum convallis blandit tristique tristique non. Ut suscipit tincidunt, natoque');
                //addCalendarDate('roadshow', 16, 'July', 'Roadshow in Copenhagen Headquarters', '16:00', 'Lorem ipsum dolor sit amet, lobortis interdum sed cras fringilla quam sem, egestas ut eget, varius blandit commodo. Sed metus inceptos, elit quam. Quis vestibulum consectetur eget vehicula faucibus leo, eu est metus eleifend, tincidunt risus ut, faucibus quisque lectus ullamcorper, elementum convallis blandit tristique tristique non. Ut suscipit tincidunt, natoque');

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
                //$('.calendarAddTo').click(function () {
                //    window.open("data:text/calendar;charset=utf8," + escape(icsMSG));
                //});

                $(".calendarDetails").click(function () {
                    if ($(this).hasClass('calendarDetails_expanded')) {
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
                    showCategory('Financial');
                });

                customXApplied = true;
            }
        }
    }
    $(function () {
        setInterval(function () {
            prepareCustomX();
        }, 200);
    });





</script>

<link rel="stylesheet" type="text/css" href="ir.calendar_test.css" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
