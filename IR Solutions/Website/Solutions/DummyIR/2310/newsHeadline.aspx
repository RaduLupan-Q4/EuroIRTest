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
    <div class="IRNewsHeadlineTool table-look horizontal responsive">
        {{#each data}}
            
                <div class="event-listing" id="{{storyID}}" style="float: left; width: 100%;">
                    <div class="Data2 date column-first" id="{{showDateWithFormat timestamp 'DD MMMM YYYY'}}">
                        <span class="day">{{showDateWithFormat timestamp 'DD'}}</span>
                        <span class="month">{{showDateWithFormat timestamp 'MMMM'}}</span>
                    </div>

                    <div class="title column-first" id="{{ShowCategoryShort categories}}">{{#each attachments}} <a target="_blank" href="{{url}}">{{/each}}{{headline}}</a> </div>

                </div>
        {{/each}}
    </div>
</script>
 <div class="newsLink">
        <a href="news.aspx" target="_parent">See news</a>
    </div>
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
