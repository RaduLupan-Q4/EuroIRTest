<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1">
    <title>Recommendations</title>
    <link rel="stylesheet" type="text/css" media="screen" href="css/client.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("css/client.style.css")).Ticks.ToString()%>"/>
    <link rel="stylesheet" type="text/css" media="print" href="css/print.style.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("css/print.style.css")).Ticks.ToString()%>"/>
</head>

<body class="recommendationsTemplate">

<div class="tabs">
    <div class="current-price">Current price <span class="tabs-data">269.90 DKK</span></div>
    <div class="recommendation">Recommendation <span class="tabs-data">UNDERPERFORM</span></div>
    <div class="target-price">Target price <span class="tabs-data">249.00 DKK</span></div>
</div>

<div class="under-tabs">
    <div class="number-of-recommendations">Number of recommendations: <span class="data">18</span></div>
    <div class="last-data">Last data input: <span class="data">Jan 6, 2017</span></div>
</div>

<div class="title">Consensus recommendation</div>
<div class="gradient-main-div">
    <table>
        <tr>
            <td> (1) Buy</td>
            <td> (2) Outperform</td>
            <td> (3) Hold</td>
            <td> (4) Underperform</td>
            <td> (5) Sell</td>
        </tr>
    </table>
    <div class="arrow-pointer">
        <div> &#9650</div>
        <div class="arrow-nb">0</div>
    </div>

</div>

<div class="title">Detailed recommendation</div>

<div class="detailed-recommendation">
    <table class="recommendations-table">
        <tbody>
        <tr>
            <td class="Data action">Buy</td>
            <td class="Data quantity">1</td>
            <td class="Data indicator">
                <div class="indicator-colored-1"></div>
            </td>
        </tr>
        <tr>
            <td class="Data action">Outperform</td>
            <td class="Data quantity">0</td>
            <td class="Data indicator">
                <div class="indicator-colored-2"></div>
            </td>
        </tr>
        <tr>
            <td class="Data action">Hold</td>
            <td class="Data quantity">9</td>
            <td class="Data indicator">
                <div class="indicator-colored-3"></div>
            </td>
        </tr>
        <tr>
            <td class="Data action">Underperform</td>
            <td class="Data quantity">1</td>
            <td class="Data indicator">
                <div class="indicator-colored-4"></div>
            </td>
        </tr>
        <tr>
            <td class="Data action">Sell</td>
            <td class="Data quantity">7</td>
            <td class="Data indicator">
                <div class="indicator-colored-5"></div>
            </td>
        </tr>
        </tbody>
    </table>

</div>

<div class="title">Recommendations</div>

<div class="recommendations">
    <table>
        <tr>
            <th></th>
            <th>1 yr.</th>
            <th>6 mo.</th>
            <th>5 mo.</th>
            <th>4 mo.</th>
            <th>3 mo.</th>
            <th>1 mo.</th>
            <th>Current</th>
        </tr>
        <tr>
            <td>Average</td>
            <td>3.33</td>
            <td>3.29</td>
            <td>3.29</td>
            <td>3.38</td>
            <td>3.38</td>
            <td>3.72</td>
            <td class="current-avg">3.72</td>
        </tr>
        <tr>
            <td>1 Buy</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>2 Outperform</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>3 Hold</td>
            <td>6</td>
            <td>6</td>
            <td>6</td>
            <td>9</td>
            <td>9</td>
            <td>9</td>
            <td>9</td>
        </tr>
        <tr>
            <td>4 Underperform</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>5 Sell</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>7</td>
            <td>7</td>
        </tr>
    </table>
</div>

<div class="recommendation-history-graph">
    <div class="title">Recommendation history</div>
    <div id="historyChart"></div>
</div>

<div class="target-price-history-graph">
    <div class="title">Target price history</div>
    <div class="target-chart-legend"></div>
    <div id="targetPriceChart"></div>
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
<script type="text/javascript" src="js/libs.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("js/libs.js")).Ticks.ToString()%>"></script>
<script type="text/javascript" src="js/script.recommendations.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("js/script.recommendations.js")).Ticks.ToString()%>"></script>
<!--<script src="http://d3js.org/d3.v3.min.js"  charset="utf-8"></script>-->
</html>


