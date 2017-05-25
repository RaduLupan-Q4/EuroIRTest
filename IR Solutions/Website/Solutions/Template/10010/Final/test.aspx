<html>
<head><title>IR Solutions, Euroinvestor</title>
    <link rel="stylesheet" type="text/css" media="screen" href="/inc/css/bootstrap/3_2_0/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.normalize.css?v=504911268000000000" />
    <link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.style.css?v=504911268000000000" />
    <link rel="stylesheet" type="text/css" media="screen" href="ir.client.css?v=635621040512863506" />
    <link rel="stylesheet" type="text/css" href="//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css" />
</head>
<body>

    <script type="text/javascript">
        var activeModules = ["IRLookup"];
    </script>

    <div class="IRLookupModule">
        <span class="ajaxLoader">Loading</span>
    </div>

    <script id="IRLookupTemplate" type="text/x-handlebars-template">

        <div class="IRChartLookupPlaceholder"></div>

        <form id="lookup-form" method="POST">

            <div class="input-row">

                <label for="from-datepicker" class="input-label from-label">{{t_from}}:</label>
                <div class="input-wrapper">
                    <input id="from-datepicker" class="datepicker-button" />
                    <select id="from-day" class="date-select">{{#for 1 32 1}}<option value="{{this}}">{{this}}</option>
                        {{/for}}</select>
                    <select id="from-month" class="date-select">
                        <option value="0">{{t_jan_short}}</option>
                        <option value="1">{{t_feb_short}}</option>
                        <option value="2">{{t_mar_short}}</option>
                        <option value="3">{{t_apr_short}}</option>
                        <option value="4">{{t_may_short}}</option>
                        <option value="5">{{t_jun_short}}</option>
                        <option value="6">{{t_jul_short}}</option>
                        <option value="7">{{t_aug_short}}</option>
                        <option value="8">{{t_sep_short}}</option>
                        <option value="9">{{t_oct_short}}</option>
                        <option value="10">{{t_nov_short}}</option>
                        <option value="11">{{t_dec_short}}</option>
                    </select>
                    <select id="from-year" class="date-select">{{#iteratePreviousNYears 10}}<option value="{{this}}">{{this}}</option>
                        {{/iteratePreviousNYears}}</select>
                </div>

            </div>

            <div class="input-row">

                <label for="to-datepicker" class="input-label to-label">{{t_to}}: </label>
                <div class="input-wrapper">
                    <input id="to-datepicker" class="datepicker-button" />
                    <select id="to-day" class="date-select">{{#for 1 32 1}}<option value="{{this}}">{{this}}</option>
                        {{/for}}</select>
                    <select id="to-month" class="date-select">
                        <option value="0">{{t_jan_short}}</option>
                        <option value="1">{{t_feb_short}}</option>
                        <option value="2">{{t_mar_short}}</option>
                        <option value="3">{{t_apr_short}}</option>
                        <option value="4">{{t_may_short}}</option>
                        <option value="5">{{t_jun_short}}</option>
                        <option value="6">{{t_jul_short}}</option>
                        <option value="7">{{t_aug_short}}</option>
                        <option value="8">{{t_sep_short}}</option>
                        <option value="9">{{t_oct_short}}</option>
                        <option value="10">{{t_nov_short}}</option>
                        <option value="11">{{t_dec_short}}</option>
                    </select>
                    <select id="to-year" class="date-select">{{#iteratePreviousNYears 10}}<option value="{{this}}">{{this}}</option>
                        {{/iteratePreviousNYears}}</select>
                </div>

            </div>
            <div class="input-row">
                <label class="input-label frequency-label">{{t_frequency}}: </label>
                <div class="input-wrapper">
                    <select id="frequency">
                        <option option="daily">{{t_daily}}</option>
                        <option option="monthly">{{t_monthly}}</option>
                        <option option="quarterly">{{t_quarterly}}</option>
                        <option option="yearly">{{t_yearly}}</option>
                    </select>
                </div>
            </div>
            <div class="input-row">
                <label class="input-label frequency-label">{{t_format}}: </label>
                <div class="input-wrapper">
                    <select id="format">
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

    <div class="disclaimer disclaimer-IRLookup"><span class="disclaimer-copyright">Copyright &copy; 1997-2015 <a href="http://www.euroinvestor.com/ir/">Euroinvestor</a> </span><span class="disclaimer-dataSource">and our data suppliers. </span><span class="disclaimer-delayed">Data delayed by 15-20 min.</span><span class="disclaimer-terms"> <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx">See Terms of use</a></span></div>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" />
    </script><script type="text/javascript" src="ir.client.js?v=635621044713497942" /></script><script type="text/javascript" src="/inc/scripts/ir.util.js?v=635615051254404101" /></script><script type="text/javascript" src="/inc/scripts/bootstrap/3_2_0/bootstrap.min.js" /></script><script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.3.0/handlebars.min.js" /></script><script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js" /></script><script type="text/javascript" src="/inc/scripts/browserSupport/respond.min.js" /></script><script type="text/javascript" src="/inc/scripts/ir.reset.js?v=635439574943657854" /></script><script type="text/javascript" src="/inc/scripts/ir.behaviour.js?v=635593394197999755" /></script><script type="text/javascript" src="/inc/scripts/defaultTranslations.js?v=635572772099253812" /></script><script type="text/javascript" src="/inc/scripts/ir.data.util.js?v=635605435760766237" /></script><script type="text/javascript" src="/inc/scripts/chartHTML/highstock-2-0-4.js" /></script><script type="text/javascript" src="/inc/scripts/jsv.js" /></script><script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js" /></script><script type="text/javascript" src="/inc/scripts/ir.time.util.js" /></script><script src="//code.jquery.com/ui/1.11.1/jquery-ui.js"></script><script type="text/javascript" src="/inc/scripts/ir.lookup.js?v=635620965094456212" /></script><script type="text/javascript" src="/inc/scripts/ir.draw.util.js?v=635604739634709680" /></script></body></html>

<script src="/code.jquery.com/ui/1.11.3/jquery-ui.js"></script>
<script src="src/jquery.placeholder.min.js"></script>
<script src="src/jquery.screwdefaultbuttonsV2.min.js"></script>

<!-- css3-mediaqueries.js for IE less than 9 -->
<script src="src/css3-mediaqueries.js"></script>

<link rel="stylesheet" href="/code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css">
<link rel="stylesheet" href="investorcom.css" />