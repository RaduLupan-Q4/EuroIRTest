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
<script type="text/javascript" src="inc/factsheet-wide-pie.js"></script>



<script id="IRFactsheetTemplate" type="text/x-handlebars-template">
<div class="wrapper">
    <div class="grid with-paddings">
        <h2 class="heading">By the numbers</h2>
        <div class="item-wide-wrap">
            <div class="item">
                <div class="totalUnderline">
                    <span class="totalUnderlineNumber">132</span>
                    <p class="totalUnderlineText">Total operating sites</p>
                </div>
                <ul class="IRFactsheetVisualList">
                    <li style="background: #ce5841; color: #fff;">
                        <div>
                            <span>72</span><p>Europe</p>
                        </div>
                    </li>
                    <li style="background: #de9278; color: #fff;">
                        <div>
                            <span>60</span><p>Canada</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="item">
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
        <div class="item-wide-wrap to-right">
            <div class="item">
                <div class="dataColumnUpWithText">
                    <div class="dataColumnUpBox">
                        <div class="dataColumnUpBoxColumnWrap">
                            <div class="dataColumnUpBoxColumnFake"></div>
                            <div class="dataColumnUpBoxColumn" style="height: 120px;">
                                <span class="dataColumnUpBoxColumnText">55%</span>
                            </div>
                        </div>
                        <div class="dataColumnUpBoxText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="bigShapes-box small">
                    <div class="bigNumberBox">
                        <span>+100</span>
                    </div>
                    <p class="text">New employees</p>
                </div>
            </div>
        </div>
        <h2 class="heading">Progress</h2>
        <div class="item-wide-wrap">
            <div class="item wide">
                {{{includeFactsheetSharePriceChartPlaceholder 'Development in share price' '200px'}}}
            </div>
        </div>
        <div class="item-wide-wrap">
            <div class="item wide">
                {{{includeFactsheetChart 'Pie' 'Ownership structure according to percentage of shares' 'Ownership structure according to percentage of shares' '' '250'}}}
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
        var percentageIm = parseInt(percentage);
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
