<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
      site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,500,700,300""/>";
%>

<%= site.newHeader("IRCustomModule") %>

<script type="text/javascript">
    var activeModules = ["IRLookup"];
</script>


<div class="IRLookupModule">
        <div class="IRChartColour"></div>
        <span class="ajaxLoader">Loading</span>
    </div>

<script id="IRLookupTemplate" type="text/x-handlebars-template">


         <div id="excel"><a href="">Excel</a></div>
       
        <div class="IRChartLookupPlaceholder"></div>

        <form id="lookup-form" method="POST">
            <div class="formDivider">
                <div class="input-row">
                    <label for="from-datepicker" class="input-label from-label">{{t_from}}:</label>
                    <div class="input-wrapper">
                        {{{datepicker 'from'}}} {{{selectFromDay}}} {{{selectFromMonth}}} {{{selectFromYear}}}
                    </div>
                </div>
                <div class="input-row">
                    <label for="to-datepicker" class="input-label to-label">{{t_to}}: </label>
                    <div class="input-wrapper">
                        {{{datepicker 'to'}}} {{{selectToDay}}} {{{selectToMonth}}} {{{selectToYear}}}
                    </div>
                </div>
            </div>
            <div class="formDivider">
                <div class="input-row">
                    <label class="input-label frequency-label">{{t_frequency}}: </label>
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
                    <label class="input-label format-label">{{t_format}}: </label>
                    <div class="input-wrapper">
                        <select id="format" class="wide-input">
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



<%= site.newFooter("IRLookup") %>