<%@ page language="C#" autoeventwireup="true" %>

<%@ import namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRMiniquote") %>




<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <table class="fullQuote">
                <tr>
                    <th class="Header" colspan="4"><span>{{headers/t_currency}}: {{stocks/currency}}</span> <span>{{headers/t_code}}: {{stocks/symbol}} </span> <span>{{headers/t_date}}: {{showDateWithFormat stocks/timestamp "DD MMM YYYY"}}</span></th>
                </tr>    
                <tr class="rowBorder">
                  <td class="header">{{headers/t_price}}</td>
                  <td class="txtGrey" colspan="3">{{decimals stocks/lastTradePrice}}</td>
                </tr>
                <tr class="rowBorder">
                    <td class="header">{{headers/t_change}}</td>
                    <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}}</td>
                    <td class="header forMquery">{{headers/t_bid}}</td>
                    <td class="forMquery txtGrey">{{decimals stocks/bid}}</td>
                </tr>
                <tr class="rowBorder">
                    <td class="header">{{headers/t_last_trade_timestamp}}</td>
                    <td class="txtGrey">{{stocks/last}}</td>
                    <td class="header forMquery">{{headers/t_ask}}</td>
                    <td class="forMquery txtGrey">{{decimals stocks/ask}}</td>
                </tr>
                <tr class="rowBorder">
                    <td class="header">Daily High</td>
                    <td class="txtGrey" colspan="3">{{decimals stocks/high}}</td>        
                </tr>
                <tr class="rowBorder">
                    <td class="header">Daily Low</td>
                    <td class="txtGrey">{{decimals stocks/low}}</td>
                    <td class="header forMquery">Year High</td>
                    <td class="forMquery txtGrey">{{decimals stocks/highYear}}</td>
                </tr>
                <tr class="rowBorder">
                    <td class="header">Day Open</td>
                    <td class="txtGrey">{{decimals stocks/open}}</td>
                    <td class="header forMquery">Year Low</td>
                    <td class="forMquery txtGrey">{{decimals stocks/lowYear}}</td>
                </tr>
                <tr class="rowBorder">
                    <td class="header">{{headers/t_volume}}</td>
                    <td class="txtGrey" colspan="3">{{toLocal stocks/volume}}</td>        
                </tr>
            </table>
            <table class="fullQuote forMqueryShow">
               
                <tr class="rowBorder">
                    <td class="header ">{{headers/t_bid}}</td>
                    <td class="txtGrey">{{decimals stocks/bid}}</td>
                </tr>
                <tr>
                    <td class="header ">{{headers/t_ask}}</td>
                    <td class="txtGrey">{{decimals stocks/ask}}</td>
                </tr>
                <tr>
                    <td class="header ">Year High</td>
                    <td class="txtGrey">{{decimals stocks/highYear}}</td>
                </tr>
                <tr>
                    <td class="header ">Year Low</td>
                    <td class="txtGrey">{{decimals stocks/lowYear}}</td>
                </tr>
            </table>
        
                
        <div class="disclaimer" style="width: 490px;">

        </div>
              
    </div>
</script>


<%= site.newFooter("IRMiniquote") %>

