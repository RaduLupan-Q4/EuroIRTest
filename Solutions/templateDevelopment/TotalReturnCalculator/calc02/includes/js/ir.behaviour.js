/* switch between tabs */
var allData;
var filteredData = new Object();

$(function () {


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

        //hide columns based on toolID
        showOrHideColumns(cat);

        // pagination(filteredData);
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
    return "https://irssl.euroinvestor.com/IR/Files/ClientAdmin/DownloadCenter/" + storyId + "/" + objectValue[0].replace("\\", "/");
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


var activeToolID = $('.current').attr('id');

/* get all english data from json */
if (language == undefined || language == 'en') {
    $.getJSON('http://ir.euroinvestor.com/serviceengine/api/json/reply/RequestAnnouncement?lcid=2057&apiVersion=1&solutionID=1804&CustomerKey=AlmBrand&InstrumentID=100059 ', function (data) {
        allData = data;

        var latestPublishYear = getLastPublishYear(allData, "publishTime");
        var thisYear = new Date(latestPublishYear).getFullYear();
        var startDate = new Date(thisYear + "/01/01");
        var endDate = new Date(thisYear + "/12/31");
        var dataThisYear = filterData(startDate, endDate, allData.data);
        filteredData.data = dataThisYear;


        var source = $('#IRDataTemplate').html();
        var template = Handlebars.compile(source);
        $('#IRData').html(template(filteredData));

        showCategory(activeToolID);

        //pagination(allData);

        var selectElement = $("#period");

        $(allData.data).each(function () {

            var date = new Date(this.publishTime); //get Modified timestamp from JSON

            var year = date.getFullYear(); //convert timestamp to year
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
            addHttpToHrefs();
        }, 500);

    });

    /* get all danish data from json */
} else if (language == 'da') {
    $.getJSON('http://ir.euroinvestor.com/serviceengine/api/json/reply/RequestAnnouncement?lcid=1030&apiVersion=1&solutionID=1804&CustomerKey=AlmBrand&InstrumentID=100059 ', function (data) {
        allData = data;

        var latestPublishYear = getLastPublishYear(allData, "publishTime");
        var thisYear = new Date(latestPublishYear).getFullYear();
        var startDate = new Date(thisYear + "/01/01");
        var endDate = new Date(thisYear + "/12/31");
        var dataThisYear = filterData(startDate, endDate, allData.data);
        filteredData.data = dataThisYear;

        var source = $('#IRDataTemplate').html();
        var template = Handlebars.compile(source);
        $('#IRData').html(template(filteredData));

        showCategory(activeToolID);
        //pagination(filteredData);

        var selectElement = $("#period");

        $(allData.data).each(function () {

            var date = new Date(this.publishTime); //get Modified timestamp from JSON
            var year = date.getFullYear(); //convert timestamp to year

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
            addHttpToHrefs();
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
        if ($(this).attr('href') === '' || $(this).attr('href') === " ") {
            $(this).attr('href', 'javascript:void(0);');
            $(this).attr('class', '');
            $(this).addClass('minusIcon');
        }
    });
    addHttpToHref();
}

function addHttpToHref() {

}

function showPage(id) {
    $('.IRNewsPageNumber').removeClass('active');
    $('.IRDataGroup').addClass('hide');

    $('.page' + id).removeClass('hide');
    $('.IRPageNumber' + id).addClass('active');
}

// Generate pagination
function pagination(data) {
    allData = data.data;

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
        if ($('#' + allData[i].storyId).css('display') == 'none') {
            $('#' + allData[i].storyId).removeClass('page' + pageNumber)
        }

        else if (i >= amountOfNewsPerPage) {
            $('#' + allData[i].storyId).addClass('page' + pageNumber + ' hide');
        }

        else {
            $('#' + allData[i].storyId).addClass('page' + pageNumber);
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
function selectPeriod() {
    var selectedPeriod = $("#period").val();

    var startDate = new Date(selectedPeriod + "/01/01");
    var endDate = new Date(selectedPeriod + "/12/31");

    var filteredData = new Object();
    var dataThisYear = filterData(startDate, endDate, allData.data);
    filteredData.data = dataThisYear;

    var source = $('#IRDataTemplate').html();
    var template = Handlebars.compile(source);
    $('#IRData').html(template(filteredData));

    //pagination(filteredData);


    var translationsApplied = false;

    function prepareTranslations() {

        if (!translationsApplied) {

            if (typeof ($('.IRData.press')) != 'undefined') {

                debugStep("applyTranslations()");

                $.when(requestTranslationsData)

                    .done(function (TranslationsData) {

                        if (globalActiveLanguage == "da") {
                            $('.titleResultAnnouncements').html("Hel-/delårsrapporter");
                            $('.titleInvestorPresentations').html("Investorpræsentationer");
                            $('.titleAnnouncement').html("Meddelelse");
                            $('.titleInvestorPresentation').html("Præsentation");
                            $('.titleWebcast').html("Webcast");
                            $('.titleKeyFigures').html("Nøgletal");
                        } else {
                            $('.titleResultAnnouncements').html("Result announcements");
                            $('.titleInvestorPresentations').html("Investor Presentations");
                            $('.titleAnnouncement').html("Announcement");
                            $('.titleInvestorPresentation').html("Presentation");
                            $('.titleWebcast').html("Webcast");
                            $('.titleKeyFigures').html("Financial figures");
                        }
                        $('.titleFinancialData').html(TranslationsData.data.t_news);
                        $('.titleReport').html(TranslationsData.data.t_report);
                        //$('.titleCorporateAnnouncements').html(TranslationsData.data.t_corporate_announcements);
                    }
                )
                translationsApplied = true;
            }
        }
    }
    $(function () {
        setInterval(function () {
            prepareTranslations();
            removeEmptyLinks();
            addHttpToHrefs();
        }, 200);
    });

    var cat = $('.current').attr('id');
    showCategory(cat);
    showOrHideColumns(cat);
}

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

function showOrHideColumns(cat) {
    if (cat == 69) {
        $('.titleAnnouncement, .titleReport, .titleWebcast, .titleKeyFigures').hide();
        $('.dataAnnouncement, .dataReport, .dataWebcast, .dataKeyFigures').hide();
    } else {
        $('.titleAnnouncement, .titleReport, .titleWebcast, .titleKeyFigures').show();
        $('.dataAnnouncement, .dataReport, .dataWebcast, .dataKeyFigures').show();
    }
}
//get the latest puplishTime year from json array
function getLastPublishYear(data, prop) {
    var max;
    var arr = data.data;
    for (var i = 0 ; i < arr.length ; i++) {
        if (!max || parseInt(arr[i][prop]) > parseInt(max[prop]))
            max = arr[i].publishTime;
    }
    return max;
}

function addHttpToHrefs() {
    $('a:not([href^="http://"]):not([href^="https://"])').each(function () {
        $(this).attr('href', 'http://' + $(this).attr('href'));
    })
}