var clientStyleOverwrite = new function () {
    this.chart_ColourMain = '#0284AA'; //0284AA
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
var totPages = 0;
var newsPerPage = 20;
var globalNewsPagesInTotalNew = 0;
function setNewsPaginationNew() {


    $('tr.Data').each(function (i) {
        globalNewsPagesInTotalNew = i / newsPerPage;
    });
    globalNewsPagesInTotalNew = Math.ceil(globalNewsPagesInTotalNew);
    debugStep("setNewsPaginationNew");
    //timerStart();
    for (var page = 1; page <= globalNewsPagesInTotalNew; page++) {
        $('tr.Data').removeClass('page' + page);
    }

    var count = 0;
    var page = 1;
    $('tr.Data').each(function () {
        if (true) {
            $(this).addClass('page' + page);
            count++;

        }
        if (count == newsPerPage) {
            count = 0;
            page++;


        }
    });
    globalNewsPagesInTotalNew = page;


    var paginationHTML = '<div style=\" float:left; padding-top:5px; padding-bottom:5px;\" id=\"prev\" onclick=\"prev();\"> <img src="images/left_arrow.png"> Previous News Items</div>';
    for (var i = 1; i <= globalNewsPagesInTotalNew; i++) {
        totPages = i;
        if (i == 1) {
            paginationHTML += '<div class=\"IRNewsPageNumber IRNewsPageNumber' + i + '\" style=\"display:none\">' + i + '</div>';
        } else {
            paginationHTML += '<div class=\"IRNewsPageNumber IRNewsPageNumber' + i + '\" style=\"display:none\">' + i + '</div>';
        }
    }

    paginationHTML += '<div style=\" float:right; padding-top:5px; padding-bottom:5px;\"id=\"next\" onclick=\"next();\">More Recent News Items <img src="images/right_arrow.png"></div>';


    $('.IRNewsPaginationNew').html(paginationHTML);

    //timerEnd('setNewsPaginationNew');

    setNewsActivePage(1);

    // Set Click Handler
    $('.IRNewsPageNumber').click(function () {
        var page = $(this).html();
        setNewsActivePage(page);
    });
   
    $('#topPagination #next').hide();//addClass('hidden');
    $('#footerPagination #next').hide();//addClass('hidden');
}
function getGlobalNewsPagesInTotalNew() {
    return globalNewsPagesInTotalNew;
}
var curPage = 1;
function next() {
    prevActive();
    if (curPage == 1) {
        curPage = 1;
    } else {
        curPage--;
        if (curPage == 1) {
            nextInActive();
        }
    }
    $('.IRNewsTool tbody tr').hide();//.addClass('hide');
    $('.page' + curPage).show();//.removeClass('hide');
}
function prev() {

    nextActive();
    if (curPage == totPages) {
        curPage = curPage;

    } else {
        curPage++;
        if (curPage == totPages) {
            prevInActive();
        }
    }
    $('.IRNewsTool tbody tr').hide();//.addClass('hide');
    $('.page' + curPage).show();//.removeClass('hide');
}
function prevActive() {
    $('#topPagination #prev').show();//.removeClass('hidden');
    $('#footerPagination #prev').show();//.removeClass('hidden');
}
function prevInActive() {
    $('#topPagination #prev').hide();//.addClass('hidden');
    $('#footerPagination #prev').hide();//.addClass('hidden');

}
function nextActive() {
    $('#topPagination #next').show();//removeClass('hidden');
    $('#footerPagination #next').show();//.removeClass('hidden');
}
function nextInActive() {
    $('#topPagination #next').hide();//.addClass('hidden');
    $('#footerPagination #next').hide();//.addClass('hidden');
}

function resetFilters() {
    location.reload();
}
function refreshFilters() {
 //   alert("In function");
    var container = document.getElementById("reloadID");
    var content = container.innerHTML;
   // alert(content);
    container.innerHTML = content;
}
