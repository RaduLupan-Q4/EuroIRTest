<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartNews', 'IRChartCompare'];

</script>

<div class="IRQuoteModule"></div>

<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    {{getIndex}}
    
    <table class="IRQuoteModule table-look horizontal responsive">
        <tr>

            <th class="Header last column-first">{{headers/t_last}}</th>
            <th class="Header change">{{headers/t_change}} (%)</th>
            <th class="Header bid">{{headers/t_open}}</th>
            <th class="Header high">{{headers/t_high}}</th>
            <th class="Header low">{{headers/t_low}}</th>
            <th class="Header volume">{{headers/t_volume}}</th>
            <th class="Header prevClose">{{headers/t_prev_close}}</th>
        </tr>
        <tr>

            <td class="Data last column-first">{{decimals stocks/last}} {{stocks/currency}}</td>
            <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
            <td class="Data bid">{{decimals stocks/open}}</td>
            <td class="Data high">{{decimals stocks/high}}</td>
            <td class="Data low">{{decimals stocks/low}}</td>
            <td class="Data volume">{{toLocal stocks/volume}}</td>
            <td class="Data prevClose">{{toLocal stocks/prevClose}}</td>
        </tr>
    </table>
    <table class="IRQuoteModule table-look horizontal indicies">
        <tr>
            <th class="Header cac40Last">CAC 40 {{headers/t_last}} {{headers/t_price}}</th>
            <th class="Header cac40Change">CAC 40 {{headers/t_change}} (%)</th>
            <th class="Header sbf120Last">SBF 120 {{headers/t_last}} {{headers/t_price}}</th>
            <th class="Header sbf120Change">SBF 120 {{headers/t_change}} (%)</th>
        </tr>
        <tr>
            <td class="Data cac40Last"></td>
            <td class="Data cac40Change"></td>
            <td class="Data sbf120Last"></td>
            <td class="Data sbf120Change"></td>
        </tr>
    </table>
    <table class="IRQuoteModule table-look vertical responsive">
        <tr>
            <td class="Header last column-first">{{headers/t_last}}</td>
            <td class="Data last column-first">{{decimals stocks/last}} {{stocks/currency}}</td>
        </tr>
        <tr>
            <td class="Header change column-first">{{headers/t_change}} (%)</td>
            <td class="Data change column-first {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
        </tr>
        <tr>
            <td class="Header bid column-first">{{headers/t_open}}</td>
            <td class="Data bid column-first">{{decimals stocks/open}}</td>
        </tr>
        <tr>
            <td class="Header high column-first">{{headers/t_high}}</td>
            <td class="Data high column-first">{{decimals stocks/high}}</td>

        </tr>
        <tr>
            <td class="Header low column-first">{{headers/t_low}}</td>
            <td class="Data low column-first">{{decimals stocks/low}}</td>

        </tr>
        <tr>
            <td class="Header volume column-first">{{headers/t_volume}}</td>
            <td class="Data volume column-first">{{toLocal stocks/volume}}</td>

        </tr>
        <tr>
            <td class="Header prevClose column-first">{{headers/t_prev_close}}</td>
            <td class="Data prevClose column-first">{{toLocal stocks/prevClose}}</td>

        </tr>
        <tr>
            <td class="Header cac40Last column-first">CAC 40 {{headers/t_last}} {{headers/t_price}}</td>
            <td class="Data cac40Last column-first"></td>

        </tr>
        <tr>
            <td class="Header cac40Change column-first">CAC 40 {{headers/t_change}} (%)</td>
            <td class="Data cac40Change column-first"></td>
        </tr>
        <tr>
            <td class="Header sbf120Last column-first">SBF 120 {{headers/t_last}} {{headers/t_price}}</td>
            <td class="Data sbf120Last column-first"></td>
        </tr>
        <tr>
            <td class="Header sbf120Change column-first">SBF 120 {{headers/t_change}} (%)</td>
            <td class="Data sbf120Change column-first"></td>
        </tr>
    </table>
    <div class="updated"><span>{{headers/t_updated}}: </span><span>{{showDateTime stocks/timestamp}} {{showLocalTimeZoneShort}}</span></div>


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
    $(function () {

        Handlebars.registerHelper('getIndex', function () {
            setTimeout(function () {
                loadIndiciesData();
            },200);
        });

        function loadIndiciesData() {
            $.getJSON(getServiceEngingeURL() + 'RequestStockDataBundle?apiversion=' + clientApiVersion + '&customerKey=' + clientCustomerKeyRequired + '&solutionID=' + clientSolutionID + '&instrumentTypes=index', function (data) {
                var allData = data.data;
                $('.Data.cac40Last').text(allData[0].last);
                $('.Data.cac40Change').text(allData[0].changePercent);
                $('.Data.sbf120Last').text(allData[1].last);
                $('.Data.sbf120Change').text(allData[1].changePercent);
            });
        }



    });

</script>
