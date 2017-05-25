<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>";
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChartHTML'];
    var activeFeatures = ['IRChartCompare'];
</script>

<div class="IRQuoteModule"></div>

<br />

<%--<div class="ToolMenu IRChangeListing"></div>--%>

<div class="IRChartOuter">

    <div class="IRChartHeader">
        <div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>
        <div class="IRChartCurrency">&nbsp;</div>
    </div>

    <div class="IRChartHTMLPlaceholder" style="height: 500px; clear: both;">
        <span class="ajaxLoader">Loading</span>
    </div>

    <div class="chartNavBarRange">
        <div class="chartChangePeriod">
            <div id="d1">1 d</div>
            <div id="d5">5 d</div>
            <div id="m3"class="activePeriod">3 m</div>
            <div id="m6">6 m</div>
            <div id="y1">1 y</div>
            <div id="y2">2 y</div>
            <div id="y5">5 y</div>
            <div id="max">Max</div>
        </div>
    </div>

    <%--<div class="chartCurrentPriceBoxOuter">
        
        <div class="chartCurrentPriceBox">
            <div class="chartCurrentPriceBoxArrow">
                <div class="irCPB1"></div>
                <div class="irCPB2"></div>
                <div class="irCPB3"></div>
            </div>
            
            <span class="chartLastPrice"></span>
        </div>
    </div>--%>

</div>

<%= site.newFooter("IRChart") %>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRToolQuoteTable table-look table-look-horizontal quote quote-horizontal responsive-horizontal">
        {{#headers}}
            <tr>
                <th class="IRToolQuoteTableItem Header column-first">{{t_symbol}}</th>
                <th class="IRToolQuoteTableItem Header">Updated</th>
                <th class="IRToolQuoteTableItem Header">{{t_last}} price</th>
                <th class="IRToolQuoteTableItem Header">{{t_change}}</th>
                <th class="IRToolQuoteTableItem Header">{{t_volume}}</th>
                <th class="IRToolQuoteTableItem Header column-last">{{t_open}} {{t_price}}</th>
            </tr>
        {{/headers}}
            {{#stocks}}
            <tr>
                <td class="IRToolQuoteTableItem Data Symbol column-first">{{symbol}}</td>
                 <td class="IRToolQuoteTableItem Data Timestamp">{{showDateTime timestamp}}</td>               
                <td class="IRToolQuoteTableItem Data">{{toLocal last}}</td>
                <td class="IRToolQuoteTableItem Data {{formatColour change}}">{{toLocal change}} ({{decimals changePercent}}%)</td>
                <td class="IRToolQuoteTableItem Data">{{toLocal volume}}</td>
                <td class="IRToolQuoteTableItem Data column-last">{{toLocal open}}</td>
            </tr>
        {{/stocks}}
    </table>
    <table class="table-look vertical customResponsiveVertical">
        <tr>
            <th class="Header column-first symbol">{{headers/t_symbol}}</td>
            <td class="Data column-first symbol">{{stocks/symbol}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">Updated</th>
            <td class="IRToolQuoteTableItem Data">{{showDateTime timestamp}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_last}} price</th>
            <td class="IRToolQuoteTableItem Data">{{toLocal stocks/last}} {{stocks/showCurrency}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">{{headers/t_change}}</th>
            <td class="IRToolQuoteTableItem Data {{formatColour stocks/change}}">{{toLocal stocks/change}} ({{decimals stocks/changePercent}}%) </td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header">Volume</th>
            <td class="IRToolQuoteTableItem Data">{{toLocal stocks/volume}}</td>
        </tr>
        <tr>
            <th class="IRToolQuoteTableItem Header column-last">Open price</th>
            <td class="IRToolQuoteTableItem Data column-last">{{toLocal stocks/open}}</td>
        </tr>

    </table>
</script>
<script type="text/javascript">
   Handlebars.registerHelper('decimals', function (number) {
       return reformatDecimal(number);
   });
   function reformatDecimal(number){
       try {
           if (typeof (number) == 'number') {
               return number.round(clientStyle.amountOfDecimals).toFixed(clientStyle.amountOfDecimals).replace('.', clientLocaleParameters.decimalSeparator) * -1;
           } else {
               return "-";
           }
       }
       catch (err) {
           return "-";
       }
   }
</script>