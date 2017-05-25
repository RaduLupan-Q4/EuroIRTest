/* switch between tabs */
$(function () {
    var allData;

    $(".ul-list-tabs").on('click', 'li', function () {

        var cat = this.id;
        showCategory(cat);

        //$('.IRDataGroup').hide();
        //$('span.minusIcon').addClass('plusIcon');
        //$('span.minusIcon').removeClass('minusIcon');
        //$('.IRDataGroup-vertical').hide();
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

    return '/Solutions/AlmBrand/1804/newsArticleHTML.aspx?solutionID=1804&customerKey=AlmBrand&storyID=' + objectValue;
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
    return "https://irssl.euroinvestor.com/IR/Files/ClientAdmin/DownloadCenter/" + storyId + "/" + objectValue;
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

    startDate = new Date(category + "/01/01");
    endDate = new Date(category + "/12/31");

    var filteredData = new Object();
    var dataThisYear = filterData(startDate, endDate, allData.data);
    filteredData.data = dataThisYear;

    var source = $('#IRDataTemplate').html();
    var template = Handlebars.compile(source);
    $('#IRData').html(template(filteredData));
    pagination(filteredData.data);
    //$('.IRDataGroup').hide();
    //$('.category_' + category).show();

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
if (language == undefined || language == 'en') {
    var instrumentID = 1000414;
    var solutionID = 2292;
    var customerKey = "GemDiamonds";


    $.getJSON('http://ir.euroinvestor.com/serviceengine/api/json/reply/RequestAnnouncement?lcid=2057&apiVersion=1&solutionID=' + solutionID + '&CustomerKey=' + customerKey + '&InstrumentID=' + instrumentID + ' ', function (data) {
        allData = data;

        var period = new Date().getFullYear();
        startDate = new Date(period + "/01/01");
        endDate = new Date(period + "/12/31");

        //var filteredData = new Object();
        //var dataThisYear = filterData(startDate, endDate, allData.data);
        //filteredData.data = dataThisYear;

        //var source = $('#IRDataTemplate').html();
        //var template = Handlebars.compile(source);
        //$('#IRData').html(template(allData));

        showCategory(period);

        var allYears = [];

        $(allData.data).each(function () {

            var date = new Date(this.publishTime); //get published timestamp from JSON
            var year = date.getFullYear(); //convert timestamp to year
            allYears.push(year);
        });
        //remove dublicate years from array
        var allYearsTabs = unique(allYears);

        function unique(list) {
            var result = [];
            $.each(list, function (i, e) {
                if ($.inArray(e, result) == -1) result.push(e);
            });
            return result;
        }

        //populate tabs by year
        for (var j = 0; j < allYearsTabs.length; j++) {
            $('ul.list_reset.ul-list-tabs').append('<li id=' + allYearsTabs[j] + ' class="li-tab"><button  class="titleResultAnnouncements">' + allYearsTabs[j] + '</button></li>');
        }

        //getJSON
        setTimeout(function () {
            removeEmptyLinks();
        }, 500);

    });

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
                $('#' + allData[i].storyId).addClass('page' + pageNumber + ' hide');
            } else {
                $('#' + allData[i].storyId).addClass('page' + pageNumber);
            }
            if (pageNumber <= 1) {
                $('.IRNewsPageNumber').css('display', 'none');
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


    //filter data by selected period
    function filterData(startDate, endDate, dataArray) {
        var filteredData = dataArray.filter(function (item) {

            if (new Date(item.publishTime) >= startDate && new Date(item.publishTime) <= endDate) {
                return item;
            }
        });
        return filteredData;
    }
}

