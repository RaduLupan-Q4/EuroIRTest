<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    //site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>


<%= site.newHeader("IRQuote") %>
<meta name="viewport" content="width=device-width, initial-scale=1" />

<% string language = "en";
    language = Request["language"];

    if (language != "dk")
    {
        language = "en";
    }
%>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
    var activeFeatures = [];
</script>
<div class="IRTabsWrapper">
    <div class="IRQuoteModule" style="border-top:0;"></div>
</div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">

    <div class="tabs-container">
        <div id="container" class="tabs">
            <ul>
                <li class="tabitem tab1 tab-first"><a id="tab1" class="current">{{headers/t_share_graph}}</a></li>
                <li class="tabitem tab2"><a id="tab2">{{headers/t_share_data}}</a></li>
                <li class="tabitem tab3"><a id="tab3">{{headers/t_trades}}</a></li>
                <li class="tabitem tab4"><a id="tab4">{{headers/t_order_depth}}</a></li>
                <li class="tabitem tab5 tab-last"><a id="tab5">{{headers/t_performance}}</a></li>
            </ul>
            <div id="tab-1">
                <iframe src="chart.aspx?language=<%= language %>" class="chartIFrame"></iframe>
            </div>

            <div id="tab-2" class="hidden">
                <iframe src="profile.aspx?language=<%= language %>" class="profileIFrame"></iframe>
            </div>

            <div id="tab-3" class="hidden">
                <iframe src="trades.aspx?language=<%= language %>" class="tradesIFrame"></iframe>
            </div>
            <div id="tab-4" class="hidden">
                <iframe src="orders.aspx?language=<%= language %>" class="ordersIFrame"></iframe>
            </div>
            <div id="tab-5" class="hidden">
                <iframe src="performance.aspx?language=<%= language %>" class="performanceIFrame"></iframe>
            </div>

        </div>
    </div>
</script>

<%= site.newFooter("IRQuote") %>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript">

    $(document).ready(function () {

        $(document).on('click', ".tab1", function () {
            $("#tab2, #tab3, #tab4, #tab5").removeClass('current');
            $("#tab1").addClass('current');
            $("#tab-1").removeClass('hidden');
            $("#tab-2, #tab-3, #tab-4, #tab-5").addClass('hidden');
        });
        $(document).on('click', ".tab2", function () {
            $("#tab1, #tab3, #tab4, #tab5").removeClass('current');
            $("#tab2").addClass('current');
            $("#tab-2").removeClass('hidden');
            $("#tab-1, #tab-3, #tab-4, #tab-5").addClass('hidden');
        });
        $(document).on('click', ".tab3", function () {
            $("#tab1, #tab2, #tab4, #tab5").removeClass('current');
            $("#tab3").addClass('current');
            $("#tab-3").removeClass('hidden');
            $("#tab-1, #tab-2, #tab-4, #tab-5").addClass('hidden');
        });
        $(document).on('click', ".tab4", function () {
            $("#tab1, #tab2, #tab3, #tab5").removeClass('current');
            $("#tab4").addClass('current');
            $("#tab-4").removeClass('hidden');
            $("#tab-1, #tab-2, #tab-3, #tab-5").addClass('hidden');
        });
        $(document).on('click', ".tab5", function () {
            $("#tab1, #tab2, #tab3, #tab4").removeClass('current');
            $("#tab5").addClass('current');
            $("#tab-5").removeClass('hidden');
            $("#tab-1, #tab-2, #tab-3, #tab-4").addClass('hidden');
        });
    });

</script>
