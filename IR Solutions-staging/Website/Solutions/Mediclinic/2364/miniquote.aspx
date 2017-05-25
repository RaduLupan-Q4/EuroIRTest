<%@ page language="C#" autoeventwireup="true" %>

<%@ import namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSURL = "http://fonts.googleapis.com/css?family=Open+Sans";
%>
<%= site.header("IRQuote") %>

<script type="text/javascript">
    var activeModules = ['IRQuoteMulti'];
</script>

<div class="IRQuoteModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRQuoteMultiTableTemplate" type="text/x-handlebars-template">

    <div class="col-sm-7">
        <h1>Share Performance</h1>

        <div class="share">
	        <h4>LSE ({{stocks.0/symbol}})</h4>
            <p>As at {{showDateWithFormat stocks.0/timestamp 'DD MMM YYYY HH:MM'}}</p>
	        <p>
                <span>{{decimals stocks.0/last}}</span> GBP {{decimals stocks.0/change}} <span class="{{showArrow stocks.0/change}}"></span>

	        </p>
        </div>
        
        <div class="share">
	        <h4>JSE ({{stocks.1/symbol}})</h4>
	        <p>As at {{showDateWithFormat stocks.1/tradeTimestamp 'DD MMM YYYY HH:MM'}}</p>
	        <p>
                <span>{{toLocal stocks.1/last}} </span> ZAR {{decimals stocks.1/change}} <span class="{{showArrow stocks.1/change}}"></span>
	        </p>
        </div>
          <div class="miniquoteDisclaimer">
            Data delayed 15-20 min. <a href="http://ir.euroinvestor.com/disclaimer/terms_conditions.aspx" class="link-target">See Terms.</a>
        </div>
    </div>
    
</script>

<%= site.footer("IRQuote") %>

