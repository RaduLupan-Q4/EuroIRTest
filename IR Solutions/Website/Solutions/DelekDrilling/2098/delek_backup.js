
setTimeout(function () {
    $('#alertTypeSubmitBox_register').click(function () {
        $('.transparantOverlay ,#dialogueBox_register').css('display', 'block');
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