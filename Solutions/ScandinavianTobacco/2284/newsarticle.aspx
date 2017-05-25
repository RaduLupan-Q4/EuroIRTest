<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRNewsArticle") %>

<script type="text/javascript">
    var activeModules = ['IRNewsArticle'];
</script>
<div class="IRNewsArticle newsBorder">
    <button class="backBtn">Back</button>
    <div class="IRToolArticleLogo"></div>
    <div class="IRArticleModule"></div>

</div>

<link rel="stylesheet" type="text/css" media="screen" href="ir.newsArticle2.css" />
<style>
    .outerBorder {
        padding: 10px;
        /*border: 1px solid;*/
    }
	.IRToolArticleLogo {
		margin-bottom:30px;
	}
	.backBtn {
	display:none;
	}
	.IRArticleModule {
		border:1px solid #CCC;
		padding:20px;
	}
</style>



<%= site.newFooter("IRNewsArticle") %>

<script id="IRNewsArticleTemplate" type="text/x-handlebars-template">
    
    <!--<button class="backBtn">{{headers/t_back}}</button>-->

    <div class="outerBorder">

        {{{showNewsArticleLogo}}}
        {{{articleData.content}}}
        {{{showNewsArticleAttachments articleData}}}

    </div>

</script>

<script type="text/javascript">
    $(function () {

        var toolSet = false;
        function prepareTool() {
            if (!toolSet) {

                if (typeof ($('button.backBtn').html()) != 'undefined') {

                    $('button.backBtn').click(function () {
                        window.history.back();
                    });

                    toolSet = true;
                }

            }
			
        }



        setInterval(function () {
            prepareTool();
        }, 100);
        setTimeout(function () {
			if($('.attachmentList').find('a').length==0)
			{
				$('h2').css('display','none');
			}
        }, 500);

    });
</script>

<link rel="stylesheet" href="ir.newsArticle.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.newsArticle.css")).Ticks.ToString()%>" />