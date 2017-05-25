<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
	IRSite site = new IRSite();
%>
<%= site.newHeader("IRLookup2") %>

 <script type="text/javascript">
		var activeModules = ["IRLookup"];
	</script>

	<div class="IRLookupModule">
		<div class="IRChartColour"></div>
		<span class="ajaxLoader">Loading</span>
	</div>



	<script id="IRLookupTemplate" type="text/x-handlebars-template">
	
	<div class="tabs-container">

	<div id="container" class="tabs lookup">
		<ul>
			<li class="tabitem nyse current" data-listing="0"><span class="exchange-span first current-span"></span>NYSE</li>
			<li class="tabitem merval" data-listing="1"><span class="exchange-span second"></span>MERVAL</li>
		</ul>
	</div>
</div>

		<div class="IRChartLookupPlaceholder" style="display:none"></div>
		
		<form id="lookup-table-form">
			<div class="from">
				<label>{{t_start_date}}</label>

				{{{selectFromDay}}}
				{{{selectFromMonth}}}
				{{{selectFromYear}}}
			

			</div>
			<div class="to">
				<label>{{t_end_date}}</label>
				{{{selectToDay}}}
				{{{selectToMonth}}}
				{{{selectToYear}}}
			</div>
			<div class="lookupSubmitButtonWrapper">
			<div class="submit" id="refreshiframe">{{t_look_up}}</div>
			</div>
			
		</form>
		<iframe src="about:blank" class="lookup-table" id="lookupIframe" scrolling="yes"></iframe>
	</script>

	<script id="IRLookupTableTemplate" type="text/x-handlebars-template">
		<table class="IRLookupResultsTable table-look horizontal responsive">
			<tr>
				<th class="Header column-first date">{{headers/t_date}}</th>
				<th class="Header open">{{headers/t_open}}</th>
				<th class="Header high">{{headers/t_high}}</th>
				<th class="Header low">{{headers/t_low}}</th>
				<th class="Header">{{headers/t_close}}</th>
				<th class="Header column-last volume">{{headers/t_volume}}</th>
			</tr>
			{{#each closePrices}}
			<tr>
				<td class="Data column-first date">{{date}}</td>
				<td class="Data price">{{decimal openPrice 2}}</td>
				<td class="Data high">{{decimal high 2}}</td>
				<td class="Data low">{{decimal low 2}}</td>
				<td class="Data">{{decimal closePrice 2}}</td>
				<td class="Data column-last volume">{{toLocal volume}} <span class="volume-text"></span></td>
			</tr>
			{{/each}}
		</table>
</script>

<%= site.newFooter("IRLookup2") %>

<script type="text/javascript" src="informParentSite_3.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("informParentSite_3.js")).Ticks.ToString()%>"></script>

<script type="text/javascript">
		var globalListing = 0;

		function updateTimeframe(){
			var lang = getParameterByName('language') ? '&language=' + getParameterByName('language') : '';
			var graphUrlTemplate = "lookup2.aspx?mode=list&from=__FROM__&to=__TO__&frequency=Daily&listing="+ globalListing + lang;
		
			var fromYear = $('#from-year').val();
			var fromMonth = Number($('#from-month').val())+1;
			var fromDay = $('#from-day').val();
			var toYear = $('#to-year').val();
			var toMonth = Number($('#to-month').val())+1;
			var toDay = $('#to-day').val();
			
			fromMonth = ('0' + fromMonth).slice(-2);
			toMonth = ('0' + toMonth).slice(-2);
			fromDay = ('0' + fromDay).slice(-2);
			toDay = ('0' + toDay).slice(-2);
			console.log(fromYear, fromMonth, fromDay);
			console.log(toYear, toMonth, toDay);
			var graphUrl = graphUrlTemplate.replace(/__FROM__/, (fromYear+'-'+fromMonth+'-'+fromDay)).replace(/__TO__/, (toYear+'-'+toMonth+'-'+toDay));
			$('#lookupIframe').attr('src', graphUrl);

			var rowCount2 = $('.IRLookupResultsTable').find('tr').index();
			console.log('rowCount2:' + rowCount2);
			

		    //$('#lookupIframe').attr('src', '../lookup.aspx?');

			var sizeToSend = "68";
			if ($(".IRLookupModule tr").length == 2) {
			    console.log('length is 2');
			    sizeToSend = "98";
			}
			if ($(".IRLookupModule tr").val() == 3) {
			    console.log('entries per row: 3');
			    sizeToSend = "134";
			}
			if ($(".IRLookupModule tr").val() == 4) {
			    console.log('entries per row: 4');
			    sizeToSend = "680";
			}
			if ($(".IRLookupModule tr").val() == 5) {
			    sizeToSend = "840";
			    console.log('entries per row: 5');
			}
			if ($(".IRLookupModule tr").val() == 6) {
			    sizeToSend = "1780";
			}
			if ($(".IRLookupModule tr").val() == 7) {
			    sizeToSend = "1780";
			}
			if ($(".IRLookupModule tr").val() == 8) {
			    sizeToSend = "1780";
			}
			if ($(".IRLookupModule tr").val() == 9) {
			    sizeToSend = "1780";
			}
			if ($(".IRLookupModule tr").val() == 10) {
			    sizeToSend = "1780";
			}
			if ($(".IRLookupModule tr").val() == 11) {
			    sizeToSend = "1780";
			}
			if ($(".IRLookupModule tr").val() == 12) {
			    sizeToSend = "1780";
			}
			if ($(".IRLookupModule tr").val() == 13) {
			    sizeToSend = "1780";
			}
			if ($(".IRLookupModule tr").val() == 14) {
			    sizeToSend = "520";
			}

			console.log('sizeToSend:' + sizeToSend);
			informParentSite(sizeToSend);


		}
		function initializeLookupCustom(){
				$('#lookup-table-form div.submit').click(function(){
					updateTimeframe();
				});
				if (getParameterByName("mode") === "list") {
					$('body').css('overflow-y','auto');
					$('.disclaimer-IRLookup2').css('display','none');
				} else{
					updateTimeframe();
				}
		}
		$(function() {
			$(document).on('click', '.tabs.lookup li',  function(){
				globalListing = $(this).data('listing');
				updateTimeframe();
			})
});

document.ready = function () {
	$( document ).ajaxStop(function() {
	
		if (getParameterByName('language') == "es") {
			$('.volume-text').text("ADR");
		}
		else {
			$('.volume-text').text("Shares");
		}
		
		 $('iframe').each(function(){
				
			if($(this).attr('scrolling')=='no') {
				$(this).attr('scrolling','yes');
				$(this).attr("src", $(this).attr("src"));
			}
		});

	initializeLookupCustom();
	});
}  
function getParameterByName(key) { // Returns URL Parameter by the key
   var results = new RegExp('[\?&]' + key + '=([^&#]*)').exec(window.location.href);
   try {
	   return results[1];
   }
   catch (err) {
	   return 0;
   }
}




$(document).ready(function () {
  

		$(document).on('click', ".nyse", function(){
			$(".first").addClass('current-span');
			$(".second").removeClass('current-span');
			$(".nyse").addClass('current');
			 $(".merval").removeClass('current');
		  });
		$(document).on('click', ".merval", function(){
			$(".first").removeClass('current-span');
			$(".second").addClass('current-span');
			$(".nyse").removeClass('current');
			$(".merval").addClass('current');
		});

		
});



        <%
            if (Request.UserAgent.Contains("IE 6") || Request.UserAgent.Contains("IE 7"))
            {
        %>

        // IE 6 and IE 7 (Fragment Identifier)
        var lastSize = "";
        function checkForMessages() {
            if (location.hash != lastSize) {

                lastSize = location.hash.replace("#","").replace("size","");
                $("#sizeRecieved").html(lastSize);
                $("#iframe").height(lastSize);
                
            }
        }
        setInterval(checkForMessages, 500);

        <%
        }
        else
        { 
            %>

    // All other browsers and devices (parent.postMesage)
    
        function listener(event) {
            $("#lookupIframe").height(parseInt(event.data));
            $(".IRLookupModule").html(parseInt(event.data));
        }
        if (window.addEventListener) {
            addEventListener("message", listener, false);
        }
        else {
            attachEvent("onmessage", listener);
        }

    <%
        }
    %>



    </script>
    
