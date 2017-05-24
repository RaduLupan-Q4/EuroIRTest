<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.header("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteVerticalModule"></div>
<div class="IRQuoteHorizontalModule"></div>



<%= site.footer("IRChart") %>
<script id="IRQuoteTableVerticalTemplate" type="text/x-handlebars-template" />
    <table class="detailed-share-price table-look  detailedshareprice detailedshareprice-vertical responsive-flip-vertical"> 
        <tr>
            <td colspan="5">
                <strong style="width: 50%; float:left;"> 
                    {{headers/t_currency}}: {{stocks/currency}}             
                </strong>
                <strong style="float:right; width: 50%; text-align:right;">
                    Stock Symbol: {{stocks/symbol}}
                </strong>
            </td>
        </tr>        
        <tr>
            <th importance="95" class="detailed-share-price Highlight">{{headers/t_date}}</th>
            <td width="173" class="detailed-share-price Highlight"><div align="left">{{showDate stocks/timestamp}}</div></td>
        </tr>
        <tr>
            <th width="135" class="detailed-share-price Highlight">{{headers/t_market_cap}}</th>
            <td width="151" class="detailed-share-price Highlight"><div align="left">&pound;{{showMarketCapM stocks/marketCap}}</div></td>
        </tr>
        <tr>
            <td importance="95" class="detailed-share-price">{{headers/t_last}} (p)</td>
            <td width="173"><div align="left">{{decimals stocks/last}}</div></td>
        </tr>
        <tr>
            <td width="135" class="detailed-share-price">{{headers/t_change}} (p)</td>
            <td width="151"><div align="left">{{decimals stocks/change}}</div></td>
        </tr>
        <tr>
            <td width="135" class="detailed-share-price">{{headers/t_change}} (%)</td>
            <td width="151"><div align="left">{{decimals stocks/changePercent}}</div></td>
        </tr>
        <tr>
            <td width="135" class="detailed-share-price">{{headers/t_last_updated}}</td>
            <td width="151"><div align="left">{{showTime stocks/tradeTimeStamp}}</div></td>
        </tr>
        <tr>
            <td width="135" class="detailed-share-price">{{headers/t_prev_close}} (p)</td>
            <td width="151"><div align="left">{{decimals stocks/prevClose}}</div></td>
        </tr>
        <tr>
            <td width="135" class="detailed-share-price">{{headers/t_bid}} (p)</td>
            <td width="151"><div align="left">{{decimals stocks/bid}}</div></td>
        </tr>
        <tr>
            <td width="135" class="detailed-share-price">{{headers/t_ask}} (p)</td>
            <td width="151"><div align="left">{{decimals stocks/ask}}</div></td>
        </tr>
        <tr>
            <td width="135" class="detailed-share-price">{{headers/t_high}} (p)</td>
            <td width="151"><div align="left">{{decimals stocks/high}}</div></td>
        </tr>
        <tr>
            <td width="135" class="detailed-share-price">{{headers/t_low}} (p)</td>
            <td width="151"><div align="left">{{decimals stocks/low}}</div></td>
        </tr>
        <tr>
            <td width="135" class="detailed-share-price">{{headers/t_volume}}</td>
            <td width="151"><div align="left">{{toLocal stocks/volume}}</div></td>
        </tr>    
    </table>
</script>

<script id="IRQuoteTableHorizontalTemplate" type="text/x-handlebars-template" />
    <table class="detailed-share-price table-look  detailedshareprice detailedshareprice-horizontal responsive-flip-horizontal">
        <tr>
            <td colspan="5" style="text-align: left;">
                <strong>
                    {{headers/t_currency}}: {{stocks/currency}}  <br />
                   Stock {{headers/t_symbol}}: {{stocks/symbol}}   
                </strong>
            </td>
        </tr>  
        <tr>
            <th class="detailed-share-price Highlight" width="123">{{headers/t_date}}</th>
            <th class="detailed-share-price Highlight">
                <div align="left">{{showDate stocks/timestamp}}</div>
            </th>
            <th class="detailed-share-price Highlight">{{headers/t_market_cap}}</th>
            <th class="detailed-share-price Highlight">
                <div align="left">&pound;{{showMarketCapM stocks/marketCap}}</div>
            </th>
            <th class="detailed-share-price Highlight">&nbsp;</th>
        </tr>
        <tr>
            {{#headers}}
            <td>{{t_last}} (p)</td>
            <td>{{t_change}} (p)</td>
            <td>{{t_change}} (%)</td>
            <td>{{t_last_updated}}</td>
            <td>{{t_prev_close}} (p)</td>
            {{/headers}}
        </tr>
        {{#stocks}}
        <tr class="data">
            <td>{{decimals last}}</td>
            <td>{{decimals change}}</td>
            <td>{{decimals changePercent}}</td>
            <td>{{showTime tradeTimeStamp}}</td>
            <td>{{decimals prevClose}}</td>
        </tr>
        {{/stocks}}
        {{#headers}}
        <tr class="highlight">
            <td width="20%">{{t_bid}} (p)</td>
            <td width="19%">{{t_ask}} (p)</td>
            <td width="19%">{{t_high}} (p)</td>
            <td width="19%">{{t_low}} (p)</td>
            <td width="23%">{{t_volume}}</td>
        </tr>
         {{/headers}}
        {{#stocks}}
        <tr class="data">
            <td>{{decimals bid}}</td>
            <td>{{decimals ask}}</td>
            <td>{{decimals high}}</td>
            <td>{{decimals low}}</td>
            <td>{{toLocal volume}}</td>
        </tr>
        {{/stocks}}
    </table>
</script>