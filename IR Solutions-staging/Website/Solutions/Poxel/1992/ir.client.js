var clientStyleOverwrite = new function ()
{
    this.chart_ColourMain = '#E2001A'; //0284AA
    this.chart_ColourBackground = '#F9F9F9';
    this.chart_ColourBorder = '#E5E5E5';
    this.amountOfDecimals = 2;
    this.amountOfTrades = 10;
    this.formatDate = 'DD-MMM-YYYY';
    this.formatTime = 'HH:mm';
    this.formatDateTime = 'DD-MM-YYYY HH:mm';
}
var clientRNSFilters = [
    { name: 'Acquisition', categories: 'ACQ' },
    { name: 'Annual Financial Report', categories: 'ACS' },
    { name: 'AGM Statement', categories: 'AGM' },
    { name: 'RE Agreement', categories: 'AGR' },
    { name: 'Change of Adviser', categories: 'APP' },
    { name: 'Directorate Change', categories: 'BOA' },
    { name: 'Disposal', categories: 'DIS' },
    { name: 'Holding(s) in Company', categories: 'HOL' },
    { name: 'Miscellaneous', categories: 'MSC' }
];

//function setNewsPaginationCustom()
//{
//    alert();
//    debugStep("setNewsPaginationCustom");
//    timerStart();
//    for (var page = 1; page <= globalNewsPagesInTotal; page++) {
//        $('tr.Data').removeClass('page' + page);
//    }
//    var count = 0;
//    var page = 1;
//    $('tr.Data').each(function ()
//    {
//        if (!$(this).hasClass('hide')) {
//            $(this).addClass('page' + page);
//            count++;
//        }
//        if (count == 20) {
//            count = 0;
//            page++;
//        }
//    });
//    globalNewsPagesInTotal = page;


//    var paginationHTML = "";
//    for (var i = 1; i <= globalNewsPagesInTotal; i++) {
//        paginationHTML += '<div class=\"IRNewsPageNumber IRNewsPageNumber' + i + '\">' + i + '</div>';
//    }

//    $('.CustomIRNewsPagination').html(paginationHTML);

//    timerEnd('setNewsPaginationCustom');
    
//    setNewsActivePage(1);

//    // Set Click Handler
//    $('.IRNewsPageNumber').click(function ()
//    {
//        var page = $(this).html();
//        setNewsActivePage(page);
//    });

    
//}