<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>

<%
    IRSite site = new IRSite();
%>
<%= site.factsheetHeader() %>
<%--<link rel="stylesheet" type="text/css" media="screen" href="/inc/factsheet.css" />--%>
 <meta name="viewport" content="width=device-width, initial-scale=1" />
<script type="text/javascript">
    var activeModules = ['IRFactsheet'];
    var activeFeatures = ['ShareData', 'PerformanceChart', 'KeyFigures'];
</script>


<title>Fact Sheet</title>
<link rel="stylesheet" type="text/css" media="screen" href="css/client.style.css??v=1485181103918" />
<link rel="stylesheet" type="text/css" media="print" href="css/print.style.css??v=1485181103918" />

<body class="IRfactsheetModule">
    <div class="basicBox">
    </div>
    <div class="downloadBox">
        <a href="#">Download PDF</a>
    </div>
    <div class="idInfoBox">
        <div class="colWrap">
            <span class="title">Market:</span>
            <span class="text">Copenhagen</span>
        </div>
        <div class="colWrap">
            <span class="title">Symbol:</span>
            <span class="text">NZYM B</span>
        </div>
        <div class="colWrap">
            <span class="title">ISIN:</span>
            <span class="text">DK0060336014</span>
        </div>
    </div>
    <div class="chartBox">
        <div class="chartLegend"></div>
        <div id="chartView"></div>
    </div>
    <div class="tableBox">
        <table class="stockTable selectionTable">
            <thead>
                <tr>
                    <th>Share Data</th>
                    <th class="columnDataName"></th>
                </tr>
            </thead>
            <tbody>
                <tr class="closeRow">
                    <td class="title">Previous Close</td>
                    <td class="data"></td>
                </tr>
                <tr class="changeRow">
                    <td class="title">Change (%)</td>
                    <td class="data"></td>
                </tr>
                <tr class="volumeRow">
                    <td class="title">Volume</td>
                    <td class="data"></td>
                </tr>
                <tr class="sharesRow">
                    <td class="title">Number of Shares</td>
                    <td class="data"></td>
                </tr>
                <tr class="marketCapRow">
                    <td class="title">Market Cap (mil)</td>
                    <td class="data"></td>
                </tr>
            </tbody>
        </table>


       <div class="IRFactsheetModule"></div>

        <script id="IRFactsheetTemplate" type="text/x-handlebars-template">
            {{{includeFactsheetKeyFigureHighlightHeaders 'Factsheet' 'Income Statement, MDKK' keyFigures}}}
            {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Income Statement, MDKK' 'Revenue' keyFigures}}}
            {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Income Statement, MDKK' 'Gross profit' keyFigures}}}
        </script>
    </div>
    <div class="noteBox">
        <div><small>*The Novozymes stock was split 1:5 from year 2011.</small></div>
        <div><small>**2016: Proposed.</small></div>
    </div>
    <div class="miniChartbox">
        <div id="revenueChart" class="miniChartItem columns"></div>
        <div id="ebitChart" class="miniChartItem columns"></div>
        <div id="salesIndustryChart" class="miniChartItem"></div>
        <div id="salesGeographyChart" class="miniChartItem"></div>
    </div>
    <div class="contactBox">
        <div class="contactBoxItem">
            <span style="font-weight: bold; color: #2d0028;">Novozymes A/S</span></br>
       Krogshoejvej 36, 2880 Bagsvaerd, Denmark
   
        </div>
        <div class="contactBoxItem">
            <a href="http://www.novozymes.com" target="_blank">www.novozymes.com</a></br>
       
            <a href="mailto:novozymesir@novozymes.com" target="_blank">novozymesir@novozymes.com</a>
        </div>
    </div>
</body>

<%--<%= site.factsheetFooter() %>--%>

<script type="text/javascript" src="/includes/js/libs/jquery2-1-4.min.js?v=636028143407321457"></script>
<script type="text/javascript" src="/includes/js/libs/handlebars1-3-0.min.js?v=636028143406491099"></script>
<script type="text/javascript" src="/includes/js/libs/moment2-7-0.min.js?v=636028143410253008"></script>
<script type="text/javascript" src="/includes/js/libs/moment-timezone0-3-1.min.js?v=636028143409619677"></script>
<script type="text/javascript" src="ir.client.js?v=636205002230421462"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.factsheet.js?v=636106519640957916"></script>

<script type="text/javascript" src="js/libs.js??v=1485181103918"></script>
<script type="text/javascript" src="js/script.factsheet.js??v=1485181103918"></script>


<%--</html>--%>