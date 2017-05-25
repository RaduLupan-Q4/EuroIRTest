<%@ Page Language="C#" AutoEventWireup="true" %>

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
  <div class="IRNewsTableFooter">
        <div class="IRNewsPagination"></div>
    </div>
    <div class="divLine"></div>

    <div class="calendarRemindAllEncapsulator">
        <h2 class="t_signUpEmailReminders"></h2>
        <p class="t_signUpEmailText"></p>
        <%--<a class="calendarReminderAll"></a>--%>
        <a class="calendarReminderFinancial"></a>
        <br />
        <a class="calendarReminderRoadshow"></a>
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

    <div class="divLine"></div>

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
        <input style="margin-left: 1%;" tabindex="1" class="informationInput enterInformationLoginEmail" name="enterInformationLoginEmail" id="unsubscribeEmail" type="email" placeholder="Eg youremail@mail.com" />
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
                        <a href="#" class="calendarReminder" storyid="{{storyId}}" eventstarttime="{{startTime}}" subject="{{headline}}" message="{{text}}"></a>
                        <%--<a href="http://localhost:59157/default.aspx/?enddate={{getEventEndTime keyValueSet 'eventendtime'}}&starttime={{startTime}}&subject={{headline}}&category={{getCategory keyValueSet 'calendartype'}}&location={{getLocation keyValueSet 'location'}}&text={{text}}" class="calendarAddTo calendarFormat">Add to calendar</a>--%>
                        <%--<a href="http://ir.euroinvestor.com/tools/generateICS/default.aspx?enddate={{getEventEndTime keyValueSet 'eventendtime'}}&starttime={{startTime}}&subject={{headline}}&category={{getCategory keyValueSet 'calendartype'}}&location={{getLocation keyValueSet 'location'}}&text={{text}}" class="calendarAddTo calendarFormat"></a>--%>
                       <%--<form method="post" action="http://ir.euroinvestor.com/tools/generateICS/default.aspx" >
                            <input type="hidden" name="enddate" value="{{getEventEndTime keyValueSet 'eventendtime'}}" />
                            <input type="hidden" name="starttime" value="{{startTime}}" />
                            <input type="hidden" name="subject" value="{{headline}}" />
                            <input type="hidden" name="category" value="{{getCategory keyValueSet 'calendartype'}}" />
                            <input type="hidden" name="location" value="{{getLocation keyValueSet 'location'}}" />
                            <input type="hidden" name="text" value="{{text}}" />
                             <a href="#" onclick="$(this).closest('form').submit()" class="calendarAddTo calendarFormat"></a>
                        </form>--%>
                        <form method="post" action="http://ir.euroinvestor.com/ServiceEngine/api/json/reply/RequestCalendarICSFile">
                            <input type="hidden" name="apiversion" value="1" />
                            <input type="hidden" name="customerKey" value="{{../key}}" />
                            <input type="hidden" name="solutionID" value="{{../solutionID}}" />
                            <input type="hidden" name="instrumentid" value="{{../instrumentID}}" />
                            <input type="hidden" name="lcid" value="1033" />
                            <input type="hidden" name="enddate" value="{{getEventEndTime keyValueSet 'eventendtime'}}" />
                            <input type="hidden" name="starttime" value="{{convertToISO startTime}}" />
                            <input type="hidden" name="subject" value="{{../name}} - {{headline}}" />
                            <input type="hidden" name="category" value="{{getCategory keyValueSet 'calendartype'}}" />
                            <input type="hidden" name="location" value="{{getLocation keyValueSet 'location'}}" />
                            <input type="hidden" name="text" value="{{text}}" />
                            <a href="#" onclick="$(this).closest('form').submit()" class="calendarAddTo calendarFormat"></a>
                        </form>
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
/**************************
 * Variables
 **************************/

var solutionId = "1804";
var lcid = 1033;
var instrumentid = 100059;
var allData;

/**************************
 * Init
 **************************/
//Get JSON from calender feed
$(function() {
    if (globalActiveLanguage == "da") {
        lcid = 1030;
    }
    yearFilter();

    showCategory('Financial');
    addCustomTranslations();
    var today = Date.now();
    var convertedDate = moment(today).format('YYYY-MM-DD');
    generateData(convertedDate);

});

function generateData(from, to) {
    $.getJSON(getServiceEngingeURL() + 'RequestNewsCalendarPagination?apiversion=1&lcid=' + lcid + '&customerKey=almbrand&solutionID=1804&MaxRows=100&pageno=0&instrumentid=' + instrumentid + '&StartDate=' + from + '&sortAscDesc=desc', function(data) {
        if (to !== undefined) {
            for (var i = data.data.length - 1; i >= 0; i--) {
                if (data.data[i].startTime >= to) {
                    data.data.splice(i, 1);
                }
            }
        }
        var selectElement = $("#period");
        allData = convertTimestamp(data.data);;

        var source = $('#IRNewsCalendarTemplate').html();
        var template = Handlebars.compile(source);
        $('.IRNewsCalendar').html(template({
            data: allData
        }));

        pagination(allObjectsWithinActiveCategory());
        generateReminderButtons();
        showPage(1);
        $('#tabOne').addClass('active');
        $('#tabTwo').removeClass('active');
        addCustomTranslations();
    });
}
/**************************
 * Year filter
 **************************/

function selectPeriod() {
    var selectedPeriod = $("#period").val();
    var periodStartDate = moment(selectedPeriod).format('YYYY-MM-DD');
    var periodEndDate = moment(selectedPeriod).format('YYYY-12-31');

    if (selectedPeriod == 0) {
        periodStartDate = moment('1970').format('YYYY-MM-DD');
        var dateToday = Date.now();
        periodEndDate = moment(dateToday).toISOString('YYYY-MM-DD');
    }
    if (selectedPeriod == 1) {
        var dateToday = Date.now();
        periodStartDate = moment(dateToday).format('YYYY-MM-DD');
        periodEndDate = undefined;
    }
    generateData(periodStartDate, periodEndDate);
};

/**************************
 * Year filter
 **************************/

function yearFilter() {
    //filter by date
    $.getJSON(getServiceEngingeURL() + 'RequestNewsCalendarPagination?apiversion=1&lcid=' + lcid + '&customerKey=almbrand&solutionID=1804&MaxRows=1000&pageno=0&instrumentid=' + instrumentid + '&StartDate=2000-01-01', function(data) {

        var selectElement = $("#period");
        var allObjects = convertTimestamp(data.data);;
        var optYear = [];
        for (var i = 0; i < allObjects.length; i++) {
            var date = new Date(allObjects[i].startTime); //get startTime timestamp from JSON
            var year = date.getFullYear(); //convert timestamp to year
            if (optYear.indexOf(year) === -1) {
                selectElement.append('<option class="select ' + year + '" value="' + year + '">' + year + '</option>');
                optYear.push(year)
            }
        }
    });
}




/**************************
 * Pagination functions
 **************************/
function pagination(data) {

    $('.IRNewsPageNumber').remove();
    $('.IRDataGroup').removeClass('hide');
    var currentPage = '.IRPageNumber' + 1;
    var pageNumber = 1;
    var maxPagesToShow = 5;
    amountOfNewsPerPage = 10;

    for (var i = 0; i < data.length; i++) {
        if (i == 0) {
            $('.IRNewsPagination').append("<a href='javascript: onClick=showPage(" + pageNumber + ")' class='IRNewsPageNumber IRPageNumber" + pageNumber + " active' style='display:inline-block'>" + pageNumber + "</a>");
        }
        if (i % amountOfNewsPerPage == 0 && i != 0) {
            pageNumber++;
            $('.IRNewsPagination').append("<a href='javascript: onClick=showPage(" + pageNumber + ")' class='IRNewsPageNumber IRPageNumber" + pageNumber + "' '>" + pageNumber + "</a>");
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

function allObjectsWithinActiveCategory() {
    var category = $('.categoryFilters .active button').attr('showcategory');
    var activeCategoryArray = [];

    $.each(allData, function(key, value) {

        var object = allData[key];
        $.each(object.keyValueSet, function(key, value) {
            if (value.key == 'calendartype' && value.value == category) {
                activeCategoryArray.push(object);
            }
        });
    });
    return activeCategoryArray;
}



function showCategory(category) {
    $('.CalendarDate').hide();
    $('.category_' + category).show();
}

/**************************
 * Generate reminder buttons
 **************************/
function generateReminderButtons() {
    // reminder wrapper
    var el = $('.sendMeReminderInAdvance select');
    el.wrap('<div class="select_wrapper"></div>');
    el.parent().prepend('<span class="minuttes">' + $(this).find(':selected').text() + '</span>');
    el.parent().children('span').width(el.width());
    el.css('display', 'none');
    el.parent().append('<ul class="select_inner"></ul>');
    el.children().each(function() {
        var opttext = $(this).text();
        var optval = $(this).val();
        el.parent().children('.select_inner').append('<li id="' + optval + '">' + opttext + '</li>');
    });
}
/**************************
 * Translations functions
 **************************/
function addCustomTranslations() {
    if (typeof($('.categoryFilters')) != 'undefined') {

        debugStep("applyTranslations()");

        $.when(requestTranslationsData)
            .done(function(TranslationsData) {

                if (globalActiveLanguage == "da") {

                    $('.titleFinancial').html("Finanskalender");
                    $('.titleRoadShows').html("Roadshows");
                    $('.upcomingEvents').text("Kommende begivenheder");
                    $('.pastEvents').text("Tidligere begivenheder");
                    $('.calendarReminder').text("Mail påmindelse");
                    $('.t_signUpEmailReminders').html("Tilmeld mail Påmindelser");
                    $('.t_signUpEmailText').text("Vælg de events, du ønsker at modtage på mail:");

                    $('.calendarReminderFinancial').text("Tilmeld finanskalender");
                    $('.calendarReminderRoadshow').text("Tilmeld roadshows");
                    $('.sendReminders1').text("Send mig påmindelser");
                    $('.sendReminders2').text("før events starter.");
                    $('.sendRemindersTo').text("Send kalender events til:");
                    $('#emailCalendarSignup_submit').text("Tilmeld");
                    $('.t_unsubscribe_text').html("Indtast din mail og tryk på afmeld:");

                } else {
                    $('.titleFinancial').html("Financial");
                    $('.titleRoadShows').html("Roadshows");
                    $('.t_signUpEmailReminders').html("Sign up for Email Reminders");
                    $('.calendarReminder').text("Email Reminder");
                    $('.t_signUpEmailText').text("Please select the events above that you want to receive email reminders for or check the box below to receive reminders for all events");

                    $('.calendarReminderFinancial').text("Sign up for financial calendar");
                    $('.calendarReminderRoadshow').text("Sign up for roadshows");
                    $('.sendReminders1').text("Send me reminders");
                    $('.sendReminders2').text("before the events take place");
                    $('.sendRemindersTo').text("Send the calendar reminders to ");
                    $('#emailCalendarSignup_submit').html("Sign Up");
                    $('.t_unsubscribe_text').html("If you would like to unsubscribe, please type in your email and press the <b>unsubscribe</b> button");

                }

                $('#emailCalendarUnsubscribe').text(TranslationsData.data.t_unsubscribe);
                $('.t_unsubscribe').text(TranslationsData.data.t_unsubscribe);


                $('.calendarDetails').html(TranslationsData.data.t_view_details);

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


            });
    }
}

/**************************
 * Email functions
 **************************/
//Validate Email
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};


/**************************
 * Helping functions
 **************************/

function convertTimezone(timestamp) {
    var obj = moment.utc(timestamp, "YYYY-MM-DD HH:mm:ss").local().toISOString();
    return moment.utc(timestamp, "YYYY-MM-DD HH:mm:ss").local().format("YYYY-MM-DD HH:mm");
}

function convertTimestamp(allData) {
    for (var i = 0; i < allData.length; i++) {
        allData[i].startTime = convertTimezone(allData[i].startTime);
        for (var j = 0; j < allData[i].keyValueSet.length; j++) {
            if (allData[i].keyValueSet[j].key === 'eventstarttime' || allData[i].keyValueSet[j].key === 'eventendtime') {
                allData[i].keyValueSet[j].value = convertTimezone(allData[i].keyValueSet[j].value);
            }
        }
    }
    return allData;
}

/**************************
 * Event Handlers
 **************************/
//View Details
$(function() {
    $('select').parent().find('li').on('click', function() {
        var cur = $(this).attr('id');
        $('select').parent().children('span').text($(this).text());
        $('select').children().removeAttr('selected');
        $('select').children('[value="' + cur + '"]').attr('selected', 'selected');


    });
    $('select').parent().on('click', function() {
        $(this).find('ul').slideToggle('fast');
    });

    //Category Filters
    $('.categoryFilters').on('click', 'li', function() {
        $('.categoryFilters li.active').removeClass('active');
        $(this).addClass('active');
        showCategory($(this).find('button').attr('showCategory'));

        pagination(allObjectsWithinActiveCategory());

    });

    //Email handlers
    $(document).on('click', '#emailCalendarSignup_submit', function() {

        //get selected reminder value (in minutes)
        var selectedReminder = $('#selectedReminder').find(":selected").val();


        var checkedValues = $('.calendarReminder_checked').map(function() {

            //var solutionId = "2368";
            var storyId = $(this).attr("storyId");
            var eventStartTime = $(this).attr("eventStartTime");
            var subject = $(this).attr("subject");
            var message = $(this).attr("message");

            var eventDate = new Date(eventStartTime);
            var reminderDate = new Date(eventDate - selectedReminder * 60 * 1000); // subtract selected reminder minutes

            //var startDate = moment.utc(eventDate).toISOString();
            var startDate = moment.utc(eventDate).format("YYYY-MM-DD");
            var eventReminderTime = moment.utc(reminderDate).toISOString();

            return {
                "solutionId": solutionId,
                "storyId": storyId,
                "startDate": startDate,
                "eventReminderTime": eventReminderTime,
                "headline": subject,
                "message": message
            };
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
                data: {
                    calendarevents: JSON.stringify(reminders)
                },
                //contentType: "application/json; charset=utf-8",
                //dataType: "json",
                success: function(data) {
                    if (globalActiveLanguage == "da") {
                        $('.verificationImage').attr('src', 'images/verification.png');
                        $('.informationHeader').text("Fantastisk!");
                        $('.information').text("Du har succesfuldt tilmeldt mail påmindelser");
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
                failure: function(errMsg) {
                    //alert(errMsg);
                }
            });

        } else if (!isValidEmailAddress($('#emailCalendarSignup').val()) && checkedValues.length > 0) {
            if (globalActiveLanguage == "da") {
                $('.verificationImage').attr('src', 'images/information.png');
                $('.informationHeader').text("Ups, noget mangler!");
                $('.information').text("Venligst indtast en gyldig mail");
                $('#dialogueBox_register').show();
                $('.transparantOverlay').show();
            } else {
                $('.verificationImage').attr('src', 'images/information.png');
                $('.informationHeader').text("Oops, something is missing!");
                $('.information').text("Please enter a valid email");
                $('#dialogueBox_register').show();
                $('.transparantOverlay').show();
            }


        } else if (isValidEmailAddress($('#emailCalendarSignup').val()) && checkedValues.length == 0) {

            if (globalActiveLanguage == "da") {
                $('.verificationImage').attr('src', 'images/information.png');
                $('.informationHeader').text("Ups, noget mangler!");
                $('.information').text("Sæt venligst hak i nogle events");
                $('#dialogueBox_register').show();
                $('.transparantOverlay').show();
            } else {
                $('.verificationImage').attr('src', 'images/information.png');
                $('.informationHeader').text("Oops, something is missing!");
                $('.information').text("Please check some of the events");
                $('#dialogueBox_register').show();
                $('.transparantOverlay').show();
            }
        } else {
            if (globalActiveLanguage == "da") {
                $('.verificationImage').attr('src', 'images/information.png');
                $('.informationHeader').text("Ups, noget mangler!");
                $('.information').text("Venligst sæt hak i nogle events og indtast gyldig mail");
                $('#dialogueBox_register').show();
                $('.transparantOverlay').show();
            } else {
                $('.verificationImage').attr('src', 'images/information.png');
                $('.informationHeader').text("Oops, something is missing!");
                $('.information').text("Please enter a valid email and check some events");
                $('#dialogueBox_register').show();
                $('.transparantOverlay').show();
            }
        }
    });

    $(document).on('click', '#emailCalendarUnsubscribe', function() {

        if (isValidEmailAddress($('#unsubscribeEmail').val())) {

            var email = $('#unsubscribeEmail').val();
            //var solutionId = "2368";

            $.ajax({
                type: "POST",
                url: "http://ir.euroinvestor.com/tools/CalendarEvents/default.aspx",
                data: {
                    unsubscribe: JSON.stringify([{
                        "email": email,
                        "solutionId": solutionId
                    }])
                },
                success: function(data) {
                    if (globalActiveLanguage == "da") {
                        $('.verificationImage').attr('src', 'images/verification.png');
                        $('.informationHeader').text("Succes!");
                        $('.information').text("Du har succesfuldt afmeldt mail påmindelser");
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
                failure: function(errMsg) {
                    //alert(errMsg);
                }
            });

        } else {
            if (globalActiveLanguage == "da") {
                $('.verificationImage').attr('src', 'images/information.png');
                $('.informationHeader').text("Ups, noget mangler!");
                $('.information').text("Venligst indtast en gyldig mail");
                $('#dialogueBox_unsubscribe').show();
                $('.transparantOverlay').show();
            } else {
                $('.verificationImage').attr('src', 'images/information.png');
                $('.informationHeader').text("Oops, something is missing!");
                $('.information').text("Please enter a valid email");
                $('#dialogueBox_unsubscribe').show();
                $('.transparantOverlay').show();
            }
        }
    });

    $(document).on('click', '.calendarReminder', function() {
        if ($(this).hasClass('calendarReminder_checked')) {
            $(this).removeClass('calendarReminder_checked');
        } else {
            $(this).addClass('calendarReminder_checked');
        }
        return false;
    });


    $(document).on('click', ".calendarDetails", function() {

        if ($(this).hasClass('calendarDetails_expanded')) {
            $(this).removeClass('calendarDetails_expanded');
        } else {
            $(this).addClass('calendarDetails_expanded');
        }
        $(this).parent().find("span.toggle").slideToggle("fast");
        //undgå at siden scroller til tops
        return false;
    });

    //check uncheck email reminders
    $(document).on('click', '.calendarReminderFinancial', function() {
        if ($(this).hasClass('calendarReminderFinancial_checked')) {
            $('.category_Financial .calendarReminder').removeClass('calendarReminder_checked');
            $('.calendarReminderFinancial').removeClass('calendarReminderFinancial_checked');
        } else {
            $('.category_Financial .calendarReminder').addClass('calendarReminder_checked');
            $('.calendarReminderFinancial').addClass('calendarReminderFinancial_checked');
        }

    });
    $(document).on('click', '.calendarReminderRoadshow', function() {
        if ($(this).hasClass('calendarReminderRoadshow_checked')) {
            $('.category_Roadshow .calendarReminder').removeClass('calendarReminder_checked');
            $('.calendarReminderRoadshow').removeClass('calendarReminderRoadshow_checked');
        } else {
            $('.category_Roadshow .calendarReminder').addClass('calendarReminder_checked');
            $('.calendarReminderRoadshow').addClass('calendarReminderRoadshow_checked');
        }

    });


    $(document).on('click', '.closeBox', function() {
        $('#dialogueBox_register').hide();
        $('#dialogueBox_unsubscribe').hide();
        $('.transparantOverlay').hide();
    });
})

/**************************
 * Handlebar helpers
 **************************/


//helper to get category
Handlebars.registerHelper('getCategory', function(objects, options) {

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
Handlebars.registerHelper('getLocation', function(objects, options) {

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

Handlebars.registerHelper('convertToISO', function(formattedDate) {
    return moment(formattedDate).toISOString();
});


//helper to get eventendtime
Handlebars.registerHelper('getEventEndTime', function(objects, options) {

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

    if (eventendtime.length == 0) {
        var newEndDate = getObjects([objects], 'key', 'eventstarttime');
        eventendtime = new Date(newEndDate);
        eventendtime.setHours(eventendtime.getHours() + 2);
        return moment(eventendtime).toISOString();

    } else {
        eventendtime = new Date(eventendtime);
        return moment(eventendtime).toISOString();
    }
});
</script>


<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
