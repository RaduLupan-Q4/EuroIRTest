<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.header("IRMiniquoteChart") %>
<script type="text/javascript">
    var activeModules = ['IRQuoteMulti', 'IRMiniquoteChart'];
    var activeFeatures = [];
</script>

<div class="IRQuoteModule"></div>

<script id="IRQuoteMultiTableTemplate" type="text/x-handlebars-template">
    <div class="IRMiniquoteChartPlaceholder"></div>
    <div class="table-wrapper">
        <table class="IRMiniquoteChart table-look horizontal" >
            {{#headers}}
            <tr>
                <%--<th >{{t_symbol}}</th>--%>
                <%--<th >{{t_last}}</th>--%>
            </tr>
            {{/headers}}
        {{#stocks}}
            <tr>
                <th >{{symbol}}</th>
                <td >{{decimals last}} {{currency}}</td>
            </tr>
            {{/stocks}}
        </table>
    </div>
</script>

<%= site.footer("IRMiniquoteChart") %>
