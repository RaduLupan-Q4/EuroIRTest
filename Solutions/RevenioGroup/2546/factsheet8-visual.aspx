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
                <ul class="IRFactsheetVisualList">
                    <li>
                        <div>
                            <span>59%</span><p>Households</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>21%</span><p>Corporations</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>9%</span><p>Financial and insurance corporations</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>7%</span><p>Foreign countries and nominee registered</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>4%</span><p>Public sector</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="item borderAll">
                <h2>Year statistics</h2>
                <div class="IconTextBoxwrap">
                    <div class="growth box-cell IconTextBox">
                        <div class="icon">
                            <i></i>
                        </div>
                        <span class="bigText">$24 million</span>
                        <p>throughout this year</p>
                    </div>
                </div>
                <div class="IconTextBoxwrap">
                    <div class="goal box-cell IconTextBox">
                        <div class="icon">
                            <i></i>
                        </div>
                        <span class="bigText">50 project</span>
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
                            <span class="biggerText">20,7<p>Mil</p></span>
                        </div>
                    </div>
                    <div class="rndBox medium">
                        <div class="infoBox">
                            <span class="upperText">Q2, 2016</span>
                            <span class="biggerText">23,2<p>Mil</p></span>
                        </div>
                    </div>
                    <div class="rndBox big">
                        <div class="infoBox">
                            <span class="upperText">Q3, 2016</span>
                            <span class="biggerText">28,1<p>Mil</p></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item-wide-wrap">
            <div class="item wide">
                <h2>Year population progress</h2>
                <div class="progressBox">
                    <div class="progressBar" style="width:15%; background: #FFB4A2;">
                        <span>80</span>
                        <div class="text-out">Lorem ispum sin</div>
                    </div>
                    <div class="progressBar" style="width:25%; background: #E5989B;">
                        <span>180</span>
                        <div class="text-out">Lorem ispum sin melon juice</div>
                    </div>
                    <div class="progressBar" style="width:50%; background: #B5838D;">
                        <span>280</span>
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

<script>
    $('.IRFactsheetVisualList li span').each(function() {
        var percentage = $(this).text().replace(/[^0-9]/gi, '');
        var percentageIm = parseInt(percentage) + 40;
        console.log(percentageIm);
        $(this).closest("li").css('width', percentageIm + "%");
    });
</script>

</script>

<script type="text/javascript">
    Handlebars.registerHelper('customShareMillionsInFull', function (shareMillions) {
        var sharesRaw = parseFloat(shareMillions) * 1000000;
        return formatNumberWithLocalDelimiters(sharesRaw);
    });
</script>
