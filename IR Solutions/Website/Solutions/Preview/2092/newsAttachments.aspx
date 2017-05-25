<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRNews") %>

<script type="text/javascript">
    var activeModules = ['IRNews'];
</script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<div class="IRNewsModule"></div>

<script id="IRNewsTemplate" type="text/x-handlebars-template">
    <h2>Regulatory News</h2>
     <div>
        <div class="IRNewsTool table-look horizontal responsive">
       
            <div class="IRHeaderGroup">
                <div class="IRHeader IRTitle">{{headers/t_title}}</div>
                <div class="IRHeader IRDate column-first">{{headers/t_date}}</div>
                <div class="IRHeader column-last file-type">File type</div>
            </div>

<%--            {{#each data}}--%>
                <div class="IRDataGroup">
                    <div class="IRData IRTitle"<%-- id="{{ShowCategoryShort categories}}"--%>>Share Holding(s)</div>
                    <div class="IRData IRDate column-first" <%--id="{{showDateWithFormat timestamp 'YYYY-MMM-DD'}}--%>"> 12-Mar-2014</div>
                    <div class="IRData IRDownload">
                        <div class="IRDownloadPDF">
                            {{{showRNSPDF pdfUrl}}}
                                 <div class="newsAttachments">
                                    <select class="iconPDF newsAttachments">
                                        <option value="MarketTechHoldings_13229930.pdf">Lease arrangements with related parties</option>
                                        <option value="MarketTechHoldings_13201898.pdf">Result of AGM</option>
                                    </select>
                                </div>
                        </div>

                        <div class="IRDownloadKB">
                            {{showFileSize pdfFileSize}}
                        </div>
                    </div>
                </div>
    <%--        {{/each}}--%>
            <div class="IRDataGroup">
                    <div class="IRData IRTitle"<%-- id="{{ShowCategoryShort categories}}"--%>>Mandatory notification of trade</div>
                    <div class="IRData IRDate column-first" <%--id="{{showDateWithFormat timestamp 'YYYY-MMM-DD'}}--%>"> 08-Sep-2015</div>
                    <div class="IRData IRDownload">
                        <div class="IRDownloadPDF">
                            {{{showRNSPDF pdfUrl}}}
                                 <div class="newsAttachments">
                                    <select class="iconPDF newsAttachments">
                                        <option value="test.pdf">Title1</option>
                                        <option value="test2.pdf">Title2</option>
                                    </select>
                                </div>
                        </div>

                        <div class="IRDownloadKB">
                            {{showFileSize pdfFileSize}}
                        </div>
                    </div>
                </div>
        </div>
        <div style="clear: both;"></div>
        <div class="IRNewsTableFooter">
            <div class="IRNewsPagination"></div>
        </div>

    </div>

</script>

<%= site.newFooter("IRNews") %>


<script type="text/javascript">


    setTimeout(function () {

        $('select.newsAttachments').wrap('<div class="select_wrapper"></div>')

        $('select.newsAttachments').parent().prepend('<span>' + $(this).find(':selected').text() + '</span>');
        $('select.newsAttachments').parent().children('span').width($('select').width());
        $('select').css('display', 'none');
        $('select.newsAttachments').parent().append('<ul class="select_inner"></ul>');
        $('select.newsAttachments').children().each(function () {
            var opttext = $(this).text();
            var optval = $(this).val();
            $('select.newsAttachments').parent().children('.select_inner').append('<li id="' + optval + '">' + opttext + '</li>');

        });

        $('select.newsAttachments').parent().find('li').on('click', function () {
            var cur = $(this).attr('id');
            $('select.newsAttachments').parent().children('span').text($(this).text());
            $('select.newsAttachments').children().removeAttr('selected');

            $('select.newsAttachments').children('[value="' + cur + '"]').attr('selected', 'selected');
            window.location = 'http://ir1.euroinvestor.com/IR/Files/OsloNewsWeb/1852416/2015-07-15/' + cur;
            console.log(cur);
            //console.log($('select').children('[id="' + cur + '"]').text());
        });
        $('select.newsAttachments').parent().on('click', function () {
            $(this).find('ul').slideToggle('fast');
        });
        $('body').click(function () {
            $('.select_inner').hide();
        });

        $('.newsAttachments').click(function (event) {
            event.stopPropagation();
        });

    }, 800);
    //function download(cur) {
    //    if (cur == '') return;
    //    window.location = 'http://ir1.euroinvestor.com/IR/Files/RNSNews/24155160/' + cur;
    //}
</script>

<link rel="stylesheet" type="text/css" href="news.css" />
