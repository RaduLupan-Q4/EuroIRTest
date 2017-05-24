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


<div id="data"></div>




<script id="entry-template" type="text/x-handlebars-template">
    <table class="IRLookupResultsTable historical-data table-look horizontal responsive">
        <tr>
            <th class="Header column-first date">Day</th>
            <th class="Header last">Last</th>
            <th class="Header change">Change</th>
            <th class="Header open">Open</th>
            <th class="Header high">High</th>
            <th class="Header low">Low</th>
            <th class="Header volume">Volume</th>
            <th class="Header cacLast">CAC 40 price</th>
            <th class="Header cac40ChangePercent">CAC 40 Change</th>
            <th class="Header sbf120Last">SBF 120 price</th>
            <th class="Header column-last sbfChange">SBF 120 Change</th>
        </tr>
        {{#each this}} 
        <tr>
            <td class="Data column-first date">{{showDateWithFormat date 'DD/MM/YYYY'}}</td>
            <td class="Data last">{{decimals closePrice}}</td>
            <td class="Header change">{{decimals changePercent}}%</td>
            <td class="Data open">{{decimals openPrice}}</td>
            <td class="Data high">{{decimals high}}</td>
            <td class="Data low">{{decimals low}}</td>
            <td class="Data volume">{{toLocal volume}}</td>
            <td class="Data cac40Last">{{decimals cac40Last}}</td>
            <td class="Data cac40ChangePercent">{{decimals cac40ChangePercent}}%</td>
            <td class="Data sbf120Last">{{decimals sbf120Last}}</td>
            <td class="Data column-last sbf120ChangePercent">{{decimals sbf120ChangePercent}}%</td>
        </tr>
        {{/each}}
       
    </table>
</script>


<%= site.newFooter("IRLookup") %>

<script type="text/javascript">

    $.getJSON("http://ir.euroinvestor.com/ServiceEngine/api/json/reply/RequestClosePriceBundle_OHLC?apiVersion=1&lcid=2057&solutionID=3210&customerKey=scor&numberOfYears=1&instrumentTypes=Listing", function (data) {

        var allData = data.data[0];

        allData.data.reverse();

        calculateChangePercent(allData);

        addIndiciesToFeed(allData);

    });


    function addDataToTemplate(allData) {

        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        $('#data').html(template(allData));
    }


    function calculateChangePercent(data) {
        var allData = data.data;
        for (var i = 0; i < allData.length; i++) {

            if (i !== allData.length - 1) {
                var currentClosePrice = allData[i].closePrice;
                var lastClosePrice = allData[i + 1].closePrice;

                var changePercent = ((currentClosePrice - lastClosePrice) / lastClosePrice) * 100;


                allData[i].changePercent = changePercent;
            } else {
                allData.splice(i, 1);
            }
        }
    }


    function addIndiciesToFeed(data) {

        var allData = data.data;

        var dataFeed = $.getJSON("http://ir.euroinvestor.com/ServiceEngine/api/json/reply/RequestClosePriceBundle_C?apiVersion=1&lcid=2057&solutionID=3210&customerKey=scor&numberOfYears=10&instrumentTypes=Index", function (data) {


            var cac40Data = data.data[0].data.reverse();
            var sbf120Data = data.data[1].data.reverse();

            for (var i = 0; i < allData.length; i++) {
                if (i !== allData.length - 1) {
                    if (allData[i].date !== undefined && allData[i].date === cac40Data[i].date) {
                        //CAC40 index
                        allData[i].cac40Last = cac40Data[i].closePrice;
                        var currentClosePrice = cac40Data[i].closePrice;
                        var lastClosePrice = cac40Data[i + 1].closePrice;
                        var changePercent = ((currentClosePrice - lastClosePrice) / lastClosePrice) * 100;
                        allData[i].cac40ChangePercent = changePercent;


                        //SBF120 index
                        allData[i].sbf120Last = sbf120Data[i].closePrice;
                        var currentClosePrice = sbf120Data[i].closePrice;
                        var lastClosePrice = sbf120Data[i + 1].closePrice;
                        var changePercent = ((currentClosePrice - lastClosePrice) / lastClosePrice) * 100;
                        allData[i].sbf120ChangePercent = changePercent;
                    }



                } else {
                    allData.splice(i, 1);
                }

            }

        });

        dataFeed.complete(function () {
            addDataToTemplate(allData);

        });

    }

</script>


<%--<link rel="stylesheet" type="text/css" media="screen" href="lookup_table.css" />--%>