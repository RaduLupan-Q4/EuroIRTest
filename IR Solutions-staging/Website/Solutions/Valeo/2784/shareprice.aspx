<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>


<%= site.newHeader("IRChart") %>

<% string language = "en";
    language = Request["language"];

    if (language != "fr")
    {
        language = "en";
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
            <li class="tabitem"><a id="tab1">{{headers/t_share_price}}</a></li>
            <li class="tabitem"><a id="tab2">{{headers/t_investment_calculator}}</a></li>
            <li class="tabitem"><a id="tab3">{{headers/t_historical_lookup}}</a></li>
        </ul>
        <div id="tab-1">
            <iframe src="chart.aspx?language=<%= language %>" class="chartIFrame"></iframe>
        </div>
        
        <div id="tab-2">
            <iframe src="calc.aspx?language=<%= language %>" class="calcIFrame"></iframe>
        </div>
        
        <div id="tab-3">
            <iframe src="lookup.aspx?language=<%= language %>" class="lookupIFrame"></iframe>
        </div>
 
    </div>
</div>
</script>

<%= site.newFooter("IRChart") %>

<script>
$(document).ready(function(){
    $(document).on('click', "#tab2", function(){
        $('a').removeClass('currentActive');
        $(this).addClass('currentActive');
        $("#tab-2").show();
        $("#tab-1").hide();
        $("#tab-3").hide();
    });
    $(document).on('click', "#tab3", function(){
        $('a').removeClass('currentActive');
        $(this).addClass('currentActive');
        $("#tab-3").show();
        $("#tab-1").hide();
        $("#tab-2").hide();
    });
     $(document).on('click', "#tab1", function(){
        $('a').removeClass('currentActive');
        $(this).addClass('currentActive');
        $("#tab-1").show();
        $("#tab-3").hide();
        $("#tab-2").hide();
    });
});
</script>