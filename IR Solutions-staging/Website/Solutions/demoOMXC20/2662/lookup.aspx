<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%
    IRSite site = new IRSite();
      site.appendCustomCSSFont = @"<link rel=""stylesheet"" type=""text/css"" href=""//fonts.googleapis.com/css?family=Fira+Sans:400,500,700,300""/>";
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
                <label>From</label>
                <input class="js-from" value="15-07-2015" id="datepicker-from" type="text" style="">
            </div>
            <div>
                <label>To</label>
                <input class="js-to" value="15-07-2016" id="datepicker-to" type="text">
            </div>
            <div class="lookupSubmitButtonWrapper">
            <div class="submit" style="">Search</div>
            </div>
            <div class="excelButtonWrapper"><div class="downloadHistoricalData IRDownloadHistoricalDataAsExcel buttonLook" value="Excel">Excel</div></div>

        </form>
        <iframe src="about:blank" class="lookup-table" id="lookupIframe"></iframe>
    </script>

    <script id="IRLookupTableTemplate" type="text/x-handlebars-template">
        <table class="IRLookupResultsTable table-look horizontal responsive fixedHeader">
            <tr>
                <th class="Header column-first date">{{headers/t_date}}</th>
                <th class="Header open">{{headers/t_open}}</th>
                <th class="Header high">{{headers/t_high}}</th>
                <th class="Header low">{{headers/t_low}}</th>
                <th class="Header">{{headers/t_close}}</th>
                <th class="Header column-last volume">{{headers/t_volume}}</th>
            </tr>
            </table>
            <table class="IRLookupResultsTable table-look horizontal responsive resultsList">
            {{#each closePrices}}
            <tr>
                <td class="Data column-first date">{{date}}</td>
                <td class="Data price">{{decimal openPrice 2}}</td>
                <td class="Data high">{{decimal high 2}}</td>
                <td class="Data low">{{decimal low 2}}</td>
                <td class="Data">{{decimal closePrice 2}}</td>
                <td class="Data column-last volume">{{volume}}</td>
            </tr>
            {{/each}}
        </table>
</script>


<%= site.newFooter("IRLookup") %>


<script type="text/javascript">
        function updateTimeframe(){
            var graphUrlTemplate = "lookup.aspx?mode=list&from=__FROM__&to=__TO__&frequency=Daily&listing=0";
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
</script>
<script>
	$(document).on('load', function(){
		$('.fixedHeader tr th').each(function(){
			var item = $(this);
			var idx = item.index();
			item.width($('.resultsList tr').first().children().eq(idx).width());
		})
	})
	
	$(window).on('resize', function(){
		$('.fixedHeader tr th').each(function(){
			var item = $(this);
			var idx = item.index();
			item.width($('.resultsList tr').first().children().eq(idx).width());
		})
	})
</script>
<script type="text/javascript" src="inc/postHeight.js"></script>
<link rel="stylesheet" href="lookup.css" />
