<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
      site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,500,700,300""/>";

      var language = Request.QueryString["language"];

      if (String.IsNullOrEmpty(language))
      {
          language = "en";
      }
     

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
        
		<div class="priceLookupHead"></div>
		
		<form id="lookup-table-form">
		
			<div class="lookupRow">

                    <label for="from-datepicker" class="input-label from-label">{{t_from}}</label>
                    <input class="js-from" value="10-04-2016" id="from-datepicker" type="text" style="">
			    </div>
                <div class="lookupRow">
                    <label for="to-datepicker" class="input-label to-label">{{t_to}} </label>
                    <input class="js-to" value="10-04-2017" id="to-datepicker" type="text">
                </div>

                <div class="conthidden" style="display: none">
                    {{{selectFromDay}}}
                    {{{selectFromMonth}}}
                    {{{selectFromYear}}}
                    {{{selectToDay}}}
                    {{{selectToMonth}}}
                    {{{selectToYear}}}
		        </div>
			

            <div class="input-row lookupRow">
                <label class="input-label format-label">{{t_format}} </label>
                <div class="input-wrapper dropdown closed">
                      <div class="title">HTML</div>
                      <div class="dropdown-menu">
                      <ul>
                        <li class="dropdownData" data-value="html">HTML</li>
                        <li class="dropdownData" data-value="excel">Excel</li>

                      </ul>
                      </div>
                </div>
            </div>
			<div class="input-row" style="visibility: hidden">
                <label class="input-label format-label">{{t_format}} </label>
                <div class="input-wrapper">
                    <select id="format" class="wide-input">
                        <option value="html">HTML</option>
                        <option value="excel">Excel</option>
                    </select>
                </div>
            </div>

<!--
			<div class="lookupSubmitButtonWrapper">
			<div class="submit" style="">Search</div>
			</div>
-->
          <div class="input-row" style="visibility: hidden">
            <label class="input-label frequency-label">{{t_frequency}}: </label>
            <div class="input-wrapper">
                <select id="frequency">
                    <option option="daily">{{t_daily}}</option>
                    <option option="monthly">{{t_monthly}}</option>
                    <option option="quarterly">{{t_quarterly}}</option>
                    <option option="yearly">{{t_yearly}}</option>
                </select>
            </div>
        </div>

           
<!--            <div class="excelButtonWrapper"><div class="downloadHistoricalData IRDownloadHistoricalDataAsExcel buttonLook" value="excel">Download</div></div>-->
            
                <div class="input-wrapper lookupButton">
                    <button type="submit" id="lookup-button" >{{t_download}}</button>
                    <button class="submit" type="button" >{{t_download}}</button>
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
                <td class="Data column-first date">{{showDateWithFormat date 'DD-MMM-YYYY'}}</td>
                <td class="Data price">{{decimal openPrice 2}}</td>
                <td class="Data high">{{decimal high 2}}</td>
                <td class="Data low">{{decimal low 2}}</td>
                <td class="Data">{{decimal closePrice 2}}</td>
                <td class="Data column-last volume">{{toLocal volume}}</td>
            </tr>
            {{/each}}
        </table>
</script>



<%= site.newFooter("IRLookup2") %>

<%--<script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>--%>


 <script type="text/javascript">
     function updateTimeframe() {

         var graphUrlTemplate = "lookup.aspx?language=<%= language %>&mode=list&from=__FROM__&to=__TO__&frequency=Daily&listing=0";
			var fromSplitted = $("input.js-from").val().split('-');
			var toSplitted = $("input.js-to").val().split('-');

			var graphUrl = graphUrlTemplate.replace(/__FROM__/, (fromSplitted[2]+'-'+fromSplitted[1]+'-'+fromSplitted[0])).replace(/__TO__/, (toSplitted[2]+'-'+toSplitted[1]+'-'+toSplitted[0]));
			$('#lookupIframe').attr('src',graphUrl);
		}
		function initializeLookupCustom(){
				$('.lookupButton .submit').click(function(){
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

						$('.IRDownloadHistoricalDataAsExcel').off().on('click', function () {

						    var fromSplitted = $("input.js-from").val().split('-');
						    var toSplitted = $("input.js-to").val().split('-');

						    var fromDate = new moment(fromSplitted[2] + '-' + fromSplitted[1] + '-' + fromSplitted[0], 'YYYY-MM-DD').format("YYYY-MM-DD");
						    var toDate = new moment(toSplitted[2] + '-' + toSplitted[1] + '-' + toSplitted[0], 'YYYY-MM-DD').format("YYYY-MM-DD");

						    var startDate = new moment(fromSplitted[2] + '-' + fromSplitted[1] + '-' + fromSplitted[0], 'YYYY-MM-DD')._d;
						    var endDate = new moment(toSplitted[2] + '-' + toSplitted[1] + '-' + toSplitted[0], 'YYYY-MM-DD')._d;

						    requestClosePriceListingData.done(function (closePrices) {

						        clientStyle.formatDate = "YYYY-MM-DD";

						        var downscaledData = getCroppedDownscaledData(closePrices.data[globalActiveListingIndex].data, startDate, endDate, 'daily');
						        var stringified = JSV.stringify(downscaledData); // Using JSV because service engine expects that.

						        var tableHeader = {
						            t_date: translations.t_date,
						            t_open: translations.t_open,
						            t_high: translations.t_high,
						            t_low: translations.t_low,
						            t_close: translations.t_close,
						            t_volume: translations.t_volume
						        };

						        var preHeader = eval(clientStyle.lookup_excelPreHeader);
						        ajax_download(getServiceEngingeURL() + "RequestClosePriceFileFromData", {
						            data: stringified,
						            headers: JSON.stringify(tableHeader),
						            preHeader: JSON.stringify(preHeader),
						            tableStyle: JSON.stringify(clientStyle.lookup_excelTableStyle),
						            apiVersion: clientApiVersion,
						            fileName: clientCustomerKeyRequired + '_historical.xlsx',
						            solutionID: clientSolutionID,
						            lcid: clientLCID,
						            customerKey: clientCustomerKeyRequired,
						            ContentType: "application/vnd.ms-excel"
						        });
						    });
						});

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
setInterval(function(){ 
    $('.submit').click(function () {
        $(".lookup-table").css('display', 'block');
    }); 
}, 2000);
     
     $(document).ajaxStop(function(){
     /* Dutch (UTF-8) initialisation for the jQuery UI date picker plugin. */
        ( function( factory ) {
            if ( typeof define === "function" && define.amd ) {

                // AMD. Register as an anonymous module.
                define( [ "../widgets/datepicker" ], factory );
            } else {

                // Browser globals
                factory( jQuery.datepicker );
            }
        }( function( datepicker ) {

        datepicker.regional.nl = {
            closeText: "Sluiten",
            prevText: "←",
            nextText: "→",
            currentText: "Vandaag",
            monthNames: [ translations.t_january, translations.t_february, translations.t_march, translations.t_april, translations.t_may, translations.t_june,
            translations.t_july, translations.t_august, translations.t_september, translations.t_october, translations.t_november, translations.t_december],
            monthNamesShort: [ "jan", "feb", "mrt", "apr", "mei", "jun",
            "jul", "aug", "sep", "okt", "nov", "dec" ],
            dayNames: [ "zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag" ],
            dayNamesShort: [ "zon", "maa", "din", "woe", "don", "vri", "zat" ],
            dayNamesMin: [ translations.t_sun, translations.t_mon, translations.t_tue, translations.t_wed, translations.t_thu, translations.t_fri, translations.t_sat],
            weekHeader: "Wk",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: "" };
        datepicker.setDefaults( datepicker.regional.nl );

        return datepicker.regional.nl;

        } ) );
         
        var $container = $('.dropdown-menu'),
        $list = $('.dropdown-menu ul'),
        listItem = $list.find('li');

        $(".dropdown .title").click(function () {
          if( $container.height() > 0) {
            closeMenu(this);
          } else {
            openMenu(this);
          }
        });

        $(".dropdown-menu li").click(function () {
          closeMenu(this);
        });

        function closeMenu(el) {
          $(el).closest('.dropdown').toggleClass("closed").find(".title").text($(el).text());
          $container.css("height", 0);
          $list.css( "top", 0 );
        }

        function openMenu(el) {
          $(el).parent().toggleClass("closed");

          $container.css({
            height: 79
          });
        }
         
         var select = $('select'),
             value = '';
         $('.dropdownData').on('click', function(){
             value = $(this).attr('data-value');
             select.find('option[value="'+ value +'"]').prop('selected', true).end().trigger('change');
             console.log(value);
             if (value == 'html') {
                 console.log('html value');
                 $('.submit').css('display', 'block');
                 $('#lookup-button').css('display', 'none');
             } else {
                 console.log('excel value');
                 $('.submit').css('display', 'none');
                 $('#lookup-button').css('display', 'block');
             }
         });
         
         
            $("#from-datepicker").datepicker("option", "dateFormat", "dd-mm-yy");
            $("#to-datepicker").datepicker("option", "dateFormat", "dd-mm-yy");

            $('#from-datepicker, #to-datepicker').on('click', function(){
                $(this).next('img').trigger('click');

            });
     });
</script>

<link rel="stylesheet" href="lookup.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("lookup.css")).Ticks.ToString()%>" />