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


//function submittable() {
//    var data = $('table.table-look').first(); //Only one table


//    var csvData = [];
//    var tmpArr = [];
//    var tmpStr = '';
//    data.find("tr").each(function () {
//        if ($(this).find("th").length) {
//            $(this).find("th").each(function () {   

//                tmpStr = $(this).text().replace(/"/g, '""');
//                tmpArr.push(tmpStr);
//            });
//            csvData.push(tmpArr);
//        }
//            //else {
//            //    tmpArr = [];
//            //    $(this).find("td").each(function () {
//            //        if ($(this).text().match(/^-{0,1}\d*\.{0,1}\d+$/)) {
//            //            tmpArr.push(parseFloat($(this).text()));
//            //        } else {
//            //            tmpStr = $(this).text().replace(/"/g, '""');
//            //            tmpArr.push(tmpStr);
//            //        }
//            //    });
//        else {
//            tmpArr = [];
//            $(this).find("td").each(function (i) {
//                if ($(this).text().match(/^-{0,1}\d*\.{0,1}\d+$/)) {
//                    tmpArr.push(parseFloat($(this).text()));
//                } else {

//                    //if (i > 0) {
//                    //    removeComma = $(this).text().replace(',', '');

//                    //    tmpStr = removeComma.replace(/"/g, '""');
//                    //    tmpArr.push(tmpStr);

//                    //} else {
//                        tmpStr = $(this).text();
//                        tmpArr.push(tmpStr);

//                    //}

//                }
//            });
//            csvData.push(tmpArr.join(";"));
//        }
//    });
//    debugger;

//    var output = csvData.join('\n');
//    $('#CsvData').val(output);
//    $('#excelform').submit();
//}