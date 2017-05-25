var clientLCID = 2057;
var clientApiVersion = 1;
var clientSolutionID = 3454;
var clientCustomerKeyRequired = 'novozymes';
var totalNumberOfYears = 5;
var sep1000 = ',';
var globalName = "";
var globalSubtitle = "";
var globalMark = "";
var globalColors = ['#c5da00', '#0f3e49', '#ffb403', '#7c1839', '#892da0', '#6e78dc', '#ff90a3', '#feec30', '#9ba08c', '#a0c8f0', '#9ba08c', '#892da0'];
var clientName = 'Novozymes A/S';
var chart = null;
var jsonData = null;
var excludes = [];
var anim = 0;
var minVal = 0;
var notes = [];
var filename = 'annually';

var requestTranslationsData = null;
var requestKeyfiguresData = null;
var template_IRKeyfigures = null;
$(function () {
    checkLanguage();
    loadTranslationsData();
    loadKeyfiguresData();
    $.when(requestTranslationsData, requestKeyfiguresData).done(function (translationsData, keyfiguresData) {
        jsonData = keyfiguresData[0].data;
        translations = translationsData[0].data;
        var o = {
            headers: translations
        };
        initHandlebars(o);
        init();
    });

});

function checkLanguage() {
    if (getUriParam('language') === 'da') clientLCID = 1030;
    else clientLCID = 2057;
}

function loadTranslationsData() {
    var postRequest = {
        lcid: clientLCID,
        apiversion: clientApiVersion,
        solutionID: clientSolutionID,
        customerKey: clientCustomerKeyRequired
    };
    requestTranslationsData = $.ajax({
        url: getServiceEngingeURL() + 'RequestTranslation',
        type: 'GET',
        data: postRequest,
        traditional: true
    });
}

function loadKeyfiguresData() {
    var dataUrl = (getUriParam('data') == 'quarterly') ? 'js/dataQuarterly.json' : 'js/data.json';
    filename = (getUriParam('data') == 'quarterly') ? 'quarterly' : 'annually';
    requestKeyfiguresData = $.ajax({
        url: dataUrl,
        method: "GET",
        dataType: "JSON"
    });
}

function getUriParam(key) {
    var results = new RegExp('[\?&]' + key + '=([^&#]*)').exec(window.location.href);
    try {
        return results[1];
    }
    catch (err) {
        return 0;
    }
}

function getServiceEngingeURL() {
    var url = getProtocol() + '//' + getHost() + '/ServiceEngine/api/json/reply/';
    return url;
}

function getProtocol() {
    var protocol = location.protocol;
    if (protocol == 'http:' || protocol == 'https:') {

    } else {
        protocol = 'http:';
    }
    return protocol;
}

function getHost() {
    if (location.host.indexOf("localhost:1337") > -1) {
        return location.host;
    } else if (location.host.indexOf("localhost") > -1) {
        return 'ir.euroinvestor.com';
    } else {
        return location.host;
    }
}

function formatNumberThousands(nb, dec) {
    if (typeof nb === 'number' || (/^-?\d+\.?\d*$/).test(nb)) {
        nb = parseFloat(nb);

        nb = (+(Math.round(nb + "e" + dec) + "e-" + dec)).toFixed(dec);
        var sp = nb.toString().split('.');
        sp[0] = sp[0].replace(/\B(?=(\d{3})+(?!\d))/g, sep1000);
        if (typeof sp[1] === 'undefined' && dec === 0) return sp[0];
        else return sp[0] + '.' + sp[1];
    } else {
        return nb;
    }
}

function init() {
    //function to load everything after data fetched.
    buildTabs();
    buildChart();
    enableHandlers();
    buildYear();
    yearChanges();
    changeViewType();
    showTooltip();
    //function to load data for print window
    if (getUriParam('action') === 'print') {
        globalName = decodeURI(getUriParam('t')).replace('%26', '&');
        globalSubtitle = decodeURI(getUriParam('s')).replace('%26', '&');
        $('body').addClass('printDocument');
        updateChart(globalName, globalSubtitle);
        buildSubCategories(globalName);
    } else if (getUriParam('action') === 'image') {
        globalName = decodeURI(getUriParam('t')).replace('%26', '&');
        globalSubtitle = decodeURI(getUriParam('s')).replace('%26', '&');
        $('body').addClass('imageRender');
        updateChart(globalName, globalSubtitle);
        buildSubCategories(globalName);
    } else {
        $('.tabs-list-tab').first().trigger('click');
    }
}

function initHandlebars(data) {
    if (typeof ($('.IRkeyfigureModule').html()) != "undefined" && typeof ($('#IRKeyfiguresTemplate').html()) != "undefined") {
        template_IRKeyfigures = Handlebars.compile($('#IRKeyfiguresTemplate').html());
        $(".IRkeyfigureModule").html(template_IRKeyfigures(data));
    }
}

function buildTabs() {
    $('.sliderBox ul').html('');
    for (var i = 0; i < jsonData.length; i++) {
        $('.sliderBox ul').append('<li class="tabs-list-tab" data-tab-name="' + jsonData[i].name + '"><div><span>' + jsonData[i].name + '</span></div> </li>');
    }
}

function buildNotes() {
    $('.notesBox').html('');
    if (notes.length > 0) {
        $('.notesBox').append('<div class="notesTitle">Notes</div>');
        for (var i = 0; i < notes.length; i++) {
            $('.notesBox').append('<div class="notesItem">' + (i + 1) + '. ' + notes[i] + '</div>')
        }
    }
}

// CHART =====================================
function buildChart() {
    chart = Highcharts.chart("chartView", {
        chart: {
            type: 'column',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            events: {
                redraw: function () {
                    anim = 0;
                }
            }
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: []
        },
        yAxis: [{
            id: 'first-axis',
            allowDecimals: false,
            title: {
                text: globalMark
            },
            labels: {
                formatter: function () {
                    return formatNumberThousands(this.value, 0);
                }
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#ebebeb'
            }]

        }],
        tooltip: {
            formatter: function () {
                var s = '<div>' + this.x + '</div>';
                s += '<br/><span style="color:' + this.series.color + '">' + this.series.name + '</span>: ' + formatNumberThousands(this.y, this.series.options.dec) + ' ' + this.series.options.symbol;
                return s;
            }
        },
        series: [],
        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            useHTML: true,
            squareSymbol: false,
            symbolWidth: 16,
            symbolHeight: 11,
            symbolRadius: 3,
            floating: true
        },
        plotOptions: {
            line: {
                marker: {
                    enabled: true,
                    symbol: 'circle'
                },
                connectNulls: true
            },
            column: {
                stacking: 'normal'
            },
            series: {
                events: {
                    afterAnimate: function () {
                        anim++;
                        if (chart.series.length === anim) renderImage();
                    }
                }
            }
        }
    });
}

function updateChart(name, subtitle) {
    if (subtitle.length == 0) subtitle = '';
    anim = 0;
    minVal = 0;
    notes = [];
    var dd = getChartData(name, {subtitle: subtitle, exclude: excludes});
    if (dd.length === 0 && subtitle.length > 0) {
        subtitle = '';
        dd = getChartData(name, {subtitle: subtitle, exclude: excludes});
    } else if (dd.length === 0 && subtitle.length === 0) {
        for (var j = 0; j < jsonData.length; j++) {
            if (jsonData[j].name.toLowerCase() === name.toLowerCase()) {
                subtitle = jsonData[j].group[0].title;
                dd = getChartData(name, {subtitle: subtitle, exclude: excludes});
                break;
            }
        }
    }
    globalName = name;
    globalSubtitle = subtitle;
    $('.chartTitle').text(subtitle.length > 0 ? globalSubtitle : globalName);
    buildTables(dd);
    buildNotes();
    drawChart(dd);
    chart.redraw();
    buildLegend();
}

function drawChart(dd) {
    var symbols = [];
    for (var j = 0; j < dd.length; j++) {
        if (symbols.indexOf(dd[j].symbol) == -1) symbols.push(dd[j].symbol)
    }
    chart.xAxis[0].setCategories(getChartCategories(excludes));
    chart.yAxis[0].setTitle({text: symbols[0]}, false);
    if(typeof chart.yAxis[1] !== 'undefined') chart.yAxis[1].remove();
    if (symbols.length > 1) {
        chart.addAxis({
            id: 'second-axis',
            allowDecimals: false,
            title: {
                text: symbols[1]
            },
            labels: {
                formatter: function () {
                    return formatNumberThousands(this.value, 0);
                }
            },
            opposite: true,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]

        });
        for (var h = 0; h < dd.length; h++) {
            dd[h].yAxis = dd[h].symbol === symbols[0] ? 'first-axis' : 'second-axis';
            dd[h].zIndex = dd[h].type === 'line' ? 10 : 0;
        }
    }
    while (chart.series.length !== 0) {
        chart.series[0].remove();
    }
    for (var i = 0; i < dd.length; i++) {
        chart.addSeries(dd[i], false);
    }
}

function buildLegend() {
    var leg = chart.series;
    $('.legendBox').html('');
    $('.legendBox').append('<div class="legend-div"><label class="legendItem"><input type="checkbox" class="legendItemInput allItems checkbox" data-legend-item="all" checked/><span class="legendItemName">All</span></label></div>');
    for (var i = 0; i < leg.length; i++) {
        $('.legendBox').append('<div class="legend-div"><label class="legendItem"><input type="checkbox" class="legendItemInput checkbox" data-legend-item="' + i + '" checked/><span class="legendItemName"><span class="legendItemSymbol"></span> ' + leg[i].name + '</span></label></div>');
        var symbol = new Highcharts.Renderer($('.legendBox .legendItemSymbol')[$('.legendBox .legendItemSymbol').length - 1], 16, 16);
        if (leg[i].legendSymbol.element.localName === "path") {
            symbol.path(leg[i].legendLine.d.split(' ')).attr({
                stroke: leg[i].color,
                'stroke-width': 2,
                translateY: -4
            }).add();
            symbol.path(leg[i].legendSymbol.d.split(' ')).attr({
                fill: leg[i].color,
                translateY: -4,
                width: 8,
                height: 8
            }).add();
        } else {
            symbol.rect(0, 2, 15, 15, 0).attr({
                fill: leg[i].color,
                zIndex: 3
            }).add();
        }
    }
}

function getChartCategories(exclude) {
    var cat = [];
    var obj = jsonData[0].data[0].data;
    for (var i = 0; i < obj.length; i++) {
        if (exclude.indexOf(obj[i].year) === -1) cat.push(obj[i].year)
    }
    return cat;
}

function getChartData(objName, options) {
    var data = [];
    if (jsonData !== null) {
        for (var i = 0; i < jsonData.length; i++) {
            if (objName.toLowerCase() === jsonData[i].name.toLowerCase()) {
                if (options.subtitle.length > 0) {
                    globalMark = jsonData[i].group[0].data[0].label;
                    for (var q = 0; q < jsonData[i].group.length; q++) {
                        notes = jsonData[i].group[q].notes;
                        var gi = jsonData[i].group[q];
                        if (gi.title.toLowerCase() === options.subtitle.toLowerCase()) {
                            for (var d in gi.data) {
                                var gData = [];
                                for (var l in gi.data[d].data) {
                                    if (options.exclude.indexOf(gi.data[d].data[l].year) === -1) gData.push(gi.data[d].data[l].value);
                                }
                                data.push({
                                    name: gi.data[d].name,
                                    data: gData,
                                    type: gi.data[d].chart,
                                    color: globalColors[d],
                                    symbol: gi.data[d].label,
                                    dec: (typeof gi.data[d].dec !== 'undefined' ? gi.data[d].dec : 0)
                                });
                            }
                            break;
                        }
                    }
                } else if (typeof jsonData[i].data !== 'undefined') {
                    globalMark = jsonData[0].data[0].label;
                    notes = jsonData[i].notes;
                    for (var j = 0; j < jsonData[i].data.length; j++) {
                        var item = jsonData[i].data[j];
                        var itemData = [];
                        for (var k in item.data) {
                            if (options.exclude.indexOf(item.data[k].year) === -1) itemData.push(item.data[k].value);
                        }
                        data.push({
                            name: item.name,
                            data: itemData,
                            type: item.chart,
                            color: globalColors[j],
                            symbol: item.label,
                            dec: (typeof item.dec !== 'undefined' ? item.dec : 0)
                        });
                    }
                }
                break;
            }
        }
    }
    return data;
}

function buildSubCategories(name) {
    $('.subCategoriesBox').slideUp(500, function () {
        $('.subCategoriesBox .categoriesWrap').html('');
        for (var j = 0; j < jsonData.length; j++) {
            if (jsonData[j].name.toLowerCase() === name.toLowerCase() && typeof jsonData[j].group !== 'undefined') {
                for (var z = 0; z < jsonData[j].group.length; z++) {
                    var act = (globalSubtitle === jsonData[j].group[z].title) ? 'active' : '';
                    var tmp = '<li class="subCategoryItem ' + act + '" data-tab-name="' + name + '" data-cat-title="' + jsonData[j].group[z].title + '">' + jsonData[j].group[z].title + '</li>';
                    $('.subCategoriesBox .categoriesWrap').append(tmp);
                }
            }
        }
        if ($('.subCategoryItem').length > 0) $('.subCategoriesBox').slideDown(500);

        if ($('.categoriesWrap li').length >= 1) $('.subCategoriesBox').addClass("border-bottom");
        else $('.subCategoriesBox').removeClass("border-bottom");

        $('.subCategoriesBox').slideDown('slow');
        if ($('.subCategoryItem').length > 0) $('.subCategoriesBox').slideDown(500);
    })
}

// ARROW SLIDER ==============================
var counter = 0;

function sliderLeft() {
    if (!$(this).hasClass('inactive') && $('.tabs-container-inner').scrollLeft() !== 0) {
        $('.tabs-arrow-left, .tabs-arrow-right').removeClass('inactive');
        counter--;
        calculateSlide(400);
    }
}

function sliderRight() {
    var el = $('.tabs-container-inner');
    var ss = el[0].scrollWidth - el[0].clientWidth - 4;
    if (!$(this).hasClass('inactive') && el.scrollLeft() < ss) {
        $('.tabs-arrow-left, .tabs-arrow-right').removeClass('inactive');
        counter++;
        calculateSlide(400);
    }
}

function calculateSlide(t) {
    var cont = $('.tabs-container-inner');
    var wid = $('.tabs-list-tab').first().outerWidth(true);
    var eq = counter * wid;
    cont.animate({scrollLeft: eq}, t);
    if(eq === 0) $('.tabs-arrow-left').addClass('inactive');
    else $('.tabs-arrow-left').removeClass('inactive');
    if(eq >= (cont[0].scrollWidth - cont[0].clientWidth - 4)) $('.tabs-arrow-right').addClass('inactive');
    else $('.tabs-arrow-right').removeClass('inactive');
    return eq;
}

function resizeBoxes() {
    var tot = $('.tabs-container-outer').outerWidth(true);
    var arrow = $('.tabs-arrow-left').outerWidth(true);
    $('sliderBox').width(tot - arrow * 2);
    calculateSlide(0);
}


// TABLE ==================================
function buildTables(dd) {
    $('.selectionTable thead, .selectionTable tbody').html('');
    var cat = getChartCategories(excludes);
    var tableheading = '<tr><th>' + '</th>';
    cat.forEach(function (item) {
        tableheading += '<th data-year-item="' + item + '">' + item + '</th>';
    });
    tableheading += '</tr>';
    $('.selectionTable thead').append(tableheading);
    dd.forEach(function (item) {
        var nameF = '<tr><td>' + item.name + '</td>';
        $.each(item.data, function (a, valueDataS) {
            var localvalue = formatNumberThousands(valueDataS, 0);
            nameF += '<td>' + localvalue + '</td>';
        });
        nameF += '</tr>';
        $('.selectionTable tbody').append(nameF);
    });
}

function buildYear() {
    var cat = getChartCategories([]);
    $('.yearBox').append('<div class="year-div"><label class="yearItem"><input type="checkbox" class="yearItemInput checkbox allYear" checked/><span class="yearItemName">All</span></label></div>');
    cat.forEach(function (item) {
        $('.yearBox').append('<div class="year-div"><label class="yearItem"><input type="checkbox" class="yearItemInput checkbox" data-year-item="' + item + '" checked/><span class="yearItemName">' + item + '</span></label></div>');
    });
}

// CLICK HANDLERS ============================
function enableHandlers() {
    $(document).on('change', '.legendItem .legendItemInput', function () {
        var eleId = $(this).data('legend-item');
        if (typeof eleId !== 'number') return;
        if ($(this).prop('checked')) chart.series[eleId].show();
        else chart.series[eleId].hide();
        var all = $('.legendItem').find('.legendItemInput:not(.allItems)');
        var it = $('.legendItem').find('.legendItemInput:not(.allItems):checked');
        if (it.length === all.length) $('.legendItem .legendItemInput.allItems').prop('checked', true);
        else $('.legendItem .legendItemInput.allItems').prop('checked', false);
    });
    // Event for all checkbox in legend
    $(document).on('change', '.legendItem .legendItemInput.allItems', function () {
        if ($(this).prop('checked')) {
            for (var i = 0; i < chart.series.length; i++) {
                chart.series[i].show();
            }
            $('.legendItem .legendItemInput').prop('checked', true);
        } else {
            for (var j = 0; j < chart.series.length; j++) {
                chart.series[j].hide();
            }
            $('.legendItem .legendItemInput').prop('checked', false);
        }
    });
    // Event for sub category click
    $(document).on('click', '.subCategoryItem', function () {
        $('.imageRenderView').remove();
        $('.subCategoryItem').removeClass('active');
        var name = $(this).data('tab-name');
        var cat = $(this).data('cat-title');
        globalName = name;
        globalSubtitle = cat;
        updateChart(name, cat);
        $(this).addClass('active');
    });

    $(document).on('click', '.tabs-list-tab', function () {
        $('.imageRenderView').remove();
        $('.tabs-list-tab').removeClass('active');
        var nn = $(this).data('tab-name');
        globalName = nn;
        globalSubtitle = '';
        updateChart(nn, '');
        buildSubCategories(nn);
        $(this).addClass('active');
    });
    $('.tabs-arrow-left').on('click', sliderLeft);
    $('.tabs-arrow-right').on('click', sliderRight);
    $(window).on('resize', resizeBoxes);
    // print button
    $('.printBtnUrl').on('click', function () {
        var url = encodeURI(window.location.origin + window.location.pathname + '?action=print&data='+filename+'&t=' + globalName.replace('&', '%26') + '&s=' + globalSubtitle.replace('&', '%26'));
        window.open(url, '_blank', 'location=yes' + url + ',height=' + $('body').outerHeight(true) + ',width=800,scrollbars=yes,status=yes');
    });
    $('.printBtn').on('click', printView);
    $('.pdfBtn').on('click', getPDF);
    $('.jpegBtn').on('click', getJPEG);
    $('.excelBtn').on('click', getExcel);

}

function yearChanges() {
    $(document).on('change', '.yearBox .yearItem .yearItemInput', function () {
        if(!$(this).hasClass('allYear')) {
            var thisItem = $(this);
            var elemId = thisItem.data('year-item');
            if (thisItem.prop('checked')) {
                excludes.splice(excludes.indexOf(elemId), 1);
                var prop = true;
                $('.yearItemInput:not(.allYear)').each(function () {
                    if(!$(this).prop('checked')) prop = false;
                })
                $('.yearItemInput.allYear').prop('checked', prop)
            } else {
                excludes.push(elemId);
                $('.yearItemInput.allYear').prop('checked', false)
            }
            updateChart(globalName, globalSubtitle);
            $('.selectionTable').fadeOut(300, function () {
                $('.selectionTable').fadeIn(300);
            });
        }
    });
    $(document).on('change', '.yearBox .yearItem .yearItemInput', function() {
        if($(this).hasClass('allYear')){
            var ma = $(this).prop('checked');
            $('.yearItemInput').each(function () {
                $(this).prop('checked', ma);
                if(ma) excludes = [];
                else excludes.push($(this).data('year-item'));
                updateChart(globalName, globalSubtitle);
                // if(!$(this).hasClass('allYear')) console.log(this);
            });
        }

    })
}

function changeViewType() {
    $('.viewItem').click(function () {
        $('.viewItem').removeClass("active");
        $(this).addClass("active");
    });

    $('.viewItem.chart').click(function () {
        $('.tableBox').fadeOut();
        $('.chartBox').delay(500).fadeIn();
        $('.yearBox').fadeOut().fadeIn();
    });
    $('.viewItem.table').click(function () {
        $('.tableBox').delay(500).fadeIn();
        $('.chartBox').fadeOut();
        $('.yearBox').fadeOut().fadeIn();
    });

}

// EXPORT FUNCTIONS ============================
function printView() {
    window.print();
}

function getPDF() {
    $('.legendItemName').css('background-size', 0);
    $('.legendItem').first().hide();
    domtoimage.toJpeg($('.chartBox')[0], {bgcolor: '#fff', width: $('.chartBox').outerWidth(true), height:  $('.chartBox').outerHeight(true), quality: 1}).then(function (dataUrl) {
        $('.legendItemName').removeAttr('style');
        $('.legendItem').first().show();
        var img = new Image();
        img.src = dataUrl;
        img.setAttribute('class', 'pdfRenderView');
        $('.pdfView')[0].appendChild($('.chartTitle')[0].cloneNode(true));
        $('.pdfView')[0].appendChild(img);
        $('.pdfView')[0].appendChild($('.tableBox')[0].cloneNode(true));
        $('.pdfView')[0].appendChild($('.notesBox')[0].cloneNode(true));
        var pdf = new jsPDF('p', 'pt', 'a4');
        var canvas = pdf.canvas;
        canvas.height = $('.pdfView').outerHeight(true);
        canvas.width = 800;

        html2canvas($('.pdfView')[0], {
            canvas: canvas,
            onrendered: function (canvas) {
                window.open(pdf.output('datauristring'), '_blank');
                $('.pdfView').html('');
            }
        });
    }).catch(function (error) {
        console.error(error);
        $('.pdfView').html('');
        $('.legendItemName').removeAttr('style');
        $('.legendItem').first().show();
    });
}

function exportTable() {
    $('#exportTable tbody').html('');
    var table = $('#exportTable tbody');
    var dat = jsonData;

    var colCat = getChartCategories(dat);

    var trn = '<tr>';
    trn += '<td>'+clientName+'</td>';
    trn += '</tr><tr><td></td></tr>';
    table.append(trn);

    for (var i = 0; i < dat.length; i++){
        var trh = '<tr>';
        trh += '<td>'+dat[i].name+'</td>';
        trh += '<td></td>';
        for(var h = 0; h < colCat.length; h++){
            trh += '<td>'+colCat[h]+'</td>';
        }
        trh += '</tr>';
        table.append(trh);
        if (typeof dat[i].data !== 'undefined'){
            for(var d = 0; d < dat[i].data.length; d++){
                var trd = '<tr>';
                trd += '<td>'+dat[i].data[d].name+'</td>';
                trd += '<td>'+dat[i].data[d].label+'</td>';
                for(var di = 0; di < dat[i].data[d].data.length; di++){
                    trd += '<td>' + formatNumberThousands(dat[i].data[d].data[di].value, (typeof dat[i].data[d].dec !== 'undefined'? dat[i].data[d].dec : 0))+ '</td>';
                }
                trd += '</tr>';
                table.append(trd);
            }
        }
        if (typeof dat[i].group !== 'undefined'){
            for(var g = 0; g < dat[i].group.length; g++){
                var gr = dat[i].group[g];
                var trgt = '<tr>';
                trgt += '<td>'+gr.title+'</td>';
                trgt += '</tr>';
                table.append(trgt);
                for(var gd = 0; gd < gr.data.length; gd++){
                    var trgi = '<tr>';
                    trgi += '<td>'+gr.data[gd].name+'</td><td></td>';
                    for(var gi = 0; gi < gr.data[gd].data.length; gi++){
                        trgi += '<td>' + formatNumberThousands(gr.data[gd].data[gi].value, (typeof gr.data[gd].dec !== 'undefined'? gr.data[gd].dec : 0))+ '</td>';
                    }
                    trgi += '</tr>';
                    table.append(trgi);
                }
            }
        }
        var tre = '<tr>';
        tre += '<td></td>';
        trh += '</tr>';
        table.append(tre);
    }
}

function getExcel() {
    exportTable();
    export_table_to_excel('exportTable', 'Data-' + filename + '-Novozymes');
}

function getJPEG() {
    $('.imageRenderView').remove();
    var iframe = document.createElement('iframe');
    iframe.setAttribute('style', 'position:absolute;top:-10000px;right:-10000px;height:100%; width:100%');
    iframe.setAttribute('class', 'imageRenderView');
    iframe.src = encodeURI(window.location.origin + window.location.pathname + '?action=image&data='+filename+'&t=' + globalName.replace('&', '%26') + '&s=' + globalSubtitle.replace('&', '%26'));
    document.body.appendChild(iframe);
}

function renderImage() {
    if (getUriParam('action') === 'image') {
        domtoimage.toBlob($('body')[0], {bgcolor: '#fff', width: $('body').outerWidth(true), height:  $('body').outerHeight(true), quality: 1}).then(function (dataUrl) {
            window.saveAs(dataUrl, 'Graph-'+filename+'-Novozymes.jpg');
            $('.imageRenderView').remove();
        }).catch(function (error) {
            console.error(error);
        });
    }
}

// RANDOM FUNCTIONS ============================
//Show tooltip on hover
function showTooltip() {

    $(".viewTool").hover(function () {
        var tooltipText = $(this).data('title');
        $(this).append('<span class="tooltipText">' + tooltipText + '</span>');
    });
    $(".viewTool").mouseleave(function () {
        $(this).find(".tooltipText").remove();
    });
}

function formatNumberThousands(nb, dec) {
    if (typeof nb === 'number') {
        nb = (+(Math.round(nb + "e+" + dec) + "e-" + dec)).toFixed(dec);
        var sp = nb.toString().split('.');
        sp[0] = sp[0].replace(/\B(?=(\d{3})+(?!\d))/g, sep1000);
        if (typeof sp[1] === 'undefined' && dec === 0) return sp[0];
        else return sp[0] + '.' + sp[1];
    } else {
        return nb;
    }
}