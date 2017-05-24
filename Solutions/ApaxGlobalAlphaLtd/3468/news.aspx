<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRNews") %>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<script type="text/javascript">
    var activeModules = ['IRNews'];
</script>

<div class="IRNewsModule"></div>

<script id="IRNewsTemplate" type="text/x-handlebars-template">
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
                    <input class="searchText" value="" type="text" placeholder="{{headers/t_searchHere}}" onfocus="this.placeholder = ''" onblur="this.placeholder = '{{headers/t_searchHere}}'" />
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
                        {{{newsSelectFromMonth 'MMMM'}}} {{{newsSelectFromYear}}}
                    </div>
                </div>
                <div class="search-to">
                    <label for="to-datepicker" class="textArea input-label to-label">{{headers/t_to}}: </label>
                    <div class="select-date">
                        {{{newsSelectToMonth 'MMMM'}}} {{{newsSelectToYear}}}
                    </div>
                </div>
            </div>


        </div>
    </div>

    <div class="date-wrapper">
    </div>
    <div style="clear: both;"></div>

    <div>
        <div class="IRNewsTool table-look horizontal responsive">
            <div class="IRHeaderGroup">
                <div class="IRHeader IRTitle">{{headers/t_title}}</div>
                <%--<div class="IRHeader IRDate column-first">{{headers/t_date}}</div>--%>


                <div class="IRHeader column-last file-type">Download PDF</div>
            </div>
            <div class="NewsDataGroupWrapper">
                {{#each data}}
                    <div class="IRDataGroup" id="{{storyID}}">
                        <div class="IRData IRDate column-first" id="{{showDateWithFormat timestamp 'YYYY-MMM-DD'}}">{{showDateWithFormat timestamp 'DD MMMM YYYY HH:mm'}} &nbsp;| &nbsp;Market News Alert</div>
                        <div class="IRData IRTitle" id="{{ShowCategoryShort categories}}">{{headline}}</div>


                         <div class="IRData IRDownload">
                            <div class="IRDownloadPDF">
                                {{{showRNSPDF pdfUrl}}}
                            </div>
                            <div class="IRDownloadKB">
                                <%--{{showFileSize pdfFileSize}}--%> Download PDF
                            </div>
                        </div>
                    </div>
                {{/each}}
            </div>

        </div>
        <div style="clear: both;"></div>
        <div class="IRNewsTableFooter">
            <div class="IRNewsPagination"></div>
        </div>

    </div>
    <div class="submitButton">
        <input type="submit" class="newsSubmit" value="{{headers/t_submit}}" />
    </div>
    
    <script>

        //$('#to-month option[value=11]').attr("selected", "selected");

        function selectPeriod(from, to) {
            if (typeof from !== 'undefined') {
                var fromOptions = $('#from-year option[value="' + from + '"]');
                fromOptions.prop("selected", true);

                $('#from-month').children().removeAttr('selected');
                $('#from-year').children().removeAttr('selected');
                $('#to-month').children().removeAttr('selected');
                $('#to-year').children().removeAttr('selected');

                $('#from-month option[value="0"]').attr('selected', 'selected');
                $('#from-year option[value="' + from + '"]').attr('selected', 'selected');
                $('#to-month option[value="11"]').attr('selected', 'selected');
                $('#to-year option[value="' + to + '"]').attr('selected', 'selected');
            } else {
                var fromOptions = $('#from-year').find('option').first();
                fromOptions.prop('selected', true);
            }
            var toOptions = $('#to-year option[value="' + to + '"]');
            toOptions.prop('selected', true);
        }

        function search() {
            $('.submitButton input').click();
        }

        function addYearChangeListener() {
            var elements = $('.date-selector');
            elements.on('click', function () {
                var $this = $(this);
                var from = $this.data('from');
                var to = $this.data('to');
                selectPeriod(from, to);
                search();
            });
        }

        function loopYear() {
            var toOptions = $('#to-year option');
            var dateWrapper = $('.date-wrapper');
            var dateElement = $('<a href="javascript:void(0)" class="date-selector"></a>');
            $(toOptions.get().reverse()).slice(0, 4).each(function (index, item) {
                var cloned = dateElement.clone(true, true);
                var year = $(item).val();
                if (index <= 2) {
                    cloned.data('from', year);
                    cloned.data('to', year);
                    cloned.html(year);
                    dateWrapper.append(cloned);
                } else {
                    cloned.data('to', year);
                    cloned.html('Archives');
                    dateWrapper.append(cloned);
                }
                $(".date-wrapper .date-selector:nth-child(1)").addClass('tab-first');
                $(".date-wrapper .date-selector:nth-child(1)").css('margin-left', '1%')
                $(".date-wrapper .date-selector:nth-child(3)").addClass('tab-last');
                $(".date-wrapper .date-selector:nth-child(3)").css('margin-right', '0');
            });



            addYearChangeListener();
        }

        /*$('#to-year').on('change', function() {
            selectPeriod();
            search();
        });*/

        loopYear();
        var fromOptions = $('#from-year').find('option').last();
        fromOptions.prop('selected', true);

        $(".date-wrapper .date-selector").eq(0).addClass("active");

        $(".date-wrapper .date-selector").on("click", function () {
            $(".date-wrapper .date-selector").removeClass("active");
            $(this).addClass("active");
        });

    </script>
    </script>
    <%= site.newFooter("IRNews") %>

    <link rel="stylesheet" href="news.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("news.css")).Ticks.ToString()%>" />


   <script type="text/javascript">
    var IRNewsPaginationApplied = false;
    var IRNewsPaginationActivePage = 1;

    function applyIRNewsPagination() {
        if (IRNewsPaginationApplied) {}
        else {
            if (typeof ($('.IRNewsPagination').html()) != 'undefined') {
                var globalNewsPagesInTotal = Math.ceil(globalAmountOfNewsItems / clientStyle.amountOfNewsPerPage);
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
                    //console.log('next button clicked');
                    if (clickedPage == 'next') {
                        updateIRNewsPagination((parseInt(IRNewsPaginationActivePage) + parseInt(1)));
                    }
                    else if (clickedPage == 'prev') {
                        updateIRNewsPagination((parseInt(IRNewsPaginationActivePage) - parseInt(1)));
                    }
                    else {
                        updateIRNewsPagination(clickedPage);
                    }
                });
                IRNewsPaginationApplied = true;
                //console.log('applyIRNewsPagination function applied2');
                $('.IRDownload').hover(function() {
                    $(this).find('.IRDownloadKB').css({'color':'#ffa000', 'text-decoration': 'underline' });
                },
                    function(){
                        $(this).find('.IRDownloadKB').css({'color':'#263238', 'text-decoration': 'none' });
                    });
            }
            //for Accordion
            var tempYearArr = [];
            var stringProtoYears;
            var ind = 0;
            $('.NewsDataGroupWrapper .IRDataGroup .IRDate').each(function (i, item) {
                var stringProtoYears = item.id;
                var stringYears = stringProtoYears.substr(0, 4);
                if (tempYearArr.indexOf(stringYears) === -1) {
                    tempYearArr.push(stringYears);
                    var $newdiv1 = $("<div class='mobileYear'>" + stringYears + "</div>");
                    $(this).parent().before($newdiv1);
                }
            });
            $('.mobileYear:first-child').addClass('mobActive');
            $('.mobileYear:first-child').addClass('is-opened');
            //$('.mobActive').nextAll('.page1').css('display', 'block');
            $('.mobileYear').on('click', function () {
                if (!$(this).hasClass('mobActive')) {
                    $('.mobileYear').removeClass('mobActive');
                    $('.mobileYear').removeClass('is-opened');
                    $(this).addClass('mobActive');
                    $(this).addClass('is-opened');
                    var $clicked = $(this).text();
                    $('.date-selector').each(function (idx, item) {
                        var tt = $(this).text();
                        if (tt === $clicked) $(this).trigger('click');
                    });
                    $('.IRDataGroup').slideUp(400);
                    $('.mobActive').nextAll('.page1').slideDown(400);
                    if ($(window).width() < 600) {
                        $('.IRNewsPaginationPageNew').on('click', function () {
                            //$('.NewsDataGroupWrapper').find('.hide').css('display', 'none');
                            $('.hide').attr('style', function (i, style) {
                                return style.replace(/display[^;]+;?/g, '');
                            });
                        })
                        $('.IRNewsTableFooter').addClass('forPadinationMob');
                        var pageText = $('.IRNewsPaginationPageNew').text();
                        if (pageText <= 1) {
                            $('.IRNewsTableFooter').css('display', 'none');
                        }
                        else {
                            $('.IRNewsTableFooter').css('display', 'inline-block');
                        }
                    }
                    $('.NewsDataGroupWrapper .IRDataGroup').each(function (i, item) {
                        var stringProtoYears = item.classList.value;
                        //console.log(item.classList.value.substr(12, 20).substr(0, 4));
                        if (/(^|\s)page\d(\s|$)/.test($(item).attr("class"))) {
                            $('.IRNewsTableFooter').detach().insertAfter($(this)).last();
                        }
                        if (!$('.mobileYear').hasClass('mobActive')) {
                            console.log('is not active');
                            $('.IRNewsTableFooter').hide();
                        }
                    });
                }
                else {
                    $('.mobileYear').removeClass('mobActive');
                    $('.mobileYear').removeClass('is-opened');
                    $('.IRDataGroup').slideUp(400);
                    $('.IRNewsTableFooter').hide();
                }
            });
        }
    }
    $(function () {
        setInterval(function () {
            applyIRNewsPagination();
        }, 200);
    });

    function updateIRNewsPagination(page) {
        if (globalNewsPagesInTotal <= 1) {
            $('.IRNewsTableFooter').css('display', 'none');
        }
        else {
            $('.IRNewsTableFooter').css('display', 'block');
        }
        IRNewsPaginationActivePage = page;
        setNewsActivePage(IRNewsPaginationActivePage);
        var currentPage = parseInt(page);
        var minPage = (currentPage - 2);
        var maxPage = (currentPage + 2);
        //console.log(globalNewsPagesInTotal)
        $('.IRNewsPaginationPageNew').removeClass('active');
        $('.IRNewsPaginationPageNew.IRNewsPaginationPageNumber' + currentPage + 'New').addClass('active');
        $('.IRNewsPageNumber').removeClass('active');
        $('.IRNewsPageNumber.IRNewsPageNumber' + currentPage).addClass('active');
        if (maxPage <= 5) {
            maxPage = 5;
        }
        else {
            $('.IRNewsPaginationPageNext').css('visibility', 'visible');
        }
        if (minPage >= globalNewsPagesInTotal - 4) {
            minPage = globalNewsPagesInTotal - 4;
        }
        else {
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
        if (minPage > globalNewsPagesInTotal - 5) {
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
            }
            else {
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
                search();
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
                            }
                            else if (clickedPage == 'prev') {
                                updateIRNewsPagination((parseInt(IRNewsPaginationActivePage) - parseInt(1)));
                            }
                            else {
                                updateIRNewsPagination(clickedPage);
                            }
                        });
                        IRNewsPaginationApplied = true;
                        if ($('div[class*="page"]').length <= clientStyle.amountOfNewsPerPage) {
                            $('.IRNewsPaginationPagePrev').css('display', 'none !important');
                            $('.IRNewsPaginationPageNext').css('visibility', 'hidden');
                        }
                    })
                    //On News Tool Load: Apply class IRNewsPaginationPageNew.
                $(".date-selector.active").trigger("click");
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
