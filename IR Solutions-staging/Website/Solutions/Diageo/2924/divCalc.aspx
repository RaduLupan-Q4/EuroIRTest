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

<link rel="stylesheet" type="text/css" href="divCalc.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("divCalc.css")).Ticks.ToString()%>" />


<script type="text/javascript">
    var activeModules = ["IRCalc"];
    var activeFeatures = ['IRChartTSR'];

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
                    <label for="from-datepicker" class="input-label from-label columnLeft" style="float: left;">Dividend payment date:</label>
                    <div class="input-wrapper">

                        <div class="selectOption columnRight"></div>

                        <%-- <select id="from-year" class="date-select">
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
                        </select>--%>
                    </div>
                </div>

            </div>
            <br />
            <div class="formDivider">

                <div class="divCalc input-row">
                    <label class="input-label amount-invested-label columnLeft">
                    Number of shares held on record date:</label>
                    <div class="input-wrapper columnRight">
                        <span id="currency-symbol"></span>
                        <input type="text" id="amount-invested" class="wide-input" step="any" min="0" />
                    </div>
                </div>
                <br />
                <div class="divCalc input-row">
                    <div class="input-wrapper calculateButton">
                        <input type="button" class="divCalc" value="{{t_calculate}}" id="calculate-button" />
                    </div>
                </div>
            </div>
        </form>
        <div class="divideLine"></div>

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


                $.when(requestDividendBundle.responseText).then(function (data) {
                    var data = JSON.parse(data);
                    var dividendData = data.dividend[0].data;
                    dividendData.reverse();

                    var paymentDate = new Date(dividendData[0].paymentDate);

                    var selectOption = '<select id="from-year" class="date-select">' +
                        '<option value= "' + dividendData[0].dividendValue + '" id= "option1" selected>' + paymentDate.getFullYear() + ' - ' + dividendData[0].text + '</option>';

                    for (var i = 1; i < dividendData.length; i++) {
                        var paymentDate = new Date(dividendData[i].paymentDate);
                        selectOption += '<option value="' + dividendData[i].dividendValue + '">' + paymentDate.getFullYear() + ' - ' + dividendData[i].text + '</option>';
                    }
                    selectOption += '</select >';
                    $('.selectOption').html(selectOption);
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
