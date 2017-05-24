<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<%  IRSite site = new IRSite();%>
<%= site.newHeader("IRMiniquoteChart") %>


<script type="text/javascript">
    var activeModules = ['IRMiniquote', 'IRMiniquoteChart'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <div class="IRMiniQuoteQuoteModule table-look responsive">
        <div class="miniquoteDetailsWrapper">
           <div class="containerData">
                <div class="currency">{{decimals stocks/last}}<span class="Data last"></span> {{stocks/currency}}</div>
               <div class="Data change {{formatColour stocks/change}}"><span class="{{showArrow stocks/change}}"></span> {{decimals stocks/change}} <span class="{{showArrow stocks/change}} arrowRight"></span>{{decimals stocks/changePercent}} % </div>
           </div>
           <div class="containerData">
                <div class="Data txtBold">{{headers/t_ticker}}: <span class="txt">{{stocks/symbol}}</span></div>
                <div class="Data txtBold txtRight">{{headers/t_market}}:
<!--                    <span class="txt">{{stocks/exchangeName}}</span>-->
                    <span class="txt">LSE</span>
                </div>
           </div>
        </div>       
    </div>

</script>
<div class="IRMiniquoteChartModule">
    <span class="ajaxLoader">Loading</span>
</div>
<script id="IRMiniquoteChartModuleTemplate" type="text/x-handlebars-template">
<div class="IRMiniquoteChartPlaceholder"></div>
    

</script>

<%= site.newFooter("IRMiniquoteChart") %>

<script type="text/javascript">
    setTimeout(function(){
        //Get JSON from calender feed
        $(function () {
            $.when(requestClosePriceListingData).done(function (closePriceListingData) {
                globalAmountOfListings = closePriceListingData.data.length;
                globalEarlyDate = new moment(closePriceListingData.data[0].data[0].date).format("YYYY")
            });
            $.getJSON('http://ir.euroinvestor.com/ServiceEngine/api/json/reply/RequestClosePriceBundle_OHLC?apiVersion=1&lcid=2057&solutionID=2362&customerKey=ElectraEquity&numberOfYears=10&instrumentTypes=Peer', function (data) {
                var allData = data;
                allData.data = data.data.slice(0, 4);
                

                if (allData.data[0].storyId == -1) {
                    allData = null;
                }

                var source = $('#IRMiniquoteModuleTemplate').html();
                //var template = Handlebars.compile(source);
                //$('.NAVprice').html(template(allData));

            }); //getJSON
        }); //function
    }, 1000);
    
    var customXApplied = false;

    function prepareCustomX() {
        if (!customXApplied) {
            if (typeof ($('.Data.lastPrice').html()) != 'undefined') {
                $.getJSON('http://ir.euroinvestor.com/ServiceEngine/api/json/reply/RequestClosePriceBundle_C?apiVersion=1&lcid=2057&solutionID=2362&customerKey=ElectraEquity&numberOfYears=10&instrumentTypes=Peer&instrumentTypes=Index', function (data) {
                    var items = data.data[0].data;

                    //Identify last object
                    var lastIndex = items.length - 1;
                    var lastItem = items[lastIndex];

                    //Get values
                    var lastClosePrice = lastItem.closePrice;
                    var lastPriceDate = lastItem.date;

                    // Format date output
                    var date = new Date(lastPriceDate);
                    var formatedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(); // DD/MM/YYYY

                    //Function to add thousand "," seperator
                    function addCommas(nStr) {
                        nStr += '';
                        var x = nStr.split('.');
                        var x1 = x[0];
                        var x2 = x.length > 1 ? '.' + x[1] : '';
                        var rgx = /(\d+)(\d{3})/;
                        while (rgx.test(x1)) {
                            x1 = x1.replace(rgx, '$1' + ',' + '$2');
                        }
                        return x1 + x2;
                    }

                    //Put values in miniquote
                    $(".NAVprice").html(addCommas(lastClosePrice));
                    $(".NAVdate").html(formatedDate);
                })
                customXApplied = true;
            }
        }
    }
    $(function () {
        setInterval(function () {
            prepareCustomX();

        }, 200);
    });


</script>