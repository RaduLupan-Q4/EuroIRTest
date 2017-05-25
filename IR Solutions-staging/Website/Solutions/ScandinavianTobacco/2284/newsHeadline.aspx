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
                    <div class="testtest" id="{{storyID}}"></div><div class="Data date column-first" id="{{showDateWithFormat timestamp 'YYYY-MMM-DD'}}">{{showDateWithFormat timestamp 'MMM DD, YYYY'}}</div>
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

	var storyIDsWithDiclaimer=[13290974,13298309,13305816,13306571,13306596,13298331,13298308,13305822,13306570,13306595];//asd
    var toolSet = false;
    function prepareTool() {
        if (toolSet) {
        } else {

            if (typeof ($('.IRNewsHeadlineModule div.Data').html()) != "undefined") {
                //$(".IRNewsModule div.IRData").off("click", "**");
                $(".IRNewsHeadlineModule div.Data").unbind();
                $('.IRNewsHeadlineModule div.Data').on('click', function (obj) {


                    var storyID = $(this).parent().attr('id');
                    if (typeof (storyID) == 'undefined') {
                        storyID = $(this).find('.testtest').attr('id');
                    }
                    if ($(this).hasClass('IRDownload')) {
                        // Do nothing
                    } else {
                        // Show news
                        var existsInArray=false;;
						for(counter=0;counter<storyIDsWithDiclaimer.length;counter++)
						{
							if(storyID==storyIDsWithDiclaimer[counter])
							{
								existsInArray=true;
							}
						}
						if(existsInArray){
							window.open('newsDisclaimer.aspx?solutionID=2284&customerKey=ScandinavianTobacco&storyid=' + storyID, '','width=900, height=800,scrollbars=yes');
						} else {
							window.open('newsArticle.aspx?storyid=' + storyID+ '&solutionID=2284&customerKey=ScandinavianTobacco', '','width=900, height=800,scrollbars=yes');
						}
                        //window.open('http://ir.euroinvestor.com/Tools/newsArticleHTML.aspx?solutionID=2284&customerKey=ScandinavianTobacco&storyid=' + storyID);
                    }
                });
                toolSet = true;
				var counter=0;
				$('div.headline').each(function(){
					if(counter>1) {
						$(this).css('display','none');
					}
					counter++;
				});
            }
        }
    }

    $(function () {

        setInterval(function () {
            prepareTool();
        }, 150);

    });

</script>
