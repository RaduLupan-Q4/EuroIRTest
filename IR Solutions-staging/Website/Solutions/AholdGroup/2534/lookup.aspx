<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
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

    <form id="lookup-form" class="languageDirectionCheck" method="POST">
        
        <%--<div class="input-row">
            <label for="from-datepicker" class="input-label from-label">{{t_change_listing}}:</label> 
            <div class="input-wrapper" style="width:230px; font-size:12px;">
                <div class="IRChangeListing"></div>
            </div>
        </div>--%>

        <div class="input-row">
            <label for="from-datepicker" class="input-label from-label">{{t_from}}:</label> 
            <div class="input-wrapper" style="width:212px; font-size:12px;">
                {{{datepicker 'from'}}}
                {{{selectFromDay}}}
                {{{selectFromMonth 'MM'}}}
                {{{selectFromYear}}}
            </div>
        </div>
        <div class="input-row">
            <label for="to-datepicker" class="input-label to-label">{{t_to}}: </label>
            <div class="input-wrapper" style="width:212px; font-size:12px;">
               {{{datepicker 'to'}}}
               {{{selectToDay}}}
               {{{selectToMonth 'MM'}}}
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
            <div class="input-wrapper lookupButton">
                <input type="submit" value="{{t_lookup}}" id="lookup-button" />
            </div>
        </div>
    </form>
</script>

<script id="IRLookupTableTemplate" type="text/x-handlebars-template">
    <table class="IRLookupResultsTable table-look horizontal responsive">
        <tr>
            <th class="Header column-first date">{{headers/t_date}}</th>
            <th class="Header open">{{headers/t_open}}</th>
            <th class="Header high">{{headers/t_high}}</th>
            <th class="Header low">{{headers/t_low}}</th>
            <th class="Header">{{headers/t_close}}</th>
            <th class="Header column-last volume">{{headers/t_volume}}</th>
        </tr>
        {{#each closePrices}}
            <tr>
                <td class="Data column-first date">{{date}}</td>
                <td class="Data price">{{decimals openPrice 2}}</td>
                <td class="Data high">{{decimals high 2}}</td>
                <td class="Data low">{{decimals low 2}}</td>
                <td class="Data">{{decimals closePrice 2}}</td>
                <td class="Data column-last volume">{{toLocal volume}}</td>
            </tr>
        {{/each}}
    </table>
</script>

<%= site.newFooter("IRLookup") %>

