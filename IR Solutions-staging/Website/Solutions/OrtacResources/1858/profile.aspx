<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Titillium+Web"" type=""text/css"" />";
%>
<%= site.header("IRQuote") %>

<script type="text/javascript">
    var activeModules = ['IRQuoteMulti'];
</script>

<div class="IRQuoteModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRQuoteMultiTableTemplate" type="text/x-handlebars-template">

    <!-- Profile -->
    <div class="profile-wrapper">

        <div class="table-wrapper">
            <div class="shareData">
                <h3>Share Data</h3>
                <table class="IRTable table-look responsive">
                    <tr>
                        <td class="Header currency top">{{headers/t_currency}}</td>
                        <td class="Data currency top">{{stocks/currency}}</td>
                    </tr>
                    <tr>
                        <td class="Header prevClose">{{headers/t_previous_close}}</td>
                        <td class="Data prevClose">{{stocks/prevClose}}</td>
                    </tr>
                    <tr>
                        <td class="Header high52week">{{headers/t_52w_high}}</td>
                        <td class="Data high52week">{{stocks/high52Week}}</td>
                    </tr>
                    <tr>
                        <td class="Header low52Week">{{headers/t_52w_low}}</td>
                        <td class="Data low52Week">{{stocks/low52Week}}</td>
                    </tr>
                    <tr>
                        <td class="Header Weeks52Percent">52 {{headers/t_weeks}} %</td>
                        <td class="Data market-sector">AIM</td>
                    </tr>
                    <tr>
                        <td class="Header ytd">YDT %</td>
                        <td class="Data ytd"></td>
                    </tr>
                   
                </table>
            </div>
            <div class="marketData">
                <h3>Market Data</h3>
                <table class="IRTable table-look responsive">
                    <tbody>
                        <tr>
                            <td class="Header market top">{{headers/t_market}}</td>
                            <td class="Data market top">London</td>
                        </tr>
                        <tr>
                            <td class="Header symbol">{{headers/t_symbol}}</td>
                            <td class="Data symbol">{{stocks/symbol}}</td>
                        </tr>
                        <tr>
                            <td class="Header list">{{headers/t_list}}</td>
                            <td class="Data list">AIM</td>
                        </tr>
                        <tr>
                            <td class="Header industry">{{headers/t_industry}}</td>
                            <td class="Data industry">Mining</td>
                        </tr>
                        <tr>
                            <td class="Header shares-issued">{{headers/t_number_of_shares}} (mln)</td>
                            <td class="Data shares-issued">{{toLocal stocks/shareMillions}} M</td>
                        </tr>
                        <tr>
                            <td class="Header market-cap">{{headers/t_market_cap}} (mln)</td>
                            <td class="Data market-cap">{{showLondonMarketCapM stocks/marketCap}} M</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</script>

<%= site.footer("IRQuote") %>