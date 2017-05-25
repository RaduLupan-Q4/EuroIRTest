<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fact Sheet</title>
    <link rel="stylesheet" type="text/css" media="screen" href="css/client.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("css/client.style.css")).Ticks.ToString()%>"/>
    <link rel="stylesheet" type="text/css" media="print" href="css/print.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("css/print.style.css")).Ticks.ToString()%>"/>
</head>
<body class="IRfactsheetModule">

<script id="IRFactsheetTemplate" type="text/x-handlebars-template">
    <div class="downloadBox">
        {{{includeFactsheetDownloadPDF}}}
    </div>
    <div class="idInfoBox">
        <div class="colWrap">
            <span class="title">{{headers/t_market}}:</span>
            <span class="text">Copenhagen</span>
        </div>
        <div class="colWrap">
            <span class="title">{{headers/t_symbol}}:</span>
            <span class="text">NZYM B</span>
        </div>
        <div class="colWrap">
            <span class="title">{{headers/t_isin}}:</span>
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
                <th>{{headers/t_share_data}}</th>
                <th class="columnDataName">{{data/stock/shareDate}}</th>
            </tr>
            </thead>
            <tbody>
            <tr class="closeRow">
                <td class="title">{{headers/t_previous_close}}</td>
                <td class="data">{{data/stock/previousClose}}</td>
            </tr>
            <tr class="changeRow">
                <td class="title">{{headers/t_change}} (%)</td>
                <td class="data">{{data/stock/change}}</td>
            </tr>
            <tr class="volumeRow">
                <td class="title">{{headers/t_volume}}</td>
                <td class="data">{{data/stock/volume}}</td>
            </tr>
            <tr class="sharesRow">
                <td class="title">{{headers/t_number_of_shares}}</td>
                <td class="data">{{data/stock/numbShares}}</td>
            </tr>
            <tr class="marketCapRow">
                <td class="title">{{headers/t_market_cap}} (mil)</td>
                <td class="data">{{data/stock/marketCap}}</td>
            </tr>
            </tbody>
        </table>
        <table class="keyTable selectionTable">
            {{{includeFactsheetKeyFigureHighlightHeaders 'Revenue' data/factsheet 'Revenue'}}}
            {{{includeTableFactsheetRowData 'Revenue' 'Revenue' data/factsheet}}}
            {{{includeTableFactsheetRowData 'Revenue' 'EBITDA' data/factsheet}}}
            {{{includeTableFactsheetRowData 'Revenue' 'Operating profit / EBIT' data/factsheet}}}
            {{{includeTableFactsheetRowData 'Revenue' 'Net profit' data/factsheet}}}
            {{{includeTableFactsheetRowData 'Revenue' 'Total assets' data/factsheet}}}
            {{{includeTableFactsheetRowData 'Revenue' 'Net interest-bearing debt' data/factsheet}}}
            {{{includeTableFactsheetRowData 'Revenue' 'Equity attributable to shareholders in Novozymes A/S' data/factsheet}}}
            {{{includeTableFactsheetRowData 'Revenue' 'Cash Flow from operating activities'
            data/factsheet}}}
            {{{includeTableFactsheetRowData 'Revenue' 'Net Investments excluding acquisitions/Revenue'
            data/factsheet}}}
            {{{includeTableFactsheetRowData 'Revenue' 'Free cash flow before net acquisitions and
            securities/Revenue' data/factsheet}}}
            {{{includeTableFactsheetRowData 'Revenue' 'Free cash flow' data/factsheet}}}
            {{{includeTableFactsheetRowData 'Revenue' 'Earnings per share (EPS), diluted'
            data/factsheet 2}}}

            {{{includeTableFactsheetRowSeparator '(%)'}}}

            {{{includeTableFactsheetRowData '(%)' 'Revenue growth, DKK' data/factsheet}}}
            {{{includeTableFactsheetRowData '(%)' 'Revenue growth, organic' data/factsheet}}}
            {{{includeTableFactsheetRowData '(%)' 'Gross margin' data/factsheet 1}}}
            {{{includeTableFactsheetRowData '(%)' 'EBITDA margin' data/factsheet 1}}}
            {{{includeTableFactsheetRowData '(%)' 'EBIT margin' data/factsheet 1}}}
            {{{includeTableFactsheetRowData '(%)' 'Effective tax rate' data/factsheet 1}}}
            {{{includeTableFactsheetRowData '(%)' 'Equity ratio' data/factsheet 1}}}
            {{{includeTableFactsheetRowData '(%)' 'Debt-to-equity ratio' data/factsheet 1}}}
            {{{includeTableFactsheetRowData '(%)' 'Return on equity' data/factsheet 1}}}
            {{{includeTableFactsheetRowData '(%)' 'ROIC including goodwill' data/factsheet 1}}}

            {{{includeTableFactsheetRowSeparator 'Share information'}}}

            {{{includeTableFactsheetRowData 'Net investments' 'Shares (A + B Shares) million' data/factsheet
            1}}}
            {{{includeTableFactsheetRowData 'Net investments' 'Nominal unit size, DKK' data/factsheet}}}
            {{{includeTableFactsheetRowData 'Net investments' 'Common stock, DKK million' data/factsheet}}}
            {{{includeTableFactsheetRowData 'Net investments' 'Treasury shares, million' data/factsheet 1}}}
            {{{includeTableFactsheetRowData 'Net investments' 'Stock options outstanding, million'
            data/factsheet 1}}}
            {{{includeTableFactsheetRowData 'Net investments' 'Dividend per share**, DKK' data/factsheet 2}}}
            {{{includeTableFactsheetRowData 'Net investments' 'Payout ratio of net profit**' data/factsheet 0
            '%'}}}
            {{{includeTableFactsheetRowData 'Net investments' 'Share price at year-end, DKK' data/factsheet}}}
            {{{includeTableFactsheetRowData 'Net investments' 'Book value per share, DKK' data/factsheet 1}}}
        </table>
    </div>
    <div class="noteBox">
        <div>
            <small>{{getFactsheetTranslation '*The Novozymes stock was split 1:5 from year 2011.'}}</small>
        </div>
        <div>
            <small>{{getFactsheetTranslation '**2016: Proposed.'}}</small>
        </div>
    </div>
    <div class="miniChartbox">
        <div id="revenueChart" class="miniChartItem columns"></div>
        <div id="ebitChart" class="miniChartItem columns"></div>
        <div id="salesIndustryChart" class="miniChartItem"></div>
        <div id="salesGeographyChart" class="miniChartItem"></div>
    </div>
    <div class="disclaimer">
    <span class="disclaimer-copyright">Copyright &copy; 1997-2017
        <a href="https://www.q4euroinvestor.com/" class="link-target" target="_blank">Q4 Euroinvestor</a>
    </span>
        <span class="disclaimer-dataSource">and our data suppliers. </span>
        <span class="disclaimer-terms">
        <a href="https://www.q4euroinvestor.com/MainDisclaimer/" class="link-target"
           target="_blank">See Terms of use</a>
    </span>
    </div>
</script>
</body>
<script type="text/javascript" src="js/libs.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("js/libs.js")).Ticks.ToString()%>"></script>
<script type="text/javascript" src="js/script.factsheet.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("js/script.factsheet.js")).Ticks.ToString()%>"></script>
</html>