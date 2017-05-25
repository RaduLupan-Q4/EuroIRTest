<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:400,500,300"" type=""text/css"" />";
%>
<%= site.newHeader("IRNewsHeadline") %>

<script type="text/javascript">
    var activeModules = ['IRNewsHeadline'];
</script>

<div class="IRNewsHeadlineModule"></div>

<script id="IRNewsHeadlineTemplate" type="text/x-handlebars-template">
    <div class="IRNewsHeadlineTool table-look horizontal responsive">
        {{#each data}}    
                <div id="{{storyID}}" style="height: 82px;">
                    <div class="date column-first" style="width: 30%; float: left; font-size: 12px; color: #666; line-height: 82px; height: 82px;"
                        id="{{showDateWithFormat timestamp 'YYYY-MMM-DD'}}">
                        {{showDateWithFormat timestamp 'MMMM DD, YYYY'}}
                    </div>
                    <div class="title" style="width: 70%; float: left; color: #004c69; font-size: 15px; line-height: 82px; height: 82px;" id="{{ShowCategoryShort categories}}">
                        <span class="title windowOpen" onclick="openInNewWindow({{storyID}})" <%--target="_blank" --%>style="text-decoration: none; float: left; white-space: nowrap; width: 88%; overflow: hidden; cursor: pointer;" href="{{htmlUrl}}">{{headline}}</span>
                       <a class="seeMoreLink" <%--href="{{htmlUrl}}"--%> onclick="openInNewWindow({{storyID}})" style="font-size: 30px; float:right; color: #bebebe; display: block; line-height: 82px; text-align: right; font-weight: 300; width: 10%;
    padding-right: 2%; text-decoration: none; cursor: pointer;">+</a>
                    </div>
                </div>
        {{/each}}
    </div>
</script>
<div class="newsHeadlineDisclaimer" style="display: none;">
    <%= site.newFooter("IRNewsHeadline") %>
</div>

<script type="text/javascript">
    function openInNewWindow(storyID) {
        window.open('newsArticle.aspx?storyid=' + storyID + '&solutionID=2504&customerKey=Saniona', '', 'width=900, height=800,scrollbars=yes');
    }
    //$('.windowOpen').click(function () {
    //    var storyID = $(this).parent().attr('id');
     
    //    if ($(this).hasClass('download')) {
    //        // Do nothing

    //    } else {
    //        // Show news
    //        // window.open('newsArticle.aspx?storyid=' + storyID);

    //    }
    //});
    //$('.IRNewsHeadlineModule div.Data').click(function () {
    //    var storyID = $(this).parent().attr('id');
    //    if ($(this).hasClass('download')) {
    //        // Do nothing

    //    } else {
    //        // Show news
    //        //window.open('newsArticle.aspx?storyid=' + storyID);

    //    }
    //});


</script>
