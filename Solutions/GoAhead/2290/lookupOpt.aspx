<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
%>
<%= site.newHeader("IRLookup") %>

<script type="text/javascript">
    var activeModules = ["IRLookup", 'IRCustomModule'];
    var activeFeatures = ['CurrencyConversion'];
</script>

<div class="lookupNavbarWrapper">
    <ul class="tabs">
        <li class="lookupActive"><a href="#tab1" class="tabOption" id="historicalSharePrice">Historical share price</a></li>
        <li><a href="#tab2" class="tabOption" id="sharesPriceDownload">Share price download</a></li>
    </ul>
</div>  

<div class="IRLookupModule">
    <div class="IRChartColour"></div>
    <%= site.toolElement("loading") %>
</div>

<script id="IRLookupTemplate" type="text/x-handlebars-template">


    <div class="historical-share-price-wrapper">
        <div class="date-time-selection">
            <div class="selection-left">
                <span id="selectDateToPrice">Select the date to find price</span> 
                <span id="currencyLabel">Currency</span>
            </div>
            <div class="selection-right" id="historical-share-date-section">
                <select id="to-historical-day"></select>
                <select id="to-historical-month"></select>
                <select id="to-historical-year"></select>
                <input type="text" id="to-historical-datepicker" style="display: none">
                <select id="currencyConversion">
                    <option value="Current">Local Currency</option>
                    <option value="GBX">GBP</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>

        </div>

        <button id="HistoricalSharePriceButton">Show data</button>
        <div class="result-section">

            <div class="result-box" style="display: none">
                <div class="result-close-button">
                    <span>X</span>
                </div>

                <div style="clear: both"></div>
                <div class="single-share-left">
                    <table class="page-font-style">
                        <tbody>
                            <tr>
                                <td class="single-result-date-text">
                                    <span class="date-text"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="single-result-values">
                                    <div class="single-result-item-open"></div>
                                    <div class="single-result-item-high"></div>
                                    <div class="single-result-item-low"></div>
                                    <div class="single-result-item-volume"></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="single-share-right">
                    <table class="page-font-style">
                        <tbody>
                            <tr>
                                <td class="single-result-close-price-text">
                                    <span>Close Price</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="single-result-close-price">
                                    <span class="single-result-close-price-value"></span>

                                    <span class="single-result-close-price-currency"></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="yearlyStackedChart-wrapper">
                <div class="yearlyStackedChart-text">ANNUAL CLOSE PRICES</div>
                <div id="yearlyStackedChart"></div>
            </div>
        </div>
    </div>

    <div class="share-price-download-wrapper" style="display: none">
        <form id="lookup-form" method="POST">
            <div class="formDivider">
                <div class="input-row">
                    <div class="left-selection">
                        <span>Select time period</span>
                    </div>
                    <div class="right-selection">
                        <label for="from-datepicker" class="input-label from-label">{{t_from}}:</label>
                        <div class="input-wrapper">
                            {{{selectFromDay}}}
                            {{{selectFromMonth}}}
                            {{{selectFromYear}}}
                            <input type="text" id="from-custom-datepicker" style="display: none">
                            <%--{{{datepicker 'from'}}}--%>
                        </div>
                    </div>
                </div>
                <div class="input-row">
                    <div class="left-selection">
                        <span class="blankFromSeletion">&nbsp;</span>
                    </div>                   
                    <div class="right-selection" id="download-share-section">
                        <label for="to-datepicker" class="input-label to-label">{{t_to}}: </label>
                        <div class="input-wrapper">
                            {{{selectToDay}}}
                            {{{selectToMonth}}}
                            {{{selectToYear}}}
                        <input type="text" id="to-custom-datepicker" style="display: none">
                            <%--{{{datepicker 'to'}}}--%>
                        </div>
                        <%--<div>
                            <select id="currencyConversionDL">
                                <option value="Current">Local Currency</option>
                                <option value="GBX">GBP</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                            </select>
                        </div>--%>
                    </div>
                </div>
                <div class="input-row">
                    <div class="left-selection">
                        <span class="currencyLabel">Currency</span>
                    </div>   
                    <div class="right-selection" class="download-share-section">                      
                        <div>
                            <select id="currencyConversionDL">
                                <option value="Current">Local Currency</option>
                                <option value="GBX">GBP</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="input-row">
                    <button type="button" id="showSharePriceButton">Show data</button>
                </div>
                <div class="formDivider">
                    <div class="button-section" style="display: none">
                        <label class="input-label frequency-label">{{t_frequency}}: </label>
                        <div class="input-wrapper">
                            <select id="frequency" class="wide-input">
                                <option option="daily">{{t_daily}}</option>
                                <option option="monthly">{{t_monthly}}</option>
                                <option option="quarterly">{{t_quarterly}}</option>
                                <option option="yearly">{{t_yearly}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-row" style="display: none">
                        <label class="input-label format-label">{{t_format}}: </label>
                        <div class="input-wrapper">
                            <select id="format" class="wide-input">
                                <option value="html">HTML</option>
                                <option value="excel" selected="selected">Excel</option>
                            </select>
                        </div>
                    </div>
                </div>
        </form>
    </div>

    <div class="lookup-result-wrapper" style="display: none">
        <div class="result-close-button">
            <span>X</span>
        </div>
        <div class="lookup-button-section">
            <div class="lookupButton">
                <input type="submit" form="lookup-form" value="Download Data" id="lookup-button" />
            </div>
        </div>
        <div class="periodDataValuesWrapper">
            <div class="periodDataValues">
            </div>
        </div>
        <div class="chart-wrapper">
            <div class="IRChartLookupPlaceholder"></div>
        </div>
    </div>



</script>

<script id="IRLookupTableTemplate" type="text/x-handlebars-template">
    <table class="IRLookupResultsTable table-look horizontal responsive">
        <tr>
            <th class="Header column-first date">{{headers/t_date}}</th>
            <th class="Header open">{{headers/t_open}}</th>
            <th class="Header high">{{headers/t_high}}</th>
            <th class="Header low">{{headers/t_low}}</th>
            <th class="Header">{{headers/t_close}}</th>
            <th class="Header column-last volume">{{headers/t_volume}}</th>
        </tr>
        {{#each closePrices}}
            <tr>
                <td class="Data column-first date">{{date}}</td>
                <td class="Data price">{{decimal openPrice 2}}</td>
                <td class="Data high">{{decimal high 2}}</td>
                <td class="Data low">{{decimal low 2}}</td>
                <td class="Data">{{decimal closePrice 2}}</td>
                <td class="Data column-last volume">{{volume}}</td>
            </tr>
        {{/each}}
    </table>
</script>

<%= site.newFooter("IRLookup") %>

<script>
    var customXApplied = false;
    var globalClosePriceData = null;
    var globalClosePriceDataRAW = null;
    var globalRawCurrencyData = null;
    var globalRawStockData = null;
    var globalActiveCurrency = 'GBP';
    var latestAdjustmentFactor = 1;
    var latestAdjustmentFactorGBXUSD = 1;
    var globalDivideFactor = 100;
    var globalGBXUSDData = null;
    var globalGBXEURData = null;
    var dataGBXUSDAdjusted = null;
    var dataGBXEURAdjusted = null;

    function prepareCustomX() {
        if (!customXApplied) {
            if (typeof ($('.IRChartLookupPlaceholder')) != 'undefined') {

                $.when(requestClosePriceListingData)
                    .done(function (data) {

                        //chart colors
                        var chartColors = ['rgb(222, 7, 110)'];

                        //Get all data 
                        globalClosePriceData = data.data[0].data;
                        globalClosePriceDataRAW = data.data[0].data;

                        $.when(requestClosePriceListingData).done(function () {
                            globalActiveCurrency = requestStockData.responseJSON.data[0].currency;
                            globalActiveCurrency = globalActiveCurrency.replace("GBX", "GBP");
                        });

                        //custom datepicker
                        $(function () {
                            monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                            var currentTime = new Date();
                            var dayToday = currentTime.getDate() - 1;
                            var monthToday = currentTime.getMonth();
                            var yearToday = currentTime.getFullYear();
                            //day
                            for (var i = 1; i <= 31; i++) {
                                $('#to-historical-day').append("<option value=" + i + ">" + i + "</option>");
                            }
                            //month
                            for (var i = 0; i < monthArray.length; i++) {
                                $('#to-historical-month').append("<option value=" + i + ">" + monthArray[i] + "</option>");
                            }
                            //year                           
                            for (var i = 2006; i <= yearToday; i++) {
                                $('#to-historical-year').append("<option value=" + i + ">" + i + "</option>");
                            }
                            $('#to-historical-day').val(dayToday);
                            $('#to-historical-month').val(monthToday);
                            $('#to-historical-year').val(yearToday);
                            //to historical datepicker
                            $("#to-historical-datepicker").datepicker({
                                showOn: "button",
                                buttonImage: "http://devir.euroinvestor.com/inc/images/icons/calendar.png",
                                buttonImageOnly: true,
                                maxDate: new Date,
                                minDate: new Date(2006, 1, 0),
                                onSelect: function (dateText, inst) {
                                    var date = $(this).datepicker('getDate'),
                                        day = date.getDate(),
                                        month = date.getMonth(),
                                        year = date.getFullYear();
                                    $('#to-historical-day').val(day);
                                    $('#to-historical-month').val(month);
                                    $('#to-historical-year').val(year);
                                    cropGraph();
                                },
                                buttonText: "Select to date"
                            });
                            $("#to-historical-datepicker").datepicker("setDate", -1);

                            //from datepicker - download-share-section
                            $("#from-custom-datepicker").datepicker({

                                showOn: "button",
                                buttonImage: "http://ir.euroinvestor.com/inc/images/icons/calendar.png",
                                buttonImageOnly: true,
                                maxDate: new Date,
                                minDate: new Date(2006, 1, 0),
                                onSelect: function (dateText, inst) {
                                    var date = $(this).datepicker('getDate'),
                                        day = date.getDate(),
                                        month = date.getMonth(),
                                        year = date.getFullYear();
                                    $('#from-day').val(day);
                                    $('#from-month').val(month);
                                    $('#from-year').val(year);
                                    cropGraph();
                                },
                                buttonText: "Select from date"
                            });
                            $("#from-custom-datepicker").datepicker("setDate", -365);
                            //to datepicker - download-share-section
                            $("#to-custom-datepicker").datepicker({
                                showOn: "button",
                                buttonImage: "http://ir.euroinvestor.com/inc/images/icons/calendar.png",
                                buttonImageOnly: true,
                                maxDate: new Date,
                                minDate: new Date(2006, 1, 0),
                                onSelect: function (dateText, inst) {
                                    var date = $(this).datepicker('getDate'),
                                        day = date.getDate(),
                                        month = date.getMonth(),
                                        year = date.getFullYear();
                                    $('#download-share-section #to-day').val(day);
                                    $('#download-share-section #to-month').val(month);
                                    $('#download-share-section #to-year').val(year);
                                    cropGraph();
                                },
                                buttonText: "Select to date"
                            });
                        });


                        //tab navigation
                        $(document).ready(function () {

                            $("ul.tabs a").click(function () {
                                $('ul li.lookupActive').removeClass('lookupActive');
                                $(this).closest('li').addClass('lookupActive');

                                if ($(this).attr('id') == "sharesPriceDownload") {
                                    $('.share-price-download-wrapper').css('display', 'block');
                                    $('.historical-share-price-wrapper').css('display', 'none');

                                } else {
                                    $('.historical-share-price-wrapper').css('display', 'block');
                                    $('.share-price-download-wrapper').css('display', 'none');

                                }
                            });
                        });

                        //get historical prices by selected date
                        $('#HistoricalSharePriceButton').click(function () {

                            debugStep("clicked #HistoricalSharePriceButton");

                            //
                            //  Currency Conversion
                            //
                            if (typeof ($('#currencyConversion').val()) != "undefined" && $('#currencyConversion').val() != "Current") {

                                globalActiveCurrency = $('#currencyConversion').val();
                                globalActiveCurrency = globalActiveCurrency.replace("GBX", "GBP");

                                if ($('#currencyConversion').val() == 'GBX') {

                                    globalClosePriceData = dataGBXEURAdjusted;
                                    latestAdjustmentFactor = globalGBXEURData[globalGBXEURData.length - 1].conversationFactor;

                                    if (getActiveCurrency() == "GBX") {
                                        globalDivideFactor = 1;
                                    }

                                    //create yearly stack chart
                                    dataArrayOutputter('yearly', dataGBXEURAdjusted);

                                }

                                if ($('#currencyConversion').val() == 'USD') {

                                    globalClosePriceData = dataGBXUSDAdjusted;
                                    latestAdjustmentFactor = globalGBXUSDData[globalGBXUSDData.length - 1].conversationFactor;

                                    if (getActiveCurrency() == "GBX") {
                                        globalDivideFactor = 1;
                                    }

                                    //create yearly stack chart
                                    dataArrayOutputter('yearly', dataGBXUSDAdjusted);

                                }

                                if ($('#currencyConversion').val() == 'EUR') {

                                    globalClosePriceData = dataGBXEURAdjusted;
                                    latestAdjustmentFactor = globalGBXEURData[globalGBXEURData.length - 1].conversationFactor;

                                    if (getActiveCurrency() == "GBX") {
                                        globalDivideFactor = 1;
                                    }

                                    //create yearly stack chart
                                    dataArrayOutputter('yearly', dataGBXEURAdjusted);

                                }
                            } else {



                                // revert data

                                globalClosePriceData = globalClosePriceDataRAW;

                                latestAdjustmentFactor = 1;
                                globalDivideFactor = 100;
                                //create yearly stack chart
                                dataArrayOutputter('yearly', globalClosePriceData);

                            }

                            $('.result-box').css('display', 'block');

                            var selectedDay = $('#to-historical-day').val();
                            var selectedMonth = $('#to-historical-month').val();
                            var selectedYear = $('#to-historical-year').val();
                            var date = new Date(selectedYear + '/' + (parseInt(selectedMonth) + 1) + '/' + selectedDay);

                            var closestDate = getIndexThatBestMatchesDate(globalClosePriceData, "date", date, true);

                            //var selectedDate = moment(globalClosePriceData[closestDate].date).format('YYYY/MM/DD');
                            //var today = moment(Date.now()).format('YYYY/MM/DD');

                            //if (selectedDate == today) {
                            //    var today_timestamp = requestStockData.responseJSON.data[0].timestamp;
                            //    $('.date-text').text(moment(today_timestamp).format('DD/MMMM/YYYY'));
                            //    var today_open = requestStockData.responseJSON.data[0].open;
                            //    $('.single-result-item-open').text('Open: ' + today_open);
                            //    var today_high = requestStockData.responseJSON.data[0].high;
                            //    $('.single-result-item-high').text("Day's High: " + today_high);
                            //    var today_low = requestStockData.responseJSON.data[0].low;
                            //    $('.single-result-item-low').text("Day's Low: " + today_low);
                            //    var today_volume = requestStockData.responseJSON.data[0].volume;
                            //    $('.single-result-item-volume').text("Volume: " + today_volume);
                            //    var today_prevClose = requestStockData.responseJSON.data[0].prevClose;
                            //    $('.single-result-close-price-value').text(today_prevClose);
                            //    var currency = requestStockData.responseJSON.data[0].currency;
                            //    $('.single-result-close-price-currency').text(currency);
                            //} else {
                            //    for (var i = 0; i < globalClosePriceData.length; i++) {

                            //        var closePriceDate = moment(globalClosePriceData[i].date).format('YYYY/MM/DD');
                            //        var selectedFilterDate = moment(globalClosePriceData[closestDate].date).format('YYYY/MM/DD');

                            //         if (closePriceDate == selectedFilterDate) {
                            var chosen_date = globalClosePriceData[closestDate].date;
                            $('.date-text').text(moment(chosen_date).format('DD/MMMM/YYYY'));
                            var chosen_openPrice = globalClosePriceData[closestDate].openPrice * latestAdjustmentFactor;
                            $('.single-result-item-open').text('Open: ' + formatDecimalDecimal1000_fixed(chosen_openPrice));
                            var chosen_high = globalClosePriceData[closestDate].high * latestAdjustmentFactor;
                            $('.single-result-item-high').text("Day's High: " + formatDecimalDecimal1000_fixed(chosen_high));
                            var chosen_low = globalClosePriceData[closestDate].low * latestAdjustmentFactor;
                            $('.single-result-item-low').text("Day's Low: " + formatDecimalDecimal1000_fixed(chosen_low));
                            var chosen_volume = globalClosePriceData[closestDate].volume;
                            $('.single-result-item-volume').text("Volume: " + formatDecimalDecimal1000_fixed_noDecimals(chosen_volume));
                            var chosen_closePrice = globalClosePriceData[closestDate].closePrice * latestAdjustmentFactor;
                            $('.single-result-close-price-value').text(formatDecimalDecimal1000_fixed(chosen_closePrice));
                            var currency = globalActiveCurrency;
                            $('.single-result-close-price-currency').text(currency);
                            //       }
                            //   }
                            //}
                        });

                        //get selected shareprice period and show download 
                        $('#showSharePriceButton').click(function () {

                            debugStep("clicked #showSharePriceButton");

                            $('.lookup-result-wrapper').css('display', 'block');

                            var startDate = moment.utc(readFromDate()).toISOString();
                            var endDate = moment.utc(readToDate()).toISOString();

                            var amountOfDays = calcDaysBetweenDates(startDate, endDate);

                            //change excel view based on days between selected period
                            if (amountOfDays <= 90) {
                                $("#frequency option[option=daily]").prop("selected", "selected");
                            }
                            if (amountOfDays > 90 && amountOfDays <= 1095) {
                                $("#frequency option[option=monthly]").prop("selected", "selected");
                            }
                            else {
                                $("#frequency option[option=yearly]").prop("selected", "selected");
                            }

                            // Currency Conversion
                            if (typeof ($('#currencyConversionDL').val()) != "undefined" && $('#currencyConversionDL').val() != "Current") {
                                globalActiveCurrency = $('#currencyConversionDL').val();

                                if ($('#currencyConversionDL').val() == 'USD') {

                                    globalClosePriceData = dataGBXUSDAdjusted;
                                    latestAdjustmentFactor = globalGBXUSDData[globalGBXUSDData.length - 1].conversationFactor;

                                    if (getActiveCurrency() == "GBX") {
                                        globalDivideFactor = 1;
                                    }

                                    globalClosePriceData = dataGBXUSDAdjusted;

                                }

                                if ($('#currencyConversionDL').val() == 'EUR') {

                                    globalClosePriceData = dataGBXEURAdjusted;
                                    latestAdjustmentFactor = globalGBXEURData[globalGBXEURData.length - 1].conversationFactor;

                                    if (getActiveCurrency() == "GBX") {
                                        globalDivideFactor = 1;
                                    }


                                    globalClosePriceData = dataGBXEURAdjusted;

                                }
                            }
                            // END


                            var filteredData = filterData(startDate, endDate);

                            var changeOfThePeriodPercent = getPeriodChange(filteredData, "closePrice");
                            var highestClosePriceObj = getHighest(filteredData, "closePrice");
                            var lowestClosePriceObj = getLowest(filteredData, "closePrice");
                            var highestVolumeObj = getHighest(filteredData, "volume");
                            var lowestVolumeObj = getLowest(filteredData, "volume");
                            var highestDailyChangePercent = getHighest(filteredData, "HighestDailyChangePercent");
                            var lowestDailyChangePercent = getLowest(filteredData, "LowestDailyChangePercent");

                            $('.periodDataValues').html(
                                "<table class='periodValuesTable'><tbody>" +
                                    "<tr>" +
                                        "<td class='period-header'>Change of the period %</td>" +
                                        "<td class='period-data'>" + changeOfThePeriodPercent + " %</td>" +
                                        "<td class='period-date'></td>" +
                                    "</tr>" +
                                    "<tr>" +
                                        "<td class='period-header'>Highest Price</td>" +
                                        "<td class='period-data'>" + formatDecimalDecimal1000_fixed(highestClosePriceObj.closePrice * latestAdjustmentFactor) + "</td>" +
                                        "<td class='period-date'>" + moment(highestClosePriceObj.date).format('DD/MM/YYYY') + "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                        "<td class='period-header'>Lowest Price</td>" +
                                        "<td class='period-data'>" + formatDecimalDecimal1000_fixed(lowestClosePriceObj.closePrice * latestAdjustmentFactor) + "</td>" +
                                        "<td class='period-date'>" + moment(lowestClosePriceObj.date).format('DD/MM/YYYY') + "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                        "<td class='period-header'>Highest Volume</td>" +
                                        "<td class='period-data'>" + formatDecimalDecimal1000_fixed_noDecimals(highestVolumeObj.volume) + "</td>" +
                                        "<td class='period-date'>" + moment(highestVolumeObj.date).format('DD/MM/YYYY') + "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                        "<td class='period-header'>Lowest Volume</td>" +
                                        "<td class='period-data'>" + formatDecimalDecimal1000_fixed_noDecimals(lowestVolumeObj.volume) + "</td>" +
                                        "<td class='period-date'>" + moment(lowestVolumeObj.date).format('DD/MM/YYYY') + "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                        "<td class='period-header'>Highest daily change %</td>" +
                                        "<td class='period-data'>" + (highestDailyChangePercent[1]).toFixed(2) + " %</td>" +
                                        "<td class='period-date'>" + moment(highestDailyChangePercent[0].date).format('DD/MM/YYYY') + "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                        "<td class='period-header'>Lowest daily change %</td>" +
                                        "<td class='period-data'>" + (lowestDailyChangePercent[1]).toFixed(2) + " %</td>" +
                                        "<td class='period-date'>" + moment(lowestDailyChangePercent[0].date).format('DD/MM/YYYY') + "</td>" +
                                    "</tr>" +
                                "</tbody></table>"
                                );



                        });

                        //close(X) result
                        $('.result-close-button').click(function () {
                            $('.result-box').css('display', 'none');
                            $('.lookup-result-wrapper').css('display', 'none');
                        });

                        //create yearly stack chart
                        dataArrayOutputter('yearly', globalClosePriceData);

                        //filter data by selected period
                        function filterData(startDate, endDate) {
                            var filteredData = globalClosePriceData.filter(function (item) {

                                if (item.date >= startDate && item.date <= endDate) {
                                    return item;
                                }
                            });
                            return filteredData;
                        }

                        //get highest value by key
                        function getHighest(array, key) {
                            var max = {};
                            var maxChange = {};
                            var day;
                            var yesterday;
                            var dailyChangePercent;

                            if (key == "HighestDailyChangePercent") {
                                maxChange = 0;
                                for (var i = 1; i < array.length; i++) {
                                    day = array[i];
                                    yesterday = array[i - 1];
                                    dailyChangePercent = (((day.closePrice - yesterday.closePrice) / yesterday.closePrice) * 100);

                                    if (dailyChangePercent > maxChange) {
                                        maxChange = dailyChangePercent;
                                        max = day;
                                    }
                                }
                                return [max, maxChange];
                            } else {
                                for (var i = 0; i < array.length; i++) {
                                    if (array[i][key] > (max[key] || 0))
                                        max = array[i];
                                }
                                return max;
                            }
                        }
                        //get lowest value by key
                        function getLowest(array, key) {
                            var min = {};
                            min = array[0];
                            var minChange = {};
                            var day;
                            var yesterday;
                            var dailyChangePercent;

                            if (key == "LowestDailyChangePercent") {
                                minChange = 0;
                                for (var i = 1; i < array.length; i++) {
                                    day = array[i];
                                    yesterday = array[i - 1];
                                    dailyChangePercent = (((day.closePrice - yesterday.closePrice) / yesterday.closePrice) * 100);

                                    if (dailyChangePercent < minChange) {
                                        minChange = dailyChangePercent;
                                        min = day;
                                    }
                                }
                                return [min, minChange];
                            } else {
                                for (var i = 0; i < array.length; i++) {
                                    if (array[i][key] < (min[key] || 0))
                                        min = array[i];
                                }
                                return min;
                            }


                        }
                        //get period change
                        function getPeriodChange(array, key) {
                            var endDayClosePrice = array[0][key];
                            var startDayClosePrice = array[array.length - 1][key];

                            var result = ((startDayClosePrice - endDayClosePrice) / endDayClosePrice) * 100;
                            return result.toFixed(2);
                        }

                        function dataArrayOutputter(frequency, closePriceArray) {

                            //var startDay = moment(closePriceArray[0].date).format('M');

                            //var startClosePrise = (closePriceArray[0].closePrice / 100 * amountOfShares);

                            //start categories row
                            //var startCategoryDate = "Start";

                            //Arrays
                            var sharePriceArray = [];
                            var categoriesArray = [];

                            var filteredDataLength = closePriceArray.length;
                            var previousTriggertimestamp;

                            for (var i = 0; i < filteredDataLength; i++) {
                                var fullDate = closePriceArray[filteredDataLength - i - 1];
                                var convertedDate = moment(fullDate.date, 'YYYY/MM/DD');
                                var triggertimestamp;

                                if (frequency == 'yearly') {
                                    triggertimestamp = convertedDate.format('YYYY');
                                }
                                if (frequency == 'quarterly') {
                                    triggertimestamp = Math.floor((parseInt(convertedDate.format('M')) - 1) / 3);
                                }
                                if (frequency == 'monthly') {
                                    triggertimestamp = convertedDate.format('M');
                                }
                                if (frequency == 'weekly') {
                                    triggertimestamp = getWeek(convertedDate.format('YYYY'), convertedDate.format('M'), convertedDate.format('D'));
                                }
                                if (frequency == 'daily') {
                                    triggertimestamp = convertedDate.format('D');

                                }

                                if (triggertimestamp != previousTriggertimestamp /*&& previousTriggertimestamp != startDay*/) {
                                    //push to sharePrice Array
                                    sharePriceArray.unshift(fullDate.closePrice / globalDivideFactor);
                                    categoriesArray.unshift(moment(fullDate.date).format('YYYY'));
                                }
                                previousTriggertimestamp = triggertimestamp;
                            }
                            //push to sharePrice Array
                            //sharePriceArray.unshift(startClosePrise);
                            //push to categories array
                            //categoriesArray.unshift(startCategoryDate);
                            drawStackChart(sharePriceArray, categoriesArray);


                        }

                        //calculate amount of days between start- and endDate
                        function calcDaysBetweenDates(startDate, endDate) {
                            var date_diff = (moment(endDate) - moment(startDate));
                            var convertToAmountDays = Math.round(date_diff / (1000 * 60 * 60 * 24));
                            return convertToAmountDays;
                        }


                        function drawStackChart(sharePriceDate, categories) {



                            $(function () {
                                $('#yearlyStackedChart').highcharts({
                                    colors: chartColors,
                                    chart: {
                                        height: 200,
                                        type: 'column'
                                    },
                                    title: {
                                        style: {
                                            color: 'rgb(100, 119, 131)',
                                            font: 'normal 18px "DINWeb"'
                                        },
                                        text: 'Go-Ahead Group'
                                    },
                                    xAxis: {
                                        categories: categories
                                    },
                                    yAxis: {
                                        min: 0,
                                        labels: {
                                            formatter: function () {
                                                return Highcharts.numberFormat(this.value, 0);
                                            }
                                        },
                                        //tickInterval: 2000,
                                        title: {
                                            text: globalActiveCurrency
                                        }
                                    },
                                    tooltip: {
                                        pointFormat: '<b>{point.y}</b><br/>',
                                        valueDecimals: 2,
                                        shared: true,
                                        borderColor: 'none'
                                    },
                                    plotOptions: {
                                        column: {
                                            stacking: 'normal'
                                        }
                                    },
                                    credits: {
                                        enabled: false
                                    },
                                    series: [
                                        {
                                            name: '',
                                            data: sharePriceDate,
                                            showInLegend: false
                                        }
                                    ]
                                });
                            });
                        }


                        customXApplied = true;

                        // Currency conversion

                        setTimeout(function () {

                            debugStep("init loadFeatureCurrencyConversion('GBP', 'USD', 10)");
                            loadFeatureCurrencyConversion('GBP', 'USD', 10);
                            $.when(requestFeatureCurrencyConversionData).done(function (currencyConversionData) {
                                debugStep("done requestFeatureCurrencyConversionData GBP USD");
                                adjustStockData('GBXUSD', true, data.data[0].data, currencyConversionData.data);

                            });

                            debugStep("init loadFeatureCurrencyConversion('GBP', 'EUR', 10)");
                            loadFeatureCurrencyConversion('GBP', 'EUR', 10);
                            $.when(requestFeatureCurrencyConversionData).done(function (currencyConversionData) {
                                debugStep("done requestFeatureCurrencyConversionData GBP EUR");
                                adjustStockData('GBXEUR', true, data.data[0].data, currencyConversionData.data);
                            });

                        }, 500);
                    });
            }
        }
        $(window).resize();

    }
    $(function () {
        setInterval(function () {
            prepareCustomX();
        }, 400);
    });
function getDateOrClosestPreviousDate(array, key, pickedDate)
{
    debugStep("getIndexThatBestMatchesDate");
    debugger;
    var tmpdate = new Date(pickedDate.getDate());

    while(!array[tmpdate]){
        tmp.setDate(tmp.getDate() + i);
        i++;
    }

    return array[tmpdate];
}
    function adjustStockData(currencyCrossName, adjustForPoundPence, stockData, currencyData) {

        debugStep("adjustStockData");
        var startTS = new Date().getTime();
 
        var stockDataClone = [];

        var divideFactor = 1;
        if (adjustForPoundPence) {
            divideFactor = 100;
        }
        var currencyDictionary = {};
        $.each(currencyData, function(index,item){
            currencyDictionary[item.date] = item;
        });

        $.each(stockData, function (index, item) {

            var stockDataElement = {
                closePrice: null,
                date: null,
                high: null,
                low: null,
                openPrice: null,
                volume: null
            };

            var dateTS = new moment(item.date);



            var indexMatch = getDateOrClosestPreviousDate(currencyDictionary, "date", new Date(item.date));



            stockDataElement.date = item.date;
            stockDataElement.closePrice = (item.closePrice / divideFactor) * currencyData[indexMatch].conversationFactor;
            stockDataElement.openPrice = (item.openPrice / divideFactor) * currencyData[indexMatch].conversationFactor;
            stockDataElement.high = (item.high / divideFactor) * currencyData[indexMatch].conversationFactor;
            stockDataElement.low = (item.low / divideFactor) * currencyData[indexMatch].conversationFactor;
            stockDataElement.volume = item.volume;

            stockDataClone.push(stockDataElement);

        });

        debugStep("after each: " + (new Date().getTime() - startTS));


        switch (currencyCrossName) {
            case "GBXUSD":
                dataGBXUSDAdjusted = stockDataClone;
                globalGBXUSDData = currencyData;
                break;
            case "GBXEUR":
                dataGBXEURAdjusted = stockDataClone;
                globalGBXEURData = currencyData;
                break;

        }



        //globalChartListingStockDataOHLCV[globalActiveListingIndex] = stockData;

    }


</script>
<script type="text/javascript" src="inc/helpers.js?a=4"></script>



