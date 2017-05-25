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
                <%-- <h2>Company Listing Data</h2>--%>
                <table class="IRTable table-look responsive">
                    <tr>
                        <td class="Header topHeader">{{headers/t_share_series}}</td>
                        <td class="Data topHeader">RETAIL ESTATES SIR</td>              
                    </tr>
                    <tr>
                        <td class="Header date-listed">{{headers/t_time}}</td>
                        <td class="Data date-listed">{{showDateWithFormat timestamp 'DD-MM-YYYY HH:mm'}} ({{showLocalTimeZoneShort}})</td>
                    </tr>
                    <tr>
                        <td class="Header currency">{{headers/t_currency}}</td>
                        <td class="Data currency">{{showCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="Header market">{{headers/t_market}}</td>
                        <td class="Data market">Brussels</td>
                    </tr>

                    <tr>
                        <td class="Header isin">ISIN</td>
                        <td class="Data isin">BE0003720340</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">{{headers/t_symbol}}</td>
                        <td class="Data symbol">{{stocks/symbol}}</td>
                    </tr>
                    <tr>
                        <td class="Header bid">{{headers/t_bid}}</td>
                        <td class="Data bid">{{stocks/bid}}</td>
                    </tr>
                    <tr>
                        <td class="Header ask">{{headers/t_ask}}</td>
                        <td class="Data ask">{{stocks/ask}}</td>
                    </tr>
                    <tr>
                        <td class="Header open">{{headers/t_open}}</td>
                        <td class="Data open">{{stocks/open}}</td>
                    </tr>
                    <tr>
                        <td class="Header lastPrice">{{headers/t_last}}</td>
                        <td class="Data lastPrice">{{stocks/last}}</td>
                    </tr>
                    <tr>
                        <td class="Header change">{{headers/t_change}} +/-</td>
                        <td class="Data change {{formatColour stocks/change}}">{{stocks/change}} <span class="{{showArrow stocks/change}}"></span></td>
                    </tr>
                    <tr>
                        <td class="Header changePercent">{{headers/t_change}} %</td>
                        <td class="Data changePercent {{formatColour stocks/change}}">{{stocks/changePercent}} <span class="{{showArrow stocks/change}}"></span></td>
                    </tr>

                    <tr>
                        <td class="Header high">{{headers/t_high}}</td>
                        <td class="Data high">{{stocks/high}}</td>
                    </tr>
                    <tr>
                        <td class="Header low">{{headers/t_low}}</td>
                        <td class="Data low">{{stocks/low}}</td>
                    </tr>
                    <tr>
                        <td class="Header volume">{{headers/t_volume}}</td>
                        <td class="Data volume">{{toLocal stocks/volume}}</td>
                    </tr>

                    <tr>
                        <td class="Header previous-close">{{headers/t_previous_close}} </td>
                        <td class="Data prev-close">{{decimals stocks/prevClose}}</td>
                    </tr>


                    <tr>
                        <td class="Header weeks52high">{{headers/t_52weeks_high}}</td>
                        <td class="Data weeks52high">{{toLocal stocks/high52Week}}</td>
                    </tr>

                    <tr>
                        <td class="Header weeks52low">{{headers/t_52weeks_low}} </td>
                        <td class="Data weeks52low">{{decimals stocks/low52Week}}</td>
                    </tr>

                    <tr>
                        <td class="Header shares-issued">{{headers/t_number_of_shares}} (mil)</td>
                        <td class="Data shares-issued">{{toLocal stocks/shareMillions}}</td>
                    </tr>
                    <tr>
                        <td class="Header market-cap">{{headers/t_market_cap}} (mil)</td>
                        <td class="Data market-cap">{{showMarketCapM stocks/marketCap}}</td>
                    </tr>

                </table>
            </div>
            
        </div>
    </div>
</script>

<%= site.newFooter("IRChart") %>

