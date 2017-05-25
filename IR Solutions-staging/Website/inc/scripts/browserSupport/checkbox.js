
$(document).ready(function () {

    setTimeout(function () {
        
            $('.checkbox').click(function ()
            {                
                if ($(this).attr('id') == 'allRNSnews') {

                    if ($(this).hasClass('checked')) {
                        $('.checkbox').removeClass('checked');
                    } else {
                      
                        $('.checkbox').addClass('checked');
                        
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
        
    }, 1000);
});