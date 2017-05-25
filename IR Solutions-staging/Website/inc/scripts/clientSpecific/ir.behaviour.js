function formatColour()
{
    $(".link-target").click(function ()
    {
        $(this).attr('target', '_blank');
    });
    $('.formatColour').each(function ()
    {
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
Handlebars.registerHelper('toLocal', function (number)
{
    return formatLocal(number);
});
Handlebars.registerHelper('decimals', function (number)
{
    return formatDecimal(number);
});
Handlebars.registerHelper('showArrow', function (number)
{
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
Handlebars.registerHelper('showDateTime', function (timestamp)
{
    return moment.tz(timestamp, globalActiveExchangeTimeZone).format(clientStyle.formatDateTime);
});
Handlebars.registerHelper('showDate', function (timestamp)
{
    return moment.tz(timestamp, globalActiveExchangeTimeZone).add(2, 'hours').format(clientStyle.formatDate); // Hotfix add 2 hours
});
Handlebars.registerHelper('showTime', function (timestamp)
{
    return moment(timestamp).format(clientStyle.formatTime);
});
Handlebars.registerHelper('showDateWithFormat', function (timestamp, format)
{
    return moment(timestamp).format(format);
});
Handlebars.registerHelper('showFileSize', function (fileSize)
{
    if (typeof (fileSize) == 'number') {
        return "(" + formatDecimalFileSize(Number(fileSize) / 1000) + " KB) ";
    } else {
        return "";
    }
});
Handlebars.registerHelper('showRNSPDF', function (pdfURL)
{
    if (typeof (pdfURL) == 'string') {
        return '&nbsp;<a target="_blank" href="' + pdfURL + '"><div class="iconPDF"></div></a>';
    } else {
        return "";
    }
});

Handlebars.registerHelper('ShowCategoryShort', function (categories)
{
    var categoryShort = '';
    for (var i = 0; i < categories.length; i++) {
        switch (categories[i].categoryType) {
            case "AnnouncementType": // RNS
                categoryShort = categories[i].data;
                break;
            case "PRNewswire": // PRNewswire
                categoryShort = categories[i].data;
                break;
        }
    }

    categoryShort = categoryShort.replace('fsa.', ''); // PRNewswire categories has 'fsa.' before the category code.
    return categoryShort;
});

Handlebars.registerHelper('showCurrency', function ()
{
    return getActiveCurrency();
});
Handlebars.registerHelper('showMarketCapM', function (number)
{
    return formatDecimal(number / 1000000);
});
Handlebars.registerHelper('showLondonMarketCapM', function (number)
{
    return formatDecimal((number / 1000000) / 100);
});
Handlebars.registerHelper('showCustomDateLastYear', function (monthDay)
{
    var monthDayArr = monthDay.split('-');
    return moment((new moment().format('YYYY') - 1) + '-' + monthDayArr[0] + '-' + monthDayArr[1]).format(clientStyle.formatDate);
});
Handlebars.registerHelper('formatColour', function (number)
{
    if (parseFloat(number) > 0) {
        return "formatColourPos";
    } else if (parseFloat(number) < 0) {
        return "formatColourNeg";
    } else {
        return "";
    }
});
Handlebars.registerHelper('getImage', function (imageName)
{
    return getImagePath() + imageName + ".png";
});
Handlebars.registerHelper('showImage', function (imageStr)
{
    return getImagePath() + imageStr + ".png";
});
Handlebars.registerHelper('for', function (from, to, incr, block)
{
    var accum = '';
    for (var i = from; i < to; i += incr) {
        var twoCharRep = (i <= 9) ? "0" + i : "" + i;

        accum += block.fn(i, twoCharRep);
    }
    return accum;
});
Handlebars.registerHelper('decimal', function (number, numberOfDecimals)
{
    return number.toFixed(numberOfDecimals);
});
Handlebars.registerHelper('listRNSCategories', function (RNSCategories)
{
    return RNSCategories;
});

Handlebars.registerHelper('includeIRChartDomSettings', function ()
{
    var ret = '';
    ret += '<div class="IRChartColour"></div>';
    return ret;
});

Handlebars.registerHelper('includeIRChartCompanyName', function ()
{
    var ret = '';
    ret += '<div class="IRChartCompanyName">[CompanyName]</div>';
    return ret;
});
Handlebars.registerHelper('includeIRChartNavigation', function ()
{
    var ret = '';
    ret += '<div class="IRChartView">[View]</div>';
    ret += '<div class="IRChartComparison">[Comparison]</div>';
    ret += '<div class="IRChartListings">[Listing]</div>';
    return ret;
});
Handlebars.registerHelper('includeIRChartPlaceholder', function ()
{
    var ret = '';
    ret += '<div class="IRChartPlaceholder"></div>';
    return ret;
});
Handlebars.registerHelper('includeIRChartChangePeriod', function (activePeriod)
{
    var ret = "";

    var periodShortsControlerIDs = "d1;d5;m3;m6;y1;y2;y5;Max".split(';');
    var periodShorts = translations.t_1_d_5_d_3_m_6_m_1_y_2_y_5_y_max.split(';');

    ret += '<div class="IRChartChangePeriodOuter">';

    ret += '<div class="IRChartChangePeriod">';
    for (var i = 0; i < periodShorts.length; i++) {

        var active = '';
        if (periodShortsControlerIDs[i] == activePeriod) {
            active = ' class="activePeriod"';
        }

        var periodName = periodShorts[i];
        periodName = periodName.replace('  ', '').replace('Max ', 'Max');

        ret += '<div id="' + periodShortsControlerIDs[i] + '"' + active + '>' + periodName + '</div>';
    }
    ret += '</div>';

    ret += '</div>';

    return ret;

});

Handlebars.registerHelper('datepicker', function (typeFromTo)
{
    return '<input id="' + typeFromTo + '-datepicker" class="datepicker-button" />';
});
Handlebars.registerHelper('selectFromDay', function ()
{

    var ret = '<select id="from-day" class="date-select">';
    for (var i = 1; i <= 31; i++) {
        ret += '<option value="' + i + '">' + i + '</option>';
    }
    ret += '</select>';
    return ret;
});
Handlebars.registerHelper('selectFromMonth', function (monthFormat)
{
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
Handlebars.registerHelper('selectFromYear', function (startYear)
{
    var now = new Date();
    var selectedYear = now.getFullYear() - 1;
    var year = now.getFullYear() - 10;
    if (typeof (startYear) == 'number') {
        year = startYear;
    }
    if (year >= selectedYear) {
        selectedYear = year;
    }
    var ret = '<select id="from-year" class="date-select">';
    for (var i = year; i <= now.getFullYear() ; i++) {
        var selected = '';
        if (i == selectedYear) {
            selected = 'selected="selected"';
        }
        ret += '<option value="' + i + '"' + selected + '>' + i + '</option>';
    }
    ret += '</select>';
    return ret;
});
Handlebars.registerHelper('selectToDay', function ()
{

    var ret = '<select id="to-day" class="date-select">';
    for (var i = 1; i <= 31; i++) {
        ret += '<option value="' + i + '">' + i + '</option>';
    }
    ret += '</select>';
    return ret;
});
Handlebars.registerHelper('selectToMonth', function (monthFormat)
{
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
        ret += '<option value="' + i + '">' + months[i] + '</option>';
    }
    ret += '</select>';
    return ret;
});
Handlebars.registerHelper('selectToYear', function (startYear)
{
    var now = new Date();
    var selectedYear = now.getFullYear();
    var year = now.getFullYear() - 10;
    if (typeof (startYear) == 'number') {
        year = startYear;
    }
    var ret = '<select id="to-year" class="date-select">';
    for (var i = year; i <= now.getFullYear() ; i++) {
        var selected = '';
        if (i == selectedYear) {
            selected = 'selected="selected"';
        }
        ret += '<option value="' + i + '"' + selected + '>' + i + '</option>';
    }
    ret += '</select>';
    return ret;
});

Handlebars.registerHelper('newsSelectFromMonth', function (monthFormat)
{
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
Handlebars.registerHelper('newsSelectFromYear', function (startYear)
{
    var now = new Date();
    var selectedYear = globalNewsEarlyYear.format('YYYY');
    var year = selectedYear;
    if (typeof (startYear) == 'number') {
        year = startYear;
    }
    if (year >= selectedYear) {
        selectedYear = year;
    }
    var ret = '<select id="from-year" class="date-select">';
    for (var i = year; i <= now.getFullYear() ; i++) {
        var selected = '';
        if (i == selectedYear) {
            selected = 'selected="selected"';
        }
        ret += '<option value="' + i + '"' + selected + '>' + i + '</option>';
    }
    ret += '</select>';
    return ret;
});
Handlebars.registerHelper('newsSelectToMonth', function (monthFormat)
{
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
Handlebars.registerHelper('newsSelectToYear', function (startYear)
{
    var now = new Date();
    var selectedYear = now.getFullYear();
    var year = globalNewsEarlyYear.format('YYYY');
    if (typeof (startYear) == 'number') {
        year = startYear;
    }
    var ret = '<select id="to-year" class="date-select">';
    for (var i = year; i <= now.getFullYear() ; i++) {
        var selected = '';
        if (i == selectedYear) {
            selected = 'selected="selected"';
        }
        ret += '<option value="' + i + '"' + selected + '>' + i + '</option>';
    }
    ret += '</select>';
    return ret;
});
Handlebars.registerHelper('newsRNSFilters', function ()
{
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

Handlebars.registerHelper('showTradeChange', function (tradePrice)
{
    var prevClose = getPrevClose();
    return formatDecimal(tradePrice - prevClose);
});
Handlebars.registerHelper('showTradeChangePercentage', function (tradePrice)
{
    var prevClose = getPrevClose();
    return formatDecimal(((tradePrice - prevClose) / prevClose) * 100);
});

//
//  Custom or specific edits
//
Handlebars.registerHelper('showMarketCapM_costum_for_tyraTech_TYR', function (number)
{
    return formatDecimal((number / 1000000) / 100 * 0.641);
});
Handlebars.registerHelper('showMarketCapM_costum_for_tyraTech_TYRU', function (number)
{
    return formatDecimal((number / 1000000) / 100 * 0.362);
});
//

Handlebars.registerHelper('ShowCategoryShortDebug', function (categories)
{
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

Date.prototype.addHours = function (hours)
{
    this.setHours(this.getHours() + hours);
    return this;
};
Date.prototype.addMinutes = function (minutes)
{
    this.setMinutes(this.getMinutes() + minutes);
    return this;
};

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt /*, from*/)
    {
        var len = this.length >>> 0;
        var from = Number(arguments[1]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0) from += len;

        for (; from < len; from++) {
            if (from in this && this[from] === elt) return from;
        }
        return -1;
    };
}