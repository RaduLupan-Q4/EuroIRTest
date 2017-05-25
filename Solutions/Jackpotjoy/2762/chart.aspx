<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();  
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,600,700""/>";
%>


<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = [''];
</script>


<div class="IRQuoteModule"></div>
<div class="clear"></div>
<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
             <tr>
                <th class="Header symbol">{{headers/t_symbol}}</th>
                <th class="Header last">{{headers/t_last}}</th>
                <th class="Header change">{{headers/t_change}}</th>
                <th class="Header bid">{{headers/t_bid}}</th>
                <th class="Header ask">{{headers/t_ask}}</th>
                <th class="Header volume column-last">{{headers/t_volume}}</th>
            </tr>
            <tr>
                <td class="Data symbol">{{stocks/symbol}}</td>
                <td class="Data last">{{stocks/last}}</td>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
                <td class="Data bid">{{decimals stocks/bid}}</td>
                <td class="Data ask">{{decimals stocks/ask}}</td>
                <td class="Data volume column-last">{{toLocal stocks/volume}}</td>              
            </tr>
    </table>
    <div class="updated">{{headers/t_updated}}: {{showDateWithFormat stocks/timestamp 'DD.MM.YYYY HH:mm'}}</div>
</script>


<script id="IRChartModuleTemplate" type="text/x-handlebars-template">
  
    <div class="IRChartNavigation">
        {{{includeIRChartCompanyName}}}
    </div>

    <div class="IRChartPlaceholderArea">
        {{{includeIRChartDomSettings}}}
        {{{includeIRChartPlaceholder}}}
        {{{includeIRChartChangePeriod 'd1'}}}
    </div>

</script>


<%= site.newFooter("IRChart") %>
