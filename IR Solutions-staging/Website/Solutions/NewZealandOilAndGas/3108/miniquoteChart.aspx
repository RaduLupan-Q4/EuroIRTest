<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();%>
<%= site.newHeader("IRMiniquoteChart") %>


<script type="text/javascript">
    var activeModules = ["IRMiniquoteChart"];
</script>

<div class="IRMiniquoteChartModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">
  
<div class="IRMiniquoteChartPlaceholder"></div>

            <table class="IRMiniquoteChart table-look horizontal">
            	<tr>
                    <th class="Header updated column-first">{{headers/t_last}}</th>
                    <td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>
                </tr>
                <tr>
                    <th class="Header column-first">{{headers/t_change}} (%)</th>
                    <td class="Data {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}} %)</td>
                </tr>
                
            </table>
</script>

<%= site.newFooter("IRMiniquoteChart") %>