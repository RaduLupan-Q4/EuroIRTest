<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fast.fonts.net/cssapi/c8776784-5d75-432d-ae59-d50b8bc58a15.css"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Oswald"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule sharepriceWrapper"><span class="ajaxLoader">Loading</span></div>


<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniquoteModuleWrapper">
        <table class="IRMiniQuoteQuoteModule table-look responsive">

            <tr>
                <th class="Data last">{{decimals stocks/last}}  <span class="{{showArrow stocks/change}}"></span></th>
                <td class="currency">{{stocks/currency}}</td>
            </tr>
            <tr>
                <th class="Header change">{{headers/t_change}}</th>
                <td class="Data">{{decimals stocks/change}} ({{decimals stocks/changePercent}} %)</td>
            </tr>
            <tr>
                <th class="Header volume">{{headers/t_volume}}</th>
                <td class="Data delayed">{{stocks/volume}}</td>
            </tr>
            <tr>
                <th class="Header exchange">{{headers/t_exchange}}</th>
                <td class="Data delayed">Euronext Brussels<%--{{stocks/exchangeName}}--%></td>
            </tr>
        </table>
         <%--<div class="data-delayed">{{headers/t_data_is_15_min_delayed}} - <a class="link-target" href="//ir.euroinvestor.com/disclaimer/terms_conditions.aspx">{{headers/t_see_terms_of_use}}</a></div>--%>
    </div>
   
</script>

<%= site.newFooter("IRMiniquote") %>

