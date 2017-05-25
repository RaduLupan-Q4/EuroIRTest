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
            <table class="IRMiniquoteChart table-look horizontal">
                <tr>
                    <th class="Header symbol column-first">{{stocks/symbol}}</th>
                    <td class="Data {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}}</td>
                </tr>
                <tr>
                    <th class="Header updated column-first">{{headers/t_as_of}} {{showDateWithFormat stocks/timestamp 'DD/MM/YYYY HH:MM'}} {{showLocalTimeZoneShort}}</th>
                    <td class="Data last"></td>
                </tr>
            </table>

    
<div class="IRMiniquoteChartPlaceholder"></div>

            <table class="IRMiniquoteChart table-look horizontal">
            	<tr>
                    <th class="Header updated column-first">{{headers/t_last}}</th>
                    <td class="Data last">{{decimals stocks/last}} {{stocks/currency}}</td>
                </tr>
                <tr>
                    <th class="Header column-first">{{headers/t_high}} / {{headers/t_low}}</th>
                    <td class="Data">{{decimals stocks/high}} / {{decimals stocks/low}}</td>
                </tr>
                <tr>
                    <th class="Header change column-first">{{headers/t_volume}}</th>
                    <td class="Data change">{{toLocal stocks/volume}}</td>
                </tr>
                
            </table>

</script>

<%= site.newFooter("IRMiniquoteChart") %>