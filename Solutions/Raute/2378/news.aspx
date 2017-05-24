﻿<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 

    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>
<%= site.newHeader("IRNews")
%>

<script type="text/javascript">
    var activeModules = ['IRNews'];

</script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
 

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
                <div class="search-filter-wrapper">
                    <div class="search-for-box">
                        <span class="textArea">{{headers/t_searchFor}}:</span>
                        <input class="searchText" value="" type="text" placeholder='{{headers/t_search_here}}'" onblur="this.placeholder='{{headers/t_searchHere}}' />

                </div>
                <div class="filterRow">
                    <span class="textArea">{{headers/t_from}}:</span>
                    <select id="select-filter">
                        <option value="Title Only" selected="selected">{{headers/t_titleOnly}}</option>
                        <option value="Title and Content">{{headers/t_titleAndContent}}</option>
                    </select>
                </div>
            </div>
            <div class="submitButton">
                <input type="submit" class="newsSubmit" value="{{headers/t_search}}"/>
            </div>

        </div>
    </div>
    <div style="clear: both;"></div>

    <div>


        <div class="IRNewsTool table-look horizontal responsive">
            <div class="IRHeaderGroup">
                <div class="IRHeader IRDate">{{headers/t_date}}</div>
                <div class="IRHeader IRTitle column-first">{{headers/t_title}}</div>

                <div class="IRHeader file-type column-last">File Type/Size</div>
            </div>

            {{#each data}}

                <div class="IRDataGroup" id="{{storyID}}">
                    <div class="IRData IRDate column-first" id="{{showDateWithFormat timestamp 'YYYY-MM-DD'}}">
                        <div>{{showDateWithFormat timestamp 'DD'}} </div>
                        <div>{{showDateWithFormat timestamp 'MMMM'}} </div>
                        <div>{{showDateWithFormat timestamp 'YYYY'}} </div>
                    </div>
                    <div class="IRData IRTitle" id="{{ShowCategoryShort categories}}">{{headline}}</div>
                    <div class="IRData IRDownload" >

                        <div class="IRDownloadPDF" >

                            <div class="newsAttachments">

                                <div class="select_wrapper">

                                    <div class="ul iconPDF">
                                        <div class="close_box" style="display: none;">X</div>
                                        <div class="newsAttachmentBox">
                                            <div class="headerAttachment">Download PDF</div>
                                            {{#each attachments}}

                                            <div class="li attachment" atturl="{{url}}">{{fileName}}</div>
                                            {{/each}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="IRDownloadPDF"></div>
                    </div>
                </div>
                {{/each}}


        </div>
        <div style="clear: both;"></div>
        <div class="IRNewsTableFooter">
            <div class="IRNewsPagination"></div>
        </div>

    </div>
    
        <script>
           $('#to-month option[value=11]').attr("selected", "selected");

           function selectYear() {
               var selectedOption = $('#to-year option:selected');
               var fromOptions = $('#from-year option[value="' + selectedOption.val() + '"]');
               fromOptions.prop("selected", true);
           }

           function search() {
               $('.submitButton input').click();
           }
           $('#to-year').on('change', function() {
               selectYear();
               search();
           });
           selectYear();
       </script>
</script>

<%= site.newFooter("IRNews") %>


<script type="text/javascript">

    var IRNewsAttachmentsApplied = false;
    var tabsApplied = false;
    var customXApplied = false;
    var IRNewsPaginationApplied = false;




    function selectPeriod() {
        // Update News Pagination
        //var searchFromYear = $('.search-from #from-year').val();
        //var searchToYear = $('.search-from #to-year').val();

        var selectedPeriod = $("#select-year").val();


        searchFromYear = selectedPeriod;
        searchToYear = selectedPeriod;

        $('.' + selectedPeriod).prop("selected", true);
        //console.log('searchFromYear2 ' + searchFromYear);
        //console.log('searchToYear2 ' + searchToYear);



        var startDate = new Date(selectedPeriod + "/01/01");
        var endDate = new Date(selectedPeriod + "/12/31");



        var filteredData = new Object();
        var dataThisYear = filterData(startDate, endDate, allData.data);
        filteredData.data = dataThisYear;

        console.log('dataThisYear:' + dataThisYear);

        var source1 = $('#IRNewsTemplate').html();
        var source = $('#IRNewsEntriesTemplate').html();



        var template = Handlebars.compile(source1 + source);
        $('.test').html(template(filteredData));

        IRNewsPaginationApplied = false;
        IRNewsAttachmentsApplied = false;
        tabsApplied = false;
        customXApplied = false;



        prepareTabs();
        applyIRNewsAttachments();
        prepareCustomX();
        applyIRNewsPagination();
        updateIRNewsPagination(page);

    }

    function filterData(startDate, endDate, dataArray) {
        var filteredData = dataArray.filter(function (item) {
            if (new Date(item.timestamp) >= startDate && new Date(item.timestamp) <= endDate) {
                return item;
            }
        });

        return filteredData;
    }





    var allData;
    var filteredData = new Object();

    function applyIRNewsAttachments() {

        if (IRNewsAttachmentsApplied) {

        } else {

            if (typeof ($('.IRDataGroup').html()) != "undefined") {
                $('.newsAttachments .ul').each(function () {

                    if (typeof ($(this).find('.li').html()) == 'string') {

                        if (!$(this).hasClass('hasAttachments')) {
                            $(this).addClass('hasAttachments');
                            //console.log('got hasAttachments class');
                        }

                        $(this).find('.li').css('display', 'none');
                        //console.log('hide all visible li');
                        $(this).css('display', 'block');
                        //console.log('show only li with class hasAttachments');
                        $(this).show();
                    }
                });

                $('.newsAttachments .hasAttachments').click(function () {
                    $(this).removeClass('iconPDF');
                    $(this).addClass('select_inner');
                    $(this).find('.li').css('display', 'block');
                    $('.hasAttachments .headerAttachment').css('display', 'block');
                    $(this).find('.li').css('float', 'left');
                    $('.close_box').show();
                });
                //hide select box on click
                $('body').click(function () {
                    $('.newsAttachments .hasAttachments .li').hide();
                    $('.newsAttachments .hasAttachments').addClass('iconPDF');
                    $('.newsAttachments .hasAttachments').removeClass('select_inner');
                });

                $('.iconPDF').click(function (event) {
                    event.stopPropagation();
                });

                $('.close_box').click(function (event) {
                    $('.newsAttachments .hasAttachments').removeClass('select_inner');
                    $('.newsAttachments .hasAttachments').addClass('iconPDF');
                    $('.close_box').hide();
                    $('.attachment').hide();
                    event.stopPropagation();
                });


                //function updateIRNewsAttachments(page) {
                //    IRNewsAttachmentsActivePage = page;

                //    setNewsActivePage(IRNewsAttachmentsActivePage);
                //}

                $('.newsAttachmentBox .li.attachment').on('click', function (event) {
                    var url = $(this).attr('attURL');
                    if (url) { //require a URL
                        window.open(url); //redirect
                    }
                    event.stopPropagation();
                });

                IRNewsAttachmentsApplied = true;
                //jQuery used to open news on same page as website.

                $('.IRData').unbind('click')
                $('.IRNewsModule div.IRData').click(function () {
                    var storyID = $(this).parent().attr('id');
                    if ($(this).hasClass('IRDownload')) {
                        // Do nothing

                    } else {
                        // Show news
                        window.open('newsArticle.aspx?storyid=' + storyID, '_self');
                    }
                });

            }
        }
    }

    $(function () {

        setInterval(function () {
            applyIRNewsAttachments();
        }, 150);

    });


</script>

<script type="text/javascript">



        var IRNewsPaginationActivePage = 1;

        function applyIRNewsPagination() {

            if (IRNewsPaginationApplied) {

            } else {

                if (typeof ($('.IRNewsPagination').html()) != 'undefined') {

                    globalNewsPagesInTotal = Math.ceil(globalAmountOfNewsItems / clientStyle.amountOfNewsPerPage);



                    var maxIRPaginationPagesToShow = 5;

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

        function prepareCustomX() {
            if (!customXApplied) {
                if (typeof ($('.IRNewsPagination').html()) != 'undefined') {

                    // console.log('found: .IRNewsPagination');

                    //run pagination on submit
                    $('.newsSubmit').click(function () {
                        //console.log('IRNewsPaginationApplied: applied1');

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


        function prepareTabs() {
            if (!tabsApplied) {
                if (typeof ($('.IRData.IRTitle')) != 'undefined') {

                    /* switch between tabs ====================== */
                    //console.log('test');
                    $(function () {
                        //console.log('test2');
                        $(".ul-list-tabs li").click(function () {
                            $('.tab').hide().eq($(this).index()).show();
                        });

                        $('ul li').click(function () {
                            $('ul li').removeClass('current pointer');

                            $(this).addClass('current pointer');
                        });

                        // console.log('test3');
                    });
                    tabsApplied = true;
                }
            }
        }
        $(function () {
            setInterval(function () {
                prepareTabs();
            }, 200);
        });
</script>
<link rel="stylesheet" href="news.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("news.css")).Ticks.ToString()%>" />

