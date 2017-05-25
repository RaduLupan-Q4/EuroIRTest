/* get all english data from json */
var allData;
//Specify periodid's to hide
var columnArr = [4, 5];
//var instrumentID = 1000435;
//var solutionID = 2310;
//var customerKey = "DummyIR";


function requestPreviewFromURL() {
    var getParams = location.search.substr(1).split("&");

    for (var i = 0; i < getParams.length; i++) {
        if (getParams[i].split("=")[0] == "preview") {
            return '&guid=' + getParams[i].split("=")[1];
        }
    }
    return '';
}

$.getJSON(getServiceEngingeURL() + 'RequestKeyFigureTransactionData?apiversion=' + clientApiVersion + '&lcid=1033&solutionID=' + clientSolutionID + '&customerKey=' + clientCustomerKeyRequired + requestPreviewFromURL(), function (data) {
    allData = data;
    var source = $('#IRDataTemplate').html();
    var template = Handlebars.compile(source);
    $('#IRData').html(template(allData));
    for (var i = 0; i < data.tables.length; i++) {

        if (i != 0) {
            $("#" + i).addClass("hide");
        } else {
            $("#" + i).addClass("active");
        }
    }
    $('#selectTable').change(function () {
        $('.active').addClass('hide');
        $('.active').removeClass('active');
        $('#' + this.value).addClass('active');
        $('#' + this.value).removeClass('hide');
    });
});

//get the latest value from specific table with specific rowtitle. Returns a single value
Handlebars.registerHelper('getLastestValue', function (tableName, rowTitle) {
    var data = filterData(tableName, rowTitle, allData.tables);
    return data;
    function filterData(tableName, rowTitle, dataArray) {
        var filteredData
        $.each(dataArray, function (i, item) {
            if (item.tableName == tableName) {
                $.each(item.rows, function (i, item) {
                    if (item.rowTitle == rowTitle) {
                        filteredData = item.rowData[item.rowData.length - 1];
                    }
                });
            }
        });
        return filteredData;
    }
});

//returns a specific period value. ex.(Q2 2010) based on tablename, rowtitle and period
Handlebars.registerHelper('getPeriodValue', function (tableName, rowTitle, period) {
    var data = filterData(tableName, rowTitle, period, allData.tables);
    return data;
    function filterData(tableName, rowTitle, period, dataArray) {
        var filteredData
        $.each(dataArray, function (i, item) {
            if (item.tableName.toLowerCase() == tableName.toLowerCase()) {
                //get period index.
                var indexOfPeriod = item.columnHeaders.indexOf(period);
                //loop through rows
                $.each(item.rows, function (i, item) {
                    if (item.rowTitle == rowTitle) {
                        filteredData = item.rowData[indexOfPeriod];
                    }
                })
            }
        })
        return filteredData;
    }
});

//get specific rowData based and worksheetname, tablename, rowtitle.
Handlebars.registerHelper('getPeriodYearValues', function (workSheetName, tableName, rowTitle, sortArray) {
    var data = filterData(workSheetName, tableName, rowTitle, allData.tables);
    if (sortArray == 'reverse') {
        data.reverse();
    }
    var dataRow = '<td class="rowLabel column-first">' + data[0].rowTitle + '</td>';
    for (var k = 0; k < data.length; k++) {
        dataRow = dataRow.concat('<td class=y' + data[k].year + '>', data[k].value, '</td>');
    }
    return dataRow;
    //filter data by chosen values
    function filterData(workSheetName, tableName, rowTitle, dataArray) {
        var filteredData = [];
        var periodIndexes = [];
        var periodYears = [];
        $.each(dataArray, function (i, item) {
            if (item.tableName.toLowerCase() == tableName.toLowerCase() && item.workSheetName.toLowerCase() == workSheetName.toLowerCase()) {
                //get period (ex. Q4) index.
                $.each(item.columnHeaders, function (i, column) {
                    //check i column contains 'Q4'
                    if (column.indexOf('Q4') != -1) {
                        //Get period years, slice ex. 'Q4' and trim white spaces
                        periodYears.push(column.slice(2).trim());
                        //Get index of each Q4 year and push to periodIndexes array
                        var indexOfPeriod = item.columnHeaders.indexOf(column);
                        periodIndexes.push(indexOfPeriod);
                    }
                });
                //get latest period
                var latestPeriod = item.columnHeaders[item.columnHeaders.length - 1];
                //check if latest period contain Q4. If not then add the last period and value
                if (latestPeriod.indexOf('Q4') == -1) {
                    periodYears.push(latestPeriod.slice(2).trim());
                    var indexOfPeriod = item.columnHeaders.indexOf(latestPeriod);
                    periodIndexes.push(indexOfPeriod);
                }
                //loop through rows
                $.each(item.rows, function (i, item) {
                    if (item.rowTitle.toLowerCase() == rowTitle.toLowerCase()) {
                        for (var j = 0; j < periodIndexes.length; j++) {
                            filteredData.push({
                                "rowTitle": rowTitle,
                                "year": periodYears[j],
                                "value": item.rowData[periodIndexes[j]]
                            })
                        }
                    }
                });
            }
        });
        return filteredData;
    }
});
//generate headers by periodView.
Handlebars.registerHelper('printTags', function (rowid, tag, className, cells, length, direction, rowTitle) {
    if (direction === 'reverse') {
        cells = cells.reverse();
    }
    if (length < 0 || length >= cells.length) {
        length = cells.length;
    }

    var res = '', classNameVis;
    for (var i = 0; i < cells.length; i++) {
        if (i >= length) {
            classNameVis = className + ' hide';
        } else {
            classNameVis = className;
        }
        if (rowid == 0) {
            if (i == 0) {
                res += '<' + tag + ' scope="col" class="' + classNameVis + ' col' + cells[i] + '" rowLabelId="' + rowid + '" periodId="' + i + '" tableId="' + i + '" data-year="' + cells[i] + '">' + cells[i] + '</' + tag + '>';
            } else {
                res += '<' + tag + ' scope="col" class="' + classNameVis + ' col' + cells[i] + '" rowLabelId="' + rowid + '" periodId="' + i + '" tableId="' + i + '" data-year="' + cells[i] + '">' + cells[i] + '</' + tag + '>';
            }
        } else {
            if (typeof (rowTitle) == 'string' && rowTitle.indexOf('(%)') != -1) {
                var cellValue = parseFloat(cells[i].replace(',', '.').replace(' ', '')) * 100;
                res += '<' + tag + ' class="' + classNameVis + '" rowLabelId="' + rowid + '" periodId="' + i + '" tableId="' + i + '" >' + formatDecimalWithCustomNumberOfDecimal(cellValue, 1) + ' %' + '</' + tag + '>';
            } else {
                if (rowid != 0 && i == 0) {
                    if (parseFloat(cells[i]) < 0) {
                        res += '<' + tag + ' class="' + classNameVis + ' note" rowLabelId="' + rowid + '" periodId="' + i + '" tableId="' + i + '"></' + tag + '>';
                    } else {
                        res += '<' + tag + ' class="' + classNameVis + ' note" rowLabelId="' + rowid + '" periodId="' + i + '" tableId="' + i + '" data-nb="' + cells[i] + '">' + cells[i] + '</' + tag + '>';
                    }
                } else {
                    res += '<' + tag + ' class="' + classNameVis + '" rowLabelId="' + rowid + '" periodId="' + i + '" tableId="' + i + '" data-nb="' + parseFloat(cells[i].replace(',', '.')) + '">' + formatNumberWithLocalDelimiters(parseFloat(cells[i].replace(',', '.'))) + '</' + tag + '>';
                }
            }
        }
    }
    return res;
});

Handlebars.registerHelper('if_eq', function (a, b, opts) {

    if (a.toLowerCase() == b.toLowerCase()) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});

//generate headers by periodView.
Handlebars.registerHelper('selectPeriod', function (option) {
    var res = "<select id='selectTable'>";
    for (var i = 0; i < option.length; i++) {
        var trimedDate = String(option[i].tableName).split("_").pop();
        res += "<option value=" + i + ">" + trimedDate + "</option>";


    }
    res += "</select>";

    return res;
});


//Chart functions
var chart = $('#IRKeyFiguresChart');
var clickClass = '.row';
var data = [];
var cat = [];
var cat2 = [];
var buttonHTML = '<div class="baricon_outer"><div style="height:10px;left:1px;" class="bariconFill"></div><div style="height:6px;left:7px;" class="bariconFill"></div><div style="height:14px;left:13px;" class="bariconFill"></div><div style="height:10px;left:1px;" class="bariconBorder"></div><div style="height:6px;left:7px;" class="bariconBorder"></div><div style="height:14px;left:13px;" class="bariconBorder"></div><div style="" class="baricon_underline"></div></div>';


$(document).ready(function () {
    IRcheckLoad(init);
    //Row on click handler
    $(document).on('click', clickClass, function () {
        var obj = $(this);
        var temp = [];
        var temp2 = []
        if (!$(this).data('set')) {

            var title = obj.children().data('title');
            obj.find('.cell:not(.note)').each(function () {
                if ($(this).data('nb') != undefined) {
                    temp.push(parseFloat(($(this).data('nb') + '')));
                    if (temp2.length <= 2) {
                        temp2.push(parseFloat(($(this).data('nb') + '')));
                    }
                    // Padaryti antra masyva grynai saugoti skaiciams del rodymo
                }
            });
            var index = data.push(title + data.length) - 1;
            obj.data('set', title + index);
            temp.reverse();
            console.log(title);
            if (title == 'Milestone income' || title == 'Royalty income'){
                chart.highcharts().addSeries({ name: title, data: temp, stack: 'income'});
            } else {
                chart.highcharts().addSeries({ name: title, data: temp, stack: title });
            }
            //chart.highcharts().addSeries({ name: title, data: temp2 });

            obj.addClass('kfActive');
            obj.find('.bariconFill').css('background-color', chart.highcharts().series[index].color);
        } else {

            var dataId = $(this).data('set');
            chart.highcharts().series[$.inArray(dataId, data)].remove();

            data.splice($.inArray(dataId, data), 1);
            obj.data('set', 0);
            obj.find('.bariconFill').css('background-color', 'rgb(240,240,240)');
            obj.removeClass('kfActive');
        }
    });


    $(document).on('click', '.btnSeeNewer', function () {
        newerSlice();
    });
    $(document).on('click', '.btnSeeOlder', function () {
        olderSlice();
    });
    //Chart generate function
    chart.highcharts({
        colors: ['#007FC5', '#0f4694', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: cat
        },
        yAxis: {
            title: {
                text: 'DKK thousands'
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: []
    });
});
$(window).on('resize', function () {
    updateView();
});
//Init function
function init() {
    $(clickClass + ':has(td)').each(function () {
        $(this).children().first().prepend(buttonHTML);
    });

    getCategories();
    //convert table 1 number to millions
    tableOne();
    //convert table 2 number to millions
    tableTwo();


    //Trigger clicks on 2 rows in table 1 and first row in table 2
    $(clickClass + ':has(td)').first().trigger("click");
    $(clickClass + ':has(td)').first().next().trigger("click");
    //$('table:eq(1) tr:eq(1)').trigger('click');

    hideColumns(columnArr);

    updateView();

}

//Gets categorie list for chart from table
function getCategories() {
    var ff = $('table').first().find('th');
    ff.each(function () {
        if (typeof $(this).data('year') == 'number') {
            cat.push($(this).data('year'));
            if (cat2.length <= 2) {
                cat2.push($(this).data('year'));
            }
        }
    })
    cat.reverse();
}

function IRcheckLoad(callback) {
    $(document).ajaxStop(function () {
        callback();
        // $(document).trigger("enhance.tablesaw");
    });
}

function tableOne() {
    $('table').first().find('.cell').each(function () {
        if ($(this).attr('data-nb')) {
            $(this).data('nb', $(this).data('nb') * 1000);
        }
    });
}
function tableTwo() {
    $('table').eq(1).find('.cell').each(function () {
        if ($(this).attr('data-nb')) {
            $(this).data('nb', $(this).data('nb') * 1000);
        }
    });
}

var minWidth = 700,
    changeWidth = 70;
function updateView() {
    var respWidth = 0;
    var arrLength = cat.length - columnArr.length;
    for (var i = 0; i < arrLength; i++) {
        respWidth = minWidth - (changeWidth * i);
        var wind = $(window).width();
        if (wind < respWidth && wind > (minWidth - (changeWidth * (cat.length - 1)))) {
            $('.name').each(function () {
                    if ($(this).attr("periodid") == i + 1) {
                        $(this).addClass('hidden');
                    }
                
            });
            $('.cell').each(function () {
                    if ($(this).attr("periodid") == i + 1) {
                        $(this).addClass('hidden');
                    }
                
            });
        }
        if (wind > respWidth) {
            $('.name').each(function () {
                    if ($(this).attr("periodid") == i + 1) {
                        $(this).removeClass('hidden');
                    }
                
            });
            $('.cell').each(function () {
                    if ($(this).attr("periodid") == i + 1) {
                        $(this).removeClass('hidden');
                    }
                
            });
        }
        if (wind < minWidth) {
            $('.rangeText').css('display', 'block');
            $('.btnSeeOlder').css('display', 'block');
            $('.btnSeeNewer').css('display', 'none');
        } else {
            $('.rangeText').css('display', 'none');
            $('.btnSeeOlder').css('display', 'none');
            $('.btnSeeNewer').css('display', 'none');
        }
    }
}

function newerSlice() {
    var tempShow = [0];
    var arrLength = cat.length - columnArr.length;
    for (var i = 0; i < arrLength ; i++) {
        $('.name').each(function () {
            if (typeof ($(this).attr('style')) == 'undefined') {

                if (!$(this).hasClass('hidden') && $.inArray(parseInt($(this).attr("periodid")), tempShow) == -1) {
                    tempShow.push(parseInt($(this).attr("periodid")));
                }
            }
        });
    }

    if (tempShow[tempShow.length - 1] != arrLength && tempShow.length != 1) {
        tempShow.push(tempShow[tempShow.length - 1] + 1);
        tempShow.splice(1, 1);
    }
    for (var i = 0; i < tempShow.length; i++) {
        $('.name').each(function () {
            if (typeof ($(this).attr('style')) == 'undefined') {

                if ($.inArray(parseInt($(this).attr("periodid")), tempShow) != -1) {
                    $(this).removeClass('hidden');
                } else {
                    $(this).addClass('hidden');
                }
            }
        });
        $('.cell').each(function () {
            if (typeof ($(this).attr('style')) == 'undefined') {

                if ($.inArray(parseInt($(this).attr("periodid")), tempShow) != -1) {
                    $(this).removeClass('hidden');
                } else {
                    $(this).addClass('hidden');
                }
            }
        });
    }
    $('.btnSeeOlder').css('display', 'block');
    if (tempShow[tempShow.length - 1] == arrLength) {
        $('.btnSeeNewer').css('display', 'none');
    }
}


function olderSlice() {
    //debugger;
    var tempShow = [0];
    var arrLength = cat.length - columnArr.length;
    for (var i = 0; i < arrLength ; i++) {
        $('.name').each(function () {
            if (typeof ($(this).attr('style')) == 'undefined') {
                if (!$(this).hasClass('hidden') && $.inArray(parseInt($(this).attr("periodid")), tempShow) == -1) {
                    tempShow.push(parseInt($(this).attr("periodid")));
                }
            }
        });
    }
    
    if (tempShow[1] != 1 && tempShow.length != 1) {
        var t = tempShow[1] -1;
        tempShow.pop();
        tempShow.push(t);
    }
    for (var o = 0; o < tempShow.length; o++) {
        $('.name').each(function () {
            if (typeof ($(this).attr('style')) == 'undefined') {

                if ($.inArray(parseInt($(this).attr("periodid")), tempShow) != -1) {
                    $(this).removeClass('hidden');
                } else {
                    $(this).addClass('hidden');
                }
            }
        });
        $('.cell').each(function () {
            if (typeof ($(this).attr('style')) == 'undefined') {
                if ($.inArray(parseInt($(this).attr("periodid")), tempShow) != -1) {
                    $(this).removeClass('hidden');

                } else {
                    $(this).addClass('hidden');
                }
            }
        });
    }
    $('.btnSeeNewer').css('display', 'block');
   
    if (tempShow[1]-1 == 1 && tempShow.length > 2) {
        $('.btnSeeOlder').css('display', 'none');
    }else if (tempShow[1] == 1) {
        $('.btnSeeOlder').css('display', 'none');

    }
}
function hideColumns(columnArr) {
    for (var i = 0; i < columnArr.length; i++) {
        $("th[periodid=" + columnArr[i] + "]").css('display', 'none');
        $("td[periodid=" + columnArr[i] + "]").css('display', 'none');
    }

}