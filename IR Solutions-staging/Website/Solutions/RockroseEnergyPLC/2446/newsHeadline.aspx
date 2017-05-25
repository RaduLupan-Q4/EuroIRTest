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
            
                <div id="{{storyID}}">
                    <div  class="headline">
                    <div class="date column-first" id="{{showDateWithFormat timestamp 'DD/MM/YY'}}">{{showDateWithFormat timestamp 'DD/MM/YY'}}</div>
                    <div class="title column-first" id="{{ShowCategoryShort categories}}"> <a target="_parent" href="{{pdfUrl}}">{{headline}}</a> </div>
                    </div>
                    {{/each}}
                </div>
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
