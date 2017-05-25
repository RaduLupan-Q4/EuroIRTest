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

    <div class="miniquoteDetailsWrapper">                      
        <div class="Data last"><span class="last-span">{{decimals stocks/last}} </br><span class="last-currency">{{stocks/currency}}</span></span></div>
        <div class="Data change">{{decimals stocks/change}} ({{decimals stocks/changePercent}} %) 

        	<div class="Data closeDate">{{showDateWithFormat timestamp 'DD MMM YYYY'}} {{showTime time}} {{showLocalTimeZoneShort}}</div>

        </div> 
    </div> 

</script>

<%= site.newFooter("IRMiniquoteChart") %>