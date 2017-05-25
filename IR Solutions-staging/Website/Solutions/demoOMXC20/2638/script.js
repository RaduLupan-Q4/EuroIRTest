$(document).ready(function(){
    addCheckBox();
    addRadioBtn();
    addDropdowns();
    addDatePicker();
})
$( document ).ajaxStop(function() {
    addCheckBox();
    addRadioBtn();
    addDropdowns();
    addDatePicker();
});
//checkbox ----------------------------------------------------
function addCheckBox() {
    const checkBox = $("input[type=checkbox]");
    checkBox.each(function(){
    const cb = $(this);
    cb.css('display', 'none');
    $('<span class="checkBox"></span>').insertBefore(cb);
    })
    $("input[type=checkbox]").on('change', function(){
        $(this).is(':checked') ? $(this).prev().addClass('checked') : $(this).prev().removeClass('checked');
    })
    $(document).on('click',function(){
        $('.checkBox').each(function(){
            if($(this).next().prop('checked')){
                $(this).addClass('checked')
            }else{
                $(this).removeClass('checked')
            }
        })
    })
}
//radio -------------------------------------------------------
function addRadioBtn(){
    const radioBtn = $("input[type=radio]");
	radioBtn.each(function(){
		const rb = $(this);
		rb.css('display', 'none');
		$('<span class="radioBtn"></span>').insertBefore(rb);
	})
	$("input[type=radio]").on('change', function(){
		const n = $(this).attr('name');
		$("input[type=radio]").each(function(){
			($(this).attr('name') == n ) ? $(this).prev().removeClass('checked') : 0;
		})
		$(this).is(':checked') ? $(this).prev().addClass('checked') : $(this).prev().removeClass('checked');
	})
    $(document).on('click',function(){
        $('.radioBtn').each(function(){
            if($(this).next().prop('checked')){
                $(this).addClass('checked')
            }else{
                $(this).removeClass('checked')
            }
        })
    })
}
//dropdown ----------------------------------------------------
function addDropdowns(){
    $('select').each(function(){
    	let dd = $(this);
    	$('<div class="dropdown"></div>').insertBefore(dd);
    	dd.prev().css({'width': dd.width()+8+'px', 'display': dd.css('display')})
    	dd.prev().append('<span>' + $(this).find(':selected').text() + '</span>');
    	dd.prev().append('<ul class="select_inner"></ul>');
        dd.find('option').each(function(){
            dd.prev().children('.select_inner').append('<li data-sel="' + $(this).val() + '">' + $(this).text() + '</li>');
        })
        dd.css('display', 'none');
    })
    $('.dropdown .select_inner').on('click', 'li', function (e) {
        const cur = $(this).data('sel');
        $(this).parent().parent().children('span').text($(this).text());
        $(this).parent().parent().next().children().removeAttr('selected');
        $(this).parent().parent().next().children('[value="' + cur + '"]').attr('selected', 'selected');
        $(this).parent().slideUp('fast');
        e.stopPropagation();
    })
    $('.dropdown').on('click', function (e) {
        $('.dropdown .select_inner').each(function(){
            $(this).css('display' , 'none');
        })
        e.stopPropagation();
        $(this).children('.select_inner').slideToggle('fast');
    })
    $('select').on('change', function(){
        const val = $(this).val();
        console.log(val);
        const valSel = $(this).prev()
        $(this).prev().children('.select_inner').find('li').each(function(){
            if($(this).data('set') == val)
                valSel.text($(this).text())
        })
    })
    $(document).on('click', function(e){
        $('.dropdown .select_inner').slideUp('fast');
    })
}
//calendar ----------------------------------------------------
function addDatePicker(){
	try{$( ".datepicker" ).datepicker();}catch(err){}
}
