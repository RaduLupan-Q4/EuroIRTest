<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
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

    <form id="calc-form" class="languageDirectionCheck">

        <%--<div class="input-row">
            <label for="from-datepicker" class="input-label from-label">{{t_change_listing}}:</label> 
            <div class="input-wrapper" style="width:230px; font-size:12px;">
                <div class="IRChangeListing"></div>
            </div>
        </div>--%>

        <div class="input-row">
            <label for="from-datepicker" class="input-label from-label" style="float: left;">{{t_from}}:</label>
            <div class="input-wrapper">
                {{{datepicker 'from'}}}
                {{{selectFromDay}}}
                {{{selectFromMonth 'MMM'}}}
                {{{selectFromYear}}}
            </div>
        </div>
        <div class="input-row">
            <label for="to-datepicker" class="input-label to-label">{{t_to}}: </label>
            <div class="input-wrapper">
                {{{datepicker 'to'}}}
                {{{selectToDay}}}
                {{{selectToMonth 'MMM'}}}
                {{{selectToYear}}}
            </div>
        </div>
        <div class="input-row">
            <label class="input-label invested-label">{{t_invested}}: </label>
            <div class="input-wrapper wide-input radio">
                <label for="amount-radio">
                    <input type="radio" name="invested" value="amount" id="amount-radio" checked="checked" />
                    {{t_amount}}</label>
                    <label for="shares-radio">
                    <input type="radio" name="invested" value="shares" id="shares-radio" />
                    {{t_shares}}</label>
            </div>
        </div>
        <div class="input-row">
            <label class="input-label amount-invested-label">{{t_amount_invested}}:</label>
            <div class="input-wrapper">
                <span id="currency-symbol">&pound;</span>
                <input type="text" id="amount-invested" step="any" min="0" />
            </div>
        </div>
        <div class="input-row buttonWrapper">
            <div class="input-wrapper" id="custom-calc">
                <input type="submit" class="IRButton" value="{{t_calculate}}" id="calculate-button" />
            </div>
        </div>
    </form>
    <section id="result-section">
        <table class="IRToolCalcResultsTable table-look horizontal responsive">
            <thead>
                <tr>
                    <th class="Header column-first">{{t_buy_price}} ({{showCurrency}})</</th>
                    <th class="Header est-shares">{{t_est_number_of_shares}}</th>
                    <th class="Header sell-price">{{t_sell_price}} ({{showCurrency}})</th>
                    <th class="Header value-now">{{t_value_now}} (&pound;)</th>
                    <th class="Header column-last yield">{{t_yield}}</th>
                </tr>
            </thead>
            <tbody id="lookup-table-body">
                <tr class="row-1">
                    <td class="Data column-first buy-price-cell">-</td>
                    <td class="Data est-shares-cell" id="custom-est">-</td>
                    <td class="Data sell-price-cell">-</td>
                    <td class="Data value-now-cell">-</td>
                    <td class="Data column-last yield-cell">-</td>
                </tr>
            </tbody>
        </table>
        <table class="IRToolCalcResultsTable table-look vertical responsive">
            <tr>
                <th class="Header buy-price">{{t_buy_price}} ({{showCurrency}})</th>
                <td class="Data buy-price-cell">-</td>
            </tr>
            <tr>
                <th class="Header est-shares">{{t_est_number_of_shares}}</th>
                <td class="Data est-shares-cell"  id="custom-est">-</td>
            </tr>
            <tr>
                <th class="Header sell-price">{{t_sell_price}} ({{showCurrency}})</th>
                <td class="Data sell-price-cell">-</td>
            </tr>
            <tr>
                <th class="Header value-now">{{t_value_now}} (&pound;)</th>
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
    var oldNb = '';
    var oldVal = '';
    var change = false;
    //radio button design updated

    var radioBtn = $("input[type=radio]");

    $(document).ready(function () {
        addRadioBtn();
    })
    $(document).ajaxStop(function () {
        addRadioBtn();
    });

    function addRadioBtn() {

        $("input[type=radio]").each(function () {
            var rb = $(this);
            rb.css('display', 'none');
            if (rb.is(':checked'))
                $('<span class="radioBtn checked"></span>').insertBefore(rb);
            else
                $('<span class="radioBtn"></span>').insertBefore(rb);
        })
        $(document).on('change', "input[type=radio]", function () {
            var n = $(this).attr('name');
            $("input[type=radio]").each(function () {
                ($(this).attr('name') == n) ? $(this).prev().removeClass('checked') : 0;
            })
            $(this).is(':checked') ? $(this).prev().addClass('checked') : $(this).prev().removeClass('checked');

            if($('#amount-invested').val().trim().length > 0) $('.IRButton').click();
        })
    }

    setInterval(thous, 100)
    function thous(){
        var changeEl = ['.buy-price-cell', '.value-now-cell', '.sell-price-cell', '.est-shares-cell'];
        var rad = $('input[type=radio]:checked').val();
    
        for (var i = 0; i < changeEl.length; i++){
            try{
                var tempNb = $(changeEl[i]).first().text() === '-' ? '' : $(changeEl[i]).first().text().replace(/\s/g, '').match(/[0-9.,]+/g)[0];
                if (tempNb.length > 0 && (tempNb.split(clientLocaleParameters.decimalSeparator).length - 1) <= 1 && (tempNb.split(clientLocaleParameters.decimalSeparator1000).length - 1) -1 === -1){
                    tempNb = parseFloat(tempNb);
                    if (changeEl[i] === '.est-shares-cell' && rad === 'amount'){
                        tempNb = oldNb !== tempNb ? (tempNb * 100).round(2): tempNb;
                        oldNb = tempNb;
                    }
                    if(changeEl[i] === '.value-now-cell' && rad === 'shares') {
                        tempNb = oldVal !== tempNb ? (tempNb / 100).round(2) : tempNb;
                        oldVal = tempNb;
                    }
                    var nb = tempNb.toString().split('.');
                    if (changeEl[i] === '.est-shares-cell') $(changeEl[i]).text(nb[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000));
                    else if (typeof nb[1] === 'undefined') $(changeEl[i]).text(nb[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000) + '.00');
                    else $(changeEl[i]).text(nb[0].replace(/\B(?=(\d{3})+(?!\d))/g, clientLocaleParameters.decimalSeparator1000) + clientLocaleParameters.decimalSeparator + nb[1]);
                }
            } catch(err){}
        }
    }



    //GBP/GBp issue for Amount/Shares

        // var calculationInputType = 'amount';
    
        // function numberWithCommas(x, number) {
        //     //console.log('number:' + x);
        //     return parseFloat(x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")).toFixed(2);
        // }

        // function overwriteCalculationResult()
        // {
        //     setTimeout(function () {

        //         $('.IRToolCalcResultsTable .Data').each(function () {
        //             $(this).html($(this).html().replace(/GBp /g, '').replace(/,/g, ''));
        //         });

        //         if (calculationInputType == 'amount') {
        //             $('td.est-shares-cell').html(numberWithCommas(100 * parseFloat($('td.est-shares-cell').html())));
        //             $('td.value-now-cell').html(numberWithCommas(parseFloat($('td.value-now-cell').html())));
        //         }
        //         if (calculationInputType == 'shares') {
        //             $('td.est-shares-cell').html(numberWithCommas(1 * parseFloat($('td.est-shares-cell').html())));
        //             $('td.value-now-cell').html(numberWithCommas(parseFloat($('td.value-now-cell').html()) / 100));
        //         }
        //         $('.IRToolCalcResultsTable .Data').css('visibility', 'visible');
        //     }, 300);
        // }

        // var calcResultsTable = false;
        // $(function () {
        //     setTimeout(function () {
        //         $('#calculate-button').click(function () {
        //             $('.IRToolCalcResultsTable .Data').css('visibility', 'hidden');

        //             overwriteCalculationResult();
        //         });
        //         $('#amount-radio').change(function () {
        //             calculationInputType = 'amount';
        //         });
        //         $('#shares-radio').change(function () {
        //             calculationInputType = 'shares';
        //         });

        //     }, 100);
        // });
    // $(function () {
       
    // });
</script>


