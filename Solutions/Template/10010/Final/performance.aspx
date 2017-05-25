<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.newHeader("IRPerformance") %>

<script type="text/javascript">
    var activeModules = ['IRPerformance'];
</script>

<table class="IRPerformanceModule table-look horizontal responsive">
    <tbody>
        {{#headers}}
    <tr>
        <th class="Header company column-first">{{t_company}}</th>
        <th class="Header last">{{t_last}}</th>
        <th class="Header days d5">{{t_1_week}}</th>
        <th class="Header months m3">{{t_3_months}}</th>
        <th class="Header months m6">{{t_6_months}}</th>
        <th class="Header months m9">{{t_9_months}}</th>
        <th class="Header years y1">{{t_1_year}}</th>
    </tr>
        {{/headers}}
        {{#stocks}}
    <tr>
        <td class="table-seperator indice" colspan="7">{{t_indices}}</td>
    </tr>
    <tr>
        <td class="Data company column-first">Baltic Dry Index</td>
        <td class="Data last">{{decimals last}}</td>
        <td class="Data days d5 formatColour">{{{showPerformance day 5}}}</td>
        <td class="Data months m3 formatColour">{{{showPerformance month 3}}}</td>
        <td class="Data months m6 formatColour">{{{showPerformance month 6}}}</td>
        <td class="Data months m9 formatColour">{{{showPerformance month 9}}}</td>
        <td class="Data years y1 formatColour">{{{showPerformance year 1}}}</td>
    </tr>
        {{/stocks}}
    <tr>
        <td>Baltic Trading</td>
        <td>1.76</td>
        <td class="formatColour">-9.74</td>
        <td class="formatColour">-52.04</td>
        <td class="formatColour">-68.00</td>
        <td class="formatColour">-72.28</td>
        <td class="formatColour">-71.52</td>
    </tr>
    <tr>
        <td class="table-seperator peer-group" colspan="7">{{t_peer_group}}</td>
    </tr>
    <tr>
        <td class="Data company column-first">DS Norden</td>
        <td class="Data last">739.00</td>
        <td class="Data days d5 formatColour">-3.02</td>
        <td class="Data months m3 formatColour">-34.95</td>
        <td class="Data months m6 formatColour">+0.96</td>
        <td class="Data months m9 formatColour">-23.58</td>
        <td class="Data years y1 formatColour">-48.25</td>
    </tr>
    <tr>
        <td>Pacific Basin</td>
        <td>2.84</td>
        <td class="formatColour">-11.22</td>
        <td class="formatColour">-29.70</td>
        <td class="formatColour">-40.04</td>
        <td class="formatColour">-40.43</td>
        <td class="formatColour">-46.73</td>
    </tr>
    <tr>
        <td>Golden Ocean</td>
        <td>5.77</td>
        <td class="formatColour">-13.59</td>
        <td class="formatColour">-26.97</td>
        <td class="formatColour">-43.96</td>
        <td class="formatColour">-46.65</td>
        <td class="formatColour">-58.01</td>
    </tr>
</tbody>
</table>


<%= site.newFooter("IRPerformance") %>

<link rel="stylesheet" type="text/css" href="ir.client.css">