const galleryApp = angular.module('galleryApp', ['ngAria', 'ngAnimate', 'ngRoute', 'angularResizable']);
let exportSettings = {
    chart: {haveThis: [], removeThis: [], url: './basicTemplates/html/chart.html', use: false},
    calc: {haveThis: [], removeThis: [], url: './basicTemplates/html/calc.html', use: false}
};
let chartObj, calcObj;

(function () {
    // Router ===============================
    galleryApp.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/chart.html',
                controller: 'chartController'
            })
            .when('/chart', {
                templateUrl: 'views/chart.html',
                controller: 'chartController'
            })
            .when('/calc', {
                templateUrl: 'views/calc.html',
                controller: 'calcController'
            })
            .when('/lookup', {
                templateUrl: 'views/lookup.html',
                controller: 'lookupController'
            });
    });
    // Event message trigger to format height of iframes ===============================
    galleryApp.directive('resize', ['$window', function ($window) {
        return {
            restrict: 'A',
            link: function resizeLink(scope, element, attributes) {
                angular.element($window).on('message', function (event) {
                    var data = event.data || event.originalEvent.data;
                    element.attr('height', data + 'px');
                });
            }
        };
    }]);
    // Adapt iframe to reset itself on window resize ===============================
    galleryApp.directive('adapt', ['$window', function ($window) {
        return {
            restrict: 'A',
            link: function resizeLink(scope, element, attributes) {
                angular.element($window).on('resize', function (event) {
                    element.css('width', 'auto');
                    scope.$apply(scope.activeResPh = scope.activeResTab = false);
                    scope.$apply(scope.activeResDesk = true);
                });
            }
        };
    }]);
    // File generator factory to by used across controllers ===============================
    galleryApp.factory('generator', ['$http', '$q', function ($http, $q) {
        let generator = {};
        let reqPromise = [];
        let files = [];

        generator.addToExport = function (item, itemProp) {
            if ($.inArray(itemProp, exportSettings[item].haveThis) == -1) {
                exportSettings[item].haveThis.push(itemProp);
                let idx = $.inArray(itemProp, exportSettings[item].removeThis);
                if (idx != -1)
                    exportSettings[item].removeThis.splice(idx, 1)
            }
        };

        generator.removeFromExport = function (item, itemProp) {
            if ($.inArray(itemProp, exportSettings[item].removeThis) == -1) {
                exportSettings[item].removeThis.push(itemProp);
                let idx = $.inArray(itemProp, exportSettings[item].haveThis);
                if (idx != -1)
                    exportSettings[item].haveThis.splice(idx, 1)
            }
        };

        generator.updateExportList = function (list, id) {
            exportSettings[id].haveThis = [];
            exportSettings[id].removeThis = [];
            for (let key in list) {
                if (list.hasOwnProperty(key)) {
                    if (list[key].use) {
                        exportSettings[id].haveThis.push(list[key].generatePart);
                    } else {
                        exportSettings[id].removeThis.push(list[key].generatePart);
                    }
                    exportSettings[id].use = true;
                }
            }
        };

        generator.clearExportList = function (id) {
            exportSettings[id].haveThis = [];
            exportSettings[id].removeThis = [];
            exportSettings[id].use = false;
        };

        generator.exportModules = function (name) {
            getCodeFiles();
            $q.all(reqPromise).then(function() {

                for (let i = 0; i < files.length; i++){
                    console.log(files);
                    console.log(exportSettings[files[i].name].haveThis.length);

                    for (let j = 0; j < exportSettings[files[i].name].haveThis.length; j++){
                        console.log(exportSettings[files[i].name].haveThis[j]);
                        files[i].data = cleanCode(files[i].data, exportSettings[files[i].name].haveThis[j]);
                    }

                    for (let k = 0; k < exportSettings[files[i].name].removeThis.length; k++){
                        files[i].data = generateCode(files[i].data, exportSettings[files[i].name].removeThis[k]);
                    }
                }
                createZip(name, files);
                files = [];
            });


        };

        function generateCode(str, part) {
            var temp = str;
            if (str.length != 0 && part.length != 0) {
                let st = part.split('...');
                while (temp.indexOf('<!--' + st[0] + '-->') != -1) {
                    let sIdx = temp.indexOf('<!--' + st[0] + '-->');
                    let strTempStart = temp.substr(0, sIdx);
                    let eIdx = temp.indexOf('<!--' + st[1] + '-->') + ('<!--' + st[1] + '-->').length;
                    if (temp.indexOf('<!--' + st[1] + '-->') == -1)
                        break;
                    let strTempEnd = temp.substr(eIdx);
                    temp = strTempStart + strTempEnd;
                }
            }
            return temp;
        }

        function cleanCode(str, part) {
            if (str.length != 0 && part.length != 0) {
                let st = part.split('...');
                while (str.indexOf('<!--' + st[0] + '-->') != -1) {
                    str = str.replace('<!--' + st[0] + '-->', '');
                    str = str.replace('<!--' + st[1] + '-->', '');
                }
            }
            return str;
        }

        function createZip(name, files) {
            var fileName = name.replace(/\s/g, "");
            var zip = new JSZip();
            for (let i = 0; i < files.length; i++) {
                zip.file(files[i].name + ".html", files[i].data);
            }
            zip.generateAsync({type: "blob"})
                .then(function (content) {
                    saveAs(content, fileName + ".zip");
                });
        }

        function getCodeFiles() {
            for (let key in exportSettings) {
                if (exportSettings.hasOwnProperty(key) && exportSettings[key].use) {
                    const fName = key;
                    let httpPromise = $http.get(exportSettings[key].url)
                        .success(function (response) {
                            files.push({name: fName, data: response});
                        })
                        .error(function (err) {
                            console.log(err);
                        });
                    reqPromise.push(httpPromise);
                }
            }
        }

        return generator;
    }]);

    // Main Controller ===============================
    galleryApp.controller('indexController', ['$scope', '$rootScope', '$sce', 'generator', function ($scope, $rootScope, $sce, generator) {
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

        $scope.burgerClick = function () {
            $scope.overlay = !$scope.overlay;
            $scope.clikedBurger = !$scope.clikedBurger;
        };

        $scope.closeMenu = function () {
            $scope.overlay = !$scope.overlay;
            $scope.clikedBurger = !$scope.clikedBurger;
        };

        $scope.initExport = function (f) {
            if (f)
                generator.exportModules(f);
        };

        $('.export-btn').on('click', function () {
            $('.alert-wrapper').fadeIn(500);
        });

        $(document).on('click', '.closeAlert', function () {
            $('.alert-wrapper').fadeOut(500);
        });

        // $(this).height( $(this).contents().find("html").height() );
    }]);


    galleryApp.controller('lookupController', ['$scope', function ($scope) {

    }]);

})();