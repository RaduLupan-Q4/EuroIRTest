<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  
    IRSite site = new IRSite();
    //site.appendCustomCSSURL = "http://www.investorcom.co.uk/SharePriceChart/YOLOLTPlc.css";
    //if (!string.IsNullOrEmpty(Request.QueryString["ignoreCustomCSS"]))
    //{
    //    if (Request.QueryString["ignoreCustomCSS"].ToString() == "true")
    //    {
    //        site.appendCustomCSSURL = "";
    //    }
    //}    
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""https://fonts.googleapis.com/css?family=Lato:400,300italic,300,400italic,700,900"" type=""text/css"" />";

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

    <div class="IRChartCalcPlaceholder" style="display: none"></div>
    <div class="divCalcWrapper">
        <form id="calc-form">
            <div class="formDivider">
                <div class="divCalc input-row">
                    <label for="from-datepicker" class="input-label from-label" style="float: left;"><%--{{t_from}}--%>Dividend payment date:</label>
                    <div class="input-wrapper">
                        <%--{{{datepicker 'from'}}}
                    {{{selectFromDay}}}
                    {{{selectFromMonth}}}
                    {{{selectFromYear 2014}}}--%>
                        <select id="from-year" class="date-select">
                            <option value="7" id="option1" selected>2015 - Final</option>
                            <option value="4">2015 - Interim</option>
                            <option value="7">2014 - Final</option>
                            <option value="3.9">2014 - Interim</option>
                            <option value="6.7">2013 - Final</option>
                            <option value="3.8">2013 - Interim</option>
                            <option value="6.4">2012 - Final</option>
                            <option value="3.6">2012 - Interim</option>
                            <option value="6">2011 - Final</option>
                            <option value="3.25">2011 - Interim</option>
                            <option value="5">2010 - Final</option>
                            <option value="2.7">2010 - Interim</option>
                            <option value="4.5">2009 - Final</option>
                            <option value="2.5">2009 - Interim</option>
                            <option value="4.5">2008 - Final</option>
                            <option value="2.5">2008 - Interim</option>
                            <option value="4.5">2007 - Final</option>
                            <option value="2.25">2007 - Interim</option>
                            <option value="3">2006 - Final</option>
                            <option value="1.5">2006 - Interim</option>
                            <option value="2.5">2005 - Final</option>
                        </select>
                    </div>
                </div>
                <%--<div class="input-row">
                <label for="to-datepicker" class="input-label to-label">{{t_to}}: </label>
                <div class="input-wrapper">
                    {{{datepicker 'to'}}}
                {{{selectToDay}}}
                {{{selectToMonth}}}
                {{{selectToYear}}}
                </div>
            </div>--%>
            </div>
            <div class="formDivider">
                <%--<div class="input-row">
                <label class="input-label invested-label">{{t_invested}}: </label>
                <div class="input-wrapper wide-input radio">
                    <input type="radio" name="invested" value="amount" id="amount-radio" checked="checked" />
                    <label for="amount-radio">{{t_amount}}</label>
                    <input type="radio" name="invested" value="shares" id="shares-radio" />
                    <label for="shares-radio">{{t_shares}}</label>
                </div>
            </div>--%>
                <div class="divCalc input-row">
                    <label class="input-label amount-invested-label">
                        <%--{{t_amount_invested}}--%>
                    Number of shares held on record date:</label>
                    <div class="input-wrapper">
                        <span id="currency-symbol"></span>
                        <input type="text" id="amount-invested" class="wide-input" step="any" min="0" />
                    </div>
                </div>
                <div class="divCalc input-row">
                    <div class="input-wrapper calculateButton">
                        <%--<input type="submit" value="{{t_calculate}}" id="calculate-button" />--%>
                        <input type="button" class="divCalc" value="{{t_calculate}}" id="calculate-button" />
                    </div>
                </div>
            </div>
        </form>
        <div class="divideLine"></div>

        <%--<section id="result-section">
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
    </section>--%>
        <div class="divideLine"></div>
        <section id="result-section">
            <table class="IRToolCalcResultsTable table-look vertical responsive-flip divCalc" style="display: block">

                <tr>
                    <th class="Header divCalc share">Dividend per share</th>
                    <td class="Data divCalc share-cell">(p) </td>
                </tr>
                <tr>
                    <th class="Header divCalc distribution">Dividend distribution</th>
                    <td class="Data divCalc distribution-cell">(£) </td>
                </tr>
                <%-- <tr>
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
            </tr>--%>
            </table>
        </section>
    </div>
</script>
<%= site.newFooter("IRCalc") %>

<script type="text/javascript">
    var customXApplied = false;
    function prepareCustomX() {
        if (!customXApplied) {
            if (typeof ($('.input-wrapper')) != 'undefined') {

                //add default selected value
                $("#option1").prop("selected", "selected");

                $('#calculate-button').click(function () {

                    var periodValue = $('#from-year').val();
                    var amountInvested = $('#amount-invested').val();
                    var dividendDistribution = (periodValue * amountInvested) / 100;

                    $('.share-cell').html("(p) " + periodValue);

                    //check if shares is entered
                    if (dividendDistribution == 0 || dividendDistribution == undefined) {
                        $('.distribution-cell').html("(£) " + 0);
                    } else {
                        $('.distribution-cell').html("(£) " + dividendDistribution.toFixed(2));
                    }
                });

                customXApplied = true;
            }
        }
    }
    $(function () {
        setInterval(function () {
            prepareCustomX();
        }, 400);
    });
</script>
