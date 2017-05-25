<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";

%>

<%= site.newHeader("IRQuote") %>


<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

    <!-- Profile -->
    <div class="profile-wrapper">
        <%--<h2>{{stocks/name}} ({{stocks/symbol}})</h2>--%>
        <%--<table class="profileWrapperTable left table-look">
            <tbody>
                <tr>
                    <td class="Header">Sector: </td>
                    <td class="Data">Pharmaceuticals & Biotechnology</td>
                </tr>
                <tr>
                    <td class="Header">{{headers/t_share}} {{headers/t_price}}: </td>
                    <td class="Data">{{decimals stocks/last}}p</td>
                </tr>
            </tbody>
        </table>
         <table class="profileWrapperTable right table-look">
            <tbody>
                <tr>
                    <td class="Header">{{headers/t_change}} {{headers/t_today}}: </td>
                    <td class="Data"><span class="{{formatColour stocks/change}}">{{decimals stocks/change}}</span></td>
                </tr>
                <tr>
                    <td class="Header">{{headers/t_market_cap}}:</td>
                    <td class="Data">£{{showLondonMarketCapM stocks/marketCap}}m</td>
                </tr>

            </tbody>
        </table>--%>
         <div class="price-data">
                <%--<h2>{{headers/t_price}} Data</h2>--%>
                <table class="IRTable table-look responsive">
                    <tbody>
                         <tr>
                            <td class="Header price">{{headers/t_price}}</td>
                            <td class="Data price"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/last}}</td>
                        </tr>
                        <tr>
                            <td class="Header change">{{headers/t_today}}'s {{headers/t_open}}</td>
                            <td class="Data change">{{decimals stocks/open}}</td>
                        </tr>
                         <tr>
                            <td class="Header change">{{headers/t_change}} </td>
                            <td class="Data change <%--{{formatColour stocks/change}}--%>">{{decimals stocks/change}}</td>
                        </tr>
                         <tr>
                            <td class="Header change">{{headers/t_today}}'s {{headers/t_high}}</td>
                            <td class="Data change">{{decimals stocks/high}}</td>
                        </tr> 
                         <tr>
                            <td class="Header change">% {{headers/t_change}} </td>
                            <td class="Data change <%--{{formatColour stocks/change}}--%>"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/changePercent}} %</td>
                        </tr>
                         <tr>
                            <td class="Header change">{{headers/t_today}}'s {{headers/t_low}}</td>
                            <td class="Data change">{{decimals stocks/low}}</td>
                        </tr> 
                         <tr>
                            <td class="Header change">{{headers/t_bid}}</td>
                            <td class="Data change">{{decimals stocks/bid}}</td>
                        </tr> 
                        <tr>
                            <td class="Header change">{{headers/t_previous_close}}</td>
                            <td class="Data change">{{decimals stocks/prevClose}}</td>
                        </tr> 

                        <tr>
                            <td class="Header volume">{{headers/t_ask}}</td>
                            <td class="Data volume">{{decimals stocks/ask}}</td>
                        </tr>
                        <tr>
                            <td class="Header volume">{{headers/t_52weeks_high}}</td>
                            <td class="Data volume">{{decimals stocks/high52Week}}</td>
                        </tr>
                        <tr>
                            <td class="Header volume">{{headers/t_volume}}</td>
                            <td class="Data volume">{{toLocal stocks/volume}}</td>
                        </tr>
                        <tr>
                            <td class="Header volume">{{headers/t_52weeks_low}}</td>
                            <td class="Data volume">{{decimals stocks/low52Week}}</td>
                        </tr>
                       <%-- <tr>
                            <td class="Header currency top">{{headers/t_currency}}</td>
                            <td class="Data currency top">{{stocks/currency}}</td>
                        </tr>
                       
                       
                        <tr>
                            <td class="Header volume">{{headers/t_volume}}</td>
                            <td class="Data volume">{{toLocal stocks/volume}}</td>
                        </tr>
                                       <tr>
                            <td class="Header shares-issued">Shares Issued</td>
                            <td class="Data shares-issued">{{decimals stocks/shareMillions}}m</td>
                        </tr>
                        <tr>
                            <td class="Header market-cap">{{headers/t_market_cap}}</td>
                            <td class="Data market-cap">£{{showLondonMarketCapM stocks/marketCap}}m</td>
                        </tr>--%>
                    </tbody>
                </table>
            </div>
        <%--<div class="table-wrapper">
            <div class="company-listing-data">
                <h2>Company Listing Data</h2>
                <table class="IRTable table-look responsive">
                    <tr>
                        <td class="Header epic top">EPIC</td>
                        <td class="Data epic top"><b>{{stocks/symbol}}</b></td>
                    </tr>
                    <tr>
                        <td class="Header sector">Sector</td>
                        <td class="Data sector">Nondurable Household Products</td>
                    </tr>
                    <tr>
                        <td class="Header sedol">SEDOL</td>
                        <td class="Data sedol">BZ6VT59</td>
                    </tr>
                    <tr>
                        <td class="Header isin">ISIN</td>
                        <td class="Data isin">GB00BZ6VT592</td>
                    </tr>
                    <tr>
                        <td class="Header market-sector">Market Sector</td>
                        <td class="Data market-sector">AIM</td>
                    </tr>
                    <tr>
                        <td class="Header market-segment">Market Segment</td>
                        <td class="Data market-segment">ASQ1</td>
                    </tr>
                    <tr>
                        <td class="Header country">Country of register</td>
                        <td class="Data country">England & Wales</td>
                    </tr>
                    <tr>
                        <td class="Header currency">{{headers/t_currency}}</td>
                        <td class="Data currency">British Pence</td>
                    </tr>
                    <tr>
                        <td class="Header nms">IMS</td>
                        <td class="Data nms">2,500</td>
                    </tr>
                    <tr>
                        <td class="Header date-listed">Date Listed</td>
                        <td class="Data date-listed">10/06/2016</td>
                    </tr>
                </table>
            </div>
           
        </div>--%>
    </div>
</script>

<%= site.newFooter("IRChart") %>