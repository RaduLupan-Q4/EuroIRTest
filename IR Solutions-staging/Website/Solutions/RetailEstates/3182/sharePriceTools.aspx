<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>


<%= site.newHeader("IRChart") %>

<% string language = "en";
   language = Request["language"];

   if (language == "fr")
   {
       language = "fr";
   }

   else if (language == "nl")
           {
       language = "nl";
   }

%>

<style>
	.disclaimer {
		display: none;
	}
</style>

<script type="text/javascript">
    var activeModules = ['IRQuote'];
    var activeFeatures = [];
</script>

<div class="IRQuoteModule"></div>

<script id="IRQuoteTableTemplate" type="text/x-handlebars-template">
   
<div class="tabs-container">
    <div id="container" class="tabs">
        <ul>
            <li class="tabitem" id="tab1"><a>{{headers/t_share_graph}}</a></li>
            <li class="tabitem" id="tab2"><a>{{headers/t_share_information}}</a></li>
            <li class="tabitem" id="tab3"><a>{{headers/t_historical_lookup}}</a></li>
            <li class="tabitem" id="tab4"><a>{{headers/t_investment_calculator}}</a></li>
        </ul>
        <div id="tab-1">
            <iframe src="chart.aspx?language=<%= language %>" class="chartIFrame"></iframe>
        </div>
        
        <div id="tab-2">
            <iframe src="profile.aspx?language=<%= language %>" class="calcIFrame"></iframe>
        </div>
        
        <div id="tab-3">
            <iframe src="lookup.aspx?language=<%= language %>" class="calcIFrame"></iframe>
        </div>
        
        <div id="tab-4">
            <iframe src="calc.aspx?language=<%= language %>" class="lookupIFrame"></iframe>
        </div>
 
    </div>
</div>
</script>

<%= site.newFooter("IRChart") %>

<script>
$(document).ready(function(){	
    $(document).on('click', "#tab2", function(){
        $('li').removeClass('currentActive');
        $(this).addClass('currentActive');
        $("#tab-2").show();
        $("#tab-1").hide();
        $("#tab-3").hide();
        $("#tab-4").hide();
    });
    $(document).on('click', "#tab3", function(){
        $('li').removeClass('currentActive');
        $(this).addClass('currentActive');
        $("#tab-3").show();
        $("#tab-1").hide();
        $("#tab-2").hide();
        $("#tab-4").hide();
    });
     $(document).on('click', "#tab1", function(){
        $('li').removeClass('currentActive');
        $(this).addClass('currentActive');
        $("#tab-1").show();
        $("#tab-3").hide();
        $("#tab-2").hide();
        $("#tab-4").hide();
    });
    $(document).on('click', "#tab4", function(){
        $('li').removeClass('currentActive');
        $(this).addClass('currentActive');
        $("#tab-4").show();
        $("#tab-3").hide();
        $("#tab-2").hide();
        $("#tab-1").hide();
    });
    
    setTimeout(function() {
		$("#tab1").trigger('click');
	},300);
});
</script>