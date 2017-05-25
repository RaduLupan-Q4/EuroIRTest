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
            <a href="{{htmlUrl}}" class="dataLink" target="_blank">
                <div class="Data" id="{{storyID}}">
                    <div class="date column-first" id="{{showDateWithFormat timestamp 'YYYY-MMMM-DD'}}">
                        {{showDateWithFormat
                        timestamp 'DD MMMM YYYY'}}
                    </div>
                    <div class="title column-first" id="{{ShowCategoryShort categories}}">{{headline}}</div>
                </div>
            </a>
            {{/each}}
        </div>
    </div>
</script>
<div style="display: none;"><%= site.newFooter("IRNewsHeadline") %></div>

