var toolPrepared = false;
var filtersInTotal = 0;

//var emailAlertsManagerURL = '../IR/Tools/EmailAlertsWithPush/EmailAlertsManager.aspx?ts=' + (new Date).getTime();
var emailAlertsManagerURL = '//ir.euroinvestor.com/Tools/EmailAlertsWithPushRSS/EmailAlertsManagerRSS.aspx?ts=' + (new Date).getTime();
//var emailAlertsManagerURL = '//devir.euroinvestor.com/Tools/EmailAlertsWithPushRSS/EmailAlertsManagerRSS.aspx?ts=' + (new Date).getTime();
//emailAlertsManagerURL = 'http://localhost:55794/EmailAlertsManagerRSS.aspx?ts=' + (new Date).getTime();

function checkActiveRSSFiltersSelect() {
    
    var activeFiltersInTool = 0;

    $('input.rssFiltersSelect.active').each(function () {
        activeFiltersInTool++;
    });

    if(activeFiltersInTool == filtersInTotal) {
        $('input.alertTypeSubCheckboxAll').addClass('active');
        $('input.alertTypeSubCheckboxAll').prop('checked', true);
        $('span.alertTypeLabelAllNews').addClass('active');
    } else {
        $('input.alertTypeSubCheckboxAll').removeClass('active');
        $('input.alertTypeSubCheckboxAll').prop('checked', false);
        $('span.alertTypeLabelAllNews').removeClass('active');
    }

}

function prepareTool() {

    $('input.rssFiltersSelect').each(function () {
        filtersInTotal++;
    });

    $('span.alertTypeLabelAllNews').on('click', function () {

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('input.alertTypeSubCheckboxAll').removeClass('active');
            $('input.alertTypeSubCheckboxAll').prop('checked', false);
            $(this).parent().find('input.rssFiltersSelect').prop('checked', false);
            $(this).parent().find('input.rssFiltersSelect').removeClass('active');
            $(this).parent().find('span.alertTypeCheckbox').removeClass('active');
        } else {
            $(this).addClass('active');
            $('input.alertTypeSubCheckboxAll').addClass('active');
            $('input.alertTypeSubCheckboxAll').prop('checked', true);
            $(this).parent().find('input.rssFiltersSelect').prop('checked', true);
            $(this).parent().find('input.rssFiltersSelect').addClass('active');
            $(this).parent().find('span.alertTypeCheckbox').addClass('active');
        }

        checkActiveRSSFiltersSelect();
    });
    $('input.alertTypeSubCheckboxAll').on('click', function () {
        if ($(this).prop('checked')) {
            $(this).prop('checked', true);
            $(this).parent().find('.rssFiltersSelect').prop('checked', true);
            $(this).parent().find('.rssFiltersSelect').addClass('active');
            $(this).parent().find('span.alertTypeCheckbox').addClass('active');
            $(this).parent().find('span.alertTypeLabelAllNews').addClass('active');
        } else {
            $(this).prop('checked', false);
            $(this).parent().find('.rssFiltersSelect').prop('checked', false);
            $(this).parent().find('.rssFiltersSelect').removeClass('active');
            $(this).parent().find('span.alertTypeCheckbox').removeClass('active');
            $(this).parent().find('span.alertTypeLabelAllNews').removeClass('active');
        }
    });
    $('.alertTypeCheckbox').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parent().find('input.rssFiltersSelect').prop('checked', false);
            $(this).parent().find('input.rssFiltersSelect').removeClass('active');
        } else {
            $(this).addClass('active');
            $(this).siblings('input.rssFiltersSelect').prop('checked', true);
            $(this).parent().find('input.rssFiltersSelect').addClass('active');
        }
        checkActiveRSSFiltersSelect();
    });
    $('.alertTypeLabel').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parent().find('input.rssFiltersSelect ').prop('checked', false);
            $(this).parent().find('span.alertTypeCheckbox').removeClass('active');
            $(this).parent().find('input.rssFiltersSelect ').removeClass('active');
        } else {
            $(this).addClass('active');
            $(this).siblings('input.rssFiltersSelect ').prop('checked', true);
            $(this).parent().find('span.alertTypeCheckbox').addClass('active');
            $(this).parent().find('input.rssFiltersSelect ').addClass('active');
        }
        checkActiveRSSFiltersSelect();
    });
    $('.sharePriceQuoteThressholdRuleTrigger').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).siblings('.sharePriceQuoteThressholdRule').show();
            $(this).addClass('active');
        } else {
            $(this).siblings('.sharePriceQuoteThressholdRule').hide();
            $(this).removeClass('active');
        }
    });
    $('.sharePriceQuotePercentageRuleTrigger').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).siblings('.sharePriceQuotePercentageRule').show();
            $(this).addClass('active');
        } else {
            $(this).siblings('.sharePriceQuotePercentageRule').hide();
            $(this).removeClass('active');
        }
    });
    $("#alertType_quoteByEmail").on('change', function(){
        if(this.checked) {
            $(".sharePriceQuoteDailyOpenRule").addClass('selected');
       }else{
           $(".sharePriceQuoteDailyOpenRule").removeClass('selected');
        }
    });
    $("#sharePriceQuoteWeeklyRule").on('change', function(){
        if(this.checked) {
            $(".sharePriceQuoteWeeklyRule").addClass('selected');
        }else{
            $(".sharePriceQuoteWeeklyRule").removeClass('selected');
        }
    });
    $('.sharePriceQuoteThressholdRuleTrigger').on('change', function(){
        if (this.checked) {
            $(this).addClass('selected');
        }else{
            $(this).removeClass('selected');
        }
    });
    $('#sharePriceQuotePercentage').on('change', function(){
        if (this.checked) {
            $('.sharePriceQuotePercentageRuleTrigger').addClass('selected');
        }else{
            $('.sharePriceQuotePercentageRuleTrigger').removeClass('selected');
        }
    });
    $('#registerEmailAddress').on('click', function () {
        $('.verificationLocal .InvalidInput_RegisterEmailAddress').hide();
        $('.verificationLocal .InvalidInput_SharePriceQuoteOrShareReleases').hide();
    });
    $('.closeVerificationBox').on('click', function () {
        $('.verificationLocal > div').hide();
    });
    $('.closeVerificationBoxAndClearInput').on('click', function () {
        $('.verificationLocal > div').hide();
        clearInput();
    });
    $('#alertTypeSubmitBox_unsubscribe').on('click', function () {
        var email = $('.unsubscribeEmail').val();
        if (email.length > 4 && email.indexOf('@') > -1) {
            $('#dialogueBox_unsubscribe').show();
        }
    });

    $('#alertTypeSubmitBox_unsubscribeConfirm').on('click', function () {
        var email = $('.unsubscribeEmail').val();
        unsubscribe(email);
    });

    $('.closeBox').on('click', function () {
        $(this).parent().hide();
        $('.unsubscribeEmail').val('');
    });



    function unsubscribe(email) {
        var data = {
            activeClient: $('.activeClient').val(),
            language: $('.language').val(),
            solutionID: $('.solutionID').val(),
            unsubscribeEmailAdress: email
        };
        $.ajax({
            url: emailAlertsManagerURL,
            type: "POST",
            dataType: "json",
            cache: false,
            data: data,
            success: function (content) {
                checkReturnValues(content);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(ajaxOptions);
                console.log(thrownError);
            }
        });
    }




    $('.buttonRegister').on('click', function () {

        var registerEmailAddress = $('#registerEmailAddress').val();
        var registerFirstName = $('#registerFirstName').val();
        var registerSurName = $('#registerSurName').val();
        var registerCompany = $('#registerCompany').val();
        var sharePriceQuoteDailyOpenRule = [];
        var sharePriceQuoteWeeklyRule = [];
        var releaseCategoriesArr = [];
        var sharePriceQuoteThresshold = [];
        var sharePriceQuotePercentageRule = [];

        // Validate requests
        var check_registerEmailAddress = true;
        var check_registerFirstName = true;
        var check_registerSurName = true;
        var check_registerCompany = true;
        var check_shareReleases = false;
        var check_sharePriceQuote = false;

        var isCheckedSharePriceOpen = false;
        var isCheckedSharePriceWeekly = false;
        var isCheckedSharePriceThresshold = false;
        var isCheckedSharePricePercentage = false;
        var isCheckedReleases = false;
        

        // Simple email validation
        if (registerEmailAddress.indexOf("@") == -1) {
            check_registerEmailAddress = false;
            $('#registerEmailAddress.requiredField').addClass('redBorder');
        } else if (registerEmailAddress.length < 5) {
            check_registerEmailAddress = false;
            $('#registerEmailAddress.requiredField').addClass('redBorder');
        }

        // Company validation
        if (registerCompany.length < 1) {
            $('.requiredField').addClass('redBorder');
            check_registerCompany = false;
        }
        else {
            check_registerCompany = true;
        }

        //Firstname/Surname validation

        if (registerFirstName.length < 2) {
            $('.requiredField').addClass('redBorder');
            check_registerFirstName = false;
        }
        else {
            check_registerFirstName = true;
        }

        if (registerSurName.length < 2) {
            $('.requiredField').addClass('redBorder');
            check_registerSurName = false;
        }
        else {
            check_registerSurName = true;
        }


        var postValuesTypeDelimiter = '=';
        var categoriesDelimited = ';';
        $('.listingSettings').each(function () {

            var instrumentID = $(this).attr('id');

            //
            // Categories
            //
            var releaseCategories = '';
            var count = 0;
            $(this).find('.rssFiltersSelect').each(function () {
                if ($(this).hasClass('active')) {
                    if (count > 0) {
                        releaseCategories += categoriesDelimited;
                    }
                    releaseCategories += $(this).attr('id');
                    count++;
                }
            });
            if (count == 0) {
                releaseCategories = 'false';
            } else {
                check_shareReleases = true;
                isCheckedReleases = true;
            }
            releaseCategoriesArr.push(instrumentID + postValuesTypeDelimiter + releaseCategories);
            
            //
            // Share Price Information
            //
            sharePriceQuoteDailyOpenRule.push(instrumentID + postValuesTypeDelimiter + $(this).find('.sharePriceQuoteDailyOpenRule').hasClass('selected'));
            if ($(this).find('.sharePriceQuoteDailyOpenRule').hasClass('selected')) {
                check_sharePriceQuote = true;
                isCheckedSharePriceOpen = true;
            }
            sharePriceQuoteWeeklyRule.push(instrumentID + postValuesTypeDelimiter + $(this).find('.sharePriceQuoteWeeklyRule').hasClass('selected'));
            if ($(this).find('.sharePriceQuoteWeeklyRule').hasClass('selected')) {
                check_sharePriceQuote = true;
                isCheckedSharePriceWeekly = true;
            }
            var sharePriceQuoteThressholdRuleIsActive = $(this).find('.sharePriceQuoteThressholdRuleTrigger').hasClass('selected');
            if (sharePriceQuoteThressholdRuleIsActive) {
                sharePriceQuoteThresshold.push(instrumentID + postValuesTypeDelimiter + $(this).find('#sharePriceQuoteThressholdRuleLow').val() + ';' + $(this).find('#sharePriceQuoteThressholdRuleHigh').val());
                check_sharePriceQuote = true;
                if (Number($(this).find('#sharePriceQuoteThressholdRuleLow').val()) > 0 && $(this).find('#sharePriceQuoteThressholdRuleHigh').val() > 0) {
                    isCheckedSharePriceThresshold = true;
                }
            } else {
                sharePriceQuoteThresshold.push(instrumentID + postValuesTypeDelimiter + -1 + ';' + -1);
            }
            var sharePriceQuotePercentageRuleIsActive = $(this).find('.sharePriceQuotePercentageRuleTrigger').hasClass('selected');
            if (sharePriceQuotePercentageRuleIsActive) {
                sharePriceQuotePercentageRule.push(instrumentID + postValuesTypeDelimiter + $(this).find('#sharePriceQuotePercentageRule').val());
                check_sharePriceQuote = true;
                isCheckedSharePricePercentage = true;
            } else {
                sharePriceQuotePercentageRule.push(instrumentID + postValuesTypeDelimiter + -1);
            }
        });
        
        if (!check_registerEmailAddress || !check_registerFirstName || !check_registerSurName || !check_registerCompany) {
            $('.verificationLocal .InvalidInput_RegisterEmailAddress').show();
        }

            //        else if ([isCheckedSharePriceOpen, isCheckedSharePriceWeekly, isCheckedSharePriceThresshold, isCheckedSharePricePercentage].indexOf(true) === -1) {
            //            $('.verificationLocal .InvalidInput_SharePriceQuoteOrShareReleases').show();
            //        } 
        else if ([check_sharePriceQuote, check_shareReleases].indexOf(true) === -1) {
            $('.verificationLocal .InvalidInput_SharePriceQuoteOrShareReleases').show();
        } else {
            // POST
            var data = {
                activeClient: $('.activeClient').val(),
                language: $('.language').val(),
                solutionID: $('.solutionID').val(),
                newsSourceID: $('.newsSourceID').val(),
                newsCategoryType: $('.newsCategoryType').val(),
                registerEmailAddress: registerEmailAddress,
                releaseCategories: releaseCategoriesArr,
                sharePriceQuoteDailyOpenRule: sharePriceQuoteDailyOpenRule,
                sharePriceQuoteWeeklyRule: sharePriceQuoteWeeklyRule,
                sharePriceQuoteThresshold: sharePriceQuoteThresshold,
                sharePriceQuotePercentageRule: sharePriceQuotePercentageRule
            };


            $.ajax({
                url: emailAlertsManagerURL,
                type: "POST",
                dataType: "json",
                cache: false,
                data: data,
                success: function (content) {
                    checkReturnValues(content);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(ajaxOptions);
                    console.log(thrownError);
                }
            });
        }
    });

    //$('#registerEmailAddress').val('jonas@3dview.dk'); //jonasr@q4inc.com
    //$('#registerFirstName').val('Jonas');
    //$('#registerSurName').val('Rasmussen');
    //$('#registerCompany').val('Q4');
    //$('#registerCountry').val('DK');
    

}
function clearInput() {
    $('#registerEmailAddress').val('');
    $('#registerFirstName').val('');
    $('#registerSurName').val('');
    $('.registerFirstName').removeClass('redBorder');
    $('.registerSurName').removeClass('redBorder');
    $('#registerCompany').val('');
    $('#registerCountry').val('');
    $('input.sharePriceSelect').prop('checked', false);
    $('.sharePriceSelect').removeClass('active');
    $('#sharePriceQuoteThressholdRuleLow').val('');
    $('#sharePriceQuoteThressholdRuleHigh').val('');
    $('#sharePriceQuotePercentageRule').val('');
    $('input.alertTypeSubCheckboxAll').prop('checked', false);
    $('input.rssFiltersSelect').prop('checked', false);
    //$('.listingSettings').hide();
    //$('input.listingSettingsTrigger').prop('checked', false);
    //$('.listingSettingsTrigger').removeClass('active');
    $('input#sharePriceQuoteThressholdRuleLow').val('');
    $('input#sharePriceQuoteThressholdRuleHigh').val('');
    $('input#sharePriceQuotePercentageRule').val('');
}
function checkReturnValues(data) {

    if (data.message != "") {
        switch (data.message) {

            case "UserEmailExistAndIsActive":
                $('.verificationLocal .UserEmailExistAndIsActive').show();
                //header = 'Verification';
                //paragraph = 'Email already subscribed and is activated.';
                //html = '<a class="cleanLink goToHome">Back</a>';
                break;
            case "UserEmailExistAndIsNotActived":
                $('.verificationLocal .UserEmailExistAndIsNotActived').show();
                //header = 'Verification';
                //paragraph = 'Email already subscribed but not yet activated.';
                //html = '<a class="cleanLink goToHome">Back</a>';
                break;
            case "UserCreated":
                $('.verificationLocal .UserCreated').show();
                //header = 'Verification';
                //paragraph = 'Thank you for subscribing to our email alerts. A verification email has been sent to your email address. This may take a few moments.';
                //html = '<p class="bold">Please click on the link provided in the email message to verify your information.</p>';
                break;
            case "UserEmailUnsubscribed":
                $('.verificationLocal .UserEmailUnsubscribed').show();
                clearUnsubscribeBox();
                break;
            case "UserEmailWasNotSubscribed":
                $('.verificationLocal .UserEmailWasNotSubscribed').show();
                clearUnsubscribeBox();
                break;
        }
    }
}
function clearUnsubscribeBox() {
    $('#dialogueBox_unsubscribe').hide();
    $('.unsubscribeEmail').val('');
}
$(function () {
    setInterval(function () {
        if (!toolPrepared) {
            if (typeof ($('#registerEmailAddress').html()) != 'undefined') {
                toolPrepared = true;
                prepareTool();
            }
        }
    }, 100);
});