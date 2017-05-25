<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>


<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare'];
</script>

<div class="IRQuoteModule"></div>
<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <div class="updated"><span>{{headers/t_last_updated}} </span><span>{{showDateWithFormat timestamp 'DD MMM, YYYY HH:MM'}}</span></div>
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
    
    <div class="buttonWrapper">
        <div class="downloadHistoricalData buttonLook">Download Excel</div>    
    </div>

</script>


<%= site.newFooter("IRChart") %>
<%--<link type="text/css" rel="stylesheet" href="investorcom.css" />--%>

 <link rel="stylesheet" href="../ir.clientMaster.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("../ir.clientMaster.css")).Ticks.ToString()%>" />

<script type="text/javascript">
    
    $(document).on('click', '.basicButtonLook', function(){
        blackLine()
    });


    $(document).on('click','.downloadHistoricalData', function () {

        var startDate = new moment(globalChartFromDate, 'YYYY-MM-DD')._d;
        var endDate = new moment(globalChartToDate, 'YYYY-MM-DD')._d;
        
       

        requestClosePriceListingData.done(function (closePrices) {
            var downscaledData = getCroppedDownscaledData(closePrices.data[globalActiveListingIndex].data, startDate, endDate, "daily");
            var stringified = JSV.stringify(downscaledData); // Using JSV because service engine expects that.
            var tableHeader = {
                t_date: translations.t_date,
                t_open: translations.t_open,
                t_high: translations.t_high,
                t_low: translations.t_low,
                t_close: translations.t_close,
                t_volume: translations.t_volume
            };

            ajax_download(getServiceEngingeURL() + "RequestClosePriceFileFromData", {
                data: stringified,
                headers: JSON.stringify(tableHeader),
                apiVersion: clientApiVersion,
                fileName: clientCustomerKeyRequired + '_historical.xlsx',
                solutionID: clientSolutionID,
                lcid: clientLCID,
                customerKey: clientCustomerKeyRequired,
                ContentType: "application/vnd.ms-excel"
            });

        });

    });

    $('.downloadHistoricalDataExcel').on('click', function () {

        var startDate = new moment(globalChartFromDate, 'YYYY-MM-DD')._d;
        var endDate = new moment(globalChartToDate, 'YYYY-MM-DD')._d;

        requestClosePriceListingData.done(function (closePrices) {
            var downscaledData = getCroppedDownscaledData(closePrices.data[globalActiveListingIndex].data, startDate, endDate);
            var stringified = JSV.stringify(downscaledData); // Using JSV because service engine expects that.
            var tableHeader = {
                t_date: translations.t_date,
                t_open: translations.t_open,
                t_high: translations.t_high,
                t_low: translations.t_low,
                t_close: translations.t_close,
                t_volume: translations.t_volume
            };

            ajax_download(getServiceEngingeURL() + "RequestClosePriceFileFromData", {
                data: stringified,
                headers: JSON.stringify(tableHeader),
                apiVersion: clientApiVersion,
                fileName: clientCustomerKeyRequired + '_historical.xlsx',
                solutionID: clientSolutionID,
                lcid: clientLCID,
                customerKey: clientCustomerKeyRequired,
                ContentType: "application/vnd.ms-excel"
            });

        });

    });
    

    function blackLine(){
      for(var i = 0; i < globalChartDom.series.length; i++){
          if (globalChartDom.series[i].options.name == "FTSE All Share (ASX)"){
            globalChartDom.series[i].update({color: '#000000'});
            globalChartDom.yAxis[0].setCompare('percent');
              break;
          }
      }
        globalChartDom.redraw();
    }
</script>