/// <reference path="chart.flash.js" />
function loadFlashChartIntoElementByID(elementID, baseUrl) {
    // <![CDATA[
    var urlToSWFFiles = "inc/swf/";
    var prefixForChartFiles = "chart.flash.";
    var urlToGraphUI2 = baseUrl + urlToSWFFiles + prefixForChartFiles + "ui2.swf";
    var urlToGraphMain = baseUrl + urlToSWFFiles + prefixForChartFiles + "main.swf";
    var width = '100%';
    var height = graphHeight;
    var flashvarsFlashGraph = {
        SetupUrl: baseUrl + "inc/dataproviders/flashchart/SetupDataProvider.aspx%3Fsid%3D" + solutionID,
        DayUrl: baseUrl + "inc/dataproviders/flashchart/ClosePriceDataProvider.aspx%3Fiid%3D_INSTRUMENTID_%26periodYears%3D_YEARS_%26sid%3D" + solutionID,
        IntraDayUrl: baseUrl + "inc/dataproviders/flashchart/IntraDayDataProvider.aspx%3Fiid%3D_INSTRUMENTID_%26periodYears%3D_YEARS_%26sid%3D" + solutionID,
        CurrencyUrl: baseUrl + "inc/dataproviders/flashchart/CurrencyDataProvider.aspx%3FFromCurrency%3D_FROM_%26ToCurrency%3D_TO_%26periodYears%3D_YEARS_",
        NewsUrl: baseUrl + "asp/ir/GetNewsByChartID.aspx%3FinstrumentID%3D_INSTRUMENTID_%26periodYears%3D_YEARS_%26chartID%3D281209%26language%3D1",
        InterfaceUrl: baseUrl + "inc/swf/chart.flash.ui2.swf",
        InstrumentId: instrumentID,
        IntroDot: graphIntroDot,
        IntroStock: graphIntroStock,
        IntroExchange: graphIntroExchange,
        LayoutRoundCorners: false,
        LayoutBorderColor: 0xCECECE,	//0xDBD9DA,
        LayoutTopColor: 0xFFFFFF,		//0xF5F5F5,
        LayoutBottomColor: 0xF5F5F5		//0xE7E7E7
    };

    var paramsFlashGraph = {
        allowFullScreen: "true",
        allowScriptAccess: "always",
        wmode: "transparent"
    };

    var attributesFlashGraph = {
        bgcolor: '#000000'
    };

    var p = document.URL.substr(document.URL.lastIndexOf("#") + 2);
    console.log(p);
    var pArray = p.split("&");
    for (var i = 0; i < pArray.length; i++) {
        var pair = pArray[i].split("=");
        flashvarsFlashGraph[pair[0]] = pair[1];
    }
    swfobject.embedSWF(urlToGraphMain, elementID, width + "", height + "", "9.0.0", "https://irssl.euroinvestor.com/FlashChart/expressInstall.swf", flashvarsFlashGraph, paramsFlashGraph, attributesFlashGraph);
    // ]]>
}

function hasFlash() {
    var hasFlash = false;
    try {
        var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if (fo) hasFlash = true;
    } catch(e) {
        if (navigator.mimeTypes["application/x-shockwave-flash"] != undefined) hasFlash = true;
    }
    return hasFlash;
}