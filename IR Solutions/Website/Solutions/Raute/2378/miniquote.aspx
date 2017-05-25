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
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="stock-name">
                <div class="data-name block">
                    <div class="Data">{{stocks/name}}</div>      
                </div>
                <div class="data-price block">
                    <div class="Latest">{{headers/t_latest}}</div>
                    <div class="Data">{{decimals stocks/last}}</div>
                </div>
                <div class="block">
                	<div class="Data block">{{decimals stocks/changePercent}}% <span class="{{showArrow stocks/changePercent}}"></span></div>
                </div>
                <div class="block">
                	<div class="Data closeDate block">{{showDate stocks/timestamp}} {{showTime time}} </div>
                </div>
            </div>
                     
        </div>
    </div>
</script>
<div class="miniquoteDisclaimer">
    <%= site.newFooter("IRQuote") %>
</div>


