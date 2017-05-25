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
    console.log(data);
    
    //Sort of data
    for (var i = 0; i < data.tables.length; i++) {
        if (data.tables[i].workSheetName === 'MajorShareholders') {
         data.tables[i].rows.sort(function(a, b){
             return b.rowData[0] - a.rowData[0];
         });
             break;
        }
    }
    console.log(data.tables[13].rows);
//    
//    $(data.tables[13].rows).each(function () {
//        console.log(this);
//        dataArr.push(this);
//    });
//    console.log(dataArr);
//
//    function SortByName(a, b) {
//        return b.rowData[0] - a.rowData[0];
//    }
//    dataArr.sort(SortByName);
//    
//    console.log(dataArr.sort(SortByName));
    var source = $('#IRDataTemplate').html();
    var template = Handlebars.compile(source);
    $('#IRData').html(template(allData));
    for (var i = 0; i < data.tables.length; i++) {
        if (i != 0) {
            $("#" + i).addClass("hide");
        }
        else {
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
        var filteredData;
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
    console.log(data);
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
        dataRow = dataRow.concat('<td class= ' + data[k].year + '>', data[k].value, '</td>');
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
                                "rowTitle": rowTitle
                                , "year": periodYears[j]
                                , "value": item.rowData[periodIndexes[j]]
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
    var res = ''
        , classNameVis;
    for (var i = 0; i < cells.length; i++) {
        if (i >= length) {
            classNameVis = className + ' hide';
        }
        else {
            classNameVis = className;
        }
        if (rowid == 0) {
            res += '<' + tag + ' class="' + classNameVis + '" rowLabelId="' + rowid + '" periodId="' + i + '" tableId="' + i + '">' + cells[i] + '</' + tag + '>';
        }
        else {
            if (typeof (rowTitle) == 'string' && rowTitle.indexOf('(%)') != -1) {
                var cellValue = parseFloat(cells[i].replace(',', '.').replace(' ', '')) * 100;
                res += '<' + tag + ' class="' + classNameVis + '" rowLabelId="' + rowid + '" periodId="' + i + '" tableId="' + i + '">' + formatDecimalWithCustomNumberOfDecimal(cellValue, 1) + ' %' + '</' + tag + '>';
            }
            else {
                res += '<' + tag + ' class="' + classNameVis + '" rowLabelId="' + rowid + '" periodId="' + i + '" tableId="' + i + '">' + formatNumberWithLocalDelimiters(parseFloat(cells[i].replace(',', '.'))) + '</' + tag + '>';
            }
        }
    }
    return res;
});
Handlebars.registerHelper('if_eq', function (a, b, opts) {
    if (a.toLowerCase() == b.toLowerCase()) {
        return opts.fn(this);
    }
    else {
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