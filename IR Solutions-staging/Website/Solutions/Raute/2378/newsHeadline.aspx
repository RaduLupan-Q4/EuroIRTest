<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""https://fonts.googleapis.com/css?family=Roboto:400,700,300"" type=""text/css"" />";
%>
<%= site.newHeader("IRNewsHeadline") %>
<% string language = "en";
    language = Request["language"];

    if (language != "fi")
    {
        language = "en";
    }
%>


<script type="text/javascript">
    var activeModules = ['IRNewsHeadline'];
</script>

<div class="IRNewsHeadlineModule"></div>

<script id="IRNewsHeadlineTemplate" type="text/x-handlebars-template">
    <div>
        <div class="IRNewsHeadlineTool table-look horizontal responsive">
            
                <div class="Data" id="{{data.0/storyID}}">
                    <div class="NewsHeadline news">{{headers/t_news}}</div>
                    <div class="Data title column-first" id="{{ShowCategoryShort data.0/categories}}">{{data.0/headline}}</div>
                    <div class="miniquote-iframe">
                        <iframe src="miniquote.aspx?language=<%=language %>"></iframe>
                    </div>
                </div>
            
        </div>
    </div>
</script>
<div style="display: none;"><%= site.newFooter("IRNewsHeadline") %></div>
