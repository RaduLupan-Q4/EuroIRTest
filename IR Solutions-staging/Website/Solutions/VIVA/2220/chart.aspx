<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart")%>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare'];
</script>

<div class="IRQuoteModule"></div>
<br />
<br />
<br />


<div class="IRChartModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
        {{#headers}}
            <tr>
                <th class="Header column-first symbol">{{t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}}</th>
                <th class="Header volume">{{t_volume}}</th>
                <th class="Header high">{{t_52w_high_low}}</th>
                <th class="Header marketCap">{{t_market_cap}}</th>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="Data column-first symbol">{{symbol}}</td>
                <td class="Data last">{{toLocal last}}</td>
                <td class="Data change"><span class="{{showArrow change}}"></span><span class="formatColour">{{decimalsCustom change '='}} ({{decimalsToFixed changePercent}}%)</span> </td>
                <td class="Data volume">{{toLocal volume}}</td>
                <td class="Data high">{{toLocal high52Week}} - {{toLocal low52Week}}</td>
                <td class="Data marketCap">{{showKuwaitMarketCapM marketCap}}</td>
            </tr>
        {{/stocks}}
    </table>
    <div class="updated"><span>{{headers/t_updated}}: </span><span>{{showDateTime timestamp}}</span></div>
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

<div class="RKDDisclaimer">
    Quote data provided by © Thomson Reuters Limited. <a target="_Blank" href="//media.corporate-ir.net/media_files/irol/17/176279/Terms_Conditions.html">See Terms of use</a>
</div>

<%= site.newFooter("IRChart") %>

<script type="text/javascript">



    Handlebars.registerHelper('showKuwaitMarketCapM', function (number) {
        return formatDecimal((number / 1000000) / 1000);
    });


    function formatDecimalCustomZero(number, showThisWhenZeroOrNoData) {
        try {
            if (typeof (number) == 'number') {
                if (number == 0) {
                    return showThisWhenZeroOrNoData;
                } else {
                    return number.toFixed(clientStyle.amountOfDecimals);
                }
            }
        }
        catch (err) {
            return showThisWhenZeroOrNoData;
        }
    }

    Handlebars.registerHelper('decimalsCustom', function (number, showThisWhenZeroOrNoData) {
        return formatDecimalCustomZero(number, showThisWhenZeroOrNoData);
    })

    Handlebars.registerHelper('decimalsToFixed', function (number) {
        return number.toFixed(2);
    })

    function drawChartHeadlineClientName() {
        if (globalActiveLanguage == 'ar') {
            debugStep("drawChartHeadlineClientName");
            $('.IRChartClientName').html(globalRawStockData[globalActiveListingIndex].name);
            $('.IRChartCompanyName').html('شركة الاتصالات الكويتية - VIVA');
        }

        else {
            debugStep("drawChartHeadlineClientName");
            $('.IRChartClientName').html(globalRawStockData[globalActiveListingIndex].name);
            $('.IRChartCompanyName').html(globalRawStockData[globalActiveListingIndex].name);
        }
    }
</script>
