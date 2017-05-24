﻿<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
   site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
%>
<%= site.newHeader("IRLookup") %>

<script type="text/javascript">
    var activeModules = ["IRLookup"];
</script>

<div class="IRLookupModule">
    <div class="IRChartColour"></div>
    <%= site.toolElement("loading") %>
</div>

<script id="IRLookupTemplate" type="text/x-handlebars-template">

    
    <div class="IRChartLookupPlaceholder"></div>

    <form id="lookup-form" method="POST">
        
        <%--<div class="input-row">
            <label for="from-datepicker" class="input-label from-label">{{t_change_listing}}:</label> 
            <div class="input-wrapper" style="width:230px; font-size:12px;">
                <div class="IRChangeListing"></div>
            </div>
        </div>--%>

        <div class="input-row">
            <label for="from-datepicker" class="input-label from-label">{{t_from}}:</label> 
            <div class="input-wrapper" style="width:200px; font-size:12px;">
                {{{datepicker 'from'}}}
                {{{selectFromDay}}}
                {{{selectFromMonth}}}
                {{{selectFromYear}}}
            </div>
        </div>
        <div class="input-row">
            <label for="to-datepicker" class="input-label to-label">{{t_to}}: </label>
            <div class="input-wrapper" style="width:200px; font-size:12px;">
               {{{datepicker 'to'}}}
               {{{selectToDay}}}
               {{{selectToMonth}}}
               {{{selectToYear}}}
            </div>
        </div>
        <div class="input-row">
            <label class="input-label frequency-label">{{t_frequency}}: </label>
            <div class="input-wrapper" >
                <select id="frequency">
                    <option option="daily">{{t_daily}}</option>
                    <option option="monthly">{{t_monthly}}</option>
                    <option option="quarterly">{{t_quarterly}}</option>
                    <option option="yearly">{{t_yearly}}</option>
                </select>
            </div>
        </div>
        <div class="input-row">
            <label class="input-label frequency-label">{{t_format}}: </label>
            <div class="input-wrapper">
                <select id="format">
                    <option value="html">HTML</option>
                    <option value="excel">Excel</option>
                </select>
            </div>
        </div>
        <div class="input-row">
            <div class="input-wrapper">
                <input type="submit" value="{{t_lookup}}" id="lookup-button" />
            </div>
        </div>
    </form>
</script>

<script id="IRLookupTableTemplate" type="text/x-handlebars-template">
    <table class="IRLookupResultsTable table-look horizontal responsive">
        <tr>
            <th class="Header column-first date">{{headers/t_date}}</th>
            <th class="Header open">{{headers/t_open}} ({{showCurrency}})</th>
            <th class="Header high">{{headers/t_high}} ({{showCurrency}})</th>
            <th class="Header low">{{headers/t_low}} ({{showCurrency}})</th>
            <th class="Header">{{headers/t_close}} ({{showCurrency}})</th>
            <th class="Header column-last volume">({{showCurrency}})</th>
        </tr>
        {{#each closePrices}}
            <tr>
                <td class="Data column-first date">{{date}}</td>
                <td class="Data price">{{decimal openPrice 2}}</td>
                <td class="Data high">{{decimal high 2}}</td>
                <td class="Data low">{{decimal low 2}}</td>
                <td class="Data">{{decimal closePrice 2}}</td>
                <td class="Data column-last volume">{{volume}}</td>
            </tr>
        {{/each}}
    </table>
</script>

<%= site.newFooter("IRLookup2") %>