<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//cloud.typography.com/7594474/696708/css/fonts.css"" type=""text/css"" />";
%>
<%= site.newHeader("IRNews")
%>
<meta name="viewport" content="width=device-width, initial-scale=1">

<script type="text/javascript">
    var activeModules = ['IRNews'];
</script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<div class="IRNewsModule"></div>
<script id="IRNewsTemplate" type="text/x-handlebars-template">


    <input type="hidden" id="allfilters" checked="checked">
    <div class="IRNewsEntries"></div>

</script>
<script id="IRNewsEntriesTemplate" type="text/x-handlebars-template">


    <div class="IRNewsTool table-look horizontal responsive">
        <div class="datepickerWrapper">
            <div class="datepicker">
                <div class="search-from">
                    <label for="from-datepicker" class="textArea input-label from-label">{{headers/t_from}}:</label>
                    <div class="select-date">
                        <%--{{{newsSelectFromMonth 'MMMM'}}}--%>
                        {{{newsSelectFromYear}}}
                    </div>
                </div>
                <div class="search-to">
                    <label for="to-datepicker" class="textArea input-label to-label">{{headers/t_to}}: </label>
                    <div class="select-date">
                        <%-- {{{newsSelectToMonth 'MMMM'}}}--%>
                        {{{newsSelectToYear}}}
                    </div>
                </div>
                <div class="submitButton">
                    <label for="to-datepicker" class="textArea input-label to-label" style="visibility: hidden;">{{headers/t_search}}</label>
                    <input type="submit" class="newsSubmit" value="{{headers/t_search}}" />
                </div>
            </div>


        </div>
        <div class="clear"></div>
        <div class="IRHeaderGroup">
            <div class="IRHeader IRDate column-first">{{headers/t_date}}</div>
            <div class="IRHeader IRTitle">{{headers/t_title}}</div>
            <div class="IRHeader IRNewsDownloadIcon">
                {{headers/t_download_file}}
            </div>
            <%-- <div class="IRHeader column-last IRDownload">
                    {{headers/t_attachments}}
                </div>--%>
        </div>

        {{#each data}}
                    
                <%--<div class="attachments"></div>--%>

        <div class="IRDataGroup" id="{{url}}">
            <div class="IRDataCustom IRDate IRShowYear column-first" id="{{showDateWithFormat timestamp 'YYYY-MM-DD'}}">{{formatDate timestamp}}</div>
            <div class="IRDataCustom IRTitle" id="{{ShowCategoryShort categories}}">
                <div class="IRTitleHeadline">{{#each attachments}} <a target="_blank" href="{{url}}">{{/each}}{{headline}}</a>  </div>
                <div class="showDate">{{showDate timestamp}}</div>
            </div>
            <div class="IRDataCustom IRNewsDownloadIcon">{{#each attachments}} <a target="_blank" href="{{url}}"></a>{{/each}}</div>
        </div>
        {{/each}}
    </div>

    <div style="clear: both;"></div>
    <div class="IRNewsTableFooter">
        <div class="IRNewsPagination"></div>
    </div>



</script>

<%= site.newFooter("IRNews") %>


<script type="text/javascript">


    var IRNewsAttachmentsApplied = false;


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

                $('.newsAttachmentBox .li.attachment').on('click', function (event) {
                    var url = $(this).attr('attURL');
                    if (url) { //require a URL
                        window.open(url); //redirect
                    }
                    event.stopPropagation();
                });

            }

            IRNewsAttachmentsApplied = true;
        }
    }


    //$(function () {

    //    setInterval(function () {
    //        applyIRNewsAttachments();
    //        $('.IRNewsModule div.IRData').off('click');
    //        $('.IRNewsModule div.IRData').click(function () {
    //            var url = $(this).parent().attr('id');
    //            window.open(url, '_blank');
    //        });
    //    }, 150);

    //});


    var IRNewsPaginationApplied = false;
    var IRNewsPaginationActivePage = 1;

    function applyIRNewsPagination() {

        if (IRNewsPaginationApplied) {

        } else {

            if (typeof ($('.IRNewsPagination').html()) != 'undefined') {

                globalNewsPagesInTotal = Math.ceil(globalAmountOfNewsItems / clientStyle.amountOfNewsPerPage);

                

                var maxIRPaginationPagesToShow = 5;

                var paginationTmp = "";
                paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPagePrev" style="display:inline-block; visibility:hidden;" id="prev">Prev</div>';

                for (var i = 1; i < globalNewsPagesInTotal; i++) {
                    var cssStyle = "";
                    if (i > maxIRPaginationPagesToShow) {

                        cssStyle = "display:none;";
                    }
                    paginationTmp += '<div style="display:inline-block; ' + cssStyle + '" class="IRNewsPaginationPageNew IRNewsPaginationPageNumber' + i + 'New" id="' + i + '">' + i + '</div>';
                }
                paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPageNext" id="next" style="display:inline-block;">Next</div>';

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



    Handlebars.registerHelper('formatDate', function (timestamp, format) {
        return moment.tz(timestamp, globalActiveExchangeTimeZone).format('YYYY');
    });






    $(function () {

        setInterval(function () {
            applyIRNewsPagination();

            //Display different year only
            var prevYear = '';

            $('.IRDataGroup').each(function () {
                if ($(this).find('.IRShowYear').html() == prevYear) {
                    //$(this).find('.IRShowYear').css('visibility', 'hidden');
                    $(this).find('.IRShowYear').addClass('visibilityHidden');

                }
                prevYear = $(this).find('.IRShowYear').html();
            });

        }, 200);

    });

</script>
<link rel="stylesheet" href="news.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("news.css")).Ticks.ToString()%>" />
