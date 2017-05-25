<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900|Oswald:400,300,700""/>";
    site.appendCustomCSSFont += @"<link rel=""stylesheet"" type=""text/css"" href=""http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700""/>";

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
                <div>
                    <div class="Data last">{{decimals stocks/last}}</div>
                    <div class="Data change {{formatColour stocks/change}}">{{decimals stocks/change}} ({{decimals stocks/changePercent}}%)</div>
                    <div class="Data symbol" style="color: #fff;">{{stocks/symbol}}</div>
                </div>
            </div>
        </div>
        <div class="IRMiniquoteChartPlaceholder"></div>


    </script>


<%= site.newFooter("IRMiniquoteChart") %>
   