<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare', 'IRChartOutsideTechnicalAnalysis'];
</script>

<div class="IRQuoteModule"></div><br />

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
                <td class="Data change"><span class="{{showArrow change}}"></span> {{decimals change}} ({{decimals changePercent}}%) </td>
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
    
    <div class="IRChartPlaceholderArea">
        {{{includeIRChartDomSettings}}}
        {{{includeIRChartPlaceholder}}}
        {{{includeIRChartChangePeriod 'y1'}}}
    </div>
    
    <div>

        Moving Average

        <div class="IRChartOutsideTATrigger" id="MA10">10 days</div>
        <div class="IRChartOutsideTATrigger" id="MA20">20 days</div>
        <div class="IRChartOutsideTATrigger" id="MA50">50 days</div>
        <div class="IRChartOutsideTACustomDays">
            <input type="number" min="10" max="100" step="10" placeholder="days" class="IRChartOutsideTACustomDaysValue" />
            <div class="IRChartOutsideTATrigger" id="MACustom">Apply</div>
        </div>

    </div>

    <div class="IRChartOutsideTATrigger" id="RSI">RSI</div>
    <div class="IRChartOutsideTATrigger" id="MACD">MACD</div>

    <div class="showHideVolume">Volume</div>
    <div class="showHidePercent">Percent</div>
       

</script>

<%= site.newFooter("IRChart") %>

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
            if (typeof ($('.IRChartNavigation').html()) != 'undefined')
            {
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
        attachShowHideVolumeClickHandler();
        attachshowHidePercentClickHandler();
        
    }
        
</script>

