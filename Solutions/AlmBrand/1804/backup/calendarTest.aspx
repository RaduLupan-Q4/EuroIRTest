﻿<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRCustomModule") %>
<link rel="stylesheet" type="text/css" href="ir.calendar_test.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.calendar_test.css")).Ticks.ToString()%>" />

<style>
    body {
        overflow: scroll;
    }
</style>



<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
</script>

<div class="IRCalendar">

    <ul class="categoryFilters">

        <li class="active" id="tabOne">
            <button showcategory="Financial" class="titleFinancial"></button>
        </li>
        <li id="tabTwo">
            <button showcategory="Roadshow" class="titleRoadShows"></button>
        </li>
    </ul>
    <div class="select-style">
        <select id="period" name="tab1" onchange="selectPeriod()">
            <option class="select all upcomingEvents" value="1">Upcoming events</option>
            <option class="select all pastEvents" value="0">Past events</option>
        </select>
    </div>
    <%--<div style="clear: both;"></div>
        <div class="divLine"></div>--%>

    <%--<div id="calendarDatesEncapsulator"></div>--%>
    <div class="IRNewsCalendar"></div>
  <%--  <div class="IRNewsTableFooter">
        <div class="IRNewsPagination"></div>
    </div>--%>

    <div class="calendarRemindAllEncapsulator">
        <b class="t_signUpEmailReminders"></b>
        <p class="t_signUpEmailText"></p>
        <a class="calendarReminderAll"></a>
    </div>
    <div class="calendarRemindAllEncapsulator">
        <div class="sendMeReminderInAdvance">
            <div class="sendReminders1"></div>
            <div>
                <select class="" id="selectedReminder" name="">
                    <option value="15">15 minuttes</option>
                    <option value="30"></option>
                    <option value="60"></option>
                    <option value="120"></option>
                    <option value="240"></option>
                    <option value="480"></option>
                    <option value="1440"></option>
                    <option value="2880"></option>
                    <option value="10080"></option>
                    <option value="20160"></option>
                    <option value="40320"></option>
                </select>
            </div>
            <div class="sendReminders2">
            </div>
        </div>
        <br />
        <label class="sendRemindersTo"></label>
        <br />
        <input id="emailCalendarSignup" type="text" placeholder="Eg youremail@mail.com" />
        <button id="emailCalendarSignup_submit" class="calendarButtonStyle" type="button"></button>
        <div class="dialogueBox" id="dialogueBox_register" style="display: none;">
            <h3 class="informationHeader"></h3>
            <p class="information"></p>
            <img class="verificationImage" src="">
            <div class="closeBox">X</div>
        </div>
    </div>


    <div class="clear" style="clear: both;"></div>
    <h2 style="margin-top: 20px; padding-left: 1%;" class="t_unsubscribe"></h2>
    <p style="padding-left: 1%;" class="t_unsubscribe_text">
    </p>

    <div class="unsubscribe">
        <div class="dialogueBox" id="dialogueBox_unsubscribe" style="display: none;">
            <h3 class="informationHeader"></h3>
            <p class="information"></p>
            <img class="verificationImage" src="">
            <div class="closeBox">X</div>
        </div>

        <%--<br />
            <b style="font-size: 11.5px; padding-left: 1%;">Email</b>
            <br />--%>
        <input style="margin-left: 1%;" tabindex="1" class="informationInput enterInformationLoginEmail" name="enterInformationLoginEmail" id="unsubscribeEmail" type="email" />
        <button class="calendarButtonStyle" id="emailCalendarUnsubscribe" type="button"></button>

    </div>
</div>

<script id="IRNewsCalendarTemplate" type="text/x-handlebars-template">
    {{#each data}}
        <div class="CalendarDate_template IRDataGroup" id="{{storyId}}">
            <div class="CalendarDate category_{{getCategory keyValueSet 'calendartype'}}">
                <div class="contentWrapper">
                    <div class="calendarDate">
                        <span class="calendarDay">{{showDateWithFormat startTime 'DD'}}</span>
                        <span class="calendarMonth">{{showDateWithFormat startTime 'MMM YYYY'}}</span>
                    </div>
                    <div class="CalendarContentWrapper">
                        <div class="calendarContent">
                            <span class="calendarTitle">{{headline}}</span>
                            <span class="calendarTime">{{showDateWithFormat startTime 'HH:mm'}}</span>
                        </div>
                    </div>
                    <div class="calendarMoreInfo">
                        <a href="#" class="calendarDetails"></a>
                        <a href="#" class="calendarReminder" storyid="{{storyId}}" eventstarttime="{{startTime}}" subject="{{headline}}" message="{{text}}">Email Reminder</a>
                        <%--<a href="http://localhost:59157/default.aspx/?enddate={{getEventEndTime keyValueSet 'eventendtime'}}&starttime={{startTime}}&subject={{headline}}&category={{getCategory keyValueSet 'calendartype'}}&location={{getLocation keyValueSet 'location'}}&text={{text}}" class="calendarAddTo calendarFormat">Add to calendar</a>--%>
                        <a href="http://ir.euroinvestor.com/tools/generateICS/default.aspx?enddate={{getEventEndTime keyValueSet 'eventendtime'}}&starttime={{startTime}}&subject={{headline}}&category={{getCategory keyValueSet 'calendartype'}}&location={{getLocation keyValueSet 'location'}}&text={{text}}" class="calendarAddTo calendarFormat"></a>
                        <span class="toggle" style="display: none; width: 100%; max-width: 600px; float: left; font-family: verdana; padding-top: 10px; line-height: 20px;">{{text}}
                        </span>
                    </div>
                </div>

                <div class="divLine"></div>
            </div>

        </div>
    {{/each}}
    
</script>




<div class="transparantOverlay" style="display: none;"></div>

<%= site.newFooter("IRCustomModule") %>


<script type="text/javascript">
    var solutionId = "1804";
    var lcid = 1033;
    var instrumentid = 100059;

    if (globalActiveLanguage == "da") {
        lcid = 1030;
    }


    //Get JSON from calender feed
    $(function () {
        //Get all events and generate select options
        //filter by date
        var getAll = "2000/01/01";
        var today = Date.now();
        var convertedDate = moment(today).toISOString();
        $.getJSON('/ServiceEngine/api/json/reply/RequestNewsCalendarPagination?apiversion=1&lcid=' + lcid + '&customerKey=almbrand&solutionID=1804&MaxRows=1000&pageno=0&instrumentid=' + instrumentid + '&StartDate=' + getAll + '', function (data) {

            var selectElement = $("#period");
            var allData = data;
            var allObjects = allData.data;
            for (var i = 0; i < allObjects.length; i++) {
                var date = new Date(allObjects[i].startTime); //get startTime timestamp from JSON
                var year = date.getFullYear(); //convert timestamp to year
                var newOption = '<option class="select ' + year + '" value="' + year + '">' + year + '</option>';
                selectElement.append(newOption);

                /* Hide dublicate years from select option */
                var seen = {};
                $('.select').each(function () {
                    var txt = $(this).text();
                    if (seen[txt])
                        $(this).remove();
                    else
                        seen[txt] = true;
                });
            }
        }); //getJSON
        $.getJSON('/ServiceEngine/api/json/reply/RequestNewsCalendarPagination?apiversion=1&lcid=' + lcid + '&customerKey=almbrand&solutionID=1804&MaxRows=100&pageno=0&instrumentid=' + instrumentid + '&StartDate=' + convertedDate + '', function (data) {

            var selectElement = $("#period");
            var allData = data;
            var allObjects = allData.data;
            for (var i = 0; i < allObjects.length; i++) {

                var date = new Date(allObjects[i].startTime); //get startTime timestamp from JSON
                var year = date.getFullYear(); //convert timestamp to year

                var newOption = '<option class="select ' + year + '" value="' + year + '">' + year + '</option>';
                selectElement.append(newOption);

                /* Hide dublicate years from select option */
                var seen = {};
                $('.select').each(function () {
                    var txt = $(this).text();
                    if (seen[txt])
                        $(this).remove();
                    else
                        seen[txt] = true;
                });
            }

            var source = $('#IRNewsCalendarTemplate').html();
            var template = Handlebars.compile(source);
            $('.IRNewsCalendar').html(template(allData));

            //pagination(allData);

        }); //getJSON
    }); //function

    /* ____________________Pagination_______________________ */
    function pagination(allData) {

        $('.IRNewsPageNumber').remove();
        //add page number for each 10th object
        var currentPage = '.IRPageNumber' + 1;
        var pageNumber = 1;
        var maxPagesToShow = 5;
        var data = allData.data;
        amountOfNewsPerPage = 10;

        for (var i = 0; i < data.length; i++) {
            if (i == 0) {
                $('.IRNewsPagination').append("<a href='javascript: onClick=showPage(" + pageNumber + ")' class='IRNewsPageNumber IRPageNumber" + pageNumber + " active'>"
                    + pageNumber + "</a>");
            }
            if (i % amountOfNewsPerPage == 0 && i != 0) {
                pageNumber++;
                $('.IRNewsPagination').append("<a href='javascript: onClick=showPage(" + pageNumber + ")' class='IRNewsPageNumber IRPageNumber" + pageNumber + "' '>"
                + pageNumber + "</a>");
                if (pageNumber > maxPagesToShow) {
                    $('.IRPageNumber' + pageNumber + '').css('display', 'none');
                }
            }
            if (i >= amountOfNewsPerPage) {
                $('#' + data[i].storyId).addClass('page' + pageNumber + ' hide');
            } else {
                $('#' + data[i].storyId).addClass('page' + pageNumber);
            }
        }
        if (pageNumber > 1 && pageNumber >= 5) {
            $('.IRNewsPagination').prepend("<a href='javascript: onClick=showPage(" + (1) + ")' class='IRNewsPageNumber prevPage' style='display:none'>Prev</a>");
            $('.IRNewsPagination').append("<a href='javascript: onClick=showPage(" + (2) + ")' class='IRNewsPageNumber nextPage'>Next</a>");
        }
    }

    function showPage(page) {
        //var currentPage = '.IRPageNumber' + id;

        var amountOfPages = $('*[class*="IRPageNumber"]').length;
        var prevPage = (page - 1);
        var nextPage = (page + 1);
        var maxPage = (page + 2);
        var minPage = (page - 2);

        if (minPage == 0) {
            $('.IRNewsPageNumber').css('display', 'none');
            $('.IRPageNumber' + prevPage + '').css('display', 'inline-block');
            $('.IRPageNumber' + page + '').css('display', 'inline-block');
            $('.IRPageNumber3').css('display', 'inline-block');
            $('.IRPageNumber4').css('display', 'inline-block');
            $('.IRPageNumber5').css('display', 'inline-block');
        }
        if ((amountOfPages - maxPage) == 0) {
            $('.IRNewsPageNumber').css('display', 'none');
            $('.IRPageNumber' + page + '').css('display', 'inline-block');
            $('.IRPageNumber' + prevPage + '').css('display', 'inline-block');
            $('.IRPageNumber' + minPage + '').css('display', 'inline-block');
            $('.IRPageNumber' + (page + 3) + '').css('display', 'inline-block');
            $('.IRPageNumber' + nextPage + '').css('display', 'inline-block');
            $('.IRPageNumber' + maxPage + '').css('display', 'inline-block');
        }
        if ((amountOfPages - maxPage) < 0) {
            $('.IRNewsPageNumber').css('display', 'none');
            $('.IRPageNumber' + page + '').css('display', 'inline-block');
            $('.IRPageNumber' + prevPage + '').css('display', 'inline-block');
            $('.IRPageNumber' + minPage + '').css('display', 'inline-block');
            $('.IRPageNumber' + nextPage + '').css('display', 'inline-block');
            $('.IRPageNumber' + maxPage + '').css('display', 'inline-block');
            if ((amountOfPages - maxPage) == -1) {
                $('.IRPageNumber' + (page - 3) + '').css('display', 'inline-block');
            } else {
                $('.IRPageNumber' + (page - 3) + '').css('display', 'inline-block');
                $('.IRPageNumber' + (page - 4) + '').css('display', 'inline-block');
            }
        }
        if (minPage > 0 && amountOfPages > maxPage) {
            $('.IRNewsPageNumber').css('display', 'none');
            $('.IRPageNumber' + page + '').css('display', 'inline-block');
            $('.IRPageNumber' + prevPage + '').css('display', 'inline-block');
            $('.IRPageNumber' + minPage + '').css('display', 'inline-block');
            $('.IRPageNumber' + nextPage + '').css('display', 'inline-block');
            $('.IRPageNumber' + maxPage + '').css('display', 'inline-block');
        }

        //show/hide prev and next buttons
        if (page > 1) {
            $('a.prevPage').attr('href', 'javascript: onClick=showPage(' + (prevPage) + ')');
            $('.prevPage').css('display', 'inline-block');
        } else if (page == 1) {
            $('.prevPage').css('display', 'none');
        }
        if (page == amountOfPages) {
            $('.nextPage').css('display', 'none');
        } else {
            $('.nextPage').css('display', 'inline-block');
            $('a.nextPage').attr('href', 'javascript: onClick=showPage(' + (nextPage) + ')');
        }

        //hide and show data
        $('.IRDataGroup').addClass('hide');
        $('.page' + page).removeClass('hide');
        //switch active class in footer
        $('.IRNewsPageNumber').removeClass('active');
        $('.IRPageNumber' + page).addClass('active');
    }
    /* ____________________Pagination END_______________________ */



    //helper to get category
    Handlebars.registerHelper('getCategory', function (objects, options) {

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
        //calendartype value
        var categoryValue = getObjects([objects], 'key', options);
        return categoryValue;
    });


    //helper to get location
    Handlebars.registerHelper('getLocation', function (objects, options) {

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
        //get calendartype value by key
        var location = getObjects([objects], 'key', options);
        return location;
    });


    //helper to get eventendtime
    Handlebars.registerHelper('getEventEndTime', function (objects, options) {

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

        //get eventendtime value by key
        var eventendtime = getObjects([objects], 'key', options);
        return eventendtime;
    });

    $('.sendMeReminderInAdvance select').wrap('<div class="select_wrapper"></div>');
    $('.sendMeReminderInAdvance select').parent().prepend('<span class="minuttes">' + $(this).find(':selected').text() + '</span>');
    $('.sendMeReminderInAdvance select').parent().children('span').width($('.sendMeReminderInAdvance select').width());
    $('.sendMeReminderInAdvance select').css('display', 'none');
    $('.sendMeReminderInAdvance select').parent().append('<ul class="select_inner"></ul>');
    $('.sendMeReminderInAdvance select').children().each(function () {
        var opttext = $(this).text();
        var optval = $(this).val();
        //$('select').parent().children('.select_inner').append('<li id="' + optval + '">' + opttext + '</li>');
        $('.sendMeReminderInAdvance select').parent().children('.select_inner').append('<li id="' + optval + '">' + opttext + '</li>');

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




    //check uncheck email reminders
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


    var customXApplied = false;
    var translationsApplied = false;

    function selectPeriod() {
        var selectedPeriod = $("#period").val();
        var periodStartDate = moment(selectedPeriod).format('YYYY-MM-DD HH:mm');
        var periodEndDate = moment(selectedPeriod).format('YYYY-12-31 HH:mm');

        if (selectedPeriod == 0) {
            periodStartDate = moment('1970').format('YYYY-MM-DD HH:mm');
            var dateToday = Date.now();
            periodEndDate = moment(dateToday).toISOString('YYYY-MM-DD HH:mm');
        }
        if (selectedPeriod == 1) {
            var dateToday = Date.now();
            periodStartDate = moment(dateToday).format('YYYY-MM-DD HH:mm');
        }

        $.getJSON('/ServiceEngine/api/json/reply/RequestNewsCalendarPagination?apiversion=1&lcid=' + lcid + '&customerKey=almbrand&solutionID=1804&MaxRows=20000&pageno=0&instrumentid=' + instrumentid + '&StartDate=' + periodStartDate + '', function (data) {
            var allData = data.data;

            for (var i = allData.length - 1; i >= 0 ; i--) {
                if (selectedPeriod == 1970) {
                }
                if (selectedPeriod == 1) {

                }
                else if (allData[i].startTime >= periodEndDate) {
                    data.data.splice(i, 1);
                }
            }

            var source = $('#IRNewsCalendarTemplate').html();
            var template = Handlebars.compile(source);
            $('.IRNewsCalendar').html(template(data));

            $('#tabOne').addClass('active');
            $('#tabTwo').removeClass('active');
            //pagination(data);


            customXApplied = false;
            prepareCustomX();
        });

    };


    function prepareCustomX() {
        if (!customXApplied) {




            function prepareTranslations() {

                if (translationsApplied) {

                    if (typeof ($('.categoryFilters')) != 'undefined') {

                        debugStep("applyTranslations()");

                        $.when(requestTranslationsData)
                            .done(function (TranslationsData) {

                                if (globalActiveLanguage == "da") {

                                    $('.titleFinancial').html("Finansiel");
                                    $('.titleRoadShows').html("Roadshows");
                                    $('.upcomingEvents').text("Kommende begivenheder");
                                    $('.pastEvents').text("Tidligere begivenheder");

                                    $('.t_signUpEmailReminders').html("Tilmeld Email Påmindelser");
                                    $('.t_signUpEmailText').text("Vælg begivenheder ovenfor, som du ønsker at modtage email påmindelser på");
                                    $('.calendarReminderAll').text("Tilmeld alle begivenheder");
                                    $('.sendReminders1').text("Send mig påmindelser");
                                    $('.sendReminders2').text("før begivenheden starter");
                                    $('.sendRemindersTo').text("Send kalender begivenheder til");
                                    $('#emailCalendarSignup_submit').text("Tilmeld");
                                    $('.t_unsubscribe_text').html("Hvis du ønsker at afmelde, venligst indtast email og tryk på <b>afmeld</b>");

                                } else {
                                    $('.titleFinancial').html("Financial");
                                    $('.titleRoadShows').html("Roadshows");
                                    $('.t_signUpEmailReminders').html("Sign up for Email Reminders");
                                    $('.t_signUpEmailText').text("Please select the events above that you want to receive email reminders for or check the box below to receive reminders for all events");
                                    $('.calendarReminderAll').text("Sign up for all events");
                                    $('.sendReminders1').text("Send me reminders");
                                    $('.sendReminders2').text("before the events take place");
                                    $('.sendRemindersTo').text("Send the calendar reminders to ");
                                    $('#emailCalendarSignup_submit').html("Sign Up");
                                    $('.t_unsubscribe_text').html("If you would like to unsubscribe, please type in your email and press the <b>unsubscribe</b> button");

                                }

                                $('#emailCalendarUnsubscribe').text(TranslationsData.data.t_unsubscribe);
                                $('.t_unsubscribe').text(TranslationsData.data.t_unsubscribe);


                                $('.calendarDetails').html(TranslationsData.data.t_view_details);
                                $('.calendarReminder').html(TranslationsData.data.t_email_reminder);
                                $('.calendarAddTo').html(TranslationsData.data.t_add_to_calendar);

                                $('.minuttes').text(TranslationsData.data.t_15_minutes);
                                $('#15').text(TranslationsData.data.t_15_minutes);
                                $('#30').text(TranslationsData.data.t_30_minutes);
                                $('#60').text(TranslationsData.data.t_1_hour);
                                $('#120').text(TranslationsData.data.t_2_hours);
                                $('#240').text(TranslationsData.data.t_4_hours);
                                $('#480').text(TranslationsData.data.t_8_hours);
                                $('#1440').text(TranslationsData.data.t_1_day);
                                $('#2880').text(TranslationsData.data.t_2_days);
                                $('#10080').text("1 " + TranslationsData.data.t_week);
                                $('#20160').text("2 " + TranslationsData.data.t_weeks);
                                $('#40320').text("1 " + TranslationsData.data.t_month);


                            }
                            );
                        translationsApplied = true;
                    }
                }
            }





            $("#emailCalendarSignup_submit").click(function () {

                //get selected reminder value (in minutes)
                var selectedReminder = $('#selectedReminder').find(":selected").val();


                var checkedValues = $('.calendarReminder_checked').map(function () {

                    //var solutionId = "2368";
                    var storyId = $(this).attr("storyId");
                    var eventStartTime = $(this).attr("eventStartTime");
                    var subject = $(this).attr("subject");
                    var message = $(this).attr("message");

                    var eventDate = new Date(eventStartTime);
                    var reminderDate = new Date(eventDate - selectedReminder * 60 * 1000); // subtract selected reminder minutes

                    var startDate = moment.utc(eventDate).toISOString();
                    var eventReminderTime = moment.utc(reminderDate).toISOString();

                    return { "solutionId": solutionId, "storyId": storyId, "startDate": startDate, "eventReminderTime": eventReminderTime, "headline": subject, "message": message };
                }).get();

                //Check if email is valid and min. 1 event is checked
                if (isValidEmailAddress($('#emailCalendarSignup').val()) && checkedValues.length != 0) {

                    //Add email to each checked calendar event
                    for (var i = 0; i < checkedValues.length; i++) {
                        checkedValues[i].email = $('#emailCalendarSignup').val();
                    }



                    var reminders = checkedValues;
                    $.ajax({
                        type: "POST",
                        url: "http://ir.euroinvestor.com/tools/CalendarEvents/default.aspx",
                        data: { calendarevents: JSON.stringify(reminders) },
                        //contentType: "application/json; charset=utf-8",
                        //dataType: "json",
                        success: function (data) {
                            if (globalActiveLanguage == "da") {
                                $('.verificationImage').attr('src', 'images/verification.png');
                                $('.informationHeader').text("Fantastisk!");
                                $('.information').text("Du har succesfuldt tilmeldt email påmindelser");
                                $('#dialogueBox_register').show();
                                $('.transparantOverlay').show();
                            } else {
                                $('.verificationImage').attr('src', 'images/verification.png');
                                $('.informationHeader').text("Fantastic!");
                                $('.information').text("You have succesfully subscribed to email reminders");
                                $('#dialogueBox_register').show();
                                $('.transparantOverlay').show();
                            }
                        },
                        failure: function (errMsg) {
                            //alert(errMsg);
                        }
                    });

                }
                else if (!isValidEmailAddress($('#emailCalendarSignup').val()) && checkedValues.length > 0) {
                    if (globalActiveLanguage == "da") {
                        $('.verificationImage').attr('src', 'images/information.png');
                        $('.informationHeader t_something_is_missing').text("Ups, noget mangler!");
                        $('.information t_enter_valid_email').text("Venligst indtast en gyldig email");
                        $('#dialogueBox_register').show();
                        $('.transparantOverlay').show();
                    } else {
                        $('.verificationImage').attr('src', 'images/information.png');
                        $('.informationHeader t_something_is_missing').text("Ups, something is missing!");
                        $('.information t_enter_valid_email').text("Please enter a valid email");
                        $('#dialogueBox_register').show();
                        $('.transparantOverlay').show();
                    }


                }
                else if (isValidEmailAddress($('#emailCalendarSignup').val()) && checkedValues.length == 0) {

                    if (globalActiveLanguage == "da") {
                        $('.verificationImage').attr('src', 'images/information.png');
                        $('.informationHeader').text("Ups, noget mangler!");
                        $('.information').text("Sæt venligst hak i nogle events");
                        $('#dialogueBox_register').show();
                        $('.transparantOverlay').show();
                    } else {
                        $('.verificationImage').attr('src', 'images/information.png');
                        $('.informationHeader').text("Ups, something is missing!");
                        $('.information').text("Please check some of the events");
                        $('#dialogueBox_register').show();
                        $('.transparantOverlay').show();
                    }
                }
                else {
                    if (globalActiveLanguage == "da") {
                        $('.verificationImage').attr('src', 'images/information.png');
                        $('.informationHeader').text("Ups, noget mangler!");
                        $('.information').text("Venligst sæt hak i nogle events og indtast gyldig email");
                        $('#dialogueBox_register').show();
                        $('.transparantOverlay').show();
                    } else {
                        $('.verificationImage').attr('src', 'images/information.png');
                        $('.informationHeader').text("Ups, something is missing!");
                        $('.information').text("Please enter a valid email and check some events");
                        $('#dialogueBox_register').show();
                        $('.transparantOverlay').show();
                    }
                }
            });

            //Validate Email
            function isValidEmailAddress(emailAddress) {
                var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
                return pattern.test(emailAddress);
            };

            $("#emailCalendarUnsubscribe").click(function () {

                if (isValidEmailAddress($('#unsubscribeEmail').val())) {

                    var email = $('#unsubscribeEmail').val();
                    //var solutionId = "2368";

                    $.ajax({
                        type: "POST",
                        url: "http://ir.euroinvestor.com/tools/CalendarEvents/default.aspx",
                        data: { unsubscribe: JSON.stringify([{ "email": email, "solutionId": solutionId }]) },
                        success: function (data) {
                            if (globalActiveLanguage == "da") {
                                $('.verificationImage').attr('src', 'images/verification.png');
                                $('.informationHeader').text("Succes!");
                                $('.information').text("Du har succesfuldt afmeldt email påmindelser");
                                $('#dialogueBox_unsubscribe').show();
                                $('.transparantOverlay').show();
                            } else {
                                $('.verificationImage').attr('src', 'images/verification.png');
                                $('.informationHeader').text("Success!");
                                $('.information').text("You have successfully unsbscribed to all events");
                                $('#dialogueBox_unsubscribe').show();
                                $('.transparantOverlay').show();
                            }
                        },
                        failure: function (errMsg) {
                            //alert(errMsg);
                        }
                    });

                }
                else {
                    if (globalActiveLanguage == "da") {
                        $('.verificationImage').attr('src', 'images/information.png');
                        $('.informationHeader').text("Ups, noget mangler!");
                        $('.information').text("Venligst indtast en gyldig email");
                        $('#dialogueBox_unsubscribe').show();
                        $('.transparantOverlay').show();
                    } else {
                        $('.verificationImage').attr('src', 'images/information.png');
                        $('.informationHeader').text("Ups, something is missing!");
                        $('.information').text("Please enter a valid email");
                        $('#dialogueBox_unsubscribe').show();
                        $('.transparantOverlay').show();
                    }
                }

            });




            function showCategory(category) {
                $('.CalendarDate').hide();
                $('.category_' + category).show();

            }

            $('.calendarReminder').click(function () {
                if ($(this).hasClass('calendarReminder_checked')) {
                    $(this).removeClass('calendarReminder_checked');
                }
                else {
                    $(this).addClass('calendarReminder_checked');
                }
                return false;
            });


            $(".calendarDetails").click(function () {

                if ($(this).hasClass('calendarDetails_expanded')) {
                    $(this).removeClass('calendarDetails_expanded');
                } else {
                    $(this).addClass('calendarDetails_expanded');
                }
                $(this).parent().find("span.toggle").slideToggle("fast");
                //undgå at siden scroller til tops
                return false;
            });

            //Category Filters
            $('.categoryFilters').on('click', 'li', function () {
                $('.categoryFilters li.active').removeClass('active');
                $(this).addClass('active');
                showCategory($(this).find('button').attr('showCategory'));
            });
            $('.closeBox').click(function () {
                $('#dialogueBox_register').hide();
                $('#dialogueBox_unsubscribe').hide();
                $('.transparantOverlay').hide();
            });



            //Select code
            //$(document).ready(function () {

            //$('.sendMeReminderInAdvance select').wrap('<div class="select_wrapper"></div>');
            //$('.sendMeReminderInAdvance select').parent().prepend('<span class="minuttes">' + $(this).find(':selected').text() + '</span>');
            //$('.sendMeReminderInAdvance select').parent().children('span').width($('.sendMeReminderInAdvance select').width());
            //$('.sendMeReminderInAdvance select').css('display', 'none');
            //$('.sendMeReminderInAdvance select').parent().append('<ul class="select_inner"></ul>');
            //$('.sendMeReminderInAdvance select').children().each(function () {
            //    var opttext = $(this).text();
            //    var optval = $(this).val();
            //    //$('select').parent().children('.select_inner').append('<li id="' + optval + '">' + opttext + '</li>');
            //    $('.sendMeReminderInAdvance select').parent().children('.select_inner').append('<li id="' + optval + '">' + opttext + '</li>');

            //});


            ////View Details

            //$('select').parent().find('li').on('click', function () {
            //    var cur = $(this).attr('id');
            //    $('select').parent().children('span').text($(this).text());
            //    $('select').children().removeAttr('selected');
            //    $('select').children('[value="' + cur + '"]').attr('selected', 'selected');


            //});
            //$('select').parent().on('click', function () {
            //    $(this).find('ul').slideToggle('fast');
            //});
            showCategory('Financial');
            console.log("xxx");

            customXApplied = true;
            translationsApplied = true;
            prepareTranslations();
        }
    }

    $(function () {
        setInterval(function () {
            prepareCustomX();

        }, 500);
    });





</script>


<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
