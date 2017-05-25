<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.debugNewHeader("IRPerformance") %>
<script type="text/javascript">
    var activeModules = ['IRPerformance'];
</script>

<div class="IRPerformanceModule"></div>

<script id="IRPerformanceModuleTemplate" type="text/x-handlebars-template">
    <table class="IRPerformanceModule table-look horizontal responsive">
        {{#headers}}
            <tr>
                <th class="Header column-first name">{{t_listings}}</th>
                <th class="Header price">{{t_price}}</th>
                <th class="Header months1">{{t_1_month}}</th>
                <th class="Header months3">{{t_3_months}}</th>
                <th class="Header months6">{{t_6_months}}</th>
                <th class="Header column-last year1">{{t_1_year}}</th>
            </tr>
        {{/headers}}
        {{#dataListings}}
            <tr>
                <td class="Data column-first symbol">{{name}}</td>
                <td class="Data price">{{decimals last}} {{currency}}</td>
                <td class="Data formatColour months1">{{decimals m1}}</td>
                <td class="Data formatColour months3">{{decimals m3}}</td>
                <td class="Data formatColour months6">{{decimals m6}}</td>
                <td class="Data formatColour column-last year1">{{decimals y1}}</td>
            </tr>
        {{/dataListings}}
        {{#subHeaders}}
            <tr>
                <th class="Header column-first name">{{t_indices}}</th>
                <th class="Header price"></th>
                <th class="Header months1"></th>
                <th class="Header months3"></th>
                <th class="Header months6"></th>
                <th class="Header column-last year1"></th>
            </tr>
        {{/subHeaders}}
        {{#dataIndices}}
            <tr>
                <td class="Data column-first symbol">{{name}}</td>
                <td class="Data price">{{decimals last}} {{currency}}</td>
                <td class="Data formatColour months1">{{decimals m1}}</td>
                <td class="Data formatColour months3">{{decimals m3}}</td>
                <td class="Data formatColour months6">{{decimals m6}}</td>
                <td class="Data formatColour column-last year1">{{decimals y1}}</td>
            </tr>
        {{/dataIndices}}
        {{#subHeaders}}
            <tr>
                <th class="Header column-first name">{{t_peers}}</th>
                <th class="Header price"></th>
                <th class="Header months1"></th>
                <th class="Header months3"></th>
                <th class="Header months6"></th>
                <th class="Header column-last year1"></th>
            </tr>
        {{/subHeaders}}
        {{#dataPeers}}
            <tr>
                <td class="Data column-first symbol">{{name}}</td>
                <td class="Data price">{{decimals last}} {{currency}}</td>
                <td class="Data formatColour months1">{{decimals m1}}</td>
                <td class="Data formatColour months3">{{decimals m3}}</td>
                <td class="Data formatColour months6">{{decimals m6}}</td>
                <td class="Data formatColour column-last year1">{{decimals y1}}</td>
            </tr>
        {{/dataPeers}}
    </table>
</script>

<%= site.debugNewFooter("IRPerformance") %>