<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""https://fonts.googleapis.com/css?family=Roboto:400,700,300"" type=""text/css"" />";
    %>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];

</script>

<div class="IRQuoteModule"></div><br />
<div class="clear"></div>
<div class="IRChartToolMenu IRChartChangeListing"></div><br />

<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>
<br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
                <th class="Header symbol column-first">{{headers/t_symbol}}</th>
                <th class="Header last">{{headers/t_last}}</th>
                <th class="Header change">{{headers/t_change}} (%)</th>
                <th class="Header bid">{{headers/t_bid}}</th>
                <th class="Header ask">{{headers/t_ask}}</th>
                <th class="Header volume">{{headers/t_volume}}</th>
                <th class="Header Timestamp column-last" id="hideH">{{headers/t_time}}</th>
            </tr>
            <tr>
                <td class="Data symbol column-first">{{stocks/symbol}}</td>
                <td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>
                <td class="Data change {{formatColour stocks/change}}"><span>{{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</span> <span class="{{showArrow stocks/change}}"></span></td>
                <td class="Data bid">{{decimals stocks/bid}}</td>
                <td class="Data ask">{{decimals stocks/ask}}</td>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
                <td class="Data Timestamp column-last" id="hideD">{{showDateTime stocks/timestamp}}</td>
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

<%= site.newFooter("IRChart") %>



<script type="text/javascript">

    function updateIRChartChangeListing() {
        debugStep("updateIRChartChangeListing");
        var element = $('.IRChartChangeListing');
        var subElements = "";
        for (var i = 0; i < globalAmountOfListings; i++) {

            var addClass = '';
            if (i == globalActiveListingIndex) {
                addClass = 'selected="selected"';
            }
            subElements += "<option value=\"" + i + "\"" + addClass + ">" + globalRawStockData[i].symbol + " - " + globalRawStockData[i].name + "</option>";
        }
        element.html("<select class=\"form-control\">" + subElements + "</select>");
    }
    function updateIRChangeListingEl(classEl) {
        debugStep("updateIRChangeListing");
        //var element = $('.' + classEl);
        //var subElements = "";
        //for (var i = 0; i < globalAmountOfListings; i++) {

        //    var addClass = '';
        //    if (i == globalActiveListingIndex) {
        //        addClass = 'selected="selected"';
        //    }
        //    subElements += "<option value=\"" + i + "\"" + addClass + ">" + globalRawStockData[i].symbol + " - " + globalRawStockData[i].exchangeName + "</option>";
        //}
        //element.html("<select class=\"form-control\">" + subElements + "</select>");
    }
    function updateIRChangeListing() {
        debugStep("updateIRChangeListing");
        var element = $('.IRChangeListing');
        var subElements = "";
        for (var i = 0; i < globalAmountOfListings; i++) {
            var addClass = '';
            if (i == globalActiveListingIndex) {
                addClass = 'selected="selected"';
            }
            switch (clientStyle.selectIRChangeListingFormat) {
                case "ExchangeCity-Symbol":
                    subElements += "<option value=\"" + i + "\"" + addClass + ">" + getExchangeCity(globalRawStockData[i].name) + " " + globalRawStockData[i].symbol + "</option>";
                    break;
                default:
                    subElements += "<option value=\"" + i + "\"" + addClass + ">" + globalRawStockData[i].symbol + " - " + globalRawStockData[i].name + "</option>";
                    break;
            }
        }
        element.html("<select class=\"form-control\">" + subElements + "</select>");
    }
    console.log('showing name instead of exchangeName');

</script>