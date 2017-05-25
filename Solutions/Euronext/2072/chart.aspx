<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote', 'IRChart'];
    var activeFeatures = ['TA', 'IRChartNews', 'IRChartCompare'];
</script>

<div class="IRQuoteModule"></div>

<div class="IRChartModule">
    <div class="IRChartColour"></div>
</div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

    <div class="clientBorderTop">
        <div class="contentBox1">
            <div class="bold subHeader1">Euronext</div>
            <div>{{showDateTime timestamp}} CET</div>
        </div>
        <div class="contentBox1">
            <div class="bold">Segment:</div>
            <div>Local securities</div>
        </div>
    </div>
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
                <div class="subHeader3">Turnover</div>
            </div>
            <div class="subGroup3">
                <div class="subData">{{showMarketCapM stocks/marketCap}} M</div>
                <br />
                <div class="subData">{{toLocal stocks/shareMillions}} M</div>
                <br />
                <div class="subData">{{toLocalTurnover stocks/vwap stocks/volume}}</div>
            </div>
            <%--<span>Since Previous Close</span><br />
            <span>x</span><br />
            <span>Since Open</span><br />
            <span>x</span>--%>
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
        <div class="subGroup3">
            <div class="subHeader3" style="padding-left: 20px;">{{headers/t_updated}}</div>
            <br />
            <div class="subHeader3" style="padding-left: 20px;">{{headers/t_last_updated}}</div>
            <br />
        </div>
        <div class="subGroup3">
            <div class="subData">{{showDateTime stocks/timestamp}}</div>
            <br />
            <div class="subData">{{showDateTime stocks/tradeTimestamp}}</div>
            <br />
        </div>
    </div>
    <div style="clear: left"></div>
    <div class="clientBorderBottom">
<%--        <div class="subGroup3">
            <div class="subHeader3" style="font-weight: bold;">{{headers/t_updated}}</div>
        </div>
        <div class="subGroup3">
            <div class="subHeader3" style="padding-left: 10px;">{{showDateTime stocks/timestamp}}</div>
        </div>
        <div class="subGroup3">
            <div class="subHeader3" style="padding-left: 10px; font-weight: bold;">{{headers/t_last_updated}}</div>
        </div>
        <div class="subGroup3">
            <div class="subHeader3" style="padding-left: 10px;">{{showDateTime stocks/tradeTimestamp}}</div>
        </div>--%>
    </div>
    <div style="clear: left"></div>


    <%--    <table class="dataRow1" style="width: 100%; text-align: left">
        <tr>
            <td>
                <span class="IRHeader">Euronext</span><span>12/06/2015 13:53 CET</span><br />
                <span>Segment: </span><span>Local securities</span>
            </td>
        </tr>
    </table>

    <table class="dataRow2" style="width: 100%; text-align: left">
        <tr>
            <td>
                <span class="IRTicker">{{stocks/symbol}}</span>
            </td>
            <td>
                <span style="font-size: 20px;">€</span>
                <span class="IRLastPrice"> {{decimals stocks/last}}</span>
            </td>
            <td>
                <span>Since Previous Close</span><br />
                <span>x</span><br />
                <span>Since Open</span><br />
                <span>x</span>
            </td>
        </tr>
    </table>

    <table style="width: 100%; text-align: left">
        <tr>
            <th>Euronext</th>
            <th>12/06/2015 13:53 CET</th>
        </tr>
        <tr>
            <th>Segment:</th>
            <th>Local securities</th>
        </tr>
        <tr>
            <td class="IRTicker">{{stocks/symbol}}</td>
            <td>{{showCurrency}} {{decimals stocks/last}}</td>
            <td>
                <span>Since Previous Close</span><br />
                <span>x</span><br />
                <span>Since Open</span><br />
                <span>x</span>
            </td>
            <td>
                <span class="subHeader">{{headers/t_volume}}</span><br />
                <span class="subHeader">{{headers/t_prev_close}}</span><br />
                <span class="subHeader">{{headers/t_open}}</span><br />
                <span class="subHeader">52 Week</span>
            </td>
            <td>
                <span>{{toLocal stocks/volume}}</span><br />
                <span>Previous Close</span><br />
                <span>Open</span><br />
                <span>52 Week</span>
            </td>
        </tr>
        <tr>
            <td>
                <span class="subHeader">{{headers/t_bid}}</span><span class="subPrice">{{decimals stocks/bid}}</span><br />
                <span class="subHeader">{{headers/t_ask}}</span><span class="subPrice">{{decimals stocks/ask}}</span><br />
                <span class="subHeader">{{headers/t_updated}}</span><span class="subPrice">{{showDateTime timestamp}}</span><br />
            </td>
            <td>
                <span class="subHeader">{{headers/t_bid_size}}</span><span class="subPrice"></span><br />
                <span class="subHeader">{{headers/t_ask_size}}</span><span class="subPrice"></span><br />
            </td>
            <td>
                <span class="subHeader">{{headers/t_high}}</span><span class="subPrice">{{decimals stocks/high}}</span><br />
                <span class="subHeader">{{headers/t_low}}</span><span class="subPrice">{{decimals stocks/low}}</span><br />
            </td>
            <td>
                <span class="subHeader">Turnover</span><span class="subPrice">{{decimals stocks/high}}</span><br />
                <span class="subHeader">{{headers/t_low}}</span><span class="subPrice">{{decimals stocks/low}}</span><br />
            </td>
        </tr>
    </table>


    <table class="IRQuoteModule table-look horizontal responsive">
            {{#headers}}
            <tr>
                <th class="Header column-first symbol">{{headers/t_symbol}}</th>
                <th class="Header last">{{t_last}}</th>
                <th class="Header change">{{t_change}}</th>
                <th class="Header bid">{{t_bid}}</th>
                <th class="Header mid">{{t_mid}}</th>
                <th class="Header ask">{{t_ask}}</th>
                <th class="Header volume">{{t_volume}}</th>
                <th class="Header high">{{t_high}}</th>
                <th class="Header low">{{t_low}}</th>
                <th class="Header column-last date">{{t_date}}</th>
                <th class="Header column-last time">{{t_time}}</th>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="Data column-first symbol">{{symbol}}</td>
                <td class="Data last">{{decimals last}} {{showCurrency}}</td>
                <td class="Data change"><span class="{{showArrow stocks/change}}"></span>{{decimals change}}</td>
                <td class="Data bid">{{decimals bid}}</td>
                <td class="Data mid">{{decimals mid}}</td>
                <td class="Data ask">{{decimals ask}}</td>
                <td class="Data volume">{{toLocal volume}}</td>
                <td class="Data high">{{decimals high}}</td>
                <td class="Data low">{{decimals low}}</td>
                <td class="Data column-last date">{{showDate timestamp}}</td>
                <td class="Data column-last time">{{showTime timestamp}}</td>
            </tr>
        {{/stocks}}
    </table>--%>
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
    Handlebars.registerHelper('toLocalTurnover', function (vwap, volume)
    {
        var number = 0;
        try
        {
            number = Number(vwap) * Number(volume);
            number = number.toFixed(0);
            //number = Number(vwap * volume).toLocaleString();

        }
        catch (err)
        {
            number = 0;
        }
        //return formatLocal(vwap * volume);
        return Number(number).toLocaleString();
    });
</script>