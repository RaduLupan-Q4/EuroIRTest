<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite(); %>
<%= site.newHeader("IRMiniquoteChart") %>


<script type="text/javascript">
    var activeModules = ["IRMiniquoteChart"];
</script>

<div class="IRMiniquoteChartModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniquoteChartPlaceholder"></div>
    <div class="table-wrapper">
    <table class="IRMiniquoteChart table-look horizontal">
            <tr class="showLastPrice">
                <th class="Header miniquoteChart">{{headers/t_last}}</th>
                <td class="Data"><span style="font-weight: bold;">{{decimals stocks/last}}</span> {{showCurrency}} </td>
            </tr>
            <tr>
                <th class="Header change miniquoteChart">{{headers/t_change}}</th>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</td>
            </tr>
            <tr>
                <th class="Header miniquoteChart">{{headers/t_volume}}</th>
                <td class="Data ">{{toLocal stocks/volume}} </td>
            </tr>
            <tr>
                <th class="Header Timestamp miniquoteChart">{{headers/t_updated}}</th>
                <td class="Data Timestamp">{{showDateTime timestamp}}</td>
            </tr>
        <tr>
                <th class="Header Timestamp miniquoteChart">{{headers/t_year_to_date}}</th>
                <td class="Data Timestamp"><span id="changeYearToDate">&nbsp;</span></td>
            </tr>
        </table>
        </div>
    
</script>


<%= site.newFooter("IRMiniquoteChart") %>


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