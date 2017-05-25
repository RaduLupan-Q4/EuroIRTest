<%@ page language="C#" autoeventwireup="true" %>

<%@ import namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>

<meta charset="UTF-8">
<link rel="stylesheet" href="font/Chevin/stylesheet.css" />

<%= site.newHeader("IRMiniquote") %>


<script type="text/javascript">
    var activeModules = ['IRMiniquote'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
        <div class="miniquoteDetailsWrapper">
        	<div class="Data last">{{decimals stocks/last}}p</div>
        	<div class="Data change-arrow"><span class="{{showArrow stocks/change}}"></span></div>
        	<div class="Data change"><span class="change-span">{{decimals stocks/change}}p</span> <span class="changeP-span">{{decimals stocks/changePercent}}%</span></div>
        	
        	<div class="Data updated">{{headers/t_update}} {{headers/t_time}}: <span class="update-time">{{showDateWithFormat stocks/timestamp 'HH:MM:SS DD-MMM-YYYY'}}</span></div>

        	<div class="text">This information typically has a 15 minute delay or is the last closed price. This does not reflect the price you may pay or receive when purchasing or selling shares. This service is for information only and is not an invitation or recommendation to invest. You should always take appropriate independent advice before making any investment decision. The price and value of securities can go down as well as up.</div>
        	<div class="text-share">Our latest share price</div>
        </div>         
</script>


<%= site.newFooter("IRMiniquote") %>

<script type="text/javascript">

$( document ).ajaxStop(function(){

    var changeValue = $(".change-span").text();
    var changePercValue = $(".changeP-span").text();

    var trimmed = changeValue.replace("-","");
    var trimmedP = changePercValue.replace("-","");

    $(".change-span").html(trimmed);
    $(".changeP-span").html(trimmedP);
});

</script>
