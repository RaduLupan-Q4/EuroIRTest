<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600"" type=""text/css"" />";
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
        <div class="formDivider">
            <div class="input-row">
                <label for="from-datepicker" class="input-label from-label">{{t_from}}</label>
                <div class="input-wrapper">
                    {{{datepicker 'from'}}}
                {{{selectFromDay}}}
                {{{selectFromMonth}}}
                {{{selectFromYear}}}
                </div>
            </div>
            <div class="input-row">
                <label for="to-datepicker" class="input-label to-label">{{t_to}} </label>
                <div class="input-wrapper">
                    {{{datepicker 'to'}}}
               {{{selectToDay}}}
               {{{selectToMonth}}}
               {{{selectToYear}}}
                </div>
            </div>
        </div>
        <div class="formDivider">
            <div class="input-row">
                <label class="input-label frequency-label">{{t_frequency}} </label>
                <div class="input-wrapper">
                    <select id="frequency" class="wide-input">
                        <option option="daily">{{t_daily}}</option>
                        <option option="monthly">{{t_monthly}}</option>
                        <option option="quarterly">{{t_quarterly}}</option>
                        <option option="yearly">{{t_yearly}}</option>
                    </select>
                </div>
            </div>
            <div class="input-row">
                <%-- <label class="input-label format-label">{{t_format}} </label>--%>
                <div class="input-wrapper">
                    <select id="format" class="wide-input">
                        <option value="html">HTML</option>
                        <option value="excel">Excel</option>
                    </select>
                </div>
            </div>
            <div class="input-row">
                <div class="input-wrapper lookupButton">
                    <input type="submit" value="{{t_look_up}}" id="lookup-button" />
                </div>
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
                <td class="Data price">{{decimal openPrice 2}}</td>
                <td class="Data high">{{decimal high 2}}</td>
                <td class="Data low">{{decimal low 2}}</td>
                <td class="Data">{{decimal closePrice 2}}</td>
                <td class="Data column-last volume">{{volume}}</td>
            </tr>
        {{/each}}
    </table>
</script>
<table class="disclaimerRKD" style="width: 100%; border: 0px; padding: 0px; margin-top: 10px;">
    <tr>
        <td style="text-align: center; padding: 0px; color: #888888;">
            <span style="text-align: center; font-size: 10px; color: #333333; font-family: Arial, Helvetica, sans-serif;">Quote data provided 
					by &#169;Thomson Reuters Limited. <a target="_blank" href="http://media.corporate-ir.net/media_files/irol/17/176279/Terms_Conditions.html" style="text-align: center;">Click for restrictions</a> </span>
        </td>
    </tr>
</table>
<div style="display: none;">
    <%= site.newFooter("IRLookup") %>
</div>
