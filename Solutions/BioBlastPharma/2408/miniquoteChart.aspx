<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();

%>
<%= site.newHeader("IRMiniquoteChart") %>


<script type="text/javascript">
    var activeModules = ["IRMiniquoteChart"];
</script>

<div class="IRMiniquoteChartModule">
    <span class="ajaxLoader">Loading</span>
</div>

<script type="text/javascript">
    var activeModules = ["IRMiniquoteChart"];
</script>



<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="headerMiniquote">{{stocks/exchangeName}}: {{stocks/symbol}}</div>
            <table class="miniquoteTableNew">
                <tr>
                    <th class="Header" colspan="2">{{stocks/currency}} {{decimals stocks/last}}
                    </th>
                    <th>{{decimals stocks/change}} ({{decimals stocks/changePercent}}%)
                    </th>
                </tr>
                <tr>
                    <td class="Header high">{{headers/t_high}}
                    </td>
                    <td>{{stocks/high}}
                    </td>
                    <td>{{showTime timestamp}}</td>
                </tr>
                <tr>
                    <td class="Header low">{{headers/t_low}}
                    </td>
                    <td>{{stocks/low}}
                    </td>
                    <td>{{showDateWithFormat timestamp 'MMM DD, YYYY'}}</td>
                </tr>
                <tr>
                    <td class="Header volume">{{headers/t_volume}}
                    </td>
                    <td>{{stocks/volume}}
                    </td>
                    <td>

                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div class="IRMiniquoteChartPlaceholder"></div>


</script>


<%= site.newFooter("IRMiniquoteChart") %>
   