<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSURL = "http://fonts.googleapis.com/css?family=Open+Sans";
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartTSR'];
</script>

<div class="IRQuoteModule"></div>
<br />
<div class="IRChartModule">
    <div class="IRChartColour"></div>
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

    <table class="IRQuoteModule table-look horizontal responsive">
        <tr>
            <th class="Header symbol column-first">{{headers/t_symbol}}</th>
            <th class="Header last">{{headers/t_last}}</th>
            <th class="Header change">{{headers/t_change}} (%)</th>
            <th class="Header bid">{{headers/t_bid}}</th>
            <th class="Header ask">{{headers/t_ask}}</th>
            <th class="Header volume">{{headers/t_volume}}</th>
            <th class="Header high">{{headers/t_high}}</th>
            <th class="Header low">{{headers/t_low}}</th>
            <th class="Header Timestamp column-last " id="hideH">{{headers/t_time}}</th>
        </tr>
        <tr>
            <td class="Data symbol column-first">{{stocks/symbol}}</td>
            <td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>
            <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
            <td class="Data bid">{{decimals stocks/bid}}</td>
            <td class="Data ask">{{decimals stocks/ask}}</td>
            <td class="Data volume">{{toLocal stocks/volume}}</td>
            <td class="Data high">{{decimals stocks/high}}</td>
            <td class="Data low">{{decimals stocks/low}}</td>
            <td class="Data Timestamp column-last" id="hideD">{{showDateTime stocks/tradeTimestamp}}</td>
        </tr>
    </table>

</script>

<script id="IRChartModuleTemplate" type="text/x-handlebars-template">

    <div class="IRChartNavigation">
        {{{includeIRChartCompanyName}}}
        {{{includeIRChartNavigation}}}
    </div>

    <div class="IRChartPlaceholderArea">
        {{{includeIRChartDomSettings}}}
        {{{includeIRChartPlaceholder}}}
        {{{includeIRChartChangePeriod 'y1'}}}
    </div>

</script>

<%= site.newFooter("IRChart") %>



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
                if (typeof ($('.activePeriod').html()) != 'undefined') {
                    if (listing == 1) {
                        $("#y1").click();
                        //$('#y1').removeClass("activePeriod");
                        //$('#d5').addClass("activePeriod");
                        //setChartExtremes(chartDisplayModes.intraday, 120);
                        //setChartExtremes(chartDisplayModes.historical, 3);   
                        //redrawIRChartHTMLIntraday();
                    

                        setListing = true;                  
                    } else {
                       
                    }
                }
            }
        }
        setInterval(function () {
            prepareListing();
        }, 200);
        
    });

    //setTimeout(function(){
    //$("#d5").click(function () {
    //    console.log('clicked');
    //    $(this).addClass("activePeriod");

    //   setChartExtremes(chartDisplayModes.intraday, 120);
      
    // $(this).data('clicked', true);

    //});
    //}, 1000);


     
   

</script>
