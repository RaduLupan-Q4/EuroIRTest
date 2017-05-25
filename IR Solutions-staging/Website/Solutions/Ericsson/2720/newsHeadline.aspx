<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""https://fonts.googleapis.com/css?family=Roboto:400,700,300"" type=""text/css"" />";
%>
<%= site.newHeader("IRNewsHeadline") %>

<script type="text/javascript">
    var activeModules = ['IRNewsHeadline'];
</script>

<div class="IRNewsHeadlineModule"></div>

<script id="IRNewsHeadlineTemplate" type="text/x-handlebars-template">
    <div>
        <div class="IRNewsHeadlineTool table-look horizontal responsive">
            {{#each data}}
            <div class="newsHeadlineWrapper" onclick="openInNewWindow({{storyID}})">
                <div class="Data" id="{{storyID}}">
                    <div class="readMore" style="display:none">{{../headers/t_read_more}} ⟫</div>                   
                    <div class="date column-first" id="{{showDateWithFormat timestamp 'YYYY-MMM-DD'}}">{{showDateWithFormat timestamp 'DD.MM.YYYY HH:mm'}} (CET)</div>
                    <div class="title column-first" id="{{ShowCategoryShort categories}}">{{headline}}</div>
                </div>
            </div>
            {{/each}}
        </div>
    </div>
</script>
<div style="display: none;"><%= site.newFooter("IRNewsHeadline") %></div>
<script>
    function openInNewWindow(storyID) {
        //window.open('newsArticleHTML.aspx?storyid=' + storyID + '&solutionID='+clientSolutionID+'&customerKey='+clientCustomerKeyRequired);
        window.open('http://ir.euroinvestor.com/Tools/newsArticleHTML.aspx?solutionID=' + clientSolutionID + '&customerKey=' + clientCustomerKeyRequired + '&storyID=' + storyID);
    }
    var customXApplied = false;
    function prepareCustomX() {
        if (!customXApplied) {
            if (typeof ($('.IRNewsHeadlineTool').html()) != 'undefined') {

                
                $('.newsHeadlineWrapper').hover(
                    function () {
                        var readMoreHeight = $(this).children('.Data').height();
                        $('.readMore').css('height', readMoreHeight+'px');
                        $('.readMore').css('line-height', readMoreHeight + 'px');
                        $(this).children('.Data').children('.readMore').css('display', 'block');
                        $(this).children('.Data').children('.date').css('display', 'none');
                        $(this).children('.Data').children('.title').css('display', 'none');

                    },
                    function () {
                        $(this).children('.Data').children('.readMore').css('display', 'none');
                        $(this).children('.Data').children('.date').css('display', 'block');
                        $(this).children('.Data').children('.title').css('display', 'block');

                    });

                customXApplied = true;
            }
        }
    }
    $(function () {
        setInterval(function () {
            prepareCustomX();
        }, 200);
    });




</script>
