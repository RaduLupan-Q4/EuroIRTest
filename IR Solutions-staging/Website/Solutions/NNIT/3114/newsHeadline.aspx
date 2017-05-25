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
            {{#if_eq @index 1}}
                <div class="Data headline" id="{{storyID}}" onclick="openInNewWindow({{storyID}})">
                    <div class="testtest" id="{{storyID}}"></div>
                    <div class="Data date column-first" id="{{showDateWithFormat timestamp 'YYYY-MMM-DD'}}">{{showDateWithFormat timestamp 'MMM DD, YYYY'}}</div>
                    <div class="Data title column-first" id="{{ShowCategoryShort categories}}">{{headline}}</div>
                </div>
            {{/if_eq}}
            {{/each}}
        </div>
    </div>
</script>
<div class="newsHeadlineDisclaimer">
    <%= site.newFooter("IRNewsHeadline") %>
</div>

<script type="text/javascript">

    function openInNewWindow(storyID) {
        //window.open('newsArticleHTML.aspx?storyid=' + storyID + '&solutionID='+clientSolutionID+'&customerKey='+clientCustomerKeyRequired);
        window.open('http://ir.euroinvestor.com/Tools/newsArticleHTML.aspx?solutionID=' + clientSolutionID + '&customerKey=' + clientCustomerKeyRequired + '&storyID=' + storyID);
    }

    Handlebars.registerHelper('if_eq', function (v1, v2, options) {
        if (v1 <= v2) {
            return options.fn(this);
        }
        return options.inverse(this);
    });

    //var toolSet = false;
    //function prepareTool() {
    //    if (toolSet) {
    //    }
    //    else {

    //        if (typeof ($('.IRNewsHeadlineModule div.Data').html()) != "undefined") {
               
    //            toolSet = true;
    //            var counter = 0;
    //            $('div.headline').each(function () {
    //                if (counter > 1) {
    //                    $(this).css('display', 'none');
    //                }
    //                counter++;
    //            });
    //        }
    //    }
    //}

    //$(function () {

    //    setInterval(function () {
    //        prepareTool();
    //    }, 150);

    //});

</script>
