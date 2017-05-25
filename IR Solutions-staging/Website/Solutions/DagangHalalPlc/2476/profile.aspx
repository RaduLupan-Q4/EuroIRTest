<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Lato:400,300,700' type=""text/css"" />";

%>

<%= site.newHeader("IRQuote") %>

<style>
    body{overflow: hidden;}
</style>
<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

    <!-- Profile -->
    <div class="profile-wrapper">

        <h2>{{stocks/name}} ({{stocks/symbol}})</h2>
        <b>Sector:</b> Software & Computer Services<br>
        <b>{{headers/t_share}} {{headers/t_price}}:</b> {{decimals stocks/last}}p<br>
        <b>{{headers/t_change}} {{headers/t_today}}:</b><span class="{{formatColour stocks/change}}"> {{decimals stocks/change}}</span>
        <br>
        <b>{{headers/t_market_cap}}:</b> £{{showLondonMarketCapM stocks/marketCap}}m<br>
        <div class="table-wrapper">
            <div class="company-listing-data">
                <h2>Company Listing Data</h2>
                <table class="IRTable table-look responsive">
                    <tr>
                        <td class="Header epic top">{{headers/t_symbol}}</td>
                        <td class="Data epic top"><b>{{stocks/symbol}}</b></td>
                    </tr>
                    <tr>
                        <td class="Header sector">Sector</td>
                        <td class="Data sector">Software & Computer Services</td>
                    </tr>
                    <tr>
                        <td class="Header isin">ISIN</td>
                        <td class="Data isin">JE00BYXF0V09</td>
                    </tr>
                    <tr>
                        <td class="Header sedol">Par</td>
                        <td class="Data sedol">25</td>
                    </tr>
                    
                    <tr>
                        <td class="Header market-sector">Inst Type</td>
                        <td class="Data market-sector">ORD</td>
                    </tr>
                    <tr>
                        <td class="Header market-segment">MiFID Status</td>
                        <td class="Data market-segment">MTF</td>
                    </tr>
                    
                    <tr>
                        <td class="Header currency">{{headers/t_currency}}</td>
                        <td class="Data currency">British Pence</td>
                    </tr>
                    
                </table>
            </div>
            <div class="price-data">
                <h2>{{headers/t_price}} Data</h2>
                <table class="IRTable table-look responsive">
                    <tbody>
                        <tr>
                            <td class="Header currency top">{{headers/t_currency}}</td>
                            <td class="Data currency top">{{stocks/currency}}</td>
                        </tr>
                        <tr>
                            <td class="Header price">{{headers/t_last}} {{headers/t_price}}</td>
                            <td class="Data price">{{decimals stocks/last}}p <span class="{{showArrow stocks/change}}"></span></td>
                        </tr>
                        <tr>
                            <td class="Header change">{{headers/t_change}} {{headers/t_today}}</td>
                            <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}}</td>
                        </tr>
                        <tr>
                            <td class="Header volume">{{headers/t_volume}}</td>
                            <td class="Data volume">{{toLocal stocks/volume}}</td>
                        </tr>
                        <tr>
                            <td class="Header prev-close">{{headers/t_prev_close}} </td>
                            <td class="Data prev-close">{{decimals stocks/prevClose}}p</td>
                        </tr>
                        <tr>
                            <td class="Header shares-issued">Shares Issued</td>
                            <td class="Data shares-issued">{{decimals stocks/shareMillions}}m</td>
                        </tr>
                        <tr>
                            <td class="Header market-cap">{{headers/t_market_cap}}</td>
                            <td class="Data market-cap">£{{showLondonMarketCapM stocks/marketCap}}m</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</script>

<%= site.newFooter("IRQuote") %>

