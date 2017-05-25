<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>


<%= site.newHeader("IRChart") %>

<div class="tabs-container">

        <div id="container" class="tabs">
            <ul>
                <li class="tabitem sharePriceChart">Share Price Chart</li>
                <li class="tabitem investCalc">Investment Calculator</li>
                <li class="tabitem HistorLookup">Historical Lookup</li>
                <li class="tabitem profileProf">Profile</li>
            </ul>

            <div id="tab-1">
                <iframe src="chart.aspx" class="iframe-chart"></iframe>
            </div>
            <div id="tab-2" class="hidder">
                <iframe src="calc.aspx" class="iframe-calc"></iframe>
            </div>
            <div id="tab-3" class="hidder">
                <iframe src="lookup.aspx" class="iframe-lookup"></iframe>
            </div>
            <div id="tab-4" class="hidder">
                <iframe src="profileNew.aspx" class="iframe-profile"></iframe>
            </div>
        </div>
</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript">
    
    $(document).ready(function(){
        $(".sharePriceChart").addClass('current');
    $(document).on('click', ".sharePriceChart", function(){
        $('li').removeClass('current');
        $(this).addClass('current');
        $("#tab-1").removeClass('hidder');
        $("#tab-2, #tab-3, #tab-4").addClass('hidder');
    });
    $(document).on('click', ".investCalc", function(){
        $('li').removeClass('current');
        $(this).addClass('current');
            $("#tab-2").removeClass('hidder');
        $("#tab-1, #tab-3, #tab-4").addClass('hidder');
    });
     $(document).on('click', ".HistorLookup", function(){
        $('li').removeClass('current');
        $(this).addClass('current');
            $("#tab-3").removeClass('hidder');
        $("#tab-2, #tab-1, #tab-4").addClass('hidder');
    });
        $(document).on('click', ".profileProf", function(){
        $('li').removeClass('current');
        $(this).addClass('current');
            $("#tab-4").removeClass('hidder');
        $("#tab-2, #tab-3, #tab-1").addClass('hidder');
    });
});

</script>


<%= site.newFooter("IRChart") %>
