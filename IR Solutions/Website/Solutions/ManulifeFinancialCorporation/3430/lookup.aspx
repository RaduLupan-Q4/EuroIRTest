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
    <div class="IRChartLookupPlaceholder" style="display: none"></div>

    <form id="lookup-table-form">
        <div style="visibility: hidden; display: none;">
            <label>From</label>
            <input class="js-from" value="<%=DateTime.Now.AddYears(0).ToString("dd-MM-yyyy")%>" id="datepicker-from" type="text" style="">
        </div>
        <div>
            <%--<label>To</label>--%>
            <%--<input class="js-to" value="<%=DateTime.Now.ToString("dd-MM-yyyy")%>" id="datepicker-to" type="text" style="visibility:hidden;">--%>
            <div class="from-date">
                {{{selectFromMonth 'MMMM'}}}
                {{{selectFromDay}}}
                {{{selectToYear}}}
            </div>


        </div>
        <%--
			<div class="lookupSubmitButtonWrapper">
			<div class="submit" style="">Search</div>
			</div>
            <div class="excelButtonWrapper"><div class="downloadHistoricalData IRDownloadHistoricalDataAsExcel buttonLook" value="Excel">Excel</div></div>--%>
    </form>
    <iframe src="about:blank" class="lookup-table" id="lookupIframe"></iframe>
</script>

<script id="IRLookupTableTemplate" type="text/x-handlebars-template">

    <h3 class="tableHeader">Results</h3>
    <table class="IRLookupTable table-look responsive columnWrapper columnLeftWrapper">
        {{#each closePrices}}
                <tr>
                    <th class="column-first Header">Date Requested</th>
                    <td class="column-last Data fromDate">{{date}}</td>
                </tr>
        <tr>
            <th class="column-first Header">Closing Price</th>
            <td class="column-last Data">{{showCurrency}} {{decimal closePrice 2}}</td>
        </tr>
        <tr>
            <th class="column-first Header">Volume</th>
            <td class="column-last Data volume">{{toLocal volume}}</td>
        </tr>
        <tr>
            <th class="column-first Header">Split Adjustment Factor</th>
            <td class="column-last Data splitAdjustmentFactor">1:1</td>
        </tr>
        {{/each}}
    </table>

    <table class="IRLookupTable table-look responsive columnWrapper columnRightWrapper">
        {{#each closePrices}}
                <tr>
                    <th class="column-first Header">Open</th>
                    <td class="column-last Data dayOpen">{{showCurrency}} {{decimal openPrice 2}}</td>
                </tr>
        <tr>
            <th class="column-first Header">Day's High</th>
            <td class="column-last Data dayHigh">{{showCurrency}} {{decimal high 2}}</td>
        </tr>
        <tr>
            <th class="column-first Header">Day's Low</th>
            <td class="column-last Data dayLow">{{showCurrency}} {{decimal low 2}}</td>
        </tr>
        <tr>
            <th class="column-first Header"></th>
            <td class="column-last Data"></td>
        </tr>
        {{/each}}
    </table>

</script>


<%= site.newFooter("IRLookup") %>

<script type="text/javascript">

    function updateTimeframe() {
        
        var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };

        var listing = '';
        try {
            listing = getUrlParameter('listing');
        }
        catch (err) {
        }
        if (listing != undefined) {
            $('#lookupIframe').attr('src', 'lookup.aspx?listing=' + listing);
        } else {
            $('#lookupIframe').attr('src', 'lookup.aspx');
        }

        var graphUrlTemplate = "lookup.aspx?mode=list&from=__FROM__&to=__TO__&frequency=Daily&listing=" + listing;
        
        var fromSplitted = (parseInt($("#from-month").val()) + 1) + '-' + $("#from-day").val() + '-' + $("#to-year").val();
        var toSplitted = (parseInt($("#from-month").val()) + 1) + '-' + $("#from-day").val() + '-' + $("#to-year").val();

        var graphUrl = graphUrlTemplate.replace(/__FROM__/, (fromSplitted)).replace(/__TO__/, (toSplitted));
        //console.log('fromSplitted graphUrl:' + graphUrl);

        $('#lookupIframe').attr('src', graphUrl);
    }
    function initializeLookupCustom() {
        $('#lookup-table-form div.submit').click(function () {
            updateTimeframe();
        });
        if (getParameterByName("mode") === "list") {
            $('body').css('overflow-y', 'none');
            $('.disclaimer-IRLookup').css('display', 'none');
        } else {
            updateTimeframe();
        }
        
    }
    $(function () {
        var initiatedLookup = false;
        setInterval(function () {
            if (initiatedLookup == false) {
                try {
                    if ($('.IRChartLookupPlaceholder').html().length > 10 && initiatedLookup == false) { //If main Lookup handlebars loaded
                        initializeLookupCustom();
                        initiatedLookup = true;

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

                } catch (err) {
                }
                try {
                    if ($('.IRLookupResultsTable').html().length > 200) {//If main LookupList handlebars loaded
                        initializeLookupCustom();
                        initiatedLookup = true;
                    }
                }
                catch (err) {
                }
            }

            
        }, 200);
        setInterval(function () {
            $('iframe').each(function () {

                if ($(this).attr('scrolling') == 'no') {
                    $(this).attr('scrolling', 'yes');
                    $(this).attr("src", $(this).attr("src"));
                }
            });
        }, 2000);
        /**/
    });



    setTimeout(function () {
        
        $('.from-date').on('change', function () {
            updateTimeframe();

        });

    }, 1100);
	
	function previousDay() {
        var date = new Date();

        var currentDay = date.getDate();

         $("#from-day").val(currentDay-1);
    }
   $(function () {
        window.setTimeout(previousDay, 500);
    })
    
</script>


<script src="inc/customLookup.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/customLookup.js")).Ticks.ToString()%>"></script>
<link rel="stylesheet" href="lookup.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("lookup.css")).Ticks.ToString()%>" />
