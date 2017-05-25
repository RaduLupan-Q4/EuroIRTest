<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();%>
<%= site.newHeader("IRMiniquoteChart") %>


<script type="text/javascript">
    var activeModules = ['IRMiniquote', 'IRMiniquoteChart'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
           <div class="containerData">
                <div class="currency">{{decimals stocks/last}}<span class="Data last"></span> {{stocks/currency}}</div>
               <div class="Data change {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}} <span class="{{showArrow stocks/change}} arrowRight"></span>{{decimals stocks/changePercent}} % </div>
           </div>
           <div class="containerData">
                <div class="Data txtBold">{{headers/t_ticker}}: <span class="txt">{{stocks/symbol}}</span></div>
                <div class="Data txtBold txtRight">{{headers/t_market}}:
<!--                    <span class="txt">{{stocks/exchangeName}}</span>-->
                    <span class="txt">LSE</span>
                </div>
           </div>
        </div>       
    </div>

</script>
<div class="IRMiniquoteChartModule">
    <span class="ajaxLoader">Loading</span>
</div>
<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">
<div class="IRMiniquoteChartPlaceholder"></div>
    

</script>

<%= site.newFooter("IRMiniquoteChart") %>