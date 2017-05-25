<%@ Page Language="C#" AutoEventWireup="true" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .table-look {
            width: 100%;
            border-collapse: collapse;
        }
            .table-look th, .table-look td {
                padding: 3px;
                text-align: left;
            }
            .table-look th {
                font-weight: bold;
                border-bottom: 1px solid #aaa;
            }
    </style>
</head>
<body>

    <div class="IRQuoteTableOuter">This will get replaced by handlebars.js</div>
    <script id="menuTemplate" type="text/x-handlebars-template">
        <table class="IRToolQuoteTable table-look">
            {{#headers}}
            <tr>
                <th>{{t_symbol}}</th>
                <th>{{t_bid}}</th>
                <th>{{t_ask}}</th>
                <th>{{t_last}}</th>
                <th>{{t_change}}</th>
                <th>{{t_high}}</th>
                <th>{{t_low}}</th>
                <th>{{t_timestamp}}</th>
            </tr>
            {{/headers}}
            {{#stocks}}
            <tr>
                <td>{{symbol}}</td>
                <td>{{bid}}</td>
                <td>{{ask}}</td>
                <td>{{last}}</td>
                <td>{{change}}</td>
                <td>{{high}}</td>
                <td>{{low}}</td>
                <td>{{tradeTimestamp}}</td>
            </tr>
            {{/stocks}}
        </table>
    </script>

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.3.0/handlebars.min.js"></script>
    <script type="text/javascript">

        var postRequest = {
            apiversion: 1,
            solutionid: 1656,
            instrumentid: 100021,
            lcid: "1033"
        };



        function convertToJSONP(responseData)
        {
            var menuSource = $('#menuTemplate').html();
            var menuTemplate = Handlebars.compile(menuSource);
            var jsonp = {
                headers: null,
                stocks: null
            };
            jsonp.headers = {
                "t_symbol": "Symbol",
                "t_bid": "Bid",
                "t_ask": "Ask",
                "t_last": "Last",
                "t_change": "Change",
                "t_high": "High",
                "t_low": "Low",
                "t_timestamp": "Updated"
            };
            jsonp.stocks = responseData;

            return menuTemplate(jsonp);
        }

        $.ajax({
            //url: 'http://localhost:1337/ServiceEngine/api/json/reply/RequestStockData',
            url: 'http://devir.euroinvestor.com/ServiceEngine/api/json/reply/RequestStockData',
            type: 'POST',
            data: postRequest,
            success: function (responseData, textStatus, errorThrown)
            {
                console.log(responseData);
                $(".IRQuoteTableOuter").html(convertToJSONP(responseData));
            },
            error: function (responseData, textStatus, errorThrown)
            {
                $(".IRQuoteTableOuter").html("No data");
            }
        });

    </script>

</body>
</html>
