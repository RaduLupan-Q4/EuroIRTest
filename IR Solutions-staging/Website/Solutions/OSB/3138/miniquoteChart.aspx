<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite(); %>
<%= site.newHeader("IRMiniquoteChart") %>


<script type="text/javascript">
    var activeModules = ["IRMiniquoteChart"];
</script>

<div class="IRMiniquoteChartModule">
    <span class="ajaxLoader">Loading</span>
</div>



<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">
    
    <div class="table-wrapper">
    <table class="IRMiniquoteChart table-look horizontal">
            <tr class="showLastPrice">
                <%--<th class="Header miniquoteChart">{{headers/t_last}}</th>--%>
                <td class="Data"><span class="lastPriceCurrencyWrapper"><span class="lastPriceWrapper">{{decimals stocks/last}}</span> <span style="font-size: 20px; font-family: 'FS Me Web Bold', Arial, sans-serif;">{{showCurrency}} </span></span><span class="exchangeChangePercentWrapper"><span style="padding-right: 3px;">LSE</span> <span class="{{showArrow stocks/change}}"></span>{{decimals stocks/changePercent}}%</span></td>
            </tr>
           
            <tr>
               <%-- <th class="Header Timestamp miniquoteChart">{{headers/t_updated}}</th>--%>
                <td class="Data Timestamp">{{showDateWithFormat timestamp 'DD MMM YYYY'}} at {{showDateWithFormat timestamp 'HH:mm'}}</td>
            </tr>
       
        </table>
        </div>
    <div class="IRMiniquoteChartPlaceholder"></div>
</script>


<%= site.newFooter("IRMiniquoteChart") %>


