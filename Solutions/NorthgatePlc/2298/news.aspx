<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    //site.appendCustomCSSURL = "http://www.investorcom.co.uk/SharePriceChart/EdenResearch.css";
    //if (!string.IsNullOrEmpty(Request.QueryString["ignoreCustomCSS"]))
    //{
    //    if (Request.QueryString["ignoreCustomCSS"].ToString() == "true")
    //    {
    //        site.appendCustomCSSURL = "";
    //    }
    //}    
%>
<%= site.newHeader("IRNews") %>

<script type="text/javascript">
    var activeModules = ['IRNews'];
    //setInterval(function(){document.getElementsByTagName('div')[1].style.display='none';document.getElementsByTagName('h2')[0].style.display='none'; },200);//tempToBeRemoved
</script>

<div class="IRNewsModule"></div>

<script id="IRNewsTemplate" type="text/x-handlebars-template">

    <strong>Information on this page is updated via a 20 minute delayed feed from the London Stock Exchange. To retrieve the full story please click on the headline: <br/><br/>
Select A Category </strong>
    <div class="news-filter-wrapper">
        <div class="news-filter-box">
            <div class="filter-row">
                <div class="checkbox checkboxFilter" id="allRNSnews">All News Types</div>
                {{{newsRNSFilters}}}
            </div>
        </div>
        <div class="filter-wrapper">
    <div class="datepicker">
                <div class="search-from">
                    <label for="from-datepicker" class="textArea input-label from-label">{{headers/t_from}}</label>
                    <div class="select-date">
                        {{{newsSelectFromMonth 'MMMM'}}}
                        {{{newsSelectFromYear}}}
                    </div>
                </div>
                <div class="search-to">
                    <label for="to-datepicker" class="textArea input-label to-label">{{headers/t_to}}</label>
                    <div class="select-date">
                        {{{newsSelectToMonth 'MMMM'}}}
                        {{{newsSelectToYear}}} 
                    </div>
                </div>
            </div>
            <div class="search-filter-wrapper">
                <div class="search-for-box">
                    <span class="textArea">Enter search word:</span>
                    <input class="searchText" value="" type="text" placeholder="{{headers/t_searchHere}}" onfocus="this.placeholder = ''" onblur="this.placeholder = '{{headers/t_searchHere}}'" />
    <div class="submitButton">
                <input type="submit" class="newsSubmit" value="Apply" />
            </div>            
    </div>
                <div class="filterRow">
                    <span class="textArea">{{headers/t_searchIn}}:</span>
                    <select id="select-filter">
                        <option value="Title Only">{{headers/t_titleOnly}}</option>
                        <option value="Title and Content" selected="selected">{{headers/t_titleAndContent}}</option>
                    </select>
                </div>
            </div>
            
            
            
        </div>
    </div>
    <div style="clear: both;"></div>

    <div class="newsTableWrapper">
        <table class="IRNewsTool table-look horizontal responsive">
            <thead>
                <tr>
                    <th class="Header column-first date">{{headers/t_date}}</th>
                    <th class="Header title">{{headers/t_title}}</th>
                    <%--<th class="Header column-last download">{{headers/t_download}}</th>--%>
                </tr>
            </thead>
            <tbody>
                {{#each data}}
                <tr class="Data" id="{{storyID}}">
                    <td class="Data column-first date" id="{{showDateWithFormat timestamp 'YYYY-MM-DD'}}">{{showDate timestamp}}</td>
                    <td class="Data title" id="{{ShowCategoryShort categories}}">{{headline}}</td>
                    <%--<td class="Data column-last download">
{{showFileSize pdfFileSize}}

                            {{{showRNSPDF pdfUrl}}}

                    </td>--%>
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


<script type="text/javascript">



    var IRNewsPaginationApplied = false;
    var IRNewsPaginationActivePage = 1;

    function applyIRNewsPagination() {

        if (IRNewsPaginationApplied) {

        } else {

            if (typeof ($('.IRNewsPagination').html()) != 'undefined') {

                globalNewsPagesInTotal = Math.ceil(globalAmountOfNewsItems / clientStyle.amountOfNewsPerPage);

                

                var maxIRPaginationPagesToShow = 5;

                var paginationTmp = "";
                paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPagePrev" style="display:inline-block; visibility:hidden;" id="prev">Prev</div>';

                for (var i = 1; i < globalNewsPagesInTotal; i++) {
                    var cssStyle = "";
                    if (i > maxIRPaginationPagesToShow) {

                        cssStyle = "display:none;";
                    }
                    paginationTmp += '<div style="display:inline-block; ' + cssStyle + '" class="IRNewsPaginationPageNew IRNewsPaginationPageNumber' + i + 'New" id="' + i + '">' + i + '</div>';
                }
                paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPageNext" id="next" style="display:inline-block;">Next</div>';

                $('.IRNewsPagination').html(paginationTmp);
                $('.IRNewsPaginationPageNew.IRNewsPaginationPageNumber1New').addClass('active');
                $('.IRNewsPaginationPageNew').on('click', function () {

                    var clickedPage = $(this).attr('id');

                    if (clickedPage == 'next') {
                        updateIRNewsPagination((parseInt(IRNewsPaginationActivePage) + parseInt(1)));
                    } else if (clickedPage == 'prev') {
                        updateIRNewsPagination((parseInt(IRNewsPaginationActivePage) - parseInt(1)));
                    } else {
                        updateIRNewsPagination(clickedPage);
                    }

                });

                IRNewsPaginationApplied = true;
                console.log('applyIRNewsPagination function applied2');
            }
        }
    }

    $(function () {

        setInterval(function () {
            applyIRNewsPagination();
        }, 200);

    });

    function updateIRNewsPagination(page) {

        IRNewsPaginationActivePage = page;

        setNewsActivePage(IRNewsPaginationActivePage);

        var currentPage = parseInt(page);
        var minPage = (currentPage - 2);
        var maxPage = (currentPage + 2);

        $('.IRNewsPaginationPageNew').removeClass('active');
        $('.IRNewsPaginationPageNew.IRNewsPaginationPageNumber' + currentPage + 'New').addClass('active');
        $('.IRNewsPageNumber').removeClass('active');
        $('.IRNewsPageNumber.IRNewsPageNumber' + currentPage).addClass('active');

        if (maxPage <= 5) {
            maxPage = 5;
        } else {
            $('.IRNewsPaginationPageNext').css('visibility', 'visible');
        }
        if (minPage >= globalNewsPagesInTotal - 5) {
            minPage = globalNewsPagesInTotal - 5;
        } else {
            $('.IRNewsPaginationPagePrev').css('visibility', 'visible');
        }

        if (maxPage <= 5) {
            if (currentPage == 1) {
                $('.IRNewsPaginationPagePrev').css('visibility', 'hidden');
            }
        }

        if (currentPage != 1) {
            $('.IRNewsPaginationPagePrev').css('visibility', 'visible');
        }
        if (currentPage != globalNewsPagesInTotal) {
            $('.IRNewsPaginationPageNext').css('visibility', 'visible');
        }
        if (minPage >= globalNewsPagesInTotal - 5) {

            if (currentPage == globalNewsPagesInTotal) {
                $('.IRNewsPaginationPageNext').css('visibility', 'hidden');
            }
        }

        for (var i = 1; i <= globalNewsPagesInTotal; i++) {
            if (i < minPage) {
                $('.IRNewsPaginationPageNumber' + i + 'New').css('display', 'none');
                $('.IRNewsPageNumber' + i).css('display', 'none');
            }
            else if (i > maxPage) {
                $('.IRNewsPaginationPageNumber' + i + 'New').css('display', 'none');
                $('.IRNewsPageNumber' + i).css('display', 'none');
            } else {
                $('.IRNewsPaginationPageNumber' + i + 'New').css('display', 'inline-block');
                $('.IRNewsPageNumber' + i).css('display', 'inline-block');
            }
        }
        //console.log('min: '+minPage +'   current: ' +currentPage+'    max: '+ maxPage);

    }

    var customXApplied = false;
    function prepareCustomX() {
        if (!customXApplied) {
            if (typeof ($('.IRNewsPagination').html()) != 'undefined') {

                //console.log('found: .IRNewsPagination');
                
                //run pagination on submit
                $('.newsSubmit').click(function () {
                    //console.log('clicked on newsSubmit button');
                   // console.log('IRNewsPaginationApplied: applied1');
                    
                    updateIRNewsPagination(1);

                    var maxIRPaginationPagesToShow = 5;

                    var paginationTmp = "";
                    paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPagePrev" style="visibility:hidden; display: inline-block;" id="prev">Prev</div>';
                    
                    for (var i = 1; i <= globalNewsPagesInTotal; i++) {
                        var cssStyle = "";
                        if (i > maxIRPaginationPagesToShow) {
                            cssStyle = "display:none;";
                        }
                        paginationTmp += '<div style="display:inline-block; ' + cssStyle + '" class="IRNewsPaginationPageNew IRNewsPaginationPageNumber' + i + 'New" id="' + i + '">' + i + '</div>';
                    }
                    paginationTmp += '<div style="display:inline-block;" class="IRNewsPaginationPageNew IRNewsPaginationPageNext" id="next">Next</div>';

                    $('.IRNewsPagination').html(paginationTmp);
                    $('.IRNewsPaginationPageNew.IRNewsPaginationPageNumber1New').addClass('active');
                    $('.IRNewsPaginationPageNew').on('click', function () {

                        var clickedPage = $(this).attr('id');

                        if (clickedPage == 'next') {
                            updateIRNewsPagination((parseInt(IRNewsPaginationActivePage) + parseInt(1)));
                        } else if (clickedPage == 'prev') {
                            updateIRNewsPagination((parseInt(IRNewsPaginationActivePage) - parseInt(1)));
                        } else {
                            updateIRNewsPagination(clickedPage);
                        }

                    });

                    IRNewsPaginationApplied = true;
                    

                    if ($('div[class*="page"]').length <= clientStyle.amountOfNewsPerPage) {
                        $('.IRNewsPaginationPagePrev').css('display', 'none !important');
                        $('.IRNewsPaginationPageNext').css('visibility', 'hidden');
                    }
                })

                customXApplied = true;
                
            }
        }
    }

    $(function () {
        setInterval(function () {
            prepareCustomX();
        }, 400);
    });


</script>