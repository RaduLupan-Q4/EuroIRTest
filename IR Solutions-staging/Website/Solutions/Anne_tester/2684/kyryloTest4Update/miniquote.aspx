<%@ page language="C#" autoeventwireup="true" %>

<%@ import namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<link rel="stylesheet" type="text/css" media="screen" href="ir.client.css" />



<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
<h2>{{headers/t_share_price}}<span class="stock-symbol">({{stocks/symbol}})</span></h2>
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
           <div class="currencyDataChangeContainer">
                <div class="currency">{{stocks/currency}}<span class="Data last"></span>{{decimals stocks/last}}</div>
                <span class='up'></span>
                <div class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}} %) </div>
            </div>
            <br/>
            <div class="Data closeDate">Last update: {{showDateWithFormat stocks/timestamp "DD MMM YYYY HH:MM"}} </div> 
              
            
        </div>
    </div>
</script>


<%= site.newFooter("IRMiniquote") %>

