<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare'];
</script>

<div class="IRQuoteModule"></div>

<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
                <th class="Header symbol column-first">{{headers/t_symbol}}</th>
                <th class="Header last">{{headers/t_last}}</th>
                <th class="Header change">{{headers/t_change}} (%)</th>
                <th class="Header bid">{{headers/t_bid}}</th>
                <th class="Header ask">{{headers/t_ask}}</th>
                <th class="Header volume">{{headers/t_volume}}</th>
                <th class="Header high">{{headers/t_high}}</th>
                <th class="Header low">{{headers/t_low}}</th>
                <th class="Header Timestamp column-last " id="hideH">{{headers/t_time}}</th>
            </tr>
            <tr>
                <td class="Data symbol column-first">{{stocks/symbol}}</td>
                <td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
                <td class="Data bid">{{decimals stocks/bid}}</td>
                <td class="Data ask">{{decimals stocks/ask}}</td>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
                <td class="Data high">{{decimals stocks/high}}</td>
                <td class="Data low">{{decimals stocks/low}}</td>
                <td class="Data Timestamp column-last"id="hideD">{{showDateTime stocks/timestamp}}</td>
            </tr>
    </table>
    
</script>

<script id="IRChartModuleTemplate" type="text/x-handlebars-template">

    <div class="IRChartNavigation">
        {{{includeIRChartCompanyName}}}
        {{{includeIRChartNavigation}}}
    </div>

    <div class="IRChartPlaceholderArea">
        {{{includeIRChartDomSettings}}}
        {{{includeIRChartPlaceholder}}}
        {{{includeIRChartChangePeriod 'y1'}}}
    </div>

</script>

<div>
    <%= site.newFooter("IRChart") %>
</div>
  
    <script>
        $(function () {

            var listen = setInterval(function () {
                var TSRSimple = $('[data-mode=TSRSimple]').text();

                if (TSRSimple != '') {
                    $('[data-mode=TSRReinvest]').text('Show Total Return');
                    $('[data-mode=TSRSimple]').remove();
                    clearInterval(listen);
                }
            }, 100);
        });

        function getTooltipStrSubTSR(dateIndex) {
            var tooltipStr = "";
            if (chartFeatureMode == chartDisplayModes.intraday) {
                tooltipStr += "<div class=\"IRChartTooltipDate\">" + new moment(globalChartListingIntradayDataDates[dateIndex]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span>" +
                    "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span>" +
                    "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
                tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span>" +
                    "<span class=\"subShadow\">" + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span>" +
                    "<span class=\"subContent\">" + formatLocal(globalChartListingIntradayDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span></div>";
                tooltipStr += "<div class='tooltipSep'></div>";
            } else {
                tooltipStr += "<div class=\"IRChartTooltipDate\">" + new moment(IRChartTSRfeature.dividendDatesInChart[dateIndex]).format(clientStyle.formatDate) + "</div>";
                tooltipStr += "<div class=\"IRChartTooltipClose\"><span class=\"subHeader\">" + getOHLCfromTranslations('c') + "</span>" +
                    "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockData[globalActiveListingIndex][dateIndex][1]) + "</span>" +
                    "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(globalChartListingStockData[globalActiveListingIndex][dateIndex][1]) + "</span></div>";
                tooltipStr += "<div class=\"IRChartTooltipVolume\"><span class=\"subHeader\">" + getOHLCfromTranslations('v') + "</span>" +
                    "<span class=\"subShadow\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span>" +
                    "<span class=\"subContent\">" + formatLocal(globalChartListingStockDataOHLCV[globalActiveListingIndex][dateIndex][5]) + "</span></div>";
                tooltipStr += "<div class='tooltipSep'></div>";
          
                for (var i = 0; i < IRChartTSRfeature.activeTSR.length; i++) {
                    tooltipStr += "<div><span class=\"subHeader\"><span class=\"colorIndicator color" + IRChartTSRfeature.activeTSRcolor[i].replace('#', '') + " active\">" +
                        "</span>" + "Total return" + ": </span>" +
                        "<span class=\"subShadow\">" + formatNumberWithLocalDelimitersZeroDecimals(IRChartTSRfeature[IRChartTSRfeature.activeTSR[i]][dateIndex][1]) + "</span>" +
                        "<span class=\"subContent\">" + formatNumberWithLocalDelimitersZeroDecimals(IRChartTSRfeature[IRChartTSRfeature.activeTSR[i]][dateIndex][1]) + "</span></div>";
                }
            }

            return tooltipStr;
        }
    </script>
</body>
</html>


