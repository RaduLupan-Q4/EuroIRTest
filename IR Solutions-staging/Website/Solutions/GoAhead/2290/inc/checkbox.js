$(function ()
{
    $('.checkboxRNSFilter').click(function ()
    {
        if ($(this).attr('id') == 'allRNSnews') {
            if ($(this).hasClass('checked')) {
                $('.checkboxRNSFilter').removeClass('checked');
            } else {
                $('.checkboxRNSFilter').addClass('checked');
            }
        } else {
            if ($(this).hasClass('checked')) {

                $('#allRNSnews').removeClass('checked');
                $(this).removeClass('checked');
            } else {
                $(this).addClass('checked');
            }
        }
    });
    $('#ReleaseRSS').click(function () {
        if ($(this).hasClass('checked')) {
            $(this).removeClass('checked');
        } else {
            $(this).addClass('checked');
        }
    });
});


