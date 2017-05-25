<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>

<%= site.newHeader("IRProfile") %>


<script type="text/javascript">
    var activeModules = ['IRProfile'];
</script>

<div class="IRProfileModule"></div>

<script id="IRProfileTemplate" type="text/x-handlebars-template">

    <!-- Profile -->
    <div class="profile-wrapper">

        <h2>{{stocks/name}} ({{stocks/symbol}})</h2>
        <div class="table-wrapper">
            <div class="company-listing-data">
                <h2>Delayed data</h2>
                <table class="IRTable table-look responsive">
                    <tr>
                        <td class="Header epic top">{{headers/t_last}}</td>
                        <td class="Data epic top">€ {{stocks/last}}</td>
                    </tr>
                    <tr>
                        <td class="Header sector">% {{headers/t_change}}</td>
                        <td class="Data sector formatColour">{{stocks/change}}%</td>
                    </tr>
                    <tr>
                        <td class="Header sedol">{{headers/t_open}}</td>
                        <td class="Data sedol">€ {{stocks/open}}</td>
                    </tr>
                    <tr>
                        <td class="Header isin">{{headers/t_low}}/{{headers/t_high}}</td>
                        <td class="Data isin">€ {{stocks/low}} / € {{stocks/high}}</td>
                    </tr>
                    <tr>
                        <td class="Header market-sector">{{headers/t_no_of_trades_today}}</td>
                        <td class="Data market-sector">{{toLocal stocks/tradeCount}}</td>
                    </tr>
                    <tr>
                        <td class="Header market-segment">{{headers/t_market_cap}} (B €)</td>
                        <td class="Data market-segment">{{showMarketCapM stocks/marketCap}}</td>
                    </tr>
                    <tr>
                        <td class="Header country">{{headers/t_shares_outstanding}}</td>
                        <td class="Data country">{{toLocal stocks/shareMillions}}m</td>
                    </tr>

                </table>
            </div>
            <div class="price-data">
                <h2>Market data</h2>
                <table class="IRTable table-look responsive">
                    <tbody>
                        <tr>
                            <td class="Header currency top">{{headers/t_symbol}}</td>
                            <td class="Data currency top">{{stocks/symbol}}</td>
                        </tr>
                        <tr>
                            <td class="Header price">{{headers/t_volume}}</td>
                            <td class="Data price">{{toLocal stocks/volume}}</td>
                        </tr>
                        <tr>
                            <td class="Header change">{{headers/t_last_month_performance}}</td>
                            <td class="Data change formatColour">{{decimals performance/m1}} %</td>
                        </tr>
                        <tr>
                            <td class="Header volume">{{headers/t_last_3_months_performance}}</td>
                            <td class="Data volume formatColour">{{decimals performance/m3}} %</td>
                        </tr>
                        <tr>
                            <td class="Header prev-close">{{headers/t_last_year_performance}} </td>
                            <td class="Data prev-close formatColour">{{decimals performance/y1}} %</td>
                        </tr>
                        <tr>
                            <td class="Header shares-issued">Last month average volume</td>
                            <td class="Data shares-issued">{{decimals stocks/shareMillions}}m</td>
                        </tr>
                        <tr>
                            <td class="Header market-cap">{{headers/t_year_low_high}}</td>
                            <td class="Data market-cap">€ {{decimals stocks/highYear}} / € {{decimals stocks/lowYear}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <iframe id="calcProfileiFrame" src="miniquotechartProfile.aspx" style="width: 100%; float: left; height: auto; margin-bottom: 40px; margin-top: 40px;"></iframe>

        <div class="profileCompanyInformationWrapper">
            <div class="company-listing-data">
                <table class="IRTable table-look responsive">
                    <tr>
                        <td class="Header">{{headers/t_exchange}}:</td>
                        <td class="Data">{{stocks/exchangeName}}</td>
                    </tr>
                    <tr>
                        <td class="Header">ISIN:</td>
                        <td class="Data">NL0011585146</td>
                    </tr>
                </table>
            </div>
            <div class="price-data">
                <table class="IRTable table-look responsive">
                    <tr>
                        <td class="Header">Sector:</td>
                        <td class="Data">Automobiles & Parts</td>
                    </tr>
                    <tr>
                        <td class="Header">Market segment:</td>
                        <td class="Data">MTA</td>
                    </tr>
                </table>
            </div>

        </div>


    </div>
</script>

<%= site.newFooter("IRProfile") %>