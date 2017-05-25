<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""http://fast.fonts.net/cssapi/9a16628e-8fe6-4d0b-ae99-7f88b2b32d15.css"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChartHTML'];
    var activeFeatures = ['IRChartNews'];
</script>

<%--<div class="ToolMenu IRChangeListing"></div>--%>
<div class="IRChartModule">
    <h1>Share Price Information
    </h1>
    <div class="IRQuoteModule"></div>

    <div class="IRChartOuter">

        <div class="IRChartHeader">
            <div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>
            <div class="IRChartCurrency">&nbsp;</div>
        </div>

        <div class="IRChartHTMLPlaceholder" style="height: 500px; min-width: 300px; clear: both;">
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

        <%--<div class="chartCurrentPriceBoxOuter">
        
        <div class="chartCurrentPriceBox">
            <div class="chartCurrentPriceBoxArrow">
                <div class="irCPB1"></div>
                <div class="irCPB2"></div>
                <div class="irCPB3"></div>
            </div>
            
            <span class="chartLastPrice"></span>
        </div>
    </div>--%>
    </div>
</div>
<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteModule table-look horizontal responsive">
    <span style="width: 100%; float: left; font-weight: bold; font-size: 14px;">{{headers/t_currency}}: {{stocks/currency}}</span>
    <span style="width: 100%; float: left; font-weight: bold; font-size: 14px;">{{headers/t_symbol}}: {{stocks/symbol}}</span>
            <tr>
                <th class="Header date column-left">{{headers/t_date}}</th>
                <td class="Data Timestamp column-left">{{showDate stocks/timestamp}}</td>
                <th class="Header time column-right">{{headers/t_time}}</th>
                <td class="Data time column-right">{{showTime stocks/timestamp}}</td>
            </tr>
             <tr>
                <th class="Header price column-left">{{headers/t_price}}</th>
                <td class="Data price column-left">{{decimals stocks/last}}</td>
                <th class="Header last column-right">{{headers/t_close}}</th>
                <td class="Data last column-right">{{decimals stocks/prevClose}}</td>
            </tr>
            <tr>
                <th class="Header change column-left">{{headers/t_change}}</th>
                <td class="Data change column-left {{formatColour stocks/change}}">{{decimals stocks/change}} <span class="{{showArrow stocks/change}}"></span></td>
                <th class="Header bid column-right">{{headers/t_bid}}</th>
                <td class="Data bid column-right">{{decimals stocks/bid}}</td>        
            </tr>
            <tr>
                <th class="Header high column-left">{{headers/t_high}}</th>
                <td class="Data high column-left">{{decimals stocks/high}}</td>
                <th class="Header marketCap column-right">{{headers/t_market_cap}}</th>
                <td class="Data marketCap column-right">£{{showLondonMarketCapM stocks/marketCap}}m</td>
            </tr>
            <tr>
                <th class="Header low column-left">{{headers/t_low}}</th>
                <td class="Data low column-left">{{decimals stocks/low}}</td>
                <th class="Header high52Week column-right">{{headers/t_52w_high}}</th>
                <td class="Data high52Week column-right">{{decimals stocks/high52Week}}</td>
            </tr>
            <tr>
                <th class="Header volume column-left">{{headers/t_volume}}</th>
                <td class="Data volume column-left">{{toLocal stocks/volume}}</td>
                <th class="Header low52Week column-right">{{headers/t_52w_low}}</th>
                <td class="Data low52Week column-right">{{decimals stocks/low52Week}}</td>
            </tr>
    </table>
</script>


<%= site.newFooter("IRChart") %>