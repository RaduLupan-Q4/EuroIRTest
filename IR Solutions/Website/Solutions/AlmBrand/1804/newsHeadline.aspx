<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//cloud.typography.com/7594474/696708/css/fonts.css"" type=""text/css"" />";
%>
<%= site.newHeader("IRNewsHeadline") %>

<script type="text/javascript">
    //var activeModules = ['IRNewsHeadline'];
</script>

<div class="IRNewsCalendar"></div>

<script id="IRNewsHeadlineTemplate" type="text/x-handlebars-template">
    {{#each data}}
         <div class="IRNewsHeadlineTool table-look horizontal responsive">
             <div class="event-listing" id="{{storyID}}" style="float: left; width: 100%;">
                 <div class="Data2 date " id="{{showDateWithFormat timestamp 'DD MMMM YYYY'}}">
                     <span class="day">{{showDateWithFormat timestamp 'DD'}}</span>
                     <span class="month">{{showDateWithFormat timestamp 'MMMM'}}</span>
                 </div>

                 <div class="title column-first" id="{{ShowCategoryShort categories}}">{{#each attachments}} <a target="_blank" href="{{url}}">{{/each}}{{headline}}</a> </div>

             </div>
         </div>
    {{/each}}
    

    <div class="newsLink" style="float: left; width: 100%;">
         <%--<a href="news.aspx" class="seeNewsText" target="_top">{{headers/t_see_news}}</a>--%>
         <a href="http://www.almbrand.dk/abdk/OmAlmBrand/Investor/Selskabsmeddelelser/index.htm" class="seeNewsText" target="_top"></a>
     </div>

</script>

<div class="newsHeadlineDisclaimer">
</div>

    <%= site.newFooter("IRNewsHeadline") %>

<script type="text/javascript">
    $(function () {

        var lcid = 1033;
        if (globalActiveLanguage == "da") {
            lcid = 1030;
            $('.seeNewsText').text("Se selskabsmeddelelser");
        }
      
        requestTranslationsData.done(function () {

            $.getJSON('/ServiceEngine/api/json/reply/RequestNews?lcid=' + lcid + '&pageNo=0&maxRows=50&headlinesOnly=true&instrumentID=100059&apiVersion=1&solutionID=1804&customerKey=AlmBrand', function (data) {
                var allData = data;

                //remove specific news defined in ir.client.js
                var newsDataInitialObj = allData.data;
                if (typeof (clientStyle.news_ignoreNewsStoriesWithHeadline) == 'string') {
                    var newsDataUpdatedArr = new Array();

                    var newsData = allData.data;
                    var newsDataUpdated = {
                        attachments: null,
                        categories: null,
                        headline: null,
                        htmlUrl: null,
                        storyID: null,
                        timestamp: null
                    };
                    for (var i = 0; i < newsData.length; i++) {
                        if (newsData[i].headline.indexOf(clientStyle.news_ignoreNewsStoriesWithHeadline) == -1) {
                            newsDataUpdatedArr.push({
                                attachments: newsData[i].attachments,
                                categories: newsData[i].categories,
                                headline: newsData[i].headline,
                                htmlUrl: newsData[i].htmlUrl,
                                storyID: newsData[i].storyID,
                                timestamp: newsData[i].timestamp
                            });
                        }
                    }
                    newsDataInitialObj = newsDataUpdatedArr;
                }

                allData.data = newsDataInitialObj;
                allData.data.splice(clientStyle.amountOfNewsHeadlines);

                var source = $('#IRNewsHeadlineTemplate').html();
                var template = Handlebars.compile(source);
                $('.IRNewsCalendar').html(template(allData));

                if (globalActiveLanguage == "da") {
                    $('.seeNewsText').text("> Se selskabsmeddelelser");
                } else {
                    $('.seeNewsText').text("> See news");

                }
            }); //getJSON
            
        });

    });

    $('.IRNewsHeadlineModule td.Data').click(function () {
        var storyID = $(this).parent().attr('id');
        if ($(this).hasClass('download')) {
            // Do nothing

        } else {
            // Show news
            // window.open('newsArticle.aspx?storyid=' + storyID);

        }
    });
    $('.IRNewsHeadlineModule div.Data').click(function () {
        var storyID = $(this).parent().attr('id');
        if ($(this).hasClass('download')) {
            // Do nothing

        } else {
            // Show news
            //window.open('newsArticle.aspx?storyid=' + storyID);

        }
    });
    

</script>
