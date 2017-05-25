var debug = false;
var localhost = false; // true, false
var activePage = 1;
var loginEmail = 'na';
var inputBoxLowHighValue = '';
var inputBoxChangePercentageValue = '';
var translationData = '';

$(function () {
    init();
});
$.when(requestTranslationsData).done(function() {
    translationData = jQuery.parseJSON(requestTranslationsData.responseText);
});

function init() {
    $('.pageRegister').show();
    $('.pageVerification').hide();
    $('.pageUnsubscribe').hide();
    $('.subPageLoginConfirm').hide();
    $('.inputBoxHighLowInfo').hide();
    $('.inputBoxChangePercentageInfo').hide();
    loadClickHandlers();
    inputFields();
}
function inputFields() {
    inputBoxLowHighValue = $('.inputBoxLow').val();
    inputBoxLowHighValue = $('.inputBoxHigh').val();
    $('.inputBoxLow, .inputBoxHigh').click(function () {
        if ($(this).val() == inputBoxLowHighValue) {
            $(this).val("");
        }
    });
    $('.inputBoxLow, .inputBoxHigh').blur(function () {
        if ($(this).val() == "") {
            $(this).val(inputBoxLowHighValue);
        }
    });
    inputBoxChangePercentageValue = $('.inputBoxChangePercentage').val();
    $('.inputBoxChangePercentage').click(function () {
        if ($(this).val() == inputBoxChangePercentageValue) {
            $(this).val("");
        }
    });
    $('.inputBoxChangePercentage').blur(function () {
        if ($(this).val() == "") {
            $(this).val(inputBoxChangePercentageValue);
        }
    });
}
function loadClickHandlers() {
    $('.formRegister').click(function (e) {
        e.preventDefault();
        if (activePage == 1) {
            if (checkInputFields()) {
                activePage = 2;
                //$('.pageRegister').hide();
                $('.semiTransparantOverlay').removeClass('hidden');
                $('.pageVerification_bottom').show();
            }
        }
        if (activePage == 2) {
            retrieveAndPostValues();
        }
    });
    $('.formLogin').click(function (e) {
        e.preventDefault();
        if (activePage == 1) {
            if ($('.enterInformationLoginEmail').val() != '') {
                loginEmail = $('.enterInformationLoginEmail').val();
                $('.ReleasesA').attr('checked', false);
                $('.subPageLogin').hide();
                $('.emailToConfirm').html(loginEmail);
                $('.subPageLoginConfirm').show();
                activePage = 4;
            }
        }
    });

    $('.formLoginConfirm').click(function (e) {
        e.preventDefault();
        retrieveAndPostValues();
        $('.enterInformationLoginEmail').val('');
        $('.unsubscribeEmail').val('');
        //$('.pageRegister').hide();
        //$('.pageUnsubscribe').hide();
        $('.pageVerification_top').show();
        $('.semiTransparantOverlay').removeClass('hidden');
        activePage = 1;

    });



    $('.formUnsubscribe').click(function () {
        $('.ReleasesA').attr('checked', false);
        $('.pageRegister').hide();
        $('.pageUnsubscribe').show();
        activePage = 3;
    });
    $('.formUnsubscribeInTool').click(function (e) {
        e.preventDefault();
        if (checkInputFields()) {
            retrieveAndPostValues();
            $('.enterInformationEmail').val('');
            $('.unsubscribeEmail').val('');
            //$('.pageRegister').hide();
            //$('.pageUnsubscribe').hide();
            $('.pageVerification_top').show();
            $('.semiTransparantOverlay').removeClass('hidden');
            activePage = 1;
        }
    });
    $('.goToHome').click(function () {
        $('.ReleasesA').attr('checked', true);
        $('.pageRegister').show();
        $('.pageUnsubscribe').hide();
        $('.pageVerification').hide();
        $('.enterInformationEmail').val('');
        $('.unsubscribeEmail').val('');
        $('.requiredFieldMSG').html('');
        $('.subPageLoginConfirm').hide('');
        $('.subPageLogin').show('');
        activePage = 1;
        $('.semiTransparantOverlay').addClass('hidden');
    });

}
function loadBackClickHandler() {
    $('.goToHome').click(function () {
        $('.ReleasesA').attr('checked', true);
        $('.pageRegister').show();
        $('.pageUnsubscribe').hide();
        $('.pageVerification').hide();
        $('.enterInformationEmail').val('');
        $('.unsubscribeEmail').val('');
        $('.requiredFieldMSG').html('');
        $('.subPageLoginConfirm').hide('');
        $('.subPageLogin').show('');
        activePage = 1;
        $('.semiTransparantOverlay').addClass('hidden');
    });
}
function getRSSFilters() {
    var b = "";
    var thisHTML = "";

    $('.checkboxCountry').each(function () {
        thisHTML = $(this).html().replace(',', 'IRcommaIR');
        if ($(this).hasClass('checked')) {
            b += ",[c]" + thisHTML + "[/c]";
        }
    });
    $('.checkboxBusinessLines').each(function () {
        thisHTML = $(this).html().replace(',', 'IRcommaIR');
        if ($(this).hasClass('checked')) {
            b += ",[bl]" + thisHTML + "[/bl]";
        }
    });
    $('.checkboxCategoriesLines').each(function () {
        thisHTML = $(this).html().replace(',', 'IRcommaIR');
        if ($(this).hasClass('checked')) {
            b += ",[nc]" + thisHTML + "[/nc]";
        }
    });
    return b;
}
function rnsGetAllFilters() {
    var b = "";
    $('.checkboxRNSFilter').each(function () {
        if ($(this).hasClass('checked')) {
            b += "," + $(this).attr('id') + "";
        }
    });
    return b;
}
function retrieveAndPostValues() {
    //
    //  Get RSS (Countries, Business Lines and Category Lines)
    //
    var useRSSFilters = false;
    var RSSFilters = getRSSFilters();
    if (RSSFilters.length > 0) {
        useRSSFilters = true;
    }

    //
    //  Get Filters
    //
    var useRNSFilters = false;
    var RNSFilters = rnsGetAllFilters();
    if (RNSFilters.length > 0) {
        useRNSFilters = true;
    }

    //
    // Post data
    //
    var emailAlertsManagerURL = '../../../Tools/EmailAlertsWithPush/EmailAlertsManager.aspx?ts=' + (new Date).getTime(); // Accessible from asp/ir/*
    if (localhost) {
        emailAlertsManagerURL = '../EmailAlertsManager.aspx?ts=' + (new Date).getTime();
    }

    $.ajax({
        url: emailAlertsManagerURL,
        type: "POST",
        dataType: "json",
        cache: false,
        data: {
            ReleasesA: checkReleases('ReleasesA'),
            ReleasesB: checkReleases('ReleasesB'),
            ReleasesC: checkReleases('ReleasesC'),
            language: $('#companyAnnoucementLanguage').val(),
            //language: $('input[name=companyAnnoucementLanguage]').filter(':checked').val(),
            emailEOD: $('#emailEOD').attr('checked'),
            emailBOD: $('#emailBOD').attr('checked'),
            emailWeekly: $('#emailWeekly').attr('checked'),
            emailThreshold: $('#emailThreshold').attr('checked'),
            inputBoxLow: $('#inputBoxLow').val(),
            inputBoxHigh: $('#inputBoxHigh').val(),
            emailChangePercentage: $('#emailChangePercentage').attr('checked'),
            inputBoxChangePercentage: $('#inputBoxChangePercentage').val(),
            enterInformationFirstName: $('#enterInformationFirstName').val(),
            enterInformationEmail: $('#enterInformationEmail').val(),
            enterInformationCompany: $('#enterInformationCompany').val(),
            enterInformationLastName: $('#enterInformationLastName').val(),
            enterInformationTitle: $('#enterInformationTitle').val(),
            //enterInformationType: $('#enterInformationType').val(),
            enterInformationCountry: $('#enterInformationCountry').val(),
            enterInformationCompany: $('#enterInformationCompany').val(),
            unsubscribeEmail: $('#unsubscribeEmail, .enterInformationLoginEmail, .unsubscribeEmail').val(),
            solutionID: $('.solutionID').val(),
            instrumentID: $('.instrumentID').val(),
            feedURL: $('#feedURL').val(),
            activeClient: $('.activeClient').val(),
            enterInformationEmailRSS: $('#enterInformationEmailRSS').val(),
            ReleaseRSS: $('#ReleaseRSS').attr('checked'),
            enterInformationName: $('#enterInformationName').val(),
            useRSSFilters: useRSSFilters,
            RSSFilters: RSSFilters,
            useRNSFilters: useRNSFilters,
            RNSFilters: RNSFilters,
            enterInformationEmailRNSFilter: $('#enterInformationEmailRNSFilter').val(),
            ReleaseRNSFilter: $('#ReleaseRNSFilter').attr('checked')
        },
        success: function (content) {
            checkReturnValues(content);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            printDebug(xhr.status);
            printDebug(ajaxOptions);
            printDebug(thrownError);
        }
    });
}
function checkReleases(check) {
    var ret = 'na';
    if ($('#' + check + '').attr('checked') == 'checked') {
        ret = 'checked';
    } else if ($('#' + check + '').val() == 'checked') {
        ret = 'checked';
    }
    return ret;
}
function checkInputFields() {
    var isOK = true;
    $('.requiredFieldMSG').html('');
    if (activePage == 1) {

        //
        //  Step 1, check that the input elements exists.
        //
        var isReleaseA = false;
        var isActiveFirstName = false;
        var isActiveLastName = false;
        var isActiveEmailAdress = false;
        var isRNSFiltersOnly = false;
        var isRNSAndStock = false;
        var isRSS = false;
        //var isStockInformationAll = false;
        //var isAllRNSButton = false;

        if ($('.ReleasesA').length == 1) {
            isReleaseA = true;
        }
        if ($('.enterInformationFirstName').length == 1) {
            isActiveFirstName = true;
        }
        if ($('.enterInformationLastName').length == 1) {
            isActiveLastName = true;
        }
        if ($('.enterInformationEmail').length == 1) {
            isActiveEmailAdress = true;
        }
        if ($('#allRNSnews').length == 1 && $('#emailEOD').length == 1) {
            isRNSAndStock = true;
        }
        if ($('.checkboxRNSFilter').length > 1 && $('#emailEOD').length == 0) {
            isRNSFiltersOnly = true;
        }
        if ($('.checkboxCountry').length > 1 && $('.checkboxBusinessLines').length > 1 && $('.checkboxCategoriesLines').length > 1) {
            isRSS = true;
        }


        //if ($('.emailEOD').length == 1 && $('.emailWeekly').length == 1 && $('.emailThreshold').length == 1 && $('.emailChangePercentage').length == 1) {
        //    isStockInformationAll = true;
        //}
        //if ($('#allRNSnews').length) {
        //    isAllRNSButton = true;
        //}




        //
        //  Step 2, check the value of the input elements.
        //
        if (isReleaseA) {
            if ($('.ReleasesA').val() == 'checked') {
                // OK
            } else if ($('.ReleasesA').is(':checked')) {
                // OK
            } else {
                isOK = false;
            }
        }
        if (isActiveFirstName) {
            if ($('#enterInformationFirstName').val().length < 1) {
                isOK = false;
            }
        }
        if (isActiveLastName) {
            if ($('#enterInformationLastName').val().length < 1) {
                isOK = false;
            }
        }
        if (isActiveEmailAdress) {
            var emailEntered = $('#enterInformationEmail').val();
            //
            //  Email validation
            //
            var indexLocation_at = emailEntered.indexOf("@");
            if (emailEntered.length < 5) {
                isOK = false;
            }
            if (indexLocation_at == -1) {
                isOK = false;
            }
        }

        if (isRNSFiltersOnly) {
            var countSelectedCheckbox = 0;

            $('.checkboxRNSFilter').each(function () {
                if ($(this).hasClass('checked')) {
                    countSelectedCheckbox = countSelectedCheckbox + 1;
                }
            });

            if (countSelectedCheckbox == 0) {
                isOK = false;
            }
        }

        if (isRNSAndStock) {
            var countSelectedCheckbox = 0;

            $('.checkboxRNSFilter').each(function () {
                if ($(this).hasClass('checked')) {
                    countSelectedCheckbox = countSelectedCheckbox + 1;
                }
            });

            if ($('.emailEOD').val() == 'checked' || $('.emailEOD').is(':checked') ||
                $('.emailBOD').val() == 'checked' || $('.emailBOD').is(':checked') ||
                $('.emailWeekly').val() == 'checked' || $('.emailWeekly').is(':checked') ||
                $('.emailThreshold').val() == 'checked' || $('.emailThreshold').is(':checked') ||
                $('.emailChangePercentage').val() == 'checked' || $('.emailChangePercentage').is(':checked')) {
                countSelectedCheckbox = countSelectedCheckbox + 1;
            }

            if (countSelectedCheckbox == 0) {
                isOK = false;
            }
        }
        if (isRSS) {
            var countSelectedCheckbox = 0;
            $('.checkbox').each(function () {
                if ($(this).hasClass('checked')) {
                    countSelectedCheckbox = countSelectedCheckbox + 1;
                }
            });

            if (countSelectedCheckbox == 0) {
                isOK = false;
            }
        }
    }

    if (!isOK) {

        $('.requiredFieldMSG').html(translationData.data.t_please_verify_all_required_fields + '!');

        //if (isAllRNSButton && isStockInformationAll) {
        //    $('.requiredOptionsMSG').html('Please verify above options!');
        //}
    }

    return isOK;
}
function checkReturnValues(data) {
    var classOuter = '.pageVerification';
    var classInner = ' div.blockNoBorder.noTopMargin';
    var header = '';
    var paragraph = '';
    var html = '';
    printDebug(data);

    if (data.msgToReturn != "") {
        printDebug(data.msgToReturn);
        if (data.msgToReturn == "InvalidInput") {
            header = translationData.data.t_verification;
            paragraph = 'Email entered is not valid. Please try again.';
            html = '<a class="cleanLink goToHome">'+translationData.data.t_back+'</a>';
        }
        if (data.msgToReturn == "UserEmailExistAndIsNotActived") {
            header = translationData.data.t_verification;
            paragraph = 'Email already subscribed but not yet activated.';
            html = '<a class="cleanLink goToHome">'+translationData.data.t_back+'</a>';
        }
        if (data.msgToReturn == "UserEmailExistAndIsNotActivedRNSFilter") {
            header = translationData.data.t_verification;
            paragraph = 'Email alerts has been updated. Email subscription is not yet activated.';
            html = '<p class="bold">'+t_description_subscribe_verification_html+'</p><a class="cleanLink goToHome">'+translationData.data.t_back+'</a>';
        }
        if (data.msgToReturn == "NoRSSFiltersSelected") {
            header = translationData.data.t_verification;
            paragraph = 'No filters has been selected. Please go back and select at least one filter.';
            html = '<a class="cleanLink goToHome">' + translationData.data.t_back + '</a>';
        }
        if (data.msgToReturn == "UserEmailExistAndIsNotActivedRSSFilter") {
            header = translationData.data.t_verification;
            paragraph = 'Email alerts has been updated. Email subscription is not yet activated.';
            html = '<p class="bold">' + t_description_subscribe_verification_html + '</p><a class="cleanLink goToHome">' + translationData.data.t_back + '</a>';
        }
        if (data.msgToReturn == "UserEmailExistAndIsActive") {
            header = translationData.data.t_verification;
            paragraph = 'Email already subscribed and is activated.';
            html = '<a class="cleanLink goToHome">'+translationData.data.t_back+'</a>';
        }
        if (data.msgToReturn == "UserEmailExistAndIsActiveRSSFilter") {
            header = translationData.data.t_verification;
            paragraph = 'Email alerts has been updated. Email subscription is activated.';
            html = '<a class="cleanLink goToHome">'+translationData.data.t_back+'</a>';
        }
        if (data.msgToReturn == "UserEmailExistAndIsActiveRNSFilter") {
            header = translationData.data.t_verification;
            paragraph = 'Email alerts has been updated. Email subscription is activated.';
            html = '<a class="cleanLink goToHome">'+translationData.data.t_back+'</a>';
        }
        if (data.msgToReturn == "UserCreated") {
            header = translationData.data.t_fantastic_almost_there;
            paragraph = translationData.data.t_please_check_inbox;
            html = '';
        }
        if (data.msgToReturn == "UserDoesNotExist") {
            header = translationData.data.t_verification;
            paragraph = translationData.data.t_email_does_not_exist;
            html = '<a class="cleanLink goToHome">'+translationData.data.t_back+'</a>';
        }
        if (data.msgToReturn == "UserDoesNotExist") {
            header = translationData.data.t_verification;
            paragraph = translationData.data.t_email_does_not_exist;
            html = '<a class="cleanLink goToHome">'+translationData.data.t_back+'</a>';
            $('.formContinue.unsubscribeInTool').hide();
        }
        if (data.msgToReturn == "UserUnsubscribedWasNotActive") {
            header = translationData.data.t_verification;
            paragraph = translationData.data.t_email_now_unsubscribed;
            html = '<a class="cleanLink goToHome">'+translationData.data.t_back+'</a>';
            $('.formContinue.unsubscribeInTool').hide();
        }
        if (data.msgToReturn == "UserUnsubscribed") {
            header = translationData.data.t_success;
            paragraph = translationData.data.t_email_now_unsubscribed;
            html = '<a class="cleanLink goToHome">'+translationData.data.t_back+'</a>';
            $('.formContinue.unsubscribeInTool').hide();
        }
        $(classOuter + classInner + ' h2').text(header);
        $(classOuter + classInner + ' p').text(paragraph);
        $(classOuter + ' div.block').html(html);
        var classTest1 = classOuter + classInner + ' h2';
        var classTest1Text = header;
        loadBackClickHandler();
        } 
    //else {
    //    header = 'Step 3 of 3: ' + translationData.data.t_verification + translationData.data.t_email;
    //    paragraph = translationData.data.t_description_subscribe_verification_paragraph;
    //    html = translationData.data.t_description_subscribe_verification_html;
    //    $('.pageVerification div.blockNoBorder.noTopMargin h2').text(header);
    //    $('.pageVerification div.blockNoBorder.noTopMargin p').text(paragraph);
    //    $('.pageVerification div.block').html(html);
    //    loadBackClickHandler();
    //}
}
function printDebug(str) {
    if (debug) {
        console.log(str);
    }
}