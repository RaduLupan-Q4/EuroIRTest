<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
   
    if (!string.IsNullOrEmpty(Request.QueryString["ignoreCustomCSS"]))
    {
        if (Request.QueryString["ignoreCustomCSS"].ToString() == "true")
        {
            site.appendCustomCSSURL = "";
        }
    }    
%>

<%= site.newHeader("IRNewsArticle") %>

<script type="text/javascript">
    var activeModules = ['IRNewsArticle'];
</script> 

<div class="IRToolArticleLogo"></div>
<div class="IRArticleModule"></div>

<%= site.newFooter("IRNewsArticle") %>

<script id="IRArticleTemplate" type="text/x-handlebars-template">
    
    <div class="IRToolArticle"></div>
    
</script>


<link rel="stylesheet" href="newsArticle.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("newsArticle.css")).Ticks.ToString()%>" />