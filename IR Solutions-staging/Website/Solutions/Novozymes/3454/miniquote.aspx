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
        <div class="companyInfoWrapper">
            <div class="chartName">{{stocks/name}} (<%--{{stocks/exchangeName}}--%>OMX: {{stocks/symbol}})</div>
            <div class="updated"><%--<span>{{headers/t_updated}}: </span>--%><span>{{showTime timestamp}} ET on {{showDateWithFormat timestamp 'DD MMM, YYYY'}}</span></div>
        </div>

        <table class="IRQuoteModule table-look horizontal customResponsive">
            <tr>
                <th class="Header last column-first">{{headers/t_last}} {{headers/t_price}}</th>
                <th class="Header change">{{headers/t_change}}</th>
                <th class="Header open">{{headers/t_open}}</th>
                <th class="Header high">{{headers/t_high}}</th>
                <th class="Header yearHigh column-last">{{headers/t_52w_high}}</th>
            </tr>
            <tr>
                <td class="Data symbol column-first" rowspan="3" style="vertical-align: middle" id="chartLast">{{decimals stocks/last}}</td>
                <%--<td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>--%>
                <td class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} <span class="{{showArrow stocks/change}}"></span>({{decimals stocks/changePercent}}%) </td>
                <td class="Data open">{{decimals stocks/open}}</td>
                <td class="Data high">{{decimals stocks/high}}</td>
                <td class="Data yearHigh column-last">{{decimals stocks/high52Week}}</td>

                <%--<td class="Data Timestamp column-last"id="hideD">{{showDateTime stocks/timestamp}}</td>--%>
            </tr>
            <tr>
                <th class="Header volume">{{headers/t_volume}}</th>
                <th class="Header prevClose">{{headers/t_prev_close}}</th>
                <th class="Header low">{{headers/t_low}}</th>
                <th class="Header yearLow column-last">{{headers/t_52w_low}}</th>
                <%--<th class="Header Timestamp column-last " id="hideH">{{headers/t_time}}</th>--%>
            </tr>
            <tr>
                <td class="Data volume">{{toLocal stocks/volume}}</td>
                <td class="Data prevClose">{{decimals stocks/prevClose}}</td>
                <td class="Data low">{{decimals stocks/low}}</td>
                <td class="Data yearLow column-last">{{decimals stocks/low52Week}}</td>
            </tr>
        </table>
    </div>
</script>


<div class="miniquoteDisclaimer">
    <%= site.newFooter("IRMiniquote") %>
</div>



<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>


<script type="text/javascript">

    $(document).ready(function () {
        if (window.location.search == '?language=da') {
            $('.disclaimer').css('display', 'none');
        } else {
            $('.disclaimer').css('display', 'none');
        }
    }); 
</script>


