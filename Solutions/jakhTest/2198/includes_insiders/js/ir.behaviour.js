/* get all english data from json */

    var instrumentID = 1000579;
    var solutionID = 2282;
    var customerKey = "LeoVegas";
               
    $.getJSON('http://devir.euroinvestor.com/ServiceEngine/api/json/reply/RequestInsiderSwedenFISEData?apiversion=1&lcid=1033&solutionID=' + solutionID + '&instrumentid=' + instrumentID + '&customerKey=' + customerKey + '', function (data) {
        allData = data;

        var source = $('#IRDataTemplate').html();
        var template = Handlebars.compile(source);
        $('#IRData').html(template(allData));
    });

