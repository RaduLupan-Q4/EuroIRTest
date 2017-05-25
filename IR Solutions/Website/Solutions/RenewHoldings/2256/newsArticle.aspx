<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""http://fast.fonts.net/cssapi/01e0bdf2-65ce-4a4a-9d7a-25eb0880e7fe.css"" type=""text/css"" />";    
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