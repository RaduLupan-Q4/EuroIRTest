//
// Decimal Helpers
//
Handlebars.registerHelper('toLocal', function (number) {
    return NumberFormat.local(number);
});
Handlebars.registerHelper('decimals', function (number) {
    return NumberFormat.decimal(number);
});
Handlebars.registerHelper('decimalsNoZero', function (number) {
    return NumberFormat.decimalNoZero(number);
});
Handlebars.registerHelper('decimal', function (number, numberOfDecimals) {
    return NumberFormat.decimalWithCustomNumberOfDecimal(number, numberOfDecimals);
});
Handlebars.registerHelper('thousands', function (number) {
    return NumberFormat.decimal1000(number);
});

Handlebars.registerHelper('showArrow', function (number) {
    var addClass = "";
    var value = Number(number);
    if (value > 0) {
        addClass = "formatArrowPos";
    } else if (value == 0) {
        addClass = "formatArrowDef";
    }
    else {
        addClass = "formatArrowNeg";
    }
    return addClass;
});
Handlebars.registerHelper('formatColour', function (number) {
    if (parseFloat(number) > 0) {
        return "formatColourPos";
    } else if (parseFloat(number) < 0) {
        return "formatColourNeg";
    } else {
        return "";
    }
});
Handlebars.registerHelper('for', function (from, to, incr, block) {
    var accum = '';
    for (var i = from; i < to; i += incr) {
        var twoCharRep = (i <= 9) ? "0" + i : "" + i;
        accum += block.fn(i, twoCharRep);
    }
    return accum;
});

//
// Time Helpers
//
Handlebars.registerHelper('showDateTime', function (timestamp) {
    return formatDateWithFormat(timestamp, clientStyle.formatDateTime);
});
Handlebars.registerHelper('showDate', function (timestamp) {
    return moment.tz(timestamp, globalActiveExchangeTimeZone).add(2, 'hours').format(clientStyle.formatDate); // Hotfix add 2 hours
});
Handlebars.registerHelper('showTime', function (timestamp) {
    return moment.tz(timestamp, globalActiveExchangeTimeZone).add(clientStyle.manualTimeOffset, 'hours').format(clientStyle.formatTime);
});
Handlebars.registerHelper('showDateTimeNoTZ', function (timestamp) {
    return moment.utc(timestamp).format(clientStyle.formatDateTime);
});
Handlebars.registerHelper('showDateNoTZ', function (timestamp) {
    return moment.utc(timestamp).format(clientStyle.formatDate); // Hotfix add 2 hours
});
Handlebars.registerHelper('showTimeNoTZ', function (timestamp) {
    return moment.utc(timestamp).format(clientStyle.formatTime);
});
Handlebars.registerHelper('showDateWithFormat', function (timestamp, format) {
    return formatDateWithFormat(timestamp, format);
});
Handlebars.registerHelper('showLocalTimeZone', function () {
    return globalActiveLocalTimeZone;
});
Handlebars.registerHelper('showLocalTimeZoneShort', function () {
    return globalActiveLocalTimeZoneShort;
});
Handlebars.registerHelper('showCustomDateLastYear', function (monthDay) {
    var monthDayArr = monthDay.split('-');
    return moment((new moment().format('YYYY') - 1) + '-' + monthDayArr[0] + '-' + monthDayArr[1]).format(clientStyle.formatDate);
});

//
// File Helpers
//
Handlebars.registerHelper('showFileSize', function (fileSize) {
    if (typeof (fileSize) == 'number') {
        return "(" + NumberFormat.decimalFileSize(Number(fileSize) / 1000) + " KB) ";
    } else {
        return "";
    }
});
Handlebars.registerHelper('showRNSPDF', function (pdfURL) {
    if (typeof (pdfURL) == 'string') {
        return '&nbsp;<a target="_blank" href="' + pdfURL + '"><div class="iconPDF"></div></a>';
    } else {
        return "";
    }
});
Handlebars.registerHelper('getImage', function (imageName) {
    return getImagePath() + imageName + ".png";
});
Handlebars.registerHelper('showImage', function (imageStr) {
    return getImagePath() + imageStr + ".png";
});

//
//
//
Handlebars.registerHelper('showExchangeShort', function () {
    return globalListingsExchangeShort[globalActiveListingIndex];
});
Handlebars.registerHelper('showCategoryShort', function (categories) {
    var categoryShort = '';
    for (var i = 0; i < categories.length; i++) {
        switch (categories[i].categoryType) {
            case "AnnouncementType": // RNS
                categoryShort = categories[i].data;
                break;
            case "RnsId":
                // Do nothing (RNS uses 'AnnouncementType' as categoryType)
                break;
            case "PRNewswire": // PRNewswire
                categoryShort = categories[i].data;
                break;
            case "NasdaqOMXCategoryName": // Nasdaq OMX Nordic
                categoryShort = categories[i].data;
                break;
            case "GlobeNewswire":
                categoryShort = categories[i].data;
                break;
                break;
            default:
                debugError("Handlebar ShowCategoryShort is missing categoryType '" + categories[i].categoryType + "'");
                break;
        }
    }

    categoryShort = categoryShort.replace('fsa.', ''); // PRNewswire categories has 'fsa.' before the category code.
    return categoryShort;
});

Handlebars.registerHelper('showTradeValueLSE', function (price, volume) {
    return NumberFormat.decimal(Number((price * volume) / 100));
});
Handlebars.registerHelper('showCurrency', function () {
    return getActiveCurrency();
});
Handlebars.registerHelper('showCurrencySymbol', function () {
    return getActiveCurrencySymbol();
});
Handlebars.registerHelper('showMarketCapM', function (number) {
    return NumberFormat.decimal1000(number / 1000000);
});
Handlebars.registerHelper('showLondonMarketCapM', function (number) {
    return NumberFormat.decimal((number / 1000000) / 100);
});
Handlebars.registerHelper('showMarketCapInSpecificCurrencyM', function (number, currencyCross) {
    var currency = getCurrencyCrossFromStockOtherData(currencyCross);
    return currency.slice(3) + " " + Number(NumberFormat.decimal((number / 1000000) * currency)).toLocaleString(globalActiveLanguage);
});
Handlebars.registerHelper('listRNSCategories', function (RNSCategories) {
    return RNSCategories;
});

//
// Chart Helpers
//
Handlebars.registerHelper('includeIRChartDomSettings', function () {
    return '<div class="IRChartColour"></div>';
});
Handlebars.registerHelper('includeIRChartCompanyName', function () {
    return '<div class="IRChartCompanyName"></div>';
});
Handlebars.registerHelper('includeIRChartNavigation', function () {
    var ret = '';
    ret += '<div class="IRChartNavigationInner">';
    if (FeaturesList.IRChartCompare.use || FeaturesList.IRChartTA.use) {
        ret += '<div class="IRChartMenuTrigger">' + translations.t_menu + '</div>';
    }
    ret += '<div class="IRChartMenuTriggerBody">';

    if (FeaturesList.IRChartCompare.use) {
        ret += '<div class="IRChartComparisonHeader">' + translations.t_comparison + '</div>';
    }
    if (FeaturesList.IRChartTA.use || FeaturesList.IRChartTechnicalAnalysis.use) {
        ret += '<div class="IRChartTAHeader">' + translations.t_technical_analysis + '</div>';
    }
    if (FeaturesList.IRChartTSR.use) {
        ret += '<div class="IRChartTSRHeader">' + translations.t_dividend + '</div>';
    }

    ret += '</div>';
    if (FeaturesList.IRChartCompare.use) {
        ret += '<div class="IRChartComparison">';
        ret += '<div class="IRChartComparisonHeader">' + translations.t_comparison + '</div>';
        ret += '<div class="IRChartComparisonBody"></div>';
        ret += '</div>';
    }

    if (FeaturesList.IRChartTA.use) {
        ret += '<div class="IRChartTA">';
        ret += '<div class="IRChartTAHeader">' + translations.t_technical_analysis + '</div>';
        ret += '<div class="IRChartTABody">';
        ret += '<div class="IRChartTABodyList">';
        ret += '<div class="basicButtonLook" id="' + chartTechnicalAnalysisNamesCC.CommodityChannelIndex + '">' + chartTechnicalAnalysisNames.CommodityChannelIndex + '</div>';
        ret += '<div class="basicButtonLook" id="' + chartTechnicalAnalysisNamesCC.DirectionalMovementIndex + '">' + chartTechnicalAnalysisNames.DirectionalMovementIndex + '</div>';
        ret += '<div class="basicButtonLook" id="' + chartTechnicalAnalysisNamesCC.ExponentialMovingAverage + '">' + chartTechnicalAnalysisNames.ExponentialMovingAverage + '</div>';
        ret += '<div class="basicButtonLook" id="' + chartTechnicalAnalysisNamesCC.Momentum + '">' + chartTechnicalAnalysisNames.Momentum + '</div>';
        ret += '<div class="basicButtonLook" id="' + chartTechnicalAnalysisNamesCC.MoneyFlowIndex + '">' + chartTechnicalAnalysisNames.MoneyFlowIndex + '</div>';
        ret += '<div class="basicButtonLook" id="' + chartTechnicalAnalysisNamesCC.RateOfChange + '">' + chartTechnicalAnalysisNames.RateOfChange + '</div>';
        ret += '<div class="basicButtonLook" id="' + chartTechnicalAnalysisNamesCC.RelativeStrengthIndex + '">' + chartTechnicalAnalysisNames.RelativeStrengthIndex + '</div>';
        ret += '<div class="basicButtonLook" id="' + chartTechnicalAnalysisNamesCC.SimpleMovingAverage + '">' + chartTechnicalAnalysisNames.SimpleMovingAverage + '</div>';
        ret += '<div class="basicButtonLook" id="' + chartTechnicalAnalysisNamesCC.WilliamsPercentR + '">' + chartTechnicalAnalysisNames.WilliamsPercentR + '</div>';
        ret += '<div class="basicButtonLook" id="IRChartNavigationClearTA">' + translations.t_clear_all + '</div>';
        ret += '</div>';
    }
    if (FeaturesList.IRChartTechnicalAnalysis.use) {
        ret += '<div class="IRChartTA">';
        ret += '<div class="IRChartTAHeader">' + translations.t_technical_analysis + '</div>';
        ret += '<div class="IRChartTABody">';
        ret += '<div class="IRChartTABodyList">';
        ret += '<div class="IRChartTechnicalAnalysisControlsPlaceholder">';
        ret += IRChartTechnicalAnalysis.includeTA('SMA');
        ret += IRChartTechnicalAnalysis.includeTA('MACD');
        ret += IRChartTechnicalAnalysis.includeTA('BBands');
        ret += IRChartTechnicalAnalysis.includeTA('EMA');
        ret += IRChartTechnicalAnalysis.includeTA('RoC');
        ret += IRChartTechnicalAnalysis.includeTA('MAES');
        ret += IRChartTechnicalAnalysis.includeTA('MAEE');
        ret += IRChartTechnicalAnalysis.includeTA('RSI');
        ret += IRChartTechnicalAnalysis.includeTA('Momentum');
        ret += IRChartTechnicalAnalysis.includeTA('PSAR');
        ret += IRChartTechnicalAnalysis.includeTA('WillPctR');
        ret += '</div>';
        ret += '</div>';
        ret += '</div>';
    }
    if (FeaturesList.IRChartTSR.use) {
        ret += '<div class="IRChartTSR">';
        ret += '<div class="IRChartTSRHeader">' + translations.t_dividend + '</div>';
        ret += '<div class="IRChartTSRBody">';
        ret += '<div class="basicButtonLook color002395" id="TSRSimple">TSR</div>';
        ret += '<div class="basicButtonLook" id="IRChartNavigationClearTSR">' + translations.t_clear_all + '</div>';
        ret += '</div>';
        ret += '</div>';
    }
    ret += '</div>';
    ret += '</div>';

    ret += '</div>';
    return ret;
});
Handlebars.registerHelper('includeIRChartPlaceholder', function () {
    var ret = '';
    ret += '<div class="IRChartCurrency"></div>';
    ret += '<div class="IRChartComparisonPlaceholder"></div>';
    ret += '<div class="IRChartTAPlaceholder"></div>';
    ret += '<div class="IRChartTSRPlaceholder"></div>';
    ret += '<div class="IRChartPlaceholder" dir="ltr"></div>';
    ret += '<div class="IRChartScrollOnYAxis"></div>';
    return ret;
});

Handlebars.registerHelper('includeIRChartChangePeriod', function (activePeriod) {
    var ret = "";
    var periodShortsControlerIDs = "d1;d5;m1;m3;m6;y1;y2;y5;Max".split(';');
    var periodShorts = translations.t_1_d_5_d_3_m_6_m_1_y_2_y_5_y_max.split(delimiter);
    ret += '<div class="IRChartChangePeriodOuter language-' + globalActiveLanguage + '">';
    ret += '<div class="IRChartChangePeriod language-' + globalActiveLanguage + '">';
    for (var i = 0; i < periodShorts.length; i++) {
        var active = '';
        if (periodShortsControlerIDs[i] == activePeriod) {
            active = ' activePeriod';
        }
        var periodName = periodShorts[i];
        periodName = periodName.replace('  ', '');
        if (globalActiveLanguage == 'ar') {
            if (i < periodShorts.length) {
                ret += '<div class="language-' + globalActiveLanguage + active + '" id="' + periodShortsControlerIDs[i] + '">' + periodName + '</div>';
            }
        } else {
            ret += '<div id="' + periodShortsControlerIDs[i] + '" class="' + active + '">' + periodName + '</div>';
        }
    }
    ret += '</div>';
    ret += '</div>';
    return ret;

});

Handlebars.registerHelper('includeIRChartDownloadDataAsExcel', function (buttonText) {
    var ret = '';
    if (typeof (buttonText) != 'string') {
        buttonText = translations.t_download;
    }
    ret += '<div class="IRChartDownloadHistoricalDataAsExcel">' + buttonText + '</div>';
    return ret;
});

Handlebars.registerHelper('includeIRChartTechnicalAnalysis', function (useShortOrLongNames) {
    var ret = '';
    ret += '<div class="IRChartTechnicalAnalysisControlsPlaceholder ' + useShortOrLongNames + '">';
    IRChartTechnicalAnalysis.useShortOrLongNames = useShortOrLongNames;
    ret += IRChartTechnicalAnalysis.includeTA('SMA');
    ret += IRChartTechnicalAnalysis.includeTA('MACD');
    ret += IRChartTechnicalAnalysis.includeTA('BBands');
    ret += IRChartTechnicalAnalysis.includeTA('EMA');
    ret += IRChartTechnicalAnalysis.includeTA('RoC');
    ret += IRChartTechnicalAnalysis.includeTA('MAES');
    ret += IRChartTechnicalAnalysis.includeTA('MAEE');
    ret += IRChartTechnicalAnalysis.includeTA('RSI');
    ret += IRChartTechnicalAnalysis.includeTA('Momentum');
    ret += IRChartTechnicalAnalysis.includeTA('PSAR');
    ret += IRChartTechnicalAnalysis.includeTA('WillPctR');
    ret += '</div>';
    ret += '<br /><div class="IRChartTechnicalAnalysisActiveTAControls"></div>';
    return ret;
});

Handlebars.registerHelper('includeLegend', function () {
    var ret = '';
    ret += '<div class="legendWrapper">';
    ret += '<div class="legend">';
    ret += '<h2>' + translations.t_legend + '</h2>';
    ret += '<p>O - ' + translations.t_open + '</p>';
    ret += '<p>H - ' + translations.t_highest + '</p>';
    ret += '<p>L - ' + translations.t_lowest + '</p>';
    ret += '<p>C - ' + translations.t_close + '</p>';
    ret += '<p>V - ' + translations.t_volume + '</p>';
    ret += '</div>';
    ret += '</div>';
    return ret;
});

Handlebars.registerHelper('includeChartTypeChange', function () {
    var ret = '';
    ret += '<div class="chart-type-wrapper">';
    ret += '<h2>Diagram type</h2>';
    if (typeof(chartTypes) !== 'undefined'){
        for (var i = 0; i < chartTypes.length; i++){
            ret += '<div class="diagramSelect" data-charttype="diagram' + chartTypes[i].capitalizeFirstLetter() + '">'+ translations['t_' + chartTypes[i].toLowerCase()] +'</div>';
        }
    }else {
        ret += '<div class="diagramSelect" data-charttype="diagramArea">Area</div>';
        ret += '<div class="diagramSelect" data-charttype="diagramLine">'+ translations.t_line +'</div>';
        ret += '<div class="diagramSelect" data-charttype="diagramOHLC">'+ translations.t_bar +'</div>';
        ret += '<div class="diagramSelect" data-charttype="diagramCandlestick">'+ translations.t_candlestick +'</div>';
    }
    ret += '</div>';
    return ret;
});




//
//     <div class="navBottomRow">
//     <h2>Indicators</h2><!-- missing handlebar -->
// <div class="featureCheckbox" id="featurePeriodHighLow">Period High/Low</div><!-- missing handlebar -->
// <div class="featureCheckbox checked" id="featureVolume">Volume</div><!-- missing handlebar -->
// </div>
//
// <div class="navBottomRow column-last">
//     <h2>Moving Average</h2><!-- missing handlebar -->
// <div class="chartModeSelect" id="taMA10">10 days</div><!-- missing handlebar -->
// <div class="chartModeSelect" id="taMA20">20 days</div><!-- missing handlebar -->
// <div class="chartModeSelect" id="taMA50">50 days</div><!-- missing handlebar -->
// </div>
//


//
// Date Picker Helpers
//
Handlebars.registerHelper('datepicker', function (typeFromTo) {
    return '<input id="' + typeFromTo + '-datepicker" class="datepicker-button" />';
});
Handlebars.registerHelper('selectFromDay', function () {

    var selectedIndex = 0;
    if (globalEarlyYear == new moment().format("YYYY")) {
        if (globalEarlyDay < 10) {
            globalEarlyDay = globalEarlyDay.replace('0', '');
        }
        selectedIndex = globalEarlyDay;
    }
    return datePickerFunctions.daysSelector("from-day", selectedIndex);
});
Handlebars.registerHelper('selectToDay', function () {
    return datePickerFunctions.daysSelector("to-day", new moment().format("DD"));
});
Handlebars.registerHelper('selectFromMonth', function (monthFormat) {
    var selectedIndex = 0;
    if (globalEarlyYear == new moment().format("YYYY")) {
        // Same year
        if (globalEarlyMonth < 10) {
            globalEarlyMonth = globalEarlyMonth.replace('0', '');
        }
        selectedIndex = parseInt(globalEarlyMonth) - 1;
    }
    var months = datePickerFunctions.monthsFormatedList(monthFormat);
    return datePickerFunctions.monthSelector(months, "from-month", selectedIndex);
});
Handlebars.registerHelper('selectToMonth', function (monthFormat) {
    var months = datePickerFunctions.monthsFormatedList(monthFormat);
    return datePickerFunctions.monthSelector(months, "to-month", new moment().format("MM") - 1);
});
Handlebars.registerHelper('newsSelectFromMonth', function (monthFormat) {
    var months = datePickerFunctions.monthsFormatedList(monthFormat);
    return datePickerFunctions.monthSelector(months, "from-month");
});
Handlebars.registerHelper('newsSelectToMonth', function (monthFormat) {
    var months = datePickerFunctions.monthsFormatedList(monthFormat);
    return datePickerFunctions.monthSelector(months, "to-month", new moment().format('M') - 1);
});

Handlebars.registerHelper('selectFromYear', function (startYear) {
    var now = new Date();
    var selectedYear = now.getFullYear() - 1;
    var year = now.getFullYear() - 10;
    if (typeof (startYear) == 'number') {
        year = startYear;
    }
    if (year >= selectedYear) {
        selectedYear = year;
    }
    if (year < globalEarlyDate) {
        year = globalEarlyDate;
        selectedYear = globalEarlyDate;
    }
    return datePickerFunctions.yearSelector(year, "from-year", selectedYear);
});

Handlebars.registerHelper('selectToYear', function (startYear) {
    var now = new Date();
    var selectedYear = now.getFullYear();
    var year = now.getFullYear() - 10;
    if (typeof (startYear) == 'number') {
        year = startYear;
    }
    if (year < globalEarlyDate) {
        year = globalEarlyDate;
    }
    return datePickerFunctions.yearSelector(year, "to-year", selectedYear);
});
Handlebars.registerHelper('newsSelectFromYear', function (startYear) {
    var selectedYear = globalNewsEarlyYear.format("YYYY");

    var year = selectedYear;
    if (typeof (startYear) == 'number') {
        year = startYear;
    }
    if (year >= selectedYear) {
        selectedYear = year;
    }
    return datePickerFunctions.yearSelector(year, "from-year", selectedYear);
});
Handlebars.registerHelper('newsSelectToYear', function (startYear) {
    var selectedYear = new Date().getFullYear();
    var year = globalNewsEarlyYear.format('YYYY');
    if (typeof (startYear) == 'number') {
        year = startYear;
    }
    return datePickerFunctions.yearSelector(year, "to-year", selectedYear);
});
//
// News Filter Helper
//
Handlebars.registerHelper('newsRNSFilters', function () {
    var listRNSFilters = "";
    for (var i = 0; i < clientRNSFilters.length; i++) {
        var filtersRNS = "";
        for (var j = 0; j < clientRNSFilters[i].categories.length; j++) {
            filtersRNS += clientRNSFilters[i].categories[j];
        }
        listRNSFilters += '<div class="checkbox checkboxFilter ' + filtersRNS + '">' + clientRNSFilters[i].name + '</div>';
    }
    return listRNSFilters;
});
Handlebars.registerHelper('newsFilters', function (categoryType) {

    var clientFilters = "";
    switch (categoryType) {
        case "LondonRNS":
            clientFilters = clientRNSFilters;
            break;
        case "NasdaqOMXNordic":
            switch (globalActiveLanguage) {
                case "da":
                    if (typeof (clientNasdaqOMXNordicFilters_DA) == 'object') {
                        clientFilters = clientNasdaqOMXNordicFilters_DA;
                    }
                    break;
                case "fi":
                    if (typeof (clientNasdaqOMXNordicFilters_FI) == 'object') {
                        clientFilters = clientNasdaqOMXNordicFilters_FI;
                    }
                    break;
                case "se":
                    if (typeof (clientNasdaqOMXNordicFilters_SE) == 'object') {
                        clientFilters = clientNasdaqOMXNordicFilters_SE;
                    }
                    break;
                default:
                    if (typeof (clientNasdaqOMXNordicFilters_EN) == 'object') {
                        clientFilters = clientNasdaqOMXNordicFilters_EN;
                    }
                    break;
            }
            break;
        default:
            debugError("Handlebar 'newsFilters' is missing 'categoryType' " + categoryType);
            break;
    }
    var listFilters = "";
    for (var i = 0; i < clientFilters.length; i++) {
        var filters = "";
        for (var j = 0; j < clientFilters[i].categories.length; j++) {
            filters += clientFilters[i].categories[j];
        }
        listFilters += '<div class="checkbox checkboxFilter ' + filters + '">' + clientFilters[i].name + '</div>';
    }
    return listFilters;
});
Handlebars.registerHelper('newsFiltersSelect', function (categoryType) {
    var clientFilters = "";
    switch (categoryType) {
        case "NasdaqOMXNordic":
            switch (globalActiveLanguage) {
                case "da":
                    if (typeof (clientNasdaqOMXNordicFilters_DA) == 'object') {
                        clientFilters = clientNasdaqOMXNordicFilters_DA;
                    }
                    break;
                case "fi":
                    if (typeof (clientNasdaqOMXNordicFilters_FI) == 'object') {
                        clientFilters = clientNasdaqOMXNordicFilters_FI;
                    }
                    break;
                default:
                    if (typeof (clientNasdaqOMXNordicFilters_EN) == 'object') {
                        clientFilters = clientNasdaqOMXNordicFilters_EN;
                    }
                    break;
            }
            break;
        default:
            debugError("Handlebar 'newsFiltersSelect' is missing 'categoryType' " + categoryType);
            break;
    }
    var listFilters = '<select class="selectFilter">';
    var first = 'selected="selected"';
    for (var i = 0; i < clientFilters.length; i++) {
        var filters = "";
        for (var j = 0; j < clientFilters[i].categories.length; j++) {
            filters += clientFilters[i].categories[j];
        }
        listFilters += '<option ' + first + ' class="checkbox checkboxFilter" data-filtercat="' + filters + '" value="' + filters + '">' + clientFilters[i].name + '</option>';
        first = '';
    }
    listFilters += '</select>';
    return listFilters;
});

Handlebars.registerHelper('showNewsArticleLogo', function () {
    return '<div class="IRToolArticleLogo"><img src="' + getLogoPath() + '" /></div>';
});
Handlebars.registerHelper('showNewsArticle', function (articleData) {
    var isHTML = true;
    if (articleData.content.indexOf("<html") == -1) {
        isHTML = false;
    }
    if (isHTML) {
        return articleData.content;
    } else {
        var headline = '';

        if (typeof (articleData.categories[0]) != 'undefined') {
            if (articleData.categories[0].categoryType == 'NasdaqOMXCategoryName') {
                cssStyle = '<style>h3 { font-family: Arial, sans-serif; font-size: 14pt; font-weight: bold; text-align: left; margin-top: 18px; }</style>';
                headline = articleData.headline;
                return cssStyle + "<h3>" + headline + "</h3>" + articleData.content + "";
            }
        }
        return '<pre style="width: 100%;font-family: Courier New, sans-serif;font-size: 14px;">' + articleData.content + '</pre>';
    }
});

Handlebars.registerHelper('showNewsArticleAttachments', function (articleData) {
    var attachmentsHTML = '';
    attachmentsHTML += '<div class="attachmentList">';
    if (articleData.attachments.length == 0) {
        attachmentsHTML += '<h2 class="newsArticleHeader">Attachments</h2>';
    }
    for (var i = 0; i < articleData.attachments.length; i++) {
        attachmentsHTML += '<a href="' + articleData.attachments[i].url + '" target="_blank"><span class="attachmentIcon"></span>' + articleData.attachments[i].fileName + '</a>';
    }
    attachmentsHTML += '</div>';
    return attachmentsHTML;
});
Handlebars.registerHelper('showTradeChange', function (tradePrice) {
    return NumberFormat.decimal(tradePrice - globalRawStockData[globalActiveListingIndex].prevClose);
});
Handlebars.registerHelper('showTradeChangePercentage', function (tradePrice) {
    return NumberFormat.decimal(((tradePrice - globalRawStockData[globalActiveListingIndex].prevClose) / globalRawStockData[globalActiveListingIndex].prevClose) * 100);
});


//====Helper Functions============================================================================
//
// Datapicker Functions
//
var datePickerFunctions = {
    daysSelector: function (id, select) {
        var ret = '<select class="' + id + ' date-select">';
        for (var i = 1; i <= 31; i++) {
            var selected = '';
            if (i == select) {
                selected = ' selected="selected"';
            }
            ret += '<option value="' + i + '"' + selected + '>' + i + '</option>';
        }
        ret += '</select>';
        return ret;
    },
    monthsFormatedList: function (monthFormat) {
        var months = translations.t_jan_feb_mar_apr_may_jun_jul_aug_sep_oct_nov_dec.split(delimiter);
        if (typeof (monthFormat) == 'string') {
            switch (monthFormat) {
                case 'M':
                    months = '1;2;3;4;5;6;7;8;9;10;11;12'.split(';');
                    break;
                case 'MM':
                    months = '01;02;03;04;05;06;07;08;09;10;11;12'.split(';');
                    break;
                case 'MMM':
                    break;
                case 'MMMM':
                    months = [translations.t_january, translations.t_february, translations.t_march, translations.t_april, translations.t_may, translations.t_june, translations.t_july, translations.t_august, translations.t_september, translations.t_october, translations.t_november, translations.t_december];
                    break;
            }
        }
        return months;
    },
    monthSelector: function (months, id, select) {
        var ret = '<select class="' + id + ' date-select">';
        for (var i = 0; i < months.length; i++) {
            var selected = '';
            if (i == select) {
                selected = ' selected="selected"';
            }
            ret += '<option value="' + i + '"' + selected + '>' + months[i] + '</option>';
        }
        ret += '</select>';
        return ret;
    },
    yearSelector: function (year, id, select) {
        var ret = '<select class="' + id + ' date-select">';
        for (var i = year; i <= new Date().getFullYear(); i++) {
            var selected = '';
            if (i == select) {
                selected = 'selected="selected"';
            }
            ret += '<option value="' + i + '"' + selected + '>' + i + '</option>';
        }
        ret += '</select>';
        return ret;
    }
};