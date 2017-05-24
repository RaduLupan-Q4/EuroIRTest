﻿<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();  
   site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:300,400,700"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700"" />";
%>
<%= site.newHeader("IRNews") %>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="text/javascript">
        var activeModules = ['IRNews'];
    </script>
<!--[if IE 9]>
    <style>
        .IRNewsModule .news-filter-wrapper select {
    background-image: none;}

    .IRNewsModule .news-filter-wrapper #from-month, .IRNewsModule .news-filter-wrapper #to-month, .IRNewsModule .news-filter-wrapper #select-filter,
    .IRNewsModule .news-filter-wrapper #from-year, .IRNewsModule .news-filter-wrapper #to-year {
        padding: 0px;
    }
    </style>
<![endif]-->

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
                        <span class="textArea">{{headers/t_searchFor}}:</span>
                        <input class="searchText" value="" type="text" placeholder='Search here' " onblur="this.placeholder='{{headers/t_searchHere}}' "" />

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
                            {{{newsSelectFromMonth 'MMMM'}}} {{{newsSelectFromYear}}}
                        </div>
                    </div>
                    <div class="search-to">
                        <label for="to-datepicker" class="textArea input-label to-label">{{headers/t_to}}: </label>
                        <div class="select-date">
                            {{{newsSelectToMonth 'MMMM'}}} {{{newsSelectToYear}}}
                        </div>
                        <div class="submitButton">
                            <input type="submit" class="newsSubmit" value="Submit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="clear: both;"></div>

        <div>

			<div class="IRNewsTool table-look horizontal responsive">
                <div class="IRHeaderGroup">
                    <div class="IRHeader IRDate column-first">{{headers/t_date}}</div>
                    <div class="IRHeader IRTitle ">{{headers/t_title}}</div>
                    <div class="IRHeader file-type column-last">File Type/Size</div>
                </div>


                {{#each data}}
                <div class="IRDataGroup" id="{{storyID}}">
                    <div class="IRData IRDate column-first" id="{{showDateWithFormat timestamp 'YYYY-MMM-DD'}}">{{showDateWithFormat timestamp 'DD MMM YYYY, HH:mm'}}</div>

                    <div class="IRData IRTitle" id="{{ShowCategoryShort categories}}">{{headline}}</div>

                    <div class="IRData IRDownload">
                        <div class="IRDownloadPDF">
                            {{{showRNSPDF pdfUrl}}}
                        </div>
                        <div class="IRDownloadKB">
                            PDF {{showFileSize pdfFileSize}}
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
               // console.log('applyIRNewsPagination function applied2');
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
    
    $(function () {
        setTimeout(function() {
            $('.newsSubmit').trigger('click');
          }, 400);       
    });


</script>



