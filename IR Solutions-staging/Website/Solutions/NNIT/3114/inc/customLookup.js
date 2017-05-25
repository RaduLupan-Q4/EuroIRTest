function submittable() {
    var data = $('table.lookup-table').first(); //Only one table
    var csvData = [];
    var tmpArr = [];
    var tmpStr = '';
    data.find("tr").each(function () {
        if ($(this).find("th").length) {
            $(this).find("th").each(function () {
                tmpStr = $(this).text().replace(/"/g, '""');
                tmpArr.push(tmpStr);
            });
            csvData.push(tmpArr);
        } else {
            tmpArr = [];
            $(this).find("td").each(function () {
                if ($(this).text().match(/^-{0,1}\d*\.{0,1}\d+$/)) {
                    tmpArr.push(parseFloat($(this).text()));
                } else {
                    tmpStr = $(this).text().replace(/"/g, '""');
                    tmpArr.push(tmpStr);
                }
            });
            csvData.push(tmpArr.join(','));
        }
    });
    var output = csvData.join('\n');
    $('#CsvData').val(output);
    $('#excelform').submit();
}