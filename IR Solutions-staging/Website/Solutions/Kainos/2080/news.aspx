<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700""/>";  
%>
<%= site.newHeader("IRNews") %>

<script type="text/javascript">
    var activeModules = ['IRNews'];
</script>

<div class="IRNewsModule"></div>

<script id="IRNewsTemplate" type="text/x-handlebars-template">
    <h2>Regulatory News</h2>
    <%-- <p>Information on this page is updated via a feed from the London Stock Exchange's Regulatory News Service. To retrieve the full story please click on the headline. Stories will open in a new tab.</p>--%>
    <div class="news-filter-wrapper">
        <%-- <div class="news-filter-box">
            <div class="filter-row">
                <div class="checkbox checkboxFilter" id="allRNSnews">All News Types</div>
                {{{newsRNSFilters}}}
            </div>
        </div>--%>
        <div class="filter-wrapper">
            <div class="search-filter-wrapper">
                <div class="search-for-box">
                    <span class="textArea">{{headers/t_searchFor}}:</span>
                    <input class="searchText" value="" type="text" placeholder="{{headers/t_searchHere}}" onfocus="this.placeholder = ''" onblur="this.placeholder = '{{headers/t_searchHere}}'" />
                </div>
                <div class="filterRow">
                    <span class="textArea">{{headers/t_from}}:</span>
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
                    <label for="to-datepicker" class="textArea input-label to-label">{{headers/t_to}}: </label>
                    <div class="select-date">
                        {{{newsSelectToMonth 'MMMM'}}}
                        {{{newsSelectToYear}}}
                    </div>
                </div>
            </div>
            <div class="submitButton">
                <input type="submit" class="newsSubmit" value="Search" />
            </div>

        </div>
    </div>
    <div style="clear: both;"></div>

    <div>


        <div class="IRNewsTool table-look horizontal responsive">
            <div class="IRHeaderGroup">
                <div class="IRHeader IRTitle">{{headers/t_title}}</div>
                <div class="IRHeader IRDate column-first">{{headers/t_date}}</div>
                <%--<th class="Header time">{{headers/t_time}}</th>--%>
                <%-- <th class="Header pagination"><div class="IRNewsPagination"></div></th>--%>
                <div class="IRHeader column-last file-type">File type</div>
            </div>

            {{#each data}}
                <div class="IRDataGroup" id="{{storyID}}">
                    <div class="IRData IRTitle" id="{{ShowCategoryShort categories}}">{{headline}}</div>
                    <div class="IRData IRDate column-first" id="{{showDateWithFormat timestamp 'YYYY-MMM-DD'}}">{{showDate timestamp}}</div>
                    <%-- <td class="Data time">{{showTime timestamp}}</td>--%>
                    <div class="IRData IRDownload">
            <div class="IRDownloadPDF">
                {{{showRNSPDF pdfUrl}}}
            </div>
            <div class="IRDownloadKB">
                <a target="_blank" class="downloadPDF" href='{{pdfUrl}}'>{{showFileSize pdfFileSize}}</a>
            </div>
        </div>
                </div>
            {{/each}}

        </div>
        <div style="clear: both;"></div>
        <div class="IRNewsTableFooter">
            <div class="IRNewsPagination"></div>
        </div>

    </div>

</script>

<%= site.newFooter("IRNews") %>