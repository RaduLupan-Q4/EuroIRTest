<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:400,300,700"" type=""text/css"" />";
   
    //site.appendCustomCSSURL = "http://www.investorcom.co.uk/SharePriceChart/KandCReit.css";
    if (!string.IsNullOrEmpty(Request.QueryString["ignoreCustomCSS"]))
    {
        if (Request.QueryString["ignoreCustomCSS"].ToString() == "true")
        {
            site.appendCustomCSSURL = "";
        }
    }
%>

<%= site.newHeader("IRQuote") %>


<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

    <!-- Profile -->
    <div class="profile-wrapper">

        <%--        <h2>{{stocks/name}} ({{stocks/symbol}})</h2>
        <b>Sector:</b> <br>
        <b>{{headers/t_share}} {{headers/t_price}}:</b> {{decimals stocks/last}}p<br>
        <b>{{headers/t_change}} {{headers/t_today}}:</b><span class="{{formatColour stocks/change}}">{{decimals stocks/change}}</span>
        <br>
        <b>{{headers/t_market_cap}}:</b> {{showMarketCapM stocks/marketCap}}m<br>--%>
        <div class="table-wrapper">
            <div class="company-listing-data">
                <%-- <h2>Company Listing Data</h2>--%>
                <table class="IRTable table-look responsive" id="profile-table">
                    <tr>
                        <td class="Header updated"></td>
                        <td class="Data profile updated">{{headers/t_updated}} : {{showDateTime timestamp}} </td>
                    </tr>
                    <tr>
                        <td class="Header profile epic top">{{headers/t_symbol}}</td>
                        <td class="Data profile epic top">{{stocks/symbol}}</td>
                    </tr>
                    <tr>
                        <td class="Header profile isin">{{headers/t_isin}}</td>
                        <td class="Data profile isin">DK0060670776</td>
                    </tr>
                    <tr>
                        <td class="Header profile sector">{{headers/t_sector}}</td>
                        <td class="Data profile sector">Banks</td>
                    </tr>
                    <tr>
                        <td class="Header profile currency top">{{headers/t_currency}}</td>
                        <td class="Data profile currency top">{{stocks/currency}}</td>
                    </tr>
                    <tr>
                        <td class="Header profile shares-issued">{{headers/t_number_of_shares}}</td>
                        <td class="Data profile shares-issued">{{decimals stocks/shareMillions}} m</td>
                    </tr>
                    <tr>
                        <td class="Header profile market-cap">{{headers/t_market_cap}}</td>
                        <td class="Data profile market-cap">{{showMarketCapM stocks/marketCap}} m</td>
                    </tr>
                    <tr>
                        <td class="Header profile highYear">{{headers/t_52w_high}}</td>
                        <td class="Data profile highYear">{{decimals stocks/highYear}}</td>
                    </tr>
                    <tr>
                        <td class="Header profile lowYear">{{headers/t_52w_low}}</td>
                        <td class="Data profile lowYear">{{decimals stocks/lowYear}}</td>
                    </tr>
                    <tr>
                        <td class="Header profile price">{{headers/t_last}} {{headers/t_price}}</td>
                        <td class="Data profile price">{{decimals stocks/last}}</td>
                    </tr>
                    <tr>
                        <td class="Header profile prev-close">{{headers/t_prev_close}} </td>
                        <td class="Data profile prev-close">{{decimals stocks/prevClose}}</td>
                    </tr>
                    <tr>
                        <td class="Header profile change">{{headers/t_change}}</td>
                        <td class="Data profile change"><span class="{{showArrow stocks/change}}"></span>{{decimals stocks/change}}</td>
                    </tr>
                    <tr>
                        <td class="Header profile changePercent">{{headers/t_change}} %</td>
                        <td class="Data profile changePercent"><span class="{{showArrow stocks/change}}"></span>{{decimals stocks/changePercent}}</td>
                    </tr>
                    <tr>
                        <td class="Header profile bidPrice">{{headers/t_bid_price}}</td>
                        <td class="Data profile bidPrice">{{decimals stocks/bid}}</td>
                    </tr>
                    <tr>
                        <td class="Header profile askPrice">{{headers/t_ask_price}}</td>
                        <td class="Data profile askPrice">{{decimals stocks/ask}}</td>
                    </tr>
                    <tr>
                        <td class="Header profile vol">{{headers/t_volume}}</td>
                        <td class="Data profile vol">{{toLocal stocks/volume}}</td>
                    </tr>
                    <tr>
                        <td class="Header profile low-value">{{headers/t_low}} {{headers/t_price}}</td>
                        <td class="Data profile low-value">{{decimals stocks/low}}</td>
                    </tr>
                    <tr>
                        <td class="Header profile high-value">{{headers/t_high}} {{headers/t_price}}</td>
                        <td class="Data profile high-value">{{decimals stocks/high}}</td>
                    </tr>

                </table>
            </div>
        </div>
    </div>
</script>

<%= site.newFooter("IRQuote") %>