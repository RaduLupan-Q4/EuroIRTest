<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";

%>

<%= site.newHeader("IRChart") %>

<% string listing = Request.QueryString["listing"];

%>
<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['TA', 'IRChartNews'];
</script>

<div class="IRQuoteModule"></div>

<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal customResponsive">
        {{#headers}}
			<tr>
                <th class="Header column-first symbol">{{t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}} (%)</th>
                <th class="Header bid">{{t_bid}}</th>
                <th class="Header ask">{{t_ask}}</th>
                <th class="Header volume">{{t_volume}}</th>
                <th class="Header high">{{t_high}}</th>
                <th class="Header low">{{t_low}}</th>
                <th class="Header column-last prev_close">{{t_prev_close}}</th>
            </tr>
        {{/headers}}
		{{#stocks}}
			<tr>
                <td class="Data column-first symbol">{{symbol}}</td>
                <td class="Data last">{{decimals last}} {{showCurrency}}</td>
                <td class="Data change {{formatColour changePercent}}">{{decimals changePercent}}% </td>
                <td class="Data bid">{{decimals bid}}</td>
                <td class="Data ask">{{decimals ask}}</td>
                <td class="Data volume">{{toLocal volume}}</td>
                <td class="Data high">{{decimals high}}</td>
                <td class="Data low">{{decimals low}}</td>
                <td class="Data column-last prev_close">{{decimals prevClose}}</td>
            </tr>
        {{/stocks}}
    </table>
    <table class="IRQuoteModule table-look vertical customResponsiveVertical">
        <tr>
            <th class="Header column-first symbol">
            {{headers/t_symbol}}</td>
				<td class="Data column-first symbol">{{stocks/symbol}}</td>
        </tr>
        <tr>
            <th class="Header last">{{headers/t_last}}</th>
            <td class="Data last">{{decimals stocks/last}} {{stocks/showCurrency}}</td>
        </tr>
        <tr>
            <th class="Header change">{{headers/t_change}} (%)</th>
            <td class="Data change {{formatColour stocks/changePercent}}">{{decimals stocks/changePercent}}% </td>
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
            <th class="Header volume">{{headers/t_volume}}</th>
            <td class="Data volume">{{toLocal stocks/volume}}</td>
        </tr>
        <tr>
            <th class="Header high">{{headers/t_high}}</th>
            <td class="Data high">{{decimals stocks/high}}</td>
        </tr>
        <tr>
            <th class="Header low">{{headers/t_low}}</th>
            <td class="Data low">{{decimals stocks/low}}</td>
        </tr>
        <tr>
            <th class="Header prev_close">{{headers/t_prev_close}}</th>
            <td class="Data prev_close">{{decimals stocks/prevClose}}</td>
        </tr>
    </table>
    <div class="updated" style="text-align: right"><span>Updated: {{showDateTime stocks/timestamp}}</span></div>


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
    $(function() {
        setTimeout(function() {
            if (<%=listing %> == 1) {
                $.when(requestStockData).done(function() {
                    $('#Max').trigger("click");
                    $('.volume').css('display', 'none');
                    $('.table-look th.column-first, .table-look td.column-firs').css('width', '130px');
                });
            } else {
                $('.table-look th.column-first, .table-look td.column-firs').css('width', '100px');
                $('.volume').css('display', 'block');
                
            }
        }, 300);
    });
</script>
