<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.header("IRLookup") %>

<script type="text/javascript">
    var activeModules = ["IRLookup"];
</script>

<div class="IRLookupModule">
    <%= site.toolElement("loading") %>
</div>

<script id="IRLookupTemplate" type="text/x-handlebars-template">

    <div id="lookup-chart"></div>

    <form id="lookup-form" method="post">

        <div class="input-row">

            <label for="from-datepicker" class="input-label from-label">{{t_from}}:</label>
            <div class="input-wrapper">
                <%= site.toolElement("select-from-trigger") %>
                <%= site.toolElement("select-from-day") %>
                <%= site.toolElement("select-from-month") %>
                <%= site.toolElement("select-from-year") %>
            </div>

        </div>

        <div class="input-row">
            
            <label for="to-datepicker" class="input-label to-label">{{t_to}}: </label>
            <div class="input-wrapper">
                <%= site.toolElement("select-to-trigger") %>
                <%= site.toolElement("select-to-day") %>
                <%= site.toolElement("select-to-month") %>
                <%= site.toolElement("select-to-year") %>
            </div>

        </div>
        <div class="input-row">
            <label class="input-label frequency-label">{{t_frequency}}: </label>
            <div class="input-wrapper">
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
                    <%--<option value="excel">Excel</option>--%>
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
    <table class="IRLookupResultsTable table-look lookup lookup-horizontal responsive-horizontal">
        <tr>
            <th class="IRToolQuoteTableItem Header column-first">{{headers/t_date}}</th>
            <th class="IRToolQuoteTableItem Header">{{headers/t_open}}</th>
            <th class="IRToolQuoteTableItem Header">{{headers/t_high}}</th>
            <th class="IRToolQuoteTableItem Header">{{headers/t_low}}</th>
            <th class="IRToolQuoteTableItem Header">{{headers/t_close}}</th>
            <th class="IRToolQuoteTableItem Header column-last">{{headers/t_volume}}</th>
        </tr>
        {{#each closePrices}}
            <tr>
                <td class="IRToolQuoteTableItem Data Symbol column-first">{{date}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimal openPrice 2}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimal high 2}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimal low 2}}</td>
                <td class="IRToolQuoteTableItem Data">{{decimal closePrice 2}}</td>
                <td class="IRToolQuoteTableItem Data column-last">{{volume}}</td>
            </tr>
        {{/each}}
    </table>
</script>

<%= site.footer("IRLookup") %>