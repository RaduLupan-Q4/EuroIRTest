<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IROrders") %>

<script type="text/javascript">
    var activeModules = [''];
</script>

<%--<h2>Shareholder Structure</h2>--%>

<label>Show date:</label>
<select class="showDate">
    <option value="">Aug 31, 2015</option>
    <option value="">Jul 31, 2015</option>
    <option value="">Jun 30, 2015</option>
    <option value="">May 31, 2015</option>
    <option value="">Apr 30, 2015</option>
</select>
<br />
<br />
<p>Distribution of shares per shareholder.</p>

<table class="IRShareholderStructureModule shareholder table-look horizontal responsive">
    <tr>
        <th class="Header column-first shareAmount"><span class="desktop">Number of</span> shares</th>
        <th class="Header shareholderSize" style="border-right: 0; text-align: right;">Shareholders</th>
        <th class="Header shareholderSizePercent">% <span class="desktop">of owners</span></th>
        <th class="Header shareHolderSizeProgressbar" style="border-left: 0; width: 27%;"><%--Visual <span class="desktop">comparisation</span>--%></th>
        <th class="Header shareSize" style="border-right:0; width: 15%; "></th>
        <th class="Header shareSizePercent" style="border-left:0; width:10%;">Shares</th>
    </tr>
    <tr>
        <td class="Data column-first shareAmount">1 - 10</td>
        <td class="Data shareholderSize">2.424</td>
        <td class="Data shareholderSizePercent" shareholdersizepercent="4,41">4,41</td>
        <td class="shareHolderSizeProgressbar order-depth-bar-left">
            <div class="progress">
                <div class="progress-bar progress-bar-amount" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><span>4,41%</span></div>
            </div>
        </td>
        <td class="Data shareSize">16.073</td>
        <td class="Data shareSizePercent">(0,00%)</td>
    </tr>
    <tr>
        <td class="Data column-first shareAmount">11 - 100</td>
        <td class="Data shareholderSize">19.190</td>
        <td class="Data shareholderSizePercent" shareholdersizepercent="34,88">34,88</td>
        <td class="shareHolderSizeProgressbar order-depth-bar-left">
            <div class="progress">
                <div class="progress-bar progress-bar-amount" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><span>34,88%</span></div>
            </div>
        </td>
        <td class="Data shareSize">1.070.846</td>
        <td class="Data shareSizePercent">(0,20%)</td>
    </tr>
    <tr>
        <td class="Data column-first shareAmount">101 - 1.000</td>
        <td class="Data shareholderSize">25.050</td>
        <td class="Data shareholderSizePercent" shareholdersizepercent="45,53">45,53</td>
        <td class="shareHolderSizeProgressbar order-depth-bar-left">
            <div class="progress">
                <div class="progress-bar progress-bar-amount" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><span>45,53%</span></div>
            </div>
        </td>
        <td class="Data shareSize">9.516.896</td>
        <td class="Data shareSizePercent">(1,81%)</td>

    </tr>
    <tr>
        <td class="Data column-first shareAmount">1.001 - 10,000</td>
        <td class="Data shareholderSize">7.320</td>
        <td class="Data shareholderSizePercent" shareholdersizepercent="13,31">13,31</td>
        <td class="shareHolderSizeProgressbar order-depth-bar-left">
            <div class="progress">
                <div class="progress-bar progress-bar-amount" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><span>13,31%</span></div>
            </div>
        </td>
        <td class="Data shareSize">20.761.594</td>
        <td class="Data shareSizePercent">(3,95%)</td>
    </tr>
    <tr>
        <td class="Data column-first shareAmount">10.001 - 100.000</td>
        <td class="Data shareholderSize">905</td>
        <td class="Data shareholderSizePercent" shareholdersizepercent="1,65">1,65</td>
        <td class="shareHolderSizeProgressbar order-depth-bar-left">
            <div class="progress">
                <div class="progress-bar progress-bar-amount" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><span>1,65%</span></div>
            </div>
        </td>
        <td class="Data shareSize">23.640.475</td>
        <td class="Data shareSizePercent">(4,50%)</td>
    </tr>
    <tr>
        <td class="Data column-first shareAmount">100.000 +</td>
        <td class="Data shareholderSize">125</td>
        <td class="Data shareholderSizePercent" shareholdersizepercent="0,23">0,23</td>
        <td class="shareHolderSizeProgressbar order-depth-bar-left">
            <div class="progress">
                <div class="progress-bar progress-bar-amount" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><span>0,23%</span></div>
            </div>
        </td>
        <td class="Data shareSize">470.346.700</td>
        <td class="Data shareSizePercent">(89,52%)</td>
    </tr>
    <tr>
        <td class="Data column-first total shareAmount">TOTAL</td>
        <td class="Data total  shareholderSize">55.014</td>
        <td class="Data total shareholderSizePercent">100</td>
        <td class="Data total shareHolderSizeProgressbar">100</td>
        <td class="Data total totalShareSize desktop">525.352.584</td>
        <td class="Data total totalShareSizePercent desktop">(99,99%)</td>
    </tr>
</table>

<div style="margin-top: 80px;"></div>
<p>Ownership structure according to listed class B shares.</p>
<table class="IRShareholderStructureModule groupSector table-look horizontal responsive">
    <tr>
        <th class="sectorColor"></th>
        <th class="Header column-first sector">Sector</th>
        <th class="Header shareholderSize">Shareholders</th>
        <th class="Header shareSize" style="border-right:0;"></th>
        <th class="Header shareSizePercent" style="border-left:0;">Shares</th>
    </tr>

    <tr>
        <td class="sectorColor1"></td>
        <td class="Data column-first sector">Financial and insurance sectors</td>
        <td class="Data shareholderSize">116</td>
        <td class="Data shareSize">9.340.461</td>
        <td class="Data shareSizePercent">(2,08%)</td>
    </tr>
    <tr>
        <td class="sectorColor2"></td>
        <td class="Data column-first sector">Private Companies</td>
        <td class="Data shareholderSize">2.518</td>
        <td class="Data shareSize">108.333.646</td>
        <td class="Data shareSizePercent">(24,12%)</td>
    </tr>
    <tr>
        <td class="sectorColor3"></td>
        <td class="Data column-first sector">Corporations</td>
        <td class="Data shareholderSize">378</td>
        <td class="Data shareSize">227.723.177</td>
        <td class="Data shareSizePercent">(50,70%)</td>
    </tr>
    <tr>
        <td class="sectorColor4"></td>
        <td class="Data column-first sector">Other countries and international organizations</td>
        <td class="Data shareholderSize">42</td>
        <td class="Data shareSize">19.720.350</td>
        <td class="Data shareSizePercent">(4,39%)</td>
    </tr>
    <tr>
        <td class="sectorColor5"></td>
        <td class="Data column-first sector">Households</td>
        <td class="Data shareholderSize">51.087</td>
        <td class="Data shareSize">61.372.344</td>
        <td class="Data shareSizePercent">(13,66%)</td>
    </tr>
    <tr>
        <td class="sectorColor6"></td>
        <td class="Data column-first sector">Non-profit organisations</td>
        <td class="Data shareholderSize">873</td>
        <td class="Data shareSize">22.653.894</td>
        <td class="Data shareSizePercent">(5,05%)</td>
    </tr>
    <tr>
        <td class="Data sectorColor7"></td>
        <td class="Data column-first total shareAmount">TOTAL</td>
        <td class="Data total shareholderSize">55.014</td>
        <td class="Data total shareSize">449.187.000</td>
        <td class="Data total shareSizePercent">(99,99%)</td>
    </tr>
</table>


<div id="containerDesktop" style="min-width: 310px; height: 400px; max-width: 100%; margin: 0 auto"></div>
<div id="containerMobile" style="min-width: 310px; height: 400px; max-width: 100%; margin: 0 auto"></div>



<%= site.newFooter("IROrders") %>
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="shareholderstructure2.css">
<script src="http://code.highcharts.com/highcharts.js"></script>
<script src="http://code.highcharts.com/modules/exporting.js"></script>



<script type="text/javascript">

    setTimeout(function () {
        shareAmountBarWidth = 100;
        highestAmountOrPercentSize = 0;

        $('.IRShareholderStructureModule tr').each(function () {
            //var shareholderSize = parseInt($(this).find('.shareholderSize').attr('shareholderSize'));
            var shareholderSizePercent = parseInt($(this).find('.shareholderSizePercent').attr('shareholderSizePercent'));
            // if (parseFloat(shareholderSize) > parseFloat(highestAmountOrPercentSize)) {
            //   highestAmountOrPercentSize = shareholderSize;

            //}
            if (parseFloat(shareholderSizePercent) > parseFloat(highestAmountOrPercentSize)) {
                highestAmountOrPercentSize = shareholderSizePercent;
            }
        });

        var widthPerAmountPercent = shareAmountBarWidth / highestAmountOrPercentSize;

        $('.IRShareholderStructureModule tr').each(function () {
            //var shareholderSize = parseInt($(this).find('.shareholderSize').attr('shareholderSize'));
            var shareholderSizePercent = parseInt($(this).find('.shareholderSizePercent').attr('shareholderSizePercent'));
            $(this).find('.order-depth-bar-left div div.progress-bar').css('width', Math.ceil(shareholderSizePercent * widthPerAmountPercent) + '%');
            //$(this).find('.orderDepthBarRight div div.progress-bar').css('width', Math.ceil(shareholderSizePercent * widthPerAmountPercent) + '%');

        });


        // Pie Chart
        $(function () {
            Highcharts.setOptions({
                lang: {
                    decimalPoint: ',',
                    thousandsSep: '.'
                }
            });
            
            // Radialize the colors
            Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
                return {
                    radialGradient: {
                        cx: 0.5,
                        cy: 0.3,
                        r: 0.7
                    },
                    stops: [
                        [0, color],
                        [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
                    ]
                };
            });

            // Build the chart
            $('#containerDesktop').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: ''
                },
                credits: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
                },
                exporting: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.2f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            },
                            connectorColor: 'silver'
                        }
                    }
                },
                series: [{
                    name: "Shareholders",
                    data: [
                        { name: "Households", y: 13.66 },
                        {
                            name: "Private Companies",
                            y: 24.12,
                            sliced: true,
                            selected: true
                        },
                        { name: "Financial and insurance sectors", y: 2.08 },
                        { name: "Corporations", y: 50.70 },
                        { name: "Other countries and international organizations", y: 4.39 },
                        { name: "Non-profit organizations", y: 5.05 }
                    ]
                }]
            });
            // Build the chart
            $('#containerMobile').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: ''
                },
                credits: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
                },
                exporting: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false,
                            format: '<b>{point.name}</b>: {point.percentage:.2f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            },
                            connectorColor: 'silver'
                        }
                    }
                },
                series: [{
                    name: "Shareholders",
                    data: [
                        { name: "Households", y: 13.66 },
                        {
                            name: "Private Companies",
                            y: 24.12,
                            sliced: true,
                            selected: true
                        },
                        { name: "Financial and insurance sectors", y: 2.08 },
                        { name: "Corporations", y: 50.70 },
                        { name: "Other countries and international organizations", y: 4.39 },
                        { name: "Non-profit organizations", y: 5.05 }
                    ]
                }]
            });
        });


    }, 300);

</script>


