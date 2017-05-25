<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">


<head runat="server">
    <meta charset="UTF-8">
    <title>IR Solutions, Euroinvestor</title>
    <link rel="stylesheet" type="text/css" media="screen" href="includes/css/ir.style.css" />
</head>
<body>
    <div class="wrapper">
        <div class="tab-container">

            <ul class="list_reset ul-list-tabs">
                <li class="li-tab current pointer" id="Resultannouncements">
                    <button>Result announcements</button>
                </li>
                <li class="li-tab" id="Investorpresentations">
                    <button>Investor presentations</button>
                </li>
            </ul>

            <div class="tab-content">
                <!-- tab 1-->
                <div class="tab" id="tab-one">
                    <div class="select-style">
                        <select id="period" name="tab1" onchange="selectPeriod()"></select>
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
                                    <th class="Header column-first title">{{headers/t_close}}</th>
                                    <th class="Header categoryType">Report</th>
                                    <th class="Header categoryType">Investor presentation</th>
                                    <th class="Header categoryType">Webcast</th>
                                    <th class="Header categoryType">Financial data</th>
                                    <%--<th class="Header column-first title">{{t_corporate_announcement}}</th>
                                    <th class="Header categoryType">{{t_report}}</th>
                                    <th class="Header categoryType">{{t_investor_presentation}}</th>
                                    <th class="Header categoryType">{{t_webcast}}</th>
                                    <th class="Header categoryType">{{t_financial_data}}</th>--%>
                                </tr>
                            </thead>
                            <tbody>
                                {{#each data}}
                                <tr class="IRDataGroup category_{{clean keyValueSet 'announcementtype'}}" id="{{storyId}}">
                                    <td class="IRData column-first title">{{headline}}</td>
                                    <td class="IRData press"><a href="{{newsarticle storyId 'storyId'}} " class="external-link" target="_blank" /></td>
                                    <td class="IRData press"><a href="{{irfile keyValueSet 'investorpresentation'}}" class="pdf-link" target="_blank" /></td>
                                    <td class="IRData press"><a href="{{clean keyValueSet 'webcast'}}" class="external-link" target="_blank" /></td>
                                    <td class="IRData press"><a href="{{irfile keyValueSet 'financialdata'}}" class="excel-link" target="_blank" /></td>
                                </tr>
                                {{/each}} 
                            </tbody>

                        </table>
                    </div>

                    <table class="table-look vertical responsive-flip">

                        <tr>
                            <th class="Header-vertical title">Corporate announcement</th>
                            <td class="Header-vertical title">&nbsp;</td>
                        </tr>
                        {{#each data}}
                            <tr id="{{storyId}}" class="IRDataGroup-vertical category_{{clean keyValueSet 'announcementtype'}}">
                                <td class="Data title-vertical">{{headline}}</td>
                                <td class="Data title-vertical"><span class="plusIcon">&nbsp;</span></td>
                            </tr>
                        <tr class="IRDataGroup-vertical toggle{{storyId}}">
                            <td class="Header-vertical">Report</td>
                            <td class="Data-vertical"><a href="{{newsarticle storyId 'storyId'}}" class="external-link" target="_blank" /></td>
                        </tr>
                        <tr class="IRDataGroup-vertical toggle{{storyId}}">
                            <td class="Header-vertical">Investor presentation</td>
                            <td class="Data-vertical"><a href="{{irfile keyValueSet 'investorpresentation'}}" class="pdf-link" target="_blank" /></td>
                        </tr>
                        <tr class="IRDataGroup-vertical toggle{{storyId}}">
                            <td class="Header-vertical">Webcast</td>
                            <td class="Data-vertical"><a href="{{clean keyValueSet 'webcast'}}" class="external-link" target="_blank" /></td>
                        </tr>
                        <tr class="IRDataGroup-vertical toggle{{storyId}}">
                            <td class="Header-vertical">Financial data</td>
                            <td class="Data-vertical"><a href="{{irfile keyValueSet 'financialdata'}}" class="excel-link" target="_blank" /></td>
                        </tr>
                        {{/each}} 
                        
                    </table>
                </script>

            </div>
        </div>
    </div>

    <script type="text/javascript" src="includes/js/libs/jquery-1.11.3.min.js"></script>
    <script src="includes/js/libs/handlebars-v4.0.2.js"></script>
    <script type="text/javascript" src="includes/js/ir.behaviour.js"></script>
    <%--<script type="text/javascript" src="includes/js/ir.client.js"></script>--%>
    <script type="text/javascript" src="/inc/scripts/core/ir.util.js?v=635881093467946908"></script>
    <script type="text/javascript" src="/inc/scripts/core/ir.util.data.js?v=635878578224785611"></script>

   
</body>
</html>

