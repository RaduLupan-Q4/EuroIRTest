<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//cloud.typography.com/7594474/696708/css/fonts.css"" type=""text/css"" />";
%>
<%= site.newHeader("IRNewsHeadline") %>

<script type="text/javascript">
    var activeModules = ['IRNewsHeadline'];
</script>

<div class="IRNewsHeadlineModule"></div>

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
         <a href="http://www.alm.brand.dk/abdk/OmAlmBrand/Investor/AlmBrandDownloadcenter/Arkivselskabsmeddelelser/index.htm" class="seeNewsText" target="_top">> {{headers/t_see_news}}</a>
     </div>

</script>

<div class="newsHeadlineDisclaimer">
    <%= site.newFooter("IRNewsHeadline") %>
</div>

<script type="text/javascript">
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
