//
// Decimal Helpers
//
Handlebars.registerHelper('toLocal', function (number) {
    return NumberFormat.decimal1000(number);
});
Handlebars.registerHelper('toLocalZeros', function (number) {
    return NumberFormat.decimal1000Zeros(number);
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


Handlebars.registerHelper('showArrow', function (number) {
    var addClass = "";
    var value = Number(number);
    if (value > 0) addClass = "formatArrowPos";
    else if (value == 0) addClass = "formatArrowDef";
    else addClass = "formatArrowNeg";
    return addClass;
});

Handlebars.registerHelper('formatColour', function (number) {
    if (parseFloat(number) > 0) return "formatColourPos";
    else if (parseFloat(number) < 0) return "formatColourNeg";
    else return "";
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
        return '&nbsp;<div class="iconPDF" data-link="' + pdfURL + '"></div>';
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
Handlebars.registerHelper('showTradeChange', function (tradePrice) {
    var prevClose = globalRawStockData[globalActiveListingIndex].prevClose;
    return NumberFormat.decimal(tradePrice - prevClose);
});
Handlebars.registerHelper('showTradeChangePercentage', function (tradePrice) {
    var prevClose = globalRawStockData[globalActiveListingIndex].prevClose;
    return NumberFormat.decimal(((tradePrice - prevClose) / prevClose) * 100);
});

Handlebars.registerHelper('showTradeValue', function (price, volume) {
    return NumberFormat.decimal1000(Number((price * volume)));
})
Handlebars.registerHelper('outputValue', function () {
    return '<span class="outputLookupValue">-</span>';
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
    if (FeaturesList.IRChartCompare.use || FeaturesList.IRChartTA.use || FeaturesList.IRChartTSR.use || FeaturesList.IRChartCurrencyConversion.use) {
        ret += '<div class="IRChartMenuTrigger icon icon-menu"></div>';

        ret += '<div class="IRChartMenuTriggerBody">';

        if (FeaturesList.IRChartCompare.use) {
            ret += '<div class="IRChartComparisonHeader">' + translations.t_comparison + '</div>';
        }
        if (FeaturesList.IRChartTA.use) {
            ret += '<div class="IRChartTAHeader">' + translations.t_technical_analysis + '</div>';
        }
        if (FeaturesList.IRChartTSR.use) {
            ret += '<div class="IRChartTSRHeader">' + translations.t_dividend + '</div>';
        }
        if (FeaturesList.IRChartCurrencyConversion.use) {
            ret += '<div class="IRChartCCHeader">' + translations.t_currency + '</div>'
        }
        if (FeaturesList.IRChartSettings.use) {
            ret += '<div class="IRChartSettingsHeader">' + translations.t_settings + '</div>'
        }
        ret += '<div class="IRChartNavigationClear">' + translations.t_reset + '</div>';
        ret += '</div>';
    }
    if (FeaturesList.IRChartFullscreen.use && checkForBrowserFullscreen()) {
        ret += '<div class="IRChartFullscreen">';
        ret += '<div class="IRChartFullscreenHeader icon icon-enlarge"></div>';
        ret += '</div>';
    }

    if (FeaturesList.IRChartSettings.use && (clientStyle.chart_settingsHighLow || clientStyle.chart_settingsDrawType || clientStyle.chart_settingsGraphScale)) {
        var lactive, aactive, dactive, cactive;
        lactive = aactive = dactive = cactive = '"';
        switch (clientStyle.chart_DrawMode) {
            case 'line':
                lactive = 'active" style="border-color:' + globalChartColours[0] + '"';
                break;
            case 'area':
                aactive = 'active" style="border-color:' + globalChartColours[0] + '"';
                break;
            case 'dot':
                dactive = 'active" style="border-color:' + globalChartColours[0] + '"';
                break;
            case 'candlestick':
                cactive = 'active" style="border-color:' + globalChartColours[0] + '"';
                break;
        }
        ret += '<div class="IRChartSettings">';
        ret += '<div class="IRChartSettingsHeader">' + translations.t_settings + '</div>';
        ret += '<div class="IRChartSettingsBody">';
        ret += '<div class="IRChartSettingsBodyList">';
        if (clientStyle.chart_settingsDrawType) {
            ret += '<div class="IRChartSettingsBodyListHeader">' + translations.t_draw_type + '</div>';
            ret += '<div class="basicButtonLook selectableItem ' + lactive + ' data-type="line">' + translations.t_line + '</div>';
            ret += '<div class="basicButtonLook selectableItem ' + aactive + ' data-type="area">' + translations.t_mountain + '</div>';
            ret += '<div class="basicButtonLook selectableItem ' + dactive + ' data-type="dot">' + translations.t_dot + '</div>';
            ret += '<div class="basicButtonLook selectableItem ' + cactive + ' data-type="candlestick">' + translations.t_candlestick + '</div>';
        }

        if (clientStyle.chart_settingsGraphScale) {
            ret += '<div class="IRChartSettingsBodyListHeader">' + translations.t_graph_scale + '</div>';
            ret += '<div class="basicButtonLook selectableItem moder active" style="border-color:' + globalChartColours[0] + '" data-type="linear">' + translations.t_linear + '</div>';
            ret += '<div class="basicButtonLook selectableItem moder" data-type="logarithmic">' + translations.t_log + '</div>';
        }

        if (clientStyle.chart_settingsHighLow) {
            ret += '<div class="IRChartSettingsBodyListHeader">' + translations.t_indicators + '</div>';
            ret += '<div class="basicButtonLook selectableItem highLow">' + translations.t_period + " " + translations.t_high + "/" + translations.t_low + '</div>';
        }
        ret += '<div class="basicButtonLook colorBlack IRChartNavigationClearSettings">' + translations.t_reset + '</div>';
        ret += '</div>';
        ret += '</div>';
        ret += '</div>';
    }

    if (FeaturesList.IRChartCompare.use) {
        ret += '<div class="IRChartComparison">';
        ret += '<div class="IRChartComparisonHeader">' + translations.t_comparison + '</div>';
        ret += '<div class="IRChartComparisonBody">';
        ret += '</div>';
        ret += '</div>';
    }

    if (FeaturesList.IRChartTA.use) {
        ret += '<div class="IRChartTA">';
        ret += '<div class="IRChartTAHeader">' + translations.t_technical_analysis + '</div>';
        ret += '<div class="IRChartTABody">';
        ret += '<div class="IRChartTABodyList">';
        var obj = IRChartTAfeature.list;
        var colorId = 1;
        ret += '<div class="IRChartTABodyListHeader">' + translations.t_indicators + '</div>';
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key].cat == "indicator") {
                    ret += '<div class="basicButtonLook color' + globalChartColours[colorId].replace('#', '') + '" ' +
                        'data-color="' + globalChartColours[colorId] + '" ' +
                        'data-type="' + obj[key].type + '">' +
                        obj[key].name +
                        '<div class="inputBox">';
                    var nb = obj[key].nb;
                    for (var nbI in nb) {
                        if (nb.hasOwnProperty(nbI)) {
                            ret += '<label>' + translations["t_" + nbI] + '<input type="number" class="period-list" placeholder="' + translations['t_' + nbI] + '" ' +
                                'data-min="' + nb[nbI] + '" ' +
                                'min="' + nb[nbI] + '"/></label>';
                        }
                    }
                    if (obj[key].hasOwnProperty("radio")) {
                        ret += '<input type="hidden" class="period-list hidenIn" value="' + translations[obj[key].radio[0]] + '"/>';
                        for (var r = 0; r < obj[key].radio.length; r++) {
                            ret += '<label><input type="radio" name="type' + key + '" class="rad" value="' + obj[key].radio[r] + '" ' + (r == 0 ? "checked" : "") + '/>' + translations[obj[key].radio[r]] + '</label>';
                        }
                    }
                    ret += '<button type="button" class="pop-submit">' + translations.t_add + '</button>' +
                        '</div></div>';
                    colorId++;
                }
            }
        }
        ret += '<div class="IRChartTABodyListHeader">' + translations.t_oscillators + '</div>';
        for (var val in obj) {
            if (obj.hasOwnProperty(val)) {
                if (obj[val].cat == "oscillator") {
                    ret += '<div class="basicButtonLook color' + globalChartColours[colorId].replace('#', '') + '" ' +
                        'data-color="' + globalChartColours[colorId] + '" ' +
                        'data-type="' + obj[val].type + '">' +
                        obj[val].name +
                        '<div class="inputBox">';
                    var nbr = obj[val].nb;
                    for (var nbO in nbr) {
                        if (nbr.hasOwnProperty(nbO)) {
                            ret += '<label>' + translations["t_" + nbO] + '<input type="number" class="period-list" placeholder="' + translations['t_' + nbO] + '" ' +
                                'data-min="' + nbr[nbO] + '" ' +
                                'min="' + nbr[nbO] + '"/></label>';
                        }
                    }
                    if (obj[key].hasOwnProperty("radio")) {
                        ret += '<input type="hidden" class="period-list hidenIn" value="' + translations[obj[key].radio[0]] + '"/>';
                        for (var p = 0; p < obj[key].radio.length; p++) {
                            ret += '<label><input type="radio" name="type' + key + '" class="rad" value="' + obj[key].radio[r] + '" ' + (r == 0 ? "checked" : "") + '/>' + translations[obj[key].radio[r]] + '</label>';
                        }
                    }
                    ret += '<button type="button" class="pop-submit">' + translations.t_add + '</button>' +
                        '</div></div>';
                    colorId++;
                }
            }
        }
        ret += '<div class="basicButtonLook colorBlack IRChartNavigationClearTA">' + translations.t_reset + '</div>';
        ret += '</div>';
        ret += '</div>';
        ret += '</div>';
    }

    if (FeaturesList.IRChartTSR.use) {
        ret += '<div class="IRChartTSR">';
        ret += '<div class="IRChartTSRHeader">' + translations.t_dividend + '</div>';
        ret += '<div class="IRChartTSRBody">';
        ret += '<div class="IRChartTSRBodyList">';
        ret += '<div class="basicButtonLook color' + globalChartColours[1].replace('#', '') + '" data-mode="TSRSimple">' + translations.t_tsr_simple + '</div>';
        ret += '<div class="basicButtonLook color' + globalChartColours[2].replace('#', '') + '" data-mode="TSRReinvest">' + translations.t_tsr_reinvest + '</div>';
        ret += '<div class="basicButtonLook colorBlack IRChartNavigationClearTSR">' + translations.t_reset + '</div>';
        ret += '</div>';
        ret += '</div>';
        ret += '</div>';
    }

    if (FeaturesList.IRChartCurrencyConversion.use) {
        var currencyList = clientStyle.chart_plusCurrency.sort();
        if(currencyList.length !== 0) {
            ret += '<div class="IRChartCC">';
            ret += '<div class="IRChartCCHeader">' + translations.t_currency + '</div>';
            ret += '<div class="IRChartCCBody">';
            ret += '<div class="IRChartCCBodyList">';
            currencyList.forEach(function (value) {
                ret += '<div class="basicButtonLook" data-cr="' + value + '">' + value + '</div>';
            });
            ret += '<div class="IRChartNavigationClearCC colorBlack basicButtonLook">' + translations.t_reset + '</div>';
            ret += '</div>';
            ret += '</div>';
            ret += '</div>';
        }
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
    var periodShortsControlerIDs = "d1;d5;m1;m3;m6;y1;y2;y5;max".split(';');
    var periodShorts = translations.t_1_d_5_d_3_m_6_m_1_y_2_y_5_y_max.split(delimiter);
    if ($.inArray(periodShortsControlerIDs, activePeriod) !== -1) clientStyle.chart_DefaultPeriodSelected = activePeriod;
    else activePeriod = clientStyle.chart_DefaultPeriodSelected;
    ret += '<div class="IRChartChangePeriodOuter language-' + globalActiveLanguage + '">';
    ret += '<div class="IRChartChangePeriod">';
    for (var i = 0; i < periodShorts.length; i++) {
        var active = '';
        var periodName = periodShorts[i];
        if (periodShortsControlerIDs[i] == activePeriod) active = ' activePeriod';
        periodName = periodName.replace('  ', '');
        ret += '<div data-timemode="' + periodShortsControlerIDs[i] + '" class="' + periodShortsControlerIDs[i] + active + '">' + periodName + '</div>';
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

//
// Date Picker Helpers
//
Handlebars.registerHelper('datepickerIcon', function (typeFromTo) {
    return '<input class="' + typeFromTo + '-datepicker datepicker-button" />';
});

Handlebars.registerHelper('datepicker', function (typeFromTo) {
    return '<span class="datepicker-box"><input class="js-' + typeFromTo + '" placeholder="' + clientStyle.formatDate + '" type="text"/><input class="' + typeFromTo + '-datepicker datepicker-button" /></span>';
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
    var listRNSFilters = '<div class="allRNSnews checkbox checkboxFilter" data-filtercat="allRNSnews">All News Types</div>';
    if (globalRNSFilters.length != 0) {
        for (var i = 0; i < clientRNSFilters.length; i++) {
            var filtersRNS = "";
            for (var j = 0; j < clientRNSFilters[i].categories.length; j++) {
                filtersRNS += clientRNSFilters[i].categories[j];
            }
            listRNSFilters += '<div class="checkbox checkboxFilter" data-filtercat="' + filtersRNS + '">' + clientRNSFilters[i].name + '</div>';
        }
        return listRNSFilters;
    }
    debugError('No filters in ir.client.js file was found');
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