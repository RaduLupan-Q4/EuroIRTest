<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 

    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>
<%= site.newHeader("IRNews")

 
%>

<script type="text/javascript">

    var activeModules = ['IRNews'];
</script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<div class="IRNewsModule"></div>

<script id="IRNewsTemplate" type="text/x-handlebars-template">
    <div class="news-information-header">
       <%-- <div class="information-title">
            <h1>Regulatory News Filter</h1>
        </div>
        <div class="email-alerts">
            <div class="email-alerts-link">
                <span>Receive E-mail Alerts</span>
                <img src="http://media.corporate-ir.net/media_files/irol/global_images/icon_emailAlert.gif" width="23" height="11" hspace="2" alt="E-mail Alerts" align="top" vspace="1" border="0">
            </div>
        </div>--%>
        <div class="information-description">
            Information on this page is updated via a feed from the London Stock Exchanges Regulatory News Service. To retrieve the full story please click on the headline.
        </div> 
    </div>
    <div class="news-filter-wrapper">
        <div class="news-filter-box" style="display: none">
            <div class="filter-row">
                <div class="checkbox checkboxFilter" id="allRNSnews">All News Types</div>

            </div>
        </div>
        <div class="search-filter-wrapper">
            <div class="search-for-box" style="float: left">
                <span class="textArea">Keyword Search</span>
                <input class="searchText" value="" type="text" />
            </div>
            <div class="submitButton">
                <input type="submit" class="newsSubmit" value="{{headers/t_search}}" />
            </div>
             <div class="filterRow">
                <span class="textArea">{{headers/t_from}}:</span>
                <select id="select-filter">
                    <option value="Title Only" selected="selected">{{headers/t_title_only}}</option>
                    <option value="Title and Content">{{headers/t_title_and_content}}</option>
                </select>
            </div>
        </div>
        <div class="datepicker" style="display:none" >
            <div class="search-from">

                <div class="select-date">
                    {{{newsSelectFromMonth 'MMMM'}}}
                        {{{newsSelectFromYear}}}
                </div>
            </div>
            <div class="search-to">
                <label for="to-datepicker" class="textArea input-label to-label" style="float:left">Sort by: </label>
                <div class="select-date" style="float:right">
                    {{{newsSelectToMonth 'MMMM'}}}
                        {{{newsSelectToYear}}}
                </div>
            </div>
        </div>



    </div>

    <input type="hidden" id="allfilters" checked="checked">
    <div class="IRNewsEntries"></div>
    <script type="text/javascript">

        $('#to-month option[value="11"]').attr('selected', 'selected');
    </script>
</script>
<script id="IRNewsEntriesTemplate" type="text/x-handlebars-template">

    <div>
        <div class="IRNewsTool table-look horizontal responsive">
            <div class="table-title">Search Results</div>
            <div class="IRNewsPagination"></div>
            <div class="IRHeaderGroup">
                <div class="IRHeader IRDate column-first">{{headers/t_date}}</div>
                <div class="IRHeader IRTitle">{{headers/t_title}}</div>
                <div class="IRHeader column-last file-type">

                </div>
            </div>

            {{#each data}}

                <div class="IRDataGroup" id="{{storyID}}">
                    <div class="IRData IRDate column-first" id="{{showDateWithFormat timestamp 'YYYY-MM-DD'}}">{{showDateWithFormat timestamp 'DD/MM/YY HH:mm'}}</div>
                    <div class="IRData IRTitle" id="{{ShowCategoryShort categories}}">{{headline}}</div>
                    <div class="IRData IRDownload">

                        <div class="IRDownloadPDF">

                            <div class="newsAttachments">

                                <div class="select_wrapper">
                                    {{{showRNSPDF pdfUrl}}}
                                    <div class="IRDownloadKB">
                                         <%--{{showFileSize pdfFileSize}}--%>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            {{/each}}

        </div>   

    </div>

</script>
<%= site.newFooter("IRNews") %>


<script type="text/javascript">

    var IRNewsAttachmentsApplied = false;


    function applyIRNewsAttachments() {
        

        $("#from-month").val("0");
        $("#to-month").val("11");
        $("#from-year").val("2007");
        var searchTo = new Date();
        $("#to-year").val(searchTo.getFullYear());

        ////reverse select list from high to low
        //var selectList = $('#to-year option');

        //selectList.sort(function (a, b) {
        //    a = a.value;
        //    b = b.value;

        //    return b - a;
        //});
        //$('#to-year').html(selectList);


        //$("#to-year").change(function () {
        //    var fromValue = $("#to-year").val();
        //    $('#from-year').val(fromValue);
        //    var searchText = $('.searchText').val();
        //    newsSearch(searchText);

        //    IRNewsPaginationApplied = false;
        //});


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
                        //window.open('newsArticle.aspx?storyid=' + storyID, '_self');
                        window.open('newsArticle.aspx?storyid=' + storyID);
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


<link rel="stylesheet" href="news.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("news.css")).Ticks.ToString()%>" />
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
                paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPagePrev" style="display:inline-block;" id="prev">Previous</div>';

                // for (var i = 1; i <= globalNewsPagesInTotal; i++) {
                //     var cssStyle = "";
                //     if (i > maxIRPaginationPagesToShow) {

                //         cssStyle = "display:none;";
                //     }
                //     paginationTmp += '<div style="display:none; visibility: hidden; ' + cssStyle + '" class="IRNewsPaginationPageNew IRNewsPaginationPageNumber' + i + 'New" id="' + i + '">' + i + '</div>';
                // }
                paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPageNext active" id="next" style="display:inline-block;">Next</div>';

                $('.IRNewsPagination').html(paginationTmp);
                // $('.IRNewsPaginationPageNew.IRNewsPaginationPageNumber1New').addClass('active');
                $('.IRNewsPaginationPageNew').on('click', function () {

                    var clickedPage = $(this).attr('id');

                    if (clickedPage == 'next' && IRNewsPaginationActivePage != globalNewsPagesInTotal) {
                        updateIRNewsPagination((parseInt(IRNewsPaginationActivePage) + parseInt(1)));
                    } else if (clickedPage == 'prev' && IRNewsPaginationActivePage != 1) {

                        updateIRNewsPagination((parseInt(IRNewsPaginationActivePage) - parseInt(1)));
                    }
                    //  else {
                    //     updateIRNewsPagination(clickedPage);
                    // }

                });

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
        var minPage = (currentPage - 2);
        var maxPage = (currentPage + 2);

        $('.IRNewsPaginationPageNew').removeClass('active');
        $('.IRNewsPaginationPageNew.IRNewsPaginationPageNumber' + currentPage + 'New').addClass('active');
        $('.IRNewsPageNumber').removeClass('active');
        $('.IRNewsPageNumber.IRNewsPageNumber' + currentPage).addClass('active');

        if (maxPage <= 5) {
            maxPage = 5;
        } else {
            $('.IRNewsPaginationPageNext').removeClass('inactive');
            $('.IRNewsPaginationPageNext').addClass('active');
        }
        if (minPage >= globalNewsPagesInTotal - 5) {
            minPage = globalNewsPagesInTotal - 5;
        } else {
            $('.IRNewsPaginationPagePrev').removeClass('inactive');
            $('.IRNewsPaginationPagePrev').addClass('active');
        }

        if (maxPage <= 5) {
            if (currentPage == 1) {
                $('.IRNewsPaginationPagePrev').addClass('inactive');
                $('.IRNewsPaginationPagePrev').removeClass('inactive');
            }
        }

        if (currentPage != 1) {
            $('.IRNewsPaginationPagePrev').removeClass('inactive');
            $('.IRNewsPaginationPagePrev').addClass('active');
        } else {
            $('.IRNewsPaginationPagePrev').removeClass('active');
            $('.IRNewsPaginationPagePrev').addClass('inactive');
        }
        if (currentPage != globalNewsPagesInTotal) {
            $('.IRNewsPaginationPageNext').removeClass('inactive');
            $('.IRNewsPaginationPageNext').addClass('active');
        } else {
            $('.IRNewsPaginationPageNext').removeClass('active');
            $('.IRNewsPaginationPageNext').addClass('inactive');
        }
        if (minPage >= globalNewsPagesInTotal - 5) {

            if (currentPage == globalNewsPagesInTotal) {
                $('.IRNewsPaginationPageNext').addClass('inactive');
                $('.IRNewsPaginationPageNext').removeClass('active');
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

                // console.log('found: .IRNewsPagination');

                //run pagination on submit
                $('.newsSubmit').click(function () {
                    //console.log('IRNewsPaginationApplied: applied1');

                    updateIRNewsPagination(1);

                    var maxIRPaginationPagesToShow = 5;

                    var paginationTmp = "";
                    paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPagePrev" style="visibility:hidden; display: inline-block;" id="prev">Prev</div>';

                    // for (var i = 1; i <= globalNewsPagesInTotal; i++) {
                    //     var cssStyle = "";
                    //     if (i > maxIRPaginationPagesToShow) {
                    //         cssStyle = "display:none;";
                    //     }
                    //     paginationTmp += '<div style="display:inline-block; ' + cssStyle + '" class="IRNewsPaginationPageNew IRNewsPaginationPageNumber' + i + 'New" id="' + i + '">' + i + '</div>';
                    // }
                    paginationTmp += '<div style="display:inline-block;" class="IRNewsPaginationPageNew IRNewsPaginationPageNext" id="next">Next</div>';

                    $('.IRNewsPagination').html(paginationTmp);
                    // $('.IRNewsPaginationPageNew.IRNewsPaginationPageNumber1New').addClass('active');
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


