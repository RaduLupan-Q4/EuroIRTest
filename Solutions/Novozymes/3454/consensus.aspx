<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1">
    <title>Consensus</title>
    <link rel="stylesheet" type="text/css" media="screen" href="css/client.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("css/client.style.css")).Ticks.ToString()%>"/>
    <link rel="stylesheet" type="text/css" media="print" href="css/print.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("css/print.style.css")).Ticks.ToString()%>"/>
</head>

<body class="consensusTemplate">
<div class="top-line">
    <span class="resetTable">Back to summary view</span>
    <span class="lastDate">Last data input: <span class="data">Jan 6, 2017</span></span>
</div>
<div class="consensus-table">

</div>

<div class="deep-graph">
    <div class="chart-title"></div>
    <div id="chartBoxy"></div>
</div>

<div class="title">Contributors</div>
<div class="contributors">
    <ul>
        <li>ABG Sundal Collier</li>
        <li>Berenberg</li>
        <li>Credit Suisse</li>
        <li>Deutsche Bank</li>
        <li>Goldman Sachs</li>
        <li>Investec</li>
        <li>Jyske Markets</li>
        <li>Nykredit Bank</li>
        <li>SEB</li>
    </ul>

    <ul>
        <li>Alm. Brand Markets</li>
        <li>Bernstein</li>
        <li>Danske Markets</li>
        <li>DNB</li>
        <li>Handelsbanken</li>
        <li>Jefferies International</li>
        <li>Nordea</li>
        <li>Redburn</li>
        <li>Sydbank</li>
    </ul>

</div>

<div class="contributors-info">
    <table>
        <tbody>
        <thead>
        <tr>
            <th>Company</th>
            <th>Analyst</th>
            <th>Country</th>
        </tr>
        </thead>
        <tr>
            <td class="Data company">ABG Sundal Collier</td>
            <td class="Data analyst">Michael Vitfell-Rasmussen</td>
            <td class="Data country">Denmark</td>
        </tr>
        <tr>
            <td class="Data company">Alm. Brand Markets</td>
            <td class="Data analyst">Michael Friis Jørgensen</td>
            <td class="Data country">Denmark</td>
        </tr>
        <tr>
            <td class="Data company">Berenberg</td>
            <td class="Data analyst">Sebastian Bray</td>
            <td class="Data country">United Kingdom</td>
        </tr>
        <tr>
            <td class="Data company">Bernstein</td>
            <td class="Data analyst">Günther Zechmann</td>
            <td class="Data country">United Kingdom</td>
        </tr>
        <tr>
            <td class="Data company">BoA Merrill Lynch</td>
            <td class="Data analyst">Faisal AlAzmeh</td>
            <td class="Data country">United Arab Emirates</td>
        </tr>
        <tr>
            <td class="Data company">Carnegie</td>
            <td class="Data analyst">Lars Topholm</td>
            <td class="Data country">Denmark</td>
        </tr>
        <tr>
            <td class="Data company">Citigroup</td>
            <td class="Data analyst">Andrew Benson</td>
            <td class="Data country">United Kingdom</td>
        </tr>
        <tr>
            <td class="Data company">Credit Suisse</td>
            <td class="Data analyst">Mathew Waugh</td>
            <td class="Data country">United Kingdom</td>
        </tr>
        <tr>
            <td class="Data company">Danske Markets</td>
            <td class="Data analyst">Tobias Cornelius Björklund</td>
            <td class="Data country">Denmark</td>
        </tr>
        <tr>
            <td class="Data company">Deutsche Bank</td>
            <td class="Data analyst">Virginie Boucher-Ferte</td>
            <td class="Data country">United Kingdom</td>
        </tr>
        <tr>
            <td class="Data company">DNB</td>
            <td class="Data analyst">Rune Majlund Dahl</td>
            <td class="Data country">United Kingdom</td>
        </tr>
        <tr>
            <td class="Data company">Goldman Sachs</td>
            <td class="Data analyst">Fulvio Cazzol</td>
            <td class="Data country">United Kingdom</td>
        </tr>
        <tr>
            <td class="Data company">Handelsbanken</td>
            <td class="Data analyst">Annette Lykke</td>
            <td class="Data country">Denmark</td>
        </tr>
        <tr>
            <td class="Data company">Investec</td>
            <td class="Data analyst">Ian Hunter</td>
            <td class="Data country">Ireland</td>
        </tr>
        <tr>
            <td class="Data company">Jefferies International</td>
            <td class="Data analyst">Laurence Alexander</td>
            <td class="Data country">United States</td>
        </tr>
        <tr>
            <td class="Data company">JPMorgan</td>
            <td class="Data analyst">Silke Kueck-Valdes</td>
            <td class="Data country">United States</td>
        </tr>
        <tr>
            <td class="Data company">Jyske Markets</td>
            <td class="Data analyst">Frank Hørning Andersen</td>
            <td class="Data country">Denmark</td>
        </tr>
        <tr>
            <td class="Data company">Kempen & Co</td>
            <td class="Data analyst">(analyst changeover)</td>
            <td class="Data country">Netherlands</td>
        </tr>
        <tr>
            <td class="Data company">Kepler Cheuvreux</td>
            <td class="Data analyst">(analyst changeover)</td>
            <td class="Data country">Sweden</td>
        </tr>
        <tr>
            <td class="Data company">Nordea</td>
            <td class="Data analyst">Hans Gregersen</td>
            <td class="Data country">Denmark</td>
        </tr>
        <tr>
            <td class="Data company">Nykredit Bank</td>
            <td class="Data analyst">Klaus Kehl</td>
            <td class="Data country">Denmark</td>
        </tr>
        <tr>
            <td class="Data company">Redburn</td>
            <td class="Data analyst">Ian Wood</td>
            <td class="Data country">United Kingdom</td>
        </tr>
        <tr>
            <td class="Data company">SEB</td>
            <td class="Data analyst">Søren Samsøe</td>
            <td class="Data country">Denmark</td>
        </tr>
        <tr>
            <td class="Data company">Sydbank</td>
            <td class="Data analyst">Morten Imsgard</td>
            <td class="Data country">Denmark</td>
        </tr>
        <tr>
            <td class="Data company">UBS</td>
            <td class="Data analyst">(analyst changeover)</td>
            <td class="Data country">United Kingdom</td>
        </tr>

        </tbody>
    </table>
</div>

<div class="disclaimer">
    <span class="disclaimer-copyright">Copyright &copy; 1997-2017
        <a href="https://www.q4euroinvestor.com/" class="link-target" target="_blank">Q4 Euroinvestor</a>
    </span>
    <span class="disclaimer-dataSource">and our data suppliers. </span>
    <span class="disclaimer-delayed">Data delayed by 15-20 min.</span>
    <span class="disclaimer-terms">
        <a href="https://www.q4euroinvestor.com/MainDisclaimer/" class="link-target"
           target="_blank">See Terms of use</a>
    </span>
</div>

</body>
<script id="consensus-table-template" type="text/x-handlebars-template">
    <table>
        <thead>
        <tr></tr>
        {{{generateHeader headers tableName}}}
        </thead>
        <tbody>
        {{{generateTableRow data 'Organic growth (%)'}}}
        {{{generateTableRow data 'Revenues'}}}
        {{{generateTableRow data 'Revenues' 'Growth rate (%)'}}}
        {{{generateTableRow data 'Revenues' 'Household Care'}}}
        {{{generateTableRow data 'Revenues' 'Food & Beverages'}}}
        {{{generateTableRow data 'Revenues' 'Bioenergy'}}}
        {{{generateTableRow data 'Revenues' 'Agriculture & Feed'}}}
        {{{generateTableRow data 'Revenues' 'Technical & Pharma'}}}
        {{{generateTableRow data 'EBIT'}}}
        {{{generateTableRow data 'EBIT' 'Growth rate (%)'}}}
        {{{generateTableRow data 'EBIT' 'EBIT margin (%)'}}}
        {{{generateTableRow data 'Financial'}}}
        {{{generateTableRow data 'EBT'}}}
        {{{generateTableRow data 'EBT' 'Growth rate (%)'}}}
        {{{generateTableRow data 'Net profit'}}}
        {{{generateTableRow data 'Net profit' 'Growth rate (%)'}}}
        {{{generateTableRow data 'Net investments'}}}
        {{{generateTableRow data 'Number of shares (million)'}}}
        {{{generateTableRow data 'EPS (DKK)'}}}
        </tbody>
    </table>
</script>
<script id="consensus-chart-table-template" type="text/x-handlebars-template">
    <table>
        <thead>
        <tr></tr>
        {{{generateHeader headers tableName}}}
        </thead>
        <tbody>
        {{{generateChartTable data}}}
        </tbody>
    </table>
</script>
<script type="text/javascript" src="js/libs.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("js/libs.js")).Ticks.ToString()%>"></script>
<script type="text/javascript" src="js/script.consensus2.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("js/script.consensus2.js")).Ticks.ToString()%>"></script>
</html>