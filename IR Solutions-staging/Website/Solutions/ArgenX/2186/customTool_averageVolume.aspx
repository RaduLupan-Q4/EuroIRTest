<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
    
%>
<%= site.newHeader("IRPerformance") %>
<script type="text/javascript">
    var activeModules = ['IRPerformance'];
</script>

<div class="IRPerformanceModule"></div>

<table class="IRPerformanceModule table-look horizontal responsive">
    <tr>
        <th class="Header column-first avg_volume_Past12monthsHeader">Past 12 months</th>
        <th class="Header avg_volume_Past6monthsHeader">Past 6 months</th>
        <th class="Header avg_volume_Past3monthsHeader">Past 3 months</th>
        <th class="Header avg_volume_Past1monthsHeader">Past month</th>
    </tr>
    <tr>
        <td class="Data avg_volume_Past12months column-first">&nbsp;</td>
        <td class="Data avg_volume_Past6months">&nbsp;</td>
        <td class="Data avg_volume_Past3months">&nbsp;</td>
        <td class="Data avg_volume_Past1months">&nbsp;</td>
    </tr>
    <tr>
        <th class="Header column-first percentageChangeHeader"></th>
        <th class="Header pctChange_12monthsHeader">12 months</th>
        <th class="Header pctChange_YTDmonthsHeader">Year-To-Day</th>
        <th class="Header pctChange_mtdHeader">Month-To-Day</th>
    </tr>
    <tr>
        <td class="Data column-first percentageChange">Percentage change</td>
        <td class="Data pctChange_12months">&nbsp;</td>
        <td class="Data pctChange_ytd">&nbsp;</td>
        <td class="Data pctChange_mtd">&nbsp;</td>
    </tr>
</table>


<div class="performanceDisclaimer">
    <%= site.newFooter("IRPerformance") %>
</div>
<script type="text/javascript">
    function numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    function plusMinusPrefix(x) {
        var output = '' + x;
        if (x < 0) {
            output = "" + output;
        }
        else {
            output = "+" + output;
        }
        return output;
    }

    $.when(requestStockData, requestClosePriceListingData, requestClosePriceOtherData, requestTranslationsData).done(function (stockData, closePriceListingData, closePriceOtherData) {
        var historicalData = closePriceListingData[0].data[0].data;
        var historicalDataPoints = historicalData.length;
        
        var date_12monthsAgoUnix = moment.utc('<%= DateTime.UtcNow.AddYears(-1).ToString("yyyy-MM-dd") %>', "YYYY-MM-DD").format("X");
        var date_6monthsAgoUnix = moment.utc('<%= DateTime.UtcNow.AddMonths(-6).ToString("yyyy-MM-dd") %>', "YYYY-MM-DD").format("X");
        var date_3monthsAgoUnix = moment.utc('<%= DateTime.UtcNow.AddMonths(-3).ToString("yyyy-MM-dd") %>', "YYYY-MM-DD").format("X");
        var date_1monthsAgoUnix = moment.utc('<%= DateTime.UtcNow.AddMonths(-1).ToString("yyyy-MM-dd") %>', "YYYY-MM-DD").format("X");
        var date_yearStartUnix = moment.utc('<%= DateTime.UtcNow.ToString("yyyy") %>-01-01', "YYYY-MM-DD").format("X");
        var date_monthStartUnix = moment.utc('<%= DateTime.UtcNow.AddMonths(-1).ToString("yyyy-MM") %>-01', "YYYY-MM-DD").format("X");

        var date_12monthsAgo = new Date('<%=DateTime.Now.AddYears(-1).ToString("yyyy-MM-dd")%>');
        var date_6monthsAgo = new Date('<%=DateTime.Now.AddMonths(-6).ToString("yyyy-MM-dd")%>');
        var date_3monthsAgo = new Date('<%=DateTime.Now.AddMonths(-3).ToString("yyyy-MM-dd")%>');
        var date_1monthsAgo = new Date('<%=DateTime.Now.AddMonths(-1).ToString("yyyy-MM-dd")%>');
        var date_yearStart = new Date('<%=DateTime.Now.ToString("yyyy")%>-01-01');
        var date_monthStart = new Date('<%=DateTime.Now.AddMonths(-1).ToString("yyyy-MM")%>-01');

        var avgVolume_12months = 0;
        var avgVolume_6months = 0;
        var avgVolume_3months = 0;
        var avgVolume_1months = 0;

        var daysWithin_12months = 0;
        var daysWithin_6months = 0;
        var daysWithin_3months = 0;
        var daysWithin_1months = 0;

        var closePrice_12months = 0;
        var closePrice_ytd = stockData[0].data[0].last;
        var closePrice_mtd = stockData[0].data[0].last;

        var historicalDataTest = moment.utc(historicalData[historicalDataPoints - 1].date).format("X");
        
        for (i = 0; i < historicalDataPoints; i++) {

            var histDataDateUnix = moment.utc(historicalData[historicalDataPoints - 1 - i].date).format("X");

            if (histDataDateUnix > date_12monthsAgoUnix) {
                avgVolume_12months += historicalData[historicalDataPoints - 1 - i].volume;
                closePrice_12months = historicalData[historicalDataPoints - 1 - i].closePrice;
                daysWithin_12months++;
            }
            if (histDataDateUnix > date_6monthsAgoUnix) {
                avgVolume_6months += historicalData[historicalDataPoints - 1 - i].volume;
                daysWithin_6months++;
            }
            if (histDataDateUnix > date_3monthsAgoUnix) {
                avgVolume_3months += historicalData[historicalDataPoints - 1 - i].volume;
                daysWithin_3months++;
            }
            if (histDataDateUnix > date_1monthsAgoUnix) {
                avgVolume_1months += historicalData[historicalDataPoints - 1 - i].volume;
                daysWithin_1months++;
            }

            if (histDataDateUnix > date_yearStartUnix) {
                closePrice_ytd = historicalData[historicalDataPoints - 1 - i].closePrice;
            }
            if (histDataDateUnix > date_monthStartUnix) {
                closePrice_mtd = historicalData[historicalDataPoints - 1 - i].closePrice;
            }
        }
        avgVolume_12months = Math.round(avgVolume_12months / daysWithin_12months);
        avgVolume_6months = Math.round(avgVolume_6months / daysWithin_6months);
        avgVolume_3months = Math.round(avgVolume_3months / daysWithin_3months);

        avgVolume_1months = Math.round(avgVolume_1months / daysWithin_1months);

        var change_12months = Math.round((stockData[0].data[0].last - closePrice_12months) / closePrice_12months * 100, 2);
        var change_ytd = Math.round((stockData[0].data[0].last - closePrice_ytd) / closePrice_ytd * 100, 2);
        var change_mtd = Math.round((stockData[0].data[0].last - closePrice_mtd) / closePrice_mtd * 100, 2);

        $('.avg_volume_Past12months').html(numberWithCommas(avgVolume_12months));
        $('.avg_volume_Past6months').html(numberWithCommas(avgVolume_6months));
        $('.avg_volume_Past3months').html(numberWithCommas(avgVolume_3months));
        $('.avg_volume_Past1months').html(numberWithCommas(avgVolume_1months));

        $('.pctChange_12months').html(plusMinusPrefix(change_12months) + '%');
        $('.pctChange_ytd').html(plusMinusPrefix(change_ytd) + '%');
        $('.pctChange_mtd').html(plusMinusPrefix(change_mtd) + '%');
    });
</script>
