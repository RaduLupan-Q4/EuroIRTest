<base href="http://ir.euroinvestor.com/solutions/ElectraEquity/2362/calc.aspx" target="_blank">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html dir="lrt">
<head>
<title>IR Solutions, Euroinvestor</title>
<link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.normalize.css?v=635808478203031177" />
<link rel="stylesheet" type="text/css" media="screen" href="/inc/css/ir.style.css?v=635888065011828445" />
<link rel="stylesheet" type="text/css" href="http://fast.fonts.net/cssapi/d62c0329-9fcc-43ae-b445-59557b0dbc19.css"/>
<link rel="stylesheet" type="text/css" media="screen" href="ir.client.css?v=635628022893601842" />
</head>
<body>

<script type="text/javascript">
    var activeModules = ["IRCalc"];
</script>

<div class="IRCalcModule">
    <div class="IRChartColour"></div>
    <span class="ajaxLoader">Loading</span>
</div>  

<script id="IRCalcTemplate" type="text/x-handlebars-template">

    <div class="IRChartCalcPlaceholder"></div>

    <form id="calc-form">
        <div class="formDivider">
            <div class="input-row">
                <label for="from-datepicker" class="input-label from-label" style="float: left;">{{t_from}}:</label>
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
                <label class="input-label invested-label">{{t_invested}}: </label>
                <div class="input-wrapper wide-input radio">
                    <input type="radio" name="invested" value="amount" id="amount-radio" checked="checked" />
                    <label for="amount-radio">{{t_amount}}</label>
                    <input type="radio" name="invested" value="shares" id="shares-radio" />
                    <label for="shares-radio">{{t_shares}}</label>
                </div>
            </div>
            <div class="input-row">
                <label class="input-label amount-invested-label">{{t_amount_invested}}:</label>
                <div class="input-wrapper">
                    <span id="currency-symbol"></span>
                    <input type="text" id="amount-invested" class="wide-input" step="any" min="0" />
                </div>
            </div>
            <div class="input-row">
                <div class="input-wrapper">
                    <input type="submit" value="{{t_calculate}}" id="calculate-button" />
                </div>
            </div>
        </div>
    </form>
    <div class="divideLine"></div>

    <section id="result-section">
        <table class="IRToolCalcResultsTable table-look horizontal responsive-flip">
            <thead>
                <tr>
                    <th class="Header column-first buy-price">{{t_buy_price}}</th>
                    <th class="Header est-shares">{{t_est_number_of_shares}}</th>
                    <th class="Header sell-price">{{t_sell_price}}</th>
                    <th class="Header value-now">{{t_value_now}}</th>
                    <th class="Header column-last yield">{{t_yield}}</th>
                </tr>
            </thead>
            <tbody id="lookup-table-body">
                <tr class="row-1">
                    <td class="Data column-first buy-price-cell">-</td>
                    <td class="Data est-shares-cell">-</td>
                    <td class="Data sell-price-cell">-</td>
                    <td class="Data value-now-cell">-</td>
                    <td class="Data column-last yield-cell">-</td>
                </tr>
            </tbody>
        </table>
    </section>
    <section id="result-section">
        <table class="IRToolCalcResultsTable table-look vertical responsive-flip">
            <tr>
                <th class="Header buy-price">{{t_buy_price}}</th>
                <td class="Data buy-price-cell">-</td>
            </tr>
            <tr>
                <th class="Header est-shares">{{t_est_number_of_shares}}</th>
                <td class="Data est-shares-cell">-</td>
            </tr>
            <tr>
                <th class="Header sell-price">{{t_sell_price}}</th>
                <td class="Data sell-price-cell">-</td>
            </tr>
            <tr>
                <th class="Header value-now">{{t_value_now}}</th>
                <td class="Data value-now-cell">-</td>
            </tr>
            <tr>
                <th class="Header yield">{{t_yield}}</th>
                <td class="Data yield-cell">-</td>
            </tr>
        </table>
    </section>
</script>

<%= site.newFooter("IRCalc") %>