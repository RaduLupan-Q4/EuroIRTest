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

    
    <table class="miniquoteChartTable">
        <tr>
            <th rowspan="2" class="Symbol" style="text-align: left;">{{stocks/symbol}}</th>
            <td class="lastColumn">{{headers/t_price}}:   <span style="min-width: 110px; float: right;">{{stocks/currency}} {{decimals stocks/last}}</span></td>
        </tr>
        <tr><td class="lastColumn">{{headers/t_change}}:<span style="min-width: 110px; float: right;"><span class="{{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</span> <span class="{{showArrow stocks/change}}"></span></span></td>
        </tr>
        
    </table>
    <div class="timestamp">{{headers/t_last_updated}} : {{showDateTime stocks/timestamp}} HKT</div>
        
    <div class="IRMiniquoteChartPlaceholder"></div>

    <table class="disclaimerRKD" style="width: 100%; border: 0px; padding: 0px; margin-top: 5px;">
        <tr>
            <td style="text-align: center; padding: 0px; color: #888888;">
                <span style="text-align: center; font-size: 10px; color: #333333; font-family: Arial, Helvetica, sans-serif;">Quote data provided 
					by &#169;Thomson Reuters Limited. <a target="_blank" href="http://media.corporate-ir.net/media_files/irol/17/176279/Terms_Conditions.html" style="text-align: center;  ">Click for restrictions</a> </span>
            </td>
        </tr>
    </table>

</script>
<div class="IRMiniquoteChartPlaceholder"></div>



<div style="display: none;">
    <%= site.newFooter("IRMiniquoteChart") %>
</div>
