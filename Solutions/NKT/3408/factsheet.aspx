<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>

<% 
    IRSite site = new IRSite();
%>
<%= site.factsheetHeader() %>

<script type="text/javascript">
    var activeModules = ['IRFactsheet'];
    var activeFeatures = ['ShareData', 'PerformanceChart', 'KeyFigures'];
</script>
<link rel="stylesheet" href="inc/css/ir.factsheet.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/css/ir.factsheet.css")).Ticks.ToString()%>" />
<div class="IRFactsheetModule"></div>

<%= site.factsheetFooter() %>


<script id="IRFactsheetTemplate" type="text/x-handlebars-template">

    <style>
        div {
            padding-bottom: 2px;
        }

        .IRFactsheetKeyFigureHighlightTable {
            margin-top: 2px;
        }

        .IRFactsheetFinancialHighlights .rowHeader {
            max-width: 210px;
        }

        .divider {
            margin-bottom: 3px;
        }
    </style>

    <%--<div class="IRFactsheet IRFloat IRSize6">
		{{{includeFactsheetBanner}}}
	</div>--%>
    <div class="IRFactsheetBanner">
        <div class="companyLogo">
            <img src="../logo.png">
        </div>
        <div class="companyBanner">
            <img src="../factsheet_logo_nkt.png?cachebust=2">
            <div class="companyBannerInfo">
                <ol>
                    <li style="float: left;"><strong>Market:</strong> Copenhagen</li>
                    <li><strong>ISIN:</strong> DK0010287663</li>
                    <li><strong>Sector:</strong> Industrial Goods & Services</li>
                </ol>
            </div>
        </div>
    </div>

    <div class="IRFactsheet IRFloat IRSize4">

        <div class="IRFactsheetAbout">
            {{{includeFactsheetAboutHeader "About NKT"}}}
			{{{includeFactsheetAboutSection "NKT is founded in 1891 and has been listed on Nasdaq Copenhagen since 1898. NKT has a proven track record of successful long-term development of industrial businesses through exercise of active ownership. Strategic focus, targeted investments and stringent financial governance combined with acquisitions are key elements to grow the businesses and to achieve superior value creation for its shareholders."}}}
			{{{includeFactsheetAboutSection "NKT’s businesses are active within power cables (NKT Cables), high-tech photonic products (NKT Photonics) and professional cleaning equipment (Nilfisk). In total NKT businesses are present in more than 100 countries and employ approx. 9,600 people."}}}
			{{{includeFactsheetAboutSection "As both NKT Cables and Nilfisk are leading players within their respective industries and are seen as viable standalone companies, the NKT Board of Directors intends to split NKT Holding into two separately listed companies; NKT and Nilfisk, during 2nd half 2017."}}}

        </div>

        <div class="IRFactsheetSharePriceChart">
            {{{includeFactsheetSharePriceChartPlaceholder 'Development in share price' '160px'}}}
        </div>

        <div class="IRFactsheet IRFloat IRSize4">

            <div class="IRFactsheetFinancialHighlights">
                <h2>Financial Highlights</h2>
                {{{includeFactsheetKeyFigureHighlightHeaders 'Factsheet' 'Amounts in EURm' keyFigures}}}
				{{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Amounts in EURm' 'Amounts in EURm' keyFigures}}}
				{{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Amounts in EURm' 'Revenue' keyFigures}}}
				{{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Amounts in EURm' 'Revenue in standard metal prices' keyFigures}}}
				{{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Amounts in EURm' 'Operational earnings before interest, tax, depreciation and amortisation (Oper. EBITDA)' keyFigures}}}				
				{{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Amounts in EURm' 'Earnings before interest and tax (EBIT)' keyFigures}}}
				{{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Amounts in EURm' 'Profit for the year from continuing operations' keyFigures}}}
				{{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Amounts in EURm' 'Profit for the year from discontinued operation' keyFigures}}}
				{{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Amounts in EURm' 'Profit for the year' keyFigures}}}
				{{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Amounts in EURm' 'Cash flow from operating activities continuing operations' keyFigures}}}
				{{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Amounts in EURm' 'Net interest-bearing debt relative to oper. EBITDA' keyFigures}}}
				{{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Amounts in EURm' '[%]Solvency (equity as % of total assets)' keyFigures}}}
				{{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Amounts in EURm' '[%]Return on capital employed (RoCE)' keyFigures}}}
				{{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Amounts in EURm' 'Average number of employees' keyFigures}}} 
                {{{includeFactsheetKeyFigureHighlightFooter}}}
            </div>
            <br />
            {{{includeFactsheetAboutSection "<b>Income Statement</b> - Nilfisk figures are excluded in 2016 and comparative figures are adjusted accordingly."}}}
		<div class="divider"></div>
            {{{includeFactsheetAboutSection "<b>Cash flow</b> - Include discontinued business."}}}
		<div class="divider"></div>
            {{{includeFactsheetAboutSection "<b>Balance Sheet</b> - Nilfisk items are classified as assets held for distribution to owners at 31 December 2016. The 2015 Balance Sheet is unchanged. Key figures such as RoCE and NIBD leverage include discontinued operations. Full specification of Nilfisk’s Income and Balance Sheet statements is presented in Note 9.2 to the NKT 2016 Annual Report."}}}

        </div>


    </div>

    <div class="IRFactsheet IRFloat IRSize2">
        <h2>Revenue split for NKT</h2>
        <div class="IRFactsheetChartPlaceholder" style="height: 120px;" data-highcharts-chart="0">
            <img src="images/NKTimage2.png" style="width: 250px" />
        </div>
        {{{includeFactsheetChart 'Column' 'Revenue' 'Amounts in EURm' 'Revenue' '180'}}}
        {{{includeFactsheetChart 'Column' 'Operational EBITDA' 'Amounts in EURm' 'Operational earnings before interest, tax, depreciation and amortisation (Oper. EBITDA)' '180'}}}
		

        
        <h2>Share data</h2>
        <table class="IRFactsheetShareDataTable">
            <tbody>
                <tr>
                    <td><%--Updated--%></td>
                    <td class="right"><span>{{showDateTime stocks/timestamp}}</span></td>
                </tr>
                <tr>
                    <td>Last price</td>
                    <td class="right"><span>{{decimals stocks/last}}</span></td>
                </tr>
                <tr>
                    <td>52 week high</td>
                    <td class="right"><span>{{decimals stocks/high52Week}}</span></td>
                </tr>
                <tr>
                    <td>52 week low</td>
                    <td class="right"><span>{{decimals stocks/low52Week}}</span></td>
                </tr>

                <tr>
                    <td>Issued shares</td>
                    <td class="right"><span>{{decimals stocks/shareMillions}} M</span></td>
                </tr>
                <tr>
                    <td>Market Cap.</td>
                    <td class="right"><span>{{toLocal stocks/marketCap}}</span></td>
                </tr>
                <tr>
                    <td>Avg. Volume 3 months</td>
                    <td class="right"><span id="avgVolume">{{{GetAverageVolumeByMonths 3}}}</span></td>
                </tr>
            </tbody>
        </table>

    </div>
    <br />


    <div class="IRFactsheet IRFloat IRSize6">
        {{{includeFactsheetDownloadPDF}}}
    </div>

</script>

<script type="text/javascript">

    Handlebars.registerHelper('includeFactsheetKeyFigureHighlightData', function (workSheetName, targetTable, targetRow, data) {
        var amountOfYearsOrQuarters = 3;
        var ret = "";
        var addPercentage = false;
        $.each(data, function () {
            if (this.workSheetName == workSheetName && this.tableName == targetTable) {
                $.each(this.rows, function () {
                    if (this.rowTitle == targetRow) {
                        ret += "<tr>";
                        if (targetRow.indexOf("[%]") == 0) {
                            addPercentage = true;
                            ret += "<td class=\"rowHeader\">" + checkIRFactsheetTranslations(this.rowTitle).replace("[%]", "") + "</td>";

                        } else {
                            addPercentage = false;
                            ret += "<td class=\"rowHeader\">" + checkIRFactsheetTranslations(this.rowTitle) + "</td>";
                        }
                        var subData = this.rowData.reverse();

                        $.each(subData, function () {
                            var subDataThousand = this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            if (amountOfYearsOrQuarters > 0) {
                                if (addPercentage) {
                                    ret += "<td class=\"right " + workSheetName + "\">" + subDataThousand + "%</td>";
                                } else {
                                    ret += "<td class=\"right " + workSheetName + "\">" + subDataThousand + "</td>";

                                }
                            }
                            amountOfYearsOrQuarters--;

                        });
                        ret += "</tr>";
                    }
                });
            }
        });
        return ret;
    });

</script>

<script type="text/javascript">
    function initIRFactsheet(data) {
        debugStep("initIRFactsheet");

        if (IRFactsheetModule) {
            if (typeof ($('.IRFactsheetModule').html()) != "undefined" && typeof ($('#IRFactsheetTemplate').html()) != "undefined") {
                $(".IRFactsheetModule").html(template_IRFactsheet(data));

                $('.IRFactsheetChartPlaceholder.IRChartTypeColumn').each(function () {
                    var target = $(this).html().replace("<!--", "").replace("-->", "").split(';');
                    var categories = getSpecificHeadersFromKeyFigures(globalChartDataPrepared, factsheetExcelTab, target[0]);
                    var dataTmp = getSpecificDataFromKeyFigures(globalChartDataPrepared, factsheetExcelTab, target[0], target[1]);
                    var dataStr = "[";
                    var delimiter = "";
                    var yValueMin = parseFloat(99999);
                    var yValueMax = parseFloat(0);
                    var paddingInAmount = 1;

                    if (dataTmp.length > 0) {
                        $.each(dataTmp, function () {
                            dataStr += delimiter + '{"y":' + parseFloat(this.toString().replace(",", ".")) + '}';
                            delimiter = ",";
                            if (parseFloat(this) < yValueMin) {
                                yValueMin = parseFloat(this);
                            }
                            if (parseFloat(this) > yValueMax) {
                                yValueMax = parseFloat(this);
                            }
                        });

                        yValueMin = yValueMin + paddingInAmount;
                        yValueMax = yValueMax + paddingInAmount;

                        dataStr += "]";
                        var data = JSON.parse(dataStr);

                        drawIRChartBase($(this), categories);
                        drawTargetDataToIRChartBase($(this), 'column', data);

                        $($(this)).highcharts().yAxis[0].setExtremes(yValueMin, yValueMax, false, false);

                        if (target[1].indexOf('Operational earnings') == 0) {
                            $($(this)).highcharts().zoom();

                        }

                        redrawIRChart($(this));
                    } else {
                        $(this).html('No data available');
                    }
                });
                $('.IRFactsheetChartPlaceholder.IRChartTypePie').each(function () {
                    var target = $(this).html().replace("<!--", "").replace("-->", "").split(';');

                    var dataTmp = getSpecificDataTableFromKeyFigures(globalChartDataPrepared, factsheetExcelTab, target[0], target[1]);
                    drawIRChartPieWithData($(this), dataTmp);
                    redrawIRChart($(this));
                });

            }
        }
    }

    Handlebars.registerHelper('includeFactsheetKeyFigureHighlightHeaders', function (workSheetName, targetTable, data) {
        var amountOfYearsOrQuarters = 3;
        var ret = "";
        ret += "<table class=\"IRFactsheetKeyFigureHighlightTable\">";
        ret += "<tr>";
        ret += "<th></th>";
        if (data.length > 0) {
            $.each(data, function () {
                if (this.workSheetName == workSheetName && this.tableName == targetTable) {
                    var subData = this.columnHeaders.reverse();
                    $.each(subData, function () {
                        if (amountOfYearsOrQuarters > 0) {
                            ret += "<th class=\"right\">" + this + "</th>";
                        }
                        amountOfYearsOrQuarters--;
                    });
                }
            });
            ret += "</tr>";
        } else {
            ret = "No data available";
        }
        return ret;
    });

    Handlebars.registerHelper('GetAverageVolumeByMonths', function (numberOfMonths) {

        var averageVolume = 0;
        var listen = setInterval(function () {

            if (globalRawClosePriceListingData !== null) {

                var closePriceData = globalRawClosePriceListingData.data;

                calculateAverageVolume(closePriceData.reverse());

                clearInterval(listen);
            }
        }, 100);



        function calculateAverageVolume(closePriceData) {
            var totalVolume = 0;
            var volumneNumbersAddedToCount = 0;
            for (var i = 0; i < closePriceData.length; i++) {

                var fromDate = new Date();
                fromDate = new Date(fromDate.setMonth(fromDate.getMonth() - numberOfMonths));
                if (new Date(closePriceData[i].date) > fromDate) {
                    totalVolume += closePriceData[i].volume;
                    volumneNumbersAddedToCount++;
                }
            }
            averageVolume = totalVolume / volumneNumbersAddedToCount;

            $('#avgVolume').html(formatNumberWithLocalDelimiters(parseFloat(averageVolume.toFixed(0))));
        }
    });


</script>
