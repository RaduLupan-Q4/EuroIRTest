<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700""/>";
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
            <div class="headerMiniquote snapTitle">{{stocks/name}}</div>
            <table class="miniquoteTableNew">
                <tr>
                    <th>{{headers/t_last}} € 
                    </th>
                    <td>{{decimals stocks/last}}</td>
                </tr>
                <tr>
                    <th>{{headers/t_change}} % 
                    </th>
                    <td class="{{formatColour stocks/change}}">{{decimals stocks/changePercent}}</td>
                </tr>
                <tr>
                    <th>{{headers/t_day_high}} €</th>

                    <td>{{stocks/high}}
                    </td>
                </tr>
                <tr>
                    <th>{{headers/t_day_low}} €</th>
                    <td>{{stocks/low}}</td>
                </tr>

            </table>
        </div>
    </div>
    <div class="IRMiniquoteChartPlaceholder"></div>


</script>


<%= site.newFooter("IRMiniquoteChart") %>
   