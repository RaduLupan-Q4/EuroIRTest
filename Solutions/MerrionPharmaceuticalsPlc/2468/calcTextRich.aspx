<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>

<%= site.newHeader("IRCalcSimple") %>


<script type="text/javascript">
    var activeModules = ["IRCalcSimple"];
</script>

<div class="IRCalcModule">
    <div class="IRChartColour"></div>
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRCalcSimpleTemplate" type="text/x-handlebars-template">

    <%-- <div class="IRChartCalcPlaceholder"></div>--%>


    <div class="IRCalcSection IRCalcCurrentValueOfHolding">
        <div class="IRCalcSectionInnerWrapper">
            <h2>Current Share Price</h2>
            <div class="currentSharepriceWrapper">
                <div class="currentSharepriceLeftColumn">
                    <div>Latest share price:</div>
                    <div>Total number of shares purchased:</div>
                    <div style="margin-bottom: 5px;">&nbsp;</div>

                    <div class="shareholderValue">The value of your shareholding is: </div>
                </div>
                <div class="currentSharepriceRightColumn">

                    <div class="lastPrice">€ {{lastPrice stocks/last}}</div>
                    <div>{{{inputText 'valueCurrentValueOfHolding'}}}</div>
                    <div>
                        <button class="IRCalculateButton" id="calculateCurrentValueOfHolding">{{{constrolsIRCalcButton 'calculateCurrentValueOfHolding'}}}</button>

                    </div>
                    <div id="showValue" class="Data">€ {{{outputValue 'currentHoldingValue'}}} </div>
                </div>
            </div>

            <div class="clear"></div>
        </div>
    </div>
    <div class="IRCalcHistoricSharePriceWrapperOuter">
        <div class="IRCalcHistoricSharePriceWrapperInner">
            <div class="IRCalcSection IRCalcValueChange">

                <h2>Historic Share Price Calculator</h2>
                <div class="historicalSharepriceWrapper">
                    <div class="historicalSharepriceLeftColumn">
                        <div>Date shares purchased:</div>
                        <div>Enter either your value of holding at purchase (€):</div>
                        <div>Or enter the number of shares that you purchased:</div>
                        <div style="margin-bottom: 5px;">&nbsp;</div>
                    </div>
                    <div class="historicalSharepriceRightColumn">
                        <div class="fromDatePicker">{{{selectFromDay}}} {{{selectFromMonth}}} {{{selectFromYear}}}</div>
                        <div class="IRCalcCurrentValueOfHolding">{{{inputManualFromPrice}}}</div>
                        <div class="IRCalcNumberOfSharesPurchased">{{{inputSharesAmount}}}</div>
                        <div>
                            <button class="IRCalculateButton">{{{constrolsIRCalcButton 'CalculateValueChange'}}}</button>
                        </div>
                    </div>
                </div>

            </div>
            <div class="historicalSharepriceWrapper valueOfHolding" style="float: left; width: 100%;">
                <div class="historicalSharepriceLeftColumn">
                    <div>Share price at selected date:</div>
                    <div class="calcVolume purchaseVolumeTitle historicalShareprice">Estimated total purchase volume:</div>
                    <div class="calcPrice purchasePriceTitle">Estimated total purchase price:</div>
                    <div>The value of your holding currently stands at:</div>
                    <div>The change in value of share holding since purchase:</div>
                    <div>The change in value of share holding since purchase (%):</div>
                </div>
                <div class="historicalSharepriceRightColumn">
                    <div id="showHistoricalPrice" class="Data showHistoricalPrice">€ {{{outputValue 'priceAtFromDate'}}}</div>
                    <div id="showPurchaseVolume"  class="Data calcVolume purchaseVolume">{{{outputValue 'estimatedVolumeAmount'}}}</div>
                    <div id="showPurchasePrice" class="Data calcPrice purchasePrice">{{{outputValue 'estimatedPurchasedPrice'}}}</div>
                    <div id="showCurrentValue" class="Data showCurrentValue">{{{outputValue 'outputValueOfHolding'}}} </div>
                    <div id="showValueChange" class="Data showValueChange">{{{outputValue 'outputValueChange'}}}</div>
                    <div id="showValueChangePercent" class="Data showValueChangePercent">{{{outputValue 'outputValueChange'}}}</div>
                </div>
            </div>
           
        </div>
    </div>
</script>

<%= site.newFooter("IRCalcSimple") %>

<link rel="stylesheet" href="ir.clientTextRich.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.clientTextRich.css")).Ticks.ToString()%>" />

<script type="text/javascript">
    
    Handlebars.registerHelper('lastPrice', function (number) {
        var last = globalRawStockData[globalActiveListingIndex].last;
        return last.toFixed(2);
        console.log('last price:' + last);
    });

  
   

    function calculateValueChange() {
        var inputManualFromPrice = parseInt($('.inputManualFromPrice').val());
        var inputSharesAmount = parseInt($('.inputSharesAmount').val());
        var fromDate = readFromDate();
        
       
        
        var bestMatchIndex = getIndexThatBestMatchesDate(stockData, "date", readFromDateObject('IRCalcValueChange'));
        var bestMatchIndexDate = getIndexThatBestMatchesDate(stockData, "date", readFromDateObject('date'));
        var priceAtFromDate = stockData[bestMatchIndex].closePrice;
        var last = globalRawStockData[globalActiveListingIndex].last;
        console.log('bestMatchIndex:' + bestMatchIndex);
        console.log('bestMatchIndexDate:' + bestMatchIndexDate);

        if (inputManualFromPrice == 'NaN') {
            inputManualFromPrice == 0;
       
        }

        if (inputSharesAmount == 'NaN') {
            inputSharesAmount = 0;
           
        }

        if (inputManualFromPrice > 0) {
              
            valueOfChange = ((last * inputManualFromPrice) - (priceAtFromDate * inputManualFromPrice)) / priceAtFromDate;
            sharesBought = inputManualFromPrice / priceAtFromDate;
            valueOfHolding = (inputManualFromPrice * last) / priceAtFromDate;
            valueOfChangePercent = ((last - priceAtFromDate) / priceAtFromDate) * 100;
            estimatedVolumeAmount = (inputManualFromPrice / priceAtFromDate).toFixed(0);
            
            $(".purchaseVolume").text(estimatedVolumeAmount);
            $(".showHistoricalPrice").text("€ " + formatDecimal(priceAtFromDate));
            $(".showValueChange").text("€ " + formatDecimal(valueOfChange));
            $(".showValueChangePercent").text(formatDecimal(valueOfChangePercent) + "%");
            $('.historicalSharepriceWrapper').css("display", "block");
            $('.calcPrice').css("display", "none");
            $('.calcVolume').css("display", "block");
            $(".showCurrentValue").text("€ " + formatDecimal(valueOfHolding));
            console.log('valueOfHolding:' + valueOfHolding);
        } 
        
        if (inputSharesAmount > 0) {
           
            priceAtFromDate = stockData[bestMatchIndex].closePrice;
            valueOfChange = (last * inputSharesAmount) - (priceAtFromDate * inputSharesAmount);
            valueOfChangePercent = ((valueOfChange * 100) / priceAtFromDate) / inputSharesAmount;
            estimatedPurchasedPrice = (inputSharesAmount * priceAtFromDate);
            valueOfHolding = (inputSharesAmount * last);
            $(".showHistoricalPrice").text("€ " + formatDecimal(priceAtFromDate));
            $(".purchasePrice").text("€ " + formatDecimal(estimatedPurchasedPrice));
            $(".showCurrentValue").text("€ " + formatDecimal(valueOfHolding));
            $(".showValueChange").text("€ " + formatDecimal(valueOfChange));
            $(".showValueChangePercent").text(formatDecimal(valueOfChangePercent) + "%");
            
            $('.historicalSharepriceWrapper').css("display", "block");
            $('.calcPrice').css("display", "block");
            $('.calcVolume').css("display", "none");

            console.log('valueOfHoldingShares:' + valueOfHolding);
        }
        
        var customXApplied = false;
        function prepareCustomX() {
            if (!customXApplied) {
                if (typeof ($('#showValue.Data').html()) != 'undefined') {

                    $(".calculateCurrentValueOfHolding").click(function () {
                        $(".IRCalcCurrentValueOfHolding #showValue").css('visibility', 'visible');
                    });
                    $(".CalculateValueChange").click(function () {
                        $(".IRCalcCurrentValueOfHolding .showValue").css('visibility', 'visible');
                    });

                    customXApplied = true;
                }
            }
        }
        $(function () {
            setInterval(function () {
                prepareCustomX();
            }, 200);
        });

    }
</script>
