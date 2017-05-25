<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Lato:400,300,700"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

   <%-- <h2>{{stocks/name}} ({{stocks/symbol}})</h2>--%>
    <%--<div class="changeWrapper">
        <div class="last">{{decimals stocks/last}} <span>{{stocks/currency}}</span></div>
        <div class="change formatColour">{{decimals stocks/change}} <span>({{decimals stocks/changePercent}}%)</span> </div>
        <div class="updated">As of {{showTime timestamp}} ET on {{showDateWithFormat timestamp 'DD MMM, YYYY'}}</div>
    </div>--%>
     <div class="quoteWrapperChart">
                <span class="priceTitle">{{headers/t_price}}</span>
                <span class="last">
                   $ {{decimals stocks/last}}
                    
                   <%--  <span class="{{showArrow stocks/change}}"></span>--%>
                </span>
                <span class="companyName">({{stocks/symbol}}) - NYSE MKT</span>
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
        {{{includeIRChartChangePeriod 'm6'}}}
    </div>

</script>
<%= site.newFooter("IRChart") %>