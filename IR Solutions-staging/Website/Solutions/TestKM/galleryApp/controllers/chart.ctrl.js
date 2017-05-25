galleryApp.controller('chartController', ['$scope', '$sce', '$rootScope', '$timeout', 'generator', function ($scope, $sce, $rootScope, $timeout, generator) {
    const pageId = 'chart';
    $rootScope.msg = "Chart";
    $scope.title = "Features list";
    chartObj = $scope.featuresList = chartObj || [
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
    let iframeSrc = 'solutionModules/chart.html';

    $scope.moduleAdded = $scope.activeResPh = $scope.activeResTab = false;
    $scope.activeResDesk = true;

    let addIframeSrc = function() {
        $scope.iframeUrl = $sce.trustAsResourceUrl(iframeSrc);
    };
    $timeout(addIframeSrc, 5);

    $scope.addThisModule = function () {
        generator.updateExportList($scope.featuresList, pageId);
        $scope.moduleAdded = true;
    };

    $scope.removeThisModule = function () {
        generator.clearExportList(pageId);
        $scope.moduleAdded = false;
    };

    $scope.changeModuleRes = function (dev) {
        switch (dev){
            case "phone":
                $('.iframe-card').width(320);
                $scope.activeResDesk = $scope.activeResTab = false;
                $scope.activeResPh = true
                break;
            case "tablet":
                $('.iframe-card').width(640);
                $scope.activeResPh = $scope.activeResDesk = false;
                $scope.activeResTab = true;
                break;
            case "desktop":
                $('.iframe-card').width('auto');
                $scope.activeResPh = $scope.activeResTab = false;
                $scope.activeResDesk = true;
                break;
        }
    };


    $scope.changeAction = function (item) {
        for (let i = 0; i < item.pointers.length; i++){
            if(item.use){
                $('iframe').contents().find(item.pointers[i]).fadeIn(500);
                generator.addToExport(pageId, item.generatePart);
            } else {
                $('iframe').contents().find(item.pointers[i]).fadeOut(500);
                generator.removeFromExport(pageId, item.generatePart);
            }
        }
        item.action();
        generator.updateExportList($scope.featuresList, pageId);
    };
    
    
    //$('iframe')[0].contentWindow.globalChartDom.series[0].update({type:'line'}
}]);