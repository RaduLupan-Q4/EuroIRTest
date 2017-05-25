<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Roboto:400,600,500""/>";
%>
<%= site.newHeader("IRPerformance") %>
<script type="text/javascript">
    var activeModules = ['IRPerformance'];
</script>

<div class="IRPerformanceModule"></div>

<script id="IRPerformanceModuleTemplate" type="text/x-handlebars-template">
    <table class="IRPerformanceModule table-look horizontal responsive">
        <thead>
            {{#headers}}
            <tr>
                <th class="Header column-first name">{{t_listings}}</th>
                <th class="Header price">{{t_last}}</th>
                <th class="Header months1">{{t_1_month}}</th>
                <th class="Header months3">{{t_3_months}}</th>
                <th class="Header months6">{{t_6_months}}</th>
                <th class="Header column-last year1">{{t_1_year}}</th>
            </tr>
            {{/headers}}
        </thead>
        <tbody>
            {{#dataListings}}
            <tr>
                <td class="Data column-first symbol">{{name}}</td>
                <td class="Data price">{{decimals last}}</td>
                <td class="Data formatColour months1">{{decimals m1}}</td>
                <td class="Data formatColour months3">{{decimals m3}}</td>
                <td class="Data formatColour months6">{{decimals m6}}</td>
                <td class="Data formatColour column-last year1">{{decimals y1}}</td>
            </tr>
            {{/dataListings}}
        </tbody>
    </table>
    <table class="IRPerformanceModule table-look vertical">
		<tr>
			<th class="Header column-first name">{{headers/t_listings}}</th>
			<td class="Data column-first symbol">{{dataListings.0/symbol}}</td>
		</tr>
		<tr>
			<th class="Header price">{{headers/t_last}}</th>
			<td class="Data price">{{decimals dataListings.0/last}}</td>
		</tr>
		<tr>
			<th class="Header months1">{{headers/t_1_month}}</th>
			<td class="Data formatColour months1">{{decimals dataListings.0/m1}}</td>
		</tr>
		<tr>
			<th class="Header months3">{{headers/t_3_months}}</th>
			<td class="Data formatColour months3">{{decimals dataListings.0/m3}}</td>
		</tr>
		<tr>
			<th class="Header months6">{{headers/t_6_months}}</th>
			<td class="Data formatColour months6">{{decimals dataListings.0/m6}}</td>
		</tr>
	</table>
</script>
<%= site.newFooter("IRPerformance") %>




