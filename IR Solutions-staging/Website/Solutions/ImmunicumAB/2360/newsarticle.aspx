<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRNewsArticle") %>

<script type="text/javascript">
    var activeModules = ['IRNewsArticle'];
</script>
<div class="IRNewsArticle" style="max-width: 610px;">
    
    <div class="IRToolArticleLogo"></div>
    <div class="IRArticleModule"></div>

</div>

<style>
    .outerBorder {
        padding: 10px;
        border: 1px solid;
    }
</style>

<%= site.newFooter("IRNewsArticle") %>

<script id="IRNewsArticleTemplate" type="text/x-handlebars-template">
    
    <button class="backBtn">{{headers/t_back}}</button>

    <div class="outerBorder">

        {{{showNewsArticleLogo}}}
        {{{showNewsArticle articleData}}}
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


    });
</script>

<link rel="stylesheet" href="ir.newsArticle.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.newsArticle.css")).Ticks.ToString()%>" />