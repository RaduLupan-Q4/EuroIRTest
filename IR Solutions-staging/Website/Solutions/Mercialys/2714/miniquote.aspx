<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>

<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

    <div class="companyName">MERCIALYS</div>
    <table class="IRQuoteModule table-look vertical customResponsiveVertical miniquote">
            <tr>
                <th class="Header last">{{headers/t_last}}</th>
                <td class="Data last">{{decimals stocks/last}}</td>
            </tr>
            <tr>
                <th class="Header close">{{headers/t_close}}</th>
                <td class="Data close">{{decimals stocks/prevClose}}</td>
            </tr>
            <tr>
                <th class="Header change">{{headers/t_change}} %</th>
                <td class="Data change {{formatColour stocks/changePercent}}">{{decimals stocks/changePercent}}% </td>
            </tr>
            <tr>
                <th class="Header open">{{headers/t_open}}</th>
                <td class="Data open">{{decimals stocks/open}}</td>
            </tr>    
            <tr>
                <th class="Header dayHigh">{{headers/t_high}}</th>
                <td class="Data dayHigh">{{decimals stocks/high}}</td>
            </tr>
            <tr>
                <th class="Header dayLow">{{headers/t_low}}</th>
                <td class="Data dayLow">{{decimals stocks/low}}</td>
            </tr>
            <tr>
                <th class="Header volume">{{headers/t_volume}}</th>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
            </tr>
            <tr>
                <th></th>
                <td></td>
            </tr>
            <tr>
                <th class="Header yearHigh">{{headers/t_52w_high}}</th>
                <td class="Data yearHigh">{{decimals stocks/highYear}}</td>
            </tr>
            <tr>
                <th class="Header yearLow">{{headers/t_52w_low}}</th>
                <td class="Data yearLow">{{decimals stocks/lowYear}}</td>
            </tr>
            <tr>
                <th class="Header IPOprice">{{headers/t_ipo_price}} - 10/12/2005</th>
                <td class="Data IPOprice">18.13</td>
            </tr>
    </table>

</script>
    
<%= site.newFooter("IRChart") %>



