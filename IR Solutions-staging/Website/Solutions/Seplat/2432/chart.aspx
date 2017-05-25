<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fast.fonts.net/cssapi/d62c0329-9fcc-43ae-b445-59557b0dbc19.css""/>";
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChartHTML'];
</script>
<style>body {
     background-color: #fff;
 }</style>
<div class="contentWrapper">
    <div>
        <div class="fane">
            <ul>

                <li class="active">
                    <div id="switchListingLSE">London Stock Exchange</div>
                </li>

                <li>
                    <div id="switchListingNSE">Nigerian Stock Exchange</div>
                </li>

            </ul>

        </div>
    </div>

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

    </div>

<%= site.newFooter("IRChart") %>
</div>
<script type="text/javascript">

    $(function () {
        $('.fane ul li div').click(function () {
            switch ($(this).attr('id')) {
                case 'switchListingLSE':
                    break;
                case 'switchListingNSE':
                    location.href = 'http://ir1.euroinvestor.com/asp/ir/SEPLAT/2016/qc_f_NGE.aspx?listing=1';
                    break;
            }
        });
    });

</script>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRToolQuoteTable table-look table-look-horizontal quote quote-horizontal responsive-horizontal">
        {{#stocks}}
            <tr>
                <th>Symbol</th>
                <th>Prev Close</th>
                <th>Day High</th>
                <th>Day Low</th>
                <th>Bid</th>
            </tr>
        <tr>
            <td>{{symbol}}</td>
            <td>{{decimals prevClose}}</td>
            <td>{{decimalsNoZero high}}</td>
            <td>{{decimalsNoZero low}}</td>
            <td>{{decimalsNoZero bid}}</td>
        </tr>
        <tr>
            <th>Price</th>
            <th>Change</th>
            <th>Change (%)</th>
            <th>Volume</th>
            <th>Offer</th>
        </tr>
        <tr class="noBorder">
            <td>{{decimals last}}</td>
            <td class="Data change {{formatColour change}}">{{decimals change}}</td>
            <td class="Data change {{formatColour changePercent}}">{{decimals changePercent}}</td>
            <td>{{toLocal volume}}</td>
            <td>{{decimalsNoZero ask}}</td>
        </tr>
        {{/stocks}}
    </table>
    <%-- <div>Local timezone: {{showLocalTimeZoneShort}} updated: {{showDateTime stocks/timestamp}} last trade: {{showDateTime stocks/tradeTimestamp}}</div>--%>
</script>
