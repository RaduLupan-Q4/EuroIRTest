<%@ page language="C#" autoeventwireup="true" %>

<%@ import namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>
<%= site.newHeader("IRTrades") %>

<div class="IRTradesModule"></div>

<script type="text/javascript">
    var activeModules = ['IRTrades'];
</script>

<script id="IRTradesTemplate" type="text/x-handlebars-template">
    
    <table class="IRTradesModule table-look horizontal responsive" id="scroll-table">
        <tbody >
            <thead>
                <tr>
                    <th class="Header column-first trade">{{headers/t_time}}</th>
                    <th class="Header price">{{headers/t_price}}</th>
                    <th class="Header volume">{{headers/t_quantity}}</th>
                    <th class="Header value">{{headers/t_bid}}</th>
                    <th class="Header value column-last">{{headers/t_ask}}</th>
                </tr>
            </thead>
            {{#data}}
            {{#data}}
            <%--{{#if_eq this}}--%>
            <tr>

                <td class="Data updated column-first" datetime="{{showDateWithFormat timestamp 'YYYY-MMM-DD'}}">{{showDateWithFormat timestamp 'DD MMM'}} {{showTime timestamp}}</td>
                <td class="Data price">{{decimals tradePrice}}</td>
                <td class="Data volume">{{tradeVolume}}</td>
                <td class="Data value">{{decimals bid}}</td>
                <td class="Data value column-last">{{decimals ask}}</td>
                
            </tr>
            <%--{{/if_eq}}--%>
            {{/data}}
            {{/data}}
        </tbody>
    </table>

</script>

<%= site.newFooter("IRTrades") %>
