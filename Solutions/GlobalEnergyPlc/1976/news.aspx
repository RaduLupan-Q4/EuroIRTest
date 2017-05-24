<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    //site.appendCustomCSSURL = "http://www.investorcom.co.uk/SharePriceChart/Gfinity.css";
    //if (!string.IsNullOrEmpty(Request.QueryString["ignoreCustomCSS"]))
    //{
    //    if (Request.QueryString["ignoreCustomCSS"].ToString() == "true")
    //    {
    //        site.appendCustomCSSURL = "";
    //    }
    //}    
%>
<%= site.newHeader("IRNews") %>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script type="text/javascript">
    var activeModules = ['IRNews'];
    //setInterval(function () { document.getElementsByTagName('div')[1].style.display = 'none'; document.getElementsByTagName('h2')[0].style.display = 'none'; }, 200);//tempToBeRemoved
</script>
<div class="IRNewsModule"></div>

<script id="IRNewsTemplate" type="text/x-handlebars-template">
  <%--  <span class="part1">Regulatory News</span><br/>
    <br />--%>
    <div class="IRNewsText">Information on this page is updated via a feed from the London Stock Exchange's Regulatory News Service. To retrieve the full news item please click on the headline. News will open in a new tab.</div>
    <br />
    <div class="news-filter-wrapper">
        <div class="news-filter-box">
            <div class="filter-row">
            <br/>
                <div class="checkbox checkboxFilter" id="allRNSnews">All News Types</div>
                {{{newsRNSFilters}}}
            </div>
        </div>
        <div class="filter-wrapper" id="reloadID">
            <div class="search-filter-wrapper">
                <div class="search-for-box">
                    <div class="textArea" style="width: 200px;">{{headers/t_searchFor}}...</div>
                    <%--<br />--%>
                    <input class="searchText" value="" type="text" placeholder="Enter Keyword" onfocus="this.placeholder = ''" onblur="this.placeholder = ''" />
                    <span class="textArea">in </span>
                    <select id="select-filter">
                        <option value="Title Only" selected="selected">{{headers/t_titleOnly}}</option>
                        <option value="Title and Content">{{headers/t_titleAndContent}}</option>
                    </select>
                </div>
            </div>
            <br />
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
                <br/>
            </div>
            <div>
                <div class="submitButton" style="float: left;">
                    <input type="submit" class="newsSubmit" value="{{headers/t_submit}}" />
                </div>
                <div id="resetButton" onclick="resetFilters()" class="resetButton" style="float: left; margin: 10px;">
                    <input type="submit" class="newsReset" value="Reset" />
                </div>
            </div>


        </div>
    </div>
    <div style="clear: both;"></div>


    <div class="IRNewsTableTopper">
        <div id="topPagination" class="IRNewsPaginationNew"></div>
    </div>
    <br />
    <br />
    <h3>Search Results</h3>
    <div>
        <table class="IRNewsTool table-look horizontal responsive">
            <thead>
                <tr class="DataHeader">
                    <th class="Header column-first date">{{headers/t_date}}</th>
                    <th class="Header title">{{headers/t_title}}</th>
                    <th class="Header column-last download" id="headerDate">{{headers/t_download}}</th>
                </tr>
            </thead>
            <tbody>
                {{#each data}}
                <tr class="Data" id="{{storyID}}">
                    <td class="Data column-first date" id="{{showDateWithFormat timestamp 'YYYY-MM-DD'}}">{{showDate timestamp}}</td>
                    <td class="Data title" id="{{ShowCategoryShort categories}}">{{headline}}</td>
                    <td class="Data column-last download">{{showFileSize pdfFileSize}}

                            {{{showRNSPDF pdfUrl}}}

                    </td>
                </tr>
                {{/each}}
            </tbody>
        </table>
        <div class="IRNewsTableFooter" style="border-top: 1px solid #891112">
            <div id="footerPagination" class="IRNewsPaginationNew"></div>
        </div>
    </div>
   
</script>

<%= site.newFooter("IRNews") %>




<script>

    $(document).ready(function () {
        var pagesDone = false;
        //alert("outside");
        //setTimeout(function () {
        //alert(getGlobalNewsPagesInTotalNew());
        setInterval(function () {
            if (globalNewsPagesInTotal > 0 && !pagesDone) {
                //alert("inside");
                setNewsPaginationNew();
                pagesDone = true;

            }
        }, 100);

        //alert("pages done");

        //},500);
        //alert(getGlobalNewsPagesInTotalNew());
    });

</script>

