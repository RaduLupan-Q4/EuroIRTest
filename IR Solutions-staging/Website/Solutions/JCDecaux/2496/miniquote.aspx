<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    //site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>
<style>

    body{background:transparent;}
</style>


<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>



<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule">
        <div class="miniquoteDetailsWrapper">
            <div>
                <div class="Data last">&euro;{{decimals stocks/last}}</div>
                <div class="currency"></div>
            </div>
            <div class="Data change"><span class="decimals"><span class="{{showArrow stocks/change}} arrow"></span>{{plusOrMinus stocks/changePercent}}{{decimals stocks/changePercent}}%</span></div>
            <div class="Data updated">{{showDateWithFormat timestamp 'DD/MM/YYYY'}}</div>
            <div class="Data name">JCDecaux (Euronext: {{stocks/symbol}})</div>
        </div>
    </div>
</script>
<div class="miniquoteDisclaimerWrapper">
    <%= site.newFooter("IRQuote") %>
</div>

<script>
    Handlebars.registerHelper('plusOrMinus', function (stock) {

        if (stock > 0) {
            return "+";
        } else {
            return "";
        }
    });
</script>