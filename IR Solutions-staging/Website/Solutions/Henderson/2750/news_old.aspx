<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRNews") %>
<script type="text/javascript" src="/includes/js/libs/jquery1-8-3.min.js?v=636028143408208102"></script>

<script type="text/javascript">
    var activeModules = ['IRNews'];
</script>



<div class="IRNewsModule"></div>
    

<script id="IRNewsTemplate" type="text/x-handlebars-template">
    <div class="date-selector-wrapper">
        <div class="date-wrapper"></div>
    </div>

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
                    <input type="submit" class="newsSubmit" value=""/>
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
    <div>
        <div class="IRNewsTool table-look horizontal responsive">
            <div class="IRHeaderGroup">
                <div class="IRHeader IRDate">{{headers/t_date}}</div>
                <div class="IRHeader IRTitle column-first">{{headers/t_title}}</div>
            </div>
            <div class="NewsDataGroupWrapper">
                {{#each data}}
                <div class="IRDataGroup" id="{{storyID}}">
                    <div class="IRData IRDate column-first" id="{{showDateWithFormat timestamp 'YYYY-MMM-DD'}}">{{showDateWithFormat timestamp 'DD/MM/YYYY HH:mm'}}</div>
                    <div class="IRData IRTitle" id="{{ShowCategoryShort categories}}">{{headline}}</div>
                </div>
                {{/each}}
            </div>

        </div>
        <div style="clear: both;"></div>
        <div class="IRNewsTableFooter">
            <div class="IRNewsPagination"></div>

            <div style="display:inline-block;" class="IRNewsPaginationPageNew IRNewsPaginationPageNext" id="next">Next</div>
            <div class="IRNewsPaginationPageNew IRNewsPaginationPagePrev" style="visibility: hidden; display: inline-block;" id="prev">Previous</div>
    
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
                        //var dateElement = $('<a class="date-selector"></a>');

                        toOptions.each(function(index, item) {
                            var cloned = dateElement.clone(true, true);
                            var year = $(item).val();
                            cloned.data('year', year);
                            cloned.addClass(year);
                            //cloned.attr('onclick', 'newsSearchNew(' + year + ')');
                            cloned.html(year);
                            dateWrapper.prepend(cloned);
                        });


                        addYearChangeListener();
                    }

                   $('#to-year').on('change', function () {
                       debugger;
                       selectYear();
                       search();
                   });
                   loopYear();
                


        //           selectYear();
            </script>


 <link rel="stylesheet" href="news.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("news.css")).Ticks.ToString()%>" />
<%--<script type="text/javascript" src="newIframeResizer.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("newIframeResizer.js")).Ticks.ToString()%>"></script>--%>

<%= site.newFooter("IRNews") %>

<script type="text/javascript">

   

    var IRNewsPaginationApplied = false;
    var IRNewsPaginationActivePage = 1;

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
               //run pagination on submit
               $('.newsSubmit').click(function () {

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
                   

                   IRNewsPaginationApplied = true;


                   
               })


               $('.IRNewsPaginationPageNew').on('click', function () {

                       var clickedPage = $(this).attr('id');

                       if (clickedPage == 'next') {
                           updateIRNewsPagination((parseInt(IRNewsPaginationActivePage) + parseInt(1)));
                       } else if (clickedPage == 'prev') {
                           updateIRNewsPagination((parseInt(IRNewsPaginationActivePage) - parseInt(1)));
                       } else {
                           updateIRNewsPagination(clickedPage);
                       }
if ($('div[class*="page"]').length <= clientStyle.amountOfNewsPerPage) {
                       $('.IRNewsPaginationPagePrev').css('display', 'none !important');
                       $('.IRNewsPaginationPageNext').css('visibility', 'hidden');
                   }
                   });

           

               customXApplied = true;

           }
       }
    }

    $(function () {
       setInterval(function () {
           prepareCustomX();
       }, 400);
    });
  


    //function newsSearchNew(year) {

    //    $('#from-month').children().removeAttr('selected');
    //    $('#from-year').children().removeAttr('selected');
    //    $('#to-month').children().removeAttr('selected');
    //    $('#to-year').children().removeAttr('selected');
    //    setTimeout(function() {           
    //        $('#from-month option[value="0"]').attr('selected', 'selected');
    //        $('#from-year option[value="' + year + '"]').attr('selected', 'selected');
    //        $('#to-month option[value="10"]').attr('selected', 'selected');
    //        $('#to-year option[value="' + year + '"]').attr('selected', 'selected');
           
    //        $('.newsSubmit').trigger('click');

    //    }, 200);
    //}

</script>
    
<%--<script> $.iframeHeightFix(); </script>--%>

