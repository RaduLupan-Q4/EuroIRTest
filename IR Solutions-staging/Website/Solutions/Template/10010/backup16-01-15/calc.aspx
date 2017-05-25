<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.header("IRCalc") %>


<script type="text/javascript">
    var activeModules = ["IRCalc"];
</script>

<div class="IRCalcModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRCalcTemplate" type="text/x-handlebars-template">
    <h1>Investment Calculator</h1>
    <div id="calc-chart" style="width:100%;height:250px;"></div>
    <form id="calc-form">
        <div class="input-row">
            <label for="from-datepicker" class="input-label from-label">{{t_from}}: </label>
            <div class="input-wrapper">
                <input id="from-datepicker" class="datepicker-button" style="display:none;"/>
                <select id="from-day" class="date-select">
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <select id="from-month" class="date-select">
                    <option value="0">{{t_january_short}}</option>
                    <option value="1">{{t_february_short}}</option>
                    <option value="2">{{t_march_short}}</option>
                    <option value="3">{{t_april_short}}</option>
                    <option value="4">{{t_may_short}}</option>
                    <option value="5">{{t_june_short}}</option>
                    <option value="6">{{t_july_short}}</option>
                    <option value="7">{{t_august_short}}</option>
                    <option value="8">{{t_september_short}}</option>
                    <option value="9">{{t_october_short}}</option>
                    <option value="10">{{t_november_short}}</option>
                    <option value="11">{{t_december_short}}</option>
                </select>
                <select id="from-year" class="date-select">
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                </select>
            </div>
        </div>
        <div class="input-row">
            <label for="to-datepicker" class="input-label to-label">{{t_to}}: </label>
            <div class="input-wrapper">
                <input id="to-datepicker" class="datepicker-button" style="display:none;"/>
                <select id="to-day" class="date-select">
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <select id="to-month" class="date-select">
                    <option value="0">{{t_january_short}}</option>
                    <option value="1">{{t_february_short}}</option>
                    <option value="2">{{t_march_short}}</option>
                    <option value="3">{{t_april_short}}</option>
                    <option value="4">{{t_may_short}}</option>
                    <option value="5">{{t_june_short}}</option>
                    <option value="6">{{t_july_short}}</option>
                    <option value="7">{{t_august_short}}</option>
                    <option value="8">{{t_september_short}}</option>
                    <option value="9">{{t_october_short}}</option>
                    <option value="10">{{t_november_short}}</option>
                    <option value="11">{{t_december_short}}</option>
                </select>
                <select id="to-year" class="date-select">
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                </select>
            </div>
        </div>
        <div class="input-row">
            <label class="input-label invested-label">{{t_invested}}: </label>
            <div class="input-wrapper">
                <input type="radio" name="invested" value="amount" id="amount-radio" checked="checked"/>
                <label for="amount-radio">Amount</label>
                <input type="radio" name="invested" value="shares" id="shares-radio"/>
                <label for="shares-radio">Shares</label>
            </div>
        </div>
        <!--<div class="input-row">
            <label class="input-label amount-invested-label">{{t_dividend}}:</label>
            <div class="input-wrapper">
                <select id="dividend">
                    <option value="none">None</option>
                    <option value="cash">Cash</option>
                    <option value="reinvest">Reinvest</option>
                </select>
            </div>
        </div>-->
        <div class="input-row">
            <label class="input-label dividend-label">{{t_amountInvested}}:</label>
            <div class="input-wrapper">
                <span id="currency-symbol"></span><input type="number" id="amount-invested" step="any" min="0"/>
            </div>
        </div>
        <div class="input-row">
            <div class="input-wrapper">
                <input type="submit" value={{t_calculate}} id="calculate-button"/>
            </div>
        </div>
    </form>

    <section id="result-section">
        <table class="IRToolCalcResultsTable table-look table-look-horizontal calculator calculator-horizontal responsive-flip-horizontal" id="lookup-table">
            <thead>
                <tr>
                    <th class="IRToolCalcResultsTableItem Header column-first">{{t_buyPrice}}</th>
                    <th class="IRToolCalcResultsTableItem Header">{{t_estimatedNumberOfShares}}</th>
                    <th class="IRToolCalcResultsTableItem Header">{{t_sellPrice}}</th>
                    <th class="IRToolCalcResultsTableItem Header">{{t_valueNow}}</th>
                    <th class="IRToolCalcResultsTableItem Header column-last">{{t_yield}}</th>
                </tr>
            </thead>
            <tbody id="lookup-table-body">
                <tr class="row-1">
                    <td class="IRToolCalcResultsTableItem Data column-first buy-price-cell">-</td>
                    <td class="IRToolCalcResultsTableItem Data est-shares-cell">-</td>
                    <td class="IRToolCalcResultsTableItem Data sell-price-cell">-</td>
                    <td class="IRToolCalcResultsTableItem Data value-now-cell">-</td>
                    <td class="IRToolCalcResultsTableItem Data column-last yield-cell">-</td>
                </tr>
            </tbody>
        </table>
    </section>
    <section id="result-section">
        <table class="IRToolCalcResultsTable table-look table-look-vertical calculator calculator-vertical responsive-flip-vertical" id="lookup-table">
                <tr>
                <th class="IRToolCalcResultsTableItem Header column-first">{{t_buyPrice}}</th>
                <td class="IRToolCalcResultsTableItem Data column-first buy-price-cell">-</td>
            </tr>
            <tr>
                <th class="IRToolCalcResultsTableItem Header">{{t_estimatedNumberOfShares}}</th>
                <td class="IRToolCalcResultsTableItem Data est-shares-cell">-</td>
            </tr>
            <tr>
                <th class="IRToolCalcResultsTableItem Header">{{t_sellPrice}}</th>
                <td class="IRToolCalcResultsTableItem Data sell-price-cell">-</td>
            </tr>
            <tr>
                <th class="IRToolCalcResultsTableItem Header">{{t_valueNow}}</th>
                <td class="IRToolCalcResultsTableItem Data value-now-cell">-</td>
            </tr>
            <tr>
                <th class="IRToolCalcResultsTableItem Header">{{t_yield}}</th>
                <td class="IRToolCalcResultsTableItem Data yield-cell">-</td>
            </tr>
        </table>
    </section>
</script>


<%= site.footer("IRCalc") %>
