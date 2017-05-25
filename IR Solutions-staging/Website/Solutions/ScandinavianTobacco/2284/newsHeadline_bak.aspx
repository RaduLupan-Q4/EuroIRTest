<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
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
                <div class="Data headline" id="{{storyID}}">
                    <div class="Data date column-first" id="{{showDateWithFormat timestamp 'YYYY-MMM-DD'}}">{{showDateWithFormat timestamp 'MMM DD, YYYY'}}</div>
                    <div class="Data title column-first" id="{{ShowCategoryShort categories}}">{{headline}}</div>
                </div>
            {{/each}}
        </div>
    </div>
</script>
<div class="newsHeadlineDisclaimer">
    <%= site.newFooter("IRNewsHeadline") %>
</div>

<script type="text/javascript">

    var toolSet = false;
    function prepareTool() {
        if (toolSet) {
        } else {

            if (typeof ($('.IRNewsHeadlineModule div.Data').html()) != "undefined") {
                //$(".IRNewsModule div.IRData").off("click", "**");
                $(".IRNewsHeadlineModule div.Data").unbind();
                $('.IRNewsHeadlineModule div.Data').click(function () {
                    var storyID = $(this).parent().attr('id');
                    if ($(this).hasClass('IRDownload')) {
                        // Do nothing
                    } else {
                        // Show news
                        window.open('newsDisclaimer.aspx?solutionID=2284&customerKey=ScandinavianTobacco&storyid=' + storyID);
                        //window.open('http://ir.euroinvestor.com/Tools/newsArticleHTML.aspx?solutionID=2284&customerKey=ScandinavianTobacco&storyid=' + storyID);
                    }
                });
                toolSet = true;
            }
        }
    }

    $(function () {

        setInterval(function () {
            prepareTool();
        }, 150);

    });

</script>
