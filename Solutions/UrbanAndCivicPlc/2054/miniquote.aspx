<%@ page language="C#" autoeventwireup="true" %>

<%@ import namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,500,700,300""/>";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
           <div class="currencyDataChangeContainer">
              <div class="currency"><span class="Data last">{{decimals stocks/last}}p</span></div>
              <div class="rightCont">
                  <div class="Data change">{{headers/t_change}}: <span>{{decimals stocks/change}}p</span></div>
                  <div class="Data date">{{headers/t_date}}: <span>{{showDateWithFormat stocks/tradeTimestamp "DD.MM.YY"}}</span>
                  </div>
              </div>
            </div>
        </div>
</script>

<%= site.newFooter("IRMiniquote") %>

