﻿<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
%>
<%= site.newHeader("IRPerformance") %>
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
            <tr class="TRData">
                <td class="Data column-first symbol">{{name}}</td>
                <td class="Data price">{{decimals last}} {{currency}}</td>
                <td class="Data formatColour months1">{{decimals m1}}</td>
                <td class="Data formatColour months3">{{decimals m3}}</td>
                <td class="Data formatColour months6">{{decimals m6}}</td>
                <td class="Data formatColour column-last year1">{{decimals y1}}</td>
            </tr>
        {{/dataListings}}
       <%-- {{#subHeaders}}
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
            <tr class="TRData">
                <td class="Data column-first symbol">{{name}}</td>
                <td class="Data price">{{decimals last}} {{currency}}</td>
                <td class="Data formatColour months1">{{decimals m1}}</td>
                <td class="Data formatColour months3">{{decimals m3}}</td>
                <td class="Data formatColour months6">{{decimals m6}}</td>
                <td class="Data formatColour column-last year1">{{decimals y1}}</td>
            </tr>
        {{/dataIndices}}--%>
    </table>
</script>
<div class="performanceDisclaimer">
    <%= site.newFooter("IRPerformance") %>
</div>