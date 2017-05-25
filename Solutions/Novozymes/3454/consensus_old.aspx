<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>


<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
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
    <table>
        <thead>
        <tr></tr>
        </thead>
        <tbody></tbody>
    </table>
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
	<div>
       <span class="back-button">Back to summary view</span>
   </div>
    <table>
        
        <thead>
        <tr>
            <th>Company</th>
            <th>Analyst</th>
            <th>Country</th>
        </tr>
        </thead>
		<tbody>

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
<script type="text/javascript" src="js/script.consensus.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("js/script.consensus.js")).Ticks.ToString()%>"></script>
</html>