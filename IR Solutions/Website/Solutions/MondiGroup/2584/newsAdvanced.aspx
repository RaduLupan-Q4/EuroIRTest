<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();   
%>
<%= site.newHeader("IRNews") %>

<script type="text/javascript">
    var activeModules = ['IRNews'];
</script>

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="text/javascript">
        var activeModules = ['IRNews'];
    </script>


    <div class="IRNewsModule"></div>

    <script id="IRNewsTemplate" type="text/x-handlebars-template">
        <h2>Regulatory News</h2>
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
                        <span class="textArea">{{headers/t_search_for}}:</span>
                        <input class="searchText" value="" type="text" placeholder='{{headers/t_search_here}}'" onblur="this.placeholder='{{headers/t_search_here}}' " />

                </div>
                <div class="filterRow">
                    <span class="textArea">{{headers/t_from}}:</span>
                    <select id="select-filter">
                        <option value="Title Only" selected="selected ">{{headers/t_title_only}}</option>
                        <option value="Title and Content ">{{headers/t_title_and_content}}</option>
                    </select>
                </div>
            </div>
            <div class="datepicker">
                <div class="search-from">
                    <label for="from-datepicker" class="textArea input-label from-label ">{{headers/t_search_from}}:</label>
                    <div class="select-date">
                        {{{newsSelectFromMonth 'MMMM'}}}
                        {{{newsSelectFromYear}}}
                    </div>
                </div>
                <div class="search-to">
                    <label for="to-datepicker" class="textArea input-label to-label ">{{headers/t_to}}: </label>
                    <div class="select-date">
                        {{{newsSelectToMonth 'MMMM'}}}
                        {{{newsSelectToYear}}}
                    </div>
                </div>
            </div>
            <div class="submitButton ">
                <input type="button" class="newsSubmit " value="{{headers/t_search}}"/>
            </div>

        </div>
    </div>
    <div style="clear: both; "></div>

    <div>


        <div class="IRNewsTool table-look horizontal responsive ">
            <div class="IRHeaderGroup ">
                <div class="IRHeader IRDate">{{headers/t_date}}</div>
                <div class="IRHeader IRTitle column-first ">{{headers/t_title}}</div>

                <div class="IRHeader file-type column-last ">{{headers/t_file_type_size}}</div>
            </div>

            {{#each data}}
                <div class="IRDataGroup" id="{{storyID}}">
                    <div class="IRData IRDate column-first" id="{{showDateWithFormat timestamp 'YYYY-MMM-DD HH:mm'}}">{{showDateWithFormat timestamp 'DD MMM YYYY HH:mm'}}</div>

                        <div class="IRData IRTitle" id="{{ShowCategoryShort categories}}">{{headline}}</div>
                    <div class="IRData IRDownload ">
            <div class="IRDownloadPDF ">
                {{{showRNSPDF pdfUrl}}} &nbsp <span class="downloadAlign "><a target="_blank " class="downloadPDF " href='{{pdfUrl}}'>{{showFileSize pdfFileSize}}</a></span>
            </div>
            <div class="IRDownloadKB ">

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

<link rel="stylesheet" href="../ir.clientMaster.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("../ir.clientMaster.css")).Ticks.ToString()%>" />

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


    function newsFilter(searchText) {
        debugStep("newsFilter");
        var searchedText = "";
        if (typeof (searchText) == 'string') {
            searchedText = searchText.toLowerCase();
        }

        var searchFromYear = $('.search-from #from-year').val();
        var searchFromMonth = $('.search-from #from-month').val();

        var searchToYear = $('.search-to #to-year').val();
        var searchToMonth = $('.search-to #to-month').val();

        debugStep("searchFromYear: " + searchFromYear);
        debugStep("searchFromMonth: " + searchFromMonth);
        debugStep("searchToYear: " + searchToYear);
        debugStep("searchToMonth: " + searchToMonth);

        var searchFilters = "";

        if (typeof ($('.selectFilter').val()) == 'undefined') {
            // div checkboxes boxes
            $('div.checkbox.checkboxFilter.checked').each(function () {
                searchFilters += ";" + $(this).attr('id');
            });
        } else {
            // select drop down

            searchFilters += $('.selectFilter').val();
        }

        searchFilters = newsAddDistinctFilter(searchFilters);

        if (searchFilters == '') {
            searchFilters = ';allRNSnews';
        }

        //
        //  Traverse each news entry (Timestamp, Headline, Download)
        //
        //var searchFromDate = new Date(searchFromYear, searchFromMonth, 1);
        //var searchToDate = new Date(searchToYear, searchToMonth);

        var searchFromDate = new Date(moment((parseInt(searchFromMonth) + 1) + ' ' + searchFromYear, 'MM YYYY').format('MM/DD/YYYY'));
        var searchToDate = new Date(moment((parseInt(searchToMonth) + 1) + " " + searchToYear, 'MM YYYY').add(1, 'months').format('MM/DD/YYYY'));

        // searchToDate.setMonth(searchToDate.getMonth() + 1);
        if (typeof ($('div.IRNewsTool .IRHeaderGroup .IRHeader').html()) != "undefined") {
            //
            //  News in a Div structure
            //
            $('div.IRDataGroup').each(function () {
                var hideThis = false;
                var newsDateArr = $(this).find('.IRDate').attr('id').split('-');
                var newsYear = newsDateArr[0];
                var newsMonth = newsDateArr[1];

                var newsFilters = $(this).find('.IRTitle').attr('id');
                var newsHeadlie = $(this).find('.IRTitle').html().toLowerCase();

                //Fix for IE and firefox since date was NaN before
                var dateFound = $(this).find('.IRDate').attr('id').split('-');
                var yearFound = dateFound[0];
                var monthFound = getMonthFromString(dateFound[1]);
                var newsDate = new Date(moment((parseInt(monthFound)) + " " + yearFound, 'MM YYYY').format('MM/DD/YYYY'));

                //
                //  Category filters
                //

                if (searchFilters.indexOf('allRNSnews') == -1) {
                    var storyID = $(this).attr('id');

                    var generalIsChecked = 0;
                    $('.checkboxFilter.checked').each(function () {
                        if ($(this).html().indexOf('General') !== -1) {
                            generalIsChecked = 1;
                        }
                    });

                    var generalCategyStoryid = '13401796;13341236;13333757;13248812;13233692;13406078;13406084;13406088;13406113;13406156;13406177;13406192;13406196;13406221;13406248;13406251;13406279;13406316;13406317;13406329;13406331;13406348;13406356;13406389;13405427;13406392;13405430;13406396;13405434;13406429;13405467;13406442;13405480;13406447;13405485;13406452;13405490;13406456;13405494;13406460;13405498;13406462;13405500;13406481;13405519';
                    if (searchFilters.split(';').indexOf(newsFilters) >= 0 || ((generalCategyStoryid.split(';').indexOf(storyID) >= 0) && generalIsChecked == 1)) {

                        hideThis = false;
                        $(this).removeClass('hide');
                    }
                    else {
                        $(this).addClass('hide');
                        hideThis = true;
                    }
                }

                //
                //  Periond filters
                //
                if (newsDate < searchFromDate) {

                    debugStep("newsYear < searchFromYear: " + yearFound < searchFromYear);
                    $(this).addClass('hide');
                    hideThis = true;
                }
                if (newsDate >= searchToDate) {
                    $(this).addClass('hide');
                    hideThis = true;
                }



                //
                //  Headline filter
                //
                if (searchedText.length > 0) {
                    if (newsHeadlie.indexOf(searchedText) == -1) {
                        $(this).addClass('hide');
                        hideThis = true;
                    }
                }

            });
        }
        if (typeof ($('table.IRNewsTool tr th.Header').html()) != "undefined") {
            //
            //  News in a Table structure
            //
            $('tr.Data').each(function () {
                var hideThis = false;
                var dateFound = $(this).find('.date').attr('id').split('-');

                var newsFilters = $(this).find('.title').attr('id');
                var newsHeadlie = $(this).find('.title').html().toLowerCase();

                var yearFound = dateFound[0];
                var monthFound = getMonthFromString(dateFound[1]);

                var newsDate = new Date(moment((parseInt(monthFound)) + " " + yearFound, 'MM YYYY').format('MM/DD/YYYY'));

                //
                //  Category filters
                //
                if (searchFilters.indexOf('allRNSnews') == -1) {
                    if (searchFilters.indexOf(newsFilters) < 1) {
                        $(this).addClass('hide');
                        hideThis = true;
                    }
                }

                //
                //  Periond filters
                //
                if (newsDate < searchFromDate) {
                    $(this).addClass('hide');
                    hideThis = true;
                }
                if (newsDate >= searchToDate) {
                    $(this).addClass('hide');
                    hideThis = true;
                }

                //
                //  Headline filter
                //
                if (newsHeadlie.indexOf(searchedText) == -1) {
                    $(this).addClass('hide');
                    hideThis = true;
                }
            });

        }

        setNewsPagination();

    }
</script>


<%--<script type="text/javascript">



    var IRNewsPaginationApplied = false;
    var IRNewsPaginationActivePage = 1;

    function applyIRNewsPagination() {

        if (IRNewsPaginationApplied) {

        } else {

            if (typeof ($('.IRNewsPagination').html()) != 'undefined') {

                globalNewsPagesInTotal = Math.ceil(globalAmountOfNewsItems / clientStyle.amountOfNewsPerPage);

                

                var maxIRPaginationPagesToShow = 10;

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


<%--<script type="text/javascript">



    var IRNewsPaginationApplied = false;
    var IRNewsPaginationActivePage = 1;

    function applyIRNewsPagination() {

        if (IRNewsPaginationApplied) {

        } else {

            if (typeof ($('.IRNewsPagination').html()) != 'undefined') {

                globalNewsPagesInTotal = Math.ceil(globalAmountOfNewsItems / clientStyle.amountOfNewsPerPage);

                

                var maxIRPaginationPagesToShow = 10;

                var paginationTmp = "";
                paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPagePrev" style="display:inline-block; visibility:hidden;" id="prev">&nbsp;</div>';

                for (var i = 1; i < globalNewsPagesInTotal; i++) {
                    var cssStyle = "";
                    if (i > maxIRPaginationPagesToShow) {

                        cssStyle = "display:none;";
                    }
                    paginationTmp += '<div style="display:inline-block; ' + cssStyle + '" class="IRNewsPaginationPageNew IRNewsPaginationPageNumber' + i + 'New" id="' + i + '">' + i + '</div>';
                }
                paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPageNext" id="next" style="display:inline-block;">&nbsp;</div>';

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
                debugger;
                IRNewsPaginationApplied = true;
                //console.log('applyIRNewsPagination function applied2');
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
        var minPage = (currentPage - 10);
        var maxPage = (currentPage + 10);

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
                    paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPagePrev" style="visibility:hidden; display: inline-block;" id="prev">&nbsp;</div>';
                    
                    for (var i = 1; i <= globalNewsPagesInTotal; i++) {
                        var cssStyle = "";
                        if (i > maxIRPaginationPagesToShow) {
                            cssStyle = "display:none;";
                        }
                        paginationTmp += '<div style="display:inline-block; ' + cssStyle + '" class="IRNewsPaginationPageNew IRNewsPaginationPageNumber' + i + 'New" id="' + i + '">' + i + '</div>';
                    }
                    paginationTmp += '<div style="display:inline-block;" class="IRNewsPaginationPageNew IRNewsPaginationPageNext" id="next">&nbsp;</div>';

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


</script>--%>


