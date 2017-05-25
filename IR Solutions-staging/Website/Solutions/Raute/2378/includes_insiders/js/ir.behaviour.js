var allData;
var translationData;

var instrumentID = 1000532;
//var solutionID = 2378;
//var customerKey = "Raute";

function requestPreviewFromURL() {
    var getParams = location.search.substr(1).split("&");

    for (var i = 0; i < getParams.length; i++) {
        if (getParams[i].split("=")[0] == "preview") {
            return '&guid=' + getParams[i].split("=")[1];
        }
    }
    return '';
}


$.getJSON(getServiceEngingeURL() + 'RequestInsiderEuroclearData?apiversion=' + clientApiVersion + '&lcid=' + clientLCID + '&customerKey=' + clientCustomerKeyRequired + '&solutionID=' + clientSolutionID + '&instrumentid=' + instrumentID, function (data) {
    allData = data;

    $.when(requestTranslationsData).done(function () {
        translationData = jQuery.parseJSON(requestTranslationsData.responseText);

        allData.headers = translationData.data;

        //insiders list
        var source = $('#IRDataTemplateInsiders').html();
        var template = Handlebars.compile(source);
        $('#IRDataInsiders').html(template(allData));

        //transactions
        var source = $('#IRDataTemplateTransactions').html();
        var template = Handlebars.compile(source);
        $('#IRDataTransactions').html(template(allData));

        //ended insiders
        var source = $('#IRDataTemplateEndedInsiders').html();
        var template = Handlebars.compile(source);
        $('#IRDataEndedInsiders').html(template(allData));

        calculateMembersOfTheBoardTotals();
        calculateManagementTotals();
        applyTableSaws();
        $("#container").minitabs();

        $('.hiddenUserContent').css('display', 'none');
        //show user profile   
        $('.userRow').click(function () {
            $('.tab1-tables-wrapper').css('display', 'none');

            $('#user' + this.id).css('display', 'block');
            //$('.personInFocus').html($('div[id=user' + this.id + ']').html());
        });



        //hide tablesaw if all columns is show for each table
        $('.tablesaw-advance-dots').each(function () {

            var list = $(this).find('li.tablesaw-advance-dots-hide');

            if (list.length == 0) {
                $(this).closest(".tablesaw-bar.mode-swipe").css('display', 'none');
            } else {
                $(this).closest(".tablesaw-bar.mode-swipe").css('display', 'block');
            }
        });

        //translation
        $('.navbar-header').html(translationData.data.t_insiders_list);
        $('#tabItemOne').html(translationData.data.t_insiders_list);
        $('#tabItemTwo').html(translationData.data.t_transaction_history);
        $('#tabItemThree').html(translationData.data.t_persons_no_longer_subject);

    });


});


function goBack() {
    $('.hiddenUserContent').css('display', 'none');

    $('.tab1-tables-wrapper').removeAttr("style");
}

function calculateMembersOfTheBoardTotals() {
    var value = [];
    var total = 0;
    $(".table-look.insiders .Data.a-share").each(function () {
        var num = parseInt($(this).text());
        if (!isNaN(num)) {
            value.push(num);
        }
    });
    for (var i = 0; i < value.length; i++) {
        total += value[i];
    }
    $(".table-look.insiders .total.a-share").text(total);
    //____________k-share_________________//
    var value = [];
    var total = 0;
    $(".table-look.insiders .Data.k-share").each(function () {
        var num = parseInt($(this).text());
        if (!isNaN(num)) {
            value.push(num);
        }
    });
    for (var i = 0; i < value.length; i++) {
        total += value[i];
    }
    $(".table-look.insiders .total.k-share").text(total);
    //____________options_________________//
    var value = [];
    var total = 0;
    $(".table-look.insiders .Data.options").each(function () {
        var num = parseInt($(this).text());
        if (!isNaN(num)) {
            value.push(num);
        }
    });
    for (var i = 0; i < value.length; i++) {
        total += value[i];
    }
    $(".table-look.insiders .total.options").text(total);
};

function calculateManagementTotals() {
    var value = [];
    var total = 0;
    $(".table-look.management .Data.a-share").each(function () {
        var num = parseInt($(this).text());
        if (!isNaN(num)) {
            value.push(num);
        }
    });
    for (var i = 0; i < value.length; i++) {
        total += value[i];
    }
    $(".table-look.management .total.a-share").text(total);
    //____________k-share_________________//
    var value = [];
    var total = 0;
    $(".table-look.management .Data.k-share").each(function () {
        var num = parseInt($(this).text());
        if (!isNaN(num)) {
            value.push(num);
        }
    });
    for (var i = 0; i < value.length; i++) {
        total += value[i];
    }
    $(".table-look.management .total.k-share").text(total);
    ////____________options_________________//
    var value = [];
    var total = 0;
    $(".table-look.management .Data.options").each(function () {
        var num = parseInt($(this).text());
        if (!isNaN(num)) {
            value.push(num);
        }
    });
    for (var i = 0; i < value.length; i++) {
        total += value[i];
    }
    $(".table-look.management .total.options").text(total);
};


////this is used to check wether the handlebar is equal to a specfic string
Handlebars.registerHelper('if_eq', function (a, b, opts) {
    //board members
    if (b == "membersOfTheBoard") {
        var membersPositionID = [102, 103]

        if (a == membersPositionID[0] || a == membersPositionID[1]) {
            return opts.fn(this);
        } else {
            return opts.inverse(this);
        }
    }
    //management
    if (b == "management") {
        var membersPositionID = [122, 101]

        if (a == membersPositionID[0] || a == membersPositionID[1]) {
            return opts.fn(this);
        } else {
            return opts.inverse(this);
        }
    }
    //auditors
    if (b == "auditors") {
        var membersPositionID = [110]

        if (a == membersPositionID[0]) {
            return opts.fn(this);
        } else {
            return opts.inverse(this);
        }
    }
});

Handlebars.registerHelper('getShare', function (holdings, opts) {
    for (var i = 0; i < holdings.length; i++) {
        if (holdings[i].name == opts) {
            if (holdings[i].amount != 0)
                return holdings[i].amount;
            else
                return '';
        }
    }
});
Handlebars.registerHelper('getChange', function (holdings, opts) {

    for (var i = 0; i < holdings.length; i++) {
        if (holdings[i].name == opts) {
            if (holdings[i].change != 0)
                return holdings[i].change;
            else
                return '';
        }
    }
});
Handlebars.registerHelper('getOptions', function (holdings) {
    var sum = 0;

    for (var i = 0; i < holdings.length; i++) {
        if (holdings[i].name !== 'RUTAV' && holdings[i].name !== 'RUTKV') {
            sum += holdings[i].amount;
        }
    }
    if (sum == 0)
        return ''
    else
        return sum
});
Handlebars.registerHelper('getOptionsChange', function (holdings) {
    var sum = 0;

    for (var i = 0; i < holdings.length; i++) {
        if (holdings[i].name !== 'RUTAV' && holdings[i].name !== 'RUTKV') {
            sum += holdings[i].change;
        }
    }
    if (sum == 0)
        return ''
    else
        return sum
});
Handlebars.registerHelper('formatDate', function (date, format) {
    return formatDateWithFormat(date, format);
});

Handlebars.registerHelper('linkages', function (id) {

    var closelyAssociatedCount = 0;
    var influenceCount = 0;
    var controlledCorporationsCount = 0;

    //get linkage data
    var linkages = getLinkage(id);
    var objs = JSON.parse(linkages);
    var data = objs.data;
    //____________________//


    var closelyAssociated = "";
    var influenceExcercised = "";
    var controlledCorporations = "";
  
    for (var i = 0; i < data.length; i++) {
        //checks for 200 numbers (closely associated  persons...)
        if (String(data[i].basisCode).charAt(0) == 2) {

            closelyAssociatedCount++;
            if (closelyAssociatedCount == 1) {
                closelyAssociated += '<tr class="linkage-status-headlines">' +
                                    '<td class="Header column-first">' + translationData.data.t_closely_associated_persons + '</td>' +
                                    '<td class="Header">' + translationData.data.t_start_date + '</td>' +
                                    '<td class="Header">' + translationData.data.t_end_date + '</td>' +
                                    '<td class="Header">' + translationData.data.t_security + '</td>' +
                                    '<td class="Header column-last">' + translationData.data.t_amount + '</td>' +
                                    '</tr>';
            }
            if (typeof (data[i].units == "undefined") || typeof (data[i].endDate == "undefined")) {
                var units = translationData.data.t_no_holdings;
                var endDate = "";
            } else {
                var units = data[i].units;
                var endDate = data[i].endDate;
            }
            closelyAssociated += '<tr>' +
                 '<td class="Data column-first">' + data[i].basisString + '</td>' +
                 '<td class="Data">' + formatDateWithFormat(data[i].beginDate, "YYYY-MM-DD") + '</td>' +
                 '<td class="Data">' + endDate + '</td>' +
                 '<td class="Data">' + units + '</td>' +
                 '<td class="Data column-last"></td>' +
                 '</tr>';
        }

        //checks for 300 numbers (Controlled corporations)
        if (String(data[i].basisCode).charAt(0) == 3) {

            controlledCorporationsCount++;
            if (controlledCorporationsCount == 1) {
                controlledCorporations += '<tr class="linkage-status-headlines">' +
                                    '<td class="Header column-first">' + translationData.data.t_controlled_corporations + '</td>' +
                                    '<td class="Header">' + translationData.data.t_start_date + '</td>' +
                                    '<td class="Header">' + translationData.data.t_end_date + '</td>' +
                                    '<td class="Header">' + translationData.data.t_security + '</td>' +
                                    '<td class="Header column-last">' + translationData.data.t_amount + '</td>' +
                                    '</tr>';
            }
            if (typeof (data[i].units == "undefined") || typeof (data[i].endDate == "undefined")) {
                var units = translationData.data.t_no_holdings;
                var endDate = "";
            } else {
                var units = data[i].units;
                var endDate = data[i].endDate;
            }
            controlledCorporations +=
                '<tr>' +
                 '<td class="Data column-first"><b>' + data[i].companyName + '</b></td>' +
                 '<td class="Data"></td>' +
                 '<td class="Data"></td>' +
                 '<td class="Data"></td>' +
                 '<td class="Data column-last"></td>' +
                 '</tr>' +
                 '<tr>' +
                 '<td class="Data column-first">' + data[i].basisString + '</td>' +
                 '<td class="Data">' + formatDateWithFormat(data[i].beginDate, "YYYY-MM-DD") + '</td>' +
                 '<td class="Data">' + endDate + '</td>' +
                 '<td class="Data">' + units + '</td>' +
                 '<td class="Data column-last"></td>' +
                 '</tr>';
        }

        //checks for 400 numbers (Influence exercised in corporation)
        if (String(data[i].basisCode).charAt(0) == 4) {

            influenceCount++;
            if (influenceCount == 1) {
                influenceExcercised += '<tr class="linkage-status-headlines">' +
                                    '<td class="Header column-first">' + translationData.data.t_influence_exercised_in_corporations + '</td>' +
                                    '<td class="Header">' + translationData.data.t_start_date + '</td>' +
                                    '<td class="Header">' + translationData.data.t_end_date + '</td>' +
                                    '<td class="Header">' + translationData.data.t_security + '</td>' +
                                    '<td class="Header column-last">' + translationData.data.t_amount + '</td>' +
                                    '</tr>';
            }
            if (typeof (data[i].units == "undefined") || typeof (data[i].endDate == "undefined")) {
                var units = translationData.data.t_no_holdings;
                var endDate = "";
            } else {
                var units = data[i].units;
                var endDate = data[i].endDate;
            }
            influenceExcercised +=
                '<tr>' +
                 '<td class="Data column-first"><b>' + data[i].companyName + '</b></td>' +
                 '<td class="Data"></td>' +
                 '<td class="Data"></td>' +
                 '<td class="Data"></td>' +
                 '<td class="Data column-last"></td>' +
                 '</tr>' +
                 '<tr>' +
                 '<td class="Data column-first">' + data[i].basisString + '</td>' +
                 '<td class="Data">' + formatDateWithFormat(data[i].beginDate, "YYYY-MM-DD") + '</td>' +
                 '<td class="Data">' + endDate + '</td>' +
                 '<td class="Data">' + units + '</td>' +
                 '<td class="Data column-last"></td>' +
                 '</tr>';
        }
    }
    //returned HTML
    return closelyAssociated + controlledCorporations + influenceExcercised;

});

Handlebars.registerHelper('transactions', function (name) {

    var transactions = allData.data.transactionRows;
    var transactionHTML = "";

    for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].name == name) {
            transactionHTML += '<tr>' +
                '<td class="Data column-first">' + formatDateWithFormat(transactions[i].date, "YYYY-MM-DD") + '</td>' +
                '<td class="Data">' + transactions[i].holder + '</td>' +
                '<td class="Data">' + transactions[i].basisString + '</td>' +
                '<td class="Data">' + transactions[i].security + '</td>' +
                '<td class="Data column-last">' + transactions[i].numberAmount + '</td>' +
                '</tr>';
        }
    }


    return transactionHTML;

});

function getLinkage(id) {
    var value = $.ajax({
        url: getServiceEngingeURL() + "RequestInsiderLinkageData?apiversion=" + clientApiVersion + "&lcid=" + clientLCID + "&customerKey=" + clientCustomerKeyRequired + "&solutionID=" + clientSolutionID + "&companyPersonRelationId=" + id,
        async: false
    }).responseText;
    return value;
}

function getInsiderTransaction(id) {
    var value = $.ajax({
        url: getServiceEngingeURL() + "RequestInsiderLinkageData?apiversion=" + clientApiVersion + "&lcid=" + clientLCID + "&customerKey=" + clientCustomerKeyRequired + "&solutionID=" + clientSolutionID + "&companyPersonRelationId=" + id,
        async: false
    }).responseText;
    return value;
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