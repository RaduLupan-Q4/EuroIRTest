var toolSet = false;
$(function () {

    setInterval(function () {
        prepareTool();
    }, 1000);

});
function prepareTool() {
    if (!toolSet) {
        try {
            $.when(requestTranslationsData, requestStockData, requestClosePriceListingData, requestNewsDataInitial).done(function (translationsData, stockData, closePriceListingData, newsDataInitial) {

                IRNews.rawTranslationData = translationsData;
                IRNews.rawStockData = stockData;
                IRNews.rawClosePriceListingData = closePriceListingData;
                IRNews.rawNewsDataInitial = newsDataInitial;

                toolSet = true;
                IRNews.init();
            });
        }
        catch (err) {
            debugError(err);
        }
    }
}
var globalClosePriceDates = [];
var globalClosePricePrices = [];
var globalNewsEntriesTotal = 0;
var totalNewsPages = 0;
var globalIRNewsPaginationActivePage = 1;
var globalmaxIRPaginationPagesToShow = 5;
var newsProperties = {
    earliestYear: 0,
    latestYear: 0
}
var IRNews = {

    rawTranslationData: null,
    rawStockData: null,
    rawClosePriceListingData: null,
    rawNewsDataInitial: null,
    newsEntriesDataObject: null,
    newsEntriesAmount: 10,
    IRNewsPaginationApplied: false,

    init: function () {
        debugStep("IRNews init()");
        this.prepareData();
        this.initHandlebars();
        this.applyChangeClasses();
        this.prepareYearSelects();
        this.applyPagination();
        this.setNewsActivePaginationPage(1);
        this.applyPaginationClickHandlers();
        this.applySubmitClickHandler();
        this.attachCalendars();
        this.applyClickHandlersOnNewsItems();
        this.applyClickHandlersToNewsTypeTabs();

        $('.IRNewsControlElement .IRNewsYearSelects .yearSelect' + newsProperties.latestYear).click();
        $('.IRNewsControlElement .IRNewsYearSelects .yearSelect' + newsProperties.latestYear).addClass("active");
    },

    prepareData: function () {
        this.newsControlsDataObject = {
            headers: this.rawTranslationData[0].data
        };
        this.newsEntriesDataObject = {
            headers: this.rawTranslationData[0].data,
            data: this.rawNewsDataInitial[0].data,
            closePrices: this.rawClosePriceListingData[0].data[globalActiveListingIndex].data,
            stockData: this.rawStockData[0].data[globalActiveListingIndex]
        };

        $.each(this.rawClosePriceListingData[0].data[globalActiveListingIndex].data, function (index, item) {
            var timestamp = new moment(new moment(item.date).format("YYYY-MM-DD"), 'YYYY-MM-DD');
            globalClosePriceDates.push(timestamp.valueOf());
            globalClosePricePrices.push(item.closePrice);
        });

        var newsDataUpdatedArr = new Array();
        var newsDataUpdated = {
            attachments: null,
            categories: null,
            headline: null,
            htmlUrl: null,
            storyID: null,
            timestamp: null,
            closePrice: null,
            change: null,
            changePct: null
        };

        var lastClosePrice = 0;
        $.each(this.rawNewsDataInitial[0].data, function (i, item) {

            var timestamp = new moment(new moment(item.timestamp).format("YYYY-MM-DD"), 'YYYY-MM-DD');

            // find close price for timestamp
            var bestMatchIndex = getClosestClosePrice(timestamp.valueOf());
            var change = globalClosePricePrices[bestMatchIndex] - globalClosePricePrices[bestMatchIndex - 1];
            var changePct = parseFloat(((globalClosePricePrices[bestMatchIndex] - globalClosePricePrices[bestMatchIndex - 1]) / globalClosePricePrices[bestMatchIndex - 1]) * 100);

            if (timestamp.valueOf() == new moment(new moment().format("YYYY-MM-DD"), 'YYYY-MM-DD') + "]") {
                change = 0;
                changePct = 0;
            }

            if (changePct == 'Infinity') {
                changePct = 'NA';
            }

            // Create new news array.
            newsDataUpdatedArr.push({
                attachments: item.attachments,
                categories: item.categories,
                headline: item.headline,
                htmlUrl: item.htmlUrl,
                storyID: item.storyID,
                timestamp: item.timestamp,
                closePrice: globalClosePricePrices[bestMatchIndex],
                change: change,
                changePct: changePct
            });

            lastClosePrice = globalClosePricePrices[bestMatchIndex];

            // Get the earliest news year and latest news year
            if (parseInt(timestamp.format("YYYY")) < parseInt(newsProperties.earliestYear) || parseInt(newsProperties.earliestYear) == 0) {
                newsProperties.earliestYear = parseInt(timestamp.format("YYYY"));
            }
            if (parseInt(timestamp.format("YYYY")) > parseInt(newsProperties.latestYear) || parseInt(newsProperties.earliestYear) == 0) {
                newsProperties.latestYear = parseInt(timestamp.format("YYYY"));
            }


            globalNewsEntriesTotal += 1;

        });

        this.newsEntriesDataObject = {
            data: newsDataUpdatedArr,
            headers: this.rawTranslationData[0].data
        }

    },

    initHandlebars: function () {
        debugStep("IRNews initHandlebars()");
        this.drawHandlebar('IRNewsControls', this.newsControlsDataObject);
        this.drawHandlebar('IRNewsEntries', this.newsEntriesDataObject);
    },

    applyChangeClasses: function () {
        debugStep("IRNews applyChangeClasses()");

        $('.IRNewsEntries .IRDataGroup .IRDataGroupRight .IRChange').each(function () {

            //var price = parseFloat($(this).find(".IRData.ClosePriceChange").html().replace(" %", ""));
            var price = $(this).html().replace(" %", "").replace("%", "");


            if (price > 0) {
                $(this).addClass("formatColorPos");
            } else if (price == 0) {
                $(this).addClass("formatColorDef");
            } else if (price < 0) {
                $(this).addClass("formatColorNeg");
            } else {
                $(this).addClass("formatColorDef");
            }
        });
    },

    prepareYearSelects: function () {
        debugStep("IRNews prepareYearSelects()");
        var IRNewsControlElementDOM = "";
        for (var year = newsProperties.latestYear; year >= newsProperties.earliestYear; year--) {
            IRNewsControlElementDOM += "<div class=\"year yearSelect" + year + "\">" + year + "</div>";
        }

        IRNewsControlElementDOM += "";
        $('.IRNewsYearSelects').html(IRNewsControlElementDOM);

        $('.IRNewsControlElement .IRNewsYearSelects div').on('click', function () {
			var clickedYear=$(this).html();
			$('.IRNewsSelectedYear_Title').html(clickedYear);
			var newsCounter=0;
			$('.IRDataGroup').each(function(){
				if($(this).hasClass('year'+clickedYear))
				{
					newsCounter++;
				}
			});
			$('.IRNewsSelectedYear_NoReleases').find('span').html(newsCounter);
			
            IRNews.filterNewsOnYearSelected(parseInt($(this).html()));

            $('.IRNewsControlElement .IRNewsYearSelects .year').removeClass("active");
            $('.IRNewsControlElement .IRNewsYearSelects .yearSelect' + parseInt($(this).html())).addClass("active");
			updateNewsTypes();
        });

    },

    filterNewsOnYearSelected: function (year) {
        debugStep("IRNews filterNewsOnYearSelected(" + year + ")");

        // Clean up
        for (var page = 1; page <= IRNews.newsEntriesAmount; page++) {
            $('.IRNewsEntries .IRDataGroup').removeClass('page' + page);
            $('.IRNewsEntries .IRDataGroup').addClass('hide');
        }


        // Pagination
        var countTotalByYear = 0;
        var count = 0;
        var page = 1;
		
		var newsTypeSelector='';
		if($('#newsTab_bytype').hasClass('newsTabActive') || $('#newsTab_bysearch').hasClass('newsTabActive')) //If true, this takes into account for news types
		{
			newsTypeSelector='.newsFilter_showThisRelease';
		}
		var yearSelector='.year' + year;
		if(''+year==''){
			yearSelector='';
		}
		
		
        $('.IRNewsEntries .IRDataGroup'+yearSelector+newsTypeSelector).each(function () {
            $(this).addClass('page' + page);
            if (count == IRNews.newsEntriesAmount) {
                count = 0;
                page++;
            }
            count++;
            countTotalByYear++;
        });
        globalNewsEntriesTotal = countTotalByYear;
		$('div.IRNewsSelectedYear_NoReleases span').html(globalNewsEntriesTotal);
		
        var maxIRPaginationPagesToShow = globalmaxIRPaginationPagesToShow;
        var paginationDOM = "";
        paginationDOM += '<div class="IRNewsPaginationPageNew IRNewsPaginationPagePrev" style="visibility:hidden;" id="prev">Prev</div>';
        totalNewsPages = Math.ceil(globalNewsEntriesTotal / IRNews.newsEntriesAmount);

        for (var i = 1; i < totalNewsPages; i++) {
            var cssStyle = "";
            if (i > maxIRPaginationPagesToShow) {
                cssStyle = "display:none;";
            }
            paginationDOM += '<div style="' + cssStyle + '" class="IRNewsPaginationPageNew IRNewsPaginationPageNumber' + i + 'New" id="' + i + '">' + i + '</div>';
        }
        paginationDOM += '<div class="IRNewsPaginationPageNew IRNewsPaginationPageNext" id="next">Next</div>';

        $('.IRNewsPagination').html(paginationDOM);

        $('.IRNewsPaginationPageNew.IRNewsPaginationPageNumber' + globalIRNewsPaginationActivePage + 'New').addClass('active');

        IRNews.setNewsActivePaginationPage(1);

        IRNews.IRNewsPaginationApplied = false;
        IRNews.applyPaginationClickHandlers();//asdd

    },

    applyPagination: function () {

        debugStep("IRNews applyPagination()");

        // Clean up
        for (var page = 1; page <= IRNews.newsEntriesAmount; page++) {
            $('.IRNewsEntries .IRDataGroup').removeClass('page' + page);
        }

        // Pagination
        var count = 0;
        var page = 1;
        $('.IRNewsEntries .IRDataGroup').each(function () {
            $(this).addClass('page' + page);
            if (count == IRNews.newsEntriesAmount) {
                count = 0;
                page++;
            }
            count++;
        });

        var maxIRPaginationPagesToShow = 5;
        var paginationDOM = "";
        paginationDOM += '<div class="IRNewsPaginationPageNew IRNewsPaginationPagePrev" style="visibility:hidden;" id="prev">Prev</div>';
        totalNewsPages = Math.ceil(globalNewsEntriesTotal / IRNews.newsEntriesAmount);
        for (var i = 1; i < totalNewsPages; i++) {
            var cssStyle = "";
            if (i > maxIRPaginationPagesToShow) {
                cssStyle = "display:none;";
            }
            paginationDOM += '<div style="' + cssStyle + '" class="IRNewsPaginationPageNew IRNewsPaginationPageNumber' + i + 'New" id="' + i + '">' + i + '</div>';
        }
        paginationDOM += '<div class="IRNewsPaginationPageNew IRNewsPaginationPageNext" id="next">Next</div>';

        $('.IRNewsPagination').html(paginationDOM);

        $('.IRNewsPaginationPageNew.IRNewsPaginationPageNumber' + globalIRNewsPaginationActivePage + 'New').addClass('active');

    },

    setNewsActivePaginationPage: function (activePage) {

        debugStep("IRNews setNewsActivePaginationPage()");

        for (var page = 1; page <= totalNewsPages; page++) {
            $('.IRNewsEntries .IRDataGroup.page' + page).addClass('hide');
        }
        $('.IRNewsEntries .IRDataGroup.page' + activePage).removeClass('hide');

        if (globalNewsEntriesTotal <= this.newsEntriesAmount) {
            $('.IRNewsPaginationPageNext').css('visibility', 'hidden');
        }

        // Show only next when there is more than 5 pages.
        var pagesActive = Math.ceil(parseInt(globalNewsEntriesTotal) / parseInt(this.newsEntriesAmount));
        if (pagesActive < globalmaxIRPaginationPagesToShow + 1) {
            $('.IRNewsPaginationPageNext').css('visibility', 'hidden');
        }


    },

    applyPaginationClickHandlers: function () {

        debugStep("IRNews applyPaginationClickHandlers()");

        if (!IRNews.IRNewsPaginationApplied) {
            $('.IRNewsPaginationPageNew').on('click', function () {

                var clickedPage = $(this).attr('id');

                if (clickedPage == 'next') {
                    IRNews.updateIRNewsPagination((parseInt(globalIRNewsPaginationActivePage) + parseInt(1)));
                } else if (clickedPage == 'prev') {
                    IRNews.updateIRNewsPagination((parseInt(globalIRNewsPaginationActivePage) - parseInt(1)));
                } else {
                    IRNews.updateIRNewsPagination(clickedPage);
                }


            });

            IRNews.IRNewsPaginationApplied = true;
			setTimeout(function(){
				$('.IRNewsPaginationPageNumber1New').click();
			},300);
        }
    },

    updateIRNewsPagination: function (page) {

        globalIRNewsPaginationActivePage = page;

        IRNews.setNewsActivePaginationPage(page);

        var currentPage = parseInt(page);
        var minPage = (currentPage - 2);
        var maxPage = (currentPage + 2);

        $('.IRNewsPaginationPageNew').removeClass('active');
        $('.IRNewsPaginationPageNew.IRNewsPaginationPageNumber' + currentPage + 'New').addClass('active');

        if (maxPage <= 5) {
            maxPage = 5;
        } else {
            $('.IRNewsPaginationPageNext').css('visibility', 'visible');
        }
        if (minPage >= totalNewsPages - 5) {
            minPage = totalNewsPages - 5;
        } else {
            $('.IRNewsPaginationPagePrev').css('visibility', 'visible');
        }

        if (maxPage <= 5) {
            $('.IRNewsPaginationPagePrev').css('visibility', 'hidden');
        }
        if (minPage >= totalNewsPages - 5) {
            $('.IRNewsPaginationPageNext').css('visibility', 'hidden');
        }

        for (var i = 1; i < totalNewsPages; i++) {
            if (i < minPage) {
                $('.IRNewsPaginationPageNumber' + i + 'New').css('display', 'none');
            } else if (i > maxPage) {
                $('.IRNewsPaginationPageNumber' + i + 'New').css('display', 'none');
            } else {
                $('.IRNewsPaginationPageNumber' + i + 'New').css('display', 'block');
            }
        }

    },

    drawHandlebar: function (module, data) {
        debugStep("IRNews drawHandlebar()");
        if (typeof ($('.' + module).html()) != "undefined" && typeof ($('#' + module + 'Template').html()) != "undefined") {

            var source = $('#' + module + 'Template').html();
            var template = Handlebars.compile(source);
            $('.' + module).html(template(data));
        }
    },

    applySubmitClickHandler: function () {

        debugStep("IRNews applySubmitClickHandler()");

        $('.IRNewsControls .IRNewsControlsButton').click(function () {
            debugStep("IRNews clicked on IRNewsControlsButton");

            var searchText = null;
            var searchFrom = null;
            var searchTo = null;

            if (typeof ($('.searchText')) != "undefined") {

                searchText = $('.searchText').val();

            }

            if (typeof ($('.IRCalendarFrom').val()) == "string" && $('.IRCalendarFrom').val().length > 0) {
                var from = new moment($('.IRCalendarFrom').val(), 'DD/MM/YYYY');
                searchFrom = from.format("YYYY-MM-DD");
            }
            if (typeof ($('.IRCalendarTo').val()) == "string" && $('.IRCalendarTo').val().length > 0) {
                var to = new moment($('.IRCalendarTo').val(), 'DD/MM/YYYY');
                searchTo = to.format("YYYY-MM-DD");
            }

            IRNews.newsFilter(searchText, searchFrom, searchTo);
        });

    },

    newsFilter: function (searchText, searchFrom, searchTo) {
		$('.IRDataGroup').removeClass('newsFilter_showThisRelease');
		
		var textSearchModeActive=false;
        if (typeof (searchText) != 'undefined' && searchText.length > 2) {
			textSearchModeActive=true;
			
            loadNewsDataSearch(searchText);
            requestNewsDataSearch.done(function (newsDataSearch) {
                debugStep("requestNewsDataSearch.done");

				
                for (var i = 0; i < newsDataSearch.storyIds.length; i++) {
					$('#' + newsDataSearch.storyIds[i]).addClass('newsFilter_meetSearchCriteria');
					
                }
                $('.IRNewsControlElement .IRNewsYearSelects .year').removeClass("active");
				IRNews.newsFilter_hideShowReleases(textSearchModeActive, searchFrom, searchTo);
            });
        }
		
		if(textSearchModeActive==false)
		{
			IRNews.newsFilter_hideShowReleases(textSearchModeActive, searchFrom, searchTo);
		}



    },
    newsFilter_hideShowReleases: function (textSearchModeActive, searchFrom, searchTo) {
        if (searchFrom != null) {
            searchFrom = new moment(searchFrom, "YYYY-MM-DD");
        } else {
            searchFrom = new moment(newsProperties.earliestYear + "-01-01", "YYYY-MM-DD");
        }
        if (searchTo != null) {
            searchTo = new moment(searchTo, "YYYY-MM-DD");
        } else {
            searchTo = new moment(newsProperties.latestYear + "-12-31", "YYYY-MM-DD");
        }

        console.log("searchFrom: " + searchFrom.format("YYYY-MM-DD"));
        console.log("searchTo: " + searchTo.format("YYYY-MM-DD"));
		$('.IRNewsSelectedYear_Title').html(searchFrom.format("DD-MM-YYYY")+' to '+searchTo.format("DD-MM-YYYY"));

        // Clean up
        for (var page = 1; page <= IRNews.newsEntriesAmount; page++) {
            $('.IRNewsEntries .IRDataGroup').removeClass('page' + page);
            $('.IRNewsEntries .IRDataGroup').addClass('hide');
        }
		
		$('.IRNewsEntries .IRDataGroup').each(function () {

					
            var newsDate = new moment($(this).find('.IRHeadline').attr('id'), 'YYYY-MM-DD');
            var isAfterFrom = newsDate.isAfter(searchFrom.format('YYYY-MM-DD'));
            var isBeforeFrom = newsDate.isBefore(searchTo.format('YYYY-MM-DD'));

            var hide = true;
            if (isAfterFrom && isBeforeFrom) {
                hide = false;
            }
            

            if (!hide) {
				if(textSearchModeActive)
				{
					if($(this).hasClass('newsFilter_meetSearchCriteria')){
						$(this).addClass('newsFilter_showThisRelease');
						
					}
				} else {
					$(this).addClass('newsFilter_showThisRelease');
				}
            } else {
				$(this).removeClass('newsFilter_showThisRelease');
			}

			$('ul.newsTabs li').removeClass('newsTabActive');
			$('#newsTab_bysearch').addClass('newsTabActive');
        });
		updateHeight_newsTypeWrapper_Outer();
		IRNews.filterNewsOnYearSelected('');
		
	},
    attachCalendars: function () {

        //$(".IRNewsCalendar .datepicker").datepicker("option", "dateFormat", 'YYYY-MM-DD');


        $(".datepicker").datepicker({
            showOn: "button",
            buttonImage: "inc/calendar.png",
            buttonImageOnly: true,
            buttonText: "Select date",
			dateFormat: "dd-mm-yy"
        });
        //$('.IRNewsCalendar.calendarFrom').click(function () {
        //    $('.IRCalendarFrom .datepicker').click();
        //});

        //$('.IRNewsCalendar.calendarTo').click(function () {
        //    $('.IRCalendarTo .datepicker').click();
        //});

    },
	applyClickHandlersOnNewsItems: function () {
		$('.IRDataGroup').click(function()
		{
			var openStoryId=$(this).attr('id');
			window.open('newsArticle.aspx?storyid='+openStoryId+'&solutionID=2284&customerKey=scandinaviantobacco','','width=800, height=800,scrollbars=yes');
		});
    },
	applyClickHandlersToNewsTypeTabs: function () {
		$('#newsTab_all,#newsTab_bytype').click(function(){
			if($('#newsTab_bysearch').hasClass('newsTabActive')) {
				$('.IRNewsYearSelects').find('div.year:first-child').click();
			}
			
			
			$('ul.newsTabs li').removeClass('newsTabActive');
			$(this).addClass('newsTabActive');
			
			updateHeight_newsTypeWrapper_Outer();
			
			showSelectedNewsTypes();
			IRNews.filterNewsOnYearSelected($('.IRNewsSelectedYear_Title').html());
		});
	}

};
function updateHeight_newsTypeWrapper_Outer(){
	var showFilters=false;
	$('.newsTabs li').each(function(){
		if($(this).attr('id')=='newsTab_bytype' && $(this).hasClass('newsTabActive')){
			showFilters=true;
		}
	});
	if(showFilters){
		$('.newsTypeWrapper_Outer').animate({height:$('.newsTypeWrapper').height()+'px'},200);
	} else {
		$('.newsTypeWrapper_Outer').animate({height:'0px'},200);
	}
}
function updateNewsTypes(){
	var selectedYear=$('.IRNewsSelectedYear_Title').html();
	var categories = [];
	$('.IRDataGroup').each(function(){
		if($(this).hasClass('year'+selectedYear))
		{
			categories.push($(this).find('.IRCategory').attr('category'));
		}
	});
	var uniqueCategories = [];
	$.each(categories, function(i, el){
		if($.inArray(el, uniqueCategories) === -1) uniqueCategories.push(el);
	});
	uniqueCategories.sort();
	$('.newsTypeWrapper').html('');
	for(categoryCounter=0;categoryCounter<uniqueCategories.length;categoryCounter++)
	{
		$('.newsTypeWrapper').append('<div class="newsTypeButton" category="'+uniqueCategories[categoryCounter]+'">'+uniqueCategories[categoryCounter]+'</div>');
	}
	$('.newsTypeWrapper').find('.newsTypeButton').click(function(){
		if(!$(this).hasClass('newsTypeButton_active'))
		{
			$(this).addClass('newsTypeButton_active');
		} else {
			$(this).removeClass('newsTypeButton_active');
		}
		showSelectedNewsTypes();
		
		
		IRNews.filterNewsOnYearSelected(selectedYear);//Adds pagination
	});
	
	updateHeight_newsTypeWrapper_Outer();
}
function showSelectedNewsTypes(){
	var selectedYear=$('.IRNewsSelectedYear_Title').html();
	
	$('.IRDataGroup').addClass('hide');
	$('.IRDataGroup').removeClass('newsFilter_showThisRelease');
	
	$('.newsTypeButton_active').each(function(){
		$('.IRNewsEntries .year'+selectedYear).find('.IRCategory[category="'+$(this).attr('category')+'"]').parent().parent().parent().removeClass('hide');
		$('.IRNewsEntries .year'+selectedYear).find('.IRCategory[category="'+$(this).attr('category')+'"]').parent().parent().parent().addClass('newsFilter_showThisRelease');
	});
	//var selectedTypes=$('.IRNewsEntries .year'+selectedYear).find('.IRCategory[category="Total Voting Rights"]').parent().parent().parent();
	
}
function getClosestClosePrice(unixDate) {
    var iterations = -1;
    var newUnixDate = 0;
    for (var i = 0; i < globalClosePriceDates.length - 1; i++) {
        if (newUnixDate < unixDate) {
            newUnixDate = globalClosePriceDates[i];
            iterations++;
        }
    }
    return iterations;
};
var RNSHeadlinesShorts = ['QRF', 'QRT', 'ACQ', 'LIS', 'AGM', 'AIM', 'AMO', 'PAA', 'ARI', 'ACS', 'AIU', 'BRC', 'BLR', 'CAR', 'APP', 'CAN', 'CRO', 'CNR', 'CIR', 'NOV', 'EFN', 'COS', 'CMC', 'CAS', 'CON', 'RDN', 'RDS', 'BOA', 'DSP', 'TAB', 'DIS', 'DIV', 'DOC', 'DRL', 'EGM', 'EMM', 'EXC', 'EOD', 'FR', 'DCC', 'FEE', 'RET', 'FEO', 'FER', 'FON', 'RC', 'FTS', 'FUR', 'GEO', 'IR', 'HOL', 'IMS', 'ISE', 'IOD', 'IOE', 'LOI', 'SEN', 'MMH', 'MER', 'MSC', 'NAV', 'NAR', 'NRA', 'NOA', 'NOE', 'NOR', 'OFB', 'ODP', 'OFF', 'OLA', 'ORE', 'OTT', 'OUP', 'NOT', 'PFU', 'PME', 'PNM', 'PRL', 'PDI', 'AGR', 'SAL', 'CNT', 'JVE', 'RAP', 'REA', 'RES', 'RSP', 'REN', 'REP', 'RAG', 'REG', 'ROI', 'ROM', 'RTE', 'RTT', 'SOA', 'APM', 'SSD', 'STA', 'STR', 'POT', 'OFD', 'STC', 'SPC', 'SRS', 'SPM', 'SYR', 'SUS', 'TEN', 'TSM', 'TAV', 'TVR', 'TST', 'POS', 'TRS'];
var RNSHeadlinesLong = ['1st Quarter Results', '3rd Quarter Results', 'Acquisition', 'Additional Listing', 'AGM Statement', 'AIM Admission - Update', 'AIM Notice (number inserted)', 'AIM Prospective Admission', 'Announcement re: Rights Issue', 'Annual Financial Report', 'Annual Information Update', 'Base Rate Change', 'Blocklisting Interim Review', 'Capital Reorganisation', 'Change of Adviser', 'Change of Name', 'Change of Registered Office', 'Change to the Nomad Register', 'Circ re.[add further text]', 'City Events Wire', 'City Events Wire Update', 'Company Secretary Change', 'Compliance with Model Code', 'Compulsory Acqn of Shares', 'Conversion of Securities', 'Director Declaration', 'Director/PDMR Shareholding', 'Directorate change', 'Disclosure of Short Position', 'Disclosure Table', 'Disposal', 'Dividend Declaration', 'Doc re. [insert appropriate document title]', 'Drilling Report', 'EGM Statement', 'EPT Disclosure', 'Exchange Suspension/Restoration', 'Final Announcement Released', 'Final Results', 'Form 8 (DD) - [Insert name of offeree or offeror]', 'Form 8 (OPD) [Insert name of offeree or offeror]', 'Form 8.3 - [Insert name of offeree or offeror]', 'Form 8.5 (EPT/NON-RI)', 'Form 8.5 (EPT/RI)', 'Formal Notice', 'FRN Variable Rate Fix', 'FTSE Only - (Add Headline)', 'Further re (add further text)', 'Geographical Distribution', 'Half Yearly Report', 'Holding(s) in Company', 'Interim Management Statement', 'ISE Only - (Add Headline)', 'Issue of Debt', 'Issue of Equity', 'Letter of Intent Signed', 'London Stock Exchange Notice', 'Market Maker Holding', 'Merger Update', 'Miscellaneous', 'Net Asset Value(s)', 'New Accounting Ref Date', 'Non Regulatory Announcement', 'Notice of AGM', 'Notice of EGM', 'Notice of Results', 'Offer', 'Offer Document Posted', 'Offer for (add offeree name)', 'Offer Lapsed', 'Offer Rejection', 'Offer Talks Terminated', 'Offer Update', 'Official List Notice', 'Portfolio Update', 'Price Monitoring Extension', 'Prior Notice of Merger', 'Product Launch', 'Publication of Prospectus', 'Re Agreement', 'Re Alliance', 'Re Contract', 'Re Joint Venture', 'Regulatory Application', 'Regulatory Approval', 'Research Update', 'Response to (add further text)', 'Restoration of Listing', 'Restructure Proposals', 'Result of AGM', 'Result of EGM', 'Result of Equity Issue', 'Result of Meeting', 'Result of Tender Offer', 'Rule 2.10 Announcement', 'Scheme of arrangement', 'Second Price Monitoring Extn', 'Short Selling Disclosure', 'Stabilisation Notice', 'Statement re (add text)', 'Statement re (POTAM)', 'Statement re Possible Offer', 'Statement re. (Comp Comm)', 'Statement re. Press Comment', 'Statement re. Suspension', 'Stmnt re. Share Price Movement', 'Syndicate Results', 'Temporary Suspension', 'Tender Offer', 'Test Message', 'Total Assets Value', 'Total Voting Rights', 'Trading Statement', 'Transaction in Own Shares', 'Treasury Stock'];
Handlebars.registerHelper('ShowCategoryCustom', function (categories) {
    var categoryShort = '';
    for (var i = 0; i < categories.length; i++) {
        switch (categories[i].categoryType) {
            case "AnnouncementType": // RNS
                categoryShort = categories[i].data;
                break;
            case "RnsId":
                // Do nothing (RNS uses 'AnnouncementType' as categoryType)
                break;
            case "PRNewswire": // PRNewswire
                categoryShort = categories[i].data;
                break;
            case "NasdaqOMXCategoryName": // Nasdaq OMX Nordic
                categoryShort = categories[i].data;
                break;
            default:
                debugError("Handlebar ShowCategoryShort is missing categoryType '" + categories[i].categoryType + "'");
                break;
        }
    }
	
    categoryShort = categoryShort.replace('fsa.', ''); // PRNewswire categories has 'fsa.' before the category code.
    var categoryIndex = RNSHeadlinesShorts.indexOf(categoryShort.replace(' ', ''));

    return RNSHeadlinesLong[categoryIndex];
});