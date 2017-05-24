<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>


<%= site.newHeader("IRCalc2") %>


<meta charset="UTF-8">
<link href='//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700' rel='stylesheet' type='text/css'>
<script type="text/javascript">
    var activeModules = ["IRCalc"];
</script>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />

<div class="IRCalcModule">
    <div class="IRChartColour"></div>
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRCalcTemplate" type="text/x-handlebars-template">

    <div class="IRChartCalcPlaceholder"></div>
    <div class="customCalcModuleWrapper">
        <form id="calc-form">
            <span class="title">{{t_choose_investment}}</span>
            <div class="formDivider">
                <div class="input-row">
                    <label class="input-label invested-label">{{t_invested}}: </label>
                    <div class="input-wrapper wide-input radio">
                        <input type="radio" name="invested" value="amount" id="amount-radio" checked="checked" />
                        <label for="amount-radio">{{t_amount}}</label>
                        <br>
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
                
                <div class="lookupRow input-row">
                    <label for="from-datepicker" class="input-label from-label">{{t_from}}:</label>
                    <input class="js-from" value="10-04-2016" id="from-datepicker" type="text" style="">
			    </div>
                <div class="lookupRow input-row">
                    <label for="to-datepicker" class="input-label to-label">{{t_to}}: </label>
                    <input class="js-to" value="10-04-2017" id="to-datepicker" type="text">
                </div>

                <div class="conthidden" style="display: none">
                    {{{selectFromDay}}}
                    {{{selectFromMonth}}}
                    {{{selectFromYear}}}
                    {{{selectToDay}}}
                    {{{selectToMonth}}}
                    {{{selectToYear}}}
		        </div>

            </div>
            <div class="formDivider">
                <div class="input-row">
                    <div class="input-wrapper calculateButton">
                        <button type="button" class="CalcBtn" >{{t_calculate}}</button>
                    </div>
                </div>
            </div>
        </form>
        <div class="divideLine"></div>
        <section id="result-section">
            <span class="title">{{t_summary}}</span>
            <table class="IRToolCalcResultsTable table-look vertical responsive-flip">
                <tr>
                    <th class="Header date">{{t_investment_date}}</th>
                    <td class="Data start-date-cell">-</td>
                </tr>
                <tr>
                    <th class="Header value">{{t_value}}</th>
                    <td class="Data buy-value-cell">-</td>
                </tr>
                <tr>
                    <th class="Header number-of-shares">{{t_number_of_shares}}</th>
                    <td class="Data est-shares-cell">-</td>
                </tr>
                <tr>
                    <th class="Header price">{{t_price}}</th>
                    <td class="Data buy-price-cell">-</td>
                </tr>
                <tr>
                    <th class="Header end-date">{{t_end_date}}</th>
                    <td class="Data end-date-cell">-</td>
                </tr>
                
                <tr>
                    <th class="Header sell-price">{{t_sell_price}}</th>
                    <td class="Data sell-price-cell">-</td>
                </tr>
                <tr>
                    <th class="Header value">{{t_end_date_value}}:</th>
                    <td class="Data value-now-cell">-</td>
                </tr>
                <tr>
                    <th class="Header change-in-price">{{t_change}} %:</th>
                    <td class="Data yield-cell">-</td>
                </tr>
                <tr>
                    <th class="Header change">{{t_change}} €:</th>
                    <td class="Data yield-change-cell">-</td>
                </tr>
            </table>
        </section>
    </div>

</script>



<%= site.newFooter("IRCalc2") %>

<link rel="stylesheet" href="calcCustom.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("calcCustom.css")).Ticks.ToString()%>" />
<%--<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>--%>

<script type="text/javascript">

    var customXApplied = false;
    function prepareCustomX() {
        if (!customXApplied) {
            if (typeof ($('#calculate-button').html()) != 'undefined') {
                $('#calculate-button').click(function () {
                    setTimeout(function () {

                        var amountInvested = parseFloat($("#amount-invested").val(), 10),
                            unit = readUnit(),
                            fromDate = readFromDate(),
                            toDate = readToDate(),
                            results = {};

                        var startIndex = getIndexThatBestMatchesDate(stockData, "date", new Date(fromDate)),

                                endIndex = getIndexThatBestMatchesDate(stockData, "date", new Date(toDate)),
                                buyStockPrice = parseFloat(stockData[startIndex].closePrice);
                        sellStockPrice = parseFloat(stockData[endIndex].closePrice);

                        results.buyStockPrice = parseFloat(buyStockPrice);
                        results.sellStockPrice = parseFloat(sellStockPrice);

                        fromDate = readFromDate();

                        toDate = readToDate();

                        fromDate = moment(fromDate).format("DD-MM-YYYY");
                        toDate = moment(toDate).format("DD-MM-YYYY");

                        $('.start-date-cell').text(fromDate);

                        $('.end-date-cell').text(toDate);

                        $(".value-now-cell").text(globalActiveCalcCurrency + ' ' + formatDecimal(results.buyStockPrice));
                        $(".value-end-date-cell").text(sellStockPrice);
                        $(".change-amount-cell").text((sellStockPrice - buyStockPrice).toFixed(2));




                    }, 200);
                });
                customXApplied = true;
            }
        }
    }
    $(function () {
        $(document).on('click', '.CalcBtn', function(e){

        $('#result-section').css('display', 'block');
            e.preventDefault();
            IRCalc.globalIRCalcCurrency = "€";

            IRCalc.calc();

          var loc = window.location.search;

          if (loc.indexOf('language=nl') >-1 ) {
            var originalTxt = $('.Data.start-date-cell').text();
            var datumTxt = $('.Data.start-date-cell').text().replace(/\d+/g, '').trim();

              $('.Data.start-date-cell').html(originalTxt.replace(datumTxt, translations[ 't_'+datumTxt.toLowerCase() ].capitalizeFirstLetter()));

            var originalTxt2 = $('.Data.end-date-cell').text();
            var datumTxt2 = $('.Data.end-date-cell').text().replace(/\d+/g, '').trim();

              $('.Data.end-date-cell').html(originalTxt2.replace(datumTxt2, translations[ 't_'+datumTxt.toLowerCase() ].capitalizeFirstLetter()));
          }



        })
        setInterval(function () {

        }, 100);
    });
	$(document).ajaxStop(function(){
    setInterval(function () {
      //console.log($('.Data.start-date-cell').text())
    }, 100);

	/* Dutch (UTF-8) initialisation for the jQuery UI date picker plugin. */
        ( function( factory ) {
            if ( typeof define === "function" && define.amd ) {

                // AMD. Register as an anonymous module.
                define( [ "../widgets/datepicker" ], factory );
            } else {

                // Browser globals
                factory( jQuery.datepicker );
            }
        }( function( datepicker ) {

        datepicker.regional.nl = {
            closeText: "Sluiten",
            prevText: "←",
            nextText: "→",
            currentText: "Vandaag",
            monthNames: [ translations.t_january, translations.t_february, translations.t_march, translations.t_april, translations.t_may, translations.t_june,
            translations.t_july, translations.t_august, translations.t_september, translations.t_october, translations.t_november, translations.t_december],
            monthNamesShort: [ "jan", "feb", "mrt", "apr", "mei", "jun",
            "jul", "aug", "sep", "okt", "nov", "dec" ],
            dayNames: [ "zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag" ],
            dayNamesShort: [ "zon", "maa", "din", "woe", "don", "vri", "zat" ],
            dayNamesMin: [ translations.t_sun, translations.t_mon, translations.t_tue, translations.t_wed, translations.t_thu, translations.t_fri, translations.t_sat],
            weekHeader: "Wk",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: "" };
        datepicker.setDefaults( datepicker.regional.nl );

        return datepicker.regional.nl;

        } ) );

        $("#from-datepicker").datepicker("option", "dateFormat", "dd-mm-yy");
        $("#to-datepicker").datepicker("option", "dateFormat", "dd-mm-yy");

        $('#from-datepicker, #to-datepicker').on('click', function(){
            $(this).next('img').trigger('click');

        });
    });

</script>

