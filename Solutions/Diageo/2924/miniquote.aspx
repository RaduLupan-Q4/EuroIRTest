<%@ page language="C#" autoeventwireup="true" %>

<%@ import namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">

    <div class="IRMiniQuoteQuoteModule table-look responsive">
       <div>{{headers/t_share_price}}:
           <span class="stock-symbol">{{stocks/symbol}}</span>
           <span class="currency">{{decimals stocks/last}}p</span>
           <span class="Data change {{formatColour stocks/change}}">{{decimals stocks/changePercent}}% </span>
       </div>
    </div>
</script>


<%= site.newFooter("IRMiniquote") %>

