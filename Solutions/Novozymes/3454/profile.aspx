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
<%--<link rel="stylesheet" media="print" href="http://localhost/solutions/Novozymes/3454/css/printProfile.css">--%>
<link  href="css/printProfile.css" rel="stylesheet" />

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
                        <td class="Data topHeader">Novozymes B (COP)</td>              
                    </tr>
                    <tr>
                        <td class="Header date-listed">{{headers/t_time}}</td>
                        <td class="Data date-listed">{{showDateWithFormat timestamp 'DD/MM/YYYY HH:mm'}} {{showLocalTimeZoneShort}}</td>
                    </tr>
                    <tr>
                        <td class="Header currency">{{headers/t_currency}}</td>
                        <td class="Data currency">{{showCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="Header market">{{headers/t_market}}</td>
                        <td class="Data market">Copenhagen</td>
                    </tr>

                    <tr>
                        <td class="Header isin">ISIN</td>
                        <td class="Data isin">DK0060336014</td>
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
                        <td class="Header shares-issued">{{headers/t_shares_issued}}</td>
                        <td class="Data shares-issued">{{toLocal stocks/shareMillions}}m</td>
                    </tr>
                    <tr>
                        <td class="Header market-cap">{{headers/t_market_cap}}</td>
                        <td class="Data market-cap">{{showMarketCapM stocks/marketCap}}m</td>
                    </tr>

                </table>
            </div>
            <%-- <div class="price-data">
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
                            <td class="Data market-cap">{{showLondonMarketCapM stocks/marketCap}}m</td>
                        </tr>
                    </tbody>
                </table>
            </div>--%>
            
        </div>
    </div>
</script>
<button class="printBtnProfile"></button>
<%= site.newFooter("IRChart") %>

<script type="text/javascript">
    
    $(document).ready(function() {
        if (window.location.search == '?language=da') {
            $('.disclaimer').css('display', 'none');
        } else {
            $('.disclaimer').css('display', 'block');
        }
        
        $('.printBtnProfile').on('click', function() {
            window.print();
            
        });
        
    });
</script>
