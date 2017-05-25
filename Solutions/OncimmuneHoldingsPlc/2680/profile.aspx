﻿<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
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
        <div class="profile-wrapper-top">
        <h2>{{stocks/name}} ({{stocks/symbol}})</h2>
        <span class="profile-top">Sector:</span> <span class="profile-top-data">Pharmaceuticals & Biotechnology</span><br>
        <span class="profile-top">{{headers/t_share}} {{headers/t_price}}:</span class="profile-top"> <span class="profile-top-data">{{decimals stocks/last}}p</span><br>
        <span class="profile-top">{{headers/t_change}} {{headers/t_today}}:</span><span class="{{formatColour stocks/change}} profile-top-data">{{decimals stocks/change}}</span>
        <br>
        <span class="profile-top">{{headers/t_market_cap}}:</span> <span class="profile-top-data">£{{showLondonMarketCapM stocks/marketCap}}m </span><br>
        </div>
        <div class="table-wrapper">
            <div class="company-listing-data">
                <h2>Company Listing Data</h2>
                <table class="IRTable table-look responsive">
                    <tr>
                        <td class="Header epic top">EPIC</td>
                        <td class="Data epic top">{{stocks/symbol}}</td>
                    </tr>
                    <tr>
                        <td class="Header sector">Sector</td>
                        <td class="Data sector">Pharmaceuticals & Biotechnology</td>
                    </tr>
                    <tr>
                        <td class="Header sedol">SEDOL</td>
                        <td class="Data sedol">BYQ94H3</td>
                    </tr>
                    <tr>
                        <td class="Header isin">ISIN</td> 
                        <td class="Data isin">GB00BYQ94H38</td>
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
                        <td class="Data country">GB</td> 
                    </tr>
                    <tr>
                        <td class="Header currency">{{headers/t_currency}}</td>
                        <td class="Data currency">British Pence</td>
                    </tr>
                    <tr>
                        <td class="Header date-listed">Date Listed</td>
                        <td class="Data date-listed">05-11-2012</td>
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
