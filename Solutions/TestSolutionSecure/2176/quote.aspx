<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.debugNewHeader("IRQuote") %>
<script type="text/javascript">
    var activeModules = ['IRQuoteMulti'];
    var activeFeatures = [];
</script>

<div class="IRQuoteModule"></div>

<script id="IRQuoteMultiTableTemplate" type="text/x-handlebars-template">
    <table class="IRQuoteDualModule table-look horizontal responsive">
        {{#headers}}
            <tr>

                <th class="Header column-first exchange">{{t_exchange}}</th>
                <th class="Header lastPrice">{{t_last}}</th>
                <th class="Header change">%</th>
                <th class="Header time">{{t_time}}</th>
                <th class="Header symbol">{{t_code}}</th>
                <th class="Header column-last time"></th>
            </tr>
        {{/headers}}
        {{#stocks}}
            <tr>
                <td class="Data column-first exchange">{{name}}<br />
                    <span class="exchangeName">{{exchangeName}} ({{currency}})</span></td>
                <td class="Data lastPrice">{{decimals last}}</td>
                <td class="Data change">{{decimals changePercent}}</td>
                <td class="Data time">{{showTime timestamp}}<br />
                    <span class="spanTime" id="symbol"></span></td>
                <td class="Data symbol">{{symbol}}</td>
                <td class="Data change"><span class="{{showArrow change}}"></span></td>
                <%--<td class="Data change">{{decimals change}} ({{decimals changePercent}}%) <span class="{{showArrow change}}"></span></td>--%>


            </tr>
        {{/stocks}}
    </table>
</script>

<%= site.debugNewFooter("IRQuote") %>


<script type="text/javascript">
    setTimeout(function () {
        $(".IRQuoteDualModule td").each(function () {
            
            $('.exchangeName:nth-child(2)').html('Technip ADR (US$)');
            $('.exchangeName:first').html('Euronext Paris (€)');

            
            $('.spanTime:nth-child(2)').html('(New York Time)');
            $('.spanTime:first').html('(Paris Time)');
        });
    }, 200);

</script>
