
setTimeout(function () {
    $('#alertTypeSubmitBox_register').click(function () {
        $('.semiTransparantOverlay ,#dialogueBox_register').css('display', 'block');
    });
    $('.closeBox').click(function () {
        $('.semiTransparantOverlay ,#dialogueBox_register').css('display', 'none');
    }); +
    $('#alertTypeSubmitBox_unsubscribe').click(function () {
        $('.semiTransparantOverlay ,#dialogueBox_register').css('display', 'none');
    });

    $('#alertTypeSubmitBox_unsubscribe').click(function () {
        $('.semiTransparantOverlay ,#dialogueBox_unsubscribe').css('display', 'block');
    });
    $('.closeBox').click(function () {
        $('.semiTransparantOverlay ,.subPageLoginConfirm').css('display', 'none');
    });
    $('#alertTypeSubmitBox_unsubscribeConfirm').click(function () {
        $('.semiTransparantOverlay ,#dialogueBox_unsubscribe').css('display', 'none');
    });

    $("#alertType_allNewsTypes").change(function () {
        if (this.checked) {
            $(this).parent().find('.alertTypeSubCheckbox').prop('checked', true);
        } else {
            $(this).parent().find('.alertTypeSubCheckbox').prop('checked', false);
        }
    });

    $('.formLogin').click(function () {
        $('.semiTransparantOverlay ,#dialogueBox_unsubscribe').css('display', 'block');
        console.log('lightbox hidden7');
    });
    $('.closeBox').click(function () {
        $('.semiTransparantOverlay ,.pageVerification').css('display', 'none');
        console.log('lightbox hidden8');
    });
    $('.registrationLightBox .closeBox').click(function () {
        $('.subPageLogin').css('display', 'block');
        console.log('lightbox hidden9');
    });
    $('.subPageLoginConfirm .closeBox').click(function () {
        $('.subPageLogin').css('display', 'block');
        console.log('lightbox hidden9');
    });
    

   

}, 400);


