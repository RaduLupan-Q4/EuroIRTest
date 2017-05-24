﻿<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" media=""print"" href=""inc/ir.chartPrint.css?v=" + System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/ir.chartPrint.css")).Ticks.ToString() + @""" />";


    //string tmp = @"<link rel=""stylesheet"" type=""text/css"" media=""print"" href=""inc/ir.chartPrint.css?v=" + System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/ir.chartPrint.css")).Ticks.ToString() + @""" />";
%>

<%= site.newHeader("IRChart") %>



<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare', 'IRChartOutsideTechnicalAnalysis', 'IRChartCustomPreventDefault'];
</script>

<div class="IRQuoteModule"></div>

<div class="IRChartModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
     <table class="IRQuoteModule table-look horizontal customResponsive">
        {{#headers}}
            <tr>
                <th class="Header column-first symbol">{{t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}} (%)</th>
                <th class="Header bid">{{t_bid}}</th>
                <th class="Header ask">{{t_ask}}</th>
                <th class="Header volume">{{t_volume}}</th>
                <th class="Header high">{{t_high}}</th>
                <th class="Header column-last low">{{t_low}}</th>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="Data column-first symbol">{{symbol}}</td>
                <td class="Data last">{{decimals last}} {{showCurrency}}</td>
                <td class="Data change {{formatColour changePercent}}">{{decimals change}} ({{decimals changePercent}}%) </td>
                <td class="Data bid">{{decimals bid}}</td>
                <td class="Data ask">{{decimals ask}}</td>
                <td class="Data volume">{{toLocal volume}}</td>
                <td class="Data high">{{decimals high}}</td>
                <td class="Data column-last low">{{decimals low}}</td>
            </tr>
        {{/stocks}}
    </table>
    <table class="IRQuoteModule table-look vertical customResponsiveVertical">
            <tr>
                <th class="Header column-first symbol">{{headers/t_symbol}}</td>
                <td class="Data column-first symbol">{{stocks/symbol}}</td>
            </tr>
            <tr>
                <th class="Header last">{{headers/t_last}}</th>
                <td class="Data last">{{decimals stocks/last}} {{stocks/showCurrency}}</td>
            </tr>
            <tr>
                <th class="Header change">{{headers/t_change}} (%)</th>
                <td class="Data change {{formatColour stocks/changePercent}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) </td>
            </tr>
            <tr>
                <th class="Header bid">{{headers/t_bid}}</th>
                <td class="Data bid">{{decimals stocks/bid}}</td>
            </tr>    
            <tr>
                <th class="Header ask">{{headers/t_ask}}</th>
                <td class="Data ask">{{decimals stocks/ask}}</td>
            </tr>
            <tr>
                <th class="Header volume">{{headers/t_volume}}</th>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
            </tr>
            <tr>
                <th class="Header high">{{headers/t_high}}</th>
                <td class="Data high">{{decimals stocks/high}}</td>
            </tr>
            <tr>
                <th class="Header low">{{headers/t_low}}</th>
                <td class="Data low">{{decimals stocks/low}}</td>
            </tr>
    </table>

        <table class="IRQuoteModule table-look horizontal customResponsive">
        {{#headers}}
            <tr>
                <th class="Header column-first open">{{t_open}}</th>
                <th class="Header prev_close">{{t_prev_close}}</th>
                <th class="Header 52w_high">{{t_52w_high}}</th>
                <th class="Header 52w_high_date">{{t_52w_high_date}}</th>
                <th class="Header 52w_low">{{t_52w_low}}</th>
                <th class="Header 52w_low_date">{{t_52w_low_date}}</th>
                <th class="Header column-last t_updated">{{t_updated}}</th>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="Data column-first open">{{open}}</td>
                <td class="Data prevClose">{{decimals prevClose}}</td>
                <td class="Data high52Week">{{decimals high52Week}} </td>
                <td class="Data high52WeekDate">{{showDate stocks/high52WeekDate}}</td>
                <td class="Data low52Week">{{decimals low52Week}}</td>
                <td class="Data low52WeekDate">{{showDate stocks/low52WeekDate}}</td>
                <td class="Data column-last timestamp">{{showDateTime stocks/timestamp}}</td>
            </tr>
        {{/stocks}}
    </table>
    <table class="IRQuoteModule table-look vertical customResponsiveVertical">
            <tr>
                <th class="Header column-first open">{{headers/t_open}}</td>
                <td class="Data column-first open">{{stocks/open}}</td>
            </tr>
            <tr>
                <th class="Header prev_close">{{headers/t_prev_close}}</th>
                <td class="Data prevClose">{{decimals stocks/prevClose}}</td>
            </tr>
            <tr>
                <th class="Header 52w_high">{{headers/t_52w_high}} (%)</th>
                <td class="Data high52Week">{{decimals stocks/high52Week}} </td>
            </tr>
            <tr>
                <th class="Header 52w_high_date">{{headers/t_52w_high_date}}</th>
                <td class="Data high52WeekDate">{{showDate high52WeekDate}}</td>
            </tr>    
            <tr>
                <th class="Header 52w_low">{{headers/t_52w_low}}</th>
                <td class="Data low52Week">{{decimals stocks/low52Week}}</td>
            </tr>
            <tr>
                <th class="Header 52w_low_date">{{headers/t_52w_low_date}}</th>
                <td class="Data low52WeekDate">{{showDate low52WeekDate}}</td>
            </tr>
            <tr>
                <th class="Header t_updated">{{headers/t_updated}}</th>
                <td class="Data timestamp">{{showDateTime stocks/timestamp}}</td>
            </tr>
    </table>

    <div class="updated" style="text-align: right; display: none"><span>Updated: {{showDateTime stocks/timestamp}}</span></div>

    <div class="toggleFullscreen buttonLook">Expand Graph</div>

</script>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    
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
                <div id="d1" class=""><span>1 Day</span></div>
                <div id="d5" class=""><span>5 Days</span></div>
                <div id="m1" class=""><span>1 Month</span></div>
                <div id="m3" class=""><span>3 Month</span></div>
                
                <div id="y1" class=" activePeriod"><span>1 Year</span></div>
                <div id="y2" class=""><span>2 Years</span></div>
                <div id="y5" class=""><span>5 Years</span></div>
                <div id="Max" class=""><span>All</span></div>
            </div>
        </div>

    </div>


    <div class="buttonWrapper">
        <div class="downloadHistoricalData buttonLook">Download Excel</div>
        
    </div>
    <div class="IRChartNavigationBottom">

        <div class="navBottomRow">

            

            
            <h2>Indicators</h2>
            
            <div class="featureCheckbox" id="featurePeriodHighLow">Period High/Low</div>
            <div class="featureCheckbox checked" id="featureVolume">Volume</div>

            
        </div>
        <div class="navBottomRow">
            <h2>Diagram type</h2>
            <div class="diagramSelect" id="diagramArea">Area</div>
            <div class="diagramSelect" id="diagramLine">Line</div>
            <div class="diagramSelect" id="diagramOHLC">Bar</div>
            <div class="diagramSelect" id="diagramCandlestick">Candlestick</div>
        </div>
        <div class="navBottomRow">
            
            

            
        </div>
        <div class="navBottomRow column-last">

            <div class="printChart buttonLook" style="display: none;">Print</div>

            <h2>Moving Average</h2>

            <div class="chartModeSelect" id="taMA10">10 days</div>
            <div class="chartModeSelect" id="taMA20">20 days</div>
            <div class="chartModeSelect" id="taMA50">50 days</div>
            
        </div>

        <div style="clear: both"></div>

    </div>
    
    
    <div class="IRClearFloat"></div>
	
	 <div class="separate-div"></div>
    

</script>

<%--<h3 style="font-size: 48px; line-height: 44px; font-weight: normal; margin-top: 40px; margin-bottom: 20px;">Historical Look Up</h3>
<iframe src="lookup.aspx" style="width: 100%; height: 560px;"></iframe>--%>

<%--<table class="disclaimerRKD" style="width: 100%; border: 0px; padding: 0px; margin-top: 10px;">
        <tr>
            <td style="text-align: center; padding: 0px; color: #888888;">
                <span style="text-align: center; font-size: 10px; color: #333333; font-family: Arial, Helvetica, sans-serif;">Quote data provided 
					by &#169;Thomson Reuters Limited. <a target="_blank" href="http://media.corporate-ir.net/media_files/irol/17/176279/Terms_Conditions.html" style="text-align: center;  ">Click for restrictions</a> </span>
            </td>
        </tr>
    </table>--%>
<div style="display: none;">
    <%= site.newFooter("IRChart") %>
</div>
<%--<script type="text/javascript" src="http://ir.euroinvestor.com/inc/scripts/jsv.js"></script>--%>
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
        $('.basicButtonLook').click(function() {
            globalChartDom.redraw();
        });

        $('#IRChartNavigationClearComparison').click(function () {
            var days = -1;
            var hours = -1;
            var e = $('.IRChartChangePeriodCustom div.activePeriod').attr('id');

            switch (e) {
                case 'd1':
                    hours = 24;
                    break;
                case 'd5':
                    hours = 24 * 5;
                    break;
                case 'm1':
                    days = 30;
                    break;
                case 'm3':
                    days = 90;
                    break;
                case 'm6':
                    days = 180;
                    break;
                case 'y1':
                    days = 360;
                    break;
                case 'y2':
                    days = 360 * 2;
                    break;
                case 'max':
                    days = 9999;
                    break;
                default:
                    days = 360 * 5;
                    break;
            }

            drawChart.updateActiveChartNavBarRangePeriodCustom(e);

            if (days > 0) {
                drawChart.stateNewHistoricalPeriodSelectedCustom(days);
            }

            if (hours > 0) {
                drawChart.stateNewIntradayPeriodSelectedCustom(hours);
            }
        });



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

        //Change default chart view
        //$('.IRChartNavigationBottom .diagramSelect#diagramLine').click();
        $('.IRChartNavigationBottom .diagramSelect#diagramArea').click();
    }

</script>

