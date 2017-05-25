<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css"" type=""text/css"" />";

%>

<%= site.newHeader("IRCalc2") %>


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
        <div class="input-row">
            <label for="from-datepicker" class="input-label from-label" style="float: left;">{{t_from}}:</label>
            <div class="input-wrapper">
                {{{datepicker 'from'}}}
                {{{selectFromDay}}}
                {{{selectFromMonth}}}
                {{{selectFromYear}}}
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
        <div class="input-row">
            <label class="input-label invested-label">{{t_invested}}: </label>
            <div class="input-wrapper">
                <input type="radio" name="invested" value="amount" id="amount-radio" checked="checked" />
                <label for="amount-radio">{{t_amount}}</label>
                <input type="radio" name="invested" value="shares" id="shares-radio" />
                <label for="shares-radio">{{t_shares}}</label>
            </div>
        </div>
        <div class="input-row">
            <label class="input-label amount-invested-label">{{t_amount_invested}}:</label>
            <div class="input-wrapper">
                <span id="currency-symbol">£:</span>
                <input type="number" id="amount-invested" step="any" min="0" />
            </div>
        </div>
        <div class="input-row">
            <div class="input-wrapper">
                <input type="submit" value="{{t_calculate}}" id="calculate-button" />
            </div>
        </div>
    </form>
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

<%= site.newFooter("IRCalc2") %>


<script type="text/javascript">

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    $(document).ready(function () {
        var calculationInputType = 'amount';

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }



        function overwriteCalculationResult() {
            setTimeout(function () {
                console.log('set timeout test');
                $('.IRToolCalcResultsTable .Data').each(function () {
                    $(this).html($(this).html().replace(/Fils /g, '').replace(/,/g, ''));
                });

                if (calculationInputType == 'amount') {
                    console.log('calcinput type = amount');

                    var sellPrice = parseFloat($('td.sell-price-cell').html().replace('GBX ', ''));
                    var estNumberOfShares = parseFloat($('td.est-shares-cell').html()) * 100;
                    $('td.est-shares-cell').html(numberWithCommas(estNumberOfShares));

                    //var valueNow = numberWithCommas(parseFloat($('td.value-now-cell').html()));
                    var valueNow = (sellPrice * estNumberOfShares)/100;
                    $('td.value-now-cell').html('£ ' + valueNow.toFixed(2));


                    var yieldValue = parseFloat($('td.yield-cell').html());
                    if (isNaN(yieldValue)) {
                        $('td.yield-cell').html('0');
                    }


                }
                if (calculationInputType == 'shares') {
                    console.log('calcinput type = shares');
                    var sellPrice = parseFloat($('td.sell-price-cell').html().replace('GBX ', ''));
                    var estNumberOfShares = parseFloat($('td.est-shares-cell').html()) * 100;
                    $('td.est-shares-cell').html(numberWithCommas(estNumberOfShares));

                    //var valueNow = numberWithCommas(parseFloat($('td.value-now-cell').html()));
                    var valueNow = (sellPrice * estNumberOfShares) / 100;
                    $('td.value-now-cell').html('£ ' + valueNow.toFixed(2));


                    var yieldValue = parseFloat($('td.yield-cell').html());
                    if (isNaN(yieldValue)) {
                        $('td.yield-cell').html('0');
                    }
                }
                $('.IRToolCalcResultsTable .Data').css('visibility', 'visible');
            }, 200);

        }

        var calcResultsTable = false;
        $(function () {
            setTimeout(function () {
                $('#calculate-button').click(function () {
                    $('.IRToolCalcResultsTable .Data').css('visibility', 'hidden');

                    overwriteCalculationResult();
                });
                $('#amount-radio').change(function () {
                    calculationInputType = 'amount';
                });
                $('#shares-radio').change(function () {
                    calculationInputType = 'shares';
                });

            }, 500);
        });
    });

</script>
