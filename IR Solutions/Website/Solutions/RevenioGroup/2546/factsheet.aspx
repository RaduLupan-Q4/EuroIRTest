<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>

<% 
    IRSite site = new IRSite();
%>
<%= site.factsheetHeader() %>

<script type="text/javascript">
    var activeModules = ['IRFactsheet'];
    var activeFeatures = ['ShareData', 'PerformanceChart', 'KeyFigures'];
</script>

<div class="IRFactsheetModule"></div>

<%= site.factsheetFooter() %>

<script id="IRFactsheetTemplate" type="text/x-handlebars-template">

    <div class="IRFactsheet IRFloat IRSize4">

        <div class="IRFactsheetAbout">
            {{{includeFactsheetAboutHeader "About Revenio Group"}}}
            {{{includeFactsheetAboutSection "Revenio is a Finnish, globally operating health technology corporation whose worldwide success is based on a strongly patented intraocular pressure measurement technology.  The Revenio Group consists of Icare Finland Oy, Revenio Research Oy and Oscare Medical Oy, in which Revenio holds a 53% interest.The common denominators of Revenio's business operations include screening, follow-up and the global need to make cost savings through preventive health care. Revenio seeks vigorous growth in health technology. Revenio aims at developing even more efficient and easily adopted methods for the early-stage detection of diseases with significance for public health. The focus of Revenio's screening technology is on the early detection of glaucoma, osteoporosis, skin cancer and asthma, and the monitoring of these during the treatment process."}}}
            {{{includeFactsheetAboutSection "In 2015, the Revenio Group's net sales totaled MEUR 20.3, with its operating margin for continuing operations standing at 28.4%. Revenio Group Corporation is listed on Nasdaq Helsinki."}}}
        </div>

        <div class="IRFactsheetSharePriceChart">
            {{{includeFactsheetSharePriceChartPlaceholder 'Development in share price' '200px'}}}
        </div>

        <div class="IRFactsheet IRFloat IRSize4">

            <div class="IRFactsheetFinancialHighlights">
                
                {{{includeFactsheetKeyFigureHighlightH2 'Financial highlights'}}}
                {{{includeFactsheetKeyFigureHighlightHeaders 'Factsheet' 'Financial highlights' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial highlights' 'Net sales, TEUR' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial highlights' 'Operating profit, TEUR' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial highlights' 'Operating profit, %' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial highlights' 'Profit before taxes, TEUR' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial highlights' 'Profit before taxes, %' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial highlights' 'Net profit for financial period, TEUR' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial highlights' 'Net profit, %' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial highlights' 'Return on equity, %' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial highlights' 'Return on investment, %' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial highlights' 'Equity ratio, %' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial highlights' 'Net leveraging, %' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial highlights' 'Earnings per share, continuing operations, EUR' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial highlights' 'Dividend per share, EUR' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial highlights' 'Market capitalization at end of period, MEUR' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial highlights' 'Turnover, number of shares' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial highlights' 'Turnover, %' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightFooter}}}
            </div>

        </div>

    </div>

    <div class="IRFactsheet IRFloat IRSize2">
        {{{includeFactsheetChart 'Column' 'Market value' 'Market value' 'Market value, EURm' '200'}}}
        {{{includeFactsheetChart 'Pie' 'Ownership structure according to percentage of shares' 'Ownership structure according to percentage of shares' '' '250'}}}

        <div class="IRFactsheet IRFloat IRSize2">
            <div class="IRFactsheetShareData">
                <h2>{{headers/t_share_info}}</h2>
                <table class="IRFactsheetShareDataTable">
                    <tbody>
                        <tr>
                            <td>{{headers/t_updated}}</td>
                            <td class="right"><span>{{showDateTime stocks/timestamp}}</span></td>
                        </tr>
                        <tr>
                            <td>{{headers/t_last}}</td>
                            <td class="right"><span>{{decimals stocks/last}}</span></td>
                        </tr>
                        <tr>
                            <td>{{headers/t_52w_high}}</td>
                            <td class="right"><span>{{decimals stocks/high52Week}}</span></td>
                        </tr>
                        <tr>
                            <td>{{headers/t_52w_low}}</td>
                            <td class="right"><span>{{decimals stocks/low52Week}}</span></td>
                        </tr>
                        <tr>
                            <td>{{headers/t_number_of_shares}}</td>
                            <td class="right"><span>{{customShareMillionsInFull stocks/shareMillions}}</span></td>
                        </tr>
                        <tr>
                            <td>{{headers/t_market_cap}}</td>
                            <td class="right"><span>{{toLocal stocks/marketCap}}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>

    <div class="IRFactsheet IRFloat IRSize6">
        {{{includeFactsheetDownloadPDF}}}
    </div>

</script>

<script type="text/javascript">
    Handlebars.registerHelper('customShareMillionsInFull', function (shareMillions) {
        var sharesRaw = parseFloat(shareMillions) * 1000000;
        return formatNumberWithLocalDelimiters(sharesRaw);
    });
</script>