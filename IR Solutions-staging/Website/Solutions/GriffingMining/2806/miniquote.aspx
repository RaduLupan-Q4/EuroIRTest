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
<div class="goldZincContainer">
  <div class="gold">
      <div class="gzText">{{stocks.0/name}}
        <div class="gzData">
                <div class="Data change {{formatColour stocks/change}}">{{decimals stocks.0/last}} {{stocks.0/currency}} ({{decimals stocks.0/changePercent}} %) <span  class="{{showArrow stocks/change}} arrowBottom"></div>
          </div>
      </div>
  </div>
  <div class="zinc">
      <div class="gzText">{{stocks.1/name}}
          <div class="gzData">
                <div class="Data change {{formatColour stocks/change}}">{{decimals stocks.1/last}} {{stocks.1/currency}} ({{decimals stocks.1/changePercent}} %) <span  class="{{showArrow stocks/change}} arrowBottom"></div>
          </div>
      </div>
  </div>
</div>

</script>
<%= site.footer("IRQuote") %>

