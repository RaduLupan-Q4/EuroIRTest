<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
      site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css"" type=""text/css"" />";
%>
<%= site.newHeader("IRLookup") %>


 <script type="text/javascript">
        var activeModules = ["IRLookup"];
    </script>

    <div class="IRLookupModule">
        <div class="IRChartColour"></div>
        <span class="ajaxLoader">Loading</span>
    </div>



    <script id="IRLookupTemplate" type="text/x-handlebars-template">
        <div class="IRChartLookupPlaceholder" style="display:none"></div>
		
		<form id="lookup-table-form">
			<div>
				<label>{{t_from}}</label>
				<input class="js-from" value="13-01-2016<%--<%=DateTime.Now.AddYears(-1).ToString("dd-MM-yyyy")%>--%>" id="datepicker-from" type="text" style="">
			</div>
			<div>
				<label>To</label>
				<input class="js-to" value="<%=DateTime.Now.ToString("dd-MM-yyyy")%>" id="datepicker-to" type="text">
			</div>
			<div>
			<div class="submit" style="">{{t_lookup}}</div>
			</div>
		</form>
		<iframe src="about:blank" class="lookup-table" id="lookupIframe"></iframe>
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
                <td class="Data price">{{decimals openPrice}}</td>
                <td class="Data high">{{decimals high}}</td>
                <td class="Data low">{{decimals low}}</td>
                <td class="Data">{{decimals closePrice}}</td>
                <td class="Data column-last volume">{{toLocal volume}}</td>
            </tr>
            {{/each}}
        </table>
</script>


<%= site.newFooter("IRLookup") %>

 <script type="text/javascript">
		function updateTimeframe(){
            var graphUrlTemplate = "lookup.aspx?mode=list&from=__FROM__&lcid=1040&to=__TO__&frequency=Daily&listing=0";
			var fromSplitted = $("input.js-from").val().split('-');
			var toSplitted = $("input.js-to").val().split('-');

			var graphUrl = graphUrlTemplate.replace(/__FROM__/, (fromSplitted[2]+'-'+fromSplitted[1]+'-'+fromSplitted[0])).replace(/__TO__/, (toSplitted[2]+'-'+toSplitted[1]+'-'+toSplitted[0]));
			$('#lookupIframe').attr('src',graphUrl);
		}
		function initializeLookupCustom(){
				$('#lookup-table-form div.submit').click(function(){
					updateTimeframe();
				});
				if (getParameterByName("mode") === "list") {
					$('body').css('overflow-y','scroll');
					$('.disclaimer-IRLookup').css('display','none');
				} else{
					updateTimeframe();
				}
		}
        $(function() {
			var initiatedLookup=false;
			setInterval(function(){
				if(initiatedLookup==false){
					try{
						if($('.IRChartLookupPlaceholder').html().length>10 && initiatedLookup==false){ //If main Lookup handlebars loaded
							initializeLookupCustom();
							initiatedLookup=true;
							
							$("#datepicker-from").datepicker({
								dateFormat: "dd-mm-yy"
							});
							$("#datepicker-to").datepicker({
								dateFormat: "dd-mm-yy"
							});
						}
					} catch(err){
					}
					try{
						if($('.IRLookupResultsTable').html().length>200){//If main LookupList handlebars loaded
							initializeLookupCustom();
							initiatedLookup=true;
						}
					} 
					catch(err){
					}
				}
			},200);
			setInterval(function(){
				$('iframe').each(function(){
				
					if($(this).attr('scrolling')=='no') {
						$(this).attr('scrolling','yes');
						$(this).attr("src", $(this).attr("src"));
					}
				});
			},2000);
			/**/
        });
</script>
<script>
</script>


<link rel="stylesheet" href="lookup.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("lookup.css")).Ticks.ToString()%>" />