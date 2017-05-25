/* get all english data from json */

var allData;
var selectedDatePeriod;
var translationData;

var instrumentID = 1000758;
//var solutionID = 2378;
//var customerKey = "Raute";

var date = new Date();
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

    var d = new Date(date);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;

    if (month === 1) {
        year = year - 1;
        month = 12;
    }

    $.getJSON(getServiceEngingeURL() + 'RequestShareholderEuroclearData?apiversion=' + clientApiVersion + '&lcid=' + clientLCID + '&customerKey=' + clientCustomerKeyRequired + '&solutionID=' + clientSolutionID + '&instrumentid=' + instrumentID + '&fromDate=' + year + '-' + month, function (data) {
        allData = data;
        $.when(requestTranslationsData).done(function () {
            translationData = jQuery.parseJSON(requestTranslationsData.responseText);
            filterData(20);

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




Handlebars.registerHelper('rowID', function (id) {
    return (id + 1);
});

Handlebars.registerHelper('selectPeriod', function () {
    //get fromDate from json feed
    var fromDate = new Date(allData.data.securityInfo[0].dataFrom);
    var fromMonth = fromDate.getMonth() + 1;
    var fromYear = fromDate.getFullYear();
    //var fromDay = fromDate.getDay();

    //get date today
    var dateToday = new Date();
    var monthToday = dateToday.getMonth();
    var yearToday = dateToday.getFullYear();

    if (monthToday+1 === 1) {
        yearToday = yearToday - 1;
        monthToday = 12;
    }

   
    var selectOptionHTML = '<select id="selectArchivePeriod" onchange="getSelectedPeriod(this.value)">';

    for (var fYear = yearToday; fYear >= fromYear; fYear--) {

        for (var fMonth = monthToday; fMonth >= 1; fMonth--) {

            if (fYear == fromYear && fMonth < fromMonth) {
                break;
            } else {
                var lastDay = new Date(fYear, fMonth, 0).getDate();

                selectOptionHTML += '<option value="' + fYear + '-' + fMonth + '-' + lastDay + '">' + fYear + '-' + fMonth + '-' + lastDay + '</option>';
                if (fMonth == 1) {
                    monthToday = 12;
                }
            }
        }
    }
    selectOptionHTML += '</select>';

    return selectOptionHTML;
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

    var formatedDate = formatDateWithFormat(value, 'YYYY-MM');
    selectedDatePeriod = value;
    getData(formatedDate);


}
