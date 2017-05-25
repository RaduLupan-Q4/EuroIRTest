﻿<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %> 
<%  
    IRSite site = new IRSite();
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
                    <span id="currency-symbol"></span>
                    <input type="text" id="amount-invested" class="wide-input" step="any" min="0" />
                </div>
            </div>
            <div class="input-row">
                <div class="input-wrapper calculateButton">
                    <input type="submit" value="Calculate" id="calculate-button" />
                </div>
            </div>
        </div>
    </form>
    <div class="divideLine"></div>

    <section id="result-section">
        <table class="IRToolCalcResultsTable table-look horizontal responsive-flip">
                <tr>
                    <th class="Header buy-price">{{t_buy_price}}</th>
                    
                    <th class="Header est-shares">{{t_est_number_of_shares}}</th>
                    
                    <th class="Header sell-price">{{t_sell_price}}</th>
                    <th class="Header value-now">{{t_value_now}}</th>
                    <th class="Header yield">{{t_yield}}</th>
                </tr>
                <tr class="row-1">
                    <td class="Data buy-price-cell">-</td>
                    <td class="Data est-shares-cell">-</td>
                    <td class="Data sell-price-cell">-</td>
                    <td class="Data value-now-cell">-</td>
                    <td class="Data yield-cell">-</td>
                </tr>
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

<script type="text/javascript">


</script>
<script type="text/javascript">
var radioBtn = $("input[type=radio]");

$(document).ready(function(){
    addRadioBtn();
})
$( document ).ajaxStop(function() {
    addRadioBtn();
});
function addRadioBtn(){

    $("input[type=radio]").each(function(){
        console.log(this)
        var rb = $(this);
        rb.css('display', 'none');
        if(rb.is(':checked'))
            $('<span class="radioBtn checked"></span>').insertBefore(rb);
        else
            $('<span class="radioBtn"></span>').insertBefore(rb);
    })
    $(document).on('change', "input[type=radio]", function(){
        console.log(this)
        var n = $(this).attr('name');
        $("input[type=radio]").each(function(){
            ($(this).attr('name') == n ) ? $(this).prev().removeClass('checked') : 0;
        })
        $(this).is(':checked') ? $(this).prev().addClass('checked') : $(this).prev().removeClass('checked');
    })
}
</script>