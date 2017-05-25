/* get all english data from json */
var allData;

var instrumentID = 1000435;
var solutionID = 2310;
var customerKey = "DummyIR";



function requestPreviewFromURL() {
    var getParams = location.search.substr(1).split("&");

    for (var i = 0; i < getParams.length; i++) {
        if (getParams[i].split("=")[0] == "preview") {
            return '&guid=' + getParams[i].split("=")[1];
        }
    }
    return '';
}
http://devir.euroinvestor.com/ServiceEngine/api/json/reply/RequestInsiderSwedenFISEData?apiversion=1&lcid=1033&customerKey=LeoVegas&solutionID=2282&instrumentid=1000579
//$.getJSON('/ServiceEngine/api/json/reply/RequestKeyFigureTransactionData?apiversion=' + clientApiVersion + '&lcid=1033&solutionID=' + clientSolutionID + '&customerKey=' + clientCustomerKeyRequired + requestPreviewFromURL(), function (data) {
    $.getJSON('/ServiceEngine/api/json/reply/RequestInsiderSwedenFISEData?apiversion=1&lcid=1033&customerKey=LeoVegas&solutionID=2282&instrumentid=1000579', function (data) {

    allData = data;

    //insiders list
    var source = $('#IRDataTemplateInsiders').html();
    var template = Handlebars.compile(source);
    $('#IRDataInsiders').html(template(allData));

    //transactions
    var source = $('#IRDataTemplateTransactions').html();
    var template = Handlebars.compile(source);
    $('#IRDataTransactions').html(template(""));





    $('.userRow').click(function () {
        $('.personInFocus').html($('div[id=user' + this.id + ']').html());
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
                            filteredData.push({ "rowTitle": rowTitle, "year": periodYears[j], "value": item.rowData[periodIndexes[j]] })
                        }
                    }
                });
            }
        });
        return filteredData;
    }
});

//generate headers by periodView.
Handlebars.registerHelper('printTags', function (rowid, tag, className, cells, length, direction) {
    if (direction === 'reverse') {
        cells = cells.reverse();
    }
    if (length < 0 || length >= cells.length) {
        length = cells.length - 1;
    }
    var res = '', classNameVis;
    for (var i = 0; i < cells.length; i++) {
        if (i >= length) {
            classNameVis = className + ' hide';
        } else {
            classNameVis = className;
        }
        res += '<' + tag + ' class="' + classNameVis + '" rowLabelId="' + rowid + '" periodId="' + i + '" tableId="' + i + '">' + cells[i] + '</' + tag + '>';
    }

    return res;
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


//this is used to check wether the handlebar is equal to a specfic string
Handlebars.registerHelper('if_eq', function (a, b, opts) {
    if (a.toLowerCase() == b.toLowerCase()) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});

