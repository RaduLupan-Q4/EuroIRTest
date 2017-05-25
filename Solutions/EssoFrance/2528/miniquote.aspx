<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule">
        <div class="miniquoteDetailsWrapper">
            <div>
                <div class="Data last"><span class="sign">€</span>{{decimals stocks/last}}</div>
                <span class="decimals"><span class="{{showArrow stocks/change}} arrow"></span>{{decimals stocks/change}}</span>
            </div>
            <div class="Data updated"><span class="englishOnly">{{headers/t_as_of}}</span> {{showDateWithFormat stocks/timestamp 'HH:MM'}} {{showLocalTimeZoneShort}} <span class="englishOnly">{{headers/t_on}} </span><span class="dateTimestamp">{{showDateWithFormat timestamp 'DD MMM, YYYY'}}</span></div>
        </div>
    </div>
</script>

<div class="miniquoteDisclaimer" style="display: none;">
    <%= site.newFooter("IRQuote") %>
</div>

<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>


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


    var customXApplied = false;
    function prepareCustomX() {
        if (!customXApplied) {
            if (typeof ($('.englishOnly').html()) != 'undefined') {
                var language = '';
                try {
                    language = getUrlParameter('language');
                }
                catch (err) {
                }
                if (language != 'fr') {
                    $('.englishOnly').attr('src', 'chart.aspx?language=' + language);
                    
                } else {          
                    $('span.englishOnly').css('display', 'none');
                    $('.dateTimestamp').addClass('lowercase');
                }
                customXApplied = true;
            }
        }
    }
    $(function () {
        setInterval(function () {
            prepareCustomX();
        }, 100);
    });



</script>







