<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRQuoteModule">
<!--
        <div class="companyInfoWrapper">
            
            <div class="updated"><span>{{showTime timestamp}} ET on {{showDateWithFormat timestamp 'DD MMM, YYYY'}}</span></div>
        </div>
-->

        <table class="IRQuoteModule table-look horizontal customResponsive">
            <tr>
                <th class="Header column-first">{{headers/t_open}}</th>
                <th class="Header">Prev. {{headers/t_close}}</th>
                <th class="Header">{{headers/t_52w_high}}</th>
                <th class="Header date">{{headers/t_52w_high_date}}</th>
                <th class="Header">{{headers/t_52w_low}}</th>
                <th class="Header date">{{headers/t_52w_low_date}}</th>
            </tr>
            <tr>
                <td class="Data column-first">{{decimals stocks/open}}</td>
                <td class="Data">{{decimals stocks/prevClose}}</td>
                <td class="Data">{{decimals stocks/high52Week}}</td>
                <td class="Data date">{{showDate stocks/high52WeekDate}}</td>
                <td class="Data">{{decimals stocks/low52Week}}</td>
                <td class="Data date">{{showDate stocks/low52WeekDate}}</td>
            </tr>
          
        </table>
        <div class="updated">Updated: {{showDateWithFormat timestamp 'DD MMM, YYYY HH:MM'}} {{showLocalTimeZoneShort}}</div>
    </div>
</script>
<div class="miniquoteDisclaimer" style="display: none;">
    <%= site.newFooter("IRQuote") %>
</div>

<%--<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>--%>





