<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRNewsArticle") %>

<script type="text/javascript">
    var activeModules = ['IRNewsArticle'];
</script>
<div class="newsBorder">
    

    <div class="IRToolArticleLogo"></div>
    <div class="IRArticleModule"></div>


    <script id="IRNewsArticleTemplate" type="text/x-handlebars-template">
        {{addTranslation headers/t_back}}

        {{{showNewsArticleLogo}}}
    <br />

        {{article/name}}
    <br />

        {{{showNewsArticle articleData}}}
    <br />
        <div class="attachmentList">
            <h2 class="newsArticleHeader">{{headers/t_attachments}}</h2>
            {{#each attachments}}   
    
        <a href="{{url}}" target="_blank"><span class="attachmentIcon"></span>{{fileName}}</a>

            {{/each}}  
        </div>

        
    </script>
    <button class="backBtn"></button>
    <%--<script id="IRArticleTemplate" type="text/x-handlebars-template">
    <div class="testing">{{ask}}</div>
    <div class="IRToolArticle"></div>

    <div class="NewsReadAttachmentsBox">
                <h2 class="headerAttachment">Select attachment to download</h2>
                {{#each attachments}}                                      
                                         <div class="attachment">{{fileName}}</div>
                {{/each}}  
    </div>

</script>--%>



    <%= site.newFooter("IRNewsArticle") %>
</div>
<script type="text/javascript">
    $(document).ready(function(){
        $('.backBtn').click(function () {
            window.open('news.aspx?language='+globalActiveLanguage, '_self');
		return false;
        });

        Handlebars.registerHelper('addTranslation', function (word) {
            $('.backBtn').text(word);
            return;
        });
});
</script>
<link rel="stylesheet" href="ir.newsArticle.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.newsArticle.css")).Ticks.ToString()%>" />
