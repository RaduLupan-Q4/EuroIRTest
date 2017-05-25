Handlebars.registerHelper('toLocal', function (number) {
    //return formatLocal(number);
    return formatNumberWithLocalDelimiters(number);
});
Handlebars.registerHelper('decimals', function (number) {
    if (IRPerformanceModule && number == 0) {
        return '-';
    }
    return formatDecimal(number);
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
    return moment.tz(timestamp, globalActiveExchangeTimeZone).format(clientStyle.formatDateTime);
});
Handlebars.registerHelper('showDate', function (timestamp) {
    return moment.tz(timestamp, globalActiveExchangeTimeZone).add(2, 'hours').format(clientStyle.formatDate); // Hotfix add 2 hours
});
Handlebars.registerHelper('showTime', function (timestamp) {
    return moment.tz(timestamp, globalActiveExchangeTimeZone).format(clientStyle.formatTime);
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
    return moment(timestamp).format(format);
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
Handlebars.registerHelper('getExchangeShort', function (exchange) {
    return getExchangeShort(exchange);
});
Handlebars.registerHelper('getExchangeCity', function (exchange) {
    return getExchangeCity(exchange);
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

    ret += '<div class="IRChartNavigationNarrow">';

    ret += '<div class="IRChartNavigationNarrowOuter">';
    ret += '<span class="navTrigger IRButton IRHamburgerOuter"><span class="IRHamburger"></span></span>';

    ret += '<div class="IRChartNavigationNarrowMenu IRNavElement">';
    ret += '<ul>';

    if (useIRChartCompare) {
        ret += '<li class="has-sub open">';
        ret += '<span class="IRSubHeader">';
        ret += '<span class="IRState"></span>Comparison';
        ret += '</span>';
        ret += '<ul id="IRChartCompareList" style="display:block;">';
        //ret += '<li><span>FTSE 100</span></li>';
        //ret += '<li><span>OMX C20</span></li>';
        //ret += '<li><span>Euroinvestor.com A/S</span></li>';
        ret += '</ul>';
        ret += '</li>';
    }

    if (useIRChartTA) {
        ret += '<li class="has-sub">';
        ret += '<span class="IRSubHeader">';
        ret += '<span class="IRState"></span>TA</span>';
        ret += '<ul>';
        ret += '<li><span>Commodity Channel Index</span></li>';
        ret += '<li><span>Directional Movement Index</span></li>';
        ret += '<li><span>Exponential Moving Average</span></li>';
        ret += '<li><span>Momentum</span></li>';
        ret += '<li><span>Money Flow Index</span></li>';
        ret += '<li><span>Rate Of Change</span></li>';
        ret += '<li><span>Relative Strength Index</span></li>';
        ret += '<li><span>Simple Moving Average</span></li>';
        ret += '<li><span>Williams Percent R</span></li>';
        ret += '</ul>';
        ret += '</li>';
    }

    ret += '</ul>';
    ret += '</div>';

    ret += '</div>'; //IRChartNavigationNarrowOuter

    ret += '</div>';

    ret += '<div class="IRChartNavigationWide">';

    if (useIRChartView) {
        ret += '<div class="IRChartNavigationWideOuter">';
        ret += '<span class="navTrigger IRButton" id="navTriggerView">View</span>';
        ret += '<div class="IRChartNavigationWideInner IRNavElement navView">'; // JRJR

        ret += '<div class="IRChartViewElement" id="TSRSimple" title="Total Shareholder Return">TSR Simple</div>';
        ret += '<div class="IRChartViewElement" id="TSRSimple" title="Total Shareholder Return">TSR Reinvested</div>';

        ret += '</div>';
        ret += '</div>'; // IRChartNavigationWideOuter
    }

    if (useIRChartTA) {
        ret += '<div class="IRChartNavigationWideOuter">';
        ret += '<span class="navTrigger IRButton" id="navTriggerTA">Technical Analysis</span>';
        ret += '<div class="IRChartNavigationWideInner IRNavElement navTA">';


        ret += '<div class="IRChartTAElement" id="' + chartTechnicalAnalysisNamesCC.CommodityChannelIndex + '">' + chartTechnicalAnalysisNames.CommodityChannelIndex + '</div>';
        ret += '<div class="IRChartTAElement" id="' + chartTechnicalAnalysisNamesCC.DirectionalMovementIndex + '">' + chartTechnicalAnalysisNames.DirectionalMovementIndex + '</div>';
        ret += '<div class="IRChartTAElement" id="' + chartTechnicalAnalysisNamesCC.ExponentialMovingAverage + '">' + chartTechnicalAnalysisNames.ExponentialMovingAverage + '</div>';
        ret += '<div class="IRChartTAElement" id="' + chartTechnicalAnalysisNamesCC.Momentum + '">' + chartTechnicalAnalysisNames.Momentum + '</div>';
        ret += '<div class="IRChartTAElement" id="' + chartTechnicalAnalysisNamesCC.MoneyFlowIndex + '">' + chartTechnicalAnalysisNames.MoneyFlowIndex + '</div>';
        ret += '<div class="IRChartTAElement" id="' + chartTechnicalAnalysisNamesCC.RateOfChange + '">' + chartTechnicalAnalysisNames.RateOfChange + '</div>';
        ret += '<div class="IRChartTAElement" id="' + chartTechnicalAnalysisNamesCC.RelativeStrengthIndex + '">' + chartTechnicalAnalysisNames.RelativeStrengthIndex + '</div>';
        ret += '<div class="IRChartTAElement" id="' + chartTechnicalAnalysisNamesCC.SimpleMovingAverage + '">' + chartTechnicalAnalysisNames.SimpleMovingAverage + '</div>';
        ret += '<div class="IRChartTAElement" id="' + chartTechnicalAnalysisNamesCC.WilliamsPercentR + '">' + chartTechnicalAnalysisNames.WilliamsPercentR + '</div>';

        ret += '</div>';
        ret += '</div>'; // IRChartNavigationWideOuter
    }

    if (useIRChartCompare) {
        ret += '<div class="IRChartNavigationWideOuter">';
        ret += '<span class="navTrigger IRButton" id="navTriggerComparison">Comparison</span>';
        ret += '<div class="IRChartNavigationWideInner IRNavElement navComparison">';
        //ret += '<div>FTSE 100</div>';
        //ret += '<div>OMX C20</div>';
        //ret += '<div>Euroinvestor.com A/S</div>';
        ret += '</div>';
        ret += '</div>'; // IRChartNavigationWideOuter
    }

    ret += '</div>'; // IRChartNavigationWide

    ret += '</div>'; // IRChartNavigationInner

    return ret;
});
Handlebars.registerHelper('includeIRChartPlaceholder', function () {
    var ret = '';
    ret += '<div class="IRChartCurrency"></div>';
    ret += '<div class="IRChartComparisonPlaceholder"></div>';
    //ret += '<div class="IRChartTAPlaceholder"></div>';
    ret += '<div class="IRChartPlaceholder"></div>';
    ret += '<div class="IRChartScrollOnYAxis"></div>';
    return ret;
});
Handlebars.registerHelper('includeIRChartChangePeriod', function (activePeriod) {
    var ret = "";

    var periodShortsControlerIDs = "d1;d5;m1;m3;m6;y1;y2;y5;Max".split(';');
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
Handlebars.registerHelper('includeIRMiniquoteChartPlaceholder', function () {
    var ret = '';
    ret += '<div class="IRMiniquoteChartPlaceholder"></div>';
    return ret;
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
function formatColour() {
    $(".link-target").click(function () {
        $(this).attr('target', '_blank');
    });
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
        setInterval(function () { checkIRNewsWidth(); }, 400);
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
String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt /*, from*/) {
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