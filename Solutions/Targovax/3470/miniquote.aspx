<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans"" type=""text/css"" />";
    //site.appendCustomCSSFont += @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Droid+Serif"" type=""text/css"" />";
%>
<%= site.newHeader("IRMiniquote") %>

<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>


<link rel="stylesheet" type="text/css" href="style/ie7.css" media="screen" />

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
			<div class="miniquoteDetailsWrapper">
				<div class="Data closeDate">OSE: {{stocks/symbol}} </div>
				<div class="Data last">{{toLocal stocks/last}} {{lowerIt stocks/currency}}</div>
			</div>
			<div class="miniquoteMoreDetailWrapper">
				<div class="Data volume">
					<span class="textLeft">{{headers/t_volume}}</span>
					<span class="spacingLine"></span>
					<span class="textRight">{{toLocal stocks/volume}}</span>
				</div>
				<div class="Data previousClose">
					<span class="textLeft">{{headers/t_previous_close}}</span>
					<span class="spacingLine"></span>
					<span class="textRight">{{toLocal stocks/prevClose}}</span>
				</div>
				<div class="Data marketCap">
				<span class="textLeft">{{headers/t_market_cap}}</span>
					<span class="spacingLine"></span>
					<span class="textRight">{{showMarketCapM stocks/marketCap}}M</span>
				</div>       
			</div>
		</div>
</script>
<div class="miniquoteDisclaimer">
    <%= site.newFooter("IRMiniquote") %>
</div>

<script type="text/javascript">
			Handlebars.registerHelper('lowerIt', function (str) {
				return str.toLowerCase();
			});
	$(document).ready(function(){
        $('.IRMiniquoteModule').css( 'cursor', 'pointer' );
        $('.IRMiniquoteModule').on('click', function() {
            window.parent.location.href = "https://targovax2017corp.q4web.com/Investors/share-information/Share-Information/default.aspx";
        });
    })
		</script>