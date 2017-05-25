<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:300,400,700"" type=""text/css"" />";
%>

<%= site.newHeader("IRChartMini") %>
<style>
    body {
        background: #82358C;
        font-family: 'AzoSans-Regular', Arial, sans-serif;
        overflow: hidden;
    }

    .IRChartOuter .IRChartCurrency {
        color: #fff;
        top: 0;
    }

    .IRChartOuter{border: 1px solid #a377b0 !important;}

    .IRChartHTMLMiniPlaceholder .highcharts-xaxis-labels text, .IRChartHTMLMiniPlaceholder .highcharts-yaxis-labels, .highcharts-axis-labels.highcharts-yaxis-labels text {
        fill: #fff !important;
        font-size: 10px !important;
    }

    .IRChartHTMLMiniPlaceholder path {
        stroke: #a377b0 !important;
        stroke-width: 2 !important;
    }

    .IRChartHTMLMiniPlaceholder .highcharts-tooltip path {
        opacity: 0 !important;
    }

    .chartCurrentPriceBox, .chartCurrentPriceBoxArrow .irCPB1, .chartCurrentPriceBoxArrow .irCPB2, .chartCurrentPriceBoxArrow .irCPB3 {
        background-color: #a377b0 !important;
    }

    .IRChartHTMLMiniPlaceholder .highcharts-grid path {
        stroke-width: 1 !important;
    }
</style>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script type="text/javascript">
    var activeModules = ['IRChartHTMLMini'];
</script>

<div class="IRChartOuter">

    <div class="IRChartHeader">
        <div class="IRChartClientName"><span class="ajaxLoader">Loading...</span></div>
        <div class="IRChartCurrency">&nbsp;</div>
    </div>
    <div class="IRChartMiniHTMLPlaceholder">
        <div class="IRChartHTMLPlaceholder IRChartHTMLMiniPlaceholder">
            <span class="ajaxLoader">Loading</span>
        </div>
    </div>
</div>

<%= site.newFooter("IRChartMini") %>