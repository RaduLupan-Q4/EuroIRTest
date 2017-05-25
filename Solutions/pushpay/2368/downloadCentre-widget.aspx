<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";

%>
<%= site.newHeader("IRCustomModule") %>
<link rel="stylesheet" href="includes/css/custom.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes/css/custom.css")).Ticks.ToString()%>" />
<script type="text/javascript">
    var activeModules = ["IRCustomModule"];
</script>

<div class="wrapper">
    <div class="tab-container">


        <div class="tab-content">
            <!-- tab 1-->
            <div class="tab" id="tab-one">
                <%--<div class="announcementsWidgetHeader">
                    <span>Announcements & Reports</span>
                </div>--%>
                <div id="IRData"></div>

                <%--<div class="IRDownloadCentreFooter">
                    <a href="downloadCentre.aspx">
                        <img src="images/widgetArrow.png" class="widgetArrow"></a>
                    <a href="downloadCentre.aspx"><span>View all announcements</span></a>
                </div>--%>
            </div>



            <script id="IRDataTemplate" type="text/x-handlebars-template">

                <div class="scrollbox widget" style="display:block">
                    <table class="table-look">
                        <tbody>
                            {{#each data}}
                                <tr class="IRDataGroup category_{{clean keyValueSet 'announcementtype'}}" id="{{storyID}}">
                                    <td class="IRData press">
                                        <div class="publishDateWrapper">
                                            <div class="monthText">{{convertToISOMonth publishTime}}</div>
                                            <div class="dayText">{{convertToISODay publishTime}}</div>
                                        </div>
                                    </td>
                                    <td class="IRData column-first title headline">{{headline}}</td>
                                </tr>
                            {{/each}} 
                        </tbody>

                    </table>
                </div>

            </script>

        </div>
    </div>
</div>

<div class="widget">
<%= site.newFooter("IRCustomModule") %>
    </div>
<script>
setTimeout(function() {
    var script = document.createElement('script');
    script.src = "includes/js/downloadCentre-widget.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes/js/downloadCentre-widget.js")).Ticks.ToString()%>";
    document.getElementsByTagName('head')[0].appendChild(script);
}, 800);

	Handlebars.registerHelper('convertToISODay', function (timestamp) {
		return moment.utc(timestamp, "YYYY-MM-DD HH:mm:ss").local().format("DD")
    });
	
	 Handlebars.registerHelper('convertToISOMonth', function (timestamp) {
		return moment.utc(timestamp, "YYYY-MM-DD HH:mm:ss").local().format("MMM")
    });
</script>



