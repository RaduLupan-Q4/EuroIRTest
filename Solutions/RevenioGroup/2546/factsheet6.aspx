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
<script type="text/javascript" src="inc/ir.factsheet.js"></script>
<script type="text/javascript" src="includes/js/libs/radial-progress-bar.js"></script>


<script id="IRFactsheetTemplate" type="text/x-handlebars-template">

    <div class="wrapper">
        <div class="grid half-box">
            <div class="item IRFactsheetAbout">
                <div class="section wide boxes">
                    <div class="boxFact">
                        <div class="fake-bg"></div>
                        <div class="icon share"></div>
                        <div class="text">
                            <span class="title">Share info</span> Eden Research (“Eden”) is an AIM listed, UK company with a patented platform technology which is used to create natural products using terpenes
                        </div>
                    </div>
                    <div class="boxFact">
                        <div class="fake-bg"></div>
                        <div class="icon send"></div>
                        <div class="text">
                            <span class="title">Traffic info</span> provide slow release delivery, increasing residual effect. Tackle resistance build-up experienced by old molecules.
                        </div>
                    </div>
                </div>
                <div class="heading-title">
                    <span>By the numbers</span>
                </div>
                <div class="section">
                    <div class="dataColumnUpWithText">
                        <div class="dataColumnUpBox">
                            <div class="dataColumnUpBoxColumnWrap">
                                <div class="dataColumnUpBoxColumnFake"></div>
                                <div class="dataColumnUpBoxColumn" style="height: 120px;">
                                    <span class="dataColumnUpBoxColumnText">55%</span>
                                </div>
                            </div>
                            <div class="dataColumnUpBoxText">
                                Low cost base – R & D outsourced to Contracted Research
                            </div>
                        </div>
                        <div class="dataColumnUpBox">
                            <div class="dataColumnUpBoxColumnWrap">
                                <div class="dataColumnUpBoxColumnFake" style="height: 50px;"></div>
                                <div class="dataColumnUpBoxColumn" style="height: 70px;">
                                    <span class="dataColumnUpBoxColumnText">42%</span>
                                </div>
                            </div>
                            <div class="dataColumnUpBoxText">
                                8 licences signed to date, all with milestone payments
                            </div>
                        </div>
                        <div class="dataColumnUpBox">
                            <div class="dataColumnUpBoxColumnWrap">
                                <div class="dataColumnUpBoxColumnFake" style="height: 80px;"></div>
                                <div class="dataColumnUpBoxColumn" style="height: 40px;">
                                    <span class="dataColumnUpBoxColumnText">11%</span>
                                </div>
                            </div>
                            <div class="dataColumnUpBoxText">
                                Can be used close to harvest without residue risk for consumers
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section">
                    <div class="item circle-list">
                        <div class="heading-title">
                            <span>According to percentage of shares</span>
                        </div>
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
                        </div>
                    </div>
                </div>
                <div class="section">
                    <div class="extraInformationBox">
                        <span class="extraInformationBoxHeading">Extra information</span>
                        <ul class="extraInformationBoxTable">
                            <li>
                                <span class="extraInformationBoxNumbers">18</span>
                                <p class="extraInformationBoxText">Countries</p>
                            </li>
                            <li>
                                <span class="extraInformationBoxNumbers">29</span>
                                <p class="extraInformationBoxText">U.S. States</p>
                            </li>
                            <li>
                                <span class="extraInformationBoxNumbers">873</span>
                                <p class="extraInformationBoxText">Missionaries</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="about-text-box">
                    <h2>About us</h2>
                    <p>Eden Research (“Eden”) is an AIM listed, UK company with a patented platform technology which is used to create natural products using terpenes.</p>
                </div>
                <div class="about-text-box">
                    <h2>What do we do?</h2>
                    <p>Eden owns a unique platform technology (GO-E™) which is used to create highly effective, natural products as well as acting as an add-on technology to existing synthetic products to provide significant improvements.</p>
                    <p>GO-E is a natural micro-encapsulation system which enables slow release of active substances.</p>
                    <p>The micro-capsules are yeast cells; a waste product derived from the baking, brewing and bio-ethanol industries.</p>
                </div>
                <div class="about-text-box">
                    <h2>What are the benefits of the GO-E technology?</h2>
                    <p>Terpenes have well documented biocidal activity, but, can be difficult to use commercially due to their inherent volatility.</p>
                    <p>The GO-E system allows these volatile active substances to be delivered to their target in a controlled manner, over time.</p>
                    <p>Using GO-E, Eden and its partners have been able to create a range of natural products with superior efficacy over its competitors – versatile system with a wide range of markets.</p>
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
                'color': "#cdcf88",
                'perc': 21
            }]
        });

        jQuery("#pie_2").radialPieChart("init", {
            'font-size': 17,
            'fill': 10,
            'animation': false,
            'text-color': "333",
            'data': [{
                'color': "#BFD7B5",
                'perc': 9
            }]
        });

        jQuery("#pie_3").radialPieChart("init", {
            'font-size': 17,
            'fill': 10,
            'animation': false,
            'text-color': "333",
            'data': [{
                'color': "#A3C4BC",
                'perc': 59
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
