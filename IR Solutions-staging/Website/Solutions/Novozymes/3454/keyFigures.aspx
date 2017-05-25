<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>

<%
    IRSite site = new IRSite();
%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Annual key figures</title>
    <link rel="stylesheet" type="text/css" media="screen" href="css/client.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("css/client.style.css")).Ticks.ToString()%>"/>
    <link rel="stylesheet" type="text/css" media="print" href="css/print.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("css/print.style.css")).Ticks.ToString()%>"/>
</head>

<body class="IRkeyfigureModule">

<script id="IRKeyfiguresTemplate" type="text/x-handlebars-template">

    <div class="wrapper">
        <div class="tabs"></div>
        <div class="tabs-container-outer">
            <div class="tabs-container-inner">

                <div class="tabs-arrow-left inactive"><span>&#60;</span></div>
                <div class="sliderBox">
                    <ul></ul>
                </div>

                <div class="tabs-arrow-right"><span>&#62;</span></div>
            </div>
        </div>
        <div class="subCategoriesBox">
            <ul class="categoriesWrap"></ul>
        </div>
        <div class="changeViewBox">
            <span class="chartTitle"></span>
            <div class="viewBox">
                <a href="javascript:void(0)" data-title="View as Chart" class="viewTool viewItem chart active"></a>
                <a href="javascript:void(0)" data-title="View as Table" class="viewTool viewItem table"></a>
            </div>
        </div>
        <button class="btn-dw printBtn">print</button>
        <div class="chartBox">
            <div id="chartView" class="chartBox"></div>
            <div class="legendBox"></div>
        </div>
        <div class="tableBox">
            <table class="selectionTable">
                <thead></thead>
                <tbody></tbody>
            </table>
        </div>
        <div class="yearBox"></div>
        <div class="printBox">
            <button class="btn-dw printBtnUrl viewTool" data-title="Print"></button>
            <button class="btn-dw pdfBtn viewTool" data-title="Export as PDF"></button>
            <button class="btn-dw excelBtn viewTool" data-title="Export all data into an Excel"></button>
            <button class="btn-dw jpegBtn viewTool" data-title="Export as JPG"></button>
        </div>
        <div class="notesBox"></div>
        <div class="pdfView"></div>
    </div>
    <table id="exportTable" width="800px">
        <tbody></tbody>
    </table>
    <div class="documentOverlay"></div>
    <div class="disclaimer">
    <span class="disclaimer-copyright">Copyright &copy; 1997-2017
        <a href="https://www.q4euroinvestor.com/" class="link-target" target="_blank">Q4 Euroinvestor</a>
    </span>
        <span class="disclaimer-dataSource">and our data suppliers. </span>
        <span class="disclaimer-terms">
        <a href="https://www.q4euroinvestor.com/MainDisclaimer/" class="link-target" target="_blank">See Terms of use</a>
    </span>
    </div>
</script>
</body>
<script type="text/javascript" src="js/libs.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("js/libs.js")).Ticks.ToString()%>"></script>
<script type="text/javascript" src="js/script.keyfigures.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("js/script.keyfigures.js")).Ticks.ToString()%>"></script>

</html>
