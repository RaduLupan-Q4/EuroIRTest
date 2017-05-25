<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();

%>

<%= site.newHeader("IRNews") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript">
    var activeModules = ['IRNews'];
</script>

<div class="IRNewsModule"></div>



<script id="IRNewsTemplate" type="text/x-handlebars-template">

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
    <div class="submitButton">
        <input type="submit" class="newsSubmit" value="{{headers/t_submit}}" />
    </div>
    <input type="hidden" id="allfilters" checked="checked">
    <div class="IRNewsEntries"></div>

</script>

<script id="IRNewsEntriesTemplate" type="text/x-handlebars-template">

    <table class="IRNewsTool table-look horizontal responsive">
        <thead>
            <tr>
                <th class="Header column-first date">{{headers/t_date}}</th>
                <th class="Header title">{{headers/t_title}}</th>
                <%--<th class="Header data">Data</th>--%>
                <%--<th class="Header download column-last">{{headers/t_download}}</th>--%>
            </tr>
        </thead>
        <tbody>
            {{#each data}}
            <tr class="Data" id="{{storyID}}">
                <%--<td class="Data column-first date">{{showDate timestamp}}</td>--%>
                <td class="Data column-first date" id="{{showDateWithFormat timestamp 'YYYY-MM-DD'}}">{{showDateWithFormat timestamp 'DD MMMM YYYY'}}</td>
                <td class="Data title" id="{{ShowCategoryShort categories}}">{{headline }}</td>
                <%--<td class="Data data">{{categories/0/data}}</td>--%>
                <%--<td class="Data download column-last ">{{{showRNSPDF pdfUrl}}}{{showFileSize pdfFileSize}}
                    
                </td>--%>
            </tr>
            {{/each}}
        </tbody>
    </table>
    <div style="clear: both;"></div>
    <div class="IRNewsTableFooter">
        <div class="IRNewsPagination"></div>
    </div>

</script>

<%= site.newFooter("IRNews") %>

<script type="text/javascript">
    $(function () {
        var customNewsPagination = false;
        function prepareCustomNewsPagination() {

            if (!customNewsPagination) {

                if (typeof ($('.IRNewsPagination').html()) != 'undefined') {


                    updatePagination(2);
                    //$('.IRNewsPagination').prepend('<div class="IRNewsPageNumber IRNewsPagePrevNext IRNewsPagePrev">Prev</div>');
                    //$('.IRNewsPagination').append('<div class="IRNewsPageNumber IRNewsPagePrevNext IRNewsPageNext" style="display: inline;">Next</div>');
                    $('.IRNewsTableFooter').on('click', '.IRNewsPageNumber', function () {
                        console.log($(this));
                        if ($(this).hasClass('.IRNewsPageNumber1.active')) {
                            //currentPageNo == 1;

                            console.log('I am on page 1');
                            //updatePagination(4);
                        }

                        else if ($(this).hasClass('.IRNewsPageNumber2.active')) {
                            console.log('I am on page 2');
                            //updatePagination(3);
                        }

                        else {
                            console.log('I am on page 3 or higher')
                            updatePagination(2);
                        }


                        var currentPageNo = parseInt($('.IRNewsPageNumber.active').html());
                        console.log('current page:' + currentPageNo);
                        $('.IRNewsTableFooter').on('click', '.IRNewsPagePrev', function () {
                            console.log('clicked on Prev');
                            $(currentPageNo - 1);
                        });

                        $('.IRNewsTableFooter').on('click', '.IRNewsPageNext', function () {
                            console.log('clicked on Next');
                        });


                    });
                    customNewsPagination = true;
                }
            }
        }

        setInterval(function () {
            prepareCustomNewsPagination();
        }, 100);

    });
    function updatePagination(n) {

        $('.IRNewsPagination .IRNewsPageNumber').hide();
        $('.IRNewsPagination .IRNewsPageNumber.active').show();
        var currentPageNo = parseInt($('.IRNewsPageNumber.active').html());
        showClosetsNeighbours(currentPageNo, n);
        var lastPageNo;
        $('.IRNewsPagination .IRNewsPageNumber').each(function (i) {
            var s = $('.IRNewsPageNumber' + i).html();
            if (s !== undefined) {
                lastPageNo = i;
            }
        });
        createNextPrev(currentPageNo, lastPageNo);

    }
    function createNextPrev(currentPageNo, lastPageNo) {
        var html = $('.IRNewsPagination').html();
        $('.IRNewsPagination .IRNewsPagePrevNext').hide();
        if (currentPageNo !== 1) {
            $('.IRNewsPagination .IRNewsPagePrev').show();
            $('.IRNewsPagePrev').css('display', 'inline');
        }
        if (currentPageNo !== lastPageNo) {
            $('.IRNewsPagination .IRNewsPageNext').show();
        }
    }
    function showClosetsNeighbours(currentPageNo, n) {


        // Shows the two (on both sides) closets neighbours
        for (var i = 1; i <= n; i++) {
            $('.IRNewsPagination .IRNewsPageNumber.IRNewsPageNumber' + (currentPageNo - i)).show();
            $('.IRNewsPagination .IRNewsPageNumber.IRNewsPageNumber' + (currentPageNo + i)).show();
        }
    }

    //$('.IRNewsPagePrev').on('click', function () {
    //    loadPage(currentPage - 1)
    //});

    //$('.IRNewsPageNext').on('click', function () {
    //    loadPage(currentPage + 1)
    //});

    //loadPage(currentPage)

</script>
