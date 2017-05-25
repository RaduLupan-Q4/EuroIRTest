<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.header("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
<div class="IRQuoteVerticalModule"></div>
<div class="IRQuoteHorizontalModule"></div>


<div class="IRCalendar">
    
    <div class="CalendarDate">
        <div class="calendarDate">
            <span class="calendarMonth">Sep</span><br />
            <span class="calendarDay">08</span>
        </div>
        <div class="CalendarContentWrapper">
            <div class="calendarContent">
                <span class="calendarTitle">Commerzbank Sector Conference</span>
                <span class="calendarTime">9:00 AM CEST</span>
                <span class="calendarLocation">Frankfurt, Germany</span>
            </div>
        </div>
        <div class="calendarMoreInfo">
            <a href="#" class="calendarDetails">View Details</a>
            <a href="#" class="calendarReminder">Add a reminder</a>
            <a href="#" class="calendarAddTo">Add to calendar</a>
        </div>
    </div>
    <div class="divLine"></div>
    <div class="CalendarDate">
        <div class="calendarDate">
            <span class="calendarMonth">Sep</span><br />
            <span class="calendarDay">19</span>
        </div>
        <div class="CalendarContentWrapper">
            <div class="calendarContent">
                <span class="calendarTitle">Heidelberger Anlegerforum (DSW)</span>
                <span class="calendarTime">11:30 AM CEST</span>
                <span class="calendarLocation">Frankfurt, Germany</span>
            </div>
        </div>
        <div class="calendarMoreInfo">
            <a href="#" class="calendarDetails">View Details</a>
            <a href="#" class="calendarReminder">Add a reminder</a>
            <a href="#" class="calendarAddTo">Add to calendar</a>
        </div>

    </div>
    <div class="divLine"></div>

    <div class="CalendarDate">
        <div class="calendarDate">
            <span class="calendarMonth">Oct</span><br />
            <span class="calendarDay">04</span>
        </div>
        <div class="CalendarContentWrapper">
            <div class="calendarContent">
                <span class="calendarTitle">BASF Investor Day 2015</span>
                <span class="calendarTime">01:30 PM CEST</span>
                <span class="calendarLocation">Frankfurt, Germany</span>
            </div>
        </div>
        <div class="calendarMoreInfo">
            <a href="#" class="calendarDetails">View Details</a>
            <a href="#" class="calendarReminder">Add a reminder</a>
            <a href="#" class="calendarAddTo">Add to calendar</a>
        </div>
    </div>
    <div class="divLine"></div>

    <div class="calendarRemindAll">
        <label>Sign up and receieve reminder alerts by email. </label>
        <input class="calendarButtonStyle" type="button" value="Remind All" />
    </div>
</div>

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

<%--</script>--%>

<%--<script id="IRQuoteTableVerticalTemplate" type="text/x-handlebars-template">--%>

<script type="text/javascript">

    msgData1 = $('.calendarMonth').text();
    msgData2 = $('.calendarTime').text();
    msgData3 = $('.calendarLocation').text();

    var icsMSG = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Our Company//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:me@google.com\nDTSTAMP:20120315T170000Z\nATTENDEE;CN=My Self ;RSVP=TRUE:MAILTO:mede@euroinvestor.com\nORGANIZER;CN=Me:MAILTO::mede@euroinvestor.com\nDTSTART:" + msgData1 + "\nDTEND:" + msgData2 + "\nLOCATION:" + msgData3 + "\nSUMMARY:Our Meeting Office\nEND:VEVENT\nEND:VCALENDAR";

    $('.calendarAddTo').click(function () {
        window.open("data:text/calendar;charset=utf8," + escape(icsMSG));
    });

</script>

<link rel="stylesheet" type="text/css" href="ir.client.css" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
