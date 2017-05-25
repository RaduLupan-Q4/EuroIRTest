<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
</script>
<div>
    <table class="tabs">
        <tr class="row">
            <th>
                <div class="CUR CUR0" onclick="reload(0);">
                    USD
                </div>
            </th>
            <th>
                <div class="CUR CUR1" onclick="reload(1);">
                    GBP
                </div>
            </th>
            <th>
                <div class="CUR CUR2" onclick="reload(2);">
                    EUR
                </div>
            </th>
        </tr>
        <tr class="row">
            <td>
                <div class="CUR0 arrow">&nbsp;
                </div>
            </td>
            <td>
                <div class="CUR1 arrow">&nbsp;
                </div>
            </td>
            <td>
                <div class="CUR2 arrow">&nbsp;
                </div>
            </td>
        </tr>
    </table>
</div>
<div class="IRQuoteModule"></div>

<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

    <table class="IRQuoteModule table-look table-look-horizontal responsive-flip-horizontal">
        <tr>
            <th class="Header {{stocks/name}} last column-first">{{headers/t_last}}</th>
            <th class="Header {{stocks/name}} change">{{headers/t_change}} (%)</th>
            <th class="Header {{stocks/name}} bid">{{headers/t_bid}}</th>
            <th class="Header {{stocks/name}} ask">{{headers/t_ask}}</th>
            <th class="Header {{stocks/name}} high">{{headers/t_high}}</th>
            <th class="Header {{stocks/name}} low">{{headers/t_low}}</th>
            <th class="Header {{stocks/name}} Timestamp column-last " id="hideH">{{headers/t_time}}</th>
        </tr>
        <tr>
            <td class="Data last column-first">{{showCurrencySymbol}} {{decimals stocks/last}} (per oz)</td>
            <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></td>
            <td class="Data bid">{{decimals stocks/bid}}</td>
            <td class="Data ask">{{decimals stocks/ask}}</td>
            <td class="Data high">{{decimals stocks/high}}</td>
            <td class="Data low">{{decimals stocks/low}}</td>
            <td class="Data Timestamp column-last" id="hideD">{{showDateTime stocks/timestamp}}</td>
        </tr>
    </table>

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

<script type="text/javascript">
    var offset = 3; //gold

    $(function () {
        if (globalActiveListingIndex < 3) {
            offset = 0;//Silver
        }
        setActive();


    });
    function reload(i) {
        globalActiveListingIndex = i + offset;
        redrawIRChartHTMLHistorical();
        buildQuoteTable();
        setActive();
		setChartExtremes('historical',360);
		$('.activePeriod').removeClass('activePeriod');
		$('.IRChartChangePeriod #y1').addClass('activePeriod');
		
    }
    function setActive() {
        $('.CUR, .arrow').removeClass('active');
        $('.CUR' + (parseInt(globalActiveListingIndex) - parseInt(offset))).addClass('active');
    }
</script>
