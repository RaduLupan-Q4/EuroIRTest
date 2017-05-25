<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>


<%= site.newHeader("IRChart") %>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
    var activeFeatures = [];
</script>

<div class="IRQuoteModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
   
<div class="miniquotes">
        <div class="miniquotes-block first">
            <span class="miniquotes-header">Stock quote</span>
            <span class="miniquotes-header-time">{{showDateTime stocks/timestamp}}</span>
        </div>
        <div class="miniquotes-block">
            <iframe src="miniquote.aspx"></iframe>
        </div>
        
        <div class="miniquotes-block">
            <iframe src="miniquote.aspx?listing=1"></iframe>
        </div>
        
        <div class="miniquotes-block">
            <iframe src="miniquote.aspx?listing=2"></iframe>
        </div>
</div>
</script>

<%= site.newFooter("IRChart") %>
