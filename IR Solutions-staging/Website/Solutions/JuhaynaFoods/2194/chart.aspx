 <%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" 

    %>

<% 
    IRSite site = new IRSite();
    //site.disclaimerType = "RKD";
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
%>

<%= site.newHeader("IRChart") %> 

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    //var activeFeatures = ['IRChartCompare'];
</script>

<div class="IRQuoteModule"></div><br />

<%--<div class="IRChartToolMenu IRChartChangeListing"></div>--%><br />

<div class="IRChartModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal customResponsive">
            {{#headers}}
            <tr>
                <th class="Header column-first symbol">{{t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}}</th>
                <th class="Header bid">{{t_bid}}</th>
                <th class="Header ask">{{t_ask}}</th>
                <th class="Header volume">{{t_volume}}</th>
                <th class="Header high">{{t_high}}</th>
                <th class="Header low">{{t_low}}</th>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="Data column-first symbol">{{symbol}}</td>
                <td class="Data last">{{decimals last}} {{showCurrency}}</td>
                <td class="Data change"><span class="{{showArrow change}}"></span> {{decimals change}} ({{decimals changePercent}}%) </td>
                <td class="Data bid">{{decimals bid}}</td>
                <td class="Data ask">{{decimals ask}}</td>
                <td class="Data volume">{{toLocal volume}}</td>
                <td class="Data high">{{decimals high}}</td>
                <td class="Data low">{{decimals low}}</td>
            </tr>
        {{/stocks}}
    </table>
    <div class="dateUpdated"><span class="dateUpdatedText">{{headers/t_updated}}:</span><span>{{showDateTime timestamp}}</span></div>
</script>

<script id="IRChartModuleTemplate" type="text/x-handlebars-template">
    
    <div class="IRChartNavigation">
        {{{includeIRChartCompanyName}}}
        <%--{{{includeIRChartNavigation}}}--%>
    </div>
    
    <div class="IRChartPlaceholderArea">
        {{{includeIRChartDomSettings}}}
        {{{includeIRChartPlaceholder}}}
        {{{includeIRChartChangePeriod 'y1'}}}
    </div>
    
    <div class="RKDDisclaimer">
        Quote data provided by © Thomson Reuters Limited. <a target="_Blank" href="http://media.corporate-ir.net/media_files/irol/17/176279/Terms_Conditions.html">See Terms of use</a>
    </div>

</script>



<%= site.newFooter("IRChart") %>
