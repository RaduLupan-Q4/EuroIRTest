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
    <button class="backBtn">Back</button>
    <div class="IRToolArticleLogo"></div>
    <div class="IRArticleModule"></div>


    <script id="IRNewsArticleTemplate" type="text/x-handlebars-template">
        {{{showNewsArticleLogo}}}
    <br />
        <!--        {{articleData/headline}} -->
        <div class="articleHead">{{articleData/headline}}</div>


        <br />
        <div class="IRData IRDate column-first" id="{{showDateWithFormat articleData/timestamp 'YYYY-MMM-DD'}}">{{showDateWithFormat articleData/timestamp 'DD.MMMM YYYY' }} <span>at</span> {{showDateWithFormat articleData/timestamp 'HH:mm:ss'}} <span>CET</span></div>
        <div class="articleMain">{{{showNewsArticle articleData}}}</div>
        <!--
        <div class="attachmentList">
            <h2 class="newsArticleHeader">Attachments</h2>
            {{#each attachments}}   
    
        <a href="{{url}}" target="_blank"><span class="attachmentIcon"></span>{{fileName}}</a>

            {{/each}}  
        </div>
-->
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



    <%= site.newFooter("IRNewsArticle") %>
</div>
<script type="text/javascript">
    $(document).ready(function () {

        var listen = setTimeout(function () {
            $.each($('a'), function () {

                if ($(this).attr('href').indexOf('mailto') === 0) {
                    $('a').attr('target', "");
                    clearInterval(listen);
                }
            });
            

        },500);


        $('.backBtn').click(function () {
            window.open('news.aspx', '_self');
            return false;
        });
    });

</script>
<link rel="stylesheet" href="ir.client.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.client.css")).Ticks.ToString()%>" />
