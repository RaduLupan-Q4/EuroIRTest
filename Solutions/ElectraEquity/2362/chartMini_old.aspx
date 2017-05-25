<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""https://fonts.googleapis.com/css?family=Roboto:400,700,300"" type=""text/css"" />";
%>


<%= site.newHeader("IRChartMini") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<script type="text/javascript">
    var activeModules = ['IRMiniquote', 'IRChartHTMLMini'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <h2>Share Price Chart</h2>
    <div class="IRChartMini table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="Data lastPrice"><a onclick="parent.location.href='http://www.electraequity.com/Investor-Relations/Electra/Share-Price/' ">{{decimals stocks/last}}p</a></div>
            <div class="NAVWrapper">
                <div class="Data"><span class="NAVprice">4,405p</span> NAV per share at 31/03/16</div>
            </div>
        </div>
    </div>
</script>

<div class="IRChartHTMLMiniPlaceholder">
    <span class="ajaxLoader">Loading</span>
</div>


<%= site.newFooter("IRChartMini") %>


<script type="text/javascript">
    setTimeout(function(){
        //Get JSON from calender feed
        $(function () {
            $.when(requestClosePriceListingData).done(function (closePriceListingData) {
                globalAmountOfListings = closePriceListingData.data.length;
                globalEarlyDate = new moment(closePriceListingData.data[0].data[0].date).format("YYYY")
            });
            $.getJSON('http://ir.euroinvestor.com/ServiceEngine/api/json/reply/RequestClosePriceBundle_OHLC?apiVersion=1&lcid=2057&solutionID=2362&customerKey=ElectraEquity&numberOfYears=10&instrumentTypes=Peer', function (data) {
                var allData = data;
                allData.data = data.data.slice(0, 4);
                

                if (allData.data[0].storyId == -1) {
                    allData = null;
                }

                var source = $('#IRMiniquoteModuleTemplate').html();
                //var template = Handlebars.compile(source);
                //$('.NAVprice').html(template(allData));

            }); //getJSON
        }); //function
    }, 1000);
    //var toolSet = false;

    //$(function () {

    //    function prepareTool() {

    //        if (!toolSet) {
    //            $.when(requestStockData, requestIntradayListingData, requestClosePriceListingData).done(prepareData);

    //            $('.IRCustomModule .IRButton').on('click', function () {
    //                var periodSelected = $('.IRCustomModule .timeframe').val();

    //                currentPeriodSelectedDays = periodSelected;
    //                var currentDate = new moment();

    //                fromDate = new moment().add(-periodSelected, 'day');
    //                toDate = currentDate;
    //                fromDateUnix = new moment().add(-periodSelected, 'day').valueOf();
    //                toDateUnix = new moment().valueOf();

    //                if (currentPeriodSelectedDays == 1) {
    //                    fromDate = "first";
    //                }

    //                updateAccessibilityViewDataTable();
    //            });

    //            toolSet = true;
    //        }

    //    }

    //    setInterval(function () {
    //        prepareTool();
    //    }, 100);

    //});

</script>


