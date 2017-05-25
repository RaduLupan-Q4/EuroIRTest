<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
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