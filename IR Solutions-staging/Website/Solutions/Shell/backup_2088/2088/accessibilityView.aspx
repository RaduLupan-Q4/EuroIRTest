<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
%>
<%= site.newHeader("IRCustomModule") %>

<script type="text/javascript">
    var activeModules = ["IRCustomModule"];
    var activeDataRequests = [
        'requestStockData',
        'requestIntradayListingData',
        'requestClosePriceListingData'
    ];
</script>

<div class="IRCustomModule">

    <div class="controls">

        <span class="timeframeHeader">Timeframe</span>
        <select class="timeframe">
            <option value="1" selected="selected">One day</option>
            <option value="5">Five days</option>
            <option value="30">One month</option>
            <option value="90">Three months</option>
            <option value="180">Six months</option>
            <option value="365">One year</option>
            <option value="1825">Five years</option>
            <option value="35500">Max</option>
        </select>

        <div class="IRButton">Update</div>

    </div>

    <br />

    <div class="accessibilityViewDataTable"></div>

</div>

<%= site.newFooter("IRCustomModule") %>

<script type="text/javascript">

    var toolRawStockData = null;
    var toolRawIntradayListingData = null;
    var toolRawClosePriceListingData = null;
    var toolSet = false;

    var dateFormat = 'YYYY-MM-DD';
    var fromDate = "first";
    var toDate = new moment();
    var currentPeriodSelectedDays = 1;

    var fromDateUnix = fromDate.valueOf();
    var toDateUnix = toDate.valueOf();

    $(function () {

        function prepareTool() {

            if (!toolSet) {
                $.when(requestStockData, requestIntradayListingData, requestClosePriceListingData).done(prepareData);

                $('.IRCustomModule .IRButton').on('click', function () {
                    var periodSelected = $('.IRCustomModule .timeframe').val();

                    currentPeriodSelectedDays = periodSelected;
                    var currentDate = new moment();
                    
                    fromDate = new moment().add(-periodSelected, 'day');
                    toDate = currentDate;
                    fromDateUnix = new moment().add(-periodSelected, 'day').valueOf();
                    toDateUnix = new moment().valueOf();

                    if (currentPeriodSelectedDays == 1) {
                        fromDate = "first";
                    }

                    updateAccessibilityViewDataTable();
                });

                toolSet = true;
            }

        }

        setInterval(function () {
            prepareTool();
        }, 100);

    });

    function prepareData(stockData, intradayListingData, closePriceListingData) {
        debugStep("initTable()");
        toolRawStockData = stockData[0].data[globalActiveListingIndex];
        toolRawIntradayListingData = intradayListingData[0].data[globalActiveListingIndex].data.reverse();
        toolRawClosePriceListingData = closePriceListingData[0].data[globalActiveListingIndex].data.reverse();
        updateAccessibilityViewDataTable();
    }
    function updateAccessibilityViewDataTable() {

        var firstDataPointPriceValue = null;
        var dataTable = "<table class=\"accessibilityViewTable\">";
        dataTable += "<tr>";
        dataTable += "<th class=\"IRElement0\">Timestamp</th>";
        dataTable += "<th class=\"IRElement1\">Last</th>";
        dataTable += "<th class=\"IRElement2\">Change</th>";
        dataTable += "<th class=\"IRElement3\">Change (%)</th>";
        dataTable += "<th class=\"IRElement4\">Volume</th>";
        dataTable += "<th class=\"IRElement5\">Open</th>";
        dataTable += "<th class=\"IRElement6\">High</th>";
        dataTable += "<th class=\"IRElement7\">Low</th>";
        dataTable += "</tr>";

        var dataSet = toolRawClosePriceListingData;
        if (currentPeriodSelectedDays == 1 || currentPeriodSelectedDays == 5) {
            dataSet = toolRawIntradayListingData;
        }

        $.each(dataSet, function (index, data) {

            var currentDate = new moment(data.date);
            if (currentPeriodSelectedDays == 1 || currentPeriodSelectedDays == 5) {
                // Intraday
                currentDate = new moment(data.timestamp);
                dateFormat = "DD-MM-YYYY HH:mm";
            } else {
                dateFormat = "DD-MM-YYYY";
            }

            var currentDateUnix = currentDate.valueOf();

            if (fromDate == "first") {
                    
                fromDate = new moment(dataSet[0].timestamp.split('T')[0], 'YYYY-MM-DD');
                fromDateUnix = new moment(dataSet[0].timestamp.split('T')[0], 'YYYY-MM-DD').valueOf();
            }
            
            if (currentDateUnix > fromDateUnix && currentDateUnix < toDateUnix) {

                if (firstDataPointPriceValue == null) {
                    firstDataPointPriceValue = data.closePrice;
                }

                var date = currentDate.format(dateFormat);
                var open = formatDecimalNoZero(data.openPrice);
                var high = formatDecimalNoZero(data.high);
                var low = formatDecimalNoZero(data.low);
                var close = formatDecimalNoZero(data.closePrice);
                var volume = formatLocal(data.volume);
                var change = formatDecimalNoZero(data.closePrice - firstDataPointPriceValue);
                var changePct = formatDecimalNoZero(((data.closePrice - firstDataPointPriceValue) / firstDataPointPriceValue) * 100) + ' %';

                if (changePct == '- %') {
                    changePct = "-";
                }
                if (currentPeriodSelectedDays == 1 || currentPeriodSelectedDays == 5) {
                    open = formatDecimalNoZero(data.open);
                }

                dataTable += "<tr>";
                dataTable += "<td class=\"IRElement0\">" + date + "</td>";
                dataTable += "<td class=\"IRElement1\">" + close + "</td>";
                dataTable += "<td class=\"IRElement2\">" + change + "</td>";
                dataTable += "<td class=\"IRElement3\">" + changePct + "</td>";
                dataTable += "<td class=\"IRElement4\">" + volume + "</td>";
                dataTable += "<td class=\"IRElement5\">" + open + "</td>";
                dataTable += "<td class=\"IRElement6\">" + high + "</td>";
                dataTable += "<td class=\"IRElement7\">" + low + "</td>";
                
                dataTable += "</tr>";
            }
        });
        dataTable += "</table>";
        $('.accessibilityViewDataTable').html(dataTable);
    }
</script>
