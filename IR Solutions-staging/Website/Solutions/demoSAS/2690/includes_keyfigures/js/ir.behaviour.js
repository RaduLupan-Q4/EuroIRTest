/* get all english data from json */
var allData;

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

        if (i < 0) {
            $(".table-look").addClass("hide");
        } else {
            $(".table-look").addClass("active");
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
// Handlebars.registerHelper('getLastestValue', function (tableName, rowTitle) {
//
//     var data = filterData(tableName, rowTitle, allData.tables);
//     return data;
//
//
//     function filterData(tableName, rowTitle, dataArray) {
//         var filteredData
//         $.each(dataArray, function (i, item) {
//             if (item.tableName == tableName) {
//                 $.each(item.rows, function (i, item) {
//                     if (item.rowTitle == rowTitle) {
//                         filteredData = item.rowData[item.rowData.length - 1];
//                     }
//                 });
//             }
//         });
//         return filteredData;
//     }
// });

//returns a specific period value. ex.(Q2 2010) based on tablename, rowtitle and period
// Handlebars.registerHelper('getPeriodValue', function (tableName, rowTitle, period) {
//
//     var data = filterData(tableName, rowTitle, period, allData.tables);
//     return data;
//
//
//     function filterData(tableName, rowTitle, period, dataArray) {
//         var filteredData
//         $.each(dataArray, function (i, item) {
//             if (item.tableName.toLowerCase() == tableName.toLowerCase()) {
//                 //get period index.
//                 var indexOfPeriod = item.columnHeaders.indexOf(period);
//                 //loop through rows
//                 $.each(item.rows, function (i, item) {
//                     if (item.rowTitle == rowTitle) {
//                         filteredData = item.rowData[indexOfPeriod];
//                     }
//                 })
//             }
//         })
//         return filteredData;
//     }
// });

//get specific rowData based and worksheetname, tablename, rowtitle.
// Handlebars.registerHelper('getPeriodYearValues', function (workSheetName, tableName, rowTitle, sortArray) {
//     var data = filterData(workSheetName, tableName, rowTitle, allData.tables);
//     if (sortArray == 'reverse') {
//         data.reverse();
//     }
//     var dataRow = '<td class="rowLabel column-first">' + data[0].rowTitle + '</td>';
//     for (var k = 0; k < data.length; k++) {
//         dataRow = dataRow.concat('<td class=y' + data[k].year + '>', data[k].value, '</td>');
//     }
//     return dataRow;
//
//
//     //filter data by chosen values
//     function filterData(workSheetName, tableName, rowTitle, dataArray) {
//         var filteredData = [];
//
//         var periodIndexes = [];
//         var periodYears = [];
//         $.each(dataArray, function (i, item) {
//
//             if (item.tableName.toLowerCase() == tableName.toLowerCase() && item.workSheetName.toLowerCase() == workSheetName.toLowerCase()) {
//                 //get period (ex. Q4) index.
//                 $.each(item.columnHeaders, function (i, column) {
//                     //check i column contains 'Q4'
//                     if (column.indexOf('Q4') != -1) {
//                         //Get period years, slice ex. 'Q4' and trim white spaces
//                         periodYears.push(column.slice(2).trim());
//                         //Get index of each Q4 year and push to periodIndexes array
//                         var indexOfPeriod = item.columnHeaders.indexOf(column);
//                         periodIndexes.push(indexOfPeriod);
//                     }
//                 });
//                 //get latest period
//                 var latestPeriod = item.columnHeaders[item.columnHeaders.length - 1];
//
//                 //check if latest period contain Q4. If not then add the last period and value
//                 if (latestPeriod.indexOf('Q4') == -1) {
//                     periodYears.push(latestPeriod.slice(2).trim());
//                     var indexOfPeriod = item.columnHeaders.indexOf(latestPeriod);
//                     periodIndexes.push(indexOfPeriod);
//                 }
//                 //loop through rows
//                 $.each(item.rows, function (i, item) {
//                     if (item.rowTitle.toLowerCase() == rowTitle.toLowerCase()) {
//                         for (var j = 0; j < periodIndexes.length; j++) {
//                             filteredData.push({
//                                 "rowTitle": rowTitle,
//                                 "year": periodYears[j],
//                                 "value": item.rowData[periodIndexes[j]]
//                             })
//                         }
//                     }
//                 });
//             }
//         });
//         return filteredData;
//     }
// });

//generate headers by periodView.
Handlebars.registerHelper('printTags', function (rowid, tag, className, cells, length, direction, rowTitle) {

    if (direction === 'reverse') {
        cells = cells.reverse();
    }
    if (length < 0 || length >= cells.length) {
        length = cells.length;
    }
    var res = '',
        classNameVis;
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
            if (typeof(rowTitle) == 'string' && rowTitle.indexOf('(%)') != -1) {
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
                    res += '<' + tag + ' class="' + classNameVis + ' formatColour" rowLabelId="' + rowid + '" periodId="' + i + '" tableId="' + i + '" data-nb="' + parseFloat(cells[i].replace(',', '.')) + '">' + formatNumberWithLocalDelimiters(parseFloat(cells[i].replace(',', '.'))) + '</' + tag + '>';
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
var rowClass = '.row';
var clickClass = '.view-click';
var clickClass_one = '.chart-type.column';
var clearAllBtn = '#clearAllBtn';
var data = [];
var cat = [];

$(document).ready(function () {
    IRcheckLoad(init);

    //Row on click handler
    $(document).on('click', clickClass, clearAllBtn, function () {
        var obj = $(this).closest(rowClass);
        var charObj = chart.highcharts();
        var temp = [];
        var dataId;
        obj.find('.view-click').removeClass('active-type');
        $(this).addClass('active-type');
        charObj.yAxis[0].isDirty = true;
        if (!obj.data('set')) {
            var title = obj.children().data('title');
            obj.find('.cell:not(.note)').each(function () {
                if ($(this).data('nb') != undefined) {
                    temp.push(parseFloat(($(this).data('nb') + '')));
                }
            });
            var index = data.push(title + data.length) - 1;
            obj.data('set', title + index);
            charObj.addSeries({
                name: title,
                type: $(this).data('type'),
                data: temp
            });
            obj.addClass('kfActive').css('background', 'rgba(charObj.series[index].color)');
            obj.find('.left').css('color', charObj.series[index].color);
            obj.data('type', $(this).data('type'));
        } else if ($(this).data('type') != obj.data('type')) {
            dataId = $.inArray(obj.data('set'), data);
            var dataSeries = charObj.series[dataId].yData;
            var dataName = charObj.series[dataId].name;
            charObj.series[dataId].update({
                type: $(this).data('type')
            }, false);
            charObj.series[dataId].remove();
            charObj.addSeries({
                name: dataName,
                type: $(this).data('type'),
                data: dataSeries,
                index: dataId
            });
            obj.data('type', $(this).data('type'));
        } else {
            dataId = obj.data('set');
            charObj.series[$.inArray(dataId, data)].remove();
            data.splice($.inArray(dataId, data), 1);
            obj.data('set', 0);
            obj.find('.left').css('color', 'rgb(0,0,0)');
            obj.removeClass('kfActive');
            obj.find('.view-click').removeClass('active-type');
        }
    });

    $(document).on('mouseover', rowClass, function () {
        var tr = $(this);
        var temp = [];
        if (!tr.hasClass('showPrew')) {
            tr.find('.cell:not(.note)').each(function () {
                if ($(this).data('nb') != undefined) {
                    temp.push(parseFloat(($(this).data('nb') + '')));
                }
            });
            var maxNb = Math.max.apply(Math, temp) *2;
            var minNb = Math.min.apply(Math, temp) *2;
            if (minNb < 0 && (minNb * -1) > maxNb && maxNb > 0) {
                maxNb = minNb * -1;
            } else if (minNb < 0 && (minNb * -1) < maxNb && maxNb > 0) {
                minNb = maxNb * -1;
            }
            var trH = tr.outerHeight();
            for (var i = 0; i < temp.length; i++) {
                var newH = 0;

                if (temp[i] > 0) {
                    newH = Math.round((trH * temp[i]) / maxNb);
                    tr.find('.cell:not(.note)').eq(i).append('<span class="columnPrewPos" style="height:' + newH + 'px"></span>');
                } else if (temp[i] < 0) {
                    newH = Math.round((trH * temp[i]) / minNb);
                    tr.find('.cell:not(.note)').eq(i).append('<span class="columnPrewNeg" style="height:' + newH + 'px; margin-top:' + trH + 'px"></span>');
                }
            }
            tr.addClass('showPrew');
        }
    });

    $(document).on('mouseleave', rowClass, function () {
        $('.columnPrewNeg').remove();
        $('.columnPrewPos').remove();
        $(this).removeClass('showPrew');
    });


    $(document).on('click', '.btnSeeNewer', function () {
        newerSlice();
    });
    $(document).on('click', '.btnSeeOlder', function () {
        olderSlice();
    });
    
    $(document).on('click', clearAllBtn, function (e)  {
        var charObj = chart.highcharts();
        var obj = $(".row");
        while(charObj.series.length > 0){
            charObj.series[0].remove();
        }
        data = [];
        $('.row').data("set", false);
        obj.find('.left').css('color', 'rgb(0,0,0)');
        obj.removeClass('kfActive');
        obj.find('.view-click').removeClass('active-type');

    });

    //Chart generate function
    chart.highcharts({
        colors: ['#BCAB79', '#315659', '#253031', '#169C78', '#7B2D26', '#D7C9AA', '#011502', '#01200F', '#FFBF00', '#E83F6F'],
        chart: {
            type: 'column'
        },
        title: {
            text: 'Keyfigures chart',
            align: 'left',
            margin: 50
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
        series: []
    });
});

$(window).on('resize', function () {
    updateView();
});
//Init function
function init() {

    getCategories();
    tableOne();
    updateView();
    show_content_personal();
    first_tab_active();
    first_table_active();
    formatColour();
    $(rowClass + ':has(td)').find(clickClass_one).first().trigger("click");
    $(rowClass + ':has(td)').find(clickClass_one).eq(1).trigger("click");

    $( function() {
      $( "#accordion" ).accordion({
          header: "> div > h3",
          heightStyle: 'content',
          collapsible: true
        })
        .sortable({
          axis: "y",
          handle: "h3",
          stop: function( event, ui ) {
            // IE doesn't register the blur when sorting
            // so trigger focusout handlers to remove .ui-state-focus
            ui.item.children( "h3" ).triggerHandler( "focusout" );

            // Refresh accordion to handle new order
            $( this ).accordion( "refresh" );
          }
        });
    } );

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

}

//Gets categorie list for chart from table
function getCategories() {
    var ff = $('table').first().find('th');
    ff.each(function () {
        if (typeof $(this).data('year') == 'number') {
            cat.push($(this).data('year'));
        }
    })
}


function IRcheckLoad(callback) {
    $(document).ajaxStop(function () {
        callback();
        $(document).trigger("enhance.tablesaw");
    });
}

function tableOne() {
    $('table').first().find('.cell').each(function () {
        if ($(this).attr('data-nb')) {
            $(this).data('nb', $(this).data('nb') * 1000);
        }
    });
}

var minWidth = 700,
    changeWidth = 70;

function updateView() {
    var respWidth = 0;
    for (var i = 0; i < cat.length; i++) {
        respWidth = minWidth - (changeWidth * i);
        var wind = $(window).width();

        if (wind < respWidth && wind > (minWidth - (changeWidth * (cat.length - 2)))) {
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
    for (var i = 0; i < cat.length; i++) {
        $('.name').each(function () {
            if (!$(this).hasClass('hidden') && $.inArray(parseInt($(this).attr("periodid")), tempShow) == -1) {
                tempShow.push(parseInt($(this).attr("periodid")))
            }
        });
    }
    if (tempShow[tempShow.length - 1] != cat.length && tempShow.length != 1) {
        tempShow.push(tempShow[tempShow.length - 1] + 1);
        tempShow.splice(1, 1);
    }
    for (var i = 0; i < tempShow.length; i++) {
        $('.name').each(function () {
            if ($.inArray(parseInt($(this).attr("periodid")), tempShow) != -1) {
                $(this).removeClass('hidden');
            } else {
                $(this).addClass('hidden');
            }
        });

        $('.cell').each(function () {
            if ($.inArray(parseInt($(this).attr("periodid")), tempShow) != -1) {
                $(this).removeClass('hidden');
            } else {
                $(this).addClass('hidden');
            }
        });
    }
    $('.btnSeeOlder').css('display', 'block');

    if (tempShow[tempShow.length - 1] == cat.length) {
        $('.btnSeeNewer').css('display', 'none');
    }
}


function olderSlice() {
    var tempShow = [0];
    for (var i = 0; i < cat.length; i++) {
        $('.name').each(function () {
            if (!$(this).hasClass('hidden') && $.inArray(parseInt($(this).attr("periodid")), tempShow) == -1) {
                tempShow.push(parseInt($(this).attr("periodid")));
            }
        });
    }
    if (tempShow[1] != 1 && tempShow.length != 1) {
        var t = tempShow[1] - 1;
        tempShow.pop();
        tempShow.push(t);
    }
    for (var o = 0; o < tempShow.length; o++) {
        $('.name').each(function () {
            if ($.inArray(parseInt($(this).attr("periodid")), tempShow) != -1) {
                $(this).removeClass('hidden');
            } else {
                $(this).addClass('hidden');
            }
        });

        $('.cell').each(function () {
            if ($.inArray(parseInt($(this).attr("periodid")), tempShow) != -1) {
                $(this).removeClass('hidden');
            } else {
                $(this).addClass('hidden');
            }
        });
    }
    $('.btnSeeNewer').css('display', 'block');
    if (tempShow[1] - 1 == 1) {
        $('.btnSeeOlder').css('display', 'none');
    }
}

function show_content_personal() {
    $(".tabs .us").on('click', function() {
        var that = this;
        $(".tabs .us").removeClass("active");
        $(this).addClass("active");
        var data_class = $(that).data('class');
        $('.pers[style*="display: block"]').hide();
        $('.pers[data-class="'+data_class+'"]').show();
    });
}

function first_tab_active() {
    $('.tabs .us').first().addClass("active");
}

function first_table_active() {
    $('.table-wrapper').first().css("display",' block');
}
