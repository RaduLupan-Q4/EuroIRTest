﻿<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" media=""print"" href=""inc/ir.chartPrint.css?v=" + System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/ir.chartPrint.css")).Ticks.ToString() + @""" />";


    //string tmp = @"<link rel=""stylesheet"" type=""text/css"" media=""print"" href=""inc/ir.chartPrint.css?v=" + System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/ir.chartPrint.css")).Ticks.ToString() + @""" />";
%>

<%= site.newHeader("IRChart") %>



<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare', 'IRChartOutsideTechnicalAnalysis', 'IRChartCustomPreventDefault'];
</script>

<div class="IRQuoteModule"></div>
<br />

<div class="IRChartModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
        {{#headers}}
            <tr>
                <th class="Header column-first symbol">{{t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}}</th>
                <th class="Header bid">{{t_bid}}</th>
                <th class="Header ask">{{t_ask}}</th>
                <th class="Header volume">{{t_volume}}</th>
                <th class="Header high">{{t_high}}</th>
                <th class="Header low">{{t_low}}</th>
                <th class="Header column-last time">{{t_updated}}</th>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="Data column-first symbol">{{symbol}}</td>
                <td class="Data last">{{decimals last}} {{showCurrency}}</td>
                <td class="Data change"><span class="{{showArrow change}}"></span>{{decimals change}} ({{decimals changePercent}}%) </td>
                <td class="Data bid">{{decimals bid}}</td>
                <td class="Data ask">{{decimals ask}}</td>
                <td class="Data volume">{{toLocal volume}}</td>
                <td class="Data high">{{decimals high}}</td>
                <td class="Data low">{{decimals low}}</td>
                <td class="Data column-last time">{{showDateTime timestamp}}</td>
            </tr>
        {{/stocks}}
    </table>

</script>

<script id="IRChartModuleTemplate" type="text/x-handlebars-template">

    <div class="IRChartNavigation">
        {{{includeIRChartCompanyName}}}
        {{{includeIRChartNavigation}}}
    </div>

    <div class="IRChartPlaceholderArea" id="IRChartModule">
        {{{includeIRChartDomSettings}}}
        {{{includeIRChartPlaceholder}}}

        <div class="IRChartChangePeriodOuterCustom language-en">
            <div class="IRChartChangePeriodCustom language-en">
                <div id="d1" class="">1 d</div>
                <div id="d5" class="">5 d</div>
                <div id="m1" class="">1 m</div>
                <div id="m3" class="">3 m</div>
                <div id="m6" class="">6 m</div>
                <div id="y1" class=" activePeriod">1 y</div>
                <div id="y2" class="">2 y</div>
                <div id="y5" class="">5 y</div>
                <div id="Max" class="">Max</div>
            </div>
        </div>

    </div>

    <br />

    <br />

    <div class="irChartNavigationBottom">

        <div class="navBottomRow">

            <div class="toggleFullscreen buttonLook">Expand Graph</div>

            <%--<div class="featureCheckbox" id="featureEarnings">Earnings</div>--%>
            <div class="featureCheckbox" id="featurePressRelease">Press Releases</div>
            <div class="featureCheckbox" id="featurePeriodHighLow">Period High/Low</div>
            

            <h2>Diagram type</h2>
            
            <div class="diagramSelect" id="diagramLine">Line</div>
            <div class="diagramSelect" id="diagramOHLC">Bar</div>
            <div class="diagramSelect" id="diagramCandlestick">Candlestick</div>
            <div class="diagramSelect checked" id="diagramArea">Mountain</div>

        </div>
        <div class="navBottomRow">

            <div class="downloadHistoricalData buttonLook">Download</div>

            <h2>Lower graph</h2>
            <div class="featureCheckbox checked" id="featureVolume">Volume</div>
            <div class="chartModeSelect" id="taRSI">RSI</div>
            <div class="chartModeSelect" id="taMACD">MACD</div>

            <h2>Reset to</h2>
            <div class="chartModeSelect checked" id="historical">Historical</div>
            <div class="chartModeSelect" id="intraday">Intraday</div>

        </div>
        <div class="navBottomRow">

            <div class="printChart buttonLook">Print</div>

            <h2>Moving Average</h2>

            <div class="chartModeSelect" id="taMA10">10 days</div>
            <div class="chartModeSelect" id="taMA20">20 days</div>
            <div class="chartModeSelect" id="taMA50">50 days</div>
            <%--<div class="IRChartOutsideTACustomDays">
                <span class="IRChartOutsideRadioButton MA MACustom" id="MACustom"></span>
                <input type="number" min="10" max="100" step="10" placeholder="days" class="IRChartOutsideTACustomDaysValue" />
                <div class="IRChartOutsideTAMATrigger" id="MACustom">Update</div>
            </div>--%>

        </div>

        <div style="clear: both"></div>

    </div>

    <div class="IRClearFloat"></div>


</script>

<%= site.newFooter("IRChart") %>

<script type="text/javascript" src="http://ir.euroinvestor.com/inc/scripts/jsv.js"></script>
<script type="text/javascript" src="ir.custom.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.custom.js")).Ticks.ToString()%>"></script>
<script type="text/javascript">

    var toolSet = false;

    $(function () {

        setInterval(function () {
            prepareTool();
        }, 100);

    });

    function prepareTool() {
        if (!toolSet) {
            if (typeof ($('.IRChartNavigation').html()) != 'undefined') {
                setTool();
                toolSet = true;
            }
        }
    }

    function setTool() {

        $('.IRChartOutsideTATrigger').off().on('click', function () {
            var id = $(this).attr('id');
            IRChartOutsideTechnicalAnalysis.updateIRChartOutsideTechnicalAnalysis(id);
        });

        $('.IRChartOutsideDiagramTrigger').off().on('click', function () {
            var id = $(this).attr('id');
            clientStyle.chart_DrawMode = id;

            $('.IRChartOutsideRadioButton').removeClass('checked'); // Reset all radios
            if ($(this).hasClass('checked')) {
                $(this).removeClass('checked');
            } else {
                $(this).addClass('checked');
            }

            IRChartOutsideTechnicalAnalysis.drawIRChartHtmlCustom(id);
        });

        $('.IRChartOutsidePressReleaseTrigger').off().on('click', function () {
            var id = $(this).attr('id');

            if ($(this).hasClass('checked')) {
                $(this).removeClass('checked');
            } else {
                $(this).addClass('checked');
            }
        });

        // Moving Average
        $('.IRChartOutsideRadioButton.MA').off().on('click', function () {
            var id = $(this).attr('id');

            $('.IRChartOutsideRadioButton.MA, .IRChartOutsideRadioButton.RSIMACD').removeClass('checked'); // Reset radios

            if (id == 'MA10' || id == 'MA20' || id == 'MA50') {
                IRChartOutsideTechnicalAnalysis.updateIRChartOutsideTechnicalAnalysis(id);
            } else if (id == 'MACustom') {

                var days = $('.IRChartOutsideTACustomDaysValue').val();
                if (parseFloat(days) > 0 && parseFloat(days) < 100) {
                    IRChartOutsideTechnicalAnalysis.updateIRChartOutsideTechnicalAnalysis(id);
                }
            }
            IRChartOutsideTechnicalAnalysis.toggleCheckBoxes(id);
        });
        $('.IRChartOutsideTAMATrigger').off().on('click', function () {
            var id = $(this).attr('id');
            $('.IRChartOutsideRadioButton').removeClass('checked'); // Reset all radios
            $('.IRChartOutsideRadioButton.MA.MACustom').addClass('checked');
            IRChartOutsideTechnicalAnalysis.updateIRChartOutsideTechnicalAnalysis(id);
        });

        // RSI & MACD
        $('.IRChartOutsideRadioButton.RSIMACD').off().on('click', function () {
            var id = $(this).attr('id');
            $('.IRChartOutsideRadioButton.MA, .IRChartOutsideRadioButton.RSIMACD').removeClass('checked'); // Reset radios
            if (id == 'RSI' || id == 'MACD') {
                IRChartOutsideTechnicalAnalysis.updateIRChartOutsideTechnicalAnalysis(id);
            }
            IRChartOutsideTechnicalAnalysis.toggleCheckBoxes(id);
        });

        // Volume, Percent
        $('.IRChartOutsideCheckbox').off().on('click', function () {
            if ($(this).hasClass('checked')) {
                $(this).removeClass('checked');
            } else {
                $(this).addClass('checked');
            }
        });

        attachShowHideVolumeClickHandler();
        attachshowHidePercentClickHandler();
        attachFullscreenClickHandler();
        attachDownloadClickHandler();
        attachPrintClickHandler();
        prepareIRChartNews();
        attachPressReleaseClickHandler();
        attachPeriodHighLowClickHandler();

        // Update
        initChartBottomNavigation();
        
        $('.irChartNavigationBottom .diagramSelect#diagramArea').click();
    }

</script>
