<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900""/>";
%>

<%= site.newHeader("IRCustomModule") %>

<script type="text/javascript">
    var activeModules = ["IRCustomModule","IRNews"];
    var activeDataRequests = [
        'requestStockData',
        'requestIntradayListingData',
        'requestClosePriceListingData',
        'requestNews'
    ];
</script>

<!--<div class="IRCustomModule IRNewsModule">-->
<div class="IRCustomModule IRNewsModule IRNewsEntries">


</div>

<script id="IRNewsTemplate" type="text/x-handlebars-template">

    <div>
        <div class="IRNewsPerformanceTool IRNewsTool table-look horizontal responsive">

            <div class="IRHeaderGroup">
                <div class="IRHeader IRDate column-first">{{headers/t_date}}</div>
                <div class="IRHeader IRTitle">{{headers/t_title}}</div>
                <div class="IRHeader IRClosePriceChange column-last">{{headers/t_change}}</div>
            </div>
            {{#each data}}
                <div class="IRDataGroup" id="{{storyID}}">
                    <div class="IRData IRDate column-first" id="{{showDateWithFormat timestamp 'YYYY-MM-DD'}}">{{showDateWithFormat timestamp 'DD MMM YYYY'}}</div>
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

    var amountOfNewsEntries = 1000;

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

        if (typeof ($('.IRNewsEntries').html()) != "undefined" && typeof ($('#IRNewsTemplate').html()) != "undefined") {
            var source = $('#IRNewsTemplate').html();
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
setNewsPagination();
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



<script type="text/javascript">


    var IRNewsPaginationApplied = false;
    var IRNewsPaginationActivePage = 1;

    function applyIRNewsPagination() {

        if (IRNewsPaginationApplied) {

        } else {

            if (typeof ($('.IRNewsPagination').html()) != 'undefined') {
                globalNewsPagesInTotal = Math.ceil(globalAmountOfNewsItems / clientStyle.amountOfNewsPerPage);

                var maxIRPaginationPagesToShow = 5;

                var paginationTmp = "";
                paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPagePrev" style="visibility:hidden;" id="prev"><img height="8" width="8" src="images/arrowLeft.png" style="margin-right:4px;"/>Prev</div>'; //Added space instead of text PREV to show arrow image.
                for (var i = 1; i < globalNewsPagesInTotal; i++) {
                    var cssStyle = "";
                    if (i > maxIRPaginationPagesToShow) {
                        cssStyle = "display:none;";
                    }
                    paginationTmp += '<div style="' + cssStyle + '" class="IRNewsPaginationPageNew IRNewsPaginationPageNumber' + i + 'New" id="' + i + '">' + i + '</div>';
                }
                paginationTmp += '<div class="IRNewsPaginationPageNew IRNewsPaginationPageNext" id="next">Next<img height="8" width="8" src="images/arrowRight.png" style="margin-left:4px;"/></div></div>'; //Added space instead of text NEXT to show arrow image.

                $('.IRNewsPagination').html(paginationTmp);
				
                $('.IRNewsPaginationPageNew.IRNewsPaginationPageNumber1New').addClass('active');
                $('.IRNewsPaginationPageNew').on('click', function () {

                    var clickedPage = $(this).attr('id');

                    if (clickedPage == 'next') {
                        updateIRNewsPagination((parseInt(IRNewsPaginationActivePage) + parseInt(1)));
                    } else if (clickedPage == 'prev') {
                        updateIRNewsPagination((parseInt(IRNewsPaginationActivePage) - parseInt(1)));
                    } else {
                        updateIRNewsPagination(clickedPage);
                    }

                });

                IRNewsPaginationApplied = true;
                console.log('applyIRNewsPagination function applied');
            }
        }
    }

    $(function () {

        setInterval(function () {
            applyIRNewsPagination();
        }, 200);

    });

    function updateIRNewsPagination(page) {

        IRNewsPaginationActivePage = page;

        setNewsActivePage(IRNewsPaginationActivePage);

        var currentPage = parseInt(page);
        var minPage = (currentPage - 2);
        var maxPage = (currentPage + 2);

        $('.IRNewsPaginationPageNew').removeClass('active');
        $('.IRNewsPaginationPageNew.IRNewsPaginationPageNumber' + currentPage + 'New').addClass('active');
        $('.IRNewsPageNumber').removeClass('active');
        $('.IRNewsPageNumber.IRNewsPageNumber' + currentPage).addClass('active');

        if (maxPage <= 5) {
            maxPage = 5;
        } else {
            $('.IRNewsPaginationPageNext').css('visibility', 'visible');
        }
        if (minPage >= globalNewsPagesInTotal - 5) {
            minPage = globalNewsPagesInTotal - 5;
        } else {
            $('.IRNewsPaginationPagePrev').css('visibility', 'visible');
        }

        if (maxPage <= 5) {
            if (currentPage == 1) {
                $('.IRNewsPaginationPagePrev').css('visibility', 'hidden');
            }
        }
        if (minPage >= globalNewsPagesInTotal - 5) {

            if (currentPage == globalNewsPagesInTotal - 1) {
                $('.IRNewsPaginationPageNext').css('visibility', 'hidden');
            }
        }

        for (var i = 1; i < globalNewsPagesInTotal; i++) {
            if (i < minPage) {
                $('.IRNewsPaginationPageNumber' + i + 'New').css('display', 'none');
                $('.IRNewsPageNumber' + i).css('display', 'none');

            } else if (i > maxPage) {
                $('.IRNewsPaginationPageNumber' + i + 'New').css('display', 'none');
                $('.IRNewsPageNumber' + i).css('display', 'none');
            } else {
                $('.IRNewsPaginationPageNumber' + i + 'New').css('display', 'inline-block');
                $('.IRNewsPageNumber' + i).css('display', 'inline-block');
            }
        }

    }


</script>