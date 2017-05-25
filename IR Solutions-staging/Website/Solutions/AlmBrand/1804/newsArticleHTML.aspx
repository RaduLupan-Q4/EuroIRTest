<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>

<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRToolsNewsArticleHTML") %>

<script type="text/javascript">
    var activeModules = ['IRToolsNewsArticleHTML'];
</script>

<div class="IRToolArticleLogo"></div>
<div class="IRArticleModule"></div>

<%= site.newFooter("IRToolsNewsArticleHTML") %>
<link rel="stylesheet" href="ir.newsArticle2.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.newsArticle2.css")).Ticks.ToString()%>" />

<script id="IRArticleTemplate" type="text/x-handlebars-template">
    
    <div class="IRToolArticle"></div>
    
</script>