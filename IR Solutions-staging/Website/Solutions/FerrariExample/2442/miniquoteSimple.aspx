<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
     site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <h2>Share Price</h2>
    <div class="IRMiniQuoteQuoteModule responsive">
        <div class="miniquoteDetailsWrapper ferrariExample" style="border-top: 0; border-bottom: 0;">
            <div class="miniquoteSimpeWrapper" style="text-align: left;">
                <div class="Data last">{{stocks/currency}} <span style="font-size: 24px;">{{decimals stocks/last}}</span><span class="{{formatColour stocks/change}} miniquoteSimpleChange" style="font-size: 14px; padding-left: 20px;"> {{decimals stocks/change}} ({{decimals stocks/changePercent}}%) <span class="{{showArrow stocks/change}}"></span></span></div>
                <div class="timestamp">{{headers/t_updated}}: {{showTime timestamp}}</div>
            </div>
        </div>
    </div>
</script>
<div style="display: none;">
    <%= site.newFooter("IRMiniquote") %>
</div>


