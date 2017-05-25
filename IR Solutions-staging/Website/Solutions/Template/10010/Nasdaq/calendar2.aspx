<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.header("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteVerticalModule"></div>
<div class="IRQuoteHorizontalModule"></div>

<h1>Calendar</h1>
    <div style="clear:both; float: left; margin-bottom: 30px;"></div>


<div class="IRCalendar">
    
    <div class="CalendarWrapper">
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
    <div class="CalendarWrapper">
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

    <div class="CalendarWrapper">
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

<link rel="stylesheet" type="text/css" href="calendar2.css" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
