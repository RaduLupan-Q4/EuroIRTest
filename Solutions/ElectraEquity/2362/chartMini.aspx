<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
    site.appendCustomCSSFont = @"<link rel=""stylesheet"" href=""https://fonts.googleapis.com/css?family=Roboto:400,700,300"" type=""text/css"" />";
%>


<%= site.newHeader("IRChartMini") %>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<script type="text/javascript">
    var activeModules = ['IRMiniquote', 'IRChartHTMLMini'];
</script>

<div class="IRMiniquoteModule"><span class="ajaxLoader">Loading</span></div>

<script id="IRMiniquoteModuleTemplate" type="text/x-handlebars-template">
    <h2>Share Price Chart</h2>
    <div class="IRChartMini table-look responsive">
        <div class="miniquoteDetailsWrapper">
            <div class="Data lastPrice"><a onclick="parent.location.href='http://www.electraequity.com/Investor-Relations/Electra/Share-Price/' ">{{decimals stocks/last}}p</a></div>
            <div class="NAVWrapper">
                <%--<div class="Data"><span class="NAVprice">4,405p</span> NAV per share at 31/03/16</div>--%>
                <div class="Data" id="navData">{{{getLastestNavData data}}}</div>
                
            </div>
        </div>
    </div>
</script>

<div class="IRChartHTMLMiniPlaceholder">
    <span class="ajaxLoader">Loading</span>
</div>


<%= site.newFooter("IRChartMini") %>


<script type="text/javascript">
    setTimeout(function(){
        //Get JSON from calender feed
        $(function () {
            $.when(requestClosePriceListingData).done(function (closePriceListingData) {
                globalAmountOfListings = closePriceListingData.data.length;
                globalEarlyDate = new moment(closePriceListingData.data[0].data[0].date).format("YYYY");
            });
            $.getJSON('http://ir.euroinvestor.com/ServiceEngine/api/json/reply/RequestClosePriceBundle_OHLC?apiVersion=1&lcid=2057&solutionID=2362&customerKey=ElectraEquity&numberOfYears=10&instrumentTypes=Peer', function (data) {
                var allData = data;
                allData.data = data.data.slice(0, 4);
                

                if (allData.data[0].storyId == -1) {
                    allData = null;
                }
                //allData.data[0].data.reverse();

                var source = $('#IRMiniquoteModuleTemplate').html();
                var template = Handlebars.compile(source);
                $('.NAVprice').html(template(allData));

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

    Handlebars.registerHelper('getLastestNavData', function (data) {
        if (data !== undefined) {
            var navData = data[0].data.reverse();
            var htmlToReturn = '<span class="NAVprice">' + navData[0].closePrice + 'p</span> NAV per share at ' + formatDateWithFormat(navData[0].date, 'DD/MM/YYYY');

            $('#navData').append(htmlToReturn);
            return;
        } else {
            return;
        }

    });



</script>



