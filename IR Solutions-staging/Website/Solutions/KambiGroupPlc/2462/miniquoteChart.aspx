<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();
        site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
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
    <div class="IRMiniQuoteQuoteModule table-look responsive" style="border-top: 0;">
        <div class="miniquoteDetailsWrapper" style="border-top: 0; border-bottom: 0;">
            <div class="headerMiniquote" style="font-size: 18px;">{{stocks/exchangeName}}: {{stocks/symbol}}</div>
            <table class="miniquoteTableNew">
                <tr>
                    <th colspan="2" style="font-size: 18px; border-bottom: 0;">{{stocks/currency}} {{decimals stocks/last}} <span class="{{formatColour stocks/change}}" style="font-weight: normal; padding-left: 10px; font-size: 14px;"> {{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</span>
                    </th>
                   <%-- <td class="{{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%)
                    </td>--%>
                </tr>
                <%--<tr>
                    <td >{{headers/t_high}}
                    </td>
                    <td>{{stocks/high}}
                    </td>
                    <td>{{showTime timestamp}}</td>
                </tr>
                <tr>
                    <td >{{headers/t_low}}
                    </td>
                    <td>{{stocks/low}}
                    </td>
                    <td>{{showDate timestamp}}</td>
                </tr>
                <tr>
                    <td >{{headers/t_volume}}
                    </td>
                    <td>{{stocks/volume}}
                    </td>
                    <td>

                    </td>
                </tr>--%>
            </table>
        </div>
    </div>
    <div class="IRMiniquoteChartPlaceholder"></div>


</script>

<div style="display:none;">
<%= site.newFooter("IRChart") %>
   </div>