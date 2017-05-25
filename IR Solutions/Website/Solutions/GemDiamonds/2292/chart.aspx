﻿<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900""/>";
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['IRChartCompare'];
</script>

<div class="IRQuoteModule"></div>
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
                <th class="Header volume">{{t_volume}}</th>
                <th class="Header high">{{t_high}}</th>
                <th class="Header low">{{t_low}}</th>
                <th class="Header low">{{t_market_cap}}</th>
                <th class="Header column-last time">{{t_updated}}</th>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="Data column-first symbol">{{symbol}}</td>
                <td class="Data last">{{decimals last}} {{showCurrency}}</td>
                <td class="Data change"><span class="{{showArrow change}}"></span>{{decimals change}} ({{decimals changePercent}}%) </td>
                <td class="Data bid">{{decimals bid}}</td>
                <td class="Data ask">{{decimals ask}}</td>
                <td class="Data volume">{{toLocal volume}}</td>
                <td class="Data high">{{decimals high}}</td>
                <td class="Data low">{{decimals low}}</td>
                <td class="Data low">{{showMarketCapM marketCap}}M {{showCurrency}}</td>
                <td class="Data column-last time">{{showDateTime timestamp}}</td>
            </tr>
        {{/stocks}}
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

<div class="chartDisclaimer">
    <%= site.newFooter("IRChart") %>
</div>

<script type="text/javascript">

    //Remove 1d and 5d view from compare
        var customXApplied = false;
        function prepareCustomX() {
            if (!customXApplied) {
                if (typeof ($('.basicButtonLook')) != 'undefined') {

                    $('.basicButtonLook').click(function () {
                        if ($('.basicButtonLook').hasClass("active")) {
                            $('#d1').css('display', 'none');
                            $('#d5').css('display', 'none');                       
                        }
                        else {
                            $('#d1').css('display', 'block');
                            $('#d5').css('display', 'block');
                        }
                    })
   
                    customXApplied = true;
                }
                
            }
        }
        $(function () {
            setInterval(function () {
                prepareCustomX();
            }, 200);
        });
</script>
