<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:400,300,700"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";


%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
    var activeDataRequests = ['requestClosePriceListingData'];

</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="miniquote-name">{{stocks/name}} ({{stocks/symbol}})</div>
    <div class="Data closeDate">{{showDateTime timestamp}} </div>
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="Data miniquote-last"><%--<span class="{{showArrow stocks/change}}"></span>--%>{{decimals stocks/last}} <span class="currency">{{stocks/currency}}</span></div>
            <div class="Data change miniquote-change-today">{{headers/t_today}} {{decimals stocks/change}} <span class="{{showArrow stocks/change}}"></span> <span id="yearToDate">{{headers/t_year_to_date}} <span id="changeYearToDate">&nbsp;</span></span></div>
            
            <%-- <div class="Data delayed">Delayed {{headers/t_15_minutes}} </div>--%>
        </div>
    </div>
</script>

<%= site.newFooter("IRMiniquote") %>

<script type="text/javascript">

    var toolRawStockData = null;
    var toolRawIntradayListingData = null;
    var toolRawClosePriceListingData = null;
    var toolSet = false;

    $(function () {

        var request = {
            apiVersion: clientApiVersion,
            lcid: clientLCID,
            solutionID: clientSolutionID,
            customerKey: clientCustomerKeyRequired,
            numberOfYears: 1,
            instrumentTypes: ["Listing"]
        };
        requestClosePriceListingData2 = $.ajax({
            url: getServiceEngingeURL() + 'RequestClosePriceBundle_OHLC',
            type: 'GET',
            data: request,
            traditional: true,
            success: function (responseData, textStatus, errorThrown) {
            },
            error: function (responseData, textStatus, errorThrown) {
            }
        });


        function prepareTool() {

            if (!toolSet) {
                $.when(requestStockData, requestClosePriceListingData2).done(prepareData);
                toolSet = true;
            }

        }

        setInterval(function () {
            prepareTool();
        }, 100);

    });

    function prepareData(stockData, closePriceListingData) {
        debugStep("initTable()");
		
		// Prepare/Adjust data
		
        toolRawStockData = stockData[0].data[globalActiveListingIndex];
        toolRawClosePriceListingData = closePriceListingData[0].data[globalActiveListingIndex].data.reverse();

        var closePriceLastYear;

        if (toolRawClosePriceListingData.length == 0) {
            closePriceLastYear = 0;
        } else {

            var year = new moment(toolRawClosePriceListingData[0].date).format("YYYY");
            var lastYear = year;
            var count = 0;
            
            var lastYearDataFound = false;
            $.each(toolRawClosePriceListingData, function (data) {


                year = new moment(toolRawClosePriceListingData[data].date).format("YYYY");;

                if (year != lastYear) {
                    closePriceLastYear = toolRawClosePriceListingData[count].closePrice;
                    lastYearDataFound = true;
                }

                count++;

                lastYear = new moment(toolRawClosePriceListingData[data].date).format("YYYY");

            });

            if (!lastYearDataFound) {
                closePriceLastYear = toolRawClosePriceListingData[toolRawClosePriceListingData.length - 1].closePrice;
            }
        }
        
        updateAccessibilityViewDataTable(closePriceLastYear);
    }
    function updateAccessibilityViewDataTable(value) {
        
        if (value == 0) {
            value = 100;
        }

        var result = toolRawStockData.last - value;
        
        //skal ændres januar 2016 
        //var result = 100;
        //append result with 2 decimals        
        //$('#changeYearToDate').html(result.toFixed(2));
        $('#changeYearToDate').html(formatDecimal(result));
        
        //

        if (result > 1) {
            $('#changeYearToDate').html(result.toFixed(2) + " <span class=formatArrowPos></span>");
        }
        if (result < 0) {
            $('#changeYearToDate').html(result.toFixed(2) + " <span class=formatArrowNeg></span>");
        }
    }
</script>

