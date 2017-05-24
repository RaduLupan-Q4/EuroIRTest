<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>
  
<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule">
        <div class="miniquoteDetailsWrapper">

            <div class="exchangeName">
               {{stocks/exchangeName}}
            </div>
            <div class="Data change {{formatColour stocks/change}}"> {{decimals stocks/change}} ({{decimals stocks/changePercent}}%)
            </div>
            <div class="link-to-chart">
                <span><a href="//www.tmr.sk/investor-relations/shares/">{{headers/t_more}} <span class="link-image"><img src="images/arrow.png" /></span></a></span>
            </div>

        </div>
    </div>
</script>
<%= site.newFooter("IRMiniquote") %>

