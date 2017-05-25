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

    <div class="IRFactsheet IRFloat IRSize6">
        {{{includeFactsheetBanner}}}
    </div>

    <div class="IRFactsheet IRFloat IRSize4">

        <div class="IRFactsheetAbout">
            {{{includeFactsheetAboutHeader "About William Demant"}}}
            {{{includeFactsheetAboutSection "The William Demant Group is one of the world’s leading hearing healthcare companies. We cover all areas of our industry: From instruments used for diagnosing hearing loss in adults and infants to traditional hearing aids, cochlear implants and bone-anchored hearing solutions that alleviate different kinds of hearing loss. But more than anything else, we are in the business of making a life-changing difference for millions of people across the world. For every hearing loss, we offer a solution."}}}
            {{{includeFactsheetAboutSection "Founded in 1904, the Group has developed from a small family-owned hearing aid company to the leading international hearing healthcare company it is today that develops, manufactures and sells hearing solutions, diagnostic instruments and personal communication devices and stands behind the commercial successes of such world-leading business brands as Oticon, Bernafon, Maico and Sennheiser Communications. The Group operates in a global market in more than 30 countries with a total employee force exceeding 10,000 and generates annual revenue of more than DKK 10 billion. In 1995, the Company went public, and its shares have for the past many years been among the 20 most traded shares on Nasdaq Copenhagen."}}}
        </div>

        <div class="IRFactsheetSharePriceChart">
            {{{includeFactsheetSharePriceChartPlaceholder 'Development in share price' '200px'}}}
        </div>

        <div class="IRFactsheet IRFloat IRSize3">

            <div class="IRFactsheetFinancialHighlights">
                <h2>Financial Highlights</h2>
                {{{includeFactsheetKeyFigureHighlightHeaders 'Factsheet' 'Financial Highlights' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial Highlights' 'Revenue' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial Highlights' 'Gross profit' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightData 'Factsheet' 'Financial Highlights' 'EBITDA' keyFigures}}}
                {{{includeFactsheetKeyFigureHighlightFooter}}}
            </div>

        </div>

        <div class="IRFactsheet IRFloat IRSize3">
            <div class="IRFactsheetShareData">
                <h2>Share data</h2>
                <table class="IRFactsheetShareDataTable">
                    <tbody>
                        <tr>
                            <td>Updated</td>
                            <td class="right"><span>{{showDateTime stocks/timestamp}}</span></td>
                        </tr>
                        <tr>
                            <td>Last price</td>
                            <td class="right"><span>{{decimals stocks/last}}</span></td>
                        </tr>
                        <tr>
                            <td>52 week high</td>
                            <td class="right"><span>{{decimals stocks/high52Week}}</span></td>
                        </tr>
                        <tr>
                            <td>52 week low</td>
                            <td class="right"><span>{{decimals stocks/low52Week}}</span></td>
                        </tr>
                        <tr>
                            <td>Issued shares</td>
                            <td class="right"><span>{{decimals stocks/shareMillions}} M</span></td>
                        </tr>
                        <tr>
                            <td>Market Cap.</td>
                            <td class="right"><span>{{toLocal stocks/marketCap}}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>

    <div class="IRFactsheet IRFloat IRSize2">
        {{{includeFactsheetChart 'Column' 'Revenue' 'Financial Highlights' 'Revenue' '200'}}}
        {{{includeFactsheetChart 'Column' 'Operational EBITDA' 'Financial Highlights' 'EBITDA' '200'}}}
        {{{includeFactsheetChart 'Pie' 'Revenue split By Geographic Location' 'Revenue split By Geographic Location' '' '250'}}}
        {{{includeFactsheetChart 'Pie' 'Revenue split By Business Activity' 'Revenue split By Business Activity' '' '250'}}}
    </div>

    <div class="IRFactsheet IRFloat IRSize6">
        {{{includeFactsheetDownloadPDF}}}
    </div>

</script>
