<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<%= site.newHeader("IRQuote") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script type="text/javascript">
    var activeModules = ['IRQuote'];
</script>

<div class="IRQuoteModule"></div>

<%= site.newFooter("IRQuote") %>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
    <table id="tableH" class="IRTable">
        {{#headers}}
            <tr>
                <th id="hide1" class="Header">{{t_date}}</th>
                <th id="hide2" class="Header">{{t_time}}</th>
                <th id="hide3" class="Header">{{t_mid}} price</th>
                <th class="Header">{{t_bid}} price</th>
                <th class="Header">Offer Price</th>
                <th class="Header">{{t_volume}}</th>
            </tr>
        {{/headers}}
            {{#stocks}}
            <tr>
                <td id="hide1D" class=" Data">{{showDate timestamp}}</td>
                <td id="hide2D" class=" Data">{{showTime timestamp}}</td>
                <td id="hide3D" class=" Data">{{decimals mid}}</td>
                <td class=" Data">{{decimals bid}}</td>
                <td class=" Data">{{decimals ask}}</td>
                <td class=" Data">{{toLocal volume}}</td>
            </tr>
        {{/stocks}}
    </table>


<table id="tableV" class="IRTable">
    <tr>
        {{#headers}}    
        <th class="Header">{{t_date}}</th>
        {{/headers}}
     {{#stocks}}   
        <td class="Data">{{showDate timestamp}}</td>
        {{/stocks}}
    </tr>
    <tr>
        {{#headers}}  
        <th class="Header">{{t_time}}</th>
        {{/headers}}
     {{#stocks}}  
        <td class=" Data">{{showTime timestamp}}</td>
        {{/stocks}}
    </tr>
    <tr>
        {{#headers}}    
        <th class="Header">{{t_mid}} price</th>
        {{/headers}}
    {{#stocks}}   
        <td class=" Data">{{decimals mid}}</td>
        {{/stocks}}
    </tr>
    <tr>
        {{#headers}}    
        <th class="Header">Offer Price</th>
        {{/headers}}
  {{#stocks}}     
        <td class=" Data">{{decimals bid}}</td>
        {{/stocks}}
    </tr>
    <tr>
        {{#headers}}    
        <th class="Header">{{t_bid}} price</th>
        {{/headers}}
     {{#stocks}}  
        <td class=" Data">{{decimals ask}}</td>
        {{/stocks}}
    </tr>
    <tr>
        {{#headers}}    
        <th class="Header">{{t_volume}}</th>
        {{/headers}}
    {{#stocks}}   
        <td class=" Data">{{toLocal volume}}</td>
        {{/stocks}}
    </tr>

</table>
    </script>