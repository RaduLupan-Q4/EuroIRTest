<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fast.fonts.net/cssapi/d62c0329-9fcc-43ae-b445-59557b0dbc19.css""/>";
%>

<%= site.newHeader("IRChartMini") %>

<script type="text/javascript">
    var activeModules = ['IRChartHTMLMini'];
</script>



<div class="IRChartOuter">

    <div class="IRChartHeader">
        <div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>
        <div class="IRChartCurrency">&nbsp;</div>
    </div>

    <div class="IRChartHTMLPlaceholder IRChartHTMLMiniPlaceholder">
        <span class="ajaxLoader">Loading</span>
    </div>

</div>

<%= site.newFooter("IRChartMini") %>



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

        
    $(function () {

        var listing = '';
        try {
            listing = getUrlParameter('listing');
        }
        catch (err) {
        }

        var setListing = false;

        function prepareListing() {
            if (!setListing) {
                if (typeof ($('.highcharts-container').html()) != 'undefined') {
                    //if (listing == 1) {
                    //    setChartExtremes(chartDisplayModes.historical, 10);
                    //    setListing = true;
                    //} else {
                       
                    //}
					$('.IRChartCurrency').css('z-index','100'); 
					$('.IRChartCurrency').css('top','3px');
					$('.IRChartClientName').css('background','none');
					$('.IRChartClientName').css('border','none');
                      
                }
            }
        }
        setInterval(function () {
            prepareListing();
        }, 100);

    });


</script>