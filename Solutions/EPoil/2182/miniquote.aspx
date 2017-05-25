<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <h2>Investor Relations</h2>
    <div class="subHeader">{{headers/t_share_price}}</div>
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="Data last">{{decimals stocks/last}}</div>
            <div class="currency">{{stocks/currency}}</div>
            <br />
            <br />
            <div class="Data changeR">{{headers/t_change}}:&nbsp;&nbsp;</div>
            <div class="Data change"> <span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}}&nbsp;&nbsp;({{decimals stocks/changePercent}}%) </div>
            <br />
            <br />
            <div class="Data delayed">Data is delayed by {{headers/t_15_minutes}} </div>
            <div class="divideLine"></div>
            <div class="subHeader">Crude Palm Oil Price</div>
            <div class="Data last2">{{decimals stocks/last}}</div>
            <div class="currency2">{{stocks/currency}}</div>
            <br />
            <br />
            <br />
            <div class="Data changeR2">{{headers/t_change}}:&nbsp;&nbsp;</div>
            <div class="Data change2"> <span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}}&nbsp;&nbsp;({{decimals stocks/changePercent}}%) </div>
            <div class="divideLine"></div>
        </div>
       
    </div>
</script>

<%= site.newFooter("IRMiniquote") %>

