﻿<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRNews") %>

<script type="text/javascript">
    var activeModules = ['IRNews'];
</script>

<div class="IRNewsModule"></div>
<script id="IRNewsTemplate" type="text/x-handlebars-template">
    <span class="heading">Keyword Search</span>

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
                    <input class="searchText" value="" type="text" />
                    <input type="submit" class="newsSubmit" value="{{headers/t_search}}"/>
                </div>
                <div class="filterRow">
                    <span class="textArea">{{headers/t_from}}:</span>
                    <select id="select-filter">
                        <option value="Title Only" selected="selected">{{headers/t_title_only}}</option>
                        <option value="Title and Content">{{headers/t_title_and_content}}</option>
                    </select>
                </div>
            </div>
<%--            <div class="clickhere" id="dialog" title="Subscribe to Email Alerts">
                <a href="emailalerts.aspx" target="_blank">Click here</a> to subscribe for Genus plc news email alerts
            </div>--%>
            <div class="datepicker">
                <div class="search-from">
                    <label for="from-datepicker" class="textArea input-label from-label">{{headers/t_search_from}}:</label>
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


        </div>
    </div>
    <div class="date-selector-wrapper">
        <div class="date-wrapper"></div>
    </div>
    <div style="clear: both;"></div>

    <div>
        <div class="IRNewsTool table-look horizontal responsive">
            <div class="IRHeaderGroup">
                <div class="IRHeader IRDate">{{headers/t_date}}</div>
                <div class="IRHeader IRTitle column-first">{{headers/t_title}}</div>


                <div class="IRHeader column-last file-type"></div>
            </div>
            <div class="NewsDataGroupWrapper">
                {{#each data}}
                <div class="IRDataGroup" id="{{storyID}}">
                    <div class="IRData IRDate column-first" id="{{showDateWithFormat timestamp 'YYYY-MMM-DD'}}">{{showDateWithFormat timestamp 'DD MMMM YYYY - HH:mm'}}</div>
                    <div class="IRData IRTitle" id="{{ShowCategoryShort categories}}">{{headline}}</div>
                    <div class="IRData IRDownload">
                        <div class="IRDownloadPDF">
                            {{{showRNSPDF pdfUrl}}}
                        </div>
                      <%--  <div class="IRDownloadKB">
                            {{showFileSize pdfFileSize}}
                        </div>--%>
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

        //          $('#to-month option[value=11]').attr("selected", "selected");

                   function selectYear(year) {
                       if (typeof year !== 'undefined') {
                           var toOptions = $('#to-year option[value="' + year + '"]');
                           toOptions.prop('selected', true);
                           
                           $('#from-month').children().removeAttr('selected');
                           $('#from-year').children().removeAttr('selected');
                           $('#to-month').children().removeAttr('selected');
                           $('#to-year').children().removeAttr('selected');

                           $('#from-month option[value="0"]').attr('selected', 'selected');
                           $('#from-year option[value="' + year + '"]').attr('selected', 'selected');
                           $('#to-month option[value="11"]').attr('selected', 'selected');
                           $('#to-year option[value="' + year + '"]').attr('selected', 'selected');
                       }
                       var selectedOption = $('#to-year option:selected');
                       var fromOptions = $('#from-year option[value="' + selectedOption.val() + '"]');
                       fromOptions.prop("selected", true);
                   }

                   function search() {
                       $('.submitButton input').click();
                   }

                    function addYearChangeListener() {
                        var elements = $('.date-selector');
                        elements.on('click', function() {
                            var year = $(this).data('year');
                            $(".date-selector").removeClass('active');
                            $(this).addClass('active');
                            selectYear(year);
                            search();
                        });
                    }

                    function loopYear() {
                        var toOptions = $('#to-year option');
                        var dateWrapper = $('.date-wrapper');
                        var dateElement = $('<a href="javascript:void(0)" class="date-selector"></a>');

                        toOptions.each(function(index, item) {
                            var cloned = dateElement.clone(true, true);
                            var year = $(item).val();
                            cloned.data('year', year);
                            cloned.addClass(year);
                            cloned.html(year);
                            dateWrapper.prepend(cloned);
                        });


                        addYearChangeListener();
                    }

                   $('#to-year').on('change', function() {
                       selectYear();
                       search();
                   });
                   loopYear();
                
                   $('a.date-selector.2011').css('display','none');
                   $('a.date-selector.2010').css('display','none');
                   $('a.date-selector.2009').css('display','none');
                   $('a.date-selector.2008').css('display','none');
                    
                   

        //           selectYear();
            </script>


 <link rel="stylesheet" href="news.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("news.css")).Ticks.ToString()%>" />

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

                //click current year to filter data
                var currentYear = $('#to-year').find(":selected").text();
                $('.date-selector.' + currentYear).click();
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
  

</script>