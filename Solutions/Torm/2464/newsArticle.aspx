<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//cloud.typography.com/7594474/696708/css/fonts.css"" type=""text/css"" />";
%>

<%= site.newHeader("IRNewsArticle") %>

<script type="text/javascript">
    var activeModules = ['IRNewsArticle'];
</script>

<div class="IRToolArticleLogo"></div>
<div class="IRArticleModule"></div>


<script id="IRNewsArticleTemplate" type="text/x-handlebars-template">
    {{{showNewsArticleLogo}}}
    <br />

    {{article/name}}
    <br />

    {{{showNewsArticle articleData}}}
    <br />
    <div class="attachmentList">
        <h2 class="newsArticleHeader">Attachments</h2>
        {{#each attachments}}   
    
        <a href="{{url}}" target="_blank"><span class="attachmentIcon"></span>{{fileName}}</a>

        {{/each}}  
    </div>
</script>

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
<script type="text/javascript">
    var hasGoneToBottom = false;
    setInterval(function () {
        if (hasGoneToBottom == false) {
            if ($('.attachmentList').length > 0) {
                $("html, body").animate({ scrollTop: $(document).height() }, 200);
                hasGoneToBottom = true;
            }
        }
    }, 200);

</script>
<%= site.newFooter("IRNewsArticle") %>

<link rel="stylesheet" href="ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.client.css")).Ticks.ToString()%>" />
