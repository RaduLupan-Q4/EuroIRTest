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

   <%-- <div class="IRChartCalcPlaceholder"></div>--%>
  
    <form id="calc-form">
    <div class="calcSharesWrapper">
    <h2>Calculate the current value of your shareholding</h2>
      <b>To calculate the value of your holding based on a current share price of {{currency}}{{decimals last}} </b><br/>
    <div class="clear"></div>
    <label class="input-label amount-invested-label"><b>Number of shares owned</b></label><br/>
  
    <input type="text" id="share-invested" step="any" min="0" /><br/>
      <input type="submit" value="{{t_calculate}}" id="calculate-button" /><br/>
    <div class="calculator-results">The value of your share holding is: <b>-</b></div>
    </div>

    <div class="calcValueWrapper">
    <h2>Calculate the change in the value of your holding</h2>

            <label for="from-datepicker" class="input-label from-label" style="float: left;"><b>Select the date of purchase</b></label><br/>
            <div class="input-row">
                <div class="input-wrapper">
                    {{{datepicker 'from'}}}
                    {{{selectFromDay}}}
                    {{{selectFromMonth}}}
                    {{{selectFromYear 2014}}}
                </div>
            </div>
            <div class="clear"></div><br/>
    <b>Enter the historic cost of your holding in £'s (eg: 1000)</b><br/>
    <input type="text" id="cost-invested" step="any" min="0" /><br/>
    <b>OR</b><br/>
    <label class="input-label amount-invested-label"><b>Enter the number of shares that you own</b></label><br/>
    
    <input type="text" id="amount-invested" step="any" min="0" /><br/>
    <input type="submit" value="{{t_calculate}}" id="calculate-button" /><br/>
     <section id="result-section">
        <table class="IRToolCalcResultsTable table-look horizontal responsive-flip" id="lookup-table-body">
                    <tr>
                        <td class="Header column-first buy-price">Historic price per share</td>
                        <td class="Data column-first buy-price-cell">-</td>
                    </tr>           
                    <tr>
                        <td class="Header value-now">Current value of your holding</td>
                        <td class="Data value-now-cell">-</td>
                    </tr>
                    <tr>
                    <td class="Header column-last yield">Change in value of your holding</td>
                    <td class="Data column-last yield-cell">-</td></tr>
                </tr>
            </tbody>
        </table>
    </section>
  </div>
    
    </div>
        <%--<div class="input-row">
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
        <div class="input-row">
            <div class="input-wrapper">
                <input type="submit" value="{{t_calculate}}" id="calculate-button" />
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
    </section>--%>
</script>

<%= site.newFooter("IRCalc") %>