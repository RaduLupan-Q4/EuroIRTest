<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare'];
</script>

<div class="IRQuoteModule"></div>
<br />

<div class="IRChartToolMenu"></div>
<br />

<div class="IRChartModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
        {{#headers}}
            <tr>
                <th class="Header column-first symbol">{{t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}}</th>
                <th class="Header bid">{{t_bid}}</th>
                <th class="Header ask">{{t_ask}}</th>
                <th class="Header volume column-last">{{t_volume}}</th>

            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="Data column-first symbol">{{symbol}}</td>
                <td class="Data last">{{decimals last}}</td>
                <td class="Data change"><span class="{{showArrow change}}"></span>{{decimals change}} ({{decimals changePercent}}%) </td>
                <td class="Data bid">{{decimals bid}}</td>
                <td class="Data ask">{{decimals ask}}</td>
                <td class="Data volume column-last">{{toLocal volume}}</td>
            </tr>
        {{/stocks}}
    </table>

     <table class="IRQuoteModule table-look vertical responsive">
                <tr>
                    <th class="Header symbol">{{headers/t_symbol}}</th>
                    <td class="Data symbol">{{stocks/symbol}}</td>
                </tr>
                <tr>
                    <th class="Header last">{{headers/t_last}}</th>
                    <td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>
                </tr>
                <tr>   
                    <th class="Header change">{{headers/t_change}}</th>
                    <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
                </tr> 
                <tr>   
                    <th class="Header bid">{{headers/t_bid}}</th>
                    <td class="Data bid">{{decimals stocks/bid}}</td>
                </tr>
                <tr>
                    <th class="Header ask">{{headers/t_ask}}</th>
                    <td class="Data ask">{{decimals stocks/ask}}</td>
                </tr>
                <tr>
                    <th class="Header volume column-last">{{headers/t_volume}}</th>
                    <td class="Data volume column-last">{{toLocal stocks/volume}}</td>   
                </tr>                                                                                                                           
        </table>
    <div class="updated"><span>{{headers/t_updated}}: </span><span>{{showDateTime timestamp}}</span></div>
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