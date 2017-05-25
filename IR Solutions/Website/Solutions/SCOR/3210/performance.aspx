<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Roboto:400,600,500""/>";
%>
<%= site.newHeader("IRPerformance") %>
<script type="text/javascript">
    var activeModules = ['IRPerformance'];
</script>

<div class="IRPerformanceModule"></div>

<script id="IRPerformanceModuleTemplate" type="text/x-handlebars-template">
    <table class="IRPerformanceModule table-look horizontal responsive">
        <thead>
            {{#headers}}
            <tr>
                <th class="Header column-first name">{{t_listings}}</th>
                <th class="Header price">{{t_price}}</th>
                <th class="Header ">{{t_5_days}}</th>
                <th class="Header months1">{{t_1_month}}</th>
                <th class="Header months3">{{t_3_months}}</th>
                <th class="Header months6">{{t_6_months}}</th>
                <th class="Header year1">{{t_1_year}}</th>
                <th class="Header high52">High 52W</th>
                <th class="Header column-last low52">Low 52W</th>
            </tr>
            {{/headers}}
        </thead>
        <tbody>
            {{#dataListings}}
            <tr>
                <td class="Data column-first symbol">{{name}}</td>
                <td class="Data price">{{decimals last}} {{currency}}</td>
                <td class="Data formatColour days5"></td>
                <td class="Data formatColour months1">{{decimals m1}}</td>
                <td class="Data formatColour months3">{{decimals m3}}</td>
                <td class="Data formatColour months6">{{decimals m6}}</td>
                <td class="Data formatColour year1">{{decimals y1}}</td>
                <td class="Data formatColour high52Scor">{{decimals high52Week}}</td>
                <td class="Data formatColour column-last low52Scor">{{ decimals low52Week}}</td>
            </tr>
            <tr>
                <td class="Data column-first name">Average daily volume</td>
                <td class="Data volumePrice">{{volume}}</td>
                <td class="Data volumeDays5"></td>
                <td class="Data volumeMonths1"></td>
                <td class="Data volumeMonths3"></td>
                <td class="Data volumeMonths6"></td>
                <td class="Data volumeYear1"></td>
                <td class="Data "></td>
                <td class="Data column-last"></td>
            </tr>
            {{/dataListings}}
        </tbody>
        <thead>
            {{#subHeaders}}
            <tr>
                <th class="Header column-first name">{{t_indices}}</th>
                <th class="Header price"></th>
                <th class="Header "></th>
                <th class="Header months1"></th>
                <th class="Header months3"></th>
                <th class="Header months6"></th>
                <th class="Header year1"></th>
                <th class="Header high52"></th>
                <th class="Header column-last low52"></th>
            </tr>
            {{/subHeaders}}
        </thead>
        <tbody>
            {{#dataIndices}}
            <tr>
                <td class="Data column-first symbol">{{name}}</td>
                <td class="Data price">{{decimals last}} {{currency}}</td>
                <td class="Data formatColour days5{{symbol}}"></td>
                <td class="Data formatColour months1">{{decimals m1}}</td>
                <td class="Data formatColour months3">{{decimals m3}}</td>
                <td class="Data formatColour months6">{{decimals m6}}</td>
                <td class="Data formatColour year1">{{decimals y1}}</td>
                <td class="Data formatColour high52{{symbol}}"></td>
                <td class="Data formatColour column-last low52{{symbol}}"></td>
            </tr>
            {{/dataIndices}}
        </tbody>
        {{#subHeaders}}
            <tr>
                <th class="Header column-first name">{{t_peer_group}}</th>
                <th class="Header price"></th>
                <th class="Header"></th>
                <th class="Header months1"></th>
                <th class="Header months3"></th>
                <th class="Header months6"></th>
                <th class="Header year1"></th>
                <th class="Header high52{{symbol}}"></th>
                <th class="Header column-last low52{{symbol}}"></th>
            </tr>
        {{/subHeaders}}
        {{#dataPeers}}
            <tr>
                <td class="Data column-first symbol">{{name}}</td>
                <td class="Data price">{{decimals last}} {{currency}}</td>
                <td class="Data formatColour days5{{symbol}}"></td>
                <td class="Data formatColour months1">{{decimals m1}}</td>
                <td class="Data formatColour months3">{{decimals m3}}</td>
                <td class="Data formatColour months6">{{decimals m6}}</td>
                <td class="Data formatColour column-last year1">{{decimals y1}}</td>
                <td class="Data formatColour high52{{symbol}}"></td>
                <td class="Data formatColour column-last low52{{symbol}}"></td>
            </tr>
        {{/dataPeers}}
    </table>
</script>
<%= site.newFooter("IRPerformance") %>

<script>

    //var url = '//ir.euroinvestor.com/ServiceEngine/api/json/reply/RequestClosePriceBundle_C?apiVersion=1&lcid=2057&solutionID=3210&customerKey=scor&numberOfYears=1&instrumentTypes=Peer&instrumentTypes=Index';

    //$.ajax({
    //    url: url
    //})
    //    .done(function (data) {
    $.when(requestClosePriceListingData).then(function (data) {

        var allData = data.data[0].data;

        var avrDays5 = getDayChange(allData, 5, 'closePrice');

        var avrDays5Volume = calculateAverageByDays(allData, 5, 'volume');
        var avrMonth1 = calculateAverageByMonth(allData, 1, 'volume');
        var volumeMonths3 = calculateAverageByMonth(allData, 3, 'volume');
        var volumeMonths6 = calculateAverageByMonth(allData, 6, 'volume');
        var volumeYear1 = calculateAverageByMonth(allData, 12, 'volume');

        setTimeout(function () {
            $('.days5').text(formatNumberWithLocalDelimiters(parseFloat(avrDays5)));
            $('.days5').removeClass("formatColour");
            try {
                if (parseFloat($('.days5').html()) > 0) {
                    $('.days5').addClass("formatColourPos");
                }
                if (parseFloat($('.days5').html()) < 0) {
                    $('.days5').addClass("formatColourNeg");
                }
            }
            catch (e) {
            }

            $('.volumeDays5').text(formatNumberWithLocalDelimiters(parseInt(avrDays5Volume.toFixed(0))));
            $('.volumeMonths1').text(formatNumberWithLocalDelimiters(parseInt(avrMonth1.toFixed(0))));
            $('.volumeMonths3').text(formatNumberWithLocalDelimiters(parseInt(volumeMonths3.toFixed(0))));
            $('.volumeMonths6').text(formatNumberWithLocalDelimiters(parseInt(volumeMonths6.toFixed(0))));
            $('.volumeYear1').text(formatNumberWithLocalDelimiters(parseInt(volumeYear1.toFixed(0))));
            formatColour();

        }, 500);

    });






    function getDayChange(data, days, attr) {
        var change = 0;

        data.reverse();

        change = data[0][attr] - data[days - 1][attr];
        return change;

    }

    function calculateAverageByDays(data, days, attr) {
        var total = 0;
        var totalDaysCount = 0;
        data.reverse();

        var date = new Date();
        date.setDate(date.getDate() - days);
        

        for (var i = 0; i < data.length; i++) {
            var dateFromFeed = new Date(data[i].date);
            if (dateFromFeed >= date) {
                totalDaysCount++;
                total += data[i][attr];
            }
        }
        return total / totalDaysCount;
    }
    function calculateAverageByMonth(data, month, attr) {
        var total = 0;
        var totalDaysCount = 0;
        data.reverse();

        var date = new Date();
        date.setMonth(date.getMonth() - month);


        for (var i = 0; i < data.length; i++) {
            var dateFromFeed = new Date(data[i].date);
            if (dateFromFeed >= date) {
                totalDaysCount++;
                total += data[i][attr];
            }
        }
        return total / totalDaysCount;
    }


    $.when(requestStockData).then(function (data) {

        setTimeout(function () {
            $('.volumePrice').text(formatNumberWithLocalDelimiters(data.data[0].volume));
            $('.high52Scor').text(data.data[0].high52Week);
            $('.low52Scor').text(data.data[0].low52Week);
        }, 500);

    });

    $.when(requestClosePriceOtherData).then(function (data) {

        setTimeout(function () {

            var cac40Data = data.data[0].data;
            addMinAndMax(cac40Data, 'PX1');
            getChangeForIndexAndPeers(cac40Data, 'PX1');

            var sbf120Data = data.data[1].data;
            addMinAndMax(sbf120Data, 'PX4');
            getChangeForIndexAndPeers(sbf120Data, 'PX4');

            var DJinsuranceData = data.data[2].data;
            addMinAndMax(DJinsuranceData, 'DJTINNE');
            getChangeForIndexAndPeers(DJinsuranceData, 'DJTINNE');


            var dowJonesData = data.data[3].data;
            addMinAndMax(dowJonesData, 'DJTFVSE');
            getChangeForIndexAndPeers(dowJonesData, 'DJTFVSE');


            var munichData = data.data[4].data;
            addMinAndMax(munichData, 'MUV2');
            getChangeForIndexAndPeers(munichData, 'MUV2');

            var swissData = data.data[5].data;
            addMinAndMax(swissData, 'SREN');
            getChangeForIndexAndPeers(swissData, 'SREN');

            var hannoverData = data.data[6].data;
            addMinAndMax(hannoverData, 'HNR1');
            getChangeForIndexAndPeers(hannoverData, 'HNR1');

            var axaData = data.data[7].data;
            addMinAndMax(axaData, 'CS');
            getChangeForIndexAndPeers(axaData, 'CS');

        }, 500);

        function getChangeForIndexAndPeers(data, symbol) {
           

            var change = getDayChange(data, 5, 'closePrice');

            setTimeout(function () {
                
                var classToUpdate = '.days5' + symbol;
                $(classToUpdate).text(formatNumberWithLocalDelimiters(parseFloat(change)));
                $(classToUpdate).removeClass("formatColour");
                try {
                    if (parseFloat($(classToUpdate).html()) > 0) {
                        $(classToUpdate).addClass("formatColourPos");
                    }
                    if (parseFloat($(classToUpdate).html()) < 0) {
                        $(classToUpdate).addClass("formatColourNeg");
                    }
                } catch (e) {
                }
            }, 500);
        }

    });

    

    function addMinAndMax(data, className) {

        var High52wObj = getMax(data, 'closePrice');
        var High52w = formatLocal(High52wObj.closePrice);
        var Low52wObj = getMin(data, 'closePrice');
        var Low52w = formatLocal(Low52wObj.closePrice);

        setTimeout(function () {
            $('.high52' + className).text(High52w);
            $('.low52' + className).text(Low52w);
        }, 500);
    }
    function getMax(arr, prop) {
        var max;

        for (var i = 0; i < arr.length; i++) {
            if (!max || parseInt(arr[i][prop]) > parseInt(max[prop]))
                max = arr[i];
        }
        return max;
    };


    function getMin(arr, prop) {
        var min;
        for (var i = 0; i < arr.length; i++) {
            if (parseInt(arr[i][prop]) != 0) {
                if (!min || parseInt(arr[i][prop]) < parseInt(min[prop])) {
                    min = arr[i];
                }
            }
        }
        return min;
    };


</script>

<%--<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>--%>

