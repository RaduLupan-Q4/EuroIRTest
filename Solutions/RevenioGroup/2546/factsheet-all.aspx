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
<script type="text/javascript" src="includes/js/libs/Chart.js"></script>
<script type="text/javascript" src="includes/js/libs/doughnutit.js"></script>
<script type="text/javascript" src="includes/js/libs/radial-progress-bar.js"></script>
<script type="text/javascript" src="inc/factsheet-wide-pie.js"></script>


<script id="IRFactsheetTemplate" type="text/x-handlebars-template">

    <div class="wrapper">
        <div class="grid">
            <div class="item-wide-wrap to-right">
                <div class="item IRFactsheetAbout">
                    {{{includeFactsheetAboutHeader "About Revenio Group"}}}
                    {{{includeFactsheetAboutSection "Revenio is a Finnish, globally operating health technology corporation whose worldwide success is based on a strongly patented intraocular pressure measurement technology.  The Revenio Group consists of Icare Finland Oy, Revenio Research Oy and Oscare Medical Oy, in which Revenio holds a 53% interest.The common denominators of Revenio's business operations include screening, follow-up and the global need to make cost savings through preventive health care. Revenio seeks vigorous growth in health technology. Revenio aims at developing even more efficient and easily adopted methods for the early-stage detection of diseases with significance for public health. The focus of Revenio's screening technology is on the early detection of glaucoma, osteoporosis, skin cancer and asthma, and the monitoring of these during the treatment process."}}}
                </div>
                <div class="item">
                    {{{includeFactsheetChart 'Column' 'Market value' 'Market value' 'Market value, EURm' '200'}}}
                </div>
            </div>
            <div class="item-wide-wrap">
                <div class="item IRFactsheetSharePriceChart">
                    <div id="mySmallDoughnut"></div>
                </div>
                <div class="item">
                    <div class="bigShapes-box medium">
                        <div class="bigNumberBox">
                            <span>+100</span>
                        </div>
                        <p class="text">New employees</p>
                    </div>
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
            <div class="item-wide-wrap">
                <div class="item boxes">
                    <div class="boxFact">
                        <div class="fake-bg"></div>
                        <div class="icon share"></div>
                        <div class="text">
                            <span class="title">Share info</span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
                <div class="item">
                    <ul class="fact-list radius-left">
                    <li style="background: #FFCDB2;">
                        <span>Ut enim ad minim veniam, quis nostrud exercitation</span>
                    </li>
                    <li style="background: #FFB4A2;">
                        <span>Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
                    </li>
                    <li style="background: #E5989B;">
                        <span>Cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit</span>
                    </li>
                    <li style="background: #B5838D;">
                        <span>Do eiusmod tempor incididunt ut labore</span>
                    </li>
                </ul>
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


        var smallDoughnutData = [{
    			value: 50,
    			color: "#378E91"
    		}, {
    			value: 50 - 28.23,
    			color: "#DEEDED"
    		}];

    		$("#mySmallDoughnut").doughnutit({
    			dnData: smallDoughnutData,
    			dnSize: 180,
    			dnInnerCutout: 60,
    			dnAnimation: false,
    			dnAnimationSteps: 60,
    			dnAnimationEasing: 'linear',
    			dnStroke: false,
    			dnShowText: true,
    			dnFontSize: '30px',
    			dnFontOffset: 20,
    			dnFontColor: "#378E91",
    			dnText: 'G1',
    			dnStartAngle: 90,
    			dnCounterClockwise: false,
    			dnRightCanvas: {
    				rcRadius: 5,
    				rcPreMargin: 20,
    				rcMargin: 20,
    				rcHeight: 40,
    				rcOffset: 5,
    				rcLineWidth: 130,
    				rcSphereColor: '#378E91',
    				rcSphereStroke: '#378E91',
    				rcTop: {
    					rcTopLineColor: '#378E91',
    					rcTopDashLine: 0,
    					rcTopFontSize: '13px',
    					rcStrokeWidth: 1,

    					rcTopPreMargin: 20,
    					rcTopMargin: 20,
    					rcTopHeight: 40,
    					rcTopLineWidth: 130,

    					rctAbove: {
    						rctText: 'Last',
    						rctOffset: 2,
    						rctImageOffsetRight: 5,
    						rctImageOffsetBottom: 0,
    						// rctImage: 'calendar.png',
    					},
    					rctBelow: {
    						rctText: '28.23',
    						rctFontSize: '35px',
    						rctFontStyle: 'bold',
    						rctOffset: 2,
    						rctImageOffsetRight: 5,
    						rctImageOffsetBottom: 0,
    						// rctImage: 'calendar.png'
    					}
    				},
    				rcBottom: {
    					rcBottomDashLine: 0,
    					rcBottomFontSize: '15px',
    					rcBottomLineColor: '#378E91',
    					rcStrokeWidth: 1,

    					rcBottomPreMargin: 20,
    					rcBottomMargin: 20,
    					rcBottomHeight: 40,
    					rcBottomLineWidth: 130,

    					rcbAbove: {
    						// rcbImage: 'calendar.png',
    						rcbImageOffsetBottom: 0,
    						rcbImageOffsetRight: 5,
    						rcbText: 'Updated',
    						rcbFontSize: '13px',
    						rcbOffset: 2
    					},
    					rcbBelow: {
    						rcbImageOffsetRight: 5,
    						rcbImageOffsetBottom: 0,
    						rcbText: '19/10/2016',
    						rcbOffset: 5
    					}
    				}
    			}
    		}); // End Doughnut
    </script>

</script>

<script type="text/javascript">
    Handlebars.registerHelper('customShareMillionsInFull', function (shareMillions) {
        var sharesRaw = parseFloat(shareMillions) * 1000000;
        return formatNumberWithLocalDelimiters(sharesRaw);
    });
</script>
