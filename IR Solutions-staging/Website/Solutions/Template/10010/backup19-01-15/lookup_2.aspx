<%@ Page Language="C#" AutoEventWireup="true"%>
<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.header("IRLookup") %>

<script type="text/javascript">
    var activeModules = ["IRLookup"];
</script>

<div class="IRLookupModule">
    <div style="text-align:center">
        <span class="ajaxLoader" style="display:inline-block">Loading</span>
    </div>
</div>

<script>
    var nextYear = 2015;
</script>

<script id="IRLookupTemplate" type="text/x-handlebars-template">
    <h1>Historical Stock Lookup</h1>
    <div id="lookup-chart">
        <div class="IRLookupModule" style="text-align:center">
            <span class="ajaxLoader" style="display:inline-block">Loading</span>
        </div>
    </div>
    <form id="lookup-form" method="post">
        <div class="input-row">
            <label for="from-datepicker" class="input-label from-label">{{t_from}}: </label>
            <div class="input-wrapper">
                <input id="from-datepicker" class="datepicker-button" style="display:none;"/>
                <select id="from-day" class="date-select">
                    {{#for 1 32 1}}
                        <option value={{this}}>{{this}}</option>
                    {{/for}}
                </select>
                <select id="from-month" class="date-select">
                    <option value="0">{{t_january_short}}</option>
                    <option value="1">{{t_february_short}}</option>
                    <option value="2">{{t_march_short}}</option>
                    <option value="3">{{t_april_short}}</option>
                    <option value="4">{{t_may_short}}</option>
                    <option value="5">{{t_june_short}}</option>
                    <option value="6">{{t_july_short}}</option>
                    <option value="7">{{t_august_short}}</option>
                    <option value="8">{{t_september_short}}</option>
                    <option value="9">{{t_october_short}}</option>
                    <option value="10">{{t_november_short}}</option>
                    <option value="11">{{t_december_short}}</option>
                </select>
                <select id="from-year" class="date-select">
                    {{#iteratePreviousNYears 10}}
                        <option value={{this}}>{{this}}</option>
                    {{/iteratePreviousNYears}}
                </select>
            </div>
        </div>
        <div class="input-row">
            <label for="to-datepicker" class="input-label to-label">{{t_to}}: </label>
            <div class="input-wrapper">
                <input id="to-datepicker" class="datepicker-button" style="display:none;"/>
                <select id="to-day" class="date-select">
                    {{#for 0 32 1}}
                        <option value={{this}}>{{this}}</option>
                    {{/for}}
                </select>
                <select id="to-month" class="date-select">
                    <option value="0">{{t_january_short}}</option>
                    <option value="1">{{t_february_short}}</option>
                    <option value="2">{{t_march_short}}</option>
                    <option value="3">{{t_april_short}}</option>
                    <option value="4">{{t_may_short}}</option>
                    <option value="5">{{t_june_short}}</option>
                    <option value="6">{{t_july_short}}</option>
                    <option value="7">{{t_august_short}}</option>
                    <option value="8">{{t_september_short}}</option>
                    <option value="9">{{t_october_short}}</option>
                    <option value="10">{{t_november_short}}</option>
                    <option value="11">{{t_december_short}}</option>
                </select>
                <select id="to-year" class="date-select">
                    {{#iteratePreviousNYears 10}}
                        <option value={{this}}>{{this}}</option>
                    {{/iteratePreviousNYears}}
                </select>
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
                    <option option="html">HTML</option>                                       
                    <option option="excel">Excel</option>                    
                </select>
            </div>
        </div>
        <div class="input-row">
            <div class="input-wrapper">
                <input type="submit" value={{t_lookup}} id="lookup-button"/>
            </div>
        </div>
    </form>
</script>


<script id="IRLookupTableTemplate" type="text/x-handlebars-template">
    <table class="table-look table-look-vertical calculator calculator-vertical responsive-vertical" id="lookup-table">
        <tr>
            <th class="left-aligned">{{headers/t_date}}</th>
            <th>{{headers/t_open}}</th>
            <th>{{headers/t_close}}</th>
            <th>{{headers/t_volume}}</th>
        </tr>
        {{#each closePrices}}
            <tr>
                <td class="left-aligned">{{date}}</td>
                <td>{{decimal openPrice 2}}</td>
                <td>{{decimal closePrice 2}}</td>
                <td>{{volume}}</td>
            </tr>
        {{/each}}
    </table>

    <table class="table-look table-look-horizontal calculator calculator-horizontal responsive-horizontal" id="lookup-table">
        <tr>
            <th class="left-aligned">{{headers/t_date}}</th>
            <th>{{headers/t_open}}</th>
            <th>{{headers/t_high}}</th>
            <th>{{headers/t_low}}</th>
            <th>{{headers/t_close}}</th>
            <th>{{headers/t_volume}}</th>
        </tr>
        {{#each closePrices}}
            <tr>
                <td class="left-aligned">{{date}}</td>
                <td>{{decimal openPrice 2}}</td>
                <td>{{decimal high 2}}</td>
                <td>{{decimal low 2}}</td>
                <td>{{decimal closePrice 2}}</td>
                <td>{{volume}}</td>
            </tr>
        {{/each}}
    </table>
</script>

<%= site.footer("IRLookup") %>