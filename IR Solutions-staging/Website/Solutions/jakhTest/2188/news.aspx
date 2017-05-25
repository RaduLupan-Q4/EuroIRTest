<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";

%>

<%= site.newHeader("IRNews") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script type="text/javascript">
    var activeModules = ['IRNews'];
</script>

<div class="IRNewsModule"></div>



<script id="IRNewsTemplate" type="text/x-handlebars-template">

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
        <input type="submit" class="newsSubmit" value="{{headers/t_submit}}" />
    </div>
    <input type="hidden" id="allfilters" checked="checked">
    <div class="IRNewsEntries"></div>

</script>

<script id="IRNewsEntriesTemplate" type="text/x-handlebars-template">

    <table class="IRNewsTool table-look horizontal responsive">
        <thead>
            <tr>
                <th class="Header column-first date">{{headers/t_date}}</th>
                <th class="Header title">{{headers/t_title}}</th>
                <%--<th class="Header data">Data</th>--%>
                <th class="Header download column-last">{{headers/t_download}}</th>
            </tr>
        </thead>
        <tbody>
            {{#each data}}
            <tr class="Data" id="{{storyID}}">
                <%--<td class="Data column-first date">{{showDate timestamp}}</td>--%>
                <td class="Data column-first date" id="{{showDateWithFormat timestamp 'YYYY-MM-DD'}}">{{showDate timestamp}}</td>
                <td class="Data title" id="{{ShowCategoryShort categories}}">{{headline }}</td>
                <%--<td class="Data data">{{categories/0/data}}</td>--%>
                <td class="Data download column-last ">{{{showRNSPDF pdfUrl}}}{{showFileSize pdfFileSize}}
                    
                </td>
            </tr>
            {{/each}}
        </tbody>
    </table>
    <div style="clear: both;"></div>
    <div class="IRNewsTableFooter">
        <div class="IRNewsPagination"></div>
    </div>

</script>
<%= site.newFooter("IRNews") %>