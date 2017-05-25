<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";

%>

<%= site.newHeader("IRQuote") %>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteModule profile"></div>
<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

    <!-- Profile -->
    <div class="profile-wrapper">

        <div class="table-wrapper">
            <div class="company-listing-data">
                
                <table class="IRTable table-look responsive">
                   <tr>    
                        <td class="Header symbol">{{headers/t_exchange}}</td>
                        <td class="Data symbol">LSE</td>
                        <td class="Header symbol">{{headers/t_best_bid}}</td>
                        <td class="Data symbol">{{decimals stocks/bid}}p</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">TIDM</td>
                        <td class="Data symbol">{{stocks/symbol}}</td>
                        <td class="Header symbol">{{headers/t_best_offer}}</td>
                        <td class="Data symbol">{{decimals stocks/ask}}p</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">{{headers/t_currency}}</td>
                        <td class="Data symbol">{{stocks/currency}}</td>
                        <td class="Header symbol">{{headers/t_day_volume}}</td>
                        <td class="Data symbol">{{toLocal stocks/volume}}</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">Shares in issue</td>
                        <td class="Data symbol">{{decimals stocks/shareMillions}}m</td>
                        <td class="Header symbol">{{headers/t_last}} {{headers/t_close}}</td>
                        <td class="Data symbol">{{decimals stocks/prevClose}}p</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">{{headers/t_market_cap}}</td>
                        <td class="Data symbol">&pound{{showLondonMarketCapM stocks/marketCap}}m</td>
                        <td class="Header symbol">{{headers/t_day_high}}</td>
                        <td class="Data symbol">{{decimals stocks/high}}p</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">{{headers/t_current}}</td>
                        <td class="Data symbol">{{decimals stocks/last}}p</td>
                        <td class="Header symbol">{{headers/t_day_low}}</td>
                        <td class="Data symbol">{{decimals stocks/low}}p</td>
                    </tr>
                    <tr>
                        <td class="Header topHeader">{{headers/t_change}}</td>
                        <td class="Data topHeader">{{decimals stocks/change}}p</td>   
                        <td class="Header symbol">{{headers/t_52w_high}}</td>
                        <td class="Data symbol">{{decimals stocks/high52Week}}p</td>           
                    </tr>
                    <tr>
                        <td class="Header topHeader">{{headers/t_change}}</td>
                        <td class="Data topHeader">{{decimals stocks/changePercent}}%</td>   
                        <td class="Header symbol">{{headers/t_52w_low}}</td>
                        <td class="Data symbol">{{decimals stocks/low52Week}}p</td>              
                    </tr>
                </table>
                
                <table class="IRTable table-look horisontal responsive">
                   <tr>
                        <td class="Header symbol">{{headers/t_exchange}}</td>
                        <td class="Data symbol">LSE</td>
                        
                    </tr>
                    <tr>
                        <td class="Header symbol">TIDM</td>
                        <td class="Data symbol">{{stocks/symbol}}</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">{{headers/t_currency}}</td>
                        <td class="Data symbol">{{stocks/currency}}</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">Shares in issue</td>
                        <td class="Data symbol">{{decimals stocks/shareMillions}}m</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">{{headers/t_market_cap}}</td>
                        <td class="Data symbol">&pound{{showLondonMarketCapM stocks/marketCap}}m</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">{{headers/t_current}}</td>
                        <td class="Data symbol">{{decimals stocks/last}}p</td>
                    </tr>
                    <tr>
                        <td class="Header topHeader">{{headers/t_change}}</td>
                        <td class="Data topHeader">{{decimals stocks/change}}p</td>   
                    </tr>
                    <tr>
                        <td class="Header topHeader">{{headers/t_change}}</td>
                        <td class="Data topHeader">{{decimals stocks/changePercent}}%</td>   
                                     
                    </tr>
                    <tr><td class="Header symbol">{{headers/t_best_bid}}</td>
                        <td class="Data symbol">{{decimals stocks/bid}}p</td>
                    </tr>
                    <tr>
                       <td class="Header symbol">{{headers/t_best_offer}}</td>
                        <td class="Data symbol">{{decimals stocks/ask}}p</td>
                    <tr>
                        <td class="Header symbol">{{headers/t_day_volume}}</td>
                        <td class="Data symbol">{{toLocal stocks/volume}}</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">{{headers/t_last}} {{headers/t_close}}</td>
                        <td class="Data symbol">{{decimals stocks/prevClose}}p</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">{{headers/t_day_high}}</td>
                        <td class="Data symbol">{{decimals stocks/high}}p</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">{{headers/t_day_low}}</td>
                        <td class="Data symbol">{{decimals stocks/low}}p</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">{{headers/t_52w_high}}</td>
                        <td class="Data symbol">{{decimals stocks/high52Week}}p</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">{{headers/t_52w_low}}</td>
                        <td class="Data symbol">{{decimals stocks/low52Week}}p</td> 
                    </tr>
                </table>
            </div>
        </div>
    </div>
</script>
<%= site.newFooter("IRChart") %>

