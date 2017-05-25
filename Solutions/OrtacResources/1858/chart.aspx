<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Titillium+Web"" type=""text/css"" />";

%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartNews'];
</script>

<div class="IRQuoteModule"></div>
<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
        <tr>
            <th class="Header symbol">{{headers/t_symbol}}</th>
            <th class="Header last">{{headers/t_last}}</th>
            <th class="Header change">{{headers/t_change}}</th>
            <th class="Header bid">{{headers/t_bid}}</th>
            <th class="Header ask">{{headers/t_ask}}</th>
            <th class="Header volume column-last">{{headers/t_volume}}</th>
        </tr>

        <tr>
            <td class="Data symbol">{{stocks/symbol}}</td>
            <td class="Data last">{{decimals stocks/last}}</td>
            <td class="Data change"><span class="{{showArrow stocks/change}}"> </span> {{decimals stocks/change}} <span class="{{formatColour stocks/change}}">({{decimals stocks/changePercent}}%)</span> </td>
            <td class="Data bid">{{decimals stocks/bid}}</td>
            <td class="Data ask">{{decimals stocks/ask}}</td>
            <td class="Data volume column-last">{{toLocal stocks/volume}}</td>
        </tr>
    </table>
    <div class="updated"><span>{{headers/t_updated}}: </span><span>{{showDateTime stocks/timestamp}}</span></div>
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


      <!-- Profile -->
    <div class="profile-wrapper">

        <div class="table-wrapper">
            <div class="shareData">
                <h3>Share Data</h3>
                <table class="IRTable table-look responsive">
                    <tr>
                        <td class="Header currency top">{{headers/t_currency}}</td>
                        <td class="Data currency top">{{stocks/currency}}</td>
                    </tr>
                    <tr>
                        <td class="Header prevClose">{{headers/t_previous_close}}</td>
                        <td class="Data prevClose">{{decimals stocks/prevClose}}</td>
                    </tr>
                    <tr>
                        <td class="Header high52week">{{headers/t_52w_high}}</td>
                        <td class="Data high52week">{{decimals stocks/high52Week}}</td>
                    </tr>
                    <tr>
                        <td class="Header low52Week">{{headers/t_52w_low}}</td>
                        <td class="Data low52Week">{{decimals stocks/low52Week}}</td>
                    </tr>
                    <tr>
                        <td class="Header Weeks52Percent">52 {{headers/t_weeks}} %</td>
                        <td class="Data Weeks52Percent {{formatColour stocks/change}}">{{percentageChangeOneYearAgo stocks/prevClose stocks/timestamp}} <span class="{{showArrow stocks/change}}"></span></td>
                    </tr>
                    <tr>
                        <td class="Header YTD">YDT %</td>
                        <td class="Data YTD {{formatColour stocks/change}}">{{percentageChangeYTD stocks/prevClose stocks/timestamp}}</td>
                    </tr>

                </table>
            </div>
            <div class="marketData">
                <h3>Market Data</h3>
                <table class="IRTable table-look responsive">
                    <tbody>
                        <tr>
                            <td class="Header market top">{{headers/t_market}}</td>
                            <td class="Data market top">London</td>
                        </tr>
                        <tr>
                            <td class="Header symbol">{{headers/t_symbol}}</td>
                            <td class="Data symbol">{{stocks/symbol}}</td>
                        </tr>
                        <tr>
                            <td class="Header list">{{headers/t_list}}</td>
                            <td class="Data list">AIM</td>
                        </tr>
                        <tr>
                            <td class="Header industry">{{headers/t_industry}}</td>
                            <td class="Data industry">Mining</td>
                        </tr>
                        <tr>
                            <td class="Header shares-issued">{{headers/t_number_of_shares}} (mln)</td>
                            <td class="Data shares-issued">{{toLocal stocks/shareMillions}} M</td>
                        </tr>
                        <tr>
                            <td class="Header market-cap">{{headers/t_market_cap}} (mln)</td>
                            <td class="Data market-cap">{{showLondonMarketCapM stocks/marketCap}} M</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>


</script>




<%= site.newFooter("IRChart") %>




<script type="text/javascript">


    //closePricePercentage: 100 * (PrevClose - ClosePriceAtYearAgo) / ClosePriceAtYearAgo
    Handlebars.registerHelper('percentageChangeOneYearAgo', function (number, timestamp) {

        var currentDate = new Date(timestamp);
        var closePriceOneYearAgo;
        var finalValue;
        var closePriceIndex;
        var allClosePrices;
        var percentageChangeOneYearAgo;

        $.when(requestClosePriceListingData).done(function (allClosePrices) {
            OneYearAgo = currentDate.getFullYear() - 1;
            var fullDateOneYearAgo = new Date(OneYearAgo, currentDate.getMonth(), currentDate.getDate());

            allClosePrices = allClosePrices.data[0].data;
            closePriceIndex = getClosestDateIndexForListingClosePrice(fullDateOneYearAgo);

            closePriceOneYearAgo = allClosePrices[closePriceIndex].closePrice;
            percentageChangeOneYearAgo = 100 * (number - closePriceOneYearAgo) / closePriceOneYearAgo;

            //finalValue = parseInt(percentageChangeOneYearAgo.toFixed(clientStyle.amountOfDecimals));
            finalValue = percentageChangeOneYearAgo.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);

            
            //$("td.Data.Weeks52Percent").text(parseInt(percentageChangeOneYearAgo.toFixed(clientStyle.amountOfDecimals)) + ' %');
            $("td.Data.Weeks52Percent").text(percentageChangeOneYearAgo.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals) + ' %');


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
      

        $.when(requestClosePriceListingData).done(function (allClosePrices) {
            
            var fullDateFirstDayYear = new Date(defaultStart);
            
            allClosePrices = allClosePrices.data[0].data;
            closePriceIndex = getClosestDateIndexForListingClosePrice(fullDateFirstDayYear);
        
            closePriceOneYearAgo = allClosePrices[closePriceIndex].closePrice;
            percentageChangeYTD = 100 * (number - closePriceOneYearAgo) / closePriceOneYearAgo;
            
            finalValue = percentageChangeYTD.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);
           
            $("td.Data.YTD").text(percentageChangeYTD.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals) + ' %');
        });

        return finalValue;
    })
    

</script>
