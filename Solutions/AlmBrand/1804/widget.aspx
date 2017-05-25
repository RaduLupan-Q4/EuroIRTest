<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    string language = Request.QueryString["language"];
    if (string.IsNullOrEmpty(language)) {
        language = "en";
    }
%>
<%= site.newHeader("IRCustomModule") %>

<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
</script>

<div class="widgetModule">
    <div class="tabs-container">

        <div id="container" class="tabs">
            <ul class="categoryFilters">
                <li class="tabitem firstTab"><a href="#tab-1"><span class="titleCorporateAnnouncements"></span></a></li>
                <li class="tabitem"><a href="#tab-2"><span class="titleUpcomingEvents"></span></a></li>
                <li class="tabitem lastTab"><a href="#tab-3"><span class="titleNews"></span></a></li>
            </ul>

            <div id="tab-1">
                <iframe src="newsHeadline.aspx?language=<%= language %>" style="width: 100%; height: 1000px; border: none;"></iframe>
            </div>
            <div id="tab-2">
                <iframe class="calendarWidgetIFrame" src="calendarWidget.aspx?language=<%= language %>" style="width: 100%; height: 1500px; border: none;"></iframe>
            </div>
            <div id="tab-3">
                <iframe src="newsHeadline2.aspx?language=<%= language %>" style="width: 100%; height: 1000px; border: none;"></iframe>
            </div>
        </div>
    </div>
</div>

<%= site.newFooter("IRCustomModule") %>

<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="inc/jquery.minitabs.js"></script>
<script type="text/javascript">


    var prepareTabsApplied = false;
    function prepareTabs() {
        if (!prepareTabsApplied) {
            if (typeof ($('.categoryFilters')) != 'undefined') {
                $("#container").minitabs();

                applyTranslations();

                prepareTabsApplied = true;
            }
        }
    }
    $(function () {
        setInterval(function () {
            prepareTabs();
        }, 200);
    });

    function applyTranslations() {
        debugStep("applyTranslations()");

        $.when(requestTranslationsData)

            .done(function (TranslationsData) {
                if (globalActiveLanguage == "da") {
                    $('.titleCorporateAnnouncements').html("Selskabs-meddelelser");
                    $('.titleUpcomingEvents').html("Kommende events");
                    $('.titleNews').html("Alm. Brand Investor");
                } else {
                    $('.titleCorporateAnnouncements').html("Corporate Announcements");
                    $('.titleUpcomingEvents').html("Upcoming Events");
                    $('.titleNews').html("Alm. Brand Investor");

                }
            }
        );
    }

</script>

<script type="text/javascript">
    $(document).ready(function () {
        $("#container").minitabs(1);
    });
</script>
