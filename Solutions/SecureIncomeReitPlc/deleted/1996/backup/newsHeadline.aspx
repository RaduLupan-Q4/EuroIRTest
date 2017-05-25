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
        <div class="IRNewsHeadlineTool table-look horizontal responsive"> 
                {{#each data}}
                <div class="Data" id="{{storyID}}">
                    <div class="Data title column-first" id="{{ShowCategoryShort categories}}">{{headline}}</div>
                    <div class="Data date column-first" id="{{showDateWithFormat timestamp 'YYYY-MMM-DD'}}">{{showDate timestamp}}</div>
                </div>
                {{/each}}
        </div>
    </div>
</script>

<%= site.newFooter("IRNewsHeadline") %>