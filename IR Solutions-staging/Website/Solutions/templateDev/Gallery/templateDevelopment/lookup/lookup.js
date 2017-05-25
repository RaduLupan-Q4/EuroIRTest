$(document).ready(function(){
   function updateTimeframe(){
            var graphUrlTemplate = "lookup.aspx?mode=list&from=__FROM__&to=__TO__&frequency=Daily&listing=0";
			var fromSplitted = $("input.js-from").val().split('-');
			var toSplitted = $("input.js-to").val().split('-');

			console.log('$("input.js-from").val(): ' + $("input.js-from").val());
			console.log('$("input.js-to").val(): ' + $("input.js-to").val());

			var graphUrl = graphUrlTemplate.replace(/__FROM__/, (fromSplitted[0]+'-'+fromSplitted[1]+'-'+fromSplitted[2])).replace(/__TO__/, (toSplitted[0]+'-'+toSplitted[1]+'-'+toSplitted[2]));
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
								dateFormat: "yy-mm-dd"
							});
							$("#datepicker-to").datepicker({
								dateFormat: "yy-mm-dd"
							});
							$('.downloadHistoricalDataHTML').on('click', function () {
							    console.log('download clicked');


							    var startDate = new moment(globalChartFromDate, 'YYYY-MM-DD');
							    var endDate = new moment(globalChartToDate, 'YYYY-MM-DD');

							    requestClosePriceListingData.done(function (closePrices) {

							        var url = window.location.href;
							        url += (url.indexOf("?") === -1) ? "?" : "&";
							        url += "mode=list&from=" + startDate.format("YYYY-MM-DD") + "&to=" + endDate.format("YYYY-MM-DD") + "&frequency=daily";
							        url += "&listing=" + globalActiveListingIndex;
							        window.open(url.replace("chart.aspx", "lookup.aspx"), "_blank", "height=400,location=no,toolbars=no,resizable=yes,scrollbars=yes");

							    });

							});

							$('.IRDownloadHistoricalDataAsExcel').off().on('click', function () {

							    var fromSplitted = $("input.js-from").val().split('-');
							    var toSplitted = $("input.js-to").val().split('-');


							    console.log("NICE: "  + fromSplitted[2] + '-' + fromSplitted[1] + '-' + fromSplitted[0]);
							    console.log(toSplitted[2] + '-' + toSplitted[1] + '-' + toSplitted[0]);


							    var fromDate = new moment(fromSplitted[0] + '-' + fromSplitted[1] + '-' + fromSplitted[2], 'YYYY-MM-DD').format("YYYY-MM-DD");
							    var toDate = new moment(toSplitted[0] + '-' + toSplitted[1] + '-' + toSplitted[2], 'YYYY-MM-DD').format("YYYY-MM-DD");

							    var startDate = new moment(fromSplitted[0] + '-' + fromSplitted[1] + '-' + fromSplitted[2], 'YYYY-MM-DD')._d;
							    var endDate = new moment(toSplitted[0] + '-' + toSplitted[1] + '-' + toSplitted[2], 'YYYY-MM-DD')._d;
                                
							    requestClosePriceListingData.done(function (closePrices) {
							        
							        var downscaledData = getCroppedDownscaledData(closePrices.data[globalActiveListingIndex].data, startDate, endDate, 'daily');
							        var stringified = JSV.stringify(downscaledData); // Using JSV because service engine expects that.
							        console.log(downscaledData);
							        console.log(downscaledData[0]);
							        console.log(downscaledData[1]);
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
        function submittable() {
            console.log("submittable()");
            var data = $('table.lookup-table').first(); //Only one table
            var csvData = [];
            var tmpArr = [];
            var tmpStr = '';
            data.find("tr").each(function () {
                if ($(this).find("th").length) {
                    $(this).find("th").each(function () {
                        tmpStr = $(this).text().replace(/"/g, '""');
                        tmpArr.push(tmpStr);
                    });
                    csvData.push(tmpArr);
                } else {
                    tmpArr = [];
                    $(this).find("td").each(function () {
                        if ($(this).text().match(/^-{0,1}\d*\.{0,1}\d+$/)) {
                            tmpArr.push(parseFloat($(this).text()));
                        } else {
                            tmpStr = $(this).text().replace(/"/g, '""');
                            tmpArr.push(tmpStr);
                        }
                    });
                    csvData.push(tmpArr.join(','));
                }
            });
            var output = csvData.join('\n');
            $('#CsvData').val(output);
            $('#excelform').submit();
        }
 
});