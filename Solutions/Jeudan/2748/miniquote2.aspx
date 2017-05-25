<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700""/>";
%>
<% string language = "en";
    language = Request["language"];

    if (language != "da")
    {
        language = "en";
    }
%>
<%= site.newHeader("IRChart") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <script type="text/javascript">
     var activeModules = ['IRQuote'];
     var activeFeatures = [];
 </script>

    <div class="IRQuoteModule"></div>

    <br />
    <script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <div class="companyInfoWrapper miniquote2">
        <div class="chartName">{{stocks/name}}</div>
    </div>

    <table class="IRQuoteModule table-look horizontal customResponsive miniquote2">
        <tr>
            <th class="Header last column-first">{{headers/t_last}}</th>
            <th class="Header change">{{headers/t_change}}</th>
            <th class="Header open">{{headers/t_open}}</th>
            <th class="Header high">{{headers/t_high}}</th>
            <th class="Header yearHigh column-last">{{headers/t_52w_high}}</th>
        </tr>
        <tr>
            <td class="Data symbol column-first miniquote2 chartLast" rowspan="3" style="vertical-align: middle">{{decimals stocks/last}}</td>
            
            <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} <span class="{{showArrow stocks/change}}"></span> ({{decimals stocks/changePercent}}%) </td>
            <td class="Data open">{{decimals stocks/open}}</td>
            <td class="Data high">{{decimals stocks/high}}</td>
            <td class="Data high column-last">{{decimals stocks/high52Week}}</td>

            
        </tr>
        <tr>
            <th class="Header volume">{{headers/t_volume}}</th>
            <th class="Header prevClose">{{headers/t_prev_close}}</th>
            <th class="Header low">{{headers/t_low}}</th>
            <th class="Header low column-last">{{headers/t_52w_low}}</th>
            
        </tr>
        <tr>
            <td class="Data volume">{{toLocal stocks/volume}}</td>
            <td class="Data prevClose">{{decimals stocks/prevClose}}</td>
            <td class="Data low">{{decimals stocks/low}}</td>
            <td class="Data low column-last">{{decimals stocks/low52Week}}</td>
        </tr>
    </table>
         <div class="updated miniquote2"><span>{{showTime stocks/timestamp}}</span></div>
</script>



<div class="chartDisclaimer">
    <%= site.newFooter("IRChart") %>
</div>

