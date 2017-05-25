<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSURL = "http://www.investorcom.co.uk/SharePriceChart/JelfGroupPlc.css";
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
	//temp2ToBeRemoved
</script>

<div class="IRToolArticleLogo"></div>
<div class="IRArticleModule"></div>

<%= site.newFooter("IRNewsArticle") %>

<script id="IRArticleTemplate" type="text/x-handlebars-template">
    
    <div class="IRToolArticle"></div>
    
</script>