<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700""/>";
%>
<%= site.newHeader("IRCustomModule") %>
<link rel="stylesheet" type="text/css" href="globalSales_dark.css?ppadaddd">
<link rel="stylesheet" type="text/css" href="calendarWidget.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("calendarWidget.css")).Ticks.ToString()%>">


<script type="text/javascript">
    var activeModules = ["IRCustomModule"];
</script>



<div class="IRNewsCalendar"></div>


<script id="IRNewsCalendarTemplate" type="text/x-handlebars-template">
    <h2>MEET US</h2>
    {{#each data}}

    <div class="table-wrapper">
        <div class="eventHeadlineText">{{headline}}</div>
        <div class="eventPeriod">{{showDateWithFormat startTime 'MMM d, YYYY'}} | {{showDateWithFormat startTime 'HH:mm'}}-{{getEventEndTime keyValueSet 'HH:mm'}}</div>
        <div class="eventLocation">{{getKeyValue keyValueSet 'location'}}</div>
    </div>

    {{/each}}

</script>
 <a href="http://www.demant.com/investor-relations/financial-calendar/" target="_parent" class="link btn">Read More</a>

<%= site.newFooter("IRCustomModule") %>
<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>




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

        $.getJSON(getServiceEngingeURL()+'/RequestNewsCalendarPagination?apiversion=1&lcid=1033&customerKey=WilliamDemant&solutionID=2412&MaxRows=3&pageno=0&instrumentid=1000589&StartDate=' + convertedDate + '&sortAscDesc=desc' + '', function (data) {


            var allData = data;

            convertTimestamp(allData);

            //var allObjects = allData.data;

            var source = $('#IRNewsCalendarTemplate').html();
            var template = Handlebars.compile(source);
            $('.IRNewsCalendar').html(template(allData));


        }); //getJSON
    }); //function


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
        var eventendtime = getObjects([objects], 'key', 'eventendtime');

        var formatDate = new Date(eventendtime);

        return moment(formatDate).format(options);
    });

    //helper to get location
    Handlebars.registerHelper('getKeyValue', function (objects, options) {

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
        var item = getObjects([objects], 'key', options);
        return item;
    });

</script>
