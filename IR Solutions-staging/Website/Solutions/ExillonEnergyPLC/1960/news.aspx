<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();   
%>
<%= site.newHeader("IRNews") %>

<script type="text/javascript">
    var activeModules = ['IRNews'];
</script>

<div class="IRNewsModule"></div>

<script id="IRNewsTemplate" type="text/x-handlebars-template">

    <div class="news-filter-wrapper">
        <div class="news-filter-box">
            <div class="filter-row">
                <div class="checkbox checkboxFilter" id="allRNSnews">All News Types</div>
                {{{newsRNSFilters}}}
            </div>
        </div>
        <div class="filter-wrapper">
            <%--<div class="search-filter-wrapper">
                <div class="search-for-box">
                    <span class="textArea">{{headers/t_searchFor}}:</span>
                    <input class="searchText" value="" type="text" placeholder="{{headers/t_searchHere}}" onfocus="this.placeholder = ''" onblur="this.placeholder = '{{headers/t_searchHere}}'" />
                </div>
                <div class="filterRow">
                    <span class="textArea">{{headers/t_searchIn}}:</span>
                    <select id="select-filter">
                        <option value="Title Only" selected="selected">{{headers/t_titleOnly}}</option>
                        <option value="Title and Content">{{headers/t_titleAndContent}}</option>
                    </select>
                </div>
            </div>--%>
            <div class="datepicker">
                <div class="search-from">
                    <label for="from-datepicker" class="textArea input-label from-label">{{headers/t_searchFrom}}:</label>
                    <div class="select-date">
                        {{{newsSelectFromMonth 'MMMM'}}}
                        {{{newsSelectFromYear}}}
                    </div>
                </div>
                <div class="search-to">
                    <label for="to-datepicker" class="textArea input-label to-label">{{headers/t_searchTo}}: </label>
                    <div class="select-date">
                        {{{newsSelectToMonth 'MMMM'}}}
                        {{{newsSelectToYear}}}
                    </div>
                </div>
            </div>
            <div class="submitButton">
                <input type="submit" class="newsSubmit" value="{{headers/t_submit}}" />
            </div>
            
        </div>
    </div>
    <div style="clear: both;"></div>

    <div>

        <table class="IRNewsTool table-look horizontal responsive">
            <thead>
                <tr>
                    <th class="Header date column-first">{{headers/t_date}}</th>
                   <%-- <th class="Header time">{{headers/t_time}}</th>--%>
                    <th class="Header title">{{headers/t_title}}</th>
                    <%--<th class="Header pagination"><div class="IRNewsPagination"></div></th>--%>
                    <%--<th class="Header column-last download">{{headers/t_download}}</th>--%>
                </tr>
            </thead>
            <tbody>
                {{#each data}}
                <tr class="Data" id="{{storyID}}">
                    <td class="Data date column-first" id="{{showDateWithFormat timestamp 'YYYY-MMM-DD'}}">{{showDate timestamp}}</td>
                   <%-- <td class="Data time">{{showTime timestamp}}</td>--%>
                    <td class="Data title" id="{{ShowCategoryShort categories}}">{{headline}}</td>
                    <%--<td class="Data column-last download">
                    {{showFileSize pdfFileSize}}
                            {{{showRNSPDF pdfUrl}}}
                    </td>--%>
                </tr>
                {{/each}}
            </tbody>
        </table>
        <div class="IRNewsTableFooter">
            <div class="IRNewsPagination"></div>
        </div>

    </div>

</script>

<%= site.newFooter("IRNews") %>