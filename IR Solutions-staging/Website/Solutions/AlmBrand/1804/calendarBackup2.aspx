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
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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
                <button showcategory="Financial" class="titleFinancial"></button>
            </li>
            <li>
                <button showcategory="Roadshow" class="titleRoadShows"></button>
            </li>
        </ul>

        <div style="clear: both;"></div>
        <div class="divLine"></div>
        <%--<div id="calendarDatesEncapsulator"></div>--%>
        <div class="IRNewsCalendar"></div>

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
        <div class="CalendarDate_template" style="display: block;">
            <div class="CalendarDate category_{{getCategory keyValueSet 'calendartype'}}" style="display: block;">
                <div class="contentWrapper">
                    <div class="calendarDate">
                        <span class="calendarDay">{{showDateWithFormat startTime 'DD'}}</span>
                        <span class="calendarMonth">{{showDateWithFormat startTime 'MMMM'}}</span>
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



    var customXApplied = false;
    var translationsApplied = false;
    function prepareCustomX() {
        if (!customXApplied) {


            function prepareTranslations() {

                if (translationsApplied) {

                    if (typeof ($('.categoryFilters')) != 'undefined') {

                        debugStep("applyTranslations()");

                        $.when(requestTranslationsData)

                            .done(function (TranslationsData) {

                                if (globalActiveLanguage == "da") {

                                    $('.titleFinancial').html("Finanskalender");
                                    $('.titleRoadShows').html("Roadshows");
                                    $('.t_signUpEmailReminders').html("Tilmeld mail påmindelser");
                                    $('.t_signUpEmailText').text("Vælg de begivenheder, du ønsker at modtage på mail");
                                    $('.calendarReminderAll').text("Tilmeld alle begivenheder");
                                    $('.sendReminders1').text("Send mig påmindelser");
                                    $('.sendReminders2').text("før begivenheden starter");
                                    $('.sendRemindersTo').text("Send kalender begivenheder til");
                                    $('#emailCalendarSignup_submit').text("Tilmeld");
                                    $('.t_unsubscribe_text').html("Hvis du ønsker at afmelde, indtast venligst din mail og tryk på <b>Afmeld</b>");


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


                            }
                        )
                        translationsApplied = true;
                    }
                }
            }

            $("#emailCalendarSignup_submit").click(function () {

                //get selected reminder value (in minutes)
                var selectedReminder = $('#selectedReminder').find(":selected").val();


                var checkedValues = $('.calendarReminder_checked').map(function () {


                    var solutionId = "1840";
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
                            } else{
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
                    var solutionId = "1840";

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
            $('.closeBox').click(function () {
                $('#dialogueBox_register').hide();
                $('#dialogueBox_unsubscribe').hide();
                $('.transparantOverlay').hide();
            });



            //Select code
            $(document).ready(function () {
                $('select').wrap('<div class="select_wrapper"></div>');
                $('select').parent().prepend('<span class="minuttes">' + $(this).find(':selected').text() + '</span>');
                $('select').parent().children('span').width($('select').width());
                $('select').css('display', 'none');
                $('select').parent().append('<ul class="select_inner"></ul>');
                $('select').children().each(function () {
                    var opttext = $(this).text();
                    var optval = $(this).val();
                    //$('select').parent().children('.select_inner').append('<li id="' + optval + '">' + opttext + '</li>');
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

<link rel="stylesheet" type="text/css" href="ir.calendar_test.css?v=635793126123244922" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
