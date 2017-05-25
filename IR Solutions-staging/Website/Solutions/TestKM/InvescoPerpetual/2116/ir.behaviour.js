$(function () {
    $('.link-target').each(function () {
        $(this).attr('target', '_blank');
    });
});
function formatColour() {
    $('.formatColour').each(function () {
        $(this).removeClass("formatColour");
        try {
            if (parseFloat($(this).html()) > 0) {
                $(this).addClass("formatColourPos");
            }
            if (parseFloat($(this).html()) < 0) {
                $(this).addClass("formatColourNeg");
            }
        }
        catch (e) {
        }
    });
}
function setIRNewsDivRowWidth() {
    if (typeof ($('div.IRNewsTool .HeaderGroup .Header').html()) != "undefined") {
        var newsRows = 0;
        $('div.IRNewsTool .HeaderGroup .Header').each(function () {
            newsRows = newsRows + 1;
        });
        $('div.IRNewsTool .HeaderGroup .Header').addClass("cols" + newsRows);

        if (typeof ($('div.IRNewsTool .DataGroup .Data').html()) != "undefined") {
            $('div.IRNewsTool .DataGroup .Data').addClass("cols" + newsRows);
        }
    }
}

//function setIRNewsNarrowLayout()
function setIRNewsInternetExplorerUpdateLoop() {
    if (getBrowserIEVersion() <= 8 && getBrowserIEVersion() > -1) {

        var IRNewsWidth = $(window).width();
        var IRNewsUpdate = 0;
        updateIRNewsLayout();
        setInterval(function () {
            checkIRNewsWidth();
        }, 400);
        function checkIRNewsWidth() {
            if (IRNewsWidth != $(window).width()) {
                IRNewsWidth = $(window).width();
                IRNewsUpdate = 1;
            } else {
                if (IRNewsUpdate == 1) {
                    IRNewsUpdate = 0;
                    updateIRNewsLayout();
                }
            }
        }

        function updateIRNewsLayout() {
            if (IRNewsWidth < 480) {
                $('div.IRNewsTool').addClass('IE876');
            } else {
                $('div.IRNewsTool').removeClass('IE876');
            }
        }
    }
}

Handlebars.registerHelper('toLocal', function (number) {
    //return formatLocal(number);
    return formatNumberWithLocalDelimiters(number);
});
//Handlebars.registerHelper('toLocalFixed', function (number) {
//    //return formatLocal(number);
//    return formatNumberWithLocalDelimiters(number);
//});
Handlebars.registerHelper('decimals', function (number) {
    return formatDecimal(number);
});
Handlebars.registerHelper('decimalsNoZero', function (number) {
    return formatDecimalNoZero(number);
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
Handlebars.registerHelper('showDateTime', function (timestamp) {
    //return moment.tz(timestamp, globalActiveExchangeTimeZone).format(clientStyle.formatDateTime);
    return formatDateWithFormat(timestamp, clientStyle.formatDateTime);
    //

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
    //return moment(timestamp).format(format);
});
Handlebars.registerHelper('showLocalTimeZone', function () {
    return globalActiveLocalTimeZone;
});
Handlebars.registerHelper('showLocalTimeZoneShort', function () {
    return globalActiveLocalTimeZoneShort;
});
Handlebars.registerHelper('showFileSize', function (fileSize) {
    if (typeof (fileSize) == 'number') {
        return "(" + formatDecimalFileSize(Number(fileSize) / 1000) + " KB) ";
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
Handlebars.registerHelper('showExchangeShort', function () {
    return globalListingsExchangeShort[globalActiveListingIndex];
});
Handlebars.registerHelper('ShowCategoryShort', function (categories) {
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
    return formatDecimal(Number((price * volume) / 100));
});
Handlebars.registerHelper('showCurrency', function () {
    return getActiveCurrency();
});
Handlebars.registerHelper('showCurrencySymbol', function () {
    return getActiveCurrencySymbol();
});
Handlebars.registerHelper('showMarketCapM', function (number) {
    return formatDecimalDecimal1000(number / 1000000);
});
Handlebars.registerHelper('showLondonMarketCapM', function (number) {
    return formatDecimal((number / 1000000) / 100);
});
Handlebars.registerHelper('showMarketCapInSpecificCurrencyM', function (number, currencyCross) {
    var currency = currencyCross;
    var currencyCross = getCurrencyCrossFromStockOtherData(currencyCross);
    return currency.slice(3) + " " + Number(formatDecimal((number / 1000000) * currencyCross)).toLocaleString(globalActiveLanguage);
});
Handlebars.registerHelper('showMarketCapInSpecificCurrenyMIncludingWarrants', function (number, currencyCross, factor, warrants, strikePrice) {
    // Removed
});
Handlebars.registerHelper('showCustomDateLastYear', function (monthDay) {
    var monthDayArr = monthDay.split('-');
    return moment((new moment().format('YYYY') - 1) + '-' + monthDayArr[0] + '-' + monthDayArr[1]).format(clientStyle.formatDate);
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
Handlebars.registerHelper('getImage', function (imageName) {
    return getImagePath() + imageName + ".png";
});
Handlebars.registerHelper('showImage', function (imageStr) {
    return getImagePath() + imageStr + ".png";
});
Handlebars.registerHelper('for', function (from, to, incr, block) {
    var accum = '';
    for (var i = from; i < to; i += incr) {
        var twoCharRep = (i <= 9) ? "0" + i : "" + i;

        accum += block.fn(i, twoCharRep);
    }
    return accum;
});
Handlebars.registerHelper('decimal', function (number, numberOfDecimals) {
    //return number.toFixed(numberOfDecimals);
    return formatDecimalWithCustomNumberOfDecimal(number, numberOfDecimals);
});
Handlebars.registerHelper('listRNSCategories', function (RNSCategories) {
    return RNSCategories;
});

Handlebars.registerHelper('includeIRChartDomSettings', function () {
    var ret = '';
    ret += '<div class="IRChartColour"></div>';
    return ret;
});
Handlebars.registerHelper('includeIRChartCompanyName', function () {
    var ret = '';
    ret += '<div class="IRChartCompanyName"></div>';
    return ret;
});
Handlebars.registerHelper('includeIRChartNavigation', function () {
    var ret = '';
    ret += '<div class="IRChartNavigationInner">';

    if (useIRChartCompare || useIRChartTA) {
        ret += '<div class="IRChartMenuTrigger">' + translations.t_menu + '</div>';
    }
    ret += '<div class="IRChartMenuTriggerBody">';

    if (useIRChartCompare) {
        ret += '<div class="IRChartComparisonHeader">' + translations.t_comparison + '</div>';
    }
    if (useIRChartTA) {
        ret += '<div class="IRChartTAHeader">' + translations.t_technical_analysis + '</div>';
    }
    if (useIRChartTechnicalAnalysis) {
        ret += '<div class="IRChartTAHeader">' + translations.t_technical_analysis + '</div>';
    }
    if (useIRChartTSR) {
        ret += '<div class="IRChartTSRHeader">' + translations.t_dividend + '</div>';
    }
    // KM
    if (useIRChartCurrencyConversion) {
        ret += '<div class="IRChartCCHeader">' + translations.t_currency + '</div>'
    }

    ret += '</div>';

    //
    //  Todo IRChart Fullscreen
    //
    //ret += '<div class="IRChartFullscreen">';
    //ret += '<div class="IRChartFullscreenHeader">[FS]</div>';
    //ret += '</div>';

    if (useIRChartCompare) {

        ret += '<div class="IRChartComparison">';
        ret += '<div class="IRChartComparisonHeader">' + translations.t_comparison + '</div>';
        ret += '<div class="IRChartComparisonBody"></div>';
        ret += '</div>';

    }

    if (useIRChartTA) {

        ret += '<div class="IRChartTA">';
        ret += '<div class="IRChartTAHeader">' + translations.t_technical_analysis + '</div>';
        ret += '<div class="IRChartTABody">';
        ret += '<div class="IRChartTABodyList">';
        ret += '<div class="basicButtonLook color' + globalChartColours[1].replace('#', '') + '" data-color="' + globalChartColours[1] + '" id="' + chartTechnicalAnalysisNamesCC.CommodityChannelIndex + '">' + chartTechnicalAnalysisNames.CommodityChannelIndex + '</div>';
        ret += '<div class="basicButtonLook color' + globalChartColours[2].replace('#', '') + '" data-color="' + globalChartColours[2] + '"id="' + chartTechnicalAnalysisNamesCC.DirectionalMovementIndex + '">' + chartTechnicalAnalysisNames.DirectionalMovementIndex + '</div>';
        ret += '<div class="basicButtonLook color' + globalChartColours[3].replace('#', '') + '" data-color="' + globalChartColours[3] + '"id="' + chartTechnicalAnalysisNamesCC.ExponentialMovingAverage + '">' + chartTechnicalAnalysisNames.ExponentialMovingAverage + '</div>';
        ret += '<div class="basicButtonLook color' + globalChartColours[4].replace('#', '') + '" data-color="' + globalChartColours[4] + '"id="' + chartTechnicalAnalysisNamesCC.Momentum + '">' + chartTechnicalAnalysisNames.Momentum + '</div>';
        ret += '<div class="basicButtonLook color' + globalChartColours[5].replace('#', '') + '" data-color="' + globalChartColours[5] + '"id="' + chartTechnicalAnalysisNamesCC.MoneyFlowIndex + '">' + chartTechnicalAnalysisNames.MoneyFlowIndex + '</div>';
        ret += '<div class="basicButtonLook color' + globalChartColours[6].replace('#', '') + '" data-color="' + globalChartColours[6] + '"id="' + chartTechnicalAnalysisNamesCC.RateOfChange + '">' + chartTechnicalAnalysisNames.RateOfChange + '</div>';
        ret += '<div class="basicButtonLook color' + globalChartColours[7].replace('#', '') + '" data-color="' + globalChartColours[7] + '"id="' + chartTechnicalAnalysisNamesCC.RelativeStrengthIndex + '">' + chartTechnicalAnalysisNames.RelativeStrengthIndex + '</div>';
        ret += '<div class="basicButtonLook color' + globalChartColours[8].replace('#', '') + '" data-color="' + globalChartColours[8] + '"id="' + chartTechnicalAnalysisNamesCC.SimpleMovingAverage + '">' + chartTechnicalAnalysisNames.SimpleMovingAverage + '</div>';
        ret += '<div class="basicButtonLook color' + globalChartColours[9].replace('#', '') + '" data-color="' + globalChartColours[9] + '"id="' + chartTechnicalAnalysisNamesCC.WilliamsPercentR + '">' + chartTechnicalAnalysisNames.WilliamsPercentR + '</div>';
        ret += '<div class="basicButtonLook color" id="IRChartNavigationClearTA">' + translations.t_clear_all + '</div>';
        ret += '</div>';
        ret += '</div>';
        ret += '</div>';
    }

    if (useIRChartTechnicalAnalysis) {
        ret += '<div class="IRChartTA">';
        ret += '<div class="IRChartTAHeader">' + translations.t_technical_analysis + '</div>';
        ret += '<div class="IRChartTABody">';
        ret += '<div class="IRChartTABodyList">';


        // JRJRJR
        ret += '<div class="IRChartTechnicalAnalysisControlsPlaceholder">';

        //IRChartTechnicalAnalysis.useShortOrLongNames = useShortOrLongNames;

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

        //ret += '<div class="basicButtonLook" id="' + IRChartTechnicalAnalysisNamesCC.SimpleMovingAverage + '">' + chartTechnicalAnalysisNames.SimpleMovingAverage + '</div>';

        ret += '</div>';

        ret += '</div>';
    }


    if (useIRChartTSR) {
        ret += '<div class="IRChartTSR">';
        ret += '<div class="IRChartTSRHeader">' + translations.t_dividend + '</div>';
        ret += '<div class="IRChartTSRBody">';
        ret += '<div class="IRChartTSRBodyList">';
        ret += '<div class="basicButtonLook color002395" data-mode="TSRSimple">TSR Simple</div>';
        ret += '<div class="basicButtonLook color03C03C" data-mode="TSRReinvest">TSR Reinvest</div>';
        // ret += '<div class="basicButtonLook color03C03C" id="TSRReinvest">TSR Something</div>';
        ret += '<div class="basicButtonLook" id="IRChartNavigationClearTSR">' + translations.t_clear_all + '</div>';
        ret += '</div>';
        ret += '</div>';
        ret += '</div>';
    }

    // KM Currency converter menu
    if (useIRChartCurrencyConversion) {
        var currencyArr = ['GBP', 'USD', 'EUR', 'DKK'];
        $.merge(currencyArr, clientStyle.chart_plusCurrency);
        ret += '<div class="IRChartCC">';
        ret += '<div class="IRChartCCHeader">' + translations.t_currency + '</div>';
        ret += '<div class="IRChartCCBody">';
        ret += '<div class="IRChartCCBodyList">';
        currencyArr.forEach(function (value) {
            ret += '<div class="convert-btn selectableItem" style="border-color:' + globalChartColours[0] + '" data-cr="' + value + '">' + value + '</div>';
        });
        ret += '<div id="IRChartNavigationClear" class="convert-btn" data-cr="clear">' + translations.t_clear_all + '</div>';
        ret += '</div>';
        ret += '</div>';
        ret += '</div>';
    }


    //ret += '<div class="IRChartFullscreen">';
    //ret += '<div class="IRChartFullscreenHeader">Fullscreen</div>';
    //ret += '<div class="IRChartFullscreenBody">';
    //ret += '</div>';

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
    ret += '<div class="IRChartPlaceholder2 secondary" dir="ltr"></div>';
    ret += '<div class="IRChartScrollOnYAxis"></div>';
    return ret;
});
Handlebars.registerHelper('includeIRChartChangePeriod', function (activePeriod) {
    var ret = "";

    var delimiter = ';';
    if (globalActiveLanguage == 'ar') {
        delimiter = '؛';
    }

    var periodShortsControlerIDs = "d1;d5;m1;m3;m6;y1;y2;y5;Max".split(';');

    var periodShorts = translations.t_1_d_5_d_3_m_6_m_1_y_2_y_5_y_max.split(delimiter);

    var languageClass = '';

    ret += '<div class="IRChartChangePeriodOuter language-' + globalActiveLanguage + '">';

    ret += '<div class="IRChartChangePeriod language-' + globalActiveLanguage + '">';
    for (var i = 0; i < periodShorts.length; i++) {

        var active = '';
        if (periodShortsControlerIDs[i] == activePeriod) {
            active = ' activePeriod';
        }

        var periodName = periodShorts[i];
        periodName = periodName.replace('  ', '').replace('Max ', 'Max');

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

    var ret = '<select id="from-day" class="date-select">';
    for (var i = 1; i <= 31; i++) {
        var selected = '';
        if (i == selectedIndex) {
            selected = ' selected="selected"';
        }
        ret += '<option value="' + i + '"' + selected + '>' + i + '</option>';
    }
    ret += '</select>';
    return ret;
});
Handlebars.registerHelper('selectFromMonth', function (monthFormat) {

    // JRJR
    var selectedIndex = 0;
    if (globalEarlyYear == new moment().format("YYYY")) {
        // Same year
        if (globalEarlyMonth < 10) {
            globalEarlyMonth = globalEarlyMonth.replace('0', '');
        }
        selectedIndex = parseInt(globalEarlyMonth) - 1;
    }

    var format = 'MMM';

    var delimiter = ';';
    if (globalActiveLanguage == 'ar') {
        delimiter = '؛';
    }

    var months = translations.t_jan_feb_mar_apr_may_jun_jul_aug_sep_oct_nov_dec.split(delimiter);
    if (typeof (monthFormat) == 'string') {
        switch (monthFormat) {
            case 'M':
                format = monthFormat;
                months = '1;2;3;4;5;6;7;8;9;10;11;12'.split(';');
                break;
            case 'MM':
                format = monthFormat;
                months = '01;02;03;04;05;06;07;08;09;10;11;12'.split(';');
                break;
            case 'MMM':
                format = monthFormat;
                break;
            case 'MMMM':
                format = monthFormat;
                months = (translations.t_january + ';' + translations.t_february + ';' + translations.t_march + ';' + translations.t_april + ';' + translations.t_may + ';' + translations.t_june + ';' + translations.t_july + ';' + translations.t_august + ';' + translations.t_september + ';' + translations.t_october + ';' + translations.t_november + ';' + translations.t_december).split(';');
                break;
        }
    }
    var ret = '<select id="from-month" class="date-select">';
    for (var i = 0; i < months.length; i++) {
        var selected = '';
        if (i == selectedIndex) {
            selected = ' selected="selected"';
        }
        ret += '<option value="' + i + '"' + selected + '>' + months[i] + '</option>';
    }
    ret += '</select>';
    return ret;
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

    var ret = '<select id="from-year" class="date-select">';
    for (var i = year; i <= now.getFullYear(); i++) {
        var selected = '';
        if (parseInt(i) == parseInt(selectedYear)) {
            selected = 'selected="selected"';
        }

        ret += '<option value="' + i + '"' + selected + '>' + i + '</option>';
    }
    ret += '</select>';
    return ret;
});
Handlebars.registerHelper('selectToDay', function () {

    var ret = '<select id="to-day" class="date-select">';
    for (var i = 1; i <= 31; i++) {

        var selected = '';
        if (i == new moment().format("DD")) {
            selected = ' selected="selected"';
        }

        ret += '<option value="' + i + '"' + selected + '">' + i + '</option>';
    }
    ret += '</select>';
    return ret;
});
Handlebars.registerHelper('selectToMonth', function (monthFormat) {
    var format = 'MMM';
    var months = translations.t_jan_feb_mar_apr_may_jun_jul_aug_sep_oct_nov_dec.split(';');
    if (typeof (monthFormat) == 'string') {
        switch (monthFormat) {
            case 'M':
                format = monthFormat;
                months = '1;2;3;4;5;6;7;8;9;10;11;12'.split(';');
                break;
            case 'MM':
                format = monthFormat;
                months = '01;02;03;04;05;06;07;08;09;10;11;12'.split(';');
                break;
            case 'MMM':
                format = monthFormat;
                break;
            case 'MMMM':
                format = monthFormat;
                months = (translations.t_january + ';' + translations.t_february + ';' + translations.t_march + ';' + translations.t_april + ';' + translations.t_may + ';' + translations.t_june + ';' + translations.t_july + ';' + translations.t_august + ';' + translations.t_september + ';' + translations.t_october + ';' + translations.t_november + ';' + translations.t_december).split(';');
                break;
        }
    }
    var ret = '<select id="to-month" class="date-select">';
    for (var i = 0; i < months.length; i++) {
        var selected = '';
        if (i == new moment().format("MM") - 1) {
            selected = ' selected="selected"';
        }
        ret += '<option value="' + i + '"' + selected + '">' + months[i] + '</option>';
    }
    ret += '</select>';
    return ret;
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
    var ret = '<select id="to-year" class="date-select">';
    for (var i = year; i <= now.getFullYear(); i++) {
        var selected = '';
        if (i == selectedYear) {
            selected = 'selected="selected"';
        }
        ret += '<option value="' + i + '"' + selected + '>' + i + '</option>';
    }
    ret += '</select>';
    return ret;
});

Handlebars.registerHelper('newsSelectFromMonth', function (monthFormat) {
    var format = 'MMM';
    var months = translations.t_jan_feb_mar_apr_may_jun_jul_aug_sep_oct_nov_dec.split(';');
    if (typeof (monthFormat) == 'string') {
        switch (monthFormat) {
            case 'M':
                format = monthFormat;
                months = '1;2;3;4;5;6;7;8;9;10;11;12'.split(';');
                break;
            case 'MM':
                format = monthFormat;
                months = '01;02;03;04;05;06;07;08;09;10;11;12'.split(';');
                break;
            case 'MMM':
                format = monthFormat;
                break;
            case 'MMMM':
                format = monthFormat;
                months = (translations.t_january + ';' + translations.t_february + ';' + translations.t_march + ';' + translations.t_april + ';' + translations.t_may + ';' + translations.t_june + ';' + translations.t_july + ';' + translations.t_august + ';' + translations.t_september + ';' + translations.t_october + ';' + translations.t_november + ';' + translations.t_december).split(';');
                break;
        }
    }
    var ret = '<select id="from-month" class="date-select">';
    for (var i = 0; i < months.length; i++) {
        ret += '<option value="' + i + '">' + months[i] + '</option>';
    }
    ret += '</select>';
    return ret;
});
Handlebars.registerHelper('newsSelectFromYear', function (startYear) {
    var now = new Date();
    var selectedYear = globalNewsEarlyYear.format("YYYY");

    var year = selectedYear;
    if (typeof (startYear) == 'number') {
        year = startYear;
    }
    if (year >= selectedYear) {
        selectedYear = year;
    }
    var ret = '<select id="from-year" class="date-select">';
    for (var i = year; i <= now.getFullYear(); i++) {
        var selected = '';
        if (i == selectedYear) {
            selected = 'selected="selected"';
        }
        ret += '<option value="' + i + '"' + selected + '>' + i + '</option>';
    }
    ret += '</select>';
    return ret;
});
Handlebars.registerHelper('newsSelectToMonth', function (monthFormat) {
    var format = 'MMM';
    var months = translations.t_jan_feb_mar_apr_may_jun_jul_aug_sep_oct_nov_dec.split(';');
    if (typeof (monthFormat) == 'string') {
        switch (monthFormat) {
            case 'M':
                format = monthFormat;
                months = '1;2;3;4;5;6;7;8;9;10;11;12'.split(';');
                break;
            case 'MM':
                format = monthFormat;
                months = '01;02;03;04;05;06;07;08;09;10;11;12'.split(';');
                break;
            case 'MMM':
                format = monthFormat;
                break;
            case 'MMMM':
                format = monthFormat;
                months = (translations.t_january + ';' + translations.t_february + ';' + translations.t_march + ';' + translations.t_april + ';' + translations.t_may + ';' + translations.t_june + ';' + translations.t_july + ';' + translations.t_august + ';' + translations.t_september + ';' + translations.t_october + ';' + translations.t_november + ';' + translations.t_december).split(';');
                break;
        }
    }
    var ret = '<select id="to-month" class="date-select">';

    var currentMonth = new moment();

    var selected = "";
    for (var i = 0; i < months.length; i++) {
        selected = "";
        if (currentMonth.format('M') - 1 == i) {
            selected = ' selected="selected"';
        }
        ret += '<option value="' + i + '" ' + selected + '>' + months[i] + '</option>';
    }
    ret += '</select>';
    return ret;
});
Handlebars.registerHelper('newsSelectToYear', function (startYear) {
    var now = new Date();
    var selectedYear = now.getFullYear();
    var year = globalNewsEarlyYear.format('YYYY');
    if (typeof (startYear) == 'number') {
        year = startYear;
    }
    var ret = '<select id="to-year" class="date-select">';
    for (var i = year; i <= now.getFullYear(); i++) {
        var selected = '';
        if (i == selectedYear) {
            selected = 'selected="selected"';
        }
        ret += '<option value="' + i + '"' + selected + '>' + i + '</option>';
    }
    ret += '</select>';
    return ret;
});
Handlebars.registerHelper('newsRNSFilters', function () {
    var listRNSFilters = "";
    for (var i = 0; i < clientRNSFilters.length; i++) {
        var filtersRNS = "";
        for (var j = 0; j < clientRNSFilters[i].categories.length; j++) {
            filtersRNS += clientRNSFilters[i].categories[j];
        }
        listRNSFilters += '<div class="checkbox checkboxFilter" id="' + filtersRNS + '">' + clientRNSFilters[i].name + '</div>';
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
        listFilters += '<div class="checkbox checkboxFilter" id="' + filters + '">' + clientFilters[i].name + '</div>';
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
    var listFilters = '<select class=\"selectFilter\">';
    var first = 'selected="selected"';
    for (var i = 0; i < clientFilters.length; i++) {
        var filters = "";
        for (var j = 0; j < clientFilters[i].categories.length; j++) {
            filters += clientFilters[i].categories[j];
        }

        //


        listFilters += '<option ' + first + ' class="checkbox checkboxFilter" id="' + filters + '" value="' + filters + '">' + clientFilters[i].name + '</option>';
        //listFilters += '<div class="checkbox checkboxFilter" id="' + filters + '">' + clientFilters[i].name + '</div>';
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

        var css = '';
        var headline = '';

        if (typeof (articleData.categories[0]) != 'undefined') {
            if (articleData.categories[0].categoryType == 'NasdaqOMXCategoryName') {
                cssStyle = '<style>h3 { font-family: Arial; font-size: 14pt; font-weight: bold; text-align: left; margin-top: 18px; }</style>';
                headline = articleData.headline;
                return cssStyle + "<h3>" + headline + "</h3>" + articleData.content + "";
            }
        }


        return "<pre style=\"width: 100%;font-family: Courier New;font-size: 14px;\">" + articleData.content + "</pre>";
    }

});

Handlebars.registerHelper('showNewsArticleAttachments', function (articleData) {

    var attachmentsHTML = '';
    attachmentsHTML += '<div class="attachmentList">';
    attachmentsHTML += '<h2 class="newsArticleHeader">Attachments</h2>';
    for (var i = 0; i < articleData.attachments.length; i++) {
        attachmentsHTML += '<a href="' + articleData.attachments[i].url + '" target="_blank"><span class="attachmentIcon"></span>' + articleData.attachments[i].fileName + '</a>';
    }
    attachmentsHTML += '</div>';

    return attachmentsHTML;
});


Handlebars.registerHelper('showTradeChange', function (tradePrice) {
    var prevClose = getPrevClose();
    return formatDecimal(tradePrice - prevClose);
});
Handlebars.registerHelper('showTradeChangePercentage', function (tradePrice) {
    var prevClose = getPrevClose();
    return formatDecimal(((tradePrice - prevClose) / prevClose) * 100);
});

//
//  Custom or specific edits
//
Handlebars.registerHelper('showMarketCapM_costum_for_tyraTech_TYR', function (number) {
    return formatDecimal((number / 1000000) / 100 * 0.641);
});
Handlebars.registerHelper('showMarketCapM_costum_for_tyraTech_TYRU', function (number) {
    return formatDecimal((number / 1000000) / 100 * 0.362);
});
//

Handlebars.registerHelper('ShowCategoryShortDebug', function (categories) {
    var categoryShort = '';
    var newsSource = '';
    for (var i = 0; i < categories.length; i++) {
        switch (categories[i].categoryType) {
            case "AnnouncementType": // RNS
                categoryShort = categories[i].data;
                newsSource = 'RNS';
                break;
            case "PRNewswire": // PRNewswire
                categoryShort = categories[i].data;
                newsSource = 'PRNewswire';
                break;
        }
    }

    categoryShort = categoryShort.replace('fsa.', ''); // PRNewswire categories has 'fsa.' before the category code.
    categoryShort += ' (' + newsSource + ')';
    return categoryShort;
});

Date.prototype.addHours = function (hours) {
    this.setHours(this.getHours() + hours);
    return this;
};
Date.prototype.addMinutes = function (minutes) {
    this.setMinutes(this.getMinutes() + minutes);
    return this;
};
Handlebars.registerHelper('thousands', function (number) {
    var sepaNumb = "-";
    try {
        if (typeof (number) == 'number') {
            if (/^./.test(number)) {
                number = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals);
                var h = number.toString().split(".");
                sepaNumb = h[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000) + clientLocaleParameters.decimalSeparator + h[1];
            } else {
                sepaNumb = number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals).replace('.', clientLocaleParameters.decimalSeparator);
            }
        }
    }
    catch (err) {
        debugError(err);
    }
    return sepaNumb;
});