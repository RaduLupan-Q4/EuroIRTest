<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.header("IRCalc") %>


<script type="text/javascript">
    var activeModules = ["IRCalc"];
</script>

<div class="IRCalcModule" id="v2"><span class="ajaxLoader">Loading</span></div>

<script id="IRCalcTemplate" type="text/x-handlebars-template">
    <h1>Investment Calculator</h1>

    <form id="calc-form">
        <div class="input-row">
            <label for="from-datepicker" class="input-label from-label" style="float: left;">{{t_from}}:</label>
            <div class="input-wrapper">
                <%= site.toolElement("select-from-trigger") %>
                <%= site.toolElement("select-from-day") %>
                <%= site.toolElement("select-from-month") %>
                <%= site.toolElement("select-from-year") %>
            </div>

        </div>
        <div class="input-row">
            <label for="to-datepicker" class="input-label to-label">{{t_to}}: </label>
            <div class="input-wrapper">
                <%= site.toolElement("select-to-trigger") %>
                <%= site.toolElement("select-to-day") %>
                <%= site.toolElement("select-to-month") %>
                <%= site.toolElement("select-to-year") %>
            </div>
        </div>
        <div class="calc_2">
        <div class="input-row">
            <div class="input-wrapper" style="width: 100%; text-align: right;">
                <label class="input-label invested-label" style="float: left; padding-right: 10px;">{{t_invested}}:</label>
                <input type="radio" name="invested" value="amount" id="amount-radio" checked="checked" />
                <label for="amount-radio">Amount</label>
                <input type="radio" name="invested" value="shares" id="shares-radio" />
                <label for="shares-radio">Shares</label>
            </div>
        </div>
            <div class="labels-and-button">
                <div class="input-row second-row-responsive">
                    <label class="input-label dividend-label">{{t_amountInvested}}:</label>
                    <div class="input-wrapper">
                        <span id="currency-symbol"></span>
                        <input type="number" id="amount-invested" step="any" min="0"/>
                    </div>
                </div>
                <div class="input-row" style="margin-left: 0;">
                    <div class="input-wrapper">
                        <input type="submit" value={{t_calculate}} id="calculate-button" style="margin-left:5px; margin-top: 2px;"/>
                    </div>
                </div>
           </div>
        </div>
        <%--<div class="input-row">
            <label class="input-label dividend-label">{{t_amountInvested}}:</label>
            <div class="input-wrapper">
                <span id="currency-symbol"></span>
                <input type="number" id="amount-invested" step="any" min="0" />
                <input type="submit" value="{{t_calculate}}" id="calculate-button" />
            </div>
        </div>--%>
    </form>

    


    <section id="result-section">
        <table class="IRToolCalcResultsTable table-look table-look-horizontal calculator calculator-horizontal responsive-horizontal" id="lookup-table">
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
        <table class="IRToolCalcResultsTable table-look table-look-vertical calculator calculator-vertical responsive-vertical" id="lookup-table">
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
    <div id="calc-chart" style="width: 100%; height: 250px;"></div>
</script>



<%= site.footer("IRCalc") %>
