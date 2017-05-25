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



	<%= site.newFooter("IRNewsArticle") %>
</div>
<script type="text/javascript">
	$(document).ready(function(){
		$('.backBtn').click(function () {
			<% string language = Request.QueryString["language"]; %>
			if ('<%= language %>' != '') {
				window.open('news.aspx?language=' + '<%= language %>' + '', '_self');
			} else {
				window.open('news.aspx', '_self');
			}
		return false;
	});
	});

	Handlebars.registerHelper('showNewsArticle', function (articleData) {

		var isHTML = true;
		if (articleData.content.indexOf("<html") == -1) {
			isHTML = false;
		}
		if (isHTML) {
			return articleData.content;
		} else {

			var css = '';
			var headline = '';

			if (typeof (articleData.categories[0]) != 'undefined') {
				if (articleData.categories[0].categoryType == 'NasdaqOMXCategoryName' || articleData.categories[0].categoryType == "GlobeNewswire") {
					cssStyle = '<style>h3 { font-family: Arial; font-size: 14pt; font-weight: bold; text-align: left; margin-top: 18px; }</style>';
					headline = articleData.headline;
					return cssStyle + "<h3>" + headline + "</h3>" + articleData.content + "";
				}
			}


			return "<pre style=\"width: 100%;font-family: Courier New;font-size: 14px;\">" + articleData.content + "</pre>";
		}

	});
</script>

<link rel="stylesheet" href="ir.newsArticle.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.newsArticle.css")).Ticks.ToString()%>" />
