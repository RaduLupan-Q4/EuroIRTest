<%@ Page Language="C#" %>

<meta charset="UTF-8">

<%@ Import Namespace="IRMotor" %>
<% 

    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700"" type=""text/css"" />";
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
            <%--  <div class="news-filter-box">
            <%--<div class="filter-row">
               {{{newsFilters 'NasdaqOMXNordic'}}}
            </div>
            </div>--%>



            <%--<div class="checkbox checkboxFilter" id="Notice to convene an">Notice to general meeting</div><div class="checkbox checkboxFilter" id="Articles of associat">Articles of association</div>--%>


            <li class="li-tab current pointer" id="tab1">{{{newsFiltersSelect 'NasdaqOMXNordic'}}}
            </li>
            <li class="li-tab" id="tab2">
                <div class="search-to">
                    <label for="to-datepicker" class="textArea input-label to-label">{{headers/t_to}}: </label>
                    <div class="select-date" style="display: block">
                        {{{newsSelectToMonth 'MMMM'}}}
                    {{{newsSelectToYear}}}
                    </div>
                </div>
            </li>
            <li class="li-tab tab-3" id="tab3">
                <select id="select-filter2">
                    <% if (language == "da")
                        {
                            Response.Write("<option value='Title and Content' id='en'>Engelsk</option>");
                            Response.Write("<option selected='selected' value='Title and Content' id='da'>Dansk</option>");
                        }
                        else
                        {
                            Response.Write("<option selected='selected' value='Title and Content' id='en'>English</option>");
                            Response.Write("<option value='Title and Content' id='da'>Danish</option>");
                        }%>
                    <%--       <option value="Title Only" selected="selected">Choose Language</option>
                    <option value="Title and Content">English</option>
                    <option value="Title and Content">Danish</option>--%>
                </select>

            </li>
        </ul>

    </div>

    <div class="newsFiltersWrapper">
        <div class="search-filter-wrapper">
            <div class="search-for-box">
                <span class="textArea">{{headers/t_search_for}}:</span>
                <input class="searchText" value="" type="text" placeholder="{{headers/t_search_here}}" onfocus="this.placeholder = ''" onblur="this.placeholder = '{{headers/t_search_here}}'" />
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
            <%--<div class="search-to">
                <label for="to-datepicker" class="textArea input-label to-label">{{headers/t_to}}: </label>
                <div class="select-date" style="display: block">

                    {{{newsSelectToMonth 'MMMM'}}}
                        {{{newsSelectToYear}}}
                </div>
            </div>--%>
        </div>
        <div class="submitButton">
            <input type="submit" class="newsSubmit" value="{{headers/t_search}}" />
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
                <div class="IRHeader IRDate column-first"><%--{{headers/t_date}}--%> All Releases</div>
                <div class="IRHeader IRTitle">{{headers/t_title}}</div>
                <div class="IRHeader column-last file-type">
                    {{headers/t_download_file}}
                </div>
            </div>

            {{#each data}}

                <div class="IRDataGroup" id="{{storyID}}">
                    <div class="IRData IRDate column-first" id="{{showDateWithFormat timestamp 'YYYY-MM-DD'}}">{{showDateWithFormat timestamp 'MMM DD, YYYY HH:mm'}}</div>
                    <div class="IRData IRTitle" id="{{ShowCategoryShort categories}}">{{headline}}</div>
                    <div class="IRData IRDownload">

                        <div class="IRDownloadPDF">
                            <%--{{{showRNSPDF pdfUrl}}}--%>
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
                                                                         
                                         <%--<div class="li attachment" atturl="{{url}}">{{fileName}}</div>--%>
                                            <div class="li attachment">
                                                <a href="{{url}}" download="{{fileName}}">{{fileName}}</a>
                                            </div>
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

</script>

<%= site.newFooter("IRNews") %>

<script type="text/javascript" src="inc/scripts/core/ir.util.js"></script>

<%--<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>--%>

<script type="text/javascript">

    var IRNewsAttachmentsApplied = false;
    var tabsApplied = false;
    var customXApplied = false;
    var IRNewsPaginationApplied = false;
    var labelApplied = false;




    function applyIRNewsAttachments() {
        //change search dates
        $("#from-month").val("0");
        $("#to-month").val("11");




        //search on category change
        $(".selectFilter").change(function () {
            var searchText = $('.searchText').val();
            newsSearch(searchText);
            IRNewsPaginationApplied = false;
            //applyIRNewsPagination();
        });
        /* ________________________*/

        // change language on select
        $("#select-filter2").change(function () {
            var id = $(this).children(":selected").attr("id");
            window.location.href = '?language=' + id;
        });
        /* _______________________ */

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

                //$('.newsAttachmentBox .li.attachment').on('click', function (event) {
                //    var url = $(this).attr('attURL');
                //    if (url) { //require a URL
                //        window.open(url); //redirect
                //    }
                //    event.stopPropagation();
                //});

                IRNewsAttachmentsApplied = true;
                //jQuery used to open news on same page as website.

                $('.IRData').unbind('click');
                $('.IRNewsModule div.IRData').click(function () {
                    var storyID = $(this).parent().attr('id');
                    if ($(this).hasClass('IRDownload')) {
                        // Do nothing

                    } else {
                        // Show news
                        window.open('newsArticle.aspx?storyid=' + storyID + '&language=' + globalActiveLanguage, '_self');
                    }
                });
            }
        }
    }

    $(function () {
        var isSet = false;
        setInterval(function () {
            applyIRNewsAttachments();
            if (typeof ($('#to-year').html()) != "undefined" && !isSet) {
                $("#to-year").change(function () {

                    var fromValue = $("#to-year").val();
                    //if (fromValue == "all"){
                    //    $("#to-year").val($("#to-year").find('option').first().next().val());
                    //    $('#from-year').val($("#to-year").find('option').first().next().val());
                    //} else {
                    $('#from-year').val(fromValue);
                    //}

                    var searchText = $('.searchText').val();
                    newsSearch(searchText);
                    //apply news pagination on year change
                    IRNewsPaginationApplied = false;
                    //set active pagination page to 1
                    IRNewsPaginationActivePage = 1;

                });
                //reverse select list from high to low
                var toyear = $('#to-year').val();
                var selectList = $('#to-year option');
                selectList.sort(function (a, b) {
                    a = a.value;
                    b = b.value;

                    return b - a;
                });
                $('#to-year').html(selectList);
                $('#to-year').val(toyear);
                /* ________________________*/
                isSet = true;
            }
        }, 500);


    });
</script>

<script type="text/javascript">
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };


    var IRNewsPaginationActivePage = 1;

    function applyIRNewsPagination() {

      

            if (typeof ($('.IRNewsPagination').html()) != 'undefined') {

                //globalNewsPagesInTotal = Math.ceil(globalAmountOfNewsItems / clientStyle.amountOfNewsPerPage);
                globalNewsPagesInTotal = Math.ceil($('div[class*="page"]').length / clientStyle.amountOfNewsPerPage);

                var maxIRPaginationPagesToShow = 5;

                var paginationTmp = "";
                paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPagePrev" style="display:inline-block; visibility:hidden;" id="prev">&nbsp;</div>';

                for (var i = 1; i <= globalNewsPagesInTotal; i++) {
                    var cssStyle = "";
                    if (i > maxIRPaginationPagesToShow) {

                        cssStyle = "display:none;";
                    }
                    paginationTmp += '<div style="display:inline-block; ' + cssStyle + '" class="IRNewsPaginationPageNew IRNewsPaginationPageNumber' + i + 'New" id="' + i + '">' + i + '</div>';
                }
                if (globalNewsPagesInTotal > 1) {

                    paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPageNext" id="next" style="display:inline-block;">&nbsp;</div>';

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

               
                //console.log('applyIRNewsPagination function applied2');
            }
    }

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

    function addYearLabel() {
        if (typeof ($('#to-year').html()) != 'undefined') {
            var latest = $('#to-year').find('option').last();
            var valYear = latest.val();
            latest.removeAttr("selected");
            latest.parent().prepend('<option class="chooseYear" value="all"></option>'); //Choose Year
            labelApplied = true;
            $('#to-year').find('option').each(function () {
                if ($(this).val() == "all") {
                    $(this).attr('selected', 'selected');
                    $(this).prop('selected', true);
                }
            });
            $('#to-year').val('all');
            var language = '';
            try {
                language = getUrlParameter('language');
            }
            catch (err) {
            }
            if (language == "da") {
                //console.log('language:' + language);
                $('#to-year .chooseYear').text("Vælg år");
            } else {
                //console.log('language:' + language);
                $('#to-year .chooseYear').html("Choose Year");
            };
        }
    }

    document.ready = function () {
        $(document).ajaxComplete(function () {
			prepareTabs();
			prepareCustomX();
            addYearLabel();
			applyIRNewsPagination();
			
			if (globalActiveLanguage == "da") {
				$('.tab-3').hide();
			}
        });
    }



</script>









<link rel="stylesheet" href="news.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("news.css")).Ticks.ToString()%>" />

