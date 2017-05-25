<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Roboto:400,600,500""/>";
%>
<%= site.newHeader("IRPerformance") %>




<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRPerformance'];
    var activeFeatures = ['StockDataInstrumentTypeOther'];
</script>

<div class="IRPerformanceModule"></div>

<script id="IRPerformanceModuleTemplate" type="text/x-handlebars-template">
    <table class="IRPerformanceModule table-look horizontal responsive">
        <thead>
            {{#headers}}
            <tr>
                <td class="Header column-first name">{{t_company}}</td>
                <td class="Header price">{{t_last}}</td>
                <td class="Header months1">{{t_1_week}}</td>
                <%--<td class="Header months1">{{t_1_month}}</td>--%>
                <td class="Header months3">{{t_3_months}}</td>
                <td class="Header months6">{{t_6_months}}</td>
                <td class="Header months9">{{t_9_months}}</td>
                <td class="Header column-last year1">{{t_1_year}}</td>
            </tr>
            {{/headers}}
        </thead>
        <tbody>
            {{#dataListings}}
            <tr>
                <td class="Data column-first symbol">{{name}}</td>
                <%--<td class="Data price">{{decimals last}}</td>--%>
                <td class="Data price">{{toLocal last}}</td>
                <td class="Data formatColour weeks1">{{decimals w1}}</td>
                <%--<td class="Data formatColour months1">{{decimals m1}}</td>--%>
                <td class="Data formatColour months3">{{decimals m3}}</td>
                <td class="Data formatColour months6">{{decimals m6}}</td>
                <td class="Data formatColour months9">{{decimals m9}}</td>
                <td class="Data formatColour column-last year1">{{decimals y1}}</td>
            </tr>
            {{/dataListings}}
        </tbody>
        <thead>
            {{#subHeaders}}
            <tr>
                <td class="Header column-first name">{{t_indices}}</td>
                <td class="Header price"></td>
                <td class="Header weeks1"></td>
                <%--<td class="Header months1"></td>--%>
                <td class="Header months3"></td>
                <td class="Header months6"></td>
                <td class="Header months9"></td>
                <td class="Header column-last year1"></td>
            </tr>
            {{/subHeaders}}
        </thead>
        <tbody>
            {{#dataIndices}}
            <tr>
                <td class="Data column-first symbol">{{name}}</td>
                <td class="Data price">{{toLocal last}}</td>
                <td class="Data formatColour weeks1">{{decimals w1}}</td>
                <%--<td class="Data formatColour months1">{{decimals m1}}</td>--%>
                <td class="Data formatColour months3">{{decimals m3}}</td>
                <td class="Data formatColour months6">{{decimals m6}}</td>
                 <td class="Data formatColour months9">{{decimals m9}}</td>
                <td class="Data formatColour column-last year1">{{decimals y1}}</td>
            </tr>
            {{/dataIndices}}
        </tbody>
    </table>
</script>
<%= site.newFooter("IRPerformance") %>

<script src="inc/scripts/core/ir.util.data.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/scripts/core/ir.util.data.js")).Ticks.ToString()%>"></script>

<script>
    //$(function() {
    //   $.when(requestFeatureStockOtherData).done(function (stockOtherData) {
    //        globalRawStockOtherData = stockOtherData.data;

    //        buildQuoteTable();
    //        formatColour();
    //    });
    //})


    Handlebars.registerHelper('decimals', function (number) {

        return formatDecimal(number);
    });


    Handlebars.registerHelper('showMarketCapDiluted', function (number, currencyCrossStr, currency) {
        //var marketCapDiluted = 0;
        //var currency = globalRawStockData[globalActiveListingIndex].currency;
        var lastPrice = 0;
        var currencyCross = getCurrencyCrossFromStockOtherData(currencyCrossStr);

        if (currency == "USD") {
            lastPrice = number;
        }
        if (currency == "NOK") {
            lastPrice = number * currencyCross;
            currency = "USD";

        }

        return formatDecimal(parseFloat(lastPrice)) + " " + currency;


    });


    function getCurrencyCrossFromStockOtherData(currencyCross) {


        debugStep("getCurrencyCrossFromStockOtherData");
        if (typeof (globalRawStockOtherData) == 'object') {
            for (var i = 0; i < globalRawStockOtherData.length; i++) {
                var symbol = globalRawStockOtherData[i].symbol;
                var cyrrencyFrom = symbol.slice(0, 3);
                if (currencyCross == globalRawStockOtherData[i].symbol) {
                    if (cyrrencyFrom == globalRawStockData[globalActiveListingIndex].currency) {
                        return globalRawStockOtherData[i].last;
                    } else {
                        return 1;
                    }
                }
            }
        }
    }
    function formatColour() {
        $('.formatColour').each(function () {
            $(this).removeClass("formatColour");
            try {
                if (parseFloat($(this).html()) > 0) {
                    $(this).addClass("formatColourPos");
                    $(this).prepend('+');
                }
                if (parseFloat($(this).html()) < 0) {
                    $(this).addClass("formatColourNeg");

                }
            }
            catch (e) {
            }
        });
    }


</script>

