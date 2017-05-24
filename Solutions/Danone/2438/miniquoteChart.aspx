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
     <div class="IRMiniquoteChartPlaceholder"></div>
        <div class="IRMiniQuoteQuoteModule table-look responsive">
            <div class="miniquoteDetailsWrapper miniquoteChartWrapper">
                <div>
                    <div class="Header">{{headers/t_current}}</div>
                    <div class="Data">{{decimals stocks/last}}</div>
                    <div class="Header">{{headers/t_change}}</div>
                    <div class="Data {{formatColour stocks/change}}"> <span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</div>
                    <div class="Header">{{headers/t_last_updated}}</div>
                    <div class="Data">{{showDateWithFormat timestamp 'HH:mm DD MMM YYYY'}}</div>
                </div>
            </div>
        </div>
        


    </script>


<%= site.newFooter("IRMiniquoteChart") %>
   