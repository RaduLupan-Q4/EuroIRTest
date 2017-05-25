﻿<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fast.fonts.net/cssapi/c8776784-5d75-432d-ae59-d50b8bc58a15.css"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700"" type=""text/css"" />";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Oswald"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule sharepriceWrapper"><span class="ajaxLoader">Loading</span></div>


<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniquoteModuleWrapper">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div>
                <div class="Data last">{{decimals stocks/last}}</div>
                <div class="currency">p<%--{{stocks/currency}}--%> <span class="{{showArrow stocks/change}}"></span><span class="Data change">{{decimals stocks/change}}</span></div>
				
            </div>
            <div class="clear"></div>
            <div class="Data updatedTimestamp">{{headers/t_updated}}: {{showDateWithFormat timestamp 'MMMM Do YYYY, h:mm a'}}</div>
			
            <!-- <div class="Data change">{{headers/t_change}}: {{decimals stocks/change}} {{decimals stocks/changePercent}} %</div> -->
            <!-- <div class="Data delayed">{{headers/t_market_cap}} {{showLondonMarketCapM stocks/marketCap}}M </div>  -->
        </div>
    </div></div>
</script>

<%= site.newFooter("IRMiniquote") %>

