<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  
    IRSite site = new IRSite();
     site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,500,700,300""/>";
%>

<%= site.newHeader("IRCalcSimple") %>

<script type="text/javascript">
    var activeModules = ["IRCalcSimple"];
</script>

<div class="IRCalcModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRCalcSimpleTemplate" type="text/x-handlebars-template">

    <!-- 
        calculateCurrentValueOfHolding  
    -->
    <%--<div class="IRCalcSection IRCalcCurrentValueOfHolding">

        <h2>Calculate the current value of your shareholding</h2>
        <b>To calculate the value of your holding based on a current share price of {{currency}}{{decimals last}} </b>
        <br />
        <div class="clear"></div>
        <label class="input-label amount-invested-label"><b>Number of shares owned</b></label><br />
        {{{inputText 'valueCurrentValueOfHolding'}}}<br />
        <button class="IRCalculateButton" id="calculateCurrentValueOfHolding">{{{constrolsIRCalcButton 'calculateCurrentValueOfHolding'}}}</button><br />
        <br />
        <table id="showValue">
            <tr>
                <td class="Header">The value of your shareholding is: </td>
                <td class="Data">{{{outputValue 'currentHoldingValue'}}} {{showCurrency}}</td>
            
        </tr>
                </table>
    </div>--%>


    <!-- 
        calculateChangeInValueOfHolding
    -->
    <%-- <div class="IRCalcSection IRCalcValueChange">


        <h2>Calculate the change in the value of your holding</h2>

        <b>Select the date of purchase</b><br />

        {{{selectFromDay}}}
        {{{selectFromMonth}}}
        {{{selectFromYear}}}
        <br />
        <br />
        <b>Enter the historic cost of your holding in {{showCurrency}} (eg. 1000)</b><br />
        {{{inputManualFromPrice}}}<br />
        <b>OR<br />
            Enter the number of shares that you own</b><br />
        {{{inputSharesAmount}}}<br />


        <button class="IRCalculateButton">{{{constrolsIRCalcButton 'CalculateValueChange'}}}</button><br />
        
        <br />

        <table class="IRCalcModule showValue">
            <tr>
                <td class="Header">Historic price per share:</td>
                <td class="Data">{{{outputValue 'outputValueMostRecent'}}} {{showCurrency}}</td>
            </tr>
            <tr>
                <td class="Header">Current value of your holding:</td>
                <td class="Data">{{{outputValue 'outputValueOfHolding'}}} {{showCurrency}}</td>
            </tr>
            <tr>
                <td class="Header">Change in value of your holding:</td>
                <td class="Data">{{{outputValue 'outputValueChange'}}} {{showCurrency}}</td>
            </tr>
           <%-- <span class="subheader">Historic price per share: </span>{{{outputValue 'outputValueMostRecent'}}} {{showCurrency}}<br />
            <span class="subheader">Current value of your holding: </span>{{{outputValue 'outputValueOfHolding'}}} {{showCurrency}}<br />
            <span class="subheader">Change in value of your holding: </span>{{{outputValue 'outputValueChange'}}} {{showCurrency}}<br />--%>
    <%--</table>
    </div>--%>


    <div class="IRCalcSection IRCalcLookupValue">
        
        {{{selectFromMonth 'MMMM'}}}
        {{{selectFromDay}}}
        {{{selectFromYear}}}
    
        <div class="showLookupValue">
           
            
            <h3 class="tableHeader">Results</h3>
            <table class="IRLookupTable table-look responsive columnWrapper columnLeftWrapper">
                
                <tr>
                    <th class="column-first Header">Date Requested</th>
                    <td class="column-last Data fromDate">{{date}}</td>
                </tr>
                <tr>
                    <th class="column-first Header">Closing Price</th>
                    <td class="column-last Data">{{showCurrency}} {{{outputValue 'outputLookupValue'}}} </td>
                </tr>
                <tr>
                    <th class="column-first Header">Volume</th>
                    <td class="column-last Data volume">{{#each data}}{{#each data}}{{stocks/volume}}{{/each}}{{/each}}</td>
                </tr>
                <tr>
                    <th class="column-first Header">Split Adjustment Factor</th>
                    <td class="column-last Data splitAdjustmentFactor">1:1</td>
                </tr>
            </table>
            
            <table class="IRLookupTable table-look responsive columnWrapper columnRightWrapper">
                <tr>
                    <th class="column-first Header">Open</th>
                    <td class="column-last Data dayOpen"></td>
                </tr>
                <tr>
                    <th class="column-first Header">Day's High</th>
                    <td class="column-last Data dayHigh">{{decimal high 2}}</td>
                </tr>
                <tr>
                    <th class="column-first Header">Day's Low</th>
                    <td class="column-last Data dayLow">{{decimal low 2}}</td>
                </tr>
                 <tr>
                    <th class="column-first Header"></th>
                    <td class="column-last Data"></td>
                </tr>
            </table>

        </div>

    </div>

</script>

<%= site.newFooter("IRCalcSimple") %>
<link rel="stylesheet" href="lookup.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("lookup.css")).Ticks.ToString()%>" />


<script type="text/javascript">
 
    setTimeout(function() {
         console.log('ready');
         $('.date-select').on('change', function () {

             var bestMatchIndex = getIndexThatBestMatchesDate(stockData, "date", readFromDateObject('IRCalcValueChange'));
             var priceAtFromDate = stockData[bestMatchIndex].closePrice;
             var volume = stockData[bestMatchIndex].volume;
             var date = stockData[bestMatchIndex].date;
             console.log('volume:' + volume);
             console.log('date:' + date);
             var fromDate = readFromDate();
             console.log('fromDate:' + fromDate);
         });

    }, 1100);

    
   
    


</script>
