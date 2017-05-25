<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRQuote") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteModule"></div>

<%= site.newFooter("IRQuote") %>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <div class="sharePrice">
        {{#headers}}
                <div class="top header">Mid Price</div>
        {{/headers}}
            {{#stocks}}
                <div class="data">{{decimals mid}}p</div>
        {{/stocks}}
  {{#headers}}
                <div class="header">Bid Price</div>
        {{/headers}}
            {{#stocks}}
                <div class="data">{{decimals bid}}p</div>
        {{/stocks}}
{{#headers}}
                <div class="header">Offer Price</div>
        {{/headers}}
            {{#stocks}}
                <div class="data">{{decimals ask}}p</div>
        {{/stocks}}
{{#headers}}
                <div class="header">{{t_volume}}</div>
        {{/headers}}
            {{#stocks}}
                <div class="data">{{toLocal volume}}</div>

        {{/stocks}}
    </div>
</script>
