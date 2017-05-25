<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>

<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChartHTML'];
</script>

<div class="IRQuoteModule"></div>

<br />

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
            <div id="m3">3 m</div>
            <div id="m6">6 m</div>
            <div id="y1" class="activePeriod">1 y</div>
            <div id="y2">2 y</div>
            <div id="y5">5 y</div>
            <div id="max">Max</div>
        </div>
    </div>

    <br />

    <table class="IRToolQuoteTable table-look table-look-horizontal quote quote-horizontal responsive-horizontal custom-table-en" style="display: none;">
        <tr>
            <th importance="95" class="IRToolQuoteTableItem Header column-first">ISIN</th>
            <th importance="90" class="IRToolQuoteTableItem Header">Ticker</th>
            <th importance="75" class="IRToolQuoteTableItem Header">Exchange</th>
            <th importance="85" class="IRToolQuoteTableItem Header">Stocks</th>
            <th importance="80" class="IRToolQuoteTableItem Header">Nominal</th>
            <th importance="60" class="IRToolQuoteTableItem Header column-last">Exchange Post</th>
        </tr>
        <tr>
            <td class="IRToolQuoteTableItem Data Symbol column-first">DK0060074656</td>
            <td class="IRToolQuoteTableItem Data">EI</td>
            <td class="IRToolQuoteTableItem Data">OMX Copenhagen</td>
            <td class="IRToolQuoteTableItem Data">20.265.249</td>
            <td class="IRToolQuoteTableItem Data">DKK 1,00</td>
            <td class="IRToolQuoteTableItem Data column-last">1</td>
        </tr>
    </table>

    <table class="IRToolQuoteTable table-look table-look-horizontal quote quote-horizontal responsive-horizontal custom-table-da" style="display: none;">
        <tr>
            <th importance="95" class="IRToolQuoteTableItem Header column-first">ISIN</th>
            <th importance="90" class="IRToolQuoteTableItem Header">Symbol</th>
            <th importance="75" class="IRToolQuoteTableItem Header">Børs</th>
            <th importance="85" class="IRToolQuoteTableItem Header">Aktier</th>
            <th importance="80" class="IRToolQuoteTableItem Header">Nominal</th>
            <th importance="60" class="IRToolQuoteTableItem Header column-last">Lot size</th>
        </tr>
        <tr>
            <td class="IRToolQuoteTableItem Data Symbol column-first">DK0060074656</td>
            <td class="IRToolQuoteTableItem Data">EI</td>
            <td class="IRToolQuoteTableItem Data">OMX Copenhagen</td>
            <td class="IRToolQuoteTableItem Data">20.265.249</td>
            <td class="IRToolQuoteTableItem Data">DKK 1,00</td>
            <td class="IRToolQuoteTableItem Data column-last">1</td>
        </tr>
    </table>

</div>

<%= site.newFooter("IRChart") %>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRToolQuoteTable table-look table-look-horizontal quote quote-horizontal responsive-horizontal">
        {{#headers}}
            <tr>
                <th importance="95" class="IRToolQuoteTableItem Header column-first">{{t_symbol}}</th>
                <th importance="90" class="IRToolQuoteTableItem Header">{{t_last}}</th>
                <th importance="75" class="IRToolQuoteTableItem Header">{{t_change}}</th>
                <th importance="85" class="IRToolQuoteTableItem Header">{{t_bid}}</th>
                <th importance="80" class="IRToolQuoteTableItem Header">{{t_ask}}</th>
                <th importance="75" class="IRToolQuoteTableItem Header">{{t_volume}}</th>
                <th importance="70" class="IRToolQuoteTableItem Header">{{t_high}}</th>
                <th importance="65" class="IRToolQuoteTableItem Header">{{t_low}}</th>
                <th importance="60" class="IRToolQuoteTableItem Header column-last">{{t_timestamp}}</th>
            </tr>
        {{/headers}}
            {{#stocks}}
            <tr>
                <td class="IRToolQuoteTableItem Data Symbol column-first">{{symbol}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals last}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals change}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals bid}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals ask}}</td>
                <td class="IRToolQuoteTableItem Data">{{toLocal volume}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals high}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimals low}}</td>
                <td class="IRToolQuoteTableItem Data Timestamp column-last">{{showDateTime timestamp}}</td>
            </tr>
        {{/stocks}}
    </table>

</script>
<script type="text/javascript">
    var activeLanguageFast = 'en';

    var languageDictFast = {};
    var getParamsFast = location.search.substr(1).split("&")

    for (var i = 0; i < getParamsFast.length; i++) {
        if (getParamsFast[i].split("=")[0] == "language") {
            languageDictFast[getParamsFast[i].split("=")[0]] = getParamsFast[i].split("=")[1];
        }
    }


    if (typeof (languageDictFast.language) != 'undefined') {
        if (languageDictFast.language.length > 0) {
            activeLanguageFast = languageDictFast.language;
        }
    }

    if (activeLanguageFast == 'da') {
        $('.custom-table-en').hide();
        $('.custom-table-da').show();
    }
    if (activeLanguageFast == 'en') {
        $('.custom-table-da').hide();
        $('.custom-table-en').show();
    }
</script>
