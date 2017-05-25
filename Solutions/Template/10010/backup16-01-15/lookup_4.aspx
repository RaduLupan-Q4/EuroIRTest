<%@ Page Language="C#" AutoEventWireup="true"%>
<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.header("IRLookup") %>

<script type="text/javascript">
    var activeModules = ["IRLookup"];
</script>

<div class="IRLookupModule" id="v4">
    <div style="text-align:center">
        <span class="ajaxLoader" style="display:inline-block">Loading</span>
    </div>
</div>

<script>
    var nextYear = 2015;
</script>

<script id="IRLookupTemplate" type="text/x-handlebars-template">
    <h1>Historical Stock Lookup</h1>
    <form id="lookup-form" method="post">

        <div class="input-row">

            <label for="from-datepicker" class="input-label from-label" style="float: left;">{{t_from}}:</label>
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
        <div class="input-row twolines">
            <label class="input-label frequency-label">{{t_frequency}}: </label>
            <div class="input-wrapper">
                <select id="frequency">
                    <option option="daily">{{t_daily}}</option>
                    <option option="monthly">{{t_monthly}}</option>
                    <option option="quarterly">{{t_quarterly}}</option>
                    <option option="yearly">{{t_yearly}}</option>
                </select>
            </div>
            <div class="input-wrapper download-buttons">
                <input type="submit" value="Download Excel file" id="lookup-button" style="" />
                <input type="submit" value="Download CSV file" id="lookup-button" style="margin-left: 5px;" />
            </div>
        </div>
        
        <%-- <div class="input-row">
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
        </div>--%>
    
   
        </form>
     <div id="lookup-chart">
        <div class="IRLookupModule" style="text-align:center">
            <span class="ajaxLoader" style="display:inline-block">Loading</span>
        </div>
    </div>
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
<p style="width: 100%; border: 1px solid black; margin-top: 50px; text-align: center; height: 500px; font-size: 50px; padding-top: 100px;">Vis lookup data her</p>

