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
                <div class="checkbox checkboxFilter" id="a">Acquisition</div>
                <div class="checkbox checkboxFilter" id="b">Annual Financial Report</div>
                <div class="checkbox checkboxFilter" id="c">AGM Statement</div>
                <div class="checkbox checkboxFilter" id="e">Re Agreement</div>
                <div class="checkbox checkboxFilter" id="f">Change of Adviser</div>
                <div class="checkbox checkboxFilter" id="g">Directorate Change</div>
                <div class="checkbox checkboxFilter" id="h">Disposal</div>
                <div class="checkbox checkboxFilter" id="j">Holding(s) in Company</div>
                <div class="checkbox checkboxFilter" id="k">Miscellaneous</div>
            </div>
        </div>
        <div class="filter-wrapper">
            <div class="search-filter-wrapper">
                <div class="search-for-box">
                    <span class="textArea">{{headers/t_searchFor}}:</span><input id="searchtext" value="" type="text" placeholder="{{headers/t_searchHere}}" onfocus="this.placeholder = ''" onblur="this.placeholder = '{{headers/t_searchHere}}'" />         
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
                        {{{selectFromMonth 'MMMM'}}}
                        {{{selectFromYear}}}
                    </div>
                </div>
                <div class="search-to">
                    <label for="to-datepicker" class="textArea input-label to-label">{{headers/t_searchTo}}: </label>
                    <div class="select-date">
                        {{{selectToMonth 'MMMM'}}}
                        {{{selectToYear}}}
                    </div>
                </div>
            </div>
            <div class="submitButton">
                <input type="submit" value="Submit" id="refreshiframe" />
            </div>
            <input type="hidden" id="allfilters" checked="checked" />
        </div>
    </div>
    <div style="clear: both;"></div>

    <table class="IRNewsTool table-look horizontal responsive">
        <thead> 
            <tr>
                <th class="Header column-first date">{{headers/t_date}}</th>
                <th class="Header title">{{headers/t_title}}</th>
                <th class="Header column-last download">Download</th>
            </tr>
        </thead>
        <tbody>
            <tr class="Data" id="13098789">
                <td class="Data column-first date">2 Feb 2015</td>
                <td class="Data title">Grant of Patent in South Korea</td>
                <td class="Data column-last download">
                    <a target="_blank" href="http://ir1.euroinvestor.com/IR/Files/RNSNews/9830118/EDENResearch_13098789.pdf">
                        (46.3KB) <img src="{{getImage 'pdficonsmall'}}" style="background-repeat: no-repeat; background-position: center right; text-align: right; padding-left: 5px;" />
                    </a>
                </td>
            </tr>
            <tr class="Data" id="13098789">
                <td class="Data column-first date">1 Jan 2015</td>
                <td class="Data title">Directorate Change</td>
                <td class="Data column-last download">
                    <a target="_blank" href="http://ir1.euroinvestor.com/IR/Files/RNSNews/9830118/EDENResearch_13086820.pdf">
                        (50.4KB)<img src="{{getImage 'pdficonsmall'}}" style="background-repeat: no-repeat; background-position: center right; text-align: right; padding-left: 5px;" />
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
    <table class="IRNewsTool table-look vertical responsive">
        <thead>
            <tr>
                <th class="Header column-first file">File</th>
                <th class="Header column-last download">Download</th>
            </tr>
        </thead>
        <tbody>
            <tr class="Data download" id="13098789">
                <td class="Data column-first date">Grant of Patent in South Korea<br />
                    <span>2 Feb 2015</span>
                    <span class="Data column-last download">
                        <a target="_blank" href="http://ir1.euroinvestor.com/IR/Files/RNSNews/9830118/EDENResearch_13098789.pdf">
                            (46.3KB)
                        </a>
                    </span>
                </td>
                <td class="Data column-last file">
                    <img src="{{getImage 'pdficonsmall'}}" style="background-repeat: no-repeat; background-position: center right; text-align: right; padding-left: 5px;" /></td>
            </tr>
            <tr>
                <td class="Data download" id="13098789">Directorate Change<br />
                    <span>1 Jan 2015</span>
                    <span>
                        <a target="_blank" href="http://ir1.euroinvestor.com/IR/Files/RNSNews/9830118/EDENResearch_13086820.pdf">
                            (50.4KB)
                        </a>
                    </span>
                </td>
                <td class="Data column-last file">
                    <img src="{{getImage 'pdficonsmall'}}" style="background-repeat: no-repeat; background-position: center right; text-align: right; padding-left: 5px;" /></td>
            </tr>
        </tbody>
    </table>
</script>


<%= site.newFooter("IRNews") %>

<%--<link type="text/css" rel="stylesheet" href="investorcom.css" />--%>

<script type="text/javascript">

    $(document).ready(function () {
        setTimeout(function () {
           
            //Hover effect
            $('td.Data').hover(function () {
                $(this).parent().find('td').addClass('DataHover');
            },

            function () {
                $(this).parent().find('td').removeClass('DataHover');
            });

            //Show placeholder in IE6-IE9
            $('input, textarea').placeholder();

            $('.IRNewsModule td.Data').click(function ()
            {
                var storyID = $(this).parent().attr('id');
                if ($(this).hasClass('download')) {
                    // Do nothing
                } else {
                    // Show news
                    window.open('newsArticle.aspx?storyid=' + storyID);
                }
            });
        }, 100);
    });
</script>