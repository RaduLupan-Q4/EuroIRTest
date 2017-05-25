<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Lato:400,300,700""/>";
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
        <div class="miniquoteboxWrapper miniquoteChartWrapper">
            <div class="quoteWrapper">
                <span class="priceTitle">{{headers/t_price}}</span>
                <span class="last">{{stocks/currency}} {{decimals stocks/last}}
                    
                   <%--  <span class="{{showArrow stocks/change}}"></span>--%>
                </span>
                <span class="companyName">{{stocks/name}}
                    <br />
                   ({{stocks/symbol}}) - TASE</span>
            </div>
        </div>
    </div>
    <div class="IRMiniquoteChartPlaceholder"></div>
</script>




<%= site.newFooter("IRMiniquoteChart") %>
   