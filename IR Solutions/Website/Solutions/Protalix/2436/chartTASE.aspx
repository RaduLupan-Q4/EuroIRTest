<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Lato:400,300,700""/>";
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare', 'IRChartNews'];
</script>


<%--<div class="IRChartToolMenu IRChartChangeListing"></div><br />--%>

<div class="IRChartModule" style="width: 50%; float: left;">
    <div class="IRChartColour"></div>
</div>
<div class="IRQuoteModule" style="width: 47%; float: right;"></div>
<br />

<br />

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
<!--
    <div class="companyInfoWrapper">
        <div class="chartName">{{stocks/name}} (OMX: {{stocks/symbol}})</div>
    </div>
-->
   
    <%--<h2>{{stocks/name}} ({{stocks/symbol}})</h2>--%>
   <%-- <p>Each ADS represents ten ordinary shares.</p>--%>
    
    <div class="quoteWrapperChart">
                <span class="priceTitle">{{headers/t_price}}</span>
                <span class="last">
                   {{stocks/currency}} {{decimals stocks/last}}
                    
                   <%--  <span class="{{showArrow stocks/change}}"></span>--%>
                </span>
                <span class="companyName">{{stocks/name}} <br />
                    ({{stocks/symbol}}) - TASE</span>
            </div>
     <table class="IRQuoteModule table-look horizontal customResponsive">
        <tbody>
             <tr>
                <th scope="row">{{headers/t_change}}</th>
                <td>{{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</td>
            </tr>
            <tr>
                <th scope="row">Day {{headers/t_bid}}</th>
                <td>{{decimals stocks/bid}}</td>
            </tr>
            <tr>
                <th scope="row">Day {{headers/t_ask}}</th>
                <td>{{decimals stocks/ask}}</td>
            </tr>
            <tr>
                <th scope="row">{{headers/t_volume}}</th>
                <td>{{toLocal stocks/volume}}</td>
            </tr>
            <tr>
                <th scope="row">Day {{headers/t_high}}</th>
                <td>{{decimals stocks/high}}</td>
            </tr>
            <tr>
                <th scope="row">Day {{headers/t_low}}</th>
                <td>{{decimals stocks/low}}</td>
            </tr>
        </tbody>
    </table>
</script>


<script id="IRChartModuleTemplate" type="text/x-handlebars-template">
    <div class="IRChartNavigation">
        {{{includeIRChartCompanyName}}}

    </div>

    <div class="IRChartPlaceholderArea">
        {{{includeIRChartDomSettings}}}
        {{{includeIRChartPlaceholder}}}
        {{{includeIRChartChangePeriod 'y1'}}}
    </div>

</script>
<%= site.newFooter("IRChart") %>