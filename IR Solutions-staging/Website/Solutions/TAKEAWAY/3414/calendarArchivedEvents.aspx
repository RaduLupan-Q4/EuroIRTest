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




<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
    //var activeDataRequests = [
    //    'RequestNewsCalendar',
    //    'RequestAnnouncement'
    //];
</script>
<div class="wrapper1">
    <div class="announcementsHeader">
        <span>EVENTS & PRESENTATIONS</span>
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

        <div class="IRNewsCalendar"></div>
        <div class="IRNewsTableFooter">
            <div class="IRNewsPagination" style="margin-bottom: 0px;"></div>
        </div>



    </div>


</div>

<script id="IRNewsCalendarTemplate" type="text/x-handlebars-template">
    {{#each data}}
        <div class="CalendarDate_template IRDataGroup" id="{{storyId}}">
            <div class="CalendarDate category_{{getCategory keyValueSet 'calendartype'}}">
                <%--<div class="divLineTop"></div>--%>

                <div class="contentWrapper">
                    <div class="headlineWrapper">
                        <div class="calendarDate">
                            <div class="publishDateWrapper">
                                <div class="date">{{showDateWithFormat startTime 'MMM DD, YYYY'}}</div>
                                <div class="calendarTime">{{showDateWithFormat startTime 'HH:mm'}} - {{showEventEndTime keyValueSet 'HH:mm'}}</div>
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
                                <div class="showHideButton" id="showHideButton"></div>
                                <pre class="descriptionText">{{text}}</pre>
                                {{/if_not_empty}}
                            </div>

                            <%--<a href="#" class="calendarReminder" storyid="{{storyId}}" eventstarttime="{{startTime}}" subject="{{headline}}" message="{{text}}">Email reminder</a>--%>
                            <%--<form method="post" action="http://ir.euroinvestor.com/ServiceEngine/api/json/reply/RequestCalendarICSFile">
                                <input type="hidden" name="apiversion" value="1" />
                                <input type="hidden" name="customerKey" value="takeaway" />
                                <input type="hidden" name="solutionID" value="3414" />
                                <input type="hidden" name="instrumentid" value="1002108" />
                                <input type="hidden" name="lcid" value="1033" />
                                <input type="hidden" name="enddate" value="{{getEventEndTime keyValueSet 'eventendtime'}}" />
                                <input type="hidden" name="starttime" value="{{convertToISO startTime}}" />
                                <input type="hidden" name="subject" value="{{../name}} - {{headline}}" />
                                <input type="hidden" name="category" value="{{getCategory keyValueSet 'calendartype'}}" />
                                <input type="hidden" name="location" value="{{getLocation keyValueSet 'location'}}" />
                                <input type="hidden" name="text" value="{{text}}" />
                                <a href="#/" onclick="$(this).closest('form').submit()" class="calendarAddTo calendarFormat"></a>
                            </form>--%>

                             <a class="addtocalendar atc-style-blue">
                            <var class="atc_event">
                                <var class="atc_date_start">{{convertToISO startTime}}</var>
                                <var class="atc_date_end">{{getEventEndTime keyValueSet 'eventendtime'}}</var>
                                <%--<var class="atc_timezone">{{getKeyValueSet keyValueSet 'TimeZone'}}</var>--%>
                                <var class="atc_timezone">Europe/London</var>
                                <var class="atc_title">{{../name}} - {{headline}}</var>
                                <var class="atc_description">{{text}}</var>
                                <var class="atc_location">{{getLocation keyValueSet 'location'}}</var>
                                <var class="atc_organizer">Revenio</var>
                                <var class="atc_organizer_email"></var>
                            </var>
                        </a>


                            <span class="calendarWebcastAttachment" style="margin-top: 20px;"><a href="{{getLocation keyValueSet 'webcast'}}" target="_parrent">{{getWebcastTitle keyValueSet 'webcasttitle'}}</a></span>
                            <%--<span class="calendarPDFAttachment"><a href="{{irfiles keyValueSet 'attachmentEN' storyId}}" target="_parrent">{{getFileName keyValueSet 'attachmentEN'}}</a></span>
                            <span class="calendarPDFAttachment"><a href="{{irfiles keyValueSet 'attachmentDA' storyId}}" target="_parrent">{{getFileName keyValueSet 'attachmentDA'}}</a></span>--%>
                            <%--<span class="calendarPDFAttachment"><a href="{{irfile keyValueSet 'attachmentPresentation' storyId}}" target="_parrent">{{getFileName keyValueSet 'attachmentPresentation'}}</a></span>--%>
                            {{{irfiles keyValueSet 'attachmentEN' storyId}}}
                            {{{irfiles keyValueSet 'attachmentDA' storyId}}}  
                            {{{irfiles keyValueSet 'attachmentPresentation' storyId}}}

                        </div>
                    </div>

                </div>

            </div>

        </div>
    {{/each}}
    
</script>


<div class="transparantOverlay" style="display: none;"></div>
<div class="hiddenFooter" style="display: none;">
    <%= site.newFooter("IRCustomModule") %>
</div>

<%--<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>--%>


<script type="text/javascript">


    var solutionId = "3414";

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
        var periodEndDate = moment(convertedDate).format('YYYY-12-31 HH:mm');

        $.getJSON(getServiceEngingeURL() + 'RequestNewsCalendarPagination?apiversion=1&lcid=1033&customerKey=TAKEAWAY&solutionID=3414&MaxRows=100&pageno=0&instrumentid=1002108&StartDate=2007-01-01' + '&EndDate=' + convertedDate + '&sortAscDesc=desc', function (data) {

            var selectElement = $("#period");
            //var allData = data[i].["headline"];
            var allData = data;
            for (var i = 0; i < allData.data.length; i++) {

                if (allData.data[i].startTime > convertedDate) {
                    allData.data.splice([i], 1);
                    i--;
                }

            }
            //console.log('allData:' + allData);

            //if (data.data.startTime >= periodEndDate) {
            //    data.data.splice(i, 1);
            //}


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

            pagination(allData);

        }); //getJSON
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
            $('.IRNewsPagination').prepend("<a href='javascript: onClick=showPage(" + (1) + ")' class='IRNewsPageNumber prevPage' style='display:none'>&nbsp;</a>");
            $('.IRNewsPagination').append("<a href='javascript: onClick=showPage(" + (2) + ")' class='IRNewsPageNumber nextPage'>&nbsp;</a>");
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

    Handlebars.registerHelper('if_not_empty', function (text, opts) {
        if (text !== '')
            return opts.fn(this);
        else
            return;
    });

    Handlebars.registerHelper('iterate', function (n, block) {
        var accum = '';
        for (var i = 0; i < n; ++i)
            accum += block.fn(i);
        return accum;
    });

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

    Handlebars.registerHelper('eventTime', function (objects) {

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

        //get calendar start and end values
        var eventStartTime = getObjects([objects], 'key', 'eventstarttime');
        var eventEndTime = getObjects([objects], 'key', 'eventendtime');

        //check if there is an end time, if not then...
        if (eventEndTime.length == 0) {
            var newEndDate = getObjects([objects], 'key', 'eventstarttime');
            eventEndTime = new Date(newEndDate);
            eventEndTime.setHours(eventEndTime.getHours() + 2);
        }

        var start = new Date(moment(eventStartTime[0]).toISOString());
        var end = new Date(moment(eventEndTime[0]).toISOString());

        if (start.getMonth() == end.getMonth() && start.getFullYear() == end.getFullYear()) {
            if (start.getDay() == end.getDay()) {
                return formatDateWithFormat(start, 'MMM DD, YYYY');
            }
            else {
                return formatDateWithFormat(start, 'MMM DD') + '-' + formatDateWithFormat(end, 'DD, YYYY');
            }
        }
        else if (start.getMonth() != end.getMonth() && start.getFullYear() == end.getFullYear()) {
            return formatDateWithFormat(start, 'MMM DD') + '-' + formatDateWithFormat(end, 'MMM DD, YYYY');
        }
        else {
            return formatDateWithFormat(start, 'MMM DD, YYYY') + '-' + formatDateWithFormat(end, 'MMM DD, YYYY');
        }
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

    Handlebars.registerHelper('irfile', function (objects, options, storyId, n) {

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

    Handlebars.registerHelper('irfiles', function (objects, options, storyId) {

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


        var objectValue = getObjects([objects], 'key', options);

        if (objectValue === null || objectValue.toString() === '' || objectValue.length == 0) return '';
        var res = '';

        var split = String(objectValue).split(';');
        // var split = String('2016-08-30-10-07-12\\Interim Report 2016 - Copy 4.pdf;2016-08-30-10-07-12\\Interim Report 2016 - Copy 5.pdf;2016-08-30-10-07-12\\Interim Report 2016 - Copy 6.pdf;2016-08-30-10-07-12\\Interim Report 2016 - Copy.pdf').split(';');
        for (var i = 0; i < split.length; i++) {
            var s = split[i];
            var trimedFileName = String(s).split("\\").pop();
            if (trimedFileName === "undefined") {
                trimedFileName = s;
            }
            res += '<span class="calendarPDFAttachment"><a href="https://irssl.euroinvestor.com/IR/Files/ClientAdmin/Calendar/' + storyId + '/' + s + '" target="_parrent" download="' + trimedFileName + '">' + trimedFileName + '</a></span>';
        }
        return res;
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

        var eventendtime = getObjects([objects], 'key', 'eventendtime');

        //check if event has en endtime 
        if (eventendtime.length == 0) {
            var newEndDate = getObjects([objects], 'key', 'eventstarttime');
            eventendtime = new Date(newEndDate);
            eventendtime.setHours(eventendtime.getHours() + 2);

            return moment(eventendtime).format(format);

        } else {
            var formattedDate = moment(eventendtime[0]).toISOString();
            eventendtime = new Date(formattedDate);
            return moment(eventendtime).format(format);
        }

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
            return eventendtime;

        }
    });


    Handlebars.registerHelper('showDateWithFormat', function (timestamp, format) {

        var time = moment(timestamp).format("HH:mm");

        if (time == '00:00') {
            //remove calendarTime if it's 00:00
            var id = this.storyId;
            setTimeout(function () {
                $('#' + id + ' .calendarTime').css('display', 'none');
            }, 100);

        }

        return formatDateWithFormat(timestamp, format);

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

        $.getJSON(getServiceEngingeURL() + 'RequestNewsCalendarPagination?apiversion=1&lcid=1033&customerKey=TAKEAWAY&solutionID=3414&MaxRows=20000&pageno=0&instrumentid=1002108&StartDate=' + periodStartDate + '', function (data) {
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

                                    $('.titleFinancial').html("Finansiel");
                                    $('.titleRoadShows').html("Roadshows");
                                    $('.t_signUpEmailReminders').html("Tilmeld Email Påmindelser");
                                    $('.t_signUpEmailText').text("Vælg begivenheder ovenfor, som du ønsker at modtage email påmindelser på")
                                    $('.calendarReminderAll').text("Tilmeld alle begivenheder");
                                    $('.sendReminders1').text("Send mig påmindelser");
                                    $('.sendReminders2').text("før begivenheden starter");
                                    $('.sendRemindersTo').text("Send kalender begivenheder til");
                                    $('#emailCalendarSignup_submit').text("Tilmeld");
                                    $('.t_unsubscribe_text').html("Hvis du ønsker at afmelde, venligst indtast email og tryk på <b>afmeld</b>");


                                } else {
                                    $('.titleFinancial').html("Financial");
                                    $('.titleRoadShows').html("Roadshows");
                                    $('.t_signUpEmailReminders').html("Subscribe to all future event reminders");
                                    $('.t_signUpEmailText').text("Please select the events above that you want to receive email reminders for or check the box below to receive reminders for all events");
                                    $('.calendarReminderAll').text("Subscribe to all future event reminders");
                                    $('.sendReminders1').text("Send me reminders");
                                    $('.sendReminders2').text("before the events take place");
                                    //$('.sendRemindersTo').text("Send the calendar reminders to ");
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


                    //var solutionId = "3414";
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
                        $('.informationHeader t_something_is_missing').text("Oops, something is missing!");
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
                        $('.informationHeader').text("Oops, something is missing!");
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

            //$('#unsibscribeLinkBtn').click(function () {
            //    $('.unsubscribeWrapper').css('display', 'block');
            //    $('.wrapper1').css('display', 'none');
            //    $('.wrapper2').css('display', 'none');
            //});
            //$('#unsubscribeBackBtn').click(function () {
            //    $('.unsubscribeWrapper').css('display', 'none');
            //    $('.wrapper1').css('display', 'block');
            //    $('.wrapper2').css('display', 'block');
            //});



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

        }, 800);
    });

    //$(".showHideButton").click(function () {
    //    console.log('button clicked');

    //    $header = $(this);
    //    //getting the next element
    //    $content = $header.next();
    //    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    //    $content.slideToggle(500, function () {
    //        //execute this after slideToggle is done
    //        //change text of header based on visibility of content div
    //        $header.text(function () {
    //            //change text based on condition
    //            return $content.is(":visible") ? "Collapse" : "Expand";
    //        });
    //    });

    //});

    var calendarContentFound = false;
    function prepareShowHideButton() {
        //console.log('prepareShowHideButton function');
        if (!calendarContentFound) {
            //console.log('calendarContent found');
            if (typeof ($('.calendarContent').html()) != 'undefined') {


                $('.showHideButton').click(function () {
                    $(this).siblings('.descriptionText').toggle();
                    $(this).toggleClass('showHideButtonMinus');
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
