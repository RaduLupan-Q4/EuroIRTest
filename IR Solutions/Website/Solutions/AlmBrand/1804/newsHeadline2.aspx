<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>


<div class="IRCalendar calendarWidget">
    <div class="divLineTop"></div>
    <div class="IRNewsCalendar"></div>

</div>

<div class="calendarWidgetDisclaimer">
    <%= site.newFooter("IRChart") %>
</div>

<%--</script>--%>

<%--<script id="IRQuoteTableVerticalTemplate" type="text/x-handlebars-template">--%>
<script id="IRNewsCalendarTemplate" type="text/x-handlebars-template">

        {{#each data}}
        <div class="eventListing">
            <div class="calendarDate">
                <span class="calendarDay">{{getStartDate publishTime 'DD'}}</span>
                <span class="calendarMonth">{{getStartDate publishTime 'MMMM'}}</span>
            </div>
            <div class="CalendarContentWrapper">
                <div class="calendarContent IRNewsHeadlineTool">
                    <span class="calendarTitle title"><a target="_blank" id="newsTitleLink" href="">{{headline}}</a></span>
                    <!-- <span class="calendarTime">{{getStartDate publishTime 'HH:mm'}}</span> -->
                </div>
            </div>
        </div>
       
        {{/each}}
   
     <div class="newsLink" style="float: left; width: 100%;">
        <%--<a href="downloadCentre.aspx" class="seeDownloadCenterTxt" target="_top"></a>--%>
        <a href="http://www.almbrand.dk/abdk/OmAlmBrand/Investor/almbrandbladet/index.htm" class="seeDownloadCenterTxt" target="_top"></a>
    </div>
    </script>

<script type="text/javascript">

    Handlebars.registerHelper('getStartDate', function (objects, options) {


        //Format eventstattime to DD
        var startDate = formatDateWithFormat(objects, options);
        //debugger;
        return startDate;
    });
    // Get Language Parameter
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
    $(document).ready(function () {
        var language = '';
        try {
            language = getUrlParameter('language');
        }
        catch (err) {
        }
        if (language != undefined && language == 'en') {
            $.getJSON('http://ir.euroinvestor.com/serviceengine/api/json/reply/RequestAnnouncement?lcid=2057&apiVersion=1&solutionID=1804&CustomerKey=AlmBrand&InstrumentID=100059', function (data) {
                var allData = data;
                allData.data = data.data.slice(0, 4);

                if (allData.data[0].storyId == -1) {
                    allData = null;
                }
                var source = $('#IRNewsCalendarTemplate').html();
                var template = Handlebars.compile(source);
                $('.IRNewsCalendar').html(template(allData));

                $("a#newsTitleLink").attr("href", "http://ir.euroinvestor.com/Solutions/AlmBrand/1804/downloadCentre.aspx?language=en");


            }); //getJSON
        } else if (language == 'da') {
            $.getJSON('http://ir.euroinvestor.com/serviceengine/api/json/reply/RequestAnnouncement?lcid=1030&apiVersion=1&solutionID=1804&CustomerKey=AlmBrand&InstrumentID=100059', function (data) {
                var allData = data;
                allData.data = data.data.slice(0, 4);

                var source = $('#IRNewsCalendarTemplate').html();
                var template = Handlebars.compile(source);
                $('.IRNewsCalendar').html(template(allData));

                $("a#newsTitleLink").attr("href", "http://ir.euroinvestor.com/Solutions/AlmBrand/1804/downloadCentre.aspx?language=da");

            }); //getJSON
        }

    });

    //Get JSON from calender feed
    //$(function () {
    //    $.getJSON('http://ir.euroinvestor.com/serviceengine/api/json/reply/RequestAnnouncement?apiVersion=1&solutionID=1804&CustomerKey=AlmBrand&InstrumentID=100059', function (data) {
    //        var allData = data;
    //        allData.data = data.data.slice(0, 4);

    //        var source = $('#IRNewsCalendarTemplate').html();
    //        var template = Handlebars.compile(source);
    //        $('.IRNewsCalendar').html(template(allData));

    //    }); //getJSON
    //}); //function
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
        $('select').wrap('<div class="select_wrapper"></div>');
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

                if (typeof ($('.seeDownloadCenterTxt').html()) == 'string') {
                    if (globalActiveLanguage == "da") {
                        $('.seeDownloadCenterTxt').html("> Se nyheder fra Alm. Brand Investor");
                    } else {
                        $('.seeDownloadCenterTxt').html("> " + translations.t_see_download_centre);
                    }

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
