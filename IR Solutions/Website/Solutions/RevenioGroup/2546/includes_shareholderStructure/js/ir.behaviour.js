/* get all english data from json */

var allData;
var selectedDatePeriod;
var translationData;
var latestDataPoint;
var getDataCount = true;
var latestYear;
var latestMonth;
var latestDay;
var chart_ColourPie = ['#66c353', '#d8843d', '#619ad1', '#A0A0A0', '#BC51AF', '#d64165'];


var instrumentID = 1000758;

var date = new Date();
//Get last date from previous month
date = new Date(date.getFullYear(), date.getMonth(), 0);

getData(date);

function requestPreviewFromURL() {
    var getParams = location.search.substr(1).split("&");

    for (var i = 0; i < getParams.length; i++) {
        if (getParams[i].split("=")[0] == "preview") {
            return '&guid=' + getParams[i].split("=")[1];
        }
    }
    return '';
}

function getData(date) {
    $("#IRDataShareholderStructure").empty();


    //var year = date.getFullYear();
    //var month = date.getMonth();
    //debugger;
    //if (parseInt(month) < 10) {
    //    month = "0" + month;
    //}
    //var day = d.getDate();
    //if (parseInt(day) < 10) {
    //    day = "0" + day;
    //}

    var dateStr = moment(date).format('YYYY-MM-DD');

    //var dateStr = year + "-" + month + "-" + day;

    //$.getJSON(getServiceEngingeURL() + 'RequestShareholderStructureEuroclearData?ApiVersion=' + clientApiVersion + '&lcid=' + clientLCID + '&customerKey=' + clientCustomerKeyRequired + '&solutionID=' + clientSolutionID + '&instrumentid=' + instrumentID + '&fromDate=' + dateStr, function (data) {
    $.getJSON(getServiceEngingeURL() + 'RequestShareholderStructureEuroclearData?Sectors=110001,120001,130001,140001,150001,200001,300000,1000000&LCID=' + clientLCID + '&fromDate=' + dateStr + '&InstrumentID=' + instrumentID + '&ApiVersion=' + clientApiVersion + '&SolutionID=' + clientSolutionID + '&CustomerKey=' + clientCustomerKeyRequired, function (data) {
        //$.getJSON(getServiceEngingeURL() + 'RequestShareholderStructureEuroclearData?ApiVersion=' + clientApiVersion + '&lcid=' + clientLCID + '&customerKey=' + clientCustomerKeyRequired + '&solutionID=' + clientSolutionID + '&instrumentid=' + instrumentID + '&fromMonth=2016-04-01', function (data) {
        //$.getJSON('http://devir.euroinvestor.com/Serviceengine/api/json/reply/RequestShareholderStructureEuroclearData?ApiVersion=' + clientApiVersion + '&lcid=' + clientLCID + '&customerKey=' + clientCustomerKeyRequired + '&solutionID=' + clientSolutionID + '&instrumentid=' + instrumentID + '&fromDate=' + year + '-' + month, function (data) {

        allData = data;
        $.when(requestTranslationsData).done(function () {
            translationData = jQuery.parseJSON(requestTranslationsData.responseText);
            //filterData(20);

            allData.headers = translationData.data;

            if (getDataCount) {
                latestDataPoint = new Date(moment(allData.data.structureInfo.lastUpdated, "DD-MM-YYYY").format('MMM DD, YYYY'));
                getDataCount = false;
            }

            var source = $('#IRDataTemplate').html();
            var template = Handlebars.compile(source);
            $('#IRDataShareholderStructure').html(template(allData));

            //var dataIsFrom = $('#selectArchivePeriod :selected').val();
            $('.showdatewrapper .selecteddate').html(new moment(allData.data.structureInfo.lastUpdated, "DD-MM-YYYY").format('MMM DD, YYYY'));

            $('#selectArchivePeriod option[value=' + selectedDatePeriod + ']').attr('selected', 'selected');


            createPieChart(allData);


        });

    });

}

function submittable() {
    var data = $('table.table-look').first(); //Only one table


    var csvData = [];
    var tmpArr = [];
    var tmpStr = '';
    data.find("tr").each(function () {
        if ($(this).find("th").length) {
            $(this).find("th").each(function () {

                tmpStr = $(this).text().replace(/"/g, '""');
                tmpStr = $(this).text();
                tmpArr.push(tmpStr);
            });
            csvData.push(tmpArr.join(";"));
        }
        else {
            tmpArr = [];
            $(this).find("td").each(function (i) {
                if ($(this).text().match(/^-{0,1}\d*\.{0,1}\d+$/)) {
                    tmpArr.push(parseFloat($(this).text()));
                } else {
                    tmpStr = $(this).text();
                    tmpArr.push(tmpStr);
                }
            });
            csvData.push(tmpArr.join(";"));
        }
    });

    var output = csvData.join('\n');
    $('#CsvData').val(output);
    $('#excelform').submit();
}




function calculateLargestShareholdersTotal(units) {

    //var allShares = calculateTotalOfShownShareholdersShares();
    var allShares = units;

    //total amount of share (shareholders + others)
    var totalAmountOfShares = allData.data.securityInfo[0].totalUnits;
    $(".table-look.summary .total").text(formatLargeNumbers(totalAmountOfShares));

    //largest shareholder row (total + pct)
    $(".table-look.summary .amountOfShareholders-total").text(formatLargeNumbers(allShares));
    var amountOfShareholdersPct = formatDecimal(100 - ((totalAmountOfShares - allShares) / totalAmountOfShares * 100));
    $(".table-look.summary .amountOfShareholders-pct").text(amountOfShareholdersPct + "%");

    //others (total + pct)
    var othersTotal = totalAmountOfShares - allShares;
    $(".table-look.summary .others-total").text(formatLargeNumbers(othersTotal));
    var othersPct = formatDecimal(100 - ((totalAmountOfShares - othersTotal) / totalAmountOfShares * 100));
    $(".table-look.summary .others-pct").text(othersPct + "%");
}




function filterData(amount) {

    var allShareholders = allData.data.shareholderInfoRows;
    var units = 0;
    var filteredData = [];


    //calculate sum of each shareholder aShares and kShares
    for (var i = 0; i < allShareholders.length; i++) {

        if (i >= amount) {
            break;
        } else {
            filteredData.push(allShareholders[i]);
            units += allShareholders[i].holdings[0].totShares;
        }
    }


    var dataObj = new Object();
    var shareholderInfoRows = new Object();
    shareholderInfoRows.shareholderInfoRows = filteredData;

    dataObj.headers = translationData.data;
    dataObj.data = shareholderInfoRows;
    var source = $('#IRDataTemplate').html();
    var template = Handlebars.compile(source);
    $('#IRDataShareholders').html(template(dataObj));


    $('.amountOfShareholders.column-first').html('<b>' + amount + ' ' + translationData.data.t_largest_shareholders + '</b>');
    $('#selectAmountOfShareholders option[value=' + amount + ']').attr('selected', 'selected');
    $('#selectArchivePeriod option[value=' + selectedDatePeriod + ']').attr('selected', 'selected');

    applyTableSaws();
    calculateLargestShareholdersTotal(units);

    //hide tablesaw if all columns is show for each table
    $('.tablesaw-advance-dots').each(function () {
        var list = $(this).find('li.tablesaw-advance-dots-hide');
        if (list.length == 0) {
            $(this).closest(".tablesaw-bar.mode-swipe").css('display', 'none');
        } else {
            $(this).closest(".tablesaw-bar.mode-swipe").css('display', 'block');
        }
    });
}


Handlebars.registerHelper('calculateTotal', function (data, type) {
    var sum = 0;
    var data = data.data;
    
    
    for (var i = 0; i < data.length; i++) {
        // Note: If 'total' and 'KAIKKI YHTEENSÄ' need to be updated, update it also in generateSeries function further below.
        if (data[i].sector != "TOTAL" && data[i].sector != "KAIKKI YHTEENSÄ") {
            if (typeof (data[i][type]) != 'undefined') {        
                sum += data[i][type];
                
            }
        }
    }

    //if (type == "shares" || type == "owners" || type == "votes") {
    //    return formatNumberWithLocalDelimiters(sum);
    //}
    //if type equals percent format number with 1 decimal
    if (type.toLowerCase().indexOf('percent') !== -1) {
        return formatDecimalWithCustomNumberOfDecimal(sum, 1) + '%';
    }
    else {
        return formatNumberWithLocalDelimiters(sum);
    }
});

Handlebars.registerHelper('getPercent', function (data, share, type) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        sum += data[i][type];
    }
    var value = (share / sum) * 100;

    return value.toFixed(1);
});

Handlebars.registerHelper('decimalNoRoundUp', function (data) {
    return Math.floor(data * 10) / 10;
});

//Handlebars.registerHelper('rowID', function (id) {
//    return (id + 1);
//});
Handlebars.registerHelper('sectorColor', function (id) {
    return ("style=background-color:" + chart_ColourPie[id]);
});

Handlebars.registerHelper('formatNumberColor', function (number, pcs) {
    if (number > 0) {
        if (pcs != '%') {
            return '+ ' + formatNumberWithLocalDelimiters(number);
        } else {
            return '+ ' + formatDecimalWithCustomNumberOfDecimal(number, 1) + '%';
        }
    }
    else if (number < 0) {
        if (pcs != '%') {
            return '<span style="color:#019ADA">' + formatNumberWithLocalDelimiters(number) + '</span>';
        } else {
            return '<span style="color:#019ADA">' + formatDecimalWithCustomNumberOfDecimal(number, 1) + '%</span>';
        }
    }
    else if (number == 0 || isNaN(parseFloat(number))) {
        if (pcs != '%') {
            return 0;
        } else {
            return '0.0%';
        }
    }
    else {
        return formatNumberWithLocalDelimiters(number);
    }
});

Handlebars.registerHelper('getNumberOfSharesRange', function (lower, upper) {
    if (lower > 0 && upper > 0) {
        return formatNumberWithLocalDelimiters(lower) + ' - ' + formatNumberWithLocalDelimiters(upper);
    }
    else if (lower > 0 && upper < 0) {
        return formatNumberWithLocalDelimiters(lower) + ' -';
    }
});

Handlebars.registerHelper('selectPeriod', function () {
    //get fromDate from json feed
    var dataFrom = allData.data.distributionInfo.dataFrom;
    var fromDate = new Date(dataFrom.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));

    var fromMonth = moment(fromDate).format('MM');
    var fromYear = moment(fromDate).format('YYYY');
    //get date today
    //var dateToday = date;
    //var monthToday = dateToday.getMonth();
    //var yearToday = dateToday.getFullYear(); 

    var monthToday = moment(latestDataPoint).format('MM');
    var yearToday = moment(latestDataPoint).format('YYYY');

    var selectOptionHTML = '<select id="selectArchivePeriod" class="showDate" onchange="getSelectedPeriod(this.value)">';

    //selectOptionHTML += '<option selected value="' + latestYear + '-' + latestMonth + '-' + latestDay + '">' + latestYear + '-' + latestMonth + '-' + latestDay + '</option>';

    for (var fYear = yearToday; fYear >= fromYear; fYear--) {

        for (var fMonth = monthToday; fMonth >= 1; fMonth--) {

            if (fYear == yearToday && fMonth == monthToday) {
                var optionDate = moment(latestDataPoint).format('YYYY-MM-DD');
                selectOptionHTML += '<option value="' + optionDate + '">' + optionDate + '</option>';
            }
            else if (fYear == fromYear && fMonth < fromMonth) {
                break;
            }
            else {
                var optionDate = moment(new Date(fYear, fMonth, 0)).format('YYYY-MM-DD');

                //if (parseInt(fMonth) < 10) {
                //    fMonth = "0" + fMonth;
                //}

                //if (parseInt(lastDay) < 10) {
                //    lastDay = "0" + lastDay;
                //}
                selectOptionHTML += '<option value="' + optionDate + '">' + optionDate + '</option>';
                if (fMonth == 1) {
                    monthToday = 12;
                }
            }
        }

    }

    selectOptionHTML += '</select>';

    return selectOptionHTML;
});

Handlebars.registerHelper('if_eq', function (a, b, opts) {

    if (a.sector.toLowerCase() != b.toLowerCase()) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});

function formatLargeNumbers(number) {
    try {
        if (typeof (number) == 'number') {

            number = number.round(clientStyle.amountOfDecimals);
            var decimalSplit = number.toString().split(".");
            var leftPart = decimalSplit[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000);
            var delimiter = clientLocaleParameters.decimalSeparator;
            var rightPart = "";
            if (typeof (decimalSplit[1]) == "undefined") {
                rightPart = "";
                delimiter = "";
            } else {
                rightPart = decimalSplit[1].replace('.', clientLocaleParameters.decimalSeparator);
            }
            return leftPart + delimiter + rightPart;
        } else {
            //return "-";
            return 0;
        }
    }
    catch (err) {
        return "-";
    }
}

//add tablesaw with minimap
function applyTableSaws() {
    $('table.tablesaw').each(function () {
        $(this).attr('data-tablesaw-minimap', '');
        $(this).attr('data-tablesaw-mode', 'swipe');
        //$(this).addClass('tablesaw');
        $(this).addClass('tablesaw-swipe');

        $(this).prepend('<thead></thead>')
        $(this).find('thead').append($(this).find("tr:eq(0)"));

        var counter = 0;
        $(this).find('thead th').each(function () {
            $(this).attr('scope', 'col');
            $(this).attr('data-tablesaw-sortable-col', '');
            if (counter == 0 || counter == 1) {
                $(this).attr('data-tablesaw-priority', 'persist');
            } else {
                $(this).attr('data-tablesaw-priority', counter);
            }
            counter++;
        });
    });

    $(document).trigger("enhance.tablesaw");

}


function getSelectedPeriod(value) {
    var formatedDate = formatDateWithFormat(value, 'YYYY-MM-DD');
    selectedDatePeriod = value;

    getData(formatedDate);


}

function createPieChart(allData) {

    var filteredData = allData.data.structureInfo.data;
    //console.log(data)

    //// Radialize the colors
    //Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
    //    return {
    //        radialGradient: {
    //            cx: 0.5,
    //            cy: 0.3,
    //            r: 0.7
    //        },
    //        stops: [
    //            [0, color],
    //            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
    //        ]
    //    };
    //});

    // Build the chart

    Highcharts.setOptions({
        colors: chart_ColourPie
    });

    $('#containerDesktop').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
        },
        exporting: {
            enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: ' {point.y:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: generateSeries(filteredData)
    });


    // Build the chart
    $('#containerMobile').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
        },
        exporting: {
            enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    format: '{point.y:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: generateSeries(filteredData)
    });



    function generateSeries(filteredData) {
        var name = allData.headers.t_shareholders;
        var objArr = [];
        var data = {};
        var returnData = [];

        for (var i = 0; i < filteredData.length; i++) {
            if (filteredData[i].sector.toLowerCase() != "total" && filteredData[i].sector.toLowerCase() != "kaikki yhteensä") {
                var votesPct = Math.floor(filteredData[i].votesPercent * 10) / 10;

                objArr.push({ name: filteredData[i].sector, y: parseFloat(votesPct) });
            }
        }
        data = objArr;
        var dataArr = { "name": name, "data": data };
        returnData.push(dataArr);

        return returnData; 
    }
}
