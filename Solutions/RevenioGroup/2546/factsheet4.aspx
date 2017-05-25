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



<script id="IRFactsheetTemplate" type="text/x-handlebars-template">
<div class="wrapper">
    <div class="grid with-paddings grid-background">
        <div class="item-wide-wrap to-right bgColor">
            <div class="item IRFactsheetAbout">
                {{{includeFactsheetAboutHeader "About Revenio Group"}}} {{{includeFactsheetAboutSection "Revenio is a Finnish, globally operating health technology corporation whose worldwide success is based on a strongly patented intraocular pressure measurement technology.
                The Revenio Group consists of Icare Finland Oy, Revenio Research Oy and Oscare Medical Oy, in which Revenio holds a 53% interest.The common denominators of Revenio's business operations include screening, follow-up and the global need
                to make cost savings through preventive health care."}}}
            </div>
            <div class="item boxColored text-right">
                <div class="bigNumbersShapes">
                    <span class="number">99<sup>%</sup></span>
                    <p>of all development completions pre-sold</p>
                </div>
                <!-- <div class="bigNumbersShapes">
                    <span class="number">80<sup>%</sup></span>
                    <p>complete projects</p>
                </div> -->
            </div>
        </div>
        <div class="item-wide-wrap to-right">
            <div class="item">
                <h2>Ownership structure according to percentage of shares</h2>
                <ul class="IRFactsheetVisualList"></ul>
            </div>
            <div class="item borderAll">
                <h2>Year statistics</h2>
                <div class="IconTextBoxwrap">
                    <div class="growth box-cell IconTextBox">
                        <div class="icon">
                            <i></i>
                        </div>
                        <span class="bigText first"></span>
                        <p>throughout this year</p>
                    </div>
                </div>
                <div class="IconTextBoxwrap">
                    <div class="goal box-cell IconTextBox">
                        <div class="icon">
                            <i></i>
                        </div>
                        <span class="bigText second"></span>
                        <p>throughout this year</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="item-wide-wrap to-left">
            <div class="item">
                <h2>Total fixed connections</h2>
                <div class="bigNumbersShapes">
                    <span class="number">76<sup>%</sup></span>
                    <p>... total Denmark operators use our system, to increase better connection</p>
                </div>
            </div>
            <div class="item relative">
                <div class="three-in-row-rnd">
                    <div class="rndBox small">
                        <div class="infoBox">
                            <span class="upperText">Q1, 2016</span>
                            <span class="biggerText"></span>
                        </div>
                    </div>
                    <div class="rndBox medium">
                        <div class="infoBox">
                            <span class="upperText">Q2, 2016</span>
                            <span class="biggerText"></span>
                        </div>
                    </div>
                    <div class="rndBox big">
                        <div class="infoBox">
                            <span class="upperText">Q3, 2016</span>
                            <span class="biggerText"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item-wide-wrap">
            <div class="item wide">
                <h2>Year population progress</h2>
                <div class="progressBox">
                    <div class="progressBar" style="background: #FFB4A2;">
                        <div class="text-out">Lorem ispum sin</div>
                    </div>
                    <div class="progressBar" style="background: #E5989B;">
                        <div class="text-out">Lorem ispum sin melon juice</div>
                    </div>
                    <div class="progressBar" style="background: #B5838D;">
                        <div class="text-out">Torem somen la butcher</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="IRFactsheet">
        {{{includeFactsheetDownloadPDF}}}
    </div>
</div>

</script>

<script type="text/javascript" src="includes/js/libs/Chart.js"></script>
<script type="text/javascript" src="includes/js/libs/radial-progress-bar.js"></script>
<script type="text/javascript" src="includes/js/libs/doughnutit.js"></script>
<script type="text/javascript" src="includes/js/factsheet-data.js"></script>

<script type="text/javascript">
    Handlebars.registerHelper('customShareMillionsInFull', function (shareMillions) {
        var sharesRaw = parseFloat(shareMillions) * 1000000;
        return formatNumberWithLocalDelimiters(sharesRaw);
    });
</script>
