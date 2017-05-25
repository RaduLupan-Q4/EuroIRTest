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

    <h2>Display the Following News Categories</h2>
    <div class="news-filter-wrapper">
        <div class="news-filter-box">
            <div class="filter-row">
                <div class="checkbox checkboxFilter" id="allRNSnews">All News Types</div>
                {{{newsRNSFilters}}}
            </div>
        </div>
        <div class="filter-wrapper">
            <div class="search-filter-wrapper">
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
            </div>
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

    <div class="IRNewsTool table-look horizontal responsive">
        
        <div class="HeaderGroup">
            <div class="Header title">{{headers/t_title}}</div>
            <div class="Header date">{{headers/t_date}}</div>
            <div class="Header download">{{headers/t_download}}</div>
        </div>

        {{#each data}}

        <div class="DataGroup" id="{{storyID}}">
            <div class="Data title">{{headline}}</div>
            <div class="Data date" id="{{showDateWithFormat timestamp 'YYYY-MM-DD'}}">{{showDate timestamp}}</div>
            <div class="Data download">
                {{showFileSize pdfFileSize}}
                {{{showRNSPDF pdfUrl}}}
            </div>
        </div>

        {{/each}}

        <div class="IRNewsPagination"></div>

    </div>
    
</script>

<%= site.newFooter("IRNews") %>