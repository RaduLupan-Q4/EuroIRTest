<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();

%>

<%= site.newHeader("IRQuote") %>


<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

    <!-- Summary -->

    <div class="summary-wrapper">
        <div class="table-wrapper">
            <div class="company-listing-data">
   <%--             <h2>Company Listing Data</h2>--%>
                <table class="IRTable table-look responsive">
                    <tr>
                        <td class="Header currency top">{{headers/t_price}} ({{stocks/currency}})</td>
                        <td class="Data lastChange">{{decimals stocks/last}} <span class="{{showArrow stocks/change}}"></span></td>
                    </tr>
                    <tr>
                        <td class="Header change">{{headers/t_change}}</td>
                        <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}}</td>
                    </tr>
                    <tr>
                        <td class="Header changePercent">% {{headers/t_change}}</td>
                         <td class="Data changePercent formatColour">{{decimals stocks/changePercent}}</td>
                    </tr>
                    <tr>
                        <td class="Header">{{headers/t_bid}}</td>
                        <td class="Data top">{{stocks/bid}}</td>
                    </tr>
                    <tr>
                         <td class="Header">{{headers/t_ask}}</td>
                       <td class="Data top">{{stocks/ask}}</td>
                    </tr>
                    <tr class="last-row">
                         <td class="Header">{{headers/t_volume}}</td>
                        <td class="Data">{{stocks/volume}}</td>
                    </tr>
                </table>
            </div>
            <div class="price-data">
                <table class="IRTable table-look responsive">
                    <tbody>
                        <tr>
                            <td class="Header open top">{{headers/t_open}}</td>
                            <td class="Data open top">{{stocks/open}}</td>
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
                            <td class="Header prev-close">{{headers/t_prev_close}} </td>
                            <td class="Data prev-close">{{decimals stocks/prevClose}}p</td>
                        </tr>
                        <tr>
                            <td class="Header high52week">{{headers/t_52w_high}}</th>
                            <td class="Data high52week">{{decimals stocks/high52Week}}</td>
                        </tr>
                        <tr class="last-row">
                            <td class="Header low52week">{{headers/t_52w_low}}</th>
                            <td class="Data low52week">{{decimals stocks/low52Week}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</script>

<%= site.newFooter("IRQuote") %>