// ==========================================================================================================
// Global
// ==========================================================================================================
// Export List memory
let viewModes = {
    phone: 320,
    tablet: 640,
    desktop: 'auto' //makes it full width.
};
let exportSettings = {
    chart: {
        name: "Interactive chart",
        featName: [],
        haveThis: [],
        removeThis: [],
        url: './solutionModules/chart.html',
        js: './solutionModules/js/chart.ctrl.js',
        tag: '<%ChartModule...ChartModule%>',
        use: false
    },
    calc: {
        name: 'Calculator',
        featName: [],
        haveThis: [],
        removeThis: [],
        url: './solutionModules/calc.html',
        js: './solutionModules/js/chart.ctrl.js',
        tag: '<%CalcModule...CalcModule%>',
        use: false
    },
    look: {
        name: 'Lookup',
        featName: [],
        haveThis: [],
        removeThis: [],
        url: './solutionModules/lookup.html',
        js: './solutionModules/js/chart.ctrl.js',
        tag: '<%LookupModule...LookupModule%>',
        use: false
    },
    mini: {
        name: 'Miniquote',
        featName: [],
        haveThis: [],
        removeThis: [],
        url: './solutionModules/miniquote.html',
        js: './solutionModules/js/chart.ctrl.js',
        tag: '',
        use: false
    },
    prof: {
        name: 'Profile',
        featName: [],
        haveThis: [],
        removeThis: [],
        url: './solutionModules/profile.html',
        js: './solutionModules/js/chart.ctrl.js',
        tag: '',
        use: false
    },
    news: {
        name: 'News',
        featName: [],
        haveThis: [],
        removeThis: [],
        url: './solutionModules/news.html',
        js: './solutionModules/js/chart.ctrl.js',
        tag: '<%NewsModule...NewsModule%>',
        use: false
    },
    orders: {
        name: 'Orders',
        featName: [],
        haveThis: [],
        removeThis: [],
        url: './solutionModules/orders.html',
        js: './solutionModules/js/chart.ctrl.js',
        tag: '<%OrdersModule...OrdersModule%>',
        use: false
    },
    trades: {
        name: 'Trades',
        featName: [],
        haveThis: [],
        removeThis: [],
        url: './solutionModules/trades.html',
        js: './solutionModules/js/chart.ctrl.js',
        tag: '<%TradesModule...TradesModule%>',
        use: false
    },
    emails: {
        name: 'Email Alerts',
        featName: [],
        haveThis: [],
        removeThis: [],
        url: './solutionModules/emailAlerts.html',
        js: './solutionModules/js/email.ctrl.js',
        tag: '<%EmailModule...EmailModule%>',
        use: false
    }
};

let exportCommon = {
    css: './solutionModules/ir.client.css',
    js: './solutionModules/ir.client.js'
};

// Menu List
let menuList = [
    {id: 'chart', name: 'Interactive chart', link: '#/chart', icon: 'icon-chart', use: false},
    {id: 'calc', name: 'Calculator', link: '#/calc', icon: 'icon-calc', use: false},
    {id: 'look', name: 'Lookup', link: '#/lookup', icon: 'icon-lookup', use: false},
    {id: 'mini', name: 'Miniquote', link: '#/miniquote', icon: 'icon-miniquote', use: false},
    // {id: 'prof', name: 'Profile', link: '#/profile', icon: 'icon-profile', use: false},
    {id: 'news', name: 'News', link: '#/news', icon: 'icon-news', use: false},
    {id: 'emails', name: 'Email alerts', link: '#/emails', icon: 'icon-emailAlerts', use: false},
    {id: 'orders', name: 'Orders', link: '#/orders', icon: 'icon-orders', use: false},
    {id: 'trades', name: 'Trades', link: '#/trades', icon: 'icon-trades', use: false}
];

// Chart list memory ==========================
let chartObj = [
    {
        name: 'table',
        pointers: ['.IRQuoteModule'],
        generatePart: '<%table...table%>',
        use: true
    },
    {
        name: 'news',
        pointers: ['g.highcharts-label'],
        generatePart: '<%news...news%>',
        use: true
    },
    {
        name: 'currency',
        pointers: ['.IRChartCC', '.IRChartCCHeader'],
        generatePart: '<%cc...cc%>',
        responsive: true,
        use: true
    },
    {
        name: 'dividend',
        pointers: ['.IRChartTSR', '.IRChartTSRHeader'],
        generatePart: '<%tsr...tsr%>',
        responsive: true,
        use: true
    },
    {
        name: 'technical analysis',
        pointers: ['.IRChartTA', '.IRChartTAHeader'],
        generatePart: '<%ta...ta%>',
        responsive: true,
        use: true
    },
    {
        name: 'comparison',
        pointers: ['.IRChartComparison', '.IRChartComparisonHeader'],
        generatePart: '<%compare...compare%>',
        responsive: true,
        use: true
    },
    {
        name: 'fullscreen',
        pointers: ['.IRChartFullscreen'],
        generatePart: '<%fullscreen...fullscreen%>',
        use: true
    },
    {
        name: 'settings',
        pointers: ['.IRChartSettings', '.IRChartSettingsHeader'],
        generatePart: '<%settings...settings%>',
        responsive: true,
        use: true
    },
    {
        name: 'listings',
        pointers: ['.IRChartChangeListing'],
        generatePart: '<%listings...listings%>',
        use: true
    }
];

// Calculator list memory =====================
let calcObj = [
    {
        name: 'Chart',
        pointers: ['.IRChartCalcPlaceholder'],
        generatePart: '<%chart...chart%>',
        use: true
    },
    {
        name: 'Listing',
        pointers: ['.listing'],
        generatePart: '<%listings...listings%>',
        use: true
    },
    {
        name: 'Dividend',
        pointers: ['.dividend'],
        generatePart: '<%dividend...dividend%>',
        use: true
    }
];

// style memory
let calcStyleObj = [
    {
        name: 'Layout 1',
        action: function () {
            $('iframe').contents().find('.customCalcModuleWrapper').removeClass('horizontalLayout');
            $('iframe').contents().find('.customCalcModuleWrapper').removeClass('calculatorLayoutThree');
            $('iframe').contents().find('.customCalcModuleWrapper').removeClass('calculatorLayoutFour');
            $('iframe').contents().find('.customCalcModuleWrapper').removeClass('calculatorLayoutFive');
            $('iframe').contents().find('.IRChartCalcPlaceholder').fadeIn(0);
            $('iframe').contents().find('.IRChartCalcPlaceholder').removeClass('calculatorLayoutFour');
            $('iframe').contents().find('.IRChartCalcPlaceholder').removeClass('calculatorLayoutFive');
        },
        generatePart: '',
        features: ['chart', 'listing', 'dividend'],
        show: true,
        use: false
    },
    {
        name: 'Layout 2',
        action: function () {
            $('iframe').contents().find('.customCalcModuleWrapper').addClass('horizontalLayout');
            $('iframe').contents().find('.customCalcModuleWrapper').removeClass('calculatorLayoutThree');
            $('iframe').contents().find('.customCalcModuleWrapper').removeClass('calculatorLayoutFour');
            $('iframe').contents().find('.customCalcModuleWrapper').removeClass('calculatorLayoutFive');
            $('iframe').contents().find('.IRChartCalcPlaceholder').fadeIn(0);
            $('iframe').contents().find('.IRChartCalcPlaceholder').removeClass('calculatorLayoutFour');
            $('iframe').contents().find('.IRChartCalcPlaceholder').removeClass('calculatorLayoutFive');
        },
        generatePart: '<%layouthorizontal...layouthorizontal%>',
        features: ['chart', 'listing', 'dividend'],
        show: false,
        use: false
    },
    {
        name: 'Layout 3',
        action: function () {
            $('iframe').contents().find('.customCalcModuleWrapper').removeClass('horizontalLayout');
            $('iframe').contents().find('.customCalcModuleWrapper').removeClass('calculatorLayoutFour');
            $('iframe').contents().find('.customCalcModuleWrapper').removeClass('calculatorLayoutFive');
            $('iframe').contents().find('.customCalcModuleWrapper').addClass('calculatorLayoutThree');
            $('iframe').contents().find('.IRChartCalcPlaceholder').fadeOut(0);
        },
        generatePart: '<%calcLayoutThree...calcLayoutThree%>',
        features: [],
        show: false,
        use: false
    },
    {
        name: 'Layout 4',
        action: function () {
            $('iframe').contents().find('.customCalcModuleWrapper').removeClass('horizontalLayout');
            $('iframe').contents().find('.customCalcModuleWrapper').removeClass('calculatorLayoutThree');
            $('iframe').contents().find('.customCalcModuleWrapper').removeClass('calculatorLayoutFive');
            $('iframe').contents().find('.customCalcModuleWrapper').addClass('calculatorLayoutFour');
            $('iframe').contents().find('.IRChartCalcPlaceholder').fadeIn(0);
            $('iframe').contents().find('.IRChartCalcPlaceholder').addClass('calculatorLayoutFour');
            $('iframe').contents().find('.IRChartCalcPlaceholder').removeClass('calculatorLayoutFive');
        },
        generatePart: '<%calcLayoutFour...calcLayoutFour%>',
        features: [],
        show: false,
        use: false
    },
    {
        name: 'Layout 5',
        action: function () {
            $('iframe').contents().find('.customCalcModuleWrapper').removeClass('horizontalLayout');
            $('iframe').contents().find('.customCalcModuleWrapper').removeClass('calculatorLayoutThree');
            $('iframe').contents().find('.customCalcModuleWrapper').removeClass('calculatorLayoutFour');
            $('iframe').contents().find('.customCalcModuleWrapper').addClass('calculatorLayoutFive');
            $('iframe').contents().find('.IRChartCalcPlaceholder').fadeIn(0);
            $('iframe').contents().find('.IRChartCalcPlaceholder').addClass('calculatorLayoutFive');
            $('iframe').contents().find('.IRChartCalcPlaceholder').removeClass('calculatorLayoutFour');
        },
        generatePart: '<%calcLayoutFive...calcLayoutFive%>',
        features: [],
        show: false,
        use: false
    }
];

// Lookup list memory =========================
let lookObj = [
    {
        name: 'Table',
        pointers: ['.IRLookupTableModule'],
        generatePart: '<%table...table%>',
        use: true
    },
    {
        name: 'Chart',
        pointers: ['.IRChartLookupPlaceholder'],
        generatePart: '<%chart...chart%>',
        use: true
    },
    {
        name: 'Listing',
        pointers: ['.listing'],
        generatePart: '<%listings...Listings%>',
        use: true
    },
];

// style memory
let lookupStyleObj = [
    {
        name: 'Layout 1',
        action: function () {
            $('iframe').contents().find('.lookup-table-form, .forLay3, .lookupLayFour').fadeOut(0);
            $('iframe').contents().find('.lookup-form, .IRChartLookupPlaceholder, .IRLookupTableModule').fadeIn(0);
        },
        generatePart: '<%lookupLayoutOne...lookupLayoutOne%>',
        features: ['chart', 'table', 'listing'],
        show: true,
        use: false
    },
    {
        name: 'Layout 2',
        action: function () {
            $('iframe').contents().find('.forLay3, .lookup-form, .lookupLayFour').fadeOut(0);
            $('iframe').contents().find('.IRLookupTableModule, .IRChartLookupPlaceholder, .lookup-table-form').fadeIn(0);
        },
        generatePart: '<%lookupLayoutTwo...lookupLayoutTwo%>',
        features: [ 'chart', 'table'],
        show: false,
        use: false
    },
    {
        name: 'Layout 3',
        action: function () {
            $('iframe').contents().find('.lookup-table-form, .IRLookupTableModule, .IRChartLookupPlaceholder, .lookup-form,  .lookupLayFour').fadeOut(0);
            $('iframe').contents().find('.forLay3').fadeIn(0);
        },
        generatePart: '<%lookupLayoutThree...lookupLayoutThree%>',
        features: [],
        show: false,
        use: false
    },
    {
        name: 'Layout 4',
        action: function () {
            $('iframe').contents().find('.IRChartLookupPlaceholder, .IRLookupTableModule, .lookup-table-form, .lookup-form, .forLay3').fadeOut(0);
            $('iframe').contents().find('.lookupLayFour').fadeIn(0);
        },
        generatePart: '<%lookupLayoutFour...lookupLayoutFour%>',
        features: [],
        show: false,
        use: false
    }
];

// Miniquote list memory ======================
let miniObj = [
    {
        name: "No. 1",
        img: './solutionModules/miniquote/miniquote2.png',
        link: '',
        filter: ['medium'],
        column: 3,
        class: 'miniquoteMedium',
        generatePart: '<%Miniquote2...Miniquote2%>',
        show: true,
        use: false
    },
    {
        name: "No. 2",
        img: './solutionModules/miniquote/miniquote3.png',
        link: '',
        filter: ['small'],
        column: 2,
        class: 'miniquoteSmall',
        generatePart: '<%Miniquote3...Miniquote3%>',
        show: true,
        use: false
    },
    {
        name: "No. 3",
        img: './solutionModules/miniquote/miniquote4.png',
        link: '',
        filter: ['medium'],
        column: 1,
        class: 'miniquoteMedium',
        generatePart: '<%Miniquote4...Miniquote4%>',
        show: true,
        use: false
    },
    {
        name: "No. 4",
        img: './solutionModules/miniquote/miniquote5.png',
        link: '',
        filter: ['large'],
        column: 3,
        class: 'miniquoteLarge',
        generatePart: '<%Miniquote5...Miniquote5%>',
        show: true,
        use: false
    },
    {
        name: "No. 5",
        img: './solutionModules/miniquote/miniquote6.png',
        link: '',
        filter: ['small'],
        column: 2,
        class: 'miniquoteSmall',
        generatePart: '<%Miniquote6...Miniquote6%>',
        show: true,
        use: false
    },
    {
        name: "No. 6",
        img: './solutionModules/miniquote/miniquote7.png',
        link: '',
        filter: ['small'],
        column: 1,
        class: 'miniquoteSmall',
        generatePart: '<%Miniquote7...Miniquote7%>',
        show: true,
        use: false
    },
    {
        name: "No. 7",
        img: './solutionModules/miniquote/miniquote8.png',
        link: '',
        filter: ['small'],
        column: 1,
        class: 'miniquoteSmall',
        generatePart: '<%Miniquote8...Miniquote8%>',
        show: true,
        use: false
    },
    {
        name: "No. 8",
        img: './solutionModules/miniquote/miniquote9.png',
        link: '',
        filter: ['medium'],
        column: 1,
        class: 'miniquoteMedium',
        generatePart: '<%Miniquote9...Miniquote9%>',
        show: true,
        use: false
    },
    {
        name: "No. 9",
        img: './solutionModules/miniquote/miniquote10.png',
        link: '',
        filter: ['small'],
        column: 1,
        class: 'miniquoteSmall',
        generatePart: '<%Miniquote10...Miniquote10%>',
        show: true,
        use: false
    },
    {
        name: "No. 10",
        img: './solutionModules/miniquote/miniquote11.png',
        link: '',
        filter: ['small'],
        column: 1,
        class: 'miniquoteSmall',
        generatePart: '<%Miniquote11...Miniquote11%>',
        show: true,
        use: false
    },
    {
        name: "No. 11",
        img: './solutionModules/miniquote/miniquote12.png',
        link: '',
        filter: ['medium'],
        column: 1,
        class: 'miniquoteMedium',
        generatePart: '<%Miniquote12...Miniquote12%>',
        show: true,
        use: false
    },
    {
        name: "No. 12",
        img: './solutionModules/miniquote/miniquote13.png',
        link: '',
        filter: ['large'],
        column: 1,
        class: 'miniquoteLarge',
        generatePart: '<%Miniquote13...Miniquote13%>',
        show: true,
        use: false
    },
    {
        name: "No. 13",
        img: './solutionModules/miniquote/miniquote14.png',
        link: '',
        filter: ['large'],
        column: 1,
        class: 'miniquoteLarge',
        generatePart: '<%Miniquote14...Miniquote14%>',
        show: true,
        use: false
    },
    {
        name: "No. 14",
        img: './solutionModules/miniquote/miniquote15.png',
        link: '',
        filter: ['medium'],
        column: 1,
        class: 'miniquoteMedium',
        generatePart: '<%Miniquote15...Miniquote15%>',
        show: true,
        use: false
    },
    {
        name: "No. 15",
        img: './solutionModules/miniquote/miniquote16.png',
        link: '',
        filter: ['medium'],
        column: 1,
        class: 'miniquoteMedium',
        generatePart: '<%Miniquote16...Miniquote16%>',
        show: true,
        use: false
    }
];

// Filter list
let miniquoteFilters = [
    {
        name: 'small',
        use: true
    },
    {
        name: 'medium',
        use: true
    },
    {
        name: 'large',
        use: true
    }
];

// Profile list memory ========================
let profObj = [];

// News list memory ===========================
let newsObj = [
    {
        name: 'categories',
        pointers: ['.news-filter-box'],
        generatePart: '<%checkboxes...checkboxes%>',
        hasbutton: true,
        use: true
    },
    {
        name: 'search',
        pointers: ['.search-filter-wrapper'],
        generatePart: '<%search...search%>',
        hasbutton: true,
        use: true
    },
    {
        name: 'Date picker',
        pointers: ['.datepicker'],
        generatePart: '<%datePicker...datePicker%>',
        hasbutton: true,
        use: true
    },
    {
        name: 'PDF Download',
        pointers: ['.IRDownload'],
        generatePart: '<%pdfDownload...pdfDownload%>',
        hasbutton: false,
        use: true
    }
];

// Orders list memory =========================
let ordObj = [];

// Trades list memory =========================
let tradObj = [
    {
        name: 'trades',
        pointers: ['.trade', '.timestampFull'],
        generatePart: '<%trades...trades%>',
        use: true
    },
    {
        name: 'time',
        pointers: ['.updated'],
        generatePart: '<%time...time%>',
        use: true
    },
    {
        name: 'price',
        pointers: ['.price'],
        generatePart: '<%price...price%>',
        use: true
    },
    {
        name: 'volume',
        pointers: ['.volume'],
        generatePart: '<%volume...volume%>',
        use: true
    },
    {
        name: 'bid',
        pointers: ['.bid'],
        generatePart: '<%bid...bid%>',
        use: true
    },
    {
        name: 'ask',
        pointers: ['.ask'],
        generatePart: '<%ask...ask%>',
        use: true
    },
    {
        name: 'change',
        pointers: ['.change'],
        generatePart: '<%change...change%>',
        use: true
    },
    {
        name: 'change percent',
        pointers: ['.changePercent'],
        generatePart: '<%changePercent...changePercent%>',
        use: true
    },
    {
        name: 'value',
        pointers: ['.value'],
        generatePart: '<%value...value%>',
        use: true
    }
];

// Emails list memory =========================
let emailObj = [];
let emailStyleObj = [
    {
        name: 'Layout 1',
        action: function () {
            $('iframe').contents().find('.twoSides, .basicAlert, .register-simple, .emailLayoutSix, .emailLayoutSeven, .emailLayoutEight, .emailLayoutNine, .popupEmail').fadeOut(0);
            $('iframe').contents().find('.emailAlert-form').fadeIn(0);
        },
        generatePart: '<%emailLayoutOne...emailLayoutOne%>',
        features: [],
        show: true,
        use: false
    },
    {
        name: 'Layout 2',
        action: function () {
            $('iframe').contents().find('.emailAlert-form, .twoSides, .basicAlert, .emailLayoutSix, .emailLayoutSeven, .emailLayoutEight, .emailLayoutNine, .popupEmail').fadeOut(0);
            $('iframe').contents().find('.register-simple').fadeIn(0);
        },
        generatePart: '<%emailLayoutTwo...emailLayoutTwo%>',
        features: [],
        show: false,
        use: false
    },
    {
        name: 'Layout 3',
        action: function () {
            $('iframe').contents().find('.emailAlert-form, .register-simple, .twoSides, .emailLayoutSix, .emailLayoutSeven, .emailLayoutEight, .emailLayoutNine, .popupEmail').fadeOut(0);
            $('iframe').contents().find('.basicAlert').fadeIn(0);
        },
        generatePart: '<%emailLayoutThree...emailLayoutThree%>',
        features: [],
        show: false,
        use: false
    },
    {
        name: 'Layout 4',
        action: function () {
            $('iframe').contents().find('.basicAlert, .emailAlert-form, .emailLayoutSix, .register-simple, .emailLayoutSeven, .emailLayoutEight, .emailLayoutNine, .twoSides').fadeOut(0);
            $('iframe').contents().find('.popupEmail').fadeIn(0);
        },
        generatePart: '<%emailLayoutFive...emailLayoutFive%>',
        features: [],
        show: false,
        use: false
    },
    {
        name: 'Layout 5',
        action: function () {
            $('iframe').contents().find('.basicAlert, .emailAlert-form, .emailLayoutSix, .register-simple, .emailLayoutSeven, .emailLayoutEight, .emailLayoutNine, .popupEmail').fadeOut(0);
            $('iframe').contents().find('.twoSides').fadeIn(0);
        },
        generatePart: '<%emailLayoutFive...emailLayoutFive%>',
        features: [],
        show: false,
        use: false
    },
    {
        name: 'Layout 6',
        action: function () {
            $('iframe').contents().find('.register-simple, .basicAlert, .emailAlert-form, .twoSides, .emailLayoutSeven, .emailLayoutEight, .emailLayoutNine, .popupEmail').fadeOut(0);
            $('iframe').contents().find('.emailLayoutSix').fadeIn(0);
        },
        generatePart: '<%emailLayoutSix...emailLayoutSix%>',
        features: [],
        show: false,
        use: false
    },
    {
        name: 'Layout 7',
        action: function () {
            $('iframe').contents().find('.basicAlert, .emailAlert-form, .twoSides, .register-simple, .emailLayoutSix, .emailLayoutEight, .emailLayoutNine, .popupEmail').fadeOut(0);
            $('iframe').contents().find('.emailLayoutSeven').fadeIn(0);
        },
        generatePart: '<%emailLayoutSeven...emailLayoutSeven%>',
        features: [],
        show: false,
        use: false
    },
    {
        name: 'Layout 8',
        action: function () {
            $('iframe').contents().find('.basicAlert, .emailAlert-form, .twoSides, .register-simple, .emailLayoutSix, .emailLayoutSeven, .emailLayoutNine, .popupEmail').fadeOut(0);
            $('iframe').contents().find('.emailLayoutEight').fadeIn(0);
        },
        generatePart: '<%emailLayoutEight...emailLayoutEight%>',
        features: [],
        show: false,
        use: false
    },
    {
        name: 'Layout 9',
        action: function () {
            $('iframe').contents().find('.basicAlert, .emailAlert-form, .twoSides, .register-simple, .emailLayoutSix, .emailLayoutSeven, .emailLayoutEight, .popupEmail').fadeOut(0);
            $('iframe').contents().find('.emailLayoutNine').fadeIn(0);
        },
        generatePart: '<%emailLayoutNine...emailLayoutNine%>',
        features: [],
        show: false,
        use: false
    }
];

// ======================================================================================================
// Angular Init
// ======================================================================================================
const galleryApp = angular.module('galleryApp', ['ngAria', 'ngAnimate', 'ngRoute', 'angularResizable']);
// ======================================================================================================
// Angular directives, factories, controllers
// ======================================================================================================

// Router ===============================================================================================
galleryApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/featList.view.html',
            controller: 'chartController'
        })
        .when('/chart', {
            templateUrl: 'views/featList.view.html',
            controller: 'chartController'
        })
        .when('/calc', {
            templateUrl: 'views/tabsList.view.html',
            controller: 'calcController'
        })
        .when('/lookup', {
            templateUrl: 'views/tabsList.view.html',
            controller: 'lookController'
        })
        .when('/miniquote', {
            templateUrl: 'views/gridList.view.html',
            controller: 'miniController'
        })
        .when('/profile', {
            templateUrl: 'views/tabsList.view.html',
            controller: 'profController'
        })
        .when('/news', {
            templateUrl: 'views/featList.view.html',
            controller: 'newsController'
        })
        .when('/orders', {
            templateUrl: 'views/noList.view.html',
            controller: 'ordersController'
        })
        .when('/trades', {
            templateUrl: 'views/featList.view.html',
            controller: 'tradesController'
        })
        .when('/emails', {
            templateUrl: 'views/tabsList.view.html',
            controller: 'emailController'
        });
    // $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
}]);
// Event message trigger to format height of iframes ====================================================
galleryApp.directive('resize', ['$window', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            angular.element($window).on('message', function (event) {
                var data = event.data || event.originalEvent.data;
                if (data !== "ready") element.attr('height', data + 'px');
            });
        }
    };
}]);

galleryApp.directive('tabs', ['$window', '$timeout', function ($window, $timeout) {
    let currentLeft = 0;
    let styW = 0;
    let elmCount = 0;
    let avgElmWid = 0;
    let perW = 0;
    let curr = 0;

    function tabResponce(scope, elem) {
        let ulS = '.style-list';
        let icoW = $('.iconSet').outerWidth(true);
        let elm = $(ulS).find('li');
        currentLeft = parseFloat($(ulS).css('left'));
        perW = $(ulS).parent().width() - icoW;
        elmCount = elm.length;
        styW = 0;
        for (let i = 0; i < elmCount; i++) {
            styW += elm[i].clientWidth;
            if ($(elm[i]).hasClass('activeTab')) curr = i;
        }
        avgElmWid = styW / elmCount;
        $(ulS).width(styW);
        $(ulS).parent().find('.left-tab-arrow').remove();
        $(ulS).parent().find('.right-tab-arrow').remove();
        $(ulS).parent().find('.blank-tab-box').remove();
        if (styW > perW) {
            var currPl = avgElmWid * (curr + 1);
            var currLeftPos = currentLeft * -1;
            $(ulS).parent().append(`<div class="left-tab-arrow"> < </div>`);
            $(ulS).parent().append(`<div class="right-tab-arrow" style="margin-right:${icoW}px"> > </div>`);
            $(ulS).parent().append(`<div class="blank-tab-box" style="width:${icoW}px"></div>`);
            if (curr === 0) currentLeft = 30;
            else if (curr === elmCount - 1) currentLeft = ((styW - perW + 30) * -1 );
            else if (currPl - avgElmWid < currLeftPos) currentLeft = (currPl - avgElmWid - 60) * -1;
            else if (currPl > currLeftPos + perW) currentLeft = perW - currPl - 60;
        } else {
            currentLeft = 0;
        }
        $(ulS).animate({"left": Math.floor(currentLeft) + "px"}, 'fast');
    }

    function leftSlide() {
        if (perW < styW + currentLeft) currentLeft = currentLeft - avgElmWid;
        $('.style-list').animate({"left": Math.floor(currentLeft) + "px"}, 'fast');
    }

    function rightSlide() {
        if ((currentLeft - 30) > (avgElmWid * -1)) currentLeft = 30;
        else currentLeft = currentLeft + avgElmWid;
        $('.style-list').animate({"left": Math.floor(currentLeft) + "px"}, 'fast');
    }

    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            angular.element($window).on('resize', function (event) {
                tabResponce(scope, element);
            });
            scope.$on('$viewContentLoaded', function () {
                $timeout(function () {
                    tabResponce(scope, element);
                })
            });
            angular.element(element).on('click', function (event) {
                $timeout(function () {
                    tabResponce(scope, element);
                })
            });
            angular.element(document).off('click.lefttabarrow');
            angular.element(document).off('click.righttabarrow');
            angular.element(document).on('click.lefttabarrow', '.left-tab-arrow', rightSlide);
            angular.element(document).on('click.righttabarrow', '.right-tab-arrow', leftSlide);
        }
    };
}]);

// Loader Bar directive draws and controls progress bar =================================================
galleryApp.directive('loadingbar', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
    return {
        restrict: 'A',
        scope: {
            perc: '@perc'
        },

        link: function (scope, element, attributes) {
            attributes.$observe('perc', function (value) {
                if (value >= 0)
                    scope.sp = 'show';
                if (value != 100)
                    scope.numb = value + '%';
                else {
                    scope.numb = 'completed';
                    $timeout(function () {
                        scope.sp = '';
                        $rootScope.hideExportBtn = false;
                    }, 2000);
                }

                if (value >= 50)
                    scope.st = 'color: #ffffff';
                scope.wd = value;
            });

        },
        template: '<div class="loader {{sp}}"><div class="load-bar" style="width: {{wd}}%"></div><div class="load-bar-perc" style="{{st}}">{{numb}}</div></div>'
    };
}]);

// Adapt iframe to reset itself on window resize ========================================================
galleryApp.directive('adapt', ['$window', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            angular.element($window).on('resize', function () {
                element.css('width', 'auto');
                scope.$apply(scope.activeResPh = scope.activeResTab = false);
                scope.$apply(scope.activeResDesk = true);
            });
        }
    };
}]);

// Grid generator for miniquotes ========================================================================
galleryApp.directive('imageload', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('load', function () {
                scope.$apply(scope.mini.width = this.width);
                scope.$apply(scope.mini.height = this.height);
            });
        }
    };
});

galleryApp.directive('grid', ['$window', 'grider', function ($window, grider) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            let once = true;
            scope.$watch('miniList', function (newVal, oldVal) {
                var start = false;
                for (let i = 0; i < scope.miniList.length; i++) {
                    start = (scope.miniList[i].hasOwnProperty("width") && scope.miniList[i].hasOwnProperty("height"));
                    if (!start) break;
                }
                if (start && once) {
                    let list = grider.draw(scope.miniList, $(element)[0].clientWidth);
                    scope.miniList = list;
                    once = false;
                }
            }, true);
            // angular.element($window).on('resize', function () {
            //     grider.draw(scope.miniList, this.width)
            // });
        }
    };
}]);

galleryApp.factory('grider', ['$rootScope', function ($rootScope) {
    let grid = {};
    let opt = {
        maxCol: 3,
        minWidth: 200,
        maxContWidth: 600,
        containerWidth: 0,
        padding: 0,
        offset: 48
    };
    /*
     * 3. surasti eiles aukscio vidurki
     * 4. pritaikyti kiekviena vidurki
     * 5.
     * */

    grid.draw = function (items, wid) {
        opt.containerWidth = wid;
        let arr = inlineCount(items);
        let padd = getPaddingPerc();
        return calculateEach(arr, items, padd);
    };

    // 1. find how much inline
    function inlineCount(items) {
        let count = [];
        for (let i = 0; i < items.length; i++) {
            let tempCount = 0;
            let itemCount = 0;
            let j = i;
            while ((tempCount + items[j].column) <= opt.maxCol) {
                tempCount += items[j].column;
                itemCount++;
                j++;
                if (j === items.length) break;
            }
            if (tempCount < opt.maxCol && j < items.length) {
                if ((tempCount + items[j].column) <= opt.maxCol + 1) {
                    itemCount++;
                    tempCount += items[j].column;
                }
            }
            count.push([itemCount, tempCount]);
            i += itemCount - 1;
        }
        return count;
    }

    function calculateEach(arr, list, padd) {
        let listPos = 0;
        for (let i = 0; i < arr.length; i++) {
            let x = opt.maxCol / arr[i][1];
            let startPos = listPos;
            let maxPos = listPos + arr[i][0];
            let heImg = calcAvgHeight(list.slice(listPos, maxPos));
            console.log(heImg);
            let j = 0;
            for (listPos; listPos < maxPos; listPos++) {
                let styleStr = ``;

                let wid = (arr[i][1] <= opt.maxCol && i == arr.length - 1) ? ((list[listPos].column * 100) / opt.maxCol) : ((x * list[listPos].column * 100) / opt.maxCol) * heImg[j][0];

                let dd =

                    console.log("wid", wid);

                styleStr += `height: ${heImg[j][1] }px;`;
                if (arr[i][0] === 1) {
                    styleStr += `width: ${wid}%;`;
                } else if (listPos === startPos) {
                    styleStr += `width: ${wid - padd}%;`;
                    styleStr += `margin-right:${padd}%;`;
                } else if (listPos === maxPos - 1) {
                    styleStr += `width: ${wid - padd}%;`;
                    styleStr += `margin-left:${padd}%;`;
                } else {
                    styleStr += `width: ${wid - (2 * padd)}%;`;
                    styleStr += `margin-left:${padd}%; margin-right:${padd}%;`;
                }
                list[listPos].style = styleStr;
                j++;
            }
        }
        return list;
    }

    function getPaddingPerc() {
        return (100 * opt.padding) / opt.containerWidth;
    }

    function calcAvgHeight(line, x) {
        let ss = 0;
        let maxH = 0;
        let sumW = 0;
        let sumH = 0;
        for (let i = 0; i < line.length; i++) {
            console.log("he", line[i].height);
            sumW += line[i].width;
            sumH += (line[i].height / (line[i].width / opt.containerWidth));

            if (line[i].height > maxH) {
                maxH = line[i].height;
                ss = i;
            }

        }
        let heiArr = [];

        // susideti tikrus dydzius i array ir jiems pritaikius procentus pagal bendra ilgi bus galima gauti normalu auksti

        console.log("sum", sumH, "avg", sumH / line.length);


        for (let i = 0; i < line.length; i++) {
            console.log();

            console.log((sumW / line.length) / line[i].width, (sumH / line.length) * ((line[i].width / opt.containerWidth)));

            heiArr.push([(sumW / line.length) / line[i].width, (sumH / line.length) * ((line[i].width / opt.containerWidth))])
        }

        console.log("ww", sumW, "avg", sumW / line.length);

        // return (line[ss].height / (opt.containerWidth / line[ss].width)) + (opt.offset/2) + opt.offset ;
        return heiArr;
    }

    return grid;
}]);

// File generator factory to by used across controllers =================================================
galleryApp.factory('generator', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
    let generator = {};
    let reqPromise = [];
    let filesHtml = [];
    let filesJs = [];
    let filesGlobalJs = null;
    let filesGlobalCss = null;

    generator.addToExport = function (item, itemProp) {
        if ($.inArray(itemProp, exportSettings[item].haveThis) == -1) {
            exportSettings[item].haveThis.push(itemProp);
            let idx = $.inArray(itemProp, exportSettings[item].removeThis);
            if (idx != -1)
                exportSettings[item].removeThis.splice(idx, 1)
        }
    };

    generator.removeFromExport = function (item, itemProp, name) {
        if ($.inArray(itemProp, exportSettings[item].removeThis) == -1) {
            exportSettings[item].removeThis.push(itemProp);
            let idx = $.inArray(itemProp, exportSettings[item].haveThis);
            if (idx != -1) {
                exportSettings[item].haveThis.splice(idx, 1);
                exportSettings[item].featName.splice($.inArray(item.name, exportSettings[item].featName), 1)
            }
        }
    };

    generator.updateExportStyle = function (list, id) {
        for (let key in list) {
            if (list.hasOwnProperty(key)) {
                if (list[key].use) {
                    exportSettings[id].haveThis.push(list[key].generatePart);
                    if ($.inArray(list[key].generatePart, exportSettings[id].removeThis) !== -1) exportSettings[id].removeThis.splice($.inArray(list[key].generatePart, exportSettings[id].removeThis), 1)
                } else {
                    exportSettings[id].removeThis.push(list[key].generatePart);
                    if ($.inArray(list[key].generatePart, exportSettings[id].haveThis) !== -1) exportSettings[id].haveThis.splice($.inArray(list[key].generatePart, exportSettings[id].haveThis), 1)
                }
            }
        }
    };

    generator.updateExportList = function (list, id) {
        exportSettings[id].haveThis = [];
        exportSettings[id].removeThis = [];
        exportSettings[id].featName = [];
        for (let key in list) {
            if (list.hasOwnProperty(key)) {
                if (list[key].use) {
                    exportSettings[id].haveThis.push(list[key].generatePart);
                    exportSettings[id].featName.push(list[key].name);
                } else {
                    exportSettings[id].removeThis.push(list[key].generatePart);
                }
            }
        }
    };

    generator.useThis = function (list, id, styleList) {
        generator.updateExportList(list, id);
        if (styleList) generator.updateExportStyle(styleList, id);
        exportSettings[id].use = true;
    };

    generator.clearExportList = function (id) {
        exportSettings[id].haveThis = [];
        exportSettings[id].removeThis = [];
        exportSettings[id].use = false;
    };

    generator.exportModules = function (name) {
        $rootScope.completed = 0;
        getCodeFiles();
        $q.all(reqPromise).then(function () {
            $rootScope.completed = 10;
            // Generate Html file features
            for (let i = 0; i < filesHtml.length; i++) {
                for (let j = 0; j < exportSettings[filesHtml[i].name].haveThis.length; j++) {
                    filesHtml[i].data = cleanCode(filesHtml[i].data, exportSettings[filesHtml[i].name].haveThis[j], '<!--', '-->');
                    filesHtml[i].data = cleanCode(filesHtml[i].data, exportSettings[filesHtml[i].name].haveThis[j], '/*', '*/');
                }
                // Removes selected parts
                filesHtml[i].data = generateCode(filesHtml[i].data, '<%remove...remove%>', '<!--', '-->');
                filesHtml[i].data = generateCode(filesHtml[i].data, '<%remove...remove%>', '/*', '*/');

                for (let k = 0; k < exportSettings[filesHtml[i].name].removeThis.length; k++) {
                    filesHtml[i].data = generateCode(filesHtml[i].data, exportSettings[filesHtml[i].name].removeThis[k], '<!--', '-->');
                    filesHtml[i].data = generateCode(filesHtml[i].data, exportSettings[filesHtml[i].name].removeThis[k], '/*', '*/');
                }
                filesHtml[i].data = cleanCommas(filesHtml[i].data);
                filesHtml[i].data = cleanInlineStyle(filesHtml[i].data);
                $rootScope.completed = 10 + (40 * (i / filesHtml.length));
            }
            // Generate CSS file
            for (let key in exportSettings) {
                if (exportSettings.hasOwnProperty(key)) {
                    if (exportSettings[key].use) {
                        filesGlobalCss.data = cleanCode(filesGlobalCss.data, exportSettings[key].tag, '/*', '*/');
                    } else {
                        filesGlobalCss.data = generateCode(filesGlobalCss.data, exportSettings[key].tag, '/*', '*/');
                    }
                    // Cleans Calc left classes
                    if (key == 'calc' && !exportSettings[key].use) {
                        filesGlobalCss.data = generateCode(filesGlobalCss.data, calcStyleObj[1].generatePart, '/*', '*/');
                    }
                }
            }

            // Generates global Css
            for (let i = 0; i < filesHtml.length; i++) {
                for (let j = 0; j < exportSettings[filesHtml[i].name].haveThis.length; j++) {
                    filesGlobalCss.data = cleanCode(filesGlobalCss.data, exportSettings[filesHtml[i].name].haveThis[j], '/*', '*/');
                }
                for (let k = 0; k < exportSettings[filesHtml[i].name].removeThis.length; k++) {
                    filesGlobalCss.data = generateCode(filesGlobalCss.data, exportSettings[filesHtml[i].name].removeThis[k], '/*', '*/');
                }
                $rootScope.completed = 50 + (40 * (i / filesHtml.length));
            }

            //  Generates global JS file
            for (let i = 0; i < filesHtml.length; i++) {
                for (let j = 0; j < exportSettings[filesHtml[i].name].haveThis.length; j++) {
                    filesGlobalJs.data = cleanCode(filesGlobalJs.data, exportSettings[filesHtml[i].name].haveThis[j], '/*', '*/');
                }
                filesGlobalJs.data = generateCode(filesGlobalJs.data, '<%remove...remove%>', '/*', '*/');
                for (let k = 0; k < exportSettings[filesHtml[i].name].removeThis.length; k++) {
                    filesGlobalJs.data = generateCode(filesGlobalJs.data, exportSettings[filesHtml[i].name].removeThis[k], '/*', '*/');
                }
                $rootScope.completed = 50 + (40 * (i / filesHtml.length));
            }

            createZip(name);
            filesHtml = [];
            filesJs = [];
            filesGlobalJs = null;
            filesGlobalCss = null;
            $rootScope.completed = 100;
        }).catch(function (err) {
            console.error(err);
        });
    };

    function generateCode(str, part, startTag, endTag) {
        let temp = str;
        if (str.length != 0 && part.length != 0) {
            let st = part.split('...');
            while (temp.indexOf(startTag + st[0] + endTag) != -1) {
                let sIdx = temp.indexOf(startTag + st[0] + endTag);
                let strTempStart = temp.substring(0, sIdx);
                let eIdx = temp.indexOf(startTag + st[1] + endTag) + (startTag + st[1] + endTag).length;
                if (temp.indexOf(startTag + st[1] + endTag) == -1)
                    break;
                let strTempEnd = temp.substr(eIdx);
                temp = strTempStart.trim() + strTempEnd.trim();
            }
        }
        return temp;
    }

    function cleanCode(str, part, startTag, endTag) {
        if (str.length != 0 && part.length != 0) {
            let st = part.split('...');
            while (str.indexOf(startTag + st[0] + endTag) != -1) {
                str = str.replace(startTag + st[0] + endTag, '');
                str = str.replace(startTag + st[1] + endTag, '');
            }
        }
        return str;
    }

    function cleanCommas(str) {
        if (str.length !== 0) {
            let startInd = 0;
            while (str.indexOf('[', startInd) != -1) {
                startInd = str.indexOf('[', startInd);
                let endInd = str.indexOf(']', startInd);
                let strTempStart = str.substring(0, startInd);
                let strTempEnd = str.substring(endInd);
                let arrStr = str.substring(startInd, endInd).trim();
                while (arrStr[arrStr.length - 1] === ',') arrStr = arrStr.substring(0, arrStr.length - 1);
                str = strTempStart.trim() + arrStr.trim() + strTempEnd.trim();
                startInd = endInd;
            }
        }
        return str;
    }

    function cleanInlineStyle(str) {
        if (str.length !== 0) {
            let st = 'style=';
            while (str.indexOf('style=') != -1) {
                let startInd = str.indexOf(st);
                let endInd = str.indexOf('"', startInd + st.length + 1);
                str = str.substring(0, startInd - 1) + str.substring(endInd + 1)
            }
        }
        return str;
    }

    function createZip(name) {
        const fileName = name.replace(/\s/g, "");
        let zip = new JSZip();
        for (let i = 0; i < filesHtml.length; i++) {
            zip.file(filesHtml[i].name + ".html", filesHtml[i].data);
        }
        if (filesJs.length > 0) {
            let jsFold = zip.folder("js");
            for (let i = 0; i < filesJs.length; i++) {
                jsFold.file(filesJs[i].name + ".ctrl.js", filesJs[i].data);
            }
        }
        zip.file(filesGlobalJs.name + ".js", filesGlobalJs.data);
        zip.file(filesGlobalCss.name + ".css", filesGlobalCss.data);
        zip.generateAsync({type: "blob"})
            .then(function (content) {
                saveAs(content, fileName + ".zip");
            });
    }

    function getCodeFiles() {
        for (let key in exportSettings) {
            if (exportSettings.hasOwnProperty(key) && exportSettings[key].use) {
                const fName = key;
                // Gets HTML files
                let httpPromiseHTML = $http.get(exportSettings[key].url)
                    .then(
                        function (response) {
                            filesHtml.push({name: fName, data: response.data});
                        },
                        function (err) {
                            console.error(err);
                        }
                    );
                reqPromise.push(httpPromiseHTML);
                // Gets JS files
                let httpPromiseJS = $http.get(exportSettings[key].js)
                    .then(
                        function (response) {
                            filesJs.push({name: fName, data: response.data});
                        },
                        function (err) {
                            console.error(err);
                        }
                    );
                reqPromise.push(httpPromiseJS);
            }
        }

        // Gets global JS files
        let httpPromiseGlobalJS = $http.get(exportCommon.js)
            .then(
                function (response) {
                    filesGlobalJs = {name: 'ir.client', data: response.data};
                },
                function (err) {
                    console.error(err);
                }
            );
        reqPromise.push(httpPromiseGlobalJS);

        // Gets global CSS file
        let httpPromiseGlobalCss = $http.get(exportCommon.css)
            .then(
                function (response) {
                    filesGlobalCss = {name: 'ir.client', data: response.data};
                },
                function (err) {
                    console.error(err);
                }
            );
        reqPromise.push(httpPromiseGlobalCss);
    }

    return generator;
}]);

// Global functions for different views =================================================================
galleryApp.factory('globalFunctions', ['generator', function (generator) {
    let globalFunctions = {};

    globalFunctions.bootControllerText = function ($rootScope, pageId) {
        for (let i = 0; i < $rootScope.mainMenuList.length; i++) $rootScope.mainMenuList[i].use = false;
        for (let i = 0; i < menuList.length; i++) {
            if (menuList[i].id == pageId) {
                $rootScope.mainMenuList[i].use = true;
                $rootScope.msg = $rootScope.mainMenuList[i].name;
            }
        }
    };

    globalFunctions.resolution = function ($scope, dev) {
        const select = $('.iframe-card');
        switch (dev) {
            case "phone":
                select.width(viewModes.phone);
                $scope.activeResDesk = $scope.activeResTab = false;
                $scope.activeResPh = true;
                break;
            case "tablet":
                select.width(viewModes.tablet);
                $scope.activeResPh = $scope.activeResDesk = false;
                $scope.activeResTab = true;
                break;
            case "desktop":
                select.width(viewModes.desktop);
                $scope.activeResPh = $scope.activeResTab = false;
                $scope.activeResDesk = true;
                break;
        }
    };

    globalFunctions.addModule = function ($scope, pageId) {
        if (typeof $scope.styleList !== 'undefined') {
            for (let i = 0; i < $scope.styleList.length; i++) {
                $scope.styleList[i].use = i === $scope.idx;
            }
            generator.useThis($scope.featuresList, pageId, $scope.styleList);
        } else {
            generator.useThis($scope.featuresList, pageId);
        }
        $scope.moduleAdded = true;
    };

    globalFunctions.removeModule = function ($scope, pageId) {
        if (typeof $scope.styleList !== 'undefined') {
            for (let i = 0; i < $scope.styleList.length; i++) {
                $scope.styleList[i].use = false;
            }
        }

        generator.clearExportList(pageId);
        $scope.moduleAdded = false;
    };

    globalFunctions.changeStyle = function ($scope, pageId, item, index) {
        $scope.idx = index;
        $scope.selectorPosition = {'left': index * 120 + 'px'};

        for (let i = 0; i < $scope.styleList.length; i++) {
            $scope.styleList[i].show = i == index;
        }
        $scope.moduleAdded = $scope.styleList[index].use;

        //generator.updateExportStyle($scope.styleList, pageId);
        item.action();
    };

    globalFunctions.changeAction = function ($scope, item, pageId, callback) {
        for (let i = 0; i < item.pointers.length; i++) {
            if (item.use) $('iframe').contents().find(item.pointers[i]).fadeIn(500);
            else $('iframe').contents().find(item.pointers[i]).fadeOut(500);
        }
        if (typeof callback === 'function') callback();
        generator.updateExportList($scope.featuresList, pageId);
    };

    globalFunctions.checkFeaturesForLayout = function ($scope, itm) {
        for (let i = 0; i < $scope.styleList.length; i++) {
            if ($scope.styleList[i].show) return ($scope.styleList[i].features).indexOf(itm.toLowerCase()) !== -1;
        }
    };

    globalFunctions.showFeaturesList = function ($scope) {
        for (let i = 0; i < $scope.styleList.length; i++) {
            if ($scope.styleList[i].show) return $scope.styleList[i].features.length !== 0;
        }
    };

    return globalFunctions;
}]);

