<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900""/>";
%>
<%= site.newHeader("IRCustomModule") %>
<link rel="stylesheet" type="text/css" href="includes/css/ir.downloadCentreStyle.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes/css/ir.downloadCentreStyle.css")).Ticks.ToString()%>" />
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
        <div class="titlePressRelease">
            <span>Press Releases</span>
        </div>
        <ul class="list_reset ul-list-tabs">
            <%--<li class="li-tab current" id="Resultannouncements">
                <button class="titleResultAnnouncements"></button>
            </li>--%>
            <%--<li class="li-tab" id="Investorpresentations">
                <button class="titleInvestorPresentations"></button>
            </li>--%>
        </ul>

        <div class="tab-content">
            <div class="tab" id="tab-one">
                <%--<div class="select-style">
                    <select id="period" name="tab1" onchange="selectPeriod()"></select>
                </div>--%>

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
                                <th class="Header column-first titleDate">Date</th>
                                <th class="Header categoryType titleHeadline">Headline</th>
                                <th class="Header categoryType titleFormat last">Format</th>
                            </tr>
                        </thead>
                        <tbody>
                            {{#each data}}
                                <tr class="IRDataGroup category_{{showDateWithFormat publishTime 'YYYY'}}" id="{{storyId}}">
                                    <td class="IRData column-first">{{showDateWithFormat publishTime 'DD MMM YYYY'}}</td>
                                    <td class="IRData title">{{headline}}</td>
                                    <td class="IRData press last"><a href="{{irfile keyValueSet 'release' storyId}}" class="pdf-link" target="_blank" /></td>

                                </tr>
                            {{/each}} 
                        </tbody>

                    </table>
                </div>

                <table class="table-look vertical responsive-flip">

                    <tr>
                        <th class="Header-vertical title titleCorporateAnnouncements">Headline</th>
                        <td class="Header-vertical title">&nbsp;</td>
                    </tr>
                    {{#each data}}
                            <tr id="{{storyId}}" class="IRDataGroup-vertical1 category_{{showDateWithFormat publishTime 'YYYY'}}">
                                <td class="Data title-vertical"><span>{{showDateWithFormat publishTime 'DD MMM YYYY'}}</span> - {{headline}}</td>
                                <td class="Data title-vertical"><span class="plusIcon">&nbsp;</span></td>
                            </tr>
                    <tr class="IRDataGroup-vertical toggle{{storyId}}">
                        <td class="Header-vertical titleInvestorPresentation">Format</td>
                        <td class="Data-vertical"><a href="{{irfile keyValueSet 'release' storyId}}" class="pdf-link" target="_blank" /></td>
                    </tr>
                    <%--  <tr class="IRDataGroup-vertical toggle{{storyId}}">
                        <td class="Header-vertical titleFinancialData"></td>
                        <td class="Data-vertical"><a href="{{irfile keyValueSet 'financialdata' storyId}}" class="excel-link" target="_blank" /></td>
                    </tr>

                    <tr class="IRDataGroup-vertical toggle{{storyId}}">
                        <td class="Header-vertical titleWebcast"></td>
                        <td class="Data-vertical"><a href="{{clean keyValueSet 'webcast'}}" class="external-link" target="_blank" /></td>
                    </tr>

                    <tr class="IRDataGroup-vertical toggle{{storyId}}">
                        <td class="Header-vertical titleKeyFigures"></td>
                        <td class="Data-vertical"><a href="{{irfile keyValueSet 'KeyFigures' storyId}}" class="excel-link" target="_blank" /></td>
                    </tr>--%>
                    {{/each}} 
                        
                </table>
            </script>

        </div>
    </div>
</div>

<%= site.newFooter("IRCustomModule") %>
<script type="text/javascript" src="includes/js/ir.behaviour.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes/js/ir.behaviour.js")).Ticks.ToString()%>"></script>


<%--<script type="text/javascript">

    $(document).ready(function () {


        var translationsApplied = false;

        function prepareTranslations() {

            if (!translationsApplied) {

                if (typeof ($('.IRData.press')) != 'undefined') {

                    debugStep("applyTranslations()");

                    $.when(requestTranslationsData)

                        .done(function (TranslationsData) {

                            if (globalActiveLanguage == "da") {

                                $('.titleWebcast').html("Webcast");
                                $('.titleInvestorPresentation').html("Præsentation");
                                $('.titleInvestorPresentations').html("Investorpræsentationer");
                                $('.titleResultAnnouncements').html("Hel-/delårsrapporter");
                                $('.titleKeyFigures').html("Nøgletal");
                                $('.titleReport').html("Meddelelse");

                            } else {
                                $('.titleWebcast').html("Webcast");
                                $('.titleInvestorPresentation').html("Investor Presentation");
                                $('.titleInvestorPresentations').html("Investor Presentations");
                                $('.titleResultAnnouncements').html("Result announcements");
                                $('.titleKeyFigures').html("Financial figures");
                                $('.titleReport').html(TranslationsData.data.t_report);

                            }
                            $('.titleFinancialData').html(TranslationsData.data.t_news);
                            //$('.titleReport').html(TranslationsData.data.t_report);
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

</script>--%>
