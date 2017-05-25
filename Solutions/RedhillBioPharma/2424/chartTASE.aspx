<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare', 'IRChartNews'];
</script>

<div class="IRQuoteModule"></div>
<br />
<%--<div class="IRChartToolMenu IRChartChangeListing"></div><br />--%>

<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
<!--
    <div class="companyInfoWrapper">
        <div class="chartName">{{stocks/name}} (OMX: {{stocks/symbol}})</div>
    </div>
-->
   
    <h2>{{stocks/name}} ({{stocks/symbol}})</h2>
   <%-- <p>Each ADS represents ten ordinary shares.</p>--%>
    <div class="changeWrapper">
        <div class="last">{{decimals stocks/last}} <span>{{stocks/currency}}</span></div>
        <div class="change formatColour">{{plusOrMinus stocks/change}} <span>({{plusOrMinus stocks/changePercent}}%)</span> </div>
        <div class="updated">As of {{showDateWithFormat stocks/tradeTimestamp 'hh:mm A'}} Israel Time on {{showDateWithFormat stocks/tradeTimestamp 'MMM D, YYYY'}}</div>
    </div>

    <table class="IRQuoteModule table-look horizontal customResponsive">
       <tbody>
        <tr>
            <th scope="row">{{headers/t_prev_close}}</th>
            <td>{{decimals stocks/prevClose}}</td>
        </tr>
        <tr>
            <th scope="row">{{headers/t_open}}</th>
            <td>{{decimals stocks/open}}</td>
        </tr>
        <tr>
            <th scope="row">{{headers/t_volume}}</th>
            <td>{{toLocal stocks/volume}}</td>
        </tr>
        <tr>
            <th scope="row">{{headers/t_exchange}}</th>
            <td class="name">{{showExchangeShort stocks/exchangeName}}</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
            <th scope="row">Day {{headers/t_high}}</th>
            <td>{{decimals stocks/high}}</td>
        </tr>
        <tr>
            <th scope="row">Day {{headers/t_low}}</th>
            <td>{{decimals stocks/low}}</td>
        </tr>
        <tr>
            <th scope="row">{{headers/t_52w_high}}</th>
            <td>{{decimals stocks/high52Week}}</td>
        </tr>
        <tr>
            <th scope="row">{{headers/t_52w_low}}</th>
            <td>{{decimals stocks/low52Week}}</td>
        </tr>
        </tbody>
    </table>
    <%--<h2>ADS Chart</h2>--%>
</script>


<script id="IRChartModuleTemplate" type="text/x-handlebars-template">
    <div class="IRChartNavigation">
        {{{includeIRChartCompanyName}}}
        {{{includeIRChartNavigation}}}
    </div>

    <div class="IRChartPlaceholderArea">
        {{{includeIRChartDomSettings}}}
        {{{includeIRChartPlaceholder}}}
        {{{includeIRChartChangePeriod 'y1'}}}
    </div>

</script>
<%= site.newFooter("IRChart") %>

<script>
    Handlebars.registerHelper('plusOrMinus', function (number) {
        if (number > 0) {
            return '+' + formatDecimal(number);

        } else if (number < 0) {
            return formatDecimal(number);
        }
        return formatDecimal(number);
    });

</script>