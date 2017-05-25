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
<script type="text/javascript" src="inc/factsheet-design1.js"></script>


<script id="IRFactsheetTemplate" type="text/x-handlebars-template">

    <div class="wrapper bg">
        <div class="grid with-paddings design1">
            <div class="company-name-headline">
                <span>Q4 Euroinvestor</span>
            </div>
            <div class="item-wide-wrap to-right">
                <div class="item">
                    <div class="totalUnderline">
                        <p class="totalUnderlineText">Total operating sites</p>
                    </div>
                    <ul class="IRFactsheetVisualList">
                        <li style="background: #2B4D6E; color: #fff;">
                            <div>
                                <span>72</span><p>Europe</p>
                            </div>
                        </li>
                        <li style="background: #516D88; color: #fff;">
                            <div>
                                <span>60</span><p>Canada</p>
                            </div>
                        </li>
                        <li style="background: #788DA2; color: #fff;">
                            <div>
                                <span>25</span><p>USA</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="item bgColor">
                    {{{includeFactsheetAboutHeader "About Revenio Group"}}}
            {{{includeFactsheetAboutSection "Revenio is a Finnish, globally operating health technology corporation whose worldwide success is based on a strongly patented intraocular pressure measurement technology.  The Revenio Group consists of Icare Finland Oy, Revenio Research Oy and Oscare Medical Oy, in which Revenio holds a 53% interest."}}}
                </div>
            </div>
            <div class="item-wide-wrap to-right" style="background: rgba(248,251,252,0.7);">
                <div class="item">
                    {{{includeFactsheetSharePriceChartPlaceholder 'Development in share price' '270px'}}}
                </div>
                <div class="item relative">
                    {{{includeFactsheetChart 'Pie' 'Ownership structure according to percentage of shares' 'Ownership structure according to percentage of shares' '' '250'}}}
                </div>
            </div>
            <div class="item-wide-wrap to-right">
                <div class="item bgColor">
                    <p>3AEY is a combination of three terpenes which is an effective botryticide and which was developed by Eden</p>
                    <p>Global markets worth $300m per annum for grapes, fruits, vegetables and flowers</p>
                    <p>Botrytis occurs late in season affecting yield and quality and shortens shelf-life</p>
                    <p>Performance of 3AEY in regulatory trials is equivalent to commercial standards and often better when disease pressure is high</p>
                </div>
                <div class="item">
                    <h2>Total fixed connections</h2>
                    <div class="bigNumbersShapes">
                        <span class="number">76<sup>%</sup></span>
                    </div>
                </div>
            </div>
            <div class="item-wide-wrap">
                <div class="item wide">
                    <h2>Year population progress</h2>
                    <div class="progressBox">
                        <div class="progressBar" style="width:15%; background: #516D88;">
                            <span>80</span>
                            <div class="text-out">Terpene based products</div>
                        </div>
                        <div class="progressBar" style="width:25%; background: #788DA2;">
                            <span>180</span>
                            <div class="text-out">Formulation enhances efficacy up to 4 fold</div>
                        </div>
                        <div class="progressBar" style="width:50%; background: #9EAEBD;">
                            <span>280</span>
                            <div class="text-out">Fragrance and food flavourings</div>
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
            var percentageIm = parseInt(percentage) + 20;
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
