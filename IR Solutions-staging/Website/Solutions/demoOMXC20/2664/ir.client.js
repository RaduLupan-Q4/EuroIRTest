var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#555';
    this.chart_ColourBackground = '#fff';
    this.chart_ColourBorder = '#EEEEEE';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 100;
    this.formatDate = 'DD-MM-YYYY';
    this.formatTime = "HH:mm:ss";
    this.formatDateTime = "DD-MM-YYYY HH:mm";
    this.amountOfNewsPerPage = 10; // 20 er default
    this.lookup_ChartYAxisInsideOutside = 'outside';
    this.calc_ChartYAxisInsideOutside = 'outside';
    this.miniquote_ChartYAxisInsideOutside = 'outside';
    this.flipDecimalAndThousandSeparators = true;
}


var clientNasdaqOMXNordicFilters_EN = [{ name: 'Reports', categories: 'Quarterly report;Half Year financial;Annual report/ annua;Half Year financial' }, { name: 'Company Announcement', categories: 'Company Announcement' }, { name: 'Insiders Dealing', categories: 'Insiders dealing' }, { name: 'Financial Calendar', categories: 'Financial Calendar' }, { name: 'AGM Results', categories: 'Decisions of annual' }, { name: 'General Meeting Notice', categories: 'Notice to convene an' }, { name: 'Articles of Association', categories: 'Articles of associat' }];
var clientNasdaqOMXNordicFilters_DA = [{ name: 'Rapporter', categories: 'Kvartalsrapport;Halvårsrapport;Årsrapport;Halvårsrapport' }, { name: 'Selskabsmeddelelser', categories: 'Selskabsmeddelelse' }, { name: 'Insideres handler', categories: 'Insideres handler' }, { name: 'Finanskalender', categories: 'Finanskalender' }, { name: 'Referat fra generalforsamling', categories: 'Referat fra generalf' }, { name: 'Indkaldelse til generalforsamling', categories: 'Indkaldelse til gene' }, { name: 'Selskabsvedtægter', categories: 'Selskabsvedtægter' }];


$( document ).ajaxStop(function() {
    const checkBox = $("input[type=checkbox]")
    const radioBtn = $("input[type=radio]")
//checkbox ----------------------------------------------------
    checkBox.each(function(){
        const cb = $(this);
        cb.css('display', 'none');
        $('<span class="checkBox"></span>').insertBefore(cb);
    })
    $("input[type=checkbox]").on('change', function(){
        $(this).is(':checked') ? $(this).prev().addClass('checked') : $(this).prev().removeClass('checked');
    })
//radio -------------------------------------------------------
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
//dropdown ----------------------------------------------------
    $('select').each(function(){
        let dd = $(this);
        let sty = $(this).css('display');
        $('<div class="dropdown"></div>').insertBefore(dd);
        dd.prev().css({'display': sty})
        dd.prev().append('<span>' + $(this).find(':selected').text() + '</span>');
        dd.prev().append('<ul class="select_inner"></ul>');
        dd.find('option').each(function(){
            dd.prev().children('.select_inner').append('<li data-sel="' + $(this).val() + '">' + $(this).text() + '</li>');
        });
        dd.css('display', 'none');
    })
    $('.dropdown ul').on('click', 'li', function (e) {
        const cur = $(this).data('sel');
        $(this).parent().parent().children('span').text($(this).text());
        $(this).parent().parent().next().children().removeAttr('selected');
        $(this).parent().parent().next().children('[value="' + cur + '"]').attr('selected', 'selected');
    });
    $('.dropdown').on('click', function (e) {
        e.stopPropagation();
        $(this).children('ul').slideToggle('fast');
       
    });
    $(document).on('click', function(e){
        $('.dropdown ul').slideUp('fast');
    })

//calendar ----------------------------------------------------

try{
    $( ".datepicker" ).datepicker();
}
catch(err){
}
})