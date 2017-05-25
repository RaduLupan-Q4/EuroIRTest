<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRNewsHeadline") %>

<script type="text/javascript">
    var activeModules = ['IRNewsHeadline'];
</script>

<div class="IRNewsHeadlineModule"></div>

<script id="IRNewsHeadlineTemplate" type="text/x-handlebars-template">
    

    <div>
        <table class="IRNewsHeadlineTool table-look horizontal responsive">
            <thead>
            <tr>
                <th class="headlineTitle column-first">Date</th>
                <th class="headlineTitle">Title</th>
            </tr>
                </thead>
            <tbody>
            {{#each data}}
                <tr class="Data" id="{{storyID}}"  >
                    <td class="date column-first" id="{{showDateWithFormat timestamp 'YYYY-MMMM-DD'}}">{{showDateWithFormat timestamp 'DD MMMM YYYY HH:mm'}}</td>
                    <td class="title" id="{{ShowCategoryShort categories}}">{{headline}}</td>
                </tr>
            {{/each}}
                </tbody>
        </table>
    </div>
	
    <div>
        <div class="IRNewsHeadlineTool table-look horizontal responsive" style="display:none">
            {{#each data}}
                <div class="Data" id="{{storyID}}">
                    <div class="date column-first" id="{{showDateWithFormat timestamp 'YYYY-MMMM-DD'}}">{{showDateWithFormat timestamp 'DD MMMM YYYY HH:mm'}}</div>
                    <div class="title" id="{{ShowCategoryShort categories}}">{{headline}}</div>
                </div>
            {{/each}}
        </div>
    </div>
	

	<script type="text/javascript">
		$('.title').click(function(){
			window.open(getNewsArticlePath() + '?solutionID=' + getSolutionID() + '&customerKey=' + getCustomerKeyRequired() + '&storyID=' +$(this).parent().attr('id'));
		});
	
</script>
</script>

<link rel="stylesheet" href="newsHeadline.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("newsHeadline.css")).Ticks.ToString()%>" />

<div style="display: none;"><%= site.newFooter("IRNewsHeadline") %></div>
