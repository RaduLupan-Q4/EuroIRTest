<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>


<%= site.newHeader("IRChart") %>

<% string language = "en";
    language = Request["language"];

    if (language == "sk")
    {
        language = "sk";
    }

    else if (language == "pl")
            {
        language = "pl";

    }

%>
<script type="text/javascript">
    var activeModules = ['IRQuote'];
    var activeFeatures = [];
</script>

<div class="IRQuoteModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
   
<div class="tabs-container">
    <div id="container" class="tabs">
        <ul>
            <li class="tabitem chart1"><a id="tab1" class="current">{{headers/t_bratislava_stock_exchange}}</a></li>
            <li class="tabitem chart2"><a id="tab2">{{headers/t_warsaw_stock_exchange}}</a></li>
            <li class="tabitem chart3 tab-last"><a id="tab3">{{headers/t_prague_stock_exchange}}</a></li>
        </ul>
        <div id="tab-1">
            <iframe src="chart.aspx?listing=1&language=<%= language %>" class="chartIFrame"></iframe>
        </div>
        
        <div id="tab-2" class="hidder">
            <iframe src="chart.aspx?language=<%= language %>" class="calcIFrame"></iframe>
        </div>
        
        <div id="tab-3" class="hidder">
            <iframe src="chart.aspx?listing=2&language=<%= language %>" class="lookupIFrame"></iframe>
        </div>
 
    </div>
</div>
</script>

<%= site.newFooter("IRChart") %>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript">
    
    $(document).ready(function(){

    $(document).on('click', ".chart1", function(){
        $("#tab2, #tab3").removeClass('current');
        $("#tab1").addClass('current');
        $("#tab-1").removeClass('hidder');
        $("#tab-2, #tab-3").addClass('hidder');
    });
    $(document).on('click', ".chart2", function(){
        $("#tab3, #tab1").removeClass('current');
        $("#tab2").addClass('current');
            $("#tab-2").removeClass('hidder');
        $("#tab-1, #tab-3").addClass('hidder');
    });
     $(document).on('click', ".chart3", function(){
        $("#tab2, #tab1").removeClass('current');
        $("#tab3").addClass('current');
            $("#tab-3").removeClass('hidder');
        $("#tab-2, #tab-1").addClass('hidder');
    });

});

</script>