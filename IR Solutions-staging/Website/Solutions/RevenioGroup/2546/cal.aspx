<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700"" type=""text/css"" />";

%>
<%= site.newHeader("IRCustomModule") %>
<link rel="stylesheet" type="text/css" href="includes/css/addToCalendar.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes/css/addToCalendar.css")).Ticks.ToString()%>" />
<link rel="stylesheet" type="text/css" href="ir.calendar.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.calendar.css")).Ticks.ToString()%>" />

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<%
    string language = "en";
    language = Request["language"];

    if (language == "" || language == "undefined")
    {
        language = "en";
    }
%>


<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
    //var activeDataRequests = [
    //    'RequestNewsCalendar',
    //    'RequestAnnouncement'
    //];
</script>
<div class="wrapper1">
    <div class="announcementsHeader">
        <span class="upcomingEventsTitle"></span>

        <div class="select-style" style="float: right">
            <%--<select id="period" name="tab1" onchange="selectPeriod()">
                <option class="select all" value="1">Upcoming</option>
                <option class="select all" value="0">Past</option>
            </select>--%>
        </div>
    </div>

</div>
<div class="IRCalendar">
    <div class="wrapper2">
        <%-- <ul class="categoryFilters">

            <li class="active">
                <button showcategory="Financial" class="titleFinancial"></button>
            </li>
            <li>
                <button showcategory="Roadshow" class="titleRoadShows"></button>
            </li>
        </ul>--%>

        <%--<div style="clear: both;"></div>
        <div class="divLine"></div>--%>

        <%--<div id="calendarDatesEncapsulator"></div>--%>
        <div class="IRNewsCalendar"></div>

        <div class="IRNewsTableFooter">
            <div class="IRNewsPagination"></div>
        </div>

        <div class="calendarRemindAllEncapsulator" id="Encapsulator1">
            <div class="innerEncapsulator">
                <h2 class="t_signUpEmailReminders"></h2>
                <p class="t_signUpEmailText"></p>
                <a class="calendarReminderAll"></a>
            </div>
        </div>
        <div class="calendarRemindAllEncapsulator" id="Encapsulator2">
            <div class="innerEncapsulator">
                <div class="sendMeReminderInAdvance">
                    <div class="sendReminders1"></div>
                    <div>
                        <select class="" id="selectedReminder" name="">
                            <option value="15">15 minuttes</option>
                            <option value="30"></option>
                            <option value="60"></option>
                            <%--<option value="120"></option>
                            <option value="240"></option>
                            <option value="480"></option>--%>
                            <option value="1440"></option>
                            <%--<option value="2880"></option>--%>
                            <option value="10080"></option>
                            <%--<option value="20160"></option>
                            <option value="40320"></option>--%>
                        </select>
                    </div>
                    <div class="sendReminders2">
                    </div>
                </div>
                <%--<label class="sendRemindersTo"></label>
            <br />--%>
                <input id="emailCalendarSignup" type="text" placeholder="" />
                <button id="emailCalendarSignup_submit" class="calendarButtonStyle" type="button"></button>
                <br />
                <a id="unsibscribeLinkBtn"></a>
                <div class="dialogueBox" id="dialogueBox_register" style="display: none;">
                    <h3 class="informationHeader"></h3>
                    <p class="information"></p>
                    <img class="verificationImage" src="">
                    <div class="closeBox">X</div>
                </div>
            </div>
        </div>

        <iframe class="calendarArchivedEvents" src="calendarArchivedEvents.aspx?language=<%= language %>" style="height: 1000px; width: 100%;"></iframe>
    </div>
    <div class="unsubscribeWrapper" style="display: none">
        <%--<div class="clear" style="clear: both;"></div>--%>
        <a id="unsubscribeBackBtn"></a>
        <h2 style="padding-left: 1%;" class="t_unsubscribe"></h2>
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
            <input style="margin-left: 1%;" tabindex="1" class="informationInput enterInformationLoginEmail" name="enterInformationLoginEmail" id="unsubscribeEmail" type="email" placeholder="" />
            <button class="calendarButtonStyle" id="emailCalendarUnsubscribe" type="button"></button>

        </div>
    </div>

</div>

<script id="IRNewsCalendarTemplate" type="text/x-handlebars-template">
    {{#each data}}
        <div class="CalendarDate_template IRDataGroup" id="{{storyId}}">
            <div class="CalendarDate category_{{getCategory keyValueSet 'calendartype'}}">
                <div class="divLine"></div>

                <div class="contentWrapper">
                    <div class="headlineWrapper">
                        <div class="calendarDate">
                            <div class="publishDateWrapper">
                                <div class="date">{{showDateWithFormat startTime 'MMM DD, YYYY'}}</div>
                                <div class="calendarTime">{{showDateWithFormat startTime 'HH:mm'}}  {{showEventEndTime keyValueSet 'HH:mm'}}</div>
                                <%--<div class="monthText">{{showDateWithFormat startTime 'MMMM'}}</div>
                                <div class="dayText">{{showDateWithFormat startTime 'DD'}}</div>
                                <div class="yearText">{{showDateWithFormat startTime 'YYYY'}}</div>--%>
                            </div>
                            <%--<span class="calendarDay">{{showDateWithFormat startTime 'DD'}}</span>
                        <span class="calendarMonth">{{showDateWithFormat startTime 'MMM YYYY'}}</span>--%>
                        </div>
                        <div class="CalendarContentWrapper">
                            <div class="calendarContent">
                                <span class="calendarTitle">{{headline}} </span>
                                {{#if_not_empty text}}
                                <button class="showHideButton" id="showHideButton">+</button>
                                <span class="descriptionText">{{text}}
                            {{/if_not_empty}}

                            <span class="calendarWebcastAttachment" style="margin-top: 20px;"><a href="{{getLocation keyValueSet 'webcast'}}" target="_parrent">{{getWebcastTitle keyValueSet 'webcasttitle'}}</a></span>
                                    <span class="calendarPDFAttachment"><a href="{{irfile keyValueSet 'attachmentEN' storyId}}" target="_parrent">{{getFileName keyValueSet 'attachmentEN'}}</a></span>
                                    <span class="calendarPDFAttachment"><a href="{{irfile keyValueSet 'attachmentDA' storyId}}" target="_parrent">{{getFileName keyValueSet 'attachmentDA'}}</a></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="calendarMoreInfo">
                        <a href="#" class="calendarReminder" storyid="{{storyId}}" eventstarttime="{{startTime}}" subject="{{headline}}" message="{{text}}">{{headers/t_email_reminder}}</a>
                        <%--<form method="post" action="http://ir.euroinvestor.com/ServiceEngine/api/json/reply/RequestCalendarICSFile">
                            <input type="hidden" name="apiversion" value="1" />
                            <input type="hidden" name="customerKey" value="williamdemant" />
                            <input type="hidden" name="solutionID" value="2412" />
                            <input type="hidden" name="instrumentid" value="1000589" />
                            <input type="hidden" name="lcid" value="1033" />
                            <input type="hidden" name="enddate" value="{{getEventEndTime keyValueSet 'eventendtime'}}" />
                            <input type="hidden" name="starttime" value="{{convertToISO startTime}}" />
                            <input type="hidden" name="subject" value="{{headline}}" />
                            <input type="hidden" name="category" value="{{getCategory keyValueSet 'calendartype'}}" />
                            <input type="hidden" name="location" value="{{getLocation keyValueSet 'location'}}" />
                            <input type="hidden" name="text" value="{{text}}" />
                            <a href="#" onclick="$(this).closest('form').submit()" class="calendarAddTo calendarFormat"></a>--%>

                        <a class="addtocalendar atc-style-blue">
                            <var class="atc_event">
                                <var class="atc_date_start">{{convertToISO startTime}}</var>
                                <var class="atc_date_end">{{getEventEndTime keyValueSet 'eventendtime'}}</var>
                                <%--<var class="atc_timezone">{{getKeyValueSet keyValueSet 'TimeZone'}}</var>--%>
                                <var class="atc_timezone">Europe/London</var>
                                <var class="atc_title">{{headline}}</var>
                                <var class="atc_description">{{text}}</var>
                                <var class="atc_location">{{getLocation keyValueSet 'location'}}</var>
                                <var class="atc_organizer">Revenio</var>
                                <var class="atc_organizer_email"></var>
                            </var>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    {{/each}}

</script>


<div class="transparantOverlay" style="display: none;"></div>

<%= site.newFooter("IRCustomModule") %>

<%--<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>--%>

<script type="text/javascript">
    var solutionId = "2412";




    function convertTimezone(timestamp) {
        var obj = moment.utc(timestamp, "YYYY-MM-DD HH:mm:ss").local().toISOString();
        return moment.utc(timestamp, "YYYY-MM-DD HH:mm:ss").local().format("YYYY-MM-DD HH:mm");
    }

    function convertTimestamp(allData) {
        for (var i = 0; i < allData.data.length; i++) {
            allData.data[i].startTime = convertTimezone(allData.data[i].startTime);
            for (var j = 0; j < allData.data[i].keyValueSet.length; j++) {
                if (allData.data[i].keyValueSet[j].key === 'eventstarttime' || allData.data[i].keyValueSet[j].key === 'eventendtime') {
                    allData.data[i].keyValueSet[j].value = convertTimezone(allData.data[i].keyValueSet[j].value);
                }
            }
        }
    }
    //Get JSON from calender feed
    $(function () {
        //filter by date
        var today = Date.now();
        //var convertedDate = moment(today).toISOString();
        var convertedDate = moment(today).format("YYYY-MM-DD");

        var listen = setInterval(function () {


            $.getJSON(getServiceEngingeURL() + 'RequestNewsCalendarPagination?apiversion=1&lcid=' + clientLCID + '&customerKey=RevenioGroup&solutionID=2546&MaxRows=100&pageno=0&instrumentid=1000758&StartDate=' + convertedDate + '&sortAscDesc=asc' + '', function (data) {

                if (typeof (data) !== 'undefined') {
                    var selectElement = $("#period");
                    var allData = data;

                    $.when(requestTranslationsData).done(function () {
                        translationData = jQuery.parseJSON(requestTranslationsData.responseText);

                        allData.headers = translationData.data;


                        convertTimestamp(allData);

                        //var allObjects = allData.data;

                        //Reverse the date sorting
                        var allObjects = allData.data.reverse();

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

                        //add translations outside of handlebars
                        $('.upcomingEventsTitle').html(translationData.data.t_upcoming_events);
                        $('#emailCalendarSignup').attr('placeholder', translationData.data.t_email_address);
                        $('#unsubscribeEmail').attr('placeholder', translationData.data.t_email_address);
                        $('#unsibscribeLinkBtn').html(translationData.data.t_unsubscribe);
                        $('#unsubscribeBackBtn').html(translationData.data.t_back);

                    });
                    pagination(allData);
                    clearInterval(listen);
                }



            }); //getJSON
        }, 100);
    }); //function

    //Add to calendar js
    (function () {

        if (window.addtocalendar) if (typeof window.addtocalendar.start == "function") return;
        console.log(window.ifaddtocalendar);
        if (window.ifaddtocalendar == undefined) {
            var listen = setInterval(function () {

                window.ifaddtocalendar = 1;
                var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
                s.type = 'text/javascript'; s.charset = 'UTF-8'; s.async = true;
                //s.src = ('https:' == window.location.protocol ? 'https' : 'http') + '://addtocalendar.com/atc/1.5/atc.min.js';
                s.src = "includes/js/libs/addToCalendar.min.js";
                var h = d[g]('body')[0]; h.appendChild(s);

                //check if add to calendar has been added
                if ($('.atcb-link').html() !== undefined) {
                    clearInterval(listen);
                }

            }, 100);
        }


    })();

    /* ____________________Pagination_______________________ */
    function pagination(allData) {

        $('.IRNewsPageNumber').remove();
        //add page number for each 10th object
        var currentPage = '.IRPageNumber' + 1;
        var pageNumber = 1;
        var maxPagesToShow = 5;
        var data = allData.data;
        amountOfNewsPerPage = 5;

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
        //hide pagination if only 1 page
        if (pageNumber <= 1) {
            $('.IRNewsPageNumber').css('display', 'none');
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

    //helper to get location
    Handlebars.registerHelper('getKeyValueSet', function (objects, options) {

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
        var value = getObjects([objects], 'key', options);
        return value;
    });

    //helper to get webcastTitle if not empty
    Handlebars.registerHelper('getWebcastTitle', function (objects, options) {
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
        var webTitle = getObjects([objects], 'key', options);
        if (webTitle.toString() != '') {
            return webTitle;
        } else {
            var test = getObjects([objects], 'key', 'webcast');
            return test;
        }

    });

    Handlebars.registerHelper('showEventEndTime', function (objects, format) {

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

        //eventendtime timestamp value
        //var objectValue = getObjects([objects], 'key', 'eventendtime');

        var eventendtime = getObjects([objects], 'key', 'eventendtime');

        //check if event has en endtime
        if (eventendtime.length == 0) {
            //var newEndDate = getObjects([objects], 'key', 'eventstarttime');
            //eventendtime = new Date(newEndDate);
            //eventendtime.setHours(eventendtime.getHours() + 2);

            //return "- "+ moment(eventendtime).format(format);
            return;

        } else {
            eventendtime = new Date(eventendtime);
            return "- " + moment(eventendtime).format(format);

        }

        //return formatDateWithFormat(objectValue[0], format);

    });

    //getFileName of attached files and trim string name to (example.pdf)
    Handlebars.registerHelper('getFileName', function (objects, options) {

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
        var conditionArray = [null, "", "undefined"];

        var trimedFileName = String(location[0]).split("\\").pop();
        if (trimedFileName != "undefined") {
            return trimedFileName;
        } else {
            return location;
        }
    });

    Handlebars.registerHelper('irfile', function (objects, options, storyId) {

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
        return "https://irssl.euroinvestor.com/IR/Files/ClientAdmin/Calendar/" + storyId + "/" + objectValue;
    });

    Handlebars.registerHelper('convertToISO', function (formattedDate) {
        return moment(formattedDate).toISOString();
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

    Handlebars.registerHelper('if_not_empty', function (text, opts) {
        if (text !== '')
            return opts.fn(this);
        else
            return;
    });

    //Handlebars.registerHelper('showDateWithFormat', function (timestamp, format) {

    //    var date = {
    //        utc: moment(timestamp).format('YYYY-MM-DD HH:mm'),
    //        offset: -720
    //    }
    //    var returnDate = moment.utc(date.utc).zone(date.offset).format('MM/DD/YYYY h:mm A');

    //    return formatDateWithFormat(returnDate, format);
    //    //return moment(timestamp).format(format);
    //});


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
            periodEndDate = moment(dateToday).format('YYYY-MM-DD HH:mm');
        }
        if (selectedPeriod == 1) {
            var dateToday = Date.now();
            periodStartDate = moment(dateToday).format('YYYY-MM-DD HH:mm');
        }

        $.getJSON(getServiceEngingeURL() + 'RequestNewsCalendarPagination?apiversion=1&lcid=' + clientLCID + '&customerKey=RevenioGroup&solutionID=2546&MaxRows=20000&pageno=0&instrumentid=1000758&StartDate=' + periodStartDate + '', function (data) {
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

            pagination(data);


            customXApplied = false;
            prepareCustomX();
            //    pagination(data);
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

                                    //$('.titleFinancial').html("Finansiel");
                                    //$('.titleRoadShows').html("Roadshows");
                                    ////$('.t_signUpEmailReminders').html("Tilmeld Email Påmindelser");
                                    //$('.t_signUpEmailText').text("Vælg begivenheder ovenfor, som du ønsker at modtage email påmindelser på")
                                    ////$('.calendarReminderAll').text("Tilmeld alle begivenheder");
                                    //$('.sendReminders1').text("Send mig påmindelser");
                                    //$('.sendReminders2').text("før begivenheden starter");
                                    //$('.sendRemindersTo').text("Send kalender begivenheder til");
                                    //$('#emailCalendarSignup_submit').text("Tilmeld");
                                    //$('.t_unsubscribe_text').html("Hvis du ønsker at afmelde, venligst indtast email og tryk på <b>afmeld</b>");


                                } else {
                                    $('.titleFinancial').html(translationData.data.t_financial);
                                    $('.titleRoadShows').html(translationData.data.t_roadshows);
                                    $('.t_signUpEmailReminders').html(translationData.data.t_subscribe_to_all_future_event_reminders);
                                    $('.t_signUpEmailText').text(translationData.data.t_please_select_the_events_above_that_you_want_to_receive_email_reminders_for);
                                    $('.calendarReminderAll').text(translationData.data.t_subscribe_to_all_future_event_reminders);
                                    $('.sendReminders1').text(translationData.data.t_send_me_reminders);
                                    $('.sendReminders2').text(translationData.data.t_before_the_events_take_place);
                                    //$('.sendRemindersTo').text("Send the calendar reminders to ");
                                    $('#emailCalendarSignup_submit').html(translationData.data.t_sign_up);
                                    $('.t_unsubscribe_text').html(translationData.data.t_if_you_would_like_to_unsubscribe);

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

                    //var startDate = moment.utc(eventDate).toISOString();
                    var startDate = moment.utc(eventDate).format("YYYY-MM-DD");
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
                                $('.information').text("Du har succesfuldt tilmeldt email påmindelser.");
                                $('#dialogueBox_register').show();
                                $('.transparantOverlay').show();
                            } else {
                                $('.verificationImage').attr('src', 'images/verification.png');
                                $('.informationHeader').text(translationData.data.t_fantastic);
                                $('.information').text(translationData.data.t_successfully_subscribed_to_email_reminders);
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
                        $('.informationHeader').text("Ups, noget mangler!");
                        $('.information').text("Venligst indtast en gyldig email.");
                        $('#dialogueBox_register').show();
                        $('.transparantOverlay').show();
                    } else {
                        $('.verificationImage').attr('src', 'images/information.png');
                        $('.informationHeader').text(translationData.data.t_something_is_missing);
                        $('.information').text(translationData.data.t_please_enter_a_valid_email);
                        $('#dialogueBox_register').show();
                        $('.transparantOverlay').show();
                    }


                }
                else if (isValidEmailAddress($('#emailCalendarSignup').val()) && checkedValues.length <= 0) {
                    if (globalActiveLanguage == "da") {
                        $('.verificationImage').attr('src', 'images/information.png');
                        $('.informationHeader').text("Ups, noget mangler!");
                        $('.information').text("Sæt venligst hak i nogle events.");
                        $('#dialogueBox_register').show();
                        $('.transparantOverlay').show();
                    } else {
                        $('.verificationImage').attr('src', 'images/information.png');
                        $('.informationHeader').text(translationData.data.t_something_is_missing);
                        $('.information').text(translationData.data.t_please_check_some_of_the_events);
                        $('#dialogueBox_register').show();
                        $('.transparantOverlay').show();
                    }
                }
                else {
                    if (globalActiveLanguage == "da") {
                        $('.verificationImage').attr('src', 'images/information.png');
                        $('.informationHeader').text("Ups, noget mangler!");
                        $('.information').text("Venligst sæt hak i nogle events og indtast gyldig email.");
                        $('#dialogueBox_register').show();
                        $('.transparantOverlay').show();
                    } else {
                        $('.verificationImage').attr('src', 'images/information.png');
                        $('.informationHeader').text(translationData.data.t_something_is_missing);
                        $('.information').text(translationData.data.t_please_enter_valid_email_and_check_some_events);
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

            $('#unsibscribeLinkBtn').click(function () {
                $('.unsubscribeWrapper').css('display', 'block');
                $('.wrapper1').css('display', 'none');
                $('.wrapper2').css('display', 'none');
            });
            $('#unsubscribeBackBtn').click(function () {
                $('.unsubscribeWrapper').css('display', 'none');
                $('.wrapper1').css('display', 'block');
                $('.wrapper2').css('display', 'block');
            });



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
                                $('.information').text("Du har succesfuldt afmeldt email påmindelser.");
                                $('#dialogueBox_unsubscribe').show();
                                $('.transparantOverlay').show();
                            } else {
                                $('.verificationImage').attr('src', 'images/verification.png');
                                $('.informationHeader').text(translationData.data.t_success + '!');
                                $('.information').text(translationData.data.t_you_have_successfully_unsubscribed);
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
                        $('.information').text("Venligst indtast en gyldig email.");
                        $('#dialogueBox_unsubscribe').show();
                        $('.transparantOverlay').show();
                    } else {
                        $('.verificationImage').attr('src', 'images/information.png');
                        $('.informationHeader').text(translationData.data.t_something_is_missing);
                        $('.information').text(translationData.data.t_please_enter_a_valid_email);
                        $('#dialogueBox_unsubscribe').show();
                        $('.transparantOverlay').show();
                    }
                }

            });




            //function showCategory(category) {
            //    $('.CalendarDate').hide();
            //    $('.category_' + category).show();

            //}

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
            //$('.categoryFilters').on('click', 'li', function () {
            //    $('.categoryFilters li.active').removeClass('active');
            //    $(this).addClass('active');
            //    showCategory($(this).find('button').attr('showCategory'));
            //});
            $('.closeBox').click(function () {
                $('#dialogueBox_register').hide();
                $('#dialogueBox_unsubscribe').hide();
                $('.transparantOverlay').hide();
                $('.unsubscribeWrapper').css('display', 'none');
                $('.wrapper1').css('display', 'block');
                $('.wrapper2').css('display', 'block');
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
            //showCategory('Financial');
            //});

            customXApplied = true;
            translationsApplied = true;
            prepareTranslations();
        }
    }

    $(function () {
        setInterval(function () {
            prepareCustomX();

        }, 1000);
    });


    var calendarContentFound = false;
    function prepareShowHideButton() {
        //console.log('prepareShowHideButton function');
        if (!calendarContentFound) {
            //console.log('calendarContent found');
            if (typeof ($('.calendarContent').html()) != 'undefined') {


                $('.showHideButton').click(function () {
                    $(this).siblings('.descriptionText').toggle();
                    $(this).text(function (i, text) {
                        return text === "+" ? "-" : "+";
                    });
                });

                calendarContentFound = true;
            }
        }
    }
    $(function () {
        setInterval(function () {
            prepareShowHideButton();
        }, 200);
    });

</script>


<%--<link href='fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>--%>
