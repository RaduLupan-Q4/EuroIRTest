<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();

    //site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>


<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="miniquoteDetailsWrapper main-data">
                <div>
                    <div class="Data change latest">{{headers/t_last}}</div>
                    <div class="Data last">{{decimals stocks/last}}</div>
                    <div class="Data change percentage">
                        {{headers/t_change}} (%)
                    </div>
                    <div id="Data-color">
                        <span class="lastChange">{{decimals stocks/change}} {{decimals stocks/changePercent}}% </span><span class="{{showArrow stocks/change}}"></span>
                    </div>
                    <div class="Data change">{{headers/t_data_as_of}} {{ showDate stocks/timestamp}} {{ showTime time}}</div>
                </div>
                <ul class="Data-list">
                    <li>
                        <div class="name">{{headers/t_volume}}</div>
                        <div class="value">{{stocks/volume}}</div>
                    </li>
                    <li>
                        <div class="name">{{headers/t_open}}</div>
                        <div class="value">{{stocks/open}}</div>
                    </li>
                    <li>
                        <div class="name">{{headers/t_prev_close}}</div>
                        <div class="value">{{stocks/prevClose}}</div>
                    </li>
                    <li>
                        <div class="name">{{headers/t_day_high}}</div>
                        <div class="value">{{stocks/high}}</div>
                    </li>
                    <li>
                        <div class="name">{{headers/t_day_low}}</div>
                        <div class="value">{{stocks/low}}</div>
                    </li>
                    <li>
                        <div class="name">{{headers/t_52w_high}}</div>
                        <div class="value">{{stocks/high52Week}}</div>
                    </li>
                    <li>
                        <div class="name">{{headers/t_52w_low}}</div>
                        <div class="value">{{stocks/low52Week}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</script>

<%= site.newFooter("IRQuote") %>

