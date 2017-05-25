<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
%>

<%= site.newHeader("IRCalc") %>


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
                {{{selectFromMonth 'MM'}}}
                {{{selectFromYear}}}
            </div>
        </div>
        <div class="input-row">
            <label for="to-datepicker" class="input-label to-label">{{t_to}}: </label>
            <div class="input-wrapper">
                {{{datepicker 'to'}}}
                {{{selectToDay}}}
                {{{selectToMonth 'MM'}}}
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
                <span id="currency-symbol"></span>
                <input type="text" id="amount-invested" step="any" min="0" />
            </div>
        </div>
        <div class="input-row" style="height: 40px;">
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
                    <th class="Header value-now">{{t_value_now}} (KWD)</th>
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
                <th class="Header buy-price">{{t_buy_price}}</th>
                <td class="Data buy-price-cell">-</td>
            </tr>
            <tr>
                <th class="Header est-shares">{{t_est_number_of_shares}}</th>
                <td class="Data est-shares-cell"  id="custom-est">-</td>
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
<div class="RKDDisclaimer">
    Quote data provided by © Thomson Reuters Limited. <a target="_Blank" href="//media.corporate-ir.net/media_files/irol/17/176279/Terms_Conditions.html">See Terms of use</a>
</div>
<%= site.newFooter("IRCalc") %>


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


    $(function () {
       
        var toolSet = false;
        function prepareTool() {
            
            if (!toolSet) {
                if (typeof ($('#calculate-button')) != 'undefined') {
                    
                    
                    
                    $('#calculate-button').click(function () {

                        setTimeout(function () {
                            updateResultsTable();
                        }, 100);

                        
                    });


                    toolSet = true;
                }
            }
        }
        $(function () {
            setInterval(function () {
                prepareTool();
            }, 200);
        });

    });

    function updateResultsTable()
    {
        var results = calculate();

        console.log(" ");
        console.log("results.buyStockPrice: " + results.buyStockPrice);
        console.log("results.sellStockPrice: " + results.buyStockPrice);
        console.log(" ");

        if ((results.buyStockPrice > 0) && (results.sellStockPrice < 1000)) {
            $(".buy-price-cell").text(formatDecimal(results.buyStockPrice)); // + ' ' + getActiveCurrency()
            $("#custom-est").html((formatNumberWithLocalDelimiters(Number(results.shares.toFixed(0)))));
            $(".sell-price-cell").text((formatDecimal(results.sellStockPrice) / 1000));
            $(".value-now-cell").html((formatNumberWithLocalDelimiters(Number(results.sellValue.toFixed(0)) / 1000)));      
            console.log('result lower than 1000:' + results.buyStockPrice);
            //$(".yield-cell").text(results.percentReturn.toFixed(2) + "%");
            //$(".buy-price-cell").text(getActiveCurrency() + ' ' + results.buyStockPrice.toFixed(2));
            //$(".est-shares-cell").text(results.shares.toFixed(2));
            //$(".sell-price-cell").text(getActiveCurrency() + ' ' + results.sellStockPrice.toFixed(2));
            //$(".value-now-cell").text(getActiveCurrency() + ' ' + results.sellValue.toFixed(2));
            //$(".yield-cell").text(results.percentReturn.toFixed(2) + "%");

        }
        else if ((results.buyStockPrice > 0) && (results.sellStockPrice >= 1000)) {
            //$(".buy-price-cell").text(getActiveCurrency() + ' ' + formatDecimal(results.buyStockPrice));
            $(".buy-price-cell").text(formatDecimal(results.buyStockPrice)); // + ' ' + '(' + getActiveCurrency() + ')'
            //$("#custom-est").html(formatDecimal(results.shares));
            $("#custom-est").html((formatNumberWithLocalDelimiters(Number(results.shares.toFixed(0)))));
            $(".sell-price-cell").text((formatDecimal(results.sellStockPrice)));
            //$(".value-now-cell").text('KWD ' + formatDecimal(results.sellValue));
            $(".value-now-cell").html((formatNumberWithLocalDelimiters(Number(results.sellValue.toFixed(0)) / 1000)));
            console.log('result higher than 1000');
            //$(".yield-cell").text(results.percentReturn.toFixed(2) + "%");
            //$(".buy-price-cell").text(getActiveCurrency() + ' ' + results.buyStockPrice.toFixed(2));
            //$(".est-shares-cell").text(results.shares.toFixed(2));
            //$(".sell-price-cell").text(getActiveCurrency() + ' ' + results.sellStockPrice.toFixed(2));
            //$(".value-now-cell").text(getActiveCurrency() + ' ' + results.sellValue.toFixed(2));     

        }
    }


    $(document).ready(function () {
        
        var calcResultsTable = false;
        
        function prepareCalcResultsTable() {
            if (!calcResultsTable) {
                
                if (typeof ($('#custom-est')) != 'undefined') {

                    var results = calculate();

                    if (typeof (results.buyStockPrice) == 'undefined') {
                        setResultsAsNoData();
                        console.log('result.sbuyStockPrice = undefined');

                    } else {
                        console.log('#custom-est found');
                        $("#custom-est").html("nice");

                        if ((results.buyStockPrice > 0) && (results.sellStockPrice < 1000)) {
                            $(".buy-price-cell").text(formatDecimal(results.buyStockPrice)); // + ' ' + getActiveCurrency()
                            //$(".buy-price-cell").text(getActiveCurrency() + ' ' + formatDecimal(results.buyStockPrice));
                            $("#custom-est").html(formatDecimal(results));
                            $(".sell-price-cell").text((formatDecimal(results.sellStockPrice) / 1000));
                            $(".value-now-cell").text(formatDecimal(results.sellValue) / 1000);
                            console.log('result lower than 1000:' + results.buyStockPrice);
                            //$(".yield-cell").text(results.percentReturn.toFixed(2) + "%");
                            //$(".buy-price-cell").text(getActiveCurrency() + ' ' + results.buyStockPrice.toFixed(2));
                            //$(".est-shares-cell").text(results.shares.toFixed(2));
                            //$(".sell-price-cell").text(getActiveCurrency() + ' ' + results.sellStockPrice.toFixed(2));
                            //$(".value-now-cell").text(getActiveCurrency() + ' ' + results.sellValue.toFixed(2));
                            //$(".yield-cell").text(results.percentReturn.toFixed(2) + "%");
                        }
                        else if ((results.buyStockPrice > 0) && (results.sellStockPrice >= 1000)) {
                            //$(".buy-price-cell").text(getActiveCurrency() + ' ' + formatDecimal(results.buyStockPrice));
                            $(".buy-price-cell").text(formatDecimal(results.buyStockPrice)); // + ' ' + '(' + getActiveCurrency() + ')'
                            $("#custom-est").html(formatDecimal(results.shares));
                            $(".sell-price-cell").text((formatDecimal(results.sellStockPrice)));
                            $(".value-now-cell").text(formatDecimal(results.sellValue) / 1000);
                            console.log('result higher than 1000');
                            //$(".yield-cell").text(results.percentReturn.toFixed(2) + "%");
                            //$(".buy-price-cell").text(getActiveCurrency() + ' ' + results.buyStockPrice.toFixed(2));
                            //$(".est-shares-cell").text(results.shares.toFixed(2));
                            //$(".sell-price-cell").text(getActiveCurrency() + ' ' + results.sellStockPrice.toFixed(2));
                            //$(".value-now-cell").text(getActiveCurrency() + ' ' + results.sellValue.toFixed(2));
                            //$(".yield-cell").text(results.percentReturn.toFixed(2) + "%");
                        }
                        else {
                            setResultsAsNoData();
                        }
                    }
                    calcResultsTable = true;
                    console.log('calcResultsTable found and set to true');
                }
            }
        }
        $(function () {
            setInterval(function () {
                prepareCalcResultsTable();
                //console.log('preparing CalcResultsTable');
            }, 100);
        });


        var language = '';
        try {
            language = getUrlParameter('language');
        }
        catch (err) {
        }
        if (language == 'ar') {
            var customXApplied = false;

            function prepareCustomX() {
                if (!customXApplied) {
                    if (typeof ($('.languageDirectionCheck')) != 'undefined') {
                        if ($(".languageDirectionCheck").css("direction") == "rtl") {
                            $('.IRCalcModule label').css('float', 'right');
                            $('.input-wrapper').css('position', 'relative');
                            $('.input-wrapper').css('float', 'left');
                            $('#amount-radio').css('float', 'right');
                            $('#shares-radio').css('float', 'right');
                            console.log('switched to arabic');

                            //$(this).addClass('directionRTL');
                        };
                        customXApplied = true;
                    }
                }
            }
            setInterval(function () {
                prepareCustomX();
            }, 100);
        } else {
            //do nothing
        }

    });

</script>


