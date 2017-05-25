<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    //site.appendCustomCSSURL = "http://www.investorcom.co.uk/SharePriceChart/YOLOLTPlc.css";
    //if (!string.IsNullOrEmpty(Request.QueryString["ignoreCustomCSS"]))
    //{
    //    if (Request.QueryString["ignoreCustomCSS"].ToString() == "true")
    //    {
    //        site.appendCustomCSSURL = "";
    //    }
    //}    
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""https://fonts.googleapis.com/css?family=Lato:400,300italic,300,400italic,700,900"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <h2>{{headers/t_share_price}}</h2>

    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div>
                <div class="Data last">{{decimals stocks/last}}</div>
                <div class="currency">{{stocks/currency}}</div>
                <div class="Data change">{{decimals stocks/change}} {{stocks/currency}} ({{decimals stocks/changePercent}}%)</div>
                <div class="MQGo"></div>
            </div>
        </div>
    </div>
	
	<script type="text/javascript">
		$('.IRMiniquoteModule').click(function(){
			window.top.location.href = "http://www.morganadvancedmaterials.com/en-gb/investors/shareholder-centre/share-price-tools/"; 
		});
	</script>
	
</script>

<%= site.newFooter("IRMiniquote") %>