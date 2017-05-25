    <%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>


<%--<link rel="stylesheet" type="text/css" href="style/ie7.css" media="screen" />--%>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <%--<h2>{{headers/t_share_price}}</h2>--%>
    <%--<div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteContentWrapper">
            <div class="miniquoteDetailsWrapper">
                <div class="Data last"><span class="symbolLabel">{{headers/t_last}}({{stocks/currency}})</span> <span class="latestPrice">{{decimals stocks/last}}</span></div>
                <div class="Data change"><span class="latestChangeLabel">% {{headers/t_change}}:</span> <span class="latestChange">{{decimals stocks/changePercent}} <span class="{{showArrow stocks/change}}"></span></span></div>
            </div>
            <div class="Data lastUpdated">{{headers/t_last_updated}}: <span>{{showDateTime timestamp}}</span> </div>
        </div>
    </div>--%>
    <div class="IRMiniquoteModuleWrapper">
        <div class="IRMiniquoteTableWrapper">
            <table class="IRMiniQuoteQuoteModule table-look responsive">
                <tr class="miniquoteContentWrapper">

                    <th class="Header column-first last">{{headers/t_last}}</th>
                    <td class="Data column-last latestPrice">{{decimals stocks/last}}</td>
                </tr>

                <tr class="Data change">
                    <th class="Header column-first latestChangeLabel"><span dir="ltr">{{headers/t_change}}</span>:</th>
                    <td class="Data column-last latestChange"><span class="{{showArrow stocks/change}}"></span>{{decimalsCustom stocks/change '='}} ({{decimalsToFixed stocks/changePercent}}%)</td>
                </tr>
            </table>

            <div class="Data lastUpdated">{{headers/t_last_updated}}: <span>{{showDateTime timestamp}}</span> </div>
        </div>

        <table class="IRMiniQuoteQuoteModule openHighLow table-look responsive">
            <tr>
                <th class="Header column-first openPrice">{{headers/t_open}}</th>
                <td class="Data column-last openPrice">{{stocks/open}}</td>
            </tr>
            <tr>
                <th class="Header column-first dayHigh">{{headers/t_high}}</th>
                <td class="Data column-last dayHigh">{{stocks/high}}</td>
            </tr>
            <tr>
                <th class="Header column-first dayLow">{{headers/t_low}}</th>
                <td class="Data column-last dayLow">{{stocks/low}}</td>
            </tr>
        </table>


        <table class="IRMiniQuoteQuoteModule volumeSharesMarketCap table-look responsive">
            <tr>
                <th class="Header column-first volume">{{headers/t_volume}}</th>
                <td class="Data column-last volume">{{toLocal stocks/volume}}</td>
            </tr>
            <tr>
                <th class="Header column-first numberOfShares">{{headers/t_share_info}}</th>
                <td class="Data column-last numberOfShares">{{stocks/shareMillions}}</td>
            </tr>
            <tr>
                <th class="Header column-first marketCap">{{headers/t_market_cap}}</th>
                <td class="Data column-last marketCap">{{showKuwaitMarketCapM stocks/marketCap}}</td>
            </tr>
        </table>
        <div class="RKDDisclaimer">
            Quote data provided by © Thomson Reuters Limited. <a target="_Blank" href="//media.corporate-ir.net/media_files/irol/17/176279/Terms_Conditions.html">See Terms of use</a>
        </div>
    </div>
    <%--<div class="IRMiniQuoteQuoteModule openHighLow table-look responsive">
        <div>
            <div class="Header openPrice">{{headers/t_open}}</div>
            <div class="Data openPrice">{{stocks/open}}</div>
        </div>
        <div>
            <div class="Header dayHigh">{{headers/t_high}}</div>
            <div class="Data dayHigh">{{stocks/high}}</div>
        </div>
        <div>
            <div class="Header dayLow">{{headers/t_low}}</div>
            <div class="Data dayLow">{{stocks/low}}</div>
        </div>
    </div>


    <div class="IRMiniQuoteQuoteModule volumeSharesMarketCap table-look responsive">
        <div>
            <div class="Header volume">{{headers/t_volume}}</div>
            <div class="Data volume">{{toLocal stocks/volume}}</div>
        </div>
        <div>
            <div class="Header numberOfShares">{{headers/t_share_info}}</div>
            <div class="Data numberOfShares">{{stocks/shareMillions}}</div> 
        </div>
        <div
            <div class="Header marketCap">{{headers/t_market_cap}}</div>
            <div class="Data marketCap">{{showMarketCapM stocks/marketCap}}</div>
        </div>
    </div>--%>
</script>

<%= site.newFooter("IRMiniquote") %>

<script type="text/javascript">
    Handlebars.registerHelper('showKuwaitMarketCapM', function (number) {
        return ((number / 1000000) / 1000).toFixed(1);
    });

    function formatDecimalCustomZero(number, showThisWhenZeroOrNoData) {
        try {
            if (typeof (number) == 'number') {
                if (number == 0) {
                    return showThisWhenZeroOrNoData;
                } else {
                    return number.toFixed(clientStyle.amountOfDecimals);
                }
            }
        }
        catch (err) {
            return showThisWhenZeroOrNoData;
        }
    }

    Handlebars.registerHelper('decimalsCustom', function (number, showThisWhenZeroOrNoData) {
        return formatDecimalCustomZero(number, showThisWhenZeroOrNoData);
    })
    Handlebars.registerHelper('decimalsToFixed', function (number) {
        return number.toFixed(2);
    })
</script>

