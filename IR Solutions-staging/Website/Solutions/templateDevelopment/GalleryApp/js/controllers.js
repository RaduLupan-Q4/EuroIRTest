// Main Controller ======================================================================================
galleryApp.controller('indexController', ['$scope', '$rootScope', '$sce', 'generator', function ($scope, $rootScope, $sce, generator) {
    $rootScope.mainMenuList = menuList;
    $rootScope.completed = false;
    $rootScope.fileContent = "";
    $rootScope.msg = "Template gallery";
    $scope.btnText = "Export";
    $scope.exportMsg = "Export Modules";
    $scope.inputTitle = "Client Name";
    $scope.alertUrl = $sce.trustAsResourceUrl('views/exportAlert.html');
    $scope.exportBtnActive = false;

    $scope.$on("angular-resizable.resizeEnd", function (event, args) {
        $rootScope.iframeOverlay = false;
    });

    $scope.$on("angular-resizable.resizeStart", function (event, args) {
        $rootScope.iframeOverlay = true;
    });

    $scope.initExport = function (f) {
        if (f) {
            generator.exportModules(f);
            $rootScope.hideExportBtn = true;
        }
    };

    $scope.selectedList = exportSettings;

    $('.burger-menu').on('click', function () {
        $('.main-menu').addClass('burgerActive');
        $('nav.main-menu').addClass('expanded');
        $('.overlay').addClass('unhide');
    });

    $('.export-btn').on('click', function () {
        $('.main-menu').removeClass('burgerActive');
        $('nav.main-menu').removeClass('expanded');
        $('.alert-wrapper').fadeIn(500);
        $('.overlay').addClass('unhide');
    });

    $(document).on('click', '.closeAlert', function () {
        $('.alert-wrapper').fadeOut(500);
        $('.overlay').removeClass('unhide');
    });

    $(document).on('click', '.overlay', function () {
        $('.main-menu').removeClass('burgerActive');
        $('nav.main-menu').removeClass('expanded');
        $('.alert-wrapper').fadeOut(500);
        $('.overlay').removeClass('unhide');
    });

    $(document).on('click', 'nav.main-menu', function () {
        $('.main-menu').removeClass('burgerActive');
        $('nav.main-menu').removeClass('expanded');
        $('.alert-wrapper').fadeOut(500);
        $('.overlay').removeClass('unhide');
    });

//        $('.lookupFormLeft input').on('click', function(){
//            console.log('ok')
//            $('.ui-datepicker-trigger').trigger('click');
//        });







    // Animation for click event
    let element, circle, d, x, y;
    $(document).on('click', '.animate-click', function (e) {
        element = $(this);

        element.find(".circle").remove();

        element.append("<span class='circle'></span>");
        circle = element.find(".circle");

        if (!circle.height() && !circle.width()) {
            d = Math.max(element.outerWidth(), element.outerHeight());
            circle.css({height: d, width: d});
        }

        x = e.pageX - element.offset().left - circle.width() / 2;
        y = e.pageY - element.offset().top - circle.height() / 2;

        circle.css({top: y + 'px', left: x + 'px'}).addClass("animate");
        setTimeout(function () {
            circle.remove();
        }, 1000)
    });


}]);
galleryApp.controller('chartController', ['$scope', '$sce', '$rootScope', '$timeout', 'generator', 'globalFunctions', function ($scope, $sce, $rootScope, $timeout, generator, globalFunctions) {
    const pageId = 'chart';
    const iframeSrc = 'solutionModules/chart.html';

    globalFunctions.bootControllerText($rootScope, pageId);

    $scope.title = "Features list";
    chartObj = $scope.featuresList = chartObj;

    $scope.moduleAdded = exportSettings[pageId].use;
    $scope.activeResPh = $scope.activeResTab = false;
    $scope.activeResDesk = true;

    let addIframeSrc = function () {
        $scope.iframeUrl = $sce.trustAsResourceUrl(iframeSrc);
    };
    $timeout(addIframeSrc, 5);

    $('iframe').on('load', function iterateChanges() {
        let item = chartObj;
        for (let j = 0; j < item.length; j++) {
            for (let i = 0; i < item[j].pointers.length; i++) {
                let temp = item[j].pointers[i];
                if (!item[j].use) $('iframe')[0].contentWindow.$(`<style class="${temp.replace('.', 's')}">${temp} { display: none; }</style>`).appendTo("head");
            }
        }
    });

    $scope.addThisModule = function () { globalFunctions.addModule($scope, pageId); };

    $scope.removeThisModule = function () { globalFunctions.removeModule($scope, pageId) };

    $scope.changeModuleRes = function(dev){ globalFunctions.resolution($scope, dev)};

    $scope.changeAction = function (item) {
        for (let i = 0; i < item.pointers.length; i++) {
            $('iframe')[0].contentWindow.$('style.'+item.pointers[i].replace('.', 's')).remove();  // ugly fix for burger menu in iframe
            if (item.use) $('iframe')[0].contentWindow.$(item.pointers[i]).removeAttr("style");
            else $('iframe')[0].contentWindow.$(item.pointers[i]).hide();
        }
        iframeBurger();
        generator.updateExportList($scope.featuresList, pageId);
    };

    // ugly fix for burger menu in iframe
    $(window).on('resize', function () {
        iframeBurger();
    });

    function iframeBurger() {
        let res = 0;
        let use = 0;
        for (let i = 0; i < chartObj.length; i++) {
            if (chartObj[i].responsive) {
                res++;
                if (!chartObj[i].use) use++;
            }
        }
        if (res === use) $('iframe').contents().find('.IRChartMenuTrigger').fadeOut(0);
        else if ($('iframe').width() <= 500) $('iframe').contents().find('.IRChartMenuTrigger').fadeIn(500);
    }
}]);
galleryApp.controller('calcController', ['$scope', '$sce', '$rootScope', '$timeout', 'generator', 'globalFunctions', function ($scope, $sce, $rootScope, $timeout, generator, globalFunctions) {
    const pageId = 'calc';
    const iframeSrc = 'solutionModules/calc.html';

    globalFunctions.bootControllerText($rootScope, pageId);

    $scope.title = "Features list";
    calcObj = $scope.featuresList = calcObj;

    $scope.styleList = calcStyleObj;

    $scope.moduleAdded = $scope.styleList[0].use;
    $scope.idx = 0;
    $scope.activeResPh = $scope.activeResTab = false;
    $scope.activeResDesk = true;

    let addIframeSrc = function () {
        $scope.iframeUrl = $sce.trustAsResourceUrl(iframeSrc);
    };
    $timeout(addIframeSrc, 5);

    $('iframe').on('load', function iterateChanges() {
        let item = calcObj;
        for (let j = 0; j < item.length; j++) {
            for (let i = 0; i < item[j].pointers.length; i++) {
                let temp = item[j].pointers[i];
                if (!item[j].use) $('iframe')[0].contentWindow.$(`<style>${temp} { display: none; }</style>`).appendTo("head");
            }
        }
    });

    $scope.addThisModule = function () {
        globalFunctions.addModule($scope, pageId);
    };

    $scope.removeThisModule = function () {
        globalFunctions.removeModule($scope, pageId)
    };

    $scope.changeModuleRes = function (dev) {
        globalFunctions.resolution($scope, dev)
    };

    $scope.selectorPosition = {'left': '0px'};

    $scope.changeStyle = function (item, index) {
        globalFunctions.changeStyle($scope, pageId, item, index)
    };

    $scope.changeAction = function (item) {
        globalFunctions.changeAction($scope, item, pageId)
    };

    $scope.checkFeaturesForLayout = function (itm) {
        return globalFunctions.checkFeaturesForLayout($scope, itm)
    };

    $scope.showFeatureList = function () {
        return globalFunctions.showFeaturesList($scope)
    };
}]);
galleryApp.controller('lookController', ['$scope', '$sce', '$rootScope', '$timeout', 'generator', 'globalFunctions', function ($scope, $sce, $rootScope, $timeout, generator, globalFunctions) {
    const pageId = 'look';
    const iframeSrc = 'solutionModules/lookup.html';

    globalFunctions.bootControllerText($rootScope, pageId);

    $scope.title = "Features list";
    lookObj = $scope.featuresList = lookObj;

    $scope.styleList = lookupStyleObj;

    $scope.moduleAdded = $scope.styleList[0].use;
    $scope.idx = 0;
    $scope.activeResPh = $scope.activeResTab = false;
    $scope.activeResDesk = true;

    let addIframeSrc = function () {
        $scope.iframeUrl = $sce.trustAsResourceUrl(iframeSrc);
    };
    $timeout(addIframeSrc, 5);

    $('iframe').on('load', function iterateChanges() {
        lookupStyleObj[0].action();
        let item = lookObj;
        for (let j = 0; j < item.length; j++) {
            for (let i = 0; i < item[j].pointers.length; i++) {
                let temp = item[j].pointers[i];
                if (!item[j].use) $('iframe')[0].contentWindow.$(`<style>${temp} { display: none; }</style>`).appendTo("head");
            }
        }
    });

    $scope.addThisModule = function () {
        globalFunctions.addModule($scope, pageId);
    };

    $scope.removeThisModule = function () {
        globalFunctions.removeModule($scope, pageId)
    };

    $scope.changeModuleRes = function (dev) {
        globalFunctions.resolution($scope, dev)
    };

    $scope.selectorPosition = {'left': '0px'};

    $scope.changeStyle = function (item, index) {
        globalFunctions.changeStyle($scope, pageId, item, index)
    };

    $scope.changeAction = function (item) {
        globalFunctions.changeAction($scope, item, pageId)
    };

    $scope.checkFeaturesForLayout = function (itm) {
        return globalFunctions.checkFeaturesForLayout($scope, itm)
    };

    $scope.showFeatureList = function () {
        return globalFunctions.showFeaturesList($scope)
    };
}]);

galleryApp.controller('profController', ['$scope', '$sce', '$rootScope', '$timeout', 'generator', 'globalFunctions', function ($scope, $sce, $rootScope, $timeout, generator, globalFunctions) {
    const pageId = 'prof';

    globalFunctions.bootControllerText($rootScope, pageId);

    $scope.title = "Features list";
    profObj = $scope.featuresList = profObj || [
            {
                name: 'table',
                pointers: ['.IRQuoteModule'],
                action: function () {
                    console.log("table");
                },
                generatePart: '<%table...table%>',
                use: true
            },
            {
                name: 'news',
                pointers: [],
                generatePart: '<%news...news%>',
                action: function () {
                    console.log("news");
                },
                use: true
            },
            {
                name: 'currency',
                pointers: ['.IRChartCC', '.IRChartCCHeader'],
                generatePart: '<%cc...cc%>',
                action: function () {
                    console.log("cc");
                },
                use: true
            },
            {
                name: 'dividend',
                pointers: ['.IRChartTSR', '.IRChartTSRHeader'],
                generatePart: '<%tsr...tsr%>',
                action: function () {
                    console.log("tsr");
                },
                use: true
            },
            {
                name: 'technical analysis',
                pointers: ['.IRChartTA', '.IRChartTAHeader'],
                generatePart: '<%ta...ta%>',
                action: function () {
                    console.log("ta");
                },
                use: true
            },
            {
                name: 'comparison',
                pointers: ['.IRChartComparison', '.IRChartComparisonHeader'],
                generatePart: '<%compare...compare%>',
                action: function () {
                    console.log("comparison");
                },
                use: true
            },
            {
                name: 'fullscreen',
                pointers: ['.IRChartFullscreen'],
                generatePart: '<%fullscreen...fullscreen%>',
                action: function () {
                    console.log("fullscreen");
                },
                use: true
            },
            {
                name: 'settings',
                pointers: ['.IRChartSettings'],
                generatePart: '<%settings...settings%>',
                action: function () {
                    console.log("settings");
                },
                use: true
            }
        ];

    const iframeSrc = 'solutionModules/profile.html';

    $scope.moduleAdded = exportSettings[pageId].use;
    $scope.activeResPh = $scope.activeResTab = false;
    $scope.activeResDesk = true;

    let addIframeSrc = function () {
        $scope.iframeUrl = $sce.trustAsResourceUrl(iframeSrc);
    };
    $timeout(addIframeSrc, 5);

    $scope.iterateChanges = function () {
        let item = profObj;
        for (let j = 0; j < item.length; j++) {
            for (let i = 0; i < item[j].pointers.length; i++) {
                if (!item[j].use) $('iframe').contents().find(item[j].pointers[i]).fadeOut(0);
            }
        }
    };

    $scope.addThisModule = function () {
        globalFunctions.addModule($scope, pageId);
    };

    $scope.removeThisModule = function () {
        globalFunctions.removeModule($scope, pageId)
    };

    $scope.changeModuleRes = function (dev) {
        globalFunctions.resolution($scope, dev)
    };

    $scope.changeAction = function (item) {
        globalFunctions.changeAction($scope, item, pageId)
    };
}]);
galleryApp.controller('newsController', ['$scope', '$sce', '$rootScope', '$timeout', 'generator', 'globalFunctions', function ($scope, $sce, $rootScope, $timeout, generator, globalFunctions) {
    const pageId = 'news';
    const iframeSrc = 'solutionModules/news.html';

    globalFunctions.bootControllerText($rootScope, pageId);

    $scope.title = "Features list";
    newsObj = $scope.featuresList = newsObj;

    $scope.moduleAdded = exportSettings[pageId].use;
    $scope.activeResPh = $scope.activeResTab = false;
    $scope.activeResDesk = true;

    let addIframeSrc = function () {
        $scope.iframeUrl = $sce.trustAsResourceUrl(iframeSrc);
    };
    $timeout(addIframeSrc, 5);

    $('iframe').on('load', function iterateChanges() {
        let item = newsObj;
        for (let j = 0; j < item.length; j++) {
            for (let i = 0; i < item[j].pointers.length; i++) {
                let temp = item[j].pointers[i];
                if (!item[j].use) $('iframe')[0].contentWindow.$(`<style>${temp} { display: none; }</style>`).appendTo("head");
            }
        }
        customRemoveBtn('load');
    });

    $scope.addThisModule = function () {
        globalFunctions.addModule($scope, pageId);
    };

    $scope.removeThisModule = function () {
        globalFunctions.removeModule($scope, pageId)
    };

    $scope.changeModuleRes = function (dev) {
        globalFunctions.resolution($scope, dev)
    };

    $scope.changeAction = function (item) {
        globalFunctions.changeAction($scope, item, pageId, customRemoveBtn)
    };

    function customRemoveBtn(type) {
        let use = 0;
        let has = 0;
        for (let i = 0; i < $scope.featuresList.length; i++) {
            if ($scope.featuresList[i].hasbutton) {
                has++;
                if (!$scope.featuresList[i].use) use++;
            }
        }
        if (use === has && type === 'load') $('iframe')[0].contentWindow.$(`<style>.news-filter-wrapper { display: none; }</style>`).appendTo("head");
        else if (use === has) $('iframe').contents().find('.news-filter-wrapper').fadeOut(500);
        else $('iframe').contents().find('.news-filter-wrapper').fadeIn(500);
    }
}]);

galleryApp.controller('miniController', ['$scope', '$sce', '$rootScope', '$timeout', 'generator', 'globalFunctions', function ($scope, $sce, $rootScope, $timeout, generator, globalFunctions) {
    const pageId = 'mini';

    globalFunctions.bootControllerText($rootScope, pageId);

    $scope.title = "Filter list";
    $scope.filterList = miniquoteFilters;
    miniObj = $scope.miniList = miniObj;
    $scope.moduleAdded = exportSettings[pageId].use;
    $scope.activeResPh = $scope.activeResTab = false;
    $scope.activeResDesk = true;
    $scope.filterListAction = function (ind) {
        $scope.filterList[ind].use = !$scope.filterList[ind].use;
        if ($scope.filterList[ind].use) $scope.filterList[ind].use = false;
        else $scope.filterList[ind].use = true;
        let temp = [];
        for (let j = 0; j < $scope.filterList.length; j++) {
            if ($scope.filterList[j].use) temp.push($scope.filterList[j].name);
        }
        for (let i = 0; i < $scope.miniList.length; i++) {
            for (let k = 0; k < $scope.miniList[i].filter.length; k++) {
                $scope.miniList[i].show = temp.indexOf($scope.miniList[i].filter[k]) !== -1;
            }
        }
    };
    $(document).on('click', '.imgBox img', function () {
        if  ($(window).width() > 767) {
            $(".zoomImageBoxOverflow").fadeIn("fast");
            $(this).closest(".box").find(".zoomImageBox").fadeIn("fast");
            $('.icon-plus').fadeOut('fast');
        }

    });
    $(document).on("click", ".close-button-zoom, .zoomImageBoxOverflow", function () {
        if  ($(window).width() > 767) {
            $(".zoomImageBoxOverflow").fadeOut("fast");
            $(".zoomImageBox").fadeOut("fast");
            $('.icon-plus').fadeIn('fast');
        }
    });
    $scope.addThisModule = function (ind) {
        for (let i = 0; i < $scope.miniList.length; i++) {
            $scope.miniList[i].use = i === ind;
        }
        generator.useThis($scope.miniList, pageId);
    };
    $scope.removeThisModule = function () {
        for (let i = 0; i < $scope.miniList.length; i++) {
            $scope.miniList[i].use = false;
        }
        generator.clearExportList(pageId);
    };

    $scope.changeModuleRes = function (dev) {
        globalFunctions.resolution($scope, dev)
    };

    $scope.changeAction = function (item) {
        generator.updateExportList($scope.miniList, pageId);
    };
}]);
galleryApp.controller('ordersController', ['$scope', '$sce', '$rootScope', '$timeout', 'generator', 'globalFunctions', function ($scope, $sce, $rootScope, $timeout, generator, globalFunctions) {
    const pageId = 'orders';
    const iframeSrc = 'solutionModules/orders.html';

    globalFunctions.bootControllerText($rootScope, pageId);

    $scope.title = "";
    ordObj = $scope.featuresList = ordObj;

    $scope.moduleAdded = exportSettings[pageId].use;
    $scope.activeResPh = $scope.activeResTab = false;
    $scope.activeResDesk = true;

    let addIframeSrc = function () {
        $scope.iframeUrl = $sce.trustAsResourceUrl(iframeSrc);
    };
    $timeout(addIframeSrc, 5);

    $('iframe').on('load', function iterateChanges() {
        let item = ordObj;
        for (let j = 0; j < item.length; j++) {
            for (let i = 0; i < item[j].pointers.length; i++) {
                let temp = item[j].pointers[i];
                if (!item[j].use) $('iframe')[0].contentWindow.$( `<style>${temp} { display: none; }</style>` ).appendTo( "head" );
            }
        }
    });

    $scope.addThisModule = function () {
        globalFunctions.addModule($scope, pageId);
    };

    $scope.removeThisModule = function () {
        globalFunctions.removeModule($scope, pageId)
    };

    $scope.changeModuleRes = function (dev) {
        globalFunctions.resolution($scope, dev)
    };

    $scope.changeAction = function (item) {
        globalFunctions.changeAction($scope, item, pageId)
    };
}]);
galleryApp.controller('tradesController', ['$scope', '$sce', '$rootScope', '$timeout', 'generator', 'globalFunctions', function ($scope, $sce, $rootScope, $timeout, generator, globalFunctions) {
    const pageId = 'trades';
    const iframeSrc = 'solutionModules/trades.html';

    globalFunctions.bootControllerText($rootScope, pageId);


    $scope.title = "Columns list";
    tradObj = $scope.featuresList = tradObj;

    $scope.moduleAdded = exportSettings[pageId].use;
    $scope.activeResPh = $scope.activeResTab = false;
    $scope.activeResDesk = true;

    let addIframeSrc = function () {
        $scope.iframeUrl = $sce.trustAsResourceUrl(iframeSrc);
    };
    $timeout(addIframeSrc, 5);

    $('iframe').on('load', function iterateChanges() {
        let item = tradObj;
        for (let j = 0; j < item.length; j++) {
            for (let i = 0; i < item[j].pointers.length; i++) {
                let temp = item[j].pointers[i];
                if (!item[j].use) $('iframe')[0].contentWindow.$( `<style>${temp} { display: none; }</style>` ).appendTo( "head" );
            }
        }
    });

    $scope.addThisModule = function () {
        globalFunctions.addModule($scope, pageId);
    };

    $scope.removeThisModule = function () {
        globalFunctions.removeModule($scope, pageId)
    };

    $scope.changeModuleRes = function (dev) {
        globalFunctions.resolution($scope, dev)
    };

    $scope.changeAction = function (item) {
        globalFunctions.changeAction($scope, item, pageId)
    };
}]);
galleryApp.controller('emailController', ['$scope', '$sce', '$rootScope', '$timeout', 'generator', 'globalFunctions', function ($scope, $sce, $rootScope, $timeout, generator, globalFunctions) {
    const pageId = 'emails';
    const iframeSrc = 'solutionModules/emailAlerts.html';

    globalFunctions.bootControllerText($rootScope, pageId);

    $scope.title = "Features list";
    emailObj = $scope.featuresList = emailObj;

    $scope.styleList = emailStyleObj;

    $scope.moduleAdded = $scope.styleList[0].use;
    $scope.idx = 0;
    $scope.activeResPh = $scope.activeResTab = false;
    $scope.activeResDesk = true;

    let addIframeSrc = function () {
        $scope.iframeUrl = $sce.trustAsResourceUrl(iframeSrc);
    };
    $timeout(addIframeSrc, 5);

    $('iframe').on('load', function iterateChanges() {
        emailStyleObj[0].action();

        let item = emailObj;
        for (let j = 0; j < item.length; j++) {
            for (let i = 0; i < item[j].pointers.length; i++) {
                let temp = item[j].pointers[i];
                if (!item[j].use) $('iframe')[0].contentWindow.$( `<style>${temp} { display: none; }</style>` ).appendTo( "head" );
            }
        }
    });

    $scope.addThisModule = function () {
        globalFunctions.addModule($scope, pageId);
    };

    $scope.removeThisModule = function () {
        globalFunctions.removeModule($scope, pageId)
    };

    $scope.changeModuleRes = function (dev) {
        globalFunctions.resolution($scope, dev)
    };

    $scope.selectorPosition = {'left': '0px'};

    $scope.changeStyle = function (item, index) {
        globalFunctions.changeStyle($scope, pageId, item, index)
    };

    $scope.changeAction = function (item) {
        globalFunctions.changeAction($scope, item, pageId)
    };

    $scope.checkFeaturesForLayout = function (itm) {
        return globalFunctions.checkFeaturesForLayout($scope, itm)
    };

    $scope.showFeatureList = function () {
        return globalFunctions.showFeaturesList($scope)
    };
}]);
