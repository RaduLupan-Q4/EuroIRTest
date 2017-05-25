<%@ Page Language="C#" AutoEventWireup="true" %>

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
            <div class="price-data">
                <table class="IRTable table-look responsive">
                    <tbody>
                        <tr>
                            <th class="Header currency top">{{headers/t_symbol}}</th>
                            <td class="Data currency top">{{stocks/symbol}}</td>
                        </tr>
                        <tr>
                            <th class="Header currency top">{{headers/t_currency}}</th>
                            <td class="Data currency top">{{stocks/currency}}</td>
                        </tr>
                        <tr>
                            <th class="Header price">{{headers/t_last}} {{headers/t_price}}</th>
                            <td class="Data price">{{decimals stocks/last}}</td>
                        </tr>
                        <tr>
                            <th class="Header change">{{headers/t_change}} {{headers/t_today}}</th>
                            <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} <span class="{{showArrow stocks/change}}"></span></td>
                        </tr>
                        <tr>
                            <th class="Header volume">{{headers/t_volume}}</th>
                            <td class="Data volume">{{toLocal stocks/volume}}</td>
                        </tr>
                        <tr>
                            <th class="Header prev-close">{{headers/t_prev_close}} </th>
                            <td class="Data prev-close">{{decimals stocks/prevClose}}</td>
                        </tr>
                        <tr>
                            <th class="Header prev-close">{{headers/t_high}} </th>
                            <td class="Data prev-close">{{decimals stocks/high}}</td>
                        </tr>
                        <tr>
                            <th class="Header prev-close">{{headers/t_low}} </th>
                            <td class="Data prev-close">{{decimals stocks/low}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
</script> 
 
<%= site.newFooter("IRQuote") %>
