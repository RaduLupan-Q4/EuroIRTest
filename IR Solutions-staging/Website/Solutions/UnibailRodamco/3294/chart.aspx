<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartSettings', 'IRChartCompare', 'IRChartCurrencyConversion'];
</script>

<!-- <script id="IRQuoteTableTemplate" type="text/x-handlebars-template"> 
    <div class="companyInfoWrapper">
       <%--<div class="updated"><span>{{headers/t_updated}}: </span><span>{{showTime stocks/timestamp}} on {{showDateWithFormat stocks/timestamp 'DD MMM, YYYY'}}</span></div>--%>
</div>
</script> -->

<div class="IRQuoteModule"></div>
<br />
<div class="IRChartToolMenu"></div><br />
 
<div class="IRChartModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
     
    <table class="IRQuoteModule table-look horizontal responsive">
            <tr>
                <th class="Header price-at column-first">{{headers/t_price_at}} {{showTime stocks/timestamp}}</th>
                <th class="Header previous-close">{{headers/t_previous_close}}</th>
                <th class="Header change">{{headers/t_change}} (%)</th>
                <th class="Header opening-price">{{headers/t_open_price}}</th>
                <th class="Header day-high">{{headers/t_day_high}}</th>
                <th class="Header day-low">{{headers/t_day_low}}</th>
                <th class="Header volume">{{headers/t_volume}}</th>
                <th class="Header year-high">{{headers/t_52w_high}}</th>
                <th class="Header year-low">{{headers/t_52w_low}}</th>
                <th class="Header price-as-at">{{headers/t_price_as_at_dec_31}} <span class="last-year"></span></th>
                <th class="Header change-ytd column-last">{{headers/t_change_ytd}}</th>
                <%--<th class="Header percentage-change-ytd column-last">{{headers/t_change_ytd}} %</th>--%>
            </tr>
            <tr>
                <td class="Data price-at column-first">{{decimals stocks/last}}</td>
                <td class="Data previous-close">{{decimals stocks/prevClose}}</td>
                <td class="Data change {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</td>
                <td class="Data opening-price">{{decimals stocks/open}}</td>
                <td class="Data day-high">{{decimals stocks/high}}</td>
                <td class="Data day-low">{{decimals stocks/low}}</td>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
                <td class="Data year-high">{{decimals stocks/highYear}}</td>
                <td class="Data year-low">{{decimals stocks/lowYear}}</td>
                <td class="Data price-as-at"></td>
                <td class="Data column-last"><span class="Data YTD {{formatColour stocks/change}}">{{ChangeYTD stocks/prevClose stocks/timestamp}}</span> (<span class="percentageChangeYTD Data">{{percentageChangeYTD stocks/prevClose stocks/timestamp}}</span>)</td>
                <%--<td class="Data percentageChangeYTD column-last {{formatColour stocks/change}}">{{percentageChangeYTD stocks/prevClose stocks/timestamp}}</td>--%>
            </tr>
    </table>

    <div class="updated"><span>{{headers/t_updated}}: {{showDateWithFormat stocks/timestamp 'DD/MM/YYYY HH:mm'}} {{showLocalTimeZoneShort}}</span></div>

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


<script type="text/javascript">

    //YTDChange
    Handlebars.registerHelper('ChangeYTD', function (number, timestamp) {

        var currentDate = new Date(timestamp);
        var closePriceOneYearAgo;
        var finalValue;
        var closePriceIndex;
        var allClosePrices;
        var ChangeYTD;
        var thisYear = (new Date()).getFullYear();
        thisYear = new Date("1/1/" + thisYear);
        var defaultStart = moment().startOf('year');
        defaultStart = moment().startOf('year').format('MM/DD/YYYY');
        
        var currentYear = (new Date()).getFullYear();

        $.when(requestClosePriceListingData, requestStockData, requestTranslationsData).done(function (allClosePrices) {
            
            var fullDateFirstDayYear = new Date(defaultStart);
            
            allClosePrices = allClosePrices[0].data[0].data ;
            closePriceIndex = getClosestDateIndexForListingClosePrice(fullDateFirstDayYear);
        
            closePriceOneYearAgo = allClosePrices[closePriceIndex].closePrice;
            ChangeYTD = (number - closePriceOneYearAgo);
            
            finalValue = ChangeYTD.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);
           
            $("span.Data.YTD").text(ChangeYTD.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals) );
            $("td.Data.price-as-at").text(closePriceOneYearAgo.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals) );
            $(".last-year").text(currentYear - 1);
        });

        return finalValue;
    })
    
    //YTDPercentage: 100 * (PrevClose - ClosePriceBeforeNewYears) / ClosePriceBeforeNewYears
    Handlebars.registerHelper('percentageChangeYTD', function (number, timestamp) {

        var currentDate = new Date(timestamp);
        var closePriceOneYearAgo;
        var finalValue;
        var closePriceIndex;
        var allClosePrices;
        var percentageChangeYTD;
        var thisYear = (new Date()).getFullYear();
        thisYear = new Date("1/1/" + thisYear);
        var defaultStart = moment().startOf('year');
        defaultStart = moment().startOf('year').format('MM/DD/YYYY');
      

        $.when(requestClosePriceListingData, requestStockData, requestTranslationsData).done(function (allClosePrices) {
            
            var fullDateFirstDayYear = new Date(defaultStart);
            
            allClosePrices = allClosePrices[0].data[0].data;
            closePriceIndex = getClosestDateIndexForListingClosePrice(fullDateFirstDayYear);
        
            closePriceOneYearAgo = allClosePrices[closePriceIndex].closePrice;
            percentageChangeYTD = 100 * (number - closePriceOneYearAgo) / closePriceOneYearAgo;

            
            finalValue = percentageChangeYTD.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);
           
            $("span.Data.percentageChangeYTD").text(percentageChangeYTD.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals) + ' %');
        });

        return finalValue;
    })


</script>

