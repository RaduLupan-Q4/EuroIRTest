<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""https://fonts.googleapis.com/css?family=Fira+Sans:400,300,500,700""/>";
%>
<%= site.newHeader("IRMiniquoteChart") %>


<style>
    body {
        font-family: Tahoma, Helvetica, Arial, sans-serif;
    }

    .table-look th, .table-look td, .table-look {
        border: none;
        font-size: 11px;
        line-height: 15px;
        padding: 3px;
        height: 0;
    }

        .table-look tr {
            height: 25px;
            border-bottom: 1px dotted #CCC;
        }

    th.miniquoteHeader {
        text-align: left;
    }
</style>

<script type="text/javascript">
    var activeModules = ["IRMiniquoteChart"];
</script>


<div class="IRMiniquoteChartModule">
    <span class="ajaxLoader">Loading</span>
</div>




<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">
    <div class="mainWrapper">

        <div class="miniquoteTableWrapper">
            <div class="table-wrapper">
                <table class="IRMiniquoteChart table-look horizontal">
                    <tr>
                        <th class="miniquoteHeader">{{headers/t_symbol}}</th>
                        <td class="miniquoteData">{{stocks/symbol}}</td>
                    </tr>
                    <tr>
                        <th class="miniquoteHeader">{{headers/t_last}}</th>
                        <td class="miniquoteData"><span class="{{showArrow stocks/change}}"></span>{{decimals stocks/last}} {{stocks/currency}}</td>
                    </tr>
                    <tr>
                        <th class="miniquoteHeader">{{headers/t_change}}</th>
                        <td class="miniquoteData">{{decimals stocks/change}} ({{decimals stocks/changePercent}} %)</td>
                    </tr>
                    <tr>
                        <th class="miniquoteHeader">{{headers/t_volume}}</th>
                        <td class="miniquoteData">{{toLocal stocks/volume}} </td>
                    </tr>
                    <tr>
                        <th class="miniquoteHeader">{{headers/t_days_range}}</th>
                        <td class="miniquoteData">{{stocks/low}} - {{stocks/high}}</td>
                    </tr>
                    <tr>
                        <th class="miniquoteHeader">{{headers/t_52w_range}}</th>
                        <td class="miniquoteData">{{stocks/low52Week}} - {{stocks/low52Week}}</td>
                    </tr>

                    <tr>
                        <th class="miniquoteHeader">{{headers/t_last_updated}}</th>
                        <td class="miniquoteData">{{showDateWithFormat stocks/tradeTimestamp 'DD/MM/YYYY HH:mm'}} </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="quoteWrapper">
            <div style="height: 203px;" class="IRMiniquoteChartPlaceholder"></div>
        </div>
    </div>
</script>



<%= site.newFooter("IRMiniquoteChart") %>
