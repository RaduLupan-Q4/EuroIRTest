<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>

<%
    IRSite site = new IRSite();
%>
<%= site.factsheetHeader() %>
<link rel="stylesheet" type="text/css" media="screen" href="inc/factsheet.css" />

<script type="text/javascript">
    var activeModules = ['IRFactsheet'];
    var activeFeatures = ['ShareData', 'PerformanceChart', 'KeyFigures'];
</script>

<div class="IRFactsheetModule"></div>

<%= site.factsheetFooter() %>
<script type="text/javascript" src="includes/js/libs/radial-progress-bar.js"></script>
<script type="text/javascript" src="inc/ir.factsheet.js"></script>
    <script id="IRFactsheetTemplate" type="text/x-handlebars-template">

        <div class="wrapper">
            <div class="grid to-right">
                <div class="item IRFactsheetAbout">
                    {{{includeFactsheetAboutHeader "About Revenio Group"}}} {{{includeFactsheetAboutSection "Revenio is a Finnish, globally operating health technology corporation whose worldwide success is based on a strongly patented intraocular pressure measurement technology.
                    The Revenio Group consists of Icare Finland Oy, Revenio Research Oy and Oscare Medical Oy, in which Revenio holds a 53% interest.The common denominators of Revenio's business operations include screening, follow-up and the global need
                    to make cost savings through preventive health care. Revenio seeks vigorous growth in health technology. Revenio aims at developing even more efficient and easily adopted methods for the early-stage detection of diseases with significance
                    for public health. The focus of Revenio's screening technology is on the early detection of glaucoma, osteoporosis, skin cancer and asthma, and the monitoring of these during the treatment process."}}}
                </div>
                <div class="item">
                    {{{includeFactsheetChart 'Column' 'Market value' 'Market value' 'Market value, EURm' '200'}}}
                </div>
                <div class="item IRFactsheetSharePriceChart">
                    {{{includeFactsheetSharePriceChartPlaceholder 'Development in share price' '170px'}}}
                </div>
                <div class="item">
                    <div class="bigShapes-box small">
                        <div class="bigNumberBox">
                            <span>+100</span>
                        </div>
                        <p class="text">New employees</p>
                    </div>
                </div>
                <div class="item wide circle-list">
                    <h2>Ownership structure according to percentage of shares</h2>
                    <div class="circle-list">
                        <div class="pie-item">
                            <div id="pie_1" class="example" style="width: 100px;"></div>
                            <span class="pie-item-title">Corporations</span>
                        </div>
                        <div class="pie-item">
                            <div id="pie_2" class="example" style="width: 100px;"></div>
                            <span class="pie-item-title">Financial and insurance corporations</span>
                        </div>
                        <div class="pie-item">
                            <div id="pie_3" class="example" style="width: 100px;"></div>
                            <span class="pie-item-title">Households</span>
                        </div>
                        <div class="pie-item">
                            <div id="pie_4" class="example" style="width: 100px;"></div>
                            <span class="pie-item-title">Public sector</span>
                        </div>
                        <div class="pie-item">
                            <div id="pie_5" class="example" style="width: 100px;"></div>
                            <span class="pie-item-title">Foreign countries and nominee registered</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="IRFactsheet">
                {{{includeFactsheetDownloadPDF}}}
            </div>
        </div>

        <script>
            jQuery("#pie_1").radialPieChart("init", {
                'font-size': 17,
                'fill': 10,
                'animation': false,
                'text-color': "333",
                'time': 1,
                'data': [{
                    'color': "#FFCDB2",
                    'perc': 21
                }]
            });

            jQuery("#pie_2").radialPieChart("init", {
                'font-size': 17,
                'fill': 10,
                'animation': false,
                'text-color': "333",
                'data': [{
                    'color': "#FFB4A2",
                    'perc': 9
                }]
            });

            jQuery("#pie_3").radialPieChart("init", {
                'font-size': 17,
                'fill': 10,
                'animation': false,
                'text-color': "333",
                'data': [{
                    'color': "#E5989B",
                    'perc': 59
                }]
            });

            jQuery("#pie_4").radialPieChart("init", {
                'font-size': 17,
                'fill': 10,
                'animation': false,
                'text-color': "333",
                'data': [{
                    'color': "#B5838D",
                    'perc': 4
                }]
            });

            jQuery("#pie_5").radialPieChart("init", {
                'font-size': 17,
                'fill': 10,
                'animation': false,
                'text-color': "333",
                'data': [{
                    'color': "#6D6875",
                    'perc': 7
                }]
            });
        </script>

    </script>

<script type="text/javascript">
    Handlebars.registerHelper('customShareMillionsInFull', function (shareMillions) {
        var sharesRaw = parseFloat(shareMillions) * 1000000;
        return formatNumberWithLocalDelimiters(sharesRaw);
    });
</script>
