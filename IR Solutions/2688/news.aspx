<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 

    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700"" type=""text/css"" />";
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" media=""screen"" href=""/includes/css/libs/jquery-ui1-11-1_smoothness.css"" />
";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";

    string language = "";
    string testParameter = Request.QueryString["language"];

    if (testParameter == "fi")
    {
        language = "fi";
    }
%>
<%= site.newHeader("IRNews") %>



<script type="text/javascript">
    var activeModules = ['IRNews'];

</script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<iframe style="display:none" id="newsFrameLoader"></iframe>

<div class="IRNewsModule"></div>

<script id="IRNewsTemplate" type="text/x-handlebars-template">

    <div class="tab-container">

        <ul class="list_reset ul-list-tabs leftLi">
            <%--  <div class="news-filter-box">
            <%--<div class="filter-row">
               {{{newsFilters 'NasdaqOMXNordic'}}}
            </div>
            </div>--%>



            <%--<div class="checkbox checkboxFilter" id="Notice to convene an">Notice to general meeting</div><div class="checkbox checkboxFilter" id="Articles of associat">Articles of association</div>--%>
            <li class="search-for-box" style="float: left">
                <span class="textArea">{{headers/t_search}}:</span>
                <input class="searchText" value="" type="text" placeholder="{{headers/t_search_here}}" onfocus="this.placeholder = ''" onblur="this.placeholder = '{{headers/t_search_here}}'" />
            </li>
            <li>
                <span class="textArea">{{headers/t_category}}:</span>
                <div class="li-tab current pointer" id="tab1">{{{newsFiltersSelect 'NasdaqOMXNordic'}}} </div>
            </li>
            <li class="li-tab" id="tab2">
                <div class="search-from">
                    <%--<label for="from-datepicker" class="textArea input-label from-label">{{headers/t_search_from}}:</label>--%>
                    <div class="select-date">
                        <input type="text" id="datepicker-from" placeholder="from">
                        <div style="display: none">
                            {{{newsSelectFromMonth 'MMMM'}}}
                        {{{newsSelectFromYear}}}    
                        </div>
                    </div>
                </div>
                <div class="search-to">
                    <%--<label for="to-datepicker" class="textArea input-label to-label">{{headers/t_to}}: </label>--%>
                    <div class="select-date" style="display: block">
                        <input type="text" id="datepicker-to" placeholder="To">
                        <div style="display: none">
                            {{{newsSelectToMonth 'MMMM'}}}
                    {{{newsSelectToYear}}}
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="clearSubtimWrapper" style="width: 50%; float: right">
                    <div class="clearBtn" style="float: left; width: 40%;">
                        <input type="button" name="name" value="{{headers/t_clear}}" />
                    </div>
                    <div class="submitButton" style="width: 60%; float: right">
                        <input type="submit" class="newsSubmit" value="{{headers/t_search}}" />
                    </div>
                </div>
            </li>
            <%--<li class="li-tab tab-3" id="tab3">
                <select id="select-filter2">
                    <% if (language == "fi")
                       {
                           Response.Write("<option value='Title and Content' id='en'>English</option>");
                           Response.Write("<option selected='selected' value='Title and Content' id='fi'>Suomi</option>");
                       }
                       else
                       {
                           Response.Write("<option selected='selected' value='Title and Content' id='en'>English</option>");
                           Response.Write("<option value='Title and Content' id='fi'>Suomi</option>");
                       }%>
             <%--       <option value="Title Only" selected="selected">Choose Language</option>
                    <option value="Title and Content">English</option>
                    <option value="Title and Content">Danish</option>
                </select>

            </li>--%>
        </ul>

    </div>

    <div class="newsFiltersWrapper">
        <div class="search-filter-wrapper">

            <div class="filterRow" style="display: none">
                <span class="textArea">{{headers/t_from}}:</span>
                <select id="select-filter">
                    <option value="Title Only" selected="selected">{{headers/t_title_only}}</option>
                    <option value="Title and Content">{{headers/t_title_and_content}}</option>
                </select>
            </div>
        </div>
        <div class="datepicker">
            <%--<div class="search-from">
                <label for="from-datepicker" class="textArea input-label from-label">{{headers/t_search_from}}:</label>
                <div class="select-date">
                    {{{newsSelectFromMonth 'MMMM'}}}
                        {{{newsSelectFromYear}}}
                    
                </div>
            </div>--%>
            <%--<div class="search-to">
                <label for="to-datepicker" class="textArea input-label to-label">{{headers/t_to}}: </label>
                <div class="select-date" style="display: block">

                    {{{newsSelectToMonth 'MMMM'}}}
                        {{{newsSelectToYear}}}
                </div>
            </div>--%>
        </div>

        <input type="hidden" id="allfilters" checked="checked">
        <div class="IRNewsEntries"></div>
    </div>
</script>





<script id="IRNewsEntriesTemplate" type="text/x-handlebars-template">
    <%--<h2>Regulatory News</h2>--%>
    <div class="test">
        <div class="IRNewsTool table-look horizontal responsive">

            <div class="IRHeaderGroup">
                <%--<div class="IRHeader IRDate column-first">{{headers/t_all_releases}}</div>--%>
                <div class="IRHeader Date">{{headers/t_date}}</div>
                <div class="IRHeader IRTitle">{{headers/t_title}}</div>
                <div class="IRHeader column-last file-type">
                    {{headers/t_view}}
                </div>
            </div>

            {{#each data}}

                <div class="IRDataGroup" id="{{storyID}}">
                    <div class="IRData IRDate column-first" id="{{showDateWithFormat timestamp 'YYYY-MM-DD'}}">{{showDateWithFormat timestamp 'MMM DD, YYYY'}}</div>
                    <div class="IRData IRTitle" id="{{ShowCategoryShort categories}}">{{headline}}</div>
                    <div class="IRData IRDownload">

                        <div class="IRDownloadPDF">
                            <%-- {{{showRNSPDF pdfUrl}}}--%>
                            <div class="newsAttachments">

                                <div class="select_wrapper">
                                    <%--<select class="iconPDF newsAttachments">
                                         {{#each attachments}}
                                         <option value="{{url}}">{{fileName}}</option>
                                     {{/each}}
                                     </select>--%>
                                    <div class="ul iconPDF">
                                        <div class="close_box" style="display: none;">X</div>
                                        <div class="newsAttachmentBox">
                                             <div class="headerAttachment">Select attachment to download</div>
                                            {{#each attachments}}      
                                                                         
                                         <div class="li attachment" atturl="{{url}}">{{fileName}}</div>
                                            {{/each}}
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                        <div class="print">
                                <span class="printIcon" onclick="printNews('{{htmlUrl}}')">	&ensp;​​​​​​​​​​​​​​​​​</span>
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

</script>

<%= site.newFooter("IRNews") %>
<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>

<script type="text/javascript">

    var IRNewsAttachmentsApplied = false;
    var tabsApplied = false;
    var customXApplied = false;
    var IRNewsPaginationApplied = false;



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
                //$('.IRData').unbind('click');
                //$('.IRNewsModule div.IRData').click(function () {
                //    var storyID = $(this).parent().attr('id');
                //    if ($(this).hasClass('IRDownload')) {
                //        // Do nothing

                //    } else {
                //        // Show news
                //        //window.open('newsArticle.aspx?storyid=' + storyID, '_self');
                //        window.open('http://ir.euroinvestor.com/Tools/newsArticleHTML.aspx?solutionID=2546&customerKey=RevenioGroup&storyID=' + storyID, '_self');
                //    }
                //});

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

    globalNewsPagesInTotal = Math.ceil(globalAmountOfNewsItems / clientStyle.amountOfNewsPerPage);


    var IRNewsPaginationActivePage = 1;

    function applyIRNewsPagination() {

        if (IRNewsPaginationApplied) {

        } else {


            if (typeof ($('.IRNewsPagination').html()) != 'undefined') {




                var maxIRPaginationPagesToShow = 5;

                var paginationTmp = "";
                paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPagePrev" style="display:inline-block; visibility:hidden;" id="prev">Prev</div>';

                for (var i = 1; i <= globalNewsPagesInTotal; i++) {
                    var cssStyle = "";
                    if (i > maxIRPaginationPagesToShow) {

                        cssStyle = "display:none;";
                    }
                    paginationTmp += '<div style="display:inline-block; ' + cssStyle + '" class="IRNewsPaginationPageNew IRNewsPaginationPageNumber' + i + 'New" id="' + i + '">' + i + '</div>';
                }
                if (globalNewsPagesInTotal > 1) {
                    paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPageNext" id="next" style="display:inline-block;">Next</div>';

                }


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

                var fromMonth = $('#from-month').attr('selected', 'selected').val();
                var fromYear = $('#from-year').attr('selected', 'selected').val();
                var fromDate = new Date(fromYear, fromMonth);
                $('#datepicker-from').datepicker({
                    dateFormat: 'MM/dd/yy'
                });
                $('#datepicker-from').datepicker().datepicker("setDate", fromDate);
                //$('#datepicker-from').datepicker().datepicker("startDate", fromDate);
                $('#datepicker-to').datepicker({
                    dateFormat: 'MM/dd/yy'
                });

                $('.clearBtn').click(function () {
                    $('input.searchText').val('');
                });
                $("#datepicker-from").on("change", function (e) {
                    fromDate = new Date(e.target.value);
                    $("#from-month").val(fromDate.getMonth());
                    $("#from-year").val(fromDate.getFullYear());
                });
                $("#datepicker-to").on("change", function (e) {
                    fromDate = new Date(e.target.value);
                    $("#to-month").val(fromDate.getMonth());
                    $("#to-year").val(fromDate.getFullYear());
                });

                //run pagination on submit
                $('.newsSubmit').click(function () {

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
                });

                ////change search dates
                //$("#from-month").val("0");
                //$("#to-month").val("11");
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

                //    var newsCounter = 0;
                //    $('.IRDataGroup').each(function (i, obj) {
                //        if (obj.className.indexOf('page') != -1) {
                //            newsCounter++;
                //        }
                //    });
                //    var pages = Math.ceil(newsCounter / 10);
                //    globalNewsPagesInTotal = pages;

                //    IRNewsPaginationApplied = false;
                //    applyIRNewsPagination();

                //});
                /* ________________________*/

                //search on category change
                //$(".selectFilter").change(function () {

                //    newsSearch();
                //    var newsCounter = 0;
                //    $('.IRDataGroup').each(function (i, obj) {
                //        if (obj.className.indexOf('page') != -1) {
                //            newsCounter++;
                //        }
                //    });
                //    var pages = Math.ceil(newsCounter / 10);
                //    globalNewsPagesInTotal = pages;

                //    IRNewsPaginationApplied = false;
                //    applyIRNewsPagination();

                //});
                /* ________________________*/

                // change language on select
                //$("#select-filter2").change(function () {
                //    var id = $(this).children(":selected").attr("id");
                //    window.location.href = '?language=' + id;
                //});
                /* _______________________ */


                customXApplied = true;

            }
        }
    }

    $(function () {
        setInterval(function () {
            prepareCustomX();
        }, 500);
    });

    function printNews(url) {
        //To test on dev
      //  var test = url.replace('http://ir.euroinvestor.com', 'http://devir.euroinvestor.com');
        $('#newsFrameLoader').attr('src', url);
        print(); 
    };
    function print() {
        //check if handlebar content has been loaded.
        var frameContent = $('#newsFrameLoader').contents().find('p').html();

        if (frameContent != "" && typeof (frameContent) != 'undefined') {
            var frm = document.getElementById("newsFrameLoader").contentWindow;
            frm.focus();
            frm.print();
        } else {
            setTimeout(print, 100);
        }
    }


    //function prepareTabs() {
    //    if (!tabsApplied) {
    //        if (typeof ($('.IRData.IRTitle')) != 'undefined') {

    //            /* switch between tabs ====================== */
    //            //console.log('test');
    //            $(function () {
    //                //console.log('test2');
    //                $(".ul-list-tabs li").click(function () {
    //                    $('.tab').hide().eq($(this).index()).show();
    //                });

    //                $('ul li').click(function () {
    //                    $('ul li').removeClass('current pointer');

    //                    $(this).addClass('current pointer');
    //                });

    //                // console.log('test3');
    //            });
    //            tabsApplied = true;
    //        }
    //    }
    //}
    //$(function () {
    //    setInterval(function () {
    //        prepareTabs();
    //    }, 200);
    //});






</script>


<link rel="stylesheet" href="news.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("news.css")).Ticks.ToString()%>" />

