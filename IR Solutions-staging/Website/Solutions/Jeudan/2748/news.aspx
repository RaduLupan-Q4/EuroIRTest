<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 

    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:400,500,300"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";

    string language = "";
    string testParameter = Request.QueryString["language"];

    if (testParameter == "da")
    {
        language = "da";
    } 
%>
<%= site.newHeader("IRNews") %>



<script type="text/javascript">
    var activeModules = ['IRNews'];

</script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>


<div class="IRNewsModule"></div>

<script id="IRNewsTemplate" type="text/x-handlebars-template">
    
    <div class="tab-container">

        <ul class="list_reset ul-list-tabs">

           <%-- <li class="li-tab current pointer" id="tab1">{{{newsFiltersSelect 'NasdaqOMXNordic'}}}
            </li>--%>
            <li class="li-tab" id="tab2">
                <div class="search-to">
                    <label for="to-datepicker" class="textArea input-label to-label">{{headers/t_to}}: </label>
                    <div class="select-date" style="display: block">
                        {{{newsSelectToMonth 'MMMM'}}}
                    {{{newsSelectToYear}}}
                    </div>
                </div>
            </li>
        </ul>
        <div class="search-for-box">
                <!--<span class="textArea">{{headers/t_searchFor}}:</span>-->
                <input class="searchText" value="" type="text" placeholder='{{headers/t_search_here}}' " onblur="this.placeholder='{{headers/t_searchHere}}' "" />
                <div class="submitButton">
                    <input type="submit" class="newsSubmit" value="{{headers/t_search}}" />
                </div>
            </div>
    </div>
    <div class="newsFiltersWrapper">
        <div class="search-filter-wrapper">
            <div class="search-for-box">
            </div>
            <div class="filterRow">
                <span class="textArea">{{headers/t_from}}:</span>
                <select id="select-filter">
                    <option value="Title Only" selected="selected">{{headers/t_title_only}}</option>
                    <option value="Title and Content">{{headers/t_title_and_content}}</option>
                </select>
            </div>
        </div>
        <div class="datepicker">
            <div class="search-from">
                <label for="from-datepicker" class="textArea input-label from-label">{{headers/t_search_from}}:</label>
                <div class="select-date">
                    {{{newsSelectFromMonth 'MMMM'}}}
                        {{{newsSelectFromYear}}}
                    
                </div>
            </div>
            
        </div>
        <%--<div class="submitButton">
            <input type="submit" class="newsSubmit" value="{{headers/t_search}}" />
        </div>--%>
        <input type="hidden" id="allfilters" checked="checked">
        <div class="IRNewsEntries"></div>
    </div>
</script>





<script id="IRNewsEntriesTemplate" type="text/x-handlebars-template">
    
    <div class="test">
        <div class="IRNewsTool table-look horizontal responsive">

            <div class="IRHeaderGroup">
                <div class="IRHeader IRDate column-first">{{headers/t_all_releases}}</div>
                <div class="IRHeader IRTitle">{{headers/t_title}}</div>
                <div class="IRHeader column-last file-type">
                    {{headers/t_download_file}}
                </div>
            </div>

            {{#each data}}

                <div class="IRDataGroup" id="{{storyID}}">
                    <div class="IRData IRDate column-first" id="{{showDateWithFormat timestamp 'YYYY-MM-DD HH:mm'}}">{{showDateWithFormat timestamp 'DD MMM, YYYY HH:mm'}}</div>
                    <div class="IRData IRTitle" id="{{ShowCategoryShort categories}}">{{headline}}</div>
                    <div class="IRData IRDownload">

                        <div class="IRDownloadPDF">
                            
                            <div class="newsAttachments">

                                <div class="select_wrapper">
                                    
                                    <div class="ul iconPDF">
                                        <div class="close_box" style="display: none;">X</div>
                                        <div class="newsAttachmentBox">
                                            <div class="headerAttachment">Vælg vedhæftet fil til download</div>
                                            {{#each attachments}}      
                                                                         
                                         <div class="li attachment" atturl="{{url}}">{{fileName}}</div>
                                            {{/each}}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                       <%-- <div class="IRDownloadPDF"></div>--%>
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

    var IRNewsAttachmentsApplied = false;
    var tabsApplied = false;
    var customXApplied = false;
    var IRNewsPaginationApplied = false;
    //var toolSet = false;


    //console.log('toolSet false:' + toolSet);
    //function prepareTool() {
    //    console.log('prepareTool:' + prepareTool);
    //    if (toolSet) {
    //    } else {
    //        if (typeof ($('.IRNewsTool .IRData').html()) != "undefined") {
    //            console.log('IData.html() undefined');
    //            //$(".IRNewsModule div.IRData").off("click", "**");
    //            $(".IRNewsModule div.IRData").unbind();
    //            $('.IRNewsModule div.IRData').click(function () {
    //                var storyID = $(this).parent().attr('id');
    //                if ($(this).hasClass('IRDownload')) {
    //                    // Do nothing
    //                } else {
    //                    // Show news

    //                    window.open('newsDisclaimer.aspx?solutionID=2504&customerKey=Saniona&storyid=' + storyID);

    //                    //window.open('http://ir.euroinvestor.com/Tools/newsArticleHTML.aspx?solutionID=2504&customerKey=Saniona&storyid=' + storyID);
    //                }
    //            });
    //            toolSet = true;
    //        }
    //    }
    //}

    //$(function () {

    //    setInterval(function () {
    //        prepareTool();
    //    }, 150);

    //});

    function applyIRNewsAttachments() {
        /* _______________________ */

        if (IRNewsAttachmentsApplied) {

        } else {

            /* ________________________*/

            //search on category change
            $(".selectFilter").change(function () {
                newsSearch();
                return false;
            });
            /* ________________________*/

            // change language on select
            $("#select-filter2").change(function () {
                var id = $(this).children(":selected").attr("id");
                window.location.href = '?language=' + id;
            });

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

    var storyIDsWithDiclaimer = [13290974, 13298309, 13305816, 13306571, 13306596, 13298331, 13298308, 13305822, 13306570, 13306595];//asd

    var IRNewsPaginationActivePage = 1;

    function applyIRNewsPagination() {

        if (IRNewsPaginationApplied) {

        } else {

            //create all news select option
            $('#to-year').prepend($("<option value='allNews' selected='selected'>All Years</option>"));

            //console.log($('.search-to .select-date #to-year option[value=allNews]'));

            //change search dates
            $("#from-month").val("0");
            $("#to-month").val("11");
            //reverse select list from high to low
            var selectList = $('#to-year option');

            selectList.sort(function (a, b) {
                a = a.value;
                b = b.value;

                return b - a;
            });
            $('#to-year').html(selectList);

            $("#to-year").change(function () {
                var fromValue = $("#to-year").val();
                $('#from-year').val(fromValue);
                var searchText = $('.searchText').val();
                newsSearch(searchText);

                //Apply news pagination
                IRNewsPaginationApplied = false;
                applyIRNewsPagination();
            });


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
                //jQuery used to open news on same page as website.
                $(".IRNewsModule div.IRData").off("click", "**");
                $(".IRNewsModule div.IRData").unbind();
                $('.IRNewsModule div.IRData').click(function () {
                    var storyID = $(this).parent().attr('id');
                    if ($(this).hasClass('IRDownload')) {
                        // Do nothing

                    } else {
                        // Show news
                        //window.open('newsArticle.aspx?storyid=' + storyID, '_self');
                        //window.open('newsDisclaimer.aspx?solutionID=2284&customerKey=ScandinavianTobacco&storyid=' + storyID, '_self');
                        var existsInArray = false;;
                        for (counter = 0; counter < storyIDsWithDiclaimer.length; counter++) {
                            if (storyID == storyIDsWithDiclaimer[counter]) {
                                existsInArray = true;
                            }
                        }

                        if (existsInArray) {
                            window.open('newsDisclaimer.aspx?solutionID=2504&customerKey=Saniona&storyid=' + storyID, '', 'width=900, height=800,scrollbars=yes');
                        } else {
                            window.open('newsArticle.aspx?storyid=' + storyID + '&solutionID=2504&customerKey=Saniona', '', 'width=900, height=800,scrollbars=yes');
                        }
                        //asd
                        //window.open('http://ir.euroinvestor.com/Tools/newsArticleHTML.aspx?solutionID=2504&customerKey=Saniona&storyid=' + storyID, '_self');
                    }
                });
            }

            $('.search-to .select-date #to-year option[value=allNews]').prop("selected", true);

            //$('.IRNewsEntries .IRNewsTool .IRDataGroup').each(function () {

                

            //    console.log($(this));
            //});


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

