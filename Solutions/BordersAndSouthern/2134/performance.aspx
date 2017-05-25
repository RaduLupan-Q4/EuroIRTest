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
                <th class="Header column-first name">Share performance</th>
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
                <td class="Data price">{{decimals last}}p</td>
                <td class="Data formatColour months1">{{decimals m1}}p</td>
                <td class="Data formatColour months3">{{decimals m3}}p</td>
                <td class="Data formatColour months6">{{decimals m6}}p</td>
                <td class="Data formatColour column-last year1">{{decimals y1}}p</td>
            </tr>
            {{/dataListings}}
        </tbody>
    </table>
</script>
<div class="disclaimer"><span class="disclaimer-copyright">Copyright &copy; 1997-2016 <a href="https://www.q4euroinvestor.com/" target="_blank">Q4 Euroinvestor</a> </span><span class="disclaimer-dataSource">and our data suppliers. </span><span class="disclaimer-delayed">Data delayed by 15-20 min.</span><span class="disclaimer-terms"> <a href="https://www.q4euroinvestor.com/MainDisclaimer/" target="_blank">See Terms of use</a></span></div>
<%= site.newFooter("IRPerformance") %>




