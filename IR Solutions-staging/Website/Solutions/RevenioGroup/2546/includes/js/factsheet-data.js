$(function() {
    var chart = null;
    var jsonData = null;
    var globalColors = ['#2d0028', '#a0c8f0', '#7c1839', '#9ba08c', '#892da0', '#c5da00'];
    var returnData = null;
    dataGet();

    function dataGet() {
        $.ajax({
            url: "http://devir.euroinvestor.com/ServiceEngine/api/json/reply/RequestKeyFigureTransactionData?apiversion=1&solutionID=2684&customerKey=Anne_tester&instrumentID=1001992",
            method: "GET",
            dataType: "JSON"
        }).done(function(data) {
            jsonData = data;
            init();
        }).fail(function(err) {
            console.log(err)
        });
    }

    function init() {
        getDataFromFeed();
        setTimeout(smallDonut, 500);
        setTimeout(addNumbertoShape, 500);
        setTimeout(yearStatisticIcons, 500);
        setTimeout(getDataFromFeedTitle, 500);
        setTimeout(rndBoxData, 500);
        setTimeout(progressBoxData, 500);


    }

    function getDataFromFeed(tableid, rowid) {
        var tablesidnumber = tableid;
        var rowidnumber = rowid;
        var index = jsonData.tables;
        for (var i = 0; i < index.length; i++) {
            var tablesid = index[i].tableId;
            if (tablesid == tablesidnumber) {
                var rows = index[i].rows;
                for (var x = 0; x < rows.length; x++) {
                    var tablesidd = rows[x].id;
                    if (tablesidd == rowidnumber) {
                        return rows[x].rowData;
                        break;
                    }
                }

            }
        }
    }

    function getDataFromFeedTitle() {
        var tablesidnumber = 2599;
        var index = jsonData.tables;
        for (var i = 0; i < index.length; i++) {
            var tablesid = index[i].tableId;

            if (tablesid == tablesidnumber) {
                var rows = index[i].rows;
                var visualList = '';
                $.each(rows, function(i, item) {
                    visualList += '<li><div><span>'+ rows[i].rowData +'%</span><p>'+ rows[i].rowTitle +'</p></div></li>';
                });
                $('.IRFactsheetVisualList').append(visualList);
            }
        }

        $('.IRFactsheetVisualList li span').each(function() {
            var percentage = $(this).text().replace(/[^0-9]/gi, '');
            var percentageIm = parseInt(percentage) + 40;
            $(this).closest("li").css('width', percentageIm + "%");
        });
    }

    function smallDonut() {
        var dd = getDataFromFeed(2600, 218);
        var number = parseFloat(dd);
        var smallDoughnutData = [{
            value: 50,
            color: "#378E91"
        }, {
            value: 50 - number,
            color: "#DEEDED"
        }];

        $("#mySmallDoughnut").doughnutit({
            dnData: smallDoughnutData,
            dnSize: 180,
            dnInnerCutout: 60,
            dnAnimation: false,
            dnAnimationSteps: 60,
            dnAnimationEasing: 'linear',
            dnStroke: false,
            dnShowText: true,
            dnFontSize: '30px',
            dnFontOffset: 20,
            dnFontColor: "#378E91",
            dnText: 'G1',
            dnStartAngle: 90,
            dnCounterClockwise: false,
            dnRightCanvas: {
                rcRadius: 5,
                rcPreMargin: 20,
                rcMargin: 20,
                rcHeight: 40,
                rcOffset: 5,
                rcLineWidth: 130,
                rcSphereColor: '#378E91',
                rcSphereStroke: '#378E91',
                rcTop: {
                    rcTopLineColor: '#378E91',
                    rcTopDashLine: 0,
                    rcTopFontSize: '13px',
                    rcStrokeWidth: 1,

                    rcTopPreMargin: 20,
                    rcTopMargin: 20,
                    rcTopHeight: 40,
                    rcTopLineWidth: 130,

                    rctAbove: {
                        rctText: 'Last',
                        rctOffset: 2,
                        rctImageOffsetRight: 5,
                        rctImageOffsetBottom: 0,
                        // rctImage: 'calendar.png',
                    },
                    rctBelow: {
                        rctText: dd,
                        rctFontSize: '35px',
                        rctFontStyle: 'bold',
                        rctOffset: 2,
                        rctImageOffsetRight: 5,
                        rctImageOffsetBottom: 0,
                        // rctImage: 'calendar.png'
                    }
                },
                rcBottom: {
                    rcBottomDashLine: 0,
                    rcBottomFontSize: '15px',
                    rcBottomLineColor: '#378E91',
                    rcStrokeWidth: 1,

                    rcBottomPreMargin: 20,
                    rcBottomMargin: 20,
                    rcBottomHeight: 40,
                    rcBottomLineWidth: 130,

                    rcbAbove: {
                        // rcbImage: 'calendar.png',
                        rcbImageOffsetBottom: 0,
                        rcbImageOffsetRight: 5,
                        rcbText: 'Updated',
                        rcbFontSize: '13px',
                        rcbOffset: 2
                    },
                    rcbBelow: {
                        rcbImageOffsetRight: 5,
                        rcbImageOffsetBottom: 0,
                        rcbText: '19/10/2016',
                        rcbOffset: 5
                    }
                }
            }
        });
    }

    function addNumbertoShape() {
        var dd = getDataFromFeed(2600, 219);
        $(".bigShapes-box span").text(dd);
    }

    function yearStatisticIcons() {
        var firstT = getDataFromFeed(2603, 225);
        $(".IconTextBox .bigText.first").text("$" +firstT+ " million");
        var secondT = getDataFromFeed(2603, 226);
        $(".IconTextBox .bigText.second").text(secondT+ " projects");
    }

    function rndBoxData() {
        var small = getDataFromFeed(2602, 222);
        $(".rndBox.small .biggerText").append(small+'<p>Mil</p>');
        var medium = getDataFromFeed(2602, 223);
        $(".rndBox.medium .biggerText").append(medium+'<p>Mil</p>');
        var large = getDataFromFeed(2602, 224);
        $(".rndBox.big .biggerText").append(large+'<p>Mil</p>');
    }

    function progressBoxData() {
        var lowest = getDataFromFeed(2604, 227);
        var medium = getDataFromFeed(2604, 228);
        var largest = getDataFromFeed(2604, 229);
        var countTotal = (lowest*100 + medium*100 + largest*100)/100;
        var lowestPercentage = ((lowest*100) / countTotal).toFixed(2);
        var mediumPercentage = ((medium*100) / countTotal).toFixed(2);
        var largestPercentage = ((largest*100) / countTotal).toFixed(2);

        $(".progressBar:first-child").append('<span>'+ lowest +'</span>').css('width',lowestPercentage+ '%');
        $(".progressBar:nth-child(2)").append('<span>'+ medium +'</span>').css('width',mediumPercentage+ '%');
        $(".progressBar:nth-child(3)").append('<span>'+ largest +'</span>').css('width',largestPercentage+ '%');

    }
});
