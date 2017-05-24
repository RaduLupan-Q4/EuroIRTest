Handlebars.registerHelper('newsarticle', function (objects, options) {

    function getObjects(obj, key, val) {
        return obj;
    }


    //eventstarttime timestamp value
    var objectValue = getObjects([objects], 'key', options);
    //Format eventstattime to DD
    //var startDate = formatDateWithFormat(objectValue[0], 'DD');
    if (objectValue === null || objectValue === '' || objectValue.length == 0) return '';
    return 'newsArticle.aspx?storyid=' + objectValue;
});
Handlebars.registerHelper('irfile', function (objects, options, storyId) {

    function getObjects(obj, key, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(getObjects(obj[i], key, val));
            } else if (i == key && obj[key] == val) {
                return obj['value'];
            }
        }        
        return objects;
    }

    //eventstarttime timestamp value
    var objectValue = getObjects([objects], 'key', options);
    
    //Format eventstattime to DD
    //var startDate = formatDateWithFormat(objectValue[0], 'DD');
    if (objectValue === null || objectValue.toString() === '' || objectValue.length == 0) return '';
    return "https://irssl.euroinvestor.com/IR/Files/DownloadCenter/"+storyId+"/"+ objectValue;
    
});

Handlebars.registerHelper('clean', function (objects, options) {

    function getObjects(obj, key, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(getObjects(obj[i], key, val));
            } else if (i == key && obj[key] == val) {
                return obj['value'];
            }
        }

        return objects;
    }


    var objectValue = getObjects([objects], 'key', options);
    if (objectValue === null || objectValue === '' || objectValue.length == 0) return '';
    if (options === 'announcementtype') {
        return objectValue[0].replace(' ', '');
    }
    return objectValue;
});

function showCategory(category) {
    $('.IRDataGroup').hide();
    $('.category_' + category).show();

}

Handlebars.registerHelper('showDateWithFormat', function (timestamp, format) {

    var date = {
        utc: moment(timestamp).format('YYYY-MM-DD HH:mm'),
        offset: -720
    }
    var returnDate = moment.utc(date.utc).zone(date.offset).format('MM/DD/YYYY h:mm A');

    return formatDateWithFormat(returnDate, format);
    //return moment(timestamp).format(format);
});

// Get Language Parameter
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};


function convertTimezone(timestamp) {
    var date;
    if (new Date() < '2016-03-27 02-00' && new Date() < '2016-04-02 02-00') {
        date = {
            utc: moment(timestamp).format('YYYY-MM-DD HH:mm'),
            offset: -640
        }
    } else {
        date = {
            utc: moment(timestamp).format('YYYY-MM-DD HH:mm'),
            offset: -720
        }
    }
    return returnDate = moment.utc(date.utc).zone(date.offset).format('MM/DD/YYYY h:mm A');
}

function convertTimestamp(allData) {
    for (var i = 0; i < allData.data.length; i++) {
        allData.data[i].startTime = convertTimezone(allData.data[i].startTime);
        for (var j = 0; j < allData.data[i].keyValueSet.length; j++) {
            if (allData.data[i].keyValueSet[j].key === 'eventstarttime' || allData.data[i].keyValueSet[j].key === 'eventendtime') {
                allData.data[i].keyValueSet[j].value = convertTimezone(allData.data[i].keyValueSet[j].value);
            }
        }
    }
}



/* detect language */
var language = '';
console.log('language detector begin');

try {
    language = getUrlParameter('language');
    console.log('language is:' + language);
}
catch (err) {
    console.log('error');
}
/* get all english data from json */
if (language == undefined || language == 'en') {
    var amountOfNewsPerPage = clientStyleOverwrite.amountOfNewsPerPage;

    //only get 3 row
    var amountOfRows = 3;
    $.getJSON('https://ir.euroinvestor.com/ServiceEngine/api/json/reply/RequestAnnouncementType?apiversion=1&lcid=1033&customerKey=pushpay&solutionID=2368&MaxRows=' + amountOfRows + '&pageno=0&instrumentid=1000524&SourceId=1017', function (data) {
        var allData = data;

        var source = $('#IRDataTemplate').html();
        var template = Handlebars.compile(source);
        $('#IRData').html(template(allData));

        convertTimestamp(allData);


        

        //getJSON
        setTimeout(function () {
            removeEmptyLinks();
        }, 500);

    });

    /* get all danish data from json */
    //} else if (language == 'da') {
    //    console.log("da");

    //    $.getJSON('http://ir.euroinvestor.com/serviceengine/api/json/reply/RequestAnnouncement?lcid=1030&apiVersion=1&solutionID=1804&CustomerKey=AlmBrand&InstrumentID=100059 ', function (data) {
    //        var allData = data;
    //        var source = $('#IRDataTemplate').html();
    //        var template = Handlebars.compile(source);
    //        $('#IRData').html(template(allData));

    //        pagination(allData);

    //        //var selectElement = $("#period");

    //        //$(allData).each(function () {

    //        //    var date = new Date(this.Modified); //get Modified timestamp from JSON
    //        //    var year = date.getFullYear(); //convert timestamp to year
    //        //    year = 2016;
    //        //    var newOption = '<option class="select ' + year + '" value="' + year + '">' + year + '</option>';
    //        //    selectElement.append(newOption);

    //        //    /* Hide dublicate years from select option */
    //        //    var seen = {};
    //        //    $('.select').each(function () {
    //        //        var txt = $(this).text();
    //        //        if (seen[txt])
    //        //            $(this).remove();
    //        //        else
    //        //            seen[txt] = true;
    //        //    });

    //        //});
    //        //getJSON
    //        setTimeout(function () {
    //            removeEmptyLinks();
    //        }, 500);
    //    }); 
}



function removeEmptyLinks() {
    $('a').each(function () {
        if ($(this).attr('href') === '') {
            $(this).attr('href', 'javascript:void(0);');
            $(this).attr('class', '');
            $(this).addClass('minusIcon');
        }
    });
}

/* Pagination */
//$('.IRNewsPageNumber').click(function () {
//    $('.IRNewsPageNumber').removeClass('active');
//    $(this).addClass('active');
//});



// Generate pagination
function pagination(allData) {

    $('.IRNewsPageNumber').remove();
    //add page number for each 10th object
    var currentPage = '.IRPageNumber' + 1;
    var pageNumber = 1;
    var maxPagesToShow = 5;
    var data = allData.data;

    for (var i = 0; i < data.length; i++) {
        if (i == 0) {
            $('.IRNewsPagination').append("<a href='javascript: onClick=showPage(" + pageNumber + ")' class='IRNewsPageNumber IRPageNumber" + pageNumber + " active'>"
                + pageNumber + "</a>");
        }
        if (i % amountOfNewsPerPage == 0 && i != 0) {
            pageNumber++;            
                $('.IRNewsPagination').append("<a href='javascript: onClick=showPage(" + pageNumber + ")' class='IRNewsPageNumber IRPageNumber" + pageNumber + "' '>"
                + pageNumber + "</a>");
                if (pageNumber > maxPagesToShow) {
                    $('.IRPageNumber' + pageNumber + '').css('display', 'none');
                }
        }
        if (i >= amountOfNewsPerPage) {
            $('#' + data[i].storyId).addClass('page' + pageNumber + ' hide');
        } else {
            $('#' + data[i].storyId).addClass('page' + pageNumber);
        }
    }
    if (pageNumber > 1 && pageNumber >=5) {
        $('.IRNewsPagination').prepend("<a href='javascript: onClick=showPage(" + (1) + ")' class='IRNewsPageNumber prevPage' style='display:none'>Prev</a>");
        $('.IRNewsPagination').append("<a href='javascript: onClick=showPage(" + (2) + ")' class='IRNewsPageNumber nextPage'>Next</a>");
    }
}

function showPage(page) {
    //var currentPage = '.IRPageNumber' + id;
    
    var amountOfPages = $('*[class*="IRPageNumber"]').length;
    var prevPage = (page - 1);
    var nextPage = (page + 1);
    var maxPage = (page + 2);
    var minPage = (page - 2);
 
    if (minPage == 0) {
        $('.IRNewsPageNumber').css('display', 'none');
        $('.IRPageNumber' + prevPage + '').css('display', 'inline-block');
        $('.IRPageNumber' + page + '').css('display', 'inline-block');
        $('.IRPageNumber3').css('display', 'inline-block');
        $('.IRPageNumber4').css('display', 'inline-block');
        $('.IRPageNumber5').css('display', 'inline-block');
    }
    if ((amountOfPages -maxPage) == 0) {
        $('.IRNewsPageNumber').css('display', 'none');
        $('.IRPageNumber' + page + '').css('display', 'inline-block');
        $('.IRPageNumber' + prevPage + '').css('display', 'inline-block');
        $('.IRPageNumber' + minPage + '').css('display', 'inline-block');
        $('.IRPageNumber' + (page+3) + '').css('display', 'inline-block');
        $('.IRPageNumber' + nextPage + '').css('display', 'inline-block');
        $('.IRPageNumber' + maxPage + '').css('display', 'inline-block');
    }
    if ((amountOfPages - maxPage) < 0) {
        $('.IRNewsPageNumber').css('display', 'none');
        $('.IRPageNumber' + page + '').css('display', 'inline-block');
        $('.IRPageNumber' + prevPage + '').css('display', 'inline-block');
        $('.IRPageNumber' + minPage + '').css('display', 'inline-block');
        $('.IRPageNumber' + nextPage + '').css('display', 'inline-block');
        $('.IRPageNumber' + maxPage + '').css('display', 'inline-block');
        if ((amountOfPages - maxPage) == -1) {           
            $('.IRPageNumber' + (page - 3) + '').css('display', 'inline-block');          
        } else {          
            $('.IRPageNumber' + (page - 3) + '').css('display', 'inline-block');
            $('.IRPageNumber' + (page - 4) + '').css('display', 'inline-block');
        }      
    }
    if (minPage > 0 && amountOfPages > maxPage) {
        $('.IRNewsPageNumber').css('display', 'none');
        $('.IRPageNumber' + page + '').css('display', 'inline-block');
        $('.IRPageNumber' + prevPage + '').css('display', 'inline-block');
        $('.IRPageNumber' + minPage + '').css('display', 'inline-block');
        $('.IRPageNumber' + nextPage + '').css('display', 'inline-block');
        $('.IRPageNumber' + maxPage + '').css('display', 'inline-block');
    }

    //show/hide prev and next buttons
        if (page > 1) {
            $('a.prevPage').attr('href', 'javascript: onClick=showPage(' + (prevPage) + ')');
            $('.prevPage').css('display', 'inline-block');
        } else if (page == 1) {
            $('.prevPage').css('display', 'none');
        }
        if (page == amountOfPages) {
            $('.nextPage').css('display', 'none');
        } else {
            $('.nextPage').css('display', 'inline-block');
            $('a.nextPage').attr('href', 'javascript: onClick=showPage(' + (nextPage) + ')');
        }
        
    //hide and show data
    $('.IRDataGroup').addClass('hide');
    $('.page' + page).removeClass('hide');
    //switch active class in footer
    $('.IRNewsPageNumber').removeClass('active');
    $('.IRPageNumber' + page).addClass('active');
}

//show selected period (ex. 2015) and generate pagination
//function selectPeriod() {
//    $.getJSON('testJson.json', function (data) {
//        var selectedPeriod = $("#period").val();

//        var selectedPeriodArray = data.filter(function (item) {
//            if (new Date(item.Modified).getFullYear() == selectedPeriod) return item;
//        });
//        var source = $('#IRDataTemplate').html();
//        var template = Handlebars.compile(source);
//        $('#IRData').html(template(selectedPeriodArray));

//        pagination(selectedPeriodArray);
//    })
//};


$(document).on("click", '.responsive-flip tr', function (e) {
    e.stopPropagation();
    var trid = $(this).closest('tr').attr('id');
    $(".toggle" + trid).toggle('slow');
    $(this).find('span').toggleClass('plusIcon minusIcon')
});


