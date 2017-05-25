<%@ Page Language="C#" %>

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

    <div class="tab-container">

        <ul class="list_reset ul-list-tabs">
            <li class="li-tab current pointer" id="tab1">
                
                <select id="select-filter">
                    <option value="Title Only" selected="selected">Choose Category</option>
                    <option value="Title and Content">All News</option>
                    <option value="Title and Content">Company Announcements</option>
                    <option value="Title and Content">Annual Report</option>
                    <option value="Title and Content">Insiders Dealing</option>
                    <option value="Title and Content">Interim Report</option>

                </select>
            </li>
            <li class="li-tab" id="tab2">
               
                <select id="select-filter">
                    <option value="Title Only" selected="selected">Choose Year</option>
                    <option value="Title and Content">2016</option>
                     <option value="Title and Content">2015</option>
                     <option value="Title and Content">2014</option>
                     <option value="Title and Content">2013</option>
                     <option value="Title and Content">2012</option>
                     <option value="Title and Content">2011</option>
                     <option value="Title and Content">2010</option>
                </select>
            </li>
            <li class="li-tab tab-3" id="tab3">
                <select id="select-filter">
                    <option value="Title Only" selected="selected">Choose Language</option>
                    <option value="Title and Content">English</option>
                     <option value="Title and Content">Danish</option>
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
            <div class="search-to">
                <label for="to-datepicker" class="textArea input-label to-label">{{headers/t_to}}: </label>
                <div class="select-date">
                    {{{newsSelectToMonth 'MMMM'}}}
                        {{{newsSelectToYear}}}
                </div>
            </div>
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
    <div>
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
                    <div class="IRData IRDate column-first" id="{{showDateWithFormat timestamp 'YYYY-MM-DD'}}">{{showDateWithFormat timestamp 'MMM DD, YYYY'}}</div>
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

    var tabsApplied = false;
    function prepareTabs() {
        if (!tabsApplied) {
            if (typeof ($('.IRData.IRTitle')) != 'undefined') {

                /* switch between tabs ====================== */
                console.log('test');
                $(function () {
                    console.log('test2');
                    $(".ul-list-tabs li").click(function () {
                        $('.tab').hide().eq($(this).index()).show();
                    });

                    $('ul li').click(function () {
                        $('ul li').removeClass('current pointer');

                        $(this).addClass('current pointer');
                    });

                    console.log('test3');
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

