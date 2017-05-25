<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSURL = "http://www.investorcom.co.uk/SharePriceChart/STMGroupPlc.css";
    if (!string.IsNullOrEmpty(Request.QueryString["ignoreCustomCSS"]))
    {
        if (Request.QueryString["ignoreCustomCSS"].ToString() == "true")
        {
            site.appendCustomCSSURL = "";
        }
    }    
%>
<%= site.newHeader("IRNews") %>

<script type="text/javascript">
    var activeModules = ['IRNews'];
	//setInterval(function(){document.getElementsByTagName('div')[1].style.display='none';document.getElementsByTagName('h2')[0].style.display='none'; },200);//tempToBeRemoved
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

    <div>

        <table class="IRNewsTool table-look horizontal responsive">
            <thead>
                <tr>
                    <th class="Header column-first date">{{headers/t_date}}</th>
                    <th class="Header title">{{headers/t_title}}</th>
                    <th class="Header column-last download">{{headers/t_download}}</th>
                </tr>
            </thead>
            <tbody>
                {{#each data}}
                <tr class="Data" id="{{storyID}}">
                    <td class="Data column-first date" id="{{showDateWithFormat timestamp 'YYYY-MM-DD'}}">{{showDate timestamp}}</td>
                    <td class="Data title" id="{{ShowCategoryShort categories}}">{{headline}}</td>
                    <td class="Data column-last download">
{{showFileSize pdfFileSize}}

                            {{{showRNSPDF pdfUrl}}}

                    </td>
                </tr>
                {{/each}}
            </tbody>
        </table>

        


        <%--<table class="IRNewsTool table-look vertical responsive">
            <thead>
                <tr>
                    <th class="Header column-first file">File</th>
                    <th class="Header column-last download">Download</th>
                </tr>
            </thead>
            <tbody>
                {{#each data}}
                    <tr class="Data download" id="{{storyID}}">
                        <td class="Data column-first date">{{headline}}<br />
                            <span>{{showDate timestamp}}</span>
                            <span class="Data column-last download">
{{showFileSize pdfFileSize}}</span>
                        </td>
                        <td class="Data column-last file">
    
                                <img src="{{getImage 'pdficonsmall'}}" style="background-repeat: no-repeat; background-position: center right; text-align: right; padding-left: 5px;" />
    
                        </td>
                    </tr>
                {{/each}}
            </tbody>
        </table>--%>

        <div class="IRNewsPagination"></div>

    </div>

</script>

<%= site.newFooter("IRNews") %>