<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700""/>";
%>
<%= site.newHeader("IRLookup") %>
<% if(Request.QueryString["mode"]!="list") { %>
<script type="text/javascript" src="//s00.static-shell.com/etc.clientlibs/shell-common/components/components/iframe/clientlib/external.min.js"></script>
<%} %>
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

        <div class="IRLookupSection">
            <div class="floatBoxOuter">
                <div class="floatBox left">
                    {{t_change_listing}}:
                </div>
                <div class="floatBox right">
                    <div class="IRChangeListing"></div>
                </div>
            </div>

            <div class="floatBoxOuter">
                <div class="floatBox left">
                    {{t_from}}:
                </div>
                <div class="floatBox right">
                    {{{selectFromDay}}}
                    {{{selectFromMonth}}}
                    {{{selectFromYear}}}
                </div>
            </div>

            <div class="floatBoxOuter">
                <div class="floatBox left">
                    {{t_to}}:
                </div>
                <div class="floatBox right">
                    {{{selectToDay}}}
                    {{{selectToMonth}}}
                    {{{selectToYear}}}
                </div>
            </div>

            <div class="floatBoxOuter">
                <div class="floatBox left">
                    {{t_frequency}}:
                </div>
                <div class="floatBox right">
                    <select id="frequency">
                        <option value="daily">{{t_daily}}</option>
                        <option value="monthly">{{t_monthly}}</option>
                        <option value="quarterly">{{t_quarterly}}</option>
                        <option value="yearly">{{t_yearly}}</option>
                    </select>
                </div>
            </div>

            <div class="floatBoxOuter">
                <div class="floatBox left">
                    {{t_format}}:
                </div>
                <div class="floatBox right">
                    <select id="format">
                        <option value="html">HTML</option>
                        <option value="excel">Excel</option>
                    </select>
                </div>
            </div>

            <div class="floatBoxOuter">
                <div class="floatBox left">
                </div>
                <div class="floatBox right">
                    <input type="submit" value="{{t_download}}" id="lookup-button" />
                </div>
            </div>

        </div>
        </form>
        <div style="clear: both;"></div>
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
<script type="text/javascript">

    
    $(function () {
        setInterval(function () {
            $('.form-control option').each(function () {
                $(this).html($(this).html().replace('Euronext', 'Amsterdam'));
            });
        }, 500);
    });
</script>
