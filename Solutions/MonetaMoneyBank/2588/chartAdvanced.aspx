<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>
<meta charset="UTF-8">
<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['TA', 'IRChartNews'];
</script>

<div class="IRQuoteModule"></div>
<%--<div class="IRChartToolMenu IRChartChangeListing"></div>--%>
<br />
<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

    <%--  <div class="clientBorderTop">
        <div class="contentBox1">
            <div class="bold subHeader1">{{stocks/name}}</div>
            <div>{{showDateTime timestamp}} CET</div>
        </div>
        <div class="contentBox1">
            <div class="bold">Super Sector:</div>
            <div>Automobili E Componentistica</div>
        </div>
    </div>--%>
    <div class="contentBox2">
        <div class="subgroup2">
            <div class="subHeader2">{{stocks/symbol}}</div>
        </div>
        <div class="subgroup2">
            <div class="IRQuoteLastPrice">{{decimals stocks/last}}</div>
        </div>
        <div class="subgroup2">
            <div class="subGroup3">
                <div class="subHeader3">{{headers/t_volume}}</div>
                <br />
                <div class="subHeader3">{{headers/t_prev_close}}</div>
                <br />
                <div class="subHeader3">{{headers/t_open}}</div>
            </div>
            <div class="subGroup3">
                <div class="subData">{{toLocal stocks/volume}}</div>
                <br />
                <div class="subData">{{decimals stocks/prevClose}}</div>
                <br />
                <div class="subData">{{decimals stocks/open}}</div>
            </div>
            <div class="subGroup3">
                <div class="subHeader3">{{headers/t_market_cap}}</div>
                <br />
                <div class="subHeader3">{{headers/t_number_of_shares}}</div>
                <br />
                <div class="subHeader3">{{headers/t_turnover}}</div>
            </div>
            <div class="subGroup3">
                <div class="subData">{{showMarketCapM stocks/marketCap}} mil.</div>
                <br />
                <div class="subData">{{toLocal stocks/shareMillions}} mil.</div>
                <br />
                <div class="subData">{{toLocalTurnover stocks/vwap stocks/volume}}</div>
            </div>

        </div>
    </div>
    <div class="contentBox3">
        <div class="subGroup3">
            <div class="subHeader3">{{headers/t_change}}</div>
            <br />
            <div class="subHeader3">{{headers/t_change}} (%)</div>
            <br />
        </div>
        <div class="subGroup3">
            <div class="subData">{{decimals stocks/change}}</div>
            <br />
            <div class="subData">{{decimals stocks/changePercent}} %</div>
            <br />
        </div>
        <div class="subGroup3">
            <div class="subHeader3" style="padding-left: 20px;">{{headers/t_bid}}</div>
            <br />
            <div class="subHeader3" style="padding-left: 20px;">{{headers/t_ask}}</div>
            <br />
        </div>
        <div class="subGroup3">
            <div class="subData">{{decimals stocks/bid}}</div>
            <br />
            <div class="subData">{{decimals stocks/ask}}</div>
            <br />
        </div>
        <div class="highLowWrapper" style="display: inline-block;">
        <div class="subGroup3">
            <div class="subHeader3" style="padding-left: 20px;">{{headers/t_52w_high}}</div>
            <br />
            <div class="subHeader3" style="padding-left: 20px;">{{headers/t_52w_low}}</div>
            <br />
        </div>
        <div class="subGroup3">
            <div class="subData">{{decimals stocks/high52Week}} ({{showDate stocks/high52WeekDate}})</div>
            <br />
            <div class="subData">{{decimals stocks/low52Week}} ({{showDate stocks/low52WeekDate}})</div>
            <br />
        </div>
            </div>
        <div class="timestampWrapper">
            <div class="subGroup3">
                <div class="subHeader3" style="padding-left: 0px;">{{headers/t_updated}}</div>
                <br />
                <div class="subHeader3" style="padding-left: 0px;">{{headers/t_last_trade_timestamp}}</div>
                <br />
            </div>
            <div class="subGroup3">
                <div class="subData">{{showDateTime stocks/timestamp}} CET</div>
                <br />
                <div class="subData">{{showDateTime stocks/tradeTimestamp}} CET</div>
                <br />
            </div>
        </div>
    </div>
    <%--<div style="clear: left"></div>
    <div class="clientBorderBottom">
    </div>--%>
    <div style="clear: left"></div>

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
<%--<iframe id="performanceiFrame" src="performance.aspx?listing=1" style="width: 100%; float: left; height: 270px; margin-top: 40px;"></iframe>--%>
<%= site.newFooter("IRChart") %>


<link rel="stylesheet" href="chartadvanced.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("chartadvanced.css")).Ticks.ToString()%>" />

<script type="text/javascript">
    Handlebars.registerHelper('toLocalTurnover', function (vwap, volume) {
        var number = 0;
        try {
            number = Number(vwap) * Number(volume);
            number = number.toFixed(0);
            //number = Number(vwap * volume).toLocaleString();

        }
        catch (err) {
            number = 0;
        }
        //return formatLocal(vwap * volume);
        if (globalActiveLanguage == 'cs') {
            var newValue = numberWithCommas(number);

            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            return newValue.replace(/\./g, " ").replace(/\,/g, " ");
        } else {
            return Number(number).toLocaleString();

        }
    });

    Handlebars.registerHelper('showMarketCapM', function (number) {

        if (globalActiveLanguage == 'cs') {
            var newValue = numberWithCommas(formatDecimalDecimal1000(number / 1000000));

            function numberWithCommas(x) {
                return parseFloat(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            return newValue.replace(/\./g, " ");
        } else {
            var value = parseFloat(number /1000000).toFixed(0);
            var test = value / 1000

            return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    });
    Handlebars.registerHelper('toLocal', function (number) {

        if (globalActiveLanguage == 'cs') {

            var newValue = numberWithCommas(number);

            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            return newValue.replace(/\./g, " ").replace(/\,/g, " ");

        } else {

            return formatNumberWithLocalDelimiters(number);
        }
        
    });
	$(document).ready(function(){
        if (globalActiveLanguage == 'cs') {
            $('.disclaimer-delayed').text("Data jsou opožděna o 15-20 min.");
        }
    }) 
</script>
