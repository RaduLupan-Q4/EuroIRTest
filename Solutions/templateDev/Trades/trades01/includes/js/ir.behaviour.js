/* switch between tabs */
$(function () {
    console.log("test");
    $(".ul-list-tabs li").click(function () {
        debugStep("Clicked .ul-list-tabs li");
        //var cat = $(this).find('button').html().replace(' ', '');
        //debugStep("cat: " + cat);
        var cat = $(this).find('button').parent().attr('id').replace(' ', '');
        debugStep("cat: " + cat);
        $('.IRDataGroup').hide();
        $('span.minusIcon').addClass('plusIcon');
        $('span.minusIcon').removeClass('minusIcon');
        $('.IRDataGroup-vertical').hide();
        $('.category_' + cat).show();
    });

    $('ul li').click(function () {
        debugStep("Clicked ul li");
        $('ul li').removeClass('current pointer');

        $(this).addClass('current pointer');
    });

    
});
Handlebars.registerHelper('newsarticle', function (objects, options) {

    function getObjects(obj, key, val) {

        return obj;
    }

    //eventstarttime timestamp value
    var objectValue = getObjects([objects], 'key', options);
    //Format eventstattime to DD
    //var startDate = formatDateWithFormat(objectValue[0], 'DD');
    if (objectValue === null || objectValue === '' || objectValue.length == 0) return '';

    return 'http://ir.euroinvestor.com/Tools/newsArticleHTML.aspx?solutionID=1804&customerKey=AlmBrand&storyID=' + objectValue;
});
Handlebars.registerHelper('irfile', function (objects, options) {

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
    return 'https://irssl.euroinvestor.com/IR/Files/DownloadCenter/' + objectValue;
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
if (language != undefined && language == 'en') {
    $.getJSON('http://ir.euroinvestor.com/serviceengine/api/json/reply/RequestAnnouncement?lcid=2057&apiVersion=1&solutionID=1804&CustomerKey=AlmBrand&InstrumentID=100059 ', function (data) {
    //$.getJSON('http://devir.euroinvestor.com/ServiceEngine/api/json/reply/RequestNews?lcid=2057&pageNo=0&maxRows=20000&headlinesOnly=true&instrumentID=1000402&apiVersion=1&solutionID=2290&customerKey=GoAhead ', function (data) {
        var allData = data;
        console(allData);
        var source = $('#IRDataTemplate').html();
        var template = Handlebars.compile(source);
        $('#IRData').html(template(allData));

        pagination(allData);

        var selectElement = $("#period");

        $(allData).each(function () {

            var date = new Date(this.Modified); //get Modified timestamp from JSON
            var year = date.getFullYear(); //convert timestamp to year
            year = 2016;
            var newOption = '<option class="select ' + year + '" value="' + year + '">' + year + '</option>';
            selectElement.append(newOption);

            /* Hide dublicate years from select option */
            var seen = {};
            $('.select').each(function () {
                var txt = $(this).text();
                if (seen[txt])
                    $(this).remove();
                else
                    seen[txt] = true;
            });

        });
        //getJSON
        setTimeout(function () {
            removeEmptyLinks();
        }, 500);

    });

    /* get all danish data from json */
} else if (language == 'da') {
    $.getJSON('http://ir.euroinvestor.com/serviceengine/api/json/reply/RequestAnnouncement?lcid=1030&apiVersion=1&solutionID=1804&CustomerKey=AlmBrand&InstrumentID=100059 ', function (data) {
        var allData = data;

        var source = $('#IRDataTemplate').html();
        var template = Handlebars.compile(source);
        $('#IRData').html(template(allData));

        pagination(allData);

        var selectElement = $("#period");

        $(allData).each(function () {

            var date = new Date(this.Modified); //get Modified timestamp from JSON
            var year = date.getFullYear(); //convert timestamp to year
            year = 2016;
            var newOption = '<option class="select ' + year + '" value="' + year + '">' + year + '</option>';
            selectElement.append(newOption);

            /* Hide dublicate years from select option */
            var seen = {};
            $('.select').each(function () {
                var txt = $(this).text();
                if (seen[txt])
                    $(this).remove();
                else
                    seen[txt] = true;
            });

        });
        //getJSON
        setTimeout(function () {
            removeEmptyLinks();
        }, 500);
    }); 
}


/* Pagination */
$('.IRNewsPageNumber').click(function () {
    $('.IRNewsPageNumber').removeClass('active');
    $(this).addClass('active');
});
function removeEmptyLinks() {
    $('a').each(function () {
        if ($(this).attr('href') === '') {
            $(this).attr('href', 'javascript:void(0);');
            $(this).attr('class', '');
            $(this).addClass('minusIcon');
        }
    });
}
function showPage(id) {
    $('.IRNewsPageNumber').removeClass('active');
    $('.IRDataGroup').addClass('hide');

    $('.page' + id).removeClass('hide');
    $('.IRPageNumber' + id).addClass('active');
}

// Generate pagination
function pagination(allData) {

    $('.IRNewsPageNumber').remove();
    //add page number for each 10th object
    var amountOfNewsPerPage = 10;

    var pageNumber = 1;

    for (var i = 0; i < allData.length; i++) {

        if (i == 1) {
            $('.IRNewsPagination').append("<a href='javascript: onClick=showPage(" + pageNumber + ")' class='IRNewsPageNumber IRPageNumber" + pageNumber + " active'>"
                + pageNumber + "</a>");
        }

        if (i % amountOfNewsPerPage == 0 && i != 0) {
            pageNumber++;
            $('.IRNewsPagination').append("<a href='javascript: onClick=showPage(" + pageNumber + ")' class='IRNewsPageNumber IRPageNumber" + pageNumber + "'>"
                + pageNumber + "</a>");
        }
        if (i >= amountOfNewsPerPage) {
            $('#' + allData[i].Id).addClass('page' + pageNumber + ' hide');
        } else {
            $('#' + allData[i].Id).addClass('page' + pageNumber);
        }
    }
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


