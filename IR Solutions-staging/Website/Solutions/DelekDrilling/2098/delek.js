
setTimeout(function () {
    $('#alertTypeSubmitBox_register').click(function (e) {
        $('.transparantOverlay ,#dialogueBox_register').css('display', 'block');
        
        var emailAlertsManagerURL = '';
        var pathSplit = location.href.split("/");
        var folderDepth = pathSplit.length - pathSplit.indexOf("ir");
        folderDepth = folderDepth;
        for (var i = 0; i <= folderDepth; i++) {
            emailAlertsManagerURL += '../';
        }
        emailAlertsManagerURL += 'Tools/EmailAlertsWithPush/manualHandleEmailSubscriptions.aspx?ts=' + (new Date).getTime(); // Accessible from asp/ir/*

        $.ajax({
            url: emailAlertsManagerURL,
            type: "POST",
            dataType: "json",
            cache: false,
            data: {
                
                register_emailAddress: $("input.register_emailAddress").val(),
                register_firstName: $("input.register_firstName").val(),
                register_surName:$("input.register_surName").val(),
                register_company: $("input.register_company").val(),
                register_country: $("input.register_country").val(),

                alertType_quoteByEmail: $("input#alertType_quoteByEmail").attr('checked'),
                alertType_weeklyStockSummary: $("input#alertType_weeklyStockSummary").attr('checked'),

                alertType_weeklyThresholdAlert: $("input#alertType_weeklyThresholdAlert").attr('checked'),
                thresshold_low: $("input#inputLabel_thresshold_low").val(),
                thresshold_high: $("input#inputLabel_thresshold_high").val(),

                alertType_percentChangeAlert: $("input#alertType_percentChangeAlert").attr('checked'),
                percentChange: $("input#percentChange").val(),

                alertType_allNewsTypes: $("input#alertType_allNewsTypes").attr('checked'),
                alertType_1: $("input.alertType_1").attr('checked'),
                alertType_2: $("input.alertType_2").attr('checked'),
                alertType_3: $("input.alertType_3").attr('checked'),
                alertType_4: $("input.alertType_4").attr('checked'),
                alertType_5: $("input.alertType_5").attr('checked'),
                alertType_6: $("input.alertType_6").attr('checked'),
                alertType_7: $("input.alertType_7").attr('checked'),

                alertType_shareDelekDrilling: $("input.alertType_shareDelekDrilling").attr('checked'),
                alertType_shareAvnerOil: $("input.alertType_shareAvnerOil").attr('checked')


            },
            success: function (content) {
                //checkReturnValues(content);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                
            }
        });



    });
    $('.closeBox').click(function () {
        $('.transparantOverlay ,#dialogueBox_register').css('display', 'none');
    }); +
    $('#alertTypeSubmitBox_unsubscribe').click(function () {
        $('.transparantOverlay ,#dialogueBox_register').css('display', 'none');
    });

    $('#alertTypeSubmitBox_unsubscribe').click(function () {
        $('.transparantOverlay ,#dialogueBox_unsubscribe').css('display', 'block');
    });
    $('.closeBox').click(function () {
        $('.transparantOverlay ,#dialogueBox_unsubscribe').css('display', 'none');
    });
    $('#alertTypeSubmitBox_unsubscribeConfirm').click(function () {
        $('.transparantOverlay ,#dialogueBox_unsubscribe').css('display', 'none');
    });

    $("#alertType_allNewsTypes").change(function () {
        if (this.checked) {
            $(this).parent().find('.alertTypeSubCheckbox').prop('checked', true);
        } else {
            $(this).parent().find('.alertTypeSubCheckbox').prop('checked', false);
        }
    });
    
},400);