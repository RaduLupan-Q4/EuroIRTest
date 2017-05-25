<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    string language = Request.QueryString["language"];
    if (string.IsNullOrEmpty(language))
    {
        language = "en";
    }
%>

<%= site.newHeader("IRChart") %>

<div class="IRCalendar calendarWidget">
    <div class="divLineTop"></div>
    <div class="IRNewsCalendar"></div>

</div>



<%--</script>--%>

<%--<script id="IRQuoteTableVerticalTemplate" type="text/x-handlebars-template">--%>
<script id="IRNewsCalendarTemplate" type="text/x-handlebars-template">
    {{#each data}}
        <div class="eventListing">
            <div class="calendarDate">
                <span class="calendarDay">{{getStartDate keyValueSet}}</span>
                <span class="calendarMonth">{{getStartMonth keyValueSet}}</span>
            </div>
            <div class="CalendarContentWrapper">
                <div class="calendarContent IRNewsHeadlineTool">
                    <span class="calendarTitle title">
                    <form method="post" action="http://ir.euroinvestor.com/tools/generateICS/default.aspx" >
                            <input type="hidden" name="enddate" value="{{keyvalue keyValueSet 'eventendtime'}}" />
                            <input type="hidden" name="starttime" value="{{startTime}}" />
                            <input type="hidden" name="subject" value="{{headline}}" />
                            <input type="hidden" name="category" value="{{keyvalue keyValueSet 'calendartype'}}" />
                            <input type="hidden" name="location" value="{{keyvalue keyValueSet 'location'}}" />
                            <input type="hidden" name="text" value="{{text}}" />
                             <a href="#" onclick="$(this).closest('form').submit(); return false;">{{headline}}</a>
                        </form></span>
                    <span class="calendarTime">{{showDateWithFormat startTime 'HH:mm'}}</span>
                </div>
            </div>
        </div>

    {{/each}}
          
    <div class="newsLink" style="float: left; width: 100%;">
        <a href="http://www.almbrand.dk/abdk/OmAlmBrand/Investor/Kalender/index.htm" class="seeCalendarTxt" target="_top"></a>
    </div>
</script>
<div class="calendarWidgetDisclaimer">
    <%= site.newFooter("IRChart") %>
</div>
<script type="text/javascript">

    var solutionId = "1804";
    var lcid = 1033;
    var instrumentid = 100059;

    if (globalActiveLanguage == "da") {
        lcid = 1030;
    }


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

    Handlebars.registerHelper('getStartMonth', function (objects, options) {

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
        var startDate = formatDateWithFormat(objectValue[0], 'MMMM');
        return startDate;
    });



    Handlebars.registerHelper('keyvalue', function (objects, options) {

        function getObjects(obj, key, val) {
            var objects = [];
            for (var i in obj) {
                if (!obj.hasOwnProperty(i)) continue;
                if (typeof obj[i] == 'object') {
                    objects = objects.concat(getObjects(obj[i], key, val));
                } else if (i == key && obj[key] == val) {
                    return obj['value'];
                }
            }
            return objects;
        }

        //eventstarttime timestamp value
        var objectValue = getObjects([objects], 'key', options);
        //Format eventstattime to DD
        //var startDate = formatDateWithFormat(objectValue[0], 'DD');
        if (objectValue === null || objectValue.toString() === '' || objectValue.length == 0) return '';
        return objectValue;
    });

    //Get JSON from calender feed
    $(function () {
        //$.getJSON('http://ir.euroinvestor.com/serviceengine/api/json/reply/RequestNewsCalendar?apiVersion=1&solutionID=1804&CustomerKey=AlmBrand&InstrumentID=100059', function (data) {
        var today = Date.now();
        var convertedDate = moment(today).toISOString();
        $.getJSON('/ServiceEngine/api/json/reply/RequestNewsCalendarPagination?apiversion=1&lcid=' + lcid + '&customerKey=almbrand&solutionID=1804&MaxRows=1000&pageno=0&instrumentid=' + instrumentid + '&StartDate=' + convertedDate + '&sortAscDesc=desc', function (data) {

            var allData = data;
            allData.data = data.data.slice(0, 4);

            if (allData.data[0].storyId == -1) {
                allData = null;
            }

            var source = $('#IRNewsCalendarTemplate').html();
            var template = Handlebars.compile(source);
            $('.IRNewsCalendar').html(template(allData));

        }); //getJSON
    }); //function
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

    var toolSet = false;

    $(function () {

        function prepareTool() {

            if (!toolSet) {

                if (typeof ($('.seeCalendarTxt').html()) == 'string') {

                    $('.seeCalendarTxt').html("> " + translations.t_see_calendar);

                    toolSet = true;
                }
            }

        }

        setInterval(function () {
            prepareTool();
        }, 100);

    });


</script>

<link rel="stylesheet" type="text/css" href="ir.calendar_test.css" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
