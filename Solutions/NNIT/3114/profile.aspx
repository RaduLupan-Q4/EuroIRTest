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
                
                <table class="IRTable table-look responsive">
                   <tr>
                        <td class="Header symbol">{{headers/t_trading}} {{headers/t_symbol}}</td>
                        <td class="Data symbol">{{stocks/symbol}}</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">Identification number / ISIN</td>
                        <td class="Data symbol">DK0060580512</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">GICS</td>
                        <td class="Data symbol">45102010 IT Consulting & Other Services</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">{{headers/t_industry}}</td>
                        <td class="Data symbol">9000 Technology</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">Supersector</td>
                        <td class="Data symbol">9500 Technology</td>
                    </tr>
                    <tr>
                        <td class="Header symbol">{{headers/t_sector}}</td>
                        <td class="Data symbol">9530 Software and Computer Services</td>
                    </tr>
                    <tr>
                        <td class="Header topHeader">Subsector</td>
                        <td class="Data topHeader">9000 Computer Services</td>              
                    </tr>
                    <tr>
                        <td class="Header topHeader">Segment</td>
                        <td class="Data topHeader">Mid Cap</td>              
                    </tr>
                    <tr>
                        <td class="Header topHeader">Share capital (DKK)</td>
                        <td class="Data topHeader">250,000,000</td>              
                    </tr>
                    <tr>
                        <td class="Header topHeader">Number of shares</td>
                        <td class="Data topHeader">25,000,000</td>              
                    </tr>
                    <tr>
                        <td class="Header topHeader">Nominal value (DKK)</td>
                        <td class="Data topHeader">10</td>              
                    </tr>
                    <tr>
                        <td class="Header topHeader">Free float (excl. treasury shares)</td>
                        <td class="Data topHeader">46%</td>              
                    </tr>
                </table>
                <p class="textProfile">Data as per end of December 2015</p>
            </div>
        </div>
    </div>
</script>
<%= site.newFooter("IRChart") %>
