<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule">
        <div class="miniquoteDetailsWrapper">

            <div class="exchangeName">
                {{headers/t_bratislava_stock_exchange}}
            </div>
            <div class="Data lastPrice {{formatColour stocks/change}}">{{decimals stocks/last}} {{stocks/currency}}</div>
            <div class="Data change">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></div>
            <div class="link-to-chart">
                <span><a href="//www.tmr.sk/" target="_parent"><span class="more-link">{{headers/t_more}}</span> <span class="link-image">
                    <img src="images/arrow.png" /></span></a></span>
            </div>

        </div>
    </div>
</script>
<%= site.newFooter("IRMiniquote") %>


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
    $(document).ready(function () {
        var language = '';
        try {
            language = getUrlParameter('language');
        }
        catch (err) {
        }





        var customXApplied = false;

        console.log('customXApplied = false;');

    function prepareCustomX() {
        if (!customXApplied) {
            if (typeof ($('.link-to-chart span a').html()) != 'undefined') {
                
                if (language == 'pl') {
                    console.log('language = pl');
                    $('.link-to-chart span a').each(function () {
                        $(this).attr('href', $(this).attr('href') + 'dla-inwestorow/informacje-o-akcjach/');
                    });
                    //$('.link-to-chart span a').attr('src', 'http://www.tmr.sk/?lang=pl');
                    //$('#chartiframe').attr('src', 'chart.aspx?language=' + language);
                } else if (language == 'sk') {
                    $('.link-to-chart span a').each(function () {
                        $(this).attr('href', $(this).attr('href') + 'pre-investorov/informacie-o-akciach/');
                    });
                }
                else if (language == undefined || language == 'en') {
                    $('.link-to-chart span a').each(function () {
                        $(this).attr('href', $(this).attr('href') + 'investor-relations/shares/');
                    });
                }
                else {

                    $('.link-to-chart span a').each(function () {
                        $(this).attr('href', $(this).attr('href') + 'investor-relations/shares/');
                    });
                }
            
                customXApplied = true;
                console.log('customXApplied = true;');
            }
        }
    }
    $(function () {
        setInterval(function () {
            prepareCustomX();
        }, 200);
    });

 
    });
</script>
