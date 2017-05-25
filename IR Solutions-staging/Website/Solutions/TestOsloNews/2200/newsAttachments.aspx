<%@ Page Language="C#" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRNews") 
    %>

<script type="text/javascript">
    var activeModules = ['IRNews'];
</script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<div class="IRNewsModule"></div>

<script id="IRNewsTemplate" type="text/x-handlebars-template">
    <%--<h2>Regulatory News</h2>--%>
    <div>
        <div class="IRNewsTool table-look horizontal responsive">

            <div class="IRHeaderGroup">
                <div class="IRHeader IRDate column-first">{{headers/t_date}}</div>
                <div class="IRHeader IRTitle">{{headers/t_title}}</div>
                <div class="IRHeader column-last file-type">News Attachments</div>
            </div>

            {{#each data}}

                <div class="IRDataGroup" id="{{storyID}}">
                    <div class="IRData IRDate column-first" id="{{showDateWithFormat timestamp 'YYYY-MM-DD'}}">{{showDate timestamp}}</div>
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
                                     <ul class="iconPDF newsAttachments">

                                         <div class="headerAttachment">Select attachment to download</div>
                                         {{#each attachments}}
                                         
                                         <li attURL="{{url}}">{{fileName}}</li>
                                     {{/each}}
                                     </ul>

                                 </div>
                        </div>
                            </div>

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


    setTimeout(function () {


        $('.newsAttachments ul').each(function () {

            if (typeof ($(this).find('li').html()) == 'string') {

                if (!$(this).hasClass('hasAttachments')) {
                    $(this).addClass('hasAttachments');
                }

                $(this).find('li').css('display', 'none');
                $(this).css('display', 'block');
                $(this).show();
            }
            
        });

        $('.newsAttachments .hasAttachments').click(function () {
            $(this).removeClass('iconPDF');
            $(this).addClass('select_inner');
            //('.newsAttachments').parent().append('<li class="header">Download Attachment</li>');
            $(this).find('li').css('display', 'block');
            $('.hasAttachments .headerAttachment').css('display', 'block');
            $(this).find('li').css('float', 'left');
        });
        
        $('.newsAttachments .hasAttachments li').on('click', function () {
            var url = $(this).attr('attURL');
            if (url) { //require a URL
                window.open(url); //redirect
            }
        });
       
        //hide select box on click
        $('body').click(function () {
            $('.newsAttachments .hasAttachments li').hide();
            $('.newsAttachments .hasAttachments').addClass('iconPDF');
            $('.newsAttachments .hasAttachments').removeClass('select_inner');
           // $('.hasAttachments .headerAttachment').css('display', 'none');
        });

        $('.newsAttachments').click(function (event) {
            event.stopPropagation();
        });
        $(document).on('click', '.close_box', function () {
            $(this).parent().fadeTo(300, 0, function () {
                $(this).remove();
            });
        });
    }, 1800);

</script>

<link rel="stylesheet" type="text/css" href="news.css" />