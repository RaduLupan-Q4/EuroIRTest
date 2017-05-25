<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900""/>";
%>

<%= site.newHeader("IRCustomModule") %>

<script type="text/javascript">
    var activeModules = ["IRCustomModule"];
    var activeDataRequests = [
        'requestStockData',
        'requestIntradayListingData',
        'requestClosePriceListingData',
        'requestNews'
    ];
</script>

<div class="IRCustomModule">

    <div class="IRNewsEntries"></div>

</div>

<script id="IRNewsEntriesTemplate" type="text/x-handlebars-template">

    <div>
        <div class="IRNewsPerformanceTool table-look horizontal responsive">

            <div class="IRHeaderGroup">
                <div class="IRHeader IRDate column-first">{{headers/t_date}}</div>
                <div class="IRHeader IRTitle">{{headers/t_title}}</div>
                <div class="IRHeader IRClosePriceChange column-last">{{headers/t_change}}</div>
            </div>
            {{#each data}}
                <div class="IRDataGroup" id="{{storyID}}">
                    <div class="IRData IRDate column-first" id="{{showDateWithFormat timestamp 'YYYY-MM-DD'}}">{{showDate timestamp}}</div>
                    <div class="IRData IRTitle" id="{{ShowCategoryShort categories}}">{{headline}}</div>
                    <div class="IRData IRClosePriceChange ClosePriceChange" style="width: 5%;">{{decimalsPct changePct}}</div>
                </div>
            {{/each}}

        </div>
        <div style="clear: both;"></div>
        <div class="IRNewsTableFooter">
            <div class="IRNewsPagination"></div>
        </div>

    </div>

</script>

<%= site.newFooter("IRCustomModule") %>

<script type="text/javascript">

    var toolRawStockData = null;
    var toolRawIntradayListingData = null;
    var toolRawClosePriceListingData = null;
    var toolRawNewsData = null;
    var toolRawTranslationsData = null;
    var toolSet = false;

    var amountOfNewsEntries = 20;

    var toolUpdatedNewsData = {
        headers: null,
        data: null
    }

    var globalClosePriceDates = [];
    var globalClosePricePrices = [];

    $(function () {
        function prepareTool() {
            if (!toolSet) {
                try {
                    $.when(requestTranslationsData, requestStockData, requestIntradayListingData, requestClosePriceListingData, requestNewsDataInitial).done(prepareData);
                    toolSet = true;
                }
                catch (err) {
                }
            }
        }
        setInterval(function () {
            prepareTool();
        }, 100);
    });

    function prepareData(translationsData, stockData, intradayListingData, closePriceListingData, newsData) {
        debugStep("prepareData()");
        // Prepare/Adjust data
        toolRawStockData = stockData[0].data[globalActiveListingIndex];
        toolRawIntradayListingData = intradayListingData[0].data[globalActiveListingIndex].data;
        toolRawClosePriceListingData = closePriceListingData[0].data[globalActiveListingIndex].data;
        toolRawNewsData = newsData[0];
        toolRawTranslationsData = translationsData[0].data;

        preLoadNewsPerformance();

        drawTool();
        applyChangeClasses();
        applyAlternativeRowClasses();
        applyClickHandler();
    }
    function preLoadNewsPerformance() {

        debugStep("preLoadNewsPerformance()");

        $.each(toolRawClosePriceListingData, function (index, item) {
            var timestamp = new moment(new moment(item.date).format("YYYY-MM-DD"), 'YYYY-MM-DD');
            globalClosePriceDates.push(timestamp.valueOf());
            globalClosePricePrices.push(item.closePrice);
        });

        var newsDataUpdatedArr = new Array();
        var newsDataUpdated = {
            attachments: null,
            categories: null,
            headline: null,
            htmlUrl: null,
            storyID: null,
            timestamp: null,
            closePrice: null,
            change: null,
            changePct: null
        };

        var lastClosePrice = 0;
        $.each(toolRawNewsData.data, function (i, item) {

            var timestamp = new moment(new moment(item.timestamp).format("YYYY-MM-DD"), 'YYYY-MM-DD');

            // find close price for timestamp
            var bestMatchIndex = getClosestClosePrice(timestamp.valueOf());
            var change = globalClosePricePrices[bestMatchIndex] - globalClosePricePrices[bestMatchIndex - 1];
            var changePct = parseFloat(((globalClosePricePrices[bestMatchIndex] - globalClosePricePrices[bestMatchIndex - 1]) / globalClosePricePrices[bestMatchIndex - 1]) * 100);

            if (timestamp.valueOf() == new moment(new moment().format("YYYY-MM-DD"), 'YYYY-MM-DD') +"]") {
                change = 0;
                changePct = 0;
            }

            if (changePct == 'Infinity') {
                changePct = 'NA';
            }

            // Create new news array.
            newsDataUpdatedArr.push({
                attachments: item.attachments,
                categories: item.categories,
                headline: item.headline,
                htmlUrl: item.htmlUrl,
                storyID: item.storyID,
                timestamp: item.timestamp,
                closePrice: globalClosePricePrices[bestMatchIndex],
                change: change,
                changePct: changePct
            });

            lastClosePrice = globalClosePricePrices[bestMatchIndex];

            if (i == amountOfNewsEntries - 1) {
                return false;
            }

        });

        toolUpdatedNewsData.data = newsDataUpdatedArr;
        toolUpdatedNewsData.headers = toolRawTranslationsData;
    }
    function drawTool() {

        debugStep("drawTool()");

        // Do something

        if (typeof ($('.IRNewsEntries').html()) != "undefined" && typeof ($('#IRNewsEntriesTemplate').html()) != "undefined") {
            var source = $('#IRNewsEntriesTemplate').html();
            var menuTemplate_NewsEntries = Handlebars.compile(source);
            $(".IRNewsEntries").html(menuTemplate_NewsEntries(toolUpdatedNewsData));
        }

    }
    function getClosestClosePrice(unixDate) {
        var iterations = -1;
        var newUnixDate = 0;
        for (var i = 0; i < globalClosePriceDates.length - 1; i++) {
            if (newUnixDate < unixDate) {
                newUnixDate = globalClosePriceDates[i];
                iterations++;
            }
        }
        return iterations; //iterations;
    }

    Handlebars.registerHelper('decimalsPct', function (number) {
        return formatDecimalPct(number);
    });

    function formatDecimalPct(number) {
        try {
            if (typeof (number) == 'number') {
                return number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals).replace('.', clientLocaleParameters.decimalSeparator) + ' %';
            } else {
                return "-";
            }
        }
        catch (err) {
            return "-";
        }
    }

    function applyChangeClasses() {

        debugStep("applyChangeClasses()");

        $('.IRNewsTool .IRDataGroup, .IRNewsPerformanceTool .IRDataGroup').each(function () {
            var price = parseFloat($(this).find(".IRData.ClosePriceChange").html().replace(" %", ""));
            if (price > 0) {
                $(this).find(".IRData.ClosePriceChange").addClass("formatColorPos");
            } else if (price == 0) {
                $(this).find(".IRData.ClosePriceChange").addClass("formatColorDef");
            } else if (price < 0) {
                $(this).find(".IRData.ClosePriceChange").addClass("formatColorNeg");
            } else {
                $(this).find(".IRData.ClosePriceChange").addClass("formatColorDef");
            }
        });
    }

    function applyAlternativeRowClasses() {

        debugStep("applyAlternativeRowClasses()");

        var altCSS = "";
        $('.IRNewsPerformanceTool .IRDataGroup').each(function () {
            if (altCSS == "") {
                altCSS = "alternative";
            } else {
                altCSS = "";
            }
            $(this).addClass(altCSS);
        });
    }

    function applyClickHandler() {

        debugStep("applyClickHandler()");

        if (typeof ($('.IRNewsPerformanceTool .IRHeaderGroup div.IRHeader.IRTitle').html()) != "undefined") {
            //
            //  News in a Div structure
            //
            $('.IRNewsPerformanceTool .IRDataGroup .IRData').hover(function () {
                //$('td.Data').removeClass('DataHover');
                $(this).parent().addClass('DataHover');
            }, function () {
                $(this).parent().removeClass('DataHover');
            });
            $('.IRNewsPerformanceTool .IRDataGroup div.IRData').click(function () {
                var storyID = $(this).parent().attr('id');
                // Show news
                window.open('http://ir.euroinvestor.com/Tools/newsArticleHTML.aspx?solutionID=' + getSolutionID() + '&customerKey=' + getCustomerKeyRequired() + '&storyID=' + storyID + '&language=' + globalActiveLanguage + '');

            });
        }

    }

</script>
