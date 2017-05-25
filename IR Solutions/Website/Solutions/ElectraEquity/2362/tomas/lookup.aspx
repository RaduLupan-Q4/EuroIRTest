﻿<base href="http://ir.euroinvestor.com/solutions/ElectraEquity/2362/chart.aspx" target="_blank">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html dir="lrt">
<head>
<title>IR Solutions, Euroinvestor</title>
<link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.normalize.css?v=635793031194669922" />
<link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.style.css?v=635890532135184019" />

<link rel="stylesheet" type="text/css" media="screen" href="/includes/css/libs/jquery-ui1-11-1_smoothness.css?v=635810169525468128" />
<link rel="stylesheet" type="text/css" media="screen" href="ir.client.css?v=635887332377770725" />
</head>
<body>


<script type="text/javascript">
    var activeModules = ["IRLookup"];
</script>

<div class="IRLookupModule">
    <div class="IRChartColour"></div>
    <span class="ajaxLoader">Loading</span>
</div>


<script id="IRLookupTemplate" type="text/x-handlebars-template">


    <div class="IRChartLookupPlaceholder"></div>

    <form id="lookup-form" method="POST">
        <div class="formDivider">
            <div class="input-row">
                <label for="from-datepicker" class="input-label from-label">{{t_from}}:</label>
                <div class="input-wrapper">
                    {{{datepicker 'from'}}}
                {{{selectFromDay}}}
                {{{selectFromMonth}}}
                {{{selectFromYear 2014}}}
                </div>
            </div>
            <div class="input-row">
                <label for="to-datepicker" class="input-label to-label">{{t_to}}: </label>
                <div class="input-wrapper">
                    {{{datepicker 'to'}}}
               {{{selectToDay}}}
               {{{selectToMonth}}}
               {{{selectToYear}}}
                </div>
            </div>
        </div>
        <div class="formDivider">
            <div class="input-row">
                <label class="input-label frequency-label">{{t_frequency}}: </label>
                <div class="input-wrapper">
                    <select id="frequency" class="wide-input">
                        <option option="daily">{{t_daily}}</option>
                        <option option="monthly">{{t_monthly}}</option>
                        <option option="quarterly">{{t_quarterly}}</option>
                        <option option="yearly">{{t_yearly}}</option>
                    </select>
                </div>
            </div>
            <div class="input-row">
                <label class="input-label format-label">{{t_format}}: </label>
                <div class="input-wrapper">
                    <select id="format" class="wide-input">
                        <option value="html">HTML</option>
                        <option value="excel">Excel</option>
                    </select>
                </div>
            </div>
            <div class="input-row">
                <div class="input-wrapper">
                    <input type="submit" value="{{t_lookup}}" id="lookup-button" />
                </div>
            </div>
        </div>
    </form>
</script>

<script id="IRLookupTableTemplate" type="text/x-handlebars-template">
    <table class="IRLookupResultsTable table-look horizontal responsive">
        <tr>
            <th class="Header column-first date">{{headers/t_date}}</th>
            <th class="Header open">{{headers/t_open}}</th>
            <th class="Header high">{{headers/t_high}}</th>
            <th class="Header low">{{headers/t_low}}</th>
            <th class="Header">{{headers/t_close}}</th>
            <th class="Header column-last volume">{{headers/t_volume}}</th>
        </tr>
        {{#each closePrices}}
            <tr>
                <td class="Data column-first date">{{date}}</td>
                <td class="Data price">{{decimal openPrice 2}}</td>
                <td class="Data high">{{decimal high 2}}</td>
                <td class="Data low">{{decimal low 2}}</td>
                <td class="Data">{{decimal closePrice 2}}</td>
                <td class="Data column-last volume">{{volume}}</td>
            </tr>
        {{/each}}
    </table>
</script>

<div class="disclaimer disclaimer-IRLookup">
<span class="disclaimer-copyright">Copyright &copy; 1997-2016 <a href="http://www.euroinvestor.com/ir/">Euroinvestor</a> </span><span class="disclaimer-dataSource">and our data suppliers. </span><span class="disclaimer-delayed">Data delayed by 15-20 min.</span><span class="disclaimer-terms"> <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">See Terms of use</a></span></div>
<script type="text/javascript" src="/includes/js/libs/jquery2-1-4.min.js?v=635808478220682775"></script>
<script type="text/javascript" src="ir.client.js?v=635890752660000000"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.js?v=635893185104017734"></script>
<script type="text/javascript" src="/inc/scripts/bootstrap/3_2_0/bootstrap.min.js?v=635793031199586841"></script>
<script type="text/javascript" src="/includes/js/libs/handlebars1-3-0.min.js?v=635808478214120447"></script>
<script type="text/javascript" src="/includes/js/libs/moment2-7-0.min.js?v=635808478220995253"></script>
<script type="text/javascript" src="/includes/js/libs/moment-timezone0-3-1.min.js?v=635808478220995253"></script>
<script type="text/javascript" src="/inc/scripts/moment/moment-timezone-with-data-2010-2020.min.js?v=635808478211933009"></script>
<script type="text/javascript" src="/inc/scripts/browserSupport/respond.min.js?v=635793031199506909"></script>
<script type="text/javascript" src="/inc/scripts/ir.reset.js?v=635793031198936378"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.behaviour.js?v=635889809206474823"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.data.js?v=635890565104310821"></script>
<script type="text/javascript" src="/includes/js/libs/highstock-2-0-4.js?v=635808478220057902"></script>
<script type="text/javascript" src="/inc/scripts/jsv.js?v=635793031199216579"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js"/></script>
<script src="//code.jquery.com/ui/1.11.1/jquery-ui.js"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.tool.lookup.js?v=635888936537776014"></script>
<script type="text/javascript" src="/inc/scripts/core/ir.util.draw.js?v=635890548722757094"></script>
</body>
</html>