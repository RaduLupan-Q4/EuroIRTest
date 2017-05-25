<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();

%>
<%= site.newHeader("IRTrades") %>


<div class="IRTradesModule"></div>
<div id ="DownloadTrades" style=";margin-top:6px;cursor:pointer;"><span style="font-family:'DINWeb-Bold';color:#0e78be;margin-left:10px">All trades during today <img height="16" width="16" style="height:16px;width:16px" src="images/excelicon.gif"/></span></div>
<script type="text/javascript">
    var activeModules = ['IRTrades'];
</script>

<script id="IRTradesTemplate" type="text/x-handlebars-template">

    <h2><b>Latest share trades</b></h2>
    <br />

    <div class="">
        <div id="prevClose">{{stocks/prevClose}}</div>
        {{stocks/changePercent}}
    </div>
    <table class="IRTradesModule table-look horizontal responsive" id="scroll-table">
        <thead>
            <tr>
                <th class="Trades Header column-first updated" style="text-align: left;">
                {{headers/t_time}}
                <th class="Trades Header price">{{headers/t_last}}</th>
                <th class="Trades Header volume">{{headers/t_volume}}</th>
            </tr>
        </thead>
        <tbody style="width: 100%;">
            {{#data}}
            {{#data}}
            <tr>
                <td class="Trades Data column-first updated" datetime="{{showDateTime timestamp}}">{{showTime timestamp}}</td>
                <td class="Trades Data price tradePriceUpDown" tradePrice="{{tradePrice}}"><span>{{thousandSeperatorAndTwoDecimals tradePrice}}</span></td>
                <td class="Trades Data volume">{{thousandSeperatorAndNoDecimals tradeVolume}}</td>
            </tr>
            {{/data}}
            {{/data}}
        </tbody>
    </table>
	
</script>

<%= site.newFooter("IRTrades") %>


<script type="text/javascript" src="/inc/scripts/jsv.js?v=635793031199216579"></script>


<script type="text/javascript">

    $(document).ready(function () {
        setInterval(function () {
		
			var lastPriceTDs=$('td.price');
			var numberOfPriceTDs=lastPriceTDs.length;
			for(count=0;count<(numberOfPriceTDs-1);count++)
			{
				var thisLastPriceTD=$(lastPriceTDs[count]);
				var nextLastPriceTD=$(lastPriceTDs[count+1]);
				if(parseFloat(thisLastPriceTD.attr('tradePrice'))<parseFloat(nextLastPriceTD.attr('tradePrice')))
				{
					thisLastPriceTD.find('span').addClass('tradeDown');
				}
				if(parseFloat(thisLastPriceTD.attr('tradePrice'))>parseFloat(nextLastPriceTD.attr('tradePrice')))
				{
					thisLastPriceTD.find('span').addClass('tradeUp');
				}
				if(parseFloat(thisLastPriceTD.attr('tradePrice'))==parseFloat(nextLastPriceTD.attr('tradePrice')))
				{
					thisLastPriceTD.find('span').addClass('tradeUnchanged');
				}
			}
			$(lastPriceTDs[numberOfPriceTDs-1]).find('span').addClass('tradeUnchanged');
			
		
		},200);
		
		
		setTimeout(function () {
            $('#DownloadTrades').click(function () {

                var downscaledData = [];
                
                $.when(requestTradesData).done(function (tradesData) {
                    for (i = 0; i < tradesData.data.length; i++)
                    {
                        downscaledData.push({ Time: moment(tradesData.data[i].timestamp).format("DD-MM-YYYY HH:mm:ss"), Last: tradesData.data[i].tradePrice, Volume: tradesData.data[i].tradeVolume });
                    }
                });
                
                stringifiedData = JSV.stringify(downscaledData);

                ajax_download(getServiceEngingeURL() + "RequestTradesFileFromData", {
                    data: stringifiedData,
                    tableStyle: JSON.stringify(clientStyle.lookup_excelTableStyle),
                    apiVersion: clientApiVersion,
                    fileName: clientCustomerKeyRequired + '_trades.xlsx',
                    solutionID: clientSolutionID,
                    lcid: clientLCID,
                    customerKey: clientCustomerKeyRequired,
                    ContentType: "application/vnd.ms-excel"
                });
            });
        }, 1000);
        function ajax_download(url, data) {
            debugStep("ajax_download");
            var $iframe,
                iframe_doc,
                iframe_html;

            if (($iframe = $('#download_iframe')).length === 0) {
                $iframe = $("<iframe id='download_iframe' style='display: none' src='about:blank'></iframe>").appendTo("body");
            }

            iframe_doc = $iframe[0].contentWindow || $iframe[0].contentDocument;
            if (iframe_doc.document) {
                iframe_doc = iframe_doc.document;
            }

            iframe_html = "<html><head></head><body><form method='POST' action='" +
                          url + "'>"

            Object.keys(data).forEach(function (key) {
                iframe_html += "<input type='hidden' name='" + key + "' value='" + data[key] + "'>";
            });

            iframe_html += "</form></body></html>";

            iframe_doc.open();
            iframe_doc.write(iframe_html);
            $(iframe_doc).find('form').submit();
        }

	});

</script>
<!--
    Handlebars.registerHelper('showTradeChange', function (tradePrice) {
        var prevClose = globalRawStockData[globalActiveListingIndex].prevClose;
        return formatDecimal(tradePrice - prevClose);
    });
    Handlebars.registerHelper('showTradeChangePercentage', function (tradePrice) {
        var prevClose = globalRawStockData[globalActiveListingIndex].prevClose;
        return formatDecimal(((tradePrice - prevClose) / prevClose) * 100);
    });-->

<script type="text/javascript" src="inc/helpers.js?a=4"></script>