<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  
    IRSite site = new IRSite();
    site.appendCustomCSSURL = "http://fonts.googleapis.com/css?family=Open+Sans";
%>

<%= site.newHeader("IRCalc") %>

<script type="text/javascript">
    var activeModules = ["IRCalc", 'IRCustomModule'];
    var activeFeatures = ['CurrencyConversion'];
    //var activeDataRequests = [
    //    'requestClosePriceListingData'
    ////    'RequestAnnouncement'
    //];
</script>
<div class="calcNavbarWrapper">
    <ul class="tabs">
        <li class="calcActive"><a href="#tab1" class="tabOption" id="byAmountInvested">By amount invested</a></li>
        <li><a href="#tab2" class="tabOption" id="bySharesBought">By shares bought</a></li>
    </ul>
</div>

<div class="IRCalcModule">
    <div class="IRChartColour"></div>
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRCalcTemplate" type="text/x-handlebars-template">
    <div class="calc-form-wrapper">
        <form id="calc-form">

            <%--<div class="input-row">
            <label for="from-datepicker" class="input-label from-label">{{t_change_listing}}:</label> 
            <div class="input-wrapper" style="width:230px; font-size:12px;">
                <div class="IRChangeListing"></div>
            </div>
        </div>--%>

            <div class="input-row">
                <label for="from-datepicker" class="input-label from-label" style="float: left;"><%--{{t_from}}:--%>Date of investment</label>
                <div class="input-wrapper">
                    {{{selectFromDay}}}
                {{{selectFromMonth}}}
                {{{selectFromYear}}}
                 {{{datepicker 'from'}}}
                </div>
            </div>
            <div class="input-row">
                <label for="to-datepicker" class="input-label to-label"><%--{{t_to}}:--%>End date of investment </label>
                <div class="input-wrapper">
                    {{{selectToDay}}}
                    {{{selectToMonth}}}
                    {{{selectToYear}}}
                    {{{datepicker 'to'}}}
                </div>
            </div>
            <div class="input-row" style="display: none">
                <label class="input-label invested-label">{{t_invested}}: </label>
                <div class="input-wrapper">
                    <input type="radio" name="invested" value="amount" id="amount-radio" checked="checked" />
                    <label for="amount-radio">Amount</label>
                    <input type="radio" name="invested" value="shares" id="shares-radio" />
                    <label for="shares-radio">Shares</label>
                </div>
            </div>
            <div class="input-row">
                <label class="input-label amount-invested-label">{{t_amount_invested}}</label>
                <div class="input-wrapper">
                    <span id="currency-symbol"></span>
                    <input type="text" id="amount-invested" step="any" min="0" />
                </div>
            </div>
            <div class="input-row">
                <label class="input-label currencyConversion-label">Currency</label>
                <div class="input-wrapper">
                    <select id="currencyConversion">
                        <option value="Current">Local Currency</option>
                        <option value="GBX">GBP</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
            </div>
            <div class="input-row" style="height: 40px;">
                    <input type="submit" class="IRButton" value="Show data" id="calculate-button" />
            </div>
        </form>
    </div>

    <div class="result-wrapper" style="display: none">
        <div class="result-close-button">
            <span>X</span>
        </div>
        <section id="result-section">
            <div class="section-then">

                <div class="Initial-investment-wrapper">
                    <div>
                        Initial investment
                    </div>
                    <div class="Initial-investment-from">
                    </div>
                </div>
                <table class="IRToolCalcResultsTable table-look vertical responsive initial-investment">
                    <tr>
                        <td class="Header value-then">Value Then</td>
                        <td class="Data value-then-cell">-</td>
                    </tr>
                    <tr>
                        <td class="Header buy-price">Share Price</td>
                        <td class="Data buy-price-cell">-</td>
                    </tr>
                    <tr>
                        <td class="Header est-shares">Share bought</td>
                        <td class="Data est-shares-cell">-</td>
                    </tr>
                </table>
            </div>

            <div class="section-now">
                <div class="End-Value-wrapper">
                    <div>
                        End Value
                    </div>
                    <div class="End-Value-to">
                    </div>
                </div>
                <table class="IRToolCalcResultsTable table-look vertical responsive end-value">
                    <tr>
                        <td class="Header value-now">Value Now</td>
                        <td class="Data value-now-cell">-</td>
                    </tr>
                    <tr>
                        <td class="Header sell-price">Share Price</td>
                        <td class="Data sell-price-cell">-</td>
                    </tr>

                    <tr>
                        <td class="Header change">Change</td>
                        <td class="Data change-cell">-</td>
                    </tr>
                    <tr>
                        <td class="Header yield"><%--{{t_yield}}--%>Change (%)</td>
                        <td class="Data yield-cell">-</td>
                    </tr>
                    <tr>
                        <td class="Header annualized-change">Annualized change (%)</td>
                        <td class="Data annualized-change-cell">-</td>
                    </tr>
                </table>
            </div>
        </section>
        <div class="graph-section">
            <div class="change-graph">
                <div class="graph-text">Cumulative change</div>
                <button class="cumulative-change" src="" />
                <button class="periodical-change" src="" />
            </div>
            <div class="IRChartCalcPlaceholder" style="width: 100%;"></div>
            <div class="IRChartStackedCalcPlaceholder" style="width: 100%; height: 400px; margin: 0 auto; display: none"></div>
        </div>
    </div>

</script>
<div class="calcDisclaimer">
    <%= site.newFooter("IRCalc") %>
</div>

<script>
    var customXApplied = false;
    function prepareCustomX() {
        if (!customXApplied) {
            if (typeof ($('.IRChartCalcPlaceholder')) != 'undefined') {


                var amountInvestedValue;
                $('#calculate-button').click(function () {

                    if ($('#amount-invested').val() != 0 && $('#amount-invested').val() !=  "" && $('#amount-invested').val() !=  "-") {
                        $('.result-wrapper').css('display', 'block');
                        amountInvestedValue = $('#amount-invested').val();
                    }
                    else {
                        alert("Please check the " + $('.amount-invested-label').text() + " field. \n1 share = 0.01");
                    }
                });


                $('.cumulative-change').click(function () {
                    $('.IRChartCalcPlaceholder').css('display', 'block');
                    $('.IRChartStackedCalcPlaceholder').css('display', 'none');
                    $('.graph-text').html("Cumulative change");
                });
                $('.periodical-change').click(function () {
                    $('.IRChartCalcPlaceholder').css('display', 'none');
                    $('.IRChartStackedCalcPlaceholder').css('display', 'block');
                    $('.graph-text').html("Periodical change");
                });

                $(document).ready(function () {

                    $("ul.tabs a").click(function () {
                        $('ul li.calcActive').removeClass('calcActive');
                        $(this).closest('li').addClass('calcActive');

                        if ($(this).attr('id') == "byAmountInvested") {
                            $('#amount-radio').prop('checked', true);
                            $('.amount-invested-label').text("Amount invested");
                            $('#amount-invested').val(amountInvestedValue);

                        } else {
                            $('#shares-radio').prop('checked', true);
                            $('.amount-invested-label').text("Number of shares invested");
                            $('#amount-invested').val(($('.est-shares-cell').text()));
                        }
                    });
                });
                customXApplied = true;
            }
        }
    }
    $(function () {
        setInterval(function () {
            prepareCustomX();
        }, 400);
    });



</script>

<script>

    var annualizedChangeSet = false;
    var globalClosePriceData = null;

    function prepareAnnualizedChange() {

        if (!annualizedChangeSet) {
            if (typeof ($('.IRToolCalcResultsTable .annualized-change').html()) == 'string') {


                $.when(requestClosePriceListingData)
                    .done(function (data) {

                        //Get all data 
                        //globalClosePriceData = data.data[0].data;
                        globalClosePriceData = stockData;

                        $("#calc-form").on("submit", generateStackChart);

                        annualizedChangeSet = true;
                    });
            }
        }

    }

    function generateStackChart() {
        $('.result-close-button').click(function() {
            $('.result-wrapper').css('display','none');
        });
        var amountOfShares = ($('.Data.est-shares-cell').text() * 100);


        //get start and end-date input
        var oldStartDate = moment.utc(readFromDate()).toISOString();
        var closestStartDate = getIndexThatBestMatchesDate(stockData, "date", new Date(oldStartDate), true);
        var startDate = stockData[closestStartDate].date;

        var oldEndDate = moment.utc(readToDate()).toISOString();
        var closestEndDateIndex = getIndexThatBestMatchesDate(stockData, "date", new Date(oldEndDate), true);
        var endDate = stockData[closestEndDateIndex].date;
   

        //get amount of days
        var amountOfDays = calcDaysBetweenDates(startDate, endDate);

        //filter data
        var filteredData = filterData(startDate, endDate);

        //get start date and end date based on filtered data
        $('.Initial-investment-from').html(moment(startDate).format("dddd, MMMM Do YYYY"));
        $('.End-Value-to').html(moment(endDate).format("dddd, MMMM Do YYYY"));

        //get "value then" value based on filtered array
        var valueThen = (filteredData[0].closePrice * amountOfShares) / 100;
        $('.value-then-cell').html(valueThen.toFixed(2));

        //get value now
        //var valueNow = ((requestStockData.responseJSON.data[0].prevClose * amountOfShares) / 100);
        //var valueNow = ((stockData[0].prevClose * amountOfShares) / 100);
        var valueNow = ((filteredData[filteredData.length - 1].closePrice * amountOfShares) /100);
        
        //get change value
        $('.change-cell').text(parseFloat(valueNow - valueThen).toFixed(2));
        //get annualized change
        var annualChange = ((Math.pow(valueNow/valueThen, (1/(amountOfDays/365)))-1)*100);
        $('.annualized-change-cell').text(annualChange.toFixed(2)+"%");


        //show view depending on amount of days
        if (amountOfDays <= 15) {
            dataArrayOutputter('daily', filteredData);
        }
        if (amountOfDays > 15 && amountOfDays <= 90) {
            dataArrayOutputter('weekly', filteredData);
        }
        if (amountOfDays > 90 && amountOfDays <= 365) {
            dataArrayOutputter('monthly', filteredData);
        }

        if (amountOfDays > 365 && amountOfDays < 1095) {
            dataArrayOutputter('quarterly', filteredData);

        }
        if (amountOfDays >= 1095) {
            dataArrayOutputter('yearly', filteredData);
        }

        //creates arrays of data and categories
        function dataArrayOutputter(frequency, closePriceArray) {

            //var startDay = moment(closePriceArray[0].date).format('M');

            var startClosePrise = (closePriceArray[0].closePrice / 100 * amountOfShares);
            var startClosePriseDate = (moment(closePriceArray[0].date).format('DD/MM/YYYY'));

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
                    startClosePriseDate = moment(closePriceArray[0].date).format('D');
                    

                }

                if (triggertimestamp != previousTriggertimestamp && triggertimestamp != startClosePriseDate) {
                    //push to sharePrice Array
                    sharePriceArray.unshift(fullDate.closePrice / 100 * amountOfShares);
                    categoriesArray.unshift(moment(fullDate.date).format('DD/MM/YYYY'));
                }
                previousTriggertimestamp = triggertimestamp;
            }
            //push to sharePrice Array
            sharePriceArray.unshift(startClosePrise);
            //push to categories array
            categoriesArray.unshift(moment(startClosePriseDate).format('DD/MM/YYYY'));


            //calculate the value which will then be shown in chart
            calculateIncreaseDecrease(categoriesArray, sharePriceArray);
        }

        function y2k(number) { return (number < 1000) ? number + 1900 : number; }
        function getWeek(year, month, day) {
            var when = new Date(year, month - 1, day);
            var newYear = new Date(year, 0, 1);
            var modDay = newYear.getDay();
            if (modDay == 0) modDay = 6; else modDay--;

            var daynum = ((Date.UTC(y2k(year), when.getMonth(), when.getDate(), 0, 0, 0) -
                         Date.UTC(y2k(year), 0, 1, 0, 0, 0)) / 1000 / 60 / 60 / 24) + 1;

            if (modDay < 4) {
                var weeknum = Math.floor((daynum + modDay - 1) / 7) + 1;
            }
            else {
                var weeknum = Math.floor((daynum + modDay - 1) / 7);
                if (weeknum == 0) {
                    year--;
                    var prevNewYear = new Date(year, 0, 1);
                    var prevmodDay = prevNewYear.getDay();
                    if (prevmodDay == 0) prevmodDay = 6; else prevmodDay--;
                    if (prevmodDay < 4) weeknum = 53; else weeknum = 52;
                }
            }

            return +weeknum;
        }

        //calculate the differenst between the arrays from dataArrayOutputter
        function calculateIncreaseDecrease(categoriesArray, sharePriceArray) {
            var increase = [null];
            var decrease = [null];
            var newSharePriceArray = [];

            newSharePriceArray.push(sharePriceArray[0]);
            var newSharePrice;

            for (var i = 0; i < sharePriceArray.length - 1; i++) {
                var difference = (sharePriceArray[i + 1] - sharePriceArray[i]);
                var differenceRounded = Math.round(difference * 100) / 100;


                if (differenceRounded >= 0) {
                    newSharePrice = sharePriceArray[i + 1] - differenceRounded;
                    newSharePriceArray.push(newSharePrice);
                    increase.push(differenceRounded);
                    decrease.push(null);
                } else {
                    newSharePrice = sharePriceArray[i] - -differenceRounded;
                    newSharePriceArray.push(newSharePrice);
                    decrease.push(Math.abs(differenceRounded));
                    increase.push(null);
                }
            }
            var yAxisStart = Math.min.apply(Math, newSharePriceArray) - 5;
            if (yAxisStart <0) {
                drawStackChart(categoriesArray, newSharePriceArray, decrease, increase, 0);

            } else {
                drawStackChart(categoriesArray, newSharePriceArray, decrease, increase, yAxisStart);
            }

        }


        //filter data by selected period
        function filterData(startDate, endDate) {

            var filteredData = stockData.filter(function (item) {

                
                if (item.date >= startDate && item.date <= endDate) {
                    return item;
                }
            });
            return filteredData;
        }


        //calculate amount of days between start- and endDate
        function calcDaysBetweenDates(startDate, endDate) {
            var date_diff = (moment(endDate) - moment(startDate));
            var convertToAmountDays = Math.round(date_diff / (1000 * 60 * 60 * 24));
            return convertToAmountDays;
        }

        
        //Draw stack chart
        function drawStackChart(categories, sharePrice, decrease, increase, yAxisStart) {
            var stackedColumnStyle = ['rgb(137, 165, 78)', 'rgb(170, 70, 67)', 'rgb(163, 163, 163)'];

            $('.IRChartStackedCalcPlaceholder').highcharts({
                chart: {
                    type: 'column'
                },
                colors: stackedColumnStyle,
                title: {
                    text: ''
                },
                xAxis: {
                    labels: {
                        rotation: -60
                    },
                    categories: categories
                },
                yAxis: {
                    min: yAxisStart,
                    title: {
                        text: 'GBP'
                    }
                },
                tooltip: {
                    formatter: function() {
                        //get shareprice of last object
                        var objects = this.points;
                        var sharePriceIndex = objects[objects.length - 1];
                        var sharePrice = sharePriceIndex.y;

                        var change = "";
                        var changePercent = "";
                        var value = sharePrice;


                        if (objects[0].series.index == 1) {
                            //value is decreasing
                            change = '<span>Change (GBP): </span><span style="color:' + objects[0].series.color + '; font-weight: bold"> -'+ objects[0].y + '</span><br>';
                            percentChange = (((sharePrice + objects[0].y) - sharePrice) / sharePrice * 100).toFixed(2);
                            changePercent = '<span>Change (%): </span><span style="color:' + objects[0].series.color + '; font-weight: bold"> -' + percentChange + '</span><br>';

                        } else if (objects[0].series.index == 0) {
                            //value is incresing
                            change = '<span>Change (GBP): </span><span style="color:' + objects[0].series.color + '; font-weight: bold">' + objects[0].y + '</span><br>';
                            percentChange = (((sharePrice + objects[0].y) - sharePrice) / sharePrice * 100).toFixed(2);
                            changePercent = '<span>Change (%): </span><span style="color:' + objects[0].series.color + '; font-weight: bold"> -' + percentChange + '</span><br>';

                        }

                        var html = '<span>' +  sharePriceIndex.key + '</span><br>' +
                            '<span>Value (GBP): </span><span><b>' + formatDecimalDecimal1000_fixed(value) + '</b></span><br>' +
                            '<span>Share price (GBX): </span><span><b>' + formatDecimalDecimal1000_fixed_noDecimals((sharePrice / amountOfShares * 100)) + '</b></span><br>' +
                            change + "<br>" +
                            changePercent + "<br>";
                        return html;
                    },
                    
                    style: {
                        fontFamily: 'inherit',
                        color: 'rgb(100, 119, 131)',
                        fontSize: '18px',
                        backgroundColor: 'rgba(255,255,255,0.8)',
                        valueDecimals: 2
                    },
                    borderColor: 'rgb(204, 204, 204)',
                    //pointFormat: '<span>{series.name}</span>: <b style="color:{series.color}">{point.y}</b><br/>',
                    shared: true
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        borderWidth: 0
                    }
                },
                credits: {
                    enabled: false
                },
                series: [
                {
                    index: 0,
                    name: 'Value increase compared to previous period',
                    data: increase
                }, {
                    index: 1,
                    name: 'Value decrease compared to previous period',
                    data: decrease
                }, {
                    index: 2,
                    name: 'Share Price',
                    data: sharePrice,
                    showInLegend: false
                }]
            });
        };

        $(window).resize();
    }
   
    $(function () {
        setInterval(function () {
            prepareAnnualizedChange();
        }, 400);
    });



</script>
<script type="text/javascript" src="inc/helpers.js?a=4"></script>