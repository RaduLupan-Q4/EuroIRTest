<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRCustomModule") %>
<link rel="stylesheet" type="text/css" href="includes/css/ir.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes/css/ir.style.css")).Ticks.ToString()%>" />
<script type="text/javascript">
    var activeModules = ['IRCustomModule'];
</script>
<%--<head runat="server">
    <meta charset="UTF-8">
    <title>IR Solutions, Euroinvestor</title>
    <link rel="stylesheet" type="text/css" media="screen" href="includes/css/ir.style.css" />
</head>--%>

<div class="wrapper">
    <div class="tab-container">

        <ul class="list_reset ul-list-tabs">
            <%--<li class="li-tab current pointer" id="Resultannouncements">--%>
            <li class="li-tab current pointer" id="22">
                <button class="titleResultAnnouncements"></button>
            </li>
            <%--<li class="li-tab" id="Investorpresentations">--%>
            <li class="li-tab" id="69">
                <button class="titleInvestorPresentations"></button>
            </li>
        </ul>

        <div class="tab-content">
            <!-- tab 1-->
            <div class="tab" id="tab-one">
                <div class="select-style">
                    <select id="period" name="tab1" onchange="selectPeriod()">
                    </select>
                </div>

                <div id="IRData"></div>

                <div class="IRNewsTableFooter">
                    <div class="IRNewsPagination"></div>
                </div>
            </div>



            <script id="IRDataTemplate" type="text/x-handlebars-template">

                <div class="scrollbox">
                    <table class="table-look">
                        <thead>
                            <tr>
                                <th class="Header column-first titleCorporateAnnouncements"></th>
                                <th class="Header categoryType titleAnnouncement"></th>
                                <th class="Header categoryType titleReport"></th>
                                <th class="Header categoryType titleInvestorPresentation"></th>
                                <th class="Header categoryType titleWebcast"></th>
                                <th class="Header categoryType titleKeyFigures"></th>

                                <%--<th class="Header column-first title">{{t_corporate_announcement}}</th>
                                    <th class="Header categoryType">{{t_report}}</th>
                                    <th class="Header categoryType">{{t_investor_presentation}}</th>
                                    <th class="Header categoryType">{{t_webcast}}</th>
                                    <th class="Header categoryType">{{t_financial_data}}</th>--%>
                            </tr>
                        </thead>
                        <tbody>
                            {{#each data}}
                                                                                     <%--toolID--%>
                            <tr class="IRDataGroup category_{{clean keyValueSet 'ToolId'}}" id="{{storyId}}">
                                <td class="IRData column-first title">{{headline}}</td>
                                <td class="IRData press dataAnnouncement"><a href="{{irfile keyValueSet  'announcement' storyId}} " class="pdf-link" target="_blank" /></td>
                                <td class="IRData press dataReport"><a href="{{irfile keyValueSet 'report' storyId}}" class="pdf-link" target="_blank" /></td>
                                <td class="IRData press dataPresentation"><a href="{{irfile keyValueSet 'investorpresentation' storyId}}" class="pdf-link" target="_blank" /></td>
                                <td class="IRData press dataWebcast"><a href="{{clean keyValueSet 'webcast'}}" class="external-link" target="_blank" /></td>
                                <td class="IRData press dataKeyFigures"><a href="{{irfile keyValueSet 'KeyFigures' storyId}}" class="excel-link" target="_blank" /></td>
                            </tr>
                            {{/each}} 
                        </tbody>

                    </table>
                </div>

                <table class="table-look vertical responsive-flip">

                    <tr>
                        <th class="Header-vertical title titleCorporateAnnouncements"></th>
                        <td class="Header-vertical title">&nbsp;</td>
                    </tr>
                    {{#each data}}
                    <tr id="{{storyId}}" class="IRDataGroup-vertical category_{{clean keyValueSet 'ToolId'}}">
                        <td class="Data title-vertical">{{headline}}</td>
                        <td class="Data title-vertical"><span class="plusIcon">&nbsp;</span></td>
                    </tr>
                    <tr class="IRDataGroup-vertical toggle{{storyId}}">
                        <td class="Header-vertical titleAnnouncement"></td>
                        <td class="Data-vertical dataAnnouncement"><a href="{{irfile keyValueSet  'announcement' storyId}}" class="pdf-link" target="_blank" /></td>
                    </tr>
                    <tr class="IRDataGroup-vertical toggle{{storyId}}">
                        <td class="Header-vertical titleReport"></td>
                        <td class="Data-vertical dataReport"><a href="{{irfile keyValueSet  'report' storyId}}" class="pdf-link" target="_blank" /></td>
                    </tr>
                    <tr class="IRDataGroup-vertical toggle{{storyId}} ">
                        <td class="Header-vertical titleInvestorPresentation"></td>
                        <td class="Data-vertical dataPresentation"><a href="{{irfile keyValueSet 'investorpresentation' storyId}}" class="pdf-link" target="_blank" /></td>
                    </tr>
                    <tr class="IRDataGroup-vertical toggle{{storyId}}">
                        <td class="Header-vertical titleWebcast"></td>
                        <td class="Data-vertical dataWebcast"><a href="{{clean keyValueSet 'webcast'}}" class="external-link" target="_blank" /></td>
                    </tr>
                    <tr class="IRDataGroup-vertical toggle{{storyId}}">
                        <td class="Header-vertical titleKeyFigures"></td>
                        <td class="Data-vertical dataKeyFigures"><a href="{{irfile keyValueSet 'KeyFigures' storyId}}" class="excel-link" target="_blank" /></td>
                    </tr>
                    {{/each}} 
                        
                </table>
            </script>

        </div>
    </div>
</div>

<script type="text/javascript" src="includes/js/libs/jquery-1.11.3.min.js"></script>
<script src="includes/js/libs/handlebars-v4.0.2.js"></script>
<script type="text/javascript" src="includes/js/ir.behaviour.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes/js/ir.behaviour.js")).Ticks.ToString()%>"></script>
<%--<script type="text/javascript" src="includes/js/ir.client.js"></script>--%>
<script type="text/javascript" src="/inc/scripts/core/ir.util.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("/inc/scripts/core/ir.util.js")).Ticks.ToString()%>"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.data.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("/inc/scripts/core/ir.util.data.js")).Ticks.ToString()%>"></script>


<script type="text/javascript">

    $(document).ready(function () {


        var translationsApplied = false;

        function prepareTranslations() {

            if (!translationsApplied) {

                if (typeof ($('.IRData.press')) != 'undefined') {

                    debugStep("applyTranslations()");

                    $.when(requestTranslationsData)

                        .done(function (TranslationsData) {

                            if (globalActiveLanguage == "da") {
                                $('.titleResultAnnouncements').html("Hel-/delårsrapporter");
                                $('.titleInvestorPresentations').html("Investorpræsentationer");
                                $('.titleAnnouncement').html("Meddelelse");
                                $('.titleInvestorPresentation').html("Præsentation");
                                $('.titleWebcast').html("Webcast");
                                $('.titleKeyFigures').html("Nøgletal");
                                $('.selectAll').html("Alle meddelelser");

                            } else {
                                $('.titleResultAnnouncements').html("Result announcements");
                                $('.titleInvestorPresentations').html("Investor Presentations");
                                $('.titleAnnouncement').html("Announcement");
                                $('.titleInvestorPresentation').html("Presentation");
                                $('.titleWebcast').html("Webcast");
                                $('.titleKeyFigures').html("Financial figures");
                                $('.selectAll').html("All announcements");

                            }
                            $('.titleFinancialData').html(TranslationsData.data.t_news);
                            $('.titleReport').html(TranslationsData.data.t_report);
                            //$('.titleCorporateAnnouncements').html(TranslationsData.data.t_corporate_announcements);
                        }
                    )
                    translationsApplied = true;
                }
            }
        }
        $(function () {
            setInterval(function () {
                prepareTranslations();
            }, 800);
        });

    });

</script>
