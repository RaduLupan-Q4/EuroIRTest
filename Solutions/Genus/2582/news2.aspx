﻿<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();  
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fast.fonts.net/cssapi/c8776784-5d75-432d-ae59-d50b8bc58a15.css"" type=""text/css"" />"; 
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700"" type=""text/css"" />"; 
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Oswald"" type=""text/css"" />"; 
    
%>
<%= site.newHeader("IRNews") %>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="text/javascript">
        var activeModules = ['IRNews'];
    </script>


    <div class="IRNewsModule"></div>

    <script id="IRNewsTemplate" type="text/x-handlebars-template">
        <h1>Genus News</h1>
        <div class="news-filter-wrapper">
            <div class="filter-wrapper">
                <div class="search-filter-wrapper">
                    <div class="search-for-box">
                        <span class="textArea">{{headers/t_searchFor}}:</span>
                        <input class="searchText" value="" type="text" placeholder='Search here' " onblur="this.placeholder='{{headers/t_searchHere}}' "" />

                    </div>
                    <div class="filterRow">
                        <span class="textArea">{{headers/t_type}}:</span>
                        <select id="select-filter">
                            <option value="Title Only" selected="selected">{{headers/t_titleOnly}}</option> <option value="Title and Content">{{headers/t_titleAndContent}}</option>
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
                        <label for="to-datepicker" class="textArea input-label to-label">{{headers/t_searchTo}}: </label>
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

        <div>


            <div class="IRNewsTool table-look horizontal responsive">
                <div class="IRHeaderGroup">
                    <div class="IRHeader IRDate column-first">{{headers/t_date}}</div>
                    <div class="IRHeader IRTitle">{{headers/t_title}}</div>
                    <div class="IRHeader file-type column-last">File Type/Size</div>
                </div>


                {{#each data}}
                <div class="IRDataGroup" id="{{storyID}}">
                    <div class="IRData IRDate column-first" id="{{showDateWithFormat timestamp 'YYYY-MMMM-DD'}}">{{showDateWithFormat timestamp 'DD MMMM YYYY  HH:mm'}}</div>
                    <div class="IRData IRTitle" id="{{ShowCategoryShort categories}}">{{headline}}</div>
                    <div class="IRData IRDownload">
                        <div class="IRDownloadPDF">
                            {{{showRNSPDF pdfUrl}}}
                        </div>
                        <div class="IRDownloadKB">
                            PDF <span>{{showFileSize pdfFileSize}}</span>
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


<link rel="stylesheet" href="news2.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("news2.css")).Ticks.ToString()%>" />

<%= site.newFooter("IRNews") %>

 <script type="text/javascript">
        var IRNewsPaginationApplied = false;
        var IRNewsPaginationActivePage = 1;

        function applyIRNewsPagination() {

            if (IRNewsPaginationApplied) {

            } else {

                if (typeof($('.IRNewsPagination').html()) != 'undefined') {

                    globalNewsPagesInTotal = Math.ceil(globalAmountOfNewsItems / clientStyle.amountOfNewsPerPage);

                    var maxIRPaginationPagesToShow = 5;

                    var paginationTmp = "";
                    paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPagePrev" style="visibility:hidden;" id="prev">&nbsp;</div>'; //Added space instead of text PREV to show arrow image.
                    for (var i = 1; i < globalNewsPagesInTotal; i++) {
                        var cssStyle = "";
                        if (i > maxIRPaginationPagesToShow) {
                            cssStyle = "display:none;";
                        }
                        paginationTmp += '<div style="' + cssStyle + '" class="IRNewsPaginationPageNew IRNewsPaginationPageNumber' + i + 'New" id="' + i + '">' + i + '</div>';
                    }
                    paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPageNext" id="next">&nbsp;</div>'; //Added space instead of text NEXT to show arrow image.

                    $('.IRNewsPagination').html(paginationTmp);
                    $('.IRNewsPaginationPageNew.IRNewsPaginationPageNumber1New').addClass('active');
                    $('.IRNewsPaginationPageNew').on('click', function() {

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
                    console.log('applyIRNewsPagination function applied');
                }
            }
        }

        $(function() {

            setInterval(function() {
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
            if (minPage >= globalNewsPagesInTotal - 5) {

                if (currentPage == globalNewsPagesInTotal - 1) {
                    $('.IRNewsPaginationPageNext').css('visibility', 'hidden');
                }
            }

            for (var i = 1; i < globalNewsPagesInTotal; i++) {
                if (i < minPage) {
                    $('.IRNewsPaginationPageNumber' + i + 'New').css('display', 'none');
                    $('.IRNewsPageNumber' + i).css('display', 'none');

                } else if (i > maxPage) {
                    $('.IRNewsPaginationPageNumber' + i + 'New').css('display', 'none');
                    $('.IRNewsPageNumber' + i).css('display', 'none');
                } else {
                    $('.IRNewsPaginationPageNumber' + i + 'New').css('display', 'block');
                    $('.IRNewsPageNumber' + i).css('display', 'block');
                }
            }

        }
    </script>