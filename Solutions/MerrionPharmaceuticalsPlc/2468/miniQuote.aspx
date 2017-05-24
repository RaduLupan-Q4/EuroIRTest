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
        <h3>Stock information</h3>
        <table class="IRMiniQuoteQuoteModule table-look responsive">
            <tr>
                <th class="Header ticker">Ticker </th>
                <td class="Data ticker">{{stocks/symbol}}</td>
            </tr>
            <tr>
                <th class="Header exchange">{{headers/t_exchange}}</th>
                <td class="Data exchange">ISE</td>
            </tr>
            <tr>
                <th class="Header price">{{headers/t_price}} </th>
                <td class="Data price">€ {{decimals stocks/last}}</td>
            </tr>
            <tr>
                <th class="Header change">{{headers/t_change}}</th>
                <td class="Data change"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}}  </td>
            </tr>
            <tr>
                <th class="Header volume">{{headers/t_volume}}</th>
                <td class="Data volume">{{stocks/volume}}</td>
            </tr>
            
        </table>
         <div class="data-delayed">{{showDateWithFormat timestamp 'MMM DD, YYYY - hh:mm'}}</div>
    </div>
   
</script>

<%= site.newFooter("IRMiniquote") %>

