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
    </div>

    <div class="IRCalcSection IRCalcValueChange">


        <h2>Calculate the change in the value of your holding</h2>

        <b>Select the date of purchase</b><br />

        {{{selectFromDay}}}
        {{{selectFromMonth}}}
        {{{selectFromYear}}}
        <br />
        <%--<br />
        <b>Enter the historic cost of your holding in {{showCurrency}} (eg. 1000)</b><br />
        {{{inputManualFromPrice}}}<br />
        <b>OR--%><br />
            Enter the number of shares that you own</b><br />
        {{{inputSharesAmount}}}<br />


        <button class="IRCalculateButton">{{{constrolsIRCalcButton 'CalculateValueChange'}}}</button><br />
        
        <br />

        <table class="IRCalcModule showValue">
            <tr>
                <td class="Header">Historic price per share:</td>
                <td class="Data">{{showCurrency}} {{{outputValue 'outputValueMostRecent'}}} </td>
            </tr>
            <tr>
                <td class="Header">Current value of your holding:</td>
                <td class="Data">{{showCurrency}} {{{outputValue 'outputValueOfHolding'}}} </td>
            </tr>
            <tr>
                <td class="Header">Change in value of your holding:</td>
                <td class="Data">{{showCurrency}} {{{outputValue 'outputValueChange'}}} </td>
            </tr>
        
        </table>
    </div>
   

</script>

<%= site.newFooter("IRCalcSimple") %>

<link rel="stylesheet" href="ir.clientTextRich.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("ir.clientTextRich.css")).Ticks.ToString()%>" />

<script type="text/javascript">
    setTimeout(
   function () {
       $(".calculateCurrentValueOfHolding").click(function ()
       {
           $(".IRCalcCurrentValueOfHolding #showValue").css('visibility', 'visible');
       });
       $(".CalculateValueChange").click(function ()
       {
           $(".IRCalcCurrentValueOfHolding .showValue").css('visibility', 'visible');
       });
   }, 700);
</script>