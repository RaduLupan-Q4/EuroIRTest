<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
	IRSite site = new IRSite();
	site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";

%>
<%= site.newHeader("IRCustomModule") %>
<link rel="stylesheet" href="includes/css/custom.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes/css/custom.css")).Ticks.ToString()%>" />

<script type="text/javascript">
	var activeModules = ["IRCustomModule"];
</script>


<div class="wrapper">
	<div class="tab-container">
		<div class="announcementsHeader">
			<span>Announcements & Reports</span>
			<div class="select-style" style="float: right">
				<select id="period" name="tab1" onchange="selectPeriod()">
				</select>
			</div>
		</div>

		<div class="tab-content">
			<!-- tab 1-->
			<div class="tab" id="tab-one">
				<div id="IRData"></div>

				<div class="IRNewsTableFooter">
					<div class="IRNewsPagination"></div>
				</div>
			</div>



			<script id="IRDataTemplate" type="text/x-handlebars-template">
				<div class="searchWrapper">{{{createSearchFields 'ASX::NZX'}}}</div>
				<div class="scrollbox">
					<table class="table-look">
						<thead>
							<tr>
								<th class="Header column-first categoryType titleInvestorPresentation">{{headers/t_announcement}}</th>
								<th class="Header categoryType titleCorporateAnnouncements">{{headers/t_release}}</th>
								<th class="Header categoryType titleReport">{{headers/t_report}}</th>
								<th class="Header categoryType titlePresentation">{{headers/t_presentation}}</th>
								<th class="Header categoryType titleMisc">Misc</th>
							</tr>
						</thead>
						<tbody>
							{{#each data}}
							
								<tr class="IRDataGroup <%--category_{{clean keyValueSet 'announcementtype'}}--%>" id="{{storyId}}">
									<td class="IRData column-first title headline">
										<div class="publishDateWrapper">
											<div class="monthText">{{convertToISOMonth publishTime}}</div>
											<div class="dayText">{{convertToISODay publishTime}}</div>
										</div>
										<span>{{headline}}</span>
										
										{{{getValueByKey keyValueSet 'category'}}}

									</td>
									<td class="IRData press"><a href="{{irfile keyValueSet 'release' storyId}}" target="_blank" class="pdf-link" /></td>
									<td class="IRData press"><a href="{{irfile keyValueSet 'report' storyId}}" target="_blank" class="pdf-link" /></td>
									<td class="IRData press"><a href="{{irfile keyValueSet 'investorpresentation' storyId}}" target="_blank" class="pdf-link" /></td>
									<td class="IRData press column-last"><a href="{{irfile keyValueSet 'misc' storyId}}" target="_blank" class="pdf-link" /></td>
								</tr>
							{{/each}} 
						</tbody>

					</table>
				</div>

				<table class="table-look vertical responsive-flip">

					<tr>
						<th class="Header-vertical title titleAnnouncements"></th>
						<td class="Header-vertical title">&nbsp;</td>
					</tr>
					{{#each data}}
							<tr id="{{storyId}}" class="IRDataGroup pointer">
								<td class="Data title-vertical">{{headline}}</td>
								<td class="Data title-vertical"><span class="plusIcon">&nbsp;</span></td>
							</tr>

					<tr class="IRDataGroup-vertical toggle{{storyId}}">
						<td class="Header-vertical titleCorporateAnnouncements">{{../headers/t_release}}</td>
						<td class="Data-vertical"><a href="{{irfile keyValueSet 'release' storyId}}" target="_blank" class="pdf-link" /></td>
					</tr>
					<tr class="IRDataGroup-vertical toggle{{storyId}}">
						<td class="Header-vertical titleReport">{{../headers/t_report}}</td>
						<td class="Data-vertical"><a href="{{irfile keyValueSet 'report' storyId}}" target="_blank" class="pdf-link" /></td>
					</tr>
					<tr class="IRDataGroup-vertical toggle{{storyId}}">
						<td class="Header-vertical titlePresentation">{{../headers/t_presentation}}</td>
						<td class="Data-vertical"><a href="{{irfile keyValueSet 'investorpresentation' storyId}}" target="_blank" class="pdf-link" /></td>
					</tr>
					<tr class="IRDataGroup-vertical toggle{{storyId}}">
						<td class="Header-vertical titleMisc">Misc</td>
						<td class="Data-vertical"><a href="{{irfile keyValueSet 'misc' storyId}}" class="pdf-link" target="_blank" /></td>
					</tr>
					{{/each}} 
						
				</table>
			</script>

		</div>
	</div>
</div>

<%= site.newFooter("IRCustomModule") %>
<script type="text/javascript" src="includes/js/custom.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("includes/js/custom.js")).Ticks.ToString()%>"></script>


<script type="text/javascript">
	Handlebars.registerHelper('convertToISODay', function (timestamp) {
	    return moment.utc(timestamp, "YYYY-MM-DD HH:mm:ss").local().format("DD");
	});
	
	 Handlebars.registerHelper('convertToISOMonth', function (timestamp) {
	     return moment.utc(timestamp, "YYYY-MM-DD HH:mm:ss").local().format("MMM");
	 });
</script>
